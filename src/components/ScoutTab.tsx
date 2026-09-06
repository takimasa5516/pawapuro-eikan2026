import React, { useState, useMemo } from 'react';
import { PLAYERS_DATA, REGIONS, POSITIONS, PREFECTURE_ORDER, Player } from '../data/players';
import { getPlayerDetails, getStatGradeColor } from '../data/playerDetails';
import { 
  Search, 
  Sparkles, 
  Shield, 
  Bookmark, 
  Award, 
  School, 
  MapPin, 
  ArrowRightLeft, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Activity, 
  Zap,
  Info
} from 'lucide-react';

export const ScoutTab: React.FC = () => {
  // Mode: 'scout' (進行中スカウト: 出身地/中学基準) vs 'reroll' (初回リセマラ: 高校所在地基準)
  const [searchMode, setSearchMode] = useState<'scout' | 'reroll'>('scout');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('すべて');
  const [selectedPref, setSelectedPref] = useState<string>('すべて');
  const [selectedPos, setSelectedPos] = useState<string>('すべて');
  const [onlyGold, setOnlyGold] = useState(false);
  const [onlyCatcherB, setOnlyCatcherB] = useState(false);
  const [onlyOver300, setOnlyOver300] = useState(false);
  const [onlyCrossBorder, setOnlyCrossBorder] = useState(false);
  const [onlyNoRed, setOnlyNoRed] = useState(false);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [viewDensity, setViewDensity] = useState<'standard' | 'detailed'>('standard');
  const [showExplanation, setShowExplanation] = useState(false);
  const [sortBy, setSortBy] = useState<'stars-desc' | 'stars-asc' | 'year-desc' | 'year-asc' | 'name'>('stars-desc');
  
  const [savedIds, setSavedIds] = useState<number[]>(() => {
    try {
      const item = localStorage.getItem('pawapuro_eikan_saved');
      return item ? JSON.parse(item) : [];
    } catch {
      return [];
    }
  });

  const toggleSave = (id: number) => {
    setSavedIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      localStorage.setItem('pawapuro_eikan_saved', JSON.stringify(next));
      return next;
    });
  };

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Helper to get active region & prefecture according to current mode
  const getPlayerActiveLocation = (p: Player) => {
    if (searchMode === 'scout') {
      return { region: p.scoutRegion, pref: p.scoutPref };
    } else {
      return { region: p.highSchoolRegion, pref: p.highSchoolPref };
    }
  };

  // Flexible region matcher (supports '中国', '四国', '中国・四国', '北信越', '甲信越・北陸')
  const matchRegion = (playerRegion: string, filterRegion: string) => {
    if (filterRegion === 'すべて') return true;
    if (filterRegion === playerRegion) return true;
    if (filterRegion === '中国・四国' && (playerRegion === '中国' || playerRegion === '四国')) return true;
    if ((filterRegion === '北信越' || filterRegion === '甲信越・北陸') && (playerRegion === '北信越' || playerRegion === '甲信越・北陸')) return true;
    return false;
  };

  // Prefectures list based on region and current mode (ordered North to South)
  const availablePrefectures = useMemo(() => {
    const set = new Set<string>();
    PLAYERS_DATA.forEach(p => {
      const loc = getPlayerActiveLocation(p);
      if (matchRegion(loc.region, selectedRegion)) {
        set.add(loc.pref);
      }
    });
    return [
      'すべて',
      ...Array.from(set).sort((a, b) => {
        const idxA = PREFECTURE_ORDER.indexOf(a);
        const idxB = PREFECTURE_ORDER.indexOf(b);
        return (idxA !== -1 ? idxA : 999) - (idxB !== -1 ? idxB : 999);
      })
    ];
  }, [selectedRegion, searchMode]);

  const filteredPlayers = useMemo(() => {
    return PLAYERS_DATA.filter(p => {
      const loc = getPlayerActiveLocation(p);
      const details = getPlayerDetails(p);

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchScoutPref = p.scoutPref.toLowerCase().includes(q);
        const matchHSPref = p.highSchoolPref.toLowerCase().includes(q);
        const matchSchool = p.highSchool.toLowerCase().includes(q);
        const matchSpecial = p.special.toLowerCase().includes(q);
        const matchYear = p.year.toString().includes(q);
        const matchGold = details.goldAbilities.some(g => g.toLowerCase().includes(q));
        const matchBlue = details.blueAbilities.some(b => b.toLowerCase().includes(q));
        const matchRed = details.redAbilities.some(r => r.toLowerCase().includes(q));
        if (!matchName && !matchScoutPref && !matchHSPref && !matchSchool && !matchSpecial && !matchYear && !matchGold && !matchBlue && !matchRed) {
          return false;
        }
      }

      if (!matchRegion(loc.region, selectedRegion)) return false;
      if (selectedPref !== 'すべて' && loc.pref !== selectedPref) return false;
      if (selectedPos !== 'すべて' && p.pos !== selectedPos) return false;
      if (onlyGold && details.goldAbilities.length === 0 && !p.isGold) return false;
      if (onlyCatcherB && !(p.catcherGrade === 'A' || p.catcherGrade === 'B' || details.goldAbilities.includes('球界の頭脳'))) return false;
      if (onlyOver300 && p.stars < 300) return false;
      if (onlyCrossBorder && !p.isCrossBorder) return false;
      if (onlyNoRed && details.redAbilities.length > 0) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'stars-desc') return b.stars - a.stars;
      if (sortBy === 'stars-asc') return a.stars - b.stars;
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      return a.name.localeCompare(b.name, 'ja');
    });
  }, [searchQuery, selectedRegion, selectedPref, selectedPos, onlyGold, onlyCatcherB, onlyOver300, onlyCrossBorder, onlyNoRed, sortBy, searchMode]);

  const getStarColor = (stars: number) => {
    if (stars >= 400) return 'text-purple-600 dark:text-purple-400 font-black';
    if (stars >= 350) return 'text-rose-600 dark:text-rose-400 font-extrabold';
    if (stars >= 300) return 'text-amber-600 dark:text-amber-400 font-bold';
    if (stars >= 270) return 'text-blue-600 dark:text-blue-400 font-semibold';
    return 'text-emerald-600 dark:text-emerald-400 font-semibold';
  };

  const getPosBadgeColor = (pos: string) => {
    switch (pos) {
      case '投':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200 border-rose-300 dark:border-rose-800';
      case '捕':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200 border-blue-300 dark:border-blue-800';
      case '一':
      case '二':
      case '三':
      case '遊':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border-amber-300 dark:border-amber-800';
      default:
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800';
    }
  };

  const crossBorderCount = useMemo(() => {
    return PLAYERS_DATA.filter(p => p.isCrossBorder).length;
  }, []);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏟️</span>
              <h2 className="text-xl font-extrabold">転生スカウト ＆ リセマラ出現選手DB</h2>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold">全373名収録</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              1年入学時の<b>初期ステータス</b>および<b>金特（黄）・重要青特（青）・注意赤特（赤）</b>を併記！金特所持時は下位青特を自動整理
            </p>
          </div>
          
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl border border-white/20 text-xs font-semibold self-start sm:self-auto transition-colors"
          >
            <Info className="w-4 h-4 text-amber-300" />
            <span>スカウトとリセマラの違いとは？</span>
          </button>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="mt-4 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <span className="text-xs font-bold text-blue-200 whitespace-nowrap flex items-center gap-1">
            <span>🎯</span> 検索モード:
          </span>
          <div className="grid grid-cols-2 gap-2 flex-1 max-w-xl">
            <button
              onClick={() => setSearchMode('scout')}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                searchMode === 'scout'
                  ? 'bg-white text-blue-900 shadow-md ring-2 ring-white/50'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>進行中スカウトモード (出身中学校)</span>
            </button>
            <button
              onClick={() => setSearchMode('reroll')}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                searchMode === 'reroll'
                  ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-300/50'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <School className="w-3.5 h-3.5" />
              <span>初回リセマラモード (高校所在地)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Explanation Box */}
      {showExplanation && (
        <div className="bg-amber-50 dark:bg-amber-950/40 rounded-2xl p-4 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 space-y-2">
          <h4 className="font-extrabold text-sm flex items-center gap-2 text-amber-800 dark:text-amber-300">
            <Info className="w-4 h-4 text-amber-500" />
            栄冠ナインにおける「出身地」と「高校所在地」の重要ルール
          </h4>
          <p className="leading-relaxed">
            ・<b>進行中スカウト（秋〜冬のスカウト活動）</b>：選手の<b>出身中学校（出身地）</b>の都道府県に出現します。例：ダルビッシュ有は「大阪」のスカウトで出現。
          </p>
          <p className="leading-relaxed">
            ・<b>初回新入生リセマラ（4月ゲーム開始時）</b>：ゲーム開始時に選んだ<b>高校所在地</b>に出現します。例：ダルビッシュ有は「宮城（東北高校）」スタートで出現。
          </p>
          <p className="leading-relaxed">
            ・<b>金特と下位青特のルール</b>：球界の頭脳（金特）所持時はキャッチャーAを省略し、金特は<b>背景黄色</b>にて優先表示しています。
          </p>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 space-y-3">
        {/* Search Input & Sort & View Density */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="選手名、高校名、地域、特能（球界の頭脳、アベヒ、送球E、奪三振など）で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-semibold focus:outline-none"
            >
              <option value="stars-desc">★能力値 高い順</option>
              <option value="stars-asc">★能力値 低い順</option>
              <option value="year-desc">年代 新しい順</option>
              <option value="year-asc">年代 古い順</option>
              <option value="name">五十音順</option>
            </select>

            {/* 表示密度切り替え */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setViewDensity('standard')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  viewDensity === 'standard'
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                標準
              </button>
              <button
                onClick={() => setViewDensity('detailed')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  viewDensity === 'detailed'
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                全開
              </button>
            </div>
          </div>
        </div>

        {/* Region & Position Filters */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 mr-1">地方:</span>
            {REGIONS.map(reg => (
              <button
                key={reg}
                onClick={() => {
                  setSelectedRegion(reg);
                  setSelectedPref('すべて');
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  selectedRegion === reg
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-500">
              {searchMode === 'scout' ? 'スカウト出身県:' : 'リセマラ開始県:'}
            </span>
            <select
              value={selectedPref}
              onChange={(e) => setSelectedPref(e.target.value)}
              className="py-1 px-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-xs font-semibold"
            >
              {availablePrefectures.map(pref => (
                <option key={pref} value={pref}>{pref}</option>
              ))}
            </select>

            <span className="font-bold text-slate-500 ml-2">ポジション:</span>
            <div className="flex items-center gap-1">
              {POSITIONS.map(pos => (
                <button
                  key={pos}
                  onClick={() => setSelectedPos(pos)}
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    selectedPos === pos
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Toggles */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700 text-xs">
          <span className="font-bold text-slate-500">絞り込み:</span>
          
          <button
            onClick={() => setOnlyNoRed(!onlyNoRed)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all ${
              onlyNoRed
                ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold dark:bg-emerald-950 dark:text-emerald-200 shadow-sm ring-1 ring-emerald-400'
                : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            赤特なしのみ
          </button>

          <button
            onClick={() => setOnlyGold(!onlyGold)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all ${
              onlyGold
                ? 'bg-amber-300 text-amber-950 border-amber-500 font-black shadow-sm ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-600" /> 金特持ちのみ
          </button>
          
          <button
            onClick={() => setOnlyCatcherB(!onlyCatcherB)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all ${
              onlyCatcherB
                ? 'bg-blue-100 text-blue-900 border-blue-400 font-bold dark:bg-blue-950 dark:text-blue-200'
                : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-blue-500" /> キャッチャーA/Bのみ
          </button>

          <button
            onClick={() => setOnlyCrossBorder(!onlyCrossBorder)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all ${
              onlyCrossBorder
                ? 'bg-amber-100 text-amber-900 border-amber-400 font-bold dark:bg-amber-950 dark:text-amber-200 shadow-sm ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-amber-600" />
            越境進学選手 ({crossBorderCount})
          </button>
          
          <button
            onClick={() => setOnlyOver300(!onlyOver300)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all ${
              onlyOver300
                ? 'bg-purple-100 text-purple-900 border-purple-400 font-bold dark:bg-purple-950 dark:text-purple-200'
                : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-500" /> ★300以上の強豪
          </button>
          
          <span className="ml-auto text-slate-400 font-medium">
            該当: <b className="text-slate-800 dark:text-slate-100">{filteredPlayers.length}</b> 名
          </span>
        </div>
      </div>

      {/* Player Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredPlayers.map((player) => {
          const isSaved = savedIds.includes(player.id);
          const isExpanded = viewDensity === 'detailed' || expandedIds.includes(player.id);
          const details = getPlayerDetails(player);
          const { initialStats, goldAbilities, blueAbilities, redAbilities, advice } = details;
          const isPitcher = player.pos === '投';
          const isDual = player.special === '二刀流' || (initialStats.speed && initialStats.meet);

          return (
            <div
              key={player.id}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border transition-all flex flex-col justify-between ${
                player.isCrossBorder
                  ? 'border-amber-300 dark:border-amber-800/80 hover:border-amber-500'
                  : 'border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500'
              }`}
            >
              <div className="space-y-3">
                {/* Header: Pos, Name, Stars, Bookmark */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black border shrink-0 ${getPosBadgeColor(player.pos)}`}>
                      {player.pos}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-black text-base text-slate-900 dark:text-slate-100 truncate flex items-center gap-1.5">
                        <span className="truncate">{player.name}</span>
                        {player.dlc && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 font-bold shrink-0">
                            DLC
                          </span>
                        )}
                        {goldAbilities.length > 0 && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-300 text-amber-950 font-black shrink-0 shadow-sm border border-amber-400">
                            金特
                          </span>
                        )}
                        {player.catcherGrade && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-600 text-white font-black shrink-0 shadow-sm">
                            捕{player.catcherGrade}
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          {searchMode === 'scout' ? `🎒 ${player.scoutPref}` : `🏫 ${player.highSchoolPref}`}
                        </span>
                        <span>•</span>
                        <span>{player.year}年代</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-lg leading-none ${getStarColor(player.stars)}`}>
                      ★{player.stars}
                    </span>
                    <button
                      onClick={() => toggleSave(player.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isSaved
                          ? 'text-amber-500 bg-amber-50 dark:bg-amber-950'
                          : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                      title={isSaved ? 'キープ中（クリックで解除）' : 'お気に入り・キープ登録'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Cross-border and High School Information Badge */}
                <div>
                  {player.isCrossBorder ? (
                    <div className="bg-amber-50/80 dark:bg-amber-950/40 rounded-xl p-2 border border-amber-200 dark:border-amber-900/60 text-[11px] space-y-1">
                      <div className="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200">
                        <span className="flex items-center gap-1">
                          <ArrowRightLeft className="w-3.5 h-3.5 text-amber-600" />
                          <span>越境進学選手</span>
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 font-bold">
                          地域注意
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 dark:text-slate-300">
                        <div className="truncate">
                          <span className="text-slate-400 block text-[10px]">🎒 スカウト (出身):</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400 truncate">{player.scoutPref}</span>
                        </div>
                        <div className="truncate">
                          <span className="text-slate-400 block text-[10px]">🏫 リセマラ (高校):</span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400 truncate">
                            {player.highSchoolPref} {player.highSchool ? `(${player.highSchool})` : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between bg-slate-50 dark:bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-100 dark:border-slate-800">
                      <span className="flex items-center gap-1 truncate">
                        <School className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">高校: <b>{player.highSchool ? `${player.highSchool}高` : `${player.scoutPref}内`}</b></span>
                      </span>
                      <span className="text-[10px] text-slate-400 shrink-0">スカウト/高校同一</span>
                    </div>
                  )}
                </div>

                {/* 1年入学時 初期ステータス表示（併記ブロック） */}
                <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-2.5 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-blue-500" />
                      <span>1年入学時 初期能力</span>
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      {isDual ? '二刀流スペック' : isPitcher ? '投手スペック' : '野手スペック'}
                    </span>
                  </div>

                  {/* 投手能力バー */}
                  {(isPitcher || isDual) && initialStats.speed && (
                    <div className="space-y-1.5">
                      {isDual && <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400">【投手能力】</span>}
                      <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                        {/* 球速 */}
                        <div className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-900 border border-rose-300 dark:bg-rose-950 dark:text-rose-200 font-bold flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          <span>{initialStats.speed}km/h</span>
                        </div>

                        {/* コントロール */}
                        {(() => {
                          const c = getStatGradeColor(initialStats.control);
                          return (
                            <div className={`px-2 py-0.5 rounded-md border flex items-center gap-1 ${c.badgeClass}`}>
                              <span className="text-[10px] font-sans font-medium text-slate-500 dark:text-slate-400">制球</span>
                              <span className="font-black">{c.grade}</span>
                              <span className="text-[10px] font-sans">{c.num}</span>
                            </div>
                          );
                        })()}

                        {/* スタミナ */}
                        {(() => {
                          const s = getStatGradeColor(initialStats.stamina);
                          return (
                            <div className={`px-2 py-0.5 rounded-md border flex items-center gap-1 ${s.badgeClass}`}>
                              <span className="text-[10px] font-sans font-medium text-slate-500 dark:text-slate-400">スタ</span>
                              <span className="font-black">{s.grade}</span>
                              <span className="text-[10px] font-sans">{s.num}</span>
                            </div>
                          );
                        })()}
                      </div>

                      {/* 変化球 */}
                      {initialStats.breakingBalls && (
                        <div className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1 pt-0.5">
                          <span className="font-bold text-slate-400 text-[10px]">球種:</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{initialStats.breakingBalls}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 野手能力バー */}
                  {(!isPitcher || isDual) && initialStats.meet && (
                    <div className="space-y-1">
                      {isDual && <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 block pt-1">【野手能力】</span>}
                      <div className="flex flex-wrap gap-1 text-xs font-mono">
                        {/* 弾道 */}
                        <div className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200 font-bold flex items-center gap-0.5">
                          <span className="text-[10px] font-sans text-amber-700 dark:text-amber-400">弾</span>
                          <span>{initialStats.trajectory || 2}</span>
                        </div>

                        {/* ミート */}
                        {(() => {
                          const m = getStatGradeColor(initialStats.meet);
                          return (
                            <div className={`px-1.5 py-0.5 rounded border flex items-center gap-0.5 ${m.badgeClass}`}>
                              <span className="text-[10px] font-sans text-slate-500">ミ</span>
                              <span className="font-black">{m.grade}</span>
                              <span className="text-[10px] font-sans">{m.num}</span>
                            </div>
                          );
                        })()}

                        {/* パワー */}
                        {(() => {
                          const p = getStatGradeColor(initialStats.power);
                          return (
                            <div className={`px-1.5 py-0.5 rounded border flex items-center gap-0.5 ${p.badgeClass}`}>
                              <span className="text-[10px] font-sans text-slate-500">パ</span>
                              <span className="font-black">{p.grade}</span>
                              <span className="text-[10px] font-sans">{p.num}</span>
                            </div>
                          );
                        })()}

                        {/* 走力 */}
                        {(() => {
                          const r = getStatGradeColor(initialStats.run);
                          return (
                            <div className={`px-1.5 py-0.5 rounded border flex items-center gap-0.5 ${r.badgeClass}`}>
                              <span className="text-[10px] font-sans text-slate-500">走</span>
                              <span className="font-black">{r.grade}</span>
                              <span className="text-[10px] font-sans">{r.num}</span>
                            </div>
                          );
                        })()}

                        {/* 肩力 */}
                        {(() => {
                          const a = getStatGradeColor(initialStats.arm);
                          return (
                            <div className={`px-1.5 py-0.5 rounded border flex items-center gap-0.5 ${a.badgeClass}`}>
                              <span className="text-[10px] font-sans text-slate-500">肩</span>
                              <span className="font-black">{a.grade}</span>
                              <span className="text-[10px] font-sans">{a.num}</span>
                            </div>
                          );
                        })()}

                        {/* 守備力 */}
                        {(() => {
                          const f = getStatGradeColor(initialStats.fielding);
                          return (
                            <div className={`px-1.5 py-0.5 rounded border flex items-center gap-0.5 ${f.badgeClass}`}>
                              <span className="text-[10px] font-sans text-slate-500">守</span>
                              <span className="font-black">{f.grade}</span>
                              <span className="text-[10px] font-sans">{f.num}</span>
                            </div>
                          );
                        })()}

                        {/* 捕球 */}
                        {(() => {
                          const c = getStatGradeColor(initialStats.catching);
                          return (
                            <div className={`px-1.5 py-0.5 rounded border flex items-center gap-0.5 ${c.badgeClass}`}>
                              <span className="text-[10px] font-sans text-slate-500">捕</span>
                              <span className="font-black">{c.grade}</span>
                              <span className="text-[10px] font-sans">{c.num}</span>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </div>

                {/* 特能ブロック: 金特(黄色) ＆ 青特(青色) ＆ 赤特(赤色) */}
                <div className="space-y-1.5">
                  {/* 金特 (背景黄色) */}
                  {goldAbilities.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="text-[10px] font-black bg-amber-400 text-amber-950 px-1.5 py-0.5 rounded border border-amber-500 shrink-0 flex items-center gap-0.5 shadow-sm">
                        <Award className="w-2.5 h-2.5" />
                        <span>金特</span>
                      </span>
                      {goldAbilities.map((ab, idx) => (
                        <span 
                          key={idx}
                          className="text-[11px] font-black px-2 py-0.5 rounded-md bg-amber-300 dark:bg-amber-400 text-amber-950 border border-amber-500 dark:border-amber-300 shadow-sm flex items-center gap-1 ring-1 ring-amber-400/40"
                        >
                          <span className="text-amber-700 dark:text-amber-900">★</span>
                          <span>{ab}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 青特 */}
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-900 shrink-0 flex items-center gap-0.5">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>青特</span>
                    </span>
                    {blueAbilities.length > 0 ? (
                      blueAbilities.map((ab, idx) => (
                        <span 
                          key={idx}
                          className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60"
                        >
                          {ab}
                        </span>
                      ))
                    ) : (
                      <span className="text-[11px] text-slate-400">特能なし</span>
                    )}
                  </div>

                  {/* 赤特 */}
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="text-[10px] font-black text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-900 shrink-0 flex items-center gap-0.5">
                      <AlertTriangle className="w-2.5 h-2.5" />
                      <span>赤特</span>
                    </span>
                    {redAbilities.length > 0 ? (
                      redAbilities.map((ab, idx) => (
                        <span 
                          key={idx}
                          className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-900"
                        >
                          {ab}
                        </span>
                      ))
                    ) : (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>赤特なし (育成安心)</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* 展開時：攻略アドバイス */}
                {isExpanded && advice && (
                  <div className="bg-amber-50/60 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 leading-relaxed animate-fadeIn">
                    <b className="text-amber-800 dark:text-amber-300 block mb-0.5">💡 育成アドバイス:</b>
                    {advice}
                    {redAbilities.length > 0 && (
                      <span className="block mt-1 text-[11px] text-rose-700 dark:text-rose-300">
                        ※赤特（{redAbilities.join('、')}）は特別指導マスや公式戦での消去を優先推奨。
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer: Advice Toggle & Location Tip */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500">
                <div className="truncate pr-2 font-medium">
                  {searchMode === 'scout' ? (
                    <span className="text-blue-600 dark:text-blue-400 flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">スカウト先: <b>{player.scoutPref}</b> ({player.year}年)</span>
                    </span>
                  ) : (
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 truncate">
                      <School className="w-3 h-3 shrink-0" />
                      <span className="truncate">開始高校: <b>{player.highSchoolPref}</b> ({player.highSchool ? `${player.highSchool}高・` : ''}{player.year}年)</span>
                    </span>
                  )}
                </div>

                {advice && viewDensity === 'standard' && (
                  <button
                    onClick={() => toggleExpand(player.id)}
                    className="flex items-center gap-0.5 text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-semibold shrink-0 ml-1 py-0.5 px-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors"
                  >
                    <span>{isExpanded ? '閉じる' : '詳細'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <p className="text-slate-400 text-sm">条件に一致する選手が見つかりませんでした。</p>
        </div>
      )}
    </div>
  );
};
