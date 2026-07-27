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

  // ===== كلمات أصعب (مأخوذة من مفردات جُمل الدرس) =====
  // ضمائر الفاعل
  {it:"io",    ar:"أنا",  ipa:"/ˈiː.o/",   pron:"إي-يو",   cat:"ضمائر", ex:"Io sono italiano."},
  {it:"tu",    ar:"أنت",  ipa:"/tu/",      pron:"تو",      cat:"ضمائر", ex:"Tu sei molto simpatico."},
  {it:"lui",   ar:"هو",   ipa:"/ˈlui/",    pron:"لويّ",    cat:"ضمائر", ex:"Lui parla bene l'italiano."},
  {it:"lei",   ar:"هي",   ipa:"/ˈlɛi/",    pron:"لييّ",    cat:"ضمائر", ex:"Lei è una brava studentessa."},
  {it:"noi",   ar:"إحنا", ipa:"/ˈnɔi/",    pron:"نويّ",    cat:"ضمائر", ex:"Noi andiamo a scuola insieme."},
  {it:"voi",   ar:"انتم", ipa:"/ˈvɔi/",    pron:"فويّ",    cat:"ضمائر", ex:"Voi siete pronti per l'esame?"},
  {it:"loro",  ar:"هم",   ipa:"/ˈlɔː.ro/", pron:"لو-رو",   cat:"ضمائر", ex:"Loro escono spesso la sera."},

  // أيام الأسبوع
  {it:"lunedì",    ar:"الإتنين", ipa:"/luneˈdi/",    pron:"لونيه-دي",    cat:"أيام الأسبوع", ex:"Lunedì inizio un nuovo corso."},
  {it:"martedì",   ar:"التلات",  ipa:"/marteˈdi/",   pron:"مارتيه-دي",   cat:"أيام الأسبوع", ex:"Martedì ho lezione di italiano."},
  {it:"mercoledì", ar:"الأربع",  ipa:"/merkoleˈdi/", pron:"ميركوليه-دي", cat:"أيام الأسبوع", ex:"Mercoledì vado in palestra."},
  {it:"giovedì",   ar:"الخميس",  ipa:"/dʒoveˈdi/",   pron:"جوفيه-دي",    cat:"أيام الأسبوع", ex:"Giovedì ho un esame difficile."},
  {it:"venerdì",   ar:"الجمعة",  ipa:"/venerˈdi/",   pron:"فينير-دي",    cat:"أيام الأسبوع", ex:"Venerdì usciamo con gli amici."},
  {it:"sabato",    ar:"السبت",   ipa:"/ˈsaː.ba.to/", pron:"سا-با-تو",    cat:"أيام الأسبوع", ex:"Sabato dormo fino a tardi."},
  {it:"domenica",  ar:"الحد",    ipa:"/doˈmeː.ni.ka/",pron:"دو-مي-ني-كا", cat:"أيام الأسبوع", ex:"La domenica riposiamo tutti."},

  // أدوات ربط وأسئلة
  {it:"perché",     ar:"ليه / لأن",      ipa:"/perˈke/",             pron:"بير-كيه",        cat:"أدوات ربط", ex:"Perché non hai risposto?"},
  {it:"mentre",     ar:"بينما",          ipa:"/ˈmen.tre/",           pron:"مين-تريه",       cat:"أدوات ربط", ex:"Mentre studio, ascolto musica."},
  {it:"quindi",     ar:"يعني / إذن",     ipa:"/ˈkwin.di/",           pron:"كوين-دي",        cat:"أدوات ربط", ex:"Piove, quindi resto a casa."},
  {it:"perciò",     ar:"لذلك",           ipa:"/perˈtʃɔ/",            pron:"بير-تشو",        cat:"أدوات ربط", ex:"Ero stanco, perciò sono tornato presto."},
  {it:"nonostante", ar:"بالرغم من",       ipa:"/ˌnɔ.noˈstan.te/",     pron:"نونوسـ-تان-تيه", cat:"أدوات ربط", ex:"Nonostante la pioggia, siamo usciti."},
  {it:"tranne",     ar:"إلا / غير",      ipa:"/ˈtran.ne/",           pron:"تران-نيه",       cat:"أدوات ربط", ex:"Vengono tutti tranne Marco."},
  {it:"chi",        ar:"مين",            ipa:"/ki/",                 pron:"كي",             cat:"أدوات ربط", ex:"Chi ha telefonato?"},
  {it:"quale",      ar:"أنهي",           ipa:"/ˈkwaː.le/",           pron:"كوا-ليه",        cat:"أدوات ربط", ex:"Quale libro preferisci?"},
  {it:"quando",     ar:"إمتى",           ipa:"/ˈkwan.do/",           pron:"كوان-دو",        cat:"أدوات ربط", ex:"Quando arrivi a casa?"},
  {it:"quanto",     ar:"قد إيه",         ipa:"/ˈkwan.to/",           pron:"كوان-تو",        cat:"أدوات ربط", ex:"Quanto costa questo libro?"},

  // ظروف
  {it:"spesso",       ar:"غالباً / كتير", ipa:"/ˈspes.so/",           pron:"سـبيسّو",          cat:"ظروف", ex:"Vado spesso al mercato."},
  {it:"sempre",       ar:"دايماً",        ipa:"/ˈsɛm.pre/",           pron:"سيم-بريه",        cat:"ظروف", ex:"Sempre arrivo in orario."},
  {it:"mai",          ar:"أبداً",         ipa:"/mai/",                pron:"مايّ",            cat:"ظروف", ex:"Non sono mai stato a Roma."},
  {it:"ancora",       ar:"لسه",           ipa:"/aŋˈkoː.ra/",          pron:"أن-كو-را",        cat:"ظروف", ex:"Non ho ancora finito i compiti."},
  {it:"già",          ar:"خلاص / فعلاً",  ipa:"/dʒa/",                pron:"جا",              cat:"ظروف", ex:"Ho già mangiato, grazie."},
  {it:"presto",       ar:"بدري",          ipa:"/ˈprɛs.to/",           pron:"بريس-تو",         cat:"ظروف", ex:"Domani mi sveglio presto."},
  {it:"lentamente",   ar:"ببطء",          ipa:"/len.taˈmen.te/",      pron:"لين-تا-مين-تيه",  cat:"ظروف", ex:"Lui parla molto lentamente."},
  {it:"velocemente",  ar:"بسرعة",         ipa:"/ve.lo.tʃeˈmen.te/",   pron:"في-لو-تشيه-مين-تيه", cat:"ظروف", ex:"Ha finito velocemente il lavoro."},
  {it:"facilmente",   ar:"بسهولة",        ipa:"/fa.tʃilˈmen.te/",     pron:"فا-تشيل-مين-تيه", cat:"ظروف", ex:"Capisce tutto facilmente."},
  {it:"vicino",       ar:"قريب",          ipa:"/viˈtʃiː.no/",         pron:"في-تشي-نو",       cat:"ظروف", ex:"Abito vicino alla stazione."},
  {it:"lontano",      ar:"بعيد",          ipa:"/lonˈtaː.no/",         pron:"لون-تا-نو",       cat:"ظروف", ex:"L'ufficio è lontano da casa."},
  {it:"dentro",       ar:"جوه",           ipa:"/ˈdɛn.tro/",           pron:"دين-ترو",         cat:"ظروف", ex:"Il gatto è dentro la casa."},
  {it:"fuori",        ar:"بره",           ipa:"/ˈfwɔː.ri/",           pron:"فوو-ري",          cat:"ظروف", ex:"Oggi mangiamo fuori."},
  {it:"davanti",      ar:"قدام",          ipa:"/daˈvan.ti/",          pron:"دا-فان-تي",       cat:"ظروف", ex:"Ci vediamo davanti al negozio."},
  {it:"dietro",       ar:"ورا",           ipa:"/ˈdjɛː.tro/",          pron:"ديه-ترو",         cat:"ظروف", ex:"Il parco è dietro la scuola."},
  {it:"sopra",        ar:"فوق",           ipa:"/ˈsoː.pra/",           pron:"سو-برا",          cat:"ظروف", ex:"Il libro è sopra il tavolo."},
  {it:"sotto",        ar:"تحت",           ipa:"/ˈsɔt.to/",            pron:"سوتّو",           cat:"ظروف", ex:"Le scarpe sono sotto il letto."},
  {it:"destra",       ar:"يمين",          ipa:"/ˈdɛs.tra/",           pron:"ديس-ترا",         cat:"ظروف", ex:"Gira a destra al semaforo."},
  {it:"sinistra",     ar:"شمال",          ipa:"/siˈnis.tra/",         pron:"سي-نيس-ترا",      cat:"ظروف", ex:"La farmacia è a sinistra."},

  // صفات أصعب
  {it:"veloce",        ar:"سريع",             ipa:"/veˈloː.tʃe/",       pron:"في-لو-تشيه",     cat:"صفات", ex:"Questa macchina è molto veloce."},
  {it:"vecchio",       ar:"قديم / عجوز",      ipa:"/ˈvɛk.kjo/",         pron:"فيكـ-كيو",       cat:"صفات", ex:"Abito in un palazzo vecchio."},
  {it:"nuovo",         ar:"جديد",             ipa:"/ˈnwɔː.vo/",         pron:"نوو-فو",         cat:"صفات", ex:"Ho comprato un computer nuovo."},
  {it:"difficile",     ar:"صعب",              ipa:"/difˈfiː.tʃi.le/",   pron:"ديفـ-في-تشي-ليه", cat:"صفات", ex:"Questo esame è molto difficile."},
  {it:"interessante",  ar:"مثير للاهتمام",    ipa:"/in.te.resˈsan.te/", pron:"إن-تيريسّان-تيه", cat:"صفات", ex:"Il film era molto interessante."},
  {it:"famoso",        ar:"مشهور",            ipa:"/faˈmoː.zo/",        pron:"فا-مو-زو",       cat:"صفات", ex:"Questo ristorante è famoso a Roma."},
  {it:"simpatico",     ar:"لطيف",             ipa:"/simˈpaː.ti.ko/",    pron:"سيم-با-تي-كو",   cat:"صفات", ex:"Il tuo amico è molto simpatico."},
  {it:"nervoso",       ar:"عصبي",             ipa:"/nerˈvoː.zo/",       pron:"نير-فو-زو",      cat:"صفات", ex:"Ero nervoso prima dell'esame."},
  {it:"stanco",        ar:"تعبان",            ipa:"/ˈstaŋ.ko/",         pron:"سـتان-كو",       cat:"صفات", ex:"Sono stanco dopo il lavoro."},
  {it:"libero",        ar:"فاضي / حر",        ipa:"/ˈliː.be.ro/",       pron:"لي-بيه-رو",      cat:"صفات", ex:"Domani sono libero tutto il giorno."},
  {it:"migliore",      ar:"أحسن",             ipa:"/miʎˈʎoː.re/",       pron:"ميلـ-يو-ريه",    cat:"صفات", ex:"Questa è la scelta migliore."},
  {it:"bellissima",    ar:"جميلة جداً",       ipa:"/belˈlis.si.ma/",    pron:"بيلـ-ليسّي-ما",  cat:"صفات", ex:"Questa città è bellissima."},

  // أسماء أصعب
  {it:"regola",       ar:"قاعدة",       ipa:"/ˈrɛː.go.la/",       pron:"ريه-جو-لا",      cat:"أشياء",      ex:"Non ho capito questa regola."},
  {it:"esempio",      ar:"مثال",        ipa:"/eˈzɛm.pjo/",        pron:"إي-زيم-بيو",     cat:"أشياء",      ex:"Puoi darmi un esempio?"},
  {it:"errore",       ar:"غلطة",        ipa:"/erˈroː.re/",        pron:"إيرّو-ريه",      cat:"أشياء",      ex:"Ho fatto un piccolo errore."},
  {it:"negozio",      ar:"محل",         ipa:"/neˈɡɔt.tsjo/",      pron:"ني-جوتـ-سيو",    cat:"أماكن",      ex:"Questo negozio chiude alle otto."},
  {it:"ufficio",      ar:"مكتب",        ipa:"/ufˈfiː.tʃo/",       pron:"أوفـ-في-تشو",    cat:"أماكن",      ex:"Vado in ufficio ogni giorno."},
  {it:"università",   ar:"جامعة",       ipa:"/u.ni.ver.siˈta/",   pron:"أونيفيرسيتا",    cat:"أماكن",      ex:"Studio all'università di Milano."},
  {it:"farmacia",     ar:"صيدلية",      ipa:"/far.maˈtʃiː.a/",    pron:"فارماتشيا",      cat:"أماكن",      ex:"La farmacia è vicino alla piazza."},
  {it:"stazione",     ar:"محطة",        ipa:"/statˈtsjoː.ne/",    pron:"ستاتـتسيوني",    cat:"أماكن",      ex:"Il treno parte dalla stazione centrale."},
  {it:"mercato",      ar:"سوق",         ipa:"/merˈkaː.to/",       pron:"ميركاتو",        cat:"أماكن",      ex:"Compro la frutta al mercato."},
  {it:"colazione",    ar:"فطار",        ipa:"/ko.laˈtsjoː.ne/",   pron:"كولاتـتسيوني",   cat:"طعام وشراب", ex:"Faccio colazione alle otto."},
  {it:"pranzo",       ar:"غدا",         ipa:"/ˈpran.dzo/",        pron:"براندزو",        cat:"طعام وشراب", ex:"Il pranzo è pronto a mezzogiorno."},
  {it:"cena",         ar:"عشا",         ipa:"/ˈtʃeː.na/",         pron:"تشينا",          cat:"طعام وشراب", ex:"Stasera preparo la cena."},
  {it:"formaggio",    ar:"جبنة",        ipa:"/forˈmad.dʒo/",      pron:"فورمادجو",       cat:"طعام وشراب", ex:"Mi piace il formaggio italiano."},
  {it:"frutta",       ar:"فاكهة",       ipa:"/ˈfrut.ta/",         pron:"فروتّا",         cat:"طعام وشراب", ex:"Mangio frutta ogni mattina."},
  {it:"zucchero",     ar:"سكر",         ipa:"/ˈdzuk.ke.ro/",      pron:"دزوكّيرو",       cat:"طعام وشراب", ex:"Non metto zucchero nel caffè."},
  {it:"ombrello",     ar:"شمسية / مطرية", ipa:"/omˈbrɛl.lo/",     pron:"أومبريلّو",      cat:"أشياء",      ex:"Ho dimenticato l'ombrello a casa."},
  {it:"occhiali",     ar:"نظارة",       ipa:"/okˈkjaː.li/",       pron:"أوكّيالي",       cat:"أشياء",      ex:"Porto gli occhiali per leggere."},
  {it:"telefono",     ar:"تليفون",      ipa:"/teˈlɛː.fo.no/",     pron:"تيليفونو",       cat:"أشياء",      ex:"Il mio telefono è nuovo."},
  {it:"tavolo",       ar:"ترابيزة",     ipa:"/ˈtaː.vo.lo/",       pron:"تافولو",         cat:"أشياء",      ex:"I libri sono sul tavolo."},
  {it:"letto",        ar:"سرير",        ipa:"/ˈlɛt.to/",          pron:"ليتّو",          cat:"أشياء",      ex:"Vado a letto presto stasera."},
  {it:"zaino",        ar:"شنطة ظهر",    ipa:"/ˈdzai.no/",         pron:"دزاينو",         cat:"أشياء",      ex:"Metto i libri nello zaino."},
  {it:"penna",        ar:"قلم",         ipa:"/ˈpen.na/",          pron:"بينّا",          cat:"أشياء",      ex:"Mi presti una penna, per favore?"},
  {it:"fratello",     ar:"أخ",          ipa:"/fraˈtɛl.lo/",       pron:"فراتيلّو",       cat:"ناس",        ex:"Mio fratello studia medicina."},
  {it:"sorella",      ar:"أخت",         ipa:"/soˈrɛl.la/",        pron:"سوريلّا",        cat:"ناس",        ex:"Mia sorella abita a Milano."},
  {it:"nonno",        ar:"جد",          ipa:"/ˈnɔn.no/",          pron:"نونّو",          cat:"ناس",        ex:"Mio nonno racconta belle storie."},
  {it:"padre",        ar:"أب",          ipa:"/ˈpaː.dre/",         pron:"بادريه",         cat:"ناس",        ex:"Mio padre lavora in ufficio."},
  {it:"bambino",      ar:"طفل",         ipa:"/bamˈbiː.no/",       pron:"بامبينو",        cat:"ناس",        ex:"Il bambino gioca in giardino."},
  {it:"professore",   ar:"دكتور / أستاذ", ipa:"/pro.fesˈsoː.re/",  pron:"بروفيسّوري",     cat:"ناس",        ex:"Il professore spiega bene la lezione."},
  {it:"classe",       ar:"فصل",         ipa:"/ˈklas.se/",         pron:"كلاسّيه",        cat:"أماكن",      ex:"La nostra classe è al primo piano."},
  {it:"lezione",      ar:"حصة",         ipa:"/letˈtsjoː.ne/",     pron:"ليتـتسيوني",     cat:"عام",        ex:"La lezione inizia alle nove."},
  {it:"esame",        ar:"امتحان",      ipa:"/eˈzaː.me/",         pron:"إيزامي",         cat:"عام",        ex:"Ho un esame importante domani."},
  {it:"compiti",      ar:"واجب",        ipa:"/ˈkom.pi.ti/",       pron:"كومبيتي",        cat:"عام",        ex:"Faccio i compiti dopo la scuola."},
  {it:"progetto",     ar:"مشروع",       ipa:"/proˈdʒɛt.to/",      pron:"بروجيتّو",       cat:"عام",        ex:"Il progetto finisce questo mese."},
  {it:"idea",         ar:"فكرة",        ipa:"/iˈdɛː.a/",          pron:"إيديا",          cat:"عام",        ex:"Ho un'idea interessante."},
  {it:"pazienza",     ar:"صبر",         ipa:"/patˈtsjɛn.tsa/",    pron:"باتـتسيينتسا",   cat:"مشاعر",      ex:"Ci vuole molta pazienza."},
  {it:"gentilezza",   ar:"لطف",         ipa:"/dʒen.tiˈlet.tsa/",  pron:"جينتيليتّسا",    cat:"مشاعر",      ex:"Mi ha trattato con gentilezza."},
  {it:"fame",         ar:"جوع",         ipa:"/ˈfaː.me/",          pron:"فامي",           cat:"مشاعر",      ex:"Ho fame, mangiamo qualcosa?"},
  {it:"palestra",     ar:"جيم",         ipa:"/paˈlɛs.tra/",       pron:"باليستّرا",      cat:"أماكن",      ex:"Vado in palestra tre volte a settimana."},

  // أفعال أصعب (مصدر)
  {it:"capire",      ar:"يفهم",     ipa:"/kaˈpiː.re/",       pron:"كابيري",        cat:"أفعال", ex:"Non capisco questa parola."},
  {it:"arrivare",    ar:"يوصل",     ipa:"/arriˈvaː.re/",     pron:"أرّيفاري",      cat:"أفعال", ex:"Il treno arriva alle dieci."},
  {it:"tornare",     ar:"يرجع",     ipa:"/torˈnaː.re/",      pron:"تورناري",       cat:"أفعال", ex:"Torno a casa alle sei."},
  {it:"aspettare",   ar:"يستنى",    ipa:"/as.petˈtaː.re/",   pron:"أسبيتّاري",     cat:"أفعال", ex:"Ti aspetto davanti alla stazione."},
  {it:"telefonare",  ar:"يتصل",     ipa:"/te.le.foˈnaː.re/", pron:"تيليفوناري",    cat:"أفعال", ex:"Ti telefono più tardi."},
  {it:"viaggiare",   ar:"يسافر",    ipa:"/vjadˈdʒaː.re/",    pron:"فيادجاري",      cat:"أفعال", ex:"Mi piace viaggiare in treno."},
  {it:"incontrare",  ar:"يقابل",    ipa:"/in.konˈtraː.re/",  pron:"إينكونتراري",   cat:"أفعال", ex:"Domani incontro un amico."},
  {it:"ringraziare", ar:"يشكر",     ipa:"/rin.ɡratˈtsjaː.re/",pron:"رينجراتسياري",  cat:"أفعال", ex:"Voglio ringraziare tutti."},
  {it:"promettere",  ar:"يوعد",     ipa:"/proˈmet.te.re/",   pron:"بروميتّيري",    cat:"أفعال", ex:"Ti promento di studiare di più."},
  {it:"sbagliare",   ar:"يغلط",     ipa:"/zbaʎˈʎaː.re/",     pron:"إزبالياري",     cat:"أفعال", ex:"Tutti possono sbagliare."},
  {it:"girare",      ar:"يلف / يدور", ipa:"/dʒiˈraː.re/",     pron:"جيراري",        cat:"أفعال", ex:"Devi girare a destra."},
  {it:"guardare",    ar:"يتفرج / يبص", ipa:"/gwarˈdaː.re/",   pron:"جوارداري",      cat:"أفعال", ex:"Guardo la TV ogni sera."},
  {it:"trovare",     ar:"يلاقي",    ipa:"/troˈvaː.re/",      pron:"تروفاري",       cat:"أفعال", ex:"Non trovo le chiavi."},
  {it:"uscire",      ar:"يخرج",     ipa:"/uʃˈʃiː.re/",       pron:"أوشّيري",       cat:"أفعال", ex:"Usciamo insieme stasera."},
  {it:"venire",      ar:"يجي",      ipa:"/veˈniː.re/",       pron:"فينيري",        cat:"أفعال", ex:"Vieni con noi al cinema?"},
  {it:"studiare",    ar:"يدرس",     ipa:"/stuˈdjaː.re/",     pron:"ستودياري",      cat:"أفعال", ex:"Studio italiano ogni giorno."},

  // تصريف avere/essere (مهم لـ Passato Prossimo و Imperfetto)
  {it:"ho",        ar:"(أنا) فعلت / عندي",   ipa:"/ɔ/",             pron:"أو",       cat:"تصريف الفعل", ex:"Ho mangiato la pizza."},
  {it:"hai",       ar:"(أنت) فعلت / عندك",   ipa:"/ai/",            pron:"آي",       cat:"تصريف الفعل", ex:"Hai capito la regola?"},
  {it:"abbiamo",   ar:"(إحنا) فعلنا / عندنا", ipa:"/abˈbjaː.mo/",   pron:"أبّيامو",   cat:"تصريف الفعل", ex:"Abbiamo studiato insieme."},
  {it:"avete",     ar:"(انتم) فعلتوا / عندكم", ipa:"/aˈveː.te/",    pron:"أفيتيه",    cat:"تصريف الفعل", ex:"Avete finito i compiti?"},
  {it:"hanno",     ar:"(هم) فعلوا / عندهم",  ipa:"/ˈan.no/",        pron:"أنّو",      cat:"تصريف الفعل", ex:"Hanno comprato una macchina nuova."},
  {it:"sono",      ar:"(أنا) كنت / رحت",     ipa:"/ˈsoː.no/",       pron:"سونو",      cat:"تصريف الفعل", ex:"Sono andato al mercato."},
  {it:"sei",       ar:"(أنت) كنت",           ipa:"/sɛi/",           pron:"سيي",       cat:"تصريف الفعل", ex:"Sei arrivato presto oggi."},
  {it:"siamo",     ar:"(إحنا) كنا",          ipa:"/ˈsjaː.mo/",      pron:"سيامو",     cat:"تصريف الفعل", ex:"Siamo usciti insieme ieri."},
  {it:"siete",     ar:"(انتم) كنتوا",        ipa:"/ˈsjɛː.te/",      pron:"سييتيه",    cat:"تصريف الفعل", ex:"Siete tornati tardi ieri."},
  {it:"ero",       ar:"(أنا) كنت",           ipa:"/ˈɛː.ro/",        pron:"إيرو",      cat:"تصريف الفعل", ex:"Ero stanco dopo il lavoro."},
  {it:"eri",       ar:"(أنت) كنت",           ipa:"/ˈɛː.ri/",        pron:"إيري",      cat:"تصريف الفعل", ex:"Quando eri piccolo, giocavi molto."},
  {it:"era",       ar:"(هو/هي) كان",         ipa:"/ˈɛː.ra/",        pron:"إيرا",      cat:"تصريف الفعل", ex:"Era una bella giornata."},
  {it:"eravamo",   ar:"(إحنا) كنا",          ipa:"/e.raˈvaː.mo/",   pron:"إيرافامو",  cat:"تصريف الفعل", ex:"Eravamo felici insieme."},
  {it:"eravate",   ar:"(انتم) كنتوا",        ipa:"/e.raˈvaː.te/",   pron:"إيرافاتيه", cat:"تصريف الفعل", ex:"Eravate a scuola quel giorno."},
  {it:"erano",     ar:"(هم) كانوا",          ipa:"/ˈɛː.ra.no/",     pron:"إيرانو",    cat:"تصريف الفعل", ex:"Erano tutti stanchi ieri sera."},
];

