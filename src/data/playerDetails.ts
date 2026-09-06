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
  blueAbilities: string[];
  redAbilities: string[];
  advice?: string;
}

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
    blueAbilities: ['勝利の星(金特)', '奪三振', 'キレ○', '闘志', '対ピンチB', '打たれ強さA'],
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
    blueAbilities: ['怪童(金特)', 'ノビA', '奪三振', '重い球'],
    redAbilities: [],
    advice: '浮き上がる豪速球。コントロールも高く、ストレート中心の戦術指示で三振の山を築けます。'
  },
  '藤川球児': {
    initialStats: {
      speed: 150,
      control: 'D54',
      stamina: 'D55',
      breakingBalls: 'フォーク4, カーブ1'
    },
    blueAbilities: ['火の玉ボール(金特)', 'ノビA', '奪三振', 'キレ○'],
    redAbilities: [],
    advice: '救援適性抜群。終盤7〜9回のピンチに投入すれば、三振で相手の反撃を完全に断てます。'
  },
  '佐々木主浩': {
    initialStats: {
      speed: 148,
      control: 'D54',
      stamina: 'D50',
      breakingBalls: 'フォーク5'
    },
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
    blueAbilities: ['奪三振', '闘志'],
    redAbilities: [],
    advice: '追い込んでからのスプリットで高い空振り率。赤特もなく扱いやすい即戦力。'
  },

  // === 捕手 (キャッチャーA/B) ===
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
    blueAbilities: ['球界の頭脳(金特)', 'キャッチャーA', 'ささやき戦術', '送球A', 'アベレージヒッター'],
    redAbilities: [],
    advice: '【栄冠ナイン歴代最強捕手】全投手の制球+15・スタミナ消費-15・相手打力低下。最優先リセマラ対象！'
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
    blueAbilities: ['キャッチャーB', '送球B'],
    redAbilities: [],
    advice: '高知・明徳義塾のキャッチャーB。四国地方スタートでのバッテリー強化に最適。'
  },

  // === 野手 (一・二・三・遊・外) ===
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
    blueAbilities: ['アベレージヒッター', '広角打法', '守備職人', 'レーザービーム', '走塁A', '盗塁A', 'チャンスメーカー'],
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
    blueAbilities: ['パワーヒッター', '広角打法', '威圧感', 'チャンスA', '逆境○'],
    redAbilities: [],
    advice: '弾道4×パワーA88の超ド級スラッガー。得点圏で驚異的な打点力を誇る4番打者。'
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
    blueAbilities: ['アーチスト(金特)', 'パワーヒッター', '威圧感', 'アベレージヒッター', '選球眼'],
    redAbilities: [],
    advice: 'パワーS92。フライ性の打球がすべてスタンドへ消える本塁打製造機。'
  },
  '長嶋茂雄': {
    initialStats: {
      trajectory: 3,
      meet: 'B74',
      power: 'A84',
      run: 'B72',
      arm: 'B78',
      fielding: 'B75',
      catching: 'B70'
    },
    blueAbilities: ['チャンスA', 'サヨナラ男', 'パワーヒッター', '逆境○', '守備職人'],
    redAbilities: [],
    advice: '劇的な場面ほど能力が爆発するお祭り男。サードの守備も堅実無比。'
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
    blueAbilities: ['怪力(金特)', 'パワーヒッター', '広角打法'],
    redAbilities: [],
    advice: '香川・高松一高の怪童。長打力・走力・強肩すべてが1年目から完成されています。'
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
    blueAbilities: ['鉄人(金特)', 'ケガしにくさA', 'パワーヒッター', '逆境○'],
    redAbilities: [],
    advice: '連続試合出場の鉄人。ケガしにくさAでハードな練習・合宿でも離脱知らず。'
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
    blueAbilities: ['パワーヒッター', 'チャンスB'],
    redAbilities: ['三振'],
    advice: '香川・高松商のドラフト1位。1年目からB72のパワーで長打を連発。'
  }
};

