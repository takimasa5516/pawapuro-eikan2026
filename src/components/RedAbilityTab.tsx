import React, { useState, useMemo } from 'react';
import { RED_ABILITIES_DATA, RedAbilityCorrelation } from '../data/redAbilities';
import { ALL_ABILITIES_DATA, AbilityItem } from '../data/allAbilities';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Sparkles, 
  Search, 
  Filter, 
  BookOpen, 
  Layers, 
  ArrowRight, 
  Award, 
  Flame, 
  Check, 
  X,
  Info
} from 'lucide-react';

export const RedAbilityTab: React.FC = () => {
  // View mode: 'both' (併記: デフォルト), 'correlation' (相関マトリクスのみ), 'all' (特殊能力一覧のみ)
  const [viewMode, setViewMode] = useState<'both' | 'correlation' | 'all'>('both');

  // Correlation Matrix Filters
  const [corrSearch, setCorrSearch] = useState('');
  const [corrCategory, setCorrCategory] = useState<'すべて' | '最凶' | '投手' | '野手' | '捕手・共通'>('すべて');

  // All Abilities Database Filters
  const [abilitySearch, setAbilitySearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて');
  const [selectedType, setSelectedType] = useState<string>('すべて');
  const [selectedImportance, setSelectedImportance] = useState<string>('すべて');

  // Filtered Correlation Data
  const filteredCorrelations = useMemo(() => {
    return RED_ABILITIES_DATA.filter(item => {
      if (corrCategory === '最凶' && item.dangerLevel !== '最凶') return false;
      if (corrCategory === '投手' && item.category !== '投手') return false;
      if (corrCategory === '野手' && item.category !== '野手') return false;
      if (corrCategory === '捕手・共通' && !(item.category === '捕手' || item.category === '共通')) return false;

      if (corrSearch) {
        const q = corrSearch.toLowerCase();
        const matchRed = item.redName.toLowerCase().includes(q);
        const matchBlue = item.blueName.toLowerCase().includes(q);
        const matchGold = item.goldName?.toLowerCase().includes(q) || false;
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchNote = item.note?.toLowerCase().includes(q) || false;
        if (!matchRed && !matchBlue && !matchGold && !matchDesc && !matchNote) return false;
      }
      return true;
    });
  }, [corrCategory, corrSearch]);

  // Filtered All Abilities Data
  const filteredAbilities = useMemo(() => {
    return ALL_ABILITIES_DATA.filter(item => {
      if (selectedCategory !== 'すべて' && item.category !== selectedCategory) return false;
      if (selectedType !== 'すべて' && item.type !== selectedType) return false;
      if (selectedImportance !== 'すべて' && item.importance !== selectedImportance) return false;

      if (abilitySearch) {
        const q = abilitySearch.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchSystem = item.system.toLowerCase().includes(q);
        const matchEffect = item.effect.toLowerCase().includes(q);
        const matchTip = item.eikanTip.toLowerCase().includes(q);
        if (!matchName && !matchSystem && !matchEffect && !matchTip) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedType, selectedImportance, abilitySearch]);

  const getDangerBadge = (danger: string) => {
    if (danger === '最凶') return 'bg-rose-700 text-white font-extrabold animate-pulse';
    if (danger === '要注意') return 'bg-amber-600 text-white font-bold';
    if (danger === '警戒') return 'bg-orange-500 text-white font-semibold';
    return 'bg-slate-400 text-white';
  };

  const getTypeBadge = (type: string) => {
    if (type === '金特') return 'badge-gold px-2.5 py-0.5 rounded-full text-xs';
    if (type === '青特') return 'badge-blue px-2.5 py-0.5 rounded-full text-xs';
    if (type === '赤特') return 'badge-red px-2.5 py-0.5 rounded-full text-xs';
    return 'badge-green px-2.5 py-0.5 rounded-full text-xs';
  };

  const getImportanceBadge = (imp: string) => {
    if (imp === 'S' || imp === '最凶') return 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950 dark:text-rose-200 border font-black';
    if (imp === 'A' || imp === '要注意') return 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-200 border font-bold';
    return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 border font-medium';
  };

  const totalGold = useMemo(() => ALL_ABILITIES_DATA.filter(a => a.type === '金特').length, []);
  const totalBlue = useMemo(() => ALL_ABILITIES_DATA.filter(a => a.type === '青特').length, []);
  const totalRed = useMemo(() => ALL_ABILITIES_DATA.filter(a => a.type === '赤特').length, []);

  return (
    <div className="space-y-6">
      {/* Hero Header Banner */}
      <div className="bg-gradient-to-r from-rose-700 via-red-700 to-amber-700 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>🛡️</span> 特殊能力総合図鑑 ＆ 赤特打消し相関マトリクス
            </h2>
            <p className="text-xs sm:text-sm text-rose-100 mt-1">
              特別指導・合宿・特能本での「赤特打消し・消去一覧」と「既存の特殊能力（赤・青・金 全{ALL_ABILITIES_DATA.length}種）」を完全併記！
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="bg-black/30 px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2 font-bold">
              <span>赤特消去: <b className="text-amber-300">{RED_ABILITIES_DATA.length}</b>件</span>
              <span>•</span>
              <span>特能DB: <b className="text-amber-300">{ALL_ABILITIES_DATA.length}</b>種</span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle Switcher */}
        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-rose-200">
            <Layers className="w-4 h-4" /> 表示レイアウト:
          </div>
          <div className="flex items-center gap-1 bg-black/30 p-1 rounded-xl border border-white/20">
            <button
              onClick={() => setViewMode('both')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                viewMode === 'both'
                  ? 'bg-white text-rose-900 shadow-sm'
                  : 'text-rose-100 hover:bg-white/10'
              }`}
            >
              🔄 すべて併記（上下表示）
            </button>
            <button
              onClick={() => setViewMode('correlation')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                viewMode === 'correlation'
                  ? 'bg-white text-rose-900 shadow-sm'
                  : 'text-rose-100 hover:bg-white/10'
              }`}
            >
              🛡️ 赤特打消し相関のみ
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                viewMode === 'all'
                  ? 'bg-white text-rose-900 shadow-sm'
                  : 'text-rose-100 hover:bg-white/10'
              }`}
            >
              📚 特殊能力（赤・青・金）一覧のみ
            </button>
          </div>
        </div>
      </div>

      {/* Critical Advice Box */}
      <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-200 dark:border-amber-800 text-xs space-y-2 text-amber-950 dark:text-amber-200 shadow-sm">
        <h4 className="font-bold flex items-center gap-1.5 text-amber-900 dark:text-amber-300 text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-600" /> 赤特消去・育成における超重要ルール
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div className="bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
            <b className="text-rose-700 dark:text-rose-400">🚨 最凶赤特「ムード×」は即消去</b>
            <p className="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5">
              ベンチにいるだけでも味方全員のミート・パワーが低下する最悪の能力。特別指導マス（6月・9月）で最優先消去必須です。
            </p>
          </div>
          <div className="bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
            <b className="text-blue-700 dark:text-blue-400">💡 「チームプレイ×」は残してもOK</b>
            <p className="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5">
              特別指導では消せませんが、「自動操作中にバントをしなくなる」効果があるため、4番打者などの強打者なら消さずに残すとメリットになります。
            </p>
          </div>
          <div className="bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
            <b className="text-amber-700 dark:text-amber-400">⚾ 投手の事故敗退ワースト「一発」</b>
            <p className="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5">
              失投がど真ん中にいき被弾する凶悪赤特。合宿や特訓で「逃げ球」を取得して確実に上書きしましょう。
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: 赤特殊能力打消し相関マトリクス */}
      {/* ========================================================================= */}
      {(viewMode === 'both' || viewMode === 'correlation') && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden space-y-4 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                <span>赤特殊能力打消し相関マトリクス（消去・上書き一覧）</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                赤特を打ち消す対応青特・上位金特と、特別指導・試合・本・合宿での消去可否○×判定
              </p>
            </div>
            <div className="text-xs font-bold text-slate-500">
              該当: <span className="text-rose-600 font-extrabold text-sm">{filteredCorrelations.length}</span> 件
            </div>
          </div>

          {/* Correlation Filters & Search */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative sm:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="赤特名、打ち消し青特、金特、効果で検索（例: ムード、一発、送球、三振）..."
                value={corrSearch}
                onChange={(e) => setCorrSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
              {(['すべて', '最凶', '投手', '野手', '捕手・共通'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setCorrCategory(cat)}
                  className={`px-2.5 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all ${
                    corrCategory === cat
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Correlation Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                  <th className="py-3 px-3">赤特殊能力（危険度）</th>
                  <th className="py-3 px-1 text-center">相関</th>
                  <th className="py-3 px-3">打ち消し青特 / 上位金特</th>
                  <th className="py-3 px-2 text-center whitespace-nowrap" title="6月・9月の特別指導マスでの消去">特別指導</th>
                  <th className="py-3 px-2 text-center whitespace-nowrap" title="公式戦試合での活躍評価による消去">試合</th>
                  <th className="py-3 px-2 text-center whitespace-nowrap" title="OB本屋や商人から貰う特殊能力の本">特能本</th>
                  <th className="py-3 px-2 text-center whitespace-nowrap" title="7月・12月の合宿での上書き習得">合宿</th>
                  <th className="py-3 px-4 min-w-[220px]">効果解説 ＆ 消去・立ち回りポイント</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                {filteredCorrelations.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                  >
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="badge-red px-2 py-0.5 rounded-lg font-bold whitespace-nowrap">
                          {item.redName}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-extrabold ${getDangerBadge(item.dangerLevel)}`}>
                          {item.dangerLevel}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        区分: {item.category}
                      </div>
                    </td>

                    <td className="py-3 px-1 text-center text-slate-400 font-bold">
                      ➔
                    </td>

                    <td className="py-3 px-3">
                      <div className="flex flex-col gap-1">
                        <span className="badge-blue px-2 py-0.5 rounded-lg font-bold text-xs inline-block whitespace-nowrap w-fit">
                          {item.blueName}
                        </span>
                        {item.goldName && (
                          <span className="badge-gold px-2 py-0.2 rounded text-[10px] font-bold inline-block whitespace-nowrap w-fit">
                            金: {item.goldName}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-2 text-center">
                      {item.specialGuide ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                          ○
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold">
                          ×
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-2 text-center">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                        ○
                      </span>
                    </td>

                    <td className="py-3 px-2 text-center">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                        ○
                      </span>
                    </td>

                    <td className="py-3 px-2 text-center">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                        ○
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                      {item.note && (
                        <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-1 font-medium bg-amber-50 dark:bg-amber-950/40 p-1.5 rounded-md border border-amber-200 dark:border-amber-900/50">
                          💡 {item.note}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: 既存の特殊能力（赤・青・金）総合一覧データベース */}
      {/* ========================================================================= */}
      {(viewMode === 'both' || viewMode === 'all') && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden space-y-4 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>栄冠ナイン 特殊能力（赤・青・金）総合一覧データベース</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                全{ALL_ABILITIES_DATA.length}種の特殊能力（金特 {totalGold} / 青特 {totalBlue} / 赤特 {totalRed}）の効果・系統・栄冠実戦評価
              </p>
            </div>
            <div className="text-xs font-bold text-slate-500">
              該当: <span className="text-indigo-600 font-extrabold text-sm">{filteredAbilities.length}</span> 種
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="特殊能力名、系統、効果、栄冠ナインでの活用法で検索（例: アーチスト、怪童、アベレージ、キャッチャー、威圧感）..."
                value={abilitySearch}
                onChange={(e) => setAbilitySearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              {/* Category Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-500">区分:</span>
                {(['すべて', '野手', '投手', '捕手', '共通'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                <span className="font-bold text-slate-500">種別:</span>
                {(['すべて', '金特', '青特', '赤特'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                      selectedType === type
                        ? type === '金特'
                          ? 'bg-amber-500 text-white shadow-sm'
                          : type === '青特'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-rose-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Importance Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-500">重要度:</span>
                {(['すべて', 'S', 'A', '最凶'] as const).map(imp => (
                  <button
                    key={imp}
                    onClick={() => setSelectedImportance(imp)}
                    className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                      selectedImportance === imp
                        ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {imp === '最凶' ? '最凶（要注意）' : `${imp}ランク`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {filteredAbilities.map((ab) => (
              <div
                key={ab.id}
                className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between bg-white dark:bg-slate-900/60 ${
                  ab.type === '金特'
                    ? 'border-amber-300 dark:border-amber-800/80 hover:border-amber-500 shadow-sm'
                    : ab.type === '赤特'
                    ? 'border-rose-300 dark:border-rose-900/80 hover:border-rose-500'
                    : 'border-slate-200 dark:border-slate-700 hover:border-blue-400'
                }`}
              >
                <div>
                  {/* Top Header: Name, Type, Importance */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                          {ab.name}
                        </h4>
                        <span className={getTypeBadge(ab.type)}>
                          {ab.type}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                        <span>区分: <b>{ab.category}</b></span>
                      </div>
                    </div>

                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${getImportanceBadge(ab.importance)}`}>
                      重要度 {ab.importance}
                    </span>
                  </div>

                  {/* System/Evolution Tree */}
                  {ab.system && (
                    <div className="mt-2 py-1 px-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 text-[11px] font-mono text-slate-600 dark:text-slate-300 flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">系統:</span>
                      <span>{ab.system}</span>
                    </div>
                  )}

                  {/* Effect */}
                  <div className="mt-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>{ab.effect}</p>
                  </div>
                </div>

                {/* Eikan Tip Bottom Box */}
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-[11px] text-amber-950 dark:text-amber-200 leading-normal">
                    <span className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1 mb-0.5">
                      <Sparkles className="w-3 h-3 text-amber-500" /> 栄冠ナイン実戦解説:
                    </span>
                    {ab.eikanTip}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAbilities.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-xs">
              条件に一致する特殊能力は見つかりませんでした。検索キーワードやフィルターを変更してください。
            </div>
          )}
        </div>
      )}
    </div>
  );
};
