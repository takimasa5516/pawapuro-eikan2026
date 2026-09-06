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
  'バズーカ送球': ['送球A', '送球B', '強肩'],
  '強打者': ['プルヒッター'],
  '引っ張り屋': ['プルヒッター'],
  '広角砲': ['広角打法'],
  '精密機械': ['低め○', 'コントロール○', 'コントロールA', 'コントロールB'],
  '勝負師': ['チャンスA', 'チャンスB', 'チャンス○'],
  '精神的支柱': ['ムード○'],
  '強心臓': ['対ピンチA', '対ピンチB', '対ピンチ○'],
  '不屈の魂': ['打たれ強さA', '打たれ強さB'],
  'ドクターK': ['奪三振'],
  '驚異の切れ味': ['キレ○'],
  '怪物球威': ['重い球'],
  '本塁打厳禁': ['逃げ球'],
  'ガソリンタンク': ['回復A', '回復B'],
  '鉄腕': ['調子安定', '回復A', '回復B'],
  '闘魂': ['闘志'],
  '内角無双': ['内角攻め'],
  '恐怖の満塁男': ['満塁男'],
  '切り込み隊長': ['チャンスメーカー'],
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
      grade: String(statStr),
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

// 主要・有名転生OB＆現役スター選手の精緻な1年目初期データ一覧辞書 (最新パワプロ2024-2025/2026準拠)
const MAJOR_PLAYERS_DETAILS: Record<string, PlayerDetails> = {
  // === 投手 ===
  '大谷翔平(DLC)': {
    initialStats: { speed: 152, control: 'E46', stamina: 'C64', breakingBalls: 'スライダー3, SFF3', trajectory: 3, meet: 'C64', power: 'A84', run: 'B76', arm: 'A88', fielding: 'D55', catching: 'E48' },
    goldAbilities: [],
    blueAbilities: ['二刀流', '奪三振', 'ノビB', '球持ち○', 'パワーヒッター', '広角打法'],
    redAbilities: ['三振(打者時)'],
    advice: '投打両面で1年目から圧倒的。スタミナ回復アイテムや伝令を併用してフル回転させましょう。'
  },
  '大谷翔平': {
    initialStats: { speed: 150, control: 'E45', stamina: 'C62', breakingBalls: 'スライダー3, SFF2', trajectory: 3, meet: 'C62', power: 'A82', run: 'B75', arm: 'A86', fielding: 'D54', catching: 'E46' },
    goldAbilities: [],
    blueAbilities: ['二刀流', '奪三振', 'ノビB', 'パワーヒッター', '広角打法'],
    redAbilities: ['三振(打者時)'],
    advice: 'エース兼主砲としてチームを牽引可能。1年生から夏の予選で登板させ経験点を稼ぎましょう。'
  },
  'ダルビッシュ有(DLC)': {
    initialStats: { speed: 150, control: 'D54', stamina: 'B72', breakingBalls: 'スライダー3, カーブ2, フォーク3' },
    goldAbilities: [],
    blueAbilities: ['キレ○', '奪三振', 'ノビA', '回復A', '尻上がり', '闘志'],
    redAbilities: ['スロースターター'],
    advice: '序盤（1〜2回）の失点に注意。立ち上がりを伝令「励ます」や指示で乗り切れば完投ペースに。'
  },
  'ダルビッシュ有': {
    initialStats: { speed: 148, control: 'D52', stamina: 'B70', breakingBalls: 'スライダー3, カーブ2, フォーク3' },
    goldAbilities: [],
    blueAbilities: ['キレ○', '奪三振', 'ノビA', '回復A', '尻上がり', '闘志'],
    redAbilities: ['スロースターター'],
    advice: '序盤（1〜2回）の失点に注意。立ち上がりを伝令「励ます」や指示で乗り切れば完投ペースに。'
  },
  '田中将大(DLC)': {
    initialStats: { speed: 150, control: 'D56', stamina: 'B74', breakingBalls: '高速スライダー4, SFF4' },
    goldAbilities: ['勝利の星'],
    blueAbilities: ['奪三振', 'キレ○', '闘志', '対ピンチB', '打たれ強さA'],
    redAbilities: [],
    advice: '金特「勝利の星」持ち。赤特なしで初期から抜群の安定感を誇る高校球界最強ピッチャー。'
  },
  '田中将大': {
    initialStats: { speed: 148, control: 'D54', stamina: 'B72', breakingBalls: 'スライダー4, SFF3' },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'キレ○', '闘志', '対ピンチB', '打たれ強さA'],
    redAbilities: [],
    advice: 'ピンチに極めて強く赤特もなし。1年目から絶対的守護神・先発として計算できます。'
  },
  '山本由伸': {
    initialStats: { speed: 151, control: 'C62', stamina: 'B72', breakingBalls: 'カットボール3, カーブ2, SFF3' },
    goldAbilities: [],
    blueAbilities: ['ノビA', 'キレ○', '奪三振', '低め○', '対ピンチB'],
    redAbilities: [],
    advice: '直球・変化球・制球の三拍子が揃う現代最強エース。低め中心の配球指示が特効。'
  },
  '佐々木朗希': {
    initialStats: { speed: 156, control: 'E44', stamina: 'D55', breakingBalls: 'フォーク4, スライダー2' },
    goldAbilities: [],
    blueAbilities: ['ノビA', '奪三振', 'ジャイロボール'],
    redAbilities: ['ケガしにくさE', '回復E'],
    advice: '豪速球とフォークは圧巻ですが、ケガ・回復Eのため連投は厳禁。休養マスや控え投手を活用。'
  },
  '松坂大輔': {
    initialStats: { speed: 152, control: 'D52', stamina: 'A80', breakingBalls: '高速スライダー4, カーブ2, チェンジアップ2' },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'キレ○', '対ピンチA', '尻上がり', '闘志'],
    redAbilities: ['四球'],
    advice: '怪物級のスタミナと奪三振力。四球赤特があるため、カウントを悪くした際の甘い球に注意。'
  },
  '江川卓': {
    initialStats: { speed: 153, control: 'C64', stamina: 'A82', breakingBalls: 'カーブ4' },
    goldAbilities: ['怪童'],
    blueAbilities: ['奪三振', '重い球', '尻上がり'],
    redAbilities: [],
    advice: '金特「怪童」持ち。浮き上がる剛速球で三振の山を築きます。'
  },
  '藤川球児(DLC)': {
    initialStats: { speed: 151, control: 'D55', stamina: 'D55', breakingBalls: 'フォーク4, カーブ1' },
    goldAbilities: ['怪童'],
    blueAbilities: ['奪三振', 'キレ○'],
    redAbilities: [],
    advice: '金特「怪童」持ち。終盤のピンチや最終回に登板させて反撃を断ちましょう。'
  },
  '藤川球児': {
    initialStats: { speed: 150, control: 'D54', stamina: 'D55', breakingBalls: 'フォーク4, カーブ1' },
    goldAbilities: ['怪童'],
    blueAbilities: ['奪三振', 'キレ○'],
    redAbilities: [],
    advice: '金特「怪童」持ち。終盤のピンチや最終回に登板させて反撃を断ちましょう。'
  },
  '佐々木主浩': {
    initialStats: { speed: 148, control: 'D54', stamina: 'D50', breakingBalls: 'フォーク5' },
    goldAbilities: [],
    blueAbilities: ['奪三振', '威圧感(投手)', '重い球'],
    redAbilities: [],
    advice: '落差MAXのフォークと威圧感。最終回のストッパーとして無類の強さを誇ります。'
  },
  '千賀滉大': {
    initialStats: { speed: 152, control: 'E46', stamina: 'B70', breakingBalls: 'フォーク4, スライダー2' },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'ノビB', '逃げ球'],
    redAbilities: ['四球'],
    advice: 'お化けフォークで空振りを奪える。四球が出やすいため、伝令でコントロールを補うと吉。'
  },
  '桑田真澄': {
    initialStats: { speed: 144, control: 'B72', stamina: 'B70', breakingBalls: 'カーブ4, スライダー2, SFF2' },
    goldAbilities: [],
    blueAbilities: ['ノビA', 'キレ○', '投球位置右', '打撃力○'],
    redAbilities: [],
    advice: '制球力Bと多彩な変化球で失点が極小。打撃能力も高いため下位打線のポイントゲッターに。'
  },
  '黒田博樹': {
    initialStats: { speed: 147, control: 'C62', stamina: 'B75', breakingBalls: 'ツーシーム3, スライダー3, フォーク2' },
    goldAbilities: [],
    blueAbilities: ['打たれ強さA', '対ピンチB', '闘志', 'ゴロピッチャー'],
    redAbilities: [],
    advice: '動く球で打たせて取るタフネス右腕。守備陣の捕球・守備力を高めておくと無失点に抑えます。'
  },
  '前田健太': {
    initialStats: { speed: 146, control: 'C64', stamina: 'B72', breakingBalls: 'スライダー4, チェンジアップ2, カーブ2' },
    goldAbilities: [],
    blueAbilities: ['キレ○', '低め○', '尻上がり', '打たれ強さB'],
    redAbilities: [],
    advice: '安定感抜群のマエケンスライダー。イニングが進むほど能力が上がる尻上がり持ち。'
  },
  '江夏豊': {
    initialStats: { speed: 148, control: 'B70', stamina: 'A82', breakingBalls: 'カーブ4, スライダー3' },
    goldAbilities: ['怪童'],
    blueAbilities: ['奪三振', 'キレ○', '尻上がり', '対ピンチB'],
    redAbilities: [],
    advice: '金特「怪童」所持の伝説の左腕。驚異的な奪三振率で相手打線をねじ伏せます。'
  },
  '稲尾和久': {
    initialStats: { speed: 147, control: 'A80', stamina: 'S90', breakingBalls: 'スライダー4, シュート3' },
    goldAbilities: ['鉄腕'],
    blueAbilities: ['キレ○', '奪三振', '尻上がり', '低め○'],
    redAbilities: [],
    advice: '金特「鉄腕」所持。神様仏様稲尾様。無尽蔵のスタミナと針の穴を通す制球力。'
  },
  '別所昭': {
    initialStats: { speed: 148, control: 'B74', stamina: 'A85', breakingBalls: 'ドロップ4, スライダー2' },
    goldAbilities: ['鉄人'],
    blueAbilities: ['奪三振', '打たれ強さA', '尻上がり'],
    redAbilities: [],
    advice: '金特「鉄人」所持。連投に耐えるタフネスエース。'
  },
  '金田正一': {
    initialStats: { speed: 153, control: 'C64', stamina: 'S90', breakingBalls: 'ドロップ5, カーブ2' },
    goldAbilities: ['闘魂'],
    blueAbilities: ['ノビA', '奪三振', '重い球', '尻上がり'],
    redAbilities: [],
    advice: '金特「闘魂」所持。400勝投手の威容。剛速球と大きな縦割れドロップで圧倒。'
  },
  '小山正明': {
    initialStats: { speed: 145, control: 'S90', stamina: 'A82', breakingBalls: 'パーム4, カーブ2' },
    goldAbilities: ['精密機械'],
    blueAbilities: ['キレ○', '奪三振', '尻上がり', 'ポーカーフェイス'],
    redAbilities: [],
    advice: '金特「精密機械」所持。精密機械の異名通り、四球とは無縁の圧倒的制球力。'
  },
  '鈴木啓示': {
    initialStats: { speed: 146, control: 'B74', stamina: 'A85', breakingBalls: 'カーブ4, スライダー2' },
    goldAbilities: ['不屈の魂'],
    blueAbilities: ['ノビA', '奪三振', '闘志', '尻上がり'],
    redAbilities: [],
    advice: '金特「不屈の魂」所持。草魂の左腕。ピンチにも動じず完投勝利を収めます。'
  },
  '平松政次': {
    initialStats: { speed: 148, control: 'B72', stamina: 'B74', breakingBalls: 'カミソリシュート4, カーブ2' },
    goldAbilities: ['怪物球威'],
    blueAbilities: ['キレ○', '奪三振'],
    redAbilities: [],
    advice: '金特「怪物球威」所持。打者の内角をえぐるカミソリシュートで内野ゴロを量産。'
  },
  '北別府学': {
    initialStats: { speed: 144, control: 'A82', stamina: 'B74', breakingBalls: 'スライダー3, シュート3' },
    goldAbilities: ['精密機械'],
    blueAbilities: ['キレ○', '尻上がり', 'ポーカーフェイス'],
    redAbilities: [],
    advice: '金特「精密機械」所持。精密なコントロールで低めを突き、凡打の山を築きます。'
  },
  '尾崎行雄': {
    initialStats: { speed: 154, control: 'D52', stamina: 'A80', breakingBalls: 'カーブ3' },
    goldAbilities: ['怪童'],
    blueAbilities: ['奪三振', '重い球'],
    redAbilities: [],
    advice: '金特「怪童」所持。怪童と呼ばれた甲子園優勝投手。ストレート一本でねじ伏せます。'
  },
  '岩瀬仁紀': {
    initialStats: { speed: 144, control: 'A80', stamina: 'C60', breakingBalls: '死神スライダー5, シュート2' },
    goldAbilities: ['驚異の切れ味'],
    blueAbilities: ['対左投手A', '奪三振', '威圧感(投手)'],
    redAbilities: [],
    advice: '金特「驚異の切れ味」所持。歴代最多セーブ。伝家の宝刀スライダーで空振りを量産。'
  },
  '伊藤智仁': {
    initialStats: { speed: 150, control: 'C65', stamina: 'C62', breakingBalls: '高速スライダー5' },
    goldAbilities: ['驚異の切れ味'],
    blueAbilities: ['奪三振', 'ノビA'],
    redAbilities: ['ケガしにくさF'],
    advice: '金特「驚異の切れ味」所持。直角に曲がる高速スライダー。ケガFのため酷使は禁物。'
  },
  '山口鉄也(DLC)': {
    initialStats: { speed: 149, control: 'B72', stamina: 'B70', breakingBalls: 'チェンジアップ4, スライダー2' },
    goldAbilities: ['鉄腕'],
    blueAbilities: ['キレ○', '奪三振', '対左投手A', '打たれ強さA'],
    redAbilities: [],
    advice: '金特「鉄腕」所持。育成出身の鉄腕サウスポー。中継ぎ・先発どこでも安定感抜群。'
  },
  '米田哲也': {
    initialStats: { speed: 148, control: 'B70', stamina: 'S92', breakingBalls: 'ヨネボール4, カーブ3' },
    goldAbilities: ['ガソリンタンク'],
    blueAbilities: ['奪三振', '打たれ強さA', '尻上がり'],
    redAbilities: [],
    advice: '金特「ガソリンタンク」所持。ガソリンタンクの異名を持つ連投タフネス右腕。'
  },
  '斉藤和巳': {
    initialStats: { speed: 152, control: 'C65', stamina: 'A82', breakingBalls: 'フォーク4, スライダー3' },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'ノビA', '威圧感(投手)', '闘志', '尻上がり'],
    redAbilities: ['ケガしにくさF'],
    advice: '負けないエース。圧倒的な投球能力を誇りますが、ケガFのため休養を忘れずに。'
  },
  '上原浩治(DLC)': {
    initialStats: { speed: 144, control: 'A85', stamina: 'B72', breakingBalls: 'SFF4, カットボール2' },
    goldAbilities: [],
    blueAbilities: ['キレ○', '低め○', 'ノビA', '奪三振', 'ポーカーフェイス'],
    redAbilities: [],
    advice: '雑草魂。四球を出さない抜群のコントロールと鋭いSFFで三振を奪います。'
  },
  '上原浩治': {
    initialStats: { speed: 143, control: 'A84', stamina: 'B70', breakingBalls: 'SFF4, カットボール2' },
    goldAbilities: [],
    blueAbilities: ['キレ○', '低め○', 'ノビA', '奪三振', 'ポーカーフェイス'],
    redAbilities: [],
    advice: '抜群の制球力とSFF。走者を背負っても甘い球を投げません。'
  },
  '村田兆治': {
    initialStats: { speed: 152, control: 'D54', stamina: 'A85', breakingBalls: '落差フォーク5, カーブ2' },
    goldAbilities: [],
    blueAbilities: ['奪三振', '重い球', '剛速球'],
    redAbilities: ['暴投'],
    advice: 'マサカリ投法。剛速球と落差フォークの威力は絶大ですが、暴投に注意。'
  },

  // === 捕手 (キャッチャーA/B & 金特) ===
  '古田敦也': {
    initialStats: { trajectory: 3, meet: 'C65', power: 'B72', run: 'C60', arm: 'A88', fielding: 'A82', catching: 'B72' },
    goldAbilities: ['球界の頭脳', 'ささやき戦術'],
    blueAbilities: ['送球A', 'アベレージヒッター'], // キャッチャーAは除外
    redAbilities: [],
    advice: '【栄冠ナイン歴代最強捕手】金特「球界の頭脳」「ささやき戦術」所持。全投手の制球+15・スタミナ消費-15・相手打力大幅低下。最優先リセマラ対象！'
  },
  '野村克也': {
    initialStats: { trajectory: 4, meet: 'B72', power: 'A86', run: 'D50', arm: 'A80', fielding: 'B72', catching: 'B70' },
    goldAbilities: ['球界の頭脳', 'ささやき戦術'],
    blueAbilities: ['パワーヒッター', '広角打法', 'チャンスA'], // キャッチャーAは除外
    redAbilities: ['走塁E'],
    advice: '金特「球界の頭脳」「ささやき戦術」と長打力を併せ持つ球界のレジェンド。4番捕手としてチームの中心に。'
  },
  '田淵幸一': {
    initialStats: { trajectory: 4, meet: 'C64', power: 'A88', run: 'E46', arm: 'A82', fielding: 'C65', catching: 'C60' },
    goldAbilities: ['アーチスト'],
    blueAbilities: ['キャッチャーB', 'サヨナラ男', 'プルヒッター'], // パワーヒッターは除外
    redAbilities: ['走塁F'],
    advice: '金特「アーチスト」所持。ホームランアーチを架ける強打の正捕手。'
  },
  '城島健司(DLC)': {
    initialStats: { trajectory: 4, meet: 'C64', power: 'A84', run: 'D55', arm: 'S90', fielding: 'B72', catching: 'C64' },
    goldAbilities: ['バズーカ送球'],
    blueAbilities: ['キャッチャーB', 'パワーヒッター', '逆境○'], // 送球Aは除外
    redAbilities: [],
    advice: '金特「バズーカ送球」所持。相手の盗塁を完全シャットアウトする強肩強打捕手。'
  },
  '城島健司': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'A82', run: 'D55', arm: 'A88', fielding: 'B70', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', '強肩', 'パワーヒッター', '逆境○'],
    redAbilities: [],
    advice: '強肩A88で相手の盗塁を完全阻止。打力もパワーAでクリーンナップを打てます。'
  },
  '阿部慎之助(DLC)': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'A85', run: 'E48', arm: 'A82', fielding: 'C65', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', 'パワーヒッター', 'プルヒッター', 'サヨナラ男', '逆境○'],
    redAbilities: ['走塁E'],
    advice: '左のスラッガー捕手。長打力とリードを両立し、勝負強さも抜群。'
  },
  '阿部慎之助': {
    initialStats: { trajectory: 4, meet: 'C60', power: 'A84', run: 'E48', arm: 'A82', fielding: 'C65', catching: 'C60' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', 'パワーヒッター', 'プルヒッター', 'サヨナラ男'],
    redAbilities: ['走塁E'],
    advice: '左のスラッガー捕手。長打力とリードを両立し、勝負強さも抜群。'
  },
  '谷繁元信(DLC)': {
    initialStats: { trajectory: 2, meet: 'D56', power: 'C66', run: 'D50', arm: 'A86', fielding: 'A82', catching: 'B72' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーA', 'ささやき戦術', 'ブロック○', '送球B'],
    redAbilities: ['三振'],
    advice: 'キャッチャーA持ちの守備特化型名捕手。投手陣の防御率が劇的に改善します。'
  },
  '谷繁元信': {
    initialStats: { trajectory: 2, meet: 'D55', power: 'C65', run: 'D50', arm: 'A85', fielding: 'A80', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーA', 'ささやき戦術', 'ブロック○', '送球B'],
    redAbilities: ['三振'],
    advice: 'キャッチャーA持ちの守備特化型名捕手。投手陣の防御率が劇的に改善します。'
  },
  '森昌彦': {
    initialStats: { trajectory: 2, meet: 'C60', power: 'C60', run: 'D52', arm: 'A84', fielding: 'A82', catching: 'B74' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーA', 'ブロック○', '送球B'],
    redAbilities: [],
    advice: 'V9巨人を支えた名捕手。キャッチャーAで投手力を最大限に引き出します。'
  },
  '大矢明彦': {
    initialStats: { trajectory: 2, meet: 'D52', power: 'D58', run: 'D52', arm: 'A86', fielding: 'A80', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーA', '送球A', 'ささやき○'],
    redAbilities: [],
    advice: 'キャッチャーA＆送球A。守備面の信頼度が非常に高い正捕手。'
  },
  '伊藤勤': {
    initialStats: { trajectory: 2, meet: 'D54', power: 'C64', run: 'D55', arm: 'A85', fielding: 'A82', catching: 'B72' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーA', '送球A', 'ブロック○'],
    redAbilities: [],
    advice: '西武黄金期の頭脳。キャッチャーAと強肩で堅牢な守備陣を築きます。'
  },
  '里崎智也': {
    initialStats: { trajectory: 3, meet: 'D54', power: 'B72', run: 'E48', arm: 'B78', fielding: 'C62', catching: 'C60' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', '意外性', 'チャンスB'],
    redAbilities: [],
    advice: '要所で一発を放つ大舞台の強さ。徳島県からのスタートで手堅いリセマラ候補。'
  },
  '森友哉': {
    initialStats: { trajectory: 3, meet: 'B70', power: 'B78', run: 'C65', arm: 'B72', fielding: 'D52', catching: 'D50' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '逆境○'],
    redAbilities: [],
    advice: '打撃力は全捕手中でも屈指。リード能力は特訓やOBマスでキャッチャーB以上に伸ばすのが理想。'
  },

  // === 野手 (一・二・三・遊・外) ===
  '長嶋茂雄': {
    initialStats: { trajectory: 3, meet: 'B76', power: 'B76', run: 'B72', arm: 'B78', fielding: 'B75', catching: 'B70' },
    goldAbilities: [],
    // ※パワーヒッターは未所持！アベレージヒッター・広角打法・チャンスA等を所持
    blueAbilities: ['アベレージヒッター', '広角打法', 'チャンスA', 'サヨナラ男', '固め打ち', '初球○', '守備職人'],
    redAbilities: [],
    advice: '【ミスタープロ野球】アベレージヒッターと広角打法を併せ持つ打率マスター。得点圏での勝負強さも圧倒的。'
  },
  '王貞治(DLC)': {
    initialStats: { trajectory: 4, meet: 'B78', power: 'S94', run: 'C60', arm: 'B72', fielding: 'B72', catching: 'B74' },
    goldAbilities: ['アーチスト'],
    blueAbilities: ['アベレージヒッター', '威圧感', '選球眼', '逆境○', '満塁男'], // パワーヒッターは除外
    redAbilities: [],
    advice: '金特「アーチスト」所持。パワーS94から放たれる打球は高確率で本塁打になります。'
  },
  '王貞治': {
    initialStats: { trajectory: 4, meet: 'B76', power: 'S92', run: 'C60', arm: 'B70', fielding: 'B70', catching: 'B72' },
    goldAbilities: ['アーチスト'],
    blueAbilities: ['アベレージヒッター', '威圧感', '選球眼', '逆境○'], // パワーヒッターは除外
    redAbilities: [],
    advice: '金特「アーチスト」所持。世界の本塁打王。フライ性の当たりがことごとくスタンドインします。'
  },
  'イチロー': {
    initialStats: { trajectory: 2, meet: 'B78', power: 'C65', run: 'A88', arm: 'S92', fielding: 'S90', catching: 'A82' },
    goldAbilities: ['安打製造機'],
    blueAbilities: ['広角打法', '守備職人', 'レーザービーム', '走塁A', '盗塁A', 'チャンスメーカー', '内野安打○'], // アベヒは除外
    redAbilities: [],
    advice: '【打・走・守の頂点】金特「安打製造機」所持。出塁率・守備範囲・補殺すべてが神レベル。'
  },
  '松井秀喜': {
    initialStats: { trajectory: 4, meet: 'B72', power: 'A88', run: 'C62', arm: 'B76', fielding: 'C60', catching: 'C60' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '威圧感', 'チャンスA', '逆境○', 'プルヒッター'],
    redAbilities: [],
    advice: '弾道4×パワーA88の超ド級スラッガー。得点圏で驚異的な打点力を誇る4番打者。'
  },
  '落合博満': {
    initialStats: { trajectory: 3, meet: 'A82', power: 'A85', run: 'D52', arm: 'C65', fielding: 'C62', catching: 'B70' },
    goldAbilities: ['勝負師'],
    blueAbilities: ['アベレージヒッター', '広角打法', 'パワーヒッター', '威圧感', '流し打ち'], // チャンスAは除外
    redAbilities: ['併殺'],
    advice: '金特「勝負師」所持。3冠王打法。足は速くないため、ランナー1塁でのゴロ併殺にのみ注意。'
  },
  '秋山幸二': {
    initialStats: { trajectory: 4, meet: 'C64', power: 'A86', run: 'A82', arm: 'A85', fielding: 'A84', catching: 'B72' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '走塁A', '守備職人', 'レーザービーム'],
    redAbilities: ['三振'],
    advice: 'メジャー級の身体能力。パワーA・走力A・守備力Aで走攻守すべてトップクラス。'
  },
  '柳田悠岐': {
    initialStats: { trajectory: 4, meet: 'C65', power: 'A88', run: 'A82', arm: 'A85', fielding: 'C62', catching: 'D55' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '初球○', '逆境○', '固め打ち'],
    redAbilities: ['三振'],
    advice: 'フルスイングから放たれる圧倒的飛距離。1年目から打線の主軸を担えます。'
  },
  '松井稼頭央(DLC)': {
    initialStats: { trajectory: 3, meet: 'B72', power: 'A82', run: 'S90', arm: 'A84', fielding: 'A80', catching: 'B70' },
    goldAbilities: ['切り込み隊長'],
    blueAbilities: ['パワーヒッター', '盗塁A', '走塁A', '守備職人', '送球B'], // チャンスメーカーは除外
    redAbilities: [],
    advice: '金特「切り込み隊長」所持。トリプルスリー遊撃手。先頭打者ホームランも狙えます。'
  },
  '山本浩二(DLC)': {
    initialStats: { trajectory: 4, meet: 'B72', power: 'A86', run: 'B75', arm: 'A82', fielding: 'A82', catching: 'B74' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '守備職人', '送球A', '対左投手A'],
    redAbilities: [],
    advice: 'ミスター赤ヘル。攻守走すべてが完成された究極の外野手。'
  },
  '山本浩二': {
    initialStats: { trajectory: 4, meet: 'B70', power: 'A85', run: 'B74', arm: 'A80', fielding: 'A80', catching: 'B72' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '守備職人', '送球A'],
    redAbilities: [],
    advice: '外野手の模範となる完璧なステータス。クリーンナップに最適。'
  },
  '福留孝介(DLC)': {
    initialStats: { trajectory: 3, meet: 'B74', power: 'B76', run: 'B72', arm: 'A84', fielding: 'B75', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '選球眼', 'レーザービーム', '流し打ち'],
    redAbilities: [],
    advice: '首位打者の打撃技術と強肩。隙のないオールラウンダー。'
  },
  '金本知憲': {
    initialStats: { trajectory: 4, meet: 'C65', power: 'A84', run: 'B72', arm: 'B70', fielding: 'C65', catching: 'C60' },
    goldAbilities: ['鉄人'],
    blueAbilities: ['パワーヒッター', '広角打法', '逆境○', 'チャンスB'], // ケガAは除外
    redAbilities: [],
    advice: '金特「鉄人」所持。アニキの勝負強さとタフネスでチームを鼓舞。'
  },
  '山田哲人(DLC)': {
    initialStats: { trajectory: 4, meet: 'C65', power: 'A84', run: 'A84', arm: 'B72', fielding: 'B74', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '盗塁A', '走塁A', '初球○'],
    redAbilities: [],
    advice: 'トリプルスリー二塁手。パワーAと走力Aを併せ持つ最強セカンド。'
  },
  '山田哲人': {
    initialStats: { trajectory: 4, meet: 'C64', power: 'A82', run: 'A82', arm: 'B70', fielding: 'B72', catching: 'C60' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '盗塁A', '走塁A', '初球○'],
    redAbilities: [],
    advice: '長打と機動力を兼ね備えた最高峰の二塁手。'
  },
  '坂本勇人': {
    initialStats: { trajectory: 3, meet: 'C64', power: 'B76', run: 'B70', arm: 'B74', fielding: 'B72', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['広角打法', 'パワーヒッター', '固め打ち', 'チャンスB', '送球B'],
    redAbilities: [],
    advice: '打てるショートの最高傑作。守備・走力も高水準で1年生から遊撃手のレギュラー固定可能。'
  },
  '張本勲': {
    initialStats: { trajectory: 3, meet: 'A84', power: 'A82', run: 'B72', arm: 'B70', fielding: 'C60', catching: 'C62' },
    goldAbilities: ['安打製造機'],
    blueAbilities: ['広角打法', '流し打ち', '固め打ち', 'チャンスB'], // アベヒは除外
    redAbilities: [],
    advice: '金特「安打製造機」所持。3000安打の日本記録保持者。'
  },
  '青木宣親': {
    initialStats: { trajectory: 2, meet: 'A80', power: 'C62', run: 'A82', arm: 'B72', fielding: 'B72', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '内野安打○', '固め打ち', '選球眼'],
    redAbilities: [],
    advice: 'シーズン200安打2回の安打製造職人。出塁率が非常に高い1番打者。'
  },
  '村上宗隆(DLC)': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'A88', run: 'C62', arm: 'B76', fielding: 'D54', catching: 'E48' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '威圧感', '選球眼'],
    redAbilities: ['三振', 'エラー'],
    advice: '村神様。驚異的な本塁打力。守備・捕球の特訓を優先推奨。'
  },
  '村上宗隆': {
    initialStats: { trajectory: 4, meet: 'C60', power: 'A86', run: 'C62', arm: 'B74', fielding: 'D52', catching: 'E48' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '威圧感', '選球眼'],
    redAbilities: ['三振', 'エラー'],
    advice: '日本人シーズン最多本塁打の破壊力。守備と捕球がやや低いため早めの強化を。'
  },
  '高橋由伸': {
    initialStats: { trajectory: 3, meet: 'B74', power: 'A80', run: 'B72', arm: 'A82', fielding: 'A80', catching: 'B72' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '初球○', '守備職人', 'レーザービーム'],
    redAbilities: ['ケガしにくさE'],
    advice: '天才バットマン。華麗な外野守備と広角打法。ケガマスに注意。'
  },
  '筒香嘉智': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'A86', run: 'D52', arm: 'B72', fielding: 'D55', catching: 'D52' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '広角打法', '逆境○'],
    redAbilities: ['三振'],
    advice: '豪快なフルスイング本塁打。横浜高校・和歌山出身の主砲。'
  },
  '石井琢朗': {
    initialStats: { trajectory: 2, meet: 'B72', power: 'D55', run: 'A85', arm: 'B72', fielding: 'A82', catching: 'B74' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '盗塁A', '走塁A', '守備職人', '内野安打○', 'バント職人'],
    redAbilities: [],
    advice: 'マシンガン打線の1番遊撃手。足と小技、堅実な守備の三拍子。'
  },
  '岡田彰布': {
    initialStats: { trajectory: 4, meet: 'C65', power: 'A82', run: 'C64', arm: 'B72', fielding: 'B74', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', 'チャンスB', 'プルヒッター'],
    redAbilities: [],
    advice: 'どんでん。勝負強いバッティングと長打力を持つ名二塁手。'
  },
  '清原和博': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'A86', run: 'D55', arm: 'B75', fielding: 'C62', catching: 'C60' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '逆境○', '初球○'],
    redAbilities: [],
    advice: '甲子園で通算13本塁打を記録した勝負強さ。劣勢でも一撃で試合をひっくり返します。'
  },
  '中西太': {
    initialStats: { trajectory: 4, meet: 'B70', power: 'A88', run: 'B70', arm: 'A82', fielding: 'B70', catching: 'C65' },
    goldAbilities: ['怪力'],
    blueAbilities: ['広角打法', '初球○', 'チャンスB'], // パワヒは除外
    redAbilities: [],
    advice: '金特「怪力」所持。香川・高松一高の怪童。長打力・走力・強肩すべてが1年目から完成されています。'
  },
  '中村紀洋': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'A86', run: 'D54', arm: 'A82', fielding: 'B74', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '初球○', 'サヨナラ男', '逆境○'],
    redAbilities: ['三振'],
    advice: 'フルスイング本塁打とゴールデングラブの好守を併せ持つノリ。'
  },
  '掛布雅之': {
    initialStats: { trajectory: 4, meet: 'B72', power: 'A84', run: 'C64', arm: 'B74', fielding: 'B74', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', 'チャンスA', 'サヨナラ男', '逆境○'],
    redAbilities: [],
    advice: 'ミスタータイガース。美しい放物線を描く本塁打と驚異の勝負強さ。'
  },
  '若松勉': {
    initialStats: { trajectory: 3, meet: 'B76', power: 'B70', run: 'B72', arm: 'B70', fielding: 'B72', catching: 'B72' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', 'チャンスB'],
    redAbilities: [],
    advice: '小さな大打者。北海道出身・首位打者。欠点がなく打率・得点圏ともにハイアベレージ。'
  },
  '松中信彦(DLC)': {
    initialStats: { trajectory: 4, meet: 'B74', power: 'A88', run: 'D55', arm: 'B72', fielding: 'C62', catching: 'C60' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', 'アベレージヒッター', 'チャンスA'],
    redAbilities: [],
    advice: '平成唯一の三冠王。ミートB・パワーAで打ちまくる主砲。'
  },
  '松中信彦': {
    initialStats: { trajectory: 4, meet: 'B72', power: 'A86', run: 'D54', arm: 'B70', fielding: 'C60', catching: 'C60' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', 'アベレージヒッター', 'チャンスA'],
    redAbilities: [],
    advice: '平成三冠王。広角に打ち分ける確実性と本塁打力を両立。'
  },
  '小笠原道大(DLC)': {
    initialStats: { trajectory: 4, meet: 'B75', power: 'A86', run: 'C62', arm: 'B72', fielding: 'B70', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', 'パワーヒッター', '広角打法', '逆境○'],
    redAbilities: ['三振'],
    advice: 'ガッツ。フルスイングから広角に長打を打ち分ける勝負師。'
  },
  '小笠原道大': {
    initialStats: { trajectory: 4, meet: 'B74', power: 'A84', run: 'C60', arm: 'B70', fielding: 'B70', catching: 'C60' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', 'パワーヒッター', '広角打法', '逆境○'],
    redAbilities: ['三振'],
    advice: '北のサムライ。高打率と長打を両立するクリーンナップ候補。'
  },
  '新庄剛志': {
    initialStats: { trajectory: 3, meet: 'D54', power: 'B74', run: 'B75', arm: 'S94', fielding: 'S90', catching: 'A82' },
    goldAbilities: [],
    blueAbilities: ['レーザービーム', '守備職人', '送球A', '意外性', '初球○'],
    redAbilities: ['三振'],
    advice: '肩力S94・守備S90のBIGBOSS。外野からの返球で失点を阻止し、意外な場面で一発。'
  },
  '鈴木誠也(DLC)': {
    initialStats: { trajectory: 3, meet: 'C66', power: 'A84', run: 'B75', arm: 'A86', fielding: 'B74', catching: 'C64' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '送球A', 'チャンスB', '選球眼'],
    redAbilities: [],
    advice: '強肩強打の主砲。メジャー仕込みのパンチ力と広角打法。'
  },
  '鈴木誠也': {
    initialStats: { trajectory: 3, meet: 'C65', power: 'A82', run: 'B74', arm: 'A85', fielding: 'B72', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '送球A', 'チャンスB'],
    redAbilities: [],
    advice: '強肩強打のメジャーリーガー。右翼手からのレーザービーム返球で失点を防ぎます。'
  },
  '吉田正尚(DLC)': {
    initialStats: { trajectory: 3, meet: 'B76', power: 'B78', run: 'C60', arm: 'B72', fielding: 'D55', catching: 'D54' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '選球眼', '固め打ち'],
    redAbilities: [],
    advice: 'マッチョマン。三振が極小で四球を選べる最強出塁率スラッガー。'
  },
  '吉田正尚': {
    initialStats: { trajectory: 3, meet: 'B75', power: 'B78', run: 'C60', arm: 'B70', fielding: 'D55', catching: 'D52' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '選球眼', '固め打ち'],
    redAbilities: [],
    advice: '福井・敦賀気比の至宝。三振が非常に少なく、四球も選べる高出塁率の最強クラッチヒッター。'
  },
  '衣笠祥雄': {
    initialStats: { trajectory: 3, meet: 'C64', power: 'A82', run: 'B70', arm: 'B76', fielding: 'B72', catching: 'C62' },
    goldAbilities: ['鉄人'],
    blueAbilities: ['パワーヒッター', '逆境○'], // ケガAは除外
    redAbilities: [],
    advice: '金特「鉄人」所持。連続試合出場の鉄人。怪我知らずでタフな育成が可能です。'
  },
  '近藤健介': {
    initialStats: { trajectory: 3, meet: 'A80', power: 'B74', run: 'C62', arm: 'B72', fielding: 'C64', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '選球眼', 'チャンスA'],
    redAbilities: [],
    advice: '脅威の出塁率と選球眼。出塁・進塁・得点圏すべてで頼りになる安打製造機。'
  },
  '秋山翔吾(DLC)': {
    initialStats: { trajectory: 3, meet: 'B76', power: 'C66', run: 'A82', arm: 'B72', fielding: 'B75', catching: 'B72' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '流し打ち', '走塁A'],
    redAbilities: [],
    advice: 'NPBシーズン最多安打記録保持者。広角に安打を打ち分けます。'
  },
  '秋山翔吾': {
    initialStats: { trajectory: 3, meet: 'B75', power: 'C64', run: 'A80', arm: 'B70', fielding: 'B74', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '流し打ち', '走塁A'],
    redAbilities: [],
    advice: '最多安打記録打者。高打率と走塁力でチャンスを演出。'
  },
  '宮本慎也(DLC)': {
    initialStats: { trajectory: 2, meet: 'B72', power: 'D55', run: 'C65', arm: 'A80', fielding: 'S92', catching: 'A85' },
    goldAbilities: [],
    blueAbilities: ['守備職人', '送球A', 'バント職人', '流し打ち', '選球眼'],
    redAbilities: [],
    advice: '守備S92の名手。バント職人で送りバント成功率100%。'
  },
  '福本豊': {
    initialStats: { trajectory: 2, meet: 'B72', power: 'C62', run: 'S98', arm: 'B72', fielding: 'A84', catching: 'B74' },
    goldAbilities: ['電光石火'],
    blueAbilities: ['走塁A', '内野安打○', '守備職人'], // 盗塁Aは除外
    redAbilities: [],
    advice: '金特「電光石火」所持。世界の盗塁王（走力S98）。出塁＝得点圏。'
  },
  '赤星憲広': {
    initialStats: { trajectory: 2, meet: 'C65', power: 'E42', run: 'S94', arm: 'C60', fielding: 'B75', catching: 'B70' },
    goldAbilities: ['電光石火'],
    blueAbilities: ['走塁A', '内野安打○', '流し打ち'], // 盗塁Aは除外
    redAbilities: [],
    advice: '金特「電光石火」所持。走力S94。出塁すれば確実に二盗・三盗を決められます。'
  },
  '川上哲治': {
    initialStats: { trajectory: 3, meet: 'A82', power: 'A80', run: 'C60', arm: 'B70', fielding: 'B75', catching: 'A80' },
    goldAbilities: ['安打製造機'],
    blueAbilities: ['広角打法', '選球眼', '固め打ち'], // アベヒは除外
    redAbilities: [],
    advice: '金特「安打製造機」所持。打撃の神様。ボールが止まって見える驚異の打棒。'
  },
  '石毛宏典': {
    initialStats: { trajectory: 3, meet: 'B70', power: 'B76', run: 'B75', arm: 'B74', fielding: 'B75', catching: 'B72' },
    goldAbilities: ['切り込み隊長'],
    blueAbilities: ['広角打法', '守備職人', '送球B'], // チャンスメーカーは除外
    redAbilities: [],
    advice: '金特「切り込み隊長」所持。西武黄金期のリーダー。攻守走の完成度が極めて高い。'
  },
  '小坂誠': {
    initialStats: { trajectory: 2, meet: 'D55', power: 'E45', run: 'A88', arm: 'B75', fielding: 'S94', catching: 'A85' },
    goldAbilities: ['魔術師'],
    blueAbilities: ['走塁A', '盗塁A', '内野安打○', '送球B'], // 守備職人は除外
    redAbilities: [],
    advice: '金特「魔術師」所持。小坂ゾーンと呼ばれる超人的な守備範囲。'
  },
  '菊池涼介(DLC)': {
    initialStats: { trajectory: 2, meet: 'D58', power: 'C62', run: 'A84', arm: 'A82', fielding: 'S94', catching: 'A85' },
    goldAbilities: ['魔術師'],
    blueAbilities: ['高速チャージ', '送球A', 'バント職人'], // 守備職人は除外
    redAbilities: [],
    advice: '金特「魔術師」所持。守備S94の忍者セカンド。'
  },
  '菊池涼介': {
    initialStats: { trajectory: 2, meet: 'D56', power: 'C60', run: 'A82', arm: 'A80', fielding: 'S92', catching: 'A84' },
    goldAbilities: [],
    blueAbilities: ['守備職人', '高速チャージ', '送球A', 'バント職人'],
    redAbilities: [],
    advice: '守備S92の忍者。センター前に抜けそうな打球もダイビングキャッチで捕殺します。'
  },
  '源田壮亮': {
    initialStats: { trajectory: 2, meet: 'D55', power: 'E46', run: 'A84', arm: 'B76', fielding: 'S90', catching: 'A82' },
    goldAbilities: [],
    blueAbilities: ['守備職人', '送球A', '盗塁A', '走塁A'],
    redAbilities: [],
    advice: '遊撃守備S90。三遊間の当たりをすべてアウトにして投手を助ける守備のスペシャリスト。'
  },
  '今宮健太': {
    initialStats: { trajectory: 2, meet: 'D50', power: 'D58', run: 'B75', arm: 'A84', fielding: 'A82', catching: 'B72' },
    goldAbilities: [],
    blueAbilities: ['守備職人', '送球A', 'バント職人'],
    redAbilities: [],
    advice: '超絶ファインプレー連発。バント職人持ちのため送りバント・スクイズ成功率が100%近くに。'
  },
  '周東佑京': {
    initialStats: { trajectory: 2, meet: 'E46', power: 'E48', run: 'S96', arm: 'B72', fielding: 'C65', catching: 'D52' },
    goldAbilities: [],
    blueAbilities: ['盗塁A', '走塁A', '内野安打○'],
    redAbilities: ['三振'],
    advice: '球界トップの快足S96。代走・スタメン問わず、足だけで1点をもぎ取れます。'
  },
  '新井貴浩': {
    initialStats: { trajectory: 4, meet: 'D55', power: 'A82', run: 'C62', arm: 'B75', fielding: 'D55', catching: 'E48' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '初球○'],
    redAbilities: ['送球E', '併殺'],
    advice: '長打力抜群ですが送球E・併殺持ち。特別指導や公式戦で送球を消去すると一気に化けます。'
  },
  '川崎宗則': {
    initialStats: { trajectory: 2, meet: 'C62', power: 'E45', run: 'A82', arm: 'B72', fielding: 'B74', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['内野安打○', '守備職人', 'ムード○'],
    redAbilities: [],
    advice: 'ムード○持ちで味方全員のミート・パワー+5の隠れ神スキル持ち。ベンチにいるだけでも効果大。'
  },
  '岩村明憲': {
    initialStats: { trajectory: 3, meet: 'C62', power: 'A80', run: 'B70', arm: 'B75', fielding: 'C65', catching: 'C60' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '逆境○'],
    redAbilities: ['三振'],
    advice: '愛媛・宇和島東の強打者。パワーA80で三塁手としての得点力を一気に引き上げます。'
  },
  '山川穂高': {
    initialStats: { trajectory: 4, meet: 'D54', power: 'A86', run: 'E48', arm: 'B72', fielding: 'D55', catching: 'D52' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '威圧感'],
    redAbilities: ['三振', '併殺'],
    advice: '沖縄スタート時の主砲候補。圧倒的なホームランアーチを架けます。三振に注意。'
  },
  '浅野翔吾': {
    initialStats: { trajectory: 3, meet: 'D52', power: 'B72', run: 'B70', arm: 'B74', fielding: 'C60', catching: 'D54' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'チャンスB'],
    redAbilities: ['三振'],
    advice: '香川・高松商のドラフト1位。1年目からB72のパワーで長打を連発。'
  },
  '前田智徳': {
    initialStats: { trajectory: 3, meet: 'A80', power: 'B76', run: 'C65', arm: 'B76', fielding: 'B70', catching: 'C64' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '流し打ち', '初球○'],
    redAbilities: ['ケガしにくさE'],
    advice: '孤高の天才打者。ミートA80で安打を量産。故障マスでのケガにだけは配慮しましょう。'
  },
  '駒田徳広': {
    initialStats: { trajectory: 3, meet: 'C64', power: 'B74', run: 'D55', arm: 'B72', fielding: 'B75', catching: 'B74' },
    goldAbilities: ['恐怖の満塁男'],
    blueAbilities: ['アベレージヒッター', '守備職人', '流し打ち'], // 満塁男は除外
    redAbilities: [],
    advice: '金特「恐怖の満塁男」所持。満塁男の異名通り、満塁で無類の強さを発揮する一塁手。'
  },
  '中村剛也': {
    initialStats: { trajectory: 4, meet: 'D54', power: 'A88', run: 'D52', arm: 'B74', fielding: 'C60', catching: 'C60' },
    goldAbilities: ['恐怖の満塁男'],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '初球○'], // 満塁男は除外
    redAbilities: ['三振'],
    advice: 'おかわり君。金特「恐怖の満塁男」とパワーA88。一撃で試合を決定づけます。'
  },
  '今岡誠': {
    initialStats: { trajectory: 3, meet: 'B74', power: 'B76', run: 'C60', arm: 'B72', fielding: 'C65', catching: 'B70' },
    goldAbilities: ['恐怖の満塁男'],
    blueAbilities: ['チャンスA', '初球○', 'アベレージヒッター'], // 満塁男は除外
    redAbilities: [],
    advice: 'シーズン147打点のクラッチヒッター。金特「恐怖の満塁男」で満塁走者をすべて一掃。'
  },
  '東尾修(DLC)': {
    initialStats: { speed: 142, control: 'A82', stamina: 'A80', breakingBalls: 'スライダー4, シュート3' },
    goldAbilities: ['内角無双'],
    blueAbilities: ['打たれ強さA', '尻上がり'], // 内角攻めは除外
    redAbilities: [],
    advice: '金特「内角無双」所持。ケンカ投法で打者の懐をえぐるタフネス右腕。'
  },
  '土井正博': {
    initialStats: { trajectory: 4, meet: 'C64', power: 'A86', run: 'D52', arm: 'B72', fielding: 'D55', catching: 'D55' },
    goldAbilities: ['引っ張り屋'],
    blueAbilities: ['パワーヒッター', '初球○'], // プルヒッターは除外
    redAbilities: [],
    advice: '金特「引っ張り屋」所持。18歳で4番を打ったスラッガー。レフトスタンドへ放り込みます。'
  },
  '江藤智': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'A86', run: 'D55', arm: 'B72', fielding: 'C60', catching: 'C60' },
    goldAbilities: ['アーチスト'],
    blueAbilities: ['広角打法', 'チャンスB'], // パワヒは除外
    redAbilities: ['三振'],
    advice: '金特「アーチスト」所持。豪快な放物線を描く本塁打王。'
  },
  '榎本喜八': {
    initialStats: { trajectory: 3, meet: 'A85', power: 'B75', run: 'B70', arm: 'B70', fielding: 'B72', catching: 'B72' },
    goldAbilities: ['安打製造機'],
    blueAbilities: ['広角打法', '選球眼', '流し打ち'], // アベヒは除外
    redAbilities: [],
    advice: '金特「安打製造機」所持。打撃の求道者。卓越したバットコントロールで安打量産。'
  },
  '新井宏昌': {
    initialStats: { trajectory: 2, meet: 'A82', power: 'C62', run: 'B74', arm: 'C65', fielding: 'B72', catching: 'B72' },
    goldAbilities: ['安打製造機'],
    blueAbilities: ['広角打法', '流し打ち', 'バント職人'], // アベヒは除外
    redAbilities: [],
    advice: '金特「安打製造機」所持。巧打と選球眼で驚異的な出塁率を誇る名外野手。'
  },
  '毒島章一': {
    initialStats: { trajectory: 3, meet: 'B74', power: 'B70', run: 'A80', arm: 'B72', fielding: 'B75', catching: 'B72' },
    goldAbilities: ['精神的支柱'],
    blueAbilities: ['アベレージヒッター', '走塁A', '守備職人'], // ムード○は除外
    redAbilities: [],
    advice: '金特「精神的支柱」所持。ミスターフライヤーズ。チーム全体の能力を底上げします。'
  },
  '高井保弘': {
    initialStats: { trajectory: 3, meet: 'B74', power: 'B78', run: 'E45', arm: 'C60', fielding: 'E48', catching: 'D52' },
    goldAbilities: ['代打の神様'],
    blueAbilities: ['サヨナラ男', '逆境○', '意外性'], // 代打○は除外
    redAbilities: [],
    advice: '金特「代打の神様」所持。世界記録の代打本塁打男。ここ一番の代打の切り札。'
  },
  '西村健太朗': {
    initialStats: { speed: 148, control: 'C64', stamina: 'D54', breakingBalls: '高速シュート4, スライダー2' },
    goldAbilities: ['本塁打厳禁'],
    blueAbilities: ['対ピンチB', 'キレ○'], // 逃げ球は除外
    redAbilities: [],
    advice: '金特「本塁打厳禁」所持。被本塁打を完全シャットアウトする救援右腕。'
  },
  '武田久': {
    initialStats: { speed: 145, control: 'A80', stamina: 'D52', breakingBalls: 'スライダー3, フォーク3' },
    goldAbilities: ['本塁打厳禁'],
    blueAbilities: ['キレ○', '対ピンチA', '低め○'], // 逃げ球は除外
    redAbilities: [],
    advice: '金特「本塁打厳禁」所持。低めを突く丁寧な投球で一発を浴びません。'
  },
  '吉田義男': {
    initialStats: { trajectory: 2, meet: 'B70', power: 'E45', run: 'A88', arm: 'A82', fielding: 'S94', catching: 'A85' },
    goldAbilities: ['魔術師'],
    blueAbilities: ['送球A', '盗塁A', '内野安打○'], // 守備職人は除外
    redAbilities: [],
    advice: '金特「魔術師」所持。今牛若丸。華麗な守備と快足でチームを支えます。'
  },
  '杉本裕太郎': {
    initialStats: { trajectory: 4, meet: 'D55', power: 'A84', run: 'D52', arm: 'B74', fielding: 'D55', catching: 'D52' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '初球○'],
    redAbilities: ['三振'],
    advice: 'ラオウ。パワーA84の規格外長打力。三振に注意しながら中軸起用。'
  },
  '栗原健太': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'A82', run: 'D52', arm: 'B72', fielding: 'C62', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', 'チャンスB'],
    redAbilities: [],
    advice: '広島の4番打者。パワーA82と勝負強さで打点を量産します。'
  },
  '外崎修汰': {
    initialStats: { trajectory: 2, meet: 'C62', power: 'B70', run: 'A82', arm: 'B72', fielding: 'A82', catching: 'B72' },
    goldAbilities: [],
    blueAbilities: ['盗塁A', '走塁A', '守備職人'],
    redAbilities: [],
    advice: 'アップルパンチ。走攻守三拍子揃ったユーティリティー二塁手。'
  },
  '種市篤暉': {
    initialStats: { speed: 151, control: 'C60', stamina: 'B70', breakingBalls: 'フォーク4, スライダー2' },
    goldAbilities: [],
    blueAbilities: ['ノビA', '奪三振'],
    redAbilities: [],
    advice: '落差の鋭いフォークと伸びるストレートで三振の山を築きます。'
  },
  '細川亨': {
    initialStats: { trajectory: 2, meet: 'E42', power: 'C65', run: 'E48', arm: 'A82', fielding: 'A82', catching: 'B70' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', 'ブロック○', 'バント職人'],
    redAbilities: ['三振'],
    advice: '守備重視の名捕手。キャッチャーBで投手陣を支え、バントで確実に走者を送ります。'
  },
  '石川歩': {
    initialStats: { speed: 147, control: 'A80', stamina: 'B72', breakingBalls: 'シンカー4, スライダー2' },
    goldAbilities: [],
    blueAbilities: ['低め○', '緩急○'],
    redAbilities: [],
    advice: '絶妙なシンカーと制球力A80。低めに集めてゴロ凡打を打たせ取ります。'
  },
  '西野勇士': {
    initialStats: { speed: 148, control: 'B70', stamina: 'C65', breakingBalls: 'フォーク4, スライダー2' },
    goldAbilities: [],
    blueAbilities: ['キレ○', '対ピンチB'],
    redAbilities: [],
    advice: 'キレ味抜群のフォーク。先発・リリーフどちらでも高い適性。'
  },
  '進藤達哉': {
    initialStats: { trajectory: 2, meet: 'D55', power: 'C66', run: 'C62', arm: 'B74', fielding: 'A82', catching: 'B74' },
    goldAbilities: [],
    blueAbilities: ['守備職人', '送球B', '意外性'],
    redAbilities: [],
    advice: '堅実無比な内野守備。守備職人と送球Bで内野の要となります。'
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
    if (player.isGold && player.special && ALL_GOLD_ABILITIES.has(player.special)) {
      finalGolds.add(player.special);
    }
    // 青特リスト内に金特が含まれている場合も自動で金特へ昇格
    blues.forEach(b => {
      if (ALL_GOLD_ABILITIES.has(b)) {
        finalGolds.add(b);
      }
    });

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
