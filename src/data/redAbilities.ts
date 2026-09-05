export interface RedAbilityCorrelation {
  id: number;
  redName: string;
  blueName: string;
  specialGuide: boolean; // 特別指導
  match: boolean;        // 試合
  book: boolean;         // 本
  camp: boolean;         // 合宿
  description: string;
  note?: string;
}

export const RED_ABILITIES_DATA: RedAbilityCorrelation[] = [
  {
    id: 1,
    redName: '軽い球',
    blueName: '重い球',
    specialGuide: true,
    match: true,
    book: true,
    camp: true,
    description: '打球が飛ばされやすくなる赤特。重い球を取得することで上書き消去可能。'
  },
  {
    id: 2,
    redName: '一発',
    blueName: '逃げ球',
    specialGuide: true,
    match: true,
    book: true,
    camp: true,
    description: '失投時に本塁打を浴びやすくなる危険な赤特。逃げ球で打ち消し。'
  },
  {
    id: 3,
    redName: '負け運',
    blueName: '勝ち運',
    specialGuide: true,
    match: true,
    book: true,
    camp: true,
    description: '登板中に味方打線のパワーが下がる赤特。勝ち運で打ち消し。'
  },
  {
    id: 4,
    redName: 'スロースターター',
    blueName: '立ち上がり○',
    specialGuide: true,
    match: true,
    book: true,
    camp: true,
    description: '序盤（1〜2回）に失点しやすくなる。立ち上がり○で上書き可能。'
  },
  {
    id: 5,
    redName: '対ランナー×',
    blueName: '対ランナー○',
    specialGuide: true,
    match: true,
    book: true,
    camp: true,
    description: '走者を背負うと能力低下。対ランナー○を取得して解消。'
  },
  {
    id: 6,
    redName: 'ボール先行',
    blueName: 'ストライク先行',
    specialGuide: true,
    match: true,
    book: true,
    camp: true,
    description: 'カウントが悪化しやすい。ストライク先行で打ち消し可能。'
  },
  {
    id: 7,
    redName: '三振',
    blueName: '粘り打ち',
    specialGuide: true,
    match: true,
    book: true,
    camp: true,
    description: '2ストライク追い込まれるとミートが低下。粘り打ちで打ち消し。'
  },
  {
    id: 8,
    redName: 'チームプレイ×',
    blueName: 'チームプレイ○',
    specialGuide: false,
    match: true,
    book: true,
    camp: true,
    description: '※特別指導では消去不可！合宿・試合・本で対応可能。',
    note: '自動操作中にバントをしづらくなる効果があるため、強打者やクリーンナップならそのままでも影響が少なく実質メリットになることもあります。'
  },
  {
    id: 9,
    redName: 'ムード×',
    blueName: 'ムード○',
    specialGuide: true,
    match: true,
    book: true,
    camp: true,
    description: '試合中、チーム全体の打撃能力を下げてしまう最悪の赤特。最優先で消去必須。'
  }
];
