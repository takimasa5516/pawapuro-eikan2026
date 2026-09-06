import React, { useState } from 'react';
import { PERSONALITIES_DATA, Personality } from '../data/personalities';
import { 
  Sparkles, 
  Swords, 
  Megaphone, 
  Crown, 
  TrendingUp, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  RefreshCw, 
  Info
} from 'lucide-react';

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

      {/* 固有戦術の学年別確率＆仕様ファクトチェック解説カード */}
      <div className="bg-gradient-to-br from-indigo-900/10 via-blue-900/5 to-slate-100 dark:from-indigo-950/40 dark:via-blue-950/30 dark:to-slate-900 border border-blue-200 dark:border-blue-800/60 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5 shadow-md shadow-blue-500/20">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span>【仕様ファクトチェック】固有戦術の学年別出現確率と再抽選の真実</span>
              <span className="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full">検証済</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              「2種の固有戦術は全学年で確率選択されるのか？」「学年ごとの確率ブレはどうなっているか？」に対する調査・検証まとめです。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {/* 1年生 */}
          <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  1年生
                </span>
                <span className="text-xs font-black text-rose-500 dark:text-rose-400">上位 0% (不可)</span>
              </div>
              <div className="text-sm font-black text-slate-800 dark:text-slate-100">
                通常戦術：100% / 上位戦術：0%
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                確率ブレではなく<b>仕様上1年生は上位戦術が絶対に出現しません</b>。「魔物」「才能開花」「闘魂」等は1年生では使用不可です。
              </p>
            </div>
            <div className="mt-2 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-1 rounded">
              ※1年の内気は「ラッキーボーイ」確定
            </div>
          </div>

          {/* 2年生 */}
          <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                  2年生
                </span>
                <span className="text-xs font-black text-amber-500 dark:text-amber-400">上位 約20%</span>
              </div>
              <div className="text-sm font-black text-slate-800 dark:text-slate-100">
                通常戦術：約80% / 上位戦術：約20%
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                2年生になると上位戦術の抽選枠が解禁されますが、出現率は<b>約20%（5回に1回程度）</b>に留まります。
              </p>
            </div>
            <div className="mt-2 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-1 rounded">
              ※出たらラッキー枠。過度な依存は危険
            </div>
          </div>

          {/* 3年生 */}
          <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-rose-300 dark:border-rose-800/80 ring-1 ring-rose-400/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-500 text-white">
                  3年生 (最重要)
                </span>
                <span className="text-xs font-black text-rose-600 dark:text-rose-400">上位 約50% (1/2)</span>
              </div>
              <div className="text-sm font-black text-slate-800 dark:text-slate-100">
                通常戦術：約50% / 上位戦術：約50%
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                3年生でも<b>確定ではなく「50%（二分の一のコイントス）」</b>です。内気1名だけでは半分の確率で「魔物」を外します。
              </p>
            </div>
            <div className="mt-2 text-[11px] font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-2 py-1 rounded">
              ★3年内気を2〜3名ベンチ入りさせて発動率75〜87.5%に！
            </div>
          </div>
        </div>

        {/* アイコン再抽選と効果時間の重要なルール */}
        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3.5 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-2">
          <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-blue-500" />
            <span>【戦術アイコン再抽選と効果時間】見落としがちなシステム仕様</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] pt-1 leading-relaxed">
            <div>
              <b className="text-blue-600 dark:text-blue-400">① 戦術アイコンの再抽選（リロール）：</b>
              <br />
              自身や投手のステータスが上昇する戦術（<b>闘魂、熱血、才能開花、精密機械、黄色い声援、くせ者、ファイト、超ファイト</b>等）は、発動した瞬間にステータス再計算が入り、<b>戦術アイコンの数字（レベル）が再抽選</b>されます。これにより突然Lv6やLv7の最強コマンドが出現することがあります。
              一方、「魔物」「究極の思考」「強心臓」「威圧」「ゆさぶる」等は現在のアイコン数字を維持（究極の思考は全+1）します。
            </div>
            <div>
              <b className="text-rose-600 dark:text-rose-400">② 効果時間（1打席 vs 1イニング vs 試合終了まで）：</b>
              <br />
              「魔物」「ゆさぶる」「黄色い声援」「お祭り男」は<b>1イニング間継続</b>するため、味方打線が続く限り全員に恩恵があります。「才能開花」「闘魂」「精密機械」等は<b>1打席のみ</b>。「急成長」は<b>試合終了まで永続</b>します。
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Selection Buttons + Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Personality Buttons List */}
        <div className="lg:col-span-1 space-y-2">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 px-1">性格を選択</h3>
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
              ・<b>固有戦術</b>：1試合に1人1回使用可能。3年生でも上位出現率は約50%のため、複数人の内気を控えに入れておくのが勝率安定の定石！
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
              <div className="flex flex-wrap items-center justify-between gap-1 mb-2.5">
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
                <div className="bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2.5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        通常戦術
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">1年次100%出現</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-base font-black text-slate-900 dark:text-slate-100">
                        {selectedPersonality.tactics.normal.name}
                      </div>
                    </div>

                    {/* バッジ: 効果時間 & 再抽選 */}
                    <div className="flex flex-wrap gap-1.5 text-[10px]">
                      <span className="bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-md font-bold flex items-center gap-1 border border-blue-200 dark:border-blue-900">
                        <Clock className="w-3 h-3" />
                        効果時間: {selectedPersonality.tactics.normal.duration}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md font-bold flex items-center gap-1 border ${
                        selectedPersonality.tactics.normal.rerollLevel 
                          ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-900' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
                      }`}>
                        <RefreshCw className="w-3 h-3" />
                        再抽選: {selectedPersonality.tactics.normal.rerollLevel ? 'あり (高Lv解放)' : 'なし'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedPersonality.tactics.normal.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px] space-y-1">
                    <div><b className="text-blue-600 dark:text-blue-400">⚾ 打者時:</b> <span className="text-slate-700 dark:text-slate-300">{selectedPersonality.tactics.normal.batterEffect}</span></div>
                    <div><b className="text-rose-600 dark:text-rose-400">🎯 投手時:</b> <span className="text-slate-700 dark:text-slate-300">{selectedPersonality.tactics.normal.pitcherEffect}</span></div>
                  </div>
                </div>

                {/* 上位戦術 */}
                <div className="bg-rose-50/50 dark:bg-rose-950/20 p-3.5 rounded-xl border border-rose-300 dark:border-rose-800/60 space-y-2.5 ring-1 ring-rose-400/30 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-500 text-white flex items-center gap-1">
                        <span>★</span> 上位戦術
                      </span>
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400">2年次20% / 3年次50%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-base font-black text-rose-700 dark:text-rose-300">
                        {selectedPersonality.tactics.high.name}
                      </div>
                    </div>

                    {/* バッジ: 効果時間 & 再抽選 */}
                    <div className="flex flex-wrap gap-1.5 text-[10px]">
                      <span className="bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 px-2 py-0.5 rounded-md font-bold flex items-center gap-1 border border-rose-200 dark:border-rose-900">
                        <Clock className="w-3 h-3" />
                        効果時間: {selectedPersonality.tactics.high.duration}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md font-bold flex items-center gap-1 border ${
                        selectedPersonality.tactics.high.rerollLevel 
                          ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-900' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
                      }`}>
                        <RefreshCw className="w-3 h-3" />
                        再抽選: {selectedPersonality.tactics.high.rerollLevel ? 'あり (高Lv解放)' : 'なし'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {selectedPersonality.tactics.high.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-rose-200 dark:border-rose-900/60 text-[11px] space-y-1">
                    <div><b className="text-blue-600 dark:text-blue-400">⚾ 打者時:</b> <span className="text-slate-800 dark:text-slate-200 font-semibold">{selectedPersonality.tactics.high.batterEffect}</span></div>
                    <div><b className="text-rose-600 dark:text-rose-400">🎯 投手時:</b> <span className="text-slate-800 dark:text-slate-200 font-semibold">{selectedPersonality.tactics.high.pitcherEffect}</span></div>
                  </div>
                </div>
              </div>

              {/* 学年別抽選確率バー */}
              <div className="mt-2.5 bg-slate-100 dark:bg-slate-900/40 p-2.5 rounded-xl flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-2 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-300">学年別発動戦術内訳:</span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    1年: <b className="text-slate-800 dark:text-slate-200">{selectedPersonality.tactics.year1}</b>
                  </span>
                  <span className="bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    2年: <b className="text-slate-800 dark:text-slate-200">{selectedPersonality.tactics.year2}</b>
                  </span>
                  <span className="bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-300 dark:border-rose-800">
                    3年: <b className="text-rose-600 dark:text-rose-400">{selectedPersonality.tactics.year3}</b>
                  </span>
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

      {/* 4. 全8性格 固有戦術・効果・再抽選・確率 総合比較マトリクス表 */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Swords className="w-5 h-5 text-rose-500" />
              <span>全8性格 固有戦術・効果・再抽選・確率 総合比較マトリクス</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              各性格の通常戦術・上位戦術の打者・投手効果、効果時間、戦術Lv再抽選の有無、および学年別出現率の比較一覧
            </p>
          </div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg">
            全性格 共通確率：1年0% / 2年約20% / 3年約50%
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-600 dark:text-slate-300">
            <thead className="text-[11px] text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-2.5 px-3 font-extrabold">性格</th>
                <th className="py-2.5 px-3 font-extrabold">通常戦術（1年100%）</th>
                <th className="py-2.5 px-3 font-extrabold">通常効果（打者 / 投手）</th>
                <th className="py-2.5 px-3 font-extrabold text-rose-600 dark:text-rose-400">★上位戦術（2年20% / 3年50%）</th>
                <th className="py-2.5 px-3 font-extrabold text-rose-600 dark:text-rose-400">★上位効果（打者 / 投手）</th>
                <th className="py-2.5 px-3 font-extrabold">伝令コマンド</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
              {PERSONALITIES_DATA.map((p) => {
                const isHighlight = p.name === '内気' || p.name === '天才肌';
                return (
                  <tr 
                    key={p.name}
                    className={`hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors ${
                      isHighlight ? 'bg-amber-50/30 dark:bg-amber-950/10' : ''
                    }`}
                  >
                    {/* 性格名 */}
                    <td className="py-3 px-3 font-black text-slate-900 dark:text-slate-100 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span>{p.name}</span>
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
                      <span className="text-[10px] text-slate-400 block font-normal mt-0.5">
                        {p.statGrowth[0]}等
                      </span>
                    </td>

                    {/* 通常戦術 */}
                    <td className="py-3 px-3 whitespace-nowrap">
                      <div className="font-bold text-slate-800 dark:text-slate-200">
                        {p.tactics.normal.name}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1 text-[10px]">
                        <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.2 rounded">
                          {p.tactics.normal.duration}
                        </span>
                        {p.tactics.normal.rerollLevel ? (
                          <span className="bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-1.5 py-0.2 rounded font-semibold">
                            再抽選○
                          </span>
                        ) : (
                          <span className="bg-slate-100 dark:bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded">
                            再抽選×
                          </span>
                        )}
                      </div>
                    </td>

                    {/* 通常効果 */}
                    <td className="py-3 px-3 min-w-[200px]">
                      <div className="text-[11px] leading-tight space-y-1">
                        <div><b className="text-blue-600 dark:text-blue-400">打:</b> {p.tactics.normal.batterEffect}</div>
                        <div><b className="text-rose-600 dark:text-rose-400">投:</b> {p.tactics.normal.pitcherEffect}</div>
                      </div>
                    </td>

                    {/* 上位戦術 */}
                    <td className="py-3 px-3 whitespace-nowrap">
                      <div className="font-extrabold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <span>★</span> {p.tactics.high.name}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1 text-[10px]">
                        <span className="bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 px-1.5 py-0.2 rounded font-semibold">
                          {p.tactics.high.duration}
                        </span>
                        {p.tactics.high.rerollLevel ? (
                          <span className="bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-1.5 py-0.2 rounded font-semibold">
                            再抽選○
                          </span>
                        ) : (
                          <span className="bg-slate-100 dark:bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded">
                            再抽選×
                          </span>
                        )}
                      </div>
                    </td>

                    {/* 上位効果 */}
                    <td className="py-3 px-3 min-w-[220px]">
                      <div className="text-[11px] leading-tight space-y-1">
                        <div><b className="text-blue-600 dark:text-blue-400">打:</b> {p.tactics.high.batterEffect}</div>
                        <div><b className="text-rose-600 dark:text-rose-400">投:</b> {p.tactics.high.pitcherEffect}</div>
                      </div>
                    </td>

                    {/* 伝令コマンド */}
                    <td className="py-3 px-3 whitespace-nowrap">
                      <div className="font-bold text-blue-700 dark:text-blue-300">
                        【{p.defenseOrder.command}】
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">
                        3年時: {p.defenseOrder.year3}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
