import React, { useState, useMemo } from 'react';
import { START_REGIONS_DATA, RecommendedRegion, RegionOB } from '../data/startRegions';
import { REGIONS, PREFECTURE_ORDER } from '../data/players';
import { 
  MapPin, 
  Star, 
  Trophy, 
  School, 
  Shield, 
  Sparkles, 
  Filter, 
  Search, 
  Award, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  Flame,
  ArrowUpDown
} from 'lucide-react';

export const RegionSelectTab: React.FC = () => {
  // Star filter tab: 'all' | '5' | '4' | '3'
  const [starFilter, setStarFilter] = useState<'all' | '5' | '4' | '3'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('すべて');
  const [onlyFewSchools, setOnlyFewSchools] = useState(false);
  const [onlyPitcherRich, setOnlyPitcherRich] = useState(false);
  const [onlyCatcherAB, setOnlyCatcherAB] = useState(false);
  const [onlyOver400, setOnlyOver400] = useState(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'stars-desc' | 'schools-asc' | 'north-to-south'>('recommended');
  
  // Expanded card IDs
  const [expandedPrefs, setExpandedPrefs] = useState<string[]>(['岩手', '鳥取', '宮崎', '愛知', '兵庫']);

  const toggleExpand = (pref: string) => {
    setExpandedPrefs(prev => 
      prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
    );
  };

  const expandAll = () => {
    setExpandedPrefs(START_REGIONS_DATA.map(r => r.pref));
  };

  const collapseAll = () => {
    setExpandedPrefs([]);
  };

  // Filter and sort regions
  const filteredRegions = useMemo(() => {
    return START_REGIONS_DATA.filter(item => {
      // Star Filter
      if (starFilter === '5' && item.starsRating !== 5) return false;
      if (starFilter === '4' && item.starsRating !== 4) return false;
      if (starFilter === '3' && item.starsRating !== 3) return false;

      // Region Filter
      if (selectedRegion !== 'すべて' && item.region !== selectedRegion) return false;

      // Feature Toggles
      if (onlyFewSchools && item.schoolCountApprox > 50) return false;
      if (onlyPitcherRich && !(item.pitcherRate === '極高' || item.pitcherRate === '高')) return false;
      if (onlyCatcherAB && !item.hasCatcherAB) return false;
      if (onlyOver400 && item.maxOBStars < 400) return false;

      // Search Query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchPref = item.pref.toLowerCase().includes(q);
        const matchRegion = item.region.toLowerCase().includes(q);
        const matchHighlight = item.highlightOB.toLowerCase().includes(q);
        const matchSummary = item.summary.toLowerCase().includes(q);
        const matchOB = item.obList.some(ob => 
          ob.name.toLowerCase().includes(q) || 
          ob.highSchool.toLowerCase().includes(q) ||
          ob.special.toLowerCase().includes(q)
        );
        if (!matchPref && !matchRegion && !matchHighlight && !matchSummary && !matchOB) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'recommended') {
        if (b.starsRating !== a.starsRating) return b.starsRating - a.starsRating;
        return a.schoolCountApprox - b.schoolCountApprox;
      }
      if (sortBy === 'stars-desc') {
        return b.maxOBStars - a.maxOBStars;
      }
      if (sortBy === 'schools-asc') {
        return a.schoolCountApprox - b.schoolCountApprox;
      }
      // north-to-south
      const idxA = PREFECTURE_ORDER.indexOf(a.pref);
      const idxB = PREFECTURE_ORDER.indexOf(b.pref);
      return (idxA !== -1 ? idxA : 999) - (idxB !== -1 ? idxB : 999);
    });
  }, [starFilter, searchQuery, selectedRegion, onlyFewSchools, onlyPitcherRich, onlyCatcherAB, onlyOver400, sortBy]);

  const countStar5 = useMemo(() => START_REGIONS_DATA.filter(r => r.starsRating === 5).length, []);
  const countStar4 = useMemo(() => START_REGIONS_DATA.filter(r => r.starsRating === 4).length, []);
  const countStar3 = useMemo(() => START_REGIONS_DATA.filter(r => r.starsRating === 3).length, []);

  const getStarDisplay = (stars: number) => {
    return (
      <div className="flex items-center gap-0.5 text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < stars ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'}`} 
          />
        ))}
      </div>
    );
  };

  const getTierBadge = (tier: 'S' | 'A' | 'B') => {
    if (tier === 'S') return 'bg-gradient-to-r from-amber-500 to-rose-500 text-white font-black shadow-sm';
    if (tier === 'A') return 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold';
    return 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200 font-bold';
  };

  const getStarColor = (stars: number) => {
    if (stars >= 400) return 'text-purple-600 dark:text-purple-400 font-extrabold';
    if (stars >= 350) return 'text-rose-600 dark:text-rose-400 font-bold';
    if (stars >= 300) return 'text-amber-600 dark:text-amber-400 font-bold';
    if (stars >= 270) return 'text-blue-600 dark:text-blue-400 font-semibold';
    return 'text-emerald-600 dark:text-emerald-400 font-semibold';
  };

  return (
    <div className="space-y-6">
      {/* Hero Header Banner */}
      <div className="bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>🗾</span> 栄冠ナイン 開始地域（都道府県）選択 ＆ リセマラ★別攻略
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              <b>2026年スタート（現代編）準拠！</b> 高校所在地（リセマラ基準）に基づく全47都道府県の★おすすめ度・参加校数・出現転生OB完全ガイド
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="bg-black/30 px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2 font-bold">
              <span>全国 <b className="text-amber-300">47</b> 都道府県</span>
              <span>•</span>
              <span>★5: <b className="text-amber-300">{countStar5}</b></span>
              <span>•</span>
              <span>★4: <b className="text-amber-300">{countStar4}</b></span>
              <span>•</span>
              <span>★3: <b className="text-amber-300">{countStar3}</b></span>
            </div>
          </div>
        </div>

        {/* 2026 Start Rule Explainer */}
        <div className="mt-4 p-3 bg-black/40 rounded-xl text-xs space-y-1.5 border border-white/20 text-blue-100">
          <div className="font-bold text-amber-300 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-amber-300" />
            <span>【重要】2026年スタート時（リセマラ時）の出現ルール ＆ 勝ちやすさの極意</span>
          </div>
          <p className="leading-relaxed text-[11px] sm:text-xs">
            ・<b>リセマラ時は「高校の所在地」基準</b>：開始時に選んだ都道府県にある高校のOBが新入生として出現します（出身中学・出身地ではありません）。
            例えば<b>ダルビッシュ有</b>を狙うなら<b>宮城県（東北高校）</b>、<b>田中将大</b>なら<b>北海道（駒大苫小牧）</b>、<b>山本由伸</b>なら<b>宮崎県（都城高校）</b>、<b>坂本勇人</b>なら<b>青森県（光星学院）</b>を選択してください！
          </p>
          <p className="leading-relaxed text-[11px] sm:text-xs text-amber-200">
            ・<b>勝ちやすさの秘訣は「高校数の少なさ」</b>：鳥取（約23校）、高知（約27校）、福井・徳島（約29校）などは夏の予選わずか3〜4勝で甲子園出場可能！初年度から甲子園で大量経験値を稼げるため、育成効率が圧倒的です。
          </p>
        </div>
      </div>

      {/* Main Star-Rating Tabs (★毎に整理) */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <div>
          <div className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>おすすめ度（★星評価別で整理）:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <button
              onClick={() => setStarFilter('all')}
              className={`p-3 rounded-xl border text-left transition-all ${
                starFilter === 'all'
                  ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-md ring-2 ring-blue-400'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm">すべて表示</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-bold">
                  47地域
                </span>
              </div>
              <p className="text-[11px] mt-1 opacity-90">
                全国47都道府県の一覧
              </p>
            </button>

            <button
              onClick={() => setStarFilter('5')}
              className={`p-3 rounded-xl border text-left transition-all ${
                starFilter === '5'
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold border-amber-500 shadow-md ring-2 ring-amber-400'
                  : 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 hover:bg-amber-100 text-amber-950 dark:text-amber-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-sm">★★★★★</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400 text-amber-950 font-black">Sランク</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-bold">
                  {countStar5}地域
                </span>
              </div>
              <p className="text-[11px] mt-1 opacity-90">
                最強OB ＆ 予選超イージー！初心者超推奨
              </p>
            </button>

            <button
              onClick={() => setStarFilter('4')}
              className={`p-3 rounded-xl border text-left transition-all ${
                starFilter === '4'
                  ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-md ring-2 ring-blue-400'
                  : 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900 hover:bg-blue-100 text-blue-950 dark:text-blue-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-sm">★★★★☆</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500 text-white font-black">Aランク</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-bold">
                  {countStar4}地域
                </span>
              </div>
              <p className="text-[11px] mt-1 opacity-90">
                大物OB多数・勝ちやすい有力地域
              </p>
            </button>

            <button
              onClick={() => setStarFilter('3')}
              className={`p-3 rounded-xl border text-left transition-all ${
                starFilter === '3'
                  ? 'bg-slate-700 text-white font-bold border-slate-700 shadow-md ring-2 ring-slate-400'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-sm">★★★☆☆</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-300 text-slate-800 dark:bg-slate-600 dark:text-slate-100 font-bold">Bランク</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-bold">
                  {countStar3}地域
                </span>
              </div>
              <p className="text-[11px] mt-1 opacity-90">
                個性豊かなOBがいる標準的地域
              </p>
            </button>
          </div>
        </div>

        {/* Secondary Filter & Sort Toolbar */}
        <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative sm:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="都道府県、出現OB名（大谷、イチロー、古田、ダルビッシュ等）、高校名で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 whitespace-nowrap font-medium flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" /> 並び順:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-1.5 px-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 font-semibold"
              >
                <option value="recommended">おすすめ度順（★5 ➔ ★3）</option>
                <option value="stars-desc">出現OBの最高能力★が高い順</option>
                <option value="schools-asc">参加高校数が少ない順（甲子園に行きやすい）</option>
                <option value="north-to-south">北から南順（北海道〜沖縄）</option>
              </select>
            </div>
          </div>

          {/* Quick Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-bold text-slate-500 mr-1">絞り込み:</span>

              <button
                onClick={() => setOnlyFewSchools(!onlyFewSchools)}
                className={`px-2.5 py-1 rounded-full border transition-all ${
                  onlyFewSchools
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold dark:bg-emerald-950 dark:text-emerald-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
                }`}
              >
                🏟️ 参加校数50校以下（甲子園出やすい）
              </button>

              <button
                onClick={() => setOnlyPitcherRich(!onlyPitcherRich)}
                className={`px-2.5 py-1 rounded-full border transition-all ${
                  onlyPitcherRich
                    ? 'bg-blue-100 text-blue-900 border-blue-400 font-bold dark:bg-blue-950 dark:text-blue-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
                }`}
              >
                🎯 投手率が高い
              </button>

              <button
                onClick={() => setOnlyCatcherAB(!onlyCatcherAB)}
                className={`px-2.5 py-1 rounded-full border transition-all ${
                  onlyCatcherAB
                    ? 'bg-amber-100 text-amber-900 border-amber-400 font-bold dark:bg-amber-950 dark:text-amber-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
                }`}
              >
                🛡️ キャッチャーA/Bあり
              </button>

              <button
                onClick={() => setOnlyOver400(!onlyOver400)}
                className={`px-2.5 py-1 rounded-full border transition-all ${
                  onlyOver400
                    ? 'bg-purple-100 text-purple-900 border-purple-400 font-bold dark:bg-purple-950 dark:text-purple-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
                }`}
              >
                🌟 ★400超えの怪物OBあり
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="text-[11px] text-blue-600 hover:underline dark:text-blue-400"
              >
                全OBを展開
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={collapseAll}
                className="text-[11px] text-slate-500 hover:underline"
              >
                折りたたむ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Regions Grid */}
      <div className="space-y-4">
        {filteredRegions.map((region) => {
          const isExpanded = expandedPrefs.includes(region.pref);

          return (
            <div
              key={region.pref}
              className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm border transition-all overflow-hidden ${
                region.starsRating === 5
                  ? 'border-amber-300 dark:border-amber-800/80 shadow-amber-500/5'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              {/* Card Header (Summary) */}
              <div className="p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⚾</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">
                            {region.pref}
                          </h3>
                          <span className="text-xs text-slate-400 font-medium">
                            ({region.region})
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${getTierBadge(region.tier)}`}>
                            {region.tier}ランク
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          {getStarDisplay(region.starsRating)}
                          <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                            おすすめ度 ★{region.starsRating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Badges: Schools, Max Stars, Catcher */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1">
                      <School className="w-3.5 h-3.5 text-blue-500" />
                      参加高校: <b>約{region.schoolCountApprox}校</b> ({region.schoolCountLevel.split(' ')[0]})
                    </span>

                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-rose-500" />
                      最高能力: <b className={getStarColor(region.maxOBStars)}>★{region.maxOBStars}</b>
                    </span>

                    {region.hasCatcherAB && (
                      <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-700 font-bold flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-amber-600" />
                        {region.catchersABNames.join(', ')}
                      </span>
                    )}

                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                      出現OB: <b>{region.obList.length}</b>名
                    </span>
                  </div>
                </div>

                {/* Highlights & Reason */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-700/80 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="md:col-span-1 bg-amber-50/60 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
                    <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1 mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 2026リセマラの超目玉OB:
                    </span>
                    <p className="font-bold text-slate-800 dark:text-slate-200 text-xs">
                      {region.highlightOB}
                    </p>
                  </div>

                  <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5">
                      <Info className="w-3.5 h-3.5 text-blue-500" /> 地域攻略 ＆ 推薦理由:
                    </span>
                    <p>{region.summary}</p>
                  </div>
                </div>

                {/* Toggle Button */}
                <div className="mt-3 flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400">
                    ※2026年スタート時、以下の高校出身OBが新入生としてランダム入部します
                  </span>
                  <button
                    onClick={() => toggleExpand(region.pref)}
                    className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <span>{isExpanded ? '出現OB一覧を閉じる' : `出現転生OB一覧を表示 (${region.obList.length}名)`}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Collapsible OB Table (リセマラ出現選手一覧) */}
              {isExpanded && (
                <div className="bg-slate-50 dark:bg-slate-900/60 p-4 border-t border-slate-200 dark:border-slate-700 animate-fadeIn">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                          <th className="py-2 px-3">ポジション</th>
                          <th className="py-2 px-3">選手名</th>
                          <th className="py-2 px-3 text-right">★能力値</th>
                          <th className="py-2 px-3">高校名（所在地）</th>
                          <th className="py-2 px-2 text-center">入部年代</th>
                          <th className="py-2 px-4">主な特殊能力・特徴</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {region.obList.map((ob, idx) => (
                          <tr key={idx} className="hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors">
                            <td className="py-2 px-3">
                              <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200 inline-flex items-center justify-center text-xs font-black">
                                {ob.pos}
                              </span>
                            </td>

                            <td className="py-2 px-3">
                              <span className="font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                                {ob.name}
                                {ob.dlc && (
                                  <span className="text-[10px] px-1 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                    DLC
                                  </span>
                                )}
                              </span>
                            </td>

                            <td className="py-2 px-3 text-right">
                              <span className={`text-sm ${getStarColor(ob.stars)}`}>
                                ★{ob.stars}
                              </span>
                            </td>

                            <td className="py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">
                              {ob.highSchool}
                            </td>

                            <td className="py-2 px-2 text-center text-slate-500 dark:text-slate-400 font-mono">
                              {ob.year}年
                            </td>

                            <td className="py-2 px-4">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {ob.catcherGrade && (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-blue-100 text-blue-900 border border-blue-300 dark:bg-blue-950 dark:text-blue-200">
                                    捕手{ob.catcherGrade}
                                  </span>
                                )}
                                {ob.isGold && (
                                  <span className="badge-gold px-1.5 py-0.5 rounded text-[10px] font-bold">
                                    金特
                                  </span>
                                )}
                                {ob.special ? (
                                  <span className="text-slate-600 dark:text-slate-300">
                                    {ob.special}
                                  </span>
                                ) : (
                                  <span className="text-slate-400">-</span>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredRegions.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-400 text-xs">
            条件に一致する地域が見つかりませんでした。検索条件やフィルターを変更してください。
          </div>
        )}
      </div>
    </div>
  );
};
