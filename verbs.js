// ===== VERBS: مكتبة الأفعال المرجعية (المعنى + المضارع + الماضي + الماضي المستمر + الأمر) =====
const VERBS = [
{
 it:"Aiutare", ar:"يساعد",
 presente:[
  {person:"Io (أنا)",form:"Aiuto"},
  {person:"Tu (أنت)",form:"Aiuti"},
  {person:"Lui (هو)",form:"Aiuta"},
  {person:"Lei (هي)",form:"Aiuta"},
  {person:"Noi (احنا)",form:"Aiutiamo"},
  {person:"Voi (انتم)",form:"Aiutate"},
  {person:"Loro (هم)",form:"Aiutano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho aiutato"},
  {person:"Tu (أنت)",form:"Hai aiutato"},
  {person:"Lui (هو)",form:"Ha aiutato"},
  {person:"Lei (هي)",form:"Ha aiutato"},
  {person:"Noi (احنا)",form:"Abbiamo aiutato"},
  {person:"Voi (انتم)",form:"Avete aiutato"},
  {person:"Loro (هم)",form:"Hanno aiutato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Aiutavo"},
  {person:"Tu (أنت)",form:"Aiutavi"},
  {person:"Lui (هو)",form:"Aiutava"},
  {person:"Lei (هي)",form:"Aiutava"},
  {person:"Noi (احنا)",form:"Aiutavamo"},
  {person:"Voi (انتم)",form:"Aiutavate"},
  {person:"Loro (هم)",form:"Aiutavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Aiuta"},
  {person:"Lei (رسمي - هو/هي)",form:"Aiuti"},
  {person:"Noi (احنا)",form:"Aiutiamo"},
  {person:"Voi (انتم)",form:"Aiutate"},
  {person:"Loro (هم)",form:"Aiutino"}
 ]}
},
{
 it:"Andare", ar:"يروح / يذهب",
 presente:[
  {person:"Io (أنا)",form:"Vado"},
  {person:"Tu (أنت)",form:"Vai"},
  {person:"Lui (هو)",form:"Va"},
  {person:"Lei (هي)",form:"Va"},
  {person:"Noi (احنا)",form:"Andiamo"},
  {person:"Voi (انتم)",form:"Andate"},
  {person:"Loro (هم)",form:"Vanno"}
 ],
 passato:{aux:"essere",regular:false,rows:[
  {person:"Io (أنا)",form:"Sono andato/a"},
  {person:"Tu (أنت)",form:"Sei andato/a"},
  {person:"Lui (هو)",form:"È andato"},
  {person:"Lei (هي)",form:"È andata"},
  {person:"Noi (احنا)",form:"Siamo andati/e"},
  {person:"Voi (انتم)",form:"Siete andati/e"},
  {person:"Loro (هم)",form:"Sono andati/e"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Andavo"},
  {person:"Tu (أنت)",form:"Andavi"},
  {person:"Lui (هو)",form:"Andava"},
  {person:"Lei (هي)",form:"Andava"},
  {person:"Noi (احنا)",form:"Andavamo"},
  {person:"Voi (انتم)",form:"Andavate"},
  {person:"Loro (هم)",form:"Andavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Va' / Vai"},
  {person:"Lei (رسمي - هو/هي)",form:"Vada"},
  {person:"Noi (احنا)",form:"Andiamo"},
  {person:"Voi (انتم)",form:"Andate"},
  {person:"Loro (هم)",form:"Vadano"}
 ]}
},
{
 it:"Arrivare", ar:"يوصل",
 presente:[
  {person:"Io (أنا)",form:"Arrivo"},
  {person:"Tu (أنت)",form:"Arrivi"},
  {person:"Lui (هو)",form:"Arriva"},
  {person:"Lei (هي)",form:"Arriva"},
  {person:"Noi (احنا)",form:"Arriviamo"},
  {person:"Voi (انتم)",form:"Arrivate"},
  {person:"Loro (هم)",form:"Arrivano"}
 ],
 passato:{aux:"essere",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono arrivato/a"},
  {person:"Tu (أنت)",form:"Sei arrivato/a"},
  {person:"Lui (هو)",form:"È arrivato"},
  {person:"Lei (هي)",form:"È arrivata"},
  {person:"Noi (احنا)",form:"Siamo arrivati/e"},
  {person:"Voi (انتم)",form:"Siete arrivati/e"},
  {person:"Loro (هم)",form:"Sono arrivati/e"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Arrivavo"},
  {person:"Tu (أنت)",form:"Arrivavi"},
  {person:"Lui (هو)",form:"Arrivava"},
  {person:"Lei (هي)",form:"Arrivava"},
  {person:"Noi (احنا)",form:"Arrivavamo"},
  {person:"Voi (انتم)",form:"Arrivavate"},
  {person:"Loro (هم)",form:"Arrivavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Arriva"},
  {person:"Lei (رسمي - هو/هي)",form:"Arrivi"},
  {person:"Noi (احنا)",form:"Arriviamo"},
  {person:"Voi (انتم)",form:"Arrivate"},
  {person:"Loro (هم)",form:"Arrivino"}
 ]}
},
{
 it:"Ascoltare", ar:"يسمع / يستمع",
 presente:[
  {person:"Io (أنا)",form:"Ascolto"},
  {person:"Tu (أنت)",form:"Ascolti"},
  {person:"Lui (هو)",form:"Ascolta"},
  {person:"Lei (هي)",form:"Ascolta"},
  {person:"Noi (احنا)",form:"Ascoltiamo"},
  {person:"Voi (انتم)",form:"Ascoltate"},
  {person:"Loro (هم)",form:"Ascoltano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho ascoltato"},
  {person:"Tu (أنت)",form:"Hai ascoltato"},
  {person:"Lui (هو)",form:"Ha ascoltato"},
  {person:"Lei (هي)",form:"Ha ascoltato"},
  {person:"Noi (احنا)",form:"Abbiamo ascoltato"},
  {person:"Voi (انتم)",form:"Avete ascoltato"},
  {person:"Loro (هم)",form:"Hanno ascoltato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Ascoltavo"},
  {person:"Tu (أنت)",form:"Ascoltavi"},
  {person:"Lui (هو)",form:"Ascoltava"},
  {person:"Lei (هي)",form:"Ascoltava"},
  {person:"Noi (احنا)",form:"Ascoltavamo"},
  {person:"Voi (انتم)",form:"Ascoltavate"},
  {person:"Loro (هم)",form:"Ascoltavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Ascolta"},
  {person:"Lei (رسمي - هو/هي)",form:"Ascolti"},
  {person:"Noi (احنا)",form:"Ascoltiamo"},
  {person:"Voi (انتم)",form:"Ascoltate"},
  {person:"Loro (هم)",form:"Ascoltino"}
 ]}
},
{
 it:"Aspettare", ar:"ينتظر",
 presente:[
  {person:"Io (أنا)",form:"Aspetto"},
  {person:"Tu (أنت)",form:"Aspetti"},
  {person:"Lui (هو)",form:"Aspetta"},
  {person:"Lei (هي)",form:"Aspetta"},
  {person:"Noi (احنا)",form:"Aspettiamo"},
  {person:"Voi (انتم)",form:"Aspettate"},
  {person:"Loro (هم)",form:"Aspettano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho aspettato"},
  {person:"Tu (أنت)",form:"Hai aspettato"},
  {person:"Lui (هو)",form:"Ha aspettato"},
  {person:"Lei (هي)",form:"Ha aspettato"},
  {person:"Noi (احنا)",form:"Abbiamo aspettato"},
  {person:"Voi (انتم)",form:"Avete aspettato"},
  {person:"Loro (هم)",form:"Hanno aspettato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Aspettavo"},
  {person:"Tu (أنت)",form:"Aspettavi"},
  {person:"Lui (هو)",form:"Aspettava"},
  {person:"Lei (هي)",form:"Aspettava"},
  {person:"Noi (احنا)",form:"Aspettavamo"},
  {person:"Voi (انتم)",form:"Aspettavate"},
  {person:"Loro (هم)",form:"Aspettavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Aspetta"},
  {person:"Lei (رسمي - هو/هي)",form:"Aspetti"},
  {person:"Noi (احنا)",form:"Aspettiamo"},
  {person:"Voi (انتم)",form:"Aspettate"},
  {person:"Loro (هم)",form:"Aspettino"}
 ]}
},
{
 it:"Bussare", ar:"يخبط (على الباب)",
 presente:[
  {person:"Io (أنا)",form:"Busso"},
  {person:"Tu (أنت)",form:"Bussi"},
  {person:"Lui (هو)",form:"Bussa"},
  {person:"Lei (هي)",form:"Bussa"},
  {person:"Noi (احنا)",form:"Bussiamo"},
  {person:"Voi (انتم)",form:"Bussate"},
  {person:"Loro (هم)",form:"Bussano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho bussato"},
  {person:"Tu (أنت)",form:"Hai bussato"},
  {person:"Lui (هو)",form:"Ha bussato"},
  {person:"Lei (هي)",form:"Ha bussato"},
  {person:"Noi (احنا)",form:"Abbiamo bussato"},
  {person:"Voi (انتم)",form:"Avete bussato"},
  {person:"Loro (هم)",form:"Hanno bussato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Bussavo"},
  {person:"Tu (أنت)",form:"Bussavi"},
  {person:"Lui (هو)",form:"Bussava"},
  {person:"Lei (هي)",form:"Bussava"},
  {person:"Noi (احنا)",form:"Bussavamo"},
  {person:"Voi (انتم)",form:"Bussavate"},
  {person:"Loro (هم)",form:"Bussavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Bussa"},
  {person:"Lei (رسمي - هو/هي)",form:"Bussi"},
  {person:"Noi (احنا)",form:"Bussiamo"},
  {person:"Voi (انتم)",form:"Bussate"},
  {person:"Loro (هم)",form:"Bussino"}
 ]}
},
{
 it:"Camminare", ar:"يمشي",
 presente:[
  {person:"Io (أنا)",form:"Cammino"},
  {person:"Tu (أنت)",form:"Cammini"},
  {person:"Lui (هو)",form:"Cammina"},
  {person:"Lei (هي)",form:"Cammina"},
  {person:"Noi (احنا)",form:"Camminiamo"},
  {person:"Voi (انتم)",form:"Camminate"},
  {person:"Loro (هم)",form:"Camminano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho camminato"},
  {person:"Tu (أنت)",form:"Hai camminato"},
  {person:"Lui (هو)",form:"Ha camminato"},
  {person:"Lei (هي)",form:"Ha camminato"},
  {person:"Noi (احنا)",form:"Abbiamo camminato"},
  {person:"Voi (انتم)",form:"Avete camminato"},
  {person:"Loro (هم)",form:"Hanno camminato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Camminavo"},
  {person:"Tu (أنت)",form:"Camminavi"},
  {person:"Lui (هو)",form:"Camminava"},
  {person:"Lei (هي)",form:"Camminava"},
  {person:"Noi (احنا)",form:"Camminavamo"},
  {person:"Voi (انتم)",form:"Camminavate"},
  {person:"Loro (هم)",form:"Camminavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Cammina"},
  {person:"Lei (رسمي - هو/هي)",form:"Cammini"},
  {person:"Noi (احنا)",form:"Camminiamo"},
  {person:"Voi (انتم)",form:"Camminate"},
  {person:"Loro (هم)",form:"Camminino"}
 ]}
},
{
 it:"Cercare", ar:"يبحث عن",
 presente:[
  {person:"Io (أنا)",form:"Cerco"},
  {person:"Tu (أنت)",form:"Cerchi"},
  {person:"Lui (هو)",form:"Cerca"},
  {person:"Lei (هي)",form:"Cerca"},
  {person:"Noi (احنا)",form:"Cerchiamo"},
  {person:"Voi (انتم)",form:"Cercate"},
  {person:"Loro (هم)",form:"Cercano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho cercato"},
  {person:"Tu (أنت)",form:"Hai cercato"},
  {person:"Lui (هو)",form:"Ha cercato"},
  {person:"Lei (هي)",form:"Ha cercato"},
  {person:"Noi (احنا)",form:"Abbiamo cercato"},
  {person:"Voi (انتم)",form:"Avete cercato"},
  {person:"Loro (هم)",form:"Hanno cercato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Cercavo"},
  {person:"Tu (أنت)",form:"Cercavi"},
  {person:"Lui (هو)",form:"Cercava"},
  {person:"Lei (هي)",form:"Cercava"},
  {person:"Noi (احنا)",form:"Cercavamo"},
  {person:"Voi (انتم)",form:"Cercavate"},
  {person:"Loro (هم)",form:"Cercavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Cerca"},
  {person:"Lei (رسمي - هو/هي)",form:"Cerchi"},
  {person:"Noi (احنا)",form:"Cerchiamo"},
  {person:"Voi (انتم)",form:"Cercate"},
  {person:"Loro (هم)",form:"Cerchino"}
 ]}
},
{
 it:"Chiamare", ar:"ينادي / يتصل بـ",
 presente:[
  {person:"Io (أنا)",form:"Chiamo"},
  {person:"Tu (أنت)",form:"Chiami"},
  {person:"Lui (هو)",form:"Chiama"},
  {person:"Lei (هي)",form:"Chiama"},
  {person:"Noi (احنا)",form:"Chiamiamo"},
  {person:"Voi (انتم)",form:"Chiamate"},
  {person:"Loro (هم)",form:"Chiamano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho chiamato"},
  {person:"Tu (أنت)",form:"Hai chiamato"},
  {person:"Lui (هو)",form:"Ha chiamato"},
  {person:"Lei (هي)",form:"Ha chiamato"},
  {person:"Noi (احنا)",form:"Abbiamo chiamato"},
  {person:"Voi (انتم)",form:"Avete chiamato"},
  {person:"Loro (هم)",form:"Hanno chiamato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Chiamavo"},
  {person:"Tu (أنت)",form:"Chiamavi"},
  {person:"Lui (هو)",form:"Chiamava"},
  {person:"Lei (هي)",form:"Chiamava"},
  {person:"Noi (احنا)",form:"Chiamavamo"},
  {person:"Voi (انتم)",form:"Chiamavate"},
  {person:"Loro (هم)",form:"Chiamavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Chiama"},
  {person:"Lei (رسمي - هو/هي)",form:"Chiami"},
  {person:"Noi (احنا)",form:"Chiamiamo"},
  {person:"Voi (انتم)",form:"Chiamate"},
  {person:"Loro (هم)",form:"Chiamino"}
 ]}
},
{
 it:"Comprare", ar:"يشتري",
 presente:[
  {person:"Io (أنا)",form:"Compro"},
  {person:"Tu (أنت)",form:"Compri"},
  {person:"Lui (هو)",form:"Compra"},
  {person:"Lei (هي)",form:"Compra"},
  {person:"Noi (احنا)",form:"Compriamo"},
  {person:"Voi (انتم)",form:"Comprate"},
  {person:"Loro (هم)",form:"Comprano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho comprato"},
  {person:"Tu (أنت)",form:"Hai comprato"},
  {person:"Lui (هو)",form:"Ha comprato"},
  {person:"Lei (هي)",form:"Ha comprato"},
  {person:"Noi (احنا)",form:"Abbiamo comprato"},
  {person:"Voi (انتم)",form:"Avete comprato"},
  {person:"Loro (هم)",form:"Hanno comprato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Compravo"},
  {person:"Tu (أنت)",form:"Compravi"},
  {person:"Lui (هو)",form:"Comprava"},
  {person:"Lei (هي)",form:"Comprava"},
  {person:"Noi (احنا)",form:"Compravamo"},
  {person:"Voi (انتم)",form:"Compravate"},
  {person:"Loro (هم)",form:"Compravano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Compra"},
  {person:"Lei (رسمي - هو/هي)",form:"Compri"},
  {person:"Noi (احنا)",form:"Compriamo"},
  {person:"Voi (انتم)",form:"Comprate"},
  {person:"Loro (هم)",form:"Comprino"}
 ]}
},
{
 it:"Giocare", ar:"يلعب",
 presente:[
  {person:"Io (أنا)",form:"Gioco"},
  {person:"Tu (أنت)",form:"Giochi"},
  {person:"Lui (هو)",form:"Gioca"},
  {person:"Lei (هي)",form:"Gioca"},
  {person:"Noi (احنا)",form:"Giochiamo"},
  {person:"Voi (انتم)",form:"Giocate"},
  {person:"Loro (هم)",form:"Giocano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho giocato"},
  {person:"Tu (أنت)",form:"Hai giocato"},
  {person:"Lui (هو)",form:"Ha giocato"},
  {person:"Lei (هي)",form:"Ha giocato"},
  {person:"Noi (احنا)",form:"Abbiamo giocato"},
  {person:"Voi (انتم)",form:"Avete giocato"},
  {person:"Loro (هم)",form:"Hanno giocato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Giocavo"},
  {person:"Tu (أنت)",form:"Giocavi"},
  {person:"Lui (هو)",form:"Giocava"},
  {person:"Lei (هي)",form:"Giocava"},
  {person:"Noi (احنا)",form:"Giocavamo"},
  {person:"Voi (انتم)",form:"Giocavate"},
  {person:"Loro (هم)",form:"Giocavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Gioca"},
  {person:"Lei (رسمي - هو/هي)",form:"Giochi"},
  {person:"Noi (احنا)",form:"Giochiamo"},
  {person:"Voi (انتم)",form:"Giocate"},
  {person:"Loro (هم)",form:"Giochino"}
 ]}
},
{
 it:"Guardare", ar:"يتفرج / ينظر",
 presente:[
  {person:"Io (أنا)",form:"Guardo"},
  {person:"Tu (أنت)",form:"Guardi"},
  {person:"Lui (هو)",form:"Guarda"},
  {person:"Lei (هي)",form:"Guarda"},
  {person:"Noi (احنا)",form:"Guardiamo"},
  {person:"Voi (انتم)",form:"Guardate"},
  {person:"Loro (هم)",form:"Guardano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho guardato"},
  {person:"Tu (أنت)",form:"Hai guardato"},
  {person:"Lui (هو)",form:"Ha guardato"},
  {person:"Lei (هي)",form:"Ha guardato"},
  {person:"Noi (احنا)",form:"Abbiamo guardato"},
  {person:"Voi (انتم)",form:"Avete guardato"},
  {person:"Loro (هم)",form:"Hanno guardato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Guardavo"},
  {person:"Tu (أنت)",form:"Guardavi"},
  {person:"Lui (هو)",form:"Guardava"},
  {person:"Lei (هي)",form:"Guardava"},
  {person:"Noi (احنا)",form:"Guardavamo"},
  {person:"Voi (انتم)",form:"Guardavate"},
  {person:"Loro (هم)",form:"Guardavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Guarda"},
  {person:"Lei (رسمي - هو/هي)",form:"Guardi"},
  {person:"Noi (احنا)",form:"Guardiamo"},
  {person:"Voi (انتم)",form:"Guardate"},
  {person:"Loro (هم)",form:"Guardino"}
 ]}
},
{
 it:"Incontrare", ar:"يقابل",
 presente:[
  {person:"Io (أنا)",form:"Incontro"},
  {person:"Tu (أنت)",form:"Incontri"},
  {person:"Lui (هو)",form:"Incontra"},
  {person:"Lei (هي)",form:"Incontra"},
  {person:"Noi (احنا)",form:"Incontriamo"},
  {person:"Voi (انتم)",form:"Incontrate"},
  {person:"Loro (هم)",form:"Incontrano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho incontrato"},
  {person:"Tu (أنت)",form:"Hai incontrato"},
  {person:"Lui (هو)",form:"Ha incontrato"},
  {person:"Lei (هي)",form:"Ha incontrato"},
  {person:"Noi (احنا)",form:"Abbiamo incontrato"},
  {person:"Voi (انتم)",form:"Avete incontrato"},
  {person:"Loro (هم)",form:"Hanno incontrato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Incontravo"},
  {person:"Tu (أنت)",form:"Incontravi"},
  {person:"Lui (هو)",form:"Incontrava"},
  {person:"Lei (هي)",form:"Incontrava"},
  {person:"Noi (احنا)",form:"Incontravamo"},
  {person:"Voi (انتم)",form:"Incontravate"},
  {person:"Loro (هم)",form:"Incontravano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Incontra"},
  {person:"Lei (رسمي - هو/هي)",form:"Incontri"},
  {person:"Noi (احنا)",form:"Incontriamo"},
  {person:"Voi (انتم)",form:"Incontrate"},
  {person:"Loro (هم)",form:"Incontrino"}
 ]}
},
{
 it:"Lavorare", ar:"يشقل / يعمل",
 presente:[
  {person:"Io (أنا)",form:"Lavoro"},
  {person:"Tu (أنت)",form:"Lavori"},
  {person:"Lui (هو)",form:"Lavora"},
  {person:"Lei (هي)",form:"Lavora"},
  {person:"Noi (احنا)",form:"Lavoriamo"},
  {person:"Voi (انتم)",form:"Lavorate"},
  {person:"Loro (هم)",form:"Lavorano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho lavorato"},
  {person:"Tu (أنت)",form:"Hai lavorato"},
  {person:"Lui (هو)",form:"Ha lavorato"},
  {person:"Lei (هي)",form:"Ha lavorato"},
  {person:"Noi (احنا)",form:"Abbiamo lavorato"},
  {person:"Voi (انتم)",form:"Avete lavorato"},
  {person:"Loro (هم)",form:"Hanno lavorato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Lavoravo"},
  {person:"Tu (أنت)",form:"Lavoravi"},
  {person:"Lui (هو)",form:"Lavorava"},
  {person:"Lei (هي)",form:"Lavorava"},
  {person:"Noi (احنا)",form:"Lavoravamo"},
  {person:"Voi (انتم)",form:"Lavoravate"},
  {person:"Loro (هم)",form:"Lavoravano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Lavora"},
  {person:"Lei (رسمي - هو/هي)",form:"Lavori"},
  {person:"Noi (احنا)",form:"Lavoriamo"},
  {person:"Voi (انتم)",form:"Lavorate"},
  {person:"Loro (هم)",form:"Lavorino"}
 ]}
},
{
 it:"Mangiare", ar:"ياكل",
 presente:[
  {person:"Io (أنا)",form:"Mangio"},
  {person:"Tu (أنت)",form:"Mangii"},
  {person:"Lui (هو)",form:"Mangia"},
  {person:"Lei (هي)",form:"Mangia"},
  {person:"Noi (احنا)",form:"Mangiamo"},
  {person:"Voi (انتم)",form:"Mangiate"},
  {person:"Loro (هم)",form:"Mangiano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho mangiato"},
  {person:"Tu (أنت)",form:"Hai mangiato"},
  {person:"Lui (هو)",form:"Ha mangiato"},
  {person:"Lei (هي)",form:"Ha mangiato"},
  {person:"Noi (احنا)",form:"Abbiamo mangiato"},
  {person:"Voi (انتم)",form:"Avete mangiato"},
  {person:"Loro (هم)",form:"Hanno mangiato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Mangiavo"},
  {person:"Tu (أنت)",form:"Mangiavi"},
  {person:"Lui (هو)",form:"Mangiava"},
  {person:"Lei (هي)",form:"Mangiava"},
  {person:"Noi (احنا)",form:"Mangiavamo"},
  {person:"Voi (انتم)",form:"Mangiavate"},
  {person:"Loro (هم)",form:"Mangiavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Mangia"},
  {person:"Lei (رسمي - هو/هي)",form:"Mangii"},
  {person:"Noi (احنا)",form:"Mangiiamo"},
  {person:"Voi (انتم)",form:"Mangiate"},
  {person:"Loro (هم)",form:"Mangiino"}
 ]}
},
{
 it:"Pagare", ar:"يدفع",
 presente:[
  {person:"Io (أنا)",form:"Pago"},
  {person:"Tu (أنت)",form:"Paghi"},
  {person:"Lui (هو)",form:"Paga"},
  {person:"Lei (هي)",form:"Paga"},
  {person:"Noi (احنا)",form:"Paghiamo"},
  {person:"Voi (انتم)",form:"Pagate"},
  {person:"Loro (هم)",form:"Pagano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho pagato"},
  {person:"Tu (أنت)",form:"Hai pagato"},
  {person:"Lui (هو)",form:"Ha pagato"},
  {person:"Lei (هي)",form:"Ha pagato"},
  {person:"Noi (احنا)",form:"Abbiamo pagato"},
  {person:"Voi (انتم)",form:"Avete pagato"},
  {person:"Loro (هم)",form:"Hanno pagato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Pagavo"},
  {person:"Tu (أنت)",form:"Pagavi"},
  {person:"Lui (هو)",form:"Pagava"},
  {person:"Lei (هي)",form:"Pagava"},
  {person:"Noi (احنا)",form:"Pagavamo"},
  {person:"Voi (انتم)",form:"Pagavate"},
  {person:"Loro (هم)",form:"Pagavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Paga"},
  {person:"Lei (رسمي - هو/هي)",form:"Paghi"},
  {person:"Noi (احنا)",form:"Paghiamo"},
  {person:"Voi (انتم)",form:"Pagate"},
  {person:"Loro (هم)",form:"Paghino"}
 ]}
},
{
 it:"Portare", ar:"يجيب / يحمل",
 presente:[
  {person:"Io (أنا)",form:"Porto"},
  {person:"Tu (أنت)",form:"Porti"},
  {person:"Lui (هو)",form:"Porta"},
  {person:"Lei (هي)",form:"Porta"},
  {person:"Noi (احنا)",form:"Portiamo"},
  {person:"Voi (انتم)",form:"Portate"},
  {person:"Loro (هم)",form:"Portano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho portato"},
  {person:"Tu (أنت)",form:"Hai portato"},
  {person:"Lui (هو)",form:"Ha portato"},
  {person:"Lei (هي)",form:"Ha portato"},
  {person:"Noi (احنا)",form:"Abbiamo portato"},
  {person:"Voi (انتم)",form:"Avete portato"},
  {person:"Loro (هم)",form:"Hanno portato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Portavo"},
  {person:"Tu (أنت)",form:"Portavi"},
  {person:"Lui (هو)",form:"Portava"},
  {person:"Lei (هي)",form:"Portava"},
  {person:"Noi (احنا)",form:"Portavamo"},
  {person:"Voi (انتم)",form:"Portavate"},
  {person:"Loro (هم)",form:"Portavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Porta"},
  {person:"Lei (رسمي - هو/هي)",form:"Porti"},
  {person:"Noi (احنا)",form:"Portiamo"},
  {person:"Voi (انتم)",form:"Portate"},
  {person:"Loro (هم)",form:"Portino"}
 ]}
},
{
 it:"Restare", ar:"يفضل / يبقى",
 presente:[
  {person:"Io (أنا)",form:"Resto"},
  {person:"Tu (أنت)",form:"Resti"},
  {person:"Lui (هو)",form:"Resta"},
  {person:"Lei (هي)",form:"Resta"},
  {person:"Noi (احنا)",form:"Restiamo"},
  {person:"Voi (انتم)",form:"Restate"},
  {person:"Loro (هم)",form:"Restano"}
 ],
 passato:{aux:"essere",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono restato/a"},
  {person:"Tu (أنت)",form:"Sei restato/a"},
  {person:"Lui (هو)",form:"È restato"},
  {person:"Lei (هي)",form:"È restata"},
  {person:"Noi (احنا)",form:"Siamo restati/e"},
  {person:"Voi (انتم)",form:"Siete restati/e"},
  {person:"Loro (هم)",form:"Sono restati/e"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Restavo"},
  {person:"Tu (أنت)",form:"Restavi"},
  {person:"Lui (هو)",form:"Restava"},
  {person:"Lei (هي)",form:"Restava"},
  {person:"Noi (احنا)",form:"Restavamo"},
  {person:"Voi (انتم)",form:"Restavate"},
  {person:"Loro (هم)",form:"Restavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Resta"},
  {person:"Lei (رسمي - هو/هي)",form:"Resti"},
  {person:"Noi (احنا)",form:"Restiamo"},
  {person:"Voi (انتم)",form:"Restate"},
  {person:"Loro (هم)",form:"Restino"}
 ]}
},
{
 it:"Ringraziare", ar:"يشكر",
 presente:[
  {person:"Io (أنا)",form:"Ringrazio"},
  {person:"Tu (أنت)",form:"Ringrazii"},
  {person:"Lui (هو)",form:"Ringrazia"},
  {person:"Lei (هي)",form:"Ringrazia"},
  {person:"Noi (احنا)",form:"Ringraziamo"},
  {person:"Voi (انتم)",form:"Ringraziate"},
  {person:"Loro (هم)",form:"Ringraziano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho ringraziato"},
  {person:"Tu (أنت)",form:"Hai ringraziato"},
  {person:"Lui (هو)",form:"Ha ringraziato"},
  {person:"Lei (هي)",form:"Ha ringraziato"},
  {person:"Noi (احنا)",form:"Abbiamo ringraziato"},
  {person:"Voi (انتم)",form:"Avete ringraziato"},
  {person:"Loro (هم)",form:"Hanno ringraziato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Ringraziavo"},
  {person:"Tu (أنت)",form:"Ringraziavi"},
  {person:"Lui (هو)",form:"Ringraziava"},
  {person:"Lei (هي)",form:"Ringraziava"},
  {person:"Noi (احنا)",form:"Ringraziavamo"},
  {person:"Voi (انتم)",form:"Ringraziavate"},
  {person:"Loro (هم)",form:"Ringraziavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Ringrazia"},
  {person:"Lei (رسمي - هو/هي)",form:"Ringrazii"},
  {person:"Noi (احنا)",form:"Ringraziiamo"},
  {person:"Voi (انتم)",form:"Ringraziate"},
  {person:"Loro (هم)",form:"Ringraziino"}
 ]}
},
{
 it:"Salutare", ar:"يسلم على",
 presente:[
  {person:"Io (أنا)",form:"Saluto"},
  {person:"Tu (أنت)",form:"Saluti"},
  {person:"Lui (هو)",form:"Saluta"},
  {person:"Lei (هي)",form:"Saluta"},
  {person:"Noi (احنا)",form:"Salutiamo"},
  {person:"Voi (انتم)",form:"Salutate"},
  {person:"Loro (هم)",form:"Salutano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho salutato"},
  {person:"Tu (أنت)",form:"Hai salutato"},
  {person:"Lui (هو)",form:"Ha salutato"},
  {person:"Lei (هي)",form:"Ha salutato"},
  {person:"Noi (احنا)",form:"Abbiamo salutato"},
  {person:"Voi (انتم)",form:"Avete salutato"},
  {person:"Loro (هم)",form:"Hanno salutato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Salutavo"},
  {person:"Tu (أنت)",form:"Salutavi"},
  {person:"Lui (هو)",form:"Salutava"},
  {person:"Lei (هي)",form:"Salutava"},
  {person:"Noi (احنا)",form:"Salutavamo"},
  {person:"Voi (انتم)",form:"Salutavate"},
  {person:"Loro (هم)",form:"Salutavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Saluta"},
  {person:"Lei (رسمي - هو/هي)",form:"Saluti"},
  {person:"Noi (احنا)",form:"Salutiamo"},
  {person:"Voi (انتم)",form:"Salutate"},
  {person:"Loro (هم)",form:"Salutino"}
 ]}
},
{
 it:"Studiare", ar:"يدرس",
 presente:[
  {person:"Io (أنا)",form:"Studio"},
  {person:"Tu (أنت)",form:"Studi"},
  {person:"Lui (هو)",form:"Studia"},
  {person:"Lei (هي)",form:"Studia"},
  {person:"Noi (احنا)",form:"Studiamo"},
  {person:"Voi (انتم)",form:"Studiate"},
  {person:"Loro (هم)",form:"Studiano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho studiato"},
  {person:"Tu (أنت)",form:"Hai studiato"},
  {person:"Lui (هو)",form:"Ha studiato"},
  {person:"Lei (هي)",form:"Ha studiato"},
  {person:"Noi (احنا)",form:"Abbiamo studiato"},
  {person:"Voi (انتم)",form:"Avete studiato"},
  {person:"Loro (هم)",form:"Hanno studiato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Studiavo"},
  {person:"Tu (أنت)",form:"Studiavi"},
  {person:"Lui (هو)",form:"Studiava"},
  {person:"Lei (هي)",form:"Studiava"},
  {person:"Noi (احنا)",form:"Studiavamo"},
  {person:"Voi (انتم)",form:"Studiavate"},
  {person:"Loro (هم)",form:"Studiavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Studia"},
  {person:"Lei (رسمي - هو/هي)",form:"Studi"},
  {person:"Noi (احنا)",form:"Studiamo"},
  {person:"Voi (انتم)",form:"Studiate"},
  {person:"Loro (هم)",form:"Studino"}
 ]}
},
{
 it:"Telefonare", ar:"يتصل تليفونيا",
 presente:[
  {person:"Io (أنا)",form:"Telefono"},
  {person:"Tu (أنت)",form:"Telefoni"},
  {person:"Lui (هو)",form:"Telefona"},
  {person:"Lei (هي)",form:"Telefona"},
  {person:"Noi (احنا)",form:"Telefoniamo"},
  {person:"Voi (انتم)",form:"Telefonate"},
  {person:"Loro (هم)",form:"Telefonano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho telefonato"},
  {person:"Tu (أنت)",form:"Hai telefonato"},
  {person:"Lui (هو)",form:"Ha telefonato"},
  {person:"Lei (هي)",form:"Ha telefonato"},
  {person:"Noi (احنا)",form:"Abbiamo telefonato"},
  {person:"Voi (انتم)",form:"Avete telefonato"},
  {person:"Loro (هم)",form:"Hanno telefonato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Telefonavo"},
  {person:"Tu (أنت)",form:"Telefonavi"},
  {person:"Lui (هو)",form:"Telefonava"},
  {person:"Lei (هي)",form:"Telefonava"},
  {person:"Noi (احنا)",form:"Telefonavamo"},
  {person:"Voi (انتم)",form:"Telefonavate"},
  {person:"Loro (هم)",form:"Telefonavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Telefona"},
  {person:"Lei (رسمي - هو/هي)",form:"Telefoni"},
  {person:"Noi (احنا)",form:"Telefoniamo"},
  {person:"Voi (انتم)",form:"Telefonate"},
  {person:"Loro (هم)",form:"Telefonino"}
 ]}
},
{
 it:"Tornare", ar:"يرجع",
 presente:[
  {person:"Io (أنا)",form:"Torno"},
  {person:"Tu (أنت)",form:"Torni"},
  {person:"Lui (هو)",form:"Torna"},
  {person:"Lei (هي)",form:"Torna"},
  {person:"Noi (احنا)",form:"Torniamo"},
  {person:"Voi (انتم)",form:"Tornate"},
  {person:"Loro (هم)",form:"Tornano"}
 ],
 passato:{aux:"essere",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono tornato/a"},
  {person:"Tu (أنت)",form:"Sei tornato/a"},
  {person:"Lui (هو)",form:"È tornato"},
  {person:"Lei (هي)",form:"È tornata"},
  {person:"Noi (احنا)",form:"Siamo tornati/e"},
  {person:"Voi (انتم)",form:"Siete tornati/e"},
  {person:"Loro (هم)",form:"Sono tornati/e"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Tornavo"},
  {person:"Tu (أنت)",form:"Tornavi"},
  {person:"Lui (هو)",form:"Tornava"},
  {person:"Lei (هي)",form:"Tornava"},
  {person:"Noi (احنا)",form:"Tornavamo"},
  {person:"Voi (انتم)",form:"Tornavate"},
  {person:"Loro (هم)",form:"Tornavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Torna"},
  {person:"Lei (رسمي - هو/هي)",form:"Torni"},
  {person:"Noi (احنا)",form:"Torniamo"},
  {person:"Voi (انتم)",form:"Tornate"},
  {person:"Loro (هم)",form:"Tornino"}
 ]}
},
{
 it:"Trovare", ar:"يلاقي",
 presente:[
  {person:"Io (أنا)",form:"Trovo"},
  {person:"Tu (أنت)",form:"Trovi"},
  {person:"Lui (هو)",form:"Trova"},
  {person:"Lei (هي)",form:"Trova"},
  {person:"Noi (احنا)",form:"Troviamo"},
  {person:"Voi (انتم)",form:"Trovate"},
  {person:"Loro (هم)",form:"Trovano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho trovato"},
  {person:"Tu (أنت)",form:"Hai trovato"},
  {person:"Lui (هو)",form:"Ha trovato"},
  {person:"Lei (هي)",form:"Ha trovato"},
  {person:"Noi (احنا)",form:"Abbiamo trovato"},
  {person:"Voi (انتم)",form:"Avete trovato"},
  {person:"Loro (هم)",form:"Hanno trovato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Trovavo"},
  {person:"Tu (أنت)",form:"Trovavi"},
  {person:"Lui (هو)",form:"Trovava"},
  {person:"Lei (هي)",form:"Trovava"},
  {person:"Noi (احنا)",form:"Trovavamo"},
  {person:"Voi (انتم)",form:"Trovavate"},
  {person:"Loro (هم)",form:"Trovavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Trova"},
  {person:"Lei (رسمي - هو/هي)",form:"Trovi"},
  {person:"Noi (احنا)",form:"Troviamo"},
  {person:"Voi (انتم)",form:"Trovate"},
  {person:"Loro (هم)",form:"Trovino"}
 ]}
},
{
 it:"Viaggiare", ar:"يسافر (يرحل)",
 presente:[
  {person:"Io (أنا)",form:"Viaggio"},
  {person:"Tu (أنت)",form:"Viaggii"},
  {person:"Lui (هو)",form:"Viaggia"},
  {person:"Lei (هي)",form:"Viaggia"},
  {person:"Noi (احنا)",form:"Viaggiamo"},
  {person:"Voi (انتم)",form:"Viaggiate"},
  {person:"Loro (هم)",form:"Viaggiano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho viaggiato"},
  {person:"Tu (أنت)",form:"Hai viaggiato"},
  {person:"Lui (هو)",form:"Ha viaggiato"},
  {person:"Lei (هي)",form:"Ha viaggiato"},
  {person:"Noi (احنا)",form:"Abbiamo viaggiato"},
  {person:"Voi (انتم)",form:"Avete viaggiato"},
  {person:"Loro (هم)",form:"Hanno viaggiato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Viaggiavo"},
  {person:"Tu (أنت)",form:"Viaggiavi"},
  {person:"Lui (هو)",form:"Viaggiava"},
  {person:"Lei (هي)",form:"Viaggiava"},
  {person:"Noi (احنا)",form:"Viaggiavamo"},
  {person:"Voi (انتم)",form:"Viaggiavate"},
  {person:"Loro (هم)",form:"Viaggiavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Viaggia"},
  {person:"Lei (رسمي - هو/هي)",form:"Viaggii"},
  {person:"Noi (احنا)",form:"Viaggiiamo"},
  {person:"Voi (انتم)",form:"Viaggiate"},
  {person:"Loro (هم)",form:"Viaggiino"}
 ]}
},
{
 it:"Fare", ar:"يعمل / يصنع",
 presente:[
  {person:"Io (أنا)",form:"Faccio"},
  {person:"Tu (أنت)",form:"Fai"},
  {person:"Lui (هو)",form:"Fa"},
  {person:"Lei (هي)",form:"Fa"},
  {person:"Noi (احنا)",form:"Facciamo"},
  {person:"Voi (انتم)",form:"Fate"},
  {person:"Loro (هم)",form:"Fanno"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho fatto"},
  {person:"Tu (أنت)",form:"Hai fatto"},
  {person:"Lui (هو)",form:"Ha fatto"},
  {person:"Lei (هي)",form:"Ha fatto"},
  {person:"Noi (احنا)",form:"Abbiamo fatto"},
  {person:"Voi (انتم)",form:"Avete fatto"},
  {person:"Loro (هم)",form:"Hanno fatto"}
 ]},
 imperfetto:{regular:false,rows:[
  {person:"Io (أنا)",form:"Facevo"},
  {person:"Tu (أنت)",form:"Facevi"},
  {person:"Lui (هو)",form:"Faceva"},
  {person:"Lei (هي)",form:"Faceva"},
  {person:"Noi (احنا)",form:"Facevamo"},
  {person:"Voi (انتم)",form:"Facevate"},
  {person:"Loro (هم)",form:"Facevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Fa' / Fai"},
  {person:"Lei (رسمي - هو/هي)",form:"Faccia"},
  {person:"Noi (احنا)",form:"Facciamo"},
  {person:"Voi (انتم)",form:"Fate"},
  {person:"Loro (هم)",form:"Facciano"}
 ]}
},
{
 it:"Dare", ar:"يعطي",
 presente:[
  {person:"Io (أنا)",form:"Do"},
  {person:"Tu (أنت)",form:"Dai"},
  {person:"Lui (هو)",form:"Dà"},
  {person:"Lei (هي)",form:"Dà"},
  {person:"Noi (احنا)",form:"Diamo"},
  {person:"Voi (انتم)",form:"Date"},
  {person:"Loro (هم)",form:"Danno"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho dato"},
  {person:"Tu (أنت)",form:"Hai dato"},
  {person:"Lui (هو)",form:"Ha dato"},
  {person:"Lei (هي)",form:"Ha dato"},
  {person:"Noi (احنا)",form:"Abbiamo dato"},
  {person:"Voi (انتم)",form:"Avete dato"},
  {person:"Loro (هم)",form:"Hanno dato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Davo"},
  {person:"Tu (أنت)",form:"Davi"},
  {person:"Lui (هو)",form:"Dava"},
  {person:"Lei (هي)",form:"Dava"},
  {person:"Noi (احنا)",form:"Davamo"},
  {person:"Voi (انتم)",form:"Davate"},
  {person:"Loro (هم)",form:"Davano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Da' / Dai"},
  {person:"Lei (رسمي - هو/هي)",form:"Dia"},
  {person:"Noi (احنا)",form:"Diamo"},
  {person:"Voi (انتم)",form:"Date"},
  {person:"Loro (هم)",form:"Diano"}
 ]}
},
{
 it:"Funzionare", ar:"يشتقل (عن جهاز/آلة)",
 presente:[
  {person:"Io (أنا)",form:"Funziono"},
  {person:"Tu (أنت)",form:"Funzioni"},
  {person:"Lui (هو)",form:"Funziona"},
  {person:"Lei (هي)",form:"Funziona"},
  {person:"Noi (احنا)",form:"Funzioniamo"},
  {person:"Voi (انتم)",form:"Funzionate"},
  {person:"Loro (هم)",form:"Funzionano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho funzionato"},
  {person:"Tu (أنت)",form:"Hai funzionato"},
  {person:"Lui (هو)",form:"Ha funzionato"},
  {person:"Lei (هي)",form:"Ha funzionato"},
  {person:"Noi (احنا)",form:"Abbiamo funzionato"},
  {person:"Voi (انتم)",form:"Avete funzionato"},
  {person:"Loro (هم)",form:"Hanno funzionato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Funzionavo"},
  {person:"Tu (أنت)",form:"Funzionavi"},
  {person:"Lui (هو)",form:"Funzionava"},
  {person:"Lei (هي)",form:"Funzionava"},
  {person:"Noi (احنا)",form:"Funzionavamo"},
  {person:"Voi (انتم)",form:"Funzionavate"},
  {person:"Loro (هم)",form:"Funzionavano"}
 ]},
 imperativo:{note:"فعل بيتقال عن الأجهزة/الآلات، فصيغة الأمر موجودة نحويًا بس مش بتستعمل في الكلام العادي كتير",rows:[
  {person:"Tu (أنت)",form:"Funziona"},
  {person:"Lei (رسمي - هو/هي)",form:"Funzioni"},
  {person:"Noi (احنا)",form:"Funzioniamo"},
  {person:"Voi (انتم)",form:"Funzionate"},
  {person:"Loro (هم)",form:"Funzionino"}
 ]}
},
{
 it:"Parlare", ar:"يتكلم",
 presente:[
  {person:"Io (أنا)",form:"Parlo"},
  {person:"Tu (أنت)",form:"Parli"},
  {person:"Lui (هو)",form:"Parla"},
  {person:"Lei (هي)",form:"Parla"},
  {person:"Noi (احنا)",form:"Parliamo"},
  {person:"Voi (انتم)",form:"Parlate"},
  {person:"Loro (هم)",form:"Parlano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho parlato"},
  {person:"Tu (أنت)",form:"Hai parlato"},
  {person:"Lui (هو)",form:"Ha parlato"},
  {person:"Lei (هي)",form:"Ha parlato"},
  {person:"Noi (احنا)",form:"Abbiamo parlato"},
  {person:"Voi (انتم)",form:"Avete parlato"},
  {person:"Loro (هم)",form:"Hanno parlato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Parlavo"},
  {person:"Tu (أنت)",form:"Parlavi"},
  {person:"Lui (هو)",form:"Parlava"},
  {person:"Lei (هي)",form:"Parlava"},
  {person:"Noi (احنا)",form:"Parlavamo"},
  {person:"Voi (انتم)",form:"Parlavate"},
  {person:"Loro (هم)",form:"Parlavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Parla"},
  {person:"Lei (رسمي - هو/هي)",form:"Parli"},
  {person:"Noi (احنا)",form:"Parliamo"},
  {person:"Voi (انتم)",form:"Parlate"},
  {person:"Loro (هم)",form:"Parlino"}
 ]}
},
{
 it:"Passeggiare", ar:"يتمشى",
 presente:[
  {person:"Io (أنا)",form:"Passeggio"},
  {person:"Tu (أنت)",form:"Passeggii"},
  {person:"Lui (هو)",form:"Passeggia"},
  {person:"Lei (هي)",form:"Passeggia"},
  {person:"Noi (احنا)",form:"Passeggiamo"},
  {person:"Voi (انتم)",form:"Passeggiate"},
  {person:"Loro (هم)",form:"Passeggiano"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho passeggiato"},
  {person:"Tu (أنت)",form:"Hai passeggiato"},
  {person:"Lui (هو)",form:"Ha passeggiato"},
  {person:"Lei (هي)",form:"Ha passeggiato"},
  {person:"Noi (احنا)",form:"Abbiamo passeggiato"},
  {person:"Voi (انتم)",form:"Avete passeggiato"},
  {person:"Loro (هم)",form:"Hanno passeggiato"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Passeggiavo"},
  {person:"Tu (أنت)",form:"Passeggiavi"},
  {person:"Lui (هو)",form:"Passeggiava"},
  {person:"Lei (هي)",form:"Passeggiava"},
  {person:"Noi (احنا)",form:"Passeggiavamo"},
  {person:"Voi (انتم)",form:"Passeggiavate"},
  {person:"Loro (هم)",form:"Passeggiavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Passeggia"},
  {person:"Lei (رسمي - هو/هي)",form:"Passeggii"},
  {person:"Noi (احنا)",form:"Passeggiiamo"},
  {person:"Voi (انتم)",form:"Passeggiate"},
  {person:"Loro (هم)",form:"Passeggiino"}
 ]}
},
{
 it:"Svegliarsi", ar:"يصحى / يستيقظ",
 presente:[
  {person:"Io (أنا)",form:"Mi sveglio"},
  {person:"Tu (أنت)",form:"Ti svegli"},
  {person:"Lui (هو)",form:"Si sveglia"},
  {person:"Lei (هي)",form:"Si sveglia"},
  {person:"Noi (احنا)",form:"Ci svegliamo"},
  {person:"Voi (انتم)",form:"Vi svegliate"},
  {person:"Loro (هم)",form:"Si svegliano"}
 ],
 passato:{aux:"essere",regular:true,rows:[
  {person:"Io (أنا)",form:"Mi sono svegliato/a"},
  {person:"Tu (أنت)",form:"Ti sei svegliato/a"},
  {person:"Lui (هو)",form:"Si è svegliato"},
  {person:"Lei (هي)",form:"Si è svegliata"},
  {person:"Noi (احنا)",form:"Ci siamo svegliati/e"},
  {person:"Voi (انتم)",form:"Vi siete svegliati/e"},
  {person:"Loro (هم)",form:"Si sono svegliati/e"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Mi svegliavo"},
  {person:"Tu (أنت)",form:"Ti svegliavi"},
  {person:"Lui (هو)",form:"Si svegliava"},
  {person:"Lei (هي)",form:"Si svegliava"},
  {person:"Noi (احنا)",form:"Ci svegliavamo"},
  {person:"Voi (انتم)",form:"Vi svegliavate"},
  {person:"Loro (هم)",form:"Si svegliavano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Svegliati"},
  {person:"Lei (رسمي - هو/هي)",form:"Si svegli"},
  {person:"Noi (احنا)",form:"Svegliamoci"},
  {person:"Voi (انتم)",form:"Svegliatevi"},
  {person:"Loro (هم)",form:"Si sveglino"}
 ]}
},
{
 it:"Credere", ar:"يصدق / يعتقد",
 presente:[
  {person:"Io (أنا)",form:"Credo"},
  {person:"Tu (أنت)",form:"Credi"},
  {person:"Lui (هو)",form:"Crede"},
  {person:"Lei (هي)",form:"Crede"},
  {person:"Noi (احنا)",form:"Crediamo"},
  {person:"Voi (انتم)",form:"Credete"},
  {person:"Loro (هم)",form:"Credono"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho creduto"},
  {person:"Tu (أنت)",form:"Hai creduto"},
  {person:"Lui (هو)",form:"Ha creduto"},
  {person:"Lei (هي)",form:"Ha creduto"},
  {person:"Noi (احنا)",form:"Abbiamo creduto"},
  {person:"Voi (انتم)",form:"Avete creduto"},
  {person:"Loro (هم)",form:"Hanno creduto"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Credevo"},
  {person:"Tu (أنت)",form:"Credevi"},
  {person:"Lui (هو)",form:"Credeva"},
  {person:"Lei (هي)",form:"Credeva"},
  {person:"Noi (احنا)",form:"Credevamo"},
  {person:"Voi (انتم)",form:"Credevate"},
  {person:"Loro (هم)",form:"Credevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Credi"},
  {person:"Lei (رسمي - هو/هي)",form:"Creda"},
  {person:"Noi (احنا)",form:"Crediamo"},
  {person:"Voi (انتم)",form:"Credete"},
  {person:"Loro (هم)",form:"Credano"}
 ]}
},
{
 it:"Leggere", ar:"يقرا",
 presente:[
  {person:"Io (أنا)",form:"Leggo"},
  {person:"Tu (أنت)",form:"Leggi"},
  {person:"Lui (هو)",form:"Legge"},
  {person:"Lei (هي)",form:"Legge"},
  {person:"Noi (احنا)",form:"Leggiamo"},
  {person:"Voi (انتم)",form:"Leggete"},
  {person:"Loro (هم)",form:"Leggono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho letto"},
  {person:"Tu (أنت)",form:"Hai letto"},
  {person:"Lui (هو)",form:"Ha letto"},
  {person:"Lei (هي)",form:"Ha letto"},
  {person:"Noi (احنا)",form:"Abbiamo letto"},
  {person:"Voi (انتم)",form:"Avete letto"},
  {person:"Loro (هم)",form:"Hanno letto"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Leggevo"},
  {person:"Tu (أنت)",form:"Leggevi"},
  {person:"Lui (هو)",form:"Leggeva"},
  {person:"Lei (هي)",form:"Leggeva"},
  {person:"Noi (احنا)",form:"Leggevamo"},
  {person:"Voi (انتم)",form:"Leggevate"},
  {person:"Loro (هم)",form:"Leggevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Leggi"},
  {person:"Lei (رسمي - هو/هي)",form:"Legga"},
  {person:"Noi (احنا)",form:"Leggiamo"},
  {person:"Voi (انتم)",form:"Leggete"},
  {person:"Loro (هم)",form:"Leggano"}
 ]}
},
{
 it:"Prendere", ar:"ياخد",
 presente:[
  {person:"Io (أنا)",form:"Prendo"},
  {person:"Tu (أنت)",form:"Prendi"},
  {person:"Lui (هو)",form:"Prende"},
  {person:"Lei (هي)",form:"Prende"},
  {person:"Noi (احنا)",form:"Prendiamo"},
  {person:"Voi (انتم)",form:"Prendete"},
  {person:"Loro (هم)",form:"Prendono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho preso"},
  {person:"Tu (أنت)",form:"Hai preso"},
  {person:"Lui (هو)",form:"Ha preso"},
  {person:"Lei (هي)",form:"Ha preso"},
  {person:"Noi (احنا)",form:"Abbiamo preso"},
  {person:"Voi (انتم)",form:"Avete preso"},
  {person:"Loro (هم)",form:"Hanno preso"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Prendevo"},
  {person:"Tu (أنت)",form:"Prendevi"},
  {person:"Lui (هو)",form:"Prendeva"},
  {person:"Lei (هي)",form:"Prendeva"},
  {person:"Noi (احنا)",form:"Prendevamo"},
  {person:"Voi (انتم)",form:"Prendevate"},
  {person:"Loro (هم)",form:"Prendevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Prendi"},
  {person:"Lei (رسمي - هو/هي)",form:"Prenda"},
  {person:"Noi (احنا)",form:"Prendiamo"},
  {person:"Voi (انتم)",form:"Prendete"},
  {person:"Loro (هم)",form:"Prendano"}
 ]}
},
{
 it:"Promettere", ar:"يوعد",
 presente:[
  {person:"Io (أنا)",form:"Prometto"},
  {person:"Tu (أنت)",form:"Prometti"},
  {person:"Lui (هو)",form:"Promette"},
  {person:"Lei (هي)",form:"Promette"},
  {person:"Noi (احنا)",form:"Promettiamo"},
  {person:"Voi (انتم)",form:"Promettete"},
  {person:"Loro (هم)",form:"Promettono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho promesso"},
  {person:"Tu (أنت)",form:"Hai promesso"},
  {person:"Lui (هو)",form:"Ha promesso"},
  {person:"Lei (هي)",form:"Ha promesso"},
  {person:"Noi (احنا)",form:"Abbiamo promesso"},
  {person:"Voi (انتم)",form:"Avete promesso"},
  {person:"Loro (هم)",form:"Hanno promesso"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Promettevo"},
  {person:"Tu (أنت)",form:"Promettevi"},
  {person:"Lui (هو)",form:"Prometteva"},
  {person:"Lei (هي)",form:"Prometteva"},
  {person:"Noi (احنا)",form:"Promettevamo"},
  {person:"Voi (انتم)",form:"Promettevate"},
  {person:"Loro (هم)",form:"Promettevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Prometti"},
  {person:"Lei (رسمي - هو/هي)",form:"Prometta"},
  {person:"Noi (احنا)",form:"Promettiamo"},
  {person:"Voi (انتم)",form:"Promettete"},
  {person:"Loro (هم)",form:"Promettano"}
 ]}
},
{
 it:"Scrivere", ar:"يكتب",
 presente:[
  {person:"Io (أنا)",form:"Scrivo"},
  {person:"Tu (أنت)",form:"Scrivi"},
  {person:"Lui (هو)",form:"Scrive"},
  {person:"Lei (هي)",form:"Scrive"},
  {person:"Noi (احنا)",form:"Scriviamo"},
  {person:"Voi (انتم)",form:"Scrivete"},
  {person:"Loro (هم)",form:"Scrivono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho scritto"},
  {person:"Tu (أنت)",form:"Hai scritto"},
  {person:"Lui (هو)",form:"Ha scritto"},
  {person:"Lei (هي)",form:"Ha scritto"},
  {person:"Noi (احنا)",form:"Abbiamo scritto"},
  {person:"Voi (انتم)",form:"Avete scritto"},
  {person:"Loro (هم)",form:"Hanno scritto"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Scrivevo"},
  {person:"Tu (أنت)",form:"Scrivevi"},
  {person:"Lui (هو)",form:"Scriveva"},
  {person:"Lei (هي)",form:"Scriveva"},
  {person:"Noi (احنا)",form:"Scrivevamo"},
  {person:"Voi (انتم)",form:"Scrivevate"},
  {person:"Loro (هم)",form:"Scrivevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Scrivi"},
  {person:"Lei (رسمي - هو/هي)",form:"Scriva"},
  {person:"Noi (احنا)",form:"Scriviamo"},
  {person:"Voi (انتم)",form:"Scrivete"},
  {person:"Loro (هم)",form:"Scrivano"}
 ]}
},
{
 it:"Vedere", ar:"يشوف / يرى",
 presente:[
  {person:"Io (أنا)",form:"Vedo"},
  {person:"Tu (أنت)",form:"Vedi"},
  {person:"Lui (هو)",form:"Vede"},
  {person:"Lei (هي)",form:"Vede"},
  {person:"Noi (احنا)",form:"Vediamo"},
  {person:"Voi (انتم)",form:"Vedete"},
  {person:"Loro (هم)",form:"Vedono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho visto"},
  {person:"Tu (أنت)",form:"Hai visto"},
  {person:"Lui (هو)",form:"Ha visto"},
  {person:"Lei (هي)",form:"Ha visto"},
  {person:"Noi (احنا)",form:"Abbiamo visto"},
  {person:"Voi (انتم)",form:"Avete visto"},
  {person:"Loro (هم)",form:"Hanno visto"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Vedevo"},
  {person:"Tu (أنت)",form:"Vedevi"},
  {person:"Lui (هو)",form:"Vedeva"},
  {person:"Lei (هي)",form:"Vedeva"},
  {person:"Noi (احنا)",form:"Vedevamo"},
  {person:"Voi (انتم)",form:"Vedevate"},
  {person:"Loro (هم)",form:"Vedevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Vedi"},
  {person:"Lei (رسمي - هو/هي)",form:"Veda"},
  {person:"Noi (احنا)",form:"Vediamo"},
  {person:"Voi (انتم)",form:"Vedete"},
  {person:"Loro (هم)",form:"Vedano"}
 ]}
},
{
 it:"Vendere", ar:"يبيع",
 presente:[
  {person:"Io (أنا)",form:"Vendo"},
  {person:"Tu (أنت)",form:"Vendi"},
  {person:"Lui (هو)",form:"Vende"},
  {person:"Lei (هي)",form:"Vende"},
  {person:"Noi (احنا)",form:"Vendiamo"},
  {person:"Voi (انتم)",form:"Vendete"},
  {person:"Loro (هم)",form:"Vendono"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho venduto"},
  {person:"Tu (أنت)",form:"Hai venduto"},
  {person:"Lui (هو)",form:"Ha venduto"},
  {person:"Lei (هي)",form:"Ha venduto"},
  {person:"Noi (احنا)",form:"Abbiamo venduto"},
  {person:"Voi (انتم)",form:"Avete venduto"},
  {person:"Loro (هم)",form:"Hanno venduto"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Vendevo"},
  {person:"Tu (أنت)",form:"Vendevi"},
  {person:"Lui (هو)",form:"Vendeva"},
  {person:"Lei (هي)",form:"Vendeva"},
  {person:"Noi (احنا)",form:"Vendevamo"},
  {person:"Voi (انتم)",form:"Vendevate"},
  {person:"Loro (هم)",form:"Vendevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Vendi"},
  {person:"Lei (رسمي - هو/هي)",form:"Venda"},
  {person:"Noi (احنا)",form:"Vendiamo"},
  {person:"Voi (انتم)",form:"Vendete"},
  {person:"Loro (هم)",form:"Vendano"}
 ]}
},
{
 it:"Avere", ar:"عنده / يملك",
 presente:[
  {person:"Io (أنا)",form:"Ho"},
  {person:"Tu (أنت)",form:"Hai"},
  {person:"Lui (هو)",form:"Ha"},
  {person:"Lei (هي)",form:"Ha"},
  {person:"Noi (احنا)",form:"Abbiamo"},
  {person:"Voi (انتم)",form:"Avete"},
  {person:"Loro (هم)",form:"Hanno"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho avuto"},
  {person:"Tu (أنت)",form:"Hai avuto"},
  {person:"Lui (هو)",form:"Ha avuto"},
  {person:"Lei (هي)",form:"Ha avuto"},
  {person:"Noi (احنا)",form:"Abbiamo avuto"},
  {person:"Voi (انتم)",form:"Avete avuto"},
  {person:"Loro (هم)",form:"Hanno avuto"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Avevo"},
  {person:"Tu (أنت)",form:"Avevi"},
  {person:"Lui (هو)",form:"Aveva"},
  {person:"Lei (هي)",form:"Aveva"},
  {person:"Noi (احنا)",form:"Avevamo"},
  {person:"Voi (انتم)",form:"Avevate"},
  {person:"Loro (هم)",form:"Avevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Abbi"},
  {person:"Lei (رسمي - هو/هي)",form:"Abbia"},
  {person:"Noi (احنا)",form:"Abbiamo"},
  {person:"Voi (انتم)",form:"Abbiate"},
  {person:"Loro (هم)",form:"Abbiano"}
 ]}
},
{
 it:"Essere", ar:"يكون",
 presente:[
  {person:"Io (أنا)",form:"Sono"},
  {person:"Tu (أنت)",form:"Sei"},
  {person:"Lui (هو)",form:"È"},
  {person:"Lei (هي)",form:"È"},
  {person:"Noi (احنا)",form:"Siamo"},
  {person:"Voi (انتم)",form:"Siete"},
  {person:"Loro (هم)",form:"Sono"}
 ],
 passato:{aux:"essere",regular:false,rows:[
  {person:"Io (أنا)",form:"Sono stato/a"},
  {person:"Tu (أنت)",form:"Sei stato/a"},
  {person:"Lui (هو)",form:"È stato"},
  {person:"Lei (هي)",form:"È stata"},
  {person:"Noi (احنا)",form:"Siamo stati/e"},
  {person:"Voi (انتم)",form:"Siete stati/e"},
  {person:"Loro (هم)",form:"Sono stati/e"}
 ]},
 imperfetto:{regular:false,rows:[
  {person:"Io (أنا)",form:"Ero"},
  {person:"Tu (أنت)",form:"Eri"},
  {person:"Lui (هو)",form:"Era"},
  {person:"Lei (هي)",form:"Era"},
  {person:"Noi (احنا)",form:"Eravamo"},
  {person:"Voi (انتم)",form:"Eravate"},
  {person:"Loro (هم)",form:"Erano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Sii"},
  {person:"Lei (رسمي - هو/هي)",form:"Sia"},
  {person:"Noi (احنا)",form:"Siamo"},
  {person:"Voi (انتم)",form:"Siate"},
  {person:"Loro (هم)",form:"Siano"}
 ]}
},
{
 it:"Potere", ar:"يقدر / يستطيع",
 presente:[
  {person:"Io (أنا)",form:"Posso"},
  {person:"Tu (أنت)",form:"Puoi"},
  {person:"Lui (هو)",form:"Può"},
  {person:"Lei (هي)",form:"Può"},
  {person:"Noi (احنا)",form:"Possiamo"},
  {person:"Voi (انتم)",form:"Potete"},
  {person:"Loro (هم)",form:"Possono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho potuto"},
  {person:"Tu (أنت)",form:"Hai potuto"},
  {person:"Lui (هو)",form:"Ha potuto"},
  {person:"Lei (هي)",form:"Ha potuto"},
  {person:"Noi (احنا)",form:"Abbiamo potuto"},
  {person:"Voi (انتم)",form:"Avete potuto"},
  {person:"Loro (هم)",form:"Hanno potuto"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Potevo"},
  {person:"Tu (أنت)",form:"Potevi"},
  {person:"Lui (هو)",form:"Poteva"},
  {person:"Lei (هي)",form:"Poteva"},
  {person:"Noi (احنا)",form:"Potevamo"},
  {person:"Voi (انتم)",form:"Potevate"},
  {person:"Loro (هم)",form:"Potevano"}
 ]},
 imperativo:{note:"فعل مساعد (modal) مش بيتعملوه في صيوغة الأمر في اللَغة الطبيعية لأن معناه \"يقدر\" مش أمر",rows:[
  {person:"Tu (أنت)",form:"—"},
  {person:"Lei (رسمي - هو/هي)",form:"—"},
  {person:"Noi (احنا)",form:"—"},
  {person:"Voi (انتم)",form:"—"},
  {person:"Loro (هم)",form:"—"}
 ]}
},
{
 it:"Sapere", ar:"يعرف",
 presente:[
  {person:"Io (أنا)",form:"So"},
  {person:"Tu (أنت)",form:"Sai"},
  {person:"Lui (هو)",form:"Sa"},
  {person:"Lei (هي)",form:"Sa"},
  {person:"Noi (احنا)",form:"Sappiamo"},
  {person:"Voi (انتم)",form:"Sapete"},
  {person:"Loro (هم)",form:"Sanno"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho saputo"},
  {person:"Tu (أنت)",form:"Hai saputo"},
  {person:"Lui (هو)",form:"Ha saputo"},
  {person:"Lei (هي)",form:"Ha saputo"},
  {person:"Noi (احنا)",form:"Abbiamo saputo"},
  {person:"Voi (انتم)",form:"Avete saputo"},
  {person:"Loro (هم)",form:"Hanno saputo"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Sapevo"},
  {person:"Tu (أنت)",form:"Sapevi"},
  {person:"Lui (هو)",form:"Sapeva"},
  {person:"Lei (هي)",form:"Sapeva"},
  {person:"Noi (احنا)",form:"Sapevamo"},
  {person:"Voi (انتم)",form:"Sapevate"},
  {person:"Loro (هم)",form:"Sapevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Sappi"},
  {person:"Lei (رسمي - هو/هي)",form:"Sappia"},
  {person:"Noi (احنا)",form:"Sappiamo"},
  {person:"Voi (انتم)",form:"Sappiate"},
  {person:"Loro (هم)",form:"Sappiano"}
 ]}
},
{
 it:"Volere", ar:"عايز / يريد",
 presente:[
  {person:"Io (أنا)",form:"Voglio"},
  {person:"Tu (أنت)",form:"Vuoi"},
  {person:"Lui (هو)",form:"Vuole"},
  {person:"Lei (هي)",form:"Vuole"},
  {person:"Noi (احنا)",form:"Vogliamo"},
  {person:"Voi (انتم)",form:"Volete"},
  {person:"Loro (هم)",form:"Vogliono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho voluto"},
  {person:"Tu (أنت)",form:"Hai voluto"},
  {person:"Lui (هو)",form:"Ha voluto"},
  {person:"Lei (هي)",form:"Ha voluto"},
  {person:"Noi (احنا)",form:"Abbiamo voluto"},
  {person:"Voi (انتم)",form:"Avete voluto"},
  {person:"Loro (هم)",form:"Hanno voluto"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Volevo"},
  {person:"Tu (أنت)",form:"Volevi"},
  {person:"Lui (هو)",form:"Voleva"},
  {person:"Lei (هي)",form:"Voleva"},
  {person:"Noi (احنا)",form:"Volevamo"},
  {person:"Voi (انتم)",form:"Volevate"},
  {person:"Loro (هم)",form:"Volevano"}
 ]},
 imperativo:{note:"فعل مساعد (modal) نادر يتستعمل في الأمر، ولو استعمل بيكون في كلام رسمي جدًا مثل \"Vogliate scusare\"",rows:[
  {person:"Tu (أنت)",form:"—"},
  {person:"Lei (رسمي - هو/هي)",form:"—"},
  {person:"Noi (احنا)",form:"—"},
  {person:"Voi (انتم)",form:"Vogliate"},
  {person:"Loro (هم)",form:"—"}
 ]}
},
{
 it:"Tacere", ar:"يسكت",
 presente:[
  {person:"Io (أنا)",form:"Taccio"},
  {person:"Tu (أنت)",form:"Taci"},
  {person:"Lui (هو)",form:"Tace"},
  {person:"Lei (هي)",form:"Tace"},
  {person:"Noi (احنا)",form:"Taciamo"},
  {person:"Voi (انتم)",form:"Tacete"},
  {person:"Loro (هم)",form:"Tacciono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho taciuto"},
  {person:"Tu (أنت)",form:"Hai taciuto"},
  {person:"Lui (هو)",form:"Ha taciuto"},
  {person:"Lei (هي)",form:"Ha taciuto"},
  {person:"Noi (احنا)",form:"Abbiamo taciuto"},
  {person:"Voi (انتم)",form:"Avete taciuto"},
  {person:"Loro (هم)",form:"Hanno taciuto"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Tacevo"},
  {person:"Tu (أنت)",form:"Tacevi"},
  {person:"Lui (هو)",form:"Taceva"},
  {person:"Lei (هي)",form:"Taceva"},
  {person:"Noi (احنا)",form:"Tacevamo"},
  {person:"Voi (انتم)",form:"Tacevate"},
  {person:"Loro (هم)",form:"Tacevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Taci"},
  {person:"Lei (رسمي - هو/هي)",form:"Taccia"},
  {person:"Noi (احنا)",form:"Taciamo"},
  {person:"Voi (انتم)",form:"Tacete"},
  {person:"Loro (هم)",form:"Tacciano"}
 ]}
},
{
 it:"Apprendere", ar:"يتعلم",
 presente:[
  {person:"Io (أنا)",form:"Apprendo"},
  {person:"Tu (أنت)",form:"Apprendi"},
  {person:"Lui (هو)",form:"Apprende"},
  {person:"Lei (هي)",form:"Apprende"},
  {person:"Noi (احنا)",form:"Apprendiamo"},
  {person:"Voi (انتم)",form:"Apprendete"},
  {person:"Loro (هم)",form:"Apprendono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho appreso"},
  {person:"Tu (أنت)",form:"Hai appreso"},
  {person:"Lui (هو)",form:"Ha appreso"},
  {person:"Lei (هي)",form:"Ha appreso"},
  {person:"Noi (احنا)",form:"Abbiamo appreso"},
  {person:"Voi (انتم)",form:"Avete appreso"},
  {person:"Loro (هم)",form:"Hanno appreso"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Apprendevo"},
  {person:"Tu (أنت)",form:"Apprendevi"},
  {person:"Lui (هو)",form:"Apprendeva"},
  {person:"Lei (هي)",form:"Apprendeva"},
  {person:"Noi (احنا)",form:"Apprendevamo"},
  {person:"Voi (انتم)",form:"Apprendevate"},
  {person:"Loro (هم)",form:"Apprendevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Apprendi"},
  {person:"Lei (رسمي - هو/هي)",form:"Apprenda"},
  {person:"Noi (احنا)",form:"Apprendiamo"},
  {person:"Voi (انتم)",form:"Apprendete"},
  {person:"Loro (هم)",form:"Apprendano"}
 ]}
},
{
 it:"Capire", ar:"يفهم",
 presente:[
  {person:"Io (أنا)",form:"Capisco"},
  {person:"Tu (أنت)",form:"Capisci"},
  {person:"Lui (هو)",form:"Capisce"},
  {person:"Lei (هي)",form:"Capisce"},
  {person:"Noi (احنا)",form:"Capiamo"},
  {person:"Voi (انتم)",form:"Capite"},
  {person:"Loro (هم)",form:"Capiscono"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho capito"},
  {person:"Tu (أنت)",form:"Hai capito"},
  {person:"Lui (هو)",form:"Ha capito"},
  {person:"Lei (هي)",form:"Ha capito"},
  {person:"Noi (احنا)",form:"Abbiamo capito"},
  {person:"Voi (انتم)",form:"Avete capito"},
  {person:"Loro (هم)",form:"Hanno capito"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Capivo"},
  {person:"Tu (أنت)",form:"Capivi"},
  {person:"Lui (هو)",form:"Capiva"},
  {person:"Lei (هي)",form:"Capiva"},
  {person:"Noi (احنا)",form:"Capivamo"},
  {person:"Voi (انتم)",form:"Capivate"},
  {person:"Loro (هم)",form:"Capivano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Capisci"},
  {person:"Lei (رسمي - هو/هي)",form:"Capisca"},
  {person:"Noi (احنا)",form:"Capiamo"},
  {person:"Voi (انتم)",form:"Capite"},
  {person:"Loro (هم)",form:"Capiscano"}
 ]}
},
{
 it:"Dire", ar:"يقول",
 presente:[
  {person:"Io (أنا)",form:"Dico"},
  {person:"Tu (أنت)",form:"Dici"},
  {person:"Lui (هو)",form:"Dice"},
  {person:"Lei (هي)",form:"Dice"},
  {person:"Noi (احنا)",form:"Diciamo"},
  {person:"Voi (انتم)",form:"Dite"},
  {person:"Loro (هم)",form:"Dicono"}
 ],
 passato:{aux:"avere",regular:false,rows:[
  {person:"Io (أنا)",form:"Ho detto"},
  {person:"Tu (أنت)",form:"Hai detto"},
  {person:"Lui (هو)",form:"Ha detto"},
  {person:"Lei (هي)",form:"Ha detto"},
  {person:"Noi (احنا)",form:"Abbiamo detto"},
  {person:"Voi (انتم)",form:"Avete detto"},
  {person:"Loro (هم)",form:"Hanno detto"}
 ]},
 imperfetto:{regular:false,rows:[
  {person:"Io (أنا)",form:"Dicevo"},
  {person:"Tu (أنت)",form:"Dicevi"},
  {person:"Lui (هو)",form:"Diceva"},
  {person:"Lei (هي)",form:"Diceva"},
  {person:"Noi (احنا)",form:"Dicevamo"},
  {person:"Voi (انتم)",form:"Dicevate"},
  {person:"Loro (هم)",form:"Dicevano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Di'"},
  {person:"Lei (رسمي - هو/هي)",form:"Dica"},
  {person:"Noi (احنا)",form:"Diciamo"},
  {person:"Voi (انتم)",form:"Dite"},
  {person:"Loro (هم)",form:"Dicano"}
 ]}
},
{
 it:"Finire", ar:"يخلّص / ينتهي",
 presente:[
  {person:"Io (أنا)",form:"Finisco"},
  {person:"Tu (أنت)",form:"Finisci"},
  {person:"Lui (هو)",form:"Finisce"},
  {person:"Lei (هي)",form:"Finisce"},
  {person:"Noi (احنا)",form:"Finiamo"},
  {person:"Voi (انتم)",form:"Finite"},
  {person:"Loro (هم)",form:"Finiscono"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho finito"},
  {person:"Tu (أنت)",form:"Hai finito"},
  {person:"Lui (هو)",form:"Ha finito"},
  {person:"Lei (هي)",form:"Ha finito"},
  {person:"Noi (احنا)",form:"Abbiamo finito"},
  {person:"Voi (انتم)",form:"Avete finito"},
  {person:"Loro (هم)",form:"Hanno finito"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Finivo"},
  {person:"Tu (أنت)",form:"Finivi"},
  {person:"Lui (هو)",form:"Finiva"},
  {person:"Lei (هي)",form:"Finiva"},
  {person:"Noi (احنا)",form:"Finivamo"},
  {person:"Voi (انتم)",form:"Finivate"},
  {person:"Loro (هم)",form:"Finivano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Finisci"},
  {person:"Lei (رسمي - هو/هي)",form:"Finisca"},
  {person:"Noi (احنا)",form:"Finiamo"},
  {person:"Voi (انتم)",form:"Finite"},
  {person:"Loro (هم)",form:"Finiscano"}
 ]}
},
{
 it:"Partire", ar:"يسافر / يقادر",
 presente:[
  {person:"Io (أنا)",form:"Parto"},
  {person:"Tu (أنت)",form:"Parti"},
  {person:"Lui (هو)",form:"Parte"},
  {person:"Lei (هي)",form:"Parte"},
  {person:"Noi (احنا)",form:"Partiamo"},
  {person:"Voi (انتم)",form:"Partite"},
  {person:"Loro (هم)",form:"Partono"}
 ],
 passato:{aux:"essere",regular:true,rows:[
  {person:"Io (أنا)",form:"Sono partito/a"},
  {person:"Tu (أنت)",form:"Sei partito/a"},
  {person:"Lui (هو)",form:"È partito"},
  {person:"Lei (هي)",form:"È partita"},
  {person:"Noi (احنا)",form:"Siamo partiti/e"},
  {person:"Voi (انتم)",form:"Siete partiti/e"},
  {person:"Loro (هم)",form:"Sono partiti/e"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Partivo"},
  {person:"Tu (أنت)",form:"Partivi"},
  {person:"Lui (هو)",form:"Partiva"},
  {person:"Lei (هي)",form:"Partiva"},
  {person:"Noi (احنا)",form:"Partivamo"},
  {person:"Voi (انتم)",form:"Partivate"},
  {person:"Loro (هم)",form:"Partivano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Parti"},
  {person:"Lei (رسمي - هو/هي)",form:"Parta"},
  {person:"Noi (احنا)",form:"Partiamo"},
  {person:"Voi (انتم)",form:"Partite"},
  {person:"Loro (هم)",form:"Partano"}
 ]}
},
{
 it:"Pulire", ar:"ينظف",
 presente:[
  {person:"Io (أنا)",form:"Pulisco"},
  {person:"Tu (أنت)",form:"Pulisci"},
  {person:"Lui (هو)",form:"Pulisce"},
  {person:"Lei (هي)",form:"Pulisce"},
  {person:"Noi (احنا)",form:"Puliamo"},
  {person:"Voi (انتم)",form:"Pulite"},
  {person:"Loro (هم)",form:"Puliscono"}
 ],
 passato:{aux:"avere",regular:true,rows:[
  {person:"Io (أنا)",form:"Ho pulito"},
  {person:"Tu (أنت)",form:"Hai pulito"},
  {person:"Lui (هو)",form:"Ha pulito"},
  {person:"Lei (هي)",form:"Ha pulito"},
  {person:"Noi (احنا)",form:"Abbiamo pulito"},
  {person:"Voi (انتم)",form:"Avete pulito"},
  {person:"Loro (هم)",form:"Hanno pulito"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Pulivo"},
  {person:"Tu (أنت)",form:"Pulivi"},
  {person:"Lui (هو)",form:"Puliva"},
  {person:"Lei (هي)",form:"Puliva"},
  {person:"Noi (احنا)",form:"Pulivamo"},
  {person:"Voi (انتم)",form:"Pulivate"},
  {person:"Loro (هم)",form:"Pulivano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Pulisci"},
  {person:"Lei (رسمي - هو/هي)",form:"Pulisca"},
  {person:"Noi (احنا)",form:"Puliamo"},
  {person:"Voi (انتم)",form:"Pulite"},
  {person:"Loro (هم)",form:"Puliscano"}
 ]}
},
{
 it:"Uscire", ar:"يخرج",
 presente:[
  {person:"Io (أنا)",form:"Esco"},
  {person:"Tu (أنت)",form:"Esci"},
  {person:"Lui (هو)",form:"Esce"},
  {person:"Lei (هي)",form:"Esce"},
  {person:"Noi (احنا)",form:"Usciamo"},
  {person:"Voi (انتم)",form:"Uscite"},
  {person:"Loro (هم)",form:"Escono"}
 ],
 passato:{aux:"essere",regular:false,rows:[
  {person:"Io (أنا)",form:"Sono uscito/a"},
  {person:"Tu (أنت)",form:"Sei uscito/a"},
  {person:"Lui (هو)",form:"È uscito"},
  {person:"Lei (هي)",form:"È uscita"},
  {person:"Noi (احنا)",form:"Siamo usciti/e"},
  {person:"Voi (انتم)",form:"Siete usciti/e"},
  {person:"Loro (هم)",form:"Sono usciti/e"}
 ]},
 imperfetto:{regular:true,rows:[
  {person:"Io (أنا)",form:"Uscivo"},
  {person:"Tu (أنت)",form:"Uscivi"},
  {person:"Lui (هو)",form:"Usciva"},
  {person:"Lei (هي)",form:"Usciva"},
  {person:"Noi (احنا)",form:"Uscivamo"},
  {person:"Voi (انتم)",form:"Uscivate"},
  {person:"Loro (هم)",form:"Uscivano"}
 ]},
 imperativo:{note:null,rows:[
  {person:"Tu (أنت)",form:"Esci"},
  {person:"Lei (رسمي - هو/هي)",form:"Esca"},
  {person:"Noi (احنا)",form:"Usciamo"},
  {person:"Voi (انتم)",form:"Uscite"},
  {person:"Loro (هم)",form:"Escano"}
 ]}
},
];
