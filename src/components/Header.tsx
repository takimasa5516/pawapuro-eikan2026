import React from 'react';
import { 
  Users, 
  Sparkles, 
  Search, 
  Calendar, 
  Dumbbell, 
  ShieldAlert, 
  Trophy, 
  Moon, 
  Sun 
} from 'lucide-react';

export type TabType = 
  | 'scout' 
  | 'personality' 
  | 'evaluation' 
  | 'calendar' 
  | 'training' 
  | 'redAbility' 
  | 'worldCup';

interface HeaderProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  darkMode,
  onToggleDarkMode
}) => {
  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'scout', label: 'スカウト＆リセマラ', icon: <Users className="w-4 h-4" /> },
    { id: 'personality', label: '性格・戦術・伝令', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'evaluation', label: 'スカウト寸評逆引き', icon: <Search className="w-4 h-4" /> },
    { id: 'calendar', label: '月別イベント', icon: <Calendar className="w-4 h-4" /> },
    { id: 'training', label: '練習・合宿・戦術', icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'redAbility', label: '特殊能力・赤特打消し', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'worldCup', label: '世界大会・マネージャー', icon: <Trophy className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm dark:bg-slate-900/95 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-black text-xl">
              ⚾
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-amber-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-amber-400">
                  パワプロ2026 栄冠ナイン
                </span>
                <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-300 dark:bg-blue-900/60 dark:text-blue-200 dark:border-blue-700">
                  攻略集約ツール
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                転生スカウト・性格・寸評・年間イベント・赤特消去・練習効果 完全対応
              </p>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
              title={darkMode ? 'ライトモードに切替' : 'ダークモードに切替'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Tab Navigation (Scrollable on mobile) */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
