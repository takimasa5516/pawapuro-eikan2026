import React, { useState } from 'react';
import { PERSONALITIES_DATA, Personality } from '../data/personalities';
import { Sparkles, Swords, Megaphone, Crown, TrendingUp, ChevronRight } from 'lucide-react';

export const PersonalityTab: React.FC = () => {
  const [selectedPersonality, setSelectedPersonality] = useState<Personality>(PERSONALITIES_DATA[0]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>✨</span> 選手の性格別特徴・固有戦術・伝令・キャプテンまとめ
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 mt-1">
              栄冠ナインの試合・育成を左右する性格システム完全攻略（ステータス成長補正・学年別戦術・伝令効果・キャプテンイベント）
            </p>
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/20 text-xs">
            <span>最重要性格:</span>
            <span className="font-extrabold text-amber-300">内気(魔物) / 天才肌</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Selection Buttons + Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Personality Buttons List */}
        <div className="lg:col-span-1 space-y-2">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 px-1">性格一覧を選択</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2">
            {PERSONALITIES_DATA.map((p) => {
              const isSelected = selectedPersonality.name === p.name;
              return (
                <button
                  key={p.name}
                  onClick={() => setSelectedPersonality(p)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-base">{p.name}</span>
                      {p.name === '内気' && (
                        <span className="text-[10px] bg-rose-500 text-white px-1.5 py-0.2 rounded font-bold">
                          魔物
                        </span>
                      )}
                      {p.name === '天才肌' && (
                        <span className="text-[10px] bg-amber-400 text-amber-950 px-1.5 py-0.2 rounded font-bold">
                          急成長
                        </span>
                      )}
                    </div>
                    <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                      伸び: {p.statGrowth.join(', ')}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 hidden sm:block ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Quick Summary Box */}
          <div className="bg-amber-50 dark:bg-amber-950/40 rounded-xl p-4 border border-amber-200 dark:border-amber-800/60 text-xs space-y-2 text-amber-900 dark:text-amber-200">
            <h4 className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-500" /> 性格選びの黄金ルール
            </h4>
            <p>
              ・<b>内気</b>：2・3年時に発動できる「魔物」はどんな名門相手でも逆転可能。スタメンに1〜2名は必ず確保。
            </p>
            <p>
              ・<b>天才肌</b>：全ステータス急成長＆才能開花。エース投手や中軸打者に最適。
            </p>
            <p>
              ・<b>キャプテン</b>：やんちゃ（グラウンドLv+1）、内気（学力UP）、お調子者（テンションUP）が特におすすめ！
            </p>
          </div>
        </div>

        {/* Right Column: Detailed View of Selected Personality */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-6">
            {/* Title & Summary */}
            <div className="border-b border-slate-100 dark:border-slate-700 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                    {selectedPersonality.name}
                  </h3>
                  <span className="text-xs text-slate-400">（{selectedPersonality.kana}）</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                  <TrendingUp className="w-3.5 h-3.5" />
                  伸びやすい能力: {selectedPersonality.statGrowth.join('、')}
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 font-medium">
                {selectedPersonality.summary}
              </p>
            </div>

            {/* 1. 固有戦術（学年別） */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
                <Swords className="w-4 h-4 text-rose-500" /> 固有戦術（学年別）
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">1年生</span>
                  <div className="font-extrabold text-sm text-slate-900 dark:text-slate-100 mt-1">
                    {selectedPersonality.tactics.year1.name}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {selectedPersonality.tactics.year1.desc}
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">2年生</span>
                  <div className="font-extrabold text-sm text-slate-900 dark:text-slate-100 mt-1">
                    {selectedPersonality.tactics.year2.name}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {selectedPersonality.tactics.year2.desc}
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">3年生</span>
                  <div className="font-extrabold text-sm text-slate-900 dark:text-slate-100 mt-1">
                    {selectedPersonality.tactics.year3.name}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {selectedPersonality.tactics.year3.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. 伝令効果（攻撃・守備） */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
                <Megaphone className="w-4 h-4 text-blue-500" /> 伝令効果（ベンチから指示）
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 攻撃時 */}
                <div className="bg-rose-50/50 dark:bg-rose-950/20 p-3.5 rounded-xl border border-rose-200 dark:border-rose-900/40 space-y-2">
                  <div className="font-bold text-xs text-rose-700 dark:text-rose-300">
                    ⚾ 攻撃時伝令
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div><b className="text-slate-700 dark:text-slate-300">1年:</b> {selectedPersonality.ordersAttack.year1.name} → <span className="text-slate-600 dark:text-slate-400">{selectedPersonality.ordersAttack.year1.effect}</span></div>
                    <div><b className="text-slate-700 dark:text-slate-300">2年:</b> {selectedPersonality.ordersAttack.year2.name} → <span className="text-slate-600 dark:text-slate-400">{selectedPersonality.ordersAttack.year2.effect}</span></div>
                    <div><b className="text-slate-700 dark:text-slate-300">3年:</b> {selectedPersonality.ordersAttack.year3.name} → <span className="font-semibold text-rose-700 dark:text-rose-300">{selectedPersonality.ordersAttack.year3.effect}</span></div>
                  </div>
                </div>

                {/* 守備時 */}
                <div className="bg-blue-50/50 dark:bg-blue-950/20 p-3.5 rounded-xl border border-blue-200 dark:border-blue-900/40 space-y-2">
                  <div className="font-bold text-xs text-blue-700 dark:text-blue-300">
                    🧤 守備時伝令
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div><b className="text-slate-700 dark:text-slate-300">1年:</b> {selectedPersonality.ordersDefense.year1.name} → <span className="text-slate-600 dark:text-slate-400">{selectedPersonality.ordersDefense.year1.effect}</span></div>
                    <div><b className="text-slate-700 dark:text-slate-300">2年:</b> {selectedPersonality.ordersDefense.year2.name} → <span className="text-slate-600 dark:text-slate-400">{selectedPersonality.ordersDefense.year2.effect}</span></div>
                    <div><b className="text-slate-700 dark:text-slate-300">3年:</b> {selectedPersonality.ordersDefense.year3.name} → <span className="font-semibold text-blue-700 dark:text-blue-300">{selectedPersonality.ordersDefense.year3.effect}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. キャプテン指名時の発生イベント */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
                <Crown className="w-4 h-4 text-amber-500" /> キャプテン指名時の発生イベント
              </h4>
              <div className="bg-amber-50/60 dark:bg-amber-950/30 p-4 rounded-xl border border-amber-200 dark:border-amber-800/60">
                <div className="font-bold text-sm text-amber-900 dark:text-amber-200 mb-2">
                  {selectedPersonality.captainEvent.title}
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {selectedPersonality.captainEvent.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 育成おすすめ度 */}
            <div className="bg-slate-100 dark:bg-slate-900/80 p-3.5 rounded-xl text-xs text-slate-700 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-slate-100">💡 育成アドバイス: </span>
              {selectedPersonality.recommendation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
