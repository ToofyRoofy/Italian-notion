const LESSON_LUI = [
  {
    "it": "Lui ha visto l'errore mentre era in ufficio; Vado in Italia",
    "ar": "هو شاف الغلطة بينما كان في المكتب.؛ أذهب إلى إيطاليا",
    "en": "He saw l'errore while was in ufficio.; I go to Italy",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "Ha",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "visto",
        "ar": "شاف",
        "note": "Vedere، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Vedere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "passato",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Vedere» في Passato Prossimo؟",
            "options": [
              "Ho visto",
              "Ha visto",
              "Hai visto",
              "Abbiamo visto"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Ha visto» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Vedere» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          },
          {
            "q": "الزمن المستخدم في «Ha visto» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "l'errore",
        "ar": "الغلطة",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "mentre",
        "ar": "بينما",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "«mentre» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط"
      },
      {
        "it": "era",
        "ar": "كان",
        "note": "Essere، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Essere",
        "group": "ere",
        "regular": false,
        "aux": null,
        "tense": "imperfetto",
        "transitive": false,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Essere» في Imperfetto؟",
            "options": [
              "Ero",
              "Era",
              "Eri",
              "Eravamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Era» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Era» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "الفعل «Essere» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
            "options": [
              "منتظم",
              "شاذ/ذو جذر خاص"
            ],
            "correct": 1
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": null
      },
      {
        "it": "in ufficio",
        "ar": "في المكتب",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "Vado",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "in",
        "ar": "إلى",
        "note": "الاتجاه إلى دولة أو منطقة: للسفر إلى دولة أو قارة أو منطقة.",
        "type": "preposizione",
        "grammarId": "prep_in",
        "prepUsage": {
          "id": "in_direzione",
          "title": "الاتجاه إلى دولة أو منطقة",
          "meaning": "إلى",
          "color": "#d81b60",
          "base": "in"
        },
        "quiz": []
      },
      {
        "it": "Italia",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      }
    ],
    "conj": {
      "verb": "Vedere",
      "tense": "Passato Prossimo",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho visto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai visto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha visto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha visto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo visto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete visto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno visto"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "visto",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Vedere» في Passato Prossimo؟",
        "options": [
          "Ho visto",
          "Ha visto",
          "Hai visto",
          "Abbiamo visto"
        ],
        "correct": 1
      },
      {
        "wordIt": "visto",
        "q": "التصريف «Ha visto» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "visto",
        "q": "الفعل المساعد مع «Vedere» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 0
      },
      {
        "wordIt": "visto",
        "q": "الزمن المستخدم في «Ha visto» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "mentre",
        "q": "«mentre» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 1
      },
      {
        "wordIt": "era",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Essere» في Imperfetto؟",
        "options": [
          "Ero",
          "Era",
          "Eri",
          "Eravamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "era",
        "q": "التصريف «Era» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "era",
        "q": "الزمن المستخدم في «Era» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "era",
        "q": "الفعل «Essere» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
        "options": [
          "منتظم",
          "شاذ/ذو جذر خاص"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "in",
      "id": "in_direzione",
      "title": "الاتجاه إلى دولة أو منطقة",
      "meaning": "إلى",
      "description": "للسفر إلى دولة أو قارة أو منطقة.",
      "form": "in",
      "it": "Vado in Italia",
      "ar": "أذهب إلى إيطاليا",
      "en": "I go to Italy",
      "color": "#d81b60",
      "grammarId": "prep_in"
    }
  },
  {
    "it": "Lui ha preso appunti mentre faceva il controllo; Parto in estate",
    "ar": "هو أخد ملاحظات بينما كان بيعمل الفحص.؛ أسافر في الصيف",
    "en": "He took appunti while was doing il controllo.; I leave in summer",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "Ha",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "preso",
        "ar": "أخد",
        "note": "Prendere، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Prendere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "passato",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Prendere» في Passato Prossimo؟",
            "options": [
              "Ho preso",
              "Ha preso",
              "Hai preso",
              "Abbiamo preso"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Ha preso» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Prendere» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          },
          {
            "q": "الزمن المستخدم في «Ha preso» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "appunti",
        "ar": "ملاحظات",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "mentre",
        "ar": "بينما",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "«mentre» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط"
      },
      {
        "it": "faceva",
        "ar": "كان بيعمل",
        "note": "Fare، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Fare",
        "group": "are",
        "regular": false,
        "aux": null,
        "tense": "imperfetto",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Fare» في Imperfetto؟",
            "options": [
              "Facevo",
              "Faceva",
              "Facevi",
              "Facevamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Faceva» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Faceva» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "الفعل «Fare» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
            "options": [
              "منتظم",
              "شاذ/ذو جذر خاص"
            ],
            "correct": 1
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "il controllo",
        "ar": "الفحص",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "Parto",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "in",
        "ar": "في",
        "note": "الفترة أو الفصل: مع الفصول والسنوات والفترات العامة.",
        "type": "preposizione",
        "grammarId": "prep_in",
        "prepUsage": {
          "id": "in_tempo",
          "title": "الفترة أو الفصل",
          "meaning": "في",
          "color": "#00acc1",
          "base": "in"
        },
        "quiz": []
      },
      {
        "it": "estate",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      }
    ],
    "conj": {
      "verb": "Prendere",
      "tense": "Passato Prossimo",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho preso"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai preso"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha preso"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha preso"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo preso"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete preso"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno preso"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "preso",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Prendere» في Passato Prossimo؟",
        "options": [
          "Ho preso",
          "Ha preso",
          "Hai preso",
          "Abbiamo preso"
        ],
        "correct": 1
      },
      {
        "wordIt": "preso",
        "q": "التصريف «Ha preso» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "preso",
        "q": "الفعل المساعد مع «Prendere» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 0
      },
      {
        "wordIt": "preso",
        "q": "الزمن المستخدم في «Ha preso» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "mentre",
        "q": "«mentre» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 1
      },
      {
        "wordIt": "faceva",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Fare» في Imperfetto؟",
        "options": [
          "Facevo",
          "Faceva",
          "Facevi",
          "Facevamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "faceva",
        "q": "التصريف «Faceva» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "faceva",
        "q": "الزمن المستخدم في «Faceva» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "faceva",
        "q": "الفعل «Fare» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
        "options": [
          "منتظم",
          "شاذ/ذو جذر خاص"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "in",
      "id": "in_tempo",
      "title": "الفترة أو الفصل",
      "meaning": "في",
      "description": "مع الفصول والسنوات والفترات العامة.",
      "form": "in",
      "it": "Parto in estate",
      "ar": "أسافر في الصيف",
      "en": "I leave in summer",
      "color": "#00acc1",
      "grammarId": "prep_in"
    }
  },
  {
    "it": "Lui ha scritto il messaggio mentre diceva la verità; Lavoro in silenzio",
    "ar": "هو كتب الرسالة بينما كان بيقول الحقيقة.؛ أعمل في صمت",
    "en": "He wrote il messaggio while was saying la verità.; I work in silence",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "Ha",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "scritto",
        "ar": "كتب",
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
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Scrivere» في Passato Prossimo؟",
            "options": [
              "Ho scritto",
              "Ha scritto",
              "Hai scritto",
              "Abbiamo scritto"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Ha scritto» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Scrivere» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          },
          {
            "q": "الزمن المستخدم في «Ha scritto» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "il messaggio",
        "ar": "الرسالة",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "mentre",
        "ar": "بينما",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "«mentre» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط"
      },
      {
        "it": "diceva",
        "ar": "كان بيقول",
        "note": "Dire، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Dire",
        "group": "ire",
        "regular": false,
        "aux": null,
        "tense": "imperfetto",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Dire» في Imperfetto؟",
            "options": [
              "Dicevo",
              "Diceva",
              "Dicevi",
              "Dicevamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Diceva» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Diceva» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "الفعل «Dire» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
            "options": [
              "منتظم",
              "شاذ/ذو جذر خاص"
            ],
            "correct": 1
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "la verità",
        "ar": "الحقيقة",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "Lavoro",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "in",
        "ar": "بـ / في حالة",
        "note": "الكيفية أو الحالة: يصف الطريقة أو الحالة التي يتم بها الفعل.",
        "type": "preposizione",
        "grammarId": "prep_in",
        "prepUsage": {
          "id": "in_modo",
          "title": "الكيفية أو الحالة",
          "meaning": "بـ / في حالة",
          "color": "#6d4c41",
          "base": "in"
        },
        "quiz": []
      },
      {
        "it": "silenzio",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
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
          "person": "Noi (إحنا)",
          "form": "Abbiamo scritto"
        },
        {
          "person": "Voi (أنتم)",
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
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Scrivere» في Passato Prossimo؟",
        "options": [
          "Ho scritto",
          "Ha scritto",
          "Hai scritto",
          "Abbiamo scritto"
        ],
        "correct": 1
      },
      {
        "wordIt": "scritto",
        "q": "التصريف «Ha scritto» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "scritto",
        "q": "الفعل المساعد مع «Scrivere» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 0
      },
      {
        "wordIt": "scritto",
        "q": "الزمن المستخدم في «Ha scritto» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "mentre",
        "q": "«mentre» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 1
      },
      {
        "wordIt": "diceva",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Dire» في Imperfetto؟",
        "options": [
          "Dicevo",
          "Diceva",
          "Dicevi",
          "Dicevamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "diceva",
        "q": "التصريف «Diceva» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "diceva",
        "q": "الزمن المستخدم في «Diceva» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "diceva",
        "q": "الفعل «Dire» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
        "options": [
          "منتظم",
          "شاذ/ذو جذر خاص"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "in",
      "id": "in_modo",
      "title": "الكيفية أو الحالة",
      "meaning": "بـ / في حالة",
      "description": "يصف الطريقة أو الحالة التي يتم بها الفعل.",
      "form": "in",
      "it": "Lavoro in silenzio",
      "ar": "أعمل في صمت",
      "en": "I work in silence",
      "color": "#6d4c41",
      "grammarId": "prep_in"
    }
  },
  {
    "it": "Lui ha letto il rapporto mentre beveva un tè; Finisco in due ore",
    "ar": "هو قرأ التقرير بينما كان بيشرب شاي.؛ أنتهي خلال ساعتين",
    "en": "He read il rapporto while was drinking un tè.; I finish in two hours",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "Ha",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "letto",
        "ar": "قرأ",
        "note": "Leggere، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Leggere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "passato",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Leggere» في Passato Prossimo؟",
            "options": [
              "Ho letto",
              "Ha letto",
              "Hai letto",
              "Abbiamo letto"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Ha letto» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Leggere» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          },
          {
            "q": "الزمن المستخدم في «Ha letto» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "il rapporto",
        "ar": "التقرير",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "mentre",
        "ar": "بينما",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "«mentre» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط"
      },
      {
        "it": "beveva",
        "ar": "كان بيشرب",
        "note": "Bere، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Bere",
        "group": "ere",
        "regular": false,
        "aux": null,
        "tense": "imperfetto",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Bere» في Imperfetto؟",
            "options": [
              "Bevevo",
              "Beveva",
              "Bevevi",
              "Bevevamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Beveva» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Beveva» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "الفعل «Bere» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
            "options": [
              "منتظم",
              "شاذ/ذو جذر خاص"
            ],
            "correct": 1
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "un tè",
        "ar": "شاي",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "F",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "in",
        "ar": "خلال",
        "note": "المدة اللازمة للإنجاز: يحدد الوقت المطلوب لإتمام شيء.",
        "type": "preposizione",
        "grammarId": "prep_in",
        "prepUsage": {
          "id": "in_durata",
          "title": "المدة اللازمة للإنجاز",
          "meaning": "خلال",
          "color": "#e53935",
          "base": "in"
        },
        "quiz": []
      },
      {
        "it": "isco in due ore",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      }
    ],
    "conj": {
      "verb": "Leggere",
      "tense": "Passato Prossimo",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho letto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai letto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha letto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha letto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo letto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete letto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno letto"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "letto",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Leggere» في Passato Prossimo؟",
        "options": [
          "Ho letto",
          "Ha letto",
          "Hai letto",
          "Abbiamo letto"
        ],
        "correct": 1
      },
      {
        "wordIt": "letto",
        "q": "التصريف «Ha letto» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "letto",
        "q": "الفعل المساعد مع «Leggere» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 0
      },
      {
        "wordIt": "letto",
        "q": "الزمن المستخدم في «Ha letto» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "mentre",
        "q": "«mentre» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 1
      },
      {
        "wordIt": "beveva",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Bere» في Imperfetto؟",
        "options": [
          "Bevevo",
          "Beveva",
          "Bevevi",
          "Bevevamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "beveva",
        "q": "التصريف «Beveva» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "beveva",
        "q": "الزمن المستخدم في «Beveva» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "beveva",
        "q": "الفعل «Bere» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
        "options": [
          "منتظم",
          "شاذ/ذو جذر خاص"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "in",
      "id": "in_durata",
      "title": "المدة اللازمة للإنجاز",
      "meaning": "خلال",
      "description": "يحدد الوقت المطلوب لإتمام شيء.",
      "form": "in",
      "it": "Finisco in due ore",
      "ar": "أنتهي خلال ساعتين",
      "en": "I finish in two hours",
      "color": "#e53935",
      "grammarId": "prep_in"
    }
  },
  {
    "it": "Lui ha promesso di finire mentre poneva una condizione; Scrivo con la penna",
    "ar": "هو وعد إني أخلص بينما كان بيطرح شرط.؛ أكتب بالقلم",
    "en": "He promised di finire while was posing una condizione.; I write with a pen",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "Ha",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "promesso",
        "ar": "وعد",
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
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Promettere» في Passato Prossimo؟",
            "options": [
              "Ho promesso",
              "Ha promesso",
              "Hai promesso",
              "Abbiamo promesso"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Ha promesso» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Promettere» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          },
          {
            "q": "الزمن المستخدم في «Ha promesso» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "di finire",
        "ar": "إني أخلص",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "mentre",
        "ar": "بينما",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "«mentre» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط"
      },
      {
        "it": "poneva",
        "ar": "كان بيطرح",
        "note": "Porre، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Porre",
        "group": "irregolare",
        "regular": false,
        "aux": null,
        "tense": "imperfetto",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Porre» في Imperfetto؟",
            "options": [
              "Ponevo",
              "Poneva",
              "Ponevi",
              "Ponevamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Poneva» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Poneva» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "الفعل «Porre» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
            "options": [
              "منتظم",
              "شاذ/ذو جذر خاص"
            ],
            "correct": 1
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "una condizione",
        "ar": "شرط",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "Scrivo",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "con",
        "ar": "بـ / باستخدام",
        "note": "الأداة أو الوسيلة: يحدد الأداة المستعملة لعمل الفعل.",
        "type": "preposizione",
        "grammarId": "prep_con",
        "prepUsage": {
          "id": "con_strumento",
          "title": "الأداة أو الوسيلة",
          "meaning": "بـ / باستخدام",
          "color": "#8e24aa",
          "base": "con"
        },
        "quiz": []
      },
      {
        "it": "la penna",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
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
          "person": "Noi (إحنا)",
          "form": "Abbiamo promesso"
        },
        {
          "person": "Voi (أنتم)",
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
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Promettere» في Passato Prossimo؟",
        "options": [
          "Ho promesso",
          "Ha promesso",
          "Hai promesso",
          "Abbiamo promesso"
        ],
        "correct": 1
      },
      {
        "wordIt": "promesso",
        "q": "التصريف «Ha promesso» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "promesso",
        "q": "الفعل المساعد مع «Promettere» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 0
      },
      {
        "wordIt": "promesso",
        "q": "الزمن المستخدم في «Ha promesso» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "mentre",
        "q": "«mentre» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 1
      },
      {
        "wordIt": "poneva",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Porre» في Imperfetto؟",
        "options": [
          "Ponevo",
          "Poneva",
          "Ponevi",
          "Ponevamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "poneva",
        "q": "التصريف «Poneva» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "poneva",
        "q": "الزمن المستخدم في «Poneva» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "poneva",
        "q": "الفعل «Porre» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
        "options": [
          "منتظم",
          "شاذ/ذو جذر خاص"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "con",
      "id": "con_strumento",
      "title": "الأداة أو الوسيلة",
      "meaning": "بـ / باستخدام",
      "description": "يحدد الأداة المستعملة لعمل الفعل.",
      "form": "con",
      "it": "Scrivo con la penna",
      "ar": "أكتب بالقلم",
      "en": "I write with a pen",
      "color": "#8e24aa",
      "grammarId": "prep_con"
    }
  },
  {
    "it": "Lui è andato in ufficio mentre traduceva un documento; Parlo con gentilezza",
    "ar": "هو راح المكتب بينما كان بيترجم مستند.؛ أتحدث بلطف",
    "en": "He went in ufficio while was translating un documento.; I speak kindly",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "È",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "andato",
        "ar": "راح",
        "note": "Andare، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Andare",
        "group": "are",
        "regular": false,
        "aux": "essere",
        "tense": "passato",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Andare» في Passato Prossimo؟",
            "options": [
              "Sono andato",
              "È andato",
              "Sei andato",
              "È andata"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «È andato» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui (هو)",
              "Tu (أنت)",
              "Lui/Lei (هو/هي)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Andare» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «È andato» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "in ufficio",
        "ar": "المكتب",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "mentre",
        "ar": "بينما",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "«mentre» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط"
      },
      {
        "it": "traduceva",
        "ar": "كان بيترجم",
        "note": "Tradurre، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Tradurre",
        "group": "irregolare",
        "regular": false,
        "aux": null,
        "tense": "imperfetto",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Tradurre» في Imperfetto؟",
            "options": [
              "Traducevo",
              "Traduceva",
              "Traducevi",
              "Traducevamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Traduceva» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Traduceva» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "الفعل «Tradurre» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
            "options": [
              "منتظم",
              "شاذ/ذو جذر خاص"
            ],
            "correct": 1
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "un documento",
        "ar": "مستند",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "Parlo",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "con",
        "ar": "بـ / مع",
        "note": "الكيفية: يصف الطريقة التي حدث بها الفعل.",
        "type": "preposizione",
        "grammarId": "prep_con",
        "prepUsage": {
          "id": "con_modo",
          "title": "الكيفية",
          "meaning": "بـ / مع",
          "color": "#00897b",
          "base": "con"
        },
        "quiz": []
      },
      {
        "it": "gentilezza",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
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
          "person": "Noi (إحنا)",
          "form": "Siamo andati/e"
        },
        {
          "person": "Voi (أنتم)",
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
        "wordIt": "andato",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Andare» في Passato Prossimo؟",
        "options": [
          "Sono andato",
          "È andato",
          "Sei andato",
          "È andata"
        ],
        "correct": 1
      },
      {
        "wordIt": "andato",
        "q": "التصريف «È andato» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui (هو)",
          "Tu (أنت)",
          "Lui/Lei (هو/هي)"
        ],
        "correct": 1
      },
      {
        "wordIt": "andato",
        "q": "الفعل المساعد مع «Andare» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 1
      },
      {
        "wordIt": "andato",
        "q": "الزمن المستخدم في «È andato» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "mentre",
        "q": "«mentre» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 1
      },
      {
        "wordIt": "traduceva",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Tradurre» في Imperfetto؟",
        "options": [
          "Traducevo",
          "Traduceva",
          "Traducevi",
          "Traducevamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "traduceva",
        "q": "التصريف «Traduceva» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "traduceva",
        "q": "الزمن المستخدم في «Traduceva» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "traduceva",
        "q": "الفعل «Tradurre» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
        "options": [
          "منتظم",
          "شاذ/ذو جذر خاص"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "con",
      "id": "con_modo",
      "title": "الكيفية",
      "meaning": "بـ / مع",
      "description": "يصف الطريقة التي حدث بها الفعل.",
      "form": "con",
      "it": "Parlo con gentilezza",
      "ar": "أتحدث بلطف",
      "en": "I speak kindly",
      "color": "#00897b",
      "grammarId": "prep_con"
    }
  },
  {
    "it": "Lui è uscito dalla fabbrica perché produceva un nuovo modello; È una ragazza con i capelli neri",
    "ar": "هو خرج من المصنع لأن كان بينتج موديل جديد.؛ هي فتاة ذات شعر أسود",
    "en": "He went out dalla fabbrica because was producing un nuovo modello.; She is a girl with black hair",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "È",
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
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Uscire» في Passato Prossimo؟",
            "options": [
              "Sono uscito",
              "È uscito",
              "Sei uscito",
              "È uscita"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «È uscito» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui (هو)",
              "Tu (أنت)",
              "Lui/Lei (هو/هي)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Uscire» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «È uscito» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "dalla fabbrica",
        "ar": "من المصنع",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "perché",
        "ar": "لأن",
        "note": null,
        "type": "congiunzione",
        "meaning": "لأن",
        "quiz": [
          {
            "q": "«perché» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 2
          }
        ],
        "kind": "أداة ربط",
        "grammarId": "congiunzioni"
      },
      {
        "it": "produceva",
        "ar": "كان بينتج",
        "note": "Produrre، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Produrre",
        "group": "irregolare",
        "regular": false,
        "aux": null,
        "tense": "imperfetto",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Produrre» في Imperfetto؟",
            "options": [
              "Producevo",
              "Produceva",
              "Producevi",
              "Producevamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Produceva» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Produceva» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "الفعل «Produrre» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
            "options": [
              "منتظم",
              "شاذ/ذو جذر خاص"
            ],
            "correct": 1
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "un nuovo modello",
        "ar": "موديل جديد",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "È una ragazza",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "con",
        "ar": "ذو / ذات",
        "note": "الصفة أو الميزة: يضيف صفة أو ميزة إلى اسم.",
        "type": "preposizione",
        "grammarId": "prep_con",
        "prepUsage": {
          "id": "con_qualita",
          "title": "الصفة أو الميزة",
          "meaning": "ذو / ذات",
          "color": "#fb8c00",
          "base": "con"
        },
        "quiz": []
      },
      {
        "it": "i capelli neri",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
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
          "person": "Noi (إحنا)",
          "form": "Siamo usciti/e"
        },
        {
          "person": "Voi (أنتم)",
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
        "wordIt": "uscito",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Uscire» في Passato Prossimo؟",
        "options": [
          "Sono uscito",
          "È uscito",
          "Sei uscito",
          "È uscita"
        ],
        "correct": 1
      },
      {
        "wordIt": "uscito",
        "q": "التصريف «È uscito» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui (هو)",
          "Tu (أنت)",
          "Lui/Lei (هو/هي)"
        ],
        "correct": 1
      },
      {
        "wordIt": "uscito",
        "q": "الفعل المساعد مع «Uscire» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 1
      },
      {
        "wordIt": "uscito",
        "q": "الزمن المستخدم في «È uscito» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "perché",
        "q": "«perché» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 2
      },
      {
        "wordIt": "produceva",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Produrre» في Imperfetto؟",
        "options": [
          "Producevo",
          "Produceva",
          "Producevi",
          "Producevamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "produceva",
        "q": "التصريف «Produceva» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "produceva",
        "q": "الزمن المستخدم في «Produceva» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "produceva",
        "q": "الفعل «Produrre» في Imperfetto منتظم ولا شاذ/ذو جذر خاص؟",
        "options": [
          "منتظم",
          "شاذ/ذو جذر خاص"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "con",
      "id": "con_qualita",
      "title": "الصفة أو الميزة",
      "meaning": "ذو / ذات",
      "description": "يضيف صفة أو ميزة إلى اسم.",
      "form": "con",
      "it": "È una ragazza con i capelli neri",
      "ar": "هي فتاة ذات شعر أسود",
      "en": "She is a girl with black hair",
      "color": "#fb8c00",
      "grammarId": "prep_con"
    }
  },
  {
    "it": "Lui ha avuto un dubbio mentre parlava con il direttore; Il libro è sul tavolo",
    "ar": "هو كان عنده شك بينما كان بيتكلم مع المدير.؛ الكتاب على الطاولة",
    "en": "He had un dubbio while was speaking con il direttore.; The book is on the table",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "Ha",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "avuto",
        "ar": "كان عنده",
        "note": "Avere، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Avere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "passato",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Avere» في Passato Prossimo؟",
            "options": [
              "Ho avuto",
              "Ha avuto",
              "Hai avuto",
              "Abbiamo avuto"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Ha avuto» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Avere» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          },
          {
            "q": "الزمن المستخدم في «Ha avuto» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "un dubbio",
        "ar": "شك",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "mentre",
        "ar": "بينما",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "«mentre» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط"
      },
      {
        "it": "parlava",
        "ar": "كان بيتكلم",
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
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Parlare» في Imperfetto؟",
            "options": [
              "Parlavo",
              "Parlava",
              "Parlavi",
              "Parlavamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Parlava» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Parlava» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "مع الضمير «Lui (هو)»، ما نهاية مجموعة -are في Imperfetto؟",
            "options": [
              "-eva",
              "-ava",
              "-iva",
              "—"
            ],
            "correct": 1
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "con il direttore",
        "ar": "مع المدير",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "Il libro è",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "sul",
        "ar": "على",
        "note": "على سطح: يحدد وجود شيء فوق سطح.",
        "type": "preposizione",
        "grammarId": "prep_su",
        "prepUsage": {
          "id": "su_superficie",
          "title": "على سطح",
          "meaning": "على",
          "color": "#d81b60",
          "base": "su"
        },
        "quiz": []
      },
      {
        "it": "tavolo",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      }
    ],
    "conj": {
      "verb": "Avere",
      "tense": "Passato Prossimo",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho avuto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai avuto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha avuto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha avuto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo avuto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete avuto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno avuto"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "avuto",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Avere» في Passato Prossimo؟",
        "options": [
          "Ho avuto",
          "Ha avuto",
          "Hai avuto",
          "Abbiamo avuto"
        ],
        "correct": 1
      },
      {
        "wordIt": "avuto",
        "q": "التصريف «Ha avuto» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "avuto",
        "q": "الفعل المساعد مع «Avere» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 0
      },
      {
        "wordIt": "avuto",
        "q": "الزمن المستخدم في «Ha avuto» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "mentre",
        "q": "«mentre» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 1
      },
      {
        "wordIt": "parlava",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Parlare» في Imperfetto؟",
        "options": [
          "Parlavo",
          "Parlava",
          "Parlavi",
          "Parlavamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "parlava",
        "q": "التصريف «Parlava» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "parlava",
        "q": "الزمن المستخدم في «Parlava» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "parlava",
        "q": "مع الضمير «Lui (هو)»، ما نهاية مجموعة -are في Imperfetto؟",
        "options": [
          "-eva",
          "-ava",
          "-iva",
          "—"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "su",
      "id": "su_superficie",
      "title": "على سطح",
      "meaning": "على",
      "description": "يحدد وجود شيء فوق سطح.",
      "form": "sul",
      "it": "Il libro è sul tavolo",
      "ar": "الكتاب على الطاولة",
      "en": "The book is on the table",
      "color": "#d81b60",
      "grammarId": "prep_su"
    }
  },
  {
    "it": "Lui ha potuto correggere l'errore perché credeva che fosse facile; Leggo un libro su Roma",
    "ar": "هو قدر أصحح الغلطة لأن كان فاكر إنها سهلة.؛ أقرأ كتابًا عن روما",
    "en": "He could correggere l'errore because was believing che fosse facile.; I read a book about Rome",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "Ha",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "potuto",
        "ar": "قدر",
        "note": "Potere، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Potere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "passato",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Potere» في Passato Prossimo؟",
            "options": [
              "Ho potuto",
              "Ha potuto",
              "Hai potuto",
              "Abbiamo potuto"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Ha potuto» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Potere» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          },
          {
            "q": "الزمن المستخدم في «Ha potuto» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "correggere l'errore",
        "ar": "أصحح الغلطة",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "perché",
        "ar": "لأن",
        "note": null,
        "type": "congiunzione",
        "meaning": "لأن",
        "quiz": [
          {
            "q": "«perché» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 2
          }
        ],
        "kind": "أداة ربط",
        "grammarId": "congiunzioni"
      },
      {
        "it": "credeva",
        "ar": "كان فاكر",
        "note": "Credere، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Credere",
        "group": "ere",
        "regular": true,
        "aux": null,
        "tense": "imperfetto",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Credere» في Imperfetto؟",
            "options": [
              "Credevo",
              "Credeva",
              "Credevi",
              "Credevamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Credeva» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Credeva» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "مع الضمير «Lui (هو)»، ما نهاية مجموعة -ere في Imperfetto؟",
            "options": [
              "-ava",
              "-eva",
              "-iva",
              "—"
            ],
            "correct": 1
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "che fosse facile",
        "ar": "إنها سهلة",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "Leggo un libro",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "su",
        "ar": "عن",
        "note": "الموضوع: يحدد موضوع كتاب أو حديث.",
        "type": "preposizione",
        "grammarId": "prep_su",
        "prepUsage": {
          "id": "su_argomento",
          "title": "الموضوع",
          "meaning": "عن",
          "color": "#5e35b1",
          "base": "su"
        },
        "quiz": []
      },
      {
        "it": "Roma",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      }
    ],
    "conj": {
      "verb": "Potere",
      "tense": "Passato Prossimo",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho potuto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai potuto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha potuto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha potuto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo potuto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete potuto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno potuto"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "potuto",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Potere» في Passato Prossimo؟",
        "options": [
          "Ho potuto",
          "Ha potuto",
          "Hai potuto",
          "Abbiamo potuto"
        ],
        "correct": 1
      },
      {
        "wordIt": "potuto",
        "q": "التصريف «Ha potuto» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "potuto",
        "q": "الفعل المساعد مع «Potere» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 0
      },
      {
        "wordIt": "potuto",
        "q": "الزمن المستخدم في «Ha potuto» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "perché",
        "q": "«perché» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 2
      },
      {
        "wordIt": "credeva",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Credere» في Imperfetto؟",
        "options": [
          "Credevo",
          "Credeva",
          "Credevi",
          "Credevamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "credeva",
        "q": "التصريف «Credeva» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "credeva",
        "q": "الزمن المستخدم في «Credeva» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "credeva",
        "q": "مع الضمير «Lui (هو)»، ما نهاية مجموعة -ere في Imperfetto؟",
        "options": [
          "-ava",
          "-eva",
          "-iva",
          "—"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "su",
      "id": "su_argomento",
      "title": "الموضوع",
      "meaning": "عن",
      "description": "يحدد موضوع كتاب أو حديث.",
      "form": "su",
      "it": "Leggo un libro su Roma",
      "ar": "أقرأ كتابًا عن روما",
      "en": "I read a book about Rome",
      "color": "#5e35b1",
      "grammarId": "prep_su"
    }
  },
  {
    "it": "Lui ha voluto tornare a casa perché dormiva sul divano; Costa sui venti euro",
    "ar": "هو حب يرجع البيت لأن كان بينام على الكنبة.؛ سعره حوالي عشرين يورو",
    "en": "He wanted tornare a casa because was sleeping sul divano.; It costs about twenty euros",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Lui",
        "ar": "هو",
        "note": "ضمير فاعل",
        "type": "pronome",
        "grammarId": "pronomi_soggetto",
        "quiz": []
      },
      {
        "it": "Ha",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "voluto",
        "ar": "حب",
        "note": "Volere، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Volere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "passato",
        "transitive": true,
        "quiz": [
          {
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Volere» في Passato Prossimo؟",
            "options": [
              "Ho voluto",
              "Ha voluto",
              "Hai voluto",
              "Abbiamo voluto"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Ha voluto» في Passato Prossimo يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد مع «Volere» في Passato Prossimo إيه؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          },
          {
            "q": "الزمن المستخدم في «Ha voluto» إيه؟",
            "options": [
              "Presente",
              "Imperfetto",
              "Passato Prossimo",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "tornare a casa",
        "ar": "يرجع البيت",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "perché",
        "ar": "لأن",
        "note": null,
        "type": "congiunzione",
        "meaning": "لأن",
        "quiz": [
          {
            "q": "«perché» معناها إيه هنا؟",
            "options": [
              "لكن",
              "بينما",
              "لأن",
              "بعدما"
            ],
            "correct": 2
          }
        ],
        "kind": "أداة ربط",
        "grammarId": "congiunzioni"
      },
      {
        "it": "dormiva",
        "ar": "كان بينام",
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
            "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Dormire» في Imperfetto؟",
            "options": [
              "Dormivo",
              "Dormiva",
              "Dormivi",
              "Dormivamo"
            ],
            "correct": 1
          },
          {
            "q": "التصريف «Dormiva» في Imperfetto يعود إلى أي ضمير؟",
            "options": [
              "Io (أنا)",
              "Lui/Lei (هو/هي)",
              "Tu (أنت)",
              "Noi (نحن)"
            ],
            "correct": 1
          },
          {
            "q": "الزمن المستخدم في «Dormiva» إيه؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          },
          {
            "q": "مع الضمير «Lui (هو)»، ما نهاية مجموعة -ire في Imperfetto؟",
            "options": [
              "-ava",
              "-iva",
              "-eva",
              "—"
            ],
            "correct": 1
          }
        ],
        "transitivity": "transitive",
        "transitivityNote": null
      },
      {
        "it": "sul divano",
        "ar": "على الكنبة",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": ";",
        "ar": "",
        "note": null,
        "type": "omesso",
        "quiz": []
      },
      {
        "it": "Costa",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      },
      {
        "it": "sui",
        "ar": "حوالي",
        "note": "التقريب: يعبّر عن رقم أو كمية تقريبية.",
        "type": "preposizione",
        "grammarId": "prep_su",
        "prepUsage": {
          "id": "su_approssimazione",
          "title": "التقريب",
          "meaning": "حوالي",
          "color": "#00acc1",
          "base": "su"
        },
        "quiz": []
      },
      {
        "it": "venti euro",
        "ar": "",
        "note": null,
        "type": "altro",
        "quiz": []
      }
    ],
    "conj": {
      "verb": "Volere",
      "tense": "Passato Prossimo",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho voluto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai voluto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha voluto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha voluto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo voluto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete voluto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno voluto"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "voluto",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Volere» في Passato Prossimo؟",
        "options": [
          "Ho voluto",
          "Ha voluto",
          "Hai voluto",
          "Abbiamo voluto"
        ],
        "correct": 1
      },
      {
        "wordIt": "voluto",
        "q": "التصريف «Ha voluto» في Passato Prossimo يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "voluto",
        "q": "الفعل المساعد مع «Volere» في Passato Prossimo إيه؟",
        "options": [
          "avere",
          "essere"
        ],
        "correct": 0
      },
      {
        "wordIt": "voluto",
        "q": "الزمن المستخدم في «Ha voluto» إيه؟",
        "options": [
          "Presente",
          "Imperfetto",
          "Passato Prossimo",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "perché",
        "q": "«perché» معناها إيه هنا؟",
        "options": [
          "لكن",
          "بينما",
          "لأن",
          "بعدما"
        ],
        "correct": 2
      },
      {
        "wordIt": "dormiva",
        "q": "مع الضمير «Lui (هو)»، ما التصريف الصحيح للفعل «Dormire» في Imperfetto؟",
        "options": [
          "Dormivo",
          "Dormiva",
          "Dormivi",
          "Dormivamo"
        ],
        "correct": 1
      },
      {
        "wordIt": "dormiva",
        "q": "التصريف «Dormiva» في Imperfetto يعود إلى أي ضمير؟",
        "options": [
          "Io (أنا)",
          "Lui/Lei (هو/هي)",
          "Tu (أنت)",
          "Noi (نحن)"
        ],
        "correct": 1
      },
      {
        "wordIt": "dormiva",
        "q": "الزمن المستخدم في «Dormiva» إيه؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "dormiva",
        "q": "مع الضمير «Lui (هو)»، ما نهاية مجموعة -ire في Imperfetto؟",
        "options": [
          "-ava",
          "-iva",
          "-eva",
          "—"
        ],
        "correct": 1
      }
    ],
    "prepositionFocus": {
      "base": "su",
      "id": "su_approssimazione",
      "title": "التقريب",
      "meaning": "حوالي",
      "description": "يعبّر عن رقم أو كمية تقريبية.",
      "form": "sui",
      "it": "Costa sui venti euro",
      "ar": "سعره حوالي عشرين يورو",
      "en": "It costs about twenty euros",
      "color": "#00acc1",
      "grammarId": "prep_su"
    }
  }
];
