// مولّد أوتوماتيكيًا — جمل ضمير NOI من درس Parla Italiano
const LESSON_NOI = [
 {
  "it": "Noi siamo usciti di casa mentre parlavamo al telefono",
  "ar": "احنا خرجنا من البيت وكنا بنتكلم في التيليفون.",
  "en": "We left home while we were talking on the phone.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "siamo",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "usciti",
    "ar": "خرجنا",
    "note": "Uscire، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Uscire",
    "group": "ire",
    "regular": false,
    "aux": "essere",
    "tense": "passato",
    "transitive": false,
    "quiz": [
     {
      "q": "الفعل \"Uscire\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"usciti\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 1
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Uscire\" في الماضي إيه؟",
      "options": [
       "avere",
       "essere"
      ],
      "correct": 1
     }
    ],
    "transitivity": "intransitive",
    "transitivityNote": "بيحتاج حرف جر (غالباً a أو di) عشان يوصل للمفعول"
   },
   {
    "it": "di casa",
    "ar": "من البيت",
    "note": null,
    "type": "sintagma_prep",
    "prep": "di",
    "prepNote": "بيدل على ملكية أو أصل أو موضوع (بتاع / من / عن) — مفيش أداة تعريف هنا لأن الاسم بيعبّر عن مفهوم عام مش حاجة محددة",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"di casa\"؟ الأصل إيه؟",
      "options": [
       "in",
       "da",
       "su",
       "di"
      ],
      "correct": 3
     }
    ]
   },
   {
    "it": "mentre",
    "ar": "وكنا",
    "note": null,
    "type": "congiunzione",
    "meaning": "بينما / في نفس الوقت اللي",
    "grammarId": "mentre",
    "quiz": [
     {
      "q": "\"mentre\" بمعنى إيه هنا؟",
      "options": [
       "لكن",
       "عشان",
       "بينما / في نفس الوقت اللي",
       "لما / عندما"
      ],
      "correct": 2
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "parlavamo",
    "ar": "بنتكلم",
    "note": "Parlare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Parlare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Parlare\" منتمي لأي مجموعة؟",
      "options": [
       "شاذ",
       "-are",
       "-ere",
       "-ire"
      ],
      "correct": 1
     },
     {
      "q": "الزمن اللي اتصرف بيه \"parlavamo\" إيه؟",
      "options": [
       "Imperativo",
       "Presente",
       "Passato Prossimo",
       "Imperfetto"
      ],
      "correct": 3
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "al telefono",
    "ar": "في التيليفون",
    "note": null,
    "type": "sintagma_prep",
    "prep": "a",
    "prepNote": "بيدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق)",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"al telefono\"؟ الأصل إيه؟",
      "options": [
       "a",
       "con",
       "per",
       "tra"
      ],
      "correct": 0
     }
    ]
   }
  ],
  "conj": {
   "verb": "Uscire",
   "tense": "Passato Prossimo",
   "regular": false,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Sono uscito/a"
    },
    {
     "person": "Tu (أنت)",
     "form": "Sei uscito/a"
    },
    {
     "person": "Lui (هو)",
     "form": "È uscito"
    },
    {
     "person": "Lei (هي)",
     "form": "È uscita"
    },
    {
     "person": "Noi (احنا)",
     "form": "Siamo usciti/e"
    },
    {
     "person": "Voi (انتم)",
     "form": "Siete usciti/e"
    },
    {
     "person": "Loro (هم)",
     "form": "Sono usciti/e"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "usciti",
    "q": "الفعل \"usciti\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 2
   },
   {
    "wordIt": "usciti",
    "q": "الزمن اللي اتصرف فيه \"usciti\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "usciti",
    "q": "الفعل المساعد اللي بيجي مع \"Uscire\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 2
   },
   {
    "wordIt": "di casa",
    "q": "ليه استخدمنا حرف الجر في \"di casa\"؟ الأصل إيه؟",
    "options": [
     "di",
     "a",
     "in",
     "da"
    ],
    "correct": 0
   },
   {
    "wordIt": "mentre",
    "q": "\"mentre\" بمعنى إيه هنا؟",
    "options": [
     "لكن",
     "عشان",
     "ولو",
     "بينما / في نفس الوقت اللي"
    ],
    "correct": 3
   },
   {
    "wordIt": "parlavamo",
    "q": "الفعل \"parlavamo\" — منتمي لأي مجموعة؟",
    "options": [
     "-ire",
     "شاذ",
     "-are",
     "-ere"
    ],
    "correct": 2
   },
   {
    "wordIt": "parlavamo",
    "q": "الزمن اللي اتصرف فيه \"parlavamo\" إيه؟",
    "options": [
     "Imperativo",
     "Presente",
     "Passato Prossimo",
     "Imperfetto"
    ],
    "correct": 3
   },
   {
    "wordIt": "al telefono",
    "q": "ليه استخدمنا حرف الجر في \"al telefono\"؟ الأصل إيه؟",
    "options": [
     "a",
     "con",
     "per",
     "tra"
    ],
    "correct": 0
   }
  ]
 },
 {
  "it": "Noi parlavamo di lavoro quando è uscito il direttore dall'ufficio",
  "ar": "احنا كنا بنتكلم عن الشغل لما المدير خرج من المكتب.",
  "en": "We were talking about work when the manager left the office.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "parlavamo",
    "ar": "كنا بنتكلم",
    "note": "Parlare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Parlare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Parlare\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"parlavamo\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 1
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "di lavoro",
    "ar": "عن الشغل",
    "note": null,
    "type": "sintagma_prep",
    "prep": "di",
    "prepNote": "بيدل على ملكية أو أصل أو موضوع (بتاع / من / عن) — مفيش أداة تعريف هنا لأن الاسم بيعبّر عن مفهوم عام مش حاجة محددة",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"di lavoro\"؟ الأصل إيه؟",
      "options": [
       "fra",
       "a",
       "di",
       "tra"
      ],
      "correct": 2
     }
    ]
   },
   {
    "it": "quando",
    "ar": "لما",
    "note": null,
    "type": "congiunzione",
    "meaning": "لما / عندما",
    "grammarId": "interrogativi",
    "quiz": [
     {
      "q": "\"quando\" بمعنى إيه هنا؟",
      "options": [
       "عشان",
       "لما / عندما",
       "بينما / في نفس الوقت اللي",
       "لكن"
      ],
      "correct": 1
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "è",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "uscito",
    "ar": "خرج",
    "note": "Uscire، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Uscire",
    "group": "ire",
    "regular": false,
    "aux": "essere",
    "tense": "passato",
    "transitive": false,
    "quiz": [
     {
      "q": "الفعل \"Uscire\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"uscito\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 1
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Uscire\" في الماضي إيه؟",
      "options": [
       "avere",
       "essere"
      ],
      "correct": 1
     }
    ],
    "transitivity": "intransitive",
    "transitivityNote": "بيحتاج حرف جر (غالباً a أو di) عشان يوصل للمفعول"
   },
   {
    "it": "il direttore",
    "ar": "المدير",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i direttori",
    "quiz": [
     {
      "q": "جنس \"il direttore\" إيه؟",
      "options": [
       "مؤنث",
       "جمع",
       "محايد",
       "مذكر"
      ],
      "correct": 3
     }
    ],
    "nounIt": "direttore",
    "relatedWords": []
   },
   {
    "it": "dall'",
    "ar": "من الـ",
    "note": null,
    "type": "sintagma_prep",
    "prep": "da",
    "prepNote": "بيدل على مصدر الحركة أو مكان (من / عند) — مفيش أداة تعريف هنا لأن الاسم بيعبّر عن مفهوم عام مش حاجة محددة",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"dall'\"؟ الأصل إيه؟",
      "options": [
       "su",
       "con",
       "da",
       "di"
      ],
      "correct": 2
     }
    ]
   },
   {
    "it": "ufficio",
    "ar": "المكتب",
    "note": null,
    "type": "aggettivo",
    "invariant": false,
    "forms": {
     "ms": "ufficio",
     "fs": "ufficia",
     "mp": "ufficii",
     "fp": "ufficie"
    },
    "quiz": [
     {
      "q": "\"ufficio\" هنا بيشتغل كـ إيه في الجملة؟",
      "options": [
       "حرف جر",
       "فعل",
       "اسم",
       "صفة/ظرف"
      ],
      "correct": 3
     }
    ],
    "usage": "بيجي بعد الاسم كصفة، وبيتغيّر حسب جنس وعدد الاسم اللي بتوصفه"
   }
  ],
  "conj": {
   "verb": "Uscire",
   "tense": "Passato Prossimo",
   "regular": false,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Sono uscito/a"
    },
    {
     "person": "Tu (أنت)",
     "form": "Sei uscito/a"
    },
    {
     "person": "Lui (هو)",
     "form": "È uscito"
    },
    {
     "person": "Lei (هي)",
     "form": "È uscita"
    },
    {
     "person": "Noi (احنا)",
     "form": "Siamo usciti/e"
    },
    {
     "person": "Voi (انتم)",
     "form": "Siete usciti/e"
    },
    {
     "person": "Loro (هم)",
     "form": "Sono usciti/e"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "parlavamo",
    "q": "الفعل \"parlavamo\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "parlavamo",
    "q": "الزمن اللي اتصرف فيه \"parlavamo\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 0
   },
   {
    "wordIt": "di lavoro",
    "q": "ليه استخدمنا حرف الجر في \"di lavoro\"؟ الأصل إيه؟",
    "options": [
     "in",
     "di",
     "fra",
     "a"
    ],
    "correct": 1
   },
   {
    "wordIt": "quando",
    "q": "\"quando\" بمعنى إيه هنا؟",
    "options": [
     "لما / عندما",
     "لكن",
     "عشان",
     "ولو"
    ],
    "correct": 0
   },
   {
    "wordIt": "uscito",
    "q": "الفعل \"uscito\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 2
   },
   {
    "wordIt": "uscito",
    "q": "الزمن اللي اتصرف فيه \"uscito\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "uscito",
    "q": "الفعل المساعد اللي بيجي مع \"Uscire\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 2
   },
   {
    "wordIt": "il direttore",
    "q": "جنس \"il direttore\" إيه؟",
    "options": [
     "مذكر",
     "مؤنث",
     "جمع",
     "محايد"
    ],
    "correct": 0
   },
   {
    "wordIt": "dall'",
    "q": "ليه استخدمنا حرف الجر في \"dall'\"؟ الأصل إيه؟",
    "options": [
     "per",
     "tra",
     "fra",
     "da"
    ],
    "correct": 3
   },
   {
    "wordIt": "ufficio",
    "q": "\"ufficio\" هنا بيشتغل كـ إيه في الجملة؟",
    "options": [
     "صفة/ظرف",
     "حرف جر",
     "فعل",
     "اسم"
    ],
    "correct": 0
   }
  ]
 },
 {
  "it": "Noi siamo andati in ufficio mentre lavoravano gli altri da casa",
  "ar": "احنا رحنا المكتب والباقيين كانوا شغالين من البيت.",
  "en": "We went to the office while the others were working from home.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "siamo",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "andati",
    "ar": "رحنا",
    "note": "Andare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Andare",
    "group": "are",
    "regular": false,
    "aux": "essere",
    "tense": "passato",
    "transitive": false,
    "quiz": [
     {
      "q": "الفعل \"Andare\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"andati\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 1
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Andare\" في الماضي إيه؟",
      "options": [
       "avere",
       "essere"
      ],
      "correct": 1
     }
    ],
    "transitivity": "intransitive",
    "transitivityNote": "بيحتاج حرف جر (غالباً a أو di) عشان يوصل للمفعول"
   },
   {
    "it": "in",
    "ar": "",
    "note": null,
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "ufficio",
    "ar": "المكتب",
    "note": null,
    "type": "aggettivo",
    "invariant": false,
    "forms": {
     "ms": "ufficio",
     "fs": "ufficia",
     "mp": "ufficii",
     "fp": "ufficie"
    },
    "quiz": [
     {
      "q": "\"ufficio\" هنا بيشتغل كـ إيه في الجملة؟",
      "options": [
       "اسم",
       "صفة/ظرف",
       "حرف جر",
       "فعل"
      ],
      "correct": 1
     }
    ],
    "usage": "بيجي بعد الاسم كصفة، وبيتغيّر حسب جنس وعدد الاسم اللي بتوصفه"
   },
   {
    "it": "mentre",
    "ar": "والباقيين",
    "note": null,
    "type": "congiunzione",
    "meaning": "بينما / في نفس الوقت اللي",
    "grammarId": "mentre",
    "quiz": [
     {
      "q": "\"mentre\" بمعنى إيه هنا؟",
      "options": [
       "لكن",
       "عشان",
       "بينما / في نفس الوقت اللي",
       "لما / عندما"
      ],
      "correct": 2
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "lavoravano",
    "ar": "كانوا شغالين",
    "note": "Lavorare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Lavorare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Lavorare\" منتمي لأي مجموعة؟",
      "options": [
       "شاذ",
       "-are",
       "-ere",
       "-ire"
      ],
      "correct": 1
     },
     {
      "q": "الزمن اللي اتصرف بيه \"lavoravano\" إيه؟",
      "options": [
       "Imperativo",
       "Presente",
       "Passato Prossimo",
       "Imperfetto"
      ],
      "correct": 3
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "gli altri",
    "ar": "",
    "note": null,
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "da casa",
    "ar": "من البيت",
    "note": null,
    "type": "sintagma_prep",
    "prep": "da",
    "prepNote": "بيدل على مصدر الحركة أو مكان (من / عند) — مفيش أداة تعريف هنا لأن الاسم بيعبّر عن مفهوم عام مش حاجة محددة",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"da casa\"؟ الأصل إيه؟",
      "options": [
       "da",
       "a",
       "in",
       "di"
      ],
      "correct": 0
     }
    ]
   }
  ],
  "conj": {
   "verb": "Andare",
   "tense": "Passato Prossimo",
   "regular": false,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Sono andato/a"
    },
    {
     "person": "Tu (أنت)",
     "form": "Sei andato/a"
    },
    {
     "person": "Lui (هو)",
     "form": "È andato"
    },
    {
     "person": "Lei (هي)",
     "form": "È andata"
    },
    {
     "person": "Noi (احنا)",
     "form": "Siamo andati/e"
    },
    {
     "person": "Voi (انتم)",
     "form": "Siete andati/e"
    },
    {
     "person": "Loro (هم)",
     "form": "Sono andati/e"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "andati",
    "q": "الفعل \"andati\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 0
   },
   {
    "wordIt": "andati",
    "q": "الزمن اللي اتصرف فيه \"andati\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 1
   },
   {
    "wordIt": "andati",
    "q": "الفعل المساعد اللي بيجي مع \"Andare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "essere",
     "ho",
     "sono",
     "avere"
    ],
    "correct": 0
   },
   {
    "wordIt": "ufficio",
    "q": "\"ufficio\" هنا بيشتغل كـ إيه في الجملة؟",
    "options": [
     "صفة/ظرف",
     "حرف جر",
     "فعل",
     "اسم"
    ],
    "correct": 0
   },
   {
    "wordIt": "mentre",
    "q": "\"mentre\" بمعنى إيه هنا؟",
    "options": [
     "ولو",
     "بينما / في نفس الوقت اللي",
     "لكن",
     "عشان"
    ],
    "correct": 1
   },
   {
    "wordIt": "lavoravano",
    "q": "الفعل \"lavoravano\" — منتمي لأي مجموعة؟",
    "options": [
     "-are",
     "-ere",
     "-ire",
     "شاذ"
    ],
    "correct": 0
   },
   {
    "wordIt": "lavoravano",
    "q": "الزمن اللي اتصرف فيه \"lavoravano\" إيه؟",
    "options": [
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo",
     "Presente"
    ],
    "correct": 1
   },
   {
    "wordIt": "da casa",
    "q": "ليه استخدمنا حرف الجر في \"da casa\"؟ الأصل إيه؟",
    "options": [
     "fra",
     "a",
     "da",
     "tra"
    ],
    "correct": 2
   }
  ]
 },
 {
  "it": "Noi lavoravamo insieme quando sono andati via i colleghi",
  "ar": "احنا كنا شغالين مع بعض لما الزمايل مشيوا.",
  "en": "We were working together when the colleagues left.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "lavoravamo",
    "ar": "كنا شغالين",
    "note": "Lavorare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Lavorare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Lavorare\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"lavoravamo\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 1
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "insieme",
    "ar": "مع بعض",
    "note": null,
    "type": "aggettivo",
    "invariant": true,
    "forms": {
     "ms": "insieme",
     "fs": "insieme",
     "mp": "insieme",
     "fp": "insieme"
    },
    "quiz": [
     {
      "q": "\"insieme\" هنا بيشتغل كـ إيه في الجملة؟",
      "options": [
       "صفة/ظرف",
       "حرف جر",
       "فعل",
       "اسم"
      ],
      "correct": 0
     }
    ],
    "usage": "بيجي بعد الفعل كظرف، وشكله بيفضل يفضل ثابت مش بيتغيّر حسب الجنس أو العدد"
   },
   {
    "it": "quando",
    "ar": "لما",
    "note": null,
    "type": "congiunzione",
    "meaning": "لما / عندما",
    "grammarId": "interrogativi",
    "quiz": [
     {
      "q": "\"quando\" بمعنى إيه هنا؟",
      "options": [
       "عشان",
       "لما / عندما",
       "بينما / في نفس الوقت اللي",
       "لكن"
      ],
      "correct": 1
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "sono",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "andati",
    "ar": "مشيوا",
    "note": "Andare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Andare",
    "group": "are",
    "regular": false,
    "aux": "essere",
    "tense": "passato",
    "transitive": false,
    "quiz": [
     {
      "q": "الفعل \"Andare\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"andati\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 1
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Andare\" في الماضي إيه؟",
      "options": [
       "avere",
       "essere"
      ],
      "correct": 1
     }
    ],
    "transitivity": "intransitive",
    "transitivityNote": "بيحتاج حرف جر (غالباً a أو di) عشان يوصل للمفعول"
   },
   {
    "it": "via",
    "ar": "",
    "note": null,
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "i colleghi",
    "ar": "الزمايل",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i colleghi",
    "quiz": [
     {
      "q": "جنس \"i colleghi\" إيه؟",
      "options": [
       "مؤنث",
       "جمع",
       "محايد",
       "مذكر"
      ],
      "correct": 3
     }
    ],
    "nounIt": "colleghi",
    "relatedWords": []
   }
  ],
  "conj": {
   "verb": "Andare",
   "tense": "Passato Prossimo",
   "regular": false,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Sono andato/a"
    },
    {
     "person": "Tu (أنت)",
     "form": "Sei andato/a"
    },
    {
     "person": "Lui (هو)",
     "form": "È andato"
    },
    {
     "person": "Lei (هي)",
     "form": "È andata"
    },
    {
     "person": "Noi (احنا)",
     "form": "Siamo andati/e"
    },
    {
     "person": "Voi (انتم)",
     "form": "Siete andati/e"
    },
    {
     "person": "Loro (هم)",
     "form": "Sono andati/e"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "lavoravamo",
    "q": "الفعل \"lavoravamo\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 1
   },
   {
    "wordIt": "lavoravamo",
    "q": "الزمن اللي اتصرف فيه \"lavoravamo\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 2
   },
   {
    "wordIt": "insieme",
    "q": "\"insieme\" هنا بيشتغل كـ إيه في الجملة؟",
    "options": [
     "اسم",
     "صفة/ظرف",
     "حرف جر",
     "فعل"
    ],
    "correct": 1
   },
   {
    "wordIt": "quando",
    "q": "\"quando\" بمعنى إيه هنا؟",
    "options": [
     "عشان",
     "ولو",
     "لما / عندما",
     "لكن"
    ],
    "correct": 2
   },
   {
    "wordIt": "andati",
    "q": "الفعل \"andati\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 0
   },
   {
    "wordIt": "andati",
    "q": "الزمن اللي اتصرف فيه \"andati\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 1
   },
   {
    "wordIt": "andati",
    "q": "الفعل المساعد اللي بيجي مع \"Andare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "essere",
     "ho",
     "sono",
     "avere"
    ],
    "correct": 0
   },
   {
    "wordIt": "i colleghi",
    "q": "جنس \"i colleghi\" إيه؟",
    "options": [
     "جمع",
     "محايد",
     "مذكر",
     "مؤنث"
    ],
    "correct": 2
   }
  ]
 },
 {
  "it": "Noi abbiamo pulito la casa mentre ascoltavamo la musica",
  "ar": "احنا نضفنا البيت وكنا سامعين موسيقى.",
  "en": "We cleaned the house while we were listening to music.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "abbiamo",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "pulito",
    "ar": "نضفنا",
    "note": "Pulire، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Pulire",
    "group": "ire",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Pulire\" منتمي لأي مجموعة؟",
      "options": [
       "شاذ",
       "-are",
       "-ere",
       "-ire"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"pulito\" إيه؟",
      "options": [
       "Imperativo",
       "Presente",
       "Passato Prossimo",
       "Imperfetto"
      ],
      "correct": 2
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Pulire\" في الماضي إيه؟",
      "options": [
       "essere",
       "avere"
      ],
      "correct": 1
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "la casa",
    "ar": "البيت",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le case",
    "quiz": [
     {
      "q": "جنس \"la casa\" إيه؟",
      "options": [
       "مذكر",
       "مؤنث",
       "جمع",
       "محايد"
      ],
      "correct": 1
     }
    ],
    "nounIt": "casa",
    "relatedWords": []
   },
   {
    "it": "mentre",
    "ar": "وكنا",
    "note": null,
    "type": "congiunzione",
    "meaning": "بينما / في نفس الوقت اللي",
    "grammarId": "mentre",
    "quiz": [
     {
      "q": "\"mentre\" بمعنى إيه هنا؟",
      "options": [
       "لما / عندما",
       "لكن",
       "عشان",
       "بينما / في نفس الوقت اللي"
      ],
      "correct": 3
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "ascoltavamo",
    "ar": "سامعين",
    "note": "Ascoltare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Ascoltare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Ascoltare\" منتمي لأي مجموعة؟",
      "options": [
       "-ire",
       "شاذ",
       "-are",
       "-ere"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"ascoltavamo\" إيه؟",
      "options": [
       "Imperfetto",
       "Imperativo",
       "Presente",
       "Passato Prossimo"
      ],
      "correct": 0
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "la musica",
    "ar": "موسيقى",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le musice",
    "quiz": [
     {
      "q": "جنس \"la musica\" إيه؟",
      "options": [
       "محايد",
       "مذكر",
       "مؤنث",
       "جمع"
      ],
      "correct": 2
     }
    ],
    "nounIt": "musica",
    "relatedWords": []
   }
  ],
  "conj": {
   "verb": "Pulire",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho pulito"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai pulito"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha pulito"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha pulito"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo pulito"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete pulito"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno pulito"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "pulito",
    "q": "الفعل \"pulito\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 3
   },
   {
    "wordIt": "pulito",
    "q": "الزمن اللي اتصرف فيه \"pulito\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 1
   },
   {
    "wordIt": "pulito",
    "q": "الفعل المساعد اللي بيجي مع \"Pulire\" في الـ Passato Prossimo إيه؟",
    "options": [
     "essere",
     "ho",
     "sono",
     "avere"
    ],
    "correct": 3
   },
   {
    "wordIt": "la casa",
    "q": "جنس \"la casa\" إيه؟",
    "options": [
     "جمع",
     "محايد",
     "مذكر",
     "مؤنث"
    ],
    "correct": 3
   },
   {
    "wordIt": "mentre",
    "q": "\"mentre\" بمعنى إيه هنا؟",
    "options": [
     "ولو",
     "بينما / في نفس الوقت اللي",
     "لكن",
     "عشان"
    ],
    "correct": 1
   },
   {
    "wordIt": "ascoltavamo",
    "q": "الفعل \"ascoltavamo\" — منتمي لأي مجموعة؟",
    "options": [
     "-are",
     "-ere",
     "-ire",
     "شاذ"
    ],
    "correct": 0
   },
   {
    "wordIt": "ascoltavamo",
    "q": "الزمن اللي اتصرف فيه \"ascoltavamo\" إيه؟",
    "options": [
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo",
     "Presente"
    ],
    "correct": 1
   },
   {
    "wordIt": "la musica",
    "q": "جنس \"la musica\" إيه؟",
    "options": [
     "جمع",
     "محايد",
     "مذكر",
     "مؤنث"
    ],
    "correct": 3
   }
  ]
 },
 {
  "it": "Noi ascoltavamo le notizie quando abbiamo pulito la cucina",
  "ar": "احنا كنا سامعين الأخبار لما نضفنا المطبخ.",
  "en": "We were listening to the news when we cleaned the kitchen.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "ascoltavamo",
    "ar": "كنا سامعين",
    "note": "Ascoltare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Ascoltare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Ascoltare\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"ascoltavamo\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 2
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "le notizie",
    "ar": "الأخبار",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le notizii",
    "quiz": [
     {
      "q": "جنس \"le notizie\" إيه؟",
      "options": [
       "مؤنث",
       "جمع",
       "محايد",
       "مذكر"
      ],
      "correct": 0
     }
    ],
    "nounIt": "notizie",
    "relatedWords": []
   },
   {
    "it": "quando",
    "ar": "لما",
    "note": null,
    "type": "congiunzione",
    "meaning": "لما / عندما",
    "grammarId": "interrogativi",
    "quiz": [
     {
      "q": "\"quando\" بمعنى إيه هنا؟",
      "options": [
       "لكن",
       "عشان",
       "لما / عندما",
       "بينما / في نفس الوقت اللي"
      ],
      "correct": 2
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "abbiamo",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "pulito",
    "ar": "نضفنا",
    "note": "Pulire، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Pulire",
    "group": "ire",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Pulire\" منتمي لأي مجموعة؟",
      "options": [
       "شاذ",
       "-are",
       "-ere",
       "-ire"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"pulito\" إيه؟",
      "options": [
       "Imperativo",
       "Presente",
       "Passato Prossimo",
       "Imperfetto"
      ],
      "correct": 2
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Pulire\" في الماضي إيه؟",
      "options": [
       "essere",
       "avere"
      ],
      "correct": 1
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "la cucina",
    "ar": "المطبخ",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le cucine",
    "quiz": [
     {
      "q": "جنس \"la cucina\" إيه؟",
      "options": [
       "مذكر",
       "مؤنث",
       "جمع",
       "محايد"
      ],
      "correct": 1
     }
    ],
    "nounIt": "cucina",
    "relatedWords": []
   }
  ],
  "conj": {
   "verb": "Pulire",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho pulito"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai pulito"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha pulito"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha pulito"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo pulito"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete pulito"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno pulito"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "ascoltavamo",
    "q": "الفعل \"ascoltavamo\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 1
   },
   {
    "wordIt": "ascoltavamo",
    "q": "الزمن اللي اتصرف فيه \"ascoltavamo\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 2
   },
   {
    "wordIt": "le notizie",
    "q": "جنس \"le notizie\" إيه؟",
    "options": [
     "مؤنث",
     "جمع",
     "محايد",
     "مذكر"
    ],
    "correct": 0
   },
   {
    "wordIt": "quando",
    "q": "\"quando\" بمعنى إيه هنا؟",
    "options": [
     "عشان",
     "ولو",
     "لما / عندما",
     "لكن"
    ],
    "correct": 2
   },
   {
    "wordIt": "pulito",
    "q": "الفعل \"pulito\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 3
   },
   {
    "wordIt": "pulito",
    "q": "الزمن اللي اتصرف فيه \"pulito\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 1
   },
   {
    "wordIt": "pulito",
    "q": "الفعل المساعد اللي بيجي مع \"Pulire\" في الـ Passato Prossimo إيه؟",
    "options": [
     "essere",
     "ho",
     "sono",
     "avere"
    ],
    "correct": 3
   },
   {
    "wordIt": "la cucina",
    "q": "جنس \"la cucina\" إيه؟",
    "options": [
     "جمع",
     "محايد",
     "مذكر",
     "مؤنث"
    ],
    "correct": 3
   }
  ]
 },
 {
  "it": "Noi abbiamo promesso di tornare mentre speravamo in un futuro migliore",
  "ar": "احنا وعدنا بالرجوع وكنا آملين في مستقبل أفضل.",
  "en": "We promised to come back while we were hoping for a better future.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "abbiamo",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "promesso",
    "ar": "وعدنا",
    "note": "Promettere، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Promettere",
    "group": "ere",
    "regular": false,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Promettere\" منتمي لأي مجموعة؟",
      "options": [
       "شاذ",
       "-are",
       "-ere",
       "-ire"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"promesso\" إيه؟",
      "options": [
       "Imperativo",
       "Presente",
       "Passato Prossimo",
       "Imperfetto"
      ],
      "correct": 2
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Promettere\" في الماضي إيه؟",
      "options": [
       "essere",
       "avere"
      ],
      "correct": 1
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "di tornare",
    "ar": "بالرجوع",
    "note": null,
    "type": "sintagma_prep",
    "prep": "di",
    "prepNote": "بيدل على ملكية أو أصل أو موضوع (بتاع / من / عن) — مفيش أداة تعريف هنا لأن الاسم بيعبّر عن مفهوم عام مش حاجة محددة",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"di tornare\"؟ الأصل إيه؟",
      "options": [
       "di",
       "a",
       "in",
       "da"
      ],
      "correct": 0
     }
    ]
   },
   {
    "it": "mentre",
    "ar": "وكنا",
    "note": null,
    "type": "congiunzione",
    "meaning": "بينما / في نفس الوقت اللي",
    "grammarId": "mentre",
    "quiz": [
     {
      "q": "\"mentre\" بمعنى إيه هنا؟",
      "options": [
       "لما / عندما",
       "لكن",
       "عشان",
       "بينما / في نفس الوقت اللي"
      ],
      "correct": 3
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "speravamo",
    "ar": "آملين",
    "note": "Sperare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Sperare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Sperare\" منتمي لأي مجموعة؟",
      "options": [
       "-ire",
       "شاذ",
       "-are",
       "-ere"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"speravamo\" إيه؟",
      "options": [
       "Imperfetto",
       "Imperativo",
       "Presente",
       "Passato Prossimo"
      ],
      "correct": 0
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "in un futuro",
    "ar": "في مستقبل",
    "note": null,
    "type": "sintagma_prep",
    "prep": "in",
    "prepNote": "بيدل على مكان جوه حاجة أو وسيلة مواصلة (في / بـ)",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"in un futuro\"؟ الأصل إيه؟",
      "options": [
       "per",
       "in",
       "su",
       "con"
      ],
      "correct": 1
     }
    ]
   },
   {
    "it": "migliore",
    "ar": "أفضل",
    "note": null,
    "type": "aggettivo",
    "invariant": false,
    "forms": {
     "ms": "migliore",
     "fs": "migliore",
     "mp": "migliori",
     "fp": "migliori"
    },
    "quiz": [
     {
      "q": "\"migliore\" هنا بيشتغل كـ إيه في الجملة؟",
      "options": [
       "فعل",
       "اسم",
       "صفة/ظرف",
       "حرف جر"
      ],
      "correct": 2
     }
    ],
    "usage": "بيجي بعد الاسم كصفة، وبيتغيّر حسب جنس وعدد الاسم اللي بتوصفه"
   }
  ],
  "conj": {
   "verb": "Promettere",
   "tense": "Passato Prossimo",
   "regular": false,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho promesso"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai promesso"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha promesso"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha promesso"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo promesso"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete promesso"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno promesso"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "promesso",
    "q": "الفعل \"promesso\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 0
   },
   {
    "wordIt": "promesso",
    "q": "الزمن اللي اتصرف فيه \"promesso\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 1
   },
   {
    "wordIt": "promesso",
    "q": "الفعل المساعد اللي بيجي مع \"Promettere\" في الـ Passato Prossimo إيه؟",
    "options": [
     "essere",
     "ho",
     "sono",
     "avere"
    ],
    "correct": 3
   },
   {
    "wordIt": "di tornare",
    "q": "ليه استخدمنا حرف الجر في \"di tornare\"؟ الأصل إيه؟",
    "options": [
     "su",
     "con",
     "di",
     "da"
    ],
    "correct": 2
   },
   {
    "wordIt": "mentre",
    "q": "\"mentre\" بمعنى إيه هنا؟",
    "options": [
     "ولو",
     "بينما / في نفس الوقت اللي",
     "لكن",
     "عشان"
    ],
    "correct": 1
   },
   {
    "wordIt": "speravamo",
    "q": "الفعل \"speravamo\" — منتمي لأي مجموعة؟",
    "options": [
     "-are",
     "-ere",
     "-ire",
     "شاذ"
    ],
    "correct": 0
   },
   {
    "wordIt": "speravamo",
    "q": "الزمن اللي اتصرف فيه \"speravamo\" إيه؟",
    "options": [
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo",
     "Presente"
    ],
    "correct": 1
   },
   {
    "wordIt": "in un futuro",
    "q": "ليه استخدمنا حرف الجر في \"in un futuro\"؟ الأصل إيه؟",
    "options": [
     "fra",
     "a",
     "in",
     "tra"
    ],
    "correct": 2
   },
   {
    "wordIt": "migliore",
    "q": "\"migliore\" هنا بيشتغل كـ إيه في الجملة؟",
    "options": [
     "حرف جر",
     "فعل",
     "اسم",
     "صفة/ظرف"
    ],
    "correct": 3
   }
  ]
 },
 {
  "it": "Noi speravamo di vincere quando abbiamo promesso una festa a tutti",
  "ar": "احنا كنا آملين الفوز لما وعدنا بحفلة للكل.",
  "en": "We were hoping to win when we promised a party to everyone.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "speravamo",
    "ar": "كنا آملين",
    "note": "Sperare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Sperare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Sperare\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"speravamo\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 1
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "di vincere",
    "ar": "الفوز",
    "note": null,
    "type": "sintagma_prep",
    "prep": "di",
    "prepNote": "بيدل على ملكية أو أصل أو موضوع (بتاع / من / عن) — مفيش أداة تعريف هنا لأن الاسم بيعبّر عن مفهوم عام مش حاجة محددة",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"di vincere\"؟ الأصل إيه؟",
      "options": [
       "fra",
       "a",
       "di",
       "tra"
      ],
      "correct": 2
     }
    ]
   },
   {
    "it": "quando",
    "ar": "لما",
    "note": null,
    "type": "congiunzione",
    "meaning": "لما / عندما",
    "grammarId": "interrogativi",
    "quiz": [
     {
      "q": "\"quando\" بمعنى إيه هنا؟",
      "options": [
       "عشان",
       "لما / عندما",
       "بينما / في نفس الوقت اللي",
       "لكن"
      ],
      "correct": 1
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "abbiamo",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "promesso",
    "ar": "وعدنا",
    "note": "Promettere، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Promettere",
    "group": "ere",
    "regular": false,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Promettere\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 1
     },
     {
      "q": "الزمن اللي اتصرف بيه \"promesso\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 1
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Promettere\" في الماضي إيه؟",
      "options": [
       "avere",
       "essere"
      ],
      "correct": 0
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "una festa",
    "ar": "حفلة",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le feste",
    "quiz": [
     {
      "q": "جنس \"una festa\" إيه؟",
      "options": [
       "مؤنث",
       "جمع",
       "محايد",
       "مذكر"
      ],
      "correct": 0
     }
    ],
    "nounIt": "festa",
    "relatedWords": []
   },
   {
    "it": "a tutti",
    "ar": "للكل",
    "note": null,
    "type": "sintagma_prep",
    "prep": "a",
    "prepNote": "بيدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق) — مفيش أداة تعريف هنا لأن الاسم بيعبّر عن مفهوم عام مش حاجة محددة",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"a tutti\"؟ الأصل إيه؟",
      "options": [
       "su",
       "con",
       "a",
       "da"
      ],
      "correct": 2
     }
    ]
   }
  ],
  "conj": {
   "verb": "Promettere",
   "tense": "Passato Prossimo",
   "regular": false,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho promesso"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai promesso"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha promesso"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha promesso"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo promesso"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete promesso"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno promesso"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "speravamo",
    "q": "الفعل \"speravamo\" — منتمي لأي مجموعة؟",
    "options": [
     "-are",
     "-ere",
     "-ire",
     "شاذ"
    ],
    "correct": 0
   },
   {
    "wordIt": "speravamo",
    "q": "الزمن اللي اتصرف فيه \"speravamo\" إيه؟",
    "options": [
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo",
     "Presente"
    ],
    "correct": 1
   },
   {
    "wordIt": "di vincere",
    "q": "ليه استخدمنا حرف الجر في \"di vincere\"؟ الأصل إيه؟",
    "options": [
     "su",
     "con",
     "di",
     "da"
    ],
    "correct": 2
   },
   {
    "wordIt": "quando",
    "q": "\"quando\" بمعنى إيه هنا؟",
    "options": [
     "ولو",
     "لما / عندما",
     "لكن",
     "عشان"
    ],
    "correct": 1
   },
   {
    "wordIt": "promesso",
    "q": "الفعل \"promesso\" — منتمي لأي مجموعة؟",
    "options": [
     "-are",
     "-ere",
     "-ire",
     "شاذ"
    ],
    "correct": 3
   },
   {
    "wordIt": "promesso",
    "q": "الزمن اللي اتصرف فيه \"promesso\" إيه؟",
    "options": [
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo",
     "Presente"
    ],
    "correct": 0
   },
   {
    "wordIt": "promesso",
    "q": "الفعل المساعد اللي بيجي مع \"Promettere\" في الـ Passato Prossimo إيه؟",
    "options": [
     "ho",
     "sono",
     "avere",
     "essere"
    ],
    "correct": 2
   },
   {
    "wordIt": "una festa",
    "q": "جنس \"una festa\" إيه؟",
    "options": [
     "محايد",
     "مذكر",
     "مؤنث",
     "جمع"
    ],
    "correct": 2
   },
   {
    "wordIt": "a tutti",
    "q": "ليه استخدمنا حرف الجر في \"a tutti\"؟ الأصل إيه؟",
    "options": [
     "a",
     "in",
     "di",
     "da"
    ],
    "correct": 0
   }
  ]
 },
 {
  "it": "Noi abbiamo ringraziato il medico mentre ci aiutava con la ricetta",
  "ar": "احنا شكرنا الدكتور وهو كان بيساعدنا في الروشتة.",
  "en": "We thanked the doctor while he was helping us with the prescription.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "abbiamo",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "ringraziato",
    "ar": "شكرنا",
    "note": "Ringraziare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Ringraziare",
    "group": "are",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Ringraziare\" منتمي لأي مجموعة؟",
      "options": [
       "شاذ",
       "-are",
       "-ere",
       "-ire"
      ],
      "correct": 1
     },
     {
      "q": "الزمن اللي اتصرف بيه \"ringraziato\" إيه؟",
      "options": [
       "Imperativo",
       "Presente",
       "Passato Prossimo",
       "Imperfetto"
      ],
      "correct": 2
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Ringraziare\" في الماضي إيه؟",
      "options": [
       "essere",
       "avere"
      ],
      "correct": 1
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "il medico",
    "ar": "الدكتور",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i medici",
    "quiz": [
     {
      "q": "جنس \"il medico\" إيه؟",
      "options": [
       "مذكر",
       "مؤنث",
       "جمع",
       "محايد"
      ],
      "correct": 0
     }
    ],
    "nounIt": "medico",
    "relatedWords": []
   },
   {
    "it": "mentre",
    "ar": "وهو",
    "note": null,
    "type": "congiunzione",
    "meaning": "بينما / في نفس الوقت اللي",
    "grammarId": "mentre",
    "quiz": [
     {
      "q": "\"mentre\" بمعنى إيه هنا؟",
      "options": [
       "لما / عندما",
       "لكن",
       "عشان",
       "بينما / في نفس الوقت اللي"
      ],
      "correct": 3
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "ci",
    "ar": "نا",
    "note": null,
    "type": "omesso",
    "skipReason": "particella"
   },
   {
    "it": "aiutava",
    "ar": "كان بيساعد",
    "note": "Aiutare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Aiutare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Aiutare\" منتمي لأي مجموعة؟",
      "options": [
       "-ire",
       "شاذ",
       "-are",
       "-ere"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"aiutava\" إيه؟",
      "options": [
       "Imperfetto",
       "Imperativo",
       "Presente",
       "Passato Prossimo"
      ],
      "correct": 0
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "con la ricetta",
    "ar": "في الروشتة",
    "note": null,
    "type": "sintagma_prep",
    "prep": "con",
    "prepNote": "بيدل على مصاحبة أو أداة (مع / بـ)",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"con la ricetta\"؟ الأصل إيه؟",
      "options": [
       "in",
       "con",
       "fra",
       "a"
      ],
      "correct": 1
     }
    ]
   }
  ],
  "conj": {
   "verb": "Ringraziare",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho ringraziato"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai ringraziato"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha ringraziato"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha ringraziato"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo ringraziato"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete ringraziato"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno ringraziato"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "ringraziato",
    "q": "الفعل \"ringraziato\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "ringraziato",
    "q": "الزمن اللي اتصرف فيه \"ringraziato\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "ringraziato",
    "q": "الفعل المساعد اللي بيجي مع \"Ringraziare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 1
   },
   {
    "wordIt": "il medico",
    "q": "جنس \"il medico\" إيه؟",
    "options": [
     "مذكر",
     "مؤنث",
     "جمع",
     "محايد"
    ],
    "correct": 0
   },
   {
    "wordIt": "mentre",
    "q": "\"mentre\" بمعنى إيه هنا؟",
    "options": [
     "لكن",
     "عشان",
     "ولو",
     "بينما / في نفس الوقت اللي"
    ],
    "correct": 3
   },
   {
    "wordIt": "aiutava",
    "q": "الفعل \"aiutava\" — منتمي لأي مجموعة؟",
    "options": [
     "-ire",
     "شاذ",
     "-are",
     "-ere"
    ],
    "correct": 2
   },
   {
    "wordIt": "aiutava",
    "q": "الزمن اللي اتصرف فيه \"aiutava\" إيه؟",
    "options": [
     "Imperativo",
     "Presente",
     "Passato Prossimo",
     "Imperfetto"
    ],
    "correct": 3
   },
   {
    "wordIt": "con la ricetta",
    "q": "ليه استخدمنا حرف الجر في \"con la ricetta\"؟ الأصل إيه؟",
    "options": [
     "con",
     "a",
     "in",
     "di"
    ],
    "correct": 0
   }
  ]
 },
 {
  "it": "Noi aiutavamo il vicino quando ha ringraziato tutti per la sorpresa",
  "ar": "احنا كنا بنساعد الجار لما شكر الكل على المفاجأة.",
  "en": "We were helping the neighbor when he thanked everyone for the surprise.",
  "pronoun": "Noi (احنا)",
  "words": [
   {
    "it": "Noi",
    "ar": "احنا",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "aiutavamo",
    "ar": "كنا بنساعد",
    "note": "Aiutare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Aiutare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Aiutare\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"aiutavamo\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 2
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "il vicino",
    "ar": "الجار",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i vicini",
    "quiz": [
     {
      "q": "جنس \"il vicino\" إيه؟",
      "options": [
       "مؤنث",
       "جمع",
       "محايد",
       "مذكر"
      ],
      "correct": 3
     }
    ],
    "nounIt": "vicino",
    "relatedWords": []
   },
   {
    "it": "quando",
    "ar": "لما",
    "note": null,
    "type": "congiunzione",
    "meaning": "لما / عندما",
    "grammarId": "interrogativi",
    "quiz": [
     {
      "q": "\"quando\" بمعنى إيه هنا؟",
      "options": [
       "لكن",
       "عشان",
       "لما / عندما",
       "بينما / في نفس الوقت اللي"
      ],
      "correct": 2
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "ha",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "ringraziato",
    "ar": "شكر",
    "note": "Ringraziare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Ringraziare",
    "group": "are",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Ringraziare\" منتمي لأي مجموعة؟",
      "options": [
       "شاذ",
       "-are",
       "-ere",
       "-ire"
      ],
      "correct": 1
     },
     {
      "q": "الزمن اللي اتصرف بيه \"ringraziato\" إيه؟",
      "options": [
       "Imperativo",
       "Presente",
       "Passato Prossimo",
       "Imperfetto"
      ],
      "correct": 2
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Ringraziare\" في الماضي إيه؟",
      "options": [
       "essere",
       "avere"
      ],
      "correct": 1
     }
    ],
    "transitivity": "transitive",
    "transitivityNote": null
   },
   {
    "it": "tutti",
    "ar": "الكل",
    "note": null,
    "type": "aggettivo",
    "invariant": false,
    "forms": {
     "ms": "tutto",
     "fs": "tutta",
     "mp": "tutti",
     "fp": "tutte"
    },
    "quiz": [
     {
      "q": "\"tutti\" هنا بيشتغل كـ إيه في الجملة؟",
      "options": [
       "فعل",
       "اسم",
       "صفة/ظرف",
       "حرف جر"
      ],
      "correct": 2
     }
    ],
    "usage": "بيجي بعد الاسم كصفة، وبيتغيّر حسب جنس وعدد الاسم اللي بتوصفه"
   },
   {
    "it": "per la sorpresa",
    "ar": "على المفاجأة",
    "note": null,
    "type": "sintagma_prep",
    "prep": "per",
    "prepNote": "بيدل على غرض أو مدة أو مسار (عشان / لمدة / عن طريق)",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"per la sorpresa\"؟ الأصل إيه؟",
      "options": [
       "con",
       "tra",
       "fra",
       "per"
      ],
      "correct": 3
     }
    ]
   }
  ],
  "conj": {
   "verb": "Ringraziare",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho ringraziato"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai ringraziato"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha ringraziato"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha ringraziato"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo ringraziato"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete ringraziato"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno ringraziato"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "aiutavamo",
    "q": "الفعل \"aiutavamo\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "aiutavamo",
    "q": "الزمن اللي اتصرف فيه \"aiutavamo\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 0
   },
   {
    "wordIt": "il vicino",
    "q": "جنس \"il vicino\" إيه؟",
    "options": [
     "محايد",
     "مذكر",
     "مؤنث",
     "جمع"
    ],
    "correct": 1
   },
   {
    "wordIt": "quando",
    "q": "\"quando\" بمعنى إيه هنا؟",
    "options": [
     "لما / عندما",
     "لكن",
     "عشان",
     "ولو"
    ],
    "correct": 0
   },
   {
    "wordIt": "ringraziato",
    "q": "الفعل \"ringraziato\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "ringraziato",
    "q": "الزمن اللي اتصرف فيه \"ringraziato\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "ringraziato",
    "q": "الفعل المساعد اللي بيجي مع \"Ringraziare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 1
   },
   {
    "wordIt": "tutti",
    "q": "\"tutti\" هنا بيشتغل كـ إيه في الجملة؟",
    "options": [
     "فعل",
     "اسم",
     "صفة/ظرف",
     "حرف جر"
    ],
    "correct": 2
   },
   {
    "wordIt": "per la sorpresa",
    "q": "ليه استخدمنا حرف الجر في \"per la sorpresa\"؟ الأصل إيه؟",
    "options": [
     "in",
     "di",
     "da",
     "per"
    ],
    "correct": 3
   }
  ]
 }
];
