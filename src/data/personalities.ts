export interface TacticDetail {
  name: string;
  desc: string;
  batterEffect: string;
  pitcherEffect: string;
}

export interface Personality {
  name: string;
  kana: string;
  summary: string;
  statGrowth: string[];
  tactics: {
    normal: TacticDetail;
    high: TacticDetail;
    rateNote: string;
    year1: string;
    year2: string;
    year3: string;
  };
  defenseOrder: {
    command: '励ます' | '盛り上げる' | '助言する' | 'ホメる';
    target: string;
    duration: string;
    year1: string;
    year2: string;
    year3: string;
    description: string;
  };
  captainEvent: {
    title: string;
    details: string[];
  };
  recommendation: string;
}

export const PERSONALITIES_DATA: Personality[] = [
  {
    name: '天才肌',
    kana: 'てんさいはだ',
    summary: '全ステータスが非常に伸びやすく、固有戦術・伝令ともに最高峰のエース候補',
    statGrowth: ['全ステータス（均等かつ大幅に成長）'],
    tactics: {
      normal: {
        name: '急成長',
        desc: '試合終了時に獲得できる経験値が2倍になる（1年生限定戦術）',
        batterEffect: '経験値2倍獲得',
        pitcherEffect: '経験値2倍獲得'
      },
      high: {
        name: '才能開花',
        desc: '調子+1段階、全ステータスが極大アップし、全戦術コマンドレベルが最大解放される',
        batterEffect: 'ミート・パワー・走力等極大UP、調子+1',
        pitcherEffect: '球速・コントロール・スタミナ等極大UP、調子+1'
      },
      rateNote: '1年次は「急成長」固定。2・3年次は必ず「才能開花」が発動！',
      year1: '急成長 (100%)',
      year2: '才能開花 (100%)',
      year3: '才能開花 (100%)'
    },
    defenseOrder: {
      command: '助言する',
      target: '登板中の投手',
      duration: '1イニング間有効',
      year1: '球速+1km/h、コントロール+20',
      year2: '球速+2km/h、コントロール+30',
      year3: '球速+3km/h、コントロール+40',
      description: '投手のコントロールを大幅に引き上げ、高レベルの投球戦術を引き出します。'
    },
    captainEvent: {
      title: '全員の練習経験値アップ',
      details: ['部員全員の練習指示による獲得経験値が中アップ（チーム全体の底上げに最適）']
    },
    recommendation: '★最優先育成枠。入学してきたら即スタメンまたは主力投手として大切に育成推奨。'
  },
  {
    name: '内気',
    kana: 'うちき',
    summary: '2・3年時の固有戦術「〇〇の魔物」が栄冠ナイン最強。どんな格上強豪校も倒せる必須性格',
    statGrowth: ['変化球', '守備力', '捕球'],
    tactics: {
      normal: {
        name: 'ラッキーボーイ',
        desc: '自身にランダムで青特殊能力が付与され、調子が1段階上昇する',
        batterEffect: 'ラッキーボーイ発動、調子+1段階',
        pitcherEffect: '調子+1段階、スタミナ回復'
      },
      high: {
        name: '地方球場の魔物 / 甲子園の魔物',
        desc: '【栄冠ナイン最強戦術】1イニング間、相手守備陣全員の捕球が強制的に「1(G)」になり、エラー・悪送球・ファンブルを連発する',
        batterEffect: '相手全員の捕球1(G)化（大暴投・エラー多発）',
        pitcherEffect: '相手全員の捕球1(G)化（大暴投・エラー多発）'
      },
      rateNote: '1年はラッキーボーイのみ。2年は約50%、3年は約80〜90%の高確率で「魔物」に変化！',
      year1: 'ラッキーボーイ (100%)',
      year2: '魔物 (約50%) / ラッキーボーイ (約50%)',
      year3: '魔物 (約80〜90%) / ラッキーボーイ (約10〜20%)'
    },
    defenseOrder: {
      command: '励ます',
      target: '登板中の投手',
      duration: '試合終了まで永続',
      year1: 'スタミナ+10回復 ＆ 戦術アイコン再抽選',
      year2: 'スタミナ+20回復 ＆ 戦術アイコン再抽選',
      year3: 'スタミナ+30回復 ＆ 戦術アイコン再抽選',
      description: '投手のスタミナを回復させ、さらに戦術アイコンの数字を再抽選します。効果はイニング終了後も持続します。'
    },
    captainEvent: {
      title: '学力アップ',
      details: ['部員の学力がアップ（赤点を防ぎ、勉強イベントでのボーナス獲得に貢献）']
    },
    recommendation: '★栄冠ナイン必勝の性格。スタメンや代打枠に2〜3年の内気を複数名ベンチ入りさせておくのが常勝の基本戦術です。'
  },
  {
    name: 'やんちゃ',
    kana: 'やんちゃ',
    summary: '球速・ミート・パワーが伸びる超攻撃型。キャプテン時の「グラウンドLv+1」が神イベント',
    statGrowth: ['球速', 'ミート', 'パワー'],
    tactics: {
      normal: {
        name: '強心臓',
        desc: 'チャンスや逆境の場面で真価を発揮する特殊能力が一時的に付与される',
        batterEffect: '「チャンスメーカー」「逆境○」発動',
        pitcherEffect: '「ピンチ○」「打たれ強さ○」発動'
      },
      high: {
        name: '威圧',
        desc: '相手に強力なプレッシャーを与える「威圧感」を発動する',
        batterEffect: '「威圧感」発動（相手投手のスタミナ消費増・制球ダウン）',
        pitcherEffect: '「威圧感」発動（相手打者のミート・パワー低下）'
      },
      rateNote: '1年は「強心臓」のみ。学年が上がると上位の「威圧」が出現！',
      year1: '強心臓 (100%)',
      year2: '威圧 (約50%) / 強心臓 (約50%)',
      year3: '威圧 (約80%) / 強心臓 (約20%)'
    },
    defenseOrder: {
      command: '盛り上げる',
      target: '出場中の野手全員',
      duration: '1イニング間有効',
      year1: '野手全員の守備力+20、捕球+20',
      year2: '野手全員の守備力+30、捕球+30',
      year3: '野手全員の守備力+40、捕球+40',
      description: '【守備の最重要伝令】野手全員の守備力と捕球を大きく引き上げ、ピンチ時の失策や失点を大幅に防ぎます。'
    },
    captainEvent: {
      title: 'グラウンドレベルアップ',
      details: ['グラウンドレベルが永久に+1アップ（全練習効率の底上げに直結する最高峰イベント）']
    },
    recommendation: 'キャプテン指名時の「グラウンドLv+1」が超強力。序盤〜中堅校育成では積極的にキャプテンに指名推奨。'
  },
  {
    name: '熱血漢',
    kana: 'ねっけつかん',
    summary: 'パワー・スタミナの成長力抜群。固有戦術「闘魂」で長打を狙い打つ中軸スラッガー向き',
    statGrowth: ['スタミナ', 'パワー', '肩力'],
    tactics: {
      normal: {
        name: '熱血',
        desc: '打者のパワーまたは投手の球速をアップさせて力勝負を挑む',
        batterEffect: 'パワー+20アップ',
        pitcherEffect: '球速+2km/hアップ'
      },
      high: {
        name: '闘魂',
        desc: '打撃能力や球威が極大アップし、本塁打や力強いピッチングを可能にする',
        batterEffect: 'パワー大幅UP ＆「パワーヒッター」発動',
        pitcherEffect: '球速大幅UP ＆「重い球」「闘志」発動'
      },
      rateNote: '1年は「熱血」のみ。2・3年で破壊力抜群の「闘魂」が出現！',
      year1: '熱血 (100%)',
      year2: '闘魂 (約50%) / 熱血 (約50%)',
      year3: '闘魂 (約80%) / 熱血 (約20%)'
    },
    defenseOrder: {
      command: '盛り上げる',
      target: '出場中の野手全員',
      duration: '1イニング間有効',
      year1: '野手全員の守備力+20、捕球+20',
      year2: '野手全員の守備力+30、捕球+30',
      year3: '野手全員の守備力+40、捕球+40',
      description: '【守備の最重要伝令】野手全員の守備・捕球を一気に引き上げて守備崩壊を防ぎます。'
    },
    captainEvent: {
      title: '猛練習（経験値大UP＆体力消費）',
      details: [
        '方針に応じた経験値が大アップ（打撃力ならミート・パワー大UP）',
        '※ただし部員の体力が減少するため、体力回復手段を用意しておくと安心'
      ]
    },
    recommendation: 'クリーンナップ打者や先発完投型投手に最適。伝令の「盛り上げる」も守備固めとして非常に使い勝手が良いです。'
  },
  {
    name: 'お調子者',
    kana: 'おちょうしもの',
    summary: '打線の爆発力を高める「お祭り男」とテンション操作。足と肩が伸びやすい',
    statGrowth: ['球速', '走力', '肩力'],
    tactics: {
      normal: {
        name: 'お祭り男',
        desc: '味方打者全員に「お祭り男」を発動させ、チャンス時の打撃力を引き上げる',
        batterEffect: '味方全員に「お祭り男」付与（連打・ビッグイニング誘発）',
        pitcherEffect: '自身の調子+1段階'
      },
      high: {
        name: '黄色い声援',
        desc: '味方全体のテンションを引き上げ、相手投手のスタミナを削る',
        batterEffect: '味方全員のテンション・調子UP、相手投手のスタミナ消費増',
        pitcherEffect: '味方全員のテンション・調子UP'
      },
      rateNote: '1年は「お祭り男」のみ。2・3年で「黄色い声援」が出現！',
      year1: 'お祭り男 (100%)',
      year2: '黄色い声援 (約50%) / お祭り男 (約50%)',
      year3: '黄色い声援 (約80%) / お祭り男 (約20%)'
    },
    defenseOrder: {
      command: 'ホメる',
      target: '登板中の投手',
      duration: '1イニング間有効',
      year1: '投手の調子+1段階',
      year2: '投手の調子+1段階',
      year3: '投手の調子+2段階',
      description: '投手の調子を引き上げます。不調や絶不調の投手を先発・リリーフさせた時のリカバリーに役立ちます。'
    },
    captainEvent: {
      title: 'テンション回復＆超ノリノリ',
      details: [
        '部員3人のテンションがUP',
        'ダメダメ状態から一気にふつう以上へ回復',
        '約10%の確率で3人が「超ノリノリ」に変化'
      ]
    },
    recommendation: 'キャプテンに選ぶとテンション低下を定期的にリセットしてくれる優秀なムードメーカーです。'
  },
  {
    name: 'したたか',
    kana: 'したたか',
    summary: '相手チームの調子を直接下げる「ゆさぶる」戦術持ち。変化球・走力・捕球が伸びる',
    statGrowth: ['変化球', '走力', '捕球'],
    tactics: {
      normal: {
        name: 'くせ者',
        desc: '小技や粘り強さを発揮し、いやらしい打撃で出塁を狙う',
        batterEffect: '「粘り打ち」「意外性」発動',
        pitcherEffect: '相手打者の調子を1段階ダウン'
      },
      high: {
        name: 'ゆさぶる',
        desc: '相手チーム全員の調子を強制的に1段階ダウンさせ、試合全体を有利に傾ける',
        batterEffect: '相手チーム全員の調子-1段階（投手・野手全員にデバフ）',
        pitcherEffect: '相手チーム全員の調子-1段階（打者全員にデバフ）'
      },
      rateNote: '1年は「くせ者」のみ。2・3年で全体弱体化の「ゆさぶる」が出現！',
      year1: 'くせ者 (100%)',
      year2: 'ゆさぶる (約50%) / くせ者 (約50%)',
      year3: 'ゆさぶる (約80%) / くせ者 (約20%)'
    },
    defenseOrder: {
      command: 'ホメる',
      target: '登板中の投手',
      duration: '1イニング間有効',
      year1: '投手の調子+1段階',
      year2: '投手の調子+1段階',
      year3: '投手の調子+2段階',
      description: '投手の調子を向上させます。'
    },
    captainEvent: {
      title: 'チーム結束（信頼度アップ）',
      details: ['部員3人の監督への信頼度が中アップ（試合時の戦術Lv解放を早める）']
    },
    recommendation: '俊足好守の2番打者やテクニシャン投手に最適。上位戦術の「ゆさぶる」は格上相手の投手陣攻略に有効です。'
  },
  {
    name: 'クール',
    kana: 'くーる',
    summary: '戦術レベルをすべて+1する「究極の思考」が極めて優秀。ミート・制球が安定成長',
    statGrowth: ['コントロール', 'ミート', '守備力'],
    tactics: {
      normal: {
        name: '究極の思考',
        desc: '選択中の戦術アイコンの数字（レベル）がすべて+1上昇し、強力な高Lv戦術が選択可能になる',
        batterEffect: '打撃戦術アイコン全レベル+1（Lv6〜7解放）',
        pitcherEffect: '投球戦術アイコン全レベル+1（Lv6〜7解放）'
      },
      high: {
        name: '精密機械',
        desc: '打撃の精度、または投球の制球力が大幅に向上する',
        batterEffect: 'ミート大幅UP ＆「アベレージヒッター」発動',
        pitcherEffect: 'コントロール大幅UP ＆「低め○」発動'
      },
      rateNote: '1年は「究極の思考」のみ。2・3年で「精密機械」が出現！',
      year1: '究極の思考 (100%)',
      year2: '精密機械 (約50%) / 究極の思考 (約50%)',
      year3: '精密機械 (約80%) / 究極の思考 (約20%)'
    },
    defenseOrder: {
      command: '助言する',
      target: '登板中の投手',
      duration: '1イニング間有効',
      year1: '球速+1km/h、コントロール+20',
      year2: '球速+2km/h、コントロール+30',
      year3: '球速+3km/h、コントロール+40',
      description: '投手のコントロールを大幅に引き上げ、ストライクゾーン勝負をしやすくします。'
    },
    captainEvent: {
      title: 'コンディションケア',
      details: ['部員3人の体力が+1回復し、テンションがアップ（安定したチーム維持に貢献）']
    },
    recommendation: '「究極の思考」で戦術Lv6〜7を叩き出せるため、信頼度が上がりきっていない1〜2年生時でも得点力・抑止力が高い万能選手になります。'
  },
  {
    name: 'ごくふつう',
    kana: 'ごくふつう',
    summary: '全能力がバランスよく成長。調子を引き上げる「ファイト」「超ファイト」とスタミナ伝令',
    statGrowth: ['全ステータス（バランスよく均等に伸びる）'],
    tactics: {
      normal: {
        name: 'ファイト',
        desc: '自身の調子を1段階アップさせる',
        batterEffect: '調子+1段階',
        pitcherEffect: '調子+1段階'
      },
      high: {
        name: '超ファイト',
        desc: '自身の調子を一気に2段階アップさせる',
        batterEffect: '調子+2段階（絶不調でも普通以上へ即回復）',
        pitcherEffect: '調子+2段階（絶不調でも普通以上へ即回復）'
      },
      rateNote: '1年は「ファイト」のみ。2・3年で「超ファイト」が出現！',
      year1: 'ファイト (100%)',
      year2: '超ファイト (約50%) / ファイト (約50%)',
      year3: '超ファイト (約80%) / ファイト (約20%)'
    },
    defenseOrder: {
      command: '励ます',
      target: '登板中の投手',
      duration: '試合終了まで永続',
      year1: 'スタミナ+10回復 ＆ 戦術アイコン再抽選',
      year2: 'スタミナ+20回復 ＆ 戦術アイコン再抽選',
      year3: 'スタミナ+30回復 ＆ 戦術アイコン再抽選',
      description: '投手のスタミナを回復させ、さらに戦術アイコンを再抽選します。'
    },
    captainEvent: {
      title: '方針に沿った練習指導',
      details: [
        '練習方針に応じた経験値が中アップ（バランス重視、打撃力、守備・投手力など）'
      ]
    },
    recommendation: '尖った欠点がなく安定感抜群。伝令の「励ます」でエース投手のスタミナを最後まで持たせるサポーターとしても有用です。'
  }
];
