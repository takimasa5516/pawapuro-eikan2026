import React, { useState, useMemo } from 'react';
import { PLAYERS_DATA, REGIONS, POSITIONS, Player } from '../data/players';
import { Search, Sparkles, Shield, Bookmark, Filter, Award, School, MapPin, Compass, Info, ArrowRightLeft } from 'lucide-react';

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

  // Helper to get active region & prefecture according to current mode
  const getPlayerActiveLocation = (p: Player) => {
    if (searchMode === 'scout') {
      return { region: p.scoutRegion, pref: p.scoutPref };
    } else {
      return { region: p.highSchoolRegion, pref: p.highSchoolPref };
    }
  };

  // Prefectures list based on region and current mode
  const availablePrefectures = useMemo(() => {
    const set = new Set<string>();
    PLAYERS_DATA.forEach(p => {
      const loc = getPlayerActiveLocation(p);
      if (selectedRegion === 'すべて' || loc.region === selectedRegion) {
        set.add(loc.pref);
      }
    });
    return ['すべて', ...Array.from(set).sort((a, b) => a.localeCompare(b, 'ja'))];
  }, [selectedRegion, searchMode]);

  const filteredPlayers = useMemo(() => {
    return PLAYERS_DATA.filter(p => {
      const loc = getPlayerActiveLocation(p);

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchScoutPref = p.scoutPref.toLowerCase().includes(q);
        const matchHSPref = p.highSchoolPref.toLowerCase().includes(q);
        const matchSchool = p.highSchool.toLowerCase().includes(q);
        const matchSpecial = p.special.toLowerCase().includes(q);
        const matchYear = p.year.toString().includes(q);
        if (!matchName && !matchScoutPref && !matchHSPref && !matchSchool && !matchSpecial && !matchYear) {
          return false;
        }
      }

      if (selectedRegion !== 'すべて' && loc.region !== selectedRegion) return false;
      if (selectedPref !== 'すべて' && loc.pref !== selectedPref) return false;
      if (selectedPos !== 'すべて' && p.pos !== selectedPos) return false;
      if (onlyGold && !p.isGold) return false;
      if (onlyCatcherB && !(p.catcherGrade === 'A' || p.catcherGrade === 'B')) return false;
      if (onlyOver300 && p.stars < 300) return false;
      if (onlyCrossBorder && !p.isCrossBorder) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'stars-desc') return b.stars - a.stars;
      if (sortBy === 'stars-asc') return a.stars - b.stars;
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      return a.name.localeCompare(b.name, 'ja');
    });
  }, [searchQuery, selectedRegion, selectedPref, selectedPos, onlyGold, onlyCatcherB, onlyOver300, onlyCrossBorder, sortBy, searchMode]);

  const getStarColor = (stars: number) => {
    if (stars >= 400) return 'text-purple-600 dark:text-purple-400 font-extrabold';
    if (stars >= 350) return 'text-rose-600 dark:text-rose-400 font-bold';
    if (stars >= 300) return 'text-amber-600 dark:text-amber-400 font-bold';
    if (stars >= 270) return 'text-blue-600 dark:text-blue-400 font-semibold';
    return 'text-emerald-600 dark:text-emerald-400 font-semibold';
  };

  const crossBorderCount = useMemo(() => {
    return PLAYERS_DATA.filter(p => p.isCrossBorder).length;
  }, []);

  return (
    <div className="space-y-5">
      {/* Mode Selector Hero Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>🏟️</span> 転生スカウト ＆ リセマラ出現選手DB
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              栄冠ナインの「ゲーム中スカウト（出身地）」と「初回リセマラ（高校所在地）」を完全分離・両対応！
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-xl transition-all border border-white/30"
            >
              <Info className="w-3.5 h-3.5 text-amber-300" />
              <span>地域差の仕様解説</span>
            </button>
            <div className="text-xs bg-black/30 px-3 py-1.5 rounded-xl border border-white/20 font-bold text-amber-300">
              全 {PLAYERS_DATA.length} 名
            </div>
          </div>
        </div>

        {/* Dual Mode Tabs Switcher */}
        <div className="mt-4 pt-3 border-t border-white/20">
          <div className="text-xs font-bold text-blue-200 mb-2 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" /> 探索目的を選んでください:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Scout Mode Tab */}
            <button
              onClick={() => {
                setSearchMode('scout');
                setSelectedPref('すべて');
              }}
              className={`p-3 rounded-xl text-left transition-all border ${
                searchMode === 'scout'
                  ? 'bg-white text-slate-900 shadow-md border-white ring-2 ring-amber-400'
                  : 'bg-white/10 hover:bg-white/15 text-white border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <span className="text-lg">🎒</span>
                  <span>ゲーム進行中 スカウトモード</span>
                </div>
                {searchMode === 'scout' && (
                  <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">
                    選択中
                  </span>
                )}
              </div>
              <p className={`text-xs mt-1 ${searchMode === 'scout' ? 'text-slate-600' : 'text-blue-100'}`}>
                <b>【出身地（中学所在地）基準】</b> 11月〜2月に中学生をスカウトしに行く時の出現地域で絞り込みます。
              </p>
            </button>

            {/* Reroll Mode Tab */}
            <button
              onClick={() => {
                setSearchMode('reroll');
                setSelectedPref('すべて');
              }}
              className={`p-3 rounded-xl text-left transition-all border ${
                searchMode === 'reroll'
                  ? 'bg-white text-slate-900 shadow-md border-white ring-2 ring-amber-400'
                  : 'bg-white/10 hover:bg-white/15 text-white border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <span className="text-lg">🏫</span>
                  <span>開始時 リセマラモード</span>
                </div>
                {searchMode === 'reroll' && (
                  <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">
                    選択中
                  </span>
                )}
              </div>
              <p className={`text-xs mt-1 ${searchMode === 'reroll' ? 'text-slate-600' : 'text-blue-100'}`}>
                <b>【高校の所在地 基準】</b> ゲーム開始時に選択する都道府県の出身校OB（新入生）で絞り込みます。
              </p>
            </button>
          </div>
        </div>

        {/* Accordion Explanation Box */}
        {showExplanation && (
          <div className="mt-3 p-3.5 bg-black/40 rounded-xl text-xs space-y-2 border border-white/20 animate-fadeIn">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <span>💡 なぜ「スカウト」と「リセマラ」で地域が違うのか？</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              栄冠ナインでは、<b>「新入生（ゲーム開始時リセマラ）」は高校の所在地</b>を基準にそのOBが入学してきますが、
              <b>「進行中の新入生スカウト」は中学所在地（出身地）</b>に出現します。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
              <div className="bg-white/10 p-2 rounded-lg">
                <span className="text-amber-300 font-bold">ダルビッシュ有:</span><br/>
                • スカウト先: <b>大阪府</b>（出身・羽曳野ボーイズ）<br/>
                • リセマラ開始: <b>宮城県</b>（東北高校）
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <span className="text-amber-300 font-bold">田中将大 / 坂本勇人:</span><br/>
                • スカウト先: <b>兵庫県</b>（二人とも兵庫県伊丹市出身）<br/>
                • リセマラ開始: 田中＝<b>北海道</b>(駒苫) / 坂本＝<b>青森県</b>(光星)
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <span className="text-amber-300 font-bold">松坂大輔:</span><br/>
                • スカウト先: <b>東京都</b>（江戸川南シニア）<br/>
                • リセマラ開始: <b>神奈川県</b>（横浜高校）
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <span className="text-amber-300 font-bold">山本由伸:</span><br/>
                • スカウト先: <b>岡山県</b>（備前ボーイズ）<br/>
                • リセマラ開始: <b>宮崎県</b>（都城高校）
              </div>
            </div>
            <p className="text-slate-300 text-[10px]">
              ※当アプリではこの越境進学選手（全{crossBorderCount}名）をすべて識別・分離管理しています。
            </p>
          </div>
        )}
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        {/* Search & Sort */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`選手名、都道府県、高校名（例: 東北、光星、横浜）、特能で検索...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 whitespace-nowrap font-medium">並び替え:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full py-2 px-3 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            >
              <option value="stars-desc">★能力値が高い順</option>
              <option value="stars-asc">★能力値が低い順</option>
              <option value="year-desc">年代が新しい順</option>
              <option value="year-asc">年代が古い順</option>
              <option value="name">五十音順</option>
            </select>
          </div>
        </div>

        {/* Region & Prefecture Tabs */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="font-bold text-slate-500 mr-1 whitespace-nowrap flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> 地方:
            </span>
            {REGIONS.map(reg => (
              <button
                key={reg}
                onClick={() => {
                  setSelectedRegion(reg);
                  setSelectedPref('すべて');
                }}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedRegion === reg
                    ? 'bg-blue-600 text-white shadow-sm font-bold'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-500">
              {searchMode === 'scout' ? 'スカウト出現県:' : 'リセマラ開始県:'}
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
            onClick={() => setOnlyCrossBorder(!onlyCrossBorder)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all ${
              onlyCrossBorder
                ? 'bg-amber-100 text-amber-900 border-amber-400 font-bold dark:bg-amber-950 dark:text-amber-200 shadow-sm ring-1 ring-amber-400'
                : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-amber-600" />
            越境進学選手のみ ({crossBorderCount})
          </button>

          <button
            onClick={() => setOnlyGold(!onlyGold)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all ${
              onlyGold
                ? 'bg-amber-100 text-amber-900 border-amber-400 font-bold dark:bg-amber-950 dark:text-amber-200'
                : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-500" /> 金特持ちのみ
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredPlayers.map((player) => {
          const isSaved = savedIds.includes(player.id);

          return (
            <div
              key={player.id}
              className={`bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border transition-all flex flex-col justify-between ${
                player.isCrossBorder
                  ? 'border-amber-300 dark:border-amber-800/80 hover:border-amber-500'
                  : 'border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500'
              }`}
            >
              <div>
                {/* Header: Pos, Name, Stars */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200 flex items-center justify-center text-xs font-black border border-blue-200 dark:border-blue-800">
                      {player.pos}
                    </span>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        {player.name}
                        {player.dlc && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                            DLC
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          {searchMode === 'scout' ? `🎒 ${player.scoutPref}` : `🏫 ${player.highSchoolPref}`}
                        </span>
                        <span>•</span>
                        <span>{player.year}年代</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`text-lg leading-none ${getStarColor(player.stars)}`}>
                      ★{player.stars}
                    </span>
                  </div>
                </div>

                {/* Cross-border and High School Information Badge */}
                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700/80">
                  {player.isCrossBorder ? (
                    <div className="bg-amber-50 dark:bg-amber-950/40 rounded-lg p-2 border border-amber-200 dark:border-amber-900/60 text-[11px] space-y-1">
                      <div className="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200">
                        <span className="flex items-center gap-1">
                          <ArrowRightLeft className="w-3 h-3 text-amber-600" />
                          <span>越境進学選手</span>
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 font-bold">
                          地域注意
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 dark:text-slate-300">
                        <div>
                          <span className="text-slate-400 block text-[10px]">🎒 スカウト (出身):</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{player.scoutPref}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">🏫 リセマラ (高校):</span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            {player.highSchoolPref} {player.highSchool ? `(${player.highSchool})` : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <School className="w-3 h-3 text-slate-400" />
                        <span>出身高校: <b>{player.highSchool ? `${player.highSchool}高校` : `${player.scoutPref}内の高校`}</b></span>
                      </span>
                      <span className="text-[10px] text-slate-400">スカウト・リセマラ共通</span>
                    </div>
                  )}
                </div>

                {/* Badges / Special Abilities */}
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {player.isGold && (
                    <span className="badge-gold px-2 py-0.5 rounded text-xs flex items-center gap-1 shadow-sm font-semibold">
                      <Award className="w-3 h-3 text-amber-600" />
                      {player.special}
                    </span>
                  )}
                  {player.catcherGrade && (
                    <span className="badge-blue px-2 py-0.5 rounded text-xs flex items-center gap-1 shadow-sm font-semibold">
                      <Shield className="w-3 h-3 text-blue-600" />
                      キャッチャー{player.catcherGrade}
                    </span>
                  )}
                  {player.special === '二刀流' && (
                    <span className="badge-green px-2 py-0.5 rounded text-xs font-semibold">
                      二刀流
                    </span>
                  )}
                  {player.isRecommend && !player.isGold && !player.catcherGrade && (
                    <span className="bg-purple-100 text-purple-800 border border-purple-300 text-xs px-2 py-0.5 rounded dark:bg-purple-950 dark:text-purple-300 font-semibold">
                      球界代表級
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Save Button & Mode-Specific Advice */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500">
                <div className="truncate pr-2 font-medium">
                  {searchMode === 'scout' ? (
                    <span className="text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      スカウト先: <b>{player.scoutPref}</b> ({player.year}年)
                    </span>
                  ) : (
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <School className="w-3 h-3" />
                      リセマラ開始: <b>{player.highSchoolPref}</b> ({player.highSchool ? `${player.highSchool}高・` : ''}{player.year}年)
                    </span>
                  )}
                </div>

                <button
                  onClick={() => toggleSave(player.id)}
                  className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${
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
