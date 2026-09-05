import React, { useState } from 'react';
import { PERSONALITIES_DATA, Personality } from '../data/personalities';
import { Sparkles, Swords, Megaphone, Crown, TrendingUp, ChevronRight, ShieldCheck, Clock, UserCheck } from 'lucide-react';

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
              栄冠ナインの試合・育成を左右する性格システム完全攻略（通常・上位固有戦術・守備伝令・キャプテンイベント）
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
                      {p.statGrowth.join(', ')}
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
              <Sparkles className="w-4 h-4 text-amber-500" /> 固有戦術・伝令の鉄則
            </h4>
            <p>
              ・<b>固有戦術</b>：1試合に1人1回使用可能。学年が上がると上位戦術（☆マーク）の出現率が大幅アップ！
            </p>
            <p>
              ・<b>守備時伝令</b>：1試合3回まで控え選手から指示。特にやんちゃ・熱血漢の「盛り上げる（全員の守備・捕球+40）」はピンチ脱出の救世主！
            </p>
            <p>
              ・<b>キャプテン</b>：やんちゃ（グラウンドLv+1）、内気（学力UP）、お調子者（テンションUP・超ノリノリ）が最優先！
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

            {/* 1. 固有戦術（通常・上位＆学年別出現率） */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Swords className="w-4 h-4 text-rose-500" /> 固有戦術（試合中1人1回使用可能）
                </h4>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {selectedPersonality.tactics.rateNote}
                </span>
              </div>

              {/* Normal vs High Tactics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 通常戦術 */}
                <div className="bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      通常戦術
                    </span>
                    <span className="text-xs font-semibold text-slate-400">1年次基本</span>
                  </div>
                  <div className="text-base font-black text-slate-900 dark:text-slate-100">
                    {selectedPersonality.tactics.normal.name}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedPersonality.tactics.normal.desc}
                  </p>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px] space-y-1">
                    <div><b className="text-blue-600 dark:text-blue-400">⚾ 打者時:</b> <span className="text-slate-700 dark:text-slate-300">{selectedPersonality.tactics.normal.batterEffect}</span></div>
                    <div><b className="text-rose-600 dark:text-rose-400">🎯 投手時:</b> <span className="text-slate-700 dark:text-slate-300">{selectedPersonality.tactics.normal.pitcherEffect}</span></div>
                  </div>
                </div>

                {/* 上位戦術 */}
                <div className="bg-rose-50/50 dark:bg-rose-950/20 p-3.5 rounded-xl border border-rose-300 dark:border-rose-800/60 space-y-2 ring-1 ring-rose-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-500 text-white flex items-center gap-1">
                      <span>★</span> 上位戦術
                    </span>
                    <span className="text-xs font-bold text-rose-600 dark:text-rose-400">2・3年次高確率</span>
                  </div>
                  <div className="text-base font-black text-rose-700 dark:text-rose-300">
                    {selectedPersonality.tactics.high.name}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {selectedPersonality.tactics.high.desc}
                  </p>
                  <div className="pt-2 border-t border-rose-200 dark:border-rose-900/60 text-[11px] space-y-1">
                    <div><b className="text-blue-600 dark:text-blue-400">⚾ 打者時:</b> <span className="text-slate-800 dark:text-slate-200 font-semibold">{selectedPersonality.tactics.high.batterEffect}</span></div>
                    <div><b className="text-rose-600 dark:text-rose-400">🎯 投手時:</b> <span className="text-slate-800 dark:text-slate-200 font-semibold">{selectedPersonality.tactics.high.pitcherEffect}</span></div>
                  </div>
                </div>
              </div>

              {/* 学年別抽選確率バー */}
              <div className="mt-2.5 bg-slate-100 dark:bg-slate-900/40 p-2.5 rounded-xl flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-2 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-300">学年別発動戦術:</span>
                <div className="flex items-center gap-3">
                  <span>1年: <b className="text-slate-800 dark:text-slate-200">{selectedPersonality.tactics.year1}</b></span>
                  <span>2年: <b className="text-slate-800 dark:text-slate-200">{selectedPersonality.tactics.year2}</b></span>
                  <span>3年: <b className="text-rose-600 dark:text-rose-400">{selectedPersonality.tactics.year3}</b></span>
                </div>
              </div>
            </div>

            {/* 2. 伝令効果（守備時のみ・ベンチから指示） */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-blue-500" /> 伝令効果（守備時のみ・1試合3回まで）
                </h4>
                <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                  ※控え選手から指示を出します
                </span>
              </div>

              <div className="bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-xl border border-blue-200 dark:border-blue-900/60 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/60 dark:border-blue-900/60 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-black text-blue-700 dark:text-blue-300">
                      伝令：【{selectedPersonality.defenseOrder.command}】
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-semibold flex items-center gap-1">
                      <UserCheck className="w-3 h-3" />
                      対象: {selectedPersonality.defenseOrder.target}
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {selectedPersonality.defenseOrder.duration}
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {selectedPersonality.defenseOrder.description}
                </p>

                {/* 学年別効果 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-blue-100 dark:border-blue-900/40">
                    <span className="font-bold text-slate-500 block text-[10px]">1年生の伝令:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedPersonality.defenseOrder.year1}</span>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-blue-100 dark:border-blue-900/40">
                    <span className="font-bold text-slate-500 block text-[10px]">2年生の伝令:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedPersonality.defenseOrder.year2}</span>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                    <span className="font-bold text-blue-600 dark:text-blue-400 block text-[10px]">3年生の伝令 (最大効果):</span>
                    <span className="font-bold text-blue-700 dark:text-blue-300">{selectedPersonality.defenseOrder.year3}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>キャッチャーやキャプテンが伝令に行くと、追加でランダムなプラス効果（信頼度UP・テンションUP等）が付与されます。</span>
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
