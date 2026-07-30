let deck=[],idx=0,answered=false;
let totalScore=0,passedCount=0,bestScore=0,totalAttempts=0,failCount=0;
const PASS=80;

function shuffle(a){const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
function norm(s){
  return s.toLowerCase()
    .replace(/[àá]/g,'a').replace(/[èéê]/g,'e')
    .replace(/[ìí]/g,'i').replace(/[òó]/g,'o')
    .replace(/[ùú]/g,'u').replace(/[^a-z\s]/g,'').trim();
}

// Words that the sentence-level pronunciation drill (lesson mode) doesn't
// require the learner to say correctly on their own: simple + combined
// prepositions (حروف الجر) and indefinite articles (أدوات التنكير). They're
// still shown in the sentence and still spoken by the TTS, but they never
// turn 'bad' and never trigger the isolated word-drill — only real content
// words (verbs, nouns, adjectives, pronouns, definite articles, etc.) do.
const AUTO_SKIP_WORDS=new Set([
  // حروف الجر البسيطة
  'a','di','da','in','con','su','per','tra','fra',
  // حروف الجر المدمجة (a/da/di/in/su + الأداة)
  'al','allo','alla','ai','agli','alle',
  'dal','dallo','dalla','dai','dagli','dalle',
  'del','dello','della','dei','degli','delle',
  'nel','nello','nella','nei','negli','nelle',
  'sul','sullo','sulla','sui','sugli','sulle',
  'col','coi',
  // أدوات التنكير
  'un','uno','una'
]);
function isAutoSkipWord(it){
  return AUTO_SKIP_WORDS.has(norm(it));
}

// Levenshtein edit distance — used to approximate "how close" the heard
// word is to the target word's spelling/sound, as a stand-in for real
// phoneme-level accent scoring (which needs a server-side model).
function levenshtein(a,b){
  const m=a.length,n=b.length;
  if(m===0)return n;
  if(n===0)return m;
  const dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for(let i=0;i<=m;i++)dp[i][0]=i;
  for(let j=0;j<=n;j++)dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);
    }
  }
  return dp[m][n];
}
function similarity(a,b){
  const dist=levenshtein(a,b);
  const maxLen=Math.max(a.length,b.length);
  return maxLen===0?1:1-dist/maxLen;
}

// ===== SEGMENT-LEVEL FEEDBACK (word mode) =====
// مهم: لا توجد عندنا موديل يقدر يسمع/يحلل 3 مقاطع صوتية منفصلة فعلياً من التسجيل
// (هذا يحتاج "forced alignment" صوتي حقيقي، وWhisper-tiny في المتصفح مبيرجعش
// توقيتات على مستوى المقطع بشكل موثوق). البديل العملي الذي عملناه هنا:
// 1) نقسم شكل الكلمة نفسها لـ3 مقاطع تقريبية (V/CV heuristic).
// 2) نقارن حروف الكلمة الذي المستخدم قالها (بعد التفريغ النصي) بحروف الكلمة
//    الأصلية حرف بحرف (Levenshtein alignment) لكي نعرف أنهي حروف "ضاعت"
//    أو اتقالت خطأ.
// 3) أي مقطع يقع فيه أغلب الحروف الخطأ بيتحدد بالأحمر، والمستخدم يُقال له
//    يركّز فيه وهو بيعيد قول الكلمة كاملة مرة أخرى.
// هذا تقريب مفيد لتوجيه الانتباه، ليس تحليل نطق دقيق 100% لكل حرف.

function rawSyllables(word){
  const isVowel=c=>/[aeiouàèéìòù]/i.test(c);
  const vowelIdx=[];
  for(let i=0;i<word.length;i++) if(isVowel(word[i])) vowelIdx.push(i);
  if(vowelIdx.length===0) return [word];
  const nuclei=[];
  let start=vowelIdx[0],prev=vowelIdx[0];
  for(let k=1;k<vowelIdx.length;k++){
    if(vowelIdx[k]===prev+1){prev=vowelIdx[k];}
    else{nuclei.push([start,prev]);start=vowelIdx[k];prev=vowelIdx[k];}
  }
  nuclei.push([start,prev]);
  const bounds=[0];
  for(let i=0;i<nuclei.length-1;i++){
    const consStart=nuclei[i][1]+1,consEnd=nuclei[i+1][0]-1;
    const consLen=consEnd-consStart+1;
    let splitAt;
    if(consLen<=0) splitAt=consStart;
    else if(consLen===1) splitAt=consStart;
    else{
      const cluster=word.slice(consStart,consEnd+1).toLowerCase();
      const lastTwo=cluster.slice(-2);
      const lastChar=cluster.slice(-1);
      if(['gl','gn','sc','ch','gh','qu'].includes(lastTwo)||((lastChar==='l'||lastChar==='r')&&consLen===2)){
        splitAt=consStart;
      } else {
        splitAt=consEnd;
      }
    }
    bounds.push(splitAt);
  }
  bounds.push(word.length);
  const syl=[];
  for(let i=0;i<bounds.length-1;i++) syl.push(word.slice(bounds[i],bounds[i+1]));
  return syl.filter(s=>s.length>0);
}

function syllabify3(word){
  let syl=rawSyllables(word);
  if(syl.length===0) syl=[word];
  while(syl.length>3){
    let bestIdx=0,bestLen=Infinity;
    for(let i=0;i<syl.length-1;i++){
      const len=syl[i].length+syl[i+1].length;
      if(len<bestLen){bestLen=len;bestIdx=i;}
    }
    syl.splice(bestIdx,2,syl[bestIdx]+syl[bestIdx+1]);
  }
  while(syl.length<3){
    let bestIdx=0,bestLen=-1;
    for(let i=0;i<syl.length;i++) if(syl[i].length>bestLen){bestLen=syl[i].length;bestIdx=i;}
    const s=syl[bestIdx];
    if(s.length<2) break;
    const mid=Math.ceil(s.length/2);
    syl.splice(bestIdx,1,s.slice(0,mid),s.slice(mid));
  }
  return syl;
}

function normChar(ch){
  let c=ch.toLowerCase();
  c=c.replace('à','a').replace('á','a').replace('è','e').replace('é','e').replace('ê','e')
    .replace('ì','i').replace('í','i').replace('ò','o').replace('ó','o').replace('ù','u').replace('ú','u');
  return /[a-z\s]/.test(c)?c:'';
}
function mapToNormIndices(word){
  const map=new Array(word.length).fill(-1);
  let ni=0;
  for(let k=0;k<word.length;k++){
    if(normChar(word[k]).length>0){map[k]=ni;ni++;}
  }
  return map;
}

// بيرجع مصفوفة boolean بطول norm(target) — true يعني الحرف هذا اتقال صحيح
// (طابق شيء في المسموع)، false يعني ضاع أو اتبدل بحرف مختلف.
function alignMismatches(target,heard){
  const a=norm(target),b=norm(heard);
  const m=a.length,n=b.length;
  if(m===0) return [];
  const dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for(let i=0;i<=m;i++)dp[i][0]=i;
  for(let j=0;j<=n;j++)dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);
    }
  }
  const matched=new Array(m).fill(false);
  let i=m,j=n;
  while(i>0&&j>0){
    if(a[i-1]===b[j-1]&&dp[i][j]===dp[i-1][j-1]){matched[i-1]=true;i--;j--;}
    else if(dp[i][j]===dp[i-1][j-1]+1){matched[i-1]=false;i--;j--;}
    else if(dp[i][j]===dp[i-1][j]+1){matched[i-1]=false;i--;}
    else{j--;}
  }
  while(i>0){matched[i-1]=false;i--;}
  return matched;
}

// بيقسّم الكلمة لـ3 مقاطع وبيحدد كل مقطع "سليم" أو "محتاج تركيز" بناءً على
// نسبة الحروف الخطأ فيه مقارنة بأسوأ مقطع في الكلمة.
function computeSegmentResults(word,heard){
  const segments=syllabify3(word);
  const matched=alignMismatches(word,heard);
  const charMap=mapToNormIndices(word);
  let charPos=0;
  const raw=segments.map(seg=>{
    const startChar=charPos,endChar=charPos+seg.length;
    charPos=endChar;
    let total=0,bad=0;
    for(let k=startChar;k<endChar;k++){
      const ni=charMap[k];
      if(ni===-1||ni>=matched.length) continue;
      total++;
      if(!matched[ni])bad++;
    }
    return {text:seg,ratio:total?bad/total:0};
  });
  const maxRatio=Math.max(0,...raw.map(r=>r.ratio));
  return raw.map(r=>({text:r.text,ok:!(r.ratio>0&&r.ratio>=maxRatio*0.6)}));
}

function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function renderWordSegmentsHtml(results){
  return results.map(r=>r.ok?escHtml(r.text):'<span style="color:#e74c3c;text-decoration:underline wavy;font-weight:800;">'+escHtml(r.text)+'</span>').join('');
}

// بيرسم الكلمة حرف بحرف: الحروف الذي اتثبتت "صحيح" (في mask) بالأخضر، والباقي
// بالأحمر تحته خط متعرج — يُستخدم في drill mode لكي يبيّن للمتعلم أنهي
// حروف قفلها فعلاً وأنهي حروف ما زال محتاج يركّز فيها.
function renderWordLetterMaskHtml(word,mask){
  const map=mapToNormIndices(word);
  let html='';
  for(let k=0;k<word.length;k++){
    const ni=map[k];
    const ch=escHtml(word[k]);
    if(ni===-1||ni>=mask.length){html+=ch;continue;}
    html+=mask[ni]
      ?'<span style="color:#2ecc71;font-weight:800;">'+ch+'</span>'
      :'<span style="color:#e74c3c;text-decoration:underline wavy;font-weight:800;">'+ch+'</span>';
  }
  return html;
}

// ===== UNIFIED MIC ENGINE =====
// Primary: Whisper-tiny running fully in-browser via WebAssembly (transformers.js) —
// free, no API key, works fully offline once the model is downloaded+cached once.
// Fallback: native browser SpeechRecognition (needs internet, but instant/no
// download) — used automatically while the offline model is still loading,
// or if WASM/the model fails for any reason, so the app never gets fully stuck.
let micBusy=false;
let whisperPipeline=null, whisperReady=false, whisperLoading=false;

function setEngineStatus(text){
  const el=document.getElementById('engineStatus');
  if(!el)return;
  if(text){el.textContent=text;el.style.display='block';}
  else{el.style.display='none';}
}

async function ensureWhisperLoaded(){
  if(whisperReady||whisperLoading)return;
  whisperLoading=true;
  setEngineStatus('⏳ بيحمّل محرك النطق الأوفلاين أول مرة (~40-75 ميجا، مرة واحدة لكن)...');
  try{
    const mod=await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2');
    mod.env.allowLocalModels=false;
    whisperPipeline=await mod.pipeline('automatic-speech-recognition','Xenova/whisper-tiny',{
      // بنفرض النسخة المصغّرة (int8) بشكل صريح لكي نضمن نفس الحجم/السرعة الذي
      // رسالة الحالة فوق واعدة بيها (~40-75 ميجا)، بدل الاعتماد على قيمة
      // افتراضية ممكن تتغيّر بين إصدارات المكتبة وتنزّل نسخة fp32 أكبر
      // وأبطأ بكثيرًا في التحليل، خصوصًا على الموبايل.
      quantized:true,
      progress_callback:(p)=>{
        if(p&&p.status==='progress'&&typeof p.progress==='number'){
          setEngineStatus('⏳ بيحمّل المحرك الأوفلاين... '+Math.round(p.progress)+'%');
        }
      }
    });
    whisperReady=true;
    setEngineStatus('✅ المحرك الأوفلاين جاهز — هيشتغل من غير نت الآن');
    setTimeout(()=>setEngineStatus(''),2500);
  }catch(err){
    setEngineStatus('⚠️ تعذّر تحميل المحرك الأوفلاين، هنستخدم تعرف الصوت الذي محتاج نت لحد ما يتاح');
    setTimeout(()=>setEngineStatus(''),3500);
  }
  whisperLoading=false;
}

// Records mic audio with simple volume-based silence detection so the user
// doesn't have to manually mark "done speaking".
async function recordAudioVAD(maxMs,silenceMs){
  maxMs=maxMs||6000;silenceMs=silenceMs||900;
  const stream=await navigator.mediaDevices.getUserMedia({audio:true});
  const AC=window.AudioContext||window.webkitAudioContext;
  const liveCtx=new AC();
  const source=liveCtx.createMediaStreamSource(stream);
  const analyser=liveCtx.createAnalyser();
  analyser.fftSize=2048;
  source.connect(analyser);

  let mimeType='';
  ['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/mp4'].some(t=>{
    if(window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t)){mimeType=t;return true;}
    return false;
  });
  const recorder=mimeType?new MediaRecorder(stream,{mimeType}):new MediaRecorder(stream);
  const chunks=[];
  recorder.ondataavailable=(e)=>{if(e.data&&e.data.size>0)chunks.push(e.data);};

  return new Promise((resolve,reject)=>{
    let speechStarted=false,silenceStart=null;
    const dataArr=new Uint8Array(analyser.frequencyBinCount);
    const startTime=Date.now();
    let stopped=false;

    // ثابت 0.02 كان بيفتكر إن في كلام طول ما ضجيج المايك/المكان فوق القيمة
    // هذا (شائع في مايكات الموبايل لكنبب AGC)، فمكانش بيوصل لحالة "سكوت"
    // خالص وكان بيستنى للـ maxMs كمل كل مرة حتى لو المستخدم سكت فعلاً بدري.
    // هنا بنقيس "أرضية الضجيج" الفعلية أول ~250ms قبل ما الكلام يبدأ،
    // وبعدين نبني علماذاا عتبتين: عتبة أعلى لكي نتأكد إن هذا كلام فعلاً،
    // وعتبة أوطى (أقرب لأرضية الضجيج) لكي نعتبره سكوت فور ما الصوت يرجع
    // قريب من الضجيج الطبيعي، ليس لازم يوصل لصفر.
    const CALIBRATE_MS=250;
    let calibSum=0,calibCount=0,noiseFloor=0.006,calibrated=false;
    let speechThresh=0.02,silenceThresh=0.02;

    function finishUp(){
      stream.getTracks().forEach(t=>t.stop());
      try{liveCtx.close();}catch(e){}
    }

    function tick(){
      if(stopped)return;
      analyser.getByteTimeDomainData(dataArr);
      let sum=0;
      for(let i=0;i<dataArr.length;i++){const v=(dataArr[i]-128)/128;sum+=v*v;}
      const rms=Math.sqrt(sum/dataArr.length);
      const now=Date.now();

      if(!calibrated){
        if(now-startTime<CALIBRATE_MS){
          calibSum+=rms;calibCount++;
        } else {
          if(calibCount>0)noiseFloor=calibSum/calibCount;
          // عتبة الكلام: واضح فوق أرضية الضجيج، بحد أدنى 0.02 لكي مايكات
          // نضيفة جداً (أرضية ضجيج شبه صفرية) ما زال محتاجة صوت حقيقي ليس همس.
          speechThresh=Math.max(0.02,noiseFloor*2.5+0.008);
          // عتبة السكوت: أقرب لأرضية الضجيج نفسها (هيستِيريسيس) لكي نلحق
          // لحظة السكوت فعلياً بدل ما نستنى الصوت يوصل صفر ممتاز.
          silenceThresh=Math.max(0.012,noiseFloor*1.5+0.004);
          calibrated=true;
        }
      }

      if(rms>speechThresh){speechStarted=true;silenceStart=null;}
      else if(speechStarted&&rms<=silenceThresh){if(silenceStart===null)silenceStart=now;}
      else if(speechStarted&&rms>silenceThresh){silenceStart=null;}
      const timedOut=now-startTime>maxMs;
      const wentQuiet=speechStarted&&silenceStart&&(now-silenceStart>silenceMs);
      if(timedOut||wentQuiet){
        stopped=true;
        recorder.stop();
        return;
      }
      requestAnimationFrame(tick);
    }

    recorder.onstop=async ()=>{
      finishUp();
      try{
        const blob=new Blob(chunks,{type:mimeType||'audio/webm'});
        const arrayBuf=await blob.arrayBuffer();
        const decodeCtx=new AC();
        const audioBuffer=await decodeCtx.decodeAudioData(arrayBuf);
        const targetLen=Math.max(1,Math.ceil(audioBuffer.duration*16000));
        const offline=new OfflineAudioContext(1,targetLen,16000);
        const src=offline.createBufferSource();
        src.buffer=audioBuffer;
        src.connect(offline.destination);
        src.start();
        const rendered=await offline.startRendering();
        resolve(rendered.getChannelData(0));
      }catch(err){reject(err);}
    };

    recorder.start();
    requestAnimationFrame(tick);
  });
}

