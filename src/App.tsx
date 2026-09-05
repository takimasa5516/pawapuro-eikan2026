import React, { useState, useEffect } from 'react';
import { Header, TabType } from './components/Header';
import { RegionSelectTab } from './components/RegionSelectTab';
import { ScoutTab } from './components/ScoutTab';
import { PersonalityTab } from './components/PersonalityTab';
import { EvaluationTab } from './components/EvaluationTab';
import { CalendarTab } from './components/CalendarTab';
import { TrainingTab } from './components/TrainingTab';
import { RedAbilityTab } from './components/RedAbilityTab';
import { WorldCupManagerTab } from './components/WorldCupManagerTab';

export function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('regionSelect');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('pawapuro_eikan_dark');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('pawapuro_eikan_dark', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {currentTab === 'regionSelect' && <RegionSelectTab />}
        {currentTab === 'scout' && <ScoutTab />}
        {currentTab === 'personality' && <PersonalityTab />}
        {currentTab === 'evaluation' && <EvaluationTab />}
        {currentTab === 'calendar' && <CalendarTab />}
        {currentTab === 'training' && <TrainingTab />}
        {currentTab === 'redAbility' && <RedAbilityTab />}
        {currentTab === 'worldCup' && <WorldCupManagerTab />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-1.5">
          <p className="font-semibold text-slate-700 dark:text-slate-300">
            ⚾ パワプロ2026 栄冠ナイン 攻略情報集約Webアプリ
          </p>
          <p>
            参考データ：てるあき屋様 note「栄冠ナイン転生スカウト地域リスト」、Game8栄冠ナイン攻略班、有志検証データ
          </p>
          <p className="text-[11px] text-slate-400">
            ※本ツールは非公式の攻略支援Webツールです。実在の球団・選手名およびゲーム内権利は各権利元に帰属します。
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
