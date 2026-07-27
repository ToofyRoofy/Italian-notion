// مولّد أوتوماتيكيًا — جمل ضمير LEI من درس Parla Italiano
const LESSON_LEI = [
 {
  "it": "Lei è arrivata a casa mentre io cucinavo la cena",
  "ar": "هي وصلت البيت وأنا كنت بطبخ العشا.",
  "en": "She arrived home while I was cooking dinner.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "è",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "arrivata",
    "ar": "وصلت",
    "note": "Arrivare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Arrivare",
    "group": "are",
    "regular": true,
    "aux": "essere",
    "tense": "passato",
    "transitive": false,
    "quiz": [
     {
      "q": "الفعل \"Arrivare\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"arrivata\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 1
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Arrivare\" في الماضي إيه؟",
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
    "it": "a casa",
    "ar": "البيت",
    "note": null,
    "type": "sintagma_prep",
    "prep": "a",
    "prepNote": "بيدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق) — مفيش أداة تعريف هنا لأن الاسم بيعبّر عن مفهوم عام مش حاجة محددة",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"a casa\"؟ الأصل إيه؟",
      "options": [
       "per",
       "tra",
       "fra",
       "a"
      ],
      "correct": 3
     }
    ]
   },
   {
    "it": "mentre",
    "ar": "وأنا",
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
    "it": "cucinavo",
    "ar": "كنت بطبخ",
    "note": "Cucinare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Cucinare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Cucinare\" منتمي لأي مجموعة؟",
      "options": [
       "شاذ",
       "-are",
       "-ere",
       "-ire"
      ],
      "correct": 1
     },
     {
      "q": "الزمن اللي اتصرف بيه \"cucinavo\" إيه؟",
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
    "it": "la cena",
    "ar": "العشا",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le cene",
    "quiz": [
     {
      "q": "جنس \"la cena\" إيه؟",
      "options": [
       "مذكر",
       "مؤنث",
       "جمع",
       "محايد"
      ],
      "correct": 1
     }
    ],
    "nounIt": "cena",
    "relatedWords": []
   }
  ],
  "conj": {
   "verb": "Arrivare",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Sono arrivato/a"
    },
    {
     "person": "Tu (أنت)",
     "form": "Sei arrivato/a"
    },
    {
     "person": "Lui (هو)",
     "form": "È arrivato"
    },
    {
     "person": "Lei (هي)",
     "form": "È arrivata"
    },
    {
     "person": "Noi (احنا)",
     "form": "Siamo arrivati/e"
    },
    {
     "person": "Voi (انتم)",
     "form": "Siete arrivati/e"
    },
    {
     "person": "Loro (هم)",
     "form": "Sono arrivati/e"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "arrivata",
    "q": "الفعل \"arrivata\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "arrivata",
    "q": "الزمن اللي اتصرف فيه \"arrivata\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "arrivata",
    "q": "الفعل المساعد اللي بيجي مع \"Arrivare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 2
   },
   {
    "wordIt": "a casa",
    "q": "ليه استخدمنا حرف الجر في \"a casa\"؟ الأصل إيه؟",
    "options": [
     "a",
     "con",
     "per",
     "tra"
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
    "wordIt": "cucinavo",
    "q": "الفعل \"cucinavo\" — منتمي لأي مجموعة؟",
    "options": [
     "-ire",
     "شاذ",
     "-are",
     "-ere"
    ],
    "correct": 2
   },
   {
    "wordIt": "cucinavo",
    "q": "الزمن اللي اتصرف فيه \"cucinavo\" إيه؟",
    "options": [
     "Imperativo",
     "Presente",
     "Passato Prossimo",
     "Imperfetto"
    ],
    "correct": 3
   },
   {
    "wordIt": "la cena",
    "q": "جنس \"la cena\" إيه؟",
    "options": [
     "مذكر",
     "مؤنث",
     "جمع",
     "محايد"
    ],
    "correct": 1
   }
  ]
 },
 {
  "it": "Lei cucinava la pasta quando è arrivato suo fratello dall'aeroporto",
  "ar": "هي كانت بتطبخ المكرونة لما أخوها وصل من المطار.",
  "en": "She was cooking pasta when her brother arrived from the airport.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "cucinava",
    "ar": "كانت بتطبخ",
    "note": "Cucinare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Cucinare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Cucinare\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"cucinava\" إيه؟",
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
    "it": "la pasta",
    "ar": "المكرونة",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le paste",
    "quiz": [
     {
      "q": "جنس \"la pasta\" إيه؟",
      "options": [
       "جمع",
       "محايد",
       "مذكر",
       "مؤنث"
      ],
      "correct": 3
     }
    ],
    "nounIt": "pasta",
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
    "it": "arrivato",
    "ar": "وصل",
    "note": "Arrivare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Arrivare",
    "group": "are",
    "regular": true,
    "aux": "essere",
    "tense": "passato",
    "transitive": false,
    "quiz": [
     {
      "q": "الفعل \"Arrivare\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"arrivato\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 1
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Arrivare\" في الماضي إيه؟",
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
    "it": "suo fratello",
    "ar": "أخوها",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i fratelli",
    "quiz": [
     {
      "q": "جنس \"suo fratello\" إيه؟",
      "options": [
       "مؤنث",
       "جمع",
       "محايد",
       "مذكر"
      ],
      "correct": 3
     }
    ],
    "nounIt": "fratello",
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
    "it": "aeroporto",
    "ar": "المطار",
    "note": null,
    "type": "aggettivo",
    "invariant": false,
    "forms": {
     "ms": "aeroporto",
     "fs": "aeroporta",
     "mp": "aeroporti",
     "fp": "aeroporte"
    },
    "quiz": [
     {
      "q": "\"aeroporto\" هنا بيشتغل كـ إيه في الجملة؟",
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
   "verb": "Arrivare",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Sono arrivato/a"
    },
    {
     "person": "Tu (أنت)",
     "form": "Sei arrivato/a"
    },
    {
     "person": "Lui (هو)",
     "form": "È arrivato"
    },
    {
     "person": "Lei (هي)",
     "form": "È arrivata"
    },
    {
     "person": "Noi (احنا)",
     "form": "Siamo arrivati/e"
    },
    {
     "person": "Voi (انتم)",
     "form": "Siete arrivati/e"
    },
    {
     "person": "Loro (هم)",
     "form": "Sono arrivati/e"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "cucinava",
    "q": "الفعل \"cucinava\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "cucinava",
    "q": "الزمن اللي اتصرف فيه \"cucinava\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 0
   },
   {
    "wordIt": "la pasta",
    "q": "جنس \"la pasta\" إيه؟",
    "options": [
     "محايد",
     "مذكر",
     "مؤنث",
     "جمع"
    ],
    "correct": 2
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
    "wordIt": "arrivato",
    "q": "الفعل \"arrivato\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "arrivato",
    "q": "الزمن اللي اتصرف فيه \"arrivato\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "arrivato",
    "q": "الفعل المساعد اللي بيجي مع \"Arrivare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 2
   },
   {
    "wordIt": "suo fratello",
    "q": "جنس \"suo fratello\" إيه؟",
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
     "in",
     "di",
     "su",
     "da"
    ],
    "correct": 3
   },
   {
    "wordIt": "aeroporto",
    "q": "\"aeroporto\" هنا بيشتغل كـ إيه في الجملة؟",
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
  "it": "Lei ha scritto una lettera mentre pensava a lui",
  "ar": "هي كتبت جواب وهي كانت بتفكر فيه.",
  "en": "She wrote a letter while she was thinking about him.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "ha",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "scritto",
    "ar": "كتبت",
    "note": "Scrivere، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Scrivere",
    "group": "ere",
    "regular": false,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Scrivere\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"scritto\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 0
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Scrivere\" في الماضي إيه؟",
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
    "it": "una lettera",
    "ar": "جواب",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le lettere",
    "quiz": [
     {
      "q": "جنس \"una lettera\" إيه؟",
      "options": [
       "جمع",
       "محايد",
       "مذكر",
       "مؤنث"
      ],
      "correct": 3
     }
    ],
    "nounIt": "lettera",
    "relatedWords": []
   },
   {
    "it": "mentre",
    "ar": "وهي",
    "note": null,
    "type": "congiunzione",
    "meaning": "بينما / في نفس الوقت اللي",
    "grammarId": "mentre",
    "quiz": [
     {
      "q": "\"mentre\" بمعنى إيه هنا؟",
      "options": [
       "عشان",
       "بينما / في نفس الوقت اللي",
       "لما / عندما",
       "لكن"
      ],
      "correct": 1
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "pensava",
    "ar": "كانت بتفكر",
    "note": "Pensare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Pensare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Pensare\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"pensava\" إيه؟",
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
    "it": "a",
    "ar": "فيه",
    "note": null,
    "type": "sintagma_prep",
    "prep": "a",
    "prepNote": "بيدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق) — مفيش أداة تعريف هنا لأن الاسم بيعبّر عن مفهوم عام مش حاجة محددة",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"a\"؟ الأصل إيه؟",
      "options": [
       "per",
       "tra",
       "fra",
       "a"
      ],
      "correct": 3
     }
    ]
   },
   {
    "it": "lui",
    "ar": "",
    "note": null,
    "type": "omesso",
    "skipReason": "ausiliare"
   }
  ],
  "conj": {
   "verb": "Scrivere",
   "tense": "Passato Prossimo",
   "regular": false,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho scritto"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai scritto"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha scritto"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha scritto"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo scritto"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete scritto"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno scritto"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "scritto",
    "q": "الفعل \"scritto\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 0
   },
   {
    "wordIt": "scritto",
    "q": "الزمن اللي اتصرف فيه \"scritto\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 1
   },
   {
    "wordIt": "scritto",
    "q": "الفعل المساعد اللي بيجي مع \"Scrivere\" في الـ Passato Prossimo إيه؟",
    "options": [
     "essere",
     "ho",
     "sono",
     "avere"
    ],
    "correct": 3
   },
   {
    "wordIt": "una lettera",
    "q": "جنس \"una lettera\" إيه؟",
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
    "wordIt": "pensava",
    "q": "الفعل \"pensava\" — منتمي لأي مجموعة؟",
    "options": [
     "-are",
     "-ere",
     "-ire",
     "شاذ"
    ],
    "correct": 0
   },
   {
    "wordIt": "pensava",
    "q": "الزمن اللي اتصرف فيه \"pensava\" إيه؟",
    "options": [
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo",
     "Presente"
    ],
    "correct": 1
   },
   {
    "wordIt": "a",
    "q": "ليه استخدمنا حرف الجر في \"a\"؟ الأصل إيه؟",
    "options": [
     "su",
     "con",
     "a",
     "da"
    ],
    "correct": 2
   }
  ]
 },
 {
  "it": "Lei pensava al viaggio quando ha scritto nel diario",
  "ar": "هي كانت بتفكر في الرحلة لما كتبت في اليومية.",
  "en": "She was thinking about the trip when she wrote in her diary.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "pensava",
    "ar": "كانت بتفكر",
    "note": "Pensare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Pensare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Pensare\" منتمي لأي مجموعة؟",
      "options": [
       "-ire",
       "شاذ",
       "-are",
       "-ere"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"pensava\" إيه؟",
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
    "it": "al viaggio",
    "ar": "في الرحلة",
    "note": null,
    "type": "sintagma_prep",
    "prep": "a",
    "prepNote": "بيدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق)",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"al viaggio\"؟ الأصل إيه؟",
      "options": [
       "di",
       "a",
       "fra",
       "in"
      ],
      "correct": 1
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
       "لما / عندما",
       "بينما / في نفس الوقت اللي",
       "لكن",
       "عشان"
      ],
      "correct": 0
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
    "it": "scritto",
    "ar": "كتبت",
    "note": "Scrivere، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Scrivere",
    "group": "ere",
    "regular": false,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Scrivere\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"scritto\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 0
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Scrivere\" في الماضي إيه؟",
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
    "it": "nel",
    "ar": "في",
    "note": null,
    "type": "sintagma_prep",
    "prep": "in",
    "prepNote": "بيدل على مكان جوه حاجة أو وسيلة مواصلة (في / بـ)",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"nel\"؟ الأصل إيه؟",
      "options": [
       "su",
       "con",
       "in",
       "da"
      ],
      "correct": 2
     }
    ]
   },
   {
    "it": "diario",
    "ar": "اليومية",
    "note": null,
    "type": "aggettivo",
    "invariant": false,
    "forms": {
     "ms": "diario",
     "fs": "diaria",
     "mp": "diarii",
     "fp": "diarie"
    },
    "quiz": [
     {
      "q": "\"diario\" هنا بيشتغل كـ إيه في الجملة؟",
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
   "verb": "Scrivere",
   "tense": "Passato Prossimo",
   "regular": false,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho scritto"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai scritto"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha scritto"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha scritto"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo scritto"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete scritto"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno scritto"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "pensava",
    "q": "الفعل \"pensava\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 1
   },
   {
    "wordIt": "pensava",
    "q": "الزمن اللي اتصرف فيه \"pensava\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 2
   },
   {
    "wordIt": "al viaggio",
    "q": "ليه استخدمنا حرف الجر في \"al viaggio\"؟ الأصل إيه؟",
    "options": [
     "per",
     "tra",
     "fra",
     "a"
    ],
    "correct": 3
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
    "wordIt": "scritto",
    "q": "الفعل \"scritto\" — منتمي لأي مجموعة؟",
    "options": [
     "شاذ",
     "-are",
     "-ere",
     "-ire"
    ],
    "correct": 0
   },
   {
    "wordIt": "scritto",
    "q": "الزمن اللي اتصرف فيه \"scritto\" إيه؟",
    "options": [
     "Presente",
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo"
    ],
    "correct": 1
   },
   {
    "wordIt": "scritto",
    "q": "الفعل المساعد اللي بيجي مع \"Scrivere\" في الـ Passato Prossimo إيه؟",
    "options": [
     "essere",
     "ho",
     "sono",
     "avere"
    ],
    "correct": 3
   },
   {
    "wordIt": "nel",
    "q": "ليه استخدمنا حرف الجر في \"nel\"؟ الأصل إيه؟",
    "options": [
     "su",
     "con",
     "in",
     "da"
    ],
    "correct": 2
   },
   {
    "wordIt": "diario",
    "q": "\"diario\" هنا بيشتغل كـ إيه في الجملة؟",
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
  "it": "Lei ha venduto la macchina mentre cercava un lavoro nuovo",
  "ar": "هي باعت العربية وهي كانت بتدور على شغل جديد.",
  "en": "She sold the car while she was looking for a new job.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "ha",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "venduto",
    "ar": "باعت",
    "note": "Vendere، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Vendere",
    "group": "ere",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Vendere\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 1
     },
     {
      "q": "الزمن اللي اتصرف بيه \"venduto\" إيه؟",
      "options": [
       "Presente",
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo"
      ],
      "correct": 1
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Vendere\" في الماضي إيه؟",
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
    "it": "la macchina",
    "ar": "العربية",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le macchine",
    "quiz": [
     {
      "q": "جنس \"la macchina\" إيه؟",
      "options": [
       "مؤنث",
       "جمع",
       "محايد",
       "مذكر"
      ],
      "correct": 0
     }
    ],
    "nounIt": "macchina",
    "relatedWords": []
   },
   {
    "it": "mentre",
    "ar": "وهي",
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
    "it": "cercava",
    "ar": "كانت بتدور",
    "note": "Cercare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Cercare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Cercare\" منتمي لأي مجموعة؟",
      "options": [
       "شاذ",
       "-are",
       "-ere",
       "-ire"
      ],
      "correct": 1
     },
     {
      "q": "الزمن اللي اتصرف بيه \"cercava\" إيه؟",
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
    "it": "un lavoro",
    "ar": "شغل",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i lavori",
    "quiz": [
     {
      "q": "جنس \"un lavoro\" إيه؟",
      "options": [
       "مذكر",
       "مؤنث",
       "جمع",
       "محايد"
      ],
      "correct": 0
     }
    ],
    "nounIt": "lavoro",
    "relatedWords": []
   },
   {
    "it": "nuovo",
    "ar": "جديد",
    "note": null,
    "type": "aggettivo",
    "invariant": false,
    "forms": {
     "ms": "nuovo",
     "fs": "nuova",
     "mp": "nuovi",
     "fp": "nuove"
    },
    "quiz": [
     {
      "q": "\"nuovo\" هنا بيشتغل كـ إيه في الجملة؟",
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
   }
  ],
  "conj": {
   "verb": "Vendere",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho venduto"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai venduto"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha venduto"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha venduto"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo venduto"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete venduto"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno venduto"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "venduto",
    "q": "الفعل \"venduto\" — منتمي لأي مجموعة؟",
    "options": [
     "-are",
     "-ere",
     "-ire",
     "شاذ"
    ],
    "correct": 1
   },
   {
    "wordIt": "venduto",
    "q": "الزمن اللي اتصرف فيه \"venduto\" إيه؟",
    "options": [
     "Passato Prossimo",
     "Imperfetto",
     "Imperativo",
     "Presente"
    ],
    "correct": 0
   },
   {
    "wordIt": "venduto",
    "q": "الفعل المساعد اللي بيجي مع \"Vendere\" في الـ Passato Prossimo إيه؟",
    "options": [
     "ho",
     "sono",
     "avere",
     "essere"
    ],
    "correct": 2
   },
   {
    "wordIt": "la macchina",
    "q": "جنس \"la macchina\" إيه؟",
    "options": [
     "محايد",
     "مذكر",
     "مؤنث",
     "جمع"
    ],
    "correct": 2
   },
   {
    "wordIt": "mentre",
    "q": "\"mentre\" بمعنى إيه هنا؟",
    "options": [
     "بينما / في نفس الوقت اللي",
     "لكن",
     "عشان",
     "ولو"
    ],
    "correct": 0
   },
   {
    "wordIt": "cercava",
    "q": "الفعل \"cercava\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "cercava",
    "q": "الزمن اللي اتصرف فيه \"cercava\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 0
   },
   {
    "wordIt": "un lavoro",
    "q": "جنس \"un lavoro\" إيه؟",
    "options": [
     "محايد",
     "مذكر",
     "مؤنث",
     "جمع"
    ],
    "correct": 1
   },
   {
    "wordIt": "nuovo",
    "q": "\"nuovo\" هنا بيشتغل كـ إيه في الجملة؟",
    "options": [
     "فعل",
     "اسم",
     "صفة/ظرف",
     "حرف جر"
    ],
    "correct": 2
   }
  ]
 },
 {
  "it": "Lei cercava le chiavi quando ha venduto il vecchio divano",
  "ar": "هي كانت بتدور على المفاتيح لما باعت الكنبة القديمة.",
  "en": "She was looking for the keys when she sold the old couch.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "cercava",
    "ar": "كانت بتدور",
    "note": "Cercare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Cercare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Cercare\" منتمي لأي مجموعة؟",
      "options": [
       "-ire",
       "شاذ",
       "-are",
       "-ere"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"cercava\" إيه؟",
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
    "it": "le chiavi",
    "ar": "المفاتيح",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le chiavi",
    "quiz": [
     {
      "q": "جنس \"le chiavi\" إيه؟",
      "options": [
       "محايد",
       "مذكر",
       "مؤنث",
       "جمع"
      ],
      "correct": 2
     }
    ],
    "nounIt": "chiavi",
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
       "لما / عندما",
       "بينما / في نفس الوقت اللي",
       "لكن",
       "عشان"
      ],
      "correct": 0
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
    "it": "venduto",
    "ar": "باعت",
    "note": "Vendere، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Vendere",
    "group": "ere",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Vendere\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"venduto\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 0
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Vendere\" في الماضي إيه؟",
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
    "it": "il vecchio divano",
    "ar": "الكنبة القديمة",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i vecchio divani",
    "quiz": [
     {
      "q": "جنس \"il vecchio divano\" إيه؟",
      "options": [
       "جمع",
       "محايد",
       "مذكر",
       "مؤنث"
      ],
      "correct": 2
     }
    ],
    "nounIt": "vecchio divano",
    "relatedWords": []
   }
  ],
  "conj": {
   "verb": "Vendere",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho venduto"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai venduto"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha venduto"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha venduto"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo venduto"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete venduto"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno venduto"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "cercava",
    "q": "الفعل \"cercava\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "cercava",
    "q": "الزمن اللي اتصرف فيه \"cercava\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 0
   },
   {
    "wordIt": "le chiavi",
    "q": "جنس \"le chiavi\" إيه؟",
    "options": [
     "محايد",
     "مذكر",
     "مؤنث",
     "جمع"
    ],
    "correct": 2
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
    "wordIt": "venduto",
    "q": "الفعل \"venduto\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 0
   },
   {
    "wordIt": "venduto",
    "q": "الزمن اللي اتصرف فيه \"venduto\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "venduto",
    "q": "الفعل المساعد اللي بيجي مع \"Vendere\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 1
   },
   {
    "wordIt": "il vecchio divano",
    "q": "جنس \"il vecchio divano\" إيه؟",
    "options": [
     "مذكر",
     "مؤنث",
     "جمع",
     "محايد"
    ],
    "correct": 0
   }
  ]
 },
 {
  "it": "Lei ha bussato alla porta mentre noi dormivamo profondamente",
  "ar": "هي طرقت الباب واحنا كنا نايمين بعميق.",
  "en": "She knocked on the door while we were sleeping deeply.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "ha",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "bussato",
    "ar": "طرقت",
    "note": "Bussare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Bussare",
    "group": "are",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Bussare\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"bussato\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 0
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Bussare\" في الماضي إيه؟",
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
    "it": "alla porta",
    "ar": "الباب",
    "note": null,
    "type": "sintagma_prep",
    "prep": "a",
    "prepNote": "بيدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق)",
    "quiz": [
     {
      "q": "ليه استخدمنا حرف الجر في \"alla porta\"؟ الأصل إيه؟",
      "options": [
       "fra",
       "in",
       "a",
       "tra"
      ],
      "correct": 2
     }
    ]
   },
   {
    "it": "mentre",
    "ar": "واحنا",
    "note": null,
    "type": "congiunzione",
    "meaning": "بينما / في نفس الوقت اللي",
    "grammarId": "mentre",
    "quiz": [
     {
      "q": "\"mentre\" بمعنى إيه هنا؟",
      "options": [
       "عشان",
       "بينما / في نفس الوقت اللي",
       "لما / عندما",
       "لكن"
      ],
      "correct": 1
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "dormivamo",
    "ar": "كنا نايمين",
    "note": "Dormire، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Dormire",
    "group": "ire",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Dormire\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"dormivamo\" إيه؟",
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
    "it": "profondamente",
    "ar": "بعميق",
    "note": null,
    "type": "aggettivo",
    "invariant": true,
    "forms": {
     "ms": "profondamente",
     "fs": "profondamente",
     "mp": "profondamente",
     "fp": "profondamente"
    },
    "quiz": [
     {
      "q": "\"profondamente\" هنا بيشتغل كـ إيه في الجملة؟",
      "options": [
       "اسم",
       "صفة/ظرف",
       "حرف جر",
       "فعل"
      ],
      "correct": 1
     }
    ],
    "usage": "بيجي بعد الفعل كظرف، وشكله بيفضل يفضل ثابت مش بيتغيّر حسب الجنس أو العدد"
   }
  ],
  "conj": {
   "verb": "Bussare",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho bussato"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai bussato"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha bussato"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha bussato"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo bussato"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete bussato"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno bussato"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "bussato",
    "q": "الفعل \"bussato\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "bussato",
    "q": "الزمن اللي اتصرف فيه \"bussato\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "bussato",
    "q": "الفعل المساعد اللي بيجي مع \"Bussare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 1
   },
   {
    "wordIt": "alla porta",
    "q": "ليه استخدمنا حرف الجر في \"alla porta\"؟ الأصل إيه؟",
    "options": [
     "a",
     "in",
     "di",
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
    "wordIt": "dormivamo",
    "q": "الفعل \"dormivamo\" — منتمي لأي مجموعة؟",
    "options": [
     "-ire",
     "شاذ",
     "-are",
     "-ere"
    ],
    "correct": 0
   },
   {
    "wordIt": "dormivamo",
    "q": "الزمن اللي اتصرف فيه \"dormivamo\" إيه؟",
    "options": [
     "Imperativo",
     "Presente",
     "Passato Prossimo",
     "Imperfetto"
    ],
    "correct": 3
   },
   {
    "wordIt": "profondamente",
    "q": "\"profondamente\" هنا بيشتغل كـ إيه في الجملة؟",
    "options": [
     "فعل",
     "اسم",
     "صفة/ظرف",
     "حرف جر"
    ],
    "correct": 2
   }
  ]
 },
 {
  "it": "Lei dormiva tranquilla quando ha bussato il postino",
  "ar": "هي كانت نايمة بهدوء لما طرق ساعي البريد.",
  "en": "She was sleeping peacefully when the mailman knocked.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "dormiva",
    "ar": "كانت نايمة",
    "note": "Dormire، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Dormire",
    "group": "ire",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Dormire\" منتمي لأي مجموعة؟",
      "options": [
       "-ire",
       "شاذ",
       "-are",
       "-ere"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"dormiva\" إيه؟",
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
    "it": "tranquilla",
    "ar": "بهدوء",
    "note": null,
    "type": "aggettivo",
    "invariant": false,
    "forms": {
     "fs": "tranquilla",
     "ms": "tranquillo",
     "mp": "tranquilli",
     "fp": "tranquille"
    },
    "quiz": [
     {
      "q": "\"tranquilla\" هنا بيشتغل كـ إيه في الجملة؟",
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
       "لما / عندما",
       "بينما / في نفس الوقت اللي",
       "لكن",
       "عشان"
      ],
      "correct": 0
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
    "it": "bussato",
    "ar": "طرق",
    "note": "Bussare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Bussare",
    "group": "are",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Bussare\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"bussato\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 0
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Bussare\" في الماضي إيه؟",
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
    "it": "il postino",
    "ar": "ساعي البريد",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i postini",
    "quiz": [
     {
      "q": "جنس \"il postino\" إيه؟",
      "options": [
       "جمع",
       "محايد",
       "مذكر",
       "مؤنث"
      ],
      "correct": 2
     }
    ],
    "nounIt": "postino",
    "relatedWords": []
   }
  ],
  "conj": {
   "verb": "Bussare",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho bussato"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai bussato"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha bussato"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha bussato"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo bussato"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete bussato"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno bussato"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "dormiva",
    "q": "الفعل \"dormiva\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 1
   },
   {
    "wordIt": "dormiva",
    "q": "الزمن اللي اتصرف فيه \"dormiva\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 0
   },
   {
    "wordIt": "tranquilla",
    "q": "\"tranquilla\" هنا بيشتغل كـ إيه في الجملة؟",
    "options": [
     "حرف جر",
     "فعل",
     "اسم",
     "صفة/ظرف"
    ],
    "correct": 3
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
    "wordIt": "bussato",
    "q": "الفعل \"bussato\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "bussato",
    "q": "الزمن اللي اتصرف فيه \"bussato\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "bussato",
    "q": "الفعل المساعد اللي بيجي مع \"Bussare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 1
   },
   {
    "wordIt": "il postino",
    "q": "جنس \"il postino\" إيه؟",
    "options": [
     "مذكر",
     "مؤنث",
     "جمع",
     "محايد"
    ],
    "correct": 0
   }
  ]
 },
 {
  "it": "Lei ha trovato il libro mentre aspettava il treno",
  "ar": "هي لقيت الكتاب وهي كانت مستنية القطر.",
  "en": "She found the book while she was waiting for the train.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "ha",
    "ar": "",
    "note": "جزء من الفعل المساعد",
    "type": "omesso",
    "skipReason": "ausiliare"
   },
   {
    "it": "trovato",
    "ar": "لقيت",
    "note": "Trovare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Trovare",
    "group": "are",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Trovare\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"trovato\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 0
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Trovare\" في الماضي إيه؟",
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
    "it": "il libro",
    "ar": "الكتاب",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i libri",
    "quiz": [
     {
      "q": "جنس \"il libro\" إيه؟",
      "options": [
       "جمع",
       "محايد",
       "مذكر",
       "مؤنث"
      ],
      "correct": 2
     }
    ],
    "nounIt": "libro",
    "relatedWords": []
   },
   {
    "it": "mentre",
    "ar": "وهي",
    "note": null,
    "type": "congiunzione",
    "meaning": "بينما / في نفس الوقت اللي",
    "grammarId": "mentre",
    "quiz": [
     {
      "q": "\"mentre\" بمعنى إيه هنا؟",
      "options": [
       "عشان",
       "بينما / في نفس الوقت اللي",
       "لما / عندما",
       "لكن"
      ],
      "correct": 1
     }
    ],
    "kind": "أداة ربط زمنية"
   },
   {
    "it": "aspettava",
    "ar": "كانت مستنية",
    "note": "Aspettare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Aspettare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Aspettare\" منتمي لأي مجموعة؟",
      "options": [
       "-are",
       "-ere",
       "-ire",
       "شاذ"
      ],
      "correct": 0
     },
     {
      "q": "الزمن اللي اتصرف بيه \"aspettava\" إيه؟",
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
    "it": "il treno",
    "ar": "القطر",
    "note": null,
    "type": "nome_unit",
    "gender": "m",
    "plural": "i treni",
    "quiz": [
     {
      "q": "جنس \"il treno\" إيه؟",
      "options": [
       "مؤنث",
       "جمع",
       "محايد",
       "مذكر"
      ],
      "correct": 3
     }
    ],
    "nounIt": "treno",
    "relatedWords": []
   }
  ],
  "conj": {
   "verb": "Trovare",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho trovato"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai trovato"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha trovato"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha trovato"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo trovato"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete trovato"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno trovato"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "trovato",
    "q": "الفعل \"trovato\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "trovato",
    "q": "الزمن اللي اتصرف فيه \"trovato\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "trovato",
    "q": "الفعل المساعد اللي بيجي مع \"Trovare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 1
   },
   {
    "wordIt": "il libro",
    "q": "جنس \"il libro\" إيه؟",
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
    "wordIt": "aspettava",
    "q": "الفعل \"aspettava\" — منتمي لأي مجموعة؟",
    "options": [
     "-ire",
     "شاذ",
     "-are",
     "-ere"
    ],
    "correct": 2
   },
   {
    "wordIt": "aspettava",
    "q": "الزمن اللي اتصرف فيه \"aspettava\" إيه؟",
    "options": [
     "Imperativo",
     "Presente",
     "Passato Prossimo",
     "Imperfetto"
    ],
    "correct": 3
   },
   {
    "wordIt": "il treno",
    "q": "جنس \"il treno\" إيه؟",
    "options": [
     "مذكر",
     "مؤنث",
     "جمع",
     "محايد"
    ],
    "correct": 0
   }
  ]
 },
 {
  "it": "Lei aspettava una risposta quando ha trovato la soluzione",
  "ar": "هي كانت مستنية إجابة لما لقيت الحل.",
  "en": "She was waiting for an answer when she found the solution.",
  "pronoun": "Lei (هي)",
  "words": [
   {
    "it": "Lei",
    "ar": "هي",
    "note": null,
    "type": "omesso",
    "skipReason": "pronome"
   },
   {
    "it": "aspettava",
    "ar": "كانت مستنية",
    "note": "Aspettare، Imperfetto",
    "type": "verbo",
    "verbInfinitive": "Aspettare",
    "group": "are",
    "regular": true,
    "aux": null,
    "tense": "imperfetto",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Aspettare\" منتمي لأي مجموعة؟",
      "options": [
       "-ire",
       "شاذ",
       "-are",
       "-ere"
      ],
      "correct": 2
     },
     {
      "q": "الزمن اللي اتصرف بيه \"aspettava\" إيه؟",
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
    "it": "una risposta",
    "ar": "إجابة",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le risposte",
    "quiz": [
     {
      "q": "جنس \"una risposta\" إيه؟",
      "options": [
       "محايد",
       "مذكر",
       "مؤنث",
       "جمع"
      ],
      "correct": 2
     }
    ],
    "nounIt": "risposta",
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
       "لما / عندما",
       "بينما / في نفس الوقت اللي",
       "لكن",
       "عشان"
      ],
      "correct": 0
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
    "it": "trovato",
    "ar": "لقيت",
    "note": "Trovare، Passato Prossimo",
    "type": "verbo",
    "verbInfinitive": "Trovare",
    "group": "are",
    "regular": true,
    "aux": "avere",
    "tense": "passato",
    "transitive": true,
    "quiz": [
     {
      "q": "الفعل \"Trovare\" منتمي لأي مجموعة؟",
      "options": [
       "-ere",
       "-ire",
       "شاذ",
       "-are"
      ],
      "correct": 3
     },
     {
      "q": "الزمن اللي اتصرف بيه \"trovato\" إيه؟",
      "options": [
       "Passato Prossimo",
       "Imperfetto",
       "Imperativo",
       "Presente"
      ],
      "correct": 0
     },
     {
      "q": "الفعل المساعد اللي بيجي مع \"Trovare\" في الماضي إيه؟",
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
    "it": "la soluzione",
    "ar": "الحل",
    "note": null,
    "type": "nome_unit",
    "gender": "f",
    "plural": "le soluzioni",
    "quiz": [
     {
      "q": "جنس \"la soluzione\" إيه؟",
      "options": [
       "جمع",
       "محايد",
       "مذكر",
       "مؤنث"
      ],
      "correct": 3
     }
    ],
    "nounIt": "soluzione",
    "relatedWords": []
   }
  ],
  "conj": {
   "verb": "Trovare",
   "tense": "Passato Prossimo",
   "regular": true,
   "rows": [
    {
     "person": "Io (أنا)",
     "form": "Ho trovato"
    },
    {
     "person": "Tu (أنت)",
     "form": "Hai trovato"
    },
    {
     "person": "Lui (هو)",
     "form": "Ha trovato"
    },
    {
     "person": "Lei (هي)",
     "form": "Ha trovato"
    },
    {
     "person": "Noi (احنا)",
     "form": "Abbiamo trovato"
    },
    {
     "person": "Voi (انتم)",
     "form": "Avete trovato"
    },
    {
     "person": "Loro (هم)",
     "form": "Hanno trovato"
    }
   ]
  },
  "quiz": [
   {
    "wordIt": "aspettava",
    "q": "الفعل \"aspettava\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "aspettava",
    "q": "الزمن اللي اتصرف فيه \"aspettava\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 0
   },
   {
    "wordIt": "una risposta",
    "q": "جنس \"una risposta\" إيه؟",
    "options": [
     "محايد",
     "مذكر",
     "مؤنث",
     "جمع"
    ],
    "correct": 2
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
    "wordIt": "trovato",
    "q": "الفعل \"trovato\" — منتمي لأي مجموعة؟",
    "options": [
     "-ere",
     "-ire",
     "شاذ",
     "-are"
    ],
    "correct": 3
   },
   {
    "wordIt": "trovato",
    "q": "الزمن اللي اتصرف فيه \"trovato\" إيه؟",
    "options": [
     "Imperfetto",
     "Imperativo",
     "Presente",
     "Passato Prossimo"
    ],
    "correct": 3
   },
   {
    "wordIt": "trovato",
    "q": "الفعل المساعد اللي بيجي مع \"Trovare\" في الـ Passato Prossimo إيه؟",
    "options": [
     "sono",
     "avere",
     "essere",
     "ho"
    ],
    "correct": 1
   },
   {
    "wordIt": "la soluzione",
    "q": "جنس \"la soluzione\" إيه؟",
    "options": [
     "مذكر",
     "مؤنث",
     "جمع",
     "محايد"
    ],
    "correct": 1
   }
  ]
 }
];