// صفارة قصيرة (Beep) بتتشغل قبل ما التسجيل يبدأ فعلياً، لكي يبقى واضح
// للمستخدم متى يتكلم بالضبط. قصيرة عن قصد (120ms) بدل صفارة طويلة مزعجة.
function playBeep(){
  return new Promise(resolve=>{
    try{
      const AC=window.AudioContext||window.webkitAudioContext;
      const ctx=new AC();
      const osc=ctx.createOscillator();
      const gain=ctx.createGain();
      osc.type='sine';
      osc.frequency.value=1000;
      gain.gain.value=0;
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now=ctx.currentTime;
      const dur=0.12;
      gain.gain.linearRampToValueAtTime(0.22,now+0.012);
      gain.gain.linearRampToValueAtTime(0,now+dur);
      osc.start(now);
      osc.stop(now+dur+0.02);
      const done=()=>{try{ctx.close();}catch(e){}resolve();};
      osc.onended=done;
      setTimeout(done,(dur+0.05)*1000+150);
    }catch(e){resolve();}
  });
}

async function whisperTranscribe(float32Audio){
  const out=await whisperPipeline(float32Audio,{language:'italian',task:'transcribe'});
  return (out&&out.text?out.text:'').trim();
}

// Generic mic driver shared by word-mode, lesson sentence-mode, and drill
// mode. Tries the offline Whisper engine first (if ready); otherwise falls
// back to the native browser API (needs internet) so the mic always does
// *something* useful.
async function smartListen({micBtnId,micLblId,errEl,onResult,onError,mode}){
  if(micBusy)return;
  const btn=document.getElementById(micBtnId);
  const lbl=document.getElementById(micLblId);
  micBusy=true;
  btn.classList.add('on');
  lbl.classList.add('on');
  lbl.textContent='🔔 استعد...';

  if(!whisperReady&&!whisperLoading)ensureWhisperLoaded();

  // جُمل الدرس (mode:'sentence') محتاجة وقت تسجيل أطول بكثيرًا من كلمة واحدة،
  // وطبيعي يبقى فيها وقفات نص الجملة (فاصلة، تفكير) أطول من وقفة نهاية كلمة
  // واحدة. استخدام توقيتات وضع الكلمة القصيرة هنا كان بيقطع الجملة قبل ما
  // المستخدم يخلص كلامها — وده السبب الأساسي في إحساسه إن التعرف الأوفلاين
  // "بطيء أو ما زال يُحمّل": كان بيتقطع بدري أو ياخد وقت تحليل أطول من الـ
  // watchdog الثابت الذي كان عندنا.
  const isSentence=mode==='sentence';
  const recMaxMs=isSentence?16000:6000;
  const recSilenceMs=isSentence?1400:450;
  // الـ watchdog لازم يغطي وقت التسجيل + وقت تحليل Whisper (الذي بيكبر مع
  // طول الصوت وبيبقى أبطأ على الأجهزة الضعيفة) — 20 ثانية ثابتة كانت بتنتهي
  // في نص التحليل لجمل طويلة وتلغي نتيجة كانت شكلها هتوصل لو استنينا قليل.
  const watchdogMs=isSentence?45000:25000;

  // صفارة قصيرة (Beep) قبل ما التسجيل يبدأ فعلياً، لكي يبقى واضح ومتفق علماذا
  // متى المستخدم يتكلم بالظبط — بعد الصفارة على طول — بدل ما يتردد أو
  // يبدأ الكلام قبل ما التسجيل يكون شغال فعلاً.
  lbl.textContent='🔴 بيسمعك...';
  await playBeep();

  let finished=false;
  let watchdog=null;
  function finish(){
    if(finished)return;
    finished=true;
    if(watchdog)clearTimeout(watchdog);
    micBusy=false;
    btn.classList.remove('on');
    lbl.classList.remove('on');
  }
  // Safety net: whatever happens (a stalled WASM call, a recognition session
  // that ends without firing onresult/onerror, etc.) the mic must never stay
  // stuck forever — force a reset + error no matter what.
  watchdog=setTimeout(()=>{
    if(finished)return;
    finish();
    onError('timeout');
  },watchdogMs);

  if(whisperReady){
    try{
      const audio=await recordAudioVAD(recMaxMs,recSilenceMs);
      if(finished)return;
      lbl.textContent='🧠 يحلل النطق...';
      // طمّن المستخدم لو التحليل طوّل بدل ما يفضل الذيبل واقف على "يحلل
      // النطق..." من غير أي تحديث — وده كان بيحسسه إن الشاشة واقفة/ما زالة
      // تحمّل مع إنها شغالة فعلاً في الخلفية.
      const stillWorking=setTimeout(()=>{
        if(!finished)lbl.textContent='🧠 ما زال يحلل... (بياخد وقت أطول قليل في الجمل الطويلة)';
      },5000);
      const text=await whisperTranscribe(audio);
      clearTimeout(stillWorking);
      if(finished)return;
      finish();
      if(!text){onError('no-speech');return;}
      onResult([text]);
    }catch(err){
      if(finished)return;
      finish();
      const msg=(err&&err.name==='NotAllowedError')?'not-allowed':(err.message||'mic-error');
      onError(msg);
    }
    return;
  }

  // المحرك الأوفلاين ما زال بيحمّل ومحتاجين نرجع للفولباك الذي أساسًا يحتاج نت.
  // لو لا توجد نت خالص، نفشل بسرعة برسالة واضحة بدل ما نستنى الـ watchdog كمل
  // على محاولة SpeechRecognition الذي مستحيل تنجح من غير نت.
  if(!navigator.onLine){
    finish();
    onError(whisperLoading?'offline-not-ready':'network');
    return;
  }

  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){finish();onError('no-engine');return;}
  let recog;
  try{
    recog=new SR();
  }catch(err){
    finish();onError('mic-error');return;
  }
  recog.lang='it-IT';recog.interimResults=false;recog.maxAlternatives=6;
  recog.onresult=(e)=>{
    const alts=[...e.results[0]].map(r=>r.transcript.trim());
    const conf=e.results[0][0].confidence;
    finish();
    onResult(alts,conf);
  };
  recog.onerror=(e)=>{
    finish();
    onError(e.error);
  };
  // Critical: without onend, a session that ends silently (no onresult, no
  // onerror — seen on some Android Chrome builds) leaves micBusy stuck
  // forever and every future tap silently does nothing.
  recog.onend=()=>{
    if(finished)return;
    finish();
    onError('no-speech');
  };
  try{
    recog.start();
  }catch(err){
    finish();
    onError('mic-error');
  }
}

function micErrorMessage(err){
  const m={
    'not-allowed':'⛔ لا توجد إذن ميكروفون',
    'no-speech':'ما سمعتش شيء، جرب مرة أخرى',
    'network':'خطأ في الشبكة',
    'no-engine':'⚠️ المتصفح هذا ليس بيدعم تعرف الصوت — جرب Chrome',
    'timeout':'⌛ ماحصلش رد، جرب مرة أخرى',
    'offline-not-ready':'📡 المحرك الأوفلاين ما زال بيحمّل من النت لأول مرة، ولازم يخلص التحميل مرة واحدة وأنت متوصل بالنت — وبعد هكذا هيشتغل من غيره ممتازًا'
  };
  let base=m[err]||'خطأ: '+err;
  // لو السبب الحقيقي وراء فشل الفولباك (الأونلاين) إن المحرك الأوفلاين ما زال
  // بيحمّل، نوضّح هذا للمستخدم لكي ميفهمهاش عطل دايم في الجهاز.
  if(whisperLoading&&!whisperReady&&(err==='network'||err==='no-speech'||err==='no-engine')){
    base+=' — المحرك الأوفلاين ما زال بيحمّل في الخلفية أول مرة، محتاج نت مرة واحدة لكن';
  }
  return base;
}


// ===== 4-SKILL SCORING LAYER =====
const SKILL_LABELS={pronunciation:'🎙️ النطق',listening:'👂 السمع',writing:'✍️ الكتابة',grammarOrder:'🧩 ترتيب الجملة'};
const skillScores={
  pronunciation:{attempts:0,totalScore:0,best:0,passed:0},
  listening:{attempts:0,totalScore:0,best:0,passed:0,replays:0,reveals:0},
  writing:{attempts:0,totalScore:0,best:0,passed:0,correctWords:0,totalWords:0},
  grammarOrder:{attempts:0,totalScore:0,best:0,passed:0,reveals:0}
};
function skillAvg(k){const s=skillScores[k];return s.attempts?Math.round(s.totalScore/s.attempts):0;}
function addSkillScore(skill,score,passed){
  const s=skillScores[skill]; if(!s)return;
  score=Math.max(0,Math.min(100,Math.round(score||0)));
  s.attempts++; s.totalScore+=score; s.best=Math.max(s.best,score); if(passed)s.passed++;
  saveSkillScores(); updateSkillScoreUI(); setTimeout(saveAppState,0);
}
function addWritingSkillScore(score,correct,total,passed){
  const s=skillScores.writing; s.correctWords+=correct||0; s.totalWords+=total||0; addSkillScore('writing',score,passed);
}
function resetSessionScores(){
  Object.keys(skillScores).forEach(k=>{Object.keys(skillScores[k]).forEach(x=>skillScores[k][x]=0);});
  saveSkillScores(); updateSkillScoreUI();
}
function saveSkillScores(){try{localStorage.setItem('parlaSkillScores',JSON.stringify(skillScores));}catch(e){}}
function loadSkillScores(){
  try{const raw=localStorage.getItem('parlaSkillScores'); if(!raw)return; const saved=JSON.parse(raw);
    Object.keys(skillScores).forEach(k=>{if(saved[k])Object.assign(skillScores[k],saved[k]);});
  }catch(e){}
}
function updateSkillScoreUI(){
  const map={skillPron:'pronunciation',skillListen:'listening',skillWrite:'writing',skillGrammar:'grammarOrder'};
  Object.keys(map).forEach(id=>{const el=document.getElementById(id); if(el)el.textContent=skillAvg(map[id])+'%';});
  updateSessionInsight();
}
function updateSessionInsight(){
  const el=document.getElementById('sessionInsight'); if(!el)return;
  const active=Object.keys(skillScores).filter(k=>skillScores[k].attempts>0);
  if(active.length<2){el.classList.remove('show');return;}
  const sorted=active.map(k=>({k,avg:skillAvg(k)})).sort((a,b)=>a.avg-b.avg);
  const weak=sorted[0],strong=sorted[sorted.length-1];
  el.innerHTML='تحليل سريع: أقوى مهارة عندك '+SKILL_LABELS[strong.k]+' ('+strong.avg+'%) — محتاجة تركيز أكتر: '+SKILL_LABELS[weak.k]+' ('+weak.avg+'%).';
  el.classList.add('show');
}
loadSkillScores();

function collectAppState(){
  return {
    version:8,
    unlockedSentenceIndices:wpUnlockedIndices||[],
    wordMode:{sentenceIdx:wpSentenceIdx||0,wordPos:wpPos||0},
    lessonMode:{idx:lIdx||0,studyMode:currentStudyMode||'speak',seqSub:seqSub||'it'},
    scores:skillScores
  };
}
function saveAppState(){
  try{
    localStorage.setItem('parlaAppStateV8',JSON.stringify(collectAppState()));
    localStorage.setItem('parlaUnlockedSentenceIndices',JSON.stringify(wpUnlockedIndices||[]));
    localStorage.setItem('parlaWordProgress',JSON.stringify({sentenceIdx:wpSentenceIdx||0,wordPos:wpPos||0}));
    localStorage.setItem('parlaLessonProgress',JSON.stringify({idx:lIdx||0}));
    localStorage.setItem('parlaSkillScores',JSON.stringify(skillScores));
    const n=document.getElementById('autosaveNote'); if(n)n.textContent='✅ اتحفظ تلقائيًا';
  }catch(e){const n=document.getElementById('autosaveNote'); if(n)n.textContent='⚠️ الحفظ ليس متاح في المتصفح هذا';}
}
function loadAppState(){
  try{
    const raw=localStorage.getItem('parlaAppStateV8'); if(!raw)return;
    const st=JSON.parse(raw);
    if(Array.isArray(st.unlockedSentenceIndices))wpUnlockedIndices=[...new Set(st.unlockedSentenceIndices.map(Number).filter(i=>Number.isInteger(i)&&i>=0&&i<LESSON_SENTENCES.length))].sort((a,b)=>a-b);
    if(st.scores)Object.keys(skillScores).forEach(k=>{if(st.scores[k])Object.assign(skillScores[k],st.scores[k]);});
  }catch(e){}
}
function confirmResetAllProgress(){
  if(!confirm('متأكد؟ هذا هيمسح الجمل المفتوحة والسكور وكل التقدم المحفوظ.'))return;
  ['parlaAppStateV8','parlaUnlockedSentenceIndices','parlaWordProgress','parlaLessonProgress','parlaSkillScores'].forEach(k=>{try{localStorage.removeItem(k)}catch(e){}});
  wpUnlockedIndices=[]; resetSessionScores(); clearWordProgress(); location.reload();
}
loadAppState();

