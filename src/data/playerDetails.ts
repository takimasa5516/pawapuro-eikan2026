import { Player } from './players';

export interface PlayerInitialStats {
  speed?: number;          // 球速 (km/h) 例: 152
  control?: string;        // コントロール 例: 'D55'
  stamina?: string;        // スタミナ 例: 'C62'
  breakingBalls?: string;  // 変化球 例: 'スライダー3, フォーク3'
  trajectory?: number;     // 弾道 例: 3
  meet?: string;           // ミート 例: 'C62'
  power?: string;          // パワー 例: 'A82'
  run?: string;            // 走力 例: 'B75'
  arm?: string;            // 肩力 例: 'A88'
  fielding?: string;       // 守備力 例: 'C60'
  catching?: string;       // 捕球 例: 'D52'
}

export interface PlayerDetails {
  initialStats: PlayerInitialStats;
  goldAbilities: string[]; // 金特（背景黄色にて表記、下位青特は除外）
  blueAbilities: string[]; // 青特（金特がある場合、下位青特は完全除外）
  redAbilities: string[];  // 赤特
  advice?: string;
}

// 金特とそれに対応する下位青特のマッピング（金特所持時は下位青特を非表示にするルール）
export const GOLD_TO_LOWER_MAP: Record<string, string[]> = {
  '球界の頭脳': ['キャッチャーA', 'キャッチャーB', 'キャッチャー○'],
  'アーチスト': ['パワーヒッター'],
  '怪力': ['パワーヒッター'],
  '安打製造機': ['アベレージヒッター'],
  '怪童': ['ノビA', 'ノビB', 'ノビ○'],
  '火の玉ボール': ['ノビA', 'ノビB', 'ノビ○'],
  '勝利の星': ['勝ち運'],
  '鉄人': ['ケガしにくさA', 'ケガしにくさB', 'ケガしにくさ○'],
  'ささやき戦術': ['ささやき○'],
  '神速': ['走塁A', '走塁B', '走塁○'],
  '電光石火': ['盗塁A', '盗塁B', '盗塁○'],
  '魔術師': ['守備職人'],
  '高速レーザー': ['レーザービーム', '送球A'],
  '強肩': ['送球A', '送球B'],
  '強打者': ['プルヒッター'],
  '広角砲': ['広角打法'],
  '精密機械': ['低め○', 'コントロール○'],
  '勝負師': ['チャンスA', 'チャンスB', 'チャンス○'],
  '精神的支柱': ['ムード○'],
  '強心臓': ['対ピンチA', '対ピンチB', '対ピンチ○'],
  '不屈の魂': ['打たれ強さA', '打たれ強さB'],
  'ドクターK': ['奪三振'],
  '恐怖の満塁男': ['満塁男'],
  '一球入魂': ['初球○'],
  '代打の神様': ['代打○'],
  '変幻自在': ['緩急○']
};

export const ALL_GOLD_ABILITIES = new Set(Object.keys(GOLD_TO_LOWER_MAP));

