export interface TrainingCard {
  name: string;
  category: 'ミート' | 'パワー' | '走力' | '肩力' | '守備' | '捕球' | '球速' | 'コントロール' | 'スタミナ' | '変化球' | '特殊練習';
  level: number;
  expGains: { [stat: string]: number };
  campAbilities: string[];
}

export const TRAINING_CARDS: TrainingCard[] = [
  // ミート
  { name: '素振り', category: 'ミート', level: 1, expGains: { 'ミート': 40 }, campAbilities: ['帳尻合わせ', '満塁男', 'カット打ち', '初球○', 'サヨナラ男', '対左投手+1', '対変化球○', '粘り打ち', '流し打ち'] },
  { name: 'ミートバッティング', category: 'ミート', level: 2, expGains: { 'ミート': 60 }, campAbilities: ['ラインドライブ', '満塁男', 'カット打ち', '対変化球○', '粘り打ち', '流し打ち', 'サヨナラ男', '固め打ち', 'いぶし銀', '帳尻合わせ', '対左投手+1'] },
  { name: 'ティーバッティング', category: 'ミート', level: 3, expGains: { 'ミート': 80 }, campAbilities: ['存在感', 'ラインドライブ', 'カット打ち', '対変化球○', 'アウトコースヒッター', 'インコースヒッター', 'ローボールヒッター', 'ハイボールヒッター', '初球○', 'アベレージヒッター', '広角打法', 'いぶし銀', '決勝打', '対左投手+2'] },
  { name: 'マシン打撃', category: 'ミート', level: 4, expGains: { 'ミート': 100 }, campAbilities: ['威圧感', 'ラインドライブ', 'カット打ち', '対変化球○', 'アウトコースヒッター', 'インコースヒッター', 'ローボールヒッター', 'ハイボールヒッター', '初球○', 'アベレージヒッター', '広角打法', '決勝打', '投打躍動', '対左投手+2'] },

  // パワー
  { name: '腕立て・腹筋', category: 'パワー', level: 1, expGains: { 'パワー': 40, '球速': 10 }, campAbilities: ['ラインドライブ', '満塁男', 'サヨナラ男', '窮地○', 'ケガしにくさ+1'] },
  { name: '指立て伏せ', category: 'パワー', level: 2, expGains: { 'パワー': 60, '球速': 15 }, campAbilities: ['ラインドライブ', '満塁男', 'サヨナラ男', '窮地○', 'プルヒッター', 'ケガしにくさ+1'] },
  { name: 'ダンベル', category: 'パワー', level: 3, expGains: { 'パワー': 80, '球速': 20 }, campAbilities: ['決勝打', 'ホーム突入', 'ローボールヒッター', 'ハイボールヒッター', '広角打法', 'パワーヒッター', 'マルチ弾', '荒れ球', '存在感', 'ケガしにくさ+2'] },
  { name: 'ベンチプレス', category: 'パワー', level: 4, expGains: { 'パワー': 100, '球速': 25 }, campAbilities: ['ラインドライブ', 'ホーム突入', 'ローボールヒッター', 'ハイボールヒッター', '広角打法', 'パワーヒッター', '対ストレート○', 'マルチ弾', '威圧感', '荒れ球', '投打躍動', 'ケガしにくさ+2'] },

  // 走力
  { name: 'ダッシュ', category: '走力', level: 1, expGains: { '走力': 40, 'スタミナ': 10 }, campAbilities: ['内野安打○', 'ヘッドスライディング', '走塁+1', '盗塁+1'] },
  { name: 'インターバル走', category: '走力', level: 2, expGains: { '走力': 60, 'スタミナ': 15 }, campAbilities: ['ヘッドスライディング', '内野安打○', '走塁+1', '盗塁+1'] },
  { name: 'ベースランニング', category: '走力', level: 3, expGains: { '走力': 80, 'スタミナ': 20 }, campAbilities: ['かく乱', '内野安打○', 'プレッシャーラン', '走塁+1', '盗塁+2'] },
  { name: 'ハードル', category: '走力', level: 4, expGains: { '走力': 100, 'スタミナ': 25 }, campAbilities: ['かく乱', '内野安打○', 'プレッシャーラン', '走塁+1', '盗塁+2'] },

  // 肩力
  { name: 'スローイング', category: '肩力', level: 1, expGains: { '肩力': 40, '球速': 10 }, campAbilities: ['送球+1'] },
  { name: '遠投', category: '肩力', level: 2, expGains: { '肩力': 60, '球速': 15 }, campAbilities: ['送球+1'] },
  { name: 'チューブトレーニング', category: '肩力', level: 3, expGains: { '肩力': 80, '球速': 20 }, campAbilities: ['レーザービーム', '送球+1'] },
  { name: 'ラットマシン', category: '肩力', level: 4, expGains: { '肩力': 100, '球速': 25 }, campAbilities: ['レーザービーム', 'マルチ弾', '送球+1'] },

  // 守備
  { name: 'ペッパー', category: '守備', level: 1, expGains: { '守備': 40 }, campAbilities: ['守備職人', '打球反応○', 'クイック+1'] },
  { name: '守備連携', category: '守備', level: 2, expGains: { '守備': 60 }, campAbilities: ['守備職人', '打球反応○', '牽制○', 'ムード○', 'ホーム死守', 'クイック+1'] },
  { name: 'ノック', category: '守備', level: 3, expGains: { '守備': 80 }, campAbilities: ['守備職人', '打球反応○', '根性○', '高速チャージ', 'ブロッキング'] },
  { name: 'マシンガンノック', category: '守備', level: 4, expGains: { '守備': 100 }, campAbilities: ['守備職人', '打球反応○', '根性○', '高速チャージ', '窮地○', 'ブロッキング'] },

  // 捕球
  { name: '座禅', category: '捕球', level: 1, expGains: { '捕球': 40, 'コントロール': 10 }, campAbilities: ['ポーカーフェイス', '調子安定', '逆境○', 'ダメ押し', 'ささやき破り', '全開', '対ピンチ+1', 'チャンス+1'] },
  { name: 'メンタルトレーニング', category: '捕球', level: 2, expGains: { '捕球': 60, 'コントロール': 15 }, campAbilities: ['対ランナー○', '調子安定', '逆境○', '闘志', '尻上がり', '代打○', 'ダメ押し', 'ささやき破り', '全開', '対ピンチ+1', 'チャンス+1'] },
  { name: 'アロマテラピー', category: '捕球', level: 3, expGains: { '捕球': 80, 'コントロール': 20 }, campAbilities: ['調子安定', 'ムード○', '勝ち運', 'ダメ押し', 'リベンジ', '決勝打', '窮地○', '緊急登板○', '要所○', '立ち上がり○', '火消し', '対ランナー○', '対ピンチ+1', '打たれ強さ+1', 'チャンス+2'] },
  { name: 'いやしのひととき', category: '捕球', level: 4, expGains: { '捕球': 100, 'コントロール': 25 }, campAbilities: ['調子安定', 'ムード○', '勝ち運', 'ダメ押し', 'リベンジ', '決勝打', '窮地○', '緊急登板○', '要所○', '立ち上がり○', '火消し', '対ピンチ+1', '打たれ強さ+1', 'チャンス+2'] },

  // 球速
  { name: 'フォームチェック(速)', category: '球速', level: 1, expGains: { '球速': 40, '肩力': 10 }, campAbilities: ['緩急○', '球持ち○', 'キャッチャー+1'] },
  { name: '投げ込み', category: '球速', level: 2, expGains: { '球速': 60, '肩力': 15 }, campAbilities: ['緩急○', '球持ち○', '真っスラ', 'キャッチャー+2'] },
  { name: '球速測定', category: '球速', level: 3, expGains: { '球速': 80, '肩力': 20 }, campAbilities: ['球速安定', '奪三振', 'ジャイロボール', '重い球', '存在感', 'フライボールピッチャー', 'ノビ+1', 'ノビ+2'] },
  { name: 'マッスラー', category: '球速', level: 4, expGains: { '球速': 100, '肩力': 25 }, campAbilities: ['投打躍動', '奪三振', 'ジャイロボール', '重い球', '威圧感', '球速安定', 'レーザービーム', '荒れ球', 'ノビ+1', 'ノビ+2'] },

  // コントロール
  { name: 'フォームチェック(制)', category: 'コントロール', level: 1, expGains: { 'コントロール': 40, '守備': 10 }, campAbilities: ['クロスファイヤー', 'フレーミング○', '安全圏○', 'ゴロピッチャー', '対左打者+1', 'キャッチャー+1'] },
  { name: 'コース投げ込み', category: 'コントロール', level: 2, expGains: { 'コントロール': 60, '守備': 15 }, campAbilities: ['クロスファイヤー', 'フレーミング○', '安全圏○', 'ゴロピッチャー', '対左打者+1', 'キャッチャー+2'] },
  { name: '的当て', category: 'コントロール', level: 3, expGains: { 'コントロール': 80, '守備': 20 }, campAbilities: ['低め○', '逃げ球', '内角攻め', 'フレーミング○', 'ストライク先行', '対左打者+1'] },
  { name: 'コース的当て', category: 'コントロール', level: 4, expGains: { 'コントロール': 100, '守備': 25 }, campAbilities: ['低め○', '逃げ球', '内角攻め', 'フレーミング○', 'ストライク先行', '要所○', '対左打者+1'] },

  // スタミナ
  { name: 'スクワット', category: 'スタミナ', level: 1, expGains: { 'スタミナ': 40 }, campAbilities: ['根性○', '回復+1', 'ケガしにくさ+1'] },
  { name: '走り込み', category: 'スタミナ', level: 2, expGains: { 'スタミナ': 60 }, campAbilities: ['根性○', '回復+1', 'ケガしにくさ+1'] },
  { name: 'タイヤ引き', category: 'スタミナ', level: 3, expGains: { 'スタミナ': 80 }, campAbilities: ['立ち上がり○', '回またぎ○', '重い球', '尻上がり', '全開', '回復+2', 'ケガしにくさ+2'] },
  { name: 'ローラー', category: 'スタミナ', level: 4, expGains: { 'スタミナ': 100 }, campAbilities: ['マルチ弾', '回またぎ○', '重い球', '尻上がり', '全開', '回復+2', 'ケガしにくさ+2'] },

  // 変化球
  { name: 'フォームチェック(変)', category: '変化球', level: 1, expGains: { '変化球': 40 }, campAbilities: ['緩急○', 'リリース○', '真っスラ', 'ナチュラルシュート'] },
  { name: '変化球投げ込み', category: '変化球', level: 2, expGains: { '変化球': 60 }, campAbilities: ['真っスラ', 'ナチュラルシュート', '緩急○', 'リリース○', 'キャッチャー+2'] },
  { name: '握力強化', category: '変化球', level: 3, expGains: { '変化球': 80, 'パワー': 100 }, campAbilities: ['真っスラ', 'ナチュラルシュート', '奪三振', 'キレ○', '存在感'] },
  { name: '変化球研究', category: '変化球', level: 4, expGains: { '変化球': 100 }, campAbilities: ['威圧感', '真っスラ', '奪三振', 'キレ○'] },

  // 特殊練習
  { name: '特打', category: '特殊練習', level: 5, expGains: { 'ミート': 100, 'パワー': 100 }, campAbilities: ['カット打ち', 'ラインドライブ', 'ローボールヒッター', 'ハイボールヒッター', 'アウトコースヒッター', 'インコースヒッター', '粘り打ち', '流し打ち', '広角打法', 'アベレージヒッター', 'パワーヒッター', 'プルヒッター', '対変化球○', 'ダメ押し', '決勝打', '窮地○'] },
  { name: '特守', category: '特殊練習', level: 5, expGains: { '守備': 100, '捕球': 100 }, campAbilities: ['守備職人', 'レーザービーム', '牽制○', '内角攻め', '高速チャージ', 'リリース○', 'キャッチャー+1', 'キャッチャー+2'] },
  { name: '総合練習', category: '特殊練習', level: 5, expGains: { '全能力': 20 }, campAbilities: ['決勝打', '対強打者○', '牽制○', 'ホーム死守', '対エース○', 'プレッシャーラン', 'クイック+1', 'キャッチャー+1', 'キャッチャー+2'] },
  { name: 'バント練習', category: '特殊練習', level: 5, expGains: { 'ミート': 40, '走力': 40, '捕球': 40 }, campAbilities: ['バント○', 'バント職人', '牽制○', '打球反応○', '高速チャージ', '対ランナー○', 'クイック+1'] },
  { name: 'ストレッチ', category: '特殊練習', level: 5, expGains: { 'パワー': 20, '球速': 60, 'スタミナ': 60 }, campAbilities: ['回復+1', '回復+2', 'ケガしにくさ+1', 'ケガしにくさ+2'] }
];

