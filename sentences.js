// ===== Parla! — محتوى اللغة =====
// WORDS: بنك مفردات وضع النطق
// LESSON_SENTENCES: بنك جمل الدرس الإنفينيتي

const WORDS = [
  {it:"cane",     ar:"كلب",                ipa:"/ˈkaː.ne/",      pron:"كا-نيه",       cat:"حيوانات",    ex:"Il cane è felice."},
  {it:"gatto",    ar:"قط",                 ipa:"/ˈɡat.to/",      pron:"جاتّو",         cat:"حيوانات",    ex:"Il gatto dorme sempre."},
  {it:"casa",     ar:"بيت",                ipa:"/ˈkaː.za/",      pron:"كا-زا",         cat:"أماكن",      ex:"La mia casa è grande."},
  {it:"acqua",    ar:"ماء",                ipa:"/ˈak.kwa/",      pron:"أكـ-كوا",       cat:"طعام وشراب", ex:"Voglio dell'acqua."},
  {it:"pane",     ar:"خبز",                ipa:"/ˈpaː.ne/",      pron:"با-نيه",        cat:"طعام وشراب", ex:"Il pane è fresco."},
  {it:"libro",    ar:"كتاب",               ipa:"/ˈliː.bro/",     pron:"لي-برو",        cat:"أشياء",      ex:"Leggo un libro ogni giorno."},
  {it:"porta",    ar:"باب",                ipa:"/ˈpɔr.ta/",      pron:"بور-تا",        cat:"أشياء",      ex:"La porta è aperta."},
  {it:"sole",     ar:"شمس",                ipa:"/ˈsoː.le/",      pron:"سو-ليه",        cat:"طبيعة",      ex:"Il sole splende forte."},
  {it:"luna",     ar:"قمر",                ipa:"/ˈluː.na/",      pron:"لو-نا",         cat:"طبيعة",      ex:"Stasera c'è la luna piena."},
  {it:"amico",    ar:"صديق",               ipa:"/aˈmiː.ko/",     pron:"أ-مي-كو",       cat:"ناس",        ex:"Il mio amico si chiama Marco."},
  {it:"mangiare", ar:"يأكل",               ipa:"/manˈdʒaː.re/",  pron:"مان-جا-ريه",    cat:"أفعال",      ex:"Voglio mangiare qualcosa."},
  {it:"dormire",  ar:"ينام",               ipa:"/dorˈmiː.re/",   pron:"دور-مي-ريه",    cat:"أفعال",      ex:"Devo dormire presto."},
  {it:"parlare",  ar:"يتكلم",              ipa:"/parˈlaː.re/",   pron:"بار-لا-ريه",    cat:"أفعال",      ex:"Parlo italiano ogni giorno."},
  {it:"bello",    ar:"جميل",               ipa:"/ˈbɛl.lo/",      pron:"بيلّو",          cat:"صفات",       ex:"Che bello! Mi piace molto."},
  {it:"grande",   ar:"كبير",               ipa:"/ˈɡran.de/",     pron:"جران-ديه",      cat:"صفات",       ex:"Roma è una città grande."},
  {it:"buono",    ar:"كويس / طيب",         ipa:"/ˈbwɔː.no/",     pron:"بووو-نو",       cat:"صفات",       ex:"Questo caffè è molto buono."},
  {it:"grazie",   ar:"شكراً",              ipa:"/ˈɡrat.tsje/",   pron:"جراتـ-سييه",    cat:"تعبيرات",    ex:"Grazie mille per tutto!"},
  {it:"prego",    ar:"عفواً",              ipa:"/ˈprɛː.ɡo/",     pron:"بريه-جو",       cat:"تعبيرات",    ex:"— Grazie! — Prego, figurati."},
  {it:"scusa",    ar:"آسف / معلش",         ipa:"/ˈskuː.za/",     pron:"سكو-زا",        cat:"تعبيرات",    ex:"Scusa, non ho capito."},
  {it:"ciao",     ar:"مرحبا / مع السلامة", ipa:"/tʃaʊ/",         pron:"تشاو",          cat:"تعبيرات",    ex:"Ciao! Come stai oggi?"},
  {it:"amore",    ar:"حب",                 ipa:"/aˈmoː.re/",     pron:"أ-مو-ريه",      cat:"مشاعر",      ex:"L'amore è la cosa più bella."},
  {it:"strada",   ar:"شارع",               ipa:"/ˈstraː.da/",    pron:"سترا-دا",       cat:"أماكن",      ex:"Attraverso la strada piano."},
  {it:"treno",    ar:"قطار",               ipa:"/ˈtrɛː.no/",     pron:"تريه-نو",       cat:"مواصلات",    ex:"Il treno parte tra cinque minuti."},
  {it:"macchina", ar:"سيارة",              ipa:"/ˈmak.ki.na/",   pron:"ماكـ-كي-نا",    cat:"مواصلات",    ex:"Ho una macchina rossa."},
  {it:"tempo",    ar:"وقت / طقس",          ipa:"/ˈtɛm.po/",      pron:"تيم-بو",        cat:"عام",        ex:"Che tempo fa oggi?"},
  {it:"caffè",    ar:"قهوة",               ipa:"/kafˈfɛ/",       pron:"كافـ-فيه",      cat:"طعام وشراب", ex:"Prendo un caffè, per favore."},
  {it:"pizza",    ar:"بيتزا",              ipa:"/ˈpit.tsa/",     pron:"بيتـ-تسا",      cat:"طعام وشراب", ex:"La pizza napoletana è la migliore."},
  {it:"città",    ar:"مدينة",              ipa:"/tʃitˈta/",      pron:"تشيتـ-تا",      cat:"أماكن",      ex:"Questa città è bellissima."},
  {it:"musica",   ar:"موسيقى",             ipa:"/ˈmuː.zi.ka/",   pron:"مو-زي-كا",      cat:"فن",         ex:"Ascolto la musica ogni sera."},
  {it:"lavoro",   ar:"شغل / عمل",          ipa:"/laˈvoː.ro/",    pron:"لا-فو-رو",      cat:"عام",        ex:"Vado al lavoro in bicicletta."},
];

// ===== INFINITE LESSON BANK =====
const LESSON_SENTENCES = [

// ══════════════ الأفعال (Andare-Avere-Essere-Fare-Capire-Funzionare) ══════════════

{it:"Ieri sono andato in centro a piedi, perché la mia macchina non funzionava bene", ar:"امبارح رحت وسط البلد مشي، لأن عربيتي مكانتش شغالة كويس.", en:"Yesterday I went downtown on foot because my car wasn't working well.", pronoun:"Io (أنا)",
 words:[
  {it:"Ieri",ar:"امبارح",note:null},
  {it:"sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"andato",ar:"رحت",note:"Andare، Passato Prossimo مع Io (فعل شاذ)"},
  {it:"in",ar:"في",note:null},
  {it:"centro",ar:"وسط البلد",note:null},
  {it:"a",ar:"على",note:"جزء من تعبير ثابت a piedi"},
  {it:"piedi",ar:"الأقدام",note:"a piedi = مشياً على الأقدام"},
  {it:"perché",ar:"لأن",note:null},
  {it:"la mia",ar:"بتاعتي",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — صفة ملكية مؤنث مفرد"},
  {it:"macchina",ar:"العربية",note:null},
  {it:"non",ar:"مش",note:null},
  {it:"funzionava",ar:"كانت شغالة",note:"Funzionare، Imperfetto (فعل منتظم)"},
  {it:"bene",ar:"كويس",note:null}
 ], conj:{verb:"Andare",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Sono andato/a"},{person:"Tu (أنت)",form:"Sei andato/a"},
  {person:"Lui (هو)",form:"È andato"},{person:"Lei (هي)",form:"È andata"},
  {person:"Noi (احنا)",form:"Siamo andati/e"},{person:"Voi (انتم)",form:"Siete andati/e"},
  {person:"Loro (هم)",form:"Sono andati/e"}]}},

{it:"Quando eri piccolo, andavi a scuola con tuo fratello ogni mattina", ar:"لما كنت صغير، كنت بتروح المدرسة مع أخوك كل صبح.", en:"When you were little, you used to go to school with your brother every morning.", pronoun:"Tu (أنت)",
 words:[
  {it:"Quando",ar:"لما",note:"أداة استفهام/ربط زمنية"},
  {it:"eri",ar:"كنت",note:"Essere، Imperfetto مع Tu (فعل شاذ)"},
  {it:"piccolo",ar:"صغير",note:null},
  {it:"andavi",ar:"كنت بتروح",note:"Andare، Imperfetto مع Tu"},
  {it:"a",ar:"لـ",note:null},
  {it:"scuola",ar:"المدرسة",note:null},
  {it:"con",ar:"مع",note:null},
  {it:"tuo",ar:"أخوك",note:"صفة ملكية، بدون أداة تعريف مع فرد عائلة مفرد"},
  {it:"fratello",ar:"أخ",note:null},
  {it:"ogni",ar:"كل",note:null},
  {it:"mattina",ar:"صبح",note:null}
 ], conj:{verb:"Andare",tense:"Imperfetto",regular:false,rows:[
  {person:"Io (أنا)",form:"Andavo"},{person:"Tu (أنت)",form:"Andavi"},
  {person:"Lui (هو)",form:"Andava"},{person:"Lei (هي)",form:"Andava"},
  {person:"Noi (احنا)",form:"Andavamo"},{person:"Voi (انتم)",form:"Andavate"},
  {person:"Loro (هم)",form:"Andavano"}]}},

{it:"Marco ha avuto molta pazienza con i suoi studenti durante la lezione", ar:"ماركو كان عنده صبر كتير مع طلابه أثناء الحصة.", en:"Marco had a lot of patience with his students during the lesson.", pronoun:"Lui (هو)",
 words:[
  {it:"Marco",ar:"ماركو",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"avuto",ar:"كان عنده",note:"Avere، Passato Prossimo مع Lui (فعل شاذ)"},
  {it:"molta",ar:"كتير",note:"صفة كمية مؤنث مفرد"},
  {it:"pazienza",ar:"صبر",note:null},
  {it:"con",ar:"مع",note:null},
  {it:"i suoi",ar:"بتوعه",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — صفة ملكية جمع مذكر"},
  {it:"studenti",ar:"طلاب",note:null},
  {it:"durante",ar:"أثناء",note:"حرف جر غير أصلي (زمن)"},
  {it:"la lezione",ar:"الحصة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Avere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho avuto"},{person:"Tu (أنت)",form:"Hai avuto"},
  {person:"Lui (هو)",form:"Ha avuto"},{person:"Lei (هي)",form:"Ha avuto"},
  {person:"Noi (احنا)",form:"Abbiamo avuto"},{person:"Voi (انتم)",form:"Avete avuto"},
  {person:"Loro (هم)",form:"Hanno avuto"}]}},

{it:"Lei aveva sempre fame dopo la palestra, quindi mangiava qualcosa di dolce", ar:"هي كانت دايماً جعانة بعد الجيم، فعشان كده كانت بتاكل حاجة حلوة.", en:"She was always hungry after the gym, so she used to eat something sweet.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"aveva",ar:"كانت عندها",note:"Avere، Imperfetto مع Lei (فعل شاذ)"},
  {it:"sempre",ar:"دايماً",note:null},
  {it:"fame",ar:"جوع",note:null},
  {it:"dopo",ar:"بعد",note:"حرف جر غير أصلي (زمن)"},
  {it:"la palestra",ar:"الجيم",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quindi",ar:"فعشان كده",note:null},
  {it:"mangiava",ar:"كانت بتاكل",note:"Mangiare، Imperfetto مع Lei"},
  {it:"qualcosa",ar:"حاجة ما",note:"ضمير غير محدد ثابت"},
  {it:"di",ar:"",note:"جزء من qualcosa di + صفة"},
  {it:"dolce",ar:"حلوة",note:null}
 ], conj:{verb:"Avere",tense:"Imperfetto",regular:false,rows:[
  {person:"Io (أنا)",form:"Avevo"},{person:"Tu (أنت)",form:"Avevi"},
  {person:"Lui (هو)",form:"Aveva"},{person:"Lei (هي)",form:"Aveva"},
  {person:"Noi (احنا)",form:"Avevamo"},{person:"Voi (انتم)",form:"Avevate"},
  {person:"Loro (هم)",form:"Avevano"}]}},

{it:"Siamo stati a Roma per due giorni, e la città era bellissima di notte", ar:"احنا كنا في روما ليومين، والمدينة كانت جميلة جداً بالليل.", en:"We were in Rome for two days, and the city was beautiful at night.", pronoun:"Noi (احنا)",
 words:[
  {it:"Siamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"stati",ar:"كنا",note:"Essere، Passato Prossimo مع Noi (فعل شاذ)"},
  {it:"a",ar:"في",note:null},
  {it:"Roma",ar:"روما",note:null},
  {it:"per",ar:"لمدة",note:null},
  {it:"due",ar:"يومين",note:null},
  {it:"giorni",ar:"أيام",note:null},
  {it:"e",ar:"و",note:null},
  {it:"la città",ar:"المدينة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"era",ar:"كانت",note:"Essere، Imperfetto"},
  {it:"bellissima",ar:"جميلة جداً",note:null},
  {it:"di",ar:"بـ",note:"جزء من di notte"},
  {it:"notte",ar:"الليل",note:null}
 ], conj:{verb:"Essere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Sono stato/a"},{person:"Tu (أنت)",form:"Sei stato/a"},
  {person:"Lui (هو)",form:"È stato"},{person:"Lei (هي)",form:"È stata"},
  {person:"Noi (احنا)",form:"Siamo stati/e"},{person:"Voi (انتم)",form:"Siete stati/e"},
  {person:"Loro (هم)",form:"Sono stati/e"}]}},

{it:"Voi eravate stanchi ogni sera, perché lavoravate troppo in ufficio", ar:"انتوا كنتوا تعبانين كل مساء، لأنكوا كنتوا بتشتغلوا أكتر من اللازم في المكتب.", en:"You (pl.) were tired every evening because you worked too much in the office.", pronoun:"Voi (انتم)",
 words:[
  {it:"Voi",ar:"انتوا",note:null},
  {it:"eravate",ar:"كنتوا",note:"Essere، Imperfetto مع Voi (فعل شاذ)"},
  {it:"stanchi",ar:"تعبانين",note:null},
  {it:"ogni",ar:"كل",note:null},
  {it:"sera",ar:"مساء",note:null},
  {it:"perché",ar:"لأن",note:null},
  {it:"lavoravate",ar:"كنتوا بتشتغلوا",note:"Lavorare، Imperfetto مع Voi"},
  {it:"troppo",ar:"أكتر من اللازم",note:"ضمير كمية مبهمة"},
  {it:"in",ar:"في",note:null},
  {it:"ufficio",ar:"المكتب",note:null}
 ], conj:{verb:"Essere",tense:"Imperfetto",regular:false,rows:[
  {person:"Io (أنا)",form:"Ero"},{person:"Tu (أنت)",form:"Eri"},
  {person:"Lui (هو)",form:"Era"},{person:"Lei (هي)",form:"Era"},
  {person:"Noi (احنا)",form:"Eravamo"},{person:"Voi (انتم)",form:"Eravate"},
  {person:"Loro (هم)",form:"Erano"}]}},

{it:"Loro hanno fatto colazione insieme prima di andare al lavoro", ar:"هم فطروا مع بعض قبل ما يروحوا الشغل.", en:"They had breakfast together before going to work.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"fatto",ar:"عملوا",note:"Fare، Passato Prossimo مع Loro (فعل شاذ جداً)"},
  {it:"colazione",ar:"فطار",note:null},
  {it:"insieme",ar:"مع بعض",note:null},
  {it:"prima",ar:"قبل",note:"جزء من prima di"},
  {it:"di",ar:"",note:"جزء من prima di (حرف جر غير أصلي زمني)"},
  {it:"andare",ar:"يروحوا",note:null},
  {it:"al",ar:"للـ",note:"حرف جر مدمج = a + il"},
  {it:"lavoro",ar:"الشغل",note:null}
 ], conj:{verb:"Fare",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho fatto"},{person:"Tu (أنت)",form:"Hai fatto"},
  {person:"Lui (هو)",form:"Ha fatto"},{person:"Lei (هي)",form:"Ha fatto"},
  {person:"Noi (احنا)",form:"Abbiamo fatto"},{person:"Voi (انتم)",form:"Avete fatto"},
  {person:"Loro (هم)",form:"Hanno fatto"}]}},

