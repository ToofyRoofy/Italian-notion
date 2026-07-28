// ===== GRAMMAR: مكتبة القواعد الجرامرية (تُفتح بالاضغط على كلمة رابطة داخل الجُمل) =====
const GRAMMAR = [
{
 id:"interrogativi",
 it:"Aggettivi e pronomi interrogativi",
 ar:"الصفات والضمائر الإستفهامية",
 icon:"❓",
 triggers:["quando","quanto","quanta","quanti","quante","chi","quale","quali"],
 blocks:[
  {type:"item", it:"Quando", ar:"متى / عندما", note:"أداة استفهام للزمن، شكلها ثابت مع كل الأشخاص ومع المفرد والجمع", examples:[
   {it:"Quando lavoravi?", ar:"متى كنت تعمل؟"},
   {it:"Quando sei arrivato?", ar:"متى وصلت؟"}
  ]},
  {type:"table", title:"Quanto — تتغير حسب الجنس والعدد (الكمية)", headers:["الصيغة","الاستخدام","مثال"], rows:[
   ["Quanto","مذكر مفرد (كمية غير معدودة)","Quanto pane hai comprato? — كم خبز اشتريت؟"],
   ["Quanta","مؤنث مفرد (كمية غير معدودة)","Quanta acqua bevi? — كم بتشرب مياه؟"],
   ["Quanti","مذكر جمع (أشياء معدودة)","Quanti libri hai letto? — كم كتبويب قريت؟"],
   ["Quante","مؤنث جمع (أشياء معدودة)","Quante volte gli hai telefonato? — كم مرة اتصلتي بيه؟"]
  ]},
  {type:"item", it:"Chi", ar:"مَن / مَن", note:"تُستخدم مع الأشخاص فقط (للعاقل)، وشكلها ثابت مع المفرد والجمع", examples:[
   {it:"Di chi è questo?", ar:"هذا بتاع مَن؟"},
   {it:"A chi scrivi?", ar:"تكتب لمَن؟"},
   {it:"Con chi parli?", ar:"تتحدث مع مَن؟"},
   {it:"Per chi è?", ar:"هذا لكي مَن؟"},
   {it:"Da chi viene?", ar:"جاي من عند مَن؟"}
  ]},
  {type:"table", title:"Quale / Quali", headers:["الصيغة","الاستخدام","مثال"], rows:[
   ["Quale","مذكر ومؤنث مفرد — أيّ واحد","Quale libro preferisci? — بتفضل أي كتبويب؟"],
   ["Quali","مذكر ومؤنث جمع — أيّ (جمع)","Quali film hai visto? — شفت أي أفلام؟"]
  ]},
  {type:"item", it:"Che / Cosa / Che cosa", ar:"ما / ماذا", note:"الثلاثة معناهم واحد، وCosa هي الأكثر استخدام في المحادثة اليومية", examples:[
   {it:"Che ore sono?", ar:"الساعة كم؟"},
   {it:"Cosa fai stasera?", ar:"كيف حالك الذيلة؟"},
   {it:"Che cosa vuoi?", ar:"تريد ما؟"}
  ]},
  {type:"note", ar:"⚠️ Quando ليست فقط أداة سؤال — تُستخدم أيضًا كأداة ربط زمنية داخل الجملة (مثل mentre تقريباً) لكي تقول 'حينما / لما': تأتي غالباً مع Imperfetto للدلالة على الحدث الذي كان مستمرًا، والفعل الآخر يكون Passato Prossimo للحدث الذي قاطعه أو حصل في نفس اللحظة."},
  {type:"item", it:"Quando كأداة ربط (ليس سؤال)", ar:"", examples:[
   {it:"Quando camminavi, hai visto Marco", ar:"وأنت ماشي، شفت ماركو"},
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
  {type:"table", title:"جدول الصفات الملكية الكمل", headers:["الشخص","مذكر مفرد","مؤنث مفرد","مذكر جمع","مؤنث جمع"], rows:[
   ["Io (أنا)","il mio","la mia","i miei","le mie"],
   ["Tu (أنت)","il tuo","la tua","i tuoi","le tue"],
   ["Lui/Lei (هو/هي)","il suo","la sua","i suoi","le sue"],
   ["Noi (نحن)","il nostro","la nostra","i nostri","le nostre"],
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
  {type:"note", ar:"⚠️ استثناء مهم: لما نتكلم عن فرد واحد من العيلة بصيغة المفرد وبدون صفة، بنشيل أداة التعريف (il/la): mio fratello (أخويا) ليس il mio fratello. لكن أداة التعريف ترجع مرة أخرى لو الاسم جمع (i miei fratelli = أخواتي) أو لو معاه صفة (il mio fratello grande = أخويا الكبير)."}
 ]
},
{
 id:"partitivi",
 it:"Articoli partitivi",
 ar:"أدوات التبعيض (بعض من / قليل من)",
 icon:"🥖",
 triggers:["dei","degli","delle","del","dello","della"],
 blocks:[
  {type:"note", ar:"أداة التبعيض تتكوّن من di + أداة التعريف، ومعناها 'بعض من / قليل من'. أسهل طريقة تتذكرها: هي جمع un/uno/una، وتصف كمية غير محددة من شيء معدودة أو غير معدودة."},
  {type:"table", title:"مع أسماء غير معدودة (مفرد)", headers:["الصيغة","تُستخدم قبل","مثال"], rows:[
   ["Del","مذكر مفرد","Ho comprato del pane — اشتريت قليل خبز"],
   ["Dello","مذكر مفرد بيبدأ بـ s+ساكن / z / gn / ps","Metto dello zucchero — بضيف قليل سكر"],
   ["Della","مؤنث مفرد","Compro della pasta — بشتري قليل معكرونة"],
   ["Dell'","مفرد (مذكر أو مؤنث) بيبدأ بحرف متحرك","Vorrei dell'acqua — تريد قليل مياه"]
  ]},
  {type:"table", title:"مع أسماء معدودة (جمع)", headers:["الصيغة","تُستخدم قبل","مثال"], rows:[
   ["Dei","جمع مذكر (الحالة العادية)","Ho dei libri — عندي كتب (قليل كتب)"],
   ["Degli","جمع مذكر بيبدأ بـ s+ساكن / z / gn / ps أو حرف متحرك","Ho degli zaini — عندي شنط ظهر / Ho degli amici — عندي أصحيحاب"],
   ["Delle","جمع مؤنث","Ho delle mele — عندي تفاح (قليل تفاح)"]
  ]},
  {type:"item", it:"مقارنة سريعة (un/una ← جمعها dei/degli/delle)", ar:"", examples:[
   {it:"Ho un libro → Ho dei libri", ar:"عندي كتبويب ← عندي كتب"},
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
  {type:"note", ar:"الفرق بين Aggettivo dimostrativo (صفة إشارة تأتي قبل الاسم) و Pronome dimostrativo (ضمير إشارة يحل محل الاسم):\n• Questo libro è buono = هذا الكتاب جيد (صفة قبل اسم)\n• Questo è bello = هذا حلو (ضمير بدل الاسم)\n(ملحوظة: buono هي الصفة الصحيحة الذي توصف الاسم؛ bene ظرف يصف الفعل مثل 'sto bene' ليس الاسم مباشرة)."},
  {type:"table", title:"Questo — للقريب (هذا / هذه / هؤلاء / هؤلاء)", headers:["","مفرد","جمع"], rows:[
   ["مذكر","Questo (هذا)","Questi (هؤلاء)"],
   ["مؤنث","Questa (هذه)","Queste (هؤلاء)"]
  ]},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Questo libro è interessante", ar:"هذا الكتاب مثير للاهممتاز"},
   {it:"Questa casa è bella", ar:"البيت هذا جميل"},
   {it:"Questi ragazzi sono semplici", ar:"الشباب هؤلاء لكنطاء"},
   {it:"Queste scarpe sono nuove", ar:"الجزم هذا جديد"}
  ]},
  {type:"note", ar:"⚠️ لو questo/questa جت قبل كلمة تبدأ بحرف متحرك (a,e,i,o,u)، بنحذف الـ o أو الـ a ونضيف علامة ': Quest'uomo (الراجل هذا) وليس Questo uomo — Quest'amica (الصاحبة هذه) وليس Questa amica."},
  {type:"table", title:"Quello — للبعيد (بيتغيّر شكله مثل أداة التعريف)", headers:["الحالة","مذكر","مؤنث"], rows:[
   ["عادي (قبل حرف ساكن)","Quel (هذا) — Quei (هؤلاء)","Quella (هذه) — Quelle (هؤلاء)"],
   ["قبل s+ساكن / z / gn / ps","Quello (هذا) — Quegli (هؤلاء)","Quella (هذه) — Quelle (هؤلاء)"],
   ["قبل حرف متحرك","Quell' (هذا) — Quegli (هؤلاء)","Quell' (هذه) — Quelle (هؤلاء)"]
  ]},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Quel ragazzo è alto", ar:"الشاب هذا طويل"},
   {it:"Quei libri sono vecchi", ar:"الكتب هذه قديمة"},
   {it:"Quella ragazza è bella", ar:"البنت هذه جميلة"},
   {it:"Quelle case sono grandi", ar:"البيوت هذه كبيرة"},
   {it:"Quello studente è bravo", ar:"الطالب هذا شاطر"},
   {it:"Quegli zaini sono vecchi", ar:"شنط الظهر هذه قديمة"},
   {it:"Quell'uomo è simpatico", ar:"الراجل هذا لطيف"},
   {it:"Quegli studenti studiano", ar:"الطلبة هؤلاء بيذاكروا"},
   {it:"Quell'amica è gentile", ar:"الصاحبة هذه ذوق"}
  ]},
  {type:"item", it:"Pronome (لما questo/quello يحلّوا محل الاسم بالكمل)", ar:"", examples:[
   {it:"Quale preferisci? Questo o quello?", ar:"بتفضل ما؟ هذا ولا ده؟"},
   {it:"Questa è la mia borsa", ar:"هذه شنطتي"},
   {it:"Quelli sono i miei amici", ar:"هؤلاء أصحيحابي"},
   {it:"Prendo quella", ar:"هاخد هذه"}
  ]}
 ]
},
{
 id:"indefiniti",
 it:"I pronomi indefiniti",
 ar:"الضمائر غير المحددة (المجهولة)",
 icon:"🔹",
 triggers:["qualcosa","qualcuno","chiunque","ognuno","nulla","niente","tutto","tutta","tutti","tutte","nessuno","nessuna","alcuno","alcuna","alcuni","alcune","molto","molta","molti","molte","poco","poca","pochi","poche","troppa","troppi","troppe","tanto","tanta","tanti","tante","parecchio","parecchia","parecchi","parecche","altro","altra","altri","altre","certo","certa","certi","certe"],
 blocks:[
  {type:"item", it:"أولاً — ضمائر ثابتة (لا تتغير)", ar:"", examples:[
   {it:"Qualcosa (شيء ما)", ar:"Ho comprato qualcosa per te — اشتريت شيء لكيك"},
   {it:"Qualcuno (حد ما)", ar:"Qualcuno ha bussato alla porta — في حد خبط على الباب"},
   {it:"Chiunque (أي حد / أياً كان) — للعاقل فقط، والفعل بعدها دايماً مفرد", ar:"Chiunque può sbagliare — أي حد ممكن يخطأ"},
   {it:"Ognuno (كل واحد)", ar:"Ognuno deve fare il suo dovere — كل واحد لازم يعمل واجبه"},
   {it:"Nulla / Niente (لا شيء) — لو جت بعد الفعل لازم نحط Non قبل الفعل", ar:"Non ho detto niente — ما قلتش شيء"}
  ]},
  {type:"table", title:"ثانياً — تتغير حسب الجنس والعدد", headers:["مذكر مفرد","مؤنث مفرد","مذكر جمع","مؤنث جمع","المعنى"], rows:[
   ["Tutto","Tutta","Tutti","Tutte","كل / الجميع"],
   ["—","—","Nessuno","Nessuna","لا أحد / محدش"],
   ["Alcuno","Alcuna","Alcuni","Alcune","بعض / قليل"]
  ]},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Ho capito tutto", ar:"فهمت كل شيء"},
   {it:"Nessuno è venuto alla festa", ar:"محدش جه الحفلة"},
   {it:"Alcuni pensano diversamente", ar:"البعض بيفكر بشكل مختلف"}
  ]},
  {type:"table", title:"ثالثاً — ضمائر الكمية المبهمة", headers:["الصيغة (مذكر مفرد/مؤنث مفرد/مذكر جمع/مؤنث جمع)","المعنى","مثال"], rows:[
   ["Molto/Molta/Molti/Molte","كثيرًا","Ho molti amici in Italia — عندي أصحيحاب كثيرًا في إيطاليا"],
   ["Poco/Poca/Pochi/Poche","قليل","Ho pochi soldi oggi — معايا فلوس قليلة النهاردة"],
   ["Troppo/Troppa/Troppi/Troppe","أكتر من اللازم","Non mangiare troppo — ماتاكلش أكتر من اللازم"],
   ["Tanto/Tanta/Tanti/Tante","كثيرًا جداً","Ho passato tanti guai — مريت بليساكل كثيرًا جداً"],
   ["Parecchio/Parecchia/Parecchi/Parecche","كذا واحد / كثيرًا نوعاً ما","Ho studiato parecchio oggi — ذاكرت كثيرًا النهاردة"]
  ]},
  {type:"table", title:"رابعاً — ضمائر التمييز والتحديد", headers:["الصيغة","المعنى","مثال"], rows:[
   ["Altro/Altra/Altri/Altre","شيء/واحد مرة أخرى/غيره","Questa penna non scrive, ne voglio un'altra — القلم هذا ليس يكتب، تريد واحد غيره"],
   ["Certo/Certa/Certi/Certe","معيّن/بعض (وأيضًا تُستخدم كتعبير 'طبعاً!' لوحدها)","Certi dicono la verità — البعض بيقول الحقيقة / Certo! — طبعاً!"]
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
  {type:"note", ar:"'حروف الجر غير الأصلية' هي كلمات أصلها ظرف أو صفة أو اسم، لكنها بقت تُستخدم كحرف جر مع كلمة مرة أخرىة (مثل vicino a, davanti a, dietro a...). هذه أهمها:"},
  {type:"item", it:"1) المكان والاتجاهات", ar:"", examples:[
   {it:"Dove (فين) — ظرف/ضمير استفهامي للمكان", ar:"Non sa ancora dove andare — ما زال معرفش يروح فين"},
   {it:"a Destra (على اليمَن)", ar:"La banca è a destra — البنك على اليمَن"},
   {it:"a Sinistra (على اليسار)", ar:"La farmacia è a sinistra — الصيدلية على اليسار"},
   {it:"Sopra (فوق)", ar:"Il libro è sopra il tavolo — الكتبويب فوق الترابيزة"},
   {it:"Sotto (تحت)", ar:"Il gatto è sotto il letto — القطة تحت السرير"},
   {it:"Dentro (جوّة)", ar:"Entra dentro la casa — ادخل جوة البيت"},
   {it:"Fuori (برّة)", ar:"Lui è fuori ufficio — هو برة المكتب"},
   {it:"Dietro (ورا/خلف)", ar:"La macchina è dietro il bus — السيارة ورا الأتوبيس"},
   {it:"Davanti (قدام/أمام)", ar:"Fermati davanti al cinema — قف قدام السينما"},
   {it:"Lungo (على طول/بمحاذاة)", ar:"Camminiamo lungo il fiume — بنليسي على طول النهر"},
   {it:"Vicino (a) (جنب/قريب من)", ar:"Vicino a me — جنبي/قريب مني"},
   {it:"Lontano (da) (بعيد عن)", ar:"Lontano da te — بعيد عنك"}
  ]},
  {type:"item", it:"2) الزمن", ar:"", examples:[
   {it:"Prima di (قبل)", ar:"Prima di dormire, leggo il Corano — قبل ما أنام باقرأ القرآن"},
   {it:"Dopo (بعد)", ar:"Dopo la scuola, torno a casa — بعد المدرسة برجع البيت"},
   {it:"Durante (خلال/أثناء)", ar:"Durante la lezione, ascolto il professore — أثناء الدرس باستمع إلى الأستاذ"},
   {it:"Verso (حوالي)", ar:"Arrivo verso le otto — هوصل حوالي الساعة ٨"},
   {it:"Fino a (لحد)", ar:"Lavoro fino alle sei — بشتغل لحد الساعة ٦"}
  ]},
  {type:"item", it:"3) حروف جر غير أصلية أخرى", ar:"", examples:[
   {it:"Senza (بدون)", ar:"Esco senza il telefono — أخرج بدون الهاتف"},
   {it:"Contro (ضد/عكس)", ar:"Sono contro questa idea — أنا ضد الفكرة هذه"},
   {it:"Secondo (حسب/وفقاً لـ)", ar:"Secondo me, è una buona idea — من رأيي هذه فكرة جيدة"},
   {it:"Oltre (بعد/غير)", ar:"Oltre il ponte c'è una scuola — بعد الكوبري في مدرسة"},
   {it:"Nonostante (بالرغم من)", ar:"Nonostante la pioggia, usciamo — بالرغم من المطر بنخرج"},
   {it:"Tranne (إلا/ما عدا)", ar:"Sono arrivati tutti tranne Marco — كلهم وصلوا إلا ماركو"},
   {it:"Eccetto (باستثناء)", ar:"Mangio tutto eccetto il pesce — آكل كل شيء باستثناء السمك"},
   {it:"Salvo (إلا/باستثناء)", ar:"Tutti erano presenti salvo Anna — كل الناس كانت موجودة إلا آنا"},
   {it:"Mediante (بواسطة)", ar:"Il pagamento avviene mediante bonifico — الدفع بيتم بواسطة تحويل بنكي"},
   {it:"Tramite (عن طريق)", ar:"Ti mando il file tramite email — هبعتلك الملف عن طريق الإيميل"}
  ]}
 ]
},
{
 id:"anche_pure",
 it:"Anche / Pure",
 ar:"أيضاً / أيضًا (anche و pure)",
 icon:"➕",
 triggers:["anche","pure"],
 blocks:[
  {type:"note", ar:"Anche و Pure كلاهما معناهم 'أيضًا / أيضاً' وممكن نستخدمهم بدل بعض في أغلب الكلام العادي، وبيتحطوا عادةً قبل الكلمة الذي تريدين نأكد علماذاا مباشرة."},
  {type:"item", it:"Anche (أيضًا / أيضاً) — أكتر استخدام وحيادية", ar:"", examples:[
   {it:"Anche Marco viene alla festa", ar:"ماركو أيضًا جاي الحفلة"},
   {it:"Vengo anch'io", ar:"أنا أيضًا جاي (anche+io = بتتدمج وتصبح anch'io)"},
   {it:"Ho anche fame", ar:"أنا أيضًا جعان"}
  ]},
  {type:"item", it:"Pure (أيضًا / أيضاً) — نفس المعنى، ولماذاا استخدام مثلادة كتعبير عن الإذن/التشجيع", ar:"", examples:[
   {it:"Pure io voglio venire", ar:"أنا أيضًا تريد أجي"},
   {it:"Puoi pure restare", ar:"تقدر أيضًا تفضل هنا (بمعنى: خليك، لا توجد ليسكلة)"},
   {it:"Vai pure!", ar:"يلا اتفضل / روح على راحتك! (تعبير عن السماح)"}
  ]},
  {type:"note", ar:"💡 ملحوظة: anche وpure بيتحطوا قبل الكلمة الذي تريدين نأكد علماذاا: 'Anche tu hai ragione' (أنت أيضًا معاك حق) غير 'Hai ragione anche tu' (ما زال أنت معاك حق برضو) — المعنى قريب لكن مكان الكلمة بيغيّر التوكيد."}
 ]
},
{
 id:"mentre",
 it:"Mentre",
 ar:"أثناء / وفي نفس الوقت (أداة ربط زمني)",
 icon:"⏳",
 triggers:["mentre"],
 blocks:[
  {type:"note", ar:"Mentre تربط بين حدثين حدثا في نفس الوقت في الماضي. النمط الأكثر شيوعاً: حدث مستمر بالـ Imperfetto (كان مستمرًا في الخلفية) + حدث آخر بالـ Passato Prossimo (حصل فجأة أو قاطعه) — لكن يمكن أيضًا كلاهما يكون Imperfetto لو الحدثين مستمرين معًا بنفس الدرجة."},
  {type:"table", title:"النمط الشائع", headers:["الجزء","الزمن الغالب","المثال"], rows:[
   ["الحدث المستمر (الذي كان مستمرًا)","Imperfetto","mentre guardavo la TV — وأنا كنت أشاهد التلفاز"],
   ["الحدث الذي قاطعه / حصل فجأة","Passato Prossimo","ho mangiato un panino — أكلت شطيرة"]
  ]},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Ho mangiato un panino mentre guardavo la TV", ar:"أكلت شطيرة وأنا كنت أشاهد التلفاز"},
   {it:"Mangiavo la pasta mentre ho guardato il telefono", ar:"كنت آكل المعكرونة وأنا نظرت إلى الهاتف"},
   {it:"Hai studiato la lezione mentre ascoltavi la radio", ar:"ذاكرت الدرس وأنت كنت تسمع المذياع"}
  ]},
  {type:"note", ar:"⚠️ الفرق بين Mentre و Quando: Mentre تركّز على استمرارية الحدثين معًا (مثل 'في نفس اللحظة هذه')، أما Quando غالباً تقدّم لحظة معينة وقف عندها فعل مرة أخرى (مثل 'عندما حدث كذا'). في الكلام العادي كثيرًا لا يفرّق المتحدثون بينهما، لكن هذه القاعدة الأساسية."}
 ]
},
{
 id:"ausiliari_passato",
 it:"الفعل المساعد Avere / Essere",
 ar:"تصريف الفعلين المساعدين للـ Passato Prossimo",
 icon:"🔧",
 triggers:["ho","hai","ha","abbiamo","avete","hanno","sono","sei","è","siamo","siete"],
 blocks:[
  {type:"note", ar:"كل فعل في الـ Passato Prossimo بيتكوّن من فعل مساعد (Avere أو Essere) + Participio Passato. الفعل المساعد هو الذي بيتصرّف حسب الفاعل، ليس الفعل الأساسي."},
  {type:"table", title:"Avere (الأكثر استخدامًا)", headers:["الضمير","التصريف"], rows:[
   ["Io (أنا)","Ho"],
   ["Tu (أنت)","Hai"],
   ["Lui/Lei (هو/هي)","Ha"],
   ["Noi (نحن)","Abbiamo"],
   ["Voi (انتو)","Avete"],
   ["Loro (هم)","Hanno"]
  ]},
  {type:"table", title:"Essere (لأفعال الحركة والتحوّل والانعكاسية)", headers:["الضمير","التصريف"], rows:[
   ["Io (أنا)","Sono"],
   ["Tu (أنت)","Sei"],
   ["Lui/Lei (هو/هي)","È"],
   ["Noi (نحن)","Siamo"],
   ["Voi (انتو)","Siete"],
   ["Loro (هم)","Sono"]
  ]},
  {type:"note", ar:"⚠️ لما نستخدم Essere، الـ Participio Passato بيتفق مع الفاعل في الجنس والعدد (مثل الصفة): Sono andato (مذكر) — Sono andata (مؤنث) — Sono andati (جمع مذكر) — Sono andate (جمع مؤنث). أما مع Avere فالـ Participio يبقى ثابتًا في العادة."},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Ho mangiato un panino", ar:"أكلت شطيرة"},
   {it:"Siamo andati al parco", ar:"رحنا الحديقة"},
   {it:"Hanno comprato la spesa", ar:"اشتروا الليستريات"}
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
   ["Tu","أنت"],
   ["Lui","هو"],
   ["Lei","هي"],
   ["Noi","نحن"],
   ["Voi","انتو"],
   ["Loro","هم"]
  ]},
  {type:"note", ar:"في الإيطالي عادةً بنشيل الضمير لأن تصريف الفعل بنفسه يدل على الفاعل (Ho mangiato = أكلت، ليس لازم أقول Io ho mangiato). لكن بنستخدم الضمير في حالتين: للتوكيد أو المقارنة (Io sì, ma lui no)، أو لو التصريف نفسه ممكن يللكن مثل Lui/Lei في بعض الأزمنة."},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Lui ha telefonato, non lei", ar:"هو الذي اتصل، ليس هي"},
   {it:"Noi eravamo a casa mentre loro erano fuori", ar:"نحن كنا في البيت وهم كانوا برة"}
  ]}
 ]
},
{
 id:"prep_semplici",
 it:"Preposizioni semplici",
 ar:"حروف الجر اللكنيطة",
 icon:"🔗",
 triggers:["a","in","con","di","da","su","per","tra","fra"],
 blocks:[
  {type:"table", title:"الحروف الأساسية ومعانيها", headers:["الحرف","المعنى الأساسي","مثال"], rows:[
   ["A","لـ / في / إلى (مكان محدد أو زمن)","Vado a scuola — رايح المدرسة"],
   ["In","في (داخل مكان/مدينة/بلد)","Sono in ufficio — أنا في المكتب"],
   ["Con","مع","Parlo con Marco — بتكلم مع ماركو"],
   ["Di","بتاع / من (ملكية أو أصل)","Il libro di Marco — كتبويب ماركو"],
   ["Da","من (مصدر) / عند (شخص)","Vengo da casa — جاي من البيت"],
   ["Su","على / فوق","Il libro è su tavolo — الكتبويب على الترابيزة"],
   ["Per","لكي / لمدة","Studio per un'ora — باذاكر لمدة ساعة"],
   ["Tra / Fra","بين / خلال (نفس المعنى، بيتختاروا حسب سهولة النطق)","Tra dieci minuti — بعد عشر دقايق"]
  ]},
  {type:"note", ar:"⚠️ لما حرف الجر (مثل a, di, da, in, su) يقابل أداة تعريف (il, lo, la, i, gli, le) بيندمجوا في كلمة واحدة، مثل: a+il=al, di+la=della, in+il=nel, su+il=sul... هذه بتتسمى Preposizioni articolate."}
 ]
},
{
 id:"articoli_determinativi",
 it:"Articoli determinativi",
 ar:"أدوات التعريف",
 icon:"🔤",
 triggers:["il","lo","la","i","gli","le"],
 blocks:[
  {type:"table", title:"أدوات التعريف", headers:["الأداة","تستخدم مع","الجمع"], rows:[
   ["Il","مذكر مفرد (الحالة العادية)","I"],
   ["Lo","مذكر مفرد بيبدأ بـ s+ساكن / z / gn / ps","Gli"],
   ["La","مؤنث مفرد (الحالة العادية)","Le"],
   ["L'","مفرد (مذكر أو مؤنث) بيبدأ بحرف متحرك (a,e,i,o,u)","Gli (مذكر) / Le (مؤنث)"]
  ]},
  {type:"note", ar:"القاعدة الأساسية: نوع وشكل الأداة بيتحدد حسب أول حرف في الكلمة الذي جاية بعدها مباشرة، ليس حسب معنى الكلمة."}
 ]
},
{
 id:"avverbio_modo",
 it:"Avverbio di modo",
 ar:"ظرف الحال (كيف حصل الفعل)",
 icon:"⚡",
 triggers:["velocemente","lentamente"],
 blocks:[
  {type:"note", ar:"ظرف الحال يصف طريقة أداء الفعل (حصل إزاي؟)، وشكله ثابت ليس بيتأثر بجنس ولا عدد ولا زمن. بيتكوّن غالباً بإضافة mente لآخر الصفة."},
  {type:"item", it:"أمثلة", ar:"", examples:[
   {it:"Lui guida velocemente", ar:"هو بيسوق لكنرعة"},
   {it:"Lei parla lentamente", ar:"هي تتحدث ببطء"},
   {it:"Ho fatto colazione in fretta", ar:"أكلت فطار على عجلة"}
  ]},
  {type:"note", ar:"💡 في الكلام العامي كثيرًا بيستخدموا الصفة نفسها كظرف بدل الصيغة الرسمية: Fai veloce! (أنجز/أسرع!) بدل Fai velocemente. وفي صيغ المقارنة: più velocemente di... (لكنرعة أكتر من...)، والتفضيل: il più velocemente possibile (بأسرع ما يمكن)."}
 ]
},
{
 id:"avverbi_tempo",
 it:"Gli avverbi di tempo",
 ar:"ظروف الزمن",
 icon:"⏰",
 triggers:["già","ancora","appena","mai","sempre","più"],
 blocks:[
  {type:"table", title:"المعنى الأساسي لكل ظرف", headers:["الظرف","المعنى","مثال"], rows:[
   ["Già","بالفعل / خلاص","Ho già fatto i compiti — انهيت الواجب بالفعل"],
   ["Ancora (+Non)","لسة (لو جت مع النفي)","Non ho ancora finito — لسة مأنهيتش"],
   ["Appena (وسط الجملة)","أول ما / حالاً","Appena arrivo, ti chiamo — أول ما أوصل هكلمك"],
   ["Mai (+Non)","أبداً (لو جت مع النفي)","Non sono mai stato lì — عمري ما رحت هناك"],
   ["Sempre","دائماً","Ho sempre detto la verità — كنت باقول الحقيقة دايماً"],
   ["Più (+Non)","مبقاش / لم يعد (لو جت مع النفي)","Non voglio più fumare — مبقتش تريد أدخن"]
  ]},
  {type:"table", title:"نفس الظرف من غير نفي — معنى مختلف", headers:["الظرف","المعنى","مثال"], rows:[
   ["Già","صحيح / فعلاً (كتعبير)","Già, hai ragione — صحيح، عندك حق"],
   ["Ancora (من غير نفي)","لسة / أيضًا","Studio ancora — ما زال بادرس / Vuoi ancora caffè? — تريد قهوة أيضًا؟"],
   ["Appena (بعد الفعل الماضي)","ما زال حالاً / للتو","Ahmed è appena arrivato — أول ما أحمد وصل"],
   ["Più (من غير نفي)","أكتر / مثلادة","Voglio più tempo — تريد وقت أكتر"]
  ]},
  {type:"note", ar:"⚠️ الكلمات هذه (già / ancora / appena / mai / sempre / più) لما تأتي في الـ Passato Prossimo بتتحشر بالظبط بين الفعل المساعد (Avere/Essere) والـ Participio Passato: Ho già mangiato — ليس Ho mangiato già."}
 ]
},
{
 id:"nomi_sostantivi",
 it:"I nomi e i sostantivi",
 ar:"كلمات أسماء متفرقة",
 icon:"📦",
 triggers:["inizio","fine","volta"],
 blocks:[
  {type:"item", it:"كلمات مهمة", ar:"", examples:[
   {it:"Inizio", ar:"البداية"},
   {it:"Fine", ar:"النهاية"},
   {it:"Volta", ar:"مرة (مثل: una volta = مرة واحدة، due volte = مرتين)"}
  ]}
 ]
},
{
 id:"giorni_settimana",
 it:"I giorni della settimana",
 ar:"أيام الأسبوع",
 icon:"📅",
 triggers:["lunedì","martedì","mercoledì","giovedì","venerdì","sabato","domenica"],
 blocks:[
  {type:"table", title:"أيام الأسبوع", headers:["Italiano","بالعربي"], rows:[
   ["Lunedì","الإثنين"],["Martedì","الثلاثاء"],["Mercoledì","الأربعاء"],
   ["Giovedì","الخميس"],["Venerdì","الجمعة"],["Sabato","السبت"],["Domenica","الحد"]
  ]},
  {type:"note", ar:"للعادة المتكررة: Ogni + اليوم (Ogni lunedì = كل إثنين). للمدى الزمني من يوم لآخر: Dal...alla (Studio dal lunedì alla domenica = بدرس من الإثنين للحد)."}
 ]
},
{
 id:"momenti_giornata",
 it:"I momenti della giornata",
 ar:"أوقات اليوم",
 icon:"🌅",
 triggers:["alba","mattina","mattino","mezzogiorno","pomeriggio","tramonto","sera","notte","mezzanotte"],
 blocks:[
  {type:"table", title:"أوقات اليوم", headers:["Italiano","بالعربي"], rows:[
   ["L'alba","الفجر"],
   ["La mattina","الصباح"],
   ["Il mattino","الصباح الباكر (مثل la mattina لكن أكتر أدبية)"],
   ["Il mezzogiorno","الظهر"],
   ["Il pomeriggio","بعد الظهر / العصر"],
   ["Il tramonto","الغروب"],
   ["La sera","المساء"],
   ["La notte","الذيل"],
   ["La mezzanotte","منتصف الذيل"]
  ]},
  {type:"note", ar:"للعادة: Ogni + الوقت (Ogni mattina = كل صباح). للمدى الزمني: Dalla...alla (Dalla mattina alla sera = من الصبح للمسا)."}
 ]
},
{
 id:"pronomi_complemento",
 it:"Pronomi diretti, indiretti, riflessivi e tonici",
 ar:"ضمائر المفعول (مباشر/غير مباشر/انعكاسي/توكيد)",
 icon:"📥",
 triggers:["mi","ti","ci","vi","si","li","me","te"],
 blocks:[
  {type:"note", ar:"هذه ضمائر تحل محل المفعول به لكي الكلام يبقى طبيعي أكتر: Vedo la ragazza (أشاهد الفتاة) ← La vedo (أشاهدها) أطبع من تكرار الاسم."},
  {type:"table", title:"ضمائر المفعول المباشر الضعيفة (Pronomi diretti)", headers:["مفرد","الجمع"], rows:[
   ["Mi (ـني)","Ci (ـنا)"],
   ["Ti (ـك)","Vi (ـكم)"],
   ["Lo (ه) / La (ها)","Li (هم) / Le (هن)"]
  ]},
  {type:"note", ar:"⚠️ الضمير الضعيف بييجي قبل الفعل (ليس مثل العربي): Ogni mattina il professore mi vede (كل يوم الأستاذ ياعرضني)، ليس vede me."},
  {type:"table", title:"ضمائر المفعول الغير مباشر (Pronomi indiretti)", headers:["مفرد","الجمع"], rows:[
   ["Mi (لي)","Ci (لنا)"],
   ["Ti (لك)","Vi (لكم)"],
   ["Gli (له) / Le (لها)","Gli / Loro (لهم)"]
  ]},
  {type:"table", title:"الضمائر الانعكاسية (Pronomi riflessivi) — لما الفاعل هو المفعول به", headers:["Io","Tu","Lui/Lei","Noi","Voi","Loro"], rows:[
   ["Mi (نفسي)","Ti (نفسك)","Si (نفسه/نفسها)","Ci (أنفسنا)","Vi (أنفسكم)","Si (أنفسهم)"]
  ]},
  {type:"item", it:"أمثلة على الانعكاسي", ar:"", examples:[
   {it:"Ti svegli", ar:"بتصحيحى (بتصحيحي نفسك)"},
   {it:"Si veste", ar:"هو بيللكن / هي بتللكن"},
   {it:"Vi sedete", ar:"بتقعدوا"}
  ]},
  {type:"table", title:"ضمائر التوكيد Tonici/Forti (بعد حروف الجر: di, a, da, con, per, su...)", headers:["مفرد","الجمع"], rows:[
   ["Me (أنا)","Noi (نحن)"],
   ["Te (أنت)","Voi (انتو)"],
   ["Lui / Lei / Sé","Loro / Sé"]
  ]},
  {type:"note", ar:"⚠️ التبعية الجنسية في الماضي: لو الضمير lo/la/li/le جه قبل فعل بالـ Passato Prossimo (حتى مع Avere)، الـ Participio بيتفق معاه في الجنس والعدد: Ho comprato il libro → L'ho comprato / Ho comprato la borsa → L'ho comprata / Li ho comprati / Le ho comprate."}
 ]
},
{
 id:"congiunzioni",
 it:"Le congiunzioni",
 ar:"أدوات الربط",
 icon:"🔀",
 triggers:["ed","inoltre","né","ma"],
 blocks:[
  {type:"table", title:"1) Copulative — للربط والإضافة", headers:["الحرف","المعنى","مثال"], rows:[
   ["E / Ed","و","Mi sono svegliato tardi ed ho fatto colazione — صحيحيت متأخر وعملت فطار"],
   ["Inoltre","علاوة على ذلك","È bravo, inoltre è simpatico — هو شاطر وأيضًا ظريف"],
   ["Né...né","لا...ولا","Non mangio né carne né pesce — لا آكل لحم ولا سمك"]
  ]},
  {type:"note", ar:"💡 Anche و Pure (أيضًا/أيضاً) بردو من أدوات الربط الإضافية — تفاصيلهم في موضوع منفصل (📘 Anche / Pure) لأنهم محتاجين شرح أوسع."},
  {type:"item", it:"2) Avversative — التضاد والاستدراك", ar:"", examples:[
   {it:"Ma", ar:"لكن / لكن"}
  ]}
 ]
},
{
 id:"parole_multitasking",
 it:"Parole multitasking",
 ar:"كلمات بمعاني/استخدامات متعددة",
 icon:"🧩",
 triggers:["troppo","mezzo"],
 blocks:[
  {type:"item", it:"Troppo", ar:"كثيرًا جداً — تعبير أقوى من Molto", note:"لو جت قبل صفة أو فعل، شكلها ثابت وتصبح بمعنى 'جداً': Io sono troppo stanco (أنا تعبان جداً جداً). لو جت قبل اسم، بتتصرف كصفة مبهمة وتتبع الاسم في الجنس والعدد: Troppi compiti (واجبات كثيرًا جداً)", examples:[
   {it:"Io sono troppo stanco", ar:"أنا تعبان جداً جداً"},
   {it:"Troppi compiti", ar:"واجبات كثيرًا جداً"}
  ]},
  {type:"item", it:"Mezzo", ar:"نصف / منتصف / وسيلة — كلمة بتلاقيها بأكتر من معنى", note:"1) بمعنى نصف: لو جت قبل اسم بتتبعه في الجنس والعدد (Un mezzo chilo = نصف كيلو، Una mezza ora = نص ساعة). 2) بمعنى وسيلة: مثل mezzi di trasporto (وسائل المواصلات). 3) بمعنى المنتصف: مثل nel mezzo (في النص).", examples:[
   {it:"Un mezzo chilo", ar:"نصف كيلو"},
   {it:"Una mezza ora", ar:"نص ساعة"},
   {it:"Mezzi di trasporto", ar:"وسائل المواصلات"},
   {it:"Nel mezzo", ar:"في النص"}
  ]}
 ]
},
{
 id:"aggettivi_vari",
 it:"Aggettivi qualificativi متفرقة",
 ar:"صفات مهمة (مقارنة/تفضيل)",
 icon:"⭐",
 triggers:["migliore","veloce","diverso"],
 blocks:[
  {type:"item", it:"Migliore", ar:"أفضل", note:"صفة مريحة (بتنتهي بـ e) — لا تتغير في الجنس، لكن تتغير في الجمع: Migliori. لو جت بعد أداة تعريف + صفة ملكية تصبح Superlativo relativo (الأفضل/الأعز): il mio migliore amico", examples:[
   {it:"Il mio migliore amico", ar:"أعز أصدقائي"}
  ]},
  {type:"item", it:"Veloce", ar:"سريع", note:"من المجموعة الذي بتنتهي بـ e، وتصف الاسم وتأتي بعده. بتتستخدم أيضًا كظرف بمعنى 'لكنرعة' بدل Velocemente في الكلام العامي (Fai veloce! = أسرع!)", examples:[
   {it:"Un treno veloce", ar:"قطر سريع"},
   {it:"Macchine veloci", ar:"عربيات سريعة (جمع)"},
   {it:"Più veloce di...", ar:"أسرع من... (مقارنة)"},
   {it:"Il più veloce", ar:"الأسرع (تفضيل)"}
  ]},
  {type:"item", it:"Diverso", ar:"مختلف / متنوع / آخر", note:"من المجموعة الذي بتنتهي بـ o، فتتغير حسب الجنس والعدد. لو جت قبل الاسم في صيغة الجمع بتاخد معنى 'عدة/عديد من' بدل 'مختلف'", examples:[
   {it:"Un modo diverso", ar:"طريقة مختلفة"},
   {it:"Qualcosa di diverso", ar:"شيء مختلفة (تعبير شائع)"},
   {it:"Diverse cose", ar:"عدة حاجات (ليس 'حاجات مختلفة')"}
  ]}
 ]
}
];