// ===== WORD TAB PIPELINE: يليسي على LESSON_SENTENCES جملة بجملة، كلمة بكلمة =====
let wpSentenceIdx=0;
let wpWordIndices=[];
let wpPos=0;
let wpQuizList=[];
let wpQuizIdx=0;
let wpRetryTarget=null;
let wpRetryFails=0;
let wpChainActive=false;
let wpChainSentenceIdx=null;
let wpUnlockedIndices=[]; // فهرس بالجمل الذي أنهيت كلماتها في تبويب نطق الكلمات — هذه الذي بتفتح في تبويب الدرس الإنفينيتي

function saveUnlockedSentences(){
  try{localStorage.setItem('parlaUnlockedSentenceIndices',JSON.stringify(wpUnlockedIndices));}catch(e){}
  setTimeout(saveAppState,0);
}
function loadUnlockedSentences(){
  try{
    const raw=localStorage.getItem('parlaUnlockedSentenceIndices');
    if(!raw)return;
    const arr=JSON.parse(raw);
    if(Array.isArray(arr)){
      wpUnlockedIndices=[...new Set(arr.map(Number).filter(i=>Number.isInteger(i)&&i>=0&&i<LESSON_SENTENCES.length))].sort((a,b)=>a-b);
    }
  }catch(e){}
}
loadUnlockedSentences();

function saveWordProgress(){
  try{localStorage.setItem('parlaWordProgress',JSON.stringify({sentenceIdx:wpSentenceIdx,wordPos:wpPos}));}catch(e){}
  setTimeout(saveAppState,0);
}
function loadWordProgress(){
  try{
    const raw=localStorage.getItem('parlaWordProgress'); if(!raw)return null;
    const st=JSON.parse(raw);
    if(Number.isInteger(st.sentenceIdx)&&st.sentenceIdx>=0&&st.sentenceIdx<LESSON_SENTENCES.length){
      return {sentenceIdx:st.sentenceIdx,wordPos:Number.isInteger(st.wordPos)?Math.max(0,st.wordPos):0};
    }
  }catch(e){}
  return null;
}
function clearWordProgress(){try{localStorage.removeItem('parlaWordProgress');}catch(e){}}

function resetAllProgress(){
  wpUnlockedIndices=[]; saveUnlockedSentences(); clearWordProgress(); resetSessionScores();
}


function start(){
  loadUnlockedSentences();
  loadSkillScores();
  const saved=loadWordProgress();
  wpSentenceIdx=saved?saved.sentenceIdx:0;
  totalScore=0;passedCount=0;bestScore=0;totalAttempts=0;failCount=0;
  document.getElementById('endScreen').classList.remove('show');
  document.getElementById('game').style.display='flex';
  wpLoadSentence(wpSentenceIdx);
  if(saved&&wpWordIndices.length){wpPos=Math.min(saved.wordPos||0,Math.max(0,wpWordIndices.length-1));wpRenderWord();}
  updateSkillScoreUI();
}
function restart(){resetAllProgress();start();}

function wpShowStage(stage){
  document.getElementById('card').style.display=stage==='word'?'':'none';
  document.querySelector('.mic-area').style.display=stage==='word'?'':'none';
  document.getElementById('heard').style.display=stage==='word'?'':'none';
  document.getElementById('wpInfoPanel').style.display=stage==='info'?'flex':'none';
  document.getElementById('wpQuizPanel').style.display=stage==='quiz'?'flex':'none';
}

function wpLoadSentence(si){
  if(si>=LESSON_SENTENCES.length){endGame();return;}
  wpSentenceIdx=si;
  saveWordProgress();
  const s=LESSON_SENTENCES[si];
  wpWordIndices=s.words.map((w,i)=>i).filter(i=>{
    const t=s.words[i].type;
    return t && t!=='omesso' && t!=='altro';
  });
  wpPos=0;
  document.getElementById('wpContext').innerHTML='<div class="wp-context-it">'+escHtml(s.it||'')+'</div><div class="wp-context-ar">'+escHtml(s.ar||'')+'</div>';
  document.getElementById('endScreen').classList.remove('show');
  document.getElementById('game').style.display='flex';
  wpShowStage('word');
  if(wpWordIndices.length===0){wpStartQuiz();return;}
  wpRenderWord();
}

function wpCurrentWord(){
  const s=LESSON_SENTENCES[wpSentenceIdx];
  if(!s)return null;
  return s.words[wpWordIndices[wpPos]];
}

function wpUpdateScores(){
  document.getElementById('sAvg').textContent=(passedCount?Math.round(totalScore/passedCount):0)+'%';
  document.getElementById('sAll').textContent=totalAttempts;
  document.getElementById('sBest').textContent=bestScore+'%';
  updateSkillScoreUI();
}

function wpRenderWord(){
  answered=false;
  failCount=0;
  wpRetryTarget=null;
  const w=wpCurrentWord();
  document.getElementById('cat').textContent=(w.type||'').toUpperCase();
  document.getElementById('wIt').textContent=w.it;
  document.getElementById('wAr').textContent=w.ar||'';
  document.getElementById('wIpa').textContent='';
  document.getElementById('wPron').textContent='';
  document.getElementById('wEx').textContent='';
  document.getElementById('heard').textContent='';
  document.getElementById('badge').className='badge';
  document.getElementById('nextBtn').className='next-btn';
  document.getElementById('skipBtn').style.display='inline-block';
  document.getElementById('card').className='card';
  document.getElementById('micBtn').className='mic-btn';
  document.getElementById('micBtn').disabled=false;
  document.getElementById('micLbl').className='mic-lbl';
  document.getElementById('micLbl').textContent='اضغط وتحدث';
  document.getElementById('progFill').style.width=(wpPos/wpWordIndices.length*100)+'%';
  document.getElementById('wpProgress').textContent=toArabicDigits(wpPos+1)+' / '+toArabicDigits(wpWordIndices.length)+' كلمات';
  wpUpdateScores();
  wpShowStage('word');
}

function speak(){
  const w=wpRetryTarget!=null?{it:wpRetryTarget}:wpCurrentWord();
  if(!w)return;
  const utt=new SpeechSynthesisUtterance(w.it);
  utt.lang='it-IT';utt.rate=0.8;
  speechSynthesis.cancel();speechSynthesis.speak(utt);
}

function toggleMic(){
  if(answered||micBusy)return;
  smartListen({
    micBtnId:'micBtn',micLblId:'micLbl',mode:'word',
    onResult:(alts,conf)=>{
      document.getElementById('micLbl').textContent='اضغط وتحدث';
      judge(alts,conf);
    },
    onError:(err)=>{
      document.getElementById('micLbl').textContent='اضغط وتحدث';
      document.getElementById('heard').textContent=micErrorMessage(err);
    }
  });
}

function judge(alts,conf){
  if(answered)return;
  answered=true;
  totalAttempts++;
  const isRetry=wpRetryTarget!=null;
  const targetWord=isRetry?wpRetryTarget:wpCurrentWord().it;
  const target=norm(targetWord);
  const heard=alts[0];

  // Approximate accuracy score: best text-similarity among the recognizer's
  // alternatives, blended lightly with its confidence value. This is NOT a
  // real phoneme-level accent analysis (that needs server-side ML) — it's a
  // free, on-device proxy based on how close the transcribed word is to the
  // target spelling.
  let bestSim=0,bestAlt=heard;
  alts.forEach(a=>{
    const sim=similarity(norm(a),target);
    if(sim>bestSim){bestSim=sim;bestAlt=a;}
  });
  const confVal=(typeof conf==='number'&&conf>0)?conf:0.85;
  let score=Math.round((bestSim*0.85+confVal*0.15)*100);
  score=Math.max(0,Math.min(100,score));
  if(score>bestScore)bestScore=score;
  addSkillScore('pronunciation',score,score>=PASS);

  document.getElementById('heard').textContent='🎧 سمعت: "'+heard+'"';

  const badge=document.getElementById('badge');
  const card=document.getElementById('card');

  if(score>=PASS){
    totalScore+=score;passedCount++;
    badge.innerHTML='🌟 <b>'+score+'%</b> — ممتاز! عديت الكلمة ✅';
    badge.className='badge ok show';
    card.className='card ok';
    floatEmoji('🌟');
    document.getElementById('micBtn').disabled=true;
    document.getElementById('wIt').textContent=targetWord;
    wpUpdateScores();
    if(isRetry){
      wpRetryTarget=null;wpRetryFails=0;
      setTimeout(()=>{wpShowStage('quiz');wpRenderQuizQuestion();},900);
    } else {
      setTimeout(()=>wpShowInfo(wpCurrentWord()),400);
    }
  } else {
    failCount++;
    if(isRetry){
      wpRetryFails++;
      answered=false;
      if(wpRetryFails>=6){
        badge.innerHTML='⏭️ ماشي مشكلة — هنكمل على السؤال';
        badge.className='badge mid show';
        card.className='card mid';
        document.getElementById('micBtn').disabled=true;
        wpRetryTarget=null;wpRetryFails=0;
        setTimeout(()=>{wpShowStage('quiz');wpRenderQuizQuestion();},900);
      } else {
        badge.innerHTML='🔁 <b>'+score+'%</b> — ليس هكذا، جرّب مرة أخرى';
        badge.className='badge bad show';
        card.className='card bad';
        floatEmoji('🔁');
        setTimeout(()=>speak(),450);
      }
    } else if(failCount>=3){
      badge.innerHTML='⏭️ أنهيت 3 محاولات — يلا نكمل';
      badge.className='badge bad show';
      card.className='card bad';
      floatEmoji('⏭️');
      document.getElementById('micBtn').disabled=true;
      document.getElementById('wIt').textContent=targetWord;
      setTimeout(()=>wpShowInfo(wpCurrentWord()),1200);
    } else {
      answered=false;
      const segResults=computeSegmentResults(targetWord,bestAlt);
      const badSegs=segResults.filter(r=>!r.ok).map(r=>r.text);
      document.getElementById('wIt').innerHTML=renderWordSegmentsHtml(segResults);
      let cls,emoji,msg;
      const focusHint=badSegs.length?(' — ركّز في الجزء المحدد بالأحمر: "'+badSegs.join('')+'"'):'';
      if(score>=55){cls='mid';emoji='💪';msg='قريب! حاول مرة أخرى لكي تعدي 80%'+focusHint;}
      else{cls='bad';emoji='🔁';msg='بعيد عن النطق الصحيح — استمع إلى وحاول مرة أخرى'+focusHint;}
      badge.innerHTML=emoji+' <b>'+score+'%</b> — '+msg;
      badge.className='badge '+cls+' show';
      card.className='card '+cls;
      floatEmoji(emoji);
      setTimeout(()=>speak(),450);
    }
    wpUpdateScores();
  }
}

function skipWord(){
  const badge=document.getElementById('badge');
  badge.innerHTML='⏭️ تم تخطي نطق هذه الكلمة';
  badge.className='badge mid show';
  setTimeout(()=>next(),250);
}

function next(){
  wpPos++;
  saveWordProgress();
  if(wpPos>=wpWordIndices.length){wpStartQuiz();return;}
  wpRenderWord();
}

function endGame(){
  document.getElementById('game').style.display='none';
  const avg=passedCount?Math.round(totalScore/passedCount):0;
  const d=avg>=85?{e:'🏆',t:'محترف إيطالي!'}:avg>=65?{e:'🌟',t:'برافو عليك!'}:avg>=45?{e:'💪',t:'جيد، لكن تقدر أحسن!'}:{e:'😅',t:'حاول مرة أخرى!'};
  document.getElementById('endEmoji').textContent=d.e;
  document.getElementById('endTitle').textContent=d.t;
  document.getElementById('endSub').innerHTML=`عديت كل جمل الدرس! — متوسط دقة النطق: <b style="color:var(--gold)">${avg}%</b><br>أعلى سكور: <b style="color:var(--green)">${bestScore}%</b> &nbsp;|&nbsp; ${totalAttempts} محاولة لـ ${passedCount} كلمة`;
  document.getElementById('endScreen').classList.add('show');
}

// ── معلومات الكلمة (Info Panel) حسب النوع ──
function wpOpenVerbModal(infinitive){
  const idx=VERBS.findIndex(v=>v.it.toLowerCase()===String(infinitive||'').toLowerCase());
  if(idx>=0)openVerbModal(idx,'meaning');
}
function wpBuildInfoHtml(w){
  const TENSE_AR={presente:'Presente',passato:'Passato Prossimo',imperfetto:'Imperfetto',imperativo:'Imperativo'};
  if(w.type==='verbo'){
    let html='';
    html+='<div>📌 المصدر: <b>'+escHtml(w.verbInfinitive||'')+'</b></div>';
    html+='<div>⏱️ الزمن: <b>'+(TENSE_AR[w.tense]||w.tense||'')+'</b></div>';
    html+='<div>📂 المجموعة: <b>-'+(w.group||'')+'</b> ('+(w.regular?'منتظم':'شاذ')+')</div>';
    if(w.tense==='passato'&&w.aux)html+='<div>🔧 الفعل المساعد: <b>'+w.aux+'</b></div>';
    html+='<div>↔️ النوع: <b>'+(w.transitivity==='intransitive'?'غير متعدٍ (intransitive)':'متعدٍ (transitive)')+'</b>'+(w.transitivityNote?' — '+escHtml(w.transitivityNote):'')+'</div>';
    if(w.note)html+='<div style="color:var(--muted);font-size:.78rem">'+escHtml(w.note)+'</div>';
    html+='<div style="margin-top:6px"><button class="tts-btn" onclick="wpOpenVerbModal(\''+escHtml(String(w.verbInfinitive||'')).replace(/'/g,'\\\'')+'\')">📊 اعرض التصريف الكامل</button></div>';
    return html;
  }
  if(w.type==='nome_unit'){
    let html='';
    html+='<div>👤 الجنس: <b>'+(w.gender==='f'?'مؤنث':'مذكر')+'</b></div>';
    if(w.plural)html+='<div>📝 الجمع: <b>'+escHtml(w.plural)+'</b></div>';
    if(w.relatedWords&&w.relatedWords.length)html+='<div>🔗 كلمات من نفس العيلة: '+w.relatedWords.map(r=>escHtml(r.it)+' ('+escHtml(r.ar)+')').join(' / ')+'</div>';
    return html;
  }
  if(w.type==='aggettivo'){
    let html='';
    html+='<div>📐 الاستخدام: '+escHtml(w.usage||'')+'</div>';
    if(w.forms)html+='<div>🔄 الأشكال: <b>'+escHtml(w.forms.ms||'')+'</b> / <b>'+escHtml(w.forms.fs||'')+'</b> / <b>'+escHtml(w.forms.mp||'')+'</b> / <b>'+escHtml(w.forms.fp||'')+'</b></div>';
    return html;
  }
  if(w.type==='congiunzione'){
    let html='';
    html+='<div>📖 نوعها: <b>'+escHtml(w.kind||'أداة ربط')+'</b></div>';
    if(w.grammarId&&getGrammarTopic(w.grammarId))html+='<div style="margin-top:6px"><button class="tts-btn" onclick="openGrammarModal(\''+escHtml(String(w.grammarId||'')).replace(/'/g,'\\\'')+'\')">📖 اعرض الدرس الكامل</button></div>';
    return html;
  }
  if(w.type==='avverbio'){
    return '<div>⚡ ظرف ثابت: '+escHtml(w.usage||w.note||w.ar||'')+'</div>';
  }
  if(w.type==='pronome'){
    return '<div>👤 ضمير: '+escHtml(w.usage||w.note||w.ar||'')+'</div>';
  }
  if(w.type==='sintagma_prep'){
    let html='';
    html+='<div>🔍 لماذا \'‎'+escHtml(w.prep||'')+'\'؟</div>';
    if(w.prepNote)html+='<div>→ '+escHtml(w.prepNote)+'</div>';
    return html;
  }
  return '<div>'+escHtml(w.note||'')+'</div>';
}
function wpShowInfo(w){
  wpShowStage('info');
  const isLast=wpPos+1>=wpWordIndices.length;
  document.getElementById('wpInfoIt').textContent=w.it;
  document.getElementById('wpInfoAr').textContent=w.ar||'';
  document.getElementById('wpInfoBody').innerHTML=wpBuildInfoHtml(w);
  const btn=document.getElementById('wpInfoNextBtn');
  btn.textContent=isLast?'ابدأ التقييم':'التالي ←';
  btn.onclick=()=>{
    if(isLast){wpStartQuiz();}
    else{wpPos++;wpRenderWord();}
  };
  setTimeout(()=>speakWord(w.it),200);
}

