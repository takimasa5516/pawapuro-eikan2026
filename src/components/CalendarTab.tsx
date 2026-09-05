import React, { useState } from 'react';
import { MONTHLY_EVENTS, INTERVIEW_CHOICES } from '../data/calendarEvents';
import { Calendar, HelpCircle, CheckCircle2, ChevronRight, Award, Flame, BookOpen } from 'lucide-react';

export const CalendarTab: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(4);

  const activeEvent = MONTHLY_EVENTS.find(e => e.month === selectedMonth) || MONTHLY_EVENTS[0];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>📅</span> 栄冠ナイン 年間カレンダー ＆ 重要イベント攻略
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              特別指導（赤特消去）・甲子園インタビュー・合宿・クリスマス・確定特訓マスを完全網羅！
            </p>
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/20 text-xs">
            <span>超重要日:</span>
            <span className="font-extrabold text-amber-300">12/24 (クリスマス) / 2/28 (特訓マス)</span>
          </div>
        </div>
      </div>

      {/* Month Selector Carousel/Buttons */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between overflow-x-auto pb-1 gap-1.5 scrollbar-none">
          {MONTHLY_EVENTS.map((m) => {
            const isSelected = selectedMonth === m.month;
            const isHighlight = m.month === 12 || m.month === 7 || m.month === 2;
            return (
              <button
                key={m.month}
                onClick={() => setSelectedMonth(m.month)}
                className={`flex-1 min-w-[72px] py-2.5 px-2 rounded-xl text-center transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 font-extrabold'
                    : 'bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <div className="text-base leading-none font-black">{m.month}月</div>
                <div className={`text-[10px] mt-1 line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                  {m.type}
                </div>
                {isHighlight && (
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mx-auto mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Month Detail Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
          <div>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200">
              {activeEvent.type}
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              {activeEvent.month}月：{activeEvent.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">期間目安: {activeEvent.period}</p>
          </div>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          {activeEvent.description}
        </p>

        {/* Tips list */}
        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700 space-y-2">
          <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-500" /> 立ち回りのポイント
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            {activeEvent.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-blue-500 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2 Big Guides: 特別指導 & 甲子園インタビュー (IMG_2198完全対応) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 特別指導イベント解説 */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-black text-base border-b border-slate-100 dark:border-slate-700 pb-2">
            <BookOpen className="w-5 h-5" />
            <span>特別指導イベント（青マス：6/26〜7/2 & 9/8〜9/14）</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            止まると選んだ選択肢の赤特殊能力を確率で消去してくれる神イベント！
          </p>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-blue-600 dark:text-blue-400">⚾ 打撃選択肢:</span>
              <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                ミート・パワー小UP ＆ <b className="text-rose-600">三振</b> を消去！
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">🧤 守備選択肢:</span>
              <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                守備・捕球小UP ＆ <b className="text-rose-600">エラー</b>、<b className="text-rose-600">送球E以下+1</b> を消去！
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-amber-600 dark:text-amber-400">🏃 走塁選択肢:</span>
              <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                走力小UP ＆ <b className="text-rose-600">走塁E以下+1</b>、<b className="text-rose-600">盗塁E以下+1</b> を消去！
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-purple-600 dark:text-purple-400">🎯 投球選択肢（消去確率50% / 20%）:</span>
              <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                コントロール・球速等小UP ＆ <b className="text-rose-600">寸前、一発、四球、スロースターター、力配分、短気、抜け球、軽い球、乱調</b> を確率消去！
              </p>
            </div>
          </div>
        </div>

        {/* 甲子園インタビュー解説 */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-base border-b border-slate-100 dark:border-slate-700 pb-2">
            <Award className="w-5 h-5" />
            <span>甲子園インタビュー（青マス：7/21〜7/30 & 2/1〜2/10）</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            甲子園出場決定時のみ発生。青特は低確率で対象選手1人につき最大1つまで習得！
          </p>

          <div className="max-h-64 overflow-y-auto space-y-1.5 text-xs pr-1 scrollbar-thin">
            {INTERVIEW_CHOICES.map((choice, idx) => (
              <div key={idx} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">[{choice.category}]</span>
                  <span className="text-slate-500 dark:text-slate-400 ml-1.5">{choice.requirement}</span>
                </div>
                <div className="text-right font-bold text-slate-800 dark:text-slate-200">
                  {choice.abilities.join('、')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