// ===== INFINITE LESSON BANK =====
const LESSON_SENTENCES = [

{it:"Ho mangiato un panino mentre guardavo la TV", ar:"أكلت ساندويتش وأنا كنت باتفرج على التليفزيون.", en:"I ate a sandwich while I was watching TV.", pronoun:"Io (أنا)",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"mangiato",ar:"أكلت",note:"Mangiare، Passato Prossimo"},
  {it:"un panino",ar:"ساندويتش",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وأنا",note:null},
  {it:"guardavo",ar:"كنت باتفرج",note:"Guardare، Imperfetto"},
  {it:"la TV",ar:"التلفزيون",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Mangiare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho mangiato"},
  {person:"Tu (أنت)",form:"Hai mangiato"},
  {person:"Lui (هو)",form:"Ha mangiato"},
  {person:"Lei (هي)",form:"Ha mangiato"},
  {person:"Noi (احنا)",form:"Abbiamo mangiato"},
  {person:"Voi (انتم)",form:"Avete mangiato"},
  {person:"Loro (هم)",form:"Hanno mangiato"}]}},

{it:"Mangiavo la pasta mentre ho guardato il telefono", ar:"كنت باكل المكرونة وأنا بصيت في التيليفون.", en:"I was eating pasta when I looked at my phone.", pronoun:"Io (أنا)",
 words:[
  {it:"Mangiavo",ar:"كنت باكل",note:"Mangiare، Imperfetto"},
  {it:"la pasta",ar:"المكرونة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وأنا",note:null},
  {it:"ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"guardato",ar:"بصيت",note:"Guardare، Passato Prossimo"},
  {it:"il telefono",ar:"التيليفون",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Guardare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho guardato"},
  {person:"Tu (أنت)",form:"Hai guardato"},
  {person:"Lui (هو)",form:"Ha guardato"},
  {person:"Lei (هي)",form:"Ha guardato"},
  {person:"Noi (احنا)",form:"Abbiamo guardato"},
  {person:"Voi (انتم)",form:"Avete guardato"},
  {person:"Loro (هم)",form:"Hanno guardato"}]}},

{it:"Hai studiato la lezione mentre ascoltavi la radio", ar:"ذاكرت الدرس وانت كنت سامع الراديو.", en:"You studied the lesson while you were listening to the radio.", pronoun:"Tu (أنت)",
 words:[
  {it:"Hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"studiato",ar:"ذاكرت",note:"Studiare، Passato Prossimo"},
  {it:"la lezione",ar:"الدرس",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وانت",note:null},
  {it:"ascoltavi",ar:"كنت سامع",note:"Ascoltare، Imperfetto"},
  {it:"la radio",ar:"الراديو",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Studiare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho studiato"},
  {person:"Tu (أنت)",form:"Hai studiato"},
  {person:"Lui (هو)",form:"Ha studiato"},
  {person:"Lei (هي)",form:"Ha studiato"},
  {person:"Noi (احنا)",form:"Abbiamo studiato"},
  {person:"Voi (انتم)",form:"Avete studiato"},
  {person:"Loro (هم)",form:"Hanno studiato"}]}},

{it:"Studiavi la lezione mentre hai ascoltato un rumore fuori", ar:"كنت بتذاكر الدرس وانت سمعت صوت في برّا.", en:"You were studying the lesson when you heard a strange noise outside.", pronoun:"Tu (أنت)",
 words:[
  {it:"Studiavi",ar:"كنت بتذاكر",note:"Studiare، Imperfetto"},
  {it:"la lezione",ar:"الدرس",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وانت",note:null},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"ascoltato",ar:"سمعت",note:"Ascoltare، Passato Prossimo"},
  {it:"un rumore",ar:"صوت",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"fuori",ar:"برّا",note:null}
 ], conj:{verb:"Ascoltare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho ascoltato"},
  {person:"Tu (أنت)",form:"Hai ascoltato"},
  {person:"Lui (هو)",form:"Ha ascoltato"},
  {person:"Lei (هي)",form:"Ha ascoltato"},
  {person:"Noi (احنا)",form:"Abbiamo ascoltato"},
  {person:"Voi (انتم)",form:"Avete ascoltato"},
  {person:"Loro (هم)",form:"Hanno ascoltato"}]}},

{it:"Lui ha lavorato tutta la mattina mentre aspettava una chiamata importante", ar:"هو شغل الصبح كله وهو كان مستني مكالمة مهمة.", en:"He worked all morning while he was waiting for an important call.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"lavorato",ar:"شغل",note:"Lavorare، Passato Prossimo"},
  {it:"tutta la mattina",ar:"الصبح كله",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهو",note:null},
  {it:"aspettava",ar:"كان مستني",note:"Aspettare، Imperfetto"},
  {it:"una chiamata",ar:"مكالمة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"importante",ar:"مهمة",note:null}
 ], conj:{verb:"Lavorare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho lavorato"},
  {person:"Tu (أنت)",form:"Hai lavorato"},
  {person:"Lui (هو)",form:"Ha lavorato"},
  {person:"Lei (هي)",form:"Ha lavorato"},
  {person:"Noi (احنا)",form:"Abbiamo lavorato"},
  {person:"Voi (انتم)",form:"Avete lavorato"},
  {person:"Loro (هم)",form:"Hanno lavorato"}]}},

{it:"Lui lavorava in ufficio mentre il cliente ha aspettato in sala", ar:"هو كان بيشتغل في المكتب لما العميل استنى في الصالة.", en:"He was working in the office when the client waited in the lobby.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"lavorava",ar:"كان بيشتغل",note:"Lavorare، Imperfetto"},
  {it:"in",ar:"في",note:null},
  {it:"ufficio",ar:"المكتب",note:null},
  {it:"mentre",ar:"لما",note:null},
  {it:"il cliente",ar:"العميل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"aspettato",ar:"استنى",note:"Aspettare، Passato Prossimo"},
  {it:"in",ar:"في",note:null},
  {it:"sala",ar:"الصالة",note:null}
 ], conj:{verb:"Aspettare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho aspettato"},
  {person:"Tu (أنت)",form:"Hai aspettato"},
  {person:"Lui (هو)",form:"Ha aspettato"},
  {person:"Lei (هي)",form:"Ha aspettato"},
  {person:"Noi (احنا)",form:"Abbiamo aspettato"},
  {person:"Voi (انتم)",form:"Avete aspettato"},
  {person:"Loro (هم)",form:"Hanno aspettato"}]}},

