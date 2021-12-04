//didaktiki eidikeysi first choice
//based on the info in excel MathUoa-GRADES

const didaktikiFirst = [
    {
        firstString: "τα",
        lessons: [691, 872],
        lessonsLimit: 2
    },
    {
        firstString: "2 από τα ",
        lessons: [591, 692, 693, 694, 791, 792, 794, 795, 892, 893, 894, 898],
        lessonsLimit: 2    
    },
    {
        firstString: "2 από τα ",
        lessons: [496, 573, 613, 896, 897],
        lessonsLimit: 2 
    },
    {
        firstString: "Συνολικά 8 μαθήματα από τα ΔΔΜ",
        lessons: [],
        lessonsLimit: 8
    },
    {
        firstString: "Επιπλέον 2 από τα",
        lessons: [[151, 251], 252, 513, 532, 533, 611, 714, 821], //array means one or the other 
        lessonsLimit: 2
    },
];

export default didaktikiFirst;