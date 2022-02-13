const lesson = [
  {
    number: 101,
    name: "Απειροστικος Λογιμος 1",
    category: [0],
    grade: null,
  },
  {
    number: 109,
    name: "Θεμέλια Μαθηματικής Ανάλυσης",
    category: [3, 5], //test=5
    selected: 0,
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
    category: [3, 4],
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
    selected: 0,
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

const lessons = [
  {
    category: [0],
    name: "Απειροστικός Λογισμός Ι",
    number: "101",
  },
  {
    category: [3],
    name: "Θεμέλια Μαθηματικής Ανάλυσης",
    number: "109",
  },
  {
    category: [3],
    name: "Θεμέλια των Μαθηματικών",
    number: "110",
  },
  {
    category: [3],
    name: "Θεμέλια Άλγεβρας και Γεωμετρίας",
    number: "120",
  },
  {
    category: [0],
    name: "Γραμμική Άλγεβρα I",
    number: "121",
  },
  {
    category: [0],
    name: "Γεωμετρία I",
    number: "122",
  },
  {
    category: [0],
    name: "Πληροφορική I",
    number: "141",
  },
  {
    category: [3, 4],
    name: "Συνδυαστική",
    number: "151",
    selected: 0,
  },
  {
    category: [7],
    name: "Λογισιστική I",
    number: "191",
  },
  {
    category: [0],
    name: "Απειροστικός Λογισμός IΙ",
    number: "201",
  },
  {
    category: [0],
    name: "Γραμμική Άλγεβρα II",
    number: "221",
  },
  {
    category: [0],
    name: "Πιθανότητες I",
    number: "241",
  },
  {
    category: [2],
    name: "Πληροφορική II",
    number: "251",
  },
  {
    category: [2, 3],
    name: "Διακριτά Μαθηματικά",
    number: "252",
    selected: 0,
  },
  {
    category: [6],
    name: "Κλασική Μηχανική",
    number: "261",
  },
  {
    category: [7],
    name: "Εισαγωγή στην Πολιτική Οικονομία",
    number: "262",
  },
  {
    category: [0],
    name: "Απειροστικός Λογισμός IΙI",
    number: "301",
  },
  {
    category: [0],
    name: "Συνήθεις Διαφορικές Εξισώσεις",
    number: "302",
  },
  {
    category: [3],
    name: "Γραμμική Γεωμετρία",
    number: "331",
  },
  {
    category: [2],
    name: "Αριθμητική Ανάλυση I",
    number: "341",
  },
  {
    category: [2],
    name: "Επιχειρησιακή Έρευνα: Μαθηματικός Προγραμματισμός",
    number: "342",
  },
  {
    category: [4],
    name: "Δομές Δεδομένων",
    number: "352",
  },
  {
    category: [6],
    name: "Φυσική Μετεωρολογία",
    number: "361",
  },
  {
    category: [8],
    name: "Αρχές Γλωσσών Προγραμματισμού",
    number: "362",
  },
  {
    category: [7],
    name: "Ιστορία Θετικών Επιστημών",
    number: "371",
  },
  {
    category: [7],
    name: "Καθολική Άλγεβρα",
    number: "372",
  },
  {
    category: [3, 4],
    name: "Θεωρία Γραφημάτων και Εφαρμογές",
    number: "373",
    selected: 0,
  },
  {
    category: [7],
    name: "Μικροοικονομική Θεωρία I",
    number: "391",
  },
  {
    category: [7],
    name: "Μακροοικονομική Θεωρία I",
    number: "392",
  },
  {
    category: [0],
    name: "Πραγματική Ανάλυση",
    number: "401",
  },
  {
    category: [1, 2],
    name: "Μερικές Διαφορικές Εξισώσεις I",
    number: "411",
    selected: 0,
  },
  {
    category: [3, 4],
    name: "Αυτόματα και Τυπικές Γλώσσες",
    number: "412",
    selected: 0,
  },
  {
    category: [3],
    name: "Θέματα Απειροστικού Λογισμού και Πραγματικής Ανάλυσης (Πραγματικές Συναρτήσεις)",
    number: "413",
  },
  {
    category: [0],
    name: "Βασική Άλγεβρα",
    number: "421",
  },
  {
    category: [1],
    name: "Δακτύλιοι και Πρότυπα",
    number: "423",
  },
  {
    category: [3],
    name: "Προβολική Γεωμετρία",
    number: "431",
  },
  {
    category: [4],
    name: "Λογισμός Πινάκων και Εφαρμογές",
    number: "432",
  },
  {
    category: [3],
    name: "Διατεταγμένα Σώματα",
    number: "436",
  },
  {
    category: [3],
    name: "Εντοπισμός και Γεωμετρία των Ριζών των Πολυωνύμων",
    number: "437",
  },
  {
    category: [3, 4],
    name: "Υπολογιστική Άλγεβρα",
    number: "439",
    selected: 0,
  },
  {
    category: [2],
    name: "Πιθανότητες IΙ",
    number: "442",
  },
  {
    category: [4],
    name: "Γλώσσες Προγραμματισμού",
    number: "451",
  },
  {
    category: [4],
    name: "Γραφικά με Ηλεκτρονικούς Υπολογιστές",
    number: "453",
  },
  {
    category: [6],
    name: "Ηλεκτρομαγνητισμός",
    number: "461",
  },
  {
    category: [5],
    name: "Επισκόπηση των Μαθηματικών Επιστημών",
    number: "462",
  },
  {
    category: [8],
    name: "Υλοποίηση Συστημάτων Βάσεων Δεδομένων",
    number: "463",
  },
  {
    category: [6],
    name: "Θερμότητα και Κύματα",
    number: "464",
  },
  {
    category: [7],
    name: "Μικροοικονομική Θεωρία II",
    number: "491",
  },
  {
    category: [7],
    name: "Μακροοικονομική Θεωρία II",
    number: "492",
  },
  {
    category: [7],
    name: "Οικονομετρία",
    number: "493",
  },
  {
    category: [6],
    name: "Ειδική Θεωρία της Σχετικότητας",
    number: "495",
  },
  {
    category: [5],
    name: "Αρχαία Ελληνικά Μαθηματικά - Στοιχεία Ευκλείδη",
    number: "496",
  },
  {
    category: [1],
    name: "Θεωρία Μέτρου",
    number: "511",
  },
  {
    category: [1, 2],
    name: "Μαθηματική Λογική",
    number: "513",
    selected: 0,
  },
  {
    category: [3],
    name: "Κυρτή Ανάλυση",
    number: "514",
  },
  {
    category: [3, 4],
    name: "Εισαγωγή στο Σχεδιασμό και Ανάλυση Αλγορίθμων",
    number: "518",
    selected: 0,
  },
  {
    category: [1],
    name: "Θεωρία Αριθμών",
    number: "532",
  },
  {
    category: [1],
    name: "Εισαγωγή στη Θεμελίωση της Γεωμετρίας",
    number: "533",
  },
  {
    category: [3],
    name: "Μεταθετική Άλγεβρα και Εφαρμογές",
    number: "534",
  },
  {
    category: [3, 4],
    name: "Μαθηματική Κρυπτογραφία",
    number: "535",
    selected: 0,
  },
  {
    category: [3],
    name: "Εισαγωγή στη Θεωρία της Διάταξης",
    number: "536",
  },
  {
    category: [0],
    name: "Μαθηματική Στατιστική",
    number: "541",
  },
  {
    category: [2],
    name: "Επιχειρησιακή Έρευνα: Στοχαστική Μοντέλα",
    number: "552",
  },
  {
    category: [4],
    name: "Αναλογιστικά Μαθηματικά",
    number: "553",
  },
  {
    category: [4],
    name: "Μπεϋζιανή Στατιστική",
    number: "555",
  },
  {
    category: [2],
    name: "Θεωρία Παιγνίων",
    number: "559",
  },
  {
    category: [6],
    name: "Μηχανική I",
    number: "561",
  },
  {
    category: [6],
    name: "Γενική Αστρονομία I",
    number: "562",
  },
  {
    category: [8],
    name: "Γραφικά II",
    number: "563",
  },
  {
    category: [5],
    name: "Ιστορία των Μαθηματικών από την Αρχαιότητα ως την Αναγέννηση",
    number: "573",
  },
  {
    category: [5],
    name: "Διδακτική Απειροστικού Λογισμού",
    number: "591",
  },
  {
    category: [6],
    name: "Κβαντική Μηχανική I",
    number: "595",
  },
  {
    category: [1],
    name: "Εισαγωγή στη Συναρτησιακή Ανάλυση",
    number: "602",
  },
  {
    category: [1, 2],
    name: "Ανάλυση Fourier και Ολοκλήρωμα Lebesgue",
    number: "605",
    selected: 0,
  },
  {
    category: [3],
    name: "Θεωρία Συνόλων",
    number: "611",
  },
  {
    category: [5],
    name: "Φιλοσοφία Μαθηματικών",
    number: "613",
  },
  {
    category: [3, 4],
    name: "Αναδρομικές Συναρτήσεις",
    number: "614",
    selected: 0,
  },
  {
    category: [3],
    name: "Γεωμετρική Ανάλυση",
    number: "615",
  },
  {
    category: [3, 4],
    name: "Θεωρία Προσέγγισης",
    number: "616",
    selected: 0,
  },
  {
    category: [4],
    name: "Υπολογιστική Επιστήμη και Τεχνολογία",
    number: "617",
  },
  {
    category: [3, 4],
    name: "Υπολογιστική Πολυπλοκότητα",
    number: "618",
    selected: 0,
  },
  {
    category: [7],
    name: "Θέματα Οικονομικών Μαθηματικών",
    number: "619",
  },
  {
    category: [0],
    name: "Γεωμετρία II",
    number: "634",
  },
  {
    category: [3, 4],
    name: "Πεπερασμένα Σώματα και Κωδικοποίηση",
    number: "639",
    selected: 0,
  },
  {
    category: [2],
    name: "Στοχαστικές Ανελίξεις",
    number: "651",
  },
  {
    category: [4],
    name: "Συνδυαστική II",
    number: "652",
  },
  {
    category: [4],
    name: "Αριθμητική Ανάλυση Διαφορικών Εξισώσεων",
    number: "653",
  },
  {
    category: [2],
    name: "Γραμμικά Μοντέλα",
    number: "654",
  },
  {
    category: [3, 4],
    name: "Μέθοδοι Εφαρμοσμένων Μαθηματικών",
    number: "658",
    selected: 0,
  },
  {
    category: [4],
    name: "Γραμμικός και Μη Γραμμικός Προγραμματισμός",
    number: "659",
  },
  {
    category: [8],
    name: "Τεχνητή Νοημοσύνη",
    number: "661",
  },
  {
    category: [8],
    name: "Μεταγλωττιστές",
    number: "662",
  },
  {
    category: [8],
    name: "Υπολογιστική Γεωμετρία",
    number: "663",
  },
  {
    category: [6],
    name: "Γενική Αστρονομία II",
    number: "666",
  },
  {
    category: [6],
    name: "Δυναμική-Συνοπτική Μετεωρολογία",
    number: "667",
  },
  {
    category: [4],
    name: "Αλγοριθμική Επιχειρησιακή Έρευνα",
    number: "669",
  },
  {
    category: [5],
    name: "Διδακτική των Μαθηματικών I",
    number: "691",
  },
  {
    category: [5],
    name: "Διδακτική των Μαθηματικών με την Αξιοποίηση Ψηφιακών Τεχνολογιών",
    number: "692",
  },
  {
    category: [5],
    name: "Διδακτική της Γεωμετρίας",
    number: "693",
  },
  {
    category: [5],
    name: "Ιστορική Εξέλιξη του Απειροστικού Λογισμού",
    number: "694",
  },
  {
    category: [6],
    name: "Κβαντική Μηχανική II",
    number: "695",
  },
  {
    category: [5],
    name: "Διδακτική των Στοχαστικών Μαθηματικών",
    number: "696",
  },
  {
    category: [0],
    name: "Μιγαδική Ανάλυση I",
    number: "701",
  },
  {
    category: [3],
    name: "Θέματα Μαθηματικής Ανάλυσης I",
    number: "711",
  },
  {
    category: [3],
    name: "Γραμμικοί Τελεστές",
    number: "712",
  },
  {
    category: [1, 4],
    name: "Μερικές Διαφορικές Εξισώσεις II",
    number: "713",
    selected: 0,
  },
  {
    category: [1],
    name: "Εισαγωγή στην Τοπολογία",
    number: "714",
  },
  {
    category: [3, 4],
    name: "Μαθηματική Βιολογία",
    number: "715",
    selected: 0,
  },
  {
    category: [3, 4],
    name: "Θεωρία Κατανομών",
    number: "718",
    selected: 0,
  },
  {
    category: [1],
    name: "Εισαγωγή στη Διαφορική Γεωμετρία των Πολλαπλοτήτων",
    number: "721",
  },
  {
    category: [3],
    name: "Αλγεβρο-τοπολογικές Δομές",
    number: "731",
  },
  {
    category: [3],
    name: "Θέματα Άλγεβρας και Γεωμετρίας I",
    number: "732",
  },
  {
    category: [3, 4],
    name: "Συνδυαστική Μερικώς Διατεταγμένων Συνόλων",
    number: "733",
    selected: 0,
  },
  {
    category: [3, 4],
    name: "Αλγεβρική Συνδυαστική",
    number: "734",
    selected: 0,
  },
  {
    category: [3],
    name: "Εισαγωγή στην Αλγεβρική Θεωρία Αριθμών",
    number: "735",
  },
  {
    category: [3],
    name: "Ομολογική Άλγεβρα και Κατηγορίες",
    number: "736",
  },
  {
    category: [3],
    name: "Συμμετρίες και Αναπαραστάσεις",
    number: "737",
  },
  {
    category: [2, 3],
    name: "Δυναμικά Συστήματα",
    number: "739",
    selected: 0,
  },
  {
    category: [4],
    name: "Αριθμητική Γραμμική Άλγεβρα",
    number: "752",
  },
  {
    category: [4],
    name: "Πολυμεταβλητή Ανάλυση Δεδομένων",
    number: "753",
  },
  {
    category: [4],
    name: "Δυναμικός Προγραμματισμός",
    number: "754",
  },
  {
    category: [4],
    name: "Υπολογιστική Στατιστική",
    number: "755",
  },
  {
    category: [6],
    name: "Κβαντική Φυσική",
    number: "761",
  },
  {
    category: [8],
    name: "Σήματα και Συστήματα",
    number: "762",
  },
  {
    category: [6],
    name: "Στατιστική Φυσική",
    number: "763",
  },
  {
    category: [6],
    name: "Δυναμική Αστρονομία",
    number: "766",
  },
  {
    category: [5],
    name: "Εισαγωγή στην Ψυχολογία - Εξελικτική Ψυχολογία",
    number: "771",
  },
  {
    category: [5],
    name: "Ιστορία Άλγεβρας",
    number: "772",
  },
  {
    category: [5],
    name: "Εισαγωγή στην Κοινωνιολογία της Εκπαίδευσης",
    number: "777",
  },
  {
    category: [5],
    name: "Τεκμηρίωση της Διδασκαλίας των Θεωρητικών Μαθηματικών",
    number: "791",
  },
  {
    category: [5],
    name: "Διδακτική των Μαθηματικών II",
    number: "792",
  },
  {
    category: [5],
    name: "Θέματα Διδακτικής και Μεθοδολογίας των Μαθηματικών I",
    number: "794",
  },
  {
    category: [5],
    name: "Πρακτική Άσκηση: Διδασκαλία των Μαθηματικών σε Σχολεία της Δευτεροβάθμιας Εκπαίδευσης",
    number: "795",
  },
  {
    category: [5],
    name: "Ψυχολογία της Εκπαίδευσης",
    number: "797",
  },
  {
    category: [5],
    name: "Διδακτική της Άλγεβρας",
    number: "798",
  },
  {
    category: [3],
    name: "Θέματα Μαθηματικής Ανάλυσης II",
    number: "812",
  },
  {
    category: [3],
    name: "Μιγαδική Ανάλυση II",
    number: "813",
  },
  {
    category: [3, 4],
    name: "Θεωρία Ελέγχου",
    number: "814",
    selected: 0,
  },
  {
    category: [4],
    name: "Αριθμητική Βελτιστοποίηση",
    number: "815",
  },
  {
    category: [3],
    name: "Θέματα Συναρτησιακής Ανάλυσης",
    number: "816",
  },
  {
    category: [4],
    name: "Εφαρμοσμένη Ανάλυση Fourier",
    number: "817",
  },
  {
    category: [3],
    name: "Αναλυτική Θεωρία Αριθμών",
    number: "818",
  },
  {
    category: [1],
    name: "Θεωρία Galois",
    number: "821",
  },
  {
    category: [3],
    name: "Διαφορικές Μορφές",
    number: "831",
  },
  {
    category: [1],
    name: "Αλγεβρική Τοπολογία",
    number: "832",
  },
  {
    category: [3],
    name: "Θέματα Άλγεβρας και Γεωμετρίας II",
    number: "833",
  },
  {
    category: [1],
    name: "Θεωρία Ομάδων",
    number: "834",
  },
  {
    category: [3],
    name: "Εισαγωγή στις Αλγεβρικές Καμπύλες",
    number: "835",
  },
  {
    category: [2],
    name: "Δειγματοληψία",
    number: "852",
  },
  {
    category: [4],
    name: "Θεωρία Αξιοπιστίας",
    number: "854",
  },
  {
    category: [4],
    name: "Εφαρμοσμένη Ανάλυση Παλινδρόμησης",
    number: "855",
  },
  {
    category: [2, 3],
    name: "Στοχαστικός Λογισμός",
    number: "856",
    selected: 0,
  },
  {
    category: [4],
    name: "Μη-παραμετρική Στατιστική",
    number: "857",
  },
  {
    category: [4],
    name: "Ουρές Αναμονής",
    number: "859",
  },
  {
    category: [6],
    name: "Μηχανική II",
    number: "861",
  },
  {
    category: [7],
    name: "Εισαγωγή στο Χρηματοοικονομικό Κίνδυνο",
    number: "863",
  },
  {
    category: [8],
    name: "Ψηφιακή Επεξεργασία Σήματος",
    number: "864",
  },
  {
    category: [6],
    name: "Δυναμική των Ρευστών",
    number: "865",
  },
  {
    category: [6],
    name: "Γενική Θεωρία της Σχετικότητας και Κοσμολογία",
    number: "866",
  },
  {
    category: [6],
    name: "Ιστορία Μαθηματικής Αστρονομίας",
    number: "868",
  },
  {
    category: [3],
    name: "Μαθηματική Φυσική",
    number: "870",
  },
  {
    category: [5],
    name: "Ψυχολογία Μάθησης - Γνωστική Ψυχολογία",
    number: "871",
  },
  {
    category: [5],
    name: "Θεωρίες Μάθησης και Διδασκαλίας",
    number: "872",
  },
  {
    category: [5],
    name: "Ειδική Αγωγή",
    number: "881",
  },
  {
    category: [5],
    name: "Κοινωνιολογία της Γνώσης",
    number: "882",
  },
  {
    category: [5],
    name: "Ειδικά Θέματα Διδακτικής των Μαθηματικών",
    number: "892",
  },
  {
    category: [5],
    name: "Στατιστική Ανάλυση Δεδομένων με Εφαρμογές στη Διδακτική των Μαθηματικών",
    number: "893",
  },
  {
    category: [5],
    name: "Θέματα Διδακτικής και Μεθοδολογίας των Μαθηματικών II",
    number: "894",
  },
  {
    category: [6],
    name: "Μη-γραμμικά Δυναμικά Συστήματα",
    number: "895",
  },
  {
    category: [5],
    name: "Ιστορία Νεώτερων Μαθηματικών",
    number: "896",
  },
  {
    category: [5],
    name: "Επιστημολογία και Διδακτική των Μαθηματικών",
    number: "897",
  },
  {
    category: [5],
    name: "Η Διδασκαλία μέσω Επίλυσης Προβλήματος - Μαθηματικοποίηση",
    number: "898",
  },
];

const majors = [
  {
    title: "Θεωρητικών Μαθηματικών",
    requirementsStrings: [14, 6, 5, 5, 4, 2],
    requirements: [14, 6, 5, 5, 4, 2],
  },
  {
    title: "Εφαρμοσμένων Μαθηματικών",
    requirements: [14, 6, 5, 8, 4, 2],
    requirementsStrings: [14, 6, 5, 8, 4, 2],
  },
  {
    title: "Θεωρητικών και Εφαρμοσμένων",
    requirements: [14, 6, 5, 8, 4, 2, 0, 0],
    requirementsStrings: ["=14", 6, 5, 8, 4, 1],
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

const categoriesLi = [
  "ΥΠ",
  "ΠΚΘΜ",
  "ΠΚΕΜ",
  "ΚΘΜ",
  "ΚΕΜ",
  "ΔΔΜ",
  "ΔΦ",
  "ΔΟΕ",
  "ΔΠΤ",
];

export { lessons, majors, categoriesLi };
