export interface Personality {
  name: string;
  kana: string;
  summary: string;
  statGrowth: string[];
  tactics: {
    year1: { name: string; desc: string };
    year2: { name: string; desc: string };
    year3: { name: string; desc: string };
  };
  ordersAttack: {
    year1: { name: string; effect: string };
    year2: { name: string; effect: string };
    year3: { name: string; effect: string };
  };
  ordersDefense: {
    year1: { name: string; effect: string };
    year2: { name: string; effect: string };
    year3: { name: string; effect: string };
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
    summary: '全ステータスが最も伸びやすく、固有戦術・伝令ともに最高峰のエース候補',
    statGrowth: ['全ステータスが非常に伸びやすい'],
    tactics: {
      year1: { name: '急成長', desc: '試合で獲得できる経験値が大幅アップ（育成が加速）' },
      year2: { name: '才能開花', desc: '調子+1段階＆全能力が大幅アップ' },
      year3: { name: '才能開花', desc: '調子+1段階＆全能力が超大幅アップ（試合決定力絶大）' }
    },
    ordersAttack: {
      year1: { name: '助言する', effect: 'ミート+10' },
      year2: { name: '的確に助言する', effect: 'ミート+20' },
      year3: { name: '的確かつ冷静に助言する', effect: 'ミート+25、アベレージヒッター付与' }
    },
    ordersDefense: {
      year1: { name: '助言する', effect: '球速+1km/h、コントロール+20' },
      year2: { name: '的確に助言する', effect: '球速+2km/h、コントロール+30' },
      year3: { name: '的確かつ冷静に助言する', effect: '球速+3km/h、コントロール+40' }
    },
    captainEvent: {
      title: '全員の練習経験値アップ',
      details: ['部員全員の指示中の練習経験値が中UP（チーム全体の底上げに最適）']
    },
    recommendation: '★最優先育成枠。入学してきたら即スタメンまたは主力投手として大切に育成推奨。'
  },
  {
    name: '内気',
    kana: 'うちき',
    summary: '2・3年時の固有戦術「魔物」が栄冠ナイン最強。格上相手の金星量産に必須',
    statGrowth: ['変化球', '守備力', '捕球'],
    tactics: {
      year1: { name: 'ラッキーボーイ', desc: '調子+1段階、能力微アップ' },
      year2: { name: '〇〇の魔物 / ラッキーボーイ', desc: '【魔物】相手守備陣のエラー率が超絶上昇（大暴投・ファンブル多発）' },
      year3: { name: '〇〇の魔物 / ラッキーボーイ', desc: '【魔物】相手守備陣のエラー率が超絶上昇（大量得点の超強力戦術）' }
    },
    ordersAttack: {
      year1: { name: '励ます', effect: '調子+1段階 (1打席)' },
      year2: { name: 'すごく励ます', effect: '調子+2段階 (1イニング)' },
      year3: { name: 'ものすごく励ます', effect: '調子+3段階 (1イニング)' }
    },
    ordersDefense: {
      year1: { name: '励ます', effect: 'スタミナ+10' },
      year2: { name: 'すごく励ます', effect: 'スタミナ+20' },
      year3: { name: 'ものすごく励ます', effect: 'スタミナ+30' }
    },
    captainEvent: {
      title: '学力アップ',
      details: ['部員の学力がUP（赤点を防ぎ、勉強イベントでのボーナス獲得に貢献）']
    },
    recommendation: '★栄冠ナイン必勝の性格。「本気の魔物」でどんな強豪校も撃破可能。2〜3年生の内気を常に1〜2名はベンチ入りさせたい。'
  },
  {
    name: 'お調子者',
    kana: 'おちょうしもの',
    summary: '打線の爆発力を高める「お祭り男」とテンション操作。足と肩が伸びやすい',
    statGrowth: ['球速', '走力', '肩力'],
    tactics: {
      year1: { name: 'お祭り男', desc: '味方打者全員のミート・パワーがアップ' },
      year2: { name: 'お祭り男 / 黄色い声援', desc: '打撃力UPまたは味方全体を盛り上げる' },
      year3: { name: 'お祭り男 / 黄色い声援', desc: '打撃力大幅UP（ビッグイニング演出）' }
    },
    ordersAttack: {
      year1: { name: '盛り上げる', effect: 'ミート+5、パワー+5、チャンス+1' },
      year2: { name: 'すごく盛り上げる', effect: 'ミート+8、パワー+8、チャンス+1、チャンスメーカー付与' },
      year3: { name: 'ものすごく盛り上げる', effect: 'ミート+10、パワー+10、チャンス+1、チャンスメーカー、逆境○付与' }
    },
    ordersDefense: {
      year1: { name: 'ホメる', effect: '調子+1段階 (1打席)' },
      year2: { name: 'すごくホメる', effect: '調子+2段階 (1イニング)' },
      year3: { name: 'ものすごくホメる', effect: '調子+3段階 (1イニング)' }
    },
    captainEvent: {
      title: 'テンションUP',
      details: [
        '3人のテンションUP',
        'ダメダメ状態から一気にふつうへ回復',
        '10%の確率で3人が超ノリノリに変化'
      ]
    },
    recommendation: '打線のつながりを生み、キャプテンにするとチーム全体のテンション低下をリセットできるムードメーカー。'
  },
  {
    name: '熱血漢',
    kana: 'ねっけつかん',
    summary: 'パワー・スタミナの成長力抜群。打撃戦術「闘魂」で長打を狙い打つスラッガー向き',
    statGrowth: ['スタミナ', 'パワー', '肩力'],
    tactics: {
      year1: { name: '熱血', desc: '打撃能力・球速アップ（スタミナ消費増）' },
      year2: { name: '闘魂', desc: '打撃能力・球速大幅アップ＋闘志状態' },
      year3: { name: '闘魂 / 強心臓', desc: '打撃力極大アップ（本塁打・長打量産）' }
    },
    ordersAttack: {
      year1: { name: '気合を入れる', effect: 'パワー+10' },
      year2: { name: '強く気合を入れる', effect: 'パワー+20' },
      year3: { name: '発破をかける', effect: 'パワー+25、パワーヒッター、逆境○付与' }
    },
    ordersDefense: {
      year1: { name: '盛り上げる', effect: '守備力+20、捕球+20' },
      year2: { name: 'すごく盛り上げる', effect: '守備力+30、捕球+30' },
      year3: { name: 'ものすごく盛り上げる', effect: '守備力+40、捕球+40' }
    },
    captainEvent: {
      title: '猛練習（経験値大UP＆体力DWN）',
      details: [
        'バランス重視：各種経験値大UP',
        '打撃力重視：ミート・パワー大UP',
        '守備・投手力重視：守備力・肩力大UP',
        '※ただし3人の体力が大きく減少するため体力管理が必要'
      ]
    },
    recommendation: '4番打者やクリーンナップに最適。伝令の「発破をかける」で味方にパワーヒッターを付与できるのも強烈。'
  },
  {
    name: 'クール',
    kana: 'くーる',
    summary: '固有戦術「究極の思考」で戦術アイコンLvを底上げ。ミート・制球が安定成長',
    statGrowth: ['コントロール', 'ミート', '守備力'],
    tactics: {
      year1: { name: '究極の思考', desc: '戦術アイコンの数字（レベル）がすべて+1' },
      year2: { name: '究極の思考 / 精密機械', desc: '戦術レベル+1または低め・コース制球大幅UP' },
      year3: { name: '究極の思考 / 精密機械', desc: '戦術レベル+1（高Lv戦術発動で決定打UP）' }
    },
    ordersAttack: {
      year1: { name: '助言する', effect: 'ミート+10' },
      year2: { name: '的確に助言する', effect: 'ミート+20' },
      year3: { name: '的確かつ冷静に助言する', effect: 'ミート+25、アベレージヒッター付与' }
    },
    ordersDefense: {
      year1: { name: '助言する', effect: '球速+1km/h、コントロール+20' },
      year2: { name: '的確に助言する', effect: '球速+2km/h、コントロール+30' },
      year3: { name: '的確かつ冷静に助言する', effect: '球速+3km/h、コントロール+40' }
    },
    captainEvent: {
      title: 'コンディションケア',
      details: ['3人の体力+1、テンションUP（安定したチーム維持に貢献）']
    },
    recommendation: '「究極の思考」で戦術レベル6〜7の強力コマンドを引き出せる。1番打者や先発投手にぴったり。'
  },
  {
    name: 'したたか',
    kana: 'したたか',
    summary: '相手を惑わす「くせ者」戦術と信頼度UPイベント。変化球・走力・捕球が伸びる',
    statGrowth: ['変化球', '走力', '捕球'],
    tactics: {
      year1: { name: 'くせ者', desc: '相手投手のコントロール低下、バントや小技の成功率アップ' },
      year2: { name: 'くせ者 / 翻弄', desc: '相手の動揺を誘い、四死球やエラーを誘発' },
      year3: { name: 'くせ者 / 翻弄', desc: '相手バッテリーのスタミナと制球を削る' }
    },
    ordersAttack: {
      year1: { name: '気合を入れる', effect: 'パワー+10' },
      year2: { name: '強く気合を入れる', effect: 'パワー+20' },
      year3: { name: '発破をかける', effect: 'パワー+25、パワーヒッター、逆境○付与' }
    },
    ordersDefense: {
      year1: { name: 'ホメる', effect: '調子+1段階 (1打席)' },
      year2: { name: 'すごくホメる', effect: '調子+2段階 (1イニング)' },
      year3: { name: 'ものすごくホメる', effect: '調子+3段階 (1イニング)' }
    },
    captainEvent: {
      title: 'チーム結束',
      details: ['3人の信頼度が中UP（試合指示の戦術Lv解放を早める）']
    },
    recommendation: '変化球投手や俊足好守の2番・下位打線に合致。キャプテンで信頼度を稼ぐのにも便利。'
  },
  {
    name: 'やんちゃ',
    kana: 'やんちゃ',
    summary: '球速・ミート・パワーが伸びる超攻撃型。グラウンドレベル+1イベント持ち',
    statGrowth: ['球速', 'ミート', 'パワー'],
    tactics: {
      year1: { name: '強気の攻め', desc: '打撃強振・ストライク先行で力押し' },
      year2: { name: '強気の攻め / 威圧', desc: '相手打者・投手にプレッシャーを与える' },
      year3: { name: '威圧 / 逆境', desc: '威圧感で圧倒、ビハインド時に能力爆発' }
    },
    ordersAttack: {
      year1: { name: '盛り上げる', effect: 'ミート+5、パワー+5、チャンス+1' },
      year2: { name: 'すごく盛り上げる', effect: 'ミート+8、パワー+8、チャンス+1、チャンスメーカー付与' },
      year3: { name: 'ものすごく盛り上げる', effect: 'ミート+10、パワー+10、チャンス+1、チャンスメーカー、逆境○付与' }
    },
    ordersDefense: {
      year1: { name: '盛り上げる', effect: '守備力+20、捕球+20' },
      year2: { name: 'すごく盛り上げる', effect: '守備力+30、捕球+30' },
      year3: { name: 'ものすごく盛り上げる', effect: '守備力+40、捕球+40' }
    },
    captainEvent: {
      title: 'グラウンドレベルアップ',
      details: ['グラウンドレベル+1（練習効率の永久底上げに極めて強力）']
    },
    recommendation: 'キャプテン指名時の「グラウンドLv+1」が神イベント。特に序盤〜中堅校育成でキャプテンにする恩恵が大きい。'
  },
  {
    name: 'ごくふつう',
    kana: 'ごくふつう',
    summary: '全能力がバランスよく成長。奇跡の逆転戦術と手堅いサポート伝令',
    statGrowth: ['全部少しずつ伸びやすい'],
    tactics: {
      year1: { name: 'ファイト', desc: '調子+1段階' },
      year2: { name: 'ファイト / 奇跡の逆転', desc: 'ビハインド時に発動、打撃能力が大幅上昇' },
      year3: { name: 'ファイト / 奇跡の逆転', desc: '終盤のビハインドで劇的な逆転打を呼び込む' }
    },
    ordersAttack: {
      year1: { name: '励ます', effect: '調子+1段階 (1打席)' },
      year2: { name: 'すごく励ます', effect: '調子+2段階 (1イニング)' },
      year3: { name: 'ものすごく励ます', effect: '調子+3段階 (1イニング)' }
    },
    ordersDefense: {
      year1: { name: '励ます', effect: 'スタミナ+10' },
      year2: { name: 'すごく励ます', effect: 'スタミナ+20' },
      year3: { name: 'ものすごく励ます', effect: 'スタミナ+30' }
    },
    captainEvent: {
      title: '方針に沿った練習指導',
      details: [
        'バランス重視：各種経験値中UP',
        '打撃力重視：ミート・パワー小UP',
        '守備・投手力重視：守備力・肩力小UP'
      ]
    },
    recommendation: '尖った短所がなく安定感抜群。育成方針と合わせて堅実に能力を伸ばしたい場合に適している。'
  }
];
