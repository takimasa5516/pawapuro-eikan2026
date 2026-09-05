export interface Manager {
  type: string;
  effect: string;
  detail: string;
  recommend: string;
}

export const MANAGERS_DATA: Manager[] = [
  {
    type: '赤ペン',
    effect: 'いずれかの学年の選手全員の練習効率が中UP',
    detail: '特定の学年全員の育成スピードがブーストされる。主力の学年と噛み合うと凄まじい成長をもたらす。',
    recommend: '★★★★★ (最優秀クラス)'
  },
  {
    type: '笛',
    effect: 'グラウンドレベル+1 ＆ 練習機材の耐久度UP',
    detail: '機材が壊れにくくなり、修理費用や機材購入の手間をカット。グラウンド整備も進む。',
    recommend: '★★★★☆ (機材が揃う中盤以降に最適)'
  },
  {
    type: 'バインダー',
    effect: '強豪以上なら「黒土」、中堅以下なら「白土」を補充',
    detail: '土の補充をしてくれるため、グラウンドレベル維持に便利。',
    recommend: '★★★☆☆ (安定した土補充役)'
  },
  {
    type: 'ノート',
    effect: 'スケジュール調整系、自分探しの本、参考書、逆転の発想のススメ等のアイテム入手',
    detail: '貴重な本や特殊なスケジュール進行アイテムを入手できる。',
    recommend: '★★★★☆ (性格変更本や特能本が狙える)'
  },
  {
    type: 'なし（手ぶら）',
    effect: '部員全員の体力+1',
    detail: '日常的に部員の体力をわずかに回復してくれる。練習効率の低下を防ぐ。',
    recommend: '★★★☆☆ (体力管理が楽になる)'
  },
  {
    type: '男マネージャー',
    effect: '3人の学力を小UP',
    detail: '部員の学力を向上させ、テストでの赤点を回避し練習効率UPを狙いやすくする。',
    recommend: '★★★☆☆ (学力重視編成に)'
  }
];

export interface WorldCupRequirement {
  id: number;
  condition: string;
  target: '野手' | '投手' | '共通' | '甲子園成績';
  details: string[];
}

export const WORLD_CUP_REQUIREMENTS: WorldCupRequirement[] = [
  {
    id: 1,
    target: '共通',
    condition: '★450以上',
    details: ['総合戦力★450以上の選手は無条件で日本代表候補に選出！']
  },
  {
    id: 2,
    target: '野手',
    condition: '★400〜449 かつ 能力にSがある',
    details: ['ミート、パワー、走力、肩力、守備力、捕球のいずれかがS（90以上）に到達していること。']
  },
  {
    id: 3,
    target: '投手',
    condition: '★400〜449 かつ 指定の投手能力',
    details: [
      '球速 160km/h 以上',
      'または 総変化量 12 以上',
      'または コントロールS'
    ]
  },
  {
    id: 4,
    target: '甲子園成績',
    condition: '夏の甲子園大会で圧倒的活躍',
    details: [
      '本塁打 5本以上',
      '安打数 10本以上 かつ 打率 5割以上',
      '盗塁数 6個以上',
      '防御率 2.00未満 かつ 投球回数 36イニング以上'
    ]
  }
];

export const WORLD_CUP_RESULTS = [
  { rank: '優勝', effect: '1〜3人のテンションUP ＆ 部員全員の練習効率が特大UP（大大大）' },
  { rank: '準優勝', effect: '部員全員の練習効率が中UP（大大）' },
  { rank: '決勝トーナメント敗退', effect: '部員全員の練習効率が小UP（大）' },
  { rank: '予選敗退', effect: '1〜3人のテンションDOWN' }
];

export const CONDITION_MODIFIERS = [
  { condition: '絶好調', trajectory: '+1', meet: '+15', power: '+15', speed: '-1', control: '+24', change: '+1〜3', stamina: '+25' },
  { condition: '好調', trajectory: '+0.5', meet: '+10', power: '+10', speed: '-2', control: '+12', change: '+1〜2', stamina: '+12.5' },
  { condition: 'ふつう', trajectory: '±0', meet: '±0', power: '±0', speed: '-4', control: '±0', change: '±0', stamina: '±0' },
  { condition: '不調', trajectory: '-0.5', meet: '-10', power: '-10', speed: '-6', control: '-12', change: '-1〜2', stamina: '-7.5' },
  { condition: '絶不調', trajectory: '-1', meet: '-15', power: '-15', speed: '-8', control: '-24', change: '-2〜3', stamina: '-15' }
];