// ランク判定用カラー取得関数 (S, A, B, C, D, E, F, G)
export function getStatGradeColor(statStr?: string | number): {
  badgeClass: string;
  grade: string;
  num: string;
} {
  if (typeof statStr === 'number') {
    // 弾道 (1〜4)
    return {
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200',
      grade: `${statStr}`,
      num: ''
    };
  }
  if (!statStr || statStr.length === 0) {
    return { badgeClass: 'bg-slate-100 text-slate-600', grade: '-', num: '' };
  }
  const grade = statStr.charAt(0).toUpperCase();
  const num = statStr.slice(1);

  switch (grade) {
    case 'S':
      return { badgeClass: 'bg-pink-100 text-pink-900 border-pink-300 dark:bg-pink-950 dark:text-pink-200 font-extrabold', grade, num };
    case 'A':
      return { badgeClass: 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950 dark:text-rose-200 font-bold', grade, num };
    case 'B':
      return { badgeClass: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200 font-bold', grade, num };
    case 'C':
      return { badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200 font-semibold', grade, num };
    case 'D':
      return { badgeClass: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950 dark:text-sky-200 font-semibold', grade, num };
    case 'E':
      return { badgeClass: 'bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950 dark:text-blue-200', grade, num };
    case 'F':
      return { badgeClass: 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950 dark:text-purple-200', grade, num };
    default:
      return { badgeClass: 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300', grade, num };
  }
}

// 主要・有名転生OB＆現役スター選手の精緻な1年目初期データ一覧辞書
const MAJOR_PLAYERS_DETAILS: Record<string, PlayerDetails> = {
  // === 投手 ===
  '大谷翔平(DLC)': {
    initialStats: {
      speed: 152,
      control: 'E46',
      stamina: 'C64',
      breakingBalls: 'スライダー3, SFF3',
      trajectory: 3,
      meet: 'C64',
      power: 'A84',
      run: 'B76',
      arm: 'A88',
      fielding: 'D55',
      catching: 'E48'
    },
    goldAbilities: [],
    blueAbilities: ['二刀流', '奪三振', 'ノビB', '球持ち○', 'パワーヒッター', '広角打法'],
    redAbilities: ['三振(打者時)'],
    advice: '投打両面で1年目から圧倒的。スタミナ回復アイテムや伝令を併用してフル回転させましょう。'
  },
  '大谷翔平': {
    initialStats: {
      speed: 150,
      control: 'E45',
      stamina: 'C62',
      breakingBalls: 'スライダー3, SFF2',
      trajectory: 3,
      meet: 'C62',
      power: 'A82',
      run: 'B75',
      arm: 'A86',
      fielding: 'D54',
      catching: 'E46'
    },
    goldAbilities: [],
    blueAbilities: ['二刀流', '奪三振', 'ノビB', 'パワーヒッター', '広角打法'],
    redAbilities: ['三振(打者時)'],
    advice: 'エース兼主砲としてチームを牽引可能。1年生から夏の予選で登板させ経験点を稼ぎましょう。'
  },
  'ダルビッシュ有': {
    initialStats: {
      speed: 148,
      control: 'D52',
      stamina: 'B70',
      breakingBalls: 'スライダー3, カーブ2, フォーク3'
    },
    goldAbilities: [],
    blueAbilities: ['キレ○', '奪三振', 'ノビA', '回復A', '尻上がり', '闘志'],
    redAbilities: ['スロースターター'],
    advice: '序盤（1〜2回）の失点に注意。立ち上がりを伝令「励ます」や指示で乗り切れば完投ペースに。'
  },
  '田中将大(DLC)': {
    initialStats: {
      speed: 150,
      control: 'D56',
      stamina: 'B74',
      breakingBalls: '高速スライダー4, SFF4'
    },
    goldAbilities: ['勝利の星'],
    blueAbilities: ['奪三振', 'キレ○', '闘志', '対ピンチB', '打たれ強さA'],
    redAbilities: [],
    advice: '金特「勝利の星」持ち。赤特なしで初期から抜群の安定感を誇る高校球界最強ピッチャー。'
  },
  '田中将大': {
    initialStats: {
      speed: 148,
      control: 'D54',
      stamina: 'B72',
      breakingBalls: 'スライダー4, SFF3'
    },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'キレ○', '闘志', '対ピンチB', '打たれ強さA'],
    redAbilities: [],
    advice: 'ピンチに極めて強く赤特もなし。1年目から絶対的守護神・先発として計算できます。'
  },
  '山本由伸': {
    initialStats: {
      speed: 151,
      control: 'C62',
      stamina: 'B72',
      breakingBalls: 'カットボール3, カーブ2, SFF3'
    },
    goldAbilities: [],
    blueAbilities: ['ノビA', 'キレ○', '奪三振', '低め○', '対ピンチB'],
    redAbilities: [],
    advice: '直球・変化球・制球の三拍子が揃う現代最強エース。低め中心の配球指示が特効。'
  },
  '佐々木朗希': {
    initialStats: {
      speed: 156,
      control: 'E44',
      stamina: 'D55',
      breakingBalls: 'フォーク4, スライダー2'
    },
    goldAbilities: [],
    blueAbilities: ['ノビA', '奪三振', 'ジャイロボール'],
    redAbilities: ['ケガしにくさE', '回復E'],
    advice: '豪速球とフォークは圧巻ですが、ケガ・回復Eのため連投は厳禁。休養マスや控え投手を活用。'
  },
  '松坂大輔': {
    initialStats: {
      speed: 152,
      control: 'D52',
      stamina: 'A80',
      breakingBalls: '高速スライダー4, カーブ2, チェンジアップ2'
    },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'キレ○', '対ピンチA', '尻上がり', '闘志'],
    redAbilities: ['四球'],
    advice: '怪物級のスタミナと奪三振力。四球赤特があるため、カウントを悪くした際の甘い球に注意。'
  },
  '江川卓': {
    initialStats: {
      speed: 153,
      control: 'C64',
      stamina: 'A82',
      breakingBalls: 'カーブ4'
    },
    goldAbilities: ['怪童'],
    blueAbilities: ['奪三振', '重い球', '尻上がり'],
    redAbilities: [],
    advice: '金特「怪童」持ち。浮き上がる剛速球で三振の山を築きます。'
  },
  '藤川球児': {
    initialStats: {
      speed: 150,
      control: 'D54',
      stamina: 'D55',
      breakingBalls: 'フォーク4, カーブ1'
    },
    goldAbilities: ['火の玉ボール'],
    blueAbilities: ['奪三振', 'キレ○'],
    redAbilities: [],
    advice: '金特「火の玉ボール」持ち。終盤のピンチや最終回に登板させて反撃を断ちましょう。'
  },
  '佐々木主浩': {
    initialStats: {
      speed: 148,
      control: 'D54',
      stamina: 'D50',
      breakingBalls: 'フォーク5'
    },
    goldAbilities: [],
    blueAbilities: ['奪三振', '威圧感(投手)', '重い球'],
    redAbilities: [],
    advice: '落差MAXのフォークと威圧感。最終回のストッパーとして無類の強さを誇ります。'
  },
  '千賀滉大': {
    initialStats: {
      speed: 152,
      control: 'E46',
      stamina: 'B70',
      breakingBalls: 'フォーク4, スライダー2'
    },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'ノビB', '逃げ球'],
    redAbilities: ['四球'],
    advice: 'お化けフォークで空振りを奪える。四球が出やすいため、伝令でコントロールを補うと吉。'
  },
  '桑田真澄': {
    initialStats: {
      speed: 144,
      control: 'B72',
      stamina: 'B70',
      breakingBalls: 'カーブ4, スライダー2, SFF2'
    },
    goldAbilities: [],
    blueAbilities: ['ノビA', 'キレ○', '投球位置右', '打撃力○'],
    redAbilities: [],
    advice: '制球力Bと多彩な変化球で失点が極小。打撃能力も高いため下位打線のポイントゲッターに。'
  },
  '黒田博樹': {
    initialStats: {
      speed: 147,
      control: 'C62',
      stamina: 'B75',
      breakingBalls: 'ツーシーム3, スライダー3, フォーク2'
    },
    goldAbilities: [],
    blueAbilities: ['打たれ強さA', '対ピンチB', '闘志', 'ゴロピッチャー'],
    redAbilities: [],
    advice: '動く球で打たせて取るタフネス右腕。守備陣の捕球・守備力を高めておくと無失点に抑えます。'
  },
  '前田健太': {
    initialStats: {
      speed: 146,
      control: 'C64',
      stamina: 'B72',
      breakingBalls: 'スライダー4, チェンジアップ2, カーブ2'
    },
    goldAbilities: [],
    blueAbilities: ['キレ○', '低め○', '尻上がり', '打たれ強さB'],
    redAbilities: [],
    advice: '安定感抜群のマエケンスライダー。イニングが進むほど能力が上がる尻上がり持ち。'
  },
  '小林繁': {
    initialStats: {
      speed: 140,
      control: 'B70',
      stamina: 'B72',
      breakingBalls: 'シンカー4, カーブ2'
    },
    goldAbilities: [],
    blueAbilities: ['緩急○', 'テンポ○', '対ピンチB'],
    redAbilities: [],
    advice: '独特のサイドスローから繰り出すシンカーと緩急で翻弄。相手の強打者にも動じません。'
  },
  '川口和久': {
    initialStats: {
      speed: 146,
      control: 'D50',
      stamina: 'B72',
      breakingBalls: 'カーブ4, スライダー2'
    },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'ノビB'],
    redAbilities: ['四球'],
    advice: '本格派左腕。キレのある大きなカーブで三振を量産できます。四球を特訓等で消したいところ。'
  },
  '星野仙一': {
    initialStats: {
      speed: 144,
      control: 'C62',
      stamina: 'B70',
      breakingBalls: 'スライダー3, カーブ3'
    },
    goldAbilities: [],
    blueAbilities: ['闘志', '対ピンチA', '打たれ強さA'],
    redAbilities: ['短気'],
    advice: '走者を背負ったピンチで真価を発揮。「短気」があるため連打を浴びたらすぐ伝令で落ち着かせましょう。'
  },
  '津田恒実': {
    initialStats: {
      speed: 151,
      control: 'D50',
      stamina: 'D54',
      breakingBalls: '縦スライダー3, カーブ1'
    },
    goldAbilities: [],
    blueAbilities: ['闘志', 'ノビA', '重い球'],
    redAbilities: [],
    advice: '炎のストッパー。強気のストレート勝負でフライ・三振を量産します。'
  },
  '杉内俊哉': {
    initialStats: {
      speed: 143,
      control: 'C64',
      stamina: 'B72',
      breakingBalls: 'チェンジアップ4, スライダー3, カーブ2'
    },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'ノビA', 'キレ○'],
    redAbilities: [],
    advice: '球速以上の伸びを感じるストレートとチェンジアップのコンビネーションが強力。'
  },
  '宮城大弥': {
    initialStats: {
      speed: 143,
      control: 'C65',
      stamina: 'C65',
      breakingBalls: 'スローカーブ4, スライダー2, チェンジアップ2'
    },
    goldAbilities: [],
    blueAbilities: ['キレ○', '緩急○', 'テンポ○'],
    redAbilities: [],
    advice: '遅い球と緩急で相手のタイミングを徹底的に狂わせる技巧派左腕の最高峰。'
  },
  '大瀬良大地': {
    initialStats: {
      speed: 148,
      control: 'D56',
      stamina: 'B70',
      breakingBalls: 'カットボール3, スライダー2, フォーク2'
    },
    goldAbilities: [],
    blueAbilities: ['逃げ球', '打たれ強さB'],
    redAbilities: [],
    advice: '被本塁打が極めて出にくい安心設計。1年目から試合を作りやすい優秀な先発。'
  },
  '森下暢仁': {
    initialStats: {
      speed: 147,
      control: 'C64',
      stamina: 'B70',
      breakingBalls: '縦カーブ4, チェンジアップ3'
    },
    goldAbilities: [],
    blueAbilities: ['キレ○', '低め○', '尻上がり'],
    redAbilities: [],
    advice: 'ブレーキの利いた縦カーブが武器。コントロールCで大崩れしない高水準ルーキー。'
  },
  '伊藤大海': {
    initialStats: {
      speed: 148,
      control: 'D56',
      stamina: 'C68',
      breakingBalls: 'スライダー3, スプリット3'
    },
    goldAbilities: [],
    blueAbilities: ['奪三振', '闘志'],
    redAbilities: [],
    advice: '追い込んでからのスプリットで高い空振り率。赤特もなく扱いやすい即戦力。'
  },

  // === 捕手 (キャッチャーA/B & 金特) ===
  '古田敦也': {
    initialStats: {
      trajectory: 3,
      meet: 'C65',
      power: 'B72',
      run: 'C60',
      arm: 'A88',
      fielding: 'A82',
      catching: 'B72'
    },
    goldAbilities: ['球界の頭脳'],
    blueAbilities: ['ささやき戦術', '送球A', 'アベレージヒッター'], // キャッチャーAは球界の頭脳があるため除外
    redAbilities: [],
    advice: '【栄冠ナイン歴代最強捕手】金特「球界の頭脳」所持。全投手の制球+15・スタミナ消費-15・相手打力低下。最優先リセマラ対象！'
  },
  '野村克也': {
    initialStats: {
      trajectory: 4,
      meet: 'B72',
      power: 'A86',
      run: 'D50',
      arm: 'A80',
      fielding: 'B72',
      catching: 'B70'
    },
    goldAbilities: [],
    blueAbilities: ['キャッチャーA', 'ささやき戦術', 'パワーヒッター', '広角打法', 'チャンスA'],
    redAbilities: ['走塁E'],
    advice: 'キャッチャーAと長打力を併せ持つ球界のレジェンド。4番捕手としてチームの中心に。'
  },
  '城島健司': {
    initialStats: {
      trajectory: 4,
      meet: 'C62',
      power: 'A82',
      run: 'D55',
      arm: 'A88',
      fielding: 'B70',
      catching: 'C62'
    },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', '強肩', 'パワーヒッター', '逆境○'],
    redAbilities: [],
    advice: '強肩A88で相手の盗塁を完全阻止。打力もパワーAでクリーンナップを打てます。'
  },
  '阿部慎之助': {
    initialStats: {
      trajectory: 4,
      meet: 'C60',
      power: 'A84',
      run: 'E48',
      arm: 'A82',
      fielding: 'C65',
      catching: 'C60'
    },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', 'パワーヒッター', 'プルヒッター', 'サヨナラ男'],
    redAbilities: [],
    advice: '左のスラッガー捕手。長打力とリードを両立し、勝負強さも抜群。'
  },
  '谷繁元信': {
    initialStats: {
      trajectory: 2,
      meet: 'D55',
      power: 'C65',
      run: 'D50',
      arm: 'A85',
      fielding: 'A80',
      catching: 'B70'
    },
    goldAbilities: [],
    blueAbilities: ['キャッチャーA', 'ささやき戦術', 'ブロック○', '送球B'],
    redAbilities: ['三振'],
    advice: 'キャッチャーA持ちの守備特化型名捕手。投手陣の防御率が劇的に改善します。'
  },
  '里崎智也': {
    initialStats: {
      trajectory: 3,
      meet: 'D54',
      power: 'B72',
      run: 'E48',
      arm: 'B78',
      fielding: 'C62',
      catching: 'C60'
    },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', '意外性', 'チャンスB'],
    redAbilities: [],
    advice: '要所で一発を放つ大舞台の強さ。徳島県からのスタートで手堅いリセマラ候補。'
  },
  '森友哉': {
    initialStats: {
      trajectory: 3,
      meet: 'B70',
      power: 'B78',
      run: 'C65',
      arm: 'B72',
      fielding: 'D52',
      catching: 'D50'
    },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '逆境○'],
    redAbilities: [],
    advice: '打撃力は全捕手中でも屈指。リード能力は特訓やOBマスでキャッチャーB以上に伸ばすのが理想。'
  },
  '甲斐拓也': {
    initialStats: {
      trajectory: 2,
      meet: 'E44',
      power: 'D58',
      run: 'C65',
      arm: 'S90',
      fielding: 'B74',
      catching: 'C64'
    },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', '送球A', '高速チャージ'],
    redAbilities: ['三振'],
    advice: '肩力S90の甲斐キャノン。相手の機動力を完全に封殺し、ピンチを未然に防ぎます。'
  },
  '梅野隆太郎': {
    initialStats: {
      trajectory: 3,
      meet: 'D50',
      power: 'C62',
      run: 'C62',
      arm: 'A82',
      fielding: 'B70',
      catching: 'C62'
    },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', 'ブロック○', '意外性'],
    redAbilities: [],
    advice: 'ワンバウンド球の後逸を防ぐ壁役として優秀。攻守のバランスが取れた好捕手。'
  },
  '矢野燿大': {
    initialStats: {
      trajectory: 3,
      meet: 'C60',
      power: 'C66',
      run: 'C60',
      arm: 'B78',
      fielding: 'B70',
      catching: 'C64'
    },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', '意外性', '固め打ち'],
    redAbilities: [],
    advice: 'リードBで投手陣をアシストしつつ、勝負どころで巧打を見せる頼れる扇の要。'
  },
  '伊藤光': {
    initialStats: {
      trajectory: 2,
      meet: 'D52',
      power: 'D58',
      run: 'D55',
      arm: 'B75',
      fielding: 'B70',
      catching: 'C62'
    },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', '送球B'],
    redAbilities: [],
    advice: '高知・明徳義塾のキャッチャーB。四国地方スタートでのバッテリー強化に最適。'
  },

  // === 野手 (一・二・三・遊・外) ===
  '長嶋茂雄': {
    initialStats: {
      trajectory: 3,
      meet: 'B76',
      power: 'B76',
      run: 'B72',
      arm: 'B78',
      fielding: 'B75',
      catching: 'B70'
    },
    goldAbilities: [],
    // ※パワーヒッターは未所持！アベレージヒッター・広角打法・チャンスA等を所持
    blueAbilities: ['アベレージヒッター', '広角打法', 'チャンスA', 'サヨナラ男', '固め打ち', '初球○', '守備職人'],
    redAbilities: [],
    advice: '【ミスタープロ野球】アベレージヒッターと広角打法を併せ持つ打率マスター。得点圏での勝負強さも圧倒的。'
  },
  '王貞治': {
    initialStats: {
      trajectory: 4,
      meet: 'B76',
      power: 'S92',
      run: 'C60',
      arm: 'B70',
      fielding: 'B70',
      catching: 'B72'
    },
    goldAbilities: ['アーチスト'],
    blueAbilities: ['アベレージヒッター', '威圧感', '選球眼', '逆境○'], // パワーヒッターはアーチストがあるため除外
    redAbilities: [],
    advice: '金特「アーチスト」所持。パワーS92から放たれる打球は高確率で本塁打になります。'
  },
  'イチロー': {
    initialStats: {
      trajectory: 2,
      meet: 'B78',
      power: 'C65',
      run: 'A88',
      arm: 'S92',
      fielding: 'S90',
      catching: 'A82'
    },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '守備職人', 'レーザービーム', '走塁A', '盗塁A', 'チャンスメーカー', '内野安打○'],
    redAbilities: [],
    advice: '【打・走・守の頂点】出塁率・守備範囲・補殺すべてが神レベル。1年目から打率5割超えを狙えます。'
  },
  '松井秀喜': {
    initialStats: {
      trajectory: 4,
      meet: 'B72',
      power: 'A88',
      run: 'C62',
      arm: 'B76',
      fielding: 'C60',
      catching: 'C60'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '威圧感', 'チャンスA', '逆境○', 'プルヒッター'],
    redAbilities: [],
    advice: '弾道4×パワーA88の超ド級スラッガー。得点圏で驚異的な打点力を誇る4番打者。'
  },
  '落合博満': {
    initialStats: {
      trajectory: 3,
      meet: 'A82',
      power: 'A85',
      run: 'D52',
      arm: 'C65',
      fielding: 'C62',
      catching: 'B70'
    },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', 'パワーヒッター', '威圧感', '流し打ち', 'チャンスA'],
    redAbilities: ['併殺'],
    advice: 'ミートA・パワーAの3冠王打法。足は速くないため、ランナー1塁でのゴロ併殺にのみ注意。'
  },
  '村上宗隆': {
    initialStats: {
      trajectory: 4,
      meet: 'C60',
      power: 'A86',
      run: 'C62',
      arm: 'B74',
      fielding: 'D52',
      catching: 'E48'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '威圧感', '選球眼'],
    redAbilities: ['三振', 'エラー'],
    advice: '日本人シーズン最多本塁打の破壊力。守備と捕球がやや低いため、内野守備練習で早めの強化を。'
  },
  '坂本勇人': {
    initialStats: {
      trajectory: 3,
      meet: 'C64',
      power: 'B76',
      run: 'B70',
      arm: 'B74',
      fielding: 'B72',
      catching: 'C62'
    },
    goldAbilities: [],
    blueAbilities: ['広角打法', 'パワーヒッター', '固め打ち', 'チャンスB', '送球B'],
    redAbilities: [],
    advice: '打てるショートの最高傑作。守備・走力も高水準で1年生から遊撃手のレギュラー固定可能。'
  },
  '清原和博': {
    initialStats: {
      trajectory: 4,
      meet: 'C62',
      power: 'A86',
      run: 'D55',
      arm: 'B75',
      fielding: 'C62',
      catching: 'C60'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '逆境○', '初球○'],
    redAbilities: [],
    advice: '甲子園で通算13本塁打を記録した勝負強さ。劣勢でも一撃で試合をひっくり返します。'
  },
  '中西太': {
    initialStats: {
      trajectory: 4,
      meet: 'B70',
      power: 'A88',
      run: 'B70',
      arm: 'A82',
      fielding: 'B70',
      catching: 'C65'
    },
    goldAbilities: ['怪力'],
    blueAbilities: ['広角打法', '初球○', 'チャンスB'], // パワーヒッターは怪力があるため除外
    redAbilities: [],
    advice: '金特「怪力」所持。香川・高松一高の怪童。長打力・走力・強肩すべてが1年目から完成されています。'
  },
  '山本浩二': {
    initialStats: {
      trajectory: 4,
      meet: 'B70',
      power: 'A85',
      run: 'B74',
      arm: 'A80',
      fielding: 'A80',
      catching: 'B72'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '守備職人', '送球A'],
    redAbilities: [],
    advice: 'ミスター赤ヘル。外野手の模範となる攻守走完璧なステータスを誇ります。'
  },
  '衣笠祥雄': {
    initialStats: {
      trajectory: 3,
      meet: 'C64',
      power: 'A82',
      run: 'B70',
      arm: 'B76',
      fielding: 'B72',
      catching: 'C62'
    },
    goldAbilities: ['鉄人'],
    blueAbilities: ['パワーヒッター', '逆境○'], // ケガしにくさAは鉄人があるため除外
    redAbilities: [],
    advice: '金特「鉄人」所持。連続試合出場の鉄人。怪我知らずでタフな育成が可能です。'
  },
  '前田智徳': {
    initialStats: {
      trajectory: 3,
      meet: 'A80',
      power: 'B76',
      run: 'C65',
      arm: 'B76',
      fielding: 'B70',
      catching: 'C64'
    },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '流し打ち', '初球○'],
    redAbilities: ['ケガしにくさE'],
    advice: '孤高の天才打者。ミートA80で安打を量産。故障マスでのケガにだけは配慮しましょう。'
  },
  '吉田正尚': {
    initialStats: {
      trajectory: 3,
      meet: 'B75',
      power: 'B78',
      run: 'C60',
      arm: 'B70',
      fielding: 'D55',
      catching: 'D52'
    },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '選球眼', '固め打ち'],
    redAbilities: [],
    advice: '福井・敦賀気比の至宝。三振が非常に少なく、四球も選べる高出塁率の最強クラッチヒッター。'
  },
  '鈴木誠也': {
    initialStats: {
      trajectory: 3,
      meet: 'C65',
      power: 'A82',
      run: 'B74',
      arm: 'A85',
      fielding: 'B72',
      catching: 'C62'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '送球A', 'チャンスB'],
    redAbilities: [],
    advice: '強肩強打のメジャーリーガー。右翼手からのレーザービーム返球で失点を防ぎます。'
  },
  '岡本和真': {
    initialStats: {
      trajectory: 4,
      meet: 'C62',
      power: 'A84',
      run: 'D55',
      arm: 'B74',
      fielding: 'C65',
      catching: 'C62'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', 'プルヒッター'],
    redAbilities: [],
    advice: '奈良・智弁学園出身。本塁打王の確かな長打力で中軸を任せられます。'
  },
  '今宮健太': {
    initialStats: {
      trajectory: 2,
      meet: 'D50',
      power: 'D58',
      run: 'B75',
      arm: 'A84',
      fielding: 'A82',
      catching: 'B72'
    },
    goldAbilities: [],
    blueAbilities: ['守備職人', '送球A', 'バント職人'],
    redAbilities: [],
    advice: '超絶ファインプレー連発。バント職人持ちのため送りバント・スクイズ成功率が100%近くに。'
  },
  '源田壮亮': {
    initialStats: {
      trajectory: 2,
      meet: 'D55',
      power: 'E46',
      run: 'A84',
      arm: 'B76',
      fielding: 'S90',
      catching: 'A82'
    },
    goldAbilities: [],
    blueAbilities: ['守備職人', '送球A', '盗塁A', '走塁A'],
    redAbilities: [],
    advice: '遊撃守備S90。三遊間の当たりをすべてアウトにして投手を助ける守備のスペシャリスト。'
  },
  '菊池涼介': {
    initialStats: {
      trajectory: 2,
      meet: 'D56',
      power: 'C60',
      run: 'A82',
      arm: 'A80',
      fielding: 'S92',
      catching: 'A84'
    },
    goldAbilities: [],
    blueAbilities: ['守備職人', '高速チャージ', '送球A'],
    redAbilities: [],
    advice: '二塁守備S92の忍者。センター前に抜けそうな打球もダイビングキャッチで捕殺します。'
  },
  '赤星憲広': {
    initialStats: {
      trajectory: 2,
      meet: 'C65',
      power: 'E42',
      run: 'S94',
      arm: 'C60',
      fielding: 'B75',
      catching: 'B70'
    },
    goldAbilities: [],
    blueAbilities: ['盗塁A', '走塁A', '内野安打○', '流し打ち'],
    redAbilities: [],
    advice: '走力S94。出塁すれば確実に二盗・三盗を決められる1番センターの決定版。'
  },
  '周東佑京': {
    initialStats: {
      trajectory: 2,
      meet: 'E46',
      power: 'E48',
      run: 'S96',
      arm: 'B72',
      fielding: 'C65',
      catching: 'D52'
    },
    goldAbilities: [],
    blueAbilities: ['盗塁A', '走塁A', '内野安打○'],
    redAbilities: ['三振'],
    advice: '球界トップの快足S96。代走・スタメン問わず、足だけで1点をもぎ取れます。'
  },
  '新井貴浩': {
    initialStats: {
      trajectory: 4,
      meet: 'D55',
      power: 'A82',
      run: 'C62',
      arm: 'B75',
      fielding: 'D55',
      catching: 'E48'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '初球○'],
    redAbilities: ['送球E', '併殺'],
    advice: '長打力抜群ですが送球E・併殺持ち。特別指導や公式戦で送球を消去すると一気に化けます。'
  },
  '川崎宗則': {
    initialStats: {
      trajectory: 2,
      meet: 'C62',
      power: 'E45',
      run: 'A82',
      arm: 'B72',
      fielding: 'B74',
      catching: 'B70'
    },
    goldAbilities: [],
    blueAbilities: ['内野安打○', '守備職人', 'ムード○'],
    redAbilities: [],
    advice: 'ムード○持ちで味方全員のミート・パワー+5の隠れ神スキル持ち。ベンチにいるだけでも効果大。'
  },
  '若松勉': {
    initialStats: {
      trajectory: 3,
      meet: 'B76',
      power: 'B70',
      run: 'B72',
      arm: 'B70',
      fielding: 'B72',
      catching: 'B72'
    },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', 'チャンスB'],
    redAbilities: [],
    advice: '小さな大打者。北海道出身・首位打者。欠点がなく打率・得点圏ともにハイアベレージ。'
  },
  '岩村明憲': {
    initialStats: {
      trajectory: 3,
      meet: 'C62',
      power: 'A80',
      run: 'B70',
      arm: 'B75',
      fielding: 'C65',
      catching: 'C60'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '逆境○'],
    redAbilities: ['三振'],
    advice: '愛媛・宇和島東の強打者。パワーA80で三塁手としての得点力を一気に引き上げます。'
  },
  '山川穂高': {
    initialStats: {
      trajectory: 4,
      meet: 'D54',
      power: 'A86',
      run: 'E48',
      arm: 'B72',
      fielding: 'D55',
      catching: 'D52'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '威圧感'],
    redAbilities: ['三振', '併殺'],
    advice: '沖縄スタート時の主砲候補。圧倒的なホームランアーチを架けます。三振に注意。'
  },
  '浅野翔吾': {
    initialStats: {
      trajectory: 3,
      meet: 'D52',
      power: 'B72',
      run: 'B70',
      arm: 'B74',
      fielding: 'C60',
      catching: 'D54'
    },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'チャンスB'],
    redAbilities: ['三振'],
    advice: '香川・高松商のドラフト1位。1年目からB72のパワーで長打を連発。'
  }
};

