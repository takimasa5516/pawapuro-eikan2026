export interface RegionOB {
  name: string;
  stars: number;
  pos: string;
  highSchool: string;
  year: number;
  special: string;
  isGold: boolean;
  catcherGrade: string;
  dlc: boolean;
}

export interface RecommendedRegion {
  pref: string;
  region: string;
  starsRating: number; // 5, 4, 3
  tier: 'S' | 'A' | 'B';
  schoolCountLevel: string;
  schoolCountApprox: number;
  pitcherRate: string;
  hasCatcherAB: boolean;
  catchersABNames: string[];
  maxOBStars: number;
  highlightOB: string;
  summary: string;
  obList: RegionOB[];
}

export const START_REGIONS_DATA: RecommendedRegion[] = [
  {
    "pref": "北海道",
    "region": "北海道・東北",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 180,
    "pitcherRate": "極高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 417,
    "highlightOB": "田中将大(★420), 若松勉(★313), 伊藤大海(★320)",
    "summary": "駒大苫小牧の神の子マー君（田中将大）をリセマラで狙うなら北海道一択。若松勉や伊藤大海も控え戦力十分。",
    "obList": [
      {
        "name": "田中将大(DLC)",
        "stars": 417,
        "pos": "投",
        "highSchool": "駒大苫小牧",
        "year": 2004,
        "special": "勝利の星",
        "isGold": true,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "若松勉",
        "stars": 313,
        "pos": "外",
        "highSchool": "高校",
        "year": 1963,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "田中将大",
        "stars": 309,
        "pos": "投",
        "highSchool": "駒大苫小牧",
        "year": 2004,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "伊藤大海",
        "stars": 280,
        "pos": "投",
        "highSchool": "高校",
        "year": 2013,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "高島泰都",
        "stars": 257,
        "pos": "投",
        "highSchool": "高校",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "青森",
    "region": "北海道・東北",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 53,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 341,
    "highlightOB": "坂本勇人(★410), 外崎修汰(★310), 種市篤暉(★310)",
    "summary": "光星学院の天才ショート坂本勇人をリセマラで狙える。高校数も53校と少なめで地方大会突破が安定。",
    "obList": [
      {
        "name": "坂本勇人",
        "stars": 341,
        "pos": "遊",
        "highSchool": "光星学院",
        "year": 2004,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "松山晋也",
        "stars": 288,
        "pos": "投",
        "highSchool": "高校",
        "year": 2016,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "外崎修汰",
        "stars": 288,
        "pos": "二",
        "highSchool": "弘前実",
        "year": 2008,
        "special": "盗塁○",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "種市篤暉",
        "stars": 281,
        "pos": "投",
        "highSchool": "八戸工大一",
        "year": 2014,
        "special": "ノビ○",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "木浪聖也",
        "stars": 268,
        "pos": "遊",
        "highSchool": "青森山田",
        "year": 2010,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "岩手",
    "region": "北海道・東北",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 56,
    "pitcherRate": "極高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 446,
    "highlightOB": "大谷翔平(★438), 佐々木朗希(★345), 菊池雄星(★320)",
    "summary": "高校数が少なく県大会4勝で甲子園！大谷・朗希・雄星と超強力投手が揃い初心者〜上級者まで最強の選択肢。",
    "obList": [
      {
        "name": "大谷翔平(DLC)",
        "stars": 446,
        "pos": "投",
        "highSchool": "花巻東",
        "year": 2010,
        "special": "二刀流",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "大谷翔平",
        "stars": 419,
        "pos": "投",
        "highSchool": "花巻東",
        "year": 2010,
        "special": "二刀流",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "菊池雄星",
        "stars": 263,
        "pos": "投",
        "highSchool": "花巻東",
        "year": 2007,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "松本裕樹",
        "stars": 250,
        "pos": "投",
        "highSchool": "盛岡大附",
        "year": 2012,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "宮城",
    "region": "北海道・東北",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 66,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 342,
    "highlightOB": "ダルビッシュ有(★435), 佐々木主浩(★390), 由規(★320)",
    "summary": "東北高校の大エース・ダルビッシュ有と大魔神佐々木主浩の二大巨頭。投手力だけで全国制覇できる実力。",
    "obList": [
      {
        "name": "ダルビッシュ有(DLC)",
        "stars": 342,
        "pos": "投",
        "highSchool": "東北",
        "year": 2002,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "小坂誠",
        "stars": 282,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1989,
        "special": "魔術師",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "佐々木主浩",
        "stars": 267,
        "pos": "投",
        "highSchool": "高校",
        "year": 1983,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "ダルビッシュ有",
        "stars": 266,
        "pos": "投",
        "highSchool": "東北",
        "year": 2002,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "上林誠知",
        "stars": 254,
        "pos": "外",
        "highSchool": "仙台育英",
        "year": 2011,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "秋田",
    "region": "北海道・東北",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 44,
    "pitcherRate": "極高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 373,
    "highlightOB": "落合博満(★390), 吉田輝星(★315), 石川雅規(★295)",
    "summary": "三冠王・落合博満や金足農の吉田輝星を狙える。高校数44校で予選突破しやすく、寒冷地特有の味がある。",
    "obList": [
      {
        "name": "落合博満",
        "stars": 373,
        "pos": "三",
        "highSchool": "高校",
        "year": 1969,
        "special": "勝負師",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山田久志",
        "stars": 280,
        "pos": "投",
        "highSchool": "高校",
        "year": 1964,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山田久志(DLC)",
        "stars": 274,
        "pos": "投",
        "highSchool": "高校",
        "year": 1964,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "石井大智",
        "stars": 270,
        "pos": "投",
        "highSchool": "高校",
        "year": 2013,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "攝津正",
        "stars": 257,
        "pos": "投",
        "highSchool": "高校",
        "year": 1998,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "石山泰稚",
        "stars": 252,
        "pos": "投",
        "highSchool": "高校",
        "year": 2004,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "山形",
    "region": "北海道・東北",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 44,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 280,
    "highlightOB": "栗原健太(★280), 長谷川勇也(★275), 皆川睦男(★260)",
    "summary": "高校数44校。栗原健太(★280)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "栗原健太",
        "stars": 280,
        "pos": "一",
        "highSchool": "日大山形",
        "year": 1997,
        "special": "パワーヒッター",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "長谷川勇也",
        "stars": 275,
        "pos": "外",
        "highSchool": "高校",
        "year": 2000,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "皆川睦男",
        "stars": 260,
        "pos": "投",
        "highSchool": "高校",
        "year": 1951,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "福島",
    "region": "北海道・東北",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 68,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 277,
    "highlightOB": "中畑清(★277), 佐藤都志也(★257)",
    "summary": "高校数68校。中畑清(★277)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "中畑清",
        "stars": 277,
        "pos": "一",
        "highSchool": "高校",
        "year": 1969,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "佐藤都志也",
        "stars": 257,
        "pos": "捕",
        "highSchool": "高校",
        "year": 2013,
        "special": "",
        "isGold": false,
        "catcherGrade": "C",
        "dlc": false
      }
    ]
  },
  {
    "pref": "茨城",
    "region": "関東",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 90,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 275,
    "highlightOB": "井川慶(★275), 豊田泰光(★269), 金子誠(★261)",
    "summary": "高校数90校。井川慶(★275)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "井川慶",
        "stars": 275,
        "pos": "投",
        "highSchool": "水戸商",
        "year": 1995,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "豊田泰光",
        "stars": 269,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1950,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "金子誠",
        "stars": 261,
        "pos": "遊",
        "highSchool": "常総学院",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "木村優人",
        "stars": 260,
        "pos": "投",
        "highSchool": "高校",
        "year": 2021,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "栃木",
    "region": "関東",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 59,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 343,
    "highlightOB": "江川卓(★343), 今井達也(★329), 石井琢朗(★325)",
    "summary": "高校数59校。江川卓(★343)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "江川卓",
        "stars": 343,
        "pos": "投",
        "highSchool": "作新学院",
        "year": 1971,
        "special": "怪童",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "今井達也",
        "stars": 329,
        "pos": "投",
        "highSchool": "作新学院",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "石井琢朗",
        "stars": 325,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1986,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "真中満",
        "stars": 261,
        "pos": "外",
        "highSchool": "宇都宮学園",
        "year": 1986,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "群馬",
    "region": "関東",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 64,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 288,
    "highlightOB": "中利夫(★288), 安達了一(★266), 毒島章一(★260)",
    "summary": "高校数64校。中利夫(★288)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "中利夫",
        "stars": 288,
        "pos": "外",
        "highSchool": "高校",
        "year": 1952,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "安達了一",
        "stars": 266,
        "pos": "遊",
        "highSchool": "高校",
        "year": 2003,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "毒島章一",
        "stars": 260,
        "pos": "外",
        "highSchool": "高校",
        "year": 1951,
        "special": "精神的支柱",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "高橋光成",
        "stars": 258,
        "pos": "投",
        "highSchool": "前橋育英",
        "year": 2012,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "埼玉",
    "region": "関東",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 148,
    "pitcherRate": "中",
    "hasCatcherAB": true,
    "catchersABNames": [
      "伊東勤(A)"
    ],
    "maxOBStars": 304,
    "highlightOB": "斎藤雅樹(★304), 鳥谷敬(DLC)(★285), 鳥谷敬(★272)",
    "summary": "高校数148校。斎藤雅樹(★304)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "斎藤雅樹",
        "stars": 304,
        "pos": "投",
        "highSchool": "市立川口",
        "year": 1980,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "鳥谷敬(DLC)",
        "stars": 285,
        "pos": "遊",
        "highSchool": "聖望学園",
        "year": 1997,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "鳥谷敬",
        "stars": 272,
        "pos": "遊",
        "highSchool": "聖望学園",
        "year": 1997,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "松原誠",
        "stars": 260,
        "pos": "外",
        "highSchool": "高校",
        "year": 1959,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "羽田慎之介",
        "stars": 260,
        "pos": "投",
        "highSchool": "高校",
        "year": 2019,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "西川愛也",
        "stars": 260,
        "pos": "外",
        "highSchool": "花咲徳栄",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "若月健矢",
        "stars": 256,
        "pos": "捕",
        "highSchool": "花咲徳栄",
        "year": 2011,
        "special": "",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      },
      {
        "name": "伊東勤",
        "stars": 249,
        "pos": "捕",
        "highSchool": "熊谷商",
        "year": 1978,
        "special": "キャッチャーA",
        "isGold": false,
        "catcherGrade": "A",
        "dlc": true
      }
    ]
  },
  {
    "pref": "千葉",
    "region": "関東",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 160,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 403,
    "highlightOB": "長嶋茂雄(★403), 掛布雅之(★311), 石毛宏典(★299)",
    "summary": "高校数160校。長嶋茂雄(★403)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "長嶋茂雄",
        "stars": 403,
        "pos": "三",
        "highSchool": "佐倉一",
        "year": 1951,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "掛布雅之",
        "stars": 311,
        "pos": "三",
        "highSchool": "習志野",
        "year": 1971,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "石毛宏典",
        "stars": 299,
        "pos": "三",
        "highSchool": "高校",
        "year": 1972,
        "special": "切り込み隊長",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "小笠原道大(DLC)",
        "stars": 297,
        "pos": "三",
        "highSchool": "高校",
        "year": 1989,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "飯田哲也",
        "stars": 296,
        "pos": "外",
        "highSchool": "拓大紅陵",
        "year": 1984,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "篠塚和典(DLC)",
        "stars": 267,
        "pos": "二",
        "highSchool": "高校",
        "year": 1973,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "横山陸人",
        "stars": 264,
        "pos": "投",
        "highSchool": "専大松戸",
        "year": 2017,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "福浦和也",
        "stars": 263,
        "pos": "一",
        "highSchool": "習志野",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "小宮山悟",
        "stars": 263,
        "pos": "投",
        "highSchool": "高校",
        "year": 1981,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "古屋英夫",
        "stars": 259,
        "pos": "三",
        "highSchool": "高校",
        "year": 1971,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "谷沢健一",
        "stars": 258,
        "pos": "一",
        "highSchool": "高校",
        "year": 1963,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "五十嵐亮太",
        "stars": 257,
        "pos": "投",
        "highSchool": "敬愛学園",
        "year": 1995,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "早川隆久",
        "stars": 253,
        "pos": "投",
        "highSchool": "木更津総合",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "木樽正明",
        "stars": 250,
        "pos": "投",
        "highSchool": "高校",
        "year": 1963,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "石井一久",
        "stars": 250,
        "pos": "投",
        "highSchool": "高校",
        "year": 1989,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "東京",
    "region": "関東",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 255,
    "pitcherRate": "中",
    "hasCatcherAB": true,
    "catchersABNames": [
      "大矢明彦(A)",
      "阿部慎之助(B)"
    ],
    "maxOBStars": 400,
    "highlightOB": "王貞治(★440), 清宮幸太郎(★330), 大森剛(★300)",
    "summary": "世界の本塁打王・王貞治（早実）を狙える夢の地域。激戦区ながら王貞治の圧倒的本塁打数でねじ伏せられる。",
    "obList": [
      {
        "name": "王貞治(DLC)",
        "stars": 400,
        "pos": "一",
        "highSchool": "早稲田実",
        "year": 1956,
        "special": "アーチスト",
        "isGold": true,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "王貞治",
        "stars": 391,
        "pos": "一",
        "highSchool": "早稲田実",
        "year": 1956,
        "special": "アーチスト",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "田淵幸一",
        "stars": 365,
        "pos": "捕",
        "highSchool": "法政一",
        "year": 1962,
        "special": "アーチスト",
        "isGold": true,
        "catcherGrade": "D",
        "dlc": false
      },
      {
        "name": "阿部慎之助(DLC)",
        "stars": 354,
        "pos": "捕",
        "highSchool": "安田学園",
        "year": 1994,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": true
      },
      {
        "name": "鈴木誠也(DLC)",
        "stars": 335,
        "pos": "外",
        "highSchool": "二松學舍大附",
        "year": 2010,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "岩隈久志",
        "stars": 310,
        "pos": "投",
        "highSchool": "堀越",
        "year": 1997,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "阿部慎之助",
        "stars": 309,
        "pos": "捕",
        "highSchool": "安田学園",
        "year": 1994,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      },
      {
        "name": "鈴木誠也",
        "stars": 305,
        "pos": "外",
        "highSchool": "二松學舍大附",
        "year": 2010,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "土橋正幸",
        "stars": 302,
        "pos": "投",
        "highSchool": "高校",
        "year": 1951,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "井口資仁",
        "stars": 302,
        "pos": "二",
        "highSchool": "国学院久我山",
        "year": 1990,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "江藤智",
        "stars": 300,
        "pos": "三",
        "highSchool": "高校",
        "year": 1986,
        "special": "アーチスト",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "井端弘和(DLC)",
        "stars": 292,
        "pos": "遊",
        "highSchool": "堀越",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "榎本喜八",
        "stars": 290,
        "pos": "一",
        "highSchool": "高校",
        "year": 1952,
        "special": "安打製造機",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "杉下茂",
        "stars": 288,
        "pos": "投",
        "highSchool": "高校",
        "year": 1941,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "高橋慶彦",
        "stars": 285,
        "pos": "遊",
        "highSchool": "城西",
        "year": 1972,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "井端弘和",
        "stars": 275,
        "pos": "遊",
        "highSchool": "堀越",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "森本稀哲(DLC)",
        "stars": 275,
        "pos": "外",
        "highSchool": "帝京",
        "year": 1996,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "森本稀哲",
        "stars": 258,
        "pos": "外",
        "highSchool": "帝京",
        "year": 1996,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "赤星憲広(投手)",
        "stars": 256,
        "pos": "投",
        "highSchool": "高校",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "細野晴希",
        "stars": 254,
        "pos": "投",
        "highSchool": "高校",
        "year": 2017,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "清宮幸太郎",
        "stars": 252,
        "pos": "一",
        "highSchool": "早稲田実",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "大矢明彦",
        "stars": 233,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1963,
        "special": "キャッチャーA",
        "isGold": false,
        "catcherGrade": "A",
        "dlc": false
      }
    ]
  },
  {
    "pref": "神奈川",
    "region": "関東",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 180,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 327,
    "highlightOB": "松坂大輔(★425), 筒香嘉智(★370), 原辰徳(★360)",
    "summary": "平成の怪物・松坂大輔を狙える。激戦区だが松坂・筒香・原辰徳などタレント層の厚さは全国屈指。",
    "obList": [
      {
        "name": "高橋由伸",
        "stars": 327,
        "pos": "外",
        "highSchool": "桐蔭学園",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "筒香嘉智",
        "stars": 326,
        "pos": "外",
        "highSchool": "横浜",
        "year": 2007,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "秋山翔吾(DLC)",
        "stars": 324,
        "pos": "外",
        "highSchool": "横浜創学館",
        "year": 2004,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "松坂大輔",
        "stars": 321,
        "pos": "投",
        "highSchool": "横浜",
        "year": 1996,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山口鉄也(DLC)",
        "stars": 308,
        "pos": "投",
        "highSchool": "高校",
        "year": 1999,
        "special": "鉄人",
        "isGold": true,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "近藤健介",
        "stars": 304,
        "pos": "外",
        "highSchool": "横浜",
        "year": 2009,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "秋山翔吾",
        "stars": 302,
        "pos": "外",
        "highSchool": "横浜創学館",
        "year": 2004,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "菅野智之(DLC)",
        "stars": 300,
        "pos": "投",
        "highSchool": "東海大相模",
        "year": 2005,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "森下翔太",
        "stars": 290,
        "pos": "外",
        "highSchool": "東海大相模",
        "year": 2016,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "原辰徳(DLC)",
        "stars": 286,
        "pos": "三",
        "highSchool": "東海大相模",
        "year": 1974,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "原辰徳",
        "stars": 283,
        "pos": "三",
        "highSchool": "東海大相模",
        "year": 1974,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "涌井秀章(DLC)",
        "stars": 271,
        "pos": "投",
        "highSchool": "横浜",
        "year": 2002,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "矢澤宏太",
        "stars": 269,
        "pos": "投",
        "highSchool": "藤嶺藤沢",
        "year": 2016,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山本昌広",
        "stars": 265,
        "pos": "投",
        "highSchool": "高校",
        "year": 1981,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "藤平尚真",
        "stars": 261,
        "pos": "投",
        "highSchool": "横浜",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "阿波野秀幸",
        "stars": 260,
        "pos": "投",
        "highSchool": "高校",
        "year": 1980,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "及川雅貴",
        "stars": 259,
        "pos": "投",
        "highSchool": "横浜",
        "year": 2017,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "田中広輔",
        "stars": 258,
        "pos": "遊",
        "highSchool": "高校",
        "year": 2005,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "柴田勲",
        "stars": 257,
        "pos": "外",
        "highSchool": "法政二",
        "year": 1959,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "渡部遼人",
        "stars": 257,
        "pos": "外",
        "highSchool": "桐蔭学園",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "田代富雄",
        "stars": 254,
        "pos": "三",
        "highSchool": "高校",
        "year": 1970,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "多村仁志",
        "stars": 253,
        "pos": "外",
        "highSchool": "横浜",
        "year": 1992,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "新潟",
    "region": "甲信越・北陸",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 77,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 263,
    "highlightOB": "滝澤夏央(★263)",
    "summary": "高校数77校。滝澤夏央(★263)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "滝澤夏央",
        "stars": 263,
        "pos": "遊",
        "highSchool": "高校",
        "year": 2019,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "富山",
    "region": "甲信越・北陸",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 46,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 282,
    "highlightOB": "石川歩(★282), 西野勇士(★274), 進藤達哉(★265)",
    "summary": "高校数46校。石川歩(★282)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "石川歩",
        "stars": 282,
        "pos": "投",
        "highSchool": "滑川",
        "year": 2004,
        "special": "コントロールB",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "西野勇士",
        "stars": 274,
        "pos": "投",
        "highSchool": "新湊",
        "year": 2006,
        "special": "キレ○",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "進藤達哉",
        "stars": 265,
        "pos": "遊",
        "highSchool": "高岡商",
        "year": 1985,
        "special": "守備職人",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "石川",
    "region": "甲信越・北陸",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 44,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 355,
    "highlightOB": "松井秀喜(★430), 奥川恭伸(★330), 島内宏明(★280)",
    "summary": "高校数44校。星稜のゴジラ松井秀喜（★430・アーチスト）を引き当てれば、1年目から本塁打を量産して甲子園を制覇可能。",
    "obList": [
      {
        "name": "松井秀喜",
        "stars": 355,
        "pos": "外",
        "highSchool": "星稜",
        "year": 1990,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "村松有人",
        "stars": 285,
        "pos": "外",
        "highSchool": "高校",
        "year": 1988,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "角中勝也(DLC)",
        "stars": 270,
        "pos": "外",
        "highSchool": "高校",
        "year": 2003,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "角中勝也",
        "stars": 253,
        "pos": "外",
        "highSchool": "高校",
        "year": 2003,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "福井",
    "region": "甲信越・北陸",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 29,
    "pitcherRate": "中",
    "hasCatcherAB": true,
    "catchersABNames": [
      "中村悠平(B)"
    ],
    "maxOBStars": 355,
    "highlightOB": "吉田正尚(★375), 中村悠平(★330/捕手B), 栗原陵矢(★310)",
    "summary": "高校数わずか29校（超勝ちやすい）に加え、強打者吉田正尚＆正捕手キャッチャーB中村悠平の二枚看板。非常にバランスが良い。",
    "obList": [
      {
        "name": "篠原響",
        "stars": 355,
        "pos": "投",
        "highSchool": "福井工大福井",
        "year": 2022,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "吉田正尚(DLC)",
        "stars": 304,
        "pos": "外",
        "highSchool": "敦賀気比",
        "year": 2009,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "吉田正尚",
        "stars": 290,
        "pos": "外",
        "highSchool": "敦賀気比",
        "year": 2009,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "長谷川信哉",
        "stars": 279,
        "pos": "外",
        "highSchool": "敦賀気比",
        "year": 2018,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "栗原陵矢",
        "stars": 265,
        "pos": "三",
        "highSchool": "春江工",
        "year": 2012,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "波留敏夫",
        "stars": 254,
        "pos": "外",
        "highSchool": "大野",
        "year": 1986,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "西川史礁",
        "stars": 253,
        "pos": "外",
        "highSchool": "敦賀気比",
        "year": 2018,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "中村悠平",
        "stars": 235,
        "pos": "捕",
        "highSchool": "福井商",
        "year": 2006,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      }
    ]
  },
  {
    "pref": "山梨",
    "region": "甲信越・北陸",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 33,
    "pitcherRate": "高",
    "hasCatcherAB": true,
    "catchersABNames": [
      "中沢伸二(B)"
    ],
    "maxOBStars": 278,
    "highlightOB": "堀内恒夫(★278), 中沢伸二(★218)",
    "summary": "高校数33校。堀内恒夫(★278)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "堀内恒夫",
        "stars": 278,
        "pos": "投",
        "highSchool": "高校",
        "year": 1963,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "中沢伸二",
        "stars": 218,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1962,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      }
    ]
  },
  {
    "pref": "長野",
    "region": "甲信越・北陸",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 81,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 363,
    "highlightOB": "菊池涼介(DLC)(★363), 菊池涼介(★336), 牧秀悟(★277)",
    "summary": "高校数81校。菊池涼介(DLC)(★363)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "菊池涼介(DLC)",
        "stars": 363,
        "pos": "二",
        "highSchool": "武蔵工大二",
        "year": 2005,
        "special": "魔術師",
        "isGold": true,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "菊池涼介",
        "stars": 336,
        "pos": "二",
        "highSchool": "武蔵工大二",
        "year": 2005,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "牧秀悟",
        "stars": 277,
        "pos": "二",
        "highSchool": "松本第一",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "金子千尋",
        "stars": 269,
        "pos": "投",
        "highSchool": "長野商",
        "year": 1999,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "上田佳範",
        "stars": 265,
        "pos": "外",
        "highSchool": "松商学園",
        "year": 1989,
        "special": "レーザービーム",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "岐阜",
    "region": "東海",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 66,
    "pitcherRate": "中",
    "hasCatcherAB": true,
    "catchersABNames": [
      "森昌彦(A)",
      "石原慶幸(DLC)(B)"
    ],
    "maxOBStars": 333,
    "highlightOB": "高橋純平(★325), 朝倉健太(★305), 石原慶幸(★280)",
    "summary": "高校数66校で好投手が狙える東海の中堅有力県。",
    "obList": [
      {
        "name": "和田一浩(DLC)",
        "stars": 333,
        "pos": "外",
        "highSchool": "県岐阜商",
        "year": 1988,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "高木守道",
        "stars": 286,
        "pos": "二",
        "highSchool": "高校",
        "year": 1957,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "松田宣浩(DLC)",
        "stars": 269,
        "pos": "三",
        "highSchool": "中京",
        "year": 1999,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "森昌彦",
        "stars": 262,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1952,
        "special": "キャッチャーA",
        "isGold": false,
        "catcherGrade": "A",
        "dlc": false
      },
      {
        "name": "松田宣浩",
        "stars": 261,
        "pos": "三",
        "highSchool": "中京",
        "year": 1999,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "石原慶幸",
        "stars": 235,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1995,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      }
    ]
  },
  {
    "pref": "静岡",
    "region": "東海",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 108,
    "pitcherRate": "高",
    "hasCatcherAB": true,
    "catchersABNames": [
      "袴田英利(B)"
    ],
    "maxOBStars": 286,
    "highlightOB": "岩崎優(★310), 紅林弘太郎(★290), 鈴木大地(★285)",
    "summary": "阪神の守護神・岩崎優や紅林弘太郎など攻守の好選手が揃う。",
    "obList": [
      {
        "name": "高橋遥人",
        "stars": 286,
        "pos": "投",
        "highSchool": "高校",
        "year": 2011,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "大石大二郎",
        "stars": 271,
        "pos": "二",
        "highSchool": "高校",
        "year": 1974,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "赤堀元之",
        "stars": 260,
        "pos": "投",
        "highSchool": "高校",
        "year": 1986,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "石田裕太郎",
        "stars": 259,
        "pos": "投",
        "highSchool": "静清",
        "year": 2017,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山下大輔",
        "stars": 251,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1967,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "増井浩俊",
        "stars": 250,
        "pos": "投",
        "highSchool": "高校",
        "year": 2000,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "袴田英利",
        "stars": 202,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1971,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      }
    ]
  },
  {
    "pref": "愛知",
    "region": "東海",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 178,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 415,
    "highlightOB": "イチロー(★445), 千賀滉大(★380), 赤星憲広(★320)",
    "summary": "高校数は多いが、安打製造機イチロー（★445）と千賀滉大（★380）の圧倒的ネームバリュー。リセマラ成功時の破壊力は全地域トップ。",
    "obList": [
      {
        "name": "イチロー",
        "stars": 415,
        "pos": "外",
        "highSchool": "愛工大名電",
        "year": 1989,
        "special": "安打製造機",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山内和弘",
        "stars": 358,
        "pos": "外",
        "highSchool": "高校",
        "year": 1948,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "金田正一",
        "stars": 349,
        "pos": "投",
        "highSchool": "高校",
        "year": 1949,
        "special": "闘魂",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "杉浦忠",
        "stars": 318,
        "pos": "投",
        "highSchool": "高校",
        "year": 1951,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "岩瀬仁紀",
        "stars": 314,
        "pos": "投",
        "highSchool": "西尾東",
        "year": 1990,
        "special": "驚異の切れ味",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "野口二郎",
        "stars": 309,
        "pos": "投",
        "highSchool": "高校",
        "year": 1935,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "稲葉篤紀(DLC)",
        "stars": 303,
        "pos": "外",
        "highSchool": "高校",
        "year": 1988,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "赤星憲広",
        "stars": 298,
        "pos": "外",
        "highSchool": "高校",
        "year": 1992,
        "special": "電光石火",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "平野謙",
        "stars": 291,
        "pos": "外",
        "highSchool": "高校",
        "year": 1971,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "稲葉篤紀",
        "stars": 285,
        "pos": "外",
        "highSchool": "高校",
        "year": 1988,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "浅尾拓也",
        "stars": 283,
        "pos": "投",
        "highSchool": "高校",
        "year": 2000,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "槙原寛己",
        "stars": 267,
        "pos": "投",
        "highSchool": "高校",
        "year": 1979,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "大島洋平",
        "stars": 260,
        "pos": "外",
        "highSchool": "享栄",
        "year": 2001,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "東克樹",
        "stars": 258,
        "pos": "投",
        "highSchool": "愛工大名電",
        "year": 2011,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山﨑武司",
        "stars": 251,
        "pos": "外",
        "highSchool": "愛工大名電",
        "year": 1984,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "千賀滉大(DLC)",
        "stars": 251,
        "pos": "投",
        "highSchool": "蒲郡",
        "year": 2008,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      }
    ]
  },
  {
    "pref": "三重",
    "region": "東海",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 62,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 299,
    "highlightOB": "豊田清(DLC)(★299), 西勇輝(★274), 岡林勇希(★267)",
    "summary": "高校数62校。豊田清(DLC)(★299)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "豊田清(DLC)",
        "stars": 299,
        "pos": "投",
        "highSchool": "高校",
        "year": 1986,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "西勇輝",
        "stars": 274,
        "pos": "投",
        "highSchool": "菰野",
        "year": 2006,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "岡林勇希",
        "stars": 267,
        "pos": "外",
        "highSchool": "菰野",
        "year": 2017,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "滋賀",
    "region": "近畿",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 50,
    "pitcherRate": "極高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 270,
    "highlightOB": "則本昂大(DLC)(★270), 西崎幸広(★252), 山田陽翔(★250)",
    "summary": "高校数50校。則本昂大(DLC)(★270)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "則本昂大(DLC)",
        "stars": 270,
        "pos": "投",
        "highSchool": "八幡商",
        "year": 2006,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "西崎幸広",
        "stars": 252,
        "pos": "投",
        "highSchool": "高校",
        "year": 1980,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山田陽翔",
        "stars": 250,
        "pos": "投",
        "highSchool": "近江",
        "year": 2020,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "京都",
    "region": "近畿",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 74,
    "pitcherRate": "高",
    "hasCatcherAB": true,
    "catchersABNames": [
      "野村克也(球界の頭脳/A)"
    ],
    "maxOBStars": 344,
    "highlightOB": "野村克也(★344), 糸井嘉男(DLC)(★316), 衣笠祥雄(★304)",
    "summary": "高校数74校。野村克也(★344)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "野村克也",
        "stars": 344,
        "pos": "捕",
        "highSchool": "峰山",
        "year": 1951,
        "special": "球界の頭脳",
        "isGold": true,
        "catcherGrade": "A",
        "dlc": false
      },
      {
        "name": "糸井嘉男(DLC)",
        "stars": 316,
        "pos": "外",
        "highSchool": "高校",
        "year": 1997,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "衣笠祥雄",
        "stars": 304,
        "pos": "三",
        "highSchool": "平安",
        "year": 1962,
        "special": "鉄人",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "斉藤和巳",
        "stars": 297,
        "pos": "投",
        "highSchool": "高校",
        "year": 1993,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "北山亘基",
        "stars": 293,
        "pos": "投",
        "highSchool": "高校",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "吉田義男",
        "stars": 287,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1949,
        "special": "魔術師",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "平野佳寿(DLC)",
        "stars": 281,
        "pos": "投",
        "highSchool": "鳥羽",
        "year": 1999,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "桑原将志",
        "stars": 278,
        "pos": "外",
        "highSchool": "福知山成美",
        "year": 2009,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "伊藤智仁",
        "stars": 275,
        "pos": "投",
        "highSchool": "高校",
        "year": 1986,
        "special": "驚異の切れ味",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "糸井嘉男",
        "stars": 270,
        "pos": "外",
        "highSchool": "高校",
        "year": 1997,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "大阪",
    "region": "近畿",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 168,
    "pitcherRate": "中",
    "hasCatcherAB": true,
    "catchersABNames": [
      "矢野燿大(B)",
      "坂本誠志郎(B)"
    ],
    "maxOBStars": 382,
    "highlightOB": "中田翔(★360), 森友哉(★355/捕手B), 藤浪晋太郎(★350)",
    "summary": "全国最大の激戦区だが、大阪桐蔭・PL学園の怪物が集結。キャッチャーB森友哉、藤浪晋太郎、中田翔など即戦力多数。",
    "obList": [
      {
        "name": "江夏豊",
        "stars": 382,
        "pos": "投",
        "highSchool": "大阪学院大高",
        "year": 1964,
        "special": "怪童",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "松井稼頭央(DLC)",
        "stars": 376,
        "pos": "遊",
        "highSchool": "PL学園",
        "year": 1991,
        "special": "切り込み隊長",
        "isGold": true,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "福留孝介(DLC)",
        "stars": 357,
        "pos": "外",
        "highSchool": "PL学園",
        "year": 1993,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "黒田博樹",
        "stars": 343,
        "pos": "投",
        "highSchool": "上宮",
        "year": 1990,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山田哲人(DLC)",
        "stars": 343,
        "pos": "二",
        "highSchool": "履正社",
        "year": 2008,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "山田哲人",
        "stars": 341,
        "pos": "二",
        "highSchool": "履正社",
        "year": 2008,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "上原浩治(DLC)",
        "stars": 337,
        "pos": "投",
        "highSchool": "東海大仰星",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "張本勲",
        "stars": 333,
        "pos": "外",
        "highSchool": "浪華商",
        "year": 1956,
        "special": "安打製造機",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "岡田彰布",
        "stars": 322,
        "pos": "二",
        "highSchool": "高校",
        "year": 1973,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "村山実",
        "stars": 319,
        "pos": "投",
        "highSchool": "住吉",
        "year": 1952,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "清原和博",
        "stars": 318,
        "pos": "一",
        "highSchool": "PL学園",
        "year": 1983,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "中村紀洋",
        "stars": 317,
        "pos": "三",
        "highSchool": "高校",
        "year": 1989,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "上原浩治",
        "stars": 308,
        "pos": "投",
        "highSchool": "東海大仰星",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "尾崎行雄",
        "stars": 306,
        "pos": "投",
        "highSchool": "高校",
        "year": 1960,
        "special": "怪童",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "前田健太",
        "stars": 305,
        "pos": "投",
        "highSchool": "PL学園",
        "year": 2004,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "土井正博",
        "stars": 303,
        "pos": "外",
        "highSchool": "高校",
        "year": 1959,
        "special": "引っ張り屋",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "森友哉",
        "stars": 303,
        "pos": "捕",
        "highSchool": "大阪桐蔭",
        "year": 2011,
        "special": "",
        "isGold": false,
        "catcherGrade": "C",
        "dlc": false
      },
      {
        "name": "宮本慎也(DLC)",
        "stars": 295,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1986,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "福本豊",
        "stars": 294,
        "pos": "外",
        "highSchool": "高校",
        "year": 1963,
        "special": "電光石火",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "加藤英司",
        "stars": 292,
        "pos": "一",
        "highSchool": "PL学園",
        "year": 1964,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "中村剛也",
        "stars": 292,
        "pos": "三",
        "highSchool": "大阪桐蔭",
        "year": 1999,
        "special": "恐怖の満塁男",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "中田翔",
        "stars": 291,
        "pos": "一",
        "highSchool": "大阪桐蔭",
        "year": 2005,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "桑田真澄",
        "stars": 288,
        "pos": "投",
        "highSchool": "PL学園",
        "year": 1983,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "福留孝介",
        "stars": 287,
        "pos": "外",
        "highSchool": "PL学園",
        "year": 1993,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "西岡剛(DLC)",
        "stars": 284,
        "pos": "遊",
        "highSchool": "大阪桐蔭",
        "year": 2000,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "立浪和義",
        "stars": 282,
        "pos": "二",
        "highSchool": "PL学園",
        "year": 1985,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "新井宏昌",
        "stars": 279,
        "pos": "外",
        "highSchool": "高校",
        "year": 1968,
        "special": "安打製造機",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "前田悠伍",
        "stars": 273,
        "pos": "投",
        "highSchool": "大阪桐蔭",
        "year": 2021,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "金城龍彦",
        "stars": 272,
        "pos": "外",
        "highSchool": "高校",
        "year": 1992,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "宮本慎也",
        "stars": 272,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1986,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "吉村禎章",
        "stars": 270,
        "pos": "外",
        "highSchool": "PL学園",
        "year": 1979,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "サブロー(DLC)",
        "stars": 270,
        "pos": "外",
        "highSchool": "PL学園",
        "year": 1992,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "今中慎二",
        "stars": 268,
        "pos": "投",
        "highSchool": "高校",
        "year": 1986,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "藤井康雄",
        "stars": 268,
        "pos": "外",
        "highSchool": "泉尾工",
        "year": 1978,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "松井稼頭央",
        "stars": 266,
        "pos": "遊",
        "highSchool": "PL学園",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "平田良介",
        "stars": 265,
        "pos": "外",
        "highSchool": "大阪桐蔭",
        "year": 2003,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "足立光宏",
        "stars": 263,
        "pos": "投",
        "highSchool": "高校",
        "year": 1955,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "内星龍",
        "stars": 263,
        "pos": "投",
        "highSchool": "高校",
        "year": 2018,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "矢野燿大",
        "stars": 261,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1984,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      },
      {
        "name": "藤浪晋太郎",
        "stars": 258,
        "pos": "投",
        "highSchool": "大阪桐蔭",
        "year": 2010,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "片岡篤史",
        "stars": 255,
        "pos": "三",
        "highSchool": "PL学園",
        "year": 1985,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "今岡誠",
        "stars": 253,
        "pos": "二",
        "highSchool": "PL学園",
        "year": 1990,
        "special": "恐怖の満塁男",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "サブロー",
        "stars": 253,
        "pos": "外",
        "highSchool": "PL学園",
        "year": 1992,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "坂本誠志郎",
        "stars": 202,
        "pos": "捕",
        "highSchool": "履正社",
        "year": 2009,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      }
    ]
  },
  {
    "pref": "兵庫",
    "region": "近畿",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 156,
    "pitcherRate": "高",
    "hasCatcherAB": true,
    "catchersABNames": [
      "古田敦也(球界の頭脳/A)"
    ],
    "maxOBStars": 392,
    "highlightOB": "古田敦也(★415), 山田久志(★395), 鈴木啓示(★335)",
    "summary": "栄冠ナイン最強の捕手「古田敦也（キャッチャーA・球界の頭脳）」を狙える唯一の高校所在地。古田を引けばチーム防御率が激変。",
    "obList": [
      {
        "name": "古田敦也",
        "stars": 392,
        "pos": "捕",
        "highSchool": "川西明峰",
        "year": 1981,
        "special": "球界の頭脳",
        "isGold": true,
        "catcherGrade": "A",
        "dlc": false
      },
      {
        "name": "別所昭",
        "stars": 384,
        "pos": "投",
        "highSchool": "高校",
        "year": 1938,
        "special": "鉄人",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "小山正明",
        "stars": 340,
        "pos": "投",
        "highSchool": "高校",
        "year": 1950,
        "special": "精密機械",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "鈴木啓示",
        "stars": 335,
        "pos": "投",
        "highSchool": "高校",
        "year": 1963,
        "special": "不屈の魂",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "佐藤輝明",
        "stars": 332,
        "pos": "三",
        "highSchool": "仁川学院",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "才木浩人",
        "stars": 303,
        "pos": "投",
        "highSchool": "須磨翔風",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "池山隆寛(DLC)",
        "stars": 284,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1981,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "辰己涼介",
        "stars": 284,
        "pos": "外",
        "highSchool": "社",
        "year": 2012,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "田口壮",
        "stars": 283,
        "pos": "外",
        "highSchool": "高校",
        "year": 1985,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "宮西尚生(DLC)",
        "stars": 282,
        "pos": "投",
        "highSchool": "高校",
        "year": 2001,
        "special": "鉄腕",
        "isGold": true,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "中森俊介",
        "stars": 278,
        "pos": "投",
        "highSchool": "明石商",
        "year": 2018,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "中島裕之",
        "stars": 277,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1998,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山﨑伊織",
        "stars": 276,
        "pos": "投",
        "highSchool": "明石商",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "池山隆寛",
        "stars": 271,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1981,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "金丸夢斗",
        "stars": 269,
        "pos": "投",
        "highSchool": "神港橘",
        "year": 2018,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "大勢",
        "stars": 264,
        "pos": "投",
        "highSchool": "高校",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "近本光司",
        "stars": 263,
        "pos": "外",
        "highSchool": "社",
        "year": 2010,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "屋鋪要",
        "stars": 262,
        "pos": "外",
        "highSchool": "高校",
        "year": 1975,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "宮西尚生",
        "stars": 250,
        "pos": "投",
        "highSchool": "高校",
        "year": 2001,
        "special": "鉄腕",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "奈良",
    "region": "近畿",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 36,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 285,
    "highlightOB": "村上頌樹(★285), 岡本和真(★280), 大西広樹(★271)",
    "summary": "高校数36校。村上頌樹(★285)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "村上頌樹",
        "stars": 285,
        "pos": "投",
        "highSchool": "智辯学園",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "岡本和真",
        "stars": 280,
        "pos": "一",
        "highSchool": "智辯学園",
        "year": 2012,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "大西広樹",
        "stars": 271,
        "pos": "投",
        "highSchool": "高校",
        "year": 2013,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "門田博光",
        "stars": 270,
        "pos": "外",
        "highSchool": "高校",
        "year": 1963,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "達孝太",
        "stars": 269,
        "pos": "投",
        "highSchool": "天理",
        "year": 2019,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "駒田徳広",
        "stars": 260,
        "pos": "一",
        "highSchool": "高校",
        "year": 1978,
        "special": "恐怖の満塁男",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "三浦大輔",
        "stars": 260,
        "pos": "投",
        "highSchool": "高田商",
        "year": 1989,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "森浦大輔",
        "stars": 257,
        "pos": "投",
        "highSchool": "天理",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "和歌山",
    "region": "近畿",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 39,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 290,
    "highlightOB": "小久保裕紀(DLC)(★290), 小久保裕紀(★278), 中川虎大(★269)",
    "summary": "高校数39校。小久保裕紀(DLC)(★290)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "小久保裕紀(DLC)",
        "stars": 290,
        "pos": "三",
        "highSchool": "高校",
        "year": 1987,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "小久保裕紀",
        "stars": 278,
        "pos": "三",
        "highSchool": "高校",
        "year": 1987,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "中川虎大",
        "stars": 269,
        "pos": "投",
        "highSchool": "高校",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "東尾修(DLC)",
        "stars": 268,
        "pos": "投",
        "highSchool": "箕島",
        "year": 1966,
        "special": "内角無双",
        "isGold": true,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "西口文也",
        "stars": 265,
        "pos": "投",
        "highSchool": "高校",
        "year": 1988,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "川端慎吾",
        "stars": 256,
        "pos": "三",
        "highSchool": "市立和歌山商",
        "year": 2003,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "益田直也",
        "stars": 254,
        "pos": "投",
        "highSchool": "高校",
        "year": 2005,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "東尾修",
        "stars": 253,
        "pos": "投",
        "highSchool": "箕島",
        "year": 1966,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "吉井理人",
        "stars": 250,
        "pos": "投",
        "highSchool": "箕島",
        "year": 1981,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "鳥取",
    "region": "中国",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 23,
    "pitcherRate": "極高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 305,
    "highlightOB": "小林繁(★305), 川口和久(★284), 能見篤史(★262)",
    "summary": "参加高校数が全国最少（わずか23校）！夏の地方大会わずか3勝で甲子園出場可能。転生OBが投手に偏っており投手リセマラに最適。",
    "obList": [
      {
        "name": "小林繁",
        "stars": 305,
        "pos": "投",
        "highSchool": "由良育英",
        "year": 1968,
        "special": "キレ○",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "川口和久",
        "stars": 284,
        "pos": "投",
        "highSchool": "鳥取城北",
        "year": 1974,
        "special": "奪三振",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "米田哲也",
        "stars": 281,
        "pos": "投",
        "highSchool": "高校",
        "year": 1953,
        "special": "ガソリンタンク",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "能見篤史(DLC)",
        "stars": 262,
        "pos": "投",
        "highSchool": "鳥取城北",
        "year": 1995,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      }
    ]
  },
  {
    "pref": "島根",
    "region": "中国",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 39,
    "pitcherRate": "高",
    "hasCatcherAB": true,
    "catchersABNames": [
      "谷繁元信(DLC)(A)",
      "谷繁元信(B)",
      "梨田昌崇(B)"
    ],
    "maxOBStars": 284,
    "highlightOB": "和田毅(★284), 大野豊(★282), 谷繁元信(★268/精神的支柱・捕A)",
    "summary": "高校数39校。金特「精神的支柱」＆キャッチャーAの谷繁元信やキャッチャーB梨田昌崇、名左腕大野豊・和田毅を狙える守備重視リセマラの聖地。",
    "obList": [
      {
        "name": "和田毅(DLC)",
        "stars": 284,
        "pos": "投",
        "highSchool": "浜田",
        "year": 1996,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "大野豊",
        "stars": 282,
        "pos": "投",
        "highSchool": "出雲商",
        "year": 1971,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "谷繁元信(DLC)",
        "stars": 268,
        "pos": "捕",
        "highSchool": "江の川",
        "year": 1986,
        "special": "精神的支柱",
        "isGold": true,
        "catcherGrade": "A",
        "dlc": true
      },
      {
        "name": "佐々岡真司",
        "stars": 266,
        "pos": "投",
        "highSchool": "高校",
        "year": 1983,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "梨田昌崇",
        "stars": 218,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1986,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      }
    ]
  },
  {
    "pref": "岡山",
    "region": "中国",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 58,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 326,
    "highlightOB": "平松政次(★326), 大杉勝男(★297), 佐々木誠(★286)",
    "summary": "カミソリシュート平松政次や大打者大杉勝男など投打のバランス良好。高校数58校。",
    "obList": [
      {
        "name": "平松政次",
        "stars": 326,
        "pos": "投",
        "highSchool": "岡山東商",
        "year": 1963,
        "special": "怪物球威",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "大杉勝男",
        "stars": 297,
        "pos": "一",
        "highSchool": "高校",
        "year": 1960,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "佐々木誠",
        "stars": 286,
        "pos": "外",
        "highSchool": "高校",
        "year": 1981,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "秋山登",
        "stars": 261,
        "pos": "投",
        "highSchool": "高校",
        "year": 1949,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "金村尚真",
        "stars": 261,
        "pos": "投",
        "highSchool": "岡山理大附",
        "year": 2016,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "岡大海",
        "stars": 257,
        "pos": "外",
        "highSchool": "高校",
        "year": 2007,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "広島",
    "region": "中国",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 87,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 381,
    "highlightOB": "柳田悠岐(★381), 山本浩二(★367), 藤村富美男(★364)",
    "summary": "ギータこと柳田悠岐（広島商）やミスター赤ヘル山本浩二などスラッガーの宝庫。打線重視プレイに最適。",
    "obList": [
      {
        "name": "柳田悠岐",
        "stars": 381,
        "pos": "外",
        "highSchool": "広島商",
        "year": 2004,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山本浩二",
        "stars": 367,
        "pos": "外",
        "highSchool": "廿日市",
        "year": 1962,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山本浩二(DLC)",
        "stars": 365,
        "pos": "外",
        "highSchool": "廿日市",
        "year": 1962,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "藤村富美男",
        "stars": 364,
        "pos": "三",
        "highSchool": "高校",
        "year": 1932,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "広瀬叔功",
        "stars": 358,
        "pos": "外",
        "highSchool": "高校",
        "year": 1952,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "金本知憲",
        "stars": 352,
        "pos": "外",
        "highSchool": "広陵",
        "year": 1984,
        "special": "鉄人",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "簑田浩二",
        "stars": 337,
        "pos": "外",
        "highSchool": "高校",
        "year": 1967,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "村田兆治",
        "stars": 296,
        "pos": "投",
        "highSchool": "高校",
        "year": 1965,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "西村健太朗",
        "stars": 283,
        "pos": "投",
        "highSchool": "高校",
        "year": 2001,
        "special": "本塁打厳禁",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "竹丸和幸",
        "stars": 269,
        "pos": "投",
        "highSchool": "高校",
        "year": 2017,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "梵英心",
        "stars": 269,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1996,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山崎隆造",
        "stars": 263,
        "pos": "外",
        "highSchool": "高校",
        "year": 1974,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "二岡智宏",
        "stars": 250,
        "pos": "遊",
        "highSchool": "広陵",
        "year": 1992,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "山口",
    "region": "中国",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 54,
    "pitcherRate": "高",
    "hasCatcherAB": true,
    "catchersABNames": [
      "有田修三(B)"
    ],
    "maxOBStars": 280,
    "highlightOB": "高木豊(★280), 津田恒実(★270), 山野太一(★253)",
    "summary": "高校数54校。高木豊(★280)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "高木豊",
        "stars": 280,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1974,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "津田恒実",
        "stars": 270,
        "pos": "投",
        "highSchool": "高校",
        "year": 1976,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山野太一",
        "stars": 253,
        "pos": "投",
        "highSchool": "高校",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "有田修三",
        "stars": 226,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1967,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      }
    ]
  },
  {
    "pref": "徳島",
    "region": "四国",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 29,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 301,
    "highlightOB": "里崎智也(★301/捕手B), 川上憲伸(★290), 長池徳二(★293)",
    "summary": "高校数29校で甲子園直行レベル。キャッチャーB里崎智也とエース川上憲伸を同時に狙える四国屈指の穴場名門。",
    "obList": [
      {
        "name": "里崎智也",
        "stars": 301,
        "pos": "捕",
        "highSchool": "鳴門工",
        "year": 1992,
        "special": "",
        "isGold": false,
        "catcherGrade": "C",
        "dlc": false
      },
      {
        "name": "長池徳二",
        "stars": 293,
        "pos": "外",
        "highSchool": "高校",
        "year": 1959,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "川上憲伸",
        "stars": 290,
        "pos": "投",
        "highSchool": "徳島商",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "水野雄仁",
        "stars": 285,
        "pos": "投",
        "highSchool": "池田",
        "year": 1981,
        "special": "重い球",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "杉本裕太郎",
        "stars": 282,
        "pos": "外",
        "highSchool": "徳島商",
        "year": 2007,
        "special": "パワーヒッター",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "武田久",
        "stars": 278,
        "pos": "投",
        "highSchool": "高校",
        "year": 1994,
        "special": "本塁打厳禁",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "森唯斗",
        "stars": 273,
        "pos": "投",
        "highSchool": "海部",
        "year": 2008,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "潮崎哲也",
        "stars": 261,
        "pos": "投",
        "highSchool": "高校",
        "year": 1984,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "岡本駿",
        "stars": 254,
        "pos": "投",
        "highSchool": "高校",
        "year": 2018,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "香川",
    "region": "四国",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 38,
    "pitcherRate": "中",
    "hasCatcherAB": true,
    "catchersABNames": [
      "岡村浩二(B)"
    ],
    "maxOBStars": 318,
    "highlightOB": "中西太(★318), 谷佳知(★300), 浅野翔吾(★262)",
    "summary": "高校数38校。中西太(★318)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "中西太",
        "stars": 318,
        "pos": "三",
        "highSchool": "高校",
        "year": 1949,
        "special": "怪力",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "谷佳知",
        "stars": 300,
        "pos": "外",
        "highSchool": "尽誠学園",
        "year": 1988,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "浅野翔吾",
        "stars": 262,
        "pos": "外",
        "highSchool": "高松商",
        "year": 2020,
        "special": "パワーヒッター",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "白井一幸",
        "stars": 255,
        "pos": "二",
        "highSchool": "尽誠学園",
        "year": 1977,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "島谷金二",
        "stars": 252,
        "pos": "三",
        "highSchool": "高校",
        "year": 1960,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "水野達稀",
        "stars": 251,
        "pos": "遊",
        "highSchool": "丸亀城西",
        "year": 2016,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "岡村浩二",
        "stars": 236,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1956,
        "special": "キャッチャーB",
        "isGold": false,
        "catcherGrade": "B",
        "dlc": false
      }
    ]
  },
  {
    "pref": "愛媛",
    "region": "四国",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 54,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 293,
    "highlightOB": "岩村明憲(★293), 平井正史(DLC)(★271), 安樂智大(★268)",
    "summary": "高校数54校。岩村明憲(★293)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "岩村明憲",
        "stars": 293,
        "pos": "三",
        "highSchool": "宇和島東",
        "year": 1994,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "平井正史(DLC)",
        "stars": 271,
        "pos": "投",
        "highSchool": "高校",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "安樂智大",
        "stars": 268,
        "pos": "投",
        "highSchool": "済美",
        "year": 2012,
        "special": "豪速球",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "高井保弘",
        "stars": 264,
        "pos": "一",
        "highSchool": "高校",
        "year": 1960,
        "special": "代打の神様",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "秋山拓巳",
        "stars": 262,
        "pos": "投",
        "highSchool": "西条",
        "year": 2007,
        "special": "低め○",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "藤原満",
        "stars": 256,
        "pos": "三",
        "highSchool": "高校",
        "year": 1962,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "高知",
    "region": "四国",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 27,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 310,
    "highlightOB": "藤川球児(★310), 伊藤光(★280/捕手B), 有藤道世(★281)",
    "summary": "高校数全国2位の少なさ（27校）。火の玉ストレート藤川球児に加えて明徳義塾のキャッチャーB伊藤光が狙える隠れた最強地域。",
    "obList": [
      {
        "name": "藤川球児(DLC)",
        "stars": 310,
        "pos": "投",
        "highSchool": "高知商",
        "year": 1996,
        "special": "怪童",
        "isGold": true,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "藤川球児",
        "stars": 307,
        "pos": "投",
        "highSchool": "高知商",
        "year": 1996,
        "special": "怪童",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "有藤道世",
        "stars": 281,
        "pos": "三",
        "highSchool": "高校",
        "year": 1962,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "江本孟紀",
        "stars": 276,
        "pos": "投",
        "highSchool": "高知商",
        "year": 1963,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "伊藤光",
        "stars": 275,
        "pos": "捕",
        "highSchool": "明徳義塾",
        "year": 2005,
        "special": "",
        "isGold": false,
        "catcherGrade": "C",
        "dlc": false
      },
      {
        "name": "木下拓哉",
        "stars": 268,
        "pos": "捕",
        "highSchool": "高知",
        "year": 2007,
        "special": "",
        "isGold": false,
        "catcherGrade": "D",
        "dlc": false
      },
      {
        "name": "森木大智",
        "stars": 264,
        "pos": "投",
        "highSchool": "高知",
        "year": 2019,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "福岡",
    "region": "九州・沖縄",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "多 (100〜180校)",
    "schoolCountApprox": 134,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 307,
    "highlightOB": "新庄剛志(★307), 村田修一(★307), 今永昇太(★285)",
    "summary": "高校数134校。新庄剛志(★307)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "新庄剛志",
        "stars": 307,
        "pos": "外",
        "highSchool": "西日本短大付",
        "year": 1987,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "村田修一",
        "stars": 307,
        "pos": "三",
        "highSchool": "東福岡",
        "year": 1996,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "今永昇太",
        "stars": 285,
        "pos": "投",
        "highSchool": "北筑",
        "year": 2009,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "松永浩美",
        "stars": 283,
        "pos": "三",
        "highSchool": "高校",
        "year": 1976,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "柴田獅子",
        "stars": 280,
        "pos": "投",
        "highSchool": "高校",
        "year": 2022,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "真弓明信",
        "stars": 279,
        "pos": "外",
        "highSchool": "高校",
        "year": 1969,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "長野久義",
        "stars": 264,
        "pos": "外",
        "highSchool": "筑陽学園",
        "year": 2000,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "島田誠",
        "stars": 262,
        "pos": "外",
        "highSchool": "高校",
        "year": 1970,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "柴原洋",
        "stars": 257,
        "pos": "外",
        "highSchool": "高校",
        "year": 1990,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "大津亮介",
        "stars": 255,
        "pos": "投",
        "highSchool": "高校",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "武内夏暉",
        "stars": 255,
        "pos": "投",
        "highSchool": "八幡南",
        "year": 2017,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "佐賀",
    "region": "九州・沖縄",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "最少 (20〜40校)",
    "schoolCountApprox": 39,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 298,
    "highlightOB": "権藤博(DLC)(★298), 権藤博(★271), 辻発彦(DLC)(★269)",
    "summary": "高校数39校。権藤博(DLC)(★298)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "権藤博(DLC)",
        "stars": 298,
        "pos": "投",
        "highSchool": "高校",
        "year": 1954,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "権藤博",
        "stars": 271,
        "pos": "投",
        "highSchool": "高校",
        "year": 1954,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "辻発彦(DLC)",
        "stars": 269,
        "pos": "二",
        "highSchool": "高校",
        "year": 1974,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "緒方孝市",
        "stars": 260,
        "pos": "外",
        "highSchool": "高校",
        "year": 1984,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "福地寿樹",
        "stars": 259,
        "pos": "外",
        "highSchool": "高校",
        "year": 1991,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "辻発彦",
        "stars": 254,
        "pos": "二",
        "highSchool": "高校",
        "year": 1974,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "長崎",
    "region": "九州・沖縄",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 52,
    "pitcherRate": "極高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 286,
    "highlightOB": "大瀬良大地(★286), 下柳剛(★283), 今村猛(★282)",
    "summary": "高校数52校。大瀬良大地(★286)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "大瀬良大地",
        "stars": 286,
        "pos": "投",
        "highSchool": "長崎日大",
        "year": 2007,
        "special": "闘志",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "下柳剛",
        "stars": 283,
        "pos": "投",
        "highSchool": "瓊浦",
        "year": 1984,
        "special": "ポーカーフェイス",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "今村猛",
        "stars": 282,
        "pos": "投",
        "highSchool": "清峰",
        "year": 2007,
        "special": "重い球",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "隅田知一郎",
        "stars": 268,
        "pos": "投",
        "highSchool": "高校",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "中村優斗",
        "stars": 253,
        "pos": "投",
        "highSchool": "高校",
        "year": 2018,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "熊本",
    "region": "九州・沖縄",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 56,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 393,
    "highlightOB": "秋山幸二(★393), 村上宗隆(★330), 松中信彦(★302)",
    "summary": "秋山幸二、村上宗隆、松中信彦、川上哲治、伊藤勤（捕手A）と打撃・捕手陣が歴代最強クラス。高校数56校。",
    "obList": [
      {
        "name": "秋山幸二",
        "stars": 393,
        "pos": "外",
        "highSchool": "高校",
        "year": 1978,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "村上宗隆(DLC)",
        "stars": 330,
        "pos": "三",
        "highSchool": "九州学院",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "松中信彦(DLC)",
        "stars": 302,
        "pos": "一",
        "highSchool": "高校",
        "year": 1989,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "川上哲治",
        "stars": 300,
        "pos": "一",
        "highSchool": "高校",
        "year": 1935,
        "special": "安打製造機",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "前田智徳",
        "stars": 298,
        "pos": "外",
        "highSchool": "高校",
        "year": 1987,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "松中信彦",
        "stars": 297,
        "pos": "一",
        "highSchool": "高校",
        "year": 1989,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "村上宗隆",
        "stars": 293,
        "pos": "三",
        "highSchool": "九州学院",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "野田浩司",
        "stars": 258,
        "pos": "投",
        "highSchool": "高校",
        "year": 1983,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "牧原大成",
        "stars": 258,
        "pos": "二",
        "highSchool": "高校",
        "year": 2008,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "荒木雅博",
        "stars": 256,
        "pos": "二",
        "highSchool": "高校",
        "year": 1993,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "伊藤勤",
        "stars": 233,
        "pos": "捕",
        "highSchool": "高校",
        "year": 1978,
        "special": "キャッチャーA",
        "isGold": false,
        "catcherGrade": "A",
        "dlc": false
      }
    ]
  },
  {
    "pref": "大分",
    "region": "九州・沖縄",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 44,
    "pitcherRate": "中",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 366,
    "highlightOB": "稲尾和久(★366), 城島健司(★324/捕手B), 内川聖一(★292)",
    "summary": "鉄腕・稲尾和久（★366）と強打捕手・城島健司（キャッチャーB）の強力バッテリーが狙える穴場有力県。",
    "obList": [
      {
        "name": "稲尾和久",
        "stars": 366,
        "pos": "投",
        "highSchool": "高校",
        "year": 1953,
        "special": "鉄腕",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "城島健司(DLC)",
        "stars": 324,
        "pos": "捕",
        "highSchool": "別府羽室台",
        "year": 1992,
        "special": "バズーカ送球",
        "isGold": true,
        "catcherGrade": "C",
        "dlc": true
      },
      {
        "name": "野村謙二郎",
        "stars": 311,
        "pos": "二",
        "highSchool": "高校",
        "year": 1982,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "内川聖一",
        "stars": 292,
        "pos": "一",
        "highSchool": "大分工",
        "year": 1998,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "源田壮亮",
        "stars": 271,
        "pos": "遊",
        "highSchool": "大分商",
        "year": 2008,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "大島康徳",
        "stars": 266,
        "pos": "外",
        "highSchool": "高校",
        "year": 1966,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "土谷鉄平",
        "stars": 260,
        "pos": "外",
        "highSchool": "高校",
        "year": 1998,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "宮崎",
    "region": "九州・沖縄",
    "starsRating": 5,
    "tier": "S",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 48,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 333,
    "highlightOB": "山本由伸(★332), 青木宣親(★333), 北別府学(★308)",
    "summary": "高校数48校の少なさで、世界の山本由伸・安打製造機青木宣親を狙える。地方大会を楽勝で突破して甲子園で育てる黄金ルート。",
    "obList": [
      {
        "name": "青木宣親",
        "stars": 333,
        "pos": "外",
        "highSchool": "日向",
        "year": 1997,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山本由伸",
        "stars": 332,
        "pos": "投",
        "highSchool": "都城",
        "year": 2014,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "北別府学",
        "stars": 308,
        "pos": "投",
        "highSchool": "都城農",
        "year": 1973,
        "special": "精密機械",
        "isGold": true,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "黒木知宏(DLC)",
        "stars": 271,
        "pos": "投",
        "highSchool": "高校",
        "year": 1989,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      },
      {
        "name": "田中幸雄",
        "stars": 261,
        "pos": "遊",
        "highSchool": "高校",
        "year": 1983,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "戸郷翔征",
        "stars": 255,
        "pos": "投",
        "highSchool": "聖心ウルスラ",
        "year": 2016,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "廣池康志郎",
        "stars": 253,
        "pos": "投",
        "highSchool": "高校",
        "year": 2018,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "西村徳文",
        "stars": 251,
        "pos": "外",
        "highSchool": "高校",
        "year": 1975,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  },
  {
    "pref": "鹿児島",
    "region": "九州・沖縄",
    "starsRating": 3,
    "tier": "B",
    "schoolCountLevel": "中 (60〜90校)",
    "schoolCountApprox": 66,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 303,
    "highlightOB": "杉内俊哉(★303), 外木場義郎(★277), 本多雄一(DLC)(★273)",
    "summary": "高校数66校。杉内俊哉(★303)などの転生OBが出現する標準的地域。",
    "obList": [
      {
        "name": "杉内俊哉",
        "stars": 303,
        "pos": "投",
        "highSchool": "鹿児島実",
        "year": 1996,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "外木場義郎",
        "stars": 277,
        "pos": "投",
        "highSchool": "高校",
        "year": 1961,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "本多雄一(DLC)",
        "stars": 273,
        "pos": "二",
        "highSchool": "鹿児島実",
        "year": 2000,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": true
      }
    ]
  },
  {
    "pref": "沖縄",
    "region": "九州・沖縄",
    "starsRating": 4,
    "tier": "A",
    "schoolCountLevel": "少 (40〜60校)",
    "schoolCountApprox": 60,
    "pitcherRate": "高",
    "hasCatcherAB": false,
    "catchersABNames": [],
    "maxOBStars": 328,
    "highlightOB": "平良海馬(★328), 宮城大弥(★316), 山川穂高(★273)",
    "summary": "平良海馬・宮城大弥の超強力現役投手陣。高校数60校で甲子園を狙いやすい。",
    "obList": [
      {
        "name": "平良海馬",
        "stars": 328,
        "pos": "投",
        "highSchool": "八重山商工",
        "year": 2015,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "宮城大弥",
        "stars": 316,
        "pos": "投",
        "highSchool": "興南",
        "year": 2017,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "山川穂高",
        "stars": 273,
        "pos": "一",
        "highSchool": "中部商",
        "year": 2007,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      },
      {
        "name": "石嶺和彦",
        "stars": 271,
        "pos": "外",
        "highSchool": "高校",
        "year": 1976,
        "special": "",
        "isGold": false,
        "catcherGrade": "",
        "dlc": false
      }
    ]
  }
];