// 辞書に個別定義されていない選手について、ポジションと★能力値から完全かつ整合的な初期値を生成する関数
export function getPlayerDetails(player: Player): PlayerDetails {
  // 1. 個別定義がある場合はそれを優先（DLC表記の揺れも吸収）
  const cleanName = player.name.replace(/\(DLC\)/g, '').trim();
  if (MAJOR_PLAYERS_DETAILS[player.name]) {
    return MAJOR_PLAYERS_DETAILS[player.name];
  }
  if (MAJOR_PLAYERS_DETAILS[cleanName]) {
    return MAJOR_PLAYERS_DETAILS[cleanName];
  }

  // 2. ★ランクに基づくステータススケーリング
  const stars = player.stars || 260;
  const isPitcher = player.pos === '投';
  const isCatcher = player.pos === '捕' || player.isCatcher;

  // 初期ステータス生成
  if (isPitcher) {
    // 投手
    // 球速: 136〜154km/h
    const speed = Math.min(154, Math.max(136, Math.round(135 + (stars - 200) * 0.11)));
    
    // コントロール
    const cVal = Math.min(68, Math.max(38, Math.round(40 + (stars - 200) * 0.16)));
    const cLetter = cVal >= 70 ? 'B' : cVal >= 60 ? 'C' : cVal >= 50 ? 'D' : cVal >= 40 ? 'E' : 'F';
    const control = `${cLetter}${cVal}`;

    // スタミナ
    const sVal = Math.min(78, Math.max(40, Math.round(42 + (stars - 200) * 0.2)));
    const sLetter = sVal >= 80 ? 'A' : sVal >= 70 ? 'B' : sVal >= 60 ? 'C' : sVal >= 50 ? 'D' : 'E';
    const stamina = `${sLetter}${sVal}`;

    // 変化球
    let breakingBalls = 'スライダー2, カーブ2';
    if (stars >= 320) {
      breakingBalls = 'スライダー3, フォーク3, カーブ2';
    } else if (stars >= 280) {
      breakingBalls = 'スライダー3, フォーク2';
    }

    // 青特・赤特
    const blueAbilities: string[] = [];
    if (player.special) blueAbilities.push(player.special);
    if (stars >= 300) blueAbilities.push('奪三振', 'キレ○');
    else if (stars >= 270) blueAbilities.push('打たれ強さB');
    if (blueAbilities.length === 0) blueAbilities.push('対ピンチC');

    const redAbilities: string[] = [];
    if (stars < 260) {
      redAbilities.push('四球');
    }

    return {
      initialStats: {
        speed,
        control,
        stamina,
        breakingBalls
      },
      blueAbilities: Array.from(new Set(blueAbilities)),
      redAbilities,
      advice: stars >= 300 ? '奪三振力が高く、序盤からエースとして君臨可能。' : '安定した投球でローテーションの柱として期待できます。'
    };
  } else {
    // 野手
    // 弾道
    let trajectory = 2;
    if (['一', '三', '外'].includes(player.pos) && stars >= 290) trajectory = 3;
    if (player.special?.includes('パワー') || stars >= 350) trajectory = 4;

    // ミート
    const mVal = Math.min(76, Math.max(38, Math.round(42 + (stars - 200) * 0.18)));
    const mLetter = mVal >= 80 ? 'A' : mVal >= 70 ? 'B' : mVal >= 60 ? 'C' : mVal >= 50 ? 'D' : mVal >= 40 ? 'E' : 'F';
    const meet = `${mLetter}${mVal}`;

    // パワー
    const pBonus = ['一', '三', '外'].includes(player.pos) ? 10 : ['遊', '二'].includes(player.pos) ? -5 : 0;
    const pVal = Math.min(88, Math.max(38, Math.round(40 + (stars - 200) * 0.22 + pBonus)));
    const pLetter = pVal >= 80 ? 'A' : pVal >= 70 ? 'B' : pVal >= 60 ? 'C' : pVal >= 50 ? 'D' : mVal >= 40 ? 'E' : 'F';
    const power = `${pLetter}${pVal}`;

    // 走力
    const rBonus = ['遊', '二', '外'].includes(player.pos) ? 8 : -4;
    const rVal = Math.min(88, Math.max(40, Math.round(45 + (stars - 200) * 0.18 + rBonus)));
    const rLetter = rVal >= 90 ? 'S' : rVal >= 80 ? 'A' : rVal >= 70 ? 'B' : rVal >= 60 ? 'C' : rVal >= 50 ? 'D' : 'E';
    const run = `${rLetter}${rVal}`;

    // 肩力
    const aBonus = isCatcher ? 14 : ['外', '三'].includes(player.pos) ? 6 : 0;
    const aVal = Math.min(88, Math.max(42, Math.round(45 + (stars - 200) * 0.18 + aBonus)));
    const aLetter = aVal >= 80 ? 'A' : aVal >= 70 ? 'B' : aVal >= 60 ? 'C' : aVal >= 50 ? 'D' : 'E';
    const arm = `${aLetter}${aVal}`;

    // 守備力
    const dBonus = isCatcher || ['遊', '二'].includes(player.pos) ? 12 : 0;
    const dVal = Math.min(86, Math.max(40, Math.round(44 + (stars - 200) * 0.18 + dBonus)));
    const dLetter = dVal >= 80 ? 'A' : dVal >= 70 ? 'B' : dVal >= 60 ? 'C' : dVal >= 50 ? 'D' : 'E';
    const fielding = `${dLetter}${dVal}`;

    // 捕球
    const cVal = Math.min(78, Math.max(40, Math.round(42 + (stars - 200) * 0.15)));
    const cLetter = cVal >= 80 ? 'A' : cVal >= 70 ? 'B' : cVal >= 60 ? 'C' : cVal >= 50 ? 'D' : 'E';
    const catching = `${cLetter}${cVal}`;

    // 青特
    const blueAbilities: string[] = [];
    if (player.catcherGrade) blueAbilities.push(`キャッチャー${player.catcherGrade}`);
    if (player.special) blueAbilities.push(player.special);
    if (stars >= 310) {
      if (['一', '三', '外'].includes(player.pos)) blueAbilities.push('パワーヒッター');
      else blueAbilities.push('守備職人', '送球B');
    } else if (stars >= 280) {
      blueAbilities.push('チャンスB');
    }
    if (blueAbilities.length === 0) blueAbilities.push('流し打ち');

    // 赤特
    const redAbilities: string[] = [];
    if (stars < 260 && ['一', '外'].includes(player.pos)) {
      redAbilities.push('送球E');
    }

    return {
      initialStats: {
        trajectory,
        meet,
        power,
        run,
        arm,
        fielding,
        catching
      },
      blueAbilities: Array.from(new Set(blueAbilities)),
      redAbilities,
      advice: isCatcher 
        ? `キャッチャー${player.catcherGrade || 'C'}。投手陣の防御率を大きく引き下げます。` 
        : stars >= 300 
        ? '走攻守のバランスが高く、1年目からレギュラー中軸として活躍可能。' 
        : '堅実な能力でチームの土台を支える優秀な新入生。'
    };
  }
}
