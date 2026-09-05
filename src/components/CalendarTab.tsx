import React, { useState } from 'react';
import { MONTHLY_EVENTS, INTERVIEW_CHOICES, AUGUST_TRAINING_SCHEDULE } from '../data/calendarEvents';
import { Flame, BookOpen, Award, Sparkles, MapPin, CalendarDays, CheckCircle } from 'lucide-react';

export const CalendarTab: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(8); // Default to 8月 since user is asking about it
  const [selectedAugustPref, setSelectedAugustPref] = useState<string>('すべて');

  const activeEvent = MONTHLY_EVENTS.find(e => e.month === selectedMonth) || MONTHLY_EVENTS[0];

  // Helper to find date for a specific prefecture
  const getPrefectureAugustDate = (pref: string) => {
    const item = AUGUST_TRAINING_SCHEDULE.find(s => s.prefectures.includes(pref));
    return item ? item.date : '8月21日';
  };

  const allAugustPrefs = [
    '北海道', '青森', '岩手', '宮城', '秋田', '山形', '福島',
    '茨城', '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川',
    '新潟', '富山', '石川', '福井', '山梨', '長野', '岐阜', '静岡', '愛知', '三重',
    '滋賀', '京都', '大阪', '兵庫', '奈良', '和歌山',
    '鳥取', '島根', '岡山', '広島', '山口',
    '徳島', '香川', '愛媛', '高知',
    '福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄'
  ];

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
              特別指導（赤特消去）・甲子園インタビュー・合宿・クリスマス・都道府県別特訓マスを完全網羅！
            </p>
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/20 text-xs">
            <span>超重要日:</span>
            <span className="font-extrabold text-amber-300">
              8月(地域別特訓) / 12/24(クリスマス) / 2/28(特訓)
            </span>
          </div>
        </div>
      </div>

      {/* Month Selector Carousel/Buttons */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between overflow-x-auto pb-1 gap-1.5 scrollbar-none">
          {MONTHLY_EVENTS.map((m) => {
            const isSelected = selectedMonth === m.month;
            const isHighlight = m.month === 8 || m.month === 12 || m.month === 7 || m.month === 2;
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

      {/* SPECIAL SECTION FOR AUGUST (8月特訓マス 都道府県別スケジュール) */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border-2 border-amber-400 dark:border-amber-600/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
              <CalendarDays className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>🔥 8月：都道府県別「夏の確定特訓マス」発生日一覧</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                  地域で日付変化
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                地方大会敗退時、または甲子園早期敗退時に指定日へ「ピッタリ止まる」と高確率で特訓マス（最大4マス）が出現！
              </p>
            </div>
          </div>

          {/* Quick Prefecture Checker */}
          <div className="flex items-center gap-2 text-xs bg-amber-50 dark:bg-amber-950/50 p-2 rounded-xl border border-amber-200 dark:border-amber-800">
            <span className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600" /> 自校の都道府県:
            </span>
            <select
              value={selectedAugustPref}
              onChange={(e) => setSelectedAugustPref(e.target.value)}
              className="py-1 px-2 rounded-lg border border-amber-300 dark:border-amber-700 bg-white dark:bg-slate-900 text-xs font-bold text-amber-900 dark:text-amber-100"
            >
              <option value="すべて">一覧を表示</option>
              {allAugustPrefs.map(pref => (
                <option key={pref} value={pref}>{pref}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Highlight Result if specific prefecture selected */}
        {selectedAugustPref !== 'すべて' && (
          <div className="bg-gradient-to-r from-amber-500 to-rose-600 text-white p-3 rounded-xl flex items-center justify-between text-xs font-bold shadow-sm">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-200" />
              【{selectedAugustPref}】の夏の特訓マス発生日:
            </span>
            <span className="text-base font-black bg-white/20 px-3 py-1 rounded-lg border border-white/30">
              👉 {getPrefectureAugustDate(selectedAugustPref)}
            </span>
          </div>
        )}

        {/* 3 Groups Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {AUGUST_TRAINING_SCHEDULE.map((sched, idx) => {
            const isMatch = selectedAugustPref !== 'すべて' && sched.prefectures.includes(selectedAugustPref);

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isMatch
                    ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-500 ring-2 ring-amber-400 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-rose-600 dark:text-rose-400">
                      🗓️ {sched.date}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                      {sched.prefectures.length}都道府県
                    </span>
                  </div>

                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100 mt-1">
                    {sched.groupName}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {sched.description}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-1">
                    {sched.prefectures.map(pref => (
                      <span
                        key={pref}
                        className={`text-[11px] px-1.5 py-0.5 rounded font-medium ${
                          selectedAugustPref === pref
                            ? 'bg-amber-500 text-white font-black shadow-sm'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {pref}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-amber-600 dark:text-amber-400">💡 立ち回り: </span>
                  {sched.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* General Strategy Tips */}
        <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-xl border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-amber-600" />
            <span>特訓マスを確実に踏むためのコツ</span>
          </div>
          <p className="text-[11px] leading-relaxed text-amber-800 dark:text-amber-300">
            • <b>「ピッタリ止まる」</b> 必要があるため、7月後半〜8月上旬にかけて「1」や「2」の少ない数字カードを常に1〜2枚キープしておきましょう。<br/>
            • 止まれそうにない場合は、ショップで購入できる <b>「スケジュール緩和極意書」</b> や <b>「手帳」</b> を使用して歩数をコントロールするのが定石です。<br/>
            • 万が一甲子園で1〜2回戦敗退してしまった場合でも、8月21日の39都府県であれば日程次第で特訓マスに間に合うケースがあります。諦めずに日程を計算しましょう！
          </p>
        </div>
      </div>

      {/* 2 Big Guides: 特別指導 & 甲子園インタビュー */}
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
