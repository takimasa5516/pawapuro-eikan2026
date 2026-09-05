import React, { useState } from 'react';
import { 
  WORLD_CUP_REQUIREMENTS, 
  WORLD_CUP_RESULTS, 
  MANAGERS_DATA, 
  CONDITION_MODIFIERS 
} from '../data/managerWorldCup';
import { Trophy, Users, HeartPulse, CheckCircle2, Flame, Award, Sparkles } from 'lucide-react';

export const WorldCupManagerTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'worldcup' | 'manager' | 'condition'>('worldcup');

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>🏆</span> 日本代表（世界大会）選出条件 ＆ マネージャー特性 ＆ 試合効果
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 mt-1">
              世界大会代表入り条件・大会結果ボーナス・マネージャー持ち物別効果・調子による能力補正！
            </p>
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/20 text-xs">
            <span>最優秀マネ:</span>
            <span className="font-extrabold text-white">赤ペン（学年効率UP）</span>
          </div>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-700 pb-2">
        <button
          onClick={() => setActiveSection('worldcup')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSection === 'worldcup'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>世界大会（日本代表）選出条件</span>
        </button>
        <button
          onClick={() => setActiveSection('manager')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSection === 'manager'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>マネージャーの特性</span>
        </button>
        <button
          onClick={() => setActiveSection('condition')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSection === 'condition'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
          }`}
        >
          <HeartPulse className="w-4 h-4" />
          <span>調子補正 ＆ 試合効果</span>
        </button>
      </div>

      {/* 1. 世界大会選出条件 */}
      {activeSection === 'worldcup' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORLD_CUP_REQUIREMENTS.map((req) => (
              <div
                key={req.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-0.5 rounded font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                    条件 {req.id}（{req.target}）
                  </span>
                </div>
                <h3 className="font-black text-base text-slate-900 dark:text-slate-100">
                  {req.condition}
                </h3>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {req.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 大会結果別効果 */}
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-3">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> 世界大会の結果とチームへの影響（3月15日判定）
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {WORLD_CUP_RESULTS.map((res, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-2"
                >
                  <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100 min-w-[70px]">
                    {res.rank}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 font-medium text-right">
                    {res.effect}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. マネージャーの特性 */}
      {activeSection === 'manager' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MANAGERS_DATA.map((mgr, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                  <h3 className="font-black text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span>🎒</span> {mgr.type}
                  </h3>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                    {mgr.recommend}
                  </span>
                </div>

                <div className="mt-3 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
                  <span className="text-[11px] font-bold text-amber-900 dark:text-amber-300">主効果:</span>
                  <p className="text-xs font-extrabold text-amber-800 dark:text-amber-200 mt-0.5">
                    {mgr.effect}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                  {mgr.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. 調子補正＆試合効果 */}
      {activeSection === 'condition' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 space-y-3">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-rose-500" /> 調子によるステータス増減一覧（IMG_2199）
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              試合中の選手の調子によって、全能力に以下の数値が加減算されます。
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                    <th className="py-2.5 px-3 text-left">調子</th>
                    <th className="py-2.5 px-2">弾道</th>
                    <th className="py-2.5 px-2">ミート</th>
                    <th className="py-2.5 px-2">パワー</th>
                    <th className="py-2.5 px-2">球速</th>
                    <th className="py-2.5 px-2">コン</th>
                    <th className="py-2.5 px-2">スタミナ</th>
                    <th className="py-2.5 px-2">変化量</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-bold">
                  {CONDITION_MODIFIERS.map((cm, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                      <td className="py-2.5 px-3 text-left font-black">{cm.condition}</td>
                      <td className="py-2.5 px-2">{cm.trajectory}</td>
                      <td className="py-2.5 px-2">{cm.meet}</td>
                      <td className="py-2.5 px-2">{cm.power}</td>
                      <td className="py-2.5 px-2">{cm.speed}km/h</td>
                      <td className="py-2.5 px-2">{cm.control}</td>
                      <td className="py-2.5 px-2">{cm.stamina}</td>
                      <td className="py-2.5 px-2">{cm.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