{it:"Da bambino, facevo sempre i compiti prima di cena, senza lamentarmi", ar:"من وأنا صغير، كنت بعمل الواجب دايماً قبل العشا، من غير ما اتشكى.", en:"As a child, I always used to do my homework before dinner, without complaining.", pronoun:"Io (أنا)",
 words:[
  {it:"Da",ar:"من",note:"حرف جر (بمعنى: منذ/في فترة)"},
  {it:"bambino",ar:"الطفولة",note:null},
  {it:"facevo",ar:"كنت بعمل",note:"Fare، Imperfetto مع Io"},
  {it:"sempre",ar:"دايماً",note:null},
  {it:"i compiti",ar:"الواجبات",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"prima",ar:"قبل",note:null},
  {it:"di",ar:"",note:"جزء من prima di"},
  {it:"cena",ar:"العشا",note:null},
  {it:"senza",ar:"من غير",note:"حرف جر غير أصلي"},
  {it:"lamentarmi",ar:"اشكي نفسي",note:null}
 ], conj:{verb:"Fare",tense:"Imperfetto",regular:false,rows:[
  {person:"Io (أنا)",form:"Facevo"},{person:"Tu (أنت)",form:"Facevi"},
  {person:"Lui (هو)",form:"Faceva"},{person:"Lei (هي)",form:"Faceva"},
  {person:"Noi (احنا)",form:"Facevamo"},{person:"Voi (انتم)",form:"Facevate"},
  {person:"Loro (هم)",form:"Facevano"}]}},

{it:"Finalmente hai capito la regola dopo tanti esempi", ar:"أخيراً فهمت القاعدة بعد أمثلة كتير.", en:"You finally understood the rule after many examples.", pronoun:"Tu (أنت)",
 words:[
  {it:"Finalmente",ar:"أخيراً",note:null},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"capito",ar:"فهمت",note:"Capire، Passato Prossimo مع Tu (فعل منتظم -isc)"},
  {it:"la regola",ar:"القاعدة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"dopo",ar:"بعد",note:"حرف جر غير أصلي"},
  {it:"tanti",ar:"كتير جداً",note:"ضمير كمية جمع"},
  {it:"esempi",ar:"أمثلة",note:null}
 ], conj:{verb:"Capire",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho capito"},{person:"Tu (أنت)",form:"Hai capito"},
  {person:"Lui (هو)",form:"Ha capito"},{person:"Lei (هي)",form:"Ha capito"},
  {person:"Noi (احنا)",form:"Abbiamo capito"},{person:"Voi (انتم)",form:"Avete capito"},
  {person:"Loro (هم)",form:"Hanno capito"}]}},

{it:"Lui non capiva mai le battute in italiano, anche se studiava ogni giorno", ar:"هو مكانش يفهم أبداً النكت بالإيطالي، حتى لو كان بيذاكر كل يوم.", en:"He never used to understand jokes in Italian, even though he studied every day.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"non",ar:"مش",note:null},
  {it:"capiva",ar:"كان بيفهم",note:"Capire، Imperfetto مع Lui"},
  {it:"mai",ar:"أبداً",note:"ظرف زمن، بييجي مع النفي"},
  {it:"le battute",ar:"النكت",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"in",ar:"بالـ",note:null},
  {it:"italiano",ar:"الإيطالي",note:null},
  {it:"anche",ar:"حتى",note:"جزء من anche se"},
  {it:"se",ar:"لو",note:"جزء من anche se"},
  {it:"studiava",ar:"كان بيذاكر",note:"Studiare، Imperfetto مع Lui"},
  {it:"ogni",ar:"كل",note:null},
  {it:"giorno",ar:"يوم",note:null}
 ], conj:{verb:"Capire",tense:"Imperfetto",regular:true,rows:[
  {person:"Io (أنا)",form:"Capivo"},{person:"Tu (أنت)",form:"Capivi"},
  {person:"Lui (هو)",form:"Capiva"},{person:"Lei (هي)",form:"Capiva"},
  {person:"Noi (احنا)",form:"Capivamo"},{person:"Voi (انتم)",form:"Capivate"},
  {person:"Loro (هم)",form:"Capivano"}]}},

{it:"Il telefono non ha funzionato per due ore, e lei era molto nervosa", ar:"التليفون ماكانش شغال لمدة ساعتين، وهي كانت متعصبة جداً.", en:"The phone didn't work for two hours, and she was very nervous.", pronoun:"Lei (هي)",
 words:[
  {it:"Il telefono",ar:"التليفون",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"non",ar:"مش",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"funzionato",ar:"شغل",note:"Funzionare، Passato Prossimo (فعل منتظم)"},
  {it:"per",ar:"لمدة",note:null},
  {it:"due",ar:"ساعتين",note:null},
  {it:"ore",ar:"ساعات",note:null},
  {it:"e",ar:"و",note:null},
  {it:"lei",ar:"هي",note:null},
  {it:"era",ar:"كانت",note:"Essere، Imperfetto"},
  {it:"molto",ar:"جداً",note:null},
  {it:"nervosa",ar:"متعصبة",note:null}
 ], conj:{verb:"Funzionare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho funzionato"},{person:"Tu (أنت)",form:"Hai funzionato"},
  {person:"Lui (هو)",form:"Ha funzionato"},{person:"Lei (هي)",form:"Ha funzionato"},
  {person:"Noi (احنا)",form:"Abbiamo funzionato"},{person:"Voi (انتم)",form:"Avete funzionato"},
  {person:"Loro (هم)",form:"Hanno funzionato"}]}},

{it:"Il computer non funzionava mai bene di mattina, quindi aspettavamo un'ora", ar:"الكمبيوتر مكانش بيشتغل كويس أبداً الصبح، فعشان كده كنا بننتظر ساعة.", en:"The computer never used to work well in the morning, so we would wait an hour.", pronoun:"Noi (احنا)",
 words:[
  {it:"Il computer",ar:"الكمبيوتر",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"non",ar:"مش",note:null},
  {it:"funzionava",ar:"كان شغال",note:"Funzionare، Imperfetto"},
  {it:"mai",ar:"أبداً",note:null},
  {it:"bene",ar:"كويس",note:null},
  {it:"di",ar:"في",note:"جزء من di mattina"},
  {it:"mattina",ar:"الصبح",note:null},
  {it:"quindi",ar:"فعشان كده",note:null},
  {it:"aspettavamo",ar:"كنا بننتظر",note:"Aspettare، Imperfetto مع Noi"},
  {it:"un'ora",ar:"ساعة",note:null}
 ], conj:{verb:"Funzionare",tense:"Imperfetto",regular:true,rows:[
  {person:"Io (أنا)",form:"Funzionavo"},{person:"Tu (أنت)",form:"Funzionavi"},
  {person:"Lui (هو)",form:"Funzionava"},{person:"Lei (هي)",form:"Funzionava"},
  {person:"Noi (احنا)",form:"Funzionavamo"},{person:"Voi (انتم)",form:"Funzionavate"},
  {person:"Loro (هم)",form:"Funzionavano"}]}},

// ══════════════ حروف الجر البسيطة (Da-Di-A-Con) ══════════════

