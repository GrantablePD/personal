// Challenge sentences for each verb
// Each verb has 7+ challenges covering different tenses and persons

export const challenges = {
  'ser': [
    { tense: 'presente', person: 'yo', english: 'I am a student.', spanish: 'Soy estudiante.', alt: 'Yo soy estudiante.', hint: 'Ser in present tense for "yo" is "soy" - no accent!' },
    { tense: 'presente', person: 'el', english: 'She is my friend.', spanish: 'Ella es mi amiga.', alt: 'Es mi amiga.', hint: 'Ser with él/ella uses "es".' },
    { tense: 'preterito', person: 'yo', english: 'I was happy yesterday.', spanish: 'Fui feliz ayer.', alt: 'Yo fui feliz ayer.', hint: 'Preterite of ser for "yo" is "fui" - same as ir!' },
    { tense: 'preterito', person: 'ellos', english: 'They were doctors.', spanish: 'Fueron médicos.', alt: 'Ellos fueron médicos.', hint: 'Preterite of ser for "ellos" is "fueron".' },
    { tense: 'futuro', person: 'nosotros', english: 'We will be ready.', spanish: 'Seremos listos.', alt: 'Nosotros seremos listos.', hint: 'Future of ser adds endings to "ser-": seremos.' },
    { tense: 'futuro', person: 'tu', english: 'You will be famous.', spanish: 'Serás famoso.', alt: 'Tú serás famoso.', hint: 'Future tú form ends in -ás with accent.' },
    { tense: 'imperfecto', person: 'el', english: 'He was tall when young.', spanish: 'Era alto cuando joven.', alt: 'Él era alto cuando joven.', hint: 'Imperfect of ser is highly irregular: era, eras, era...' },
    { tense: 'imperfecto', person: 'nosotros', english: 'We were friends.', spanish: 'Éramos amigos.', alt: 'Nosotros éramos amigos.', hint: 'Imperfect nosotros form is "éramos" with accent.' }
  ],
  'estar': [
    { tense: 'presente', person: 'yo', english: 'I am tired.', spanish: 'Estoy cansado.', alt: 'Yo estoy cansado.', hint: 'Estar present yo is "estoy" - like "soy" but with "est-".' },
    { tense: 'presente', person: 'tu', english: 'Are you ready?', spanish: '¿Estás listo?', alt: '¿Tú estás listo?', hint: 'Present tú form is "estás" with accent.' },
    { tense: 'preterito', person: 'el', english: 'He was at home.', spanish: 'Estuvo en casa.', alt: 'Él estuvo en casa.', hint: 'Preterite uses "estuv-" stem: estuvo.' },
    { tense: 'preterito', person: 'nosotros', english: 'We were in the park.', spanish: 'Estuvimos en el parque.', alt: 'Nosotros estuvimos en el parque.', hint: 'Preterite nosotros is "estuvimos".' },
    { tense: 'futuro', person: 'yo', english: 'I will be there.', spanish: 'Estaré allí.', alt: 'Yo estaré allí.', hint: 'Future uses full infinitive + endings: estaré.' },
    { tense: 'futuro', person: 'ellos', english: 'They will be happy.', spanish: 'Estarán felices.', alt: 'Ellos estarán felices.', hint: 'Future ellos ends in -án with accent.' },
    { tense: 'imperfecto', person: 'yo', english: 'I was working.', spanish: 'Estaba trabajando.', alt: 'Yo estaba trabajando.', hint: 'Imperfect is regular: estaba, estabas, estaba...' },
    { tense: 'imperfecto', person: 'ellos', english: 'They were sleeping.', spanish: 'Estaban durmiendo.', alt: 'Ellos estaban durmiendo.', hint: 'Imperfect ellos is "estaban".' }
  ],
  'tener': [
    { tense: 'presente', person: 'yo', english: 'I have a car.', spanish: 'Tengo un carro.', alt: 'Yo tengo un carro.|Tengo un coche.', hint: 'Present yo is "tengo" - irregular g appears.' },
    { tense: 'presente', person: 'tu', english: 'You have time.', spanish: 'Tienes tiempo.', alt: 'Tú tienes tiempo.', hint: 'Present tú shows e→ie stem change: tienes.' },
    { tense: 'preterito', person: 'el', english: 'She had a problem.', spanish: 'Tuvo un problema.', alt: 'Ella tuvo un problema.', hint: 'Preterite uses "tuv-" stem: tuvo.' },
    { tense: 'preterito', person: 'yo', english: 'I had an idea.', spanish: 'Tuve una idea.', alt: 'Yo tuve una idea.', hint: 'Preterite yo is "tuve" - no accent needed.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will have dinner.', spanish: 'Tendremos cena.', alt: 'Nosotros tendremos cena.', hint: 'Future uses irregular "tendr-" stem.' },
    { tense: 'futuro', person: 'tu', english: 'You will have success.', spanish: 'Tendrás éxito.', alt: 'Tú tendrás éxito.', hint: 'Future tú: tendrás (irregular stem + -ás).' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to have a dog.', spanish: 'Tenía un perro.', alt: 'Yo tenía un perro.', hint: 'Imperfect is regular -er pattern: tenía.' },
    { tense: 'imperfecto', person: 'ellos', english: 'They had money.', spanish: 'Tenían dinero.', alt: 'Ellos tenían dinero.', hint: 'Imperfect ellos: tenían.' }
  ],
  'hacer': [
    { tense: 'presente', person: 'yo', english: 'I do my homework.', spanish: 'Hago mi tarea.', alt: 'Yo hago mi tarea.', hint: 'Present yo is "hago" - c becomes g.' },
    { tense: 'presente', person: 'el', english: 'He makes coffee.', spanish: 'Hace café.', alt: 'Él hace café.', hint: 'Present él/ella is "hace".' },
    { tense: 'preterito', person: 'yo', english: 'I made a mistake.', spanish: 'Hice un error.', alt: 'Yo hice un error.', hint: 'Preterite yo is "hice" - c becomes soft sound.' },
    { tense: 'preterito', person: 'el', english: 'She did the work.', spanish: 'Hizo el trabajo.', alt: 'Ella hizo el trabajo.', hint: 'Preterite él/ella is "hizo" - c becomes z.' },
    { tense: 'futuro', person: 'tu', english: 'You will do it.', spanish: 'Lo harás.', alt: 'Tú lo harás.', hint: 'Future uses "har-" stem (drops -ce): harás.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will make dinner.', spanish: 'Haremos la cena.', alt: 'Nosotros haremos la cena.', hint: 'Future nosotros: haremos.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to make bread.', spanish: 'Hacía pan.', alt: 'Yo hacía pan.', hint: 'Imperfect is regular: hacía.' },
    { tense: 'imperfecto', person: 'ellos', english: 'They were making noise.', spanish: 'Hacían ruido.', alt: 'Ellos hacían ruido.', hint: 'Imperfect ellos: hacían.' }
  ],
  'poder': [
    { tense: 'presente', person: 'yo', english: 'I can help.', spanish: 'Puedo ayudar.', alt: 'Yo puedo ayudar.', hint: 'Present has o→ue stem change: puedo.' },
    { tense: 'presente', person: 'nosotros', english: 'We can go.', spanish: 'Podemos ir.', alt: 'Nosotros podemos ir.', hint: 'Nosotros keeps the "o": podemos.' },
    { tense: 'preterito', person: 'el', english: 'He could not come.', spanish: 'No pudo venir.', alt: 'Él no pudo venir.', hint: 'Preterite uses "pud-" stem: pudo.' },
    { tense: 'preterito', person: 'yo', english: 'I was able to finish.', spanish: 'Pude terminar.', alt: 'Yo pude terminar.', hint: 'Preterite yo: pude (no accent).' },
    { tense: 'futuro', person: 'tu', english: 'You will be able to do it.', spanish: 'Podrás hacerlo.', alt: 'Tú podrás hacerlo.', hint: 'Future uses "podr-" stem: podrás.' },
    { tense: 'futuro', person: 'ellos', english: 'They will be able to come.', spanish: 'Podrán venir.', alt: 'Ellos podrán venir.', hint: 'Future ellos: podrán.' },
    { tense: 'imperfecto', person: 'yo', english: 'I could swim well.', spanish: 'Podía nadar bien.', alt: 'Yo podía nadar bien.', hint: 'Imperfect is regular: podía.' },
    { tense: 'imperfecto', person: 'tu', english: 'You could run fast.', spanish: 'Podías correr rápido.', alt: 'Tú podías correr rápido.', hint: 'Imperfect tú: podías.' }
  ],
  'decir': [
    { tense: 'presente', person: 'yo', english: 'I say the truth.', spanish: 'Digo la verdad.', alt: 'Yo digo la verdad.', hint: 'Present yo has e→i and adds g: digo.' },
    { tense: 'presente', person: 'el', english: 'She says yes.', spanish: 'Dice que sí.', alt: 'Ella dice que sí.', hint: 'Present él/ella: dice (e→i).' },
    { tense: 'preterito', person: 'yo', english: 'I said goodbye.', spanish: 'Dije adiós.', alt: 'Yo dije adiós.', hint: 'Preterite uses "dij-" stem: dije.' },
    { tense: 'preterito', person: 'ellos', english: 'They said nothing.', spanish: 'No dijeron nada.', alt: 'Ellos no dijeron nada.', hint: 'Preterite ellos: dijeron (no i in ending).' },
    { tense: 'futuro', person: 'tu', english: 'You will tell me.', spanish: 'Me dirás.', alt: 'Tú me dirás.', hint: 'Future uses "dir-" stem: dirás.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will say it.', spanish: 'Lo diremos.', alt: 'Nosotros lo diremos.', hint: 'Future nosotros: diremos.' },
    { tense: 'imperfecto', person: 'el', english: 'He always said that.', spanish: 'Siempre decía eso.', alt: 'Él siempre decía eso.', hint: 'Imperfect is regular: decía.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to say hello.', spanish: 'Decía hola.', alt: 'Yo decía hola.', hint: 'Imperfect yo: decía.' }
  ],
  'ir': [
    { tense: 'presente', person: 'yo', english: 'I go to school.', spanish: 'Voy a la escuela.', alt: 'Yo voy a la escuela.', hint: 'Present yo is "voy" - completely irregular!' },
    { tense: 'presente', person: 'nosotros', english: 'We go to the beach.', spanish: 'Vamos a la playa.', alt: 'Nosotros vamos a la playa.', hint: 'Present nosotros: vamos.' },
    { tense: 'preterito', person: 'yo', english: 'I went to the store.', spanish: 'Fui a la tienda.', alt: 'Yo fui a la tienda.', hint: 'Preterite is same as "ser": fui, fuiste, fue...' },
    { tense: 'preterito', person: 'ellos', english: 'They went home.', spanish: 'Fueron a casa.', alt: 'Ellos fueron a casa.', hint: 'Preterite ellos: fueron.' },
    { tense: 'futuro', person: 'tu', english: 'You will go tomorrow.', spanish: 'Irás mañana.', alt: 'Tú irás mañana.', hint: 'Future uses full infinitive: irás.' },
    { tense: 'futuro', person: 'el', english: 'He will go with us.', spanish: 'Irá con nosotros.', alt: 'Él irá con nosotros.', hint: 'Future él: irá.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to go every day.', spanish: 'Iba todos los días.', alt: 'Yo iba todos los días.', hint: 'Imperfect is very irregular: iba, ibas, iba...' },
    { tense: 'imperfecto', person: 'nosotros', english: 'We were going there.', spanish: 'Íbamos allí.', alt: 'Nosotros íbamos allí.', hint: 'Imperfect nosotros: íbamos (accent on i).' }
  ],
  'ver': [
    { tense: 'presente', person: 'yo', english: 'I see the mountains.', spanish: 'Veo las montañas.', alt: 'Yo veo las montañas.', hint: 'Present yo: veo (just add -o to ve-).' },
    { tense: 'presente', person: 'tu', english: 'Do you see it?', spanish: '¿Lo ves?', alt: '¿Tú lo ves?', hint: 'Present tú: ves.' },
    { tense: 'preterito', person: 'yo', english: 'I saw the movie.', spanish: 'Vi la película.', alt: 'Yo vi la película.', hint: 'Preterite yo: vi (no accent, very short!).' },
    { tense: 'preterito', person: 'ellos', english: 'They saw the accident.', spanish: 'Vieron el accidente.', alt: 'Ellos vieron el accidente.', hint: 'Preterite ellos: vieron.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will see.', spanish: 'Veremos.', alt: 'Nosotros veremos.', hint: 'Future is regular: veremos.' },
    { tense: 'futuro', person: 'tu', english: 'You will see the results.', spanish: 'Verás los resultados.', alt: 'Tú verás los resultados.', hint: 'Future tú: verás.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to see her often.', spanish: 'La veía a menudo.', alt: 'Yo la veía a menudo.', hint: 'Imperfect yo: veía (keeps the e).' },
    { tense: 'imperfecto', person: 'el', english: 'He was watching TV.', spanish: 'Veía la televisión.', alt: 'Él veía la televisión.', hint: 'Imperfect él: veía.' }
  ],
  'dar': [
    { tense: 'presente', person: 'yo', english: 'I give a gift.', spanish: 'Doy un regalo.', alt: 'Yo doy un regalo.', hint: 'Present yo: doy (like voy, soy, estoy).' },
    { tense: 'presente', person: 'el', english: 'She gives advice.', spanish: 'Da consejos.', alt: 'Ella da consejos.', hint: 'Present él/ella: da (very short!).' },
    { tense: 'preterito', person: 'yo', english: 'I gave the book.', spanish: 'Di el libro.', alt: 'Yo di el libro.', hint: 'Preterite yo: di (no accent, like vi).' },
    { tense: 'preterito', person: 'ellos', english: 'They gave us money.', spanish: 'Nos dieron dinero.', alt: 'Ellos nos dieron dinero.', hint: 'Preterite ellos: dieron.' },
    { tense: 'futuro', person: 'tu', english: 'You will give me time.', spanish: 'Me darás tiempo.', alt: 'Tú me darás tiempo.', hint: 'Future is regular: darás.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will give thanks.', spanish: 'Daremos gracias.', alt: 'Nosotros daremos gracias.', hint: 'Future nosotros: daremos.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to give classes.', spanish: 'Daba clases.', alt: 'Yo daba clases.', hint: 'Imperfect is regular -ar: daba.' },
    { tense: 'imperfecto', person: 'ellos', english: 'They were giving help.', spanish: 'Daban ayuda.', alt: 'Ellos daban ayuda.', hint: 'Imperfect ellos: daban.' }
  ],
  'saber': [
    { tense: 'presente', person: 'yo', english: 'I know the answer.', spanish: 'Sé la respuesta.', alt: 'Yo sé la respuesta.', hint: 'Present yo: sé (just two letters, with accent!).' },
    { tense: 'presente', person: 'tu', english: 'Do you know how to swim?', spanish: '¿Sabes nadar?', alt: '¿Tú sabes nadar?', hint: 'Present tú: sabes.' },
    { tense: 'preterito', person: 'yo', english: 'I found out yesterday.', spanish: 'Supe ayer.', alt: 'Yo lo supe ayer.', hint: 'Preterite uses "sup-" stem: supe.' },
    { tense: 'preterito', person: 'el', english: 'He learned the news.', spanish: 'Supo la noticia.', alt: 'Él supo la noticia.', hint: 'Preterite él: supo.' },
    { tense: 'futuro', person: 'tu', english: 'You will know soon.', spanish: 'Sabrás pronto.', alt: 'Tú sabrás pronto.', hint: 'Future uses "sabr-" stem: sabrás.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will know the truth.', spanish: 'Sabremos la verdad.', alt: 'Nosotros sabremos la verdad.', hint: 'Future nosotros: sabremos.' },
    { tense: 'imperfecto', person: 'yo', english: 'I knew the song.', spanish: 'Sabía la canción.', alt: 'Yo sabía la canción.', hint: 'Imperfect is regular: sabía.' },
    { tense: 'imperfecto', person: 'ellos', english: 'They knew everything.', spanish: 'Sabían todo.', alt: 'Ellos sabían todo.', hint: 'Imperfect ellos: sabían.' }
  ],
  'querer': [
    { tense: 'presente', person: 'yo', english: 'I want water.', spanish: 'Quiero agua.', alt: 'Yo quiero agua.', hint: 'Present has e→ie stem change: quiero.' },
    { tense: 'presente', person: 'nosotros', english: 'We want to go.', spanish: 'Queremos ir.', alt: 'Nosotros queremos ir.', hint: 'Nosotros keeps the "e": queremos.' },
    { tense: 'preterito', person: 'yo', english: 'I wanted to help.', spanish: 'Quise ayudar.', alt: 'Yo quise ayudar.', hint: 'Preterite uses "quis-" stem: quise.' },
    { tense: 'preterito', person: 'el', english: 'She refused to come.', spanish: 'No quiso venir.', alt: 'Ella no quiso venir.', hint: 'Preterite él/ella: quiso.' },
    { tense: 'futuro', person: 'tu', english: 'You will want more.', spanish: 'Querrás más.', alt: 'Tú querrás más.', hint: 'Future uses "querr-" stem: querrás.' },
    { tense: 'futuro', person: 'ellos', english: 'They will love it.', spanish: 'Lo querrán.', alt: 'Ellos lo querrán.', hint: 'Future ellos: querrán.' },
    { tense: 'imperfecto', person: 'yo', english: 'I wanted to be a doctor.', spanish: 'Quería ser médico.', alt: 'Yo quería ser médico.', hint: 'Imperfect is regular: quería.' },
    { tense: 'imperfecto', person: 'tu', english: 'You loved your dog.', spanish: 'Querías a tu perro.', alt: 'Tú querías a tu perro.', hint: 'Imperfect tú: querías.' }
  ],
  'hablar': [
    { tense: 'presente', person: 'yo', english: 'I speak Spanish.', spanish: 'Hablo español.', alt: 'Yo hablo español.', hint: 'Regular -ar present: drop -ar, add -o.' },
    { tense: 'presente', person: 'ellos', english: 'They speak loudly.', spanish: 'Hablan fuerte.', alt: 'Ellos hablan fuerte.', hint: 'Present ellos: hablan.' },
    { tense: 'preterito', person: 'yo', english: 'I spoke with Maria.', spanish: 'Hablé con María.', alt: 'Yo hablé con María.', hint: 'Preterite yo ends in -é with accent.' },
    { tense: 'preterito', person: 'el', english: 'He talked too much.', spanish: 'Habló demasiado.', alt: 'Él habló demasiado.', hint: 'Preterite él ends in -ó with accent.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will speak tomorrow.', spanish: 'Hablaremos mañana.', alt: 'Nosotros hablaremos mañana.', hint: 'Future: infinitive + -emos.' },
    { tense: 'futuro', person: 'tu', english: 'You will talk to her.', spanish: 'Hablarás con ella.', alt: 'Tú hablarás con ella.', hint: 'Future tú: hablarás.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to speak French.', spanish: 'Hablaba francés.', alt: 'Yo hablaba francés.', hint: 'Imperfect -ar verbs use -aba endings.' },
    { tense: 'imperfecto', person: 'nosotros', english: 'We were talking.', spanish: 'Hablábamos.', alt: 'Nosotros hablábamos.', hint: 'Imperfect nosotros: hablábamos (accent!).' }
  ],
  'vivir': [
    { tense: 'presente', person: 'yo', english: 'I live in Costa Rica.', spanish: 'Vivo en Costa Rica.', alt: 'Yo vivo en Costa Rica.', hint: 'Regular -ir present: drop -ir, add -o.' },
    { tense: 'presente', person: 'ellos', english: 'They live nearby.', spanish: 'Viven cerca.', alt: 'Ellos viven cerca.', hint: 'Present ellos -ir: viven.' },
    { tense: 'preterito', person: 'yo', english: 'I lived there for years.', spanish: 'Viví allí por años.', alt: 'Yo viví allí por años.', hint: 'Preterite -ir yo ends in -í with accent.' },
    { tense: 'preterito', person: 'el', english: 'She lived in Madrid.', spanish: 'Vivió en Madrid.', alt: 'Ella vivió en Madrid.', hint: 'Preterite él -ir: vivió.' },
    { tense: 'futuro', person: 'tu', english: 'You will live longer.', spanish: 'Vivirás más.', alt: 'Tú vivirás más.', hint: 'Future: infinitive + -ás.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will live here.', spanish: 'Viviremos aquí.', alt: 'Nosotros viviremos aquí.', hint: 'Future nosotros: viviremos.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to live downtown.', spanish: 'Vivía en el centro.', alt: 'Yo vivía en el centro.', hint: 'Imperfect -ir uses -ía endings.' },
    { tense: 'imperfecto', person: 'ellos', english: 'They were living together.', spanish: 'Vivían juntos.', alt: 'Ellos vivían juntos.', hint: 'Imperfect ellos: vivían.' }
  ],
  'comer': [
    { tense: 'presente', person: 'yo', english: 'I eat breakfast.', spanish: 'Como desayuno.', alt: 'Yo como desayuno.', hint: 'Regular -er present: drop -er, add -o.' },
    { tense: 'presente', person: 'tu', english: 'Do you eat meat?', spanish: '¿Comes carne?', alt: '¿Tú comes carne?', hint: 'Present tú -er: comes.' },
    { tense: 'preterito', person: 'yo', english: 'I ate pizza.', spanish: 'Comí pizza.', alt: 'Yo comí pizza.', hint: 'Preterite -er yo ends in -í.' },
    { tense: 'preterito', person: 'nosotros', english: 'We ate at the restaurant.', spanish: 'Comimos en el restaurante.', alt: 'Nosotros comimos en el restaurante.', hint: 'Preterite nosotros: comimos.' },
    { tense: 'futuro', person: 'el', english: 'He will eat later.', spanish: 'Comerá después.', alt: 'Él comerá después.', hint: 'Future: infinitive + -á.' },
    { tense: 'futuro', person: 'ellos', english: 'They will eat together.', spanish: 'Comerán juntos.', alt: 'Ellos comerán juntos.', hint: 'Future ellos: comerán.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to eat a lot.', spanish: 'Comía mucho.', alt: 'Yo comía mucho.', hint: 'Imperfect -er uses -ía endings.' },
    { tense: 'imperfecto', person: 'tu', english: 'You were eating fast.', spanish: 'Comías rápido.', alt: 'Tú comías rápido.', hint: 'Imperfect tú: comías.' }
  ],
  'venir': [
    { tense: 'presente', person: 'yo', english: 'I come from Mexico.', spanish: 'Vengo de México.', alt: 'Yo vengo de México.', hint: 'Present yo: vengo (adds g).' },
    { tense: 'presente', person: 'tu', english: 'Are you coming?', spanish: '¿Vienes?', alt: '¿Tú vienes?', hint: 'Present tú: vienes (e→ie).' },
    { tense: 'preterito', person: 'yo', english: 'I came yesterday.', spanish: 'Vine ayer.', alt: 'Yo vine ayer.', hint: 'Preterite uses "vin-" stem: vine.' },
    { tense: 'preterito', person: 'ellos', english: 'They came to visit.', spanish: 'Vinieron a visitar.', alt: 'Ellos vinieron a visitar.', hint: 'Preterite ellos: vinieron.' },
    { tense: 'futuro', person: 'tu', english: 'Will you come tomorrow?', spanish: '¿Vendrás mañana?', alt: '¿Tú vendrás mañana?', hint: 'Future uses "vendr-" stem: vendrás.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will come back.', spanish: 'Vendremos de vuelta.', alt: 'Nosotros vendremos.', hint: 'Future nosotros: vendremos.' },
    { tense: 'imperfecto', person: 'el', english: 'He used to come often.', spanish: 'Venía a menudo.', alt: 'Él venía a menudo.', hint: 'Imperfect is regular: venía.' },
    { tense: 'imperfecto', person: 'yo', english: 'I was coming to help.', spanish: 'Venía a ayudar.', alt: 'Yo venía a ayudar.', hint: 'Imperfect yo: venía.' }
  ],
  'salir': [
    { tense: 'presente', person: 'yo', english: 'I leave at eight.', spanish: 'Salgo a las ocho.', alt: 'Yo salgo a las ocho.', hint: 'Present yo: salgo (adds g).' },
    { tense: 'presente', person: 'tu', english: 'Are you going out tonight?', spanish: '¿Sales esta noche?', alt: '¿Tú sales esta noche?', hint: 'Present tú: sales.' },
    { tense: 'preterito', person: 'yo', english: 'I went out early.', spanish: 'Salí temprano.', alt: 'Yo salí temprano.', hint: 'Preterite is regular: salí.' },
    { tense: 'preterito', person: 'ellos', english: 'They left the party.', spanish: 'Salieron de la fiesta.', alt: 'Ellos salieron de la fiesta.', hint: 'Preterite ellos: salieron.' },
    { tense: 'futuro', person: 'tu', english: 'You will go out tomorrow.', spanish: 'Saldrás mañana.', alt: 'Tú saldrás mañana.', hint: 'Future uses "saldr-" stem: saldrás.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will leave soon.', spanish: 'Saldremos pronto.', alt: 'Nosotros saldremos pronto.', hint: 'Future nosotros: saldremos.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to go out a lot.', spanish: 'Salía mucho.', alt: 'Yo salía mucho.', hint: 'Imperfect is regular: salía.' },
    { tense: 'imperfecto', person: 'el', english: 'She was leaving.', spanish: 'Salía.', alt: 'Ella salía.', hint: 'Imperfect él/ella: salía.' }
  ],
  'pensar': [
    { tense: 'presente', person: 'yo', english: 'I think so.', spanish: 'Pienso que sí.', alt: 'Yo pienso que sí.', hint: 'Present has e→ie stem change: pienso.' },
    { tense: 'presente', person: 'nosotros', english: 'We think it is good.', spanish: 'Pensamos que es bueno.', alt: 'Nosotros pensamos que es bueno.', hint: 'Nosotros keeps "e": pensamos.' },
    { tense: 'preterito', person: 'yo', english: 'I thought about it.', spanish: 'Pensé en eso.', alt: 'Yo pensé en eso.', hint: 'Preterite is regular: pensé.' },
    { tense: 'preterito', person: 'el', english: 'He thought it was true.', spanish: 'Pensó que era verdad.', alt: 'Él pensó que era verdad.', hint: 'Preterite él: pensó.' },
    { tense: 'futuro', person: 'tu', english: 'You will think differently.', spanish: 'Pensarás diferente.', alt: 'Tú pensarás diferente.', hint: 'Future is regular: pensarás.' },
    { tense: 'futuro', person: 'ellos', english: 'They will think about it.', spanish: 'Pensarán en eso.', alt: 'Ellos pensarán en eso.', hint: 'Future ellos: pensarán.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to think that.', spanish: 'Pensaba eso.', alt: 'Yo pensaba eso.', hint: 'Imperfect is regular: pensaba.' },
    { tense: 'imperfecto', person: 'nosotros', english: 'We were thinking.', spanish: 'Pensábamos.', alt: 'Nosotros pensábamos.', hint: 'Imperfect nosotros: pensábamos.' }
  ],
  'dormir': [
    { tense: 'presente', person: 'yo', english: 'I sleep well.', spanish: 'Duermo bien.', alt: 'Yo duermo bien.', hint: 'Present has o→ue stem change: duermo.' },
    { tense: 'presente', person: 'tu', english: 'Do you sleep enough?', spanish: '¿Duermes suficiente?', alt: '¿Tú duermes suficiente?', hint: 'Present tú: duermes (o→ue).' },
    { tense: 'preterito', person: 'yo', english: 'I slept eight hours.', spanish: 'Dormí ocho horas.', alt: 'Yo dormí ocho horas.', hint: 'Preterite yo is regular: dormí.' },
    { tense: 'preterito', person: 'el', english: 'She slept late.', spanish: 'Durmió tarde.', alt: 'Ella durmió tarde.', hint: 'Preterite él has o→u: durmió.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will sleep here.', spanish: 'Dormiremos aquí.', alt: 'Nosotros dormiremos aquí.', hint: 'Future is regular: dormiremos.' },
    { tense: 'futuro', person: 'tu', english: 'You will sleep better.', spanish: 'Dormirás mejor.', alt: 'Tú dormirás mejor.', hint: 'Future tú: dormirás.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to sleep a lot.', spanish: 'Dormía mucho.', alt: 'Yo dormía mucho.', hint: 'Imperfect is regular: dormía.' },
    { tense: 'imperfecto', person: 'ellos', english: 'They were sleeping.', spanish: 'Dormían.', alt: 'Ellos dormían.', hint: 'Imperfect ellos: dormían.' }
  ],
  'trabajar': [
    { tense: 'presente', person: 'yo', english: 'I work from home.', spanish: 'Trabajo desde casa.', alt: 'Yo trabajo desde casa.', hint: 'Regular -ar: trabajo.' },
    { tense: 'presente', person: 'el', english: 'She works at a bank.', spanish: 'Trabaja en un banco.', alt: 'Ella trabaja en un banco.', hint: 'Present él/ella: trabaja.' },
    { tense: 'preterito', person: 'yo', english: 'I worked all day.', spanish: 'Trabajé todo el día.', alt: 'Yo trabajé todo el día.', hint: 'Preterite yo: trabajé.' },
    { tense: 'preterito', person: 'nosotros', english: 'We worked together.', spanish: 'Trabajamos juntos.', alt: 'Nosotros trabajamos juntos.', hint: 'Preterite nosotros same as present: trabajamos.' },
    { tense: 'futuro', person: 'tu', english: 'You will work tomorrow.', spanish: 'Trabajarás mañana.', alt: 'Tú trabajarás mañana.', hint: 'Future: trabajarás.' },
    { tense: 'futuro', person: 'ellos', english: 'They will work hard.', spanish: 'Trabajarán duro.', alt: 'Ellos trabajarán duro.', hint: 'Future ellos: trabajarán.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to work there.', spanish: 'Trabajaba allí.', alt: 'Yo trabajaba allí.', hint: 'Imperfect: trabajaba.' },
    { tense: 'imperfecto', person: 'tu', english: 'You were working.', spanish: 'Trabajabas.', alt: 'Tú trabajabas.', hint: 'Imperfect tú: trabajabas.' }
  ],
  'escribir': [
    { tense: 'presente', person: 'yo', english: 'I write every day.', spanish: 'Escribo todos los días.', alt: 'Yo escribo todos los días.', hint: 'Regular -ir: escribo.' },
    { tense: 'presente', person: 'tu', english: 'Do you write emails?', spanish: '¿Escribes correos?', alt: '¿Tú escribes correos?', hint: 'Present tú: escribes.' },
    { tense: 'preterito', person: 'yo', english: 'I wrote a letter.', spanish: 'Escribí una carta.', alt: 'Yo escribí una carta.', hint: 'Preterite yo: escribí.' },
    { tense: 'preterito', person: 'el', english: 'She wrote a book.', spanish: 'Escribió un libro.', alt: 'Ella escribió un libro.', hint: 'Preterite él/ella: escribió.' },
    { tense: 'futuro', person: 'nosotros', english: 'We will write more.', spanish: 'Escribiremos más.', alt: 'Nosotros escribiremos más.', hint: 'Future: escribiremos.' },
    { tense: 'futuro', person: 'tu', english: 'You will write to me.', spanish: 'Me escribirás.', alt: 'Tú me escribirás.', hint: 'Future tú: escribirás.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to write poems.', spanish: 'Escribía poemas.', alt: 'Yo escribía poemas.', hint: 'Imperfect: escribía.' },
    { tense: 'imperfecto', person: 'ellos', english: 'They were writing.', spanish: 'Escribían.', alt: 'Ellos escribían.', hint: 'Imperfect ellos: escribían.' }
  ],
  'aprender': [
    { tense: 'presente', person: 'yo', english: 'I learn Spanish.', spanish: 'Aprendo español.', alt: 'Yo aprendo español.', hint: 'Regular -er: aprendo.' },
    { tense: 'presente', person: 'nosotros', english: 'We learn together.', spanish: 'Aprendemos juntos.', alt: 'Nosotros aprendemos juntos.', hint: 'Present nosotros: aprendemos.' },
    { tense: 'preterito', person: 'yo', english: 'I learned something new.', spanish: 'Aprendí algo nuevo.', alt: 'Yo aprendí algo nuevo.', hint: 'Preterite yo: aprendí.' },
    { tense: 'preterito', person: 'ellos', english: 'They learned quickly.', spanish: 'Aprendieron rápido.', alt: 'Ellos aprendieron rápido.', hint: 'Preterite ellos: aprendieron.' },
    { tense: 'futuro', person: 'tu', english: 'You will learn.', spanish: 'Aprenderás.', alt: 'Tú aprenderás.', hint: 'Future: aprenderás.' },
    { tense: 'futuro', person: 'el', english: 'He will learn the truth.', spanish: 'Aprenderá la verdad.', alt: 'Él aprenderá la verdad.', hint: 'Future él: aprenderá.' },
    { tense: 'imperfecto', person: 'yo', english: 'I was learning French.', spanish: 'Aprendía francés.', alt: 'Yo aprendía francés.', hint: 'Imperfect: aprendía.' },
    { tense: 'imperfecto', person: 'nosotros', english: 'We were learning.', spanish: 'Aprendíamos.', alt: 'Nosotros aprendíamos.', hint: 'Imperfect nosotros: aprendíamos.' }
  ],
  'comprar': [
    { tense: 'presente', person: 'yo', english: 'I buy groceries.', spanish: 'Compro comida.', alt: 'Yo compro comida.', hint: 'Regular -ar: compro.' },
    { tense: 'presente', person: 'el', english: 'She buys clothes.', spanish: 'Compra ropa.', alt: 'Ella compra ropa.', hint: 'Present él/ella: compra.' },
    { tense: 'preterito', person: 'yo', english: 'I bought a car.', spanish: 'Compré un carro.', alt: 'Yo compré un carro.|Compré un coche.', hint: 'Preterite yo: compré.' },
    { tense: 'preterito', person: 'nosotros', english: 'We bought the house.', spanish: 'Compramos la casa.', alt: 'Nosotros compramos la casa.', hint: 'Preterite nosotros: compramos.' },
    { tense: 'futuro', person: 'tu', english: 'You will buy it.', spanish: 'Lo comprarás.', alt: 'Tú lo comprarás.', hint: 'Future: comprarás.' },
    { tense: 'futuro', person: 'ellos', english: 'They will buy more.', spanish: 'Comprarán más.', alt: 'Ellos comprarán más.', hint: 'Future ellos: comprarán.' },
    { tense: 'imperfecto', person: 'yo', english: 'I used to buy there.', spanish: 'Compraba allí.', alt: 'Yo compraba allí.', hint: 'Imperfect: compraba.' },
    { tense: 'imperfecto', person: 'tu', english: 'You were buying.', spanish: 'Comprabas.', alt: 'Tú comprabas.', hint: 'Imperfect tú: comprabas.' }
  ]
};

// Generate default challenges for verbs not explicitly defined
export function generateDefaultChallenges(verb, conjugations) {
  const templates = {
    presente: {
      yo: [`I ${verb.english.replace('to ', '')} every day.`, `Yo {form} todos los días.`],
      tu: [`You ${verb.english.replace('to ', '')} well.`, `Tú {form} bien.`],
      el: [`He/She ${verb.english.replace('to ', '')}s now.`, `{form} ahora.`],
      nosotros: [`We ${verb.english.replace('to ', '')} together.`, `{form} juntos.`],
      ellos: [`They ${verb.english.replace('to ', '')}.`, `Ellos {form}.`]
    },
    preterito: {
      yo: [`I ${verb.english.replace('to ', '')}ed yesterday.`, `{form} ayer.`],
      tu: [`You ${verb.english.replace('to ', '')}ed last week.`, `{form} la semana pasada.`],
      el: [`He/She ${verb.english.replace('to ', '')}ed.`, `{form}.`],
      nosotros: [`We ${verb.english.replace('to ', '')}ed together.`, `{form} juntos.`],
      ellos: [`They ${verb.english.replace('to ', '')}ed.`, `Ellos {form}.`]
    },
    futuro: {
      yo: [`I will ${verb.english.replace('to ', '')} tomorrow.`, `{form} mañana.`],
      tu: [`You will ${verb.english.replace('to ', '')} later.`, `{form} después.`],
      el: [`He/She will ${verb.english.replace('to ', '')}.`, `{form}.`],
      nosotros: [`We will ${verb.english.replace('to ', '')} soon.`, `{form} pronto.`],
      ellos: [`They will ${verb.english.replace('to ', '')}.`, `Ellos {form}.`]
    },
    imperfecto: {
      yo: [`I used to ${verb.english.replace('to ', '')}.`, `{form}.`],
      tu: [`You used to ${verb.english.replace('to ', '')}.`, `{form}.`],
      el: [`He/She used to ${verb.english.replace('to ', '')}.`, `{form}.`],
      nosotros: [`We used to ${verb.english.replace('to ', '')} a lot.`, `{form} mucho.`],
      ellos: [`They were ${verb.english.replace('to ', '')}ing.`, `{form}.`]
    }
  };

  const result = [];
  const tenses = ['presente', 'preterito', 'futuro', 'imperfecto'];
  const persons = ['yo', 'tu', 'el', 'nosotros', 'ellos'];

  // Generate 7-8 challenges spread across tenses and persons
  let count = 0;
  for (const tense of tenses) {
    for (const person of persons) {
      if (count >= 8) break;
      if (conjugations[tense] && conjugations[tense][person]) {
        const form = conjugations[tense][person];
        const template = templates[tense][person];
        result.push({
          tense,
          person,
          english: template[0],
          spanish: template[1].replace('{form}', form),
          hint: `Check the ${tense} conjugation for ${person}.`
        });
        count++;
      }
    }
  }

  return result;
}
