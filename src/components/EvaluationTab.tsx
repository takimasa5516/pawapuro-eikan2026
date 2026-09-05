import React, { useState, useMemo } from 'react';
import { SCOUT_EVALUATIONS, ScoutEvaluation } from '../data/scoutEvaluations';
import { Search, Award, HelpCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

export const EvaluationTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて');
  const [selectedGrade, setSelectedGrade] = useState<string>('すべて');

  const categories = ['すべて', '捕手', '投手', '野手', '特殊'];
  const grades = ['すべて', 'S', 'A', 'B'];

  const filteredEvaluations = useMemo(() => {
    return SCOUT_EVALUATIONS.filter(e => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchText = e.text.toLowerCase().includes(q);
        const matchAbility = e.ability.toLowerCase().includes(q);
        const matchNote = e.note.toLowerCase().includes(q);
        if (!matchText && !matchAbility && !matchNote) return false;
      }
      if (selectedCategory !== 'すべて' && e.category !== selectedCategory) return false;
      if (selectedGrade !== 'すべて' && e.grade !== selectedGrade) return false;
      return true;
    });
  }, [searchQuery, selectedCategory, selectedGrade]);

  const getGradeBadge = (grade: string) => {
    switch (grade) {
      case 'S':
        return 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 font-black';
      case 'A':
        return 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800 font-bold';
      case 'B':
        return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 font-semibold';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 font-medium';
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>🔍</span> 新入生スカウト寸評 ＆ 特殊能力逆引きツール
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 mt-1">
              秋のスカウト時に表示される「寸評」から、選手が隠し持つ強力青特・性格・覚醒素質を即座に特定！
            </p>
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/20 text-xs">
            <span>最優先チェック:</span>
            <span className="font-extrabold text-amber-300">「好リードが光る」= キャッチャーB以上</span>
          </div>
        </div>
      </div>

      {/* Scout Strategy Notice */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200">捕手最優先（キャッチャーB）</span>
            <p className="text-slate-500 dark:text-slate-400 mt-0.5">
              「好リードが光る」捕手を1人確保するだけで、投手陣全員の防御率が劇的に改善します。
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
          <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200">天才肌＆覚醒寸評</span>
            <p className="text-slate-500 dark:text-slate-400 mt-0.5">
              「彼は天才なのかもしれない」（全国出場以上）、「将来性を感じる」は超有望選手！
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
          <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200">地雷寸評に注意</span>
            <p className="text-slate-500 dark:text-slate-400 mt-0.5">
              「中学で主将」「副キャプテン」「練習への姿勢が良い」などは強力青特の確定がありません。
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="寸評の文言、得られる能力（例: 威圧感、キャッチャー、ノビ、奪三振）で検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-700 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-500">カテゴリ:</span>
            <div className="flex items-center gap-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="font-bold text-slate-500 ml-2">優先度:</span>
            <div className="flex items-center gap-1">
              {grades.map(g => (
                <button
                  key={g}
                  onClick={() => setSelectedGrade(g)}
                  className={`px-2 py-0.5 rounded font-bold ${
                    selectedGrade === g
                      ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <span className="text-slate-400 font-medium">
            該当: <b className="text-slate-700 dark:text-slate-200">{filteredEvaluations.length}</b> 件
          </span>
        </div>
      </div>

      {/* Evaluations List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredEvaluations.map((evalItem) => (
          <div
            key={evalItem.id}
            className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                    {evalItem.category}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 mt-1.5">
                    「{evalItem.text}」
                  </h3>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-lg border ${getGradeBadge(evalItem.grade)}`}>
                  優先度 {evalItem.grade}
                </span>
              </div>

              <div className="mt-3 bg-amber-50/70 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
                <div className="text-xs text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5">
                  <span>対応特殊能力・特徴:</span>
                  <span className="text-sm font-black text-amber-700 dark:text-amber-400 underline decoration-amber-400">
                    {evalItem.ability}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                {evalItem.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