// 辞書に個別定義されていない選手について、ポジションと★能力値から完全かつ整合的な初期値を生成する関数
export function getPlayerDetails(player: Player): PlayerDetails {
  const cleanName = player.name.replace(/\(DLC\)/g, '').trim();

  // 金特抽出ヘルパー関数（金特がある場合は下位青特を自動で除外する）
  const sanitizeAbilities = (golds: string[], blues: string[], reds: string[], advice?: string, initial?: PlayerInitialStats): PlayerDetails => {
    // 選手データの特殊能力名に金特が含まれていれば金特へ昇格
    const finalGolds = new Set(golds);
    if (player.special && ALL_GOLD_ABILITIES.has(player.special)) {
      finalGolds.add(player.special);
    }
    if (player.isGold && player.special) {
      finalGolds.add(player.special);
    }

    // 金特の下位青特を除外セットに登録
    const lowerToRemove = new Set<string>();
    finalGolds.forEach(g => {
      (GOLD_TO_LOWER_MAP[g] || []).forEach(low => lowerToRemove.add(low));
    });

    // 青特から下位互換を除外
    const finalBlues = blues.filter(b => !finalGolds.has(b) && !lowerToRemove.has(b));

    return {
      initialStats: initial || {},
      goldAbilities: Array.from(finalGolds),
      blueAbilities: Array.from(new Set(finalBlues)),
      redAbilities: reds,
      advice
    };
  };

  // 1. 個別定義がある場合
  if (MAJOR_PLAYERS_DETAILS[player.name]) {
    const item = MAJOR_PLAYERS_DETAILS[player.name];
    return sanitizeAbilities(item.goldAbilities || [], item.blueAbilities, item.redAbilities, item.advice, item.initialStats);
  }
  if (MAJOR_PLAYERS_DETAILS[cleanName]) {
    const item = MAJOR_PLAYERS_DETAILS[cleanName];
    return sanitizeAbilities(item.goldAbilities || [], item.blueAbilities, item.redAbilities, item.advice, item.initialStats);
  }

  // 2. ★ランクに基づく動的ステータス生成
  const stars = player.stars || 260;
  const isPitcher = player.pos === '投';
  const isCatcher = player.pos === '捕' || player.isCatcher;

  // 初期ステータス生成
  if (isPitcher) {
    // 投手
    const speed = Math.min(154, Math.max(136, Math.round(135 + (stars - 200) * 0.11)));
    
    const cVal = Math.min(68, Math.max(38, Math.round(40 + (stars - 200) * 0.16)));
    const cLetter = cVal >= 70 ? 'B' : cVal >= 60 ? 'C' : cVal >= 50 ? 'D' : cVal >= 40 ? 'E' : 'F';
    const control = `${cLetter}${cVal}`;

    const sVal = Math.min(78, Math.max(40, Math.round(42 + (stars - 200) * 0.2)));
    const sLetter = sVal >= 80 ? 'A' : sVal >= 70 ? 'B' : sVal >= 60 ? 'C' : sVal >= 50 ? 'D' : 'E';
    const stamina = `${sLetter}${sVal}`;

    let breakingBalls = 'スライダー2, カーブ2';
    if (stars >= 320) {
      breakingBalls = 'スライダー3, フォーク3, カーブ2';
    } else if (stars >= 280) {
      breakingBalls = 'スライダー3, フォーク2';
    }

    const goldList: string[] = [];
    const blueList: string[] = [];
    if (player.special) {
      if (ALL_GOLD_ABILITIES.has(player.special)) goldList.push(player.special);
      else blueList.push(player.special);
    }
    if (stars >= 300) blueList.push('奪三振', 'キレ○');
    else if (stars >= 270) blueList.push('打たれ強さB');
    if (blueList.length === 0) blueList.push('対ピンチC');

    const redList: string[] = [];
    if (stars < 260) {
      redList.push('四球');
    }

    return sanitizeAbilities(
      goldList,
      blueList,
      redList,
      stars >= 300 ? '奪三振力が高く、序盤からエースとして君臨可能。' : '安定した投球でローテーションの柱として期待できます。',
      { speed, control, stamina, breakingBalls }
    );
  } else {
    // 野手
    let trajectory = 2;
    if (['一', '三', '外'].includes(player.pos) && stars >= 290) trajectory = 3;
    if (player.special?.includes('パワー') || stars >= 350) trajectory = 4;

    const mVal = Math.min(76, Math.max(38, Math.round(42 + (stars - 200) * 0.18)));
    const mLetter = mVal >= 80 ? 'A' : mVal >= 70 ? 'B' : mVal >= 60 ? 'C' : mVal >= 50 ? 'D' : mVal >= 40 ? 'E' : 'F';
    const meet = `${mLetter}${mVal}`;

    const pBonus = ['一', '三', '外'].includes(player.pos) ? 10 : ['遊', '二'].includes(player.pos) ? -5 : 0;
    const pVal = Math.min(88, Math.max(38, Math.round(40 + (stars - 200) * 0.22 + pBonus)));
    const pLetter = pVal >= 80 ? 'A' : pVal >= 70 ? 'B' : pVal >= 60 ? 'C' : pVal >= 50 ? 'D' : mVal >= 40 ? 'E' : 'F';
    const power = `${pLetter}${pVal}`;

    const rBonus = ['遊', '二', '外'].includes(player.pos) ? 8 : -4;
    const rVal = Math.min(88, Math.max(40, Math.round(45 + (stars - 200) * 0.18 + rBonus)));
    const rLetter = rVal >= 90 ? 'S' : rVal >= 80 ? 'A' : rVal >= 70 ? 'B' : rVal >= 60 ? 'C' : rVal >= 50 ? 'D' : 'E';
    const run = `${rLetter}${rVal}`;

    const aBonus = isCatcher ? 14 : ['外', '三'].includes(player.pos) ? 6 : 0;
    const aVal = Math.min(88, Math.max(42, Math.round(45 + (stars - 200) * 0.18 + aBonus)));
    const aLetter = aVal >= 80 ? 'A' : aVal >= 70 ? 'B' : aVal >= 60 ? 'C' : aVal >= 50 ? 'D' : 'E';
    const arm = `${aLetter}${aVal}`;

    const dBonus = isCatcher || ['遊', '二'].includes(player.pos) ? 12 : 0;
    const dVal = Math.min(86, Math.max(40, Math.round(44 + (stars - 200) * 0.18 + dBonus)));
    const dLetter = dVal >= 80 ? 'A' : dVal >= 70 ? 'B' : dVal >= 60 ? 'C' : dVal >= 50 ? 'D' : 'E';
    const fielding = `${dLetter}${dVal}`;

    const cVal = Math.min(78, Math.max(40, Math.round(42 + (stars - 200) * 0.15)));
    const cLetter = cVal >= 80 ? 'A' : cVal >= 70 ? 'B' : cVal >= 60 ? 'C' : cVal >= 50 ? 'D' : 'E';
    const catching = `${cLetter}${cVal}`;

    const goldList: string[] = [];
    const blueList: string[] = [];
    if (player.catcherGrade) blueList.push(`キャッチャー${player.catcherGrade}`);
    if (player.special) {
      if (ALL_GOLD_ABILITIES.has(player.special)) goldList.push(player.special);
      else blueList.push(player.special);
    }
    if (stars >= 310) {
      if (['一', '三', '外'].includes(player.pos)) blueList.push('パワーヒッター');
      else blueList.push('守備職人', '送球B');
    } else if (stars >= 280) {
      blueList.push('チャンスB');
    }
    if (blueList.length === 0) blueList.push('流し打ち');

    const redList: string[] = [];
    if (stars < 260 && ['一', '外'].includes(player.pos)) {
      redList.push('送球E');
    }

    return sanitizeAbilities(
      goldList,
      blueList,
      redList,
      isCatcher 
        ? `キャッチャー${player.catcherGrade || 'C'}。投手陣の防御率を大きく引き下げます。` 
        : stars >= 300 
        ? '走攻守のバランスが高く、1年目からレギュラー中軸として活躍可能。' 
        : '堅実な能力でチームの土台を支える優秀な新入生。',
      { trajectory, meet, power, run, arm, fielding, catching }
    );
  }
}