{it:"Lei è arrivata a casa mentre io cucinavo la cena", ar:"هي وصلت البيت وأنا كنت بطبخ العشا.", en:"She arrived home while I was cooking dinner.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"è",ar:"",note:"جزء من الفعل المساعد"},
  {it:"arrivata",ar:"وصلت",note:"Arrivare، Passato Prossimo"},
  {it:"a casa",ar:"البيت",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وأنا",note:null},
  {it:"cucinavo",ar:"كنت بطبخ",note:"Cucinare، Imperfetto"},
  {it:"la cena",ar:"العشا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Arrivare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono arrivato/a"},
  {person:"Tu (أنت)",form:"Sei arrivato/a"},
  {person:"Lui (هو)",form:"È arrivato"},
  {person:"Lei (هي)",form:"È arrivata"},
  {person:"Noi (احنا)",form:"Siamo arrivati/e"},
  {person:"Voi (انتم)",form:"Siete arrivati/e"},
  {person:"Loro (هم)",form:"Sono arrivati/e"}]}},

{it:"Lei cucinava la pasta quando è arrivato suo fratello dall'aeroporto", ar:"هي كانت بتطبخ المكرونة لما أخوها وصل من المطار.", en:"She was cooking pasta when her brother arrived from the airport.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"cucinava",ar:"كانت بتطبخ",note:"Cucinare، Imperfetto"},
  {it:"la pasta",ar:"المكرونة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"è",ar:"",note:"جزء من الفعل المساعد"},
  {it:"arrivato",ar:"وصل",note:"Arrivare، Passato Prossimo"},
  {it:"suo fratello",ar:"أخوها",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"dall'",ar:"من الـ",note:null},
  {it:"aeroporto",ar:"المطار",note:null}
 ], conj:{verb:"Arrivare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono arrivato/a"},
  {person:"Tu (أنت)",form:"Sei arrivato/a"},
  {person:"Lui (هو)",form:"È arrivato"},
  {person:"Lei (هي)",form:"È arrivata"},
  {person:"Noi (احنا)",form:"Siamo arrivati/e"},
  {person:"Voi (انتم)",form:"Siete arrivati/e"},
  {person:"Loro (هم)",form:"Sono arrivati/e"}]}},

{it:"Noi siamo usciti di casa mentre parlavamo al telefono", ar:"احنا خرجنا من البيت وكنا بنتكلم في التيليفون.", en:"We left home while we were talking on the phone.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"siamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"usciti",ar:"خرجنا",note:"Uscire، Passato Prossimo"},
  {it:"di casa",ar:"من البيت",note:null},
  {it:"mentre",ar:"وكنا",note:null},
  {it:"parlavamo",ar:"بنتكلم",note:"Parlare، Imperfetto"},
  {it:"al telefono",ar:"في التيليفون",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Uscire",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Sono uscito/a"},
  {person:"Tu (أنت)",form:"Sei uscito/a"},
  {person:"Lui (هو)",form:"È uscito"},
  {person:"Lei (هي)",form:"È uscita"},
  {person:"Noi (احنا)",form:"Siamo usciti/e"},
  {person:"Voi (انتم)",form:"Siete usciti/e"},
  {person:"Loro (هم)",form:"Sono usciti/e"}]}},

{it:"Noi parlavamo di lavoro quando è uscito il direttore dall'ufficio", ar:"احنا كنا بنتكلم عن الشغل لما المدير خرج من المكتب.", en:"We were talking about work when the manager left the office.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"parlavamo",ar:"كنا بنتكلم",note:"Parlare، Imperfetto"},
  {it:"di lavoro",ar:"عن الشغل",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"è",ar:"",note:"جزء من الفعل المساعد"},
  {it:"uscito",ar:"خرج",note:"Uscire، Passato Prossimo"},
  {it:"il direttore",ar:"المدير",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"dall'",ar:"من الـ",note:null},
  {it:"ufficio",ar:"المكتب",note:null}
 ], conj:{verb:"Uscire",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Sono uscito/a"},
  {person:"Tu (أنت)",form:"Sei uscito/a"},
  {person:"Lui (هو)",form:"È uscito"},
  {person:"Lei (هي)",form:"È uscita"},
  {person:"Noi (احنا)",form:"Siamo usciti/e"},
  {person:"Voi (انتم)",form:"Siete usciti/e"},
  {person:"Loro (هم)",form:"Sono usciti/e"}]}},

{it:"Avete letto i messaggi mentre telefonavate a un amico", ar:"انتوا قريتوا الرسايل وانتوا كنتوا بتتكلموا في التيليفون مع صاحبكوا.", en:"You (pl.) read the messages while you were on the phone with a friend.", pronoun:"Voi (انتم)",
 words:[
  {it:"Avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"letto",ar:"قريتوا",note:"Leggere، Passato Prossimo"},
  {it:"i messaggi",ar:"الرسايل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وانتوا",note:null},
  {it:"telefonavate",ar:"كنتوا بتتكلموا",note:"Telefonare، Imperfetto"},
  {it:"a",ar:"مع",note:null},
  {it:"un amico",ar:"صاحبكوا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Leggere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho letto"},
  {person:"Tu (أنت)",form:"Hai letto"},
  {person:"Lui (هو)",form:"Ha letto"},
  {person:"Lei (هي)",form:"Ha letto"},
  {person:"Noi (احنا)",form:"Abbiamo letto"},
  {person:"Voi (انتم)",form:"Avete letto"},
  {person:"Loro (هم)",form:"Hanno letto"}]}},

{it:"Leggevate il giornale quando avete telefonato all'ufficio", ar:"كنتوا بتقروا الجورنال لما اتصلتوا بالمكتب.", en:"You (pl.) were reading the newspaper when you called the office.", pronoun:"Voi (انتم)",
 words:[
  {it:"Leggevate",ar:"كنتوا بتقروا",note:"Leggere، Imperfetto"},
  {it:"il giornale",ar:"الجورنال",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"telefonato",ar:"اتصلتوا",note:"Telefonare، Passato Prossimo"},
  {it:"all'",ar:"بـ",note:null},
  {it:"ufficio",ar:"المكتب",note:null}
 ], conj:{verb:"Telefonare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho telefonato"},
  {person:"Tu (أنت)",form:"Hai telefonato"},
  {person:"Lui (هو)",form:"Ha telefonato"},
  {person:"Lei (هي)",form:"Ha telefonato"},
  {person:"Noi (احنا)",form:"Abbiamo telefonato"},
  {person:"Voi (انتم)",form:"Avete telefonato"},
  {person:"Loro (هم)",form:"Hanno telefonato"}]}},

{it:"Loro hanno camminato per un'ora mentre pensavano al futuro", ar:"هم مشيوا لمدة ساعة وهم كانوا بيفكروا في المستقبل.", en:"They walked for an hour while they were thinking about the future.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"camminato",ar:"مشيوا",note:"Camminare، Passato Prossimo"},
  {it:"per un'ora",ar:"لمدة ساعة",note:null},
  {it:"mentre",ar:"وهم",note:null},
  {it:"pensavano",ar:"كانوا بيفكروا",note:"Pensare، Imperfetto"},
  {it:"al futuro",ar:"في المستقبل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Camminare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho camminato"},
  {person:"Tu (أنت)",form:"Hai camminato"},
  {person:"Lui (هو)",form:"Ha camminato"},
  {person:"Lei (هي)",form:"Ha camminato"},
  {person:"Noi (احنا)",form:"Abbiamo camminato"},
  {person:"Voi (انتم)",form:"Avete camminato"},
  {person:"Loro (هم)",form:"Hanno camminato"}]}},

{it:"Loro pensavano al problema quando hanno camminato fino al parco", ar:"هم كانوا بيفكروا في المشكلة لما مشيوا لحد الحديقة.", en:"They were thinking about the problem when they walked to the park.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"pensavano",ar:"كانوا بيفكروا",note:"Pensare، Imperfetto"},
  {it:"al problema",ar:"في المشكلة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"camminato",ar:"مشيوا",note:"Camminare، Passato Prossimo"},
  {it:"fino al parco",ar:"لحد الحديقة",note:null}
 ], conj:{verb:"Camminare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho camminato"},
  {person:"Tu (أنت)",form:"Hai camminato"},
  {person:"Lui (هو)",form:"Ha camminato"},
  {person:"Lei (هي)",form:"Ha camminato"},
  {person:"Noi (احنا)",form:"Abbiamo camminato"},
  {person:"Voi (انتم)",form:"Avete camminato"},
  {person:"Loro (هم)",form:"Hanno camminato"}]}},

{it:"Ho comprato il pane mentre parlavo con il panettiere", ar:"شريت العيش وأنا كنت باتكلم مع الخباز.", en:"I bought the bread while I was talking with the baker.", pronoun:"Io (أنا)",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"comprato",ar:"شريت",note:"Comprare، Passato Prossimo"},
  {it:"il pane",ar:"العيش",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وأنا",note:null},
  {it:"parlavo",ar:"كنت باتكلم",note:"Parlare، Imperfetto"},
  {it:"con",ar:"مع",note:null},
  {it:"il panettiere",ar:"الخباز",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Comprare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho comprato"},
  {person:"Tu (أنت)",form:"Hai comprato"},
  {person:"Lui (هو)",form:"Ha comprato"},
  {person:"Lei (هي)",form:"Ha comprato"},
  {person:"Noi (احنا)",form:"Abbiamo comprato"},
  {person:"Voi (انتم)",form:"Avete comprato"},
  {person:"Loro (هم)",form:"Hanno comprato"}]}},

{it:"Parlavo con il vicino quando ho comprato il giornale", ar:"كنت باتكلم مع الجار لما شريت الجورنال.", en:"I was talking with the neighbor when I bought the newspaper.", pronoun:"Io (أنا)",
 words:[
  {it:"Parlavo",ar:"كنت باتكلم",note:"Parlare، Imperfetto"},
  {it:"con",ar:"مع",note:null},
  {it:"il vicino",ar:"الجار",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"comprato",ar:"شريت",note:"Comprare، Passato Prossimo"},
  {it:"il giornale",ar:"الجورنال",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Comprare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho comprato"},
  {person:"Tu (أنت)",form:"Hai comprato"},
  {person:"Lui (هو)",form:"Ha comprato"},
  {person:"Lei (هي)",form:"Ha comprato"},
  {person:"Noi (احنا)",form:"Abbiamo comprato"},
  {person:"Voi (انتم)",form:"Avete comprato"},
  {person:"Loro (هم)",form:"Hanno comprato"}]}},

{it:"Hai finito i compiti mentre guardavo la partita", ar:"خلصت الواجب وأنا كنت باتفرج على الماتش.", en:"You finished your homework while I was watching the match.", pronoun:"Tu (أنت)",
 words:[
  {it:"Hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"finito",ar:"خلصت",note:"Finire، Passato Prossimo"},
  {it:"i compiti",ar:"الواجب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وأنا",note:null},
  {it:"guardavo",ar:"كنت باتفرج",note:"Guardare، Imperfetto"},
  {it:"la partita",ar:"الماتش",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Finire",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho finito"},
  {person:"Tu (أنت)",form:"Hai finito"},
  {person:"Lui (هو)",form:"Ha finito"},
  {person:"Lei (هي)",form:"Ha finito"},
  {person:"Noi (احنا)",form:"Abbiamo finito"},
  {person:"Voi (انتم)",form:"Avete finito"},
  {person:"Loro (هم)",form:"Hanno finito"}]}},

{it:"Guardavi la partita quando ho finito di cucinare", ar:"كنت بتتفرج على الماتش لما خلصت الطبيخ.", en:"You were watching the match when I finished cooking.", pronoun:"Tu (أنت)",
 words:[
  {it:"Guardavi",ar:"كنت بتتفرج",note:"Guardare، Imperfetto"},
  {it:"la partita",ar:"الماتش",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"finito",ar:"خلصت",note:"Finire، Passato Prossimo"},
  {it:"di",ar:"",note:null},
  {it:"cucinare",ar:"الطبيخ",note:null}
 ], conj:{verb:"Finire",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho finito"},
  {person:"Tu (أنت)",form:"Hai finito"},
  {person:"Lui (هو)",form:"Ha finito"},
  {person:"Lei (هي)",form:"Ha finito"},
  {person:"Noi (احنا)",form:"Abbiamo finito"},
  {person:"Voi (انتم)",form:"Avete finito"},
  {person:"Loro (هم)",form:"Hanno finito"}]}},

{it:"Lui ha visto un incidente mentre faceva la spesa", ar:"هو شاف حادثة وهو كان بيعمل التسوق.", en:"He saw an accident while he was doing the shopping.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"visto",ar:"شاف",note:"Vedere، Passato Prossimo"},
  {it:"un incidente",ar:"حادثة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهو",note:null},
  {it:"faceva",ar:"كان بيعمل",note:"Fare، Imperfetto"},
  {it:"la spesa",ar:"التسوق",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Vedere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho visto"},
  {person:"Tu (أنت)",form:"Hai visto"},
  {person:"Lui (هو)",form:"Ha visto"},
  {person:"Lei (هي)",form:"Ha visto"},
  {person:"Noi (احنا)",form:"Abbiamo visto"},
  {person:"Voi (انتم)",form:"Avete visto"},
  {person:"Loro (هم)",form:"Hanno visto"}]}},

{it:"Lui faceva la spesa quando ha visto il suo amico", ar:"هو كان بيعمل التسوق لما شاف صاحبه.", en:"He was doing the shopping when he saw his friend.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"faceva",ar:"كان بيعمل",note:"Fare، Imperfetto"},
  {it:"la spesa",ar:"التسوق",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"visto",ar:"شاف",note:"Vedere، Passato Prossimo"},
  {it:"il suo amico",ar:"صاحبه",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Vedere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho visto"},
  {person:"Tu (أنت)",form:"Hai visto"},
  {person:"Lui (هو)",form:"Ha visto"},
  {person:"Lei (هي)",form:"Ha visto"},
  {person:"Noi (احنا)",form:"Abbiamo visto"},
  {person:"Voi (انتم)",form:"Avete visto"},
  {person:"Loro (هم)",form:"Hanno visto"}]}},

{it:"Lei ha scritto una lettera mentre pensava a lui", ar:"هي كتبت جواب وهي كانت بتفكر فيه.", en:"She wrote a letter while she was thinking about him.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"scritto",ar:"كتبت",note:"Scrivere، Passato Prossimo"},
  {it:"una lettera",ar:"جواب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهي",note:null},
  {it:"pensava",ar:"كانت بتفكر",note:"Pensare، Imperfetto"},
  {it:"a",ar:"فيه",note:null},
  {it:"lui",ar:"",note:null}
 ], conj:{verb:"Scrivere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho scritto"},
  {person:"Tu (أنت)",form:"Hai scritto"},
  {person:"Lui (هو)",form:"Ha scritto"},
  {person:"Lei (هي)",form:"Ha scritto"},
  {person:"Noi (احنا)",form:"Abbiamo scritto"},
  {person:"Voi (انتم)",form:"Avete scritto"},
  {person:"Loro (هم)",form:"Hanno scritto"}]}},

{it:"Lei pensava al viaggio quando ha scritto nel diario", ar:"هي كانت بتفكر في الرحلة لما كتبت في اليومية.", en:"She was thinking about the trip when she wrote in her diary.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"pensava",ar:"كانت بتفكر",note:"Pensare، Imperfetto"},
  {it:"al viaggio",ar:"في الرحلة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"scritto",ar:"كتبت",note:"Scrivere، Passato Prossimo"},
  {it:"nel",ar:"في",note:null},
  {it:"diario",ar:"اليومية",note:null}
 ], conj:{verb:"Scrivere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho scritto"},
  {person:"Tu (أنت)",form:"Hai scritto"},
  {person:"Lui (هو)",form:"Ha scritto"},
  {person:"Lei (هي)",form:"Ha scritto"},
  {person:"Noi (احنا)",form:"Abbiamo scritto"},
  {person:"Voi (انتم)",form:"Avete scritto"},
  {person:"Loro (هم)",form:"Hanno scritto"}]}},

