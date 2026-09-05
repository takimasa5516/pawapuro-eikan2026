import React, { useState } from 'react';
import { RED_ABILITIES_DATA, RedAbilityCorrelation } from '../data/redAbilities';
import { ShieldAlert, Check, X, Info, AlertTriangle } from 'lucide-react';

export const RedAbilityTab: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<RedAbilityCorrelation | null>(null);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-700 via-red-600 to-amber-700 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>🛡️</span> 赤特殊能力打消し相関マトリクス（消去・上書き一覧）
            </h2>
            <p className="text-xs sm:text-sm text-rose-100 mt-1">
              特別指導・公式戦試合・特殊能力の本・合宿による赤特消去の可否と対応青特の完全データ！
            </p>
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/20 text-xs">
            <span>最凶赤特:</span>
            <span className="font-extrabold text-amber-300">ムード×（最優先消去必須）</span>
          </div>
        </div>
      </div>

      {/* Critical Advice Box */}
      <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-200 dark:border-amber-800 text-xs space-y-2 text-amber-900 dark:text-amber-200">
        <h4 className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
          <AlertTriangle className="w-4 h-4 text-amber-500" /> 赤特消去における超重要ポイント
        </h4>
        <p>
          ・<b>ムード×</b>：ベンチにいるだけでも味方全員のミート・パワーが低下する最悪の赤特。最優先で消去しましょう。
        </p>
        <p>
          ・<b>チームプレイ×</b>：特別指導では消去できません（試合・合宿・本で消去可能）。ただし「自動操作中のバントをしづらくなる」効果があるため、4番打者など強打者は消さずに残しても有利に働きます！
        </p>
        <p>
          ・<b>特別指導マス（6月・9月）</b>：赤特を消す最大のチャンス。スケジュール調整して確実に青マスを踏みましょう。
        </p>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="py-3 px-4">赤特殊能力</th>
                <th className="py-3 px-2 text-center">相関</th>
                <th className="py-3 px-4">打ち消し青特殊能力</th>
                <th className="py-3 px-3 text-center">特別指導</th>
                <th className="py-3 px-3 text-center">試合</th>
                <th className="py-3 px-3 text-center">特能の本</th>
                <th className="py-3 px-3 text-center">合宿</th>
                <th className="py-3 px-4">備考・特徴</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
              {RED_ABILITIES_DATA.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                >
                  <td className="py-3 px-4">
                    <span className="badge-red px-2.5 py-1 rounded-lg text-xs inline-block">
                      {item.redName}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-center text-slate-400 font-bold">
                    ➔
                  </td>
                  <td className="py-3 px-4">
                    <span className="badge-blue px-2.5 py-1 rounded-lg text-xs inline-block font-bold">
                      {item.blueName}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    {item.specialGuide ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                        ○
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold">
                        ×
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                      ○
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                      ○
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                      ○
                    </span>
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-600 dark:text-slate-400">
                    <p>{item.description}</p>
                    {item.note && (
                      <p className="mt-1 font-semibold text-amber-700 dark:text-amber-400">
                        ※ {item.note}
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