// ── تقييم MCQ على مستوى الجملة (sentence.quiz) ──
function wpStartQuiz(){
  const s=LESSON_SENTENCES[wpSentenceIdx];
  wpQuizList=(s.quiz||[]).map(item=>({...item,_optionOrder:shuffle(item.options.map((_,i)=>i))}));
  wpQuizIdx=0;
  if(wpQuizList.length===0){wpFinishSentenceQuiz();return;}
  wpShowStage('quiz');
  wpRenderQuizQuestion();
}
function wpRenderQuizQuestion(){
  document.getElementById('wpQuizProgress').textContent='سؤال '+toArabicDigits(wpQuizIdx+1)+' / '+toArabicDigits(wpQuizList.length);
  const item=wpQuizList[wpQuizIdx];
  document.getElementById('wpQuizQ').textContent=item.q;
  document.getElementById('wpQuizFeedback').textContent='';
  const wrap=document.getElementById('wpQuizOptions');
  wrap.innerHTML='';
  if(item.grammarId&&getGrammarTopic(item.grammarId)){
    const lessonBtn=document.createElement('button');
    lessonBtn.className='tts-btn';
    lessonBtn.textContent='📘 افتح الدرس الكامل';
    lessonBtn.onclick=()=>openGrammarModal(item.grammarId);
    wrap.appendChild(lessonBtn);
  }
  if(!item._optionOrder)item._optionOrder=shuffle(item.options.map((_,i)=>i));
  item._optionOrder.forEach(oi=>{
    const btn=document.createElement('button');
    btn.className='write-check-btn';
    btn.textContent=item.options[oi];
    btn.onclick=()=>wpQuizAnswer(oi);
    wrap.appendChild(btn);
  });
}

function quizExplanation(item){
  const q=(item&&item.q)||''; const opts=(item&&item.options)||[]; const ans=opts[item.correct]||'';
  if(q.includes('Passato Prossimo')&&q.includes('-are'))return 'قاعدة: أفعال -are المنتظمة تتحول غالبًا إلى -ato.';
  if(q.includes('Passato Prossimo')&&q.includes('-ere'))return 'قاعدة: أفعال -ere المنتظمة تتحول غالبًا إلى -uto.';
  if(q.includes('Passato Prossimo')&&q.includes('-ire'))return 'قاعدة: أفعال -ire المنتظمة تتحول غالبًا إلى -ito.';
  if(q.includes('Imperfetto')&&q.includes('-are'))return 'قاعدة: Imperfetto لمجموعة -are يبدأ بـ -av- مثل parlavo.';
  if(q.includes('Imperfetto')&&q.includes('-ere'))return 'قاعدة: Imperfetto لمجموعة -ere يبدأ بـ -ev- مثل prendevo.';
  if(q.includes('Imperfetto')&&q.includes('-ire'))return 'قاعدة: Imperfetto لمجموعة -ire يبدأ بـ -iv- مثل dormivo.';
  return ans?('الإجابة: '+ans):'';
}

function wpQuizAnswer(oi){
  const item=wpQuizList[wpQuizIdx];
  if(oi===item.correct){
    document.getElementById('wpQuizFeedback').textContent='✅ صحيحيح! '+quizExplanation(item);
    floatEmoji('✅');
    setTimeout(()=>{
      wpQuizIdx++;
      if(wpQuizIdx>=wpQuizList.length){wpFinishSentenceQuiz();}
      else{wpRenderQuizQuestion();}
    },600);
  } else {
    document.getElementById('wpQuizFeedback').textContent='❌ ليس هكذا — هننطق "'+item.wordIt+'" مرة أخرى قبل ما نرجع للسؤال';
    setTimeout(()=>wpRetryWordThenReask(item.wordIt),700);
  }
}
function wpRetryWordThenReask(wordIt){
  wpShowStage('word');
  wpRetryTarget=wordIt;
  wpRetryFails=0;
  answered=false;failCount=0;
  document.getElementById('cat').textContent='إعادة النطق';
  document.getElementById('wIt').textContent=wordIt;
  document.getElementById('wAr').textContent='';
  document.getElementById('wIpa').textContent='';
  document.getElementById('wPron').textContent='';
  document.getElementById('wEx').textContent='';
  document.getElementById('heard').textContent='';
  document.getElementById('badge').className='badge';
  document.getElementById('card').className='card';
  document.getElementById('micBtn').className='mic-btn';
  document.getElementById('micBtn').disabled=false;
  document.getElementById('micLbl').className='mic-lbl';
  document.getElementById('micLbl').textContent='اضغط وقل الكلمة مرة أخرى';
  setTimeout(()=>speak(),300);
}

// بعد انتهاء تقييم الجملة — الجملة لكن الذي بتتفتح تلقائي في تبويب الدرس الإنفينيتي،
// من غير ما نشد المستخدم من تبويب نطق الكلمات — هو اللي يقرر يكمّل جمل أخرى هنا ولا يروح للدرس حينما يحب.
function wpFinishSentenceQuiz(){
  const completedSentenceIdx=wpSentenceIdx;
  wpChainActive=true;

  if(!wpUnlockedIndices.includes(completedSentenceIdx)){
    wpUnlockedIndices.push(completedSentenceIdx);
  }
  wpUnlockedIndices=[...new Set(wpUnlockedIndices)].sort((a,b)=>a-b);
  saveUnlockedSentences();

  // جهّز جملة نطق الكلمات التالية في الخلفية، لكن افتح فورًا نفس الجملة
  // التي أنهاها المستخدم داخل الدرس الإنفينيتي.
  const nextSentenceIdx=completedSentenceIdx+1;
  try{
    localStorage.setItem('parlaWordProgress',JSON.stringify({sentenceIdx:nextSentenceIdx,wordPos:0}));
  }catch(e){}
  if(nextSentenceIdx<LESSON_SENTENCES.length)wpLoadSentence(nextSentenceIdx);

  lPassed=0;lAttempts=0;lStreak=0;
  wpSyncLessonDeckToSentence(completedSentenceIdx);
  switchMode('lesson');
  setStudyMode('speak');

  document.getElementById('lBadge').innerHTML='🎉 فتحت نفس الجملة هنا — ابدأ بنطق الجملة كاملة';
  document.getElementById('lBadge').className='badge ok show';
  floatEmoji('🎉');
}
function wpSyncLessonDeckToSentence(sentenceIdx){
  if(!Number.isInteger(sentenceIdx)||sentenceIdx<0||sentenceIdx>=LESSON_SENTENCES.length)return;

  if(!wpUnlockedIndices.includes(sentenceIdx))wpUnlockedIndices.push(sentenceIdx);
  wpUnlockedIndices=[...new Set(wpUnlockedIndices)]
    .filter(i=>Number.isInteger(i)&&i>=0&&i<LESSON_SENTENCES.length)
    .sort((a,b)=>a-b);
  saveUnlockedSentences();

  // ابنِ الـ deck دائمًا من الفهارس المفتوحة، ثم اختَر نفس فهرس الجملة
  // بدل الاعتماد على object identity أو تقدّم قديم محفوظ.
  lDeck=wpUnlockedIndices.map(i=>LESSON_SENTENCES[i]);
  lIdx=wpUnlockedIndices.indexOf(sentenceIdx);
  if(lIdx<0)lIdx=0;
  saveLessonProgress();

  hideLessonLocked();
  lRender();
}
// لما الجملة تخلص في وضع الكتابة، نفضّل للجملة الآخرة المفتوحة في نفس تبويب الدرس الإنفينيتي —
// مبقاش ما نرجع المستخدم لتبويب نطق الكلمات أوتوماتيكياً.
function wpChainAdvanceToNextSentence(){
  if(lIdx+1<lDeck.length){
    lIdx++;
    seqSub='it';
    document.getElementById('seqSubIt').classList.add('active');
    document.getElementById('seqSubAr').classList.remove('active');
    setStudyMode('speak');
    lRender();
  } else {
    document.getElementById('lBadge').innerHTML='🏆 أنهيت كل الجمل التي فُتحت لحد الآن — روح نطق كلمات أكتر في تبويب "نطق الكلمات" علشان تفتح جمل جديدة هنا';
    document.getElementById('lBadge').className='badge ok show';
  }
}

function floatEmoji(emoji){
  const el=document.createElement('div');
  el.className='floater';el.textContent=emoji;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),950);
}

// ===== INFINITE LESSON ENGINE =====
function switchMode(mode){
  seqStopTts();
  const isWord=mode==='word';
  const isLesson=mode==='lesson';
  const isVerbs=mode==='verbs';
  document.getElementById('tabWord').classList.toggle('active',isWord);
  document.getElementById('tabLesson').classList.toggle('active',isLesson);
  document.getElementById('tabVerbs').classList.toggle('active',isVerbs);
  document.getElementById('game').style.display=isWord?'flex':'none';
  if(!isWord)document.getElementById('endScreen').classList.remove('show');
  document.getElementById('lessonMode').style.display=isLesson?'flex':'none';
  document.getElementById('verbsMode').style.display=isVerbs?'flex':'none';
  if(isLesson && lDeck.length===0)lStart();
  if(isVerbs && document.getElementById('verbGroups').children.length===0)renderVerbsList();
}

