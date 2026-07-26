// ===== GRAMMAR: مكتبة القواعد الجرامرية (تُفتح بالدوس على كلمة رابطة جوه الجُمل) =====
const GRAMMAR = [
{
 id:"interrogativi",
 it:"Aggettivi e pronomi interrogativi",
 ar:"الصفات والضمائر الإستفهامية",
 icon:"❓",
 triggers:["quando","quanto","quanta","quanti","quante","chi","quale","quali"],
 blocks:[
  {type:"item", it:"Quando", ar:"متى / عندما", note:"أداة استفهام للزمن، شكلها ثابت مع كل الأشخاص ومع المفرد والجمع", examples:[
   {it:"Quando lavoravi?", ar:"إمتى كنت بتشتغل؟"},
   {it:"Quando sei arrivato?", ar:"إمتى وصلت؟"}
  ]},
  {type:"table", title:"Quanto — بتتغير حسب الجنس والعدد (الكمية)", headers:["الصيغة","الاستخدام","مثال"], rows:[
   ["Quanto","مذكر مفرد (كمية غير معدودة)","Quanto pane hai comprato? — قد إيه خبز اشتريت؟"],
   ["Quanta","مؤنث مفرد (كمية غير معدودة)","Quanta acqua bevi? — قد إيه بتشرب مياه؟"],
   ["Quanti","مذكر جمع (أشياء معدودة)","Quanti libri hai letto? — كام كتاب قريت؟"],
   ["Quante","مؤنث جمع (أشياء معدودة)","Quante volte gli hai telefonato? — كام مرة اتصلتي بيه؟"]
  ]},
  {type:"item", it:"Chi", ar:"مين / مَن", note:"بتستخدم مع الأشخاص فقط (للعاقل)، وشكلها ثابت مع المفرد والجمع", examples:[
   {it:"Di chi è questo?", ar:"ده بتاع مين؟"},
   {it:"A chi scrivi?", ar:"بتكتب لمين؟"},
   {it:"Con chi parli?", ar:"بتتكلم مع مين؟"},
   {it:"Per chi è?", ar:"ده عشان مين؟"},
   {it:"Da chi viene?", ar:"جاي من عند مين؟"}
  ]},
  {type:"table", title:"Quale / Quali", headers:["الصيغة","الاستخدام","مثال"], rows:[
   ["Quale","مذكر ومؤنث مفرد — أيّ واحد","Quale libro preferisci? — بتفضل أي كتاب؟"],
   ["Quali","مذكر ومؤنث جمع — أيّ (جمع)","Quali film hai visto? — شفت أي أفلام؟"]
  ]},
  {type:"item", it:"Che / Cosa / Che cosa", ar:"إيه / ماذا", note:"التلاتة معناهم واحد، وCosa هي الأكتر استخدام في المحادثة اليومية", examples:[
   {it:"Che ore sono?", ar:"الساعة كام؟"},
   {it:"Cosa fai stasera?", ar:"عامل إيه الليلة؟"},
   {it:"Che cosa vuoi?", ar:"عايز إيه؟"}
  ]},
  {type:"note", ar:"⚠️ Quando مش بس أداة سؤال — بتستخدم كمان كأداة ربط زمني جوه الجملة (زي mentre تقريباً) عشان تقول 'وقت ما / لما': بتيجي غالباً مع Imperfetto عشان تحكي الحدث اللي كان مستمر، والفعل التاني بيكون Passato Prossimo عشان الحدث اللي قاطعه أو حصل في نفس اللحظة."},
  {type:"item", it:"Quando كأداة ربط (مش سؤال)", ar:"", examples:[
   {it:"Quando camminavi, hai visto Marco", ar:"وانت ماشي، شفت ماركو"},
   {it:"Ti ho chiamato quando sono arrivato", ar:"كلمتك لما وصلت"}
  ]}
 ]
},
{
 id:"possessivi",
 it:"Aggettivi possessivi",
 ar:"الصفات (الضمائر) الملكية",
 icon:"👪",
 triggers:["mio","mia","miei","mie","tuo","tua","tuoi","tue","suo","sua","suoi","sue","nostro","nostra","nostri","nostre","vostro","vostra","vostri","vostre","loro"],
 blocks:[
  {type:"table", title:"جدول الصفات الملكية الكامل", headers:["الشخص","مذكر مفرد","مؤنث مفرد","مذكر جمع","مؤنث جمع"], rows:[
   ["Io (أنا)","il mio","la mia","i miei","le mie"],
   ["Tu (انت)","il tuo","la tua","i tuoi","le tue"],
   ["Lui/Lei (هو/هي)","il suo","la sua","i suoi","le sue"],
   ["Noi (احنا)","il nostro","la nostra","i nostri","le nostre"],
   ["Voi (انتو)","il vostro","la vostra","i vostri","le vostre"],
   ["Loro (هم)","il loro","la loro","i loro","le loro"]
  ]},
  {type:"item", it:"أمثلة عملية", ar:"", examples:[
   {it:"Il mio amico è simpatico", ar:"صاحبي لطيف"},
   {it:"La tua casa è bella", ar:"بيتك جميل"},
   {it:"Il suo telefono è rotto", ar:"تليفونه/تليفونها باظ"},
   {it:"La nostra scuola è grande", ar:"مدرستنا كبيرة"},
   {it:"I vostri libri sono qui", ar:"كتبكم هنا"},
   {it:"Le loro idee sono ottime", ar:"أفكارهم ممتازة"}
  ]},
  {type:"note", ar:"⚠️ استثناء مهم: لما نتكلم عن فرد واحد من العيلة بصيغة المفرد وبدون صفة، بنشيل أداة التعريف (il/la): mio fratello (أخويا) مش il mio fratello. لكن أداة التعريف ترجع تاني لو الاسم جمع (i miei fratelli = أخواتي) أو لو معاه صفة (il mio fratello grande = أخويا الكبير)."}
 ]
},
{
 id:"partitivi",
 it:"Articoli partitivi",
 ar:"أدوات التبعيض (بعض من / شوية من)",
 icon:"🥖",
 triggers:["dei","degli","delle","del","dello","della"],
 blocks:[
  {type:"note", ar:"أداة التبعيض بتتكوّن من di + أداة التعريف، ومعناها 'بعض من / شوية من'. أسهل طريقة تفتكرها: هي جمع un/uno/una، وبتوصف كمية غير محددة من حاجة معدودة أو غير معدودة."},
  {type:"table", title:"مع أسماء غير معدودة (مفرد)", headers:["الصيغة","تُستخدم قبل","مثال"], rows:[
   ["Del","مذكر مفرد","Ho comprato del pane — اشتريت شوية خبز"],
   ["Dello","مذكر مفرد بيبدأ بـ s+ساكن / z / gn / ps","Metto dello zucchero — بضيف شوية سكر"],
   ["Della","مؤنث مفرد","Compro della pasta — بشتري شوية معكرونة"],
   ["Dell'","مفرد (مذكر أو مؤنث) بيبدأ بحرف متحرك","Vorrei dell'acqua — عايز شوية مياه"]
  ]},
  {type:"table", title:"مع أسماء معدودة (جمع)", headers:["الصيغة","تُستخدم قبل","مثال"], rows:[
   ["Dei","جمع مذكر (الحالة العادية)","Ho dei libri — عندي كتب (شوية كتب)"],
   ["Degli","جمع مذكر بيبدأ بـ s+ساكن / z / gn / ps أو حرف متحرك","Ho degli zaini — عندي شنط ظهر / Ho degli amici — عندي أصحاب"],
   ["Delle","جمع مؤنث","Ho delle mele — عندي تفاح (شوية تفاح)"]
  ]},
  {type:"item", it:"مقارنة سريعة (un/una ← جمعها dei/degli/delle)", ar:"", examples:[
   {it:"Ho un libro → Ho dei libri", ar:"عندي كتاب ← عندي كتب"},
   {it:"Ho una mela → Ho delle mele", ar:"عندي تفاحة ← عندي تفاح"},
   {it:"Ho uno zaino → Ho degli zaini", ar:"عندي شنطة ظهر ← عندي شنط ظهر"}
  ]}
 ]
},
{
 id:"dimostrativi",
 it:"Aggettivi e pronomi dimostrativi",
 ar:"صفات وضمائر الإشارة",
 icon:"👉",
 triggers:["questo","questa","questi","queste","quello","quella","quegli","quelle","quel"],
 blocks:[
  {type:"note", ar:"الفرق بين Aggettivo dimostrativo (صفة إشارة بتيجي قبل الاسم) و Pronome dimostrativo (ضمير إشارة بيحل محل الاسم):\n• Questo libro è buono = الكتاب ده كويس (صفة قبل اسم)\n• Questo è bello = ده حلو (ضمير بدل الاسم)\n(ملحوظة: buono هي الصفة الصحيحة اللي توصف الاسم؛ bene ظرف بيوصف الفعل زي 'sto bene' مش الاسم مباشرة)."},
  {type:"table", title:"Questo — للقريب (ده / دي / دول / دول)", headers:["","مفرد","جمع"], rows:[
   ["مذكر","Questo (ده)","Questi (دول)"],
   ["مؤنث","Questa (دي)","Queste (دول)"]
  ]},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Questo libro è interessante", ar:"الكتاب ده مثير للاهتمام"},
   {it:"Questa casa è bella", ar:"البيت ده جميل"},
   {it:"Questi ragazzi sono semplici", ar:"الشباب دول بسطاء"},
   {it:"Queste scarpe sono nuove", ar:"الجزم ده جديد"}
  ]},
  {type:"note", ar:"⚠️ لو questo/questa جت قبل كلمة بتبدأ بحرف متحرك (a,e,i,o,u)، بنحذف الـ o أو الـ a ونضيف علامة ': Quest'uomo (الراجل ده) وليس Questo uomo — Quest'amica (الصاحبة دي) وليس Questa amica."},
  {type:"table", title:"Quello — للبعيد (بيتغيّر شكله زي أداة التعريف)", headers:["الحالة","مذكر","مؤنث"], rows:[
   ["عادي (قبل حرف ساكن)","Quel (ده) — Quei (دول)","Quella (دي) — Quelle (دول)"],
   ["قبل s+ساكن / z / gn / ps","Quello (ده) — Quegli (دول)","Quella (دي) — Quelle (دول)"],
   ["قبل حرف متحرك","Quell' (ده) — Quegli (دول)","Quell' (دي) — Quelle (دول)"]
  ]},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Quel ragazzo è alto", ar:"الشاب ده طويل"},
   {it:"Quei libri sono vecchi", ar:"الكتب دي قديمة"},
   {it:"Quella ragazza è bella", ar:"البنت دي جميلة"},
   {it:"Quelle case sono grandi", ar:"البيوت دي كبيرة"},
   {it:"Quello studente è bravo", ar:"الطالب ده شاطر"},
   {it:"Quegli zaini sono vecchi", ar:"شنط الظهر دي قديمة"},
   {it:"Quell'uomo è simpatico", ar:"الراجل ده لطيف"},
   {it:"Quegli studenti studiano", ar:"الطلبة دول بيذاكروا"},
   {it:"Quell'amica è gentile", ar:"الصاحبة دي ذوق"}
  ]},
  {type:"item", it:"Pronome (لما questo/quello يحلّوا محل الاسم بالكامل)", ar:"", examples:[
   {it:"Quale preferisci? Questo o quello?", ar:"بتفضل إيه؟ ده ولا ده؟"},
   {it:"Questa è la mia borsa", ar:"دي شنطتي"},
   {it:"Quelli sono i miei amici", ar:"دول أصحابي"},
   {it:"Prendo quella", ar:"هاخد دي"}
  ]}
 ]
},
{
 id:"indefiniti",
 it:"I pronomi indefiniti",
 ar:"الضمائر غير المحددة (المجهولة)",
 icon:"🔹",
 triggers:["qualcosa","qualcuno","chiunque","ognuno","nulla","niente","tutto","tutta","tutti","tutte","nessuno","nessuna","alcuno","alcuna","alcuni","alcune","molto","molta","molti","molte","poco","poca","pochi","poche","troppo","troppa","troppi","troppe","tanto","tanta","tanti","tante","parecchio","parecchia","parecchi","parecche","altro","altra","altri","altre","certo","certa","certi","certe"],
 blocks:[
  {type:"item", it:"أولاً — ضمائر ثابتة (ما بتتغيرش)", ar:"", examples:[
   {it:"Qualcosa (حاجة ما)", ar:"Ho comprato qualcosa per te — اشتريت حاجة عشانك"},
   {it:"Qualcuno (حد ما)", ar:"Qualcuno ha bussato alla porta — في حد خبط على الباب"},
   {it:"Chiunque (أي حد / أياً كان) — للعاقل فقط، والفعل بعدها دايماً مفرد", ar:"Chiunque può sbagliare — أي حد ممكن يغلط"},
   {it:"Ognuno (كل واحد)", ar:"Ognuno deve fare il suo dovere — كل واحد لازم يعمل واجبه"},
   {it:"Nulla / Niente (لا شيء) — لو جت بعد الفعل لازم نحط Non قبل الفعل", ar:"Non ho detto niente — ما قلتش حاجة"}
  ]},
  {type:"table", title:"ثانياً — بتتغير حسب الجنس والعدد", headers:["مذكر مفرد","مؤنث مفرد","مذكر جمع","مؤنث جمع","المعنى"], rows:[
   ["Tutto","Tutta","Tutti","Tutte","كل / الجميع"],
   ["—","—","Nessuno","Nessuna","لا أحد / محدش"],
   ["Alcuno","Alcuna","Alcuni","Alcune","بعض / شوية"]
  ]},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Ho capito tutto", ar:"فهمت كل شيء"},
   {it:"Nessuno è venuto alla festa", ar:"محدش جه الحفلة"},
   {it:"Alcuni pensano diversamente", ar:"البعض بيفكر بشكل مختلف"}
  ]},
  {type:"table", title:"ثالثاً — ضمائر الكمية المبهمة", headers:["الصيغة (مذكر مفرد/مؤنث مفرد/مذكر جمع/مؤنث جمع)","المعنى","مثال"], rows:[
   ["Molto/Molta/Molti/Molte","كتير","Ho molti amici in Italia — عندي أصحاب كتير في إيطاليا"],
   ["Poco/Poca/Pochi/Poche","قليل","Ho pochi soldi oggi — معايا فلوس قليلة النهاردة"],
   ["Troppo/Troppa/Troppi/Troppe","أكتر من اللازم","Non mangiare troppo — ماتاكلش أكتر من اللازم"],
   ["Tanto/Tanta/Tanti/Tante","كتير جداً","Ho passato tanti guai — مريت بمشاكل كتير جداً"],
   ["Parecchio/Parecchia/Parecchi/Parecche","كذا واحد / كتير نوعاً ما","Ho studiato parecchio oggi — ذاكرت كتير النهاردة"]
  ]},
  {type:"table", title:"رابعاً — ضمائر التمييز والتحديد", headers:["الصيغة","المعنى","مثال"], rows:[
   ["Altro/Altra/Altri/Altre","حاجة/واحد تاني/غيره","Questa penna non scrive, ne voglio un'altra — القلم ده مش بيكتب، عايز واحد غيره"],
   ["Certo/Certa/Certi/Certe","معيّن/بعض (وكمان بتستخدم كتعبير 'طبعاً!' لوحدها)","Certi dicono la verità — البعض بيقول الحقيقة / Certo! — طبعاً!"]
  ]}
 ]
},
{
 id:"improprie",
 it:"Preposizioni improprie",
 ar:"حروف الجر غير الأصلية",
 icon:"🧭",
 triggers:["dove","destra","sinistra","sopra","sotto","dentro","fuori","dietro","davanti","lungo","vicino","lontano","prima","dopo","durante","verso","fino","senza","contro","secondo","oltre","nonostante","tranne","eccetto","salvo","mediante","tramite"],
 blocks:[
  {type:"note", ar:"'حروف الجر غير الأصلية' هي كلمات أصلها ظرف أو صفة أو اسم، لكنها بقت تُستخدم كحرف جر مع كلمة تانية (زي vicino a, davanti a, dietro a...). دي أهمها:"},
  {type:"item", it:"1) المكان والاتجاهات", ar:"", examples:[
   {it:"Dove (فين) — ظرف/ضمير استفهامي للمكان", ar:"Non sa ancora dove andare — لسه معرفش يروح فين"},
   {it:"a Destra (على اليمين)", ar:"La banca è a destra — البنك على اليمين"},
   {it:"a Sinistra (على اليسار)", ar:"La farmacia è a sinistra — الصيدلية على اليسار"},
   {it:"Sopra (فوق)", ar:"Il libro è sopra il tavolo — الكتاب فوق الترابيزة"},
   {it:"Sotto (تحت)", ar:"Il gatto è sotto il letto — القطة تحت السرير"},
   {it:"Dentro (جوّة)", ar:"Entra dentro la casa — ادخل جوة البيت"},
   {it:"Fuori (برّة)", ar:"Lui è fuori ufficio — هو برة المكتب"},
   {it:"Dietro (ورا/خلف)", ar:"La macchina è dietro il bus — العربية ورا الأتوبيس"},
   {it:"Davanti (قدام/أمام)", ar:"Fermati davanti al cinema — قف قدام السينما"},
   {it:"Lungo (على طول/بمحاذاة)", ar:"Camminiamo lungo il fiume — بنمشي على طول النهر"},
   {it:"Vicino (a) (جنب/قريب من)", ar:"Vicino a me — جنبي/قريب مني"},
   {it:"Lontano (da) (بعيد عن)", ar:"Lontano da te — بعيد عنك"}
  ]},
  {type:"item", it:"2) الزمن", ar:"", examples:[
   {it:"Prima di (قبل)", ar:"Prima di dormire, leggo il Corano — قبل ما أنام باقرأ القرآن"},
   {it:"Dopo (بعد)", ar:"Dopo la scuola, torno a casa — بعد المدرسة برجع البيت"},
   {it:"Durante (خلال/أثناء)", ar:"Durante la lezione, ascolto il professore — أثناء الدرس باسمع الأستاذ"},
   {it:"Verso (حوالي)", ar:"Arrivo verso le otto — هوصل حوالي الساعة ٨"},
   {it:"Fino a (لحد)", ar:"Lavoro fino alle sei — بشتغل لحد الساعة ٦"}
  ]},
  {type:"item", it:"3) حروف جر غير أصلية أخرى", ar:"", examples:[
   {it:"Senza (بدون)", ar:"Esco senza il telefono — بخرج بدون التليفون"},
   {it:"Contro (ضد/عكس)", ar:"Sono contro questa idea — أنا ضد الفكرة دي"},
   {it:"Secondo (حسب/وفقاً لـ)", ar:"Secondo me, è una buona idea — من رأيي دي فكرة كويسة"},
   {it:"Oltre (بعد/غير)", ar:"Oltre il ponte c'è una scuola — بعد الكوبري في مدرسة"},
   {it:"Nonostante (بالرغم من)", ar:"Nonostante la pioggia, usciamo — بالرغم من المطر بنخرج"},
   {it:"Tranne (إلا/ما عدا)", ar:"Sono arrivati tutti tranne Marco — كلهم وصلوا إلا ماركو"},
   {it:"Eccetto (باستثناء)", ar:"Mangio tutto eccetto il pesce — باكل كل شيء باستثناء السمك"},
   {it:"Salvo (إلا/باستثناء)", ar:"Tutti erano presenti salvo Anna — كل الناس كانت موجودة إلا آنا"},
   {it:"Mediante (بواسطة)", ar:"Il pagamento avviene mediante bonifico — الدفع بيتم بواسطة تحويل بنكي"},
   {it:"Tramite (عن طريق)", ar:"Ti mando il file tramite email — هبعتلك الملف عن طريق الإيميل"}
  ]}
 ]
},
{
 id:"anche_pure",
 it:"Anche / Pure",
 ar:"أيضاً / كمان (anche و pure)",
 icon:"➕",
 triggers:["anche","pure"],
 blocks:[
  {type:"note", ar:"Anche و Pure الاتنين معناهم 'كمان / أيضاً' وممكن نستخدمهم بدل بعض في أغلب الكلام العادي، وبيتحطوا عادةً قبل الكلمة اللي عايزين نأكد عليها مباشرة."},
  {type:"item", it:"Anche (كمان / أيضاً) — أكتر استخدام وحيادية", ar:"", examples:[
   {it:"Anche Marco viene alla festa", ar:"ماركو كمان جاي الحفلة"},
   {it:"Vengo anch'io", ar:"أنا كمان جاي (anche+io = بتتدمج وتصبح anch'io)"},
   {it:"Ho anche fame", ar:"أنا كمان جعان"}
  ]},
  {type:"item", it:"Pure (كمان / أيضاً) — نفس المعنى، وليها استخدام زيادة كتعبير عن الإذن/التشجيع", ar:"", examples:[
   {it:"Pure io voglio venire", ar:"أنا كمان عايز أجي"},
   {it:"Puoi pure restare", ar:"تقدر كمان تفضل هنا (بمعنى: خليك، مفيش مشكلة)"},
   {it:"Vai pure!", ar:"يلا اتفضل / روح على راحتك! (تعبير عن السماح)"}
  ]},
  {type:"note", ar:"💡 ملحوظة: anche وpure بيتحطوا قبل الكلمة اللي عايزين نأكد عليها: 'Anche tu hai ragione' (انت كمان معاك حق) غير 'Hai ragione anche tu' (لسه انت معاك حق برضو) — المعنى قريب بس مكان الكلمة بيغيّر التوكيد."}
 ]
},
{
 id:"mentre",
 it:"Mentre",
 ar:"أثناء / وفي نفس الوقت (أداة ربط زمني)",
 icon:"⏳",
 triggers:["mentre"],
 blocks:[
  {type:"note", ar:"Mentre بتربط بين حدثين حصلوا في نفس الوقت في الماضي. النمط الأكتر شيوعاً: حدث مستمر بالـ Imperfetto (كان شغال في الخلفية) + حدث تاني بالـ Passato Prossimo (حصل فجأة أو قاطعه) — بس ممكن كمان الاتنين يكونوا Imperfetto لو الحدثين مستمرين مع بعض بنفس الدرجة."},
  {type:"table", title:"النمط الشائع", headers:["الجزء","الزمن الغالب","المثال"], rows:[
   ["الحدث المستمر (اللي كان شغال)","Imperfetto","mentre guardavo la TV — وانا كنت باتفرج على التيفي"],
   ["الحدث اللي قاطعه / حصل فجأة","Passato Prossimo","ho mangiato un panino — أكلت ساندوتش"]
  ]},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Ho mangiato un panino mentre guardavo la TV", ar:"أكلت ساندوتش وأنا كنت باتفرج على التيفي"},
   {it:"Mangiavo la pasta mentre ho guardato il telefono", ar:"كنت باكل المكرونة وأنا بصيت في التليفون"},
   {it:"Hai studiato la lezione mentre ascoltavi la radio", ar:"ذاكرت الدرس وانت كنت سامع الراديو"}
  ]},
  {type:"note", ar:"⚠️ الفرق بين Mentre و Quando: Mentre بتركّز على استمرارية الحدثين مع بعض (زي 'في نفس اللحظة دي')، أما Quando غالباً بتقدّم لحظة معينة وقف عندها فعل تاني (زي 'لما حصل كذا'). في الكلام العادي كتير مبيفرقوش، بس دي القاعدة الأساسية."}
 ]
},
{
 id:"ausiliari_passato",
 it:"الفعل المساعد Avere / Essere",
 ar:"تصريف الفعلين المساعدين للـ Passato Prossimo",
 icon:"🔧",
 triggers:["ho","hai","ha","abbiamo","avete","hanno","sono","sei","è","siamo","siete"],
 blocks:[
  {type:"note", ar:"كل فعل في الـ Passato Prossimo بيتكوّن من فعل مساعد (Avere أو Essere) + Participio Passato. الفعل المساعد هو اللي بيتصرّف حسب الفاعل، مش الفعل الأساسي."},
  {type:"table", title:"Avere (الأكتر استخدامًا)", headers:["الضمير","التصريف"], rows:[
   ["Io (أنا)","Ho"],
   ["Tu (انت)","Hai"],
   ["Lui/Lei (هو/هي)","Ha"],
   ["Noi (احنا)","Abbiamo"],
   ["Voi (انتو)","Avete"],
   ["Loro (هم)","Hanno"]
  ]},
  {type:"table", title:"Essere (لأفعال الحركة والتحوّل والانعكاسية)", headers:["الضمير","التصريف"], rows:[
   ["Io (أنا)","Sono"],
   ["Tu (انت)","Sei"],
   ["Lui/Lei (هو/هي)","È"],
   ["Noi (احنا)","Siamo"],
   ["Voi (انتو)","Siete"],
   ["Loro (هم)","Sono"]
  ]},
  {type:"note", ar:"⚠️ لما نستخدم Essere، الـ Participio Passato بيتفق مع الفاعل في الجنس والعدد (زي الصفة): Sono andato (مذكر) — Sono andata (مؤنث) — Sono andati (جمع مذكر) — Sono andate (جمع مؤنث). أما مع Avere فالـ Participio بيفضل ثابت في العادة."},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Ho mangiato un panino", ar:"أكلت ساندوتش"},
   {it:"Siamo andati al parco", ar:"رحنا الحديقة"},
   {it:"Hanno comprato la spesa", ar:"اشتروا المشتريات"}
  ]}
 ]
},
{
 id:"pronomi_soggetto",
 it:"Pronomi personali soggetto",
 ar:"الضمائر الشخصية الفاعلة",
 icon:"🙋",
 triggers:["io","tu","lui","lei","noi","voi","loro"],
 blocks:[
  {type:"table", title:"الضمائر الشخصية", headers:["Italiano","بالعربي"], rows:[
   ["Io","أنا"],
   ["Tu","انت"],
   ["Lui","هو"],
   ["Lei","هي"],
   ["Noi","احنا"],
   ["Voi","انتو"],
   ["Loro","هم"]
  ]},
  {type:"note", ar:"في الإيطالي عادةً بنشيل الضمير لأن تصريف الفعل بنفسه بيدل على الفاعل (Ho mangiato = أكلت، مش لازم أقول Io ho mangiato). بس بنستخدم الضمير في حالتين: للتوكيد أو المقارنة (Io sì, ma lui no)، أو لو التصريف نفسه ممكن يلبس زي Lui/Lei في بعض الأزمنة."},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Lui ha telefonato, non lei", ar:"هو اللي اتصل، مش هي"},
   {it:"Noi eravamo a casa mentre loro erano fuori", ar:"احنا كنا في البيت وهم كانوا برة"}
  ]}
 ]
},
{
 id:"prep_semplici",
 it:"Preposizioni semplici",
 ar:"حروف الجر البسيطة",
 icon:"🔗",
 triggers:["a","in","con","di","da","su","per","tra","fra"],
 blocks:[
  {type:"table", title:"الحروف الأساسية ومعانيها", headers:["الحرف","المعنى الأساسي","مثال"], rows:[
   ["A","لـ / في / إلى (مكان محدد أو زمن)","Vado a scuola — رايح المدرسة"],
   ["In","في (داخل مكان/مدينة/بلد)","Sono in ufficio — أنا في المكتب"],
   ["Con","مع","Parlo con Marco — بتكلم مع ماركو"],
   ["Di","بتاع / من (ملكية أو أصل)","Il libro di Marco — كتاب ماركو"],
   ["Da","من (مصدر) / عند (شخص)","Vengo da casa — جاي من البيت"],
   ["Su","على / فوق","Il libro è su tavolo — الكتاب على الترابيزة"],
   ["Per","عشان / لمدة","Studio per un'ora — باذاكر لمدة ساعة"],
   ["Tra / Fra","بين / خلال (نفس المعنى، بيتختاروا حسب سهولة النطق)","Tra dieci minuti — بعد عشر دقايق"]
  ]},
  {type:"note", ar:"⚠️ لما حرف الجر (زي a, di, da, in, su) يقابل أداة تعريف (il, lo, la, i, gli, le) بيندمجوا في كلمة واحدة، زي: a+il=al, di+la=della, in+il=nel, su+il=sul... دي بتتسمى Preposizioni articolate."}
 ]
}
];
