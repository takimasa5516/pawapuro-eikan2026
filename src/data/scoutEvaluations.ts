export interface ScoutEvaluation {
  id: number;
  category: '投手' | '野手' | '捕手' | '特殊';
  text: string;
  ability: string;
  grade: 'S' | 'A' | 'B' | 'C';
  note: string;
}

export const SCOUT_EVALUATIONS: ScoutEvaluation[] = [
  // 捕手
  {
    id: 1,
    category: '捕手',
    text: '好リードが光る',
    ability: 'キャッチャーB以上',
    grade: 'S',
    note: '最優先確保！投手の制球・スタミナ消費を大幅に改善し、チーム勝率を跳ね上げる栄冠最強の寸評。'
  },
  {
    id: 2,
    category: '捕手',
    text: '巧みなリードが光る',
    ability: 'キャッチャーC以上',
    grade: 'A',
    note: 'キャッチャーC以上が期待できる。Bには及ばないが十分優秀。'
  },
  {
    id: 3,
    category: '捕手',
    text: '強肩が自慢の捕手',
    ability: '送球B/A、肩力高め',
    grade: 'B',
    note: '盗塁阻止率が高くなる。リード能力と併せて確認したい。'
  },

  // 特殊
  {
    id: 4,
    category: '特殊',
    text: '彼は「天才」なのかもしれない',
    ability: '性格：天才肌',
    grade: 'S',
    note: '超大当たり！成長率・固有戦術が圧倒的。ただし実績が「全国大会出場」以上である必要がある。'
  },
  {
    id: 5,
    category: '特殊',
    text: '将来性を感じる',
    ability: '覚醒イベント確率UP',
    grade: 'A',
    note: '入部後の覚醒イベント発生率が上昇し、対象に選ばれやすくなる。大化け候補。'
  },

  // 野手
  {
    id: 6,
    category: '野手',
    text: '打席での迫力が他と違う',
    ability: '威圧感（野手）',
    grade: 'S',
    note: '相手投手の制球とスタミナ消費を激化させる超強力青特。'
  },
  {
    id: 7,
    category: '野手',
    text: '天性のヒットメーカー',
    ability: 'アベレージヒッター',
    grade: 'S',
    note: 'ヒット確率が大きく上昇。出塁率・打率の安定に直結する。'
  },
  {
    id: 8,
    category: '野手',
    text: '思わぬ一発が魅力',
    ability: '意外性',
    grade: 'A',
    note: '同点・ビハインド時や走者なし時にパワーが劇的上昇する。'
  },
  {
    id: 9,
    category: '野手',
    text: '打ってからの走り出しが早い',
    ability: '内野安打○',
    grade: 'A',
    note: 'セーフティバントやゴロでも出塁しやすくなり、魔物戦術との相性抜群。'
  },
  {
    id: 10,
    category: '野手',
    text: '際どい球もカットして粘る',
    ability: 'カット打ち',
    grade: 'A',
    note: '球数を投げさせ相手投手のスタミナを削るのに有効。'
  },
  {
    id: 11,
    category: '野手',
    text: '追い込まれても強い打撃を見せる',
    ability: '粘り打ち',
    grade: 'A',
    note: '2ストライク追い込まれてもミートが下がりにくく三振しにくい。'
  },
  {
    id: 12,
    category: '野手',
    text: '芸術的な流し打ち',
    ability: '流し打ち',
    grade: 'A',
    note: '流し方向への打球が伸び、凡打がヒットゾーンへ落ちやすい。'
  },
  {
    id: 13,
    category: '野手',
    text: '際どいボール球も見送れる',
    ability: '選球眼',
    grade: 'B',
    note: '四球を選びやすくなり、出塁率が向上する。'
  },
  {
    id: 14,
    category: '野手',
    text: '積極果敢な走塁',
    ability: '走塁A/B、盗塁A/B',
    grade: 'B',
    note: '機動力野球に欠かせない走塁系特殊能力を示唆。'
  },
  {
    id: 15,
    category: '野手',
    text: '華麗な守備',
    ability: '守備職人',
    grade: 'B',
    note: '二遊間の守備範囲と送球動作が劇的に向上する。'
  },

  // 投手
  {
    id: 16,
    category: '投手',
    text: '中学生とは思えぬ威圧感',
    ability: '威圧感（投手）',
    grade: 'S',
    note: 'リリーフ時に相手打者の能力をガタ落ちさせる最強格の投手能力。'
  },
  {
    id: 17,
    category: '投手',
    text: 'ノビのある直球が持ち味',
    ability: 'ノビA/B',
    grade: 'A',
    note: 'ストレートの体感速度が上がり空振りを量産する。'
  },
  {
    id: 18,
    category: '投手',
    text: '奪三振力が高い',
    ability: '奪三振',
    grade: 'A',
    note: '2ストライク時に変化球のキレと球速が増加。'
  },
  {
    id: 19,
    category: '投手',
    text: 'ド真ん中への失投が少ない',
    ability: '逃げ球',
    grade: 'A',
    note: '被本塁打を劇的に減らす栄冠ナイン重要特能。'
  },
  {
    id: 20,
    category: '投手',
    text: 'キレのある変化球が持ち味',
    ability: 'キレ○',
    grade: 'A',
    note: '変化球の曲がり始めが遅くなり、空振りを奪いやすい。'
  },
  {
    id: 21,
    category: '投手',
    text: '重い球質が魅力',
    ability: '重い球',
    grade: 'A',
    note: '打球が飛びにくくなり長打・被弾を防ぐ。'
  },
  {
    id: 22,
    category: '投手',
    text: 'ピンチの場面に強い',
    ability: '対ピンチA/B',
    grade: 'A',
    note: '得点圏に走者を背負った際に能力が大幅上昇。'
  },
  {
    id: 23,
    category: '投手',
    text: '打たれても動じない',
    ability: '打たれ強さA/B',
    grade: 'A',
    note: '連打を浴びてもピヨリ状態（動揺）になりにくい。'
  },
  {
    id: 24,
    category: '投手',
    text: '厳しい内角攻めが得意',
    ability: '内角攻め',
    grade: 'B',
    note: '内角を突いたときに打者ののけ反りを誘い凡打に抑える。'
  },
  {
    id: 25,
    category: '投手',
    text: '利腕から対角線への角度ある投球が魅力',
    ability: 'クロスファイヤー',
    grade: 'B',
    note: '対角線への投球で球威・キレが増加。'
  },
  {
    id: 26,
    category: '投手',
    text: '緩急をつけた投球が光る',
    ability: '緩急○',
    grade: 'B',
    note: '直球と遅い変化球のコンビネーションで相手打者を幻惑。'
  },
  {
    id: 27,
    category: '投手',
    text: '球持ちの良さがウリ',
    ability: '球持ち○',
    grade: 'B',
    note: '打者のタイミングを狂わせる。'
  },
  {
    id: 28,
    category: '投手',
    text: '尻上がりに調子を上げる',
    ability: '尻上がり',
    grade: 'B',
    note: '先発投手が後半イニングになるほど能力上昇。'
  },
  {
    id: 29,
    category: '投手',
    text: '低めへの制球が良い',
    ability: '低め○',
    grade: 'B',
    note: '低めの制球力が上がりゴロを打たせやすくなる。'
  },
  {
    id: 30,
    category: '投手',
    text: '味方打線の援護を呼び込む投球',
    ability: '勝ち運',
    grade: 'B',
    note: '登板中に味方打線のパワーが上昇する。'
  }
];
