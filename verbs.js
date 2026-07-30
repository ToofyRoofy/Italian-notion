const VERBS = [
  {
    "it": "Aiutare",
    "ar": "يساعد",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Aiuto"
      },
      {
        "person": "Tu (أنت)",
        "form": "Aiuti"
      },
      {
        "person": "Lui (هو)",
        "form": "Aiuta"
      },
      {
        "person": "Lei (هي)",
        "form": "Aiuta"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Aiutiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Aiutate"
      },
      {
        "person": "Loro (هم)",
        "form": "Aiutano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho aiutato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai aiutato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha aiutato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha aiutato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo aiutato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete aiutato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno aiutato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Aiutavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Aiutavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Aiutava"
        },
        {
          "person": "Lei (هي)",
          "form": "Aiutava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Aiutavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Aiutavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Aiutavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Aiuta"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Aiuti"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Aiutiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Aiutate"
        },
        {
          "person": "Loro (هم)",
          "form": "Aiutino"
        }
      ]
    }
  },
  {
    "it": "Andare",
    "ar": "يروح / يذهب",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Vado"
      },
      {
        "person": "Tu (أنت)",
        "form": "Vai"
      },
      {
        "person": "Lui (هو)",
        "form": "Va"
      },
      {
        "person": "Lei (هي)",
        "form": "Va"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Andiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Andate"
      },
      {
        "person": "Loro (هم)",
        "form": "Vanno"
      }
    ],
    "passato": {
      "aux": "essere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Andavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Andavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Andava"
        },
        {
          "person": "Lei (هي)",
          "form": "Andava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Andavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Andavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Andavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Va' / Vai"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Vada"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Andiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Andate"
        },
        {
          "person": "Loro (هم)",
          "form": "Vadano"
        }
      ]
    }
  },
  {
    "it": "Arrivare",
    "ar": "يوصل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Arrivo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Arrivi"
      },
      {
        "person": "Lui (هو)",
        "form": "Arriva"
      },
      {
        "person": "Lei (هي)",
        "form": "Arriva"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Arriviamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Arrivate"
      },
      {
        "person": "Loro (هم)",
        "form": "Arrivano"
      }
    ],
    "passato": {
      "aux": "essere",
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
          "person": "Noi (إحنا)",
          "form": "Siamo arrivati/e"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete arrivati/e"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono arrivati/e"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Arrivavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Arrivavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Arrivava"
        },
        {
          "person": "Lei (هي)",
          "form": "Arrivava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Arrivavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Arrivavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Arrivavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Arriva"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Arrivi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Arriviamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Arrivate"
        },
        {
          "person": "Loro (هم)",
          "form": "Arrivino"
        }
      ]
    }
  },
  {
    "it": "Ascoltare",
    "ar": "يسمع / يستمع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Ascolto"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ascolti"
      },
      {
        "person": "Lui (هو)",
        "form": "Ascolta"
      },
      {
        "person": "Lei (هي)",
        "form": "Ascolta"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Ascoltiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Ascoltate"
      },
      {
        "person": "Loro (هم)",
        "form": "Ascoltano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho ascoltato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai ascoltato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha ascoltato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha ascoltato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo ascoltato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete ascoltato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno ascoltato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ascoltavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ascoltavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Ascoltava"
        },
        {
          "person": "Lei (هي)",
          "form": "Ascoltava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Ascoltavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ascoltavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Ascoltavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Ascolta"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Ascolti"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Ascoltiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ascoltate"
        },
        {
          "person": "Loro (هم)",
          "form": "Ascoltino"
        }
      ]
    }
  },
  {
    "it": "Aspettare",
    "ar": "ينتظر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Aspetto"
      },
      {
        "person": "Tu (أنت)",
        "form": "Aspetti"
      },
      {
        "person": "Lui (هو)",
        "form": "Aspetta"
      },
      {
        "person": "Lei (هي)",
        "form": "Aspetta"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Aspettiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Aspettate"
      },
      {
        "person": "Loro (هم)",
        "form": "Aspettano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho aspettato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai aspettato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha aspettato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha aspettato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo aspettato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete aspettato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno aspettato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Aspettavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Aspettavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Aspettava"
        },
        {
          "person": "Lei (هي)",
          "form": "Aspettava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Aspettavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Aspettavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Aspettavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Aspetta"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Aspetti"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Aspettiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Aspettate"
        },
        {
          "person": "Loro (هم)",
          "form": "Aspettino"
        }
      ]
    }
  },
  {
    "it": "Bussare",
    "ar": "يخبط (على الباب)",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Busso"
      },
      {
        "person": "Tu (أنت)",
        "form": "Bussi"
      },
      {
        "person": "Lui (هو)",
        "form": "Bussa"
      },
      {
        "person": "Lei (هي)",
        "form": "Bussa"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Bussiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Bussate"
      },
      {
        "person": "Loro (هم)",
        "form": "Bussano"
      }
    ],
    "passato": {
      "aux": "avere",
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
          "person": "Noi (إحنا)",
          "form": "Abbiamo bussato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete bussato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno bussato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Bussavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Bussavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Bussava"
        },
        {
          "person": "Lei (هي)",
          "form": "Bussava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Bussavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bussavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Bussavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Bussa"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Bussi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Bussiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bussate"
        },
        {
          "person": "Loro (هم)",
          "form": "Bussino"
        }
      ]
    }
  },
  {
    "it": "Camminare",
    "ar": "يمشي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Cammino"
      },
      {
        "person": "Tu (أنت)",
        "form": "Cammini"
      },
      {
        "person": "Lui (هو)",
        "form": "Cammina"
      },
      {
        "person": "Lei (هي)",
        "form": "Cammina"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Camminiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Camminate"
      },
      {
        "person": "Loro (هم)",
        "form": "Camminano"
      }
    ],
    "passato": {
      "aux": "avere",
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
          "person": "Noi (إحنا)",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Camminavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Camminavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Camminava"
        },
        {
          "person": "Lei (هي)",
          "form": "Camminava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Camminavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Camminavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Camminavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Cammina"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Cammini"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Camminiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Camminate"
        },
        {
          "person": "Loro (هم)",
          "form": "Camminino"
        }
      ]
    }
  },
  {
    "it": "Cercare",
    "ar": "يبحث عن",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Cerco"
      },
      {
        "person": "Tu (أنت)",
        "form": "Cerchi"
      },
      {
        "person": "Lui (هو)",
        "form": "Cerca"
      },
      {
        "person": "Lei (هي)",
        "form": "Cerca"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Cerchiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Cercate"
      },
      {
        "person": "Loro (هم)",
        "form": "Cercano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho cercato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai cercato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha cercato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha cercato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo cercato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete cercato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno cercato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Cercavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Cercavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Cercava"
        },
        {
          "person": "Lei (هي)",
          "form": "Cercava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Cercavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cercavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Cercavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Cerca"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Cerchi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Cerchiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cercate"
        },
        {
          "person": "Loro (هم)",
          "form": "Cerchino"
        }
      ]
    }
  },
  {
    "it": "Chiamare",
    "ar": "ينادي / يتصل بـ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Chiamo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Chiami"
      },
      {
        "person": "Lui (هو)",
        "form": "Chiama"
      },
      {
        "person": "Lei (هي)",
        "form": "Chiama"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Chiamiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Chiamate"
      },
      {
        "person": "Loro (هم)",
        "form": "Chiamano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho chiamato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai chiamato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha chiamato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha chiamato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo chiamato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete chiamato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno chiamato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Chiamavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Chiamavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Chiamava"
        },
        {
          "person": "Lei (هي)",
          "form": "Chiamava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Chiamavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Chiamavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Chiamavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Chiama"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Chiami"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Chiamiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Chiamate"
        },
        {
          "person": "Loro (هم)",
          "form": "Chiamino"
        }
      ]
    }
  },
  {
    "it": "Comprare",
    "ar": "يشتري",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Compro"
      },
      {
        "person": "Tu (أنت)",
        "form": "Compri"
      },
      {
        "person": "Lui (هو)",
        "form": "Compra"
      },
      {
        "person": "Lei (هي)",
        "form": "Compra"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Compriamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Comprate"
      },
      {
        "person": "Loro (هم)",
        "form": "Comprano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho comprato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai comprato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha comprato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha comprato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo comprato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete comprato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno comprato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Compravo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Compravi"
        },
        {
          "person": "Lui (هو)",
          "form": "Comprava"
        },
        {
          "person": "Lei (هي)",
          "form": "Comprava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Compravamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Compravate"
        },
        {
          "person": "Loro (هم)",
          "form": "Compravano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Compra"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Compri"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Compriamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Comprate"
        },
        {
          "person": "Loro (هم)",
          "form": "Comprino"
        }
      ]
    }
  },
  {
    "it": "Giocare",
    "ar": "يلعب",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Gioco"
      },
      {
        "person": "Tu (أنت)",
        "form": "Giochi"
      },
      {
        "person": "Lui (هو)",
        "form": "Gioca"
      },
      {
        "person": "Lei (هي)",
        "form": "Gioca"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Giochiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Giocate"
      },
      {
        "person": "Loro (هم)",
        "form": "Giocano"
      }
    ],
    "passato": {
      "aux": "avere",
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
          "person": "Noi (إحنا)",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Giocavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Giocavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Giocava"
        },
        {
          "person": "Lei (هي)",
          "form": "Giocava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Giocavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Giocavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Giocavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Gioca"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Giochi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Giochiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Giocate"
        },
        {
          "person": "Loro (هم)",
          "form": "Giochino"
        }
      ]
    }
  },
  {
    "it": "Guardare",
    "ar": "يتفرج / ينظر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Guardo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Guardi"
      },
      {
        "person": "Lui (هو)",
        "form": "Guarda"
      },
      {
        "person": "Lei (هي)",
        "form": "Guarda"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Guardiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Guardate"
      },
      {
        "person": "Loro (هم)",
        "form": "Guardano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho guardato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai guardato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha guardato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha guardato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo guardato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete guardato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno guardato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Guardavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Guardavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Guardava"
        },
        {
          "person": "Lei (هي)",
          "form": "Guardava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Guardavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Guardavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Guardavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Guarda"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Guardi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Guardiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Guardate"
        },
        {
          "person": "Loro (هم)",
          "form": "Guardino"
        }
      ]
    }
  },
  {
    "it": "Incontrare",
    "ar": "يقابل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Incontro"
      },
      {
        "person": "Tu (أنت)",
        "form": "Incontri"
      },
      {
        "person": "Lui (هو)",
        "form": "Incontra"
      },
      {
        "person": "Lei (هي)",
        "form": "Incontra"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Incontriamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Incontrate"
      },
      {
        "person": "Loro (هم)",
        "form": "Incontrano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho incontrato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai incontrato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha incontrato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha incontrato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo incontrato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete incontrato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno incontrato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Incontravo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Incontravi"
        },
        {
          "person": "Lui (هو)",
          "form": "Incontrava"
        },
        {
          "person": "Lei (هي)",
          "form": "Incontrava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Incontravamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Incontravate"
        },
        {
          "person": "Loro (هم)",
          "form": "Incontravano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Incontra"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Incontri"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Incontriamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Incontrate"
        },
        {
          "person": "Loro (هم)",
          "form": "Incontrino"
        }
      ]
    }
  },
  {
    "it": "Lavorare",
    "ar": "يشتغل / يعمل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Lavoro"
      },
      {
        "person": "Tu (أنت)",
        "form": "Lavori"
      },
      {
        "person": "Lui (هو)",
        "form": "Lavora"
      },
      {
        "person": "Lei (هي)",
        "form": "Lavora"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Lavoriamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Lavorate"
      },
      {
        "person": "Loro (هم)",
        "form": "Lavorano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho lavorato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai lavorato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha lavorato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha lavorato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo lavorato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete lavorato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno lavorato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Lavoravo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Lavoravi"
        },
        {
          "person": "Lui (هو)",
          "form": "Lavorava"
        },
        {
          "person": "Lei (هي)",
          "form": "Lavorava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Lavoravamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Lavoravate"
        },
        {
          "person": "Loro (هم)",
          "form": "Lavoravano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Lavora"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Lavori"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Lavoriamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Lavorate"
        },
        {
          "person": "Loro (هم)",
          "form": "Lavorino"
        }
      ]
    }
  },
  {
    "it": "Mangiare",
    "ar": "يأكل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mangio"
      },
      {
        "person": "Tu (أنت)",
        "form": "Mangi"
      },
      {
        "person": "Lui (هو)",
        "form": "Mangia"
      },
      {
        "person": "Lei (هي)",
        "form": "Mangia"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Mangiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Mangiate"
      },
      {
        "person": "Loro (هم)",
        "form": "Mangiano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho mangiato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai mangiato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha mangiato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha mangiato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo mangiato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete mangiato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno mangiato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mangiavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Mangiavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Mangiava"
        },
        {
          "person": "Lei (هي)",
          "form": "Mangiava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Mangiavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Mangiavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Mangiavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Mangia"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Mangi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Mangiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Mangiate"
        },
        {
          "person": "Loro (هم)",
          "form": "Mangino"
        }
      ]
    }
  },
  {
    "it": "Pagare",
    "ar": "يدفع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Pago"
      },
      {
        "person": "Tu (أنت)",
        "form": "Paghi"
      },
      {
        "person": "Lui (هو)",
        "form": "Paga"
      },
      {
        "person": "Lei (هي)",
        "form": "Paga"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Paghiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Pagate"
      },
      {
        "person": "Loro (هم)",
        "form": "Pagano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho pagato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai pagato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha pagato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha pagato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo pagato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete pagato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno pagato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Pagavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Pagavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Pagava"
        },
        {
          "person": "Lei (هي)",
          "form": "Pagava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Pagavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pagavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Pagavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Paga"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Paghi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Paghiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pagate"
        },
        {
          "person": "Loro (هم)",
          "form": "Paghino"
        }
      ]
    }
  },
  {
    "it": "Portare",
    "ar": "يجيب / يحمل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Porto"
      },
      {
        "person": "Tu (أنت)",
        "form": "Porti"
      },
      {
        "person": "Lui (هو)",
        "form": "Porta"
      },
      {
        "person": "Lei (هي)",
        "form": "Porta"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Portiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Portate"
      },
      {
        "person": "Loro (هم)",
        "form": "Portano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho portato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai portato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha portato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha portato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo portato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete portato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno portato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Portavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Portavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Portava"
        },
        {
          "person": "Lei (هي)",
          "form": "Portava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Portavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Portavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Portavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Porta"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Porti"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Portiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Portate"
        },
        {
          "person": "Loro (هم)",
          "form": "Portino"
        }
      ]
    }
  },
  {
    "it": "Restare",
    "ar": "يفضل / يبقى",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Resto"
      },
      {
        "person": "Tu (أنت)",
        "form": "Resti"
      },
      {
        "person": "Lui (هو)",
        "form": "Resta"
      },
      {
        "person": "Lei (هي)",
        "form": "Resta"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Restiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Restate"
      },
      {
        "person": "Loro (هم)",
        "form": "Restano"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono restato/a"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei restato/a"
        },
        {
          "person": "Lui (هو)",
          "form": "È restato"
        },
        {
          "person": "Lei (هي)",
          "form": "È restata"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Siamo restati/e"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete restati/e"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono restati/e"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Restavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Restavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Restava"
        },
        {
          "person": "Lei (هي)",
          "form": "Restava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Restavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Restavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Restavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Resta"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Resti"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Restiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Restate"
        },
        {
          "person": "Loro (هم)",
          "form": "Restino"
        }
      ]
    }
  },
  {
    "it": "Ringraziare",
    "ar": "يشكر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Ringrazio"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ringrazi"
      },
      {
        "person": "Lui (هو)",
        "form": "Ringrazia"
      },
      {
        "person": "Lei (هي)",
        "form": "Ringrazia"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Ringraziamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Ringraziate"
      },
      {
        "person": "Loro (هم)",
        "form": "Ringraziano"
      }
    ],
    "passato": {
      "aux": "avere",
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
          "person": "Noi (إحنا)",
          "form": "Abbiamo ringraziato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete ringraziato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno ringraziato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ringraziavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ringraziavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Ringraziava"
        },
        {
          "person": "Lei (هي)",
          "form": "Ringraziava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Ringraziavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ringraziavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Ringraziavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Ringrazia"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Ringrazi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Ringraziamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ringraziate"
        },
        {
          "person": "Loro (هم)",
          "form": "Ringrazino"
        }
      ]
    }
  },
  {
    "it": "Salutare",
    "ar": "يسلم على",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Saluto"
      },
      {
        "person": "Tu (أنت)",
        "form": "Saluti"
      },
      {
        "person": "Lui (هو)",
        "form": "Saluta"
      },
      {
        "person": "Lei (هي)",
        "form": "Saluta"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Salutiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Salutate"
      },
      {
        "person": "Loro (هم)",
        "form": "Salutano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho salutato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai salutato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha salutato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha salutato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo salutato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete salutato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno salutato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Salutavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Salutavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Salutava"
        },
        {
          "person": "Lei (هي)",
          "form": "Salutava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Salutavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Salutavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Salutavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Saluta"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Saluti"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Salutiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Salutate"
        },
        {
          "person": "Loro (هم)",
          "form": "Salutino"
        }
      ]
    }
  },
  {
    "it": "Studiare",
    "ar": "يدرس",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Studio"
      },
      {
        "person": "Tu (أنت)",
        "form": "Studi"
      },
      {
        "person": "Lui (هو)",
        "form": "Studia"
      },
      {
        "person": "Lei (هي)",
        "form": "Studia"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Studiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Studiate"
      },
      {
        "person": "Loro (هم)",
        "form": "Studiano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho studiato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai studiato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha studiato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha studiato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo studiato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete studiato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno studiato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Studiavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Studiavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Studiava"
        },
        {
          "person": "Lei (هي)",
          "form": "Studiava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Studiavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Studiavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Studiavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Studia"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Studi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Studiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Studiate"
        },
        {
          "person": "Loro (هم)",
          "form": "Studino"
        }
      ]
    }
  },
  {
    "it": "Telefonare",
    "ar": "يتصل تليفونيا",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Telefono"
      },
      {
        "person": "Tu (أنت)",
        "form": "Telefoni"
      },
      {
        "person": "Lui (هو)",
        "form": "Telefona"
      },
      {
        "person": "Lei (هي)",
        "form": "Telefona"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Telefoniamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Telefonate"
      },
      {
        "person": "Loro (هم)",
        "form": "Telefonano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho telefonato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai telefonato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha telefonato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha telefonato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo telefonato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete telefonato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno telefonato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Telefonavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Telefonavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Telefonava"
        },
        {
          "person": "Lei (هي)",
          "form": "Telefonava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Telefonavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Telefonavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Telefonavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Telefona"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Telefoni"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Telefoniamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Telefonate"
        },
        {
          "person": "Loro (هم)",
          "form": "Telefonino"
        }
      ]
    }
  },
  {
    "it": "Tornare",
    "ar": "يرجع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Torno"
      },
      {
        "person": "Tu (أنت)",
        "form": "Torni"
      },
      {
        "person": "Lui (هو)",
        "form": "Torna"
      },
      {
        "person": "Lei (هي)",
        "form": "Torna"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Torniamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Tornate"
      },
      {
        "person": "Loro (هم)",
        "form": "Tornano"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono tornato/a"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei tornato/a"
        },
        {
          "person": "Lui (هو)",
          "form": "È tornato"
        },
        {
          "person": "Lei (هي)",
          "form": "È tornata"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Siamo tornati/e"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete tornati/e"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono tornati/e"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Tornavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Tornavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Tornava"
        },
        {
          "person": "Lei (هي)",
          "form": "Tornava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Tornavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Tornavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Tornavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Torna"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Torni"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Torniamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Tornate"
        },
        {
          "person": "Loro (هم)",
          "form": "Tornino"
        }
      ]
    }
  },
  {
    "it": "Trovare",
    "ar": "يلاقي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Trovo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Trovi"
      },
      {
        "person": "Lui (هو)",
        "form": "Trova"
      },
      {
        "person": "Lei (هي)",
        "form": "Trova"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Troviamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Trovate"
      },
      {
        "person": "Loro (هم)",
        "form": "Trovano"
      }
    ],
    "passato": {
      "aux": "avere",
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
          "person": "Noi (إحنا)",
          "form": "Abbiamo trovato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete trovato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno trovato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Trovavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Trovavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Trovava"
        },
        {
          "person": "Lei (هي)",
          "form": "Trovava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Trovavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Trovavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Trovavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Trova"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Trovi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Troviamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Trovate"
        },
        {
          "person": "Loro (هم)",
          "form": "Trovino"
        }
      ]
    }
  },
  {
    "it": "Viaggiare",
    "ar": "يسافر (يرحل)",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Viaggio"
      },
      {
        "person": "Tu (أنت)",
        "form": "Viaggi"
      },
      {
        "person": "Lui (هو)",
        "form": "Viaggia"
      },
      {
        "person": "Lei (هي)",
        "form": "Viaggia"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Viaggiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Viaggiate"
      },
      {
        "person": "Loro (هم)",
        "form": "Viaggiano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho viaggiato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai viaggiato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha viaggiato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha viaggiato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo viaggiato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete viaggiato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno viaggiato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Viaggiavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Viaggiavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Viaggiava"
        },
        {
          "person": "Lei (هي)",
          "form": "Viaggiava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Viaggiavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Viaggiavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Viaggiavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Viaggia"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Viaggi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Viaggiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Viaggiate"
        },
        {
          "person": "Loro (هم)",
          "form": "Viaggino"
        }
      ]
    }
  },
  {
    "it": "Fare",
    "ar": "يعمل / يصنع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Faccio"
      },
      {
        "person": "Tu (أنت)",
        "form": "Fai"
      },
      {
        "person": "Lui (هو)",
        "form": "Fa"
      },
      {
        "person": "Lei (هي)",
        "form": "Fa"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Facciamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Fate"
      },
      {
        "person": "Loro (هم)",
        "form": "Fanno"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho fatto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai fatto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha fatto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha fatto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo fatto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete fatto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno fatto"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Facevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Facevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Faceva"
        },
        {
          "person": "Lei (هي)",
          "form": "Faceva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Facevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Facevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Facevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Fa' / Fai"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Faccia"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Facciamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Fate"
        },
        {
          "person": "Loro (هم)",
          "form": "Facciano"
        }
      ]
    }
  },
  {
    "it": "Dare",
    "ar": "يعطي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Do"
      },
      {
        "person": "Tu (أنت)",
        "form": "Dai"
      },
      {
        "person": "Lui (هو)",
        "form": "Dà"
      },
      {
        "person": "Lei (هي)",
        "form": "Dà"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Diamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Date"
      },
      {
        "person": "Loro (هم)",
        "form": "Danno"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho dato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai dato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha dato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha dato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo dato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete dato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno dato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Davo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Davi"
        },
        {
          "person": "Lui (هو)",
          "form": "Dava"
        },
        {
          "person": "Lei (هي)",
          "form": "Dava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Davamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Davate"
        },
        {
          "person": "Loro (هم)",
          "form": "Davano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Da' / Dai"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Dia"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Diamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Date"
        },
        {
          "person": "Loro (هم)",
          "form": "Diano"
        }
      ]
    }
  },
  {
    "it": "Funzionare",
    "ar": "يشتغل (عن جهاز/آلة)",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Funziono"
      },
      {
        "person": "Tu (أنت)",
        "form": "Funzioni"
      },
      {
        "person": "Lui (هو)",
        "form": "Funziona"
      },
      {
        "person": "Lei (هي)",
        "form": "Funziona"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Funzioniamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Funzionate"
      },
      {
        "person": "Loro (هم)",
        "form": "Funzionano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho funzionato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai funzionato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha funzionato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha funzionato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo funzionato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete funzionato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno funzionato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Funzionavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Funzionavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Funzionava"
        },
        {
          "person": "Lei (هي)",
          "form": "Funzionava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Funzionavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Funzionavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Funzionavano"
        }
      ]
    },
    "imperativo": {
      "note": "فعل بيتقال عن الأجهزة/الآلات، فصيغة الأمر موجودة نحويًا بس مش بتستعمل في الكلام العادي كتير",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Funziona"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Funzioni"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Funzioniamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Funzionate"
        },
        {
          "person": "Loro (هم)",
          "form": "Funzionino"
        }
      ]
    }
  },
  {
    "it": "Parlare",
    "ar": "يتكلم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Parlo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Parli"
      },
      {
        "person": "Lui (هو)",
        "form": "Parla"
      },
      {
        "person": "Lei (هي)",
        "form": "Parla"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Parliamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Parlate"
      },
      {
        "person": "Loro (هم)",
        "form": "Parlano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho parlato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai parlato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha parlato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha parlato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo parlato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete parlato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno parlato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Parlavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Parlavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Parlava"
        },
        {
          "person": "Lei (هي)",
          "form": "Parlava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Parlavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Parlavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Parlavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Parla"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Parli"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Parliamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Parlate"
        },
        {
          "person": "Loro (هم)",
          "form": "Parlino"
        }
      ]
    }
  },
  {
    "it": "Passeggiare",
    "ar": "يتمشى",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Passeggio"
      },
      {
        "person": "Tu (أنت)",
        "form": "Passeggi"
      },
      {
        "person": "Lui (هو)",
        "form": "Passeggia"
      },
      {
        "person": "Lei (هي)",
        "form": "Passeggia"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Passeggiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Passeggiate"
      },
      {
        "person": "Loro (هم)",
        "form": "Passeggiano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho passeggiato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai passeggiato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha passeggiato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha passeggiato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo passeggiato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete passeggiato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno passeggiato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Passeggiavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Passeggiavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Passeggiava"
        },
        {
          "person": "Lei (هي)",
          "form": "Passeggiava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Passeggiavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Passeggiavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Passeggiavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Passeggia"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Passeggi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Passeggiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Passeggiate"
        },
        {
          "person": "Loro (هم)",
          "form": "Passeggino"
        }
      ]
    }
  },
  {
    "it": "Svegliarsi",
    "ar": "يصحى / يستيقظ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi sveglio"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti svegli"
      },
      {
        "person": "Lui (هو)",
        "form": "Si sveglia"
      },
      {
        "person": "Lei (هي)",
        "form": "Si sveglia"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Ci svegliamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi svegliate"
      },
      {
        "person": "Loro (هم)",
        "form": "Si svegliano"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono svegliato/a"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei svegliato/a"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è svegliato"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è svegliata"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Ci siamo svegliati/e"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete svegliati/e"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono svegliati/e"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi svegliavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti svegliavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Si svegliava"
        },
        {
          "person": "Lei (هي)",
          "form": "Si svegliava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Ci svegliavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi svegliavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Si svegliavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Svegliati"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si svegli"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Svegliamoci"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Svegliatevi"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sveglino"
        }
      ]
    }
  },
  {
    "it": "Credere",
    "ar": "يصدق / يعتقد",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Credo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Credi"
      },
      {
        "person": "Lui (هو)",
        "form": "Crede"
      },
      {
        "person": "Lei (هي)",
        "form": "Crede"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Crediamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Credete"
      },
      {
        "person": "Loro (هم)",
        "form": "Credono"
      }
    ],
    "passato": {
      "aux": "avere",
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
          "person": "Noi (إحنا)",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Credevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Credevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Credeva"
        },
        {
          "person": "Lei (هي)",
          "form": "Credeva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Credevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Credevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Credevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Credi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Creda"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Crediamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Credete"
        },
        {
          "person": "Loro (هم)",
          "form": "Credano"
        }
      ]
    }
  },
  {
    "it": "Leggere",
    "ar": "يقرأ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Leggo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Leggi"
      },
      {
        "person": "Lui (هو)",
        "form": "Legge"
      },
      {
        "person": "Lei (هي)",
        "form": "Legge"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Leggiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Leggete"
      },
      {
        "person": "Loro (هم)",
        "form": "Leggono"
      }
    ],
    "passato": {
      "aux": "avere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Leggevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Leggevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Leggeva"
        },
        {
          "person": "Lei (هي)",
          "form": "Leggeva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Leggevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Leggevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Leggevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Leggi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Legga"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Leggiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Leggete"
        },
        {
          "person": "Loro (هم)",
          "form": "Leggano"
        }
      ]
    }
  },
  {
    "it": "Prendere",
    "ar": "يأخذ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Prendo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Prendi"
      },
      {
        "person": "Lui (هو)",
        "form": "Prende"
      },
      {
        "person": "Lei (هي)",
        "form": "Prende"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Prendiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Prendete"
      },
      {
        "person": "Loro (هم)",
        "form": "Prendono"
      }
    ],
    "passato": {
      "aux": "avere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Prendevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Prendevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Prendeva"
        },
        {
          "person": "Lei (هي)",
          "form": "Prendeva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Prendevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Prendevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Prendevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Prendi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Prenda"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Prendiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Prendete"
        },
        {
          "person": "Loro (هم)",
          "form": "Prendano"
        }
      ]
    }
  },
  {
    "it": "Promettere",
    "ar": "يوعد",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Prometto"
      },
      {
        "person": "Tu (أنت)",
        "form": "Prometti"
      },
      {
        "person": "Lui (هو)",
        "form": "Promette"
      },
      {
        "person": "Lei (هي)",
        "form": "Promette"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Promettiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Promettete"
      },
      {
        "person": "Loro (هم)",
        "form": "Promettono"
      }
    ],
    "passato": {
      "aux": "avere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Promettevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Promettevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Prometteva"
        },
        {
          "person": "Lei (هي)",
          "form": "Prometteva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Promettevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Promettevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Promettevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Prometti"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Prometta"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Promettiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Promettete"
        },
        {
          "person": "Loro (هم)",
          "form": "Promettano"
        }
      ]
    }
  },
  {
    "it": "Scrivere",
    "ar": "يكتب",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Scrivo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Scrivi"
      },
      {
        "person": "Lui (هو)",
        "form": "Scrive"
      },
      {
        "person": "Lei (هي)",
        "form": "Scrive"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Scriviamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Scrivete"
      },
      {
        "person": "Loro (هم)",
        "form": "Scrivono"
      }
    ],
    "passato": {
      "aux": "avere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Scrivevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Scrivevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Scriveva"
        },
        {
          "person": "Lei (هي)",
          "form": "Scriveva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Scrivevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Scrivevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Scrivevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Scrivi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Scriva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Scriviamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Scrivete"
        },
        {
          "person": "Loro (هم)",
          "form": "Scrivano"
        }
      ]
    }
  },
  {
    "it": "Vedere",
    "ar": "يشوف / يرى",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Vedo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Vedi"
      },
      {
        "person": "Lui (هو)",
        "form": "Vede"
      },
      {
        "person": "Lei (هي)",
        "form": "Vede"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Vediamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vedete"
      },
      {
        "person": "Loro (هم)",
        "form": "Vedono"
      }
    ],
    "passato": {
      "aux": "avere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Vedevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Vedevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Vedeva"
        },
        {
          "person": "Lei (هي)",
          "form": "Vedeva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Vedevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vedevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Vedevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Vedi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Veda"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Vediamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vedete"
        },
        {
          "person": "Loro (هم)",
          "form": "Vedano"
        }
      ]
    }
  },
  {
    "it": "Vendere",
    "ar": "يبيع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Vendo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Vendi"
      },
      {
        "person": "Lui (هو)",
        "form": "Vende"
      },
      {
        "person": "Lei (هي)",
        "form": "Vende"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Vendiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vendete"
      },
      {
        "person": "Loro (هم)",
        "form": "Vendono"
      }
    ],
    "passato": {
      "aux": "avere",
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
          "person": "Noi (إحنا)",
          "form": "Abbiamo venduto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete venduto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno venduto"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Vendevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Vendevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Vendeva"
        },
        {
          "person": "Lei (هي)",
          "form": "Vendeva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Vendevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vendevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Vendevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Vendi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Venda"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Vendiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vendete"
        },
        {
          "person": "Loro (هم)",
          "form": "Vendano"
        }
      ]
    }
  },
  {
    "it": "Avere",
    "ar": "عنده / يملك",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Ho"
      },
      {
        "person": "Tu (أنت)",
        "form": "Hai"
      },
      {
        "person": "Lui (هو)",
        "form": "Ha"
      },
      {
        "person": "Lei (هي)",
        "form": "Ha"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Abbiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Avete"
      },
      {
        "person": "Loro (هم)",
        "form": "Hanno"
      }
    ],
    "passato": {
      "aux": "avere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Avevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Avevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Aveva"
        },
        {
          "person": "Lei (هي)",
          "form": "Aveva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Avevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Avevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Abbi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Abbia"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Abbiate"
        },
        {
          "person": "Loro (هم)",
          "form": "Abbiano"
        }
      ]
    }
  },
  {
    "it": "Essere",
    "ar": "يكون",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Sono"
      },
      {
        "person": "Tu (أنت)",
        "form": "Sei"
      },
      {
        "person": "Lui (هو)",
        "form": "È"
      },
      {
        "person": "Lei (هي)",
        "form": "È"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Siamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Siete"
      },
      {
        "person": "Loro (هم)",
        "form": "Sono"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono stato/a"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei stato/a"
        },
        {
          "person": "Lui (هو)",
          "form": "È stato"
        },
        {
          "person": "Lei (هي)",
          "form": "È stata"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Siamo stati/e"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete stati/e"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono stati/e"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ero"
        },
        {
          "person": "Tu (أنت)",
          "form": "Eri"
        },
        {
          "person": "Lui (هو)",
          "form": "Era"
        },
        {
          "person": "Lei (هي)",
          "form": "Era"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Eravamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Eravate"
        },
        {
          "person": "Loro (هم)",
          "form": "Erano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sii"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Sia"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Siamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siate"
        },
        {
          "person": "Loro (هم)",
          "form": "Siano"
        }
      ]
    }
  },
  {
    "it": "Potere",
    "ar": "يقدر / يستطيع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Posso"
      },
      {
        "person": "Tu (أنت)",
        "form": "Puoi"
      },
      {
        "person": "Lui (هو)",
        "form": "Può"
      },
      {
        "person": "Lei (هي)",
        "form": "Può"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Possiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Potete"
      },
      {
        "person": "Loro (هم)",
        "form": "Possono"
      }
    ],
    "passato": {
      "aux": "avere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Potevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Potevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Poteva"
        },
        {
          "person": "Lei (هي)",
          "form": "Poteva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Potevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Potevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Potevano"
        }
      ]
    },
    "imperativo": {
      "note": "فعل مساعد (modal) مش بيتعملوه في صيوغة الأمر في اللَغة الطبيعية لأن معناه \"يقدر\" مش أمر",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "—"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "—"
        },
        {
          "person": "Noi (إحنا)",
          "form": "—"
        },
        {
          "person": "Voi (أنتم)",
          "form": "—"
        },
        {
          "person": "Loro (هم)",
          "form": "—"
        }
      ]
    }
  },
  {
    "it": "Sapere",
    "ar": "يعرف",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "So"
      },
      {
        "person": "Tu (أنت)",
        "form": "Sai"
      },
      {
        "person": "Lui (هو)",
        "form": "Sa"
      },
      {
        "person": "Lei (هي)",
        "form": "Sa"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Sappiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Sapete"
      },
      {
        "person": "Loro (هم)",
        "form": "Sanno"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho saputo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai saputo"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha saputo"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha saputo"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo saputo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete saputo"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno saputo"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sapevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sapevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Sapeva"
        },
        {
          "person": "Lei (هي)",
          "form": "Sapeva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Sapevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sapevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Sapevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sappi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Sappia"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Sappiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sappiate"
        },
        {
          "person": "Loro (هم)",
          "form": "Sappiano"
        }
      ]
    }
  },
  {
    "it": "Volere",
    "ar": "عايز / يريد",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Voglio"
      },
      {
        "person": "Tu (أنت)",
        "form": "Vuoi"
      },
      {
        "person": "Lui (هو)",
        "form": "Vuole"
      },
      {
        "person": "Lei (هي)",
        "form": "Vuole"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Vogliamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Volete"
      },
      {
        "person": "Loro (هم)",
        "form": "Vogliono"
      }
    ],
    "passato": {
      "aux": "avere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Volevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Volevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Voleva"
        },
        {
          "person": "Lei (هي)",
          "form": "Voleva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Volevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Volevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Volevano"
        }
      ]
    },
    "imperativo": {
      "note": "فعل مساعد (modal) نادر يُستعمل في الأمر، ولو استعمل بيكون في كلام رسمي جدًا مثل \"Vogliate scusare\"",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "—"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "—"
        },
        {
          "person": "Noi (إحنا)",
          "form": "—"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vogliate"
        },
        {
          "person": "Loro (هم)",
          "form": "—"
        }
      ]
    }
  },
  {
    "it": "Tacere",
    "ar": "يسكت",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Taccio"
      },
      {
        "person": "Tu (أنت)",
        "form": "Taci"
      },
      {
        "person": "Lui (هو)",
        "form": "Tace"
      },
      {
        "person": "Lei (هي)",
        "form": "Tace"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Taciamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Tacete"
      },
      {
        "person": "Loro (هم)",
        "form": "Tacciono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho taciuto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai taciuto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha taciuto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha taciuto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo taciuto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete taciuto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno taciuto"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Tacevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Tacevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Taceva"
        },
        {
          "person": "Lei (هي)",
          "form": "Taceva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Tacevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Tacevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Tacevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Taci"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Taccia"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Taciamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Tacete"
        },
        {
          "person": "Loro (هم)",
          "form": "Tacciano"
        }
      ]
    }
  },
  {
    "it": "Apprendere",
    "ar": "يتعلم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Apprendo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Apprendi"
      },
      {
        "person": "Lui (هو)",
        "form": "Apprende"
      },
      {
        "person": "Lei (هي)",
        "form": "Apprende"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Apprendiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Apprendete"
      },
      {
        "person": "Loro (هم)",
        "form": "Apprendono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho appreso"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai appreso"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha appreso"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha appreso"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo appreso"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete appreso"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno appreso"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Apprendevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Apprendevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Apprendeva"
        },
        {
          "person": "Lei (هي)",
          "form": "Apprendeva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Apprendevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Apprendevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Apprendevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Apprendi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Apprenda"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Apprendiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Apprendete"
        },
        {
          "person": "Loro (هم)",
          "form": "Apprendano"
        }
      ]
    }
  },
  {
    "it": "Capire",
    "ar": "يفهم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Capisco"
      },
      {
        "person": "Tu (أنت)",
        "form": "Capisci"
      },
      {
        "person": "Lui (هو)",
        "form": "Capisce"
      },
      {
        "person": "Lei (هي)",
        "form": "Capisce"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Capiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Capite"
      },
      {
        "person": "Loro (هم)",
        "form": "Capiscono"
      }
    ],
    "passato": {
      "aux": "avere",
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
          "person": "Noi (إحنا)",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Capivo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Capivi"
        },
        {
          "person": "Lui (هو)",
          "form": "Capiva"
        },
        {
          "person": "Lei (هي)",
          "form": "Capiva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Capivamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Capivate"
        },
        {
          "person": "Loro (هم)",
          "form": "Capivano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Capisci"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Capisca"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Capiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Capite"
        },
        {
          "person": "Loro (هم)",
          "form": "Capiscano"
        }
      ]
    }
  },
  {
    "it": "Dire",
    "ar": "يقول",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Dico"
      },
      {
        "person": "Tu (أنت)",
        "form": "Dici"
      },
      {
        "person": "Lui (هو)",
        "form": "Dice"
      },
      {
        "person": "Lei (هي)",
        "form": "Dice"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Diciamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Dite"
      },
      {
        "person": "Loro (هم)",
        "form": "Dicono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho detto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai detto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha detto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha detto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo detto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete detto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno detto"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Dicevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Dicevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Diceva"
        },
        {
          "person": "Lei (هي)",
          "form": "Diceva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Dicevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dicevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Dicevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Di'"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Dica"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Diciamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dite"
        },
        {
          "person": "Loro (هم)",
          "form": "Dicano"
        }
      ]
    }
  },
  {
    "it": "Finire",
    "ar": "يخلّص / ينتهي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Finisco"
      },
      {
        "person": "Tu (أنت)",
        "form": "Finisci"
      },
      {
        "person": "Lui (هو)",
        "form": "Finisce"
      },
      {
        "person": "Lei (هي)",
        "form": "Finisce"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Finiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Finite"
      },
      {
        "person": "Loro (هم)",
        "form": "Finiscono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho finito"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai finito"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha finito"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha finito"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo finito"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete finito"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno finito"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Finivo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Finivi"
        },
        {
          "person": "Lui (هو)",
          "form": "Finiva"
        },
        {
          "person": "Lei (هي)",
          "form": "Finiva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Finivamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Finivate"
        },
        {
          "person": "Loro (هم)",
          "form": "Finivano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Finisci"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Finisca"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Finiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Finite"
        },
        {
          "person": "Loro (هم)",
          "form": "Finiscano"
        }
      ]
    }
  },
  {
    "it": "Partire",
    "ar": "يسافر / يغادر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Parto"
      },
      {
        "person": "Tu (أنت)",
        "form": "Parti"
      },
      {
        "person": "Lui (هو)",
        "form": "Parte"
      },
      {
        "person": "Lei (هي)",
        "form": "Parte"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Partiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Partite"
      },
      {
        "person": "Loro (هم)",
        "form": "Partono"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono partito/a"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei partito/a"
        },
        {
          "person": "Lui (هو)",
          "form": "È partito"
        },
        {
          "person": "Lei (هي)",
          "form": "È partita"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Siamo partiti/e"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete partiti/e"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono partiti/e"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Partivo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Partivi"
        },
        {
          "person": "Lui (هو)",
          "form": "Partiva"
        },
        {
          "person": "Lei (هي)",
          "form": "Partiva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Partivamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Partivate"
        },
        {
          "person": "Loro (هم)",
          "form": "Partivano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Parti"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Parta"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Partiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Partite"
        },
        {
          "person": "Loro (هم)",
          "form": "Partano"
        }
      ]
    }
  },
  {
    "it": "Pulire",
    "ar": "ينظف",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Pulisco"
      },
      {
        "person": "Tu (أنت)",
        "form": "Pulisci"
      },
      {
        "person": "Lui (هو)",
        "form": "Pulisce"
      },
      {
        "person": "Lei (هي)",
        "form": "Pulisce"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Puliamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Pulite"
      },
      {
        "person": "Loro (هم)",
        "form": "Puliscono"
      }
    ],
    "passato": {
      "aux": "avere",
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
          "person": "Noi (إحنا)",
          "form": "Abbiamo pulito"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete pulito"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno pulito"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Pulivo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Pulivi"
        },
        {
          "person": "Lui (هو)",
          "form": "Puliva"
        },
        {
          "person": "Lei (هي)",
          "form": "Puliva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Pulivamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pulivate"
        },
        {
          "person": "Loro (هم)",
          "form": "Pulivano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Pulisci"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Pulisca"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Puliamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pulite"
        },
        {
          "person": "Loro (هم)",
          "form": "Puliscano"
        }
      ]
    }
  },
  {
    "it": "Uscire",
    "ar": "يخرج",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Esco"
      },
      {
        "person": "Tu (أنت)",
        "form": "Esci"
      },
      {
        "person": "Lui (هو)",
        "form": "Esce"
      },
      {
        "person": "Lei (هي)",
        "form": "Esce"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Usciamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Uscite"
      },
      {
        "person": "Loro (هم)",
        "form": "Escono"
      }
    ],
    "passato": {
      "aux": "essere",
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
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Uscivo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Uscivi"
        },
        {
          "person": "Lui (هو)",
          "form": "Usciva"
        },
        {
          "person": "Lei (هي)",
          "form": "Usciva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Uscivamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Uscivate"
        },
        {
          "person": "Loro (هم)",
          "form": "Uscivano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Esci"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Esca"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Usciamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Uscite"
        },
        {
          "person": "Loro (هم)",
          "form": "Escano"
        }
      ]
    }
  },
  {
    "it": "Cucinare",
    "ar": "يطبخ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Cucino"
      },
      {
        "person": "Tu (أنت)",
        "form": "Cucini"
      },
      {
        "person": "Lui (هو)",
        "form": "Cucina"
      },
      {
        "person": "Lei (هي)",
        "form": "Cucina"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Cuciniamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Cucinate"
      },
      {
        "person": "Loro (هم)",
        "form": "Cucinano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho cucinato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai cucinato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha cucinato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha cucinato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo cucinato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete cucinato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno cucinato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Cucinavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Cucinavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Cucinava"
        },
        {
          "person": "Lei (هي)",
          "form": "Cucinava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Cucinavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cucinavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Cucinavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Cucina"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Cucini"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Cuciniamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cucinate"
        },
        {
          "person": "Loro (هم)",
          "form": "Cucinino"
        }
      ]
    }
  },
  {
    "it": "Pensare",
    "ar": "يفكر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Penso"
      },
      {
        "person": "Tu (أنت)",
        "form": "Pensi"
      },
      {
        "person": "Lui (هو)",
        "form": "Pensa"
      },
      {
        "person": "Lei (هي)",
        "form": "Pensa"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Pensiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Pensate"
      },
      {
        "person": "Loro (هم)",
        "form": "Pensano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho pensato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai pensato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha pensato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha pensato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo pensato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete pensato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno pensato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Pensavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Pensavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Pensava"
        },
        {
          "person": "Lei (هي)",
          "form": "Pensava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Pensavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pensavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Pensavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Pensa"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Pensi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Pensiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pensate"
        },
        {
          "person": "Loro (هم)",
          "form": "Pensino"
        }
      ]
    }
  },
  {
    "it": "Piangere",
    "ar": "يعيّط / يبكي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Piango"
      },
      {
        "person": "Tu (أنت)",
        "form": "Piangi"
      },
      {
        "person": "Lui (هو)",
        "form": "Piange"
      },
      {
        "person": "Lei (هي)",
        "form": "Piange"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Piangiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Piangete"
      },
      {
        "person": "Loro (هم)",
        "form": "Piangono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho pianto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai pianto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha pianto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha pianto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo pianto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete pianto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno pianto"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Piangevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Piangevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Piangeva"
        },
        {
          "person": "Lei (هي)",
          "form": "Piangeva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Piangevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Piangevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Piangevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Piangi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Pianga"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Piangiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Piangete"
        },
        {
          "person": "Loro (هم)",
          "form": "Piangano"
        }
      ]
    }
  },
  {
    "it": "Ridere",
    "ar": "يضحك",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Rido"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ridi"
      },
      {
        "person": "Lui (هو)",
        "form": "Ride"
      },
      {
        "person": "Lei (هي)",
        "form": "Ride"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Ridiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Ridete"
      },
      {
        "person": "Loro (هم)",
        "form": "Ridono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho riso"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai riso"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha riso"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha riso"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo riso"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete riso"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno riso"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ridevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ridevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Rideva"
        },
        {
          "person": "Lei (هي)",
          "form": "Rideva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Ridevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ridevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Ridevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Ridi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Rida"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Ridiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ridete"
        },
        {
          "person": "Loro (هم)",
          "form": "Ridano"
        }
      ]
    }
  },
  {
    "it": "Dormire",
    "ar": "ينام",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Dormo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Dormi"
      },
      {
        "person": "Lui (هو)",
        "form": "Dorme"
      },
      {
        "person": "Lei (هي)",
        "form": "Dorme"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Dormiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Dormite"
      },
      {
        "person": "Loro (هم)",
        "form": "Dormono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho dormito"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai dormito"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha dormito"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha dormito"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo dormito"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete dormito"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno dormito"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Dormivo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Dormivi"
        },
        {
          "person": "Lui (هو)",
          "form": "Dormiva"
        },
        {
          "person": "Lei (هي)",
          "form": "Dormiva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Dormivamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dormivate"
        },
        {
          "person": "Loro (هم)",
          "form": "Dormivano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Dormi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Dorma"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Dormiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dormite"
        },
        {
          "person": "Loro (هم)",
          "form": "Dormano"
        }
      ]
    }
  },
  {
    "it": "Sognare",
    "ar": "يحلم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Sogno"
      },
      {
        "person": "Tu (أنت)",
        "form": "Sogni"
      },
      {
        "person": "Lui (هو)",
        "form": "Sogna"
      },
      {
        "person": "Lei (هي)",
        "form": "Sogna"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Sogniamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Sognate"
      },
      {
        "person": "Loro (هم)",
        "form": "Sognano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho sognato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai sognato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha sognato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha sognato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo sognato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete sognato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno sognato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sognavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sognavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Sognava"
        },
        {
          "person": "Lei (هي)",
          "form": "Sognava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Sognavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sognavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Sognavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sogna"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Sogni"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Sogniamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sognate"
        },
        {
          "person": "Loro (هم)",
          "form": "Sognino"
        }
      ]
    }
  },
  {
    "it": "Sperare",
    "ar": "يتمنى / يأمل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Spero"
      },
      {
        "person": "Tu (أنت)",
        "form": "Speri"
      },
      {
        "person": "Lui (هو)",
        "form": "Spera"
      },
      {
        "person": "Lei (هي)",
        "form": "Spera"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Speriamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Sperate"
      },
      {
        "person": "Loro (هم)",
        "form": "Sperano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho sperato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai sperato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha sperato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha sperato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo sperato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete sperato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno sperato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Speravo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Speravi"
        },
        {
          "person": "Lui (هو)",
          "form": "Sperava"
        },
        {
          "person": "Lei (هي)",
          "form": "Sperava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Speravamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Speravate"
        },
        {
          "person": "Loro (هم)",
          "form": "Speravano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Spera"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Speri"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Speriamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sperate"
        },
        {
          "person": "Loro (هم)",
          "form": "Sperino"
        }
      ]
    }
  },
  {
    "it": "Spiegare",
    "ar": "يشرح",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Spiego"
      },
      {
        "person": "Tu (أنت)",
        "form": "Spieghi"
      },
      {
        "person": "Lui (هو)",
        "form": "Spiega"
      },
      {
        "person": "Lei (هي)",
        "form": "Spiega"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Spieghiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Spiegate"
      },
      {
        "person": "Loro (هم)",
        "form": "Spiegano"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho spiegato"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai spiegato"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha spiegato"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha spiegato"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo spiegato"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete spiegato"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno spiegato"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Spiegavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Spiegavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Spiegava"
        },
        {
          "person": "Lei (هي)",
          "form": "Spiegava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Spiegavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Spiegavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Spiegavano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Spiega"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Spieghi"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Spieghiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Spiegate"
        },
        {
          "person": "Loro (هم)",
          "form": "Spieghino"
        }
      ]
    }
  },
  {
    "it": "Stare",
    "ar": "يقعد / يكون بحال معينة",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Sto"
      },
      {
        "person": "Tu (أنت)",
        "form": "Stai"
      },
      {
        "person": "Lui (هو)",
        "form": "Sta"
      },
      {
        "person": "Lei (هي)",
        "form": "Sta"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Stiamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "State"
      },
      {
        "person": "Loro (هم)",
        "form": "Stanno"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono stato/a"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei stato/a"
        },
        {
          "person": "Lui (هو)",
          "form": "È stato"
        },
        {
          "person": "Lei (هي)",
          "form": "È stata"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Siamo stati/e"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete stati/e"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono stati/e"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Stavo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Stavi"
        },
        {
          "person": "Lui (هو)",
          "form": "Stava"
        },
        {
          "person": "Lei (هي)",
          "form": "Stava"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Stavamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Stavate"
        },
        {
          "person": "Loro (هم)",
          "form": "Stavano"
        }
      ]
    },
    "imperativo": {
      "note": "صيغة الأمر مع Tu شاذة: Sta' (أو Stai)",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sta'"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Stia"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Stiamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "State"
        },
        {
          "person": "Loro (هم)",
          "form": "Stiano"
        }
      ]
    }
  },
  {
    "it": "Bere",
    "ar": "يشرب",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Bevo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Bevi"
      },
      {
        "person": "Lui (هو)",
        "form": "Beve"
      },
      {
        "person": "Lei (هي)",
        "form": "Beve"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Beviamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Bevete"
      },
      {
        "person": "Loro (هم)",
        "form": "Bevono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho bevuto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai bevuto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha bevuto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha bevuto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo bevuto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete bevuto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno bevuto"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Bevevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Bevevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Beveva"
        },
        {
          "person": "Lei (هي)",
          "form": "Beveva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Bevevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bevevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Bevevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Bevi"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Beva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Beviamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bevete"
        },
        {
          "person": "Loro (هم)",
          "form": "Bevano"
        }
      ]
    }
  },
  {
    "it": "Porre",
    "ar": "يضع / يطرح",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Pongo"
      },
      {
        "person": "Tu (أنت)",
        "form": "Poni"
      },
      {
        "person": "Lui (هو)",
        "form": "Pone"
      },
      {
        "person": "Lei (هي)",
        "form": "Pone"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Poniamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Ponete"
      },
      {
        "person": "Loro (هم)",
        "form": "Pongono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho posto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai posto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha posto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha posto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo posto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete posto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno posto"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ponevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ponevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Poneva"
        },
        {
          "person": "Lei (هي)",
          "form": "Poneva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Ponevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ponevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Ponevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Poni"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Ponga"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Poniamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ponete"
        },
        {
          "person": "Loro (هم)",
          "form": "Pongano"
        }
      ]
    }
  },
  {
    "it": "Tradurre",
    "ar": "يترجم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Traduco"
      },
      {
        "person": "Tu (أنت)",
        "form": "Traduci"
      },
      {
        "person": "Lui (هو)",
        "form": "Traduce"
      },
      {
        "person": "Lei (هي)",
        "form": "Traduce"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Traduciamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Traducete"
      },
      {
        "person": "Loro (هم)",
        "form": "Traducono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho tradotto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai tradotto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha tradotto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha tradotto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo tradotto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete tradotto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno tradotto"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Traducevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Traducevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Traduceva"
        },
        {
          "person": "Lei (هي)",
          "form": "Traduceva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Traducevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Traducevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Traducevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Traduci"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Traduca"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Traduciamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Traducete"
        },
        {
          "person": "Loro (هم)",
          "form": "Traducano"
        }
      ]
    }
  },
  {
    "it": "Produrre",
    "ar": "ينتج",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Produco"
      },
      {
        "person": "Tu (أنت)",
        "form": "Produci"
      },
      {
        "person": "Lui (هو)",
        "form": "Produce"
      },
      {
        "person": "Lei (هي)",
        "form": "Produce"
      },
      {
        "person": "Noi (إحنا)",
        "form": "Produciamo"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Producete"
      },
      {
        "person": "Loro (هم)",
        "form": "Producono"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho prodotto"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai prodotto"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha prodotto"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha prodotto"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Abbiamo prodotto"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete prodotto"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno prodotto"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Producevo"
        },
        {
          "person": "Tu (أنت)",
          "form": "Producevi"
        },
        {
          "person": "Lui (هو)",
          "form": "Produceva"
        },
        {
          "person": "Lei (هي)",
          "form": "Produceva"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Producevamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Producevate"
        },
        {
          "person": "Loro (هم)",
          "form": "Producevano"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Produci"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Produca"
        },
        {
          "person": "Noi (إحنا)",
          "form": "Produciamo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Producete"
        },
        {
          "person": "Loro (هم)",
          "form": "Producano"
        }
      ]
    }
  }
];
