import React, { useState, useMemo } from 'react';
import { PLAYERS_DATA, REGIONS, POSITIONS, Player } from '../data/players';
import { Search, Sparkles, Shield, Bookmark, Filter, Award, ChevronDown } from 'lucide-react';

export const ScoutTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('すべて');
  const [selectedPref, setSelectedPref] = useState<string>('すべて');
  const [selectedPos, setSelectedPos] = useState<string>('すべて');
  const [onlyGold, setOnlyGold] = useState(false);
  const [onlyCatcherB, setOnlyCatcherB] = useState(false);
  const [onlyOver300, setOnlyOver300] = useState(false);
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

  // Prefectures list based on region
  const availablePrefectures = useMemo(() => {
    const set = new Set<string>();
    PLAYERS_DATA.forEach(p => {
      if (selectedRegion === 'すべて' || p.region === selectedRegion) {
        set.add(p.pref);
      }
    });
    return ['すべて', ...Array.from(set)];
  }, [selectedRegion]);

  const filteredPlayers = useMemo(() => {
    return PLAYERS_DATA.filter(p => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchPref = p.pref.toLowerCase().includes(q);
        const matchSpecial = p.special.toLowerCase().includes(q);
        const matchYear = p.year.toString().includes(q);
        if (!matchName && !matchPref && !matchSpecial && !matchYear) return false;
      }
      if (selectedRegion !== 'すべて' && p.region !== selectedRegion) return false;
      if (selectedPref !== 'すべて' && p.pref !== selectedPref) return false;
      if (selectedPos !== 'すべて' && p.pos !== selectedPos) return false;
      if (onlyGold && !p.isGold) return false;
      if (onlyCatcherB && !(p.catcherGrade === 'A' || p.catcherGrade === 'B')) return false;
      if (onlyOver300 && p.stars < 300) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'stars-desc') return b.stars - a.stars;
      if (sortBy === 'stars-asc') return a.stars - b.stars;
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      return a.name.localeCompare(b.name, 'ja');
    });
  }, [searchQuery, selectedRegion, selectedPref, selectedPos, onlyGold, onlyCatcherB, onlyOver300, sortBy]);

  const getStarColor = (stars: number) => {
    if (stars >= 400) return 'text-purple-600 dark:text-purple-400 font-extrabold';
    if (stars >= 350) return 'text-rose-600 dark:text-rose-400 font-bold';
    if (stars >= 300) return 'text-amber-600 dark:text-amber-400 font-bold';
    if (stars >= 270) return 'text-blue-600 dark:text-blue-400 font-semibold';
    return 'text-emerald-600 dark:text-emerald-400 font-semibold';
  };

  return (
    <div className="space-y-6">
      {/* Overview & Tips Card */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <span>🏟️</span> 転生スカウト ＆ リセマラ出現選手データベース
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              全国47都道府県の★250以上・金特持ち・キャッチャーB以上の強力転生選手を完全収録！
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs bg-white/15 px-3 py-1.5 rounded-xl border border-white/20">
            <span>掲載選手数:</span>
            <span className="font-extrabold text-amber-300 text-sm">{PLAYERS_DATA.length}名</span>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="mt-4 pt-3 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="bg-black/20 p-2 rounded-lg">
            <span className="text-amber-300 font-bold">★400超 神ランク:</span>
            <span className="ml-1">大谷、イチロー、王貞治、田中将大</span>
          </div>
          <div className="bg-black/20 p-2 rounded-lg">
            <span className="text-blue-200 font-bold">球界の頭脳（捕手S）:</span>
            <span className="ml-1">古田(兵庫)、野村(京都)</span>
          </div>
          <div className="bg-black/20 p-2 rounded-lg">
            <span className="text-amber-300 font-bold">キャッチャーA/B:</span>
            <span className="ml-1">阿部、森昌彦、矢野、中村悠平 等</span>
          </div>
          <div className="bg-black/20 p-2 rounded-lg">
            <span className="text-rose-300 font-bold">リセマラ推奨地域:</span>
            <span className="ml-1">兵庫、東京、愛知、大阪、千葉</span>
          </div>
        </div>
      </div>

      {/* Filter Toolbar (Uma Musume Style) */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        {/* Search & Sort */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="選手名、都道府県、特能（例: アーチスト、キャッチャーB、1994）で検索..."
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
              className="w-full py-2 px-3 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-500">都道府県:</span>
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
            該当: <b className="text-slate-700 dark:text-slate-200">{filteredPlayers.length}</b> 件
          </span>
        </div>
      </div>

      {/* Player Card Grid (Responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredPlayers.map((player) => {
          const isSaved = savedIds.includes(player.id);
          return (
            <div
              key={player.id}
              className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
            >
              <div>
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
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <span className="font-medium text-blue-600 dark:text-blue-400">{player.pref}</span>
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

                {/* Badges / Special Abilities */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {player.isGold && (
                    <span className="badge-gold px-2 py-0.5 rounded text-xs flex items-center gap-1 shadow-sm">
                      <Award className="w-3 h-3 text-amber-600" />
                      {player.special}
                    </span>
                  )}
                  {player.catcherGrade && (
                    <span className="badge-blue px-2 py-0.5 rounded text-xs flex items-center gap-1 shadow-sm">
                      <Shield className="w-3 h-3 text-blue-600" />
                      キャッチャー{player.catcherGrade}
                    </span>
                  )}
                  {player.special === '二刀流' && (
                    <span className="badge-green px-2 py-0.5 rounded text-xs">
                      二刀流
                    </span>
                  )}
                  {player.isRecommend && !player.isGold && !player.catcherGrade && (
                    <span className="bg-purple-100 text-purple-800 border border-purple-300 text-xs px-2 py-0.5 rounded dark:bg-purple-950 dark:text-purple-300">
                      球界代表級
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Save Button & Advice */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500">
                <span>リセマラ狙い目: {player.year}年 {player.pref}</span>
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
