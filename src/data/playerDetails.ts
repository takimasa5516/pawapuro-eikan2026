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
  '威圧感': [],
  'ギアチェンジ': [],
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

// 【パワプロ2026 栄冠ナイン準拠】転生選手・高校1年入学時初期ステータス一覧辞書
// ※プロ通常査定データから高校1年入学時バランス（各能力1.5〜2.5ランク減算）へ正確にスケーリング済み
const MAJOR_PLAYERS_DETAILS: Record<string, PlayerDetails> = {
  '川﨑宗則': {
    initialStats: {trajectory: 2,meet: 'D56',power: 'E43',run: 'C66',arm: 'E45',fielding: 'C61',catching: 'D52'},
    goldAbilities: [],
    blueAbilities: ['内野安打○','バント職人','流し打ち','粘り打ち','守備職人','走塁B','送球B'],
    redAbilities: [],
    advice: '【ムネリン★235】走力C66・守備C61・内野安打◯・守備職人・バント職人。鹿児島スタートのリードオフマン。'
  },
  '西山秀二': {
    initialStats: {trajectory: 2,meet: 'D56',power: 'E43',run: 'E45',arm: 'D54',fielding: 'D52',catching: 'F27'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーC','粘り打ち','ホーム死守','送球B','回復C'],
    redAbilities: ['チャンスE','対左投手E','ケガしにくさE'],
    advice: '★196。ミートD56・送球B・ホーム死守。※キャッチャー適性はC査定。'
  },
  '木下拓哉': {
    initialStats: {trajectory: 3,meet: 'E49',power: 'D55',run: 'F29',arm: 'D55',fielding: 'E45',catching: 'E40'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーD','粘り打ち','バント○','ヘッドスライディング'],
    redAbilities: ['チャンスE','対左投手E','送球E','ケガしにくさE','回復E'],
    advice: '★196。パワーD55・粘り打ち。※キャッチャー適性はD査定。'
  },
  '袴田英利': {
    initialStats: {trajectory: 2,meet: 'D52',power: 'E47',run: 'F27',arm: 'D55',fielding: 'E48',catching: 'E43'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','チャンスB','バント○','ホーム死守','回復C'],
    redAbilities: [],
    advice: '【キャッチャーB★202】チャンスB・バント◯・ホーム死守。静岡スタートの貴重なキャッチャーB捕手。'
  },
  '坂本誠志郎': {
    initialStats: {trajectory: 2,meet: 'E44',power: 'E46',run: 'E42',arm: 'E41',fielding: 'E45',catching: 'E43'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','送球B','流し打ち','バント○','満塁男','ホーム死守','対ストレート○','ブロッキング','フレーミング○'],
    redAbilities: ['対左投手F','チャンスE'],
    advice: '【キャッチャーB★202】送球B・ホーム死守・ブロッキング・フレーミング◯。大阪スタートの堅守捕手。'
  },
  '伊藤光': {
    initialStats: {trajectory: 3,meet: 'E47',power: 'E44',run: 'E43',arm: 'D55',fielding: 'D51',catching: 'F33'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーC','バント○','逆境○','対左投手B','走塁B','回復C'],
    redAbilities: ['チャンスE','エラー','ケガしにくさE'],
    advice: '★203。対左B・走塁B・逆境◯。※キャッチャー適性はC査定。'
  },
  '小林誠司': {
    initialStats: {trajectory: 2,meet: 'E46',power: 'E46',run: 'F35',arm: 'C65',fielding: 'D51',catching: 'F34'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーC','流し打ち','満塁男','意外性','送球A'],
    redAbilities: ['三振','併殺','回復E'],
    advice: '★204。肩力C65・送球A。※キャッチャー適性はC査定。'
  },
  '鶴岡慎也': {
    initialStats: {trajectory: 2,meet: 'D54',power: 'E42',run: 'E41',arm: 'D52',fielding: 'E49',catching: 'E47'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーC','チャンスB','バント○','ホーム死守'],
    redAbilities: [],
    advice: '★206。チャンスB・ホーム死守。※キャッチャー適性はC査定。'
  },
  '梨田昌崇': {
    initialStats: {trajectory: 3,meet: 'D52',power: 'E49',run: 'F37',arm: 'C60',fielding: 'E45',catching: 'F27'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','送球A','対左投手C','ダメ押し'],
    redAbilities: ['チャンスE','併殺'],
    advice: '【キャッチャーB★210】強肩C60・送球A所持！島根スタートで谷繁と並ぶ強力捕手。'
  },
  '嶋基宏': {
    initialStats: {trajectory: 2,meet: 'C60',power: 'E45',run: 'E43',arm: 'E45',fielding: 'E49',catching: 'F21'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーC','流し打ち','内野安打○','満塁男','ホーム死守','ムード○','対左投手B','チャンスC','回復C'],
    redAbilities: ['三振','併殺','送球E'],
    advice: '★215。ミートC60にチーム強化の「ムード◯」所持。※キャッチャー適性はC査定。'
  },
  '戸郷翔征': {
    initialStats: {speed: 141,control: 'E41',stamina: 'D52',breakingBalls: 'フォーク2, Vスライダー2'},
    goldAbilities: [],
    blueAbilities: ['キレ○','逃げ球','奪三振','球速安定','対ピンチC','打たれ強さC','ノビC','回復C'],
    redAbilities: ['抜け球'],
    advice: '【宮崎ラインの一角★215】キレ◯・逃げ球・奪三振・球速安定。フォークと縦スライダーのコンビネーション。'
  },
  '中沢伸二': {
    initialStats: {trajectory: 3,meet: 'D56',power: 'D52',run: 'F27',arm: 'E43',fielding: 'D52',catching: 'E45'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','送球B','ホーム死守'],
    redAbilities: [],
    advice: '【キャッチャーB★218】送球B・ミートD56・ホーム死守。山梨スタートの貴重なキャッチャーB捕手。'
  },
  '甲斐拓也': {
    initialStats: {trajectory: 3,meet: 'F39',power: 'E46',run: 'D50',arm: 'C67',fielding: 'D52',catching: 'D50'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーD','バント○','ホーム死守','ケガしにくさB','回復B','送球C'],
    redAbilities: ['三振'],
    advice: '【甲斐キャノン★222】肩力C67・ホーム死守・ケガB・回復B。※栄冠ナイン初期はキャッチャーD。'
  },
  '有田修三': {
    initialStats: {trajectory: 3,meet: 'D54',power: 'D54',run: 'F27',arm: 'C60',fielding: 'E47',catching: 'F31'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','ハイボールヒッター','ホーム死守'],
    redAbilities: [],
    advice: '【キャッチャーB★226】肩力C60・ハイボールヒッター・ホーム死守。山口スタートの要。'
  },
  '相川亮二': {
    initialStats: {trajectory: 3,meet: 'D52',power: 'D56',run: 'F29',arm: 'E45',fielding: 'D50',catching: 'E49'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーC','チャンスB','ホーム死守'],
    redAbilities: [],
    advice: '★234。チャンスB・ホーム死守所持。※キャッチャー適性はC査定。'
  },
  '石原慶幸': {
    initialStats: {trajectory: 3,meet: 'D54',power: 'D55',run: 'E41',arm: 'D52',fielding: 'D51',catching: 'E42'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーD','バント○','フレーミング○'],
    redAbilities: ['対左投手F'],
    advice: '通常版★218。※通常版はキャッチャーD。'
  },
  '石原慶幸(DLC)': {
    initialStats: {trajectory: 3,meet: 'D52',power: 'D51',run: 'F39',arm: 'D52',fielding: 'E46',catching: 'D59'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','流し打ち','サヨナラ男','意外性','ブロッキング','ケガしにくさC'],
    redAbilities: ['三振'],
    advice: '【DLC版はキャッチャーB★235】ブロッキング・流し打ち・意外性。岐阜スタートでの優秀な捕手選択肢。'
  },
  '岡村浩二': {
    initialStats: {trajectory: 3,meet: 'D54',power: 'E49',run: 'F31',arm: 'D57',fielding: 'D57',catching: 'F31'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','チャンスB','送球B','ホーム死守','ケガしにくさC','回復C'],
    redAbilities: [],
    advice: '【キャッチャーB★236】チャンスB・送球B・ホーム死守所持。香川スタートの頼れる司令塔。'
  },
  '中村悠平': {
    initialStats: {trajectory: 2,meet: 'D52',power: 'D52',run: 'E42',arm: 'C60',fielding: 'E48',catching: 'D52'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','走塁C','流し打ち','バント職人','満塁男','ホーム死守'],
    redAbilities: ['チャンスF','対左投手E','併殺'],
    advice: '【キャッチャーB★237】肩力C60・キャッチャーB・流し打ち・バント職人。福井スタートの貴重な捕手戦力。'
  },
  '佐藤都志也': {
    initialStats: {trajectory: 3,meet: 'E45',power: 'E49',run: 'D53',arm: 'C60',fielding: 'D52',catching: 'F33'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーD','粘り打ち','バント○','サヨナラ男','高速チャージ','対ストレート○','マルチ弾','対左投手C'],
    redAbilities: ['送球E','併殺'],
    advice: '★240。走力D53・肩力C60。※キャッチャー適性はD査定。'
  },
  '伊東勤': {
    initialStats: {trajectory: 3,meet: 'E46',power: 'E47',run: 'E42',arm: 'E44',fielding: 'C61',catching: 'C64'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーA','バント○','満塁男','逆境○','守備職人','対左投手C','回復C'],
    redAbilities: ['チャンスE'],
    advice: '【西武黄金期の正捕手★249】貴重な「キャッチャーA」所持！守備C61・捕球C64・守備職人。埼玉スタートで狙える名捕手。'
  },
  '千賀滉大(DLC)': {
    initialStats: {speed: 148,control: 'F35',stamina: 'C62',breakingBalls: 'カットボール2, フォーク3'},
    goldAbilities: [],
    blueAbilities: ['キレ○','逃げ球','奪三振','球速安定'],
    redAbilities: ['対左打者F','抜け球'],
    advice: 'DLC版★251。148km速球とお化けフォーク3・キレ◯・逃げ球・奪三振。'
  },
  '若月健矢': {
    initialStats: {trajectory: 3,meet: 'D52',power: 'E46',run: 'F35',arm: 'C63',fielding: 'E47',catching: 'D56'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーC','対左投手B','ハイボールヒッター','ホーム死守','ブロッキング','フレーミング○','サヨナラ男'],
    redAbilities: ['エラー','併殺'],
    advice: '通常版★256。肩力C63・ミートD52・対左B。※キャッチャー適性はC査定。'
  },
  '若月健矢(DLC)': {
    initialStats: {trajectory: 3,meet: 'E43',power: 'E46',run: 'F35',arm: 'C63',fielding: 'E47',catching: 'D56'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーC','対左投手B','ハイボールヒッター','ホーム死守','ブロッキング','フレーミング○','サヨナラ男'],
    redAbilities: ['エラー','併殺'],
    advice: 'DLC版★235。肩力C63・対左B・フレーミング◯。※キャッチャー適性はC査定。'
  },
  '矢野燿大': {
    initialStats: {trajectory: 3,meet: 'C63',power: 'E47',run: 'E42',arm: 'E45',fielding: 'D52',catching: 'E47'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','広角打法','粘り打ち','初球○','サヨナラ男','チャンスC'],
    redAbilities: [],
    advice: '【キャッチャーB★261】ミートC63・広角打法・粘り打ち・初球◯。大阪リセマラで投手を支える好捕手。'
  },
  '福留孝介': {
    initialStats: {trajectory: 3,meet: 'E46',power: 'D56',run: 'D56',arm: 'D57',fielding: 'C62',catching: 'C61'},
    goldAbilities: [],
    blueAbilities: ['内野安打○','代打○','レーザービーム','インコースヒッター','ラインドライブ','決勝打','送球A','走塁B','回復B'],
    redAbilities: ['盗塁F','三振'],
    advice: '通常版★287。守備力C62・捕球C61・送球A・レーザービームで外野の守備力抜群。'
  },
  '平良海馬': {
    initialStats: {speed: 150,control: 'E42',stamina: 'D59',breakingBalls: 'カットボール2, スラーブ2, Hシンカー2'},
    goldAbilities: [],
    blueAbilities: ['逃げ球','奪三振','リリース○','打球反応○','真っスラ','打たれ強さB','ノビB','クイックB','回復B','対ピンチC'],
    redAbilities: ['抜け球'],
    advice: '【剛腕リリーバー★312】150km速球にノビB・クイックB・打たれ強さB・逃げ球・奪三振。沖縄スタートの強力ピース。'
  },
  '佐藤輝明': {
    initialStats: {trajectory: 4,meet: 'E47',power: 'C66',run: 'D50',arm: 'D52',fielding: 'E45',catching: 'E40'},
    goldAbilities: [],
    blueAbilities: ['パワーヒッター','広角打法','初球○','逆境○','決勝打','マルチ弾','存在感','サヨナラ男','回復B','対左投手C','盗塁C','走塁C','送球C'],
    redAbilities: ['三振'],
    advice: '通常版★317。弾道4・パワーC66にパワーヒッター・広角打法。長打力は折り紙付き。'
  },
  '佐藤輝明(DLC)': {
    initialStats: {trajectory: 4,meet: 'D52',power: 'C67',run: 'D50',arm: 'D52',fielding: 'E45',catching: 'E40'},
    goldAbilities: [],
    blueAbilities: ['パワーヒッター','広角打法','初球○','逆境○','決勝打','マルチ弾','存在感','サヨナラ男','回復B','対左投手C','盗塁C','走塁C','送球C'],
    redAbilities: ['三振'],
    advice: 'DLC版★323。弾道4・パワーC67・パワーヒッター・広角打法・サヨナラ男・存在感。'
  },
  // === 投手 ===
    '大谷翔平(DLC)': {
    initialStats: {speed: 151,control: 'E44',stamina: 'C67',breakingBalls: 'スライダー3, スローカーブ2, フォーク2'},
    goldAbilities: [],
    blueAbilities: ['逃げ球','尻上がり','奪三振','球速安定','投打躍動','存在感','打たれ強さB','対ピンチC','ノビC','クイックC','ケガしにくさC','回復A'],
    redAbilities: [],
    advice: '【栄冠ナイン2026全選手中最高★446】二刀流の最高峰。151km速球と高スタミナに加え、投打躍動・存在感を完備。岩手県（高校数★3）の勝ちやすさも抜群。'
  },
    '大谷翔平': {
    initialStats: {speed: 150,control: 'F38',stamina: 'C61',breakingBalls: 'スイーパー3, スローカーブ2, フォーク2, Hシンカー2'},
    goldAbilities: [],
    blueAbilities: ['キレ○','奪三振','投打躍動','存在感','クイックC','回復A'],
    redAbilities: ['対ピンチE','対左打者E'],
    advice: '通常版でも★419の圧倒的性能。オリジナル球種「スイーパー」と投打躍動で投打ともに主力を張れる。'
  },
    'ダルビッシュ有(DLC)': {
    initialStats: {speed: 144,control: 'D54',stamina: 'B70',breakingBalls: 'ツーシームファスト, カットボール2, スラーブ2, スローカーブ2'},
    goldAbilities: [],
    blueAbilities: ['キレ○','逃げ球','尻上がり','奪三振','リリース○','闘志','球持ち○','存在感','対ピンチB','ノビB','回復B'],
    redAbilities: ['対左打者E','クイックF'],
    advice: '【ダルビッシュDLC★342】スタミナB70・ノビB・対ピンチB・キレ◯・奪三振。多彩な変化球で試合を圧倒できる。'
  },
    'ダルビッシュ有': {
    initialStats: {speed: 141,control: 'E49',stamina: 'C67',breakingBalls: 'ツーシームファスト, スライダー2, カーブ2, SFF2'},
    goldAbilities: [],
    blueAbilities: ['奪三振','リリース○','闘志','球持ち○','存在感','ノビB','回復B'],
    redAbilities: ['対ランナー','クイックF','打たれ強さF','対ピンチE','対左打者E'],
    advice: '通常版★266。赤特が多めながらノビB・奪三振・闘志・スタミナC67を持ち、特訓や本で化ける大器。'
  },
    '田中将大(DLC)': {
    initialStats: {speed: 144,control: 'C63',stamina: 'C69',breakingBalls: 'シンキングツーシーム2, Hスライダー3, SFF3'},
    goldAbilities: ['威圧感','勝利の星','ギアチェンジ'],
    blueAbilities: ['キレ○','逃げ球','尻上がり','奪三振','牽制○','打球反応○','闘志','要所○','対ピンチB','打たれ強さB','ノビC','回復C','ケガしにくさC'],
    redAbilities: [],
    advice: '【投手★417の神の子】金特3種（威圧感・勝利の星・ギアチェンジ）所持！多彩な変化球と抜群の制球力で1年目から絶対的エースになれる。'
  },
    '田中将大': {
    initialStats: {speed: 143,control: 'D59',stamina: 'C67',breakingBalls: 'シンキングツーシーム2, Hスライダー2, SFF2'},
    goldAbilities: [],
    blueAbilities: ['逃げ球','奪三振','牽制○','打球反応○','闘志','対ピンチC','打たれ強さC','ノビC','回復C'],
    redAbilities: ['クイックE'],
    advice: '通常版でも★309のハイレベル。キレのある変化球と奪三振・闘志で甲子園優勝を狙える即戦力。'
  },
    '山本由伸': {
    initialStats: {speed: 146,control: 'D52',stamina: 'C64',breakingBalls: 'カットボール2, ドロップカーブ2, SFF3'},
    goldAbilities: [],
    blueAbilities: ['キレ○','逃げ球','奪三振','リリース○','打球反応○','球持ち○','球速安定','内角攻め','打たれ強さB','ノビC','クイックC','回復B'],
    redAbilities: [],
    advice: '【現代最強投手★332】146km速球とSFF3、キレ◯・逃げ球・奪三振・球速安定・内角攻め。宮崎県スタート時の大本命。'
  },
  '佐々木朗希': {
    initialStats: { speed: 146, control: 'F36', stamina: 'E45', breakingBalls: 'フォーク4, スライダー2' },
    goldAbilities: [],
    blueAbilities: ['ノビA', '奪三振', 'ジャイロボール'],
    redAbilities: ['ケガしにくさE', '回復E'],
    advice: '豪速球とフォークは圧巻ですが、ケガ・回復Eのため連投は厳禁。休養マスや控え投手を活用。'
  },
    '松坂大輔': {
    initialStats: {speed: 143,control: 'E46',stamina: 'C69',breakingBalls: 'Hスライダー2, Vスライダー2, サークルチェンジ2'},
    goldAbilities: [],
    blueAbilities: ['キレ○','尻上がり','奪三振','打球反応○','勝ち運','存在感','ゴロピッチャー','ノビB','クイックB','回復B','対ピンチC','打たれ強さC','ケガしにくさC'],
    redAbilities: [],
    advice: '【平成の怪物★321】ノビB・クイックB・スタミナC69・奪三振・勝ち運。勝負強さとタフさを併せ持つ甲子園の申し子。'
  },
    '江川卓': {
    initialStats: {speed: 145,control: 'C63',stamina: 'C68',breakingBalls: 'ドロップカーブ3, カーブ2'},
    goldAbilities: ['怪童'],
    blueAbilities: ['奪三振','緩急○','対強打者○','要所○','フライボールピッチャー','対ピンチA','打たれ強さB','回復C'],
    redAbilities: ['ケガしにくさE','クイックE'],
    advice: '【昭和の怪物★343】金特「怪童」所持。145km速球に対ピンチA・打たれ強さB・コントロールC63。栃木県スタートの最有力候補。'
  },
    '藤川球児(DLC)': {
    initialStats: {speed: 143,control: 'D52',stamina: 'E49',breakingBalls: 'カーブ2, フォーク3'},
    goldAbilities: ['怪童','威圧感'],
    blueAbilities: ['逃げ球','奪三振','球持ち○','回またぎ○','対ピンチB','ケガしにくさB','回復A','対左投手C','打たれ強さC'],
    redAbilities: [],
    advice: 'DLC版★310。金特「怪童」「威圧感」のダブル金特。浮き上がる火の玉ストレート。'
  },
    '藤川球児': {
    initialStats: {speed: 143,control: 'D52',stamina: 'E49',breakingBalls: 'カーブ2, フォーク3'},
    goldAbilities: ['怪童','威圧感'],
    blueAbilities: ['逃げ球','奪三振','球持ち○','回またぎ○','対ピンチB','ケガしにくさB','回復A','対左投手C','打たれ強さC'],
    redAbilities: [],
    advice: '通常版★307。通常版でも金特「怪童」「威圧感」所持！圧倒的な守護神。'
  },
  '佐々木主浩': {
    initialStats: { speed: 141, control: 'E46', stamina: 'E40', breakingBalls: 'フォーク5' },
    goldAbilities: [],
    blueAbilities: ['奪三振', '威圧感(投手)', '重い球'],
    redAbilities: [],
    advice: '落差MAXのフォークと威圧感。最終回のストッパーとして無類の強さを誇ります。'
  },
    '千賀滉大': {
    initialStats: {speed: 143,control: 'E45',stamina: 'D54',breakingBalls: 'カットボール2, フォーク3'},
    goldAbilities: [],
    blueAbilities: ['キレ○','奪三振','球速安定'],
    redAbilities: ['対左打者F','抜け球'],
    advice: '通常版★219。キレ◯・奪三振・球速安定。フォークの変化量3。'
  },
  '桑田真澄': {
    initialStats: { speed: 138, control: 'C64', stamina: 'C60', breakingBalls: 'カーブ4, スライダー2, SFF2' },
    goldAbilities: [],
    blueAbilities: ['ノビA', 'キレ○', '投球位置右', '打撃力○'],
    redAbilities: [],
    advice: '制球力Bと多彩な変化球で失点が極小。打撃能力も高いため下位打線のポイントゲッターに。'
  },
    '黒田博樹': {
    initialStats: {speed: 144,control: 'C62',stamina: 'C65',breakingBalls: 'ツーシームファスト, スライダー2, SFF2'},
    goldAbilities: [],
    blueAbilities: ['逃げ球','牽制○','リリース○','打球反応○','低め○','対ランナー○','存在感','ゴロピッチャー','打たれ強さB','ケガしにくさB','クイックB','対ピンチC'],
    redAbilities: [],
    advice: '【男気右腕★343】制球C62・スタミナC65に低め◯・打たれ強さB・ゴロピッチャー。安定感抜群の投球が魅力。'
  },
    '前田健太': {
    initialStats: {speed: 141,control: 'D55',stamina: 'C68',breakingBalls: 'シンキングツーシーム2, スライダー2, スローカーブ2, サークルチェンジ2'},
    goldAbilities: [],
    blueAbilities: ['キレ○','逃げ球','奪三振','牽制○','打球反応○','球持ち○','緩急○','対ピンチB','クイックC'],
    redAbilities: ['対左打者E','打たれ強さE','ノビE'],
    advice: '【マエケン★305】4球種とキレ◯・逃げ球・奪三振・緩急◯・対ピンチBの本格派。打撃力も高い。'
  },
    '江夏豊': {
    initialStats: {speed: 143,control: 'D58',stamina: 'B70',breakingBalls: 'パワーカーブ4, カーブ3'},
    goldAbilities: ['怪童'],
    blueAbilities: ['重い球','奪三振','クロスファイヤー','球持ち○','対強打者○','球速安定','内角攻め','要所○','存在感','対ピンチB','対左打者B','打たれ強さB','ケガしにくさB','回復B'],
    redAbilities: [],
    advice: '【奪三振王★382】金特「怪童」所持。パワーカーブ変化量4と対ピンチB・対左B・重い球・奪三振など圧倒的な青特群。'
  },
    '稲尾和久': {
    initialStats: {speed: 135,control: 'D58',stamina: 'B70',breakingBalls: 'シンキングツーシーム2, Hスライダー2'},
    goldAbilities: ['ガソリンタンク','威圧感','鉄腕'],
    blueAbilities: ['キレ○','逃げ球','奪三振','リリース○','緊急登板○','球速安定','内角攻め','回またぎ○','ゴロピッチャー','対ピンチA','ノビB','クイックB','ケガしにくさA'],
    redAbilities: ['対左打者E'],
    advice: '【鉄腕・神様仏様稲尾様★366】金特3種（ガソリンタンク・威圧感・鉄腕）所持！スタミナB70・対ピンチA・ノビB。大分県の勝ちやすさと相まって最初の1年に最適。'
  },
    '別所昭': {
    initialStats: {speed: 138,control: 'D52',stamina: 'B70',breakingBalls: 'ドロップカーブ3, カーブ2, シンカー3'},
    goldAbilities: ['鉄人'],
    blueAbilities: ['重い球','闘志','根性○','ナチュラルシュート','投打躍動','存在感','対ピンチB','ノビB','回復A'],
    redAbilities: [],
    advice: '【昭和の鉄腕★384】金特「鉄人」所持。スタミナB70・回復A・根性◯・投打躍動で連投に極めて強い大エース。'
  },
    '金田正一': {
    initialStats: {speed: 145,control: 'D52',stamina: 'B70',breakingBalls: 'ドロップカーブ4, カーブ3'},
    goldAbilities: ['怪童','闘魂'],
    blueAbilities: ['キレ○','逃げ球','奪三振','緩急○','対強打者○','ナチュラルシュート','要所○','回復B'],
    redAbilities: [],
    advice: '【400勝投手★349】金特「怪童」「闘魂」所持。ドロップカーブ4、スタミナB70・球速145km。「金田(1949)→小山(1950)→野村(1951)」黄金リレーの起点。'
  },
    '小山正明': {
    initialStats: {speed: 139,control: 'B70',stamina: 'B70',breakingBalls: 'パーム4, カーブ3, スライダー2'},
    goldAbilities: ['精密機械'],
    blueAbilities: ['尻上がり','存在感','ストライク先行','ノビB','ケガしにくさA','回復B'],
    redAbilities: [],
    advice: '【投げる精密機械★340】金特「精密機械」所持！入学時からコントロールB70・スタミナB70・ノビB。パーム4で三振の山を築く。'
  },
  '鈴木啓示': {
    initialStats: { speed: 139, control: 'C66', stamina: 'B75', breakingBalls: 'カーブ4, スライダー2' },
    goldAbilities: ['不屈の魂'],
    blueAbilities: ['ノビA', '奪三振', '闘志', '尻上がり'],
    redAbilities: [],
    advice: '金特「不屈の魂」所持。草魂の左腕。ピンチにも動じず完投勝利を収めます。'
  },
  '平松政次': {
    initialStats: { speed: 141, control: 'C64', stamina: 'C64', breakingBalls: 'カミソリシュート4, カーブ2' },
    goldAbilities: ['怪物球威'],
    blueAbilities: ['キレ○', '奪三振'],
    redAbilities: [],
    advice: '金特「怪物球威」所持。打者の内角をえぐるカミソリシュートで内野ゴロを量産。'
  },
  '北別府学': {
    initialStats: { speed: 138, control: 'B74', stamina: 'C64', breakingBalls: 'スライダー3, シュート3' },
    goldAbilities: ['精密機械'],
    blueAbilities: ['キレ○', '尻上がり', 'ポーカーフェイス'],
    redAbilities: [],
    advice: '金特「精密機械」所持。精密なコントロールで低めを突き、凡打の山を築きます。'
  },
  '尾崎行雄': {
    initialStats: { speed: 146, control: 'E44', stamina: 'B70', breakingBalls: 'カーブ3' },
    goldAbilities: ['怪童'],
    blueAbilities: ['奪三振', '重い球'],
    redAbilities: [],
    advice: '金特「怪童」所持。怪童と呼ばれた甲子園優勝投手。ストレート一本でねじ伏せます。'
  },
  '岩瀬仁紀': {
    initialStats: { speed: 138, control: 'B72', stamina: 'D50', breakingBalls: '死神スライダー5, シュート2' },
    goldAbilities: ['驚異の切れ味'],
    blueAbilities: ['対左投手A', '奪三振', '威圧感(投手)'],
    redAbilities: [],
    advice: '金特「驚異の切れ味」所持。歴代最多セーブ。伝家の宝刀スライダーで空振りを量産。'
  },
  '伊藤智仁': {
    initialStats: { speed: 142, control: 'D57', stamina: 'D52', breakingBalls: '高速スライダー5' },
    goldAbilities: ['驚異の切れ味'],
    blueAbilities: ['奪三振', 'ノビA'],
    redAbilities: ['ケガしにくさF'],
    advice: '金特「驚異の切れ味」所持。直角に曲がる高速スライダー。ケガFのため酷使は禁物。'
  },
  '山口鉄也(DLC)': {
    initialStats: { speed: 142, control: 'C64', stamina: 'C60', breakingBalls: 'チェンジアップ4, スライダー2' },
    goldAbilities: ['鉄腕'],
    blueAbilities: ['キレ○', '奪三振', '対左投手A', '打たれ強さA'],
    redAbilities: [],
    advice: '金特「鉄腕」所持。育成出身の鉄腕サウスポー。中継ぎ・先発どこでも安定感抜群。'
  },
  '米田哲也': {
    initialStats: { speed: 141, control: 'C62', stamina: 'A82', breakingBalls: 'ヨネボール4, カーブ3' },
    goldAbilities: ['ガソリンタンク'],
    blueAbilities: ['奪三振', '打たれ強さA', '尻上がり'],
    redAbilities: [],
    advice: '金特「ガソリンタンク」所持。ガソリンタンクの異名を持つ連投タフネス右腕。'
  },
  '斉藤和巳': {
    initialStats: { speed: 144, control: 'D57', stamina: 'B72', breakingBalls: 'フォーク4, スライダー3' },
    goldAbilities: [],
    blueAbilities: ['奪三振', 'ノビA', '威圧感(投手)', '闘志', '尻上がり'],
    redAbilities: ['ケガしにくさF'],
    advice: '負けないエース。圧倒的な投球能力を誇りますが、ケガFのため休養を忘れずに。'
  },
  '上原浩治(DLC)': {
    initialStats: { speed: 138, control: 'B77', stamina: 'C62', breakingBalls: 'SFF4, カットボール2' },
    goldAbilities: [],
    blueAbilities: ['キレ○', '低め○', 'ノビA', '奪三振', 'ポーカーフェイス'],
    redAbilities: [],
    advice: '雑草魂。四球を出さない抜群のコントロールと鋭いSFFで三振を奪います。'
  },
  '上原浩治': {
    initialStats: { speed: 137, control: 'B76', stamina: 'C60', breakingBalls: 'SFF4, カットボール2' },
    goldAbilities: [],
    blueAbilities: ['キレ○', '低め○', 'ノビA', '奪三振', 'ポーカーフェイス'],
    redAbilities: [],
    advice: '抜群の制球力とSFF。走者を背負っても甘い球を投げません。'
  },
  '村田兆治': {
    initialStats: { speed: 144, control: 'E46', stamina: 'B75', breakingBalls: '落差フォーク5, カーブ2' },
    goldAbilities: [],
    blueAbilities: ['奪三振', '重い球', '剛速球'],
    redAbilities: ['暴投'],
    advice: 'マサカリ投法。剛速球と落差フォークの威力は絶大ですが、暴投に注意。'
  },

  // === 捕手 (キャッチャーA/B & 金特) ===
    '古田敦也': {
    initialStats: {trajectory: 3,meet: 'C61',power: 'D58',run: 'E48',arm: 'C69',fielding: 'C63',catching: 'D55'},
    goldAbilities: ['球界の頭脳'],
    blueAbilities: ['送球A','アベレージヒッター','プルヒッター','流し打ち','逆境○','守備職人','ホーム死守','ムード○','インコースヒッター','存在感','ブロッキング','フレーミング◎','回復B'],
    redAbilities: ['併殺'],
    advice: '【栄冠ナイン歴代最強捕手★392】金特「球界の頭脳」所持。投手陣の制球+15・スタミナ消費-15。入学時からミートC・肩力C・守備C、ムード◯、守備職人、フレーミング◎まで所持する完全無欠の扇の要。'
  },
    '野村克也': {
    initialStats: {trajectory: 4,meet: 'D50',power: 'B70',run: 'F25',arm: 'E45',fielding: 'E49',catching: 'D52'},
    goldAbilities: ['球界の頭脳','ささやき戦術','威圧感'],
    blueAbilities: ['パワーヒッター','満塁男','逆境○','ホーム死守','サヨナラ男','送球A','チャンスB','回復A','ケガしにくさB'],
    redAbilities: ['三振','併殺'],
    advice: '【古田を超えるトリプル金特捕手★344】金特「球界の頭脳」「ささやき戦術」「威圧感」を同時所持！相手打者の能力を削り味方投手を強化する栄冠ナイン最強捕手。'
  },
    '田淵幸一': {
    initialStats: {trajectory: 4,meet: 'D53',power: 'B70',run: 'F23',arm: 'C65',fielding: 'D51',catching: 'F38'},
    goldAbilities: ['威圧感','アーチスト'],
    blueAbilities: ['キャッチャーD','プルヒッター','サヨナラ男','逆境○','ローボールヒッター','ホーム死守','ムード○','対ストレート○','決勝打','マルチ弾','送球A','回復A','対左投手B'],
    redAbilities: ['チャンスE','ケガしにくさF','併殺'],
    advice: '【長打力特化捕手★365】金特「アーチスト」「威圧感」所持。パワーB70の破壊力。※キャッチャー適性はD査定。'
  },
    '城島健司(DLC)': {
    initialStats: {trajectory: 4,meet: 'C63',power: 'C62',run: 'F38',arm: 'C63',fielding: 'D52',catching: 'E41'},
    goldAbilities: ['バズーカ送球'],
    blueAbilities: ['キャッチャーC','送球B','プルヒッター','固め打ち','初球○','ホーム死守','インコースヒッター','存在感','悪球打ち','回復B'],
    redAbilities: ['チャンスE','対左投手F','併殺'],
    advice: '【強肩強打捕手★324】金特「バズーカ送球」所持！弾道4・ミートC63・パワーC62・肩力C63。※キャッチャー適性はC査定。'
  },
    '城島健司': {
    initialStats: {trajectory: 3,meet: 'E46',power: 'D56',run: 'F31',arm: 'D56',fielding: 'E45',catching: 'E44'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーD','送球B','プルヒッター','固め打ち','ホーム死守','インコースヒッター','存在感','満塁男','悪球打ち'],
    redAbilities: ['対左投手E','走塁E','併殺'],
    advice: '通常版★237。送球B・プルヒッター・固め打ち。※通常版はキャッチャーD。'
  },
    '阿部慎之助(DLC)': {
    initialStats: {trajectory: 4,meet: 'D58',power: 'C60',run: 'G19',arm: 'D53',fielding: 'E49',catching: 'F37'},
    goldAbilities: ['威圧感'],
    blueAbilities: ['キャッチャーB','対左投手C','送球C','回復B','プルヒッター','流し打ち','固め打ち','ハイボールヒッター','カット打ち','マルチ弾'],
    redAbilities: ['ケガしにくさE'],
    advice: '【強打の要★302】金特「威圧感」と「キャッチャーB」を併せ持つスラッガー捕手。弾道4・パワーC60。'
  },
    '阿部慎之助': {
    initialStats: {trajectory: 4,meet: 'D58',power: 'C60',run: 'G19',arm: 'D53',fielding: 'E49',catching: 'F37'},
    goldAbilities: ['威圧感'],
    blueAbilities: ['キャッチャーB','対左投手C','送球C','回復B','プルヒッター','流し打ち','固め打ち','ハイボールヒッター','カット打ち','マルチ弾'],
    redAbilities: ['ケガしにくさE'],
    advice: '通常版★309。金特「威圧感」＋「キャッチャーB」所持。東京地区の強力な捕手候補。'
  },
    '谷繁元信(DLC)': {
    initialStats: {trajectory: 3,meet: 'D52',power: 'D52',run: 'F28',arm: 'D50',fielding: 'D59',catching: 'D57'},
    goldAbilities: ['精神的支柱'],
    blueAbilities: ['キャッチャーA','ケガしにくさB','送球B','ホーム死守','ブロッキング'],
    redAbilities: ['回復E'],
    advice: '【DLC版は金特＋キャッチャーA★268】金特「精神的支柱」と「キャッチャーA」を併せ持ち、島根スタートでの最優秀バッテリーを構築可能。'
  },
    '谷繁元信': {
    initialStats: {trajectory: 3,meet: 'E44',power: 'D52',run: 'F31',arm: 'C60',fielding: 'D56',catching: 'E49'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーB','送球B','プルヒッター','ホーム死守','ブロッキング'],
    redAbilities: ['三振'],
    advice: '【通常版★236】キャッチャーB・送球B・肩力C60・ホーム死守所持（精神的支柱はDLC版固有）。島根リセマラの堅実な捕手。'
  },
    '森昌彦': {
    initialStats: {trajectory: 3,meet: 'E46',power: 'D55',run: 'F31',arm: 'D56',fielding: 'C62',catching: 'D59'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーA','送球A','ケガしにくさB','回復B','ホーム死守','意外性'],
    redAbilities: [],
    advice: '【V9の頭脳★262】貴重な「キャッチャーA」所持捕手！送球A・守備C62・ケガB・回復Bと守備面は完璧。岐阜スタートの要。'
  },
    '大矢明彦': {
    initialStats: {trajectory: 2,meet: 'C60',power: 'D52',run: 'F35',arm: 'C69',fielding: 'D56',catching: 'F34'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーA','チャンスC','回復C'],
    redAbilities: ['併殺'],
    advice: '【キャッチャーA★233】貴重な「キャッチャーA」所持！強肩C69・ミートC60。東京スタートで狙える名捕手。'
  },
    '伊藤勤': {
    initialStats: {trajectory: 3,meet: 'E46',power: 'E47',run: 'E42',arm: 'E44',fielding: 'C61',catching: 'C64'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーA','バント○','満塁男','逆境○','守備職人','対左投手C','回復C'],
    redAbilities: ['チャンスE'],
    advice: '【西武黄金期の正捕手★249】貴重な「キャッチャーA」所持！守備C61・捕球C64・守備職人。埼玉スタートで狙える名捕手。'
  },
    '里崎智也': {
    initialStats: {trajectory: 3,meet: 'D52',power: 'D52',run: 'F34',arm: 'D57',fielding: 'E49',catching: 'C62'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーC','広角打法','バント○','満塁男','逆境○','ハイボールヒッター','ホーム死守','意外性','決勝打','ブロッキング','送球B','チャンスC','回復C'],
    redAbilities: ['三振'],
    advice: '【大舞台男★301】捕球C62・送球B・広角打法・満塁男・意外性。※キャッチャー適性はC査定。'
  },
    '森友哉': {
    initialStats: {trajectory: 3,meet: 'D52',power: 'D56',run: 'E48',arm: 'E49',fielding: 'E45',catching: 'F39'},
    goldAbilities: [],
    blueAbilities: ['キャッチャーD','サヨナラ男','逆境○','ヘッドスライディング','インコースヒッター','ラインドライブ','満塁男','走塁B','チャンスC','回復C'],
    redAbilities: ['ケガしにくさE'],
    advice: '【打撃型捕手★269】ミートD52・パワーD56・インコースヒッター・ラインドライブ。※キャッチャー適性はD査定。'
  },

  // === 野手 (一・二・三・遊・外) ===
    '長嶋茂雄': {
    initialStats: {trajectory: 3,meet: 'C64',power: 'C64',run: 'D58',arm: 'D57',fielding: 'D52',catching: 'E41'},
    goldAbilities: ['威圧感'],
    blueAbilities: ['アベレージヒッター','プルヒッター','流し打ち','粘り打ち','内野安打○','初球○','サヨナラ男','高速チャージ','ラインドライブ','ささやき破り','悪球打ち','走塁A','チャンスB','回復A','ケガしにくさB'],
    redAbilities: ['併殺'],
    advice: '【野手★403・ミスタープロ野球】金特「威圧感」とアベレージヒッター・プルヒッターを所持（パワーヒッターは未所持）。ミートC64＆パワーC64の長打力と走塁A。'
  },
    '王貞治(DLC)': {
    initialStats: {trajectory: 4,meet: 'C63',power: 'B70',run: 'F38',arm: 'E46',fielding: 'D54',catching: 'D53'},
    goldAbilities: ['威圧感','アーチスト'],
    blueAbilities: ['プルヒッター','固め打ち','粘り打ち','初球○','逆境○','高速チャージ','アウトコースヒッター','決勝打','マルチ弾','チャンスB','回復A','ケガしにくさA'],
    redAbilities: [],
    advice: '【世界のホームラン王★400】金特「アーチスト」「威圧感」の超強力コンボ。入学時から弾道4・パワーB70で本塁打を量産。'
  },
    '王貞治': {
    initialStats: {trajectory: 4,meet: 'C67',power: 'C69',run: 'F34',arm: 'E43',fielding: 'D52',catching: 'D52'},
    goldAbilities: ['威圧感'],
    blueAbilities: ['パワーヒッター','プルヒッター','固め打ち','粘り打ち','初球○','逆境○','高速チャージ','アウトコースヒッター','決勝打','マルチ弾','チャンスB','回復A','ケガしにくさA'],
    redAbilities: [],
    advice: '通常版でも★391。金特「威圧感」に加えパワーヒッター・プルヒッター・チャンスB完備の不動の4番。'
  },
    'イチロー': {
    initialStats: {trajectory: 3,meet: 'B70',power: 'D53',run: 'C63',arm: 'C67',fielding: 'D57',catching: 'D56'},
    goldAbilities: ['安打製造機'],
    blueAbilities: ['流し打ち','固め打ち','粘り打ち','バント職人','内野安打○','チャンスメーカー','ローボールヒッター','レーザービーム','対変化球○','存在感','悪球打ち','送球A','盗塁B','走塁B','ケガしにくさB','回復B'],
    redAbilities: ['対左投手E'],
    advice: '【野手最高峰★415】入学時からミートB70＆金特「安打製造機」。レーザービーム・送球A・盗塁B・走塁Bなど走攻守すべてが完成された天才。'
  },
    '松井秀喜': {
    initialStats: {trajectory: 4,meet: 'C65',power: 'B70',run: 'E44',arm: 'D50',fielding: 'E47',catching: 'F39'},
    goldAbilities: ['威圧感'],
    blueAbilities: ['プルヒッター','初球○','逆境○','インコースヒッター','ラインドライブ','対ストレート○','マルチ弾','対左投手C','回復A','ケガしにくさA'],
    redAbilities: ['盗塁E'],
    advice: '【ゴジラ★355】金特「威圧感」所持。入学時から弾道4・ミートC65・パワーB70。プルヒッター・初球◯・ラインドライブで本塁打を量産。'
  },
    '落合博満': {
    initialStats: {trajectory: 4,meet: 'C69',power: 'C66',run: 'F35',arm: 'E45',fielding: 'E47',catching: 'F31'},
    goldAbilities: ['勝負師','威圧感'],
    blueAbilities: ['アベレージヒッター','パワーヒッター','広角打法','流し打ち','粘り打ち','高速チャージ','インコースヒッター','カット打ち','マルチ弾','ケガしにくさB','回復B'],
    redAbilities: ['併殺'],
    advice: '【3冠王★373】金特「勝負師」「威圧感」所持！アベレージヒッター・パワーヒッター・広角打法をすべて兼ね備えた天才打者。'
  },
    '秋山幸二': {
    initialStats: {trajectory: 4,meet: 'D55',power: 'C67',run: 'C66',arm: 'C65',fielding: 'D58',catching: 'D56'},
    goldAbilities: [],
    blueAbilities: ['パワーヒッター','プルヒッター','逆境○','レーザービーム','対ストレート○','決勝打','マルチ弾','存在感','盗塁B','送球A','回復B'],
    redAbilities: ['三振'],
    advice: '【野手★393の万能戦士】弾道4・走力C66・肩力C65・パワーC67。送球A・レーザービーム・パワーヒッターを備えた外野の超大型核。'
  },
    '柳田悠岐': {
    initialStats: {trajectory: 4,meet: 'C67',power: 'C69',run: 'C60',arm: 'C63',fielding: 'E46',catching: 'F27'},
    goldAbilities: ['威圧感'],
    blueAbilities: ['固め打ち','内野安打○','サヨナラ男','ハイボールヒッター','レーザービーム','ラインドライブ','チャンスB','盗塁B','走塁B'],
    redAbilities: [],
    advice: '【ギータ★381】金特「威圧感」と弾道4・ミートC67・パワーC69・走力C60・肩力C63の超ハイスペック外野手。'
  },
    '松井稼頭央(DLC)': {
    initialStats: {trajectory: 3,meet: 'C63',power: 'C61',run: 'C66',arm: 'C66',fielding: 'D58',catching: 'E46'},
    goldAbilities: ['切り込み隊長'],
    blueAbilities: ['アベレージヒッター','広角打法','内野安打○','サヨナラ男','ローボールヒッター','ラインドライブ','対ストレート○','走塁A','盗塁B','ケガしにくさB','回復A'],
    redAbilities: ['チャンスE','対左投手E','三振'],
    advice: '【トリプルスリー遊撃手★376】金特「切り込み隊長」所持。ミートC・パワーC・走力C・肩力Cのスイッチヒッター。走塁A・アベレージヒッター・広角打法。'
  },
  '山本浩二(DLC)': {
    initialStats: { trajectory: 4, meet: 'C60', power: 'B70', run: 'C65', arm: 'B74', fielding: 'B74', catching: 'C66' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '守備職人', '送球A', '対左投手A'],
    redAbilities: [],
    advice: 'ミスター赤ヘル。攻守走すべてが完成された究極の外野手。'
  },
  '山本浩二': {
    initialStats: { trajectory: 4, meet: 'D58', power: 'C69', run: 'C64', arm: 'B72', fielding: 'B72', catching: 'C64' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '守備職人', '送球A'],
    redAbilities: [],
    advice: '外野手の模範となる完璧なステータス。クリーンナップに最適。'
  },
    '福留孝介(DLC)': {
    initialStats: {trajectory: 3,meet: 'D53',power: 'C60',run: 'C60',arm: 'C62',fielding: 'B70',catching: 'B70'},
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター','広角打法','内野安打○','レーザービーム','守備職人','送球A','走塁B','回復B'],
    redAbilities: [],
    advice: 'DLC版★357。走攻守すべて高次元。守備職人・レーザービーム・送球A・広角打法。'
  },
  '金本知憲': {
    initialStats: { trajectory: 4, meet: 'D53', power: 'C68', run: 'C62', arm: 'C62', fielding: 'D57', catching: 'D52' },
    goldAbilities: ['鉄人'],
    blueAbilities: ['パワーヒッター', '広角打法', '逆境○', 'チャンスB'], // ケガAは除外
    redAbilities: [],
    advice: '金特「鉄人」所持。アニキの勝負強さとタフネスでチームを鼓舞。'
  },
    '山田哲人(DLC)': {
    initialStats: {trajectory: 3,meet: 'D54',power: 'C65',run: 'C60',arm: 'E48',fielding: 'D52',catching: 'D50'},
    goldAbilities: [],
    blueAbilities: ['プルヒッター','固め打ち','初球○','ハイボールヒッター','ムード○','ダメ押し','盗塁A','走塁B','ケガしにくさB','チャンスC','対左投手C'],
    redAbilities: [],
    advice: 'DLC版★343。トリプルスリーの二塁手。盗塁A・走塁B・パワーC65・ムード◯で打線の核になる。'
  },
    '山田哲人': {
    initialStats: {trajectory: 3,meet: 'D54',power: 'C65',run: 'C60',arm: 'E48',fielding: 'D52',catching: 'D50'},
    goldAbilities: [],
    blueAbilities: ['プルヒッター','固め打ち','初球○','ハイボールヒッター','ムード○','ダメ押し','盗塁A','走塁B','ケガしにくさB','チャンスC','対左投手C'],
    redAbilities: [],
    advice: '通常版★341。盗塁A・走塁B・パワーC65に加えてチーム全体を強化する「ムード◯」持ち。'
  },
    '坂本勇人': {
    initialStats: {trajectory: 3,meet: 'C67',power: 'D53',run: 'D55',arm: 'D59',fielding: 'C61',catching: 'E44'},
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター','プルヒッター','流し打ち','初球○','満塁男','サヨナラ男','逆境○','守備職人','インコースヒッター','存在感','回復B','盗塁C','走塁C','ケガしにくさC'],
    redAbilities: ['対左投手F','エラー'],
    advice: '【名ショート★341】ミートC67・守備C61。アベレージヒッター・プルヒッター・流し打ち・守備職人を完備する遊撃手の最高峰。'
  },
  '張本勲': {
    initialStats: { trajectory: 3, meet: 'B72', power: 'C66', run: 'C62', arm: 'C62', fielding: 'D52', catching: 'D54' },
    goldAbilities: ['安打製造機'],
    blueAbilities: ['広角打法', '流し打ち', '固め打ち', 'チャンスB'], // アベヒは除外
    redAbilities: [],
    advice: '金特「安打製造機」所持。3000安打の日本記録保持者。'
  },
  '青木宣親': {
    initialStats: { trajectory: 2, meet: 'C68', power: 'E46', run: 'B72', arm: 'C64', fielding: 'C64', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '内野安打○', '固め打ち', '選球眼'],
    redAbilities: [],
    advice: 'シーズン200安打2回の安打製造職人。出塁率が非常に高い1番打者。'
  },
    '村上宗隆(DLC)': {
    initialStats: {trajectory: 4,meet: 'D53',power: 'B70',run: 'E47',arm: 'E45',fielding: 'E42',catching: 'F31'},
    goldAbilities: ['威圧感'],
    blueAbilities: ['パワーヒッター','広角打法','サヨナラ男','逆境○','インコースヒッター','対変化球○','決勝打','マルチ弾','満塁男','チャンスC','対左投手C','盗塁C','走塁C','ケガしにくさB','回復B'],
    redAbilities: ['三振','エラー'],
    advice: '【村神様DLC★330】金特「威圧感」所持！弾道4・パワーB70・パワーヒッター・広角打法。'
  },
    '村上宗隆': {
    initialStats: {trajectory: 4,meet: 'E47',power: 'C65',run: 'E47',arm: 'E45',fielding: 'E45',catching: 'F38'},
    goldAbilities: [],
    blueAbilities: ['パワーヒッター','広角打法','サヨナラ男','逆境○','インコースヒッター','対変化球○','決勝打','満塁男','チャンスC','盗塁C','走塁C','ケガしにくさB','回復B'],
    redAbilities: ['三振','エラー'],
    advice: '通常版★293。弾道4・パワーC65にパワーヒッター・広角打法・サヨナラ男。強烈な長打力。'
  },
  '高橋由伸': {
    initialStats: { trajectory: 3, meet: 'C62', power: 'C64', run: 'C62', arm: 'B74', fielding: 'B72', catching: 'C64' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '初球○', '守備職人', 'レーザービーム'],
    redAbilities: ['ケガしにくさE'],
    advice: '天才バットマン。華麗な外野守備と広角打法。ケガマスに注意。'
  },
  '筒香嘉智': {
    initialStats: { trajectory: 4, meet: 'D50', power: 'B70', run: 'E42', arm: 'C64', fielding: 'E47', catching: 'E44' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '広角打法', '逆境○'],
    redAbilities: ['三振'],
    advice: '豪快なフルスイング本塁打。横浜高校・和歌山出身の主砲。'
  },
  '石井琢朗': {
    initialStats: { trajectory: 2, meet: 'C60', power: 'F39', run: 'B75', arm: 'C64', fielding: 'B74', catching: 'C66' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '盗塁A', '走塁A', '守備職人', '内野安打○', 'バント職人'],
    redAbilities: [],
    advice: 'マシンガン打線の1番遊撃手。足と小技、堅実な守備の三拍子。'
  },
  '岡田彰布': {
    initialStats: { trajectory: 4, meet: 'D53', power: 'C66', run: 'D54', arm: 'C64', fielding: 'C66', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', 'チャンスB', 'プルヒッター'],
    redAbilities: [],
    advice: 'どんでん。勝負強いバッティングと長打力を持つ名二塁手。'
  },
    '清原和博': {
    initialStats: {trajectory: 4,meet: 'D52',power: 'C63',run: 'E42',arm: 'E42',fielding: 'D52',catching: 'E42'},
    goldAbilities: ['威圧感'],
    blueAbilities: ['パワーヒッター','広角打法','逆境○','アウトコースヒッター','サヨナラ男','ケガしにくさB','回復C'],
    redAbilities: ['チャンスE'],
    advice: '【甲子園最多本塁打★318】金特「威圧感」所持！弾道4・パワーヒッター・広角打法・サヨナラ男の超高校級スラッガー。'
  },
  '中西太': {
    initialStats: { trajectory: 4, meet: 'D58', power: 'B72', run: 'C60', arm: 'B74', fielding: 'C62', catching: 'D57' },
    goldAbilities: ['怪力'],
    blueAbilities: ['広角打法', '初球○', 'チャンスB'], // パワヒは除外
    redAbilities: [],
    advice: '金特「怪力」所持。香川・高松一高の怪童。長打力・走力・強肩すべてが1年目から完成されています。'
  },
  '中村紀洋': {
    initialStats: { trajectory: 4, meet: 'D50', power: 'B70', run: 'E44', arm: 'B74', fielding: 'C66', catching: 'D54' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '初球○', 'サヨナラ男', '逆境○'],
    redAbilities: ['三振'],
    advice: 'フルスイング本塁打とゴールデングラブの好守を併せ持つノリ。'
  },
    '掛布雅之': {
    initialStats: {trajectory: 4,meet: 'C63',power: 'C69',run: 'F38',arm: 'E46',fielding: 'D52',catching: 'F36'},
    goldAbilities: [],
    blueAbilities: ['パワーヒッター','広角打法','ムード○','存在感','チャンスB','ケガしにくさB','回復A'],
    redAbilities: [],
    advice: '【ミスタータイガース★311】弾道4・パワーC69・パワーヒッター・広角打法に加え、チーム全体を強化する「ムード◯」所持！'
  },
  '若松勉': {
    initialStats: { trajectory: 3, meet: 'C64', power: 'D54', run: 'C62', arm: 'C62', fielding: 'C64', catching: 'C64' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', 'チャンスB'],
    redAbilities: [],
    advice: '小さな大打者。北海道出身・首位打者。欠点がなく打率・得点圏ともにハイアベレージ。'
  },
  '松中信彦(DLC)': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'B72', run: 'E45', arm: 'C64', fielding: 'D54', catching: 'D52' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', 'アベレージヒッター', 'チャンスA'],
    redAbilities: [],
    advice: '平成唯一の三冠王。ミートB・パワーAで打ちまくる主砲。'
  },
  '松中信彦': {
    initialStats: { trajectory: 4, meet: 'C60', power: 'B70', run: 'E44', arm: 'C62', fielding: 'D52', catching: 'D52' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', 'アベレージヒッター', 'チャンスA'],
    redAbilities: [],
    advice: '平成三冠王。広角に打ち分ける確実性と本塁打力を両立。'
  },
  '小笠原道大(DLC)': {
    initialStats: { trajectory: 4, meet: 'C63', power: 'B70', run: 'D52', arm: 'C64', fielding: 'C62', catching: 'D54' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', 'パワーヒッター', '広角打法', '逆境○'],
    redAbilities: ['三振'],
    advice: 'ガッツ。フルスイングから広角に長打を打ち分ける勝負師。'
  },
  '小笠原道大': {
    initialStats: { trajectory: 4, meet: 'C62', power: 'C68', run: 'D50', arm: 'C62', fielding: 'C62', catching: 'D52' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', 'パワーヒッター', '広角打法', '逆境○'],
    redAbilities: ['三振'],
    advice: '北のサムライ。高打率と長打を両立するクリーンナップ候補。'
  },
  '新庄剛志': {
    initialStats: { trajectory: 3, meet: 'E42', power: 'D58', run: 'C65', arm: 'A86', fielding: 'A82', catching: 'B74' },
    goldAbilities: [],
    blueAbilities: ['レーザービーム', '守備職人', '送球A', '意外性', '初球○'],
    redAbilities: ['三振'],
    advice: '肩力S94・守備S90のBIGBOSS。外野からの返球で失点を阻止し、意外な場面で一発。'
  },
    '鈴木誠也(DLC)': {
    initialStats: {trajectory: 4,meet: 'D59',power: 'C64',run: 'D50',arm: 'C65',fielding: 'D52',catching: 'F38'},
    goldAbilities: [],
    blueAbilities: ['パワーヒッター','プルヒッター','流し打ち','固め打ち','満塁男','サヨナラ男','ヘッドスライディング','レーザービーム','存在感','対左投手C','送球C','回復C'],
    redAbilities: ['チャンスE','盗塁E','併殺'],
    advice: 'DLC版★335。弾道4・肩力C65・パワーC64。パワーヒッター・プルヒッター・流し打ち・レーザービーム完備。'
  },
    '鈴木誠也': {
    initialStats: {trajectory: 4,meet: 'D54',power: 'D59',run: 'D52',arm: 'C65',fielding: 'D52',catching: 'F38'},
    goldAbilities: [],
    blueAbilities: ['パワーヒッター','プルヒッター','流し打ち','満塁男','サヨナラ男','ヘッドスライディング','レーザービーム','対左投手C','送球C','回復C'],
    redAbilities: ['チャンスE','盗塁E','併殺'],
    advice: '通常版★305。弾道4にパワーヒッター・レーザービーム所持。攻守に高いポテンシャル。'
  },
    '吉田正尚(DLC)': {
    initialStats: {trajectory: 4,meet: 'C63',power: 'D56',run: 'E42',arm: 'F34',fielding: 'E42',catching: 'F38'},
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター','固め打ち','粘り打ち','内野安打○','インコースヒッター','カット打ち','決勝打','マルチ弾','存在感','悪球打ち','回復B'],
    redAbilities: ['チャンスE','対左投手E'],
    advice: 'DLC版★304。弾道4・ミートC63にアベレージヒッター・固め打ち・粘り打ち・存在感。'
  },
    '吉田正尚': {
    initialStats: {trajectory: 4,meet: 'D59',power: 'D58',run: 'E42',arm: 'F31',fielding: 'E41',catching: 'F38'},
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター','固め打ち','粘り打ち','内野安打○','インコースヒッター','カット打ち','存在感','悪球打ち','チャンスC','回復B'],
    redAbilities: ['対左投手E'],
    advice: '通常版★290。弾道4にアベレージヒッター・固め打ち・粘り打ち。高打率を残せる天才打者。'
  },
  '衣笠祥雄': {
    initialStats: { trajectory: 3, meet: 'D52', power: 'C66', run: 'C60', arm: 'C68', fielding: 'C64', catching: 'D54' },
    goldAbilities: ['鉄人'],
    blueAbilities: ['パワーヒッター', '逆境○'], // ケガAは除外
    redAbilities: [],
    advice: '金特「鉄人」所持。連続試合出場の鉄人。怪我知らずでタフな育成が可能です。'
  },
  '近藤健介': {
    initialStats: { trajectory: 3, meet: 'C68', power: 'D58', run: 'D52', arm: 'C64', fielding: 'D56', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '選球眼', 'チャンスA'],
    redAbilities: [],
    advice: '脅威の出塁率と選球眼。出塁・進塁・得点圏すべてで頼りになる安打製造機。'
  },
  '秋山翔吾(DLC)': {
    initialStats: { trajectory: 3, meet: 'C64', power: 'D50', run: 'B72', arm: 'C64', fielding: 'C67', catching: 'C64' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '流し打ち', '走塁A'],
    redAbilities: [],
    advice: 'NPBシーズン最多安打記録保持者。広角に安打を打ち分けます。'
  },
  '秋山翔吾': {
    initialStats: { trajectory: 3, meet: 'C63', power: 'E48', run: 'B70', arm: 'C62', fielding: 'C66', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '広角打法', '流し打ち', '走塁A'],
    redAbilities: [],
    advice: '最多安打記録打者。高打率と走塁力でチャンスを演出。'
  },
  '宮本慎也(DLC)': {
    initialStats: { trajectory: 2, meet: 'C60', power: 'F39', run: 'D55', arm: 'B72', fielding: 'A84', catching: 'B77' },
    goldAbilities: [],
    blueAbilities: ['守備職人', '送球A', 'バント職人', '流し打ち', '選球眼'],
    redAbilities: [],
    advice: '守備S92の名手。バント職人で送りバント成功率100%。'
  },
  '福本豊': {
    initialStats: { trajectory: 2, meet: 'C60', power: 'E46', run: 'A88', arm: 'C64', fielding: 'B76', catching: 'C66' },
    goldAbilities: ['電光石火'],
    blueAbilities: ['走塁A', '内野安打○', '守備職人'], // 盗塁Aは除外
    redAbilities: [],
    advice: '金特「電光石火」所持。金特「電光石火」と快足。出塁＝得点圏。'
  },
  '赤星憲広': {
    initialStats: { trajectory: 2, meet: 'D53', power: 'F36', run: 'A84', arm: 'D52', fielding: 'C67', catching: 'C62' },
    goldAbilities: ['電光石火'],
    blueAbilities: ['走塁A', '内野安打○', '流し打ち'], // 盗塁Aは除外
    redAbilities: [],
    advice: '金特「電光石火」所持。出塁すれば高確率で二盗・三盗を決められます。'
  },
  '川上哲治': {
    initialStats: { trajectory: 3, meet: 'B70', power: 'C64', run: 'D50', arm: 'C62', fielding: 'C67', catching: 'B72' },
    goldAbilities: ['安打製造機'],
    blueAbilities: ['広角打法', '選球眼', '固め打ち'], // アベヒは除外
    redAbilities: [],
    advice: '金特「安打製造機」所持。打撃の神様。ボールが止まって見える驚異の打棒。'
  },
  '石毛宏典': {
    initialStats: { trajectory: 3, meet: 'D58', power: 'C60', run: 'C65', arm: 'C66', fielding: 'C67', catching: 'C64' },
    goldAbilities: ['切り込み隊長'],
    blueAbilities: ['広角打法', '守備職人', '送球B'], // チャンスメーカーは除外
    redAbilities: [],
    advice: '金特「切り込み隊長」所持。西武黄金期のリーダー。攻守走の完成度が極めて高い。'
  },
  '小坂誠': {
    initialStats: { trajectory: 2, meet: 'E43', power: 'F36', run: 'B78', arm: 'C67', fielding: 'A86', catching: 'B77' },
    goldAbilities: ['魔術師'],
    blueAbilities: ['走塁A', '盗塁A', '内野安打○', '送球B'], // 守備職人は除外
    redAbilities: [],
    advice: '金特「魔術師」所持。小坂ゾーンと呼ばれる超人的な守備範囲。'
  },
  '菊池涼介(DLC)': {
    initialStats: { trajectory: 2, meet: 'E46', power: 'E46', run: 'B74', arm: 'B74', fielding: 'A86', catching: 'B77' },
    goldAbilities: ['魔術師'],
    blueAbilities: ['高速チャージ', '送球A', 'バント職人'], // 守備職人は除外
    redAbilities: [],
    advice: '金特「魔術師」所持。守備S94の忍者セカンド。'
  },
  '菊池涼介': {
    initialStats: { trajectory: 2, meet: 'E44', power: 'E44', run: 'B72', arm: 'B72', fielding: 'A84', catching: 'B76' },
    goldAbilities: [],
    blueAbilities: ['守備職人', '高速チャージ', '送球A', 'バント職人'],
    redAbilities: [],
    advice: '守備S92の忍者。センター前に抜けそうな打球もダイビングキャッチで捕殺します。'
  },
  '源田壮亮': {
    initialStats: { trajectory: 2, meet: 'E43', power: 'F36', run: 'B74', arm: 'C68', fielding: 'A82', catching: 'B74' },
    goldAbilities: [],
    blueAbilities: ['守備職人', '送球A', '盗塁A', '走塁A'],
    redAbilities: [],
    advice: '遊撃守備S90。三遊間の当たりをすべてアウトにして投手を助ける守備のスペシャリスト。'
  },
  '今宮健太': {
    initialStats: { trajectory: 2, meet: 'F38', power: 'E42', run: 'C65', arm: 'B76', fielding: 'B74', catching: 'C64' },
    goldAbilities: [],
    blueAbilities: ['守備職人', '送球A', 'バント職人'],
    redAbilities: [],
    advice: '超絶ファインプレー連発。バント職人持ちのため送りバント・スクイズ成功率が100%近くに。'
  },
  '周東佑京': {
    initialStats: { trajectory: 2, meet: 'F36', power: 'F36', run: 'A86', arm: 'C64', fielding: 'D57', catching: 'E44' },
    goldAbilities: [],
    blueAbilities: ['盗塁A', '走塁A', '内野安打○'],
    redAbilities: ['三振'],
    advice: '球界トップの快足S96。代走・スタメン問わず、足だけで1点をもぎ取れます。'
  },
  '新井貴浩': {
    initialStats: { trajectory: 4, meet: 'E43', power: 'C66', run: 'D52', arm: 'C67', fielding: 'E47', catching: 'E40' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '初球○'],
    redAbilities: ['送球E', '併殺'],
    advice: '長打力抜群ですが送球E・併殺持ち。特別指導や公式戦で送球を消去すると一気に化けます。'
  },
    '川崎宗則': {
    initialStats: {trajectory: 2,meet: 'D56',power: 'E43',run: 'C66',arm: 'E45',fielding: 'C61',catching: 'D52'},
    goldAbilities: [],
    blueAbilities: ['内野安打○','バント職人','流し打ち','粘り打ち','守備職人','走塁B','送球B'],
    redAbilities: [],
    advice: '【ムネリン★235】走力C66・守備C61・内野安打◯・守備職人・バント職人。鹿児島スタートのリードオフマン。'
  },
  '岩村明憲': {
    initialStats: { trajectory: 3, meet: 'D50', power: 'C64', run: 'C60', arm: 'C67', fielding: 'D57', catching: 'D52' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', '広角打法', '逆境○'],
    redAbilities: ['三振'],
    advice: '愛媛・宇和島東の強打者。パワーA80で三塁手としての得点力を一気に引き上げます。'
  },
  '山川穂高': {
    initialStats: { trajectory: 4, meet: 'E42', power: 'B70', run: 'F38', arm: 'C64', fielding: 'E47', catching: 'E44' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '威圧感'],
    redAbilities: ['三振', '併殺'],
    advice: '沖縄スタート時の主砲候補。圧倒的なホームランアーチを架けます。三振に注意。'
  },
  '浅野翔吾': {
    initialStats: { trajectory: 3, meet: 'E40', power: 'D56', run: 'C60', arm: 'C66', fielding: 'D52', catching: 'E46' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'チャンスB'],
    redAbilities: ['三振'],
    advice: '香川・高松商のドラフト1位。1年目からB72のパワーで長打を連発。'
  },
  '前田智徳': {
    initialStats: { trajectory: 3, meet: 'C68', power: 'C60', run: 'D55', arm: 'C68', fielding: 'C62', catching: 'D56' },
    goldAbilities: [],
    blueAbilities: ['アベレージヒッター', '流し打ち', '初球○'],
    redAbilities: ['ケガしにくさE'],
    advice: '孤高の天才打者。ミートA80で安打を量産。故障マスでのケガにだけは配慮しましょう。'
  },
  '駒田徳広': {
    initialStats: { trajectory: 3, meet: 'D52', power: 'D58', run: 'E45', arm: 'C64', fielding: 'C67', catching: 'C66' },
    goldAbilities: ['恐怖の満塁男'],
    blueAbilities: ['アベレージヒッター', '守備職人', '流し打ち'], // 満塁男は除外
    redAbilities: [],
    advice: '金特「恐怖の満塁男」所持。満塁男の異名通り、満塁で無類の強さを発揮する一塁手。'
  },
  '中村剛也': {
    initialStats: { trajectory: 4, meet: 'E42', power: 'B72', run: 'E42', arm: 'C66', fielding: 'D52', catching: 'D52' },
    goldAbilities: ['恐怖の満塁男'],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '初球○'], // 満塁男は除外
    redAbilities: ['三振'],
    advice: 'おかわり君。金特「恐怖の満塁男」とパワーA88。一撃で試合を決定づけます。'
  },
  '今岡誠': {
    initialStats: { trajectory: 3, meet: 'C62', power: 'C60', run: 'D50', arm: 'C64', fielding: 'D57', catching: 'C62' },
    goldAbilities: ['恐怖の満塁男'],
    blueAbilities: ['チャンスA', '初球○', 'アベレージヒッター'], // 満塁男は除外
    redAbilities: [],
    advice: 'シーズン147打点のクラッチヒッター。金特「恐怖の満塁男」で満塁走者をすべて一掃。'
  },
  '東尾修(DLC)': {
    initialStats: { speed: 136, control: 'B74', stamina: 'B70', breakingBalls: 'スライダー4, シュート3' },
    goldAbilities: ['内角無双'],
    blueAbilities: ['打たれ強さA', '尻上がり'], // 内角攻めは除外
    redAbilities: [],
    advice: '金特「内角無双」所持。ケンカ投法で打者の懐をえぐるタフネス右腕。'
  },
  '土井正博': {
    initialStats: { trajectory: 4, meet: 'D52', power: 'B70', run: 'E42', arm: 'C64', fielding: 'E47', catching: 'E47' },
    goldAbilities: ['引っ張り屋'],
    blueAbilities: ['パワーヒッター', '初球○'], // プルヒッターは除外
    redAbilities: [],
    advice: '金特「引っ張り屋」所持。18歳で4番を打ったスラッガー。レフトスタンドへ放り込みます。'
  },
  '江藤智': {
    initialStats: { trajectory: 4, meet: 'D50', power: 'B70', run: 'E45', arm: 'C64', fielding: 'D52', catching: 'D52' },
    goldAbilities: ['アーチスト'],
    blueAbilities: ['広角打法', 'チャンスB'], // パワヒは除外
    redAbilities: ['三振'],
    advice: '金特「アーチスト」所持。豪快な放物線を描く本塁打王。'
  },
  '榎本喜八': {
    initialStats: { trajectory: 3, meet: 'B73', power: 'D59', run: 'C60', arm: 'C62', fielding: 'C64', catching: 'C64' },
    goldAbilities: ['安打製造機'],
    blueAbilities: ['広角打法', '選球眼', '流し打ち'], // アベヒは除外
    redAbilities: [],
    advice: '金特「安打製造機」所持。打撃の求道者。卓越したバットコントロールで安打量産。'
  },
  '新井宏昌': {
    initialStats: { trajectory: 2, meet: 'B70', power: 'E46', run: 'C64', arm: 'D57', fielding: 'C64', catching: 'C64' },
    goldAbilities: ['安打製造機'],
    blueAbilities: ['広角打法', '流し打ち', 'バント職人'], // アベヒは除外
    redAbilities: [],
    advice: '金特「安打製造機」所持。巧打と選球眼で驚異的な出塁率を誇る名外野手。'
  },
  '毒島章一': {
    initialStats: { trajectory: 3, meet: 'C62', power: 'D54', run: 'B70', arm: 'C64', fielding: 'C67', catching: 'C64' },
    goldAbilities: ['精神的支柱'],
    blueAbilities: ['アベレージヒッター', '走塁A', '守備職人'], // ムード○は除外
    redAbilities: [],
    advice: '金特「精神的支柱」所持。ミスターフライヤーズ。チーム全体の能力を底上げします。'
  },
  '高井保弘': {
    initialStats: { trajectory: 3, meet: 'C62', power: 'C62', run: 'F36', arm: 'D52', fielding: 'E40', catching: 'E44' },
    goldAbilities: ['代打の神様'],
    blueAbilities: ['サヨナラ男', '逆境○', '意外性'], // 代打○は除外
    redAbilities: [],
    advice: '金特「代打の神様」所持。世界記録の代打本塁打男。ここ一番の代打の切り札。'
  },
  '西村健太朗': {
    initialStats: { speed: 141, control: 'D56', stamina: 'E44', breakingBalls: '高速シュート4, スライダー2' },
    goldAbilities: ['本塁打厳禁'],
    blueAbilities: ['対ピンチB', 'キレ○'], // 逃げ球は除外
    redAbilities: [],
    advice: '金特「本塁打厳禁」所持。被本塁打を完全シャットアウトする救援右腕。'
  },
  '武田久': {
    initialStats: { speed: 138, control: 'B72', stamina: 'E42', breakingBalls: 'スライダー3, フォーク3' },
    goldAbilities: ['本塁打厳禁'],
    blueAbilities: ['キレ○', '対ピンチA', '低め○'], // 逃げ球は除外
    redAbilities: [],
    advice: '金特「本塁打厳禁」所持。低めを突く丁寧な投球で一発を浴びません。'
  },
  '吉田義男': {
    initialStats: { trajectory: 2, meet: 'D58', power: 'F36', run: 'B78', arm: 'B74', fielding: 'A86', catching: 'B77' },
    goldAbilities: ['魔術師'],
    blueAbilities: ['送球A', '盗塁A', '内野安打○'], // 守備職人は除外
    redAbilities: [],
    advice: '金特「魔術師」所持。今牛若丸。華麗な守備と快足でチームを支えます。'
  },
  '杉本裕太郎': {
    initialStats: { trajectory: 4, meet: 'E43', power: 'C68', run: 'E42', arm: 'C66', fielding: 'E47', catching: 'E44' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', '初球○'],
    redAbilities: ['三振'],
    advice: 'ラオウ。パワーA84の規格外長打力。三振に注意しながら中軸起用。'
  },
  '栗原健太': {
    initialStats: { trajectory: 4, meet: 'D50', power: 'C66', run: 'E42', arm: 'C64', fielding: 'D54', catching: 'D54' },
    goldAbilities: [],
    blueAbilities: ['パワーヒッター', 'プルヒッター', 'チャンスB'],
    redAbilities: [],
    advice: '広島の4番打者。パワーA82と勝負強さで打点を量産します。'
  },
  '外崎修汰': {
    initialStats: { trajectory: 2, meet: 'D50', power: 'D54', run: 'B72', arm: 'C64', fielding: 'B74', catching: 'C64' },
    goldAbilities: [],
    blueAbilities: ['盗塁A', '走塁A', '守備職人'],
    redAbilities: [],
    advice: 'アップルパンチ。走攻守三拍子揃ったユーティリティー二塁手。'
  },
  '種市篤暉': {
    initialStats: { speed: 143, control: 'D52', stamina: 'C60', breakingBalls: 'フォーク4, スライダー2' },
    goldAbilities: [],
    blueAbilities: ['ノビA', '奪三振'],
    redAbilities: [],
    advice: '落差の鋭いフォークと伸びるストレートで三振の山を築きます。'
  },
  '細川亨': {
    initialStats: { trajectory: 2, meet: 'F36', power: 'E49', run: 'F38', arm: 'B74', fielding: 'B74', catching: 'C62' },
    goldAbilities: [],
    blueAbilities: ['キャッチャーB', 'ブロック○', 'バント職人'],
    redAbilities: ['三振'],
    advice: '守備重視の名捕手。キャッチャーBで投手陣を支え、バントで確実に走者を送ります。'
  },
  '石川歩': {
    initialStats: { speed: 140, control: 'B72', stamina: 'C62', breakingBalls: 'シンカー4, スライダー2' },
    goldAbilities: [],
    blueAbilities: ['低め○', '緩急○'],
    redAbilities: [],
    advice: '絶妙なシンカーと制球力A80。低めに集めてゴロ凡打を打たせ取ります。'
  },
  '西野勇士': {
    initialStats: { speed: 141, control: 'C62', stamina: 'D55', breakingBalls: 'フォーク4, スライダー2' },
    goldAbilities: [],
    blueAbilities: ['キレ○', '対ピンチB'],
    redAbilities: [],
    advice: 'キレ味抜群のフォーク。先発・リリーフどちらでも高い適性。'
  },
  '進藤達哉': {
    initialStats: { trajectory: 2, meet: 'E43', power: 'D50', run: 'D52', arm: 'C66', fielding: 'B74', catching: 'C66' },
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
    const speed = Math.min(145, Math.max(130, Math.round(130 + (stars - 200) * 0.08)));
    
    const cVal = Math.min(60, Math.max(36, Math.round(38 + (stars - 200) * 0.12)));
    const cLetter = cVal >= 70 ? 'B' : cVal >= 60 ? 'C' : cVal >= 50 ? 'D' : cVal >= 40 ? 'E' : 'F';
    const control = `${cLetter}${cVal}`;

    const sVal = Math.min(72, Math.max(38, Math.round(40 + (stars - 200) * 0.16)));
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

    const mVal = Math.min(68, Math.max(36, Math.round(38 + (stars - 200) * 0.14)));
    const mLetter = mVal >= 80 ? 'A' : mVal >= 70 ? 'B' : mVal >= 60 ? 'C' : mVal >= 50 ? 'D' : mVal >= 40 ? 'E' : 'F';
    const meet = `${mLetter}${mVal}`;

    const pBonus = ['一', '三', '外'].includes(player.pos) ? 10 : ['遊', '二'].includes(player.pos) ? -5 : 0;
    const pVal = Math.min(76, Math.max(36, Math.round(36 + (stars - 200) * 0.17 + pBonus)));
    const pLetter = pVal >= 80 ? 'A' : pVal >= 70 ? 'B' : pVal >= 60 ? 'C' : pVal >= 50 ? 'D' : mVal >= 40 ? 'E' : 'F';
    const power = `${pLetter}${pVal}`;

    const rBonus = ['遊', '二', '外'].includes(player.pos) ? 8 : -4;
    const rVal = Math.min(84, Math.max(38, Math.round(42 + (stars - 200) * 0.16 + rBonus)));
    const rLetter = rVal >= 90 ? 'S' : rVal >= 80 ? 'A' : rVal >= 70 ? 'B' : rVal >= 60 ? 'C' : rVal >= 50 ? 'D' : 'E';
    const run = `${rLetter}${rVal}`;

    const aBonus = isCatcher ? 14 : ['外', '三'].includes(player.pos) ? 6 : 0;
    const aVal = Math.min(82, Math.max(40, Math.round(42 + (stars - 200) * 0.15 + aBonus)));
    const aLetter = aVal >= 80 ? 'A' : aVal >= 70 ? 'B' : aVal >= 60 ? 'C' : aVal >= 50 ? 'D' : 'E';
    const arm = `${aLetter}${aVal}`;

    const dBonus = isCatcher || ['遊', '二'].includes(player.pos) ? 12 : 0;
    const dVal = Math.min(82, Math.max(38, Math.round(40 + (stars - 200) * 0.15 + dBonus)));
    const dLetter = dVal >= 80 ? 'A' : dVal >= 70 ? 'B' : dVal >= 60 ? 'C' : dVal >= 50 ? 'D' : 'E';
    const fielding = `${dLetter}${dVal}`;

    const cVal = Math.min(72, Math.max(36, Math.round(38 + (stars - 200) * 0.13)));
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
