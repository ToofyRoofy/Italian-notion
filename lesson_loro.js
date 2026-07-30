// جمل ضمير LORO من درس Parla Italiano — نسخة مُراجعة
const LESSON_LORO = [
  {
    "it": "Loro hanno camminato per un'ora mentre pensavano al futuro",
    "ar": "هم مشيوا لمدة ساعة وهم كانوا بيفكروا في المستقبل.",
    "en": "They walked for an hour while they were thinking about the future.",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Loro",
        "ar": "هم",
        "note": null,
        "type": "omesso",
        "skipReason": "pronome"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "camminato",
        "ar": "مشيوا",
        "note": "Camminare، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Camminare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "passato",
        "transitive": false,
        "quiz": [
          {
            "q": "النهاية القياسية للفعل المنتظم من مجموعة -are في Passato Prossimo تكون ما؟",
            "options": [
              "-ato",
              "-uto",
              "-ito",
              "-ando"
            ],
            "correct": 0
          },
          {
            "q": "الفعل \"Camminare\" منتمي لأي مجموعة؟",
            "options": [
              "-are",
              "-ere",
              "-ire",
              "شاذ"
            ],
            "correct": 0
          },
          {
            "q": "الزمن الذي صُرِّف به \"camminato\" ما؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد الذي يأتي مع \"Camminare\" في الماضي ما؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "فعل لازم؛ لا يأخذ مفعولًا مباشرًا، وتأتي معه عبارات مثل per un'ora و fino al parco"
      },
      {
        "it": "per un'ora",
        "ar": "لمدة ساعة",
        "note": null,
        "type": "sintagma_prep",
        "prep": "per",
        "prepNote": "يدل على غرض أو مدة أو مسار (لكي / لمدة / عن طريق) — لا توجد أداة تعريف هنا لأن الاسم يعبّر عن مفهوم عام ليس شيء محدد",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"per un'ora\"؟ الأصل ما؟",
            "options": [
              "in",
              "di",
              "da",
              "per"
            ],
            "correct": 3
          }
        ]
      },
      {
        "it": "mentre",
        "ar": "وهم",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما / في الوقت نفسه الذي",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "\"mentre\" بمعنى ما هنا؟",
            "options": [
              "لكن",
              "لكي",
              "بينما / في الوقت نفسه الذي",
              "عندما"
            ],
            "correct": 2
          }
        ],
        "kind": "أداة ربط زمنية"
      },
      {
        "it": "pensavano",
        "ar": "كانوا بيفكروا",
        "note": "Pensare، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Pensare",
        "group": "are",
        "regular": true,
        "aux": null,
        "tense": "imperfetto",
        "transitive": false,
        "quiz": [
          {
            "q": "نهايات الفعل المنتظم من مجموعة -are في Imperfetto تبدأ بما؟",
            "options": [
              "-avo...",
              "-evo...",
              "-ivo...",
              "-erò..."
            ],
            "correct": 0
          },
          {
            "q": "الفعل \"Pensare\" منتمي لأي مجموعة؟",
            "options": [
              "شاذ",
              "-are",
              "-ere",
              "-ire"
            ],
            "correct": 1
          },
          {
            "q": "الزمن الذي صُرِّف به \"pensavano\" ما؟",
            "options": [
              "Imperativo",
              "Presente",
              "Passato Prossimo",
              "Imperfetto"
            ],
            "correct": 3
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "يصل إلى متعلَّقه غالبًا بحرف الجر a، مثل pensare al futuro"
      },
      {
        "it": "al futuro",
        "ar": "في المستقبل",
        "note": null,
        "type": "sintagma_prep",
        "prep": "a",
        "prepNote": "يدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق)",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"al futuro\"؟ الأصل ما؟",
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
      "verb": "Camminare",
      "tense": "Passato Prossimo",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho camminato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai camminato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha camminato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha camminato"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo camminato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete camminato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno camminato"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "camminato",
        "q": "الفعل \"camminato\" — منتمي لأي مجموعة؟",
        "options": [
          "-ire",
          "شاذ",
          "-are",
          "-ere"
        ],
        "correct": 2
      },
      {
        "wordIt": "camminato",
        "q": "الزمن الذي صُرِّف فيه \"camminato\" ما؟",
        "options": [
          "Imperativo",
          "Presente",
          "Passato Prossimo",
          "Imperfetto"
        ],
        "correct": 2
      },
      {
        "wordIt": "camminato",
        "q": "الفعل المساعد الذي يأتي مع \"Camminare\" في الـ Passato Prossimo ما؟",
        "options": [
          "avere",
          "essere",
          "ho",
          "sono"
        ],
        "correct": 0
      },
      {
        "wordIt": "per un'ora",
        "q": "لماذا استخدمنا حرف الجر في \"per un'ora\"؟ الأصل ما؟",
        "options": [
          "in",
          "di",
          "da",
          "per"
        ],
        "correct": 3
      },
      {
        "wordIt": "mentre",
        "q": "\"mentre\" بمعنى ما هنا؟",
        "options": [
          "لكي",
          "ولو",
          "بينما / في الوقت نفسه الذي",
          "لكن"
        ],
        "correct": 2
      },
      {
        "wordIt": "pensavano",
        "q": "الفعل \"pensavano\" — منتمي لأي مجموعة؟",
        "options": [
          "شاذ",
          "-are",
          "-ere",
          "-ire"
        ],
        "correct": 1
      },
      {
        "wordIt": "pensavano",
        "q": "الزمن الذي صُرِّف فيه \"pensavano\" ما؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "al futuro",
        "q": "لماذا استخدمنا حرف الجر في \"al futuro\"؟ الأصل ما؟",
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
    "it": "Loro pensavano al problema quando hanno camminato fino al parco",
    "ar": "هم كانوا بيفكروا في المشكلة لما مشيوا لحد الحديقة.",
    "en": "They were thinking about the problem when they walked to the park.",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Loro",
        "ar": "هم",
        "note": null,
        "type": "omesso",
        "skipReason": "pronome"
      },
      {
        "it": "pensavano",
        "ar": "كانوا بيفكروا",
        "note": "Pensare، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Pensare",
        "group": "are",
        "regular": true,
        "aux": null,
        "tense": "imperfetto",
        "transitive": false,
        "quiz": [
          {
            "q": "نهايات الفعل المنتظم من مجموعة -are في Imperfetto تبدأ بما؟",
            "options": [
              "-avo...",
              "-evo...",
              "-ivo...",
              "-erò..."
            ],
            "correct": 0
          },
          {
            "q": "الفعل \"Pensare\" منتمي لأي مجموعة؟",
            "options": [
              "-ere",
              "-ire",
              "شاذ",
              "-are"
            ],
            "correct": 3
          },
          {
            "q": "الزمن الذي صُرِّف به \"pensavano\" ما؟",
            "options": [
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo",
              "Presente"
            ],
            "correct": 1
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "يصل إلى متعلَّقه غالبًا بحرف الجر a، مثل pensare al futuro"
      },
      {
        "it": "al problema",
        "ar": "في المشكلة",
        "note": null,
        "type": "sintagma_prep",
        "prep": "a",
        "prepNote": "يدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق)",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"al problema\"؟ الأصل ما؟",
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
        "it": "quando",
        "ar": "لما",
        "note": null,
        "type": "congiunzione",
        "meaning": "عندما",
        "grammarId": "interrogativi",
        "quiz": [
          {
            "q": "\"quando\" بمعنى ما هنا؟",
            "options": [
              "لكي",
              "عندما",
              "بينما / في الوقت نفسه الذي",
              "لكن"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط زمنية"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "camminato",
        "ar": "مشيوا",
        "note": "Camminare، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Camminare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "passato",
        "transitive": false,
        "quiz": [
          {
            "q": "النهاية القياسية للفعل المنتظم من مجموعة -are في Passato Prossimo تكون ما؟",
            "options": [
              "-ato",
              "-uto",
              "-ito",
              "-ando"
            ],
            "correct": 0
          },
          {
            "q": "الفعل \"Camminare\" منتمي لأي مجموعة؟",
            "options": [
              "-are",
              "-ere",
              "-ire",
              "شاذ"
            ],
            "correct": 0
          },
          {
            "q": "الزمن الذي صُرِّف به \"camminato\" ما؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد الذي يأتي مع \"Camminare\" في الماضي ما؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "فعل لازم؛ لا يأخذ مفعولًا مباشرًا، وتأتي معه عبارات مثل per un'ora و fino al parco"
      },
      {
        "it": "fino al parco",
        "ar": "لحد الحديقة",
        "note": null,
        "type": "sintagma_prep",
        "prep": "fino a",
        "prepNote": "مركّب حرف جر يدل على الحد أو المسافة",
        "quiz": [
          {
            "q": "\"fino al parco\" تُستخدم مع المكان/المسافة، حرف الجر الأصلي ما؟",
            "options": [
              "fino a",
              "con",
              "tra",
              "su"
            ],
            "correct": 0
          }
        ]
      }
    ],
    "conj": {
      "verb": "Camminare",
      "tense": "Passato Prossimo",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho camminato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai camminato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha camminato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha camminato"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo camminato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete camminato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno camminato"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "pensavano",
        "q": "الفعل \"pensavano\" — منتمي لأي مجموعة؟",
        "options": [
          "-ire",
          "شاذ",
          "-are",
          "-ere"
        ],
        "correct": 2
      },
      {
        "wordIt": "pensavano",
        "q": "الزمن الذي صُرِّف فيه \"pensavano\" ما؟",
        "options": [
          "Imperativo",
          "Presente",
          "Passato Prossimo",
          "Imperfetto"
        ],
        "correct": 3
      },
      {
        "wordIt": "al problema",
        "q": "لماذا استخدمنا حرف الجر في \"al problema\"؟ الأصل ما؟",
        "options": [
          "a",
          "in",
          "di",
          "da"
        ],
        "correct": 0
      },
      {
        "wordIt": "quando",
        "q": "\"quando\" بمعنى ما هنا؟",
        "options": [
          "لكن",
          "لكي",
          "ولو",
          "عندما"
        ],
        "correct": 3
      },
      {
        "wordIt": "camminato",
        "q": "الفعل \"camminato\" — منتمي لأي مجموعة؟",
        "options": [
          "-ire",
          "شاذ",
          "-are",
          "-ere"
        ],
        "correct": 2
      },
      {
        "wordIt": "camminato",
        "q": "الزمن الذي صُرِّف فيه \"camminato\" ما؟",
        "options": [
          "Imperativo",
          "Presente",
          "Passato Prossimo",
          "Imperfetto"
        ],
        "correct": 2
      },
      {
        "wordIt": "camminato",
        "q": "الفعل المساعد الذي يأتي مع \"Camminare\" في الـ Passato Prossimo ما؟",
        "options": [
          "avere",
          "essere",
          "ho",
          "sono"
        ],
        "correct": 0
      },
      {
        "wordIt": "fino al parco",
        "q": "لماذا استخدمنا حرف الجر في \"fino al parco\"؟ الأصل ما؟",
        "options": [
          "da",
          "su",
          "con",
          "fino a"
        ],
        "correct": 3
      }
    ]
  },
  {
    "it": "Loro hanno giocato a calcio mentre i bambini ridevano nel parco",
    "ar": "هم لعبوا كورة والأطفال كانوا بيضحكوا في الحديقة.",
    "en": "They played football while the children were laughing in the park.",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Loro",
        "ar": "هم",
        "note": null,
        "type": "omesso",
        "skipReason": "pronome"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "giocato",
        "ar": "لعبوا",
        "note": "Giocare، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Giocare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "passato",
        "transitive": false,
        "quiz": [
          {
            "q": "النهاية القياسية للفعل المنتظم من مجموعة -are في Passato Prossimo تكون ما؟",
            "options": [
              "-ato",
              "-uto",
              "-ito",
              "-ando"
            ],
            "correct": 0
          },
          {
            "q": "الفعل \"Giocare\" منتمي لأي مجموعة؟",
            "options": [
              "-ire",
              "شاذ",
              "-are",
              "-ere"
            ],
            "correct": 2
          },
          {
            "q": "الزمن الذي صُرِّف به \"giocato\" ما؟",
            "options": [
              "Imperfetto",
              "Imperativo",
              "Presente",
              "Passato Prossimo"
            ],
            "correct": 3
          },
          {
            "q": "الفعل المساعد الذي يأتي مع \"Giocare\" في الماضي ما؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "يُستخدم هنا مع حرف الجر a، مثل giocare a calcio و giocare a carte"
      },
      {
        "it": "a calcio",
        "ar": "كورة",
        "note": null,
        "type": "sintagma_prep",
        "prep": "a",
        "prepNote": "يدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق) — لا توجد أداة تعريف هنا لأن الاسم يعبّر عن مفهوم عام ليس شيء محدد",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"a calcio\"؟ الأصل ما؟",
            "options": [
              "per",
              "a",
              "su",
              "con"
            ],
            "correct": 1
          }
        ]
      },
      {
        "it": "mentre",
        "ar": "والأطفال",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما / في الوقت نفسه الذي",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "\"mentre\" بمعنى ما هنا؟",
            "options": [
              "بينما / في الوقت نفسه الذي",
              "عندما",
              "لكن",
              "لكي"
            ],
            "correct": 0
          }
        ],
        "kind": "أداة ربط زمنية"
      },
      {
        "it": "i bambini",
        "ar": "الأطفال",
        "note": null,
        "type": "nome_unit",
        "gender": "m",
        "plural": "i bambini",
        "quiz": [
          {
            "q": "جنس \"i bambini\" ما؟",
            "options": [
              "مؤنث",
              "جمع",
              "محايد",
              "مذكر"
            ],
            "correct": 3
          }
        ],
        "nounIt": "bambini",
        "relatedWords": []
      },
      {
        "it": "ridevano",
        "ar": "كانوا بيضحكوا",
        "note": "Ridere، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Ridere",
        "group": "ere",
        "regular": true,
        "aux": null,
        "tense": "imperfetto",
        "transitive": false,
        "quiz": [
          {
            "q": "نهايات الفعل المنتظم من مجموعة -ere في Imperfetto تبدأ بما؟",
            "options": [
              "-avo...",
              "-evo...",
              "-ivo...",
              "-erò..."
            ],
            "correct": 1
          },
          {
            "q": "الفعل \"Ridere\" منتمي لأي مجموعة؟",
            "options": [
              "-ire",
              "شاذ",
              "-are",
              "-ere"
            ],
            "correct": 3
          },
          {
            "q": "الزمن الذي صُرِّف به \"ridevano\" ما؟",
            "options": [
              "Imperfetto",
              "Imperativo",
              "Presente",
              "Passato Prossimo"
            ],
            "correct": 0
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "فعل لازم لا يأخذ مفعولًا مباشرًا"
      },
      {
        "it": "nel parco",
        "ar": "في الحديقة",
        "note": null,
        "type": "sintagma_prep",
        "prep": "in",
        "prepNote": "يدل على مكان داخل شيء أو وسيلة مواصلة (في / بـ)",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"nel parco\"؟ الأصل ما؟",
            "options": [
              "di",
              "in",
              "fra",
              "a"
            ],
            "correct": 1
          }
        ]
      }
    ],
    "conj": {
      "verb": "Giocare",
      "tense": "Passato Prossimo",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho giocato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai giocato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha giocato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha giocato"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo giocato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete giocato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno giocato"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "giocato",
        "q": "الفعل \"giocato\" — منتمي لأي مجموعة؟",
        "options": [
          "-ire",
          "شاذ",
          "-are",
          "-ere"
        ],
        "correct": 2
      },
      {
        "wordIt": "giocato",
        "q": "الزمن الذي صُرِّف فيه \"giocato\" ما؟",
        "options": [
          "Imperativo",
          "Presente",
          "Passato Prossimo",
          "Imperfetto"
        ],
        "correct": 2
      },
      {
        "wordIt": "giocato",
        "q": "الفعل المساعد الذي يأتي مع \"Giocare\" في الـ Passato Prossimo ما؟",
        "options": [
          "avere",
          "essere",
          "ho",
          "sono"
        ],
        "correct": 0
      },
      {
        "wordIt": "a calcio",
        "q": "لماذا استخدمنا حرف الجر في \"a calcio\"؟ الأصل ما؟",
        "options": [
          "di",
          "da",
          "su",
          "a"
        ],
        "correct": 3
      },
      {
        "wordIt": "mentre",
        "q": "\"mentre\" بمعنى ما هنا؟",
        "options": [
          "لكي",
          "ولو",
          "بينما / في الوقت نفسه الذي",
          "لكن"
        ],
        "correct": 2
      },
      {
        "wordIt": "i bambini",
        "q": "جنس \"i bambini\" ما؟",
        "options": [
          "محايد",
          "مذكر",
          "مؤنث",
          "جمع"
        ],
        "correct": 1
      },
      {
        "wordIt": "ridevano",
        "q": "الفعل \"ridevano\" — منتمي لأي مجموعة؟",
        "options": [
          "-are",
          "-ere",
          "-ire",
          "شاذ"
        ],
        "correct": 1
      },
      {
        "wordIt": "ridevano",
        "q": "الزمن الذي صُرِّف فيه \"ridevano\" ما؟",
        "options": [
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo",
          "Presente"
        ],
        "correct": 1
      },
      {
        "wordIt": "nel parco",
        "q": "لماذا استخدمنا حرف الجر في \"nel parco\"؟ الأصل ما؟",
        "options": [
          "fra",
          "a",
          "in",
          "tra"
        ],
        "correct": 2
      }
    ]
  },
  {
    "it": "Loro ridevano forte quando hanno giocato a carte insieme",
    "ar": "هم كانوا بيضحكوا بصوت عالي لما لعبوا ورق مع بعض.",
    "en": "They were laughing loudly when they played cards together.",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Loro",
        "ar": "هم",
        "note": null,
        "type": "omesso",
        "skipReason": "pronome"
      },
      {
        "it": "ridevano",
        "ar": "كانوا بيضحكوا",
        "note": "Ridere، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Ridere",
        "group": "ere",
        "regular": true,
        "aux": null,
        "tense": "imperfetto",
        "transitive": false,
        "quiz": [
          {
            "q": "نهايات الفعل المنتظم من مجموعة -ere في Imperfetto تبدأ بما؟",
            "options": [
              "-avo...",
              "-evo...",
              "-ivo...",
              "-erò..."
            ],
            "correct": 1
          },
          {
            "q": "الفعل \"Ridere\" منتمي لأي مجموعة؟",
            "options": [
              "-are",
              "-ere",
              "-ire",
              "شاذ"
            ],
            "correct": 1
          },
          {
            "q": "الزمن الذي صُرِّف به \"ridevano\" ما؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 2
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "فعل لازم لا يأخذ مفعولًا مباشرًا"
      },
      {
        "it": "forte",
        "ar": "بصوت عالي",
        "note": null,
        "type": "avverbio",
        "invariant": true,
        "forms": {
          "ms": "forte",
          "fs": "forte",
          "mp": "forte",
          "fp": "forte"
        },
        "quiz": [
          {
            "q": "\"forte\" هنا يعمل كـ ما في الجملة؟",
            "options": [
              "اسم",
              "صفة/ظرف",
              "حرف جر",
              "فعل"
            ],
            "correct": 1
          }
        ],
        "usage": "يعمل هنا كظرف بمعنى: بصوت عالٍ"
      },
      {
        "it": "quando",
        "ar": "لما",
        "note": null,
        "type": "congiunzione",
        "meaning": "عندما",
        "grammarId": "interrogativi",
        "quiz": [
          {
            "q": "\"quando\" بمعنى ما هنا؟",
            "options": [
              "لكن",
              "لكي",
              "عندما",
              "بينما / في الوقت نفسه الذي"
            ],
            "correct": 2
          }
        ],
        "kind": "أداة ربط زمنية"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "giocato",
        "ar": "لعبوا",
        "note": "Giocare، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Giocare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "passato",
        "transitive": false,
        "quiz": [
          {
            "q": "النهاية القياسية للفعل المنتظم من مجموعة -are في Passato Prossimo تكون ما؟",
            "options": [
              "-ato",
              "-uto",
              "-ito",
              "-ando"
            ],
            "correct": 0
          },
          {
            "q": "الفعل \"Giocare\" منتمي لأي مجموعة؟",
            "options": [
              "شاذ",
              "-are",
              "-ere",
              "-ire"
            ],
            "correct": 1
          },
          {
            "q": "الزمن الذي صُرِّف به \"giocato\" ما؟",
            "options": [
              "Imperativo",
              "Presente",
              "Passato Prossimo",
              "Imperfetto"
            ],
            "correct": 2
          },
          {
            "q": "الفعل المساعد الذي يأتي مع \"Giocare\" في الماضي ما؟",
            "options": [
              "essere",
              "avere"
            ],
            "correct": 1
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "يُستخدم هنا مع حرف الجر a، مثل giocare a calcio و giocare a carte"
      },
      {
        "it": "a carte",
        "ar": "ورق",
        "note": null,
        "type": "sintagma_prep",
        "prep": "a",
        "prepNote": "يدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق) — لا توجد أداة تعريف هنا لأن الاسم يعبّر عن مفهوم عام ليس شيء محدد",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"a carte\"؟ الأصل ما؟",
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
        "it": "insieme",
        "ar": "مع بعض",
        "note": null,
        "type": "avverbio",
        "invariant": true,
        "forms": {
          "ms": "insieme",
          "fs": "insieme",
          "mp": "insieme",
          "fp": "insieme"
        },
        "quiz": [
          {
            "q": "\"insieme\" هنا يعمل كـ ما في الجملة؟",
            "options": [
              "اسم",
              "صفة/ظرف",
              "حرف جر",
              "فعل"
            ],
            "correct": 1
          }
        ],
        "usage": "ظرف بمعنى: معًا"
      }
    ],
    "conj": {
      "verb": "Giocare",
      "tense": "Passato Prossimo",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho giocato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai giocato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha giocato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha giocato"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo giocato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete giocato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno giocato"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "ridevano",
        "q": "الفعل \"ridevano\" — منتمي لأي مجموعة؟",
        "options": [
          "شاذ",
          "-are",
          "-ere",
          "-ire"
        ],
        "correct": 2
      },
      {
        "wordIt": "ridevano",
        "q": "الزمن الذي صُرِّف فيه \"ridevano\" ما؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "forte",
        "q": "\"forte\" هنا يعمل كـ ما في الجملة؟",
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
        "q": "\"quando\" بمعنى ما هنا؟",
        "options": [
          "لكي",
          "ولو",
          "عندما",
          "لكن"
        ],
        "correct": 2
      },
      {
        "wordIt": "giocato",
        "q": "الفعل \"giocato\" — منتمي لأي مجموعة؟",
        "options": [
          "شاذ",
          "-are",
          "-ere",
          "-ire"
        ],
        "correct": 1
      },
      {
        "wordIt": "giocato",
        "q": "الزمن الذي صُرِّف فيه \"giocato\" ما؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 1
      },
      {
        "wordIt": "giocato",
        "q": "الفعل المساعد الذي يأتي مع \"Giocare\" في الـ Passato Prossimo ما؟",
        "options": [
          "essere",
          "ho",
          "sono",
          "avere"
        ],
        "correct": 3
      },
      {
        "wordIt": "a carte",
        "q": "لماذا استخدمنا حرف الجر في \"a carte\"؟ الأصل ما؟",
        "options": [
          "fra",
          "in",
          "a",
          "tra"
        ],
        "correct": 2
      },
      {
        "wordIt": "insieme",
        "q": "\"insieme\" هنا يعمل كـ ما في الجملة؟",
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
    "it": "Loro hanno creduto alla storia mentre parlavano con il testimone",
    "ar": "هم صدقوا القصة وهم كانوا بيتكلموا مع الشاهد.",
    "en": "They believed the story while they were talking with the witness.",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Loro",
        "ar": "هم",
        "note": null,
        "type": "omesso",
        "skipReason": "pronome"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "creduto",
        "ar": "صدقوا",
        "note": "Credere، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Credere",
        "group": "ere",
        "regular": true,
        "aux": "avere",
        "tense": "passato",
        "transitive": false,
        "quiz": [
          {
            "q": "النهاية القياسية للفعل المنتظم من مجموعة -ere في Passato Prossimo تكون ما؟",
            "options": [
              "-ato",
              "-uto",
              "-ito",
              "-ando"
            ],
            "correct": 1
          },
          {
            "q": "الفعل \"Credere\" منتمي لأي مجموعة؟",
            "options": [
              "شاذ",
              "-are",
              "-ere",
              "-ire"
            ],
            "correct": 2
          },
          {
            "q": "الزمن الذي صُرِّف به \"creduto\" ما؟",
            "options": [
              "Imperativo",
              "Presente",
              "Passato Prossimo",
              "Imperfetto"
            ],
            "correct": 2
          },
          {
            "q": "الفعل المساعد الذي يأتي مع \"Credere\" في الماضي ما؟",
            "options": [
              "essere",
              "avere"
            ],
            "correct": 1
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "يصل إلى المتعلَّق بحرف الجر a، مثل credere alla storia"
      },
      {
        "it": "alla storia",
        "ar": "القصة",
        "note": null,
        "type": "sintagma_prep",
        "prep": "a",
        "prepNote": "يدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق)",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"alla storia\"؟ الأصل ما؟",
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
        "it": "mentre",
        "ar": "وهم",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما / في الوقت نفسه الذي",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "\"mentre\" بمعنى ما هنا؟",
            "options": [
              "عندما",
              "لكن",
              "لكي",
              "بينما / في الوقت نفسه الذي"
            ],
            "correct": 3
          }
        ],
        "kind": "أداة ربط زمنية"
      },
      {
        "it": "parlavano",
        "ar": "كانوا بيتكلموا",
        "note": "Parlare، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Parlare",
        "group": "are",
        "regular": true,
        "aux": null,
        "tense": "imperfetto",
        "transitive": false,
        "quiz": [
          {
            "q": "نهايات الفعل المنتظم من مجموعة -are في Imperfetto تبدأ بما؟",
            "options": [
              "-avo...",
              "-evo...",
              "-ivo...",
              "-erò..."
            ],
            "correct": 0
          },
          {
            "q": "الفعل \"Parlare\" منتمي لأي مجموعة؟",
            "options": [
              "-ire",
              "شاذ",
              "-are",
              "-ere"
            ],
            "correct": 2
          },
          {
            "q": "الزمن الذي صُرِّف به \"parlavano\" ما؟",
            "options": [
              "Imperfetto",
              "Imperativo",
              "Presente",
              "Passato Prossimo"
            ],
            "correct": 0
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "يُستخدم مع حروف جر مثل con أو di بحسب المعنى"
      },
      {
        "it": "con",
        "ar": "مع",
        "note": null,
        "type": "sintagma_prep",
        "prep": "con",
        "prepNote": "يدل على مصاحبة أو أداة (مع / بـ) — لا توجد أداة تعريف هنا لأن الاسم يعبّر عن مفهوم عام ليس شيء محدد",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"con\"؟ الأصل ما؟",
            "options": [
              "per",
              "con",
              "da",
              "su"
            ],
            "correct": 1
          }
        ]
      },
      {
        "it": "il testimone",
        "ar": "الشاهد",
        "note": null,
        "type": "nome_unit",
        "gender": "m",
        "plural": "i testimoni",
        "quiz": [
          {
            "q": "جنس \"il testimone\" ما؟",
            "options": [
              "مذكر",
              "مؤنث",
              "جمع",
              "محايد"
            ],
            "correct": 0
          }
        ],
        "nounIt": "testimone",
        "relatedWords": []
      }
    ],
    "conj": {
      "verb": "Credere",
      "tense": "Passato Prossimo",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho creduto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai creduto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha creduto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha creduto"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo creduto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete creduto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno creduto"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "creduto",
        "q": "الفعل \"creduto\" — منتمي لأي مجموعة؟",
        "options": [
          "-are",
          "-ere",
          "-ire",
          "شاذ"
        ],
        "correct": 1
      },
      {
        "wordIt": "creduto",
        "q": "الزمن الذي صُرِّف فيه \"creduto\" ما؟",
        "options": [
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo",
          "Presente"
        ],
        "correct": 0
      },
      {
        "wordIt": "creduto",
        "q": "الفعل المساعد الذي يأتي مع \"Credere\" في الـ Passato Prossimo ما؟",
        "options": [
          "ho",
          "sono",
          "avere",
          "essere"
        ],
        "correct": 2
      },
      {
        "wordIt": "alla storia",
        "q": "لماذا استخدمنا حرف الجر في \"alla storia\"؟ الأصل ما؟",
        "options": [
          "per",
          "a",
          "su",
          "con"
        ],
        "correct": 1
      },
      {
        "wordIt": "mentre",
        "q": "\"mentre\" بمعنى ما هنا؟",
        "options": [
          "بينما / في الوقت نفسه الذي",
          "لكن",
          "لكي",
          "ولو"
        ],
        "correct": 0
      },
      {
        "wordIt": "parlavano",
        "q": "الفعل \"parlavano\" — منتمي لأي مجموعة؟",
        "options": [
          "-ere",
          "-ire",
          "شاذ",
          "-are"
        ],
        "correct": 3
      },
      {
        "wordIt": "parlavano",
        "q": "الزمن الذي صُرِّف فيه \"parlavano\" ما؟",
        "options": [
          "Imperfetto",
          "Imperativo",
          "Presente",
          "Passato Prossimo"
        ],
        "correct": 0
      },
      {
        "wordIt": "con",
        "q": "لماذا استخدمنا حرف الجر في \"con\"؟ الأصل ما؟",
        "options": [
          "in",
          "con",
          "fra",
          "a"
        ],
        "correct": 1
      },
      {
        "wordIt": "il testimone",
        "q": "جنس \"il testimone\" ما؟",
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
    "it": "Loro parlavano del film quando hanno creduto a una voce falsa",
    "ar": "هم كانوا بيتكلموا عن الفيلم لما صدقوا شائعة كدابة.",
    "en": "They were talking about the movie when they believed a false rumor.",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Loro",
        "ar": "هم",
        "note": null,
        "type": "omesso",
        "skipReason": "pronome"
      },
      {
        "it": "parlavano",
        "ar": "كانوا بيتكلموا",
        "note": "Parlare، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Parlare",
        "group": "are",
        "regular": true,
        "aux": null,
        "tense": "imperfetto",
        "transitive": false,
        "quiz": [
          {
            "q": "نهايات الفعل المنتظم من مجموعة -are في Imperfetto تبدأ بما؟",
            "options": [
              "-avo...",
              "-evo...",
              "-ivo...",
              "-erò..."
            ],
            "correct": 0
          },
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
            "q": "الزمن الذي صُرِّف به \"parlavano\" ما؟",
            "options": [
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo",
              "Presente"
            ],
            "correct": 1
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "يُستخدم مع حروف جر مثل con أو di بحسب المعنى"
      },
      {
        "it": "del film",
        "ar": "عن الفيلم",
        "note": null,
        "type": "sintagma_prep",
        "prep": "di",
        "prepNote": "يدل على ملكية أو أصل أو موضوع (بتاع / من / عن)",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"del film\"؟ الأصل ما؟",
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
        "meaning": "عندما",
        "grammarId": "interrogativi",
        "quiz": [
          {
            "q": "\"quando\" بمعنى ما هنا؟",
            "options": [
              "لكي",
              "عندما",
              "بينما / في الوقت نفسه الذي",
              "لكن"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط زمنية"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "creduto",
        "ar": "صدقوا",
        "note": "Credere، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Credere",
        "group": "ere",
        "regular": true,
        "aux": "avere",
        "tense": "passato",
        "transitive": false,
        "quiz": [
          {
            "q": "النهاية القياسية للفعل المنتظم من مجموعة -ere في Passato Prossimo تكون ما؟",
            "options": [
              "-ato",
              "-uto",
              "-ito",
              "-ando"
            ],
            "correct": 1
          },
          {
            "q": "الفعل \"Credere\" منتمي لأي مجموعة؟",
            "options": [
              "-are",
              "-ere",
              "-ire",
              "شاذ"
            ],
            "correct": 1
          },
          {
            "q": "الزمن الذي صُرِّف به \"creduto\" ما؟",
            "options": [
              "Presente",
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo"
            ],
            "correct": 1
          },
          {
            "q": "الفعل المساعد الذي يأتي مع \"Credere\" في الماضي ما؟",
            "options": [
              "avere",
              "essere"
            ],
            "correct": 0
          }
        ],
        "transitivity": "intransitive",
        "transitivityNote": "يصل إلى المتعلَّق بحرف الجر a، مثل credere alla storia"
      },
      {
        "it": "a una voce",
        "ar": "شائعة",
        "note": null,
        "type": "sintagma_prep",
        "prep": "a",
        "prepNote": "يدل على اتجاه أو مكان أو زمن (لـ / في / على حسب السياق)",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"a una voce\"؟ الأصل ما؟",
            "options": [
              "di",
              "da",
              "su",
              "a"
            ],
            "correct": 3
          }
        ]
      },
      {
        "it": "falsa",
        "ar": "كدابة",
        "note": null,
        "type": "aggettivo",
        "invariant": false,
        "forms": {
          "fs": "falsa",
          "ms": "falso",
          "mp": "falsi",
          "fp": "false"
        },
        "quiz": [
          {
            "q": "\"falsa\" هنا يعمل كـ ما في الجملة؟",
            "options": [
              "صفة/ظرف",
              "حرف جر",
              "فعل",
              "اسم"
            ],
            "correct": 0
          }
        ],
        "usage": "يأتي بعد الاسم كصفة، وبيتغيّر حسب جنس وعدد الاسم اللي بتوصفه"
      }
    ],
    "conj": {
      "verb": "Credere",
      "tense": "Passato Prossimo",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho creduto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai creduto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha creduto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha creduto"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo creduto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete creduto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno creduto"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "parlavano",
        "q": "الفعل \"parlavano\" — منتمي لأي مجموعة؟",
        "options": [
          "-ere",
          "-ire",
          "شاذ",
          "-are"
        ],
        "correct": 3
      },
      {
        "wordIt": "parlavano",
        "q": "الزمن الذي صُرِّف فيه \"parlavano\" ما؟",
        "options": [
          "Imperfetto",
          "Imperativo",
          "Presente",
          "Passato Prossimo"
        ],
        "correct": 0
      },
      {
        "wordIt": "del film",
        "q": "لماذا استخدمنا حرف الجر في \"del film\"؟ الأصل ما؟",
        "options": [
          "per",
          "di",
          "su",
          "con"
        ],
        "correct": 1
      },
      {
        "wordIt": "quando",
        "q": "\"quando\" بمعنى ما هنا؟",
        "options": [
          "عندما",
          "لكن",
          "لكي",
          "ولو"
        ],
        "correct": 0
      },
      {
        "wordIt": "creduto",
        "q": "الفعل \"creduto\" — منتمي لأي مجموعة؟",
        "options": [
          "-ere",
          "-ire",
          "شاذ",
          "-are"
        ],
        "correct": 0
      },
      {
        "wordIt": "creduto",
        "q": "الزمن الذي صُرِّف فيه \"creduto\" ما؟",
        "options": [
          "Imperfetto",
          "Imperativo",
          "Presente",
          "Passato Prossimo"
        ],
        "correct": 3
      },
      {
        "wordIt": "creduto",
        "q": "الفعل المساعد الذي يأتي مع \"Credere\" في الـ Passato Prossimo ما؟",
        "options": [
          "sono",
          "avere",
          "essere",
          "ho"
        ],
        "correct": 1
      },
      {
        "wordIt": "a una voce",
        "q": "لماذا استخدمنا حرف الجر في \"a una voce\"؟ الأصل ما؟",
        "options": [
          "a",
          "in",
          "di",
          "da"
        ],
        "correct": 0
      },
      {
        "wordIt": "falsa",
        "q": "\"falsa\" هنا يعمل كـ ما في الجملة؟",
        "options": [
          "اسم",
          "صفة/ظرف",
          "حرف جر",
          "فعل"
        ],
        "correct": 1
      }
    ]
  },
  {
    "it": "Loro hanno capito la lezione mentre il professore spiegava con calma",
    "ar": "هم استوعبوا الدرس والمدرس كان بيشرح بهدوء.",
    "en": "They understood the lesson while the teacher was explaining calmly.",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Loro",
        "ar": "هم",
        "note": null,
        "type": "omesso",
        "skipReason": "pronome"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "capito",
        "ar": "استوعبوا",
        "note": "Capire، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Capire",
        "group": "ire",
        "regular": true,
        "aux": "avere",
        "tense": "passato",
        "transitive": true,
        "quiz": [
          {
            "q": "النهاية القياسية للفعل المنتظم من مجموعة -ire في Passato Prossimo تكون ما؟",
            "options": [
              "-ato",
              "-uto",
              "-ito",
              "-ando"
            ],
            "correct": 2
          },
          {
            "q": "الفعل \"Capire\" منتمي لأي مجموعة؟",
            "options": [
              "-ere",
              "-ire",
              "شاذ",
              "-are"
            ],
            "correct": 1
          },
          {
            "q": "الزمن الذي صُرِّف به \"capito\" ما؟",
            "options": [
              "Passato Prossimo",
              "Imperfetto",
              "Imperativo",
              "Presente"
            ],
            "correct": 0
          },
          {
            "q": "الفعل المساعد الذي يأتي مع \"Capire\" في الماضي ما؟",
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
        "it": "la lezione",
        "ar": "الدرس",
        "note": null,
        "type": "nome_unit",
        "gender": "f",
        "plural": "le lezioni",
        "quiz": [
          {
            "q": "جنس \"la lezione\" ما؟",
            "options": [
              "جمع",
              "محايد",
              "مذكر",
              "مؤنث"
            ],
            "correct": 3
          }
        ],
        "nounIt": "lezione",
        "relatedWords": []
      },
      {
        "it": "mentre",
        "ar": "والمدرس",
        "note": null,
        "type": "congiunzione",
        "meaning": "بينما / في الوقت نفسه الذي",
        "grammarId": "mentre",
        "quiz": [
          {
            "q": "\"mentre\" بمعنى ما هنا؟",
            "options": [
              "لكي",
              "بينما / في الوقت نفسه الذي",
              "عندما",
              "لكن"
            ],
            "correct": 1
          }
        ],
        "kind": "أداة ربط زمنية"
      },
      {
        "it": "il professore",
        "ar": "المدرس",
        "note": null,
        "type": "nome_unit",
        "gender": "m",
        "plural": "i professori",
        "quiz": [
          {
            "q": "جنس \"il professore\" ما؟",
            "options": [
              "مذكر",
              "مؤنث",
              "جمع",
              "محايد"
            ],
            "correct": 0
          }
        ],
        "nounIt": "professore",
        "relatedWords": []
      },
      {
        "it": "spiegava",
        "ar": "كان بيشرح",
        "note": "Spiegare، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Spiegare",
        "group": "are",
        "regular": true,
        "aux": null,
        "tense": "imperfetto",
        "transitive": true,
        "quiz": [
          {
            "q": "نهايات الفعل المنتظم من مجموعة -are في Imperfetto تبدأ بما؟",
            "options": [
              "-avo...",
              "-evo...",
              "-ivo...",
              "-erò..."
            ],
            "correct": 0
          },
          {
            "q": "الفعل \"Spiegare\" منتمي لأي مجموعة؟",
            "options": [
              "-ere",
              "-ire",
              "شاذ",
              "-are"
            ],
            "correct": 3
          },
          {
            "q": "الزمن الذي صُرِّف به \"spiegava\" ما؟",
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
        "it": "con calma",
        "ar": "بهدوء",
        "note": null,
        "type": "sintagma_prep",
        "prep": "con",
        "prepNote": "يدل على مصاحبة أو أداة (مع / بـ) — لا توجد أداة تعريف هنا لأن الاسم يعبّر عن مفهوم عام ليس شيء محدد",
        "quiz": [
          {
            "q": "لماذا استخدمنا حرف الجر في \"con calma\"؟ الأصل ما؟",
            "options": [
              "da",
              "su",
              "con",
              "di"
            ],
            "correct": 2
          }
        ]
      }
    ],
    "conj": {
      "verb": "Capire",
      "tense": "Passato Prossimo",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho capito"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai capito"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha capito"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha capito"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo capito"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete capito"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno capito"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "capito",
        "q": "الفعل \"capito\" — منتمي لأي مجموعة؟",
        "options": [
          "-ire",
          "شاذ",
          "-are",
          "-ere"
        ],
        "correct": 0
      },
      {
        "wordIt": "capito",
        "q": "الزمن الذي صُرِّف فيه \"capito\" ما؟",
        "options": [
          "Imperativo",
          "Presente",
          "Passato Prossimo",
          "Imperfetto"
        ],
        "correct": 2
      },
      {
        "wordIt": "capito",
        "q": "الفعل المساعد الذي يأتي مع \"Capire\" في الـ Passato Prossimo ما؟",
        "options": [
          "avere",
          "essere",
          "ho",
          "sono"
        ],
        "correct": 0
      },
      {
        "wordIt": "la lezione",
        "q": "جنس \"la lezione\" ما؟",
        "options": [
          "مؤنث",
          "جمع",
          "محايد",
          "مذكر"
        ],
        "correct": 0
      },
      {
        "wordIt": "mentre",
        "q": "\"mentre\" بمعنى ما هنا؟",
        "options": [
          "لكي",
          "ولو",
          "بينما / في الوقت نفسه الذي",
          "لكن"
        ],
        "correct": 2
      },
      {
        "wordIt": "il professore",
        "q": "جنس \"il professore\" ما؟",
        "options": [
          "محايد",
          "مذكر",
          "مؤنث",
          "جمع"
        ],
        "correct": 1
      },
      {
        "wordIt": "spiegava",
        "q": "الفعل \"spiegava\" — منتمي لأي مجموعة؟",
        "options": [
          "-are",
          "-ere",
          "-ire",
          "شاذ"
        ],
        "correct": 0
      },
      {
        "wordIt": "spiegava",
        "q": "الزمن الذي صُرِّف فيه \"spiegava\" ما؟",
        "options": [
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo",
          "Presente"
        ],
        "correct": 1
      },
      {
        "wordIt": "con calma",
        "q": "لماذا استخدمنا حرف الجر في \"con calma\"؟ الأصل ما؟",
        "options": [
          "da",
          "su",
          "con",
          "di"
        ],
        "correct": 2
      }
    ]
  },
  {
    "it": "Loro spiegavano il progetto quando hanno capito l'errore",
    "ar": "هم كانوا بيشرحوا المشروع لما استوعبوا الخطأ.",
    "en": "They were explaining the project when they understood the mistake.",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Loro",
        "ar": "هم",
        "note": null,
        "type": "omesso",
        "skipReason": "pronome"
      },
      {
        "it": "spiegavano",
        "ar": "كانوا بيشرحوا",
        "note": "Spiegare، Imperfetto",
        "type": "verbo",
        "verbInfinitive": "Spiegare",
        "group": "are",
        "regular": true,
        "aux": null,
        "tense": "imperfetto",
        "transitive": true,
        "quiz": [
          {
            "q": "نهايات الفعل المنتظم من مجموعة -are في Imperfetto تبدأ بما؟",
            "options": [
              "-avo...",
              "-evo...",
              "-ivo...",
              "-erò..."
            ],
            "correct": 0
          },
          {
            "q": "الفعل \"Spiegare\" منتمي لأي مجموعة؟",
            "options": [
              "شاذ",
              "-are",
              "-ere",
              "-ire"
            ],
            "correct": 1
          },
          {
            "q": "الزمن الذي صُرِّف به \"spiegavano\" ما؟",
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
        "it": "il progetto",
        "ar": "المشروع",
        "note": null,
        "type": "nome_unit",
        "gender": "m",
        "plural": "i progetti",
        "quiz": [
          {
            "q": "جنس \"il progetto\" ما؟",
            "options": [
              "مذكر",
              "مؤنث",
              "جمع",
              "محايد"
            ],
            "correct": 0
          }
        ],
        "nounIt": "progetto",
        "relatedWords": []
      },
      {
        "it": "quando",
        "ar": "لما",
        "note": null,
        "type": "congiunzione",
        "meaning": "عندما",
        "grammarId": "interrogativi",
        "quiz": [
          {
            "q": "\"quando\" بمعنى ما هنا؟",
            "options": [
              "بينما / في الوقت نفسه الذي",
              "لكن",
              "لكي",
              "عندما"
            ],
            "correct": 3
          }
        ],
        "kind": "أداة ربط زمنية"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد",
        "type": "omesso",
        "skipReason": "ausiliare"
      },
      {
        "it": "capito",
        "ar": "استوعبوا",
        "note": "Capire، Passato Prossimo",
        "type": "verbo",
        "verbInfinitive": "Capire",
        "group": "ire",
        "regular": true,
        "aux": "avere",
        "tense": "passato",
        "transitive": true,
        "quiz": [
          {
            "q": "النهاية القياسية للفعل المنتظم من مجموعة -ire في Passato Prossimo تكون ما؟",
            "options": [
              "-ato",
              "-uto",
              "-ito",
              "-ando"
            ],
            "correct": 2
          },
          {
            "q": "الفعل \"Capire\" منتمي لأي مجموعة؟",
            "options": [
              "-ire",
              "شاذ",
              "-are",
              "-ere"
            ],
            "correct": 0
          },
          {
            "q": "الزمن الذي صُرِّف به \"capito\" ما؟",
            "options": [
              "Imperfetto",
              "Imperativo",
              "Presente",
              "Passato Prossimo"
            ],
            "correct": 3
          },
          {
            "q": "الفعل المساعد الذي يأتي مع \"Capire\" في الماضي ما؟",
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
        "it": "l'errore",
        "ar": "الخطأ",
        "note": null,
        "type": "nome_unit",
        "gender": "m",
        "plural": "i l'errori",
        "quiz": [
          {
            "q": "جنس \"l'errore\" ما؟",
            "options": [
              "محايد",
              "مذكر",
              "مؤنث",
              "جمع"
            ],
            "correct": 1
          }
        ],
        "nounIt": "l'errore",
        "relatedWords": []
      }
    ],
    "conj": {
      "verb": "Capire",
      "tense": "Passato Prossimo",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho capito"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai capito"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha capito"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha capito"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo capito"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete capito"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno capito"
        }
      ]
    },
    "quiz": [
      {
        "wordIt": "spiegavano",
        "q": "الفعل \"spiegavano\" — منتمي لأي مجموعة؟",
        "options": [
          "شاذ",
          "-are",
          "-ere",
          "-ire"
        ],
        "correct": 1
      },
      {
        "wordIt": "spiegavano",
        "q": "الزمن الذي صُرِّف فيه \"spiegavano\" ما؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 2
      },
      {
        "wordIt": "il progetto",
        "q": "جنس \"il progetto\" ما؟",
        "options": [
          "مؤنث",
          "جمع",
          "محايد",
          "مذكر"
        ],
        "correct": 3
      },
      {
        "wordIt": "quando",
        "q": "\"quando\" بمعنى ما هنا؟",
        "options": [
          "لكي",
          "ولو",
          "عندما",
          "لكن"
        ],
        "correct": 2
      },
      {
        "wordIt": "capito",
        "q": "الفعل \"capito\" — منتمي لأي مجموعة؟",
        "options": [
          "شاذ",
          "-are",
          "-ere",
          "-ire"
        ],
        "correct": 3
      },
      {
        "wordIt": "capito",
        "q": "الزمن الذي صُرِّف فيه \"capito\" ما؟",
        "options": [
          "Presente",
          "Passato Prossimo",
          "Imperfetto",
          "Imperativo"
        ],
        "correct": 1
      },
      {
        "wordIt": "capito",
        "q": "الفعل المساعد الذي يأتي مع \"Capire\" في الـ Passato Prossimo ما؟",
        "options": [
          "essere",
          "ho",
          "sono",
          "avere"
        ],
        "correct": 3
      },
      {
        "wordIt": "l'errore",
        "q": "جنس \"l'errore\" ما؟",
        "options": [
          "جمع",
          "محايد",
          "مذكر",
          "مؤنث"
        ],
        "correct": 2
      }
    ]
  }
];
