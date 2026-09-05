import React, { useState, useMemo } from 'react';
import { TRAINING_CARDS, BATTLE_TACTICS_EXP, TrainingCard } from '../data/trainings';
import { Dumbbell, Swords, Search, Flame, Sparkles, Filter, Info } from 'lucide-react';

export const TrainingTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'cards' | 'camp' | 'tactics'>('cards');
  const [cardCategory, setCardCategory] = useState<string>('すべて');
  const [campSearch, setCampSearch] = useState<string>('');

  const categories = ['すべて', 'ミート', 'パワー', '走力', '肩力', '守備', '捕球', '球速', 'コントロール', 'スタミナ', '変化球', '特殊練習'];

  const filteredCards = useMemo(() => {
    return TRAINING_CARDS.filter(c => {
      if (cardCategory !== 'すべて' && c.category !== cardCategory) return false;
      return true;
    });
  }, [cardCategory]);

  const filteredCampCards = useMemo(() => {
    if (!campSearch) return TRAINING_CARDS;
    const q = campSearch.toLowerCase();
    return TRAINING_CARDS.filter(c => {
      const matchCard = c.name.toLowerCase().includes(q);
      const matchAbil = c.campAbilities.some(a => a.toLowerCase().includes(q));
      return matchCard || matchAbil;
    });
  }, [campSearch]);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-700 to-emerald-700 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>🏋️</span> 通常練習効果 ＆ 合宿習得青特 ＆ 試合戦術経験値
            </h2>
            <p className="text-xs sm:text-sm text-teal-100 mt-1">
              進行アイコン別の獲得経験値・合宿で習得可能な特殊能力カード対応・打撃戦術ごとの経験値完全データ！
            </p>
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/20 text-xs">
            <span>育成鉄則:</span>
            <span className="font-extrabold text-amber-300">投手は打撃・走力経験値が半減</span>
          </div>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-700 pb-2">
        <button
          onClick={() => setActiveSubTab('cards')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubTab === 'cards'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
          }`}
        >
          <Dumbbell className="w-4 h-4" />
          <span>練習アイコン別 獲得経験値</span>
        </button>
        <button
          onClick={() => setActiveSubTab('camp')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubTab === 'camp'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>合宿で取得できる特殊能力</span>
        </button>
        <button
          onClick={() => setActiveSubTab('tactics')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubTab === 'tactics'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
          }`}
        >
          <Swords className="w-4 h-4" />
          <span>試合戦術・ミート設定経験値</span>
        </button>
      </div>

      {/* SubTab 1: 練習アイコン別獲得経験値 */}
      {activeSubTab === 'cards' && (
        <div className="space-y-4">
          {/* Important Rules Note */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-slate-100">① 進行アイコンの数字倍率</span>
              <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                カードの数字（1〜5）に比例して経験値が増加。5進行カードは最速成長の鍵！
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-slate-100">② 天候・グラウンドLv補正</span>
              <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                晴れ＞曇り＞雨・雪。グラウンドレベルが高いほど基礎経験値にボーナス補正。
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-slate-100">③ 投手半減ルール＆方針</span>
              <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                投手はミート・パワー・走力の経験値が半減。打撃重視で特打、守備重視で特守が出現。
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-bold text-slate-500">系統:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCardCategory(cat)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  cardCategory === cat
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {card.category}
                    </span>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                      {card.name}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-slate-400">Lv.{card.level}</span>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                  <span className="text-[11px] font-bold text-slate-500">獲得経験値（基礎値）:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {Object.entries(card.expGains).map(([stat, val]) => (
                      <span key={stat} className="text-xs font-black text-emerald-700 dark:text-emerald-400">
                        {stat} +{val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab 2: 合宿習得特殊能力 */}
      {activeSubTab === 'camp' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="特殊能力名（例: アベレージヒッター、威圧感、ノビ、キャッチャー）または練習カード名で検索..."
                value={campSearch}
                onChange={(e) => setCampSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              合宿中（7月・12月）に各カードを実行することで取得できる青特殊能力の完全一覧です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredCampCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 space-y-2.5"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                      {card.category}
                    </span>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                      {card.name}
                    </h3>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    合宿で習得可能な青特 ({card.campAbilities.length}種):
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {card.campAbilities.map((abil, i) => {
                      const isHighlighted = campSearch && abil.toLowerCase().includes(campSearch.toLowerCase());
                      return (
                        <span
                          key={i}
                          className={`text-xs px-2 py-0.5 rounded border transition-colors ${
                            isHighlighted
                              ? 'bg-amber-200 text-amber-900 border-amber-500 font-black'
                              : 'badge-blue'
                          }`}
                        >
                          {abil}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab 3: 試合戦術・ミート設定経験値 (IMG_2205完全対応) */}
      {activeSubTab === 'tactics' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Swords className="w-5 h-5 text-rose-500" /> 打撃戦術・ミート設定一覧表（試合経験値）
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              試合での打席指示によって各選手に付与される経験値ポイント一覧（1試合5打席まで累積）。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                    <th className="py-2.5 px-3">行動 / 設定</th>
                    <th className="py-2.5 px-3">弾道</th>
                    <th className="py-2.5 px-3">ミート</th>
                    <th className="py-2.5 px-3">パワー</th>
                    <th className="py-2.5 px-3">走力</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                  {BATTLE_TACTICS_EXP.map((tac, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                      <td className="py-2 px-3 font-bold flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${tac.category === '打撃戦術' ? 'bg-rose-500' : 'bg-blue-500'}`} />
                        {tac.name}
                      </td>
                      <td className="py-2 px-3">{tac.trajectory ? `+${tac.trajectory}` : '-'}</td>
                      <td className="py-2 px-3">{tac.meet ? `+${tac.meet}` : '-'}</td>
                      <td className="py-2 px-3">{tac.power ? `+${tac.power}` : '-'}</td>
                      <td className="py-2 px-3">{tac.speed ? `+${tac.speed}` : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Strategy Highlights from IMG_2205 */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                <b>セーフティバント:</b> 打者・走者ともにミートと走力の両方に150pt！
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/40 p-2.5 rounded-xl border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200">
                <b>待て＆ミート設定:</b> 「待て」は戦術経験値0だがミート設定経験値(150〜300)は取得可能！
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
                <b>走者経験値:</b> 進塁時に獲得。盗塁指示で進塁すれば走力に300pt！
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
