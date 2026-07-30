const LESSON_NORMAL_SENTENCES = [].concat(LESSON_IO, LESSON_TU, LESSON_LUI, LESSON_LEI, LESSON_NOI, LESSON_VOI, LESSON_LORO);
const LESSON_SENTENCES = (() => {
  const merged=[]; let normalIndex=0, imperativeIndex=0;
  while (normalIndex < LESSON_NORMAL_SENTENCES.length) {
    merged.push(...LESSON_NORMAL_SENTENCES.slice(normalIndex, normalIndex+3)); normalIndex += 3;
    if (imperativeIndex < LESSON_IMPERATIVO.length) merged.push(LESSON_IMPERATIVO[imperativeIndex++]);
  }
  while (imperativeIndex < LESSON_IMPERATIVO.length) merged.push(LESSON_IMPERATIVO[imperativeIndex++]);
  merged.forEach((sentence,index)=>{
    const topic=INTEGRATED_TOPIC_BANK[index % INTEGRATED_TOPIC_BANK.length];
    const prep=INTEGRATED_PREPOSITION_BANK[index % INTEGRATED_PREPOSITION_BANK.length];
    sentence.integratedTopics=[...(sentence.integratedTopics||[]),topic.topic,prep.kind];
    sentence.topicExposure={topic:topic.topic,focus:topic.focus,example:topic.example,status:topic.status,grammarId:topic.grammarId};
    sentence.prepositionExposure={form:prep.form,meaning:prep.meaning,example:prep.example,kind:prep.kind};
    sentence.quiz=[...(sentence.quiz||[]),
      {wordIt:topic.focus,q:`📚 ${topic.topic}: ${topic.example}\n${topic.q}`,options:topic.options,correct:topic.correct,grammarId:topic.grammarId},
      {wordIt:(sentence.prepositionFocus||prep).form,q:`🎨 حرف الجر ${(sentence.prepositionFocus||prep).form}: في المثال «${(sentence.prepositionFocus||prep).it||prep.example}» ما الاستخدام المقصود؟`,options:[(sentence.prepositionFocus||prep).title||prep.meaning,'استخدام مكاني عام','أداة تعريف','زمن فعل'],correct:0,grammarId:(sentence.prepositionFocus||prep).grammarId||(prep.kind==='حرف جر غير أصلي'?'improprie':'prep_semplici')}
    ];
  });
  return merged;
})();
