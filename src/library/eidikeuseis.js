//didaktiki eidikeysi first choice
//based on the info in excel MathUoa-GRADES

const didaktikiFirst = [
  {
    firstString: "τα",
    lessons: [691, 872],
    lessonsLimit: 2,
  },
  {
    firstString: "2 από τα ",
    lessons: [591, 692, 693, 694, 791, 792, 794, 795, 892, 893, 894, 898],
    lessonsLimit: 2,
  },
  {
    firstString: "2 από τα ",
    lessons: [496, 573, 613, 896, 897],
    lessonsLimit: 2,
  },
  {
    firstString: "Συνολικά 8 μαθήματα από τα ΔΔΜ",
    lessons: [],
    lessonsLimit: 8,
  },
  {
    firstString: "Επιπλέον 2 από τα",
    lessons: [[151, 251], 252, 513, 532, 533, 611, 714, 821], //array means one or the other
    lessonsLimit: 2,
  },
];

const didaktikiSecond = [
  {
    firstString: "4 από τα",
    lessons: [591, 691, 692, 693, 696, 792, 795, 798, 898],
    lessonsLimit: 4,
  },
  {
    firstString: "2 από τα",
    lessons: [496, 573, 613, 694, 897],
    lessonsLimit: 2,
  },
  {
    firstString: "2 από τα",
    lessons: [777, 871, 872, 881],
    lessonsLimit: 2,
  },
  {
    firstString: "Συνολικά 8 μαθήματα από τα ΔΔΜ",
    lessons: [],
    lessonsLimit: 8,
  },
];

const statistikiFirst = [
  {
    firstString: "τα",
    lessons: [341, 342, 442, 651, 654],
    lessonsLimit: 5,
  },
  {
    firstString: "4 από τα",
    lessons: [
      [151, 252],
      251,
      552,
      553,
      555,
      559,
      652,
      659,
      669,
      753,
      754,
      852,
      854,
      855,
      856,
      859,
    ],
    lessonsLimit: 4,
  },
  {
    firstString: "Συνολικά 9 μαθήματα από τα παραπάνω",
    lessons: [
      151, 252, 251, 552, 553, 555, 559, 652, 659, 669, 753, 754, 852, 854, 855,
      856, 859, 341, 342, 442, 651, 654,
    ],
    lessonsLimit: 9,
  },
];

const statistikiSecond = [
  {
    firstString: "τα",
    lessons: [341, 342, 442, 651, 654],
    lessonsLimit: 5,
  },
  {
    firstString: "3 από τα",
    lessons: [442, 553, 555, 559, 659, 669, 753, 754, 755, 854, 856, 857, 859],
    lessonsLimit: 3,
  },
  {
    firstString: "Συνολικά 7 μαθήματα από τα παραπάνω",
    lessons: [
      341, 342, 442, 651, 654, 442, 553, 555, 559, 659, 669, 753, 754, 755, 854,
      856, 857, 859,
    ],
    lessonsLimit: 7,
  },
];

const ipologistikaFirst = [
  {
    firstString: "τα",
    lessons: [141, 251],
    lessonsLimit: 2,
  },
  {
    firstString: "3 από τα",
    lessons: [341, 352, 451, 453, 463, 563, 616, 617, 653, 661, 752, 762, 864],
    lessonsLimit: 3,
  },
  {
    firstString: "3 από τα",
    lessons: [
      151, 252, 362, 373, 412, 439, 513, 518, 611, 614, 618, 639, 661, 662, 663,
    ],
    lessonsLimit: 3,
  },
  {
    firstString: "Συνολικά 10 μαθήματα από τα παραπάνω",
    lessons: [
      141, 251, 151, 252, 362, 373, 412, 439, 513, 518, 611, 614, 618, 639, 661,
      662, 663, 341, 352, 451, 453, 463, 563, 616, 617, 653, 661, 752, 762, 864,
    ],
    lessonsLimit: 10,
  },
];

const ipologistikaSecond = [
  {
    firstString: "τα",
    lessons: [251, 653],
    lessonsLimit: 2,
  },
  {
    firstString: "3 από τα",
    lessons: [432, 439, 453, 616, 617, 659, 663, 752, 815],
    lessonsLimit: 3,
  },
  {
    firstString: "2 από τα",
    lessons: [252, 352, 373, 513, 518, 559, 614, 618],
    lessonsLimit: 2,
  },
  {
    firstString: "Συνολικά 7 μαθήματα από τα παραπάνω",
    lessons: [
      251, 653, 252, 352, 373, 513, 518, 559, 614, 618, 432, 439, 453, 616, 617,
      659, 663, 752, 815,
    ],
    lessonsLimit: 7,
  },
];

export {
  didaktikiFirst,
  didaktikiSecond,
  statistikiFirst,
  statistikiSecond,
  ipologistikaFirst,
  ipologistikaSecond,
};