{it:"Noi siamo andati in ufficio mentre lavoravano gli altri da casa", ar:"احنا رحنا المكتب والباقيين كانوا شغالين من البيت.", en:"We went to the office while the others were working from home.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"siamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"andati",ar:"رحنا",note:"Andare، Passato Prossimo"},
  {it:"in",ar:"",note:null},
  {it:"ufficio",ar:"المكتب",note:null},
  {it:"mentre",ar:"والباقيين",note:null},
  {it:"lavoravano",ar:"كانوا شغالين",note:"Lavorare، Imperfetto"},
  {it:"gli altri",ar:"",note:null},
  {it:"da casa",ar:"من البيت",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Andare",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Sono andato/a"},
  {person:"Tu (أنت)",form:"Sei andato/a"},
  {person:"Lui (هو)",form:"È andato"},
  {person:"Lei (هي)",form:"È andata"},
  {person:"Noi (احنا)",form:"Siamo andati/e"},
  {person:"Voi (انتم)",form:"Siete andati/e"},
  {person:"Loro (هم)",form:"Sono andati/e"}]}},

{it:"Noi lavoravamo insieme quando sono andati via i colleghi", ar:"احنا كنا شغالين مع بعض لما الزمايل مشيوا.", en:"We were working together when the colleagues left.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"lavoravamo",ar:"كنا شغالين",note:"Lavorare، Imperfetto"},
  {it:"insieme",ar:"مع بعض",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"andati",ar:"مشيوا",note:"Andare، Passato Prossimo"},
  {it:"via",ar:"",note:null},
  {it:"i colleghi",ar:"الزمايل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Andare",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Sono andato/a"},
  {person:"Tu (أنت)",form:"Sei andato/a"},
  {person:"Lui (هو)",form:"È andato"},
  {person:"Lei (هي)",form:"È andata"},
  {person:"Noi (احنا)",form:"Siamo andati/e"},
  {person:"Voi (انتم)",form:"Siete andati/e"},
  {person:"Loro (هم)",form:"Sono andati/e"}]}},

{it:"Voi siete tornati tardi mentre il bambino piangeva a casa", ar:"انتوا رجعتوا متأخر والطفل كان بيعيط في البيت.", en:"You (pl.) came back late while the child was crying at home.", pronoun:"Voi (انتم)",
 words:[
  {it:"Voi",ar:"انتوا",note:null},
  {it:"siete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"tornati",ar:"رجعتوا",note:"Tornare، Passato Prossimo"},
  {it:"tardi",ar:"متأخر",note:null},
  {it:"mentre",ar:"والطفل",note:null},
  {it:"il bambino",ar:"الطفل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"piangeva",ar:"كان بيعيط",note:"Piangere، Imperfetto"},
  {it:"a casa",ar:"في البيت",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Tornare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono tornato/a"},
  {person:"Tu (أنت)",form:"Sei tornato/a"},
  {person:"Lui (هو)",form:"È tornato"},
  {person:"Lei (هي)",form:"È tornata"},
  {person:"Noi (احنا)",form:"Siamo tornati/e"},
  {person:"Voi (انتم)",form:"Siete tornati/e"},
  {person:"Loro (هم)",form:"Sono tornati/e"}]}},

{it:"Voi piangevate di gioia quando è tornato il papà dal viaggio", ar:"انتوا كنتوا بتعيطوا من الفرحة لما بابا رجع من الرحلة.", en:"You (pl.) were crying with joy when dad came back from the trip.", pronoun:"Voi (انتم)",
 words:[
  {it:"Voi",ar:"انتوا",note:null},
  {it:"piangevate",ar:"كنتوا بتعيطوا",note:"Piangere، Imperfetto"},
  {it:"di gioia",ar:"من الفرحة",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"è",ar:"",note:"جزء من الفعل المساعد"},
  {it:"tornato",ar:"رجع",note:"Tornare، Passato Prossimo"},
  {it:"il papà",ar:"بابا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"dal viaggio",ar:"من الرحلة",note:null}
 ], conj:{verb:"Tornare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono tornato/a"},
  {person:"Tu (أنت)",form:"Sei tornato/a"},
  {person:"Lui (هو)",form:"È tornato"},
  {person:"Lei (هي)",form:"È tornata"},
  {person:"Noi (احنا)",form:"Siamo tornati/e"},
  {person:"Voi (انتم)",form:"Siete tornati/e"},
  {person:"Loro (هم)",form:"Sono tornati/e"}]}},

{it:"Loro hanno giocato a calcio mentre i bambini ridevano nel parco", ar:"هم لعبوا كورة والأطفال كانوا بيضحكوا في الحديقة.", en:"They played football while the children were laughing in the park.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"giocato",ar:"لعبوا",note:"Giocare، Passato Prossimo"},
  {it:"a calcio",ar:"كورة",note:null},
  {it:"mentre",ar:"والأطفال",note:null},
  {it:"i bambini",ar:"الأطفال",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"ridevano",ar:"كانوا بيضحكوا",note:"Ridere، Imperfetto"},
  {it:"nel parco",ar:"في الحديقة",note:null}
 ], conj:{verb:"Giocare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho giocato"},
  {person:"Tu (أنت)",form:"Hai giocato"},
  {person:"Lui (هو)",form:"Ha giocato"},
  {person:"Lei (هي)",form:"Ha giocato"},
  {person:"Noi (احنا)",form:"Abbiamo giocato"},
  {person:"Voi (انتم)",form:"Avete giocato"},
  {person:"Loro (هم)",form:"Hanno giocato"}]}},

{it:"Loro ridevano forte quando hanno giocato a carte insieme", ar:"هم كانوا بيضحكوا بصوت عالي لما لعبوا ورق مع بعض.", en:"They were laughing loudly when they played cards together.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"ridevano",ar:"كانوا بيضحكوا",note:"Ridere، Imperfetto"},
  {it:"forte",ar:"بصوت عالي",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"giocato",ar:"لعبوا",note:"Giocare، Passato Prossimo"},
  {it:"a carte",ar:"ورق",note:null},
  {it:"insieme",ar:"مع بعض",note:null}
 ], conj:{verb:"Giocare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho giocato"},
  {person:"Tu (أنت)",form:"Hai giocato"},
  {person:"Lui (هو)",form:"Ha giocato"},
  {person:"Lei (هي)",form:"Ha giocato"},
  {person:"Noi (احنا)",form:"Abbiamo giocato"},
  {person:"Voi (انتم)",form:"Avete giocato"},
  {person:"Loro (هم)",form:"Hanno giocato"}]}},

{it:"Sono partito presto mentre gli altri aspettavano il taxi", ar:"أنا مشيت بدري والباقيين كانوا مستنيين التاكسي.", en:"I left early while the others were waiting for the taxi.", pronoun:"Io (أنا)",
 words:[
  {it:"Sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"partito",ar:"مشيت",note:"Partire، Passato Prossimo"},
  {it:"presto",ar:"بدري",note:null},
  {it:"mentre",ar:"والباقيين",note:null},
  {it:"gli altri",ar:"الباقيين",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"aspettavano",ar:"كانوا مستنيين",note:"Aspettare، Imperfetto"},
  {it:"il taxi",ar:"التاكسي",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Partire",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono partito/a"},
  {person:"Tu (أنت)",form:"Sei partito/a"},
  {person:"Lui (هو)",form:"È partito"},
  {person:"Lei (هي)",form:"È partita"},
  {person:"Noi (احنا)",form:"Siamo partiti/e"},
  {person:"Voi (انتم)",form:"Siete partiti/e"},
  {person:"Loro (هم)",form:"Sono partiti/e"}]}},

{it:"Aspettavo il treno quando è partito il mio amico in macchina", ar:"كنت مستني القطر لما صاحبي مشى بالعربية.", en:"I was waiting for the train when my friend left by car.", pronoun:"Io (أنا)",
 words:[
  {it:"Aspettavo",ar:"كنت مستني",note:"Aspettare، Imperfetto"},
  {it:"il treno",ar:"القطر",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"è",ar:"",note:"جزء من الفعل المساعد"},
  {it:"partito",ar:"مشى",note:"Partire، Passato Prossimo"},
  {it:"il mio amico",ar:"صاحبي",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"in macchina",ar:"بالعربية",note:null}
 ], conj:{verb:"Partire",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono partito/a"},
  {person:"Tu (أنت)",form:"Sei partito/a"},
  {person:"Lui (هو)",form:"È partito"},
  {person:"Lei (هي)",form:"È partita"},
  {person:"Noi (احنا)",form:"Siamo partiti/e"},
  {person:"Voi (انتم)",form:"Siete partiti/e"},
  {person:"Loro (هم)",form:"Sono partiti/e"}]}},

{it:"Hai incontrato un vecchio amico mentre camminavi in centro", ar:"قابلت صاحب قديم وانت كنت بتمشي في وسط البلد.", en:"You met an old friend while you were walking downtown.", pronoun:"Tu (أنت)",
 words:[
  {it:"Hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"incontrato",ar:"قابلت",note:"Incontrare، Passato Prossimo"},
  {it:"un vecchio amico",ar:"صاحب قديم",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وانت",note:null},
  {it:"camminavi",ar:"كنت بتمشي",note:"Camminare، Imperfetto"},
  {it:"in centro",ar:"في وسط البلد",note:null}
 ], conj:{verb:"Incontrare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho incontrato"},
  {person:"Tu (أنت)",form:"Hai incontrato"},
  {person:"Lui (هو)",form:"Ha incontrato"},
  {person:"Lei (هي)",form:"Ha incontrato"},
  {person:"Noi (احنا)",form:"Abbiamo incontrato"},
  {person:"Voi (انتم)",form:"Avete incontrato"},
  {person:"Loro (هم)",form:"Hanno incontrato"}]}},

{it:"Camminavi lentamente quando hai incontrato il tuo professore", ar:"كنت بتمشي ببطء لما قابلت أستاذك.", en:"You were walking slowly when you met your teacher.", pronoun:"Tu (أنت)",
 words:[
  {it:"Camminavi",ar:"كنت بتمشي",note:"Camminare، Imperfetto"},
  {it:"lentamente",ar:"ببطء",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"incontrato",ar:"قابلت",note:"Incontrare، Passato Prossimo"},
  {it:"il tuo professore",ar:"أستاذك",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Incontrare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho incontrato"},
  {person:"Tu (أنت)",form:"Hai incontrato"},
  {person:"Lui (هو)",form:"Ha incontrato"},
  {person:"Lei (هي)",form:"Ha incontrato"},
  {person:"Noi (احنا)",form:"Abbiamo incontrato"},
  {person:"Voi (انتم)",form:"Avete incontrato"},
  {person:"Loro (هم)",form:"Hanno incontrato"}]}},

{it:"Lui ha preso l'autobus mentre gli altri dormivano ancora", ar:"هو أخد الأتوبيس والباقيين كانوا لسة نايمين.", en:"He took the bus while the others were still sleeping.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"preso",ar:"أخد",note:"Prendere، Passato Prossimo"},
  {it:"l'autobus",ar:"الأتوبيس",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"والباقيين",note:null},
  {it:"gli altri",ar:"الباقيين",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"dormivano",ar:"كانوا نايمين",note:"Dormire، Imperfetto"},
  {it:"ancora",ar:"لسة",note:null}
 ], conj:{verb:"Prendere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho preso"},
  {person:"Tu (أنت)",form:"Hai preso"},
  {person:"Lui (هو)",form:"Ha preso"},
  {person:"Lei (هي)",form:"Ha preso"},
  {person:"Noi (احنا)",form:"Abbiamo preso"},
  {person:"Voi (انتم)",form:"Avete preso"},
  {person:"Loro (هم)",form:"Hanno preso"}]}},

{it:"Lui dormiva sul divano quando ha preso una telefonata importante", ar:"هو كان نايم على الكنبة لما رد على مكالمة مهمة.", en:"He was sleeping on the couch when he took an important call.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"dormiva",ar:"كان نايم",note:"Dormire، Imperfetto"},
  {it:"sul divano",ar:"على الكنبة",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"preso",ar:"رد على",note:"Prendere، Passato Prossimo"},
  {it:"una telefonata",ar:"مكالمة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"importante",ar:"مهمة",note:null}
 ], conj:{verb:"Prendere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho preso"},
  {person:"Tu (أنت)",form:"Hai preso"},
  {person:"Lui (هو)",form:"Ha preso"},
  {person:"Lei (هي)",form:"Ha preso"},
  {person:"Noi (احنا)",form:"Abbiamo preso"},
  {person:"Voi (انتم)",form:"Avete preso"},
  {person:"Loro (هم)",form:"Hanno preso"}]}},

{it:"Lei ha venduto la macchina mentre cercava un lavoro nuovo", ar:"هي باعت العربية وهي كانت بتدور على شغل جديد.", en:"She sold the car while she was looking for a new job.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"venduto",ar:"باعت",note:"Vendere، Passato Prossimo"},
  {it:"la macchina",ar:"العربية",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهي",note:null},
  {it:"cercava",ar:"كانت بتدور",note:"Cercare، Imperfetto"},
  {it:"un lavoro",ar:"شغل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"nuovo",ar:"جديد",note:null}
 ], conj:{verb:"Vendere",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho venduto"},
  {person:"Tu (أنت)",form:"Hai venduto"},
  {person:"Lui (هو)",form:"Ha venduto"},
  {person:"Lei (هي)",form:"Ha venduto"},
  {person:"Noi (احنا)",form:"Abbiamo venduto"},
  {person:"Voi (انتم)",form:"Avete venduto"},
  {person:"Loro (هم)",form:"Hanno venduto"}]}},

{it:"Lei cercava le chiavi quando ha venduto il vecchio divano", ar:"هي كانت بتدور على المفاتيح لما باعت الكنبة القديمة.", en:"She was looking for the keys when she sold the old couch.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"cercava",ar:"كانت بتدور",note:"Cercare، Imperfetto"},
  {it:"le chiavi",ar:"المفاتيح",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"venduto",ar:"باعت",note:"Vendere، Passato Prossimo"},
  {it:"il vecchio divano",ar:"الكنبة القديمة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Vendere",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho venduto"},
  {person:"Tu (أنت)",form:"Hai venduto"},
  {person:"Lui (هو)",form:"Ha venduto"},
  {person:"Lei (هي)",form:"Ha venduto"},
  {person:"Noi (احنا)",form:"Abbiamo venduto"},
  {person:"Voi (انتم)",form:"Avete venduto"},
  {person:"Loro (هم)",form:"Hanno venduto"}]}},

{it:"Noi abbiamo pulito la casa mentre ascoltavamo la musica", ar:"احنا نضفنا البيت وكنا سامعين موسيقى.", en:"We cleaned the house while we were listening to music.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"abbiamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"pulito",ar:"نضفنا",note:"Pulire، Passato Prossimo"},
  {it:"la casa",ar:"البيت",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وكنا",note:null},
  {it:"ascoltavamo",ar:"سامعين",note:"Ascoltare، Imperfetto"},
  {it:"la musica",ar:"موسيقى",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Pulire",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho pulito"},
  {person:"Tu (أنت)",form:"Hai pulito"},
  {person:"Lui (هو)",form:"Ha pulito"},
  {person:"Lei (هي)",form:"Ha pulito"},
  {person:"Noi (احنا)",form:"Abbiamo pulito"},
  {person:"Voi (انتم)",form:"Avete pulito"},
  {person:"Loro (هم)",form:"Hanno pulito"}]}},