// ===== VERBS LIBRARY: grid of all reference verbs grouped by ARE/ERE/IRE + tap-for-full-conjugation popup =====
let vmCurrentIdx=0, vmCurrentTab='meaning';
function verbCategory(it){
  const s=it.toLowerCase();
  if(s.endsWith('arsi')||s.endsWith('are'))return 'are';
  if(s.endsWith('ersi')||s.endsWith('ere'))return 'ere';
  if(s.endsWith('irsi')||s.endsWith('ire'))return 'ire';
  return 'are';
}
function renderVerbsList(){
  const wrapEl=document.getElementById('verbGroups');
  wrapEl.innerHTML='';
  const cats=[
    {key:'are',label:'🟡 الأفعال -ARE'},
    {key:'ere',label:'🟢 الأفعال -ERE'},
    {key:'ire',label:'🔵 الأفعال -IRE'}
  ];
  cats.forEach(cat=>{
    const list=VERBS.filter(v=>verbCategory(v.it)===cat.key);
    if(list.length===0)return;
    const section=document.createElement('div');
    section.className='verb-section '+cat.key;
    const title=document.createElement('div');
    title.className='verb-section-title';
    title.innerHTML='<span class="dot"></span><span>'+cat.label+'</span><span class="cnt">'+list.length+' فعل</span>';
    section.appendChild(title);
    const grid=document.createElement('div');
    grid.className='verb-grid';
    list.forEach(v=>{
      const idx=VERBS.indexOf(v);
      const card=document.createElement('div');
      card.className='verb-card';
      card.onclick=()=>openVerbModal(idx);
      const itEl=document.createElement('div');
      itEl.className='verb-card-it';
      itEl.textContent=v.it;
      const arEl=document.createElement('div');
      arEl.className='verb-card-ar';
      arEl.textContent=v.ar;
      card.appendChild(itEl);card.appendChild(arEl);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    wrapEl.appendChild(section);
  });
}
function openVerbModal(i,tab){
  vmCurrentIdx=i;
  vmCurrentTab=tab||'meaning';
  document.getElementById('vmIt').textContent=VERBS[i].it;
  document.getElementById('verbModalOverlay').classList.add('show');
  renderVerbModalTabs();
  renderVerbModalBody();
  speakVerb();
}
function speakVerb(){
  if(vmCurrentIdx==null||!VERBS[vmCurrentIdx])return;
  speakWord(VERBS[vmCurrentIdx].it);
}
function closeVerbModal(){
  document.getElementById('verbModalOverlay').classList.remove('show');
}
function closeVerbModalOnOverlay(e){
  if(e.target && e.target.id==='verbModalOverlay')closeVerbModal();
}
function switchVerbTab(tab){
  vmCurrentTab=tab;
  renderVerbModalTabs();
  renderVerbModalBody();
}
function renderVerbModalTabs(){
  ['meaning','presente','passato','imperfetto','imperativo'].forEach(t=>{
    document.getElementById('vmTab'+t.charAt(0).toUpperCase()+t.slice(1)).classList.toggle('active',t===vmCurrentTab);
  });
}
function verbConjTableHtml(rows){
  window.__vmRows=rows;
  return '<table class="conj-tbl">'+rows.map((r,i)=>'<tr class="conj-row" onclick="speakWord(window.__vmRows['+i+'].form)"><td>'+r.person+'</td><td>'+r.form+'</td></tr>').join('')+'</table>';
}
function renderVerbModalBody(){
  const v=VERBS[vmCurrentIdx];
  const body=document.getElementById('vmBody');
  if(vmCurrentTab==='meaning'){
    body.innerHTML='<div class="verb-meaning"><b>'+v.it+'</b><div style="margin-top:8px;color:var(--text);direction:rtl">'+v.ar+'</div></div>';
  } else if(vmCurrentTab==='presente'){
    body.innerHTML=verbConjTableHtml(v.presente);
  } else if(vmCurrentTab==='passato'){
    const auxLbl=v.passato.aux==='essere'?'Essere':'Avere';
    body.innerHTML='<div class="verb-aux-note">الفعل المساعد: '+auxLbl+(v.passato.regular?' — فعل منتظم':' — فعل شاذ')+'</div>'+verbConjTableHtml(v.passato.rows);
  } else if(vmCurrentTab==='imperfetto'){
    body.innerHTML='<div class="verb-aux-note">'+(v.imperfetto.regular?'فعل منتظم':'فعل شاذ')+'</div>'+verbConjTableHtml(v.imperfetto.rows);
  } else if(vmCurrentTab==='imperativo'){
    body.innerHTML=verbConjTableHtml(v.imperativo.rows)+(v.imperativo.note?'<div class="verb-imp-note">💡 '+v.imperativo.note+'</div>':'');
  }
}

// ===== GRAMMAR GLOSSARY (tap-to-popup) =====
let GRAMMAR_TRIGGER_MAP=null;
function normalizeGrammarWord(w){
  return (w||'').toLowerCase()
    .replace(/[.,!?;:()«»"'’‘]/g,'')
    .trim();
}
function buildGrammarTriggerMap(){
  if(GRAMMAR_TRIGGER_MAP)return GRAMMAR_TRIGGER_MAP;
  GRAMMAR_TRIGGER_MAP={};
  if(typeof GRAMMAR==='undefined')return GRAMMAR_TRIGGER_MAP;
  GRAMMAR.forEach(topic=>{
    (topic.triggers||[]).forEach(t=>{
      GRAMMAR_TRIGGER_MAP[normalizeGrammarWord(t)]=topic.id;
    });
  });
  return GRAMMAR_TRIGGER_MAP;
}
function findGrammarTopicId(word){
  const map=buildGrammarTriggerMap();
  return map[normalizeGrammarWord(word)]||null;
}

// ===== VERB NOTE PARSING (tap-to-popup conjugation for words like "cucinavo") =====
// notes بتاعة الأفعال في sentences.js متسقة بالشكل: "InfinitoVerbo، Tense"
// (Tense وحدة من: Presente / Passato Prossimo / Imperfetto)
let VERB_NAME_MAP=null;
function buildVerbNameMap(){
  if(VERB_NAME_MAP)return VERB_NAME_MAP;
  VERB_NAME_MAP={};
  if(typeof VERBS==='undefined')return VERB_NAME_MAP;
  VERBS.forEach((v,i)=>{VERB_NAME_MAP[v.it.toLowerCase()]=i;});
  return VERB_NAME_MAP;
}
const VERB_TENSE_TAB={'Presente':'presente','Passato Prossimo':'passato','Imperfetto':'imperfetto'};
function findVerbFromNote(note){
  if(!note)return null;
  const m=note.match(/^([A-Za-zàèìòùé']+)،\s*(Presente|Passato Prossimo|Imperfetto)\s*$/);
  if(!m)return null;
  const map=buildVerbNameMap();
  const idx=map[m[1].toLowerCase()];
  if(idx===undefined)return null;
  return {idx, tab:VERB_TENSE_TAB[m[2]]};
}

function getGrammarTopic(id){
  if(typeof GRAMMAR==='undefined')return null;
  return GRAMMAR.find(g=>g.id===id)||null;
}
function openGrammarModal(topicId){
  const topic=getGrammarTopic(topicId);
  if(!topic)return;
  document.getElementById('gmIcon').textContent=topic.icon||'📘';
  document.getElementById('gmIt').textContent=topic.it;
  document.getElementById('gmAr').textContent=topic.ar;
  document.getElementById('gmBody').innerHTML=renderGrammarBlocks(topic.blocks||[]);
  document.getElementById('grammarModalOverlay').classList.add('show');
}
function closeGrammarModal(){
  document.getElementById('grammarModalOverlay').classList.remove('show');
}
function closeGrammarModalOnOverlay(e){
  if(e.target && e.target.id==='grammarModalOverlay')closeGrammarModal();
}
function escGm(s){
  return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function renderGrammarBlocks(blocks){
  return blocks.map(b=>{
    if(b.type==='note'){
      return '<div class="gm-note">'+escGm(b.ar)+'</div>';
    }
    if(b.type==='item'){
      let html='<div class="gm-item"><div class="gm-item-title">'+escGm(b.it)+'</div>';
      html+='<div class="gm-item-note">= '+escGm(b.ar)+(b.note?'<br>💡 '+escGm(b.note):'')+'</div>';
      (b.examples||[]).forEach(ex=>{
        html+='<div class="gm-ex-row" onclick="speakWord(\''+escGm(ex.it).replace(/'/g,"\\'")+'\')"><span class="gm-ex-it">'+escGm(ex.it)+'</span><span class="gm-ex-ar">'+escGm(ex.ar)+'</span></div>';
      });
      html+='</div>';
      return html;
    }
    if(b.type==='usage'){
      let html='<div style="border:1px solid '+escGm(b.color||'#64748b')+';border-right:6px solid '+escGm(b.color||'#64748b')+';border-radius:12px;padding:10px;margin:10px 0;background:color-mix(in srgb,'+escGm(b.color||'#64748b')+' 9%,transparent)">';
      html+='<div style="font-weight:900;color:'+escGm(b.color||'#64748b')+'">'+escGm(b.title)+' — '+escGm(b.meaning)+'</div>';
      html+='<div style="margin:5px 0">'+escGm(b.description||'')+'</div>';
      (b.examples||[]).forEach(ex=>{let txt=escGm(ex.it);const target=escGm(ex.form||b.form||'');if(target)txt=txt.replace(target,'<span style="color:'+escGm(b.color||'#64748b')+';font-weight:900;text-decoration:underline;text-decoration-thickness:3px">'+target+'</span>');html+='<div class="gm-ex-row" onclick="speakWord(\''+escGm(ex.it).replace(/'/g,"\\'")+'\')"><span class="gm-ex-it">'+txt+'</span><span class="gm-ex-ar">'+escGm(ex.ar)+'</span></div>';});
      return html+'</div>';
    }
    if(b.type==='table'){
      let html='<div class="gm-table-title">'+escGm(b.title||'')+'</div><table class="gm-table">';
      html+='<tr>'+(b.headers||[]).map(h=>'<th>'+escGm(h)+'</th>').join('')+'</tr>';
      (b.rows||[]).forEach(r=>{
        html+='<tr>'+r.map(c=>'<td>'+escGm(c)+'</td>').join('')+'</tr>';
      });
      html+='</table>';
      return html;
    }
    return '';
  }).join('');
}

// ===== INFINITE LESSON ENGINE =====
// Merges: (1) live per-word matching + isolated drill-on-failure from the
// reference build, with (2) our deep grammar breakdown + conjugation tables
// + tap-any-word-to-hear-it + always-available free navigation.
let lDeck=[],lIdx=0;

function saveLessonProgress(){try{localStorage.setItem('parlaLessonProgress',JSON.stringify({idx:lIdx}));}catch(e){} setTimeout(saveAppState,0);}
function loadLessonProgress(){try{const raw=localStorage.getItem('parlaLessonProgress'); if(!raw)return 0; const st=JSON.parse(raw); return Number.isInteger(st.idx)?Math.max(0,st.idx):0;}catch(e){return 0;}}

let lPassed=0,lStreak=0,lAttempts=0;
let currentStudyMode='speak'; // 'speak' | 'listen' | 'write'
let seqPlaced=[],seqPoolOrder=[],seqChecked=false,seqSub='it';
let arSeqDeck=[],arSeqIdx=0;
let seqTtsTimer=null; // بيتخزّن فيه الـ setTimeout بتاع تشغيل النطق التلقائي في AR mode، لكي نقدر نلغيه لو الجملة اتغيّرت قبل ما يجري
function seqStopTts(){ // يلغي أي نطق متأخر (التايمر) + أي نطق شغال الآن
  clearTimeout(seqTtsTimer);
  seqTtsTimer=null;
  speechSynthesis.cancel();
}
function seqS(){return (seqSub==='ar'&&!wpChainActive)?arSeqDeck[arSeqIdx]:lDeck[lIdx];}
function seqIsLast(){return (seqSub==='ar'&&!wpChainActive)?arSeqIdx+1>=arSeqDeck.length:lIdx+1>=lDeck.length;}
function seqAdvance(){ // كمّل للجملة الجاية في AR sub-mode (لما المستخدم يبدّل تبويب أو سب-تبويب)
  // ملحوظة: IT sub-mode بيستخدم lDeck/lIdx الذي هي نفسها المستخدمة في تبويبات
  // النطق والكتابة، فمَنفعش نـ advance فيها هنا لكي ما نبوّظ تقدّم المستخدم
  // في التبويبات الآخرة. الـ advance هنا خاص بـ AR deck لكن (arSeqDeck/arSeqIdx).
  // لما السلسلة الأوتوماتيكية شغالة، الترتيب بالعربي يعمل على نفس lDeck/lIdx ليس على arSeqDeck — فمَنفعش نلمس arSeqDeck خالص.
  if(wpChainActive)return;
  if(seqSub!=='ar')return;
  if(arSeqDeck.length===0)return; // ما زال لا توجد deck — seqSetup هيعمله من الصفر
  arSeqIdx++;
  if(arSeqIdx>=arSeqDeck.length){arSeqDeck=shuffle([...AR_SEQ_SENTENCES]);arSeqIdx=0;}
}
function seqWordCount(){return seqS().words.length;}

// drill state — isolates and re-tests just the mispronounced word
let drillMode=false;
let drillTokenIdx=null;
let drillFails=0;
// Per-letter mastery mask for the word currently being drilled. Once a
// letter is heard correctly in ANY attempt it stays "locked" green forever
// for this word, even if a later attempt's alignment doesn't happen to
// match it again — so correct letters are never "forgotten" between
// retries. Reset only when a *new* word starts drilling (see startDrill).
let drillLetterMask=[];

// whole-sentence mic state
let tokenStates=[];           // 'pending'|'ok'|'bad'|'drill'|'skipped'|'auto', one per word
                               // ('auto' = preposition/indefinite article, never graded)
let sentenceAnswered=false;
let sentenceFails=0;

function showLessonLocked(){
  document.getElementById('lLockedMsg').style.display='block';
  document.getElementById('lessonContentWrap').style.display='none';
}
function hideLessonLocked(){
  document.getElementById('lLockedMsg').style.display='none';
  document.getElementById('lessonContentWrap').style.display='';
}
function lStart(){
  loadUnlockedSentences();
  if(wpUnlockedIndices.length===0){
    lDeck=[];lIdx=0;
    showLessonLocked();
    return;
  }
  lDeck=wpUnlockedIndices.map(i=>LESSON_SENTENCES[i]);lIdx=Math.min(loadLessonProgress(),Math.max(0,lDeck.length-1));
  lPassed=0;lStreak=0;lAttempts=0;
  document.getElementById('lRestartBtn').style.display='none';
  hideLessonLocked();
  lRender();
}
function restartLesson(){lStart();}

function lRender(){
  drillMode=false;sentenceAnswered=false;sentenceFails=0;
  pipelineSeenWords=new Set();
  const isSp=currentStudyMode==='speak';
  const isLi=currentStudyMode==='listen';
  const isWr=currentStudyMode==='write';
  const s=lDeck[lIdx];
  tokenStates=s.words.map(w=>(w.type==='omesso'||isAutoSkipWord(w.it))?'auto':'pending');

  document.getElementById('lPronoun').textContent=s.pronoun;
  document.getElementById('lAr').textContent=s.ar;
  document.getElementById('lEn').textContent=s.en;
  document.getElementById('lAr').style.display='';
  document.getElementById('lEn').style.display='';

  // breakdown panel (deep grammar notes, tap any word to hear it)
  const bd=document.getElementById('lBreakdown');
  bd.innerHTML='';
  s.words.forEach(w=>{
    const row=document.createElement('div');
    row.className='bd-row';
    const wordSpan=document.createElement('span');
    const gTopicId=w.grammarId||findGrammarTopicId(w.it);
    const vInfo=findVerbFromNote(w.note);
    wordSpan.className='bd-word word-tap'+(gTopicId?' has-grammar':'')+(vInfo?' has-verb':'');
    wordSpan.textContent=w.it;
    if(w.prepUsage){wordSpan.style.color=w.prepUsage.color;wordSpan.style.fontWeight='900';wordSpan.style.background=w.prepUsage.color+'18';wordSpan.style.borderBottom='3px solid '+w.prepUsage.color;wordSpan.style.borderRadius='6px';wordSpan.style.padding='1px 4px';}
    wordSpan.onclick=()=>speakWord(w.it);
    row.appendChild(wordSpan);
    if(gTopicId){
      const gBtn=document.createElement('span');
      gBtn.className='bd-grammar-btn';
      gBtn.textContent='📘';
      gBtn.title='القاعدة الجرامرية';
      gBtn.onclick=(e)=>{e.stopPropagation();openGrammarModal(gTopicId);};
      row.appendChild(gBtn);
    }
    if(vInfo){
      const vBtn=document.createElement('span');
      vBtn.className='bd-verb-btn';
      vBtn.textContent='📗';
      vBtn.title='تصريف الفعل';
      vBtn.onclick=(e)=>{e.stopPropagation();openVerbModal(vInfo.idx,vInfo.tab);};
      row.appendChild(vBtn);
    }
    const noteSpan=document.createElement('span');
    noteSpan.className='bd-note';
    noteSpan.textContent=w.note?(w.ar+' — '+w.note):w.ar;
    row.appendChild(noteSpan);
    bd.appendChild(row);
  });


  document.getElementById('lHeard').textContent='';
  document.getElementById('lBadge').className='badge';
  document.getElementById('lNextBtn').className='next-btn';
  document.getElementById('lSkipBtn').style.display=isSp?'inline-block':'none';
  document.getElementById('lCard').className='card';
  document.getElementById('drillBox').classList.remove('show');
  document.getElementById('lMicBtn').className='mic-btn';
  document.getElementById('lMicBtn').disabled=false;
  document.getElementById('lMicBtn').onclick=lToggleMic;
  document.getElementById('lMicLbl').className='mic-lbl';
  document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
  document.getElementById('lTtsBtn').style.display='inline-block';
  document.getElementById('lProgFill').style.width=(lIdx/lDeck.length*100)+'%';
  lUpdateScore();
  lRenderTokens();

  // Show the correct panel for current study mode
  document.getElementById('lTokens').style.display=isSp?'flex':'none';
  document.getElementById('listenPanel').style.display=isLi?'block':'none';
  if(!isLi)hideListenQuestion();
  document.getElementById('writePanel').style.display=isWr?'flex':'none';
  document.getElementById('lMicBtn').style.display=isSp?'flex':'none';
  document.getElementById('lMicLbl').style.display=isSp?'block':'none';
  if(isLi)seqSetup();
  if(isWr)writeSetup();
}

function lRenderTokens(){
  const s=lDeck[lIdx];
  const wrap=document.getElementById('lTokens');
  wrap.innerHTML='';
  s.words.forEach((w,i)=>{
    const span=document.createElement('span');
    span.className='token '+tokenStates[i];
    span.textContent=w.it;
    if(w.prepUsage){span.style.color=w.prepUsage.color;span.style.fontWeight='900';span.style.borderColor=w.prepUsage.color;span.style.background=w.prepUsage.color+'18';}
    span.title=tokenStates[i]==='auto'?w.ar+' (ليس لازم تتنطق لوحدها)':w.ar;
    span.onclick=()=>speakWord(w.it);
    wrap.appendChild(span);
  });
}

function lUpdateScore(){
  document.getElementById('lAvg').textContent=lAttempts?Math.round(lPassed/lAttempts*100)+'%':'0%';
  document.getElementById('lAll').textContent=(lIdx+1)+'/'+lDeck.length;
  document.getElementById('lStreak').textContent=lStreak;
}

function lSpeak(){
  const s=(currentStudyMode==='listen'&&seqSub==='ar'&&arSeqDeck[arSeqIdx])
    ?arSeqDeck[arSeqIdx]:lDeck[lIdx];
  speakWord(s.it);
}

function speakWord(text){
  const clean=text.replace(/^[.,!?;:"'""'']+|[.,!?;:"'""'']+$/g,'').trim();
  if(!clean)return;
  speechSynthesis.cancel();
  const utt=new SpeechSynthesisUtterance(clean);
  utt.lang='it-IT';utt.rate=0.75;
  speechSynthesis.speak(utt);
}

// ── Sentence-level mic (first pass at the whole sentence) ──
function lToggleMic(){
  if(sentenceAnswered||micBusy||drillMode)return;
  smartListen({
    micBtnId:'lMicBtn',micLblId:'lMicLbl',mode:'sentence',
    onResult:(alts)=>{
      document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
      lJudgeSentence(alts);
    },
    onError:(err)=>{
      document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
      document.getElementById('lHeard').textContent=micErrorMessage(err);
    }
  });
}

// Tokenizes what was heard and best-fit matches it word-by-word against the
// target sentence, marking each word ok/bad individually (instead of one
// score for the whole sentence).
function lJudgeSentence(alts){
  lAttempts++;
  sentenceFails++;
  const s=lDeck[lIdx];
  const heard=alts[0];
  document.getElementById('lHeard').textContent='🎧 سمعت: "'+heard+'"';

  const heardTokens=norm(heard).split(/\s+/).filter(Boolean);
  const used=new Array(heardTokens.length).fill(false);
  const matched=[];
  s.words.forEach(w=>{
    const target=norm(w.it);
    let best=-1,bestScore=0;
    heardTokens.forEach((ht,hi)=>{
      if(used[hi])return;
      const sc=similarity(norm(ht),target);
      if(sc>bestScore){bestScore=sc;best=hi;}
    });
    matched.push({score:bestScore,heardIdx:best});
    if(best>=0)used[best]=true;
  });

  const THRESH=0.72;
  let allOk=true;
  const badIdxs=[];
  s.words.forEach((w,i)=>{
    if(tokenStates[i]==='ok'||tokenStates[i]==='skipped'||tokenStates[i]==='auto')return;
    if(matched[i].score>=THRESH){tokenStates[i]='ok';}
    else{tokenStates[i]='bad';badIdxs.push(i);allOk=false;}
  });
  lRenderTokens();

  if(allOk){
    // flip auto tokens to ok so the whole sentence row turns green
    const okIdxsThisPass=s.words.map((w,i)=>i).filter(i=>tokenStates[i]==='ok');
    addSkillScore('pronunciation',100,true);
    tokenStates=tokenStates.map(st=>st==='auto'?'ok':st);
    lPassed++;lStreak++;
    sentenceAnswered=true;
    const showDone=()=>{
      document.getElementById('lBadge').innerHTML='🌟 ممتاز! الجملة كلها صحيحة ✅';
      document.getElementById('lBadge').className='badge ok show';
      document.getElementById('lCard').className='card ok';
      floatEmoji('🌟');
      document.getElementById('lMicBtn').disabled=true;
      document.getElementById('lSkipBtn').style.display='none';
      document.getElementById('lNextBtn').className='next-btn show';
      document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
      wpMaybeChainAfterSpeak();
    };
    document.getElementById('lMicBtn').disabled=true;
    maybeRunWordPipeline(okIdxsThisPass,showDone);
  } else {
    const okCount=s.words.filter((w,i)=>tokenStates[i]==='ok'||tokenStates[i]==='auto').length;
    addSkillScore('pronunciation',Math.round(okCount/s.words.length*100),false);
    lStreak=0;
    document.getElementById('lBadge').innerHTML='⚠️ في كلمات خطأ — هنتدرب عليها';
    document.getElementById('lBadge').className='badge mid show';
    document.getElementById('lSkipBtn').style.display='inline-block';
    startDrill(badIdxs[0]);
  }
  lUpdateScore();
}

// لما الجملة تعدي كاملة في وضع النطق والسلسلة كانت انطلقت من تبويب نطق الكلمات، نكمل أوتوماتيكيا لتبويب الترتيب.
function wpMaybeChainAfterSpeak(){
  if(!wpChainActive)return;
  setTimeout(()=>setStudyMode('listen'),900);
}

// ── Drill mode: isolate one mispronounced word and retest just that word ──
function startDrill(tokenIdx){
  drillMode=true;
  drillTokenIdx=tokenIdx;
  drillFails=0;
  const s=lDeck[lIdx];
  const w=s.words[tokenIdx];
  tokenStates[tokenIdx]='drill';
  lRenderTokens();

  drillLetterMask=new Array(norm(w.it).length).fill(false);
  document.getElementById('drillWord').textContent=w.it;
  document.getElementById('drillAr').textContent=w.ar;
  document.getElementById('drillNote').textContent=w.note||'';
  document.getElementById('drillAttempts').textContent='قول هذه الكلمة لوحدها';
  document.getElementById('drillBox').classList.add('show');
  document.getElementById('lTtsBtn').style.display='none';

  document.getElementById('lMicBtn').className='mic-btn';
  document.getElementById('lMicBtn').disabled=false;
  document.getElementById('lMicBtn').onclick=drillToggleMic;
  document.getElementById('lMicLbl').textContent='اضغط وقل الكلمة';

  setTimeout(()=>speakWord(w.it),300);
}

function drillToggleMic(){
  if(micBusy)return;
  smartListen({
    micBtnId:'lMicBtn',micLblId:'lMicLbl',mode:'word',
    onResult:(alts)=>{
      document.getElementById('lMicLbl').textContent='اضغط وقل الكلمة';
      drillJudge(alts);
    },
    onError:(err)=>{
      document.getElementById('lMicLbl').textContent='اضغط وقل الكلمة';
      document.getElementById('lHeard').textContent=micErrorMessage(err);
    }
  });
}

function drillJudge(alts){
  const s=lDeck[lIdx];
  const w=s.words[drillTokenIdx];
  const target=norm(w.it);
  let bestSim=0;
  alts.forEach(a=>{const sc=similarity(norm(a),target);if(sc>bestSim)bestSim=sc;});
  const heard=alts[0];
  document.getElementById('lHeard').textContent='🎧 سمعت: "'+heard+'"';

  // ثبّت أي حرف اتقال صحيح في المحاولة هذه فوق أي حروف كانت متثبتة من قبل —
  // الحرف الذي يتثبت "صحيح" مرة، يفضل صحيح لهذه الكلمة لحد ما تخلص أو تتخطاها،
  // حتى لو محاولة أخرى مختلفة مالقتهوش في نفس المكان.
  if(drillLetterMask.length!==target.length) drillLetterMask=new Array(target.length).fill(false);
  alts.forEach(a=>{
    const m=alignMismatches(w.it,a);
    m.forEach((ok,i)=>{ if(ok) drillLetterMask[i]=true; });
  });
  const totalLetters=drillLetterMask.length;
  const okLetters=drillLetterMask.filter(Boolean).length;
  const fullyCorrect=totalLetters>0&&okLetters>=totalLetters;

  if(fullyCorrect||bestSim>=0.72){
    tokenStates[drillTokenIdx]='ok';
    lRenderTokens();
    floatEmoji('✅');
    document.getElementById('drillWord').innerHTML=renderWordLetterMaskHtml(w.it,new Array(totalLetters).fill(true));
    document.getElementById('drillAttempts').textContent='✅ جيد!';
    finishDrillWord();
  } else {
    drillFails++;
    document.getElementById('drillWord').innerHTML=renderWordLetterMaskHtml(w.it,drillLetterMask);
    if(drillFails>=5){
      // 5 tries on this one word without finishing all its letters — skip
      // it automatically instead of trapping the learner in an endless loop.
      tokenStates[drillTokenIdx]='skipped';
      lRenderTokens();
      floatEmoji('⏭️');
      document.getElementById('drillAttempts').textContent='⏭️ تخطينا هذه الكلمة، يلا نكمل';
      finishDrillWord();
    } else {
      floatEmoji('🔁');
      document.getElementById('drillAttempts').textContent='ثبّتنا '+okLetters+' من '+totalLetters+' حروف صحيح — قول الكلمة مرة أخرى وركّز في الحروف الحمرا';
      setTimeout(()=>speakWord(w.it),300);
    }
  }
}

// Shared "leave the drill box" step for both a correct attempt and an
// auto-skip after 3 fails — moves on to the next bad word, or wraps up the
// sentence if that was the last one.
function skipCurrentDrillWord(){
  if(!drillMode||drillTokenIdx==null)return;
  tokenStates[drillTokenIdx]='skipped';
  lRenderTokens();
  document.getElementById('drillAttempts').textContent='⏭️ تم تخطي هذه الكلمة';
  finishDrillWord();
}

function finishDrillWord(){
  const completedIdx=drillTokenIdx;
  const wasSkipped=tokenStates[completedIdx]==='skipped';
  setTimeout(()=>{
    document.getElementById('lTtsBtn').style.display='inline-block';
    document.getElementById('lMicBtn').onclick=lToggleMic;
    document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
    document.getElementById('drillBox').classList.remove('show');
    drillMode=false;

    const runNext=()=>{
      const nextBad=tokenStates.findIndex(st=>st==='bad');
      if(nextBad>=0){
        startDrill(nextBad);
      } else {
        sentenceAnswered=true;
        tokenStates=tokenStates.map(st=>st==='auto'?'ok':st);
        const hadSkips=tokenStates.includes('skipped');
        if(!hadSkips){lPassed++;lStreak++;}
        else{lPassed+=0.5;lStreak=0;}
        document.getElementById('lBadge').innerHTML=hadSkips?'👍 خلصنا الجملة — كملنا بعض الكلمات مرة أخرى وقت':'🌟 ممتاز! عديت الجملة كلها ✅';
        document.getElementById('lBadge').className='badge ok show';
        document.getElementById('lCard').className='card ok';
        document.getElementById('lMicBtn').disabled=true;
        document.getElementById('lSkipBtn').style.display='none';
        document.getElementById('lNextBtn').className='next-btn show';
        document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
        floatEmoji(hadSkips?'👍':'🏆');
        lUpdateScore();
        wpMaybeChainAfterSpeak();
      }
    };

    if(wasSkipped){ runNext(); return; }
    maybeRunWordPipeline([completedIdx], runNext);
  },700);
}

// ===== WORD INFO + MCQ PIPELINE (مبني على spec_word_pipeline.md) =====
// بعد ما المتعلم ينطق كلمة صحيحة يأتي بانيل معلومة قصير عن هذه الكلمة (فعل/اسم/حرف جر/أداة ربط)
// وبعدين سؤال اختيار من متعدد لازم يأجب صحيح قبل ما يكمل. الكلمات المحذوفة (omesso) والغير
// مصنفة (altro) بتعدي المرحلة هذه ممتازًا لكي متتعطلشش اللعبة مع بيانات قديمة/غير مصنفة.
let pipelineSeenWords=new Set();
let pipelineCurrentWordIdx=null;

function maybeRunWordPipeline(idxs,callback){
  const s=lDeck[lIdx];
  const queue=idxs.filter(i=>{
    if(pipelineSeenWords.has(i))return false;
    const w=s.words[i];
    return w&&w.type&&Array.isArray(w.quiz)&&w.quiz.length>0&&w.type!=='omesso'&&w.type!=='altro';
  });
  queue.forEach(i=>pipelineSeenWords.add(i));
  runPipelineQueue(queue,0,callback);
}
function runPipelineQueue(queue,pos,callback){
  if(pos>=queue.length){callback();return;}
  const idx=queue[pos];
  showWordInfo(idx,pos,queue.length,()=>{
    runWordQuiz(idx,0,()=>{runPipelineQueue(queue,pos+1,callback);});
  });
}
function toArabicDigits(n){
  return String(n).replace(/[0-9]/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
}
function buildWordInfoHtml(w){
  const TENSE_AR={presente:'المضارع (Presente)',passato:'الماضي القريب (Passato Prossimo)',imperfetto:'الماضي الناقص (Imperfetto)',imperativo:'الأمر (Imperativo)'};
  if(w.type==='verbo'){
    let html='';
    html+='<div>🔤 الفعل الأصلي (المصدر): <b>'+escHtml(w.verbInfinitive||'')+'</b></div>';
    if(w.group)html+='<div>📚 مجموعة الفعل: <b>'+w.group+'</b></div>';
    if(w.tense)html+='<div>⏱️ الزمن: <b>'+(TENSE_AR[w.tense]||w.tense)+'</b></div>';
    html+='<div>✅ '+(w.regular?'فعل منتظم (يُصرَّف على القاعدة العادية)':'فعل شاذ (له تصريف خاص، احفظه لوحده)')+'</div>';
    if(w.tense==='passato')html+='<div>🤝 الفعل المساعد بتاعه: <b>'+(w.aux==='essere'?'essere':'avere')+'</b></div>';
    html+='<div>🎯 '+(w.transitive?'فعل متعدٍ (بياخد مفعول به مباشر)':'فعل لازم (ليس بياخد مفعول به مباشر)')+'</div>';
    return html;
  }
  if(w.type==='nome_unit'){
    let html='';
    html+='<div>🚻 الجنس: <b>'+(w.gender==='f'?'مؤنث':'مذكر')+'</b></div>';
    if(w.plural)html+='<div>🔢 صيغة الجمع (تقريبية): <b>'+escHtml(w.plural)+'</b></div>';
    return html;
  }
  if(w.type==='congiunzione'){
    let html='';
    html+='<div>🔗 المعنى هنا: <b>'+escHtml(w.meaning||'')+'</b></div>';
    if(w.grammarId)html+='<div><button class="bd-grammar-btn" style="font-size:22px" onclick="openGrammarModal(\''+escHtml(String(w.grammarId||'')).replace(/'/g,'\\\'')+'\')">📘 اعرض القاعدة كاملة</button></div>';
    return html;
  }
  if(w.type==='avverbio'){
    return '<div>⚡ ظرف ثابت: '+escHtml(w.usage||w.note||w.ar||'')+'</div>';
  }
  if(w.type==='pronome'){
    return '<div>👤 ضمير: '+escHtml(w.usage||w.note||w.ar||'')+'</div>';
  }
  if(w.type==='sintagma_prep'){
    let html='';
    html+='<div>🧩 حرف الجر: <b>'+escHtml(w.prep||'')+'</b></div>';
    if(w.prepNote)html+='<div>💡 '+escHtml(w.prepNote)+'</div>';
    return html;
  }
  if(w.type==='aggettivo'){
    let html='';
    if(w.invariant||!w.forms){
      html+='<div>🧷 كلمة ثابتة الشكل (ظرف/صفة بلا تصريف حسب الجنس أو العدد)</div>';
    } else {
      html+='<div>📐 صيغها:</div>';
      html+='<div>مذكر مفرد: <b>'+escHtml(w.forms.ms||'')+'</b> — مؤنث مفرد: <b>'+escHtml(w.forms.fs||'')+'</b></div>';
      html+='<div>مذكر جمع: <b>'+escHtml(w.forms.mp||'')+'</b> — مؤنث جمع: <b>'+escHtml(w.forms.fp||'')+'</b></div>';
    }
    return html;
  }
  return '<div>'+escHtml(w.note||'')+'</div>';
}
function showWordInfo(idx,pos,total,next){
  const s=lDeck[lIdx];
  const w=s.words[idx];
  pipelineCurrentWordIdx=idx;
  document.getElementById('drillBox').classList.remove('show');
  document.getElementById('wordQuizBox').style.display='none';
  document.getElementById('wordInfoProgress').textContent='معلومة عن الكلمة — '+toArabicDigits(pos+1)+'/'+toArabicDigits(total)+' كلمات';
  document.getElementById('wordInfoWord').textContent=w.it;
  document.getElementById('wordInfoBody').innerHTML=buildWordInfoHtml(w);
  document.getElementById('wordInfoBox').style.display='block';
  document.getElementById('lMicBtn').style.display='none';
  document.getElementById('lMicLbl').style.display='none';
  document.getElementById('lTtsBtn').style.display='none';
  setTimeout(()=>speakWord(w.it),200);
  document.getElementById('wordInfoNextBtn').onclick=()=>{
    document.getElementById('wordInfoBox').style.display='none';
    next();
  };
}
function wordPipelineAfterInfo(){ /* placeholder kept for the inline onclick in HTML; real handler is bound per-word in showWordInfo */ }
function runWordQuiz(idx,qPos,next){
  const s=lDeck[lIdx];
  const w=s.words[idx];
  if(!w.quiz||qPos>=w.quiz.length){
    document.getElementById('wordQuizBox').style.display='none';
    document.getElementById('lMicBtn').style.display='';
    document.getElementById('lMicLbl').style.display='';
    document.getElementById('lTtsBtn').style.display='inline-block';
    next();
    return;
  }
  const item=w.quiz[qPos];
  document.getElementById('wordQuizQ').textContent=item.q;
  document.getElementById('wordQuizFeedback').textContent='';
  const optsWrap=document.getElementById('wordQuizOptions');
  optsWrap.innerHTML='';
  item.options.forEach((opt,oi)=>{
    const btn=document.createElement('button');
    btn.className='write-check-btn';
    btn.style.width='100%';
    btn.textContent=opt;
    btn.onclick=()=>{
      if(oi===item.correct){
        document.getElementById('wordQuizFeedback').textContent='✅ صحيحيح!';
        floatEmoji('✅');
        setTimeout(()=>runWordQuiz(idx,qPos+1,next),500);
      } else {
        document.getElementById('wordQuizFeedback').textContent='❌ ليس هكذا، جرب مرة أخرى';
      }
    };
    optsWrap.appendChild(btn);
  });
  document.getElementById('wordInfoBox').style.display='none';
  document.getElementById('wordQuizBox').style.display='block';
}

function lSkipSentence(){
  tokenStates=tokenStates.map(st=>st==='ok'?'ok':'skipped');
  lRenderTokens();
  if(drillMode){
    drillMode=false;
    document.getElementById('drillBox').classList.remove('show');
    document.getElementById('lMicBtn').onclick=lToggleMic;
    document.getElementById('lTtsBtn').style.display='inline-block';
  }
  lStreak=0;
  sentenceAnswered=true;
  document.getElementById('lMicBtn').disabled=true;
  document.getElementById('lSkipBtn').style.display='none';
  document.getElementById('lNextBtn').className='next-btn show';
  document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
}

function lNext(){
  saveLessonProgress();
  if(currentStudyMode==='listen'&&seqSub==='ar'&&!wpChainActive){
    arSeqIdx++;
    if(arSeqIdx>=arSeqDeck.length){
      arSeqDeck=shuffle([...AR_SEQ_SENTENCES]);arSeqIdx=0;
      document.getElementById('lBadge').innerHTML='🏆 عدّيت كل الجمل! هنرجّع نبدأ من الأول.';
      document.getElementById('lBadge').className='badge ok show';
      setTimeout(()=>seqSetup(),1400);
    } else { seqSetup(); }
    return;
  }
  // لو دس على "جملة أخرى" قبل ما يحل الجملة الحالية (يعني تخطّاها من غير إجابة)،
  // بتتحسب محاولة فاشلة (صفر) لكي النسبة متبقاش بتتجاهل الجمل الذي اتخطّت.
  if(!sentenceAnswered){
    lAttempts++;
    lStreak=0;
  }
  lIdx++;
  saveLessonProgress();
  if(lIdx>=lDeck.length){lEnd();return;}
  lRender();
}

function lEnd(){
  document.getElementById('lMicBtn').disabled=true;
  document.getElementById('lNextBtn').className='next-btn';
  document.getElementById('lSkipBtn').style.display='none';
  const pct=lAttempts?Math.round(lPassed/lAttempts*100):0;
  document.getElementById('lBadge').innerHTML='🏆 أنهيت كل الـ '+lDeck.length+' جملة! نسبة النجاح: <b>'+pct+'%</b>';
  document.getElementById('lBadge').className='badge ok show';
  document.getElementById('lRestartBtn').style.display='inline-block';
  floatEmoji('🏆');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

start();
// Start loading the offline speech engine in the background right away, so
// it's hopefully ready by the time the user presses the mic. If it's not
// ready yet, the mic falls back to the online engine automatically.
ensureWhisperLoaded();

// ── Study mode switcher ──
// بيبدّل البانيل لكن من غير ما يعيد تحميل الجملة أو يمسح tokenStates —
// هكذا لو المستخدم بدّل موود وهو في نص جملة، التقدم في وضع النطق بيتحفظ.
// لما وضع الترتيب (listen) يخلص والسلسلة كانت من تبويب نطق الكلمات، نكمل أوتوماتيكيا لوضع الكتابة.
function wpMaybeChainAfterListen(){
  if(!wpChainActive)return;
  if(seqSub==='it'){
    setTimeout(()=>{ setSeqSub('ar'); },900);
  } else {
    setTimeout(()=>setStudyMode('write'),900);
  }
}

function setStudyMode(mode){
  if(micBusy)return;
  grammarHide();
  const prevMode=currentStudyMode;
  currentStudyMode=mode;
  seqStopTts(); // قفل أي نطق AR متأخر أو شغال من التبويب الذي كنا فيه، قبل ما نبدّل
  ['speak','listen','write'].forEach(m=>{
    document.getElementById('st'+m.charAt(0).toUpperCase()+m.slice(1))
      .classList.toggle('active',m===mode);
  });

  // إيقاف الـ drill بنظافة لو كان شغّال
  if(drillMode){
    drillMode=false;
    document.getElementById('drillBox').classList.remove('show');
    document.getElementById('lMicBtn').onclick=lToggleMic;
    document.getElementById('lTtsBtn').style.display='inline-block';
    document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
  }

  const isSp=mode==='speak', isLi=mode==='listen', isWr=mode==='write';

  // ── إظهار / إخفاء البانيلات ──
  document.getElementById('lTokens').style.display=isSp?'flex':'none';
  document.getElementById('listenPanel').style.display=isLi?'block':'none';
  if(!isLi)hideListenQuestion();
  document.getElementById('writePanel').style.display=isWr?'flex':'none';
  document.getElementById('lMicBtn').style.display=isSp?'flex':'none';
  document.getElementById('lMicLbl').style.display=isSp?'block':'none';

  // ── مسح الـ UI الليسترك ──
  document.getElementById('lHeard').textContent='';
  document.getElementById('lBadge').className='badge';
  document.getElementById('lSkipBtn').style.display=isSp?'inline-block':'none';
  document.getElementById('lCard').className='card';
  document.getElementById('lNextBtn').className='next-btn';

  if(isSp){
    // رجوع لوضع النطق — حافظ على tokenStates و sentenceAnswered كما هم
    document.getElementById('lTtsBtn').style.display='inline-block';
    document.getElementById('lMicBtn').onclick=lToggleMic;
    document.getElementById('lMicBtn').disabled=sentenceAnswered;
    document.getElementById('lMicBtn').className='mic-btn';
    document.getElementById('lMicLbl').className='mic-lbl';
    document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
    document.getElementById('lBreakdown').style.display='flex';
    document.getElementById('lSkipBtn').style.display='inline-block';
    const sc=lDeck[lIdx];
    lRenderTokens();
    if(sentenceAnswered){
      document.getElementById('lNextBtn').className='next-btn show';
      document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
    }
  }
  if(isLi){
    if(prevMode!==mode) seqAdvance(); // بدّلنا للتبويب هذا من تبويب مرة أخرى — كمّل للجملة الجاية، ليس نفس القديمة
    seqSetup(); // seqSetup يدير الـ breakdown بنفسه
    showListenQuestion();
  }
  if(isWr){
    document.getElementById('lBreakdown').style.display='flex';
    document.getElementById('lSkipBtn').style.display='inline-block';
    const sc=lDeck[lIdx];
    writeSetup();
  }
}


// ── LISTENING MICRO-QUIZ ──
let currentListenQuestion=null;
function hideListenQuestion(){const p=document.getElementById('listenQuizPanel'); if(p)p.classList.remove('show'); currentListenQuestion=null;}
function makeListenQuestion(s){
  const pool=LESSON_SENTENCES.filter(x=>x!==s);
  const distractors=shuffle(pool).slice(0,3).map(x=>x.ar||x.en||x.it);
  const options=shuffle([s.ar||s.en||s.it,...distractors]);
  return {prompt:'استمع إلى الجملة، واختار معناها الصحيح:',answer:options.indexOf(s.ar||s.en||s.it),options};
}
function showListenQuestion(){
  const s=seqS(); if(!s)return;
  currentListenQuestion=makeListenQuestion(s);
  document.getElementById('listenQPrompt').textContent=currentListenQuestion.prompt;
  const wrap=document.getElementById('listenQOptions'); wrap.innerHTML='';
  currentListenQuestion.options.forEach((op,i)=>{const b=document.createElement('button'); b.className='listen-q-option'; b.textContent=op; b.onclick=()=>answerListenQuestion(i); wrap.appendChild(b);});
  document.getElementById('listenQuizPanel').classList.add('show');
  setTimeout(()=>speakWord(s.it),250);
}
function answerListenQuestion(i){
  if(!currentListenQuestion)return;
  const q=currentListenQuestion, opts=[...document.getElementById('listenQOptions').children];
  opts.forEach((b,idx)=>{b.disabled=true; if(idx===q.answer)b.classList.add('ok');});
  const ok=i===q.answer; if(!ok&&opts[i])opts[i].classList.add('bad');
  addSkillScore('listening',ok?100:35,ok);
  currentListenQuestion=null;
}

// ── SEQUENCE MODE ──
// IT sub-mode: shuffled Italian tiles; word audio plays on each pick (no full-sentence auto-play).
// AR sub-mode: full sentence auto-plays in Italian; user arranges Arabic-labelled tiles.
// Tiles where ar is a grammar description (starts with '(') keep the Italian word as their label.

function seqArLabel(w){
  // If Arabic translation is a grammar placeholder, show Italian word instead
  return (!w.ar||w.ar.startsWith('('))?w.it:w.ar;
}

function setSeqSub(sub){
  hideListenQuestion();
  seqStopTts(); // قفل أي نطق متأخر من السب-تبويب الذي كنا فيه
  const prevSub=seqSub;
  seqSub=sub;
  document.getElementById('seqSubIt').classList.toggle('active',sub==='it');
  document.getElementById('seqSubAr').classList.toggle('active',sub==='ar');
  document.getElementById('lAr').style.display='';
  document.getElementById('lEn').style.display='';
  if(sub==='ar'&&prevSub!=='ar') seqAdvance(); // داخلين على AR من تبويب مرة أخرى — كمّل للجملة الجاية
  seqSetup();
  showListenQuestion();
}

function seqSetup(){
  if(seqSub==='ar'&&!wpChainActive&&arSeqDeck.length===0){arSeqDeck=shuffle([...AR_SEQ_SENTENCES]);arSeqIdx=0;}
  const s=seqS();
  seqChecked=false;
  seqPlaced=[];
  seqPoolOrder=shuffle(s.words.map((_,i)=>i));

  // Tile containers flow LTR for Italian tiles (correct reading order while
  // building an Italian sentence) and RTL for Arabic tiles.
  document.getElementById('seqAnswer').classList.toggle('dir-rtl',seqSub==='ar');
  document.getElementById('seqPool').classList.toggle('dir-rtl',seqSub==='ar');

  // ── Sync the header translations to THIS sentence (not lDeck[lIdx]) ──
  // AR mode: hide the Arabic (it's the answer) — show English hint only
  // IT mode: show both Arabic + English as usual
  const arEl=document.getElementById('lAr');
  const enEl=document.getElementById('lEn');
  arEl.textContent=s.ar;
  enEl.textContent=s.en;
  if(seqSub==='ar'){
    arEl.style.display='none';   // الإجابة — نخبّيها
    enEl.style.display='';       // الإنجليمثل فقط كتلميح
  } else {
    arEl.style.display='';
    enEl.style.display='';
  }

  // AR mode: auto-play full Italian sentence (task = hear then arrange Arabic)
  // IT mode: no auto-play — individual word plays on pick
  if(seqSub==='ar'){
    const utt=new SpeechSynthesisUtterance(s.it);
    utt.lang='it-IT';utt.rate=0.75;
    clearTimeout(seqTtsTimer); // امسح أي تايمر قديم متأخر، لكي ما يجيش يشغّل جملة قديمة بعد ما الجملة اتغيّرت
    seqTtsTimer=setTimeout(()=>{speechSynthesis.cancel();speechSynthesis.speak(utt);},700);
  }

  // TTS button: visible in both modes
  document.getElementById('lTtsBtn').style.display='inline-block';

  // Update zone label
  document.getElementById('seqZoneLbl').textContent=
    seqSub==='it'?'رتّب بالإيطالي 🔀':'رتّب بالعربي 🔀';

  document.getElementById('lHeard').textContent='';
  document.getElementById('lBadge').className='badge';
  document.getElementById('lBreakdown').style.display='none';
  document.getElementById('seqRevealBtn').style.display='inline-block';
  seqRender();
}

// Returns tile class string including ar modifier when needed
function seqTileClass(...states){
  return ['seq-tile',seqSub==='ar'?'ar':'',...states].filter(Boolean).join(' ');
}

function seqRender(){
  const s=seqS();
  const ar=seqSub==='ar';

  // ── answer zone ──
  const az=document.getElementById('seqAnswer');
  az.innerHTML='';
  if(seqPlaced.length===0){
    const hint=document.createElement('span');
    hint.className='seq-empty-hint';
    hint.textContent=ar?'اختار الكلمات بالعربي بالترتيب الصحيح':'اضغط على الكلمات بالترتيب الصحيح';
    az.appendChild(hint);
    az.classList.remove('has-tiles');
  } else {
    seqPlaced.forEach(wi=>{
      const w=s.words[wi];
      const t=document.createElement('span');
      t.className=seqTileClass('placed');
      t.textContent=ar?seqArLabel(w):w.it;
      t.title=ar?w.it:w.ar;
      if(!seqChecked)t.onclick=()=>seqReturn(wi);
      az.appendChild(t);
    });
    az.classList.add('has-tiles');
  }

  // ── pool ──
  const pl=document.getElementById('seqPool');
  pl.innerHTML='';
  seqPoolOrder.forEach(wi=>{
    if(seqPlaced.includes(wi))return;
    const w=s.words[wi];
    const t=document.createElement('span');
    t.className=seqTileClass();
    t.textContent=ar?seqArLabel(w):w.it;
    t.title=ar?w.it:w.ar;
    if(!seqChecked)t.onclick=()=>seqPick(wi);
    pl.appendChild(t);
  });
}

function seqPick(wi){
  if(seqChecked)return;
  // IT mode: play the individual word audio on selection
  if(seqSub==='it')speakWord(seqS().words[wi].it);
  seqPlaced.push(wi);
  seqRender();
  if(seqPlaced.length===seqWordCount())setTimeout(seqCheck,800);
}

function seqReturn(wi){
  if(seqChecked)return;
  const pos=seqPlaced.indexOf(wi);
  if(pos>=0)seqPlaced.splice(pos,1);
  seqRender();
}

// Arabic word order is more flexible than Italian's, so the AR side of
// sequence-mode can accept more than one correct arrangement. A sentence
// may optionally carry `arOrders`: an array of alternate accepted orders,
// each itself an array of the original word indices (0..n-1) in that
// order — e.g. arOrders:[[6,7,0,1,2,3,4,5]] means "ogni/sera first, then
// Io/leggevo/..." is also correct, in addition to the literal default
// (Italian-mirroring) order. The Italian side (رتّب بالإيطالي) always has
// exactly one correct order: the sentence's actual word order, since
// that's literally what's being practiced there.
function seqAcceptedOrders(s){
  const n=s.words.length;
  const defaultOrder=Array.from({length:n},(_,i)=>i);
  if(seqSub==='it'||!s.arOrders||!s.arOrders.length)return [defaultOrder];
  return [defaultOrder,...s.arOrders];
}

function seqCheck(){
  if(seqChecked)return;
  seqChecked=true;
  const s=seqS();
  // Grade against whichever accepted order the learner's placement matches
  // best, so a valid alternate Arabic ordering doesn't get marked wrong
  // just because it differs from the default literal order.
  const candidates=seqAcceptedOrders(s);
  let best=candidates[0],bestMatches=-1;
  candidates.forEach(c=>{
    let m=0;
    seqPlaced.forEach((wi,pos)=>{if(wi===c[pos])m++;});
    if(m>bestMatches){bestMatches=m;best=c;}
  });
  let correct=0;
  const tiles=document.getElementById('seqAnswer').querySelectorAll('.seq-tile');
  seqPlaced.forEach((wi,pos)=>{
    const ok=(wi===best[pos]);
    if(ok)correct++;
    if(tiles[pos])tiles[pos].className=seqTileClass(ok?'ok':'bad');
  });
  const pct=Math.round(correct/s.words.length*100);
  lAttempts++;
  addSkillScore('grammarOrder',pct,pct>=80);
  if(seqSub==='ar')addSkillScore('listening',Math.round(pct*0.85+15),pct>=80);
  if(pct>=80){lPassed++;lStreak++;floatEmoji('✅');}
  else{lStreak=0;floatEmoji('🔀');}
  lUpdateScore();

  const badge=document.getElementById('lBadge');
  badge.innerHTML=correct+'/'+s.words.length+' كلمة في مكانها الصحيح — <b>'+pct+'%</b>';
  badge.className='badge '+(pct>=80?'ok':pct>=50?'mid':'bad')+' show';
  document.getElementById('lCard').className='card '+(pct>=80?'ok':pct>=50?'mid':'bad');

  document.getElementById('lBreakdown').style.display='flex';
  document.getElementById('lNextBtn').className='next-btn show';
  document.getElementById('lNextBtn').textContent=seqIsLast()?'أنهيت المجموعة 🏆':'← الجملة التالية';
  document.getElementById('seqRevealBtn').style.display='none';
  wpMaybeChainAfterListen();
}

function seqReveal(){
  if(seqChecked)return;
  seqChecked=true;
  const s=seqS();
  const az=document.getElementById('seqAnswer');
  az.innerHTML='';az.classList.add('has-tiles');
  const ar=seqSub==='ar';
  s.words.forEach(w=>{
    const t=document.createElement('span');
    t.className=seqTileClass('ok');
    t.textContent=ar?seqArLabel(w):w.it;
    t.title=ar?w.it:w.ar;
    az.appendChild(t);
  });
  document.getElementById('seqPool').innerHTML='';
  document.getElementById('lBreakdown').style.display='flex';
  document.getElementById('lNextBtn').className='next-btn show';
  document.getElementById('lNextBtn').textContent=seqIsLast()?'أنهيت المجموعة 🏆':'← الجملة التالية';
  document.getElementById('seqRevealBtn').style.display='none';
  skillScores.grammarOrder.reveals++; if(seqSub==='ar')skillScores.listening.reveals++;
  addSkillScore('grammarOrder',35,false); if(seqSub==='ar')addSkillScore('listening',35,false);
  lStreak=0;lUpdateScore();
  wpMaybeChainAfterListen();
}


// ── GRAMMAR MICRO-QUESTIONS (appear after Writing) ──
let currentGrammarQuestion=null;
function grammarHide(){
  const panel=document.getElementById('grammarQuizPanel'); if(panel)panel.classList.remove('show');
  currentGrammarQuestion=null;
}
function sentenceText(s){return (s.it||s.words.map(w=>w.it).join(' ')).trim();}
function hasWord(s,rx){return s.words.some(w=>rx.test(norm(w.it)));}
function makeGrammarQuestion(s){
  const txt=sentenceText(s);
  const low=txt.toLowerCase();
  if(/(ho|hai|ha|abbiamo|avete|hanno)\s+\w*(ato|uto|ito)/i.test(txt)){
    const aux=(txt.match(/(ho|hai|ha|abbiamo|avete|hanno)/i)||['ho'])[0];
    return {prompt:'لماذا استخدمنا "'+aux+'" في الجملة؟',options:['لأن الفعل هنا في Passato Prossimo وبيستخدم avere','لأن الفاعل مؤنث مفرد','لأن الجملة في المستقبل','لأن بعد mentre لازم avere'],answer:0,explanation:'في الماضي المركب Passato Prossimo أفعال كثيرًا مثل mangiare / guardare / parlare بتاخد avere: ho mangiato, ho guardato.'};
  }
  if(/(sono|sei|è|e|siamo|siete)\s+\w*(ato|ata|ati|ate)/i.test(txt)){
    return {prompt:'ما القاعدة المهمة مع الأفعال الذي بتاخد essere؟',options:['آخر التصريف بيتفق مع الفاعل في النوع والعدد','بنستخدم نفس النهاية دايمًا: -o','لازم نحط avere بعد الفعل','الفاعل لازم يتحذف'],answer:0,explanation:'مع essere في Passato Prossimo لازم الـ participio يتفق مع الفاعل: andato / andata / andati / andate.'};
  }
  if(/mentre/i.test(txt) || /avo|evo|ivo/i.test(txt)){
    return {prompt:'لماذا استخدمنا فعل مثل "guardavo / mangiavo"؟',options:['لكي يوصف حدث مستمر أو خلفية في الماضي','لكي هذا أمر مباشر','لكي هذا مستقبل قريب','لكي الفاعل جمع'],answer:0,explanation:'Imperfetto بنستخدمه للخلفية أو العادة أو الحدث المستمر في الماضي. مع mentre شائع جدًا: mentre guardavo = وأنا كنت أشاهد.'};
  }
  const prep=s.words.find(w=>['a','in','con','per','da','di'].includes(norm(w.it)));
  if(prep){
    return {prompt:'الكلمة "'+prep.it+'" هنا وظيفتها ما؟',options:['حرف جر بيربط المعنى بين الكلمات','فعل مساعد في الماضي','أداة استفهام','ضمير ملكية'],answer:0,explanation:'حروف الجر مثل a / in / con / per / da / di صغيرة، لكنها بتحدد العلاقة: إلى، في، مع، من، لكي...'};
  }
  const art=s.words.find(w=>['il','lo','la','l','un','una','uno','i','gli','le'].includes(norm(w.it).replace(/'/g,'')));
  if(art){
    return {prompt:'الكلمة "'+art.it+'" تعتبر ما؟',options:['أداة تعريف أو تنكير مرتبطة بالاسم','فعل في الماضي','حرف جر','صفة ملكية'],answer:0,explanation:'الأدوات في الإيطالي تتغير حسب النوع والعدد وبداية الاسم: il/un للمذكر، la/una للمؤنث، وهكذا.'};
  }
  return {prompt:'ما أول شيء ندور علماذاا لفهم تركيب الجملة الإيطالية؟',options:['الفعل: زمنه ومَن الفاعل بتاعه','آخر كلمة لكن','علامات الترقيم فقط','الترجمة الحرفية كلمة بكلمة'],answer:0,explanation:'الفعل هو قلب الجملة: منه نعرف الزمن والفاعل، وبعدها نفهم باقي الكلمات حوالماذا.'};
}
function showGrammarQuestion(){
  const s=lDeck[lIdx]; if(!s)return;
  currentGrammarQuestion=makeGrammarQuestion(s);
  const panel=document.getElementById('grammarQuizPanel');
  const prompt=document.getElementById('grammarQPrompt');
  const opts=document.getElementById('grammarQOptions');
  const exp=document.getElementById('grammarQExplain');
  prompt.textContent=currentGrammarQuestion.prompt; opts.innerHTML=''; exp.className='grammar-explain'; exp.textContent='';
  currentGrammarQuestion.options.forEach((op,i)=>{
    const b=document.createElement('button'); b.className='grammar-q-option'; b.textContent=op;
    b.onclick=()=>answerGrammarQuestion(i); opts.appendChild(b);
  });
  panel.classList.add('show');
  document.getElementById('lNextBtn').className='next-btn';
}
function answerGrammarQuestion(i){
  if(!currentGrammarQuestion)return;
  const q=currentGrammarQuestion;
  const opts=[...document.getElementById('grammarQOptions').children];
  opts.forEach((b,idx)=>{b.disabled=true; if(idx===q.answer)b.classList.add('ok');});
  const ok=i===q.answer; if(!ok&&opts[i])opts[i].classList.add('bad');
  addSkillScore('grammarOrder',ok?100:35,ok);
  const exp=document.getElementById('grammarQExplain');
  exp.innerHTML=(ok?'✅ صحيح. ':'❌ مش بالضبط. ')+q.explanation; exp.className='grammar-explain show';
  document.getElementById('lBadge').innerHTML=(ok?'🧩 إجابة الجرامر صحيحة ✅':'🧩 راجع سبب القاعدة فوق') ;
  document.getElementById('lBadge').className='badge '+(ok?'ok':'mid')+' show';
  document.getElementById('lNextBtn').className='next-btn show';
  document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
  currentGrammarQuestion=null;
}

// ── WRITE MODE ──
// Show Arabic (+ audio hint via TTS button); user types the Italian sentence.
// Token-by-token Levenshtein check gives per-word green/red feedback.
function writeSetup(){
  const inp=document.getElementById('writeInput');
  inp.value='';inp.disabled=false;
  document.getElementById('writeResult').innerHTML='';
  document.getElementById('writeScore').textContent='';
  document.getElementById('writeCheckBtn').disabled=false;
  document.getElementById('lNextBtn').className='next-btn';
  document.getElementById('lHeard').textContent='';
  document.getElementById('lBadge').className='badge';
  grammarHide();
  inp.onkeydown=(e)=>{
    if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();checkWrite();}
  };
  setTimeout(()=>inp.focus(),150);
}

function checkWrite(){
  const s=lDeck[lIdx];
  const inp=document.getElementById('writeInput');
  const typed=inp.value.trim();
  if(!typed)return;

  inp.disabled=true;
  document.getElementById('writeCheckBtn').disabled=true;

  const typedToks=typed.split(/\s+/).filter(Boolean);
  const resultWrap=document.getElementById('writeResult');
  resultWrap.innerHTML='';
  let correctCount=0, gradedCount=0;

  s.words.forEach((w,i)=>{
    const div=document.createElement('div');

    // حروف الجر والمقالات — دايماً صحيح تلقائياً مثل speak mode
    if(isAutoSkipWord(w.it)){
      div.className='wr-tok auto';
      div.textContent=w.it;
      resultWrap.appendChild(div);
      return;
    }

    gradedCount++;
    const target=norm(w.it);
    const userWord=typedToks[i]||'';
    const isOk=similarity(norm(userWord),target)>=0.72;
    if(isOk)correctCount++;

    div.className='wr-tok '+(isOk?'ok':'bad');
    div.textContent=isOk?w.it:(userWord||'—');
    if(!isOk){
      const sp=document.createElement('span');
      sp.className='correct-form';
      sp.textContent='✓ '+w.it;
      div.appendChild(sp);
    }
    resultWrap.appendChild(div);
  });

  // النسبة من الكلمات الأساسية (ليس حروف الجر)
  const pct=gradedCount?Math.round(correctCount/gradedCount*100):0;
  const scoreEl=document.getElementById('writeScore');
  scoreEl.textContent=correctCount+'/'+gradedCount+' كلمة صحيحة — '+pct+'%';
  scoreEl.style.color=pct>=80?'var(--green)':pct>=50?'var(--gold)':'var(--red)';

  lAttempts++;
  addWritingSkillScore(pct,correctCount,gradedCount,pct>=80);
  if(pct>=80){lPassed++;lStreak++;floatEmoji('✅');}
  else{lStreak=0;floatEmoji('📝');}
  lUpdateScore();

  showGrammarQuestion();
}

// لما الكتابة تخلص والسلسلة كانت من تبويب نطق الكلمات، نرجعله للجملة الجاية في نفس التبويب.
function wpMaybeChainAfterWrite(){
  if(!wpChainActive)return;
  setTimeout(()=>wpChainAdvanceToNextSentence(),1400);
}