export interface BattleTacticExp {
  name: string;
  category: '打撃戦術' | 'ミート設定';
  trajectory: number;
  meet: number;
  power: number;
  speed: number;
  note?: string;
}

export const BATTLE_TACTICS_EXP: BattleTacticExp[] = [
  { name: 'おまかせ', category: '打撃戦術', trajectory: 0, meet: 0, power: 150, speed: 0 },
  { name: 'センター返し', category: '打撃戦術', trajectory: 0, meet: 150, power: 150, speed: 0 },
  { name: '流し打ち', category: '打撃戦術', trajectory: 0, meet: 150, power: 0, speed: 0 },
  { name: '引っ張り', category: '打撃戦術', trajectory: 0, meet: 0, power: 150, speed: 0 },
  { name: '転がせ', category: '打撃戦術', trajectory: 0, meet: 150, power: 0, speed: 0 },
  { name: '犠牲フライ (打者)', category: '打撃戦術', trajectory: 150, meet: 0, power: 150, speed: 0 },
  { name: '犠牲フライ (走者)', category: '打撃戦術', trajectory: 0, meet: 0, power: 0, speed: 150 },
  { name: 'エンドラン (打者)', category: '打撃戦術', trajectory: 0, meet: 150, power: 0, speed: 0 },
  { name: 'エンドラン (走者)', category: '打撃戦術', trajectory: 0, meet: 0, power: 0, speed: 150 },
  { name: '送りバント (打者)', category: '打撃戦術', trajectory: 0, meet: 150, power: 0, speed: 0 },
  { name: '送りバント (走者)', category: '打撃戦術', trajectory: 0, meet: 0, power: 0, speed: 150 },
  { name: 'スクイズ (打者)', category: '打撃戦術', trajectory: 0, meet: 150, power: 0, speed: 0 },
  { name: 'スクイズ (走者)', category: '打撃戦術', trajectory: 0, meet: 0, power: 0, speed: 150 },
  { name: 'セーフティバント (打者)', category: '打撃戦術', trajectory: 0, meet: 150, power: 0, speed: 150 },
  { name: 'セーフティバント (走者)', category: '打撃戦術', trajectory: 0, meet: 150, power: 0, speed: 150 },
  { name: '盗塁 (走者)', category: '打撃戦術', trajectory: 0, meet: 0, power: 0, speed: 300 },

  { name: 'ミートおまかせ', category: 'ミート設定', trajectory: 0, meet: 150, power: 150, speed: 0 },
  { name: 'ミート多用', category: 'ミート設定', trajectory: 0, meet: 300, power: 0, speed: 0 },
  { name: '強振多用', category: 'ミート設定', trajectory: 0, meet: 0, power: 300, speed: 0 }
];
