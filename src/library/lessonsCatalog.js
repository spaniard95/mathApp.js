const lessons = [
    {
        number: 101,
        name: "Απειροστικος Λογιμος 1",
        category: [0],
        grade: "",
    },
    {
        number: 109,
        name: "Θεμέλια Μαθηματικής Ανάλυσης",
        category: [3, 5],  //test=5
        selected: 1,
        grade: null,
    },
    {
        number: 110,
        name: "Θεμέλια των Μαθηματικών",
        category: [3, 5], //test=5
        selected: 0,
        grade: null,
    },
    {
        number: 120,
        name: "Θεμέλια Άλγεβρας και Γεωμετρίας",
        category: [3],
        grade: null,
    },
    {
        number: 121,
        name: "Γραμμική Άλγεβρα I",
        category: [0],
        grade: null,
    },
    {
        number: 122,
        name: "Γεωμετρία I",
        category: [0],
        grade: null,
    },
    {
        number: 141,
        name: "Πληροφορική I",
        category: [0],
        grade: null,
    },
];

const majors = [
    {
        title: "Θεωρητικών Μαθηματικών",
        requirements: [14, 6, 5, 8, 4, 2, , ]
    },
    {
        title: "Εφαρμοσμένων Μαθηματικών",
        requirements: [14, 6, 5, 8, 4, 2, , ]
    },
    {
        title: "Θεωρητικών και Εφαρμοσμένων",
        requirements: [14, 6, 5, 8, 4, 2, , ]
    },
];

//not used
const categories = [ 
    {
        title: "ΥΠ",
        numPassed: 0,
        majorRequirements: [14, 14, 14],
    }, 
    {
        title: "ΠΚΘΜ",
        numPassed: 0,
        majorRequirements: [6, 6, 6],
    },
    {
        title: "ΠΚΕΜ",
        numPassed: 0,
        majorRequirements: [5, 5, 6],
    }, 
    {
        title: "ΚΘΜ",
        numPassed: 0,
        majorRequirements: [6, 6, 6],
    }, 
    {
        title: "ΚΕΜ",
        numPassed: 0,
        majorRequirements: [6, 6, 6],
    }, 
    {
        title: "ΔΔΜ",
        numPassed: 0,
        majorRequirements: [6, 6, 6],
    }, 
    {
        title: "ΔΦ",
        numPassed: 0,
        majorRequirements: [2, 2, 2],
    },
    {
        title: "ΔΟΕ",
        numPassed: 0,
        majorRequirements: [0, 0, 0],
    }
];

const categoriesLi = ["ΥΠ", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΔΔΜ", "ΔΦ", "ΔΟΕ"];


export  {lessons, majors, categoriesLi};