{it:"Noi ascoltavamo le notizie quando abbiamo pulito la cucina", ar:"احنا كنا سامعين الأخبار لما نضفنا المطبخ.", en:"We were listening to the news when we cleaned the kitchen.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"ascoltavamo",ar:"كنا سامعين",note:"Ascoltare، Imperfetto"},
  {it:"le notizie",ar:"الأخبار",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"abbiamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"pulito",ar:"نضفنا",note:"Pulire، Passato Prossimo"},
  {it:"la cucina",ar:"المطبخ",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Pulire",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho pulito"},
  {person:"Tu (أنت)",form:"Hai pulito"},
  {person:"Lui (هو)",form:"Ha pulito"},
  {person:"Lei (هي)",form:"Ha pulito"},
  {person:"Noi (احنا)",form:"Abbiamo pulito"},
  {person:"Voi (انتم)",form:"Avete pulito"},
  {person:"Loro (هم)",form:"Hanno pulito"}]}},

{it:"Avete chiamato il ristorante mentre mangiavate a casa", ar:"اتصلتوا بالمطعم وانتوا كنتوا بتاكلوا في البيت.", en:"You (pl.) called the restaurant while you were eating at home.", pronoun:"Voi (انتم)",
 words:[
  {it:"Avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"chiamato",ar:"اتصلتوا",note:"Chiamare، Passato Prossimo"},
  {it:"il ristorante",ar:"المطعم",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وانتوا",note:null},
  {it:"mangiavate",ar:"كنتوا بتاكلوا",note:"Mangiare، Imperfetto"},
  {it:"a casa",ar:"في البيت",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Chiamare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho chiamato"},
  {person:"Tu (أنت)",form:"Hai chiamato"},
  {person:"Lui (هو)",form:"Ha chiamato"},
  {person:"Lei (هي)",form:"Ha chiamato"},
  {person:"Noi (احنا)",form:"Abbiamo chiamato"},
  {person:"Voi (انتم)",form:"Avete chiamato"},
  {person:"Loro (هم)",form:"Hanno chiamato"}]}},

{it:"Mangiavate la pizza quando avete chiamato i vostri genitori", ar:"كنتوا بتاكلوا البيتزا لما اتصلتوا باهلكوا.", en:"You (pl.) were eating pizza when you called your parents.", pronoun:"Voi (انتم)",
 words:[
  {it:"Mangiavate",ar:"كنتوا بتاكلوا",note:"Mangiare، Imperfetto"},
  {it:"la pizza",ar:"البيتزا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"chiamato",ar:"اتصلتوا",note:"Chiamare، Passato Prossimo"},
  {it:"i vostri genitori",ar:"أهلكوا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Chiamare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho chiamato"},
  {person:"Tu (أنت)",form:"Hai chiamato"},
  {person:"Lui (هو)",form:"Ha chiamato"},
  {person:"Lei (هي)",form:"Ha chiamato"},
  {person:"Noi (احنا)",form:"Abbiamo chiamato"},
  {person:"Voi (انتم)",form:"Avete chiamato"},
  {person:"Loro (هم)",form:"Hanno chiamato"}]}},

{it:"Loro hanno creduto alla storia mentre parlavano con il testimone", ar:"هم صدقوا القصة وهم كانوا بيتكلموا مع الشاهد.", en:"They believed the story while they were talking with the witness.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"creduto",ar:"صدقوا",note:"Credere، Passato Prossimo"},
  {it:"alla storia",ar:"القصة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهم",note:null},
  {it:"parlavano",ar:"كانوا بيتكلموا",note:"Parlare، Imperfetto"},
  {it:"con",ar:"مع",note:null},
  {it:"il testimone",ar:"الشاهد",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Credere",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho creduto"},
  {person:"Tu (أنت)",form:"Hai creduto"},
  {person:"Lui (هو)",form:"Ha creduto"},
  {person:"Lei (هي)",form:"Ha creduto"},
  {person:"Noi (احنا)",form:"Abbiamo creduto"},
  {person:"Voi (انتم)",form:"Avete creduto"},
  {person:"Loro (هم)",form:"Hanno creduto"}]}},

{it:"Loro parlavano del film quando hanno creduto a una voce falsa", ar:"هم كانوا بيتكلموا عن الفيلم لما صدقوا شائعة كدابة.", en:"They were talking about the movie when they believed a false rumor.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"parlavano",ar:"كانوا بيتكلموا",note:"Parlare، Imperfetto"},
  {it:"del film",ar:"عن الفيلم",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"creduto",ar:"صدقوا",note:"Credere، Passato Prossimo"},
  {it:"a una voce",ar:"شائعة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"falsa",ar:"كدابة",note:null}
 ], conj:{verb:"Credere",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho creduto"},
  {person:"Tu (أنت)",form:"Hai creduto"},
  {person:"Lui (هو)",form:"Ha creduto"},
  {person:"Lei (هي)",form:"Ha creduto"},
  {person:"Noi (احنا)",form:"Abbiamo creduto"},
  {person:"Voi (انتم)",form:"Avete creduto"},
  {person:"Loro (هم)",form:"Hanno creduto"}]}},

{it:"Sono restato a letto mentre sognavo un viaggio lontano", ar:"أنا فضلت في السرير وأنا كنت باحلم برحلة بعيدة.", en:"I stayed in bed while I was dreaming of a faraway trip.", pronoun:"Io (أنا)",
 words:[
  {it:"Sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"restato",ar:"فضلت",note:"Restare، Passato Prossimo"},
  {it:"a letto",ar:"في السرير",note:null},
  {it:"mentre",ar:"وأنا",note:null},
  {it:"sognavo",ar:"كنت باحلم",note:"Sognare، Imperfetto"},
  {it:"un viaggio",ar:"برحلة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"lontano",ar:"بعيدة",note:null}
 ], conj:{verb:"Restare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono restato/a"},
  {person:"Tu (أنت)",form:"Sei restato/a"},
  {person:"Lui (هو)",form:"È restato"},
  {person:"Lei (هي)",form:"È restata"},
  {person:"Noi (احنا)",form:"Siamo restati/e"},
  {person:"Voi (انتم)",form:"Siete restati/e"},
  {person:"Loro (هم)",form:"Sono restati/e"}]}},

{it:"Sognavo la mia città quando sono restato bloccato in aeroporto", ar:"كنت باحلم بمدينتي لما فضلت متعطل في المطار.", en:"I was dreaming of my city when I got stuck at the airport.", pronoun:"Io (أنا)",
 words:[
  {it:"Sognavo",ar:"كنت باحلم",note:"Sognare، Imperfetto"},
  {it:"la mia città",ar:"بمدينتي",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"restato",ar:"فضلت",note:"Restare، Passato Prossimo"},
  {it:"bloccato",ar:"متعطل",note:null},
  {it:"in aeroporto",ar:"في المطار",note:null}
 ], conj:{verb:"Restare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono restato/a"},
  {person:"Tu (أنت)",form:"Sei restato/a"},
  {person:"Lui (هو)",form:"È restato"},
  {person:"Lei (هي)",form:"È restata"},
  {person:"Noi (احنا)",form:"Siamo restati/e"},
  {person:"Voi (انتم)",form:"Siete restati/e"},
  {person:"Loro (هم)",form:"Sono restati/e"}]}},

{it:"Hai portato l'ombrello mentre pensavi alla pioggia", ar:"جبت الشمسية وانت كنت بتفكر في المطر.", en:"You brought the umbrella while you were thinking about the rain.", pronoun:"Tu (أنت)",
 words:[
  {it:"Hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"portato",ar:"جبت",note:"Portare، Passato Prossimo"},
  {it:"l'ombrello",ar:"الشمسية",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وانت",note:null},
  {it:"pensavi",ar:"كنت بتفكر",note:"Pensare، Imperfetto"},
  {it:"alla pioggia",ar:"في المطر",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Portare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho portato"},
  {person:"Tu (أنت)",form:"Hai portato"},
  {person:"Lui (هو)",form:"Ha portato"},
  {person:"Lei (هي)",form:"Ha portato"},
  {person:"Noi (احنا)",form:"Abbiamo portato"},
  {person:"Voi (انتم)",form:"Avete portato"},
  {person:"Loro (هم)",form:"Hanno portato"}]}},

{it:"Pensavi al lavoro quando hai portato i bambini a scuola", ar:"كنت بتفكر في الشغل لما وديت الأطفال المدرسة.", en:"You were thinking about work when you took the kids to school.", pronoun:"Tu (أنت)",
 words:[
  {it:"Pensavi",ar:"كنت بتفكر",note:"Pensare، Imperfetto"},
  {it:"al lavoro",ar:"في الشغل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"portato",ar:"وديت",note:"Portare، Passato Prossimo"},
  {it:"i bambini",ar:"الأطفال",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"a scuola",ar:"المدرسة",note:null}
 ], conj:{verb:"Portare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho portato"},
  {person:"Tu (أنت)",form:"Hai portato"},
  {person:"Lui (هو)",form:"Ha portato"},
  {person:"Lei (هي)",form:"Ha portato"},
  {person:"Noi (احنا)",form:"Abbiamo portato"},
  {person:"Voi (انتم)",form:"Avete portato"},
  {person:"Loro (هم)",form:"Hanno portato"}]}},

{it:"Lui ha aiutato il vicino mentre aspettava l'autobus", ar:"هو ساعد الجار وهو كان مستني الأتوبيس.", en:"He helped the neighbor while he was waiting for the bus.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"aiutato",ar:"ساعد",note:"Aiutare، Passato Prossimo"},
  {it:"il vicino",ar:"الجار",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهو",note:null},
  {it:"aspettava",ar:"كان مستني",note:"Aspettare، Imperfetto"},
  {it:"l'autobus",ar:"الأتوبيس",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Aiutare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho aiutato"},
  {person:"Tu (أنت)",form:"Hai aiutato"},
  {person:"Lui (هو)",form:"Ha aiutato"},
  {person:"Lei (هي)",form:"Ha aiutato"},
  {person:"Noi (احنا)",form:"Abbiamo aiutato"},
  {person:"Voi (انتم)",form:"Avete aiutato"},
  {person:"Loro (هم)",form:"Hanno aiutato"}]}},

{it:"Lui aspettava il risultato quando ha aiutato un collega in difficoltà", ar:"هو كان مستني النتيجة لما ساعد زميل في مشكلة.", en:"He was waiting for the result when he helped a colleague in trouble.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"aspettava",ar:"كان مستني",note:"Aspettare، Imperfetto"},
  {it:"il risultato",ar:"النتيجة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"aiutato",ar:"ساعد",note:"Aiutare، Passato Prossimo"},
  {it:"un collega",ar:"زميل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"in difficoltà",ar:"في مشكلة",note:null}
 ], conj:{verb:"Aiutare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho aiutato"},
  {person:"Tu (أنت)",form:"Hai aiutato"},
  {person:"Lui (هو)",form:"Ha aiutato"},
  {person:"Lei (هي)",form:"Ha aiutato"},
  {person:"Noi (احنا)",form:"Abbiamo aiutato"},
  {person:"Voi (انتم)",form:"Avete aiutato"},
  {person:"Loro (هم)",form:"Hanno aiutato"}]}},

{it:"Lei ha bussato alla porta mentre noi dormivamo profondamente", ar:"هي طرقت الباب واحنا كنا نايمين بعميق.", en:"She knocked on the door while we were sleeping deeply.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"bussato",ar:"طرقت",note:"Bussare، Passato Prossimo"},
  {it:"alla porta",ar:"الباب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"واحنا",note:null},
  {it:"dormivamo",ar:"كنا نايمين",note:"Dormire، Imperfetto"},
  {it:"profondamente",ar:"بعميق",note:null}
 ], conj:{verb:"Bussare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho bussato"},
  {person:"Tu (أنت)",form:"Hai bussato"},
  {person:"Lui (هو)",form:"Ha bussato"},
  {person:"Lei (هي)",form:"Ha bussato"},
  {person:"Noi (احنا)",form:"Abbiamo bussato"},
  {person:"Voi (انتم)",form:"Avete bussato"},
  {person:"Loro (هم)",form:"Hanno bussato"}]}},

{it:"Lei dormiva tranquilla quando ha bussato il postino", ar:"هي كانت نايمة بهدوء لما طرق ساعي البريد.", en:"She was sleeping peacefully when the mailman knocked.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"dormiva",ar:"كانت نايمة",note:"Dormire، Imperfetto"},
  {it:"tranquilla",ar:"بهدوء",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"bussato",ar:"طرق",note:"Bussare، Passato Prossimo"},
  {it:"il postino",ar:"ساعي البريد",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Bussare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho bussato"},
  {person:"Tu (أنت)",form:"Hai bussato"},
  {person:"Lui (هو)",form:"Ha bussato"},
  {person:"Lei (هي)",form:"Ha bussato"},
  {person:"Noi (احنا)",form:"Abbiamo bussato"},
  {person:"Voi (انتم)",form:"Avete bussato"},
  {person:"Loro (هم)",form:"Hanno bussato"}]}},

{it:"Noi abbiamo promesso di tornare mentre speravamo in un futuro migliore", ar:"احنا وعدنا بالرجوع وكنا آملين في مستقبل أفضل.", en:"We promised to come back while we were hoping for a better future.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"abbiamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"promesso",ar:"وعدنا",note:"Promettere، Passato Prossimo"},
  {it:"di tornare",ar:"بالرجوع",note:null},
  {it:"mentre",ar:"وكنا",note:null},
  {it:"speravamo",ar:"آملين",note:"Sperare، Imperfetto"},
  {it:"in un futuro",ar:"في مستقبل",note:null},
  {it:"migliore",ar:"أفضل",note:null}
 ], conj:{verb:"Promettere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho promesso"},
  {person:"Tu (أنت)",form:"Hai promesso"},
  {person:"Lui (هو)",form:"Ha promesso"},
  {person:"Lei (هي)",form:"Ha promesso"},
  {person:"Noi (احنا)",form:"Abbiamo promesso"},
  {person:"Voi (انتم)",form:"Avete promesso"},
  {person:"Loro (هم)",form:"Hanno promesso"}]}},

{it:"Noi speravamo di vincere quando abbiamo promesso una festa a tutti", ar:"احنا كنا آملين الفوز لما وعدنا بحفلة للكل.", en:"We were hoping to win when we promised a party to everyone.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"speravamo",ar:"كنا آملين",note:"Sperare، Imperfetto"},
  {it:"di vincere",ar:"الفوز",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"abbiamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"promesso",ar:"وعدنا",note:"Promettere، Passato Prossimo"},
  {it:"una festa",ar:"حفلة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"a tutti",ar:"للكل",note:null}
 ], conj:{verb:"Promettere",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho promesso"},
  {person:"Tu (أنت)",form:"Hai promesso"},
  {person:"Lui (هو)",form:"Ha promesso"},
  {person:"Lei (هي)",form:"Ha promesso"},
  {person:"Noi (احنا)",form:"Abbiamo promesso"},
  {person:"Voi (انتم)",form:"Avete promesso"},
  {person:"Loro (هم)",form:"Hanno promesso"}]}},

{it:"Avete detto la verità mentre sapevate le conseguenze", ar:"قلتوا الحقيقة وانتوا كنتوا عارفين العواقب.", en:"You (pl.) told the truth while you knew the consequences.", pronoun:"Voi (انتم)",
 words:[
  {it:"Avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"detto",ar:"قلتوا",note:"Dire، Passato Prossimo"},
  {it:"la verità",ar:"الحقيقة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وانتوا",note:null},
  {it:"sapevate",ar:"كنتوا عارفين",note:"Sapere، Imperfetto"},
  {it:"le conseguenze",ar:"العواقب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Dire",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho detto"},
  {person:"Tu (أنت)",form:"Hai detto"},
  {person:"Lui (هو)",form:"Ha detto"},
  {person:"Lei (هي)",form:"Ha detto"},
  {person:"Noi (احنا)",form:"Abbiamo detto"},
  {person:"Voi (انتم)",form:"Avete detto"},
  {person:"Loro (هم)",form:"Hanno detto"}]}},

{it:"Sapevate la risposta quando avete detto il vostro parere", ar:"كنتوا عارفين الإجابة لما قلتوا رأيكوا.", en:"You (pl.) knew the answer when you said your opinion.", pronoun:"Voi (انتم)",
 words:[
  {it:"Sapevate",ar:"كنتوا عارفين",note:"Sapere، Imperfetto"},
  {it:"la risposta",ar:"الإجابة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"detto",ar:"قلتوا",note:"Dire، Passato Prossimo"},
  {it:"il vostro parere",ar:"رأيكوا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Dire",tense:"Passato Prossimo",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho detto"},
  {person:"Tu (أنت)",form:"Hai detto"},
  {person:"Lui (هو)",form:"Ha detto"},
  {person:"Lei (هي)",form:"Ha detto"},
  {person:"Noi (احنا)",form:"Abbiamo detto"},
  {person:"Voi (انتم)",form:"Avete detto"},
  {person:"Loro (هم)",form:"Hanno detto"}]}},

{it:"Loro hanno capito la lezione mentre il professore spiegava con calma", ar:"هم استوعبوا الدرس والمدرس كان بيشرح بهدوء.", en:"They understood the lesson while the teacher was explaining calmly.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"capito",ar:"استوعبوا",note:"Capire، Passato Prossimo"},
  {it:"la lezione",ar:"الدرس",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"والمدرس",note:null},
  {it:"il professore",ar:"المدرس",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"spiegava",ar:"كان بيشرح",note:"Spiegare، Imperfetto"},
  {it:"con calma",ar:"بهدوء",note:null}
 ], conj:{verb:"Capire",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho capito"},
  {person:"Tu (أنت)",form:"Hai capito"},
  {person:"Lui (هو)",form:"Ha capito"},
  {person:"Lei (هي)",form:"Ha capito"},
  {person:"Noi (احنا)",form:"Abbiamo capito"},
  {person:"Voi (انتم)",form:"Avete capito"},
  {person:"Loro (هم)",form:"Hanno capito"}]}},

{it:"Loro spiegavano il progetto quando hanno capito l'errore", ar:"هم كانوا بيشرحوا المشروع لما استوعبوا الخطأ.", en:"They were explaining the project when they understood the mistake.", pronoun:"Loro (هم)",
 words:[
  {it:"Loro",ar:"هم",note:null},
  {it:"spiegavano",ar:"كانوا بيشرحوا",note:"Spiegare، Imperfetto"},
  {it:"il progetto",ar:"المشروع",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"capito",ar:"استوعبوا",note:"Capire، Passato Prossimo"},
  {it:"l'errore",ar:"الخطأ",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Capire",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho capito"},
  {person:"Tu (أنت)",form:"Hai capito"},
  {person:"Lui (هو)",form:"Ha capito"},
  {person:"Lei (هي)",form:"Ha capito"},
  {person:"Noi (احنا)",form:"Abbiamo capito"},
  {person:"Voi (انتم)",form:"Avete capito"},
  {person:"Loro (هم)",form:"Hanno capito"}]}},

{it:"Ho pagato il conto mentre lavoravo ancora al progetto", ar:"دفعت الحساب وأنا كنت لسة باشتغل في المشروع.", en:"I paid the bill while I was still working on the project.", pronoun:"Io (أنا)",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"pagato",ar:"دفعت",note:"Pagare، Passato Prossimo"},
  {it:"il conto",ar:"الحساب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وأنا",note:null},
  {it:"lavoravo",ar:"كنت باشتغل",note:"Lavorare، Imperfetto"},
  {it:"ancora",ar:"لسة",note:null},
  {it:"al progetto",ar:"في المشروع",note:null}
 ], conj:{verb:"Pagare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho pagato"},
  {person:"Tu (أنت)",form:"Hai pagato"},
  {person:"Lui (هو)",form:"Ha pagato"},
  {person:"Lei (هي)",form:"Ha pagato"},
  {person:"Noi (احنا)",form:"Abbiamo pagato"},
  {person:"Voi (انتم)",form:"Avete pagato"},
  {person:"Loro (هم)",form:"Hanno pagato"}]}},

{it:"Lavoravo da casa quando ho pagato le bollette online", ar:"كنت باشتغل من البيت لما دفعت الفواتير أونلاين.", en:"I was working from home when I paid the bills online.", pronoun:"Io (أنا)",
 words:[
  {it:"Lavoravo",ar:"كنت باشتغل",note:"Lavorare، Imperfetto"},
  {it:"da casa",ar:"من البيت",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"ho",ar:"",note:"جزء من الفعل المساعد"},
  {it:"pagato",ar:"دفعت",note:"Pagare، Passato Prossimo"},
  {it:"le bollette",ar:"الفواتير",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"online",ar:"أونلاين",note:null}
 ], conj:{verb:"Pagare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho pagato"},
  {person:"Tu (أنت)",form:"Hai pagato"},
  {person:"Lui (هو)",form:"Ha pagato"},
  {person:"Lei (هي)",form:"Ha pagato"},
  {person:"Noi (احنا)",form:"Abbiamo pagato"},
  {person:"Voi (انتم)",form:"Avete pagato"},
  {person:"Loro (هم)",form:"Hanno pagato"}]}},

{it:"Hai viaggiato in treno mentre stavi male", ar:"سافرت بالقطر وانت كنت تعبان.", en:"You traveled by train while you were feeling sick.", pronoun:"Tu (أنت)",
 words:[
  {it:"Hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"viaggiato",ar:"سافرت",note:"Viaggiare، Passato Prossimo"},
  {it:"in treno",ar:"بالقطر",note:null},
  {it:"mentre",ar:"وانت",note:null},
  {it:"stavi",ar:"كنت",note:"Stare، Imperfetto"},
  {it:"male",ar:"تعبان",note:null}
 ], conj:{verb:"Viaggiare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho viaggiato"},
  {person:"Tu (أنت)",form:"Hai viaggiato"},
  {person:"Lui (هو)",form:"Ha viaggiato"},
  {person:"Lei (هي)",form:"Ha viaggiato"},
  {person:"Noi (احنا)",form:"Abbiamo viaggiato"},
  {person:"Voi (انتم)",form:"Avete viaggiato"},
  {person:"Loro (هم)",form:"Hanno viaggiato"}]}},

{it:"Stavi bene quando hai viaggiato in Italia l'anno scorso", ar:"كنت كويس لما سافرت لإيطاليا السنة اللي فاتت.", en:"You were feeling well when you traveled to Italy last year.", pronoun:"Tu (أنت)",
 words:[
  {it:"Stavi",ar:"كنت",note:"Stare، Imperfetto"},
  {it:"bene",ar:"كويس",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},
  {it:"viaggiato",ar:"سافرت",note:"Viaggiare، Passato Prossimo"},
  {it:"in Italia",ar:"لإيطاليا",note:null},
  {it:"l'anno scorso",ar:"السنة اللي فاتت",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Viaggiare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho viaggiato"},
  {person:"Tu (أنت)",form:"Hai viaggiato"},
  {person:"Lui (هو)",form:"Ha viaggiato"},
  {person:"Lei (هي)",form:"Ha viaggiato"},
  {person:"Noi (احنا)",form:"Abbiamo viaggiato"},
  {person:"Voi (انتم)",form:"Avete viaggiato"},
  {person:"Loro (هم)",form:"Hanno viaggiato"}]}},

{it:"Lui ha cercato le chiavi mentre camminava per la stanza", ar:"هو بحث عن المفاتيح وهو كان بيمشي في الأوضة.", en:"He looked for the keys while he was walking around the room.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"cercato",ar:"بحث عن",note:"Cercare، Passato Prossimo"},
  {it:"le chiavi",ar:"المفاتيح",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهو",note:null},
  {it:"camminava",ar:"كان بيمشي",note:"Camminare، Imperfetto"},
  {it:"per la stanza",ar:"في الأوضة",note:null}
 ], conj:{verb:"Cercare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho cercato"},
  {person:"Tu (أنت)",form:"Hai cercato"},
  {person:"Lui (هو)",form:"Ha cercato"},
  {person:"Lei (هي)",form:"Ha cercato"},
  {person:"Noi (احنا)",form:"Abbiamo cercato"},
  {person:"Voi (انتم)",form:"Avete cercato"},
  {person:"Loro (هم)",form:"Hanno cercato"}]}},

{it:"Lui camminava piano quando ha cercato di correre", ar:"هو كان بيمشي ببطء لما حاول الجري.", en:"He was walking slowly when he tried to run.", pronoun:"Lui (هو)",
 words:[
  {it:"Lui",ar:"هو",note:null},
  {it:"camminava",ar:"كان بيمشي",note:"Camminare، Imperfetto"},
  {it:"piano",ar:"ببطء",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"cercato",ar:"حاول",note:"Cercare، Passato Prossimo"},
  {it:"di correre",ar:"الجري",note:null}
 ], conj:{verb:"Cercare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho cercato"},
  {person:"Tu (أنت)",form:"Hai cercato"},
  {person:"Lui (هو)",form:"Ha cercato"},
  {person:"Lei (هي)",form:"Ha cercato"},
  {person:"Noi (احنا)",form:"Abbiamo cercato"},
  {person:"Voi (انتم)",form:"Avete cercato"},
  {person:"Loro (هم)",form:"Hanno cercato"}]}},

{it:"Lei ha trovato il libro mentre aspettava il treno", ar:"هي لقيت الكتاب وهي كانت مستنية القطر.", en:"She found the book while she was waiting for the train.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"trovato",ar:"لقيت",note:"Trovare، Passato Prossimo"},
  {it:"il libro",ar:"الكتاب",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهي",note:null},
  {it:"aspettava",ar:"كانت مستنية",note:"Aspettare، Imperfetto"},
  {it:"il treno",ar:"القطر",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Trovare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho trovato"},
  {person:"Tu (أنت)",form:"Hai trovato"},
  {person:"Lui (هو)",form:"Ha trovato"},
  {person:"Lei (هي)",form:"Ha trovato"},
  {person:"Noi (احنا)",form:"Abbiamo trovato"},
  {person:"Voi (انتم)",form:"Avete trovato"},
  {person:"Loro (هم)",form:"Hanno trovato"}]}},

{it:"Lei aspettava una risposta quando ha trovato la soluzione", ar:"هي كانت مستنية إجابة لما لقيت الحل.", en:"She was waiting for an answer when she found the solution.", pronoun:"Lei (هي)",
 words:[
  {it:"Lei",ar:"هي",note:null},
  {it:"aspettava",ar:"كانت مستنية",note:"Aspettare، Imperfetto"},
  {it:"una risposta",ar:"إجابة",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"trovato",ar:"لقيت",note:"Trovare، Passato Prossimo"},
  {it:"la soluzione",ar:"الحل",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Trovare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho trovato"},
  {person:"Tu (أنت)",form:"Hai trovato"},
  {person:"Lui (هو)",form:"Ha trovato"},
  {person:"Lei (هي)",form:"Ha trovato"},
  {person:"Noi (احنا)",form:"Abbiamo trovato"},
  {person:"Voi (انتم)",form:"Avete trovato"},
  {person:"Loro (هم)",form:"Hanno trovato"}]}},

{it:"Noi abbiamo ringraziato il medico mentre ci aiutava con la ricetta", ar:"احنا شكرنا الدكتور وهو كان بيساعدنا في الروشتة.", en:"We thanked the doctor while he was helping us with the prescription.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"abbiamo",ar:"",note:"جزء من الفعل المساعد"},
  {it:"ringraziato",ar:"شكرنا",note:"Ringraziare، Passato Prossimo"},
  {it:"il medico",ar:"الدكتور",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهو",note:null},
  {it:"ci",ar:"نا",note:null},
  {it:"aiutava",ar:"كان بيساعد",note:"Aiutare، Imperfetto"},
  {it:"con la ricetta",ar:"في الروشتة",note:null}
 ], conj:{verb:"Ringraziare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho ringraziato"},
  {person:"Tu (أنت)",form:"Hai ringraziato"},
  {person:"Lui (هو)",form:"Ha ringraziato"},
  {person:"Lei (هي)",form:"Ha ringraziato"},
  {person:"Noi (احنا)",form:"Abbiamo ringraziato"},
  {person:"Voi (انتم)",form:"Avete ringraziato"},
  {person:"Loro (هم)",form:"Hanno ringraziato"}]}},

{it:"Noi aiutavamo il vicino quando ha ringraziato tutti per la sorpresa", ar:"احنا كنا بنساعد الجار لما شكر الكل على المفاجأة.", en:"We were helping the neighbor when he thanked everyone for the surprise.", pronoun:"Noi (احنا)",
 words:[
  {it:"Noi",ar:"احنا",note:null},
  {it:"aiutavamo",ar:"كنا بنساعد",note:"Aiutare، Imperfetto"},
  {it:"il vicino",ar:"الجار",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"quando",ar:"لما",note:null},
  {it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"ringraziato",ar:"شكر",note:"Ringraziare، Passato Prossimo"},
  {it:"tutti",ar:"الكل",note:null},
  {it:"per la sorpresa",ar:"على المفاجأة",note:null}
 ], conj:{verb:"Ringraziare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho ringraziato"},
  {person:"Tu (أنت)",form:"Hai ringraziato"},
  {person:"Lui (هو)",form:"Ha ringraziato"},
  {person:"Lei (هي)",form:"Ha ringraziato"},
  {person:"Noi (احنا)",form:"Abbiamo ringraziato"},
  {person:"Voi (انتم)",form:"Avete ringraziato"},
  {person:"Loro (هم)",form:"Hanno ringraziato"}]}},

{it:"Avete salutato gli amici mentre uscivano dalla festa", ar:"سلمتوا على الأصدقاء وهم كانوا بيطلعو�� من الحفلة.", en:"You (pl.) greeted the friends while they were leaving the party.", pronoun:"Voi (انتم)",
 words:[
  {it:"Avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"salutato",ar:"سلمتوا على",note:"Salutare، Passato Prossimo"},
  {it:"gli amici",ar:"الأصدقاء",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"},
  {it:"mentre",ar:"وهم",note:null},
  {it:"uscivano",ar:"كانوا بيطلعوا",note:"Uscire، Imperfetto"},
  {it:"dalla festa",ar:"من الحفلة",note:null}
 ], conj:{verb:"Salutare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho salutato"},
  {person:"Tu (أنت)",form:"Hai salutato"},
  {person:"Lui (هو)",form:"Ha salutato"},
  {person:"Lei (هي)",form:"Ha salutato"},
  {person:"Noi (احنا)",form:"Abbiamo salutato"},
  {person:"Voi (انتم)",form:"Avete salutato"},
  {person:"Loro (هم)",form:"Hanno salutato"}]}},

{it:"Uscivate dal cinema quando avete salutato il vostro vicino", ar:"كنتوا بتطلعوا من السينما لما سلمتوا على جاركوا.", en:"You (pl.) were leaving the cinema when you greeted your neighbor.", pronoun:"Voi (انتم)",
 words:[
  {it:"Uscivate",ar:"كنتوا بتطلعوا",note:"Uscire، Imperfetto"},
  {it:"dal cinema",ar:"من السينما",note:null},
  {it:"quando",ar:"لما",note:null},
  {it:"avete",ar:"",note:"جزء من الفعل المساعد"},
  {it:"salutato",ar:"سلمتوا على",note:"Salutare، Passato Prossimo"},
  {it:"il vostro vicino",ar:"جاركوا",note:"الأداة دي بتتلفظ ملتصقة بالكلمة اللي بعدها كوحدة نفسية واحدة، مش لوحدها"}
 ], conj:{verb:"Salutare",tense:"Passato Prossimo",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho salutato"},
  {person:"Tu (أنت)",form:"Hai salutato"},
  {person:"Lui (هو)",form:"Ha salutato"},
  {person:"Lei (هي)",form:"Ha salutato"},
  {person:"Noi (احنا)",form:"Abbiamo salutato"},
  {person:"Voi (انتم)",form:"Avete salutato"},
  {person:"Loro (هم)",form:"Hanno salutato"}]}},
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

// ── طقس ──────────────���──────────────────────────────────────────────
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

{it:"Quanta pasta vuoi per cena?", ar:"عايز مكرونة قد ايه للعشا؟", en:"How much pasta do you want for dinner?",
 words:[
  {it:"Quanta",ar:"قد ايه (مؤنث)",note:"صفة استفهامية للكمية، مؤنث مفرد"},{it:"pasta",ar:"مكرونة"},
  {it:"vuoi",ar:"عايز"},{it:"per",ar:"لـ"},{it:"cena",ar:"العشا"}
]},

{it:"Quanti fratelli e quante sorelle hai?", ar:"عندك كام أخ وكام أخت؟", en:"How many brothers and how many sisters do you have?",
 words:[
  {it:"Quanti",ar:"كام (جمع مذكر)",note:"صفة استفهامية للكمية، جمع مذكر"},{it:"fratelli",ar:"إخوة"},
  {it:"e",ar:"و"},{it:"quante",ar:"كام (جمع مؤنث)",note:"صفة استفهامية للكمية، جمع مؤنث"},
  {it:"sorelle",ar:"أخوات"},{it:"hai",ar:"عندك"}
]},

{it:"Quali film preferisci guardare?", ar:"انهي أفلام بتفضل تتفرج عليها؟", en:"Which movies do you prefer to watch?",
 words:[
  {it:"Quali",ar:"انهي (جمع)",note:"صفة/ضمير استفهامي، للجمع مذكر وموذكر"},{it:"film",ar:"أفلام"},
  {it:"preferisci",ar:"بتفضل"},{it:"guardare",ar:"تتفرج"}
]},

{it:"I miei genitori e le mie sorelle abitano a Roma", ar:"والديّ وأخواتي بيسكنوا في روما", en:"My parents and my sisters live in Rome.",
 words:[
  {it:"I",ar:"الـ"},{it:"miei",ar:"بتوعي (جمع مذكر)",note:"صفة ملكية، جمع مذكر لـ mio"},
  {it:"genitori",ar:"والدين"},{it:"e",ar:"و"},{it:"le",ar:"الـ"},
  {it:"mie",ar:"بتوعي (جمع مؤنث)",note:"صفة ملكية، جمع مؤنث لـ mia"},
  {it:"sorelle",ar:"أخوات"},{it:"abitano",ar:"بيسكنوا"},{it:"a",ar:"في"},{it:"Roma",ar:"روما"}
]},

{it:"I tuoi consigli e le tue idee mi hanno aiutato molto", ar:"نصايحك وأفكارك ساعدوني كتير", en:"Your advice and your ideas helped me a lot.",
 words:[
  {it:"I",ar:"الـ"},{it:"tuoi",ar:"بتوعك (جمع مذكر)",note:"صفة ملكية، جمع مذكر لـ tuo"},
  {it:"consigli",ar:"نصايح"},{it:"e",ar:"و"},{it:"le",ar:"الـ"},
  {it:"tue",ar:"بتوعك (جمع مؤنث)",note:"صفة ملكية، جمع مؤنث لـ tua"},
  {it:"idee",ar:"أفكار"},{it:"mi",ar:"لي"},{it:"hanno",ar:"",note:"جزء من الفعل المساعد"},
  {it:"aiutato",ar:"ساعدوني",note:"Aiutare، Passato Prossimo"},{it:"molto",ar:"كتير"}
]},

{it:"Sua madre e i suoi fratelli sono venuti, ma le sue sorelle no", ar:"أمه وأخواته الذكور جم، بس أخواته البنات لأ", en:"His mother and his brothers came, but his sisters did not.",
 words:[
  {it:"Sua",ar:"بتاعه/بتاعها (مؤنث مفرد)",note:"صفة ملكية، مؤنث مفرد لـ suo"},{it:"madre",ar:"أم"},
  {it:"e",ar:"و"},{it:"i",ar:"الـ"},
  {it:"suoi",ar:"بتوعه/بتوعها (جمع مذكر)",note:"صفة ملكية، جمع مذكر لـ suo"},
  {it:"fratelli",ar:"إخوة"},{it:"sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"venuti",ar:"جم",note:"Venire، Passato Prossimo"},{it:"ma",ar:"بس"},{it:"le",ar:"الـ"},
  {it:"sue",ar:"بتوعه/بتوعها (جمع مؤنث)",note:"صفة ملكية، جمع مؤنث لـ suo"},
  {it:"sorelle",ar:"أخوات"},{it:"no",ar:"لأ"}
]},

{it:"Il nostro professore ha detto che i nostri esami e le nostre lezioni cambieranno", ar:"أستاذنا قال إن امتحاناتنا ودروسنا هتتغير", en:"Our teacher said that our exams and our lessons will change.",
 words:[
  {it:"Il",ar:"الـ"},{it:"nostro",ar:"بتاعنا (مفرد مذكر)",note:"صفة ملكية، مفرد مذكر"},
  {it:"professore",ar:"أستاذ"},{it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"detto",ar:"قال",note:"Dire، Passato Prossimo"},{it:"che",ar:"إن"},{it:"i",ar:"الـ"},
  {it:"nostri",ar:"بتوعنا (جمع مذكر)",note:"صفة ملكية، جمع مذكر"},{it:"esami",ar:"امتحانات"},
  {it:"e",ar:"و"},{it:"le",ar:"الـ"},
  {it:"nostre",ar:"بتوعنا (جمع مؤنث)",note:"صفة ملكية، جمع مؤنث"},{it:"lezioni",ar:"دروس"},
  {it:"cambieranno",ar:"هتتغير"}
]},

{it:"La vostra pazienza e le vostre idee sono importanti per noi", ar:"صبركم وأفكاركم مهمين لينا", en:"Your patience and your ideas are important to us.",
 words:[
  {it:"La",ar:"الـ"},{it:"vostra",ar:"بتوعكم (مفرد مؤنث)",note:"صفة ملكية، مفرد مؤنث"},
  {it:"pazienza",ar:"صبر"},{it:"e",ar:"و"},{it:"le",ar:"الـ"},
  {it:"vostre",ar:"بتوعكم (جمع مؤنث)",note:"صفة ملكية، جمع مؤنث"},{it:"idee",ar:"أفكار"},
  {it:"sono",ar:""},{it:"importanti",ar:"مهمين"},{it:"per",ar:"لـ"},{it:"noi",ar:"إحنا"}
]},

{it:"Ho comprato dei libri e degli zaini per i bambini", ar:"شريت كتب وشنط ظهر للأطفال", en:"I bought some books and some backpacks for the children.",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},{it:"comprato",ar:"شريت",note:"Comprare، Passato Prossimo"},
  {it:"dei",ar:"بعض (جمع مذكر)",note:"أداة تجزيئية جمع مذكر"},{it:"libri",ar:"كتب"},
  {it:"e",ar:"و"},{it:"degli",ar:"بعض (جمع مذكر يبدأ بحرف متحرك)",note:"أداة تجزيئية جمع مذكر قبل صوت متحرك"},
  {it:"zaini",ar:"شنط ظهر"},{it:"per",ar:"لـ"},{it:"i",ar:"الـ"},{it:"bambini",ar:"الأطفال"}
]},

{it:"Ho bisogno delle chiavi e dello zucchero per la torta", ar:"محتاج المفاتيح وشوية سكر للتورتة", en:"I need the keys and some sugar for the cake.",
 words:[
  {it:"Ho",ar:"عندي"},{it:"bisogno",ar:"محتاج"},
  {it:"delle",ar:"بعض (جمع مؤنث)",note:"أداة تجزيئية جمع مؤنث"},{it:"chiavi",ar:"مفاتيح"},
  {it:"e",ar:"و"},{it:"dello",ar:"بعض (مفرد مذكر يبدأ بـ s+consonante أو z)",note:"أداة تجزيئية مفرد مذكر خاصة"},
  {it:"zucchero",ar:"سكر"},{it:"per",ar:"لـ"},{it:"la",ar:"الـ"},{it:"torta",ar:"تورتة"}
]},

{it:"Questi ragazzi e queste ragazze studiano insieme ogni giorno", ar:"الشباب دول والبنات دول بيدرسوا مع بعض كل يوم", en:"These boys and these girls study together every day.",
 words:[
  {it:"Questi",ar:"دول (جمع مذكر)",note:"ضمير/صفة إشارية جمع مذكر لـ questo"},{it:"ragazzi",ar:"شباب"},
  {it:"e",ar:"و"},{it:"queste",ar:"دول (جمع مؤنث)",note:"ضمير/صفة إشارية جمع مؤنث لـ questa"},
  {it:"ragazze",ar:"بنات"},{it:"studiano",ar:"بيدرسوا"},{it:"insieme",ar:"مع بعض"},
  {it:"ogni",ar:"كل"},{it:"giorno",ar:"يوم"}
]},

{it:"Quello zaino è pesante, ma quella borsa è leggera", ar:"الشنطة داك ثقيلة، بس الشنطة الجزدان دي خفيفة", en:"That backpack is heavy, but that bag is light.",
 words:[
  {it:"Quello",ar:"داك (مفرد مذكر)",note:"صفة إشارية مفرد مذكر"},{it:"zaino",ar:"شنطة ظهر"},
  {it:"è",ar:""},{it:"pesante",ar:"ثقيلة"},{it:"ma",ar:"بس"},
  {it:"quella",ar:"دي (مفرد مؤنث)",note:"صفة إشارية مفرد مؤنث"},{it:"borsa",ar:"شنطة/جزدان"},
  {it:"è",ar:""},{it:"leggera",ar:"خفيفة"}
]},

{it:"Quegli studenti e quelle studentesse hanno superato l'esame", ar:"الطلبة داك والطالبات داك نجحوا في الامتحان", en:"Those students (male) and those students (female) passed the exam.",
 words:[
  {it:"Quegli",ar:"داك (جمع مذكر يبدأ بصوت متحرك)",note:"صفة إشارية جمع مذكر خاصة قبل صوت متحرك"},
  {it:"studenti",ar:"طلبة"},{it:"e",ar:"و"},
  {it:"quelle",ar:"دول (جمع مؤنث)",note:"صفة إشارية جمع مؤنث"},{it:"studentesse",ar:"طالبات"},
  {it:"hanno",ar:"",note:"جزء من الفعل المساعد"},{it:"superato",ar:"نجحوا",note:"Superare، Passato Prossimo"},
  {it:"l'esame",ar:"الامتحان"}
]},

{it:"Quei bambini giocavano mentre quelli più grandi studiavano", ar:"الأطفال داك كانوا بيلعبوا وداك الأكبر كانوا بيذاكروا", en:"Those children were playing while those older ones were studying.",
 words:[
  {it:"Quei",ar:"داك (جمع مذكر قبل صوت ساكن)",note:"صفة إشارية جمع مذكر"},{it:"bambini",ar:"أطفال"},
  {it:"giocavano",ar:"كانوا بيلعبوا",note:"Giocare، Imperfetto"},{it:"mentre",ar:"و"},
  {it:"quelli",ar:"داك (ضمير، جمع مذكر)",note:"ضمير إشاري جمع مذكر، مش صفة"},
  {it:"più",ar:"أكتر"},{it:"grandi",ar:"كبار"},{it:"studiavano",ar:"كانوا بيذاكروا",note:"Studiare، Imperfetto"}
]},

{it:"Qualcuno ha bussato alla porta, ma chiunque può entrare", ar:"حد دق الباب، بس أي حد ممكن يدخل", en:"Someone knocked on the door, but anyone can come in.",
 words:[
  {it:"Qualcuno",ar:"حد ما",note:"ضمير غير محدد، مفرد"},{it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"bussato",ar:"دق",note:"Bussare، Passato Prossimo"},{it:"alla",ar:"على الـ"},{it:"porta",ar:"باب"},
  {it:"ma",ar:"بس"},{it:"chiunque",ar:"أي حد",note:"ضمير غير محدد، يعني أي شخص كان"},
  {it:"può",ar:"ممكن"},{it:"entrare",ar:"يدخل"}
]},

{it:"Ognuno ha la sua opinione, e non voglio dire nulla o niente di più", ar:"كل واحد له رأيه، ومش عايز اقول ولا حاجة تانية", en:"Everyone has their own opinion, and I don't want to say anything more.",
 words:[
  {it:"Ognuno",ar:"كل واحد",note:"ضمير غير محدد، مفرد"},{it:"ha",ar:"له"},{it:"la",ar:"الـ"},
  {it:"sua",ar:"بتاعه"},{it:"opinione",ar:"رأي"},{it:"e",ar:"و"},{it:"non",ar:"مش"},
  {it:"voglio",ar:"عايز"},{it:"dire",ar:"اقول"},
  {it:"nulla",ar:"ولا حاجة",note:"ضمير غير محدد للنفي، زي niente"},{it:"o",ar:"أو"},
  {it:"niente",ar:"ولا حاجة",note:"ضمير غير محدد للنفي، زي nulla"},{it:"di più",ar:"أكتر"}
]},

{it:"Tutte le persone sono arrivate, ma nessuno e nessuna hanno parlato", ar:"كل الناس جم، بس ولا واحد وولا واحدة اتكلموا", en:"All the people arrived, but no one, male or female, spoke.",
 words:[
  {it:"Tutte",ar:"كل (جمع مؤنث)",note:"صفة/ضمير غير محدد جمع مؤنث لـ tutto"},{it:"le",ar:"الـ"},
  {it:"persone",ar:"ناس"},{it:"sono",ar:"",note:"جزء من الفعل المساعد"},
  {it:"arrivate",ar:"جم",note:"Arrivare، Passato Prossimo"},{it:"ma",ar:"بس"},
  {it:"nessuno",ar:"ولا واحد",note:"ضمير غير محدد للنفي، مذكر"},{it:"e",ar:"و"},
  {it:"nessuna",ar:"ولا واحدة",note:"ضمير غير محدد للنفي، مؤنث"},{it:"hanno",ar:""},{it:"parlato",ar:"اتكلموا",note:"Parlare، Passato Prossimo"}
]},

{it:"Non conosco nessuno qui, non ne conosco alcuno", ar:"مش عارف حد هنا، مش عارف ولا حد فيهم", en:"I don't know anyone here, I don't know any of them.",
 words:[
  {it:"Non",ar:"مش"},{it:"conosco",ar:"عارف"},{it:"nessuno",ar:"حد"},{it:"qui",ar:"هنا"},
  {it:"non",ar:"مش"},{it:"ne",ar:"منهم"},{it:"conosco",ar:"عارف"},
  {it:"alcuno",ar:"ولا حد (فيهم)",note:"ضمير غير محدد، نادر الاستخدام كصفة، بيتقال غالبًا كضمير بعد ne في النفي"}
]},

{it:"Non ho alcuna intenzione di andare a quella festa", ar:"معنديش أي نية إني اروح الحفلة دي", en:"I have no intention of going to that party.",
 words:[
  {it:"Non",ar:"مش"},{it:"ho",ar:"عندي"},
  {it:"alcuna",ar:"أي (مؤنث)",note:"صفة غير محددة، مؤنث، بتستخدم غالبًا في النفي"},
  {it:"intenzione",ar:"نية"},{it:"di",ar:"إني"},{it:"andare",ar:"اروح"},{it:"a",ar:"لـ"},
  {it:"quella",ar:"دي"},{it:"festa",ar:"حفلة"}
]},

{it:"Alcuni amici e alcune amiche mi hanno scritto ieri", ar:"بعض الأصحاب وبعض الصاحبات كتبولي إمبارح", en:"Some friends (male and female) wrote to me yesterday.",
 words:[
  {it:"Alcuni",ar:"بعض (جمع مذكر)",note:"صفة/ضمير غير محدد جمع مذكر"},{it:"amici",ar:"أصحاب"},
  {it:"e",ar:"و"},{it:"alcune",ar:"بعض (جمع مؤنث)",note:"صفة/ضمير غير محدد جمع مؤنث"},
  {it:"amiche",ar:"صاحبات"},{it:"mi",ar:"لي"},{it:"hanno",ar:""},{it:"scritto",ar:"كتبوا",note:"Scrivere، Passato Prossimo"},{it:"ieri",ar:"إمبارح"}
]},

{it:"Molti turisti e molte turiste visitano Roma ogni anno", ar:"سياح كتير رجالة وستات بيزوروا روما كل سنة", en:"Many tourists, male and female, visit Rome every year.",
 words:[
  {it:"Molti",ar:"كتير (جمع مذكر)",note:"صفة/ضمير غير محدد للكمية، جمع مذكر"},{it:"turisti",ar:"سياح"},
  {it:"e",ar:"و"},{it:"molte",ar:"كتير (جمع مؤنث)",note:"صفة/ضمير غير محدد للكمية، جمع مؤنث"},
  {it:"turiste",ar:"سياحات"},{it:"visitano",ar:"بيزوروا"},{it:"Roma",ar:"روما"},{it:"ogni",ar:"كل"},{it:"anno",ar:"سنة"}
]},

{it:"Ho poco tempo, poca pazienza, pochi soldi e poche idee oggi", ar:"عندي وقت قليل، وصبر قليل، وفلوس قليلة، وأفكار قليلة النهاردة", en:"I have little time, little patience, little money, and few ideas today.",
 words:[
  {it:"Ho",ar:"عندي"},{it:"poco",ar:"قليل (مفرد مذكر)",note:"صفة غير محددة للكمية القليلة، مفرد مذكر"},
  {it:"tempo",ar:"وقت"},{it:"poca",ar:"قليلة (مفرد مؤنث)",note:"مفرد مؤنث لـ poco"},{it:"pazienza",ar:"صبر"},
  {it:"pochi",ar:"قليلين (جمع مذكر)",note:"جمع مذكر لـ poco"},{it:"soldi",ar:"فلوس"},
  {it:"e",ar:"و"},{it:"poche",ar:"قليلة (جمع مؤنث)",note:"جمع مؤنث لـ poco"},{it:"idee",ar:"أفكار"},{it:"oggi",ar:"النهاردة"}
]},

{it:"C'è troppa gente, troppi rumori e troppe macchine in questa città", ar:"فيه ناس كتير أوي، وضوضا كتير أوي، وعربيات كتير أوي في المدينة دي", en:"There is too much people, too many noises, and too many cars in this city.",
 words:[
  {it:"C'è",ar:"فيه"},{it:"troppa",ar:"كتير أوي (مفرد مؤنث)",note:"صفة غير محددة للكمية الزايدة، مفرد مؤنث"},
  {it:"gente",ar:"ناس"},{it:"troppi",ar:"كتير أوي (جمع مذكر)",note:"جمع مذكر لـ troppo"},{it:"rumori",ar:"ضوضا"},
  {it:"e",ar:"و"},{it:"troppe",ar:"كتير أوي (جمع مؤنث)",note:"جمع مؤنث لـ troppo"},{it:"macchine",ar:"عربيات"},
  {it:"in",ar:"في"},{it:"questa",ar:"دي"},{it:"città",ar:"مدينة"}
]},

{it:"Ho tanto lavoro, tanta fame, tanti amici e tante idee", ar:"عندي شغل كتير جدًا، وجعان جدًا، وأصحاب كتير جدًا، وأفكار كتير جدًا", en:"I have so much work, so much hunger, so many friends, and so many ideas.",
 words:[
  {it:"Ho",ar:"عندي"},{it:"tanto",ar:"كتير جدًا (مفرد مذكر)",note:"صفة غير محددة للكمية الكبيرة، مفرد مذكر"},
  {it:"lavoro",ar:"شغل"},{it:"tanta",ar:"كتير جدًا (مفرد مؤنث)",note:"مفرد مؤنث لـ tanto"},{it:"fame",ar:"جوع"},
  {it:"tanti",ar:"كتير جدًا (جمع مذكر)",note:"جمع مذكر لـ tanto"},{it:"amici",ar:"أصحاب"},
  {it:"e",ar:"و"},{it:"tante",ar:"كتير جدًا (جمع مؤنث)",note:"جمع مؤنث لـ tanto"},{it:"idee",ar:"أفكار"}
]},

{it:"Ho aspettato parecchio tempo con parecchia pazienza, insieme a parecchi amici e parecche amiche", ar:"استنيت وقت كتير بصبر كويس، مع أصحاب كتير وصاحبات كتير", en:"I waited quite a long time with quite a lot of patience, together with quite a few friends.",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},{it:"aspettato",ar:"استنيت",note:"Aspettare، Passato Prossimo"},
  {it:"parecchio",ar:"كتير نسبيًا (مفرد مذكر)",note:"صفة غير محددة، مفرد مذكر"},{it:"tempo",ar:"وقت"},
  {it:"con",ar:"بـ"},{it:"parecchia",ar:"كتير نسبيًا (مفرد مؤنث)",note:"مفرد مؤنث لـ parecchio"},{it:"pazienza",ar:"صبر"},
  {it:"insieme a",ar:"مع"},{it:"parecchi",ar:"كتير نسبيًا (جمع مذكر)",note:"جمع مذكر لـ parecchio"},{it:"amici",ar:"أصحاب"},
  {it:"e",ar:"و"},{it:"parecche",ar:"كتير نسبيًا (جمع مؤنث)",note:"جمع مؤنث لـ parecchio"},{it:"amiche",ar:"صاحبات"}
]},

{it:"Vuoi un altro caffè o un'altra bibita? Ho anche altri dolci e altre bevande", ar:"عايز قهوة تانية ولا مشروب تاني؟ عندي كمان حلويات تانية ومشروبات تانية", en:"Do you want another coffee or another drink? I also have other sweets and other drinks.",
 words:[
  {it:"Vuoi",ar:"عايز"},{it:"un",ar:""},{it:"altro",ar:"تاني (مفرد مذكر)",note:"صفة/ضمير غير محدد، مفرد مذكر"},
  {it:"caffè",ar:"قهوة"},{it:"o",ar:"ولا"},{it:"un'altra",ar:"تانية (مفرد مؤنث)",note:"altra، مفرد مؤنث لـ altro"},
  {it:"bibita",ar:"مشروب"},{it:"Ho",ar:"عندي"},{it:"anche",ar:"كمان",note:"ظرف بمعنى also/too"},
  {it:"altri",ar:"تانية (جمع مذكر)",note:"جمع مذكر لـ altro"},{it:"dolci",ar:"حلويات"},
  {it:"e",ar:"و"},{it:"altre",ar:"تانية (جمع مؤنث)",note:"جمع مؤنث لـ altro"},{it:"bevande",ar:"مشروبات"}
]},

{it:"Certo che vengo! Certa gente non capisce che certi giorni sono difficili per certe persone", ar:"طبعًا هاجي! في ناس ما بيفهموش إن في أيام صعبة على ناس معينة", en:"Of course I'm coming! Certain people don't understand that certain days are hard for certain people.",
 words:[
  {it:"Certo",ar:"طبعًا",note:"هنا بمعنى بالتأكيد؛ ولما تيجي قبل اسم بتبقى صفة غير محددة"},{it:"che",ar:"إن"},
  {it:"vengo",ar:"هاجي"},{it:"Certa",ar:"معينة (مفرد مؤنث)",note:"صفة غير محددة، مفرد مؤنث"},
  {it:"gente",ar:"ناس"},{it:"non",ar:"مش"},{it:"capisce",ar:"بتفهم"},{it:"che",ar:"إن"},
  {it:"certi",ar:"معينة (جمع مذكر)",note:"جمع مذكر لـ certo"},{it:"giorni",ar:"أيام"},
  {it:"sono",ar:""},{it:"difficili",ar:"صعبة"},{it:"per",ar:"لـ"},
  {it:"certe",ar:"معينة (جمع مؤنث)",note:"جمع مؤنث لـ certo"},{it:"persone",ar:"ناس"}
]},

{it:"Non so dove hai messo le chiavi", ar:"مش عارف حطيت المفاتيح فين", en:"I don't know where you put the keys.",
 words:[
  {it:"Non",ar:"مش"},{it:"so",ar:"عارف"},{it:"dove",ar:"فين",note:"حرف جر/ظرف استفهامي أو رابط للمكان"},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},{it:"messo",ar:"حطيت",note:"Mettere، Passato Prossimo"},
  {it:"le",ar:"الـ"},{it:"chiavi",ar:"مفاتيح"}
]},

{it:"Abbiamo camminato lungo la spiaggia mentre parlavamo", ar:"مشينا على طول الشط وإحنا بنتكلم", en:"We walked along the beach while we were talking.",
 words:[
  {it:"Abbiamo",ar:"",note:"جزء من الفعل المساعد"},{it:"camminato",ar:"مشينا",note:"Camminare، Passato Prossimo"},
  {it:"lungo",ar:"على طول",note:"حرف جر مركب بمعنى along"},{it:"la",ar:"الـ"},{it:"spiaggia",ar:"شط"},
  {it:"mentre",ar:"وإحنا"},{it:"parlavamo",ar:"كنا بنتكلم",note:"Parlare، Imperfetto"}
]},

{it:"Ho dormito durante il viaggio in treno", ar:"نمت خلال رحلة القطر", en:"I slept during the train journey.",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},{it:"dormito",ar:"نمت",note:"Dormire، Passato Prossimo"},
  {it:"durante",ar:"خلال",note:"حرف جر مركب بمعنى during"},{it:"il",ar:"الـ"},{it:"viaggio",ar:"رحلة"},
  {it:"in",ar:"بـ"},{it:"treno",ar:"قطر"}
]},

{it:"Sono uscito verso le nove di sera", ar:"خرجت حوالي الساعة تسعة بالليل", en:"I went out around nine in the evening.",
 words:[
  {it:"Sono",ar:"",note:"جزء من الفعل المساعد"},{it:"uscito",ar:"خرجت",note:"Uscire، Passato Prossimo"},
  {it:"verso",ar:"حوالي",note:"حرف جر مركب بمعنى around/toward"},{it:"le",ar:"الـ"},{it:"nove",ar:"تسعة"},
  {it:"di",ar:"بـ"},{it:"sera",ar:"الليل"}
]},

{it:"La squadra ha giocato contro un avversario forte", ar:"الفريق لعب ضد خصم قوي", en:"The team played against a strong opponent.",
 words:[
  {it:"La",ar:"الـ"},{it:"squadra",ar:"فريق"},{it:"ha",ar:"",note:"جزء من الفعل المساعد"},
  {it:"giocato",ar:"لعب",note:"Giocare، Passato Prossimo"},{it:"contro",ar:"ضد",note:"حرف جر مركب بمعنى against"},
  {it:"un",ar:""},{it:"avversario",ar:"خصم"},{it:"forte",ar:"قوي"}
]},

{it:"Secondo me, hai fatto la scelta giusta", ar:"حسب رأيي، اخترت الاختيار الصحيح", en:"In my opinion, you made the right choice.",
 words:[
  {it:"Secondo",ar:"حسب",note:"حرف جر مركب بمعنى according to"},{it:"me",ar:"رأيي"},
  {it:"hai",ar:"",note:"جزء من الفعل المساعد"},{it:"fatto",ar:"اخترت",note:"Fare، Passato Prossimo"},
  {it:"la",ar:"الـ"},{it:"scelta",ar:"اختيار"},{it:"giusta",ar:"صحيح"}
]},

{it:"Oltre al lavoro, ho anche altri impegni", ar:"غير الشغل، عندي التزامات تانية كمان", en:"Besides work, I also have other commitments.",
 words:[
  {it:"Oltre",ar:"غير",note:"حرف جر مركب بمعنى besides/beyond"},{it:"al",ar:"الـ"},{it:"lavoro",ar:"شغل"},
  {it:"ho",ar:"عندي"},{it:"anche",ar:"كمان",note:"ظرف بمعنى also/too"},{it:"altri",ar:"تانية"},{it:"impegni",ar:"التزامات"}
]},

{it:"Hanno mangiato tutto eccetto la verdura", ar:"أكلوا كل حاجة غير الخضار", en:"They ate everything except the vegetables.",
 words:[
  {it:"Hanno",ar:"",note:"جزء من الفعل المساعد"},{it:"mangiato",ar:"أكلوا",note:"Mangiare، Passato Prossimo"},
  {it:"tutto",ar:"كل حاجة"},{it:"eccetto",ar:"غير",note:"حرف جر مركب بمعنى except"},{it:"la",ar:"الـ"},{it:"verdura",ar:"خضار"}
]},

{it:"Andremo alla festa, salvo imprevisti", ar:"هنروح للحفلة، إلا لو حصل حاجة غير متوقعة", en:"We'll go to the party, unless something unexpected happens.",
 words:[
  {it:"Andremo",ar:"هنروح"},{it:"alla",ar:"للـ"},{it:"festa",ar:"حفلة"},
  {it:"salvo",ar:"إلا لو",note:"حرف جر مركب بمعنى except/barring"},{it:"imprevisti",ar:"حاجة غير متوقعة"}
]},

{it:"Ho prenotato il biglietto tramite internet, mediante una carta di credito", ar:"حجزت التذكرة عن طريق النت، عن طريق كارت الائتمان", en:"I booked the ticket via the internet, by means of a credit card.",
 words:[
  {it:"Ho",ar:"",note:"جزء من الفعل المساعد"},{it:"prenotato",ar:"حجزت",note:"Prenotare، Passato Prossimo"},
  {it:"il",ar:"الـ"},{it:"biglietto",ar:"تذكرة"},
  {it:"tramite",ar:"عن طريق",note:"حرف جر مركب بمعنى via/through"},{it:"internet",ar:"النت"},
  {it:"mediante",ar:"عن طريق",note:"حرف جر مركب بمعنى by means of"},{it:"una",ar:""},{it:"carta",ar:"كارت"},
  {it:"di",ar:""},{it:"credito",ar:"الائتمان"}
]},

{it:"Vengo anche io alla festa, vieni pure tu!", ar:"هاجي أنا كمان للحفلة، تعالى انت كمان!", en:"I'm coming to the party too, you come too!",
 words:[
  {it:"Vengo",ar:"هاجي"},{it:"anche",ar:"كمان",note:"ظرف بمعنى also/too، ممكن تتحول لـ anch' قبل io"},
  {it:"io",ar:"أنا"},{it:"alla",ar:"للـ"},{it:"festa",ar:"حفلة"},
  {it:"vieni",ar:"تعالى"},{it:"pure",ar:"كمان",note:"ظرف بمعنى also/too، وكمان بيستخدم كتشجيع زي Vai pure!"},{it:"tu",ar:"انت"}
]},

];