{it:"Vivo in questa città da tre anni, da quando sono venuto dall'Egitto", ar:"عايش في المدينة دي من تلات سنين، من لما جيت من مصر.", en:"I've lived in this city for three years, since I came from Egypt.", pronoun:"Io (أنا)",
 words:[
  {it:"Vivo",ar:"عايش",note:null},
  {it:"in",ar:"في",note:null},
  {it:"questa",ar:"دي",note:"صفة اشارة مؤنث مفرد"},
  {it:"città",ar:"المدينة",note:null},
  {it:"da",ar:"من",note:"حرف جر Da — مدة زمنية مستمرة"},
  {it:"tre",ar:"تلات",note:null},
  {it:"anni",ar:"سنين",note:null},
  {it:"da",ar:"من",note:"جزء من da quando"},
  {it:"quando",ar:"لما",note:null},
  {it:"sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"venuto",ar:"جيت",note:"Venire، Passato Prossimo"},
  {it:"dall'",ar:"من الـ",note:"حرف جر مدمج = da + l' (قبل حرف متحرك)"},
  {it:"Egitto",ar:"مصر",note:null}
 ], conj:null},

{it:"Hai comprato quegli occhiali da sole scritti da un designer famoso", ar:"شريت النظارة الشمس دي المصممة من مصمم مشهور؟", en:"Did you buy those sunglasses designed by a famous designer?", pronoun:"Tu (أنت)",
 words:[
  {it:"Hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"comprato",ar:"شريت",note:"Comprare، Passato Prossimo"},
  {it:"quegli",ar:"دول",note:"صفة اشارة مذكر جمع قبل حرف متحرك"},
  {it:"occhiali",ar:"نظارة",note:null},
  {it:"da",ar:"للـ",note:"حرف جر Da — الغرض/الاستخدام"},
  {it:"sole",ar:"الشمس",note:null},
  {it:"scritti",ar:"مصممة/مكتوبة",note:"اسم مفعول جمع مذكر"},
  {it:"da",ar:"من",note:"حرف جر Da — المبني للمجهول (الفاعل الحقيقي)"},
  {it:"un designer",ar:"مصمم",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"famoso",ar:"مشهور",note:null}
 ], conj:null},

{it:"Il tavolo di legno di suo nonno è più vecchio della casa", ar:"طرابيزة جده الخشبية أقدم من البيت.", en:"His grandfather's wooden table is older than the house.", pronoun:"Lui (هو)",
 words:[
  {it:"Il tavolo",ar:"الطرابيزة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"di",ar:"من",note:"حرف جر Di — الخامة"},
  {it:"legno",ar:"الخشب",note:null},
  {it:"di",ar:"بتاع",note:"حرف جر Di — الملكية"},
  {it:"suo",ar:"بتاعه",note:"صفة ملكية"},
  {it:"nonno",ar:"الجد",note:null},
  {it:"è",ar:"هي",note:"Essere، Presente"},
  {it:"più",ar:"أكتر",note:null},
  {it:"vecchio",ar:"قديم",note:null},
  {it:"della",ar:"من الـ",note:"حرف جر مدمج = di + la"},
  {it:"casa",ar:"البيت",note:null}
 ], conj:null},

{it:"Di notte, lei parla sempre di calcio con i suoi amici", ar:"بالليل، هي دايماً بتتكلم عن كورة مع صحابها.", en:"At night, she always talks about football with her friends.", pronoun:"Lei (هي)",
 words:[
  {it:"Di",ar:"في",note:"جزء من di notte (التعبير الزمني)"},
  {it:"notte",ar:"الليل",note:null},
  {it:"lei",ar:"هي",note:null},
  {it:"parla",ar:"بتتكلم",note:"Parlare، Presente"},
  {it:"sempre",ar:"دايماً",note:null},
  {it:"di",ar:"عن",note:"حرف جر Di — الموضوع"},
  {it:"calcio",ar:"كورة",note:null},
  {it:"con",ar:"مع",note:null},
  {it:"i suoi",ar:"بتوعها",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"amici",ar:"صحاب",note:null}
 ], conj:null},

{it:"Siamo andati a Milano alle tre, e siamo arrivati a mezzanotte", ar:"رحنا ميلانو الساعة تلاتة، ووصلنا نص الليل.", en:"We went to Milan at three, and we arrived at midnight.", pronoun:"Noi (احنا)",
 words:[
  {it:"Siamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"andati",ar:"رحنا",note:"Andare، Passato Prossimo مع Noi"},
  {it:"a",ar:"لـ",note:"حرف جر A — الاتجاه لمدينة"},
  {it:"Milano",ar:"ميلانو",note:null},
  {it:"alle",ar:"في الساعة",note:"حرف جر مدمج = a + le"},
  {it:"tre",ar:"تلاتة",note:null},
  {it:"e",ar:"و",note:null},
  {it:"siamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"arrivati",ar:"وصلنا",note:"Arrivare، Passato Prossimo مع Noi"},
  {it:"a",ar:"في",note:"جزء من a mezzanotte"},
  {it:"mezzanotte",ar:"نص الليل",note:null}
 ], conj:null},

{it:"Avete telefonato a vostro padre, o siete andati a piedi da lui", ar:"اتصلتوا بأبوكوا، ولا رحتوا عنده مشي؟", en:"Did you call your father, or did you walk to his place?", pronoun:"Voi (انتم)",
 words:[
  {it:"Avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"telefonato",ar:"اتصلتوا",note:"Telefonare، Passato Prossimo"},
  {it:"a",ar:"بـ",note:"حرف جر A — المفعول غير المباشر"},
  {it:"vostro",ar:"أبوكوا",note:"صفة ملكية"},
  {it:"padre",ar:"أب",note:null},
  {it:"o",ar:"ولا",note:null},
  {it:"siete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"andati",ar:"رحتوا",note:"Andare، Passato Prossimo مع Voi"},
  {it:"a",ar:"على",note:"جزء من a piedi"},
  {it:"piedi",ar:"الأقدام",note:null},
  {it:"da",ar:"عند",note:"حرف جر Da — الذهاب لشخص"},
  {it:"lui",ar:"هو",note:null}
 ], conj:null},

{it:"Loro hanno viaggiato con il treno e hanno parlato con gentilezza con tutti", ar:"هم سافروا بالقطر وكانوا يتكلموا بلطف مع الكل.", en:"They traveled by train and spoke kindly with everyone.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"viaggiato",ar:"سافروا",note:"Viaggiare، Passato Prossimo"},
  {it:"con",ar:"بـ",note:"حرف جر Con — الوسيلة"},
  {it:"il treno",ar:"القطر",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"e",ar:"و",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"parlato",ar:"اتكلموا",note:"Parlare، Passato Prossimo"},
  {it:"con",ar:"بـ",note:"حرف جر Con — الكيفية"},
  {it:"gentilezza",ar:"لطف",note:null},
  {it:"con",ar:"مع",note:"حرف جر Con — المصاحبة"},
  {it:"tutti",ar:"الكل",note:null}
 ], conj:null},

{it:"Ho incontrato una ragazza con i capelli neri, e abbiamo camminato lungo il fiume", ar:"قابلت بنت شعرها اسود، ومشينا على طول النهر.", en:"I met a girl with black hair, and we walked along the river.", pronoun:"Io (أنا)",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"incontrato",ar:"قابلت",note:"Incontrare، Passato Prossimo"},
  {it:"una ragazza",ar:"بنت",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"con",ar:"بـ",note:"حرف جر Con — الصفة/الميزة"},
  {it:"i capelli",ar:"الشعر",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"neri",ar:"اسود",note:null},
  {it:"e",ar:"و",note:null},
  {it:"abbiamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"camminato",ar:"مشينا",note:"Camminare، Passato Prossimo"},
  {it:"lungo",ar:"على طول",note:"حرف جر غير أصلي"},
  {it:"il fiume",ar:"النهر",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:null},

// ══════════════ حروف الجر غير الأصلية (Preposizioni improprie) ══════════════

{it:"Hai girato a destra, poi a sinistra, e la farmacia era proprio dietro l'angolo", ar:"لفيت يمين، بعدين شمال، والصيدلية كانت ورا الناصية بالظبط.", en:"You turned right, then left, and the pharmacy was right behind the corner.", pronoun:"Tu (أنت)",
 words:[
  {it:"Hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"girato",ar:"لفيت",note:"Girare، Passato Prossimo"},
  {it:"a",ar:"لـ",note:null},
  {it:"destra",ar:"يمين",note:"حرف جر غير أصلي (مكان)"},
  {it:"poi",ar:"بعدين",note:null},
  {it:"a",ar:"لـ",note:null},
  {it:"sinistra",ar:"شمال",note:"حرف جر غير أصلي (مكان)"},
  {it:"e",ar:"و",note:null},
  {it:"la farmacia",ar:"الصيدلية",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"era",ar:"كانت",note:"Essere، Imperfetto"},
  {it:"proprio",ar:"بالظبط",note:null},
  {it:"dietro",ar:"ورا",note:"حرف جر غير أصلي (مكان)"},
  {it:"l'angolo",ar:"الناصية",note:null}
 ], conj:null},

{it:"Il gatto era sopra il letto, mentre il cane dormiva sotto il tavolo dentro casa, non fuori", ar:"القطة كانت فوق السرير، بينما الكلب كان نايم تحت الطرابيزة جوه البيت، مش برا.", en:"The cat was on the bed, while the dog was sleeping under the table inside the house, not outside.", pronoun:"Lui (هو)",
 words:[
  {it:"Il gatto",ar:"القطة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"era",ar:"كانت",note:"Essere، Imperfetto"},
  {it:"sopra",ar:"فوق",note:"حرف جر غير أصلي"},
  {it:"il letto",ar:"السرير",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"بينما",note:null},
  {it:"il cane",ar:"الكلب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"dormiva",ar:"كان نايم",note:"Dormire، Imperfetto"},
  {it:"sotto",ar:"تحت",note:"حرف جر غير أصلي"},
  {it:"il tavolo",ar:"الطرابيزة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"dentro",ar:"جوه",note:"حرف جر غير أصلي"},
  {it:"casa",ar:"البيت",note:null},
  {it:"non",ar:"مش",note:null},
  {it:"fuori",ar:"برا",note:"حرف جر غير أصلي"}
 ], conj:null},

{it:"Lei abitava davanti alla stazione, vicino al mercato, ma lontano dall'università", ar:"هي كانت ساكنة قدام المحطة، قريبة من السوق، بس بعيدة عن الجامعة.", en:"She used to live in front of the station, near the market, but far from the university.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"abitava",ar:"كانت ساكنة",note:"Abitare، Imperfetto"},
  {it:"davanti",ar:"قدام",note:"حرف جر غير أصلي"},
  {it:"alla",ar:"للـ",note:"حرف جر مدمج = a + la"},
  {it:"stazione",ar:"المحطة",note:null},
  {it:"vicino",ar:"قريب",note:"حرف جر غير أصلي"},
  {it:"al",ar:"من الـ",note:"حرف جر مدمج = a + il"},
  {it:"mercato",ar:"السوق",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"lontano",ar:"بعيد",note:"حرف جر غير أصلي"},
  {it:"dall'",ar:"من الـ",note:"حرف جر مدمج = da + l'"},
  {it:"università",ar:"الجامعة",note:null}
 ], conj:null},

{it:"Abbiamo studiato durante il weekend, prima di uscire, e dopo abbiamo riposato", ar:"ذاكرنا أثناء الويكند، قبل ما نخرج، وبعدين استرحنا.", en:"We studied during the weekend before going out, and afterwards we rested.", pronoun:"Noi (احنا)",
 words:[
  {it:"Abbiamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"studiato",ar:"ذاكرنا",note:"Studiare، Passato Prossimo"},
  {it:"durante",ar:"أثناء",note:"حرف جر غير أصلي"},
  {it:"il weekend",ar:"الويكند",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"prima",ar:"قبل",note:null},
  {it:"di",ar:"",note:"جزء من prima di"},
  {it:"uscire",ar:"نخرج",note:null},
  {it:"e",ar:"و",note:null},
  {it:"dopo",ar:"بعدين",note:"حرف جر غير أصلي"},
  {it:"abbiamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"riposato",ar:"استرحنا",note:"Riposare، Passato Prossimo"}
 ], conj:null},

{it:"Siete arrivati verso le otto, e avete lavorato fino a mezzanotte", ar:"وصلتوا حوالي الساعة تمانية، وشغلتوا لحد نص الليل.", en:"You arrived around eight, and you worked until midnight.", pronoun:"Voi (انتم)",
 words:[
  {it:"Siete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"arrivati",ar:"وصلتوا",note:"Arrivare، Passato Prossimo"},
  {it:"verso",ar:"حوالي",note:"حرف جر غير أصلي (زمن)"},
  {it:"le otto",ar:"تمانية",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"e",ar:"و",note:null},
  {it:"avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"lavorato",ar:"شغلتوا",note:"Lavorare، Passato Prossimo"},
  {it:"fino",ar:"لحد",note:"جزء من fino a"},
  {it:"a",ar:"",note:"جزء من fino a (حرف جر غير أصلي)"},
  {it:"mezzanotte",ar:"نص الليل",note:null}
 ], conj:null},

{it:"Loro sono usciti senza ombrello, anche se erano tutti contro questa idea", ar:"هم خرجوا من غير شمسية، حتى لو كانوا كلهم ضد الفكرة دي.", en:"They went out without an umbrella, even though they were all against this idea.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"usciti",ar:"خرجوا",note:"Uscire، Passato Prossimo"},
  {it:"senza",ar:"من غير",note:"حرف جر غير أصلي"},
  {it:"ombrello",ar:"شمسية",note:null},
  {it:"anche",ar:"حتى",note:"جزء من anche se"},
  {it:"se",ar:"لو",note:null},
  {it:"erano",ar:"كانوا",note:"Essere، Imperfetto"},
  {it:"tutti",ar:"كلهم",note:null},
  {it:"contro",ar:"ضد",note:"حرف جر غير أصلي"},
  {it:"questa",ar:"دي",note:null},
  {it:"idea",ar:"الفكرة",note:null}
 ], conj:null},

{it:"Secondo me, oltre il ponte c'è una scuola, e nonostante la pioggia siamo usciti", ar:"حسب رأيي، بعد الجسر في مدرسة، وعلى الرغم من المطر خرجنا.", en:"In my opinion, beyond the bridge there's a school, and despite the rain, we went out.", pronoun:"Io (أنا)",
 words:[
  {it:"Secondo",ar:"حسب",note:"حرف جر غير أصلي"},
  {it:"me",ar:"رأيي",note:null},
  {it:"oltre",ar:"بعد",note:"حرف جر غير أصلي"},
  {it:"il ponte",ar:"الجسر",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"c'è",ar:"في",note:null},
  {it:"una scuola",ar:"مدرسة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"e",ar:"و",note:null},
  {it:"nonostante",ar:"على الرغم من",note:"حرف جر غير أصلي"},
  {it:"la pioggia",ar:"المطر",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"siamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"usciti",ar:"خرجنا",note:"Uscire، Passato Prossimo"}
 ], conj:null},

{it:"Hai mangiato tutto tranne il pesce, eccetto la pizza, salvo un pezzo di pane", ar:"أكلت كل حاجة ما عدا السمك، بإستثناء البيتزا، إلا حتة عيش.", en:"You ate everything except the fish, except the pizza, save for a piece of bread.", pronoun:"Tu (أنت)",
 words:[
  {it:"Hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"mangiato",ar:"أكلت",note:"Mangiare، Passato Prossimo"},
  {it:"tutto",ar:"كل حاجة",note:"ضمير شامل"},
  {it:"tranne",ar:"ما عدا",note:"حرف جر غير أصلي"},
  {it:"il pesce",ar:"السمك",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"eccetto",ar:"باستثناء",note:"حرف جر غير أصلي"},
  {it:"la pizza",ar:"البيتزا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"salvo",ar:"إلا",note:"حرف جر غير أصلي"},
  {it:"un pezzo",ar:"حتة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"di",ar:"من",note:null},
  {it:"pane",ar:"العيش",note:null}
 ], conj:null},

{it:"Lui ha pagato mediante bonifico e ha mandato il file tramite email", ar:"هو دفع بواسطة تحويل بنكي وبعت الملف عن طريق الإيميل.", en:"He paid via bank transfer and sent the file through email.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"pagato",ar:"دفع",note:"Pagare، Passato Prossimo"},
  {it:"mediante",ar:"بواسطة",note:"حرف جر غير أصلي"},
  {it:"bonifico",ar:"تحويل بنكي",note:null},
  {it:"e",ar:"و",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"mandato",ar:"بعت",note:"Mandare، Passato Prossimo"},
  {it:"il file",ar:"الملف",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"tramite",ar:"عن طريق",note:"حرف جر غير أصلي"},
  {it:"email",ar:"الإيميل",note:null}
 ], conj:null},

// ══════════ الصفات والضمائر الملكية (Aggettivi possessivi) ══════════

{it:"Il mio amico è simpatico, ma i tuoi amici sono più simpatici", ar:"صاحبي لطيف، بس صحابك ألطف.", en:"My friend is nice, but your friends are nicer.", pronoun:"Io (أنا)",
 words:[
  {it:"Il mio",ar:"صاحبي",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — صفة ملكية مذكر مفرد"},
  {it:"amico",ar:"صديق",note:null},
  {it:"è",ar:"هو",note:"Essere، Presente"},
  {it:"simpatico",ar:"لطيف",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"i tuoi",ar:"صحابك",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — صفة ملكية مذكر جمع"},
  {it:"amici",ar:"أصحاب",note:null},
  {it:"sono",ar:"هم",note:"Essere، Presente"},
  {it:"più",ar:"أكتر",note:null},
  {it:"simpatici",ar:"لطفاء",note:null}
 ], conj:null},

{it:"Suo fratello e sua sorella sono venuti a trovare i suoi nonni ieri", ar:"أخوه وأخته جم يزوروا جدوده امبارح.", en:"His brother and his sister came to visit his grandparents yesterday.", pronoun:"Lui (هو)",
 words:[
  {it:"Suo",ar:"أخوه",note:"صفة ملكية، بدون أداة تعريف مع أفراد العائلة بالمفرد"},
  {it:"fratello",ar:"أخ",note:null},
  {it:"e",ar:"و",note:null},
  {it:"sua",ar:"أخته",note:"صفة ملكية مؤنث مفرد"},
  {it:"sorella",ar:"أخت",note:null},
  {it:"sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"venuti",ar:"جم",note:"Venire، Passato Prossimo"},
  {it:"a",ar:"لـ",note:null},
  {it:"trovare",ar:"يزوروا",note:null},
  {it:"i suoi",ar:"جدوده",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — صفة ملكية جمع — ترجع الأداة مع الجمع حتى مع العائلة"},
  {it:"nonni",ar:"الجدود",note:null},
  {it:"ieri",ar:"امبارح",note:null}
 ], conj:null},

{it:"La nostra scuola è più grande della vostra, e i nostri libri sono nuovi", ar:"مدرستنا أكبر من بتاعتكوا، وكتبنا جداد.", en:"Our school is bigger than yours, and our books are new.", pronoun:"Noi (احنا)",
 words:[
  {it:"La nostra",ar:"مدرستنا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — صفة ملكية مؤنث مفرد"},
  {it:"scuola",ar:"مدرسة",note:null},
  {it:"è",ar:"هي",note:null},
  {it:"più",ar:"أكتر",note:null},
  {it:"grande",ar:"كبيرة",note:null},
  {it:"della",ar:"من الـ",note:"حرف جر مدمج = di + la"},
  {it:"vostra",ar:"بتاعتكوا",note:"صفة ملكية مؤنث"},
  {it:"e",ar:"و",note:null},
  {it:"i nostri",ar:"كتبنا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — صفة ملكية مذكر جمع"},
  {it:"libri",ar:"كتب",note:null},
  {it:"sono",ar:"هم",note:null},
  {it:"nuovi",ar:"جداد",note:null}
 ], conj:null},

{it:"Le loro idee erano ottime, e il loro progetto ha funzionato benissimo", ar:"أفكارهم كانت ممتازة، ومشروعهم شغل كويس جداً.", en:"Their ideas were excellent, and their project worked very well.", pronoun:"Loro (هم)",
 words:[
  {it:"Le loro",ar:"أفكارهم",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — صفة ملكية ثابتة الشكل مع كل الحالات"},
  {it:"idee",ar:"أفكار",note:null},
  {it:"erano",ar:"كانت",note:"Essere، Imperfetto"},
  {it:"ottime",ar:"ممتازة",note:null},
  {it:"e",ar:"و",note:null},
  {it:"il loro",ar:"مشروعهم",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — صفة ملكية ثابتة"},
  {it:"progetto",ar:"مشروع",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"funzionato",ar:"شغل",note:"Funzionare، Passato Prossimo"},
  {it:"benissimo",ar:"كويس جداً",note:null}
 ], conj:null},

// ══════════ أدوات التعريف والتنكير (Articoli determinativi e partitivi) ══════════

{it:"Ho comprato il pane, la frutta, l'acqua e lo zucchero al mercato", ar:"شريت العيش، الفاكهة، المية، والسكر من السوق.", en:"I bought bread, fruit, water, and sugar at the market.", pronoun:"Io (أنا)",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"comprato",ar:"شريت",note:"Comprare، Passato Prossimo"},
  {it:"il pane",ar:"العيش",note:"أداة تعريف مذكر مفرد — الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"la frutta",ar:"الفاكهة",note:"أداة تعريف مؤنث مفرد — الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"l'acqua",ar:"المية",note:"أداة تعريف قبل حرف متحرك — الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"e",ar:"و",note:null},
  {it:"lo zucchero",ar:"السكر",note:"أداة تعريف قبل s+ساكن — الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"al",ar:"في الـ",note:"حرف جر مدمج = a + il"},
  {it:"mercato",ar:"السوق",note:null}
 ], conj:null},

{it:"Hai visto gli studenti e le studentesse nella nuova classe", ar:"شفت الطلاب والطالبات في الفصل الجديد؟", en:"Did you see the students (m. and f.) in the new class?", pronoun:"Tu (أنت)",
 words:[
  {it:"Hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"visto",ar:"شفت",note:"Vedere، Passato Prossimo"},
  {it:"gli studenti",ar:"طلاب",note:"أداة تعريف جمع مذكر — الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"e",ar:"و",note:null},
  {it:"le studentesse",ar:"طالبات",note:"أداة تعريف جمع مؤنث — الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"nella",ar:"في الـ",note:"حرف جر مدمج = in + la"},
  {it:"nuova",ar:"جديدة",note:null},
  {it:"classe",ar:"فصل",note:null}
 ], conj:null},

{it:"Lui ha comprato dei libri, degli zaini e delle penne per la scuola", ar:"هو شرى شوية كتب، وشوية شنط، وشوية أقلام للمدرسة.", en:"He bought some books, some backpacks, and some pens for school.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"comprato",ar:"شرى",note:"Comprare، Passato Prossimo"},
  {it:"dei",ar:"شوية",note:"أداة تنكير جزء (partitivo) جمع مذكر"},
  {it:"libri",ar:"كتب",note:null},
  {it:"degli",ar:"شوية",note:"partitivo جمع مذكر قبل حرف متحرك أو s+ساكن"},
  {it:"zaini",ar:"شنط",note:null},
  {it:"e",ar:"و",note:null},
  {it:"delle",ar:"شوية",note:"partitivo جمع مؤنث"},
  {it:"penne",ar:"أقلام",note:null},
  {it:"per",ar:"لـ",note:null},
  {it:"la scuola",ar:"المدرسة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:null},

{it:"Lei ha mangiato una mela e un panino prima di uscire", ar:"هي أكلت تفاحة وساندويتش قبل ما تخرج.", en:"She ate an apple and a sandwich before going out.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"mangiato",ar:"أكلت",note:"Mangiare، Passato Prossimo"},
  {it:"una mela",ar:"تفاحة",note:"أداة تنكير مؤنث — الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"e",ar:"و",note:null},
  {it:"un panino",ar:"ساندويتش",note:"أداة تنكير مذكر — الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"prima",ar:"قبل",note:null},
  {it:"di",ar:"",note:null},
  {it:"uscire",ar:"تخرج",note:null}
 ], conj:null},

// ══════════ صفات وضمائر الإشارة (Aggettivi e pronomi dimostrativi) ══════════

{it:"Questo libro è interessante, ma questi ragazzi non hanno letto queste pagine", ar:"الكتاب ده مشوق، بس الشباب دول مقروش الصفحات دي.", en:"This book is interesting, but these guys haven't read these pages.", pronoun:"Io (أنا)",
 words:[
  {it:"Questo",ar:"ده",note:"صفة إشارة مذكر مفرد"},
  {it:"libro",ar:"كتاب",note:null},
  {it:"è",ar:"هو",note:null},
  {it:"interessante",ar:"مشوق",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"questi",ar:"دول",note:"صفة إشارة مذكر جمع"},
  {it:"ragazzi",ar:"شباب",note:null},
  {it:"non",ar:"",note:"جزء من النفي"},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"letto",ar:"مقروش",note:"Leggere، Passato Prossimo بالنفي"},
  {it:"queste",ar:"دي",note:"صفة إشارة مؤنث جمع"},
  {it:"pagine",ar:"صفحات",note:null}
 ], conj:null},

{it:"Conosci quest'uomo? È l'amico di quest'amica di mia sorella", ar:"تعرف الراجل ده؟ هو صاحب الصديقة دي بتاعة أختي.", en:"Do you know this man? He's the friend of this friend of my sister.", pronoun:"Tu (أنت)",
 words:[
  {it:"Conosci",ar:"تعرف",note:null},
  {it:"quest'",ar:"ده",note:"انكماش questo قبل حرف متحرك"},
  {it:"uomo",ar:"راجل",note:null},
  {it:"È",ar:"هو",note:null},
  {it:"l'amico",ar:"صاحب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"di",ar:"بتاع",note:null},
  {it:"quest'",ar:"دي",note:"انكماش questa قبل حرف متحرك"},
  {it:"amica",ar:"صديقة",note:null},
  {it:"di",ar:"بتاعة",note:null},
  {it:"mia",ar:"أختي",note:null},
  {it:"sorella",ar:"أخت",note:null}
 ], conj:null},

{it:"Quel ragazzo è alto, quella ragazza è bella, e quegli studenti studiano sempre", ar:"الشاب ده طويل، البنت دي جميلة، والطلاب دول بيذاكروا دايماً.", en:"That guy is tall, that girl is beautiful, and those students always study.", pronoun:"Lui (هو)",
 words:[
  {it:"Quel",ar:"ده",note:"quello قبل ساكن"},
  {it:"ragazzo",ar:"شاب",note:null},
  {it:"è",ar:"هو",note:null},
  {it:"alto",ar:"طويل",note:null},
  {it:"quella",ar:"دي",note:null},
  {it:"ragazza",ar:"بنت",note:null},
  {it:"bella",ar:"جميلة",note:null},
  {it:"e",ar:"و",note:null},
  {it:"quegli",ar:"دول",note:"quello قبل حرف متحرك أو s+ساكن/z/gn/ps"},
  {it:"studenti",ar:"طلاب",note:null},
  {it:"studiano",ar:"بيذاكروا",note:null},
  {it:"sempre",ar:"دايماً",note:null}
 ], conj:null},

{it:"Quale preferisci, questo o quello? Io prendo quella, è più bella", ar:"تحب إيه، ده أو ده؟ أنا هاخد دي، هي أحلى.", en:"Which do you prefer, this or that? I'll take that one, it's nicer.", pronoun:"Noi (احنا)",
 words:[
  {it:"Quale",ar:"أي",note:null},
  {it:"preferisci",ar:"تحب",note:null},
  {it:"questo",ar:"ده",note:"ضمير إشارة"},
  {it:"o",ar:"أو",note:null},
  {it:"quello",ar:"ده",note:"ضمير إشارة"},
  {it:"Io",ar:"أنا",note:null},
  {it:"prendo",ar:"هاخد",note:null},
  {it:"quella",ar:"دي",note:"ضمير إشارة مؤنث"},
  {it:"è",ar:"هي",note:null},
  {it:"più",ar:"أكتر",note:null},
  {it:"bella",ar:"حلوة",note:null}
 ], conj:null},

// ══════════ أسماء وضمائر الاستفهام (Aggettivi e pronomi interrogativi) ══════════

{it:"Quando lavoravo in quel negozio, non sapevo quanto costava tutto", ar:"لما كنت بشتقل في المحل ده، مكنتش عارف كل حاجة بكام.", en:"When I used to work in that shop, I didn't know how much everything cost.", pronoun:"Io (أنا)",
 words:[
  {it:"Quando",ar:"لما/متى",note:"أداة استفهام/ربط زمنية"},
  {it:"lavoravo",ar:"كنت بشتقل",note:"Lavorare، Imperfetto مع Io"},
  {it:"in",ar:"في",note:null},
  {it:"quel",ar:"ده",note:null},
  {it:"negozio",ar:"محل",note:null},
  {it:"non",ar:"مش",note:null},
  {it:"sapevo",ar:"كنت عارف",note:"Sapere، Imperfetto مع Io"},
  {it:"quanto",ar:"كم",note:"أداة استفهام للكمية"},
  {it:"costava",ar:"كان بيكلف",note:"Costare، Imperfetto"},
  {it:"tutto",ar:"كل حاجة",note:null}
 ], conj:null},

{it:"Di chi è questo telefono? A chi hai scritto ieri sera", ar:"التليفون ده بتاع مين؟ كتبت لمين امبارح بالليل؟", en:"Whose phone is this? Who did you write to last night?", pronoun:"Tu (أنت)",
 words:[
  {it:"Di",ar:"بتاع",note:"جزء من di chi"},
  {it:"chi",ar:"مين",note:"أداة استفهام للعاقل"},
  {it:"è",ar:"هو",note:null},
  {it:"questo",ar:"ده",note:null},
  {it:"telefono",ar:"التليفون",note:null},
  {it:"A",ar:"لـ",note:"جزء من a chi"},
  {it:"chi",ar:"مين",note:null},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"scritto",ar:"كتبت",note:"Scrivere، Passato Prossimo"},
  {it:"ieri",ar:"امبارح",note:null},
  {it:"sera",ar:"بالليل",note:null}
 ], conj:null},

{it:"Quale strada ha preso, e quali negozi ha visitato in centro", ar:"أخد أي شارع، وزار أي محلات في وسط البلد؟", en:"Which street did he take, and which shops did he visit downtown?", pronoun:"Lui (هو)",
 words:[
  {it:"Quale",ar:"أي",note:"مفرد"},
  {it:"strada",ar:"شارع",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"preso",ar:"أخد",note:"Prendere، Passato Prossimo"},
  {it:"e",ar:"و",note:null},
  {it:"quali",ar:"أي",note:"جمع"},
  {it:"negozi",ar:"محلات",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"visitato",ar:"زار",note:"Visitare، Passato Prossimo"},
  {it:"in",ar:"في",note:null},
  {it:"centro",ar:"وسط البلد",note:null}
 ], conj:null},

{it:"Che cosa hai fatto ieri? Cosa hai mangiato a pranzo", ar:"عملتي إيه امبارح؟ أكلتي إيه في الفطار؟", en:"What did you do yesterday? What did you have for lunch?", pronoun:"Lei (هي)",
 words:[
  {it:"Che",ar:"إيه",note:"جزء من che cosa"},
  {it:"cosa",ar:"",note:"جزء من che cosa — أداة استفهام مشتركة"},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"fatto",ar:"عملتي",note:"Fare، Passato Prossimo"},
  {it:"ieri",ar:"امبارح",note:null},
  {it:"Cosa",ar:"إيه",note:null},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"mangiato",ar:"أكلتي",note:"Mangiare، Passato Prossimo"},
  {it:"a",ar:"في",note:null},
  {it:"pranzo",ar:"الفطار",note:null}
 ], conj:null},

// ══════════ الضمائر (المباشرة والمنعكسة) ══════════

{it:"Ogni domenica i nostri amici ci invitano a pranzo, e noi li ringraziamo sempre", ar:"كل حد، صحابنا بيعزمونا على الفطار، واحنا بنشكرهم دايماً.", en:"Every Sunday our friends invite us to lunch, and we always thank them.", pronoun:"Noi (احنا)",
 words:[
  {it:"Ogni",ar:"كل",note:null},
  {it:"domenica",ar:"حد",note:null},
  {it:"i nostri",ar:"بتوعنا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"amici",ar:"صحاب",note:null},
  {it:"ci",ar:"ــنا",note:"ضمير مفعول به مباشر لـ Noi"},
  {it:"invitano",ar:"بيعزموا",note:null},
  {it:"a",ar:"لـ",note:null},
  {it:"pranzo",ar:"الفطار",note:null},
  {it:"e",ar:"و",note:null},
  {it:"noi",ar:"احنا",note:null},
  {it:"li",ar:"هم",note:"ضمير مفعول به مباشر مذكر جمع"},
  {it:"ringraziamo",ar:"بنشكر",note:null},
  {it:"sempre",ar:"دايماً",note:null}
 ], conj:null},

{it:"Il professore mi vede sempre perché arrivo presto, e ti cerca dopo la lezione", ar:"الأستاذ بيشوفني دايماً لأني بوصل بدري، وبيدور عليك بعد الحصة.", en:"The professor always sees me because I arrive early, and looks for you after class.", pronoun:"Io (أنا)",
 words:[
  {it:"Il professore",ar:"الأستاذ",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mi",ar:"ـني",note:"ضمير مفعول به مباشر"},
  {it:"vede",ar:"بيشوف",note:null},
  {it:"sempre",ar:"دايماً",note:null},
  {it:"perché",ar:"لأن",note:null},
  {it:"arrivo",ar:"بوصل",note:null},
  {it:"presto",ar:"بدري",note:null},
  {it:"e",ar:"و",note:null},
  {it:"ti",ar:"ـك",note:"ضمير مفعول به مباشر"},
  {it:"cerca",ar:"بيدور على",note:null},
  {it:"dopo",ar:"بعد",note:null},
  {it:"la lezione",ar:"الحصة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:null},

{it:"Lui si sveglia presto, si veste velocemente, e voi vi sedete per fare colazione", ar:"هو بيصحى بدري، بيلبس بسرعة، وانتوا بتقعدوا تفطروا.", en:"He wakes up early, gets dressed quickly, and you (pl.) sit down to have breakfast.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"si",ar:"نفسه",note:"ضمير انعكاسي"},
  {it:"sveglia",ar:"بيصحى",note:"Svegliarsi"},
  {it:"presto",ar:"بدري",note:null},
  {it:"si",ar:"نفسه",note:"ضمير انعكاسي"},
  {it:"veste",ar:"بيلبس",note:"Vestirsi"},
  {it:"velocemente",ar:"بسرعة",note:null},
  {it:"e",ar:"و",note:null},
  {it:"voi",ar:"انتوا",note:null},
  {it:"vi",ar:"أنفسكم",note:"ضمير انعكاسي مع Voi"},
  {it:"sedete",ar:"بتقعدوا",note:"Sedersi"},
  {it:"per",ar:"عشان",note:null},
  {it:"fare",ar:"تعملوا",note:null},
  {it:"colazione",ar:"فطار",note:null}
 ], conj:null},

// ══════════ الضمائر المبهمة (Pronomi indefiniti) ══════════

{it:"Ho comprato qualcosa per te, e qualcuno ha bussato alla porta proprio ora", ar:"اشتريت حاجة ليك، وحد خبط على الباب دلوقتي بالظبط.", en:"I bought something for you, and someone knocked on the door just now.", pronoun:"Io (أنا)",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"comprato",ar:"اشتريت",note:"Comprare، Passato Prossimo"},
  {it:"qualcosa",ar:"حاجة ما",note:"ضمير مبهم للأشياء"},
  {it:"per",ar:"لـ",note:null},
  {it:"te",ar:"انت",note:null},
  {it:"e",ar:"و",note:null},
  {it:"qualcuno",ar:"حد",note:"ضمير مبهم للعاقل"},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"bussato",ar:"خبط",note:"Bussare، Passato Prossimo"},
  {it:"alla",ar:"على الـ",note:null},
  {it:"porta",ar:"الباب",note:null},
  {it:"proprio",ar:"بالظبط",note:null},
  {it:"ora",ar:"دلوقتي",note:null}
 ], conj:null},

{it:"Chiunque può sbagliare, ma ognuno deve capire il proprio errore", ar:"أي حد ممكن يفشل، بس كل واحد لازم يفهم فشلته.", en:"Anyone can make a mistake, but everyone must understand their own error.", pronoun:"Tu (أنت)",
 words:[
  {it:"Chiunque",ar:"أي حد",note:"للعاقل فقط، الفعل بعدها مفرد دايماً"},
  {it:"può",ar:"ممكن",note:null},
  {it:"sbagliare",ar:"يفشل",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"ognuno",ar:"كل واحد",note:"ضمير مبهم"},
  {it:"deve",ar:"لازم",note:null},
  {it:"capire",ar:"يفهم",note:null},
  {it:"il proprio",ar:"الخاص بيه",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"errore",ar:"الفشلة",note:null}
 ], conj:null},

{it:"Lui non ha detto niente ieri, ma ha capito tutto della lezione", ar:"هو ماقالش حاجة امبارح، بس فهم كل حاجة من الحصة.", en:"He didn't say anything yesterday, but he understood everything in the lesson.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"non",ar:"ما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"detto",ar:"قال",note:"Dire، Passato Prossimo"},
  {it:"niente",ar:"حاجة",note:"ضمير مبهم للنفي، يلازم non"},
  {it:"ieri",ar:"امبارح",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"capito",ar:"فهم",note:"Capire، Passato Prossimo"},
  {it:"tutto",ar:"كل حاجة",note:null},
  {it:"della",ar:"من الـ",note:null},
  {it:"lezione",ar:"الحصة",note:null}
 ], conj:null},

{it:"Nessuno è venuto alla festa, anche se alcuni amici avevano promesso di venire", ar:"محدش جه الحفلة، حتى لو بعض الصحاب كانوا وعدوا إنهم هيجوا.", en:"No one came to the party, even though some friends had promised to come.", pronoun:"Lei (هي)",
 words:[
  {it:"Nessuno",ar:"محدش",note:"لا أحد"},
  {it:"è",ar:"",note:"جزء من الفعل المساعد"},
  {it:"venuto",ar:"جه",note:"Venire، Passato Prossimo"},
  {it:"alla",ar:"للـ",note:null},
  {it:"festa",ar:"الحفلة",note:null},
  {it:"anche",ar:"حتى",note:null},
  {it:"se",ar:"لو",note:null},
  {it:"alcuni",ar:"بعض",note:"ضمير كمية مبهمة"},
  {it:"amici",ar:"الصحاب",note:null},
  {it:"avevano",ar:"كانوا",note:"Avere، Trapassato/Imperfetto مع Loro"},
  {it:"promesso",ar:"وعدوا",note:null},
  {it:"di",ar:"إنهم",note:null},
  {it:"venire",ar:"يجوا",note:null}
 ], conj:null},

{it:"Abbiamo molti amici in Italia, ma poco tempo libero, perché lavoriamo troppo e studiamo tanto", ar:"عندنا صحاب كتير في إيطاليا، بس وقت فاضي قليل، لأننا بنشتفل أكتر من اللازم وبنذاكر كتير جداً.", en:"We have many friends in Italy, but little free time, because we work too much and study a lot.", pronoun:"Noi (احنا)",
 words:[
  {it:"Abbiamo",ar:"عندنا",note:"Avere، Presente"},
  {it:"molti",ar:"كتير",note:"ضمير كمية جمع مذكر"},
  {it:"amici",ar:"صحاب",note:null},
  {it:"in",ar:"في",note:null},
  {it:"Italia",ar:"إيطاليا",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"poco",ar:"قليل",note:"ضمير كمية مفرد"},
  {it:"tempo",ar:"وقت",note:null},
  {it:"libero",ar:"فاضي",note:null},
  {it:"perché",ar:"لأن",note:null},
  {it:"lavoriamo",ar:"بنشتفل",note:null},
  {it:"troppo",ar:"أكتر من اللازم",note:"ضمير كمية مبهم"},
  {it:"e",ar:"و",note:null},
  {it:"studiamo",ar:"بنذاكر",note:null},
  {it:"tanto",ar:"كتير جداً",note:"ضمير كمية مبهم"}
 ], conj:null},

{it:"Avete studiato parecchio oggi, ma volete un'altra lezione, perché certi argomenti sono difficili", ar:"ذاكرتوا كتير بشكل ملحوظ النهاردة، بس عايزين حصة تانية، لأن بعض المواضيع صعبة.", en:"You studied quite a lot today, but you want another lesson, because certain topics are difficult.", pronoun:"Voi (انتم)",
 words:[
  {it:"Avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"studiato",ar:"ذاكرتوا",note:"Studiare، Passato Prossimo"},
  {it:"parecchio",ar:"كتير بشكل ملحوظ",note:"ضمير/ظرف كمية"},
  {it:"oggi",ar:"النهاردة",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"volete",ar:"عايزين",note:null},
  {it:"un'altra",ar:"تانية",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها — ضمير/صفة مبهمة"},
  {it:"lezione",ar:"حصة",note:null},
  {it:"perché",ar:"لأن",note:null},
  {it:"certi",ar:"بعض/معينين",note:"ضمير/صفة مبهمة"},
  {it:"argomenti",ar:"المواضيع",note:null},
  {it:"sono",ar:"هم",note:null},
  {it:"difficili",ar:"صعبة",note:null}
 ], conj:null},

// ══════════ الأدوات (الطريقة والزمان) Avverbi di modo e tempo ══════════

{it:"Ho già finito i compiti, ma non ho ancora mangiato niente", ar:"انهيت الواجب فعلاً، بس لسة ماكلت حاجة.", en:"I've already finished my homework, but I haven't eaten anything yet.", pronoun:"Io (أنا)",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"già",ar:"فعلاً",note:"ظرف زمان"},
  {it:"finito",ar:"انهيت",note:"Finire، Passato Prossimo"},
  {it:"i compiti",ar:"الواجب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"ma",ar:"بس",note:null},
  {it:"non",ar:"ما",note:null},
  {it:"ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"ancora",ar:"لسة/بعد",note:"ظرف زمان"},
  {it:"mangiato",ar:"ماكلت",note:"Mangiare، Passato Prossimo"},
  {it:"niente",ar:"حاجة",note:null}
 ], conj:null},

{it:"Sei arrivato appena ora, e non hai mai visto questo film", ar:"وصلت لسة دلوقتي، ومشوفتش الفيلم ده أبداً.", en:"You just arrived, and you've never watched this movie.", pronoun:"Tu (أنت)",
 words:[
  {it:"Sei",ar:"",note:"جزء من الفعل المساعد"},
  {it:"arrivato",ar:"وصلت",note:"Arrivare، Passato Prossimo"},
  {it:"appena",ar:"لسة فقط",note:"ظرف زمان"},
  {it:"ora",ar:"دلوقتي",note:null},
  {it:"e",ar:"و",note:null},
  {it:"non",ar:"ما",note:null},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"mai",ar:"أبداً",note:"ظرف زمان، يلازم non"},
  {it:"visto",ar:"شوفت",note:"Vedere، Passato Prossimo"},
  {it:"questo",ar:"ده",note:null},
  {it:"film",ar:"الفيلم",note:null}
 ], conj:null},

{it:"Lui parlava lentamente all'inizio, ma ora parla velocemente e capisce tutto facilmente", ar:"هو كان بيكلم ببطء في الأول، بس دلوقتي بيكلم بسرعة وبيفهم كل حاجة بسهولة.", en:"He used to speak slowly at the beginning, but now he speaks quickly and understands everything easily.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"parlava",ar:"كان بيكلم",note:"Parlare، Imperfetto"},
  {it:"lentamente",ar:"ببطء",note:"الـ -mente تولد الأدوات من الصفات"},
  {it:"all'",ar:"في الـ",note:null},
  {it:"inizio",ar:"الأول",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"ora",ar:"دلوقتي",note:null},
  {it:"parla",ar:"بيكلم",note:null},
  {it:"velocemente",ar:"بسرعة",note:null},
  {it:"e",ar:"و",note:null},
  {it:"capisce",ar:"بيفهم",note:null},
  {it:"tutto",ar:"كل حاجة",note:null},
  {it:"facilmente",ar:"بسهولة",note:null}
 ], conj:null},

{it:"Lei era veloce a scuola, e studiava sempre bene prima degli esami", ar:"هي كانت سريعة في المدرسة، وكانت بتذاكر دايماً كويس قبل الامتحانات.", en:"She was fast at school, and always used to study well before exams.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"era",ar:"كانت",note:"Essere، Imperfetto"},
  {it:"veloce",ar:"سريعة",note:"صفة"},
  {it:"a",ar:"في",note:null},
  {it:"scuola",ar:"المدرسة",note:null},
  {it:"e",ar:"و",note:null},
  {it:"studiava",ar:"كانت بتذاكر",note:"Studiare، Imperfetto"},
  {it:"sempre",ar:"دايماً",note:null},
  {it:"bene",ar:"كويس",note:"ظرف طريقة شاذ"},
  {it:"prima",ar:"قبل",note:null},
  {it:"degli",ar:"",note:null},
  {it:"esami",ar:"الامتحانات",note:null}
 ], conj:null},

{it:"Noi lavoravamo insieme ogni giorno, e domani lavoreremo di nuovo", ar:"احنا كنا بنشتفل مع بعض كل يوم، وبكرة حنشتفل تاني.", en:"We used to work together every day, and tomorrow we'll work again.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"lavoravamo",ar:"كنا بنشتفل",note:"Lavorare، Imperfetto مع Noi"},
  {it:"insieme",ar:"مع بعض",note:null},
  {it:"ogni",ar:"كل",note:null},
  {it:"giorno",ar:"يوم",note:null},
  {it:"e",ar:"و",note:null},
  {it:"domani",ar:"بكرة",note:null},
  {it:"lavoreremo",ar:"حنشتفل",note:"Lavorare، مستقبل"},
  {it:"di",ar:"",note:null},
  {it:"nuovo",ar:"مرة تانية",note:null}
 ], conj:null},

{it:"Loro escono spesso la sera, ma qualche volta restano a casa a guardare la TV", ar:"هم بيخرجوا كتير بالليل، بس بعض المرات بيفضلوا في البيت يتفرجوا على التلفزيون.", en:"They often go out in the evening, but sometimes they stay home to watch TV.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"escono",ar:"بيخرجوا",note:null},
  {it:"spesso",ar:"كتير",note:"ظرف زمان"},
  {it:"la sera",ar:"بالليل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"ma",ar:"بس",note:null},
  {it:"qualche",ar:"بعض",note:"صفة مبهمة تلازم المفرد دايماً"},
  {it:"volta",ar:"مرة",note:null},
  {it:"restano",ar:"بيفضلوا",note:null},
  {it:"a",ar:"في",note:null},
  {it:"casa",ar:"البيت",note:null},
  {it:"a",ar:"لـ",note:null},
  {it:"guardare",ar:"يتابعوا",note:null},
  {it:"la TV",ar:"التيفي",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:null},

// ══════════ أيام الأسبوع ولحاطات اليوم ══════════

{it:"Lunedì e martedì ho lavorato molto, ma mercoledì sono rimasto a casa", ar:"الاتنين والتلات شلت كتير، بس الأربع فضلت في البيت.", en:"Monday and Tuesday I worked a lot, but Wednesday I stayed home.", pronoun:"Io (أنا)",
 words:[
  {it:"Lunedì",ar:"الاتنين",note:null},
  {it:"e",ar:"و",note:null},
  {it:"martedì",ar:"الثلاتاء",note:null},
  {it:"ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"lavorato",ar:"شلت",note:"Lavorare، Passato Prossimo"},
  {it:"molto",ar:"كتير",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"mercoledì",ar:"الأربعاء",note:null},
  {it:"sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"rimasto",ar:"فضلت",note:"Rimanere، Passato Prossimo"},
  {it:"a",ar:"في",note:null},
  {it:"casa",ar:"البيت",note:null}
 ], conj:null},

{it:"Giovedì e venerdì eravamo occupati, ma sabato e domenica riposiamo", ar:"الخميس والجمعة كنا مشاولين، بس السبت والأحد بنرتاح.", en:"Thursday and Friday we were busy, but Saturday and Sunday we rest.", pronoun:"Noi (احنا)",
 words:[
  {it:"Giovedì",ar:"الخميس",note:null},
  {it:"e",ar:"و",note:null},
  {it:"venerdì",ar:"الجمعة",note:null},
  {it:"eravamo",ar:"كنا",note:"Essere، Imperfetto مع Noi"},
  {it:"occupati",ar:"مشاولين",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"sabato",ar:"السبت",note:null},
  {it:"e",ar:"و",note:null},
  {it:"domenica",ar:"الأحد",note:null},
  {it:"riposiamo",ar:"بنرتاح",note:null}
 ], conj:null},

{it:"Di mattina studio, di pomeriggio lavoro, e di sera esco con gli amici", ar:"الصبح باذاكر، العصر باشتفل، والليل باخرج مع الأصحاب.", en:"In the morning I study, in the afternoon I work, and in the evening I go out with friends.", pronoun:"Io (أنا)",
 words:[
  {it:"Di",ar:"في",note:null},
  {it:"mattina",ar:"الصباح",note:null},
  {it:"studio",ar:"باذاكر",note:null},
  {it:"di",ar:"في",note:null},
  {it:"pomeriggio",ar:"العصر",note:null},
  {it:"lavoro",ar:"باشتفل",note:null},
  {it:"e",ar:"و",note:null},
  {it:"di",ar:"في",note:null},
  {it:"sera",ar:"المساء",note:null},
  {it:"esco",ar:"باخرج",note:null},
  {it:"con",ar:"مع",note:null},
  {it:"gli amici",ar:"الأصحاب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:null},

{it:"Lui dormiva fino a mezzogiorno, ma ora si sveglia all'alba per andare al lavoro", ar:"هو كان بينام لحد الظهر، بس دلوقتي بيصحى مع الفجر عشان يروح الشقل.", en:"He used to sleep until noon, but now he wakes up at dawn to go to work.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"dormiva",ar:"كان بينام",note:"Dormire، Imperfetto"},
  {it:"fino",ar:"لحد",note:null},
  {it:"a",ar:"",note:null},
  {it:"mezzogiorno",ar:"الظهر",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"ora",ar:"دلوقتي",note:null},
  {it:"si",ar:"",note:"ضمير انعكاسي"},
  {it:"sveglia",ar:"بيصحى",note:null},
  {it:"all'",ar:"مع",note:null},
  {it:"alba",ar:"الفجر",note:null},
  {it:"per",ar:"عشان",note:null},
  {it:"andare",ar:"يروح",note:null},
  {it:"al",ar:"لـ",note:null},
  {it:"lavoro",ar:"الشقل",note:null}
 ], conj:null},

// ══════════ الروابط وصفات متفرقة (Congiunzioni e aggettivi extra) ══════════

{it:"Ho comprato pane e formaggio, ma non caffè, perché non mi piace", ar:"اشتريت عيش وجبنة، بس مش قهوة، لأني مابحبهاش.", en:"I bought bread and cheese, but not coffee, because I don't like it.", pronoun:"Io (أنا)",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"comprato",ar:"اشتريت",note:"Comprare، Passato Prossimo"},
  {it:"pane",ar:"عيش",note:null},
  {it:"e",ar:"و",note:"رابط عاطف"},
  {it:"formaggio",ar:"جبنة",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"non",ar:"مش",note:null},
  {it:"caffè",ar:"قهوة",note:null},
  {it:"perché",ar:"لأن",note:null},
  {it:"non",ar:"ما",note:null},
  {it:"mi",ar:"لي",note:null},
  {it:"piace",ar:"بتعجبني",note:null}
 ], conj:null},

{it:"Lei ha comprato una macchina nuova, anche se costava troppo", ar:"هي اشترت عربية جديدة، حتى لو كانت مكلفة كتير.", en:"She bought a new car, even though it cost too much.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"comprato",ar:"اشترت",note:"Comprare، Passato Prossimo"},
  {it:"una macchina",ar:"عربية",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"nuova",ar:"جديدة",note:null},
  {it:"anche",ar:"حتى",note:null},
  {it:"se",ar:"لو",note:null},
  {it:"costava",ar:"كانت مكلفة",note:"Costare، Imperfetto"},
  {it:"troppo",ar:"كتير",note:null}
 ], conj:null},

{it:"Abbiamo fatto metà del lavoro, perciò domani finiamo il resto", ar:"عملنا نص الشقل، لذلك بكرة حنكمل الباقي.", en:"We did half of the work, so tomorrow we'll finish the rest.", pronoun:"Noi (احنا)",
 words:[
  {it:"Abbiamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"fatto",ar:"عملنا",note:"Fare، Passato Prossimo"},
  {it:"metà",ar:"نص",note:"صفة/اسم"},
  {it:"del",ar:"من الـ",note:null},
  {it:"lavoro",ar:"الشقل",note:null},
  {it:"perciò",ar:"لذلك",note:"رابط"},
  {it:"domani",ar:"بكرة",note:null},
  {it:"finiamo",ar:"نكمل",note:null},
  {it:"il resto",ar:"الباقي",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:null},

{it:"Il tuo tema era migliore del mio, ma il mio computer è più veloce del tuo", ar:"موضوعك كان أدٖتمن موضوعي، بس الكمبيوتر بتاعي أسرع من بتاعك.", en:"Your essay was better than mine, but my computer is faster than yours.", pronoun:"Tu (أنت)",
 words:[
  {it:"Il tuo",ar:"بتاعك",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"tema",ar:"موضوع",note:null},
  {it:"era",ar:"كان",note:"Essere، Imperfetto"},
  {it:"migliore",ar:"أحسن",note:"صفة تفضيل شاذة"},
  {it:"del",ar:"من الـ",note:null},
  {it:"mio",ar:"بتاعي",note:null},
  {it:"ma",ar:"بس",note:null},
  {it:"il mio",ar:"بتاعي",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"computer",ar:"الكمبيوتر",note:null},
  {it:"è",ar:"",note:null},
  {it:"più",ar:"أسرع",note:null},
  {it:"veloce",ar:"",note:null},
  {it:"del",ar:"من الـ",note:null},
  {it:"tuo",ar:"بتاعك",note:null}
 ], conj:null},

];

// ===== AR_SEQ_SENTENCES =====
// مخصصة لوضع "رتّب بالعربي"
const AR_SEQ_SENTENCES = [

// ── بار / قهوة ──────────────────────────────────────────────────────
{it:"Vado al bar ogni mattina e prendo un caffè", ar:"بروح البار كل صبح وباخد قهوة", en:"I go to the bar every morning and have a coffee.",
 words:[
  {it:"Vado",ar:"بروح"},{it:"al",ar:"للـ"},{it:"bar",ar:"البار"},
  {it:"ogni",ar:"كل"},{it:"mattina",ar:"صبح"},{it:"e",ar:"و"},
  {it:"prendo",ar:"باخد"},{it:"un",ar:"(تنكير)"},{it:"caffè",ar:"قهوة"}
]},

{it:"Il barista mi prepara il caffè senza zucchero", ar:"النادل بيجهزلي القهوة من غير سكر", en:"The barista makes me a coffee without sugar.",
 words:[
  {it:"Il",ar:"الـ"},{it:"barista",ar:"النادل"},{it:"mi",ar:"لي"},
  {it:"prepara",ar:"بيجهز"},{it:"il",ar:"الـ"},{it:"caffè",ar:"القهوة"},
  {it:"senza",ar:"من غير"},{it:"zucchero",ar:"سكر"}
]},

{it:"Posso avere un bicchiere d'acqua per favore", ar:"ممكن كوباية مية لو سمحت", en:"Can I have a glass of water please?",
 words:[
  {it:"Posso",ar:"ممكن"},{it:"avere",ar:"آخد"},{it:"un",ar:"(تنكير)"},
  {it:"bicchiere",ar:"كوباية"},{it:"d'acqua",ar:"مية"},{it:"per",ar:"من"},
  {it:"favore",ar:"فضلك"}
]},

// ── سوبر ماركت / تسوق ───────────────────────────────────────────────
{it:"Devo andare al supermercato a comprare il pane", ar:"لازم أروح السوبر ماركت أشتري عيش", en:"I need to go to the supermarket to buy bread.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"andare",ar:"أروح"},{it:"al",ar:"للـ"},
  {it:"supermercato",ar:"السوبر ماركت"},{it:"a",ar:"عشان"},
  {it:"comprare",ar:"أشتري"},{it:"il",ar:"الـ"},{it:"pane",ar:"العيش"}
]},

{it:"Quanto costa questo prodotto nel negozio", ar:"بكام المنتج ده في المحل", en:"How much does this product cost in the shop?",
 words:[
  {it:"Quanto",ar:"بكام"},{it:"costa",ar:"بيكلف"},{it:"questo",ar:"الـ"},
  {it:"prodotto",ar:"المنتج"},{it:"nel",ar:"في الـ"},{it:"negozio",ar:"المحل"}
]},

{it:"Ho dimenticato di comprare il latte al supermercato", ar:"نسيت أشتري اللبن من السوبر ماركت", en:"I forgot to buy milk at the supermarket.",
 words:[
  {it:"Ho",ar:"أنا"},{it:"dimenticato",ar:"نسيت"},{it:"di",ar:"إني"},
  {it:"comprare",ar:"أشتري"},{it:"il",ar:"الـ"},{it:"latte",ar:"اللبن"},
  {it:"al",ar:"من الـ"},{it:"supermercato",ar:"السوبر ماركت"}
]},

// ── مواصلات ─────────────────────────────────────────────────────────
{it:"Il treno per Milano parte tra dieci minuti dal binario tre", ar:"القطار لميلانو بيمشي بعد عشر دقايق من الرصيف التلاتة", en:"The train to Milan leaves in ten minutes from platform three.",
 words:[
  {it:"Il",ar:"الـ"},{it:"treno",ar:"القطار"},{it:"per",ar:"لـ"},
  {it:"Milano",ar:"ميلانو"},{it:"parte",ar:"بيمشي"},{it:"tra",ar:"بعد"},
  {it:"dieci",ar:"عشر"},{it:"minuti",ar:"دقايق"},{it:"dal",ar:"من الـ"},
  {it:"binario",ar:"الرصيف"},{it:"tre",ar:"التلاتة"}
]},

{it:"Devo prendere l'autobus numero dodici per andare in centro", ar:"لازم آخد الأتوبيس رقم اتناشر عشان أروح وسط البلد", en:"I need to take bus number twelve to go to the city center.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"prendere",ar:"آخد"},{it:"l'autobus",ar:"الأتوبيس"},
  {it:"numero",ar:"رقم"},{it:"dodici",ar:"اتناشر"},{it:"per",ar:"عشان"},
  {it:"andare",ar:"أروح"},{it:"in",ar:"في"},{it:"centro",ar:"وسط البلد"}
]},

{it:"Il traffico era bloccato e sono arrivato tardi al lavoro", ar:"الزحمة كانت واقفة ووصلت متأخر للشغل", en:"The traffic was jammed and I arrived late to work.",
 words:[
  {it:"Il",ar:"الـ"},{it:"traffico",ar:"الزحمة"},{it:"era",ar:"كانت"},
  {it:"bloccato",ar:"واقفة"},{it:"e",ar:"و"},{it:"sono",ar:"أنا"},
  {it:"arrivato",ar:"وصلت"},{it:"tardi",ar:"متأخر"},{it:"al",ar:"للـ"},
  {it:"lavoro",ar:"الشغل"}
]},

// ── مطعم ────────────────────────────────────────────────────────────
{it:"Vorrei un tavolo per due persone vicino alla finestra", ar:"عايز ترابيزة لاتنين قريب من الشباك", en:"I'd like a table for two people near the window.",
 words:[
  {it:"Vorrei",ar:"عايز"},{it:"un",ar:"(تنكير)"},{it:"tavolo",ar:"ترابيزة"},
  {it:"per",ar:"لـ"},{it:"due",ar:"اتنين"},{it:"persone",ar:"شخص"},
  {it:"vicino",ar:"قريب"},{it:"alla",ar:"من الـ"},{it:"finestra",ar:"الشباك"}
]},

{it:"Il cameriere ci porta il menu e l'acqua naturale", ar:"الجرسون جابلنا المنيو والمية الطبيعية", en:"The waiter brings us the menu and still water.",
 words:[
  {it:"Il",ar:"الـ"},{it:"cameriere",ar:"الجرسون"},{it:"ci",ar:"لنا"},
  {it:"porta",ar:"جاب"},{it:"il",ar:"الـ"},{it:"menu",ar:"المنيو"},
  {it:"e",ar:"و"},{it:"l'acqua",ar:"المية"},{it:"naturale",ar:"الطبيعية"}
]},

{it:"Vorrei ordinare una pizza margherita e un'insalata mista", ar:"عايز أطلب بيتزا مارغريتا وسلطة مشكلة", en:"I'd like to order a margherita pizza and a mixed salad.",
 words:[
  {it:"Vorrei",ar:"عايز"},{it:"ordinare",ar:"أطلب"},{it:"una",ar:"(تنكير)"},
  {it:"pizza",ar:"بيتزا"},{it:"margherita",ar:"مارغريتا"},{it:"e",ar:"و"},
  {it:"un'insalata",ar:"سلطة"},{it:"mista",ar:"مشكلة"}
]},

// ── صحة / صيدلية ────────────────────────────────────────────────────
{it:"Non mi sento bene, ho mal di testa da ieri sera", ar:"مش بحس بخير عندي صداع من امبارح بالليل", en:"I don't feel well, I've had a headache since last night.",
 words:[
  {it:"Non",ar:"مش"},{it:"mi",ar:"أنا"},{it:"sento",ar:"بحس"},
  {it:"bene",ar:"بخير"},{it:"ho",ar:"عندي"},{it:"mal",ar:"ألم"},
  {it:"di",ar:"في الـ"},{it:"testa",ar:"دماغ"},{it:"da",ar:"من"},
  {it:"ieri",ar:"امبارح"},{it:"sera",ar:"بالليل"}
]},

{it:"Il medico mi ha detto di prendere la medicina due volte al giorno", ar:"الدكتور قالي آخد الدوا مرتين في اليوم", en:"The doctor told me to take the medicine twice a day.",
 words:[
  {it:"Il",ar:"الـ"},{it:"medico",ar:"الدكتور"},{it:"mi",ar:"لي"},
  {it:"ha",ar:"قال"},{it:"detto",ar:"إني"},{it:"di",ar:"إني"},
  {it:"prendere",ar:"آخد"},{it:"la",ar:"الـ"},{it:"medicina",ar:"الدوا"},
  {it:"due",ar:"مرتين"},{it:"volte",ar:"في"},{it:"al",ar:"الـ"},
  {it:"giorno",ar:"يوم"}
]},

// ── شغل / مكتب ──────────────────────────────────────────────────────
{it:"Ho una riunione importante alle dieci di mattina", ar:"عندي اجتماع مهم الساعة عشرة الصبح", en:"I have an important meeting at ten in the morning.",
 words:[
  {it:"Ho",ar:"عندي"},{it:"una",ar:"(تنكير)"},{it:"riunione",ar:"اجتماع"},
  {it:"importante",ar:"مهم"},{it:"alle",ar:"الساعة"},{it:"dieci",ar:"عشرة"},
  {it:"di",ar:"الـ"},{it:"mattina",ar:"الصبح"}
]},

{it:"Devo finire questo progetto entro venerdì prossimo", ar:"لازم أخلص المشروع ده قبل الجمعة الجاية", en:"I need to finish this project by next Friday.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"finire",ar:"أخلص"},{it:"questo",ar:"الـ"},
  {it:"progetto",ar:"المشروع"},{it:"entro",ar:"قبل"},{it:"venerdì",ar:"الجمعة"},
  {it:"prossimo",ar:"الجاية"}
]},

{it:"Il mio capo mi ha mandato una email importante stamattina", ar:"مديري بعتلي إيميل مهم الصبح", en:"My boss sent me an important email this morning.",
 words:[
  {it:"Il",ar:"الـ"},{it:"mio",ar:"بتاعي"},{it:"capo",ar:"مدير"},
  {it:"mi",ar:"لي"},{it:"ha",ar:"بعت"},{it:"mandato",ar:"إيميل"},
  {it:"una",ar:"(تنكير)"},{it:"email",ar:"إيميل"},{it:"importante",ar:"مهم"},
  {it:"stamattina",ar:"الصبح"}
]},

// ── بيت / يوميات ────────────────────────────────────────────────────
{it:"Stasera cucino la pasta con il sugo di pomodoro", ar:"الليلة بطبخ باستا بصوص الطماطم", en:"Tonight I'm cooking pasta with tomato sauce.",
 words:[
  {it:"Stasera",ar:"الليلة"},{it:"cucino",ar:"بطبخ"},{it:"la",ar:"الـ"},
  {it:"pasta",ar:"الباستا"},{it:"con",ar:"بـ"},{it:"il",ar:"الـ"},
  {it:"sugo",ar:"صوص"},{it:"di",ar:"بـ"},{it:"pomodoro",ar:"طماطم"}
]},

{it:"Devo fare la spesa e poi portare i bambini a scuola", ar:"لازم أعمل المشتريات وبعدين أوصّل الأطفال للمدرسة", en:"I need to do the shopping and then take the kids to school.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"fare",ar:"أعمل"},{it:"la",ar:"الـ"},
  {it:"spesa",ar:"المشتريات"},{it:"e",ar:"و"},{it:"poi",ar:"بعدين"},
  {it:"portare",ar:"أوصّل"},{it:"i",ar:"الـ"},{it:"bambini",ar:"الأطفال"},
  {it:"a",ar:"لـ"},{it:"scuola",ar:"المدرسة"}
]},

{it:"L'affitto di questo appartamento è troppo caro per me", ar:"إيجار الشقة دي غالي أوي عليا", en:"The rent for this apartment is too expensive for me.",
 words:[
  {it:"L'affitto",ar:"إيجار"},{it:"di",ar:"الـ"},{it:"questo",ar:"الـ"},
  {it:"appartamento",ar:"الشقة"},{it:"è",ar:"هو"},{it:"troppo",ar:"أوي"},
  {it:"caro",ar:"غالي"},{it:"per",ar:"على"},{it:"me",ar:"أنا"}
]},

// ── جامعة / دراسة ───────────────────────────────────────────────────
{it:"Devo studiare per l'esame di italiano della prossima settimana", ar:"لازم أذاكر لامتحان الإيطالي الأسبوع الجاي", en:"I need to study for the Italian exam next week.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"studiare",ar:"أذاكر"},{it:"per",ar:"لـ"},
  {it:"l'esame",ar:"امتحان"},{it:"di",ar:"الـ"},{it:"italiano",ar:"إيطالي"},
  {it:"della",ar:"الـ"},{it:"prossima",ar:"الجاي"},{it:"settimana",ar:"الأسبوع"}
]},

{it:"La professoressa ha spiegato la grammatica in modo molto chiaro", ar:"الأستاذة شرحت القواعد بطريقة واضحة جداً", en:"The professor explained the grammar in a very clear way.",
 words:[
  {it:"La",ar:"الـ"},{it:"professoressa",ar:"الأستاذة"},{it:"ha",ar:"هي"},
  {it:"spiegato",ar:"شرحت"},{it:"la",ar:"الـ"},{it:"grammatica",ar:"القواعد"},
  {it:"in",ar:"بـ"},{it:"modo",ar:"طريقة"},{it:"molto",ar:"جداً"},
  {it:"chiaro",ar:"واضحة"}
]},

// ── طقس ─────────────────────────────────────────────────────────────
{it:"Oggi fa molto caldo, ma domani arriva un po' di pioggia", ar:"النهارده حر جداً بس بكره هتيجي شوية مطر", en:"Today it's very hot but tomorrow some rain is coming.",
 words:[
  {it:"Oggi",ar:"النهارده"},{it:"fa",ar:"في"},{it:"molto",ar:"جداً"},
  {it:"caldo",ar:"حر"},{it:"ma",ar:"بس"},{it:"domani",ar:"بكره"},
  {it:"arriva",ar:"هتيجي"},{it:"un",ar:"(تنكير)"},{it:"po'",ar:"شوية"},
  {it:"di",ar:"من"},{it:"pioggia",ar:"مطر"}
]},

{it:"Portati un ombrello, perché sembra che piova oggi pomeriggio", ar:"خد معاك شمسية لأنه يبان إنه هيمطر بعد الضهر", en:"Take an umbrella because it looks like it will rain this afternoon.",
 words:[
  {it:"Portati",ar:"خد معاك"},{it:"un",ar:"(تنكير)"},{it:"ombrello",ar:"شمسية"},
  {it:"perché",ar:"لأن"},{it:"sembra",ar:"يبان"},{it:"che",ar:"إنه"},
  {it:"piova",ar:"هيمطر"},{it:"oggi",ar:"النهارده"},{it:"pomeriggio",ar:"بعد الضهر"}
]},

// ── تليفون / تواصل ──────────────────────────────────────────────────
{it:"Ti chiamo dopo cena per parlare di questa cosa importante", ar:"هتصلك بعد العشا عشان نتكلم في الموضوع المهم ده", en:"I'll call you after dinner to talk about this important thing.",
 words:[
  {it:"Ti",ar:"هتصلك"},{it:"chiamo",ar:"بتصل"},{it:"dopo",ar:"بعد"},
  {it:"cena",ar:"العشا"},{it:"per",ar:"عشان"},{it:"parlare",ar:"نتكلم"},
  {it:"di",ar:"في"},{it:"questa",ar:"الـ"},{it:"cosa",ar:"الموضوع"},
  {it:"importante",ar:"المهم"}
]},

{it:"Ho ricevuto un messaggio da Marco, ma non ho ancora risposto", ar:"استلمت رسالة من ماركو بس ما رديتش لسه", en:"I received a message from Marco but haven't replied yet.",
 words:[
  {it:"Ho",ar:"أنا"},{it:"ricevuto",ar:"استلمت"},{it:"un",ar:"(تنكير)"},
  {it:"messaggio",ar:"رسالة"},{it:"da",ar:"من"},{it:"Marco",ar:"ماركو"},
  {it:"ma",ar:"بس"},{it:"non",ar:"ما"},{it:"ho",ar:"(مساعد)"},
  {it:"ancora",ar:"لسه"},{it:"risposto",ar:"ردّيت"}
]},

// ── ترفيه / أوقات فراغ ──────────────────────────────────────────────
{it:"Questo fine settimana andiamo al cinema con gli amici", ar:"الويك إند ده هنروح السينما مع الأصحاب", en:"This weekend we're going to the cinema with friends.",
 words:[
  {it:"Questo",ar:"الـ"},{it:"fine",ar:"نهاية"},{it:"settimana",ar:"الأسبوع"},
  {it:"andiamo",ar:"هنروح"},{it:"al",ar:"للـ"},{it:"cinema",ar:"السينما"},
  {it:"con",ar:"مع"},{it:"gli",ar:"الـ"},{it:"amici",ar:"الأصحاب"}
]},

{it:"Mi piace molto ascoltare la musica, mentre cucino la sera", ar:"بحب أوي أسمع موسيقى وأنا بطبخ بالليل", en:"I really like listening to music while I cook in the evening.",
 words:[
  {it:"Mi",ar:"أنا"},{it:"piace",ar:"بحب"},{it:"molto",ar:"أوي"},
  {it:"ascoltare",ar:"أسمع"},{it:"la",ar:"الـ"},{it:"musica",ar:"موسيقى"},
  {it:"mentre",ar:"وأنا"},{it:"cucino",ar:"بطبخ"},{it:"la",ar:"الـ"},
  {it:"sera",ar:"بالليل"}
]},

];