const lessons = [
    {
        number: 101,
        name: "Απειροστικος Λογιμος 1",
        category: [0],
        grade: null,
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
    {
        number: 151,
        name: "Συνδυαστική",
        category: [3,4],
        selected: null,
        grade: null,
    },
    {
        number: 191,
        name: "Λογιστική I",
        category: [7],
        grade: null,
    },
    {
        number: 201,
        name: "Απειροστικός Λογισμός ΙI",
        category: [0],
        grade: null,
    },
    {
        number: 221,
        name: "Γραμμική Άλγεβρα ΙI",
        category: [0],
        grade: null,
    },
    {
        number: 241,
        name: "Πιθανότητες I",
        category: [0],
        grade: null,
    },
    {
        number: 251,
        name: "Πληροφορική ΙI",
        category: [2],
        grade: null,
    },
    {
        number: 252,
        name: "Διακριτά μαθηματικά",
        category: [2, 3],
        selected: null,
        grade: null,
    },
    {
        number: 261,
        name: "Κλασική μηχανική",
        category: [6],
        grade: null,
    },
    {
        number: 262,
        name: "Εισαγωγή στην Πολιτική Οικονομία",
        category: [7],
        grade: null,
    },
    {
        number: 301,
        name: "Απειροστικός Λογισμός IΙI",
        category: [0],
        grade: null,
    },
    {
        number: 302,
        name: "Συνήθεις Διαφορικές Εξισώσεις",
        category: [0],
        grade: null,
    },
    {
        number: 331,
        name: "Γραμμική Γεωμετρία",
        category: [3],
        grade: null,
    },
    {
        number: 341,
        name: "Αριθμητική Ανάλυση I",
        category: [2],
        grade: null,
    },
    {
        number: 342,
        name: "Επιχειρησιακή Έρευνα: Μαθηματικός Προγρ/σμός",
        category: [2],
        grade: null,
    },
    {
        number: 352,
        name: "Δομές Δεδομένων",
        category: [4],
        grade: null,
    },
    {
        number: 361,
        name: "Φυσική Μετεωρολογία",
        category: [6],
        grade: null,
    },
    {
        number: 362,
        name: "Αρχές Γλωσσών Προγραμματισμού",
        category: [8],
        grade: null,
    },
    {
        number: 371,
        name: "Ιστορία Θετικών Επιστημών",
        category: [7],
        grade: null,
    },
    {
        number: 372,
        name: "Καθολική Άλγεβρα",
        category: [7],
        grade: null,
    },
    {
        number: 373,
        name: "Θεωρία Γραφημάτων και Εφαρμογές",
        category: [3, 4],
        selected: null,
        grade: null,
    },
    {
        number: 391,
        name: "Μικροοικονομική Θεωρία I",
        category: [7],
        grade: null,
    },
    {
        number: 392,
        name: "Μακροοικονομική Θεωρία I",
        category: [7],
        grade: null,
    },
    {
        number: 401,
        name: "Πραγματική Ανάλυση",
        category: [0],
        grade: null,
    },
    {
        number: 411,
        name: "Μερικές Διαφορικές Εξισώσεις I",
        category: [1, 2],
        selected: null,
        grade: null,
    },
    {
        number: 412,
        name: "Αυτόματα και Τυπικές Γλώσσες",
        category: [3, 4],
        selected: null,
        grade: null,
    },
    {
        number: 413,
        name: "Θέματα Απειροστικού Λογισμού και Πραγματικής Ανάλυσης (Πραγματικές Συναρτήσεις)",
        category: [3],
        grade: null,
    },
    {
        number: 421,
        name: "Βασική Άλγεβρα",
        category: [0],
        grade: null,
    },
    {
        number: 423,
        name: "Δακτύλιοι και Πρότυπα",
        category: [1],
        grade: null,
    },
    {
        number: 431,
        name: "Προβολική Γεωμετρία",
        category: [3],
        grade: null,
    },
    {
        number: 436,
        name: "Διατεταγμένα Σώματα",
        category: [3],
        grade: null,
    },
    // {
    //     number: 437,
    //     name: "Εντοπισμός και Γεωμετρία των Ριζών των Πολυωνύμων",
    //     category: [3],
    //     grade: null,
    // },
];

const lesson2 = [{
  categories: "",
  grade: "",
  number: "101.",
  title: "Απειροστικός Λογισμός Ι"
}, {
  categories: "",
  grade: "",
  number: "109.",
  title: "Θεμέλια Μαθηματικής Ανάλυσης"
}, {
  categories: "",
  grade: "",
  number: "110.",
  title: "Θεμέλια των Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "120.",
  title: "Θεμέλια Άλγεβρας και Γεωμετρίας"
}, {
  categories: "",
  grade: "",
  number: "121.",
  title: "Γραμμική Άλγεβρα I"
}, {
  categories: "",
  grade: "",
  number: "122.",
  title: "Γεωμετρία I"
}, {
  categories: "",
  grade: "",
  number: "141.",
  title: "Πληροφορική I"
}, {
  categories: "",
  grade: "",
  number: "151.",
  title: "Συνδυαστική"
}, {
  categories: "",
  grade: "",
  number: "191.",
  title: "Λογισιστική I"
}, {
  categories: "",
  grade: "",
  number: "201.",
  title: "Απειροστικός Λογισμός IΙ"
}, {
  categories: "",
  grade: "",
  number: "221.",
  title: "Γραμμική Άλγεβρα II"
}, {
  categories: "",
  grade: "",
  number: "241.",
  title: "Πιθανότητες I"
}, {
  categories: "",
  grade: "",
  number: "251.",
  title: "Πληροφορική II"
}, {
  categories: "",
  grade: "",
  number: "252.",
  title: "Διακριτά Μαθηματικά"
}, {
  categories: "",
  grade: "",
  number: "261.",
  title: "Κλασική Μηχανική"
}, {
  categories: "",
  grade: "",
  number: "262.",
  title: "Εισαγωγή στην Πολιτική Οικονομία"
}, {
  categories: "",
  grade: "",
  number: "301.",
  title: "Απειροστικός Λογισμός IΙI"
}, {
  categories: "",
  grade: "",
  number: "302.",
  title: "Συνήθεις Διαφορικές Εξισώσεις"
}, {
  categories: "",
  grade: "",
  number: "331.",
  title: "Γραμμική Γεωμετρία"
}, {
  categories: "",
  grade: "",
  number: "341.",
  title: "Αριθμητική Ανάλυση I"
}, {
  categories: "",
  grade: "",
  number: "342.",
  title: "Επιχειρησιακή Έρευνα: Μαθηματικός Προγραμματισμός"
}, {
  categories: "",
  grade: "",
  number: "352.",
  title: "Δομές Δεδομένων"
}, {
  categories: "",
  grade: "",
  number: "361.",
  title: "Φυσική Μετεωρολογία"
}, {
  categories: "",
  grade: "",
  number: "362.",
  title: "Αρχές Γλωσσών Προγραμματισμού"
}, {
  categories: "",
  grade: "",
  number: "371.",
  title: "Ιστορία Θετικών Επιστημών"
}, {
  categories: "",
  grade: "",
  number: "372.",
  title: "Καθολική Άλγεβρα"
}, {
  categories: "",
  grade: "",
  number: "373.",
  title: "Θεωρία Γραφημάτων και Εφαρμογές"
}, {
  categories: "",
  grade: "",
  number: "391.",
  title: "Μικροοικονομική Θεωρία I"
}, {
  categories: "",
  grade: "",
  number: "392.",
  title: "Μακροοικονομική Θεωρία I"
}, {
  categories: "",
  grade: "",
  number: "401.",
  title: "Πραγματική Ανάλυση"
}, {
  categories: "",
  grade: "",
  number: "411.",
  title: "Μερικές Διαφορικές Εξισώσεις I"
}, {
  categories: "",
  grade: "",
  number: "412.",
  title: "Αυτόματα και Τυπικές Γλώσσες"
}, {
  categories: "",
  grade: "",
  number: "413.",
  title: "Θέματα Απειροστικού Λογισμού και Πραγματικής Ανάλυσης (Πραγματικές Συναρτήσεις)"
}, {
  categories: "",
  grade: "",
  number: "421.",
  title: "Βασική Άλγεβρα"
}, {
  categories: "",
  grade: "",
  number: "423.",
  title: "Δακτύλιοι και Πρότυπα"
}, {
  categories: "",
  grade: "",
  number: "431.",
  title: "Προβολική Γεωμετρία"
}, {
  categories: "",
  grade: "",
  number: "432.",
  title: "Λογισμός Πινάκων και Εφαρμογές"
}, {
  categories: "",
  grade: "",
  number: "436.",
  title: "Διατεταγμένα Σώματα"
}, {
  categories: "",
  grade: "",
  number: "437.",
  title: "Εντοπισμός και Γεωμετρία των Ριζών των Πολυωνύμων"
}, {
  categories: "",
  grade: "",
  number: "439.",
  title: "Υπολογιστική Άλγεβρα"
}, {
  categories: "",
  grade: "",
  number: "442.",
  title: "Πιθανότητες IΙ"
}, {
  categories: "",
  grade: "",
  number: "451.",
  title: "Γλώσσες Προγραμματισμού"
}, {
  categories: "",
  grade: "",
  number: "453.",
  title: "Γραφικά με Ηλεκτρονικούς Υπολογιστές"
}, {
  categories: "",
  grade: "",
  number: "461.",
  title: "Ηλεκτρομαγνητισμός"
}, {
  categories: "",
  grade: "",
  number: "462.",
  title: "Επισκόπηση των Μαθηματικών Επιστημών"
}, {
  categories: "",
  grade: "",
  number: "463.",
  title: "Υλοποίηση Συστημάτων Βάσεων Δεδομένων"
}, {
  categories: "",
  grade: "",
  number: "464.",
  title: "Θερμότητα και Κύματα"
}, {
  categories: "",
  grade: "",
  number: "491.",
  title: "Μικροοικονομική Θεωρία II"
}, {
  categories: "",
  grade: "",
  number: "492.",
  title: "Μακροοικονομική Θεωρία II"
}, {
  categories: "",
  grade: "",
  number: "493.",
  title: "Οικονομετρία"
}, {
  categories: "",
  grade: "",
  number: "495.",
  title: "Ειδική Θεωρία της Σχετικότητας"
}, {
  categories: "",
  grade: "",
  number: "496.",
  title: "Αρχαία Ελληνικά Μαθηματικά - Στοιχεία Ευκλείδη"
}, {
  categories: "",
  grade: "",
  number: "511.",
  title: "Θεωρία Μέτρου"
}, {
  categories: "",
  grade: "",
  number: "513.",
  title: "Μαθηματική Λογική"
}, {
  categories: "",
  grade: "",
  number: "514.",
  title: "Κυρτή Ανάλυση"
}, {
  categories: "",
  grade: "",
  number: "518.",
  title: "Εισαγωγή στο Σχεδιασμό και Ανάλυση Αλγορίθμων"
}, {
  categories: "",
  grade: "",
  number: "532.",
  title: "Θεωρία Αριθμών"
}, {
  categories: "",
  grade: "",
  number: "533.",
  title: "Εισαγωγή στη Θεμελίωση της Γεωμετρίας"
}, {
  categories: "",
  grade: "",
  number: "534.",
  title: "Μεταθετική Άλγεβρα και Εφαρμογές"
}, {
  categories: "",
  grade: "",
  number: "535.",
  title: "Μαθηματική Κρυπτογραφία"
}, {
  categories: "",
  grade: "",
  number: "536.",
  title: "Εισαγωγή στη Θεωρία της Διάταξης"
}, {
  categories: "",
  grade: "",
  number: "541.",
  title: "Μαθηματική Στατιστική"
}, {
  categories: "",
  grade: "",
  number: "552.",
  title: "Επιχειρησιακή Έρευνα: Στοχαστική Μοντέλα"
}, {
  categories: "",
  grade: "",
  number: "553.",
  title: "Αναλογιστικά Μαθηματικά"
}, {
  categories: "",
  grade: "",
  number: "555.",
  title: "Μπεϋζιανή Στατιστική"
}, {
  categories: "",
  grade: "",
  number: "559.",
  title: "Θεωρία Παιγνίων"
}, {
  categories: "",
  grade: "",
  number: "561.",
  title: "Μηχανική I"
}, {
  categories: "",
  grade: "",
  number: "562.",
  title: "Γενική Αστρονομία I"
}, {
  categories: "",
  grade: "",
  number: "563.",
  title: "Γραφικά II"
}, {
  categories: "",
  grade: "",
  number: "573.",
  title: "Ιστορία των Μαθηματικών από την Αρχαιότητα ως την Αναγέννηση"
}, {
  categories: "",
  grade: "",
  number: "591.",
  title: "Διδακτική Απειροστικού Λογισμού"
}, {
  categories: "",
  grade: "",
  number: "595.",
  title: "Κβαντική Μηχανική I"
}, {
  categories: "",
  grade: "",
  number: "602.",
  title: "Εισαγωγή στη Συναρτησιακή Ανάλυση"
}, {
  categories: "",
  grade: "",
  number: "605.",
  title: "Ανάλυση Fourier και Ολοκλήρωμα Lebesgue"
}, {
  categories: "",
  grade: "",
  number: "611.",
  title: "Θεωρία Συνόλων"
}, {
  categories: "",
  grade: "",
  number: "613.",
  title: "Φιλοσοφία Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "614.",
  title: "Αναδρομικές Συναρτήσεις"
}, {
  categories: "",
  grade: "",
  number: "615.",
  title: "Γεωμετρική Ανάλυση"
}, {
  categories: "",
  grade: "",
  number: "616.",
  title: "Θεωρία Προσέγγισης"
}, {
  categories: "",
  grade: "",
  number: "617.",
  title: "Υπολογιστική Επιστήμη και Τεχνολογία"
}, {
  categories: "",
  grade: "",
  number: "618.",
  title: "Υπολογιστική Πολυπλοκότητα"
}, {
  categories: "",
  grade: "",
  number: "619.",
  title: "Θέματα Οικονομικών Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "634.",
  title: "Γεωμετρία II"
}, {
  categories: "",
  grade: "",
  number: "639.",
  title: "Πεπερασμένα Σώματα και Κωδικοποίηση"
}, {
  categories: "",
  grade: "",
  number: "651.",
  title: "Στοχαστικές Ανελίξεις"
}, {
  categories: "",
  grade: "",
  number: "652.",
  title: "Συνδυαστική II"
}, {
  categories: "",
  grade: "",
  number: "653.",
  title: "Αριθμητική Ανάλυση Διαφορικών Εξισώσεων"
}, {
  categories: "",
  grade: "",
  number: "654.",
  title: "Γραμμικά Μοντέλα"
}, {
  categories: "",
  grade: "",
  number: "658.",
  title: "Μέθοδοι Εφαρμοσμένων Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "659.",
  title: "Γραμμικός και Μη Γραμμικός Προγραμματισμός"
}, {
  categories: "",
  grade: "",
  number: "661.",
  title: "Τεχνητή Νοημοσύνη"
}, {
  categories: "",
  grade: "",
  number: "662.",
  title: "Μεταγλωττιστές"
}, {
  categories: "",
  grade: "",
  number: "663.",
  title: "Υπολογιστική Γεωμετρία"
}, {
  categories: "",
  grade: "",
  number: "666.",
  title: "Γενική Αστρονομία II"
}, {
  categories: "",
  grade: "",
  number: "667.",
  title: "Δυναμική-Συνοπτική Μετεωρολογία"
}, {
  categories: "",
  grade: "",
  number: "669.",
  title: "Αλγοριθμική Επιχειρησιακή Έρευνα"
}, {
  categories: "",
  grade: "",
  number: "691.",
  title: "Διδακτική των Μαθηματικών I"
}, {
  categories: "",
  grade: "",
  number: "692.",
  title: "Διδακτική των Μαθηματικών με την Αξιοποίηση Ψηφιακών Τεχνολογιών"
}, {
  categories: "",
  grade: "",
  number: "693.",
  title: "Διδακτική της Γεωμετρίας"
}, {
  categories: "",
  grade: "",
  number: "694.",
  title: "Ιστορική Εξέλιξη του Απειροστικού Λογισμού"
}, {
  categories: "",
  grade: "",
  number: "695.",
  title: "Κβαντική Μηχανική II"
}, {
  categories: "",
  grade: "",
  number: "696.",
  title: "Διδακτική των Στοχαστικών Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "701.",
  title: "Μιγαδική Ανάλυση I"
}, {
  categories: "",
  grade: "",
  number: "711.",
  title: "Θέματα Μαθηματικής Ανάλυσης I"
}, {
  categories: "",
  grade: "",
  number: "712.",
  title: "Γραμμικοί Τελεστές"
}, {
  categories: "",
  grade: "",
  number: "713.",
  title: "Μερικές Διαφορικές Εξισώσεις II"
}, {
  categories: "",
  grade: "",
  number: "714.",
  title: "Εισαγωγή στην Τοπολογία"
}, {
  categories: "",
  grade: "",
  number: "715.",
  title: "Μαθηματική Βιολογία"
}, {
  categories: "",
  grade: "",
  number: "718.",
  title: "Θεωρία Κατανομών"
}, {
  categories: "",
  grade: "",
  number: "721.",
  title: "Εισαγωγή στη Διαφορική Γεωμετρία των Πολλαπλοτήτων"
}, {
  categories: "",
  grade: "",
  number: "731.",
  title: "Αλγεβρο-τοπολογικές Δομές"
}, {
  categories: "",
  grade: "",
  number: "732.",
  title: "Θέματα Άλγεβρας και Γεωμετρίας I"
}, {
  categories: "",
  grade: "",
  number: "733.",
  title: "Συνδυαστική Μερικώς Διατεταγμένων Συνόλων"
}, {
  categories: "",
  grade: "",
  number: "734.",
  title: "Αλγεβρική Συνδυαστική"
}, {
  categories: "",
  grade: "",
  number: "735.",
  title: "Εισαγωγή στην Αλγεβρική Θεωρία Αριθμών"
}, {
  categories: "",
  grade: "",
  number: "736.",
  title: "Ομολογική Άλγεβρα και Κατηγορίες"
}, {
  categories: "",
  grade: "",
  number: "737.",
  title: "Συμμετρίες και Αναπαραστάσεις"
}, {
  categories: "",
  grade: "",
  number: "739.",
  title: "Δυναμικά Συστήματα"
}, {
  categories: "",
  grade: "",
  number: "752.",
  title: "Αριθμητική Γραμμική Άλγεβρα"
}, {
  categories: "",
  grade: "",
  number: "753.",
  title: "Πολυμεταβλητή Ανάλυση Δεδομένων"
}, {
  categories: "",
  grade: "",
  number: "754.",
  title: "Δυναμικός Προγραμματισμός"
}, {
  categories: "",
  grade: "",
  number: "755.",
  title: "Υπολογιστική Στατιστική"
}, {
  categories: "",
  grade: "",
  number: "761.",
  title: "Κβαντική Φυσική"
}, {
  categories: "",
  grade: "",
  number: "762.",
  title: "Σήματα και Συστήματα"
}, {
  categories: "",
  grade: "",
  number: "763.",
  title: "Στατιστική Φυσική"
}, {
  categories: "",
  grade: "",
  number: "766.",
  title: "Δυναμική Αστρονομία"
}, {
  categories: "",
  grade: "",
  number: "771.",
  title: "Εισαγωγή στην Ψυχολογία - Εξελικτική Ψυχολογία"
}, {
  categories: "",
  grade: "",
  number: "772.",
  title: "Ιστορία Άλγεβρας"
}, {
  categories: "",
  grade: "",
  number: "777.",
  title: "Εισαγωγή στην Κοινωνιολογία της Εκπαίδευσης"
}, {
  categories: "",
  grade: "",
  number: "791.",
  title: "Τεκμηρίωση της Διδασκαλίας των Θεωρητικών Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "792.",
  title: "Διδακτική των Μαθηματικών II"
}, {
  categories: "",
  grade: "",
  number: "794.",
  title: "Θέματα Διδακτικής και Μεθοδολογίας των Μαθηματικών I"
}, {
  categories: "",
  grade: "",
  number: "795.",
  title: "Πρακτική Άσκηση: Διδασκαλία των Μαθηματικών σε Σχολεία της Δευτεροβάθμιας Εκπαίδευσης"
}, {
  categories: "",
  grade: "",
  number: "797.",
  title: "Ψυχολογία της Εκπαίδευσης"
}, {
  categories: "",
  grade: "",
  number: "798.",
  title: "Διδακτική της Άλγεβρας"
}, {
  categories: "",
  grade: "",
  number: "812.",
  title: "Θέματα Μαθηματικής Ανάλυσης II"
}, {
  categories: "",
  grade: "",
  number: "813.",
  title: "Μιγαδική Ανάλυση II"
}, {
  categories: "",
  grade: "",
  number: "814.",
  title: "Θεωρία Ελέγχου"
}, {
  categories: "",
  grade: "",
  number: "815.",
  title: "Αριθμητική Βελτιστοποίηση"
}, {
  categories: "",
  grade: "",
  number: "816.",
  title: "Θέματα Συναρτησιακής Ανάλυσης"
}, {
  categories: "",
  grade: "",
  number: "817.",
  title: "Εφαρμοσμένη Ανάλυση Fourier"
}, {
  categories: "",
  grade: "",
  number: "818.",
  title: "Αναλυτική Θεωρία Αριθμών"
}, {
  categories: "",
  grade: "",
  number: "821.",
  title: "Θεωρία Galois"
}, {
  categories: "",
  grade: "",
  number: "831.",
  title: "Διαφορικές Μορφές"
}, {
  categories: "",
  grade: "",
  number: "832.",
  title: "Αλγεβρική Τοπολογία"
}, {
  categories: "",
  grade: "",
  number: "833.",
  title: "Θέματα Άλγεβρας και Γεωμετρίας II"
}, {
  categories: "",
  grade: "",
  number: "834.",
  title: "Θεωρία Ομάδων"
}, {
  categories: "",
  grade: "",
  number: "835.",
  title: "Εισαγωγή στις Αλγεβρικές Καμπύλες"
}, {
  categories: "",
  grade: "",
  number: "852.",
  title: "Δειγματοληψία"
}, {
  categories: "",
  grade: "",
  number: "854.",
  title: "Θεωρία Αξιοπιστίας"
}, {
  categories: "",
  grade: "",
  number: "855.",
  title: "Εφαρμοσμένη Ανάλυση Παλινδρόμησης"
}, {
  categories: "",
  grade: "",
  number: "856.",
  title: "Στοχαστικός Λογισμός"
}, {
  categories: "",
  grade: "",
  number: "857.",
  title: "Μη-παραμετρική Στατιστική"
}, {
  categories: "",
  grade: "",
  number: "859.",
  title: "Ουρές Αναμονής"
}, {
  categories: "",
  grade: "",
  number: "861.",
  title: "Μηχανική II"
}, {
  categories: "",
  grade: "",
  number: "863.",
  title: "Εισαγωγή στο Χρηματοοικονομικό Κίνδυνο"
}, {
  categories: "",
  grade: "",
  number: "864.",
  title: "Ψηφιακή Επεξεργασία Σήματος"
}, {
  categories: "",
  grade: "",
  number: "865.",
  title: "Δυναμική των Ρευστών"
}, {
  categories: "",
  grade: "",
  number: "866.",
  title: "Γενική Θεωρία της Σχετικότητας και Κοσμολογία"
}, {
  categories: "",
  grade: "",
  number: "868.",
  title: "Ιστορία Μαθηματικής Αστρονομίας"
}, {
  categories: "",
  grade: "",
  number: "870.",
  title: "Μαθηματική Φυσική"
}, {
  categories: "",
  grade: "",
  number: "871.",
  title: "Ψυχολογία Μάθησης - Γνωστική Ψυχολογία"
}, {
  categories: "",
  grade: "",
  number: "872.",
  title: "Θεωρίες Μάθησης και Διδασκαλίας"
}, {
  categories: "",
  grade: "",
  number: "881.",
  title: "Ειδική Αγωγή"
}, {
  categories: "",
  grade: "",
  number: "882.",
  title: "Κοινωνιολογία της Γνώσης"
}, {
  categories: "",
  grade: "",
  number: "892.",
  title: "Ειδικά Θέματα Διδακτικής των Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "893.",
  title: "Στατιστική Ανάλυση Δεδομένων με Εφαρμογές στη Διδακτική των Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "894.",
  title: "Θέματα Διδακτικής και Μεθοδολογίας των Μαθηματικών II"
}, {
  categories: "",
  grade: "",
  number: "895.",
  title: "Μη-γραμμικά Δυναμικά Συστήματα"
}, {
  categories: "",
  grade: "",
  number: "896.",
  title: "Ιστορία Νεώτερων Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "897.",
  title: "Επιστημολογία και Διδακτική των Μαθηματικών"
}, {
  categories: "",
  grade: "",
  number: "898.",
  title: "Η Διδασκαλία μέσω Επίλυσης Προβλήματος - Μαθηματικοποίηση"
}];

const majors = [
    {
        title: "Θεωρητικών Μαθηματικών",
        requirements: ["=14", 6, 5, 8, 4, 2, , ]
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
// const categories = [ 
//     {
//         title: "ΥΠ",
//         numPassed: 0,
//         majorRequirements: [14, 14, 14],
//     }, 
//     {
//         title: "ΠΚΘΜ",
//         numPassed: 0,
//         majorRequirements: [6, 6, 6],
//     },
//     {
//         title: "ΠΚΕΜ",
//         numPassed: 0,
//         majorRequirements: [5, 5, 6],
//     }, 
//     {
//         title: "ΚΘΜ",
//         numPassed: 0,
//         majorRequirements: [6, 6, 6],
//     }, 
//     {
//         title: "ΚΕΜ",
//         numPassed: 0,
//         majorRequirements: [6, 6, 6],
//     }, 
//     {
//         title: "ΔΔΜ",
//         numPassed: 0,
//         majorRequirements: [6, 6, 6],
//     }, 
//     {
//         title: "ΔΦ",
//         numPassed: 0,
//         majorRequirements: [2, 2, 2],
//     },
//     {
//         title: "ΔΟΕ",
//         numPassed: 0,
//         majorRequirements: [0, 0, 0],
//     }
// ];

const categoriesLi = ["ΥΠ", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΔΔΜ", "ΔΦ", "ΔΟΕ"];


export  {lessons, majors, categoriesLi};