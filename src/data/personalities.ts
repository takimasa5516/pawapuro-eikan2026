export interface TacticDetail {
  name: string;
  desc: string;
  duration: string;       // 効果時間（1打席 / 1イニング / 1試合永続）
  rerollLevel: boolean;   // 戦術アイコン再抽選の有無
  batterEffect: string;   // 打者時の効果
  pitcherEffect: string;  // 投手時の効果
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
    summary: '全ステータスが均等に特大成長。固有戦術・伝令ともに最高峰のエース候補',
    statGrowth: ['全ステータス（均等かつ大幅に成長）'],
    tactics: {
      normal: {
        name: '急成長',
        desc: '試合終了時に獲得できる経験点が2倍になる育成最強の固有戦術',
        duration: '試合終了まで永続',
        rerollLevel: false,
        batterEffect: '獲得経験点2倍（全打席・試合終了まで永続）',
        pitcherEffect: '獲得経験点2倍（全投球・試合終了まで永続）'
      },
      high: {
        name: '才能開花',
        desc: '選手の能力が限界まで引き上げられ、全ステータスが極限値に達する',
        duration: '1打席',
        rerollLevel: true,
        batterEffect: 'ミート・パワー・走力が最大(100/S)化、戦術レベル最大解放',
        pitcherEffect: '球速+3km/h、コントロール最大(100/S)化、全変化球の変化量+1'
      },
      rateNote: '1年次は「急成長」100%。2年次は約20%、3年次は約50%で「才能開花」に変化！',
      year1: '急成長 100% / 才能開花 0%',
      year2: '急成長 約80% / 才能開花 約20%',
      year3: '急成長 約50% / 才能開花 約50%'
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
    recommendation: '★最優先育成枠。1〜2年時は「急成長」を使って大量経験値で急成長させ、3年時は才能開花または急成長どちらが出ても超強力です。'
  },
  {
    name: '内気',
    kana: 'うちき',
    summary: '2・3年時の固有戦術「〇〇の魔物」が栄冠ナイン最強。どんな格上強豪校も倒せる常勝必須性格',
    statGrowth: ['変化球', '守備力', '捕球'],
    tactics: {
      normal: {
        name: 'ラッキーボーイ',
        desc: '自身に強力な青特殊能力がランダムに付与される',
        duration: '1打席',
        rerollLevel: false,
        batterEffect: 'チャンスA、ハイボールヒッター、ローボールヒッター、パワーヒッター等の青特がランダム付与',
        pitcherEffect: 'キレ○、ノビA、奪三振、打たれ強さA、対ピンチA等が付与（取得済なら球速+5km/h、コン+20）'
      },
      high: {
        name: '地方球場の魔物 / 甲子園の魔物',
        desc: '【栄冠ナイン最強戦術】1イニング間、相手守備陣全員の捕球が強制的に「1(G)」になり、赤特「エラー」が付与される',
        duration: '1イニング',
        rerollLevel: false,
        batterEffect: '相手野手全員の捕球1(G)化 ＆ 赤特「エラー」付与（イージーゴロ・フライ落球・大暴投多発）',
        pitcherEffect: '相手野手全員の捕球1(G)化 ＆ 赤特「エラー」付与（送りバントや転がせで得点量産）'
      },
      rateNote: '1年次はラッキーボーイ確定(100%)。2年次で約20%、3年次で約50%の確率で「魔物」が出現！',
      year1: 'ラッキーボーイ 100% / 魔物 0%',
      year2: 'ラッキーボーイ 約80% / 魔物 約20%',
      year3: 'ラッキーボーイ 約50% / 魔物 約50%'
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
      details: ['部員の学力がアップ（赤点を防ぎ、期末テスト・勉強イベントでの練習効率ボーナス獲得に貢献）']
    },
    recommendation: '★栄冠ナイン常勝の絶対条件。3年次でも魔物出現率は約50%（二分の一）のため、内気の選手をスタメン・控え代打に2〜3人揃えておくことで魔物発動確率を87.5%まで引き上げるのが鉄則です。'
  },
  {
    name: 'やんちゃ',
    kana: 'やんちゃ',
    summary: '球速・ミート・パワーが伸びる超攻撃型。キャプテン指名時の「グラウンドLv+1」が神イベント',
    statGrowth: ['球速', 'ミート', 'パワー'],
    tactics: {
      normal: {
        name: '強心臓',
        desc: 'チャンスやピンチで能力が引き上げられる',
        duration: '打者: 1打席 / 投手: 1イニング',
        rerollLevel: false,
        batterEffect: '「チャンスA」付与（得点圏でミート・パワー特大UP）',
        pitcherEffect: '「対ピンチA」「打たれ強さA」付与（走者を背負っても球速・制球維持＆ピヨリ無効）'
      },
      high: {
        name: '威圧',
        desc: '相手選手に強力なプレッシャーを与えてステータスを直接低下させる',
        duration: '打者: 1打席 / 投手: 1イニング',
        rerollLevel: false,
        batterEffect: '相手投手のミート・パワー-20、コントロール低下＆スタミナ消費増',
        pitcherEffect: '相手打者全員のミート・パワー-20（1イニング間、相手全員に特大デバフ）'
      },
      rateNote: '1年次は強心臓100%。2年次で約20%、3年次で約50%の確率で「威圧」が出現！',
      year1: '強心臓 100% / 威圧 0%',
      year2: '強心臓 約80% / 威圧 約20%',
      year3: '強心臓 約50% / 威圧 約50%'
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
    recommendation: 'キャプテン指名時の「グラウンドLv+1」が超強力。序盤〜中堅校育成では積極的にキャプテンに指名推奨。伝令の「盛り上げる」も守備固めとして非常に使い勝手が良いです。'
  },
  {
    name: '熱血漢',
    kana: 'ねっけつかん',
    summary: 'パワー・スタミナの成長力抜群。固有戦術「闘魂」で長打を狙い打つ中軸スラッガー向き',
    statGrowth: ['スタミナ', 'パワー', '肩力'],
    tactics: {
      normal: {
        name: '熱血',
        desc: '打者のパワーまたは投手の球速を大幅アップさせて真っ向力勝負を挑む',
        duration: '1打席',
        rerollLevel: true,
        batterEffect: 'パワー+30アップ（戦術アイコン再抽選あり）',
        pitcherEffect: '球速+3km/hアップ（戦術アイコン再抽選あり）'
      },
      high: {
        name: '闘魂',
        desc: '気迫を前面に押し出し、長打力や重い球威を極限まで引き上げる',
        duration: '1打席',
        rerollLevel: true,
        batterEffect: 'パワー+50アップ、「逆境○」「プルヒッター」「対エース○」発動',
        pitcherEffect: '球速+3km/hアップ、「闘志」「重い球」「対強打者○」発動'
      },
      rateNote: '1年次は熱血100%。2年次で約20%、3年次で約50%の確率で「闘魂」が出現！',
      year1: '熱血 100% / 闘魂 0%',
      year2: '熱血 約80% / 闘魂 約20%',
      year3: '熱血 約50% / 闘魂 約50%'
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
    recommendation: 'クリーンナップ打者や先発完投型投手に最適。「熱血」「闘魂」ともに戦術レベル再抽選を伴うため、Lv6〜7の強力コマンドを引き出しやすい強みがあります。'
  },
  {
    name: 'お調子者',
    kana: 'おちょうしもの',
    summary: 'チーム全体を強化する「お祭り男」「黄色い声援」とテンション操作。足と肩が伸びやすい',
    statGrowth: ['球速', '走力', '肩力'],
    tactics: {
      normal: {
        name: 'お祭り男',
        desc: '1イニング間、味方打者全員にチャンス系特能を付与してビッグイニングを作る',
        duration: '1イニング',
        rerollLevel: false,
        batterEffect: '味方野手全員（ベンチ含む）に「チャンスA」「チャンスメーカー」「固め打ち」付与',
        pitcherEffect: '自身の調子+1段階'
      },
      high: {
        name: '黄色い声援',
        desc: '1イニング間、味方全員（スタメン・ベンチ・投手含む）の調子を1段階引き上げる',
        duration: '1イニング',
        rerollLevel: true,
        batterEffect: '味方全員（ベンチ含む）の調子+1段階アップ（不調・絶不調の脱出にも有効）',
        pitcherEffect: '味方全員（ベンチ含む）の調子+1段階アップ（戦術アイコン再抽選あり）'
      },
      rateNote: '1年次はお祭り男100%。2年次で約20%、3年次で約50%の確率で「黄色い声援」が出現！',
      year1: 'お祭り男 100% / 黄色い声援 0%',
      year2: 'お祭り男 約80% / 黄色い声援 約20%',
      year3: 'お祭り男 約50% / 黄色い声援 約50%'
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
    recommendation: 'キャプテンに選ぶとテンション低下を定期的にリセットしてくれる優秀なムードメーカー。固有戦術が「味方全員」に及ぶため、攻撃開始直後に使うと爆発的な連打を生みます。'
  },
  {
    name: 'したたか',
    kana: 'したたか',
    summary: '相手チーム全員の調子を直接下げる「ゆさぶる」戦術持ち。変化球・走力・捕球が伸びる',
    statGrowth: ['変化球', '走力', '捕球'],
    tactics: {
      normal: {
        name: 'くせ者',
        desc: '小技や粘り強さを発揮する特殊能力を多数付与し、いやらしい野球で出塁をもぎ取る',
        duration: '1イニング',
        rerollLevel: true,
        batterEffect: '「粘り打ち」「バント職人」「内野安打○」「いぶし銀」「意外性」「ゲッツー崩し」付与',
        pitcherEffect: '「クイックA」「リリース○」「緩急○」付与'
      },
      high: {
        name: 'ゆさぶる',
        desc: '相手チーム全員（投手・野手・ベンチ含む）の調子を強制的に1段階ダウンさせる',
        duration: '1イニング',
        rerollLevel: false,
        batterEffect: '相手チーム全員の調子-1段階（相手好投手の球速・制球を直接削ぐ）',
        pitcherEffect: '相手チーム全員の調子-1段階（相手打線全員のミート・パワーを直接削ぐ）'
      },
      rateNote: '1年次はくせ者100%。2年次で約20%、3年次で約50%の確率で「ゆさぶる」が出現！',
      year1: 'くせ者 100% / ゆさぶる 0%',
      year2: 'くせ者 約80% / ゆさぶる 約20%',
      year3: 'くせ者 約50% / ゆさぶる 約50%'
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
    recommendation: '上位戦術の「ゆさぶる」は甲子園のA〜Sランク強豪校相手に絶大な威力を発揮。相手の好投手を崩したい場面や、強力クリーンナップを迎える守備イニングで使うのがベストです。'
  },
  {
    name: 'クール',
    kana: 'くーる',
    summary: '戦術レベルをすべて+1する「究極の思考」が極めて優秀。ミート・制球が安定成長',
    statGrowth: ['コントロール', 'ミート', '守備力'],
    tactics: {
      normal: {
        name: '究極の思考',
        desc: '選択中の戦術アイコンの数字（レベル）がすべて+1上昇し、強力な高Lv戦術が確実に選択可能になる',
        duration: '1打席',
        rerollLevel: false,
        batterEffect: '全打撃戦術アイコンレベル+1（信頼度が低くてもLv6〜7コマンドが即解放）',
        pitcherEffect: '全投球戦術アイコンレベル+1（信頼度が低くてもLv6〜7コマンドが即解放）'
      },
      high: {
        name: '精密機械',
        desc: '打撃の精度、または投球の制球力が大幅に向上し、針の穴を通すようなプレーを可能にする',
        duration: '1打席',
        rerollLevel: true,
        batterEffect: 'ミート+30、「アベレージヒッター」「チャンスメーカー」「流し打ち」発動',
        pitcherEffect: 'コントロール+50、「低め○」「ポーカーフェイス」発動（甘い失投を完全にシャットアウト）'
      },
      rateNote: '1年次は究極の思考100%。2年次で約20%、3年次で約50%の確率で「精密機械」が出現！',
      year1: '究極の思考 100% / 精密機械 0%',
      year2: '究極の思考 約80% / 精密機械 約20%',
      year3: '究極の思考 約50% / 精密機械 約50%'
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
    recommendation: '下位戦術の「究極の思考」が全学年を通じて超優秀。信頼度が上がりきっていない1〜2年生でもLv6〜7の最強戦術を使えるため、下級生主体のチームや序盤育成で非常に頼りになります。'
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
        duration: '1イニング',
        rerollLevel: true,
        batterEffect: '調子+1段階（絶不調➔不調、不調➔ふつう、好調➔絶好調など。戦術Lv再抽選あり）',
        pitcherEffect: '調子+1段階（戦術Lv再抽選あり）'
      },
      high: {
        name: '超ファイト',
        desc: '自身の調子を一気に2段階アップさせる',
        duration: '1イニング',
        rerollLevel: true,
        batterEffect: '調子+2段階（絶不調からでも一気に好調へジャンプアップ。戦術Lv再抽選あり）',
        pitcherEffect: '調子+2段階（戦術Lv再抽選あり）'
      },
      rateNote: '1年次はファイト100%。2年次で約20%、3年次で約50%の確率で「超ファイト」が出現！',
      year1: 'ファイト 100% / 超ファイト 0%',
      year2: 'ファイト 約80% / 超ファイト 約20%',
      year3: 'ファイト 約50% / 超ファイト 約50%'
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
    recommendation: '尖った欠点がなく安定感抜群。伝令の「励ます」でエース投手のスタミナを最後まで持たせるサポーターとしても重宝します。'
  }
];
