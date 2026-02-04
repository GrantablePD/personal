// 100 most common Spanish verbs with full conjugations
// Ordered by frequency of use

export const verbs = [
  { spanish: 'ser', english: 'to be (permanent)', type: 'ir', irregular: true },
  { spanish: 'estar', english: 'to be (temporary)', type: 'ar', irregular: true },
  { spanish: 'tener', english: 'to have', type: 'er', irregular: true },
  { spanish: 'hacer', english: 'to do/make', type: 'er', irregular: true },
  { spanish: 'poder', english: 'to be able to/can', type: 'er', irregular: true },
  { spanish: 'decir', english: 'to say/tell', type: 'ir', irregular: true },
  { spanish: 'ir', english: 'to go', type: 'ir', irregular: true },
  { spanish: 'ver', english: 'to see', type: 'er', irregular: true },
  { spanish: 'dar', english: 'to give', type: 'ar', irregular: true },
  { spanish: 'saber', english: 'to know (facts)', type: 'er', irregular: true },
  { spanish: 'querer', english: 'to want/love', type: 'er', irregular: true },
  { spanish: 'llegar', english: 'to arrive', type: 'ar', irregular: false },
  { spanish: 'pasar', english: 'to pass/happen', type: 'ar', irregular: false },
  { spanish: 'deber', english: 'to owe/must', type: 'er', irregular: false },
  { spanish: 'poner', english: 'to put/place', type: 'er', irregular: true },
  { spanish: 'parecer', english: 'to seem', type: 'er', irregular: true },
  { spanish: 'quedar', english: 'to stay/remain', type: 'ar', irregular: false },
  { spanish: 'creer', english: 'to believe', type: 'er', irregular: false },
  { spanish: 'hablar', english: 'to speak/talk', type: 'ar', irregular: false },
  { spanish: 'llevar', english: 'to carry/wear', type: 'ar', irregular: false },
  { spanish: 'dejar', english: 'to leave/let', type: 'ar', irregular: false },
  { spanish: 'seguir', english: 'to follow/continue', type: 'ir', irregular: true },
  { spanish: 'encontrar', english: 'to find', type: 'ar', irregular: true },
  { spanish: 'llamar', english: 'to call', type: 'ar', irregular: false },
  { spanish: 'venir', english: 'to come', type: 'ir', irregular: true },
  { spanish: 'pensar', english: 'to think', type: 'ar', irregular: true },
  { spanish: 'salir', english: 'to leave/go out', type: 'ir', irregular: true },
  { spanish: 'volver', english: 'to return', type: 'er', irregular: true },
  { spanish: 'tomar', english: 'to take/drink', type: 'ar', irregular: false },
  { spanish: 'conocer', english: 'to know (people)', type: 'er', irregular: true },
  { spanish: 'vivir', english: 'to live', type: 'ir', irregular: false },
  { spanish: 'sentir', english: 'to feel', type: 'ir', irregular: true },
  { spanish: 'tratar', english: 'to try/treat', type: 'ar', irregular: false },
  { spanish: 'mirar', english: 'to look/watch', type: 'ar', irregular: false },
  { spanish: 'contar', english: 'to count/tell', type: 'ar', irregular: true },
  { spanish: 'empezar', english: 'to begin/start', type: 'ar', irregular: true },
  { spanish: 'esperar', english: 'to wait/hope', type: 'ar', irregular: false },
  { spanish: 'buscar', english: 'to search/look for', type: 'ar', irregular: false },
  { spanish: 'existir', english: 'to exist', type: 'ir', irregular: false },
  { spanish: 'entrar', english: 'to enter', type: 'ar', irregular: false },
  { spanish: 'trabajar', english: 'to work', type: 'ar', irregular: false },
  { spanish: 'escribir', english: 'to write', type: 'ir', irregular: false },
  { spanish: 'perder', english: 'to lose', type: 'er', irregular: true },
  { spanish: 'producir', english: 'to produce', type: 'ir', irregular: true },
  { spanish: 'ocurrir', english: 'to occur/happen', type: 'ir', irregular: false },
  { spanish: 'entender', english: 'to understand', type: 'er', irregular: true },
  { spanish: 'pedir', english: 'to ask for/request', type: 'ir', irregular: true },
  { spanish: 'recibir', english: 'to receive', type: 'ir', irregular: false },
  { spanish: 'recordar', english: 'to remember', type: 'ar', irregular: true },
  { spanish: 'terminar', english: 'to finish', type: 'ar', irregular: false },
  { spanish: 'permitir', english: 'to permit/allow', type: 'ir', irregular: false },
  { spanish: 'aparecer', english: 'to appear', type: 'er', irregular: true },
  { spanish: 'conseguir', english: 'to get/achieve', type: 'ir', irregular: true },
  { spanish: 'comenzar', english: 'to begin', type: 'ar', irregular: true },
  { spanish: 'servir', english: 'to serve', type: 'ir', irregular: true },
  { spanish: 'sacar', english: 'to take out', type: 'ar', irregular: false },
  { spanish: 'necesitar', english: 'to need', type: 'ar', irregular: false },
  { spanish: 'mantener', english: 'to maintain', type: 'er', irregular: true },
  { spanish: 'resultar', english: 'to result/turn out', type: 'ar', irregular: false },
  { spanish: 'leer', english: 'to read', type: 'er', irregular: false },
  { spanish: 'caer', english: 'to fall', type: 'er', irregular: true },
  { spanish: 'cambiar', english: 'to change', type: 'ar', irregular: false },
  { spanish: 'presentar', english: 'to present', type: 'ar', irregular: false },
  { spanish: 'crear', english: 'to create', type: 'ar', irregular: false },
  { spanish: 'abrir', english: 'to open', type: 'ir', irregular: false },
  { spanish: 'considerar', english: 'to consider', type: 'ar', irregular: false },
  { spanish: 'oír', english: 'to hear', type: 'ir', irregular: true },
  { spanish: 'acabar', english: 'to finish/end', type: 'ar', irregular: false },
  { spanish: 'convertir', english: 'to convert', type: 'ir', irregular: true },
  { spanish: 'ganar', english: 'to win/earn', type: 'ar', irregular: false },
  { spanish: 'formar', english: 'to form', type: 'ar', irregular: false },
  { spanish: 'traer', english: 'to bring', type: 'er', irregular: true },
  { spanish: 'partir', english: 'to leave/split', type: 'ir', irregular: false },
  { spanish: 'morir', english: 'to die', type: 'ir', irregular: true },
  { spanish: 'aceptar', english: 'to accept', type: 'ar', irregular: false },
  { spanish: 'realizar', english: 'to realize/carry out', type: 'ar', irregular: false },
  { spanish: 'suponer', english: 'to suppose', type: 'er', irregular: true },
  { spanish: 'comprender', english: 'to comprehend', type: 'er', irregular: false },
  { spanish: 'lograr', english: 'to achieve', type: 'ar', irregular: false },
  { spanish: 'explicar', english: 'to explain', type: 'ar', irregular: false },
  { spanish: 'alcanzar', english: 'to reach', type: 'ar', irregular: false },
  { spanish: 'reconocer', english: 'to recognize', type: 'er', irregular: true },
  { spanish: 'cumplir', english: 'to fulfill', type: 'ir', irregular: false },
  { spanish: 'nacer', english: 'to be born', type: 'er', irregular: true },
  { spanish: 'correr', english: 'to run', type: 'er', irregular: false },
  { spanish: 'dirigir', english: 'to direct', type: 'ir', irregular: true },
  { spanish: 'pagar', english: 'to pay', type: 'ar', irregular: false },
  { spanish: 'jugar', english: 'to play', type: 'ar', irregular: true },
  { spanish: 'obtener', english: 'to obtain', type: 'er', irregular: true },
  { spanish: 'desarrollar', english: 'to develop', type: 'ar', irregular: false },
  { spanish: 'tocar', english: 'to touch/play', type: 'ar', irregular: false },
  { spanish: 'comer', english: 'to eat', type: 'er', irregular: false },
  { spanish: 'dormir', english: 'to sleep', type: 'ir', irregular: true },
  { spanish: 'continuar', english: 'to continue', type: 'ar', irregular: false },
  { spanish: 'aprender', english: 'to learn', type: 'er', irregular: false },
  { spanish: 'beber', english: 'to drink', type: 'er', irregular: false },
  { spanish: 'decidir', english: 'to decide', type: 'ir', irregular: false },
  { spanish: 'comprar', english: 'to buy', type: 'ar', irregular: false },
  { spanish: 'vender', english: 'to sell', type: 'er', irregular: false },
  { spanish: 'responder', english: 'to respond', type: 'er', irregular: false }
];

// Full conjugation data for all 100 verbs
export const conjugations = {
  // SER - highly irregular
  'ser': {
    presente: { yo: 'soy', tu: 'eres', el: 'es', nosotros: 'somos', ellos: 'son' },
    preterito: { yo: 'fui', tu: 'fuiste', el: 'fue', nosotros: 'fuimos', ellos: 'fueron' },
    futuro: { yo: 'seré', tu: 'serás', el: 'será', nosotros: 'seremos', ellos: 'serán' },
    imperfecto: { yo: 'era', tu: 'eras', el: 'era', nosotros: 'éramos', ellos: 'eran' }
  },
  // ESTAR - irregular
  'estar': {
    presente: { yo: 'estoy', tu: 'estás', el: 'está', nosotros: 'estamos', ellos: 'están' },
    preterito: { yo: 'estuve', tu: 'estuviste', el: 'estuvo', nosotros: 'estuvimos', ellos: 'estuvieron' },
    futuro: { yo: 'estaré', tu: 'estarás', el: 'estará', nosotros: 'estaremos', ellos: 'estarán' },
    imperfecto: { yo: 'estaba', tu: 'estabas', el: 'estaba', nosotros: 'estábamos', ellos: 'estaban' }
  },
  // TENER - irregular
  'tener': {
    presente: { yo: 'tengo', tu: 'tienes', el: 'tiene', nosotros: 'tenemos', ellos: 'tienen' },
    preterito: { yo: 'tuve', tu: 'tuviste', el: 'tuvo', nosotros: 'tuvimos', ellos: 'tuvieron' },
    futuro: { yo: 'tendré', tu: 'tendrás', el: 'tendrá', nosotros: 'tendremos', ellos: 'tendrán' },
    imperfecto: { yo: 'tenía', tu: 'tenías', el: 'tenía', nosotros: 'teníamos', ellos: 'tenían' }
  },
  // HACER - irregular
  'hacer': {
    presente: { yo: 'hago', tu: 'haces', el: 'hace', nosotros: 'hacemos', ellos: 'hacen' },
    preterito: { yo: 'hice', tu: 'hiciste', el: 'hizo', nosotros: 'hicimos', ellos: 'hicieron' },
    futuro: { yo: 'haré', tu: 'harás', el: 'hará', nosotros: 'haremos', ellos: 'harán' },
    imperfecto: { yo: 'hacía', tu: 'hacías', el: 'hacía', nosotros: 'hacíamos', ellos: 'hacían' }
  },
  // PODER - irregular
  'poder': {
    presente: { yo: 'puedo', tu: 'puedes', el: 'puede', nosotros: 'podemos', ellos: 'pueden' },
    preterito: { yo: 'pude', tu: 'pudiste', el: 'pudo', nosotros: 'pudimos', ellos: 'pudieron' },
    futuro: { yo: 'podré', tu: 'podrás', el: 'podrá', nosotros: 'podremos', ellos: 'podrán' },
    imperfecto: { yo: 'podía', tu: 'podías', el: 'podía', nosotros: 'podíamos', ellos: 'podían' }
  },
  // DECIR - irregular
  'decir': {
    presente: { yo: 'digo', tu: 'dices', el: 'dice', nosotros: 'decimos', ellos: 'dicen' },
    preterito: { yo: 'dije', tu: 'dijiste', el: 'dijo', nosotros: 'dijimos', ellos: 'dijeron' },
    futuro: { yo: 'diré', tu: 'dirás', el: 'dirá', nosotros: 'diremos', ellos: 'dirán' },
    imperfecto: { yo: 'decía', tu: 'decías', el: 'decía', nosotros: 'decíamos', ellos: 'decían' }
  },
  // IR - highly irregular
  'ir': {
    presente: { yo: 'voy', tu: 'vas', el: 'va', nosotros: 'vamos', ellos: 'van' },
    preterito: { yo: 'fui', tu: 'fuiste', el: 'fue', nosotros: 'fuimos', ellos: 'fueron' },
    futuro: { yo: 'iré', tu: 'irás', el: 'irá', nosotros: 'iremos', ellos: 'irán' },
    imperfecto: { yo: 'iba', tu: 'ibas', el: 'iba', nosotros: 'íbamos', ellos: 'iban' }
  },
  // VER - irregular
  'ver': {
    presente: { yo: 'veo', tu: 'ves', el: 've', nosotros: 'vemos', ellos: 'ven' },
    preterito: { yo: 'vi', tu: 'viste', el: 'vio', nosotros: 'vimos', ellos: 'vieron' },
    futuro: { yo: 'veré', tu: 'verás', el: 'verá', nosotros: 'veremos', ellos: 'verán' },
    imperfecto: { yo: 'veía', tu: 'veías', el: 'veía', nosotros: 'veíamos', ellos: 'veían' }
  },
  // DAR - irregular
  'dar': {
    presente: { yo: 'doy', tu: 'das', el: 'da', nosotros: 'damos', ellos: 'dan' },
    preterito: { yo: 'di', tu: 'diste', el: 'dio', nosotros: 'dimos', ellos: 'dieron' },
    futuro: { yo: 'daré', tu: 'darás', el: 'dará', nosotros: 'daremos', ellos: 'darán' },
    imperfecto: { yo: 'daba', tu: 'dabas', el: 'daba', nosotros: 'dábamos', ellos: 'daban' }
  },
  // SABER - irregular
  'saber': {
    presente: { yo: 'sé', tu: 'sabes', el: 'sabe', nosotros: 'sabemos', ellos: 'saben' },
    preterito: { yo: 'supe', tu: 'supiste', el: 'supo', nosotros: 'supimos', ellos: 'supieron' },
    futuro: { yo: 'sabré', tu: 'sabrás', el: 'sabrá', nosotros: 'sabremos', ellos: 'sabrán' },
    imperfecto: { yo: 'sabía', tu: 'sabías', el: 'sabía', nosotros: 'sabíamos', ellos: 'sabían' }
  },
  // QUERER - irregular
  'querer': {
    presente: { yo: 'quiero', tu: 'quieres', el: 'quiere', nosotros: 'queremos', ellos: 'quieren' },
    preterito: { yo: 'quise', tu: 'quisiste', el: 'quiso', nosotros: 'quisimos', ellos: 'quisieron' },
    futuro: { yo: 'querré', tu: 'querrás', el: 'querrá', nosotros: 'querremos', ellos: 'querrán' },
    imperfecto: { yo: 'quería', tu: 'querías', el: 'quería', nosotros: 'queríamos', ellos: 'querían' }
  },
  // LLEGAR - regular -ar
  'llegar': {
    presente: { yo: 'llego', tu: 'llegas', el: 'llega', nosotros: 'llegamos', ellos: 'llegan' },
    preterito: { yo: 'llegué', tu: 'llegaste', el: 'llegó', nosotros: 'llegamos', ellos: 'llegaron' },
    futuro: { yo: 'llegaré', tu: 'llegarás', el: 'llegará', nosotros: 'llegaremos', ellos: 'llegarán' },
    imperfecto: { yo: 'llegaba', tu: 'llegabas', el: 'llegaba', nosotros: 'llegábamos', ellos: 'llegaban' }
  },
  // PASAR - regular -ar
  'pasar': {
    presente: { yo: 'paso', tu: 'pasas', el: 'pasa', nosotros: 'pasamos', ellos: 'pasan' },
    preterito: { yo: 'pasé', tu: 'pasaste', el: 'pasó', nosotros: 'pasamos', ellos: 'pasaron' },
    futuro: { yo: 'pasaré', tu: 'pasarás', el: 'pasará', nosotros: 'pasaremos', ellos: 'pasarán' },
    imperfecto: { yo: 'pasaba', tu: 'pasabas', el: 'pasaba', nosotros: 'pasábamos', ellos: 'pasaban' }
  },
  // DEBER - regular -er
  'deber': {
    presente: { yo: 'debo', tu: 'debes', el: 'debe', nosotros: 'debemos', ellos: 'deben' },
    preterito: { yo: 'debí', tu: 'debiste', el: 'debió', nosotros: 'debimos', ellos: 'debieron' },
    futuro: { yo: 'deberé', tu: 'deberás', el: 'deberá', nosotros: 'deberemos', ellos: 'deberán' },
    imperfecto: { yo: 'debía', tu: 'debías', el: 'debía', nosotros: 'debíamos', ellos: 'debían' }
  },
  // PONER - irregular
  'poner': {
    presente: { yo: 'pongo', tu: 'pones', el: 'pone', nosotros: 'ponemos', ellos: 'ponen' },
    preterito: { yo: 'puse', tu: 'pusiste', el: 'puso', nosotros: 'pusimos', ellos: 'pusieron' },
    futuro: { yo: 'pondré', tu: 'pondrás', el: 'pondrá', nosotros: 'pondremos', ellos: 'pondrán' },
    imperfecto: { yo: 'ponía', tu: 'ponías', el: 'ponía', nosotros: 'poníamos', ellos: 'ponían' }
  },
  // PARECER - irregular (yo form)
  'parecer': {
    presente: { yo: 'parezco', tu: 'pareces', el: 'parece', nosotros: 'parecemos', ellos: 'parecen' },
    preterito: { yo: 'parecí', tu: 'pareciste', el: 'pareció', nosotros: 'parecimos', ellos: 'parecieron' },
    futuro: { yo: 'pareceré', tu: 'parecerás', el: 'parecerá', nosotros: 'pareceremos', ellos: 'parecerán' },
    imperfecto: { yo: 'parecía', tu: 'parecías', el: 'parecía', nosotros: 'parecíamos', ellos: 'parecían' }
  },
  // QUEDAR - regular -ar
  'quedar': {
    presente: { yo: 'quedo', tu: 'quedas', el: 'queda', nosotros: 'quedamos', ellos: 'quedan' },
    preterito: { yo: 'quedé', tu: 'quedaste', el: 'quedó', nosotros: 'quedamos', ellos: 'quedaron' },
    futuro: { yo: 'quedaré', tu: 'quedarás', el: 'quedará', nosotros: 'quedaremos', ellos: 'quedarán' },
    imperfecto: { yo: 'quedaba', tu: 'quedabas', el: 'quedaba', nosotros: 'quedábamos', ellos: 'quedaban' }
  },
  // CREER - regular -er
  'creer': {
    presente: { yo: 'creo', tu: 'crees', el: 'cree', nosotros: 'creemos', ellos: 'creen' },
    preterito: { yo: 'creí', tu: 'creíste', el: 'creyó', nosotros: 'creímos', ellos: 'creyeron' },
    futuro: { yo: 'creeré', tu: 'creerás', el: 'creerá', nosotros: 'creeremos', ellos: 'creerán' },
    imperfecto: { yo: 'creía', tu: 'creías', el: 'creía', nosotros: 'creíamos', ellos: 'creían' }
  },
  // HABLAR - regular -ar (model verb)
  'hablar': {
    presente: { yo: 'hablo', tu: 'hablas', el: 'habla', nosotros: 'hablamos', ellos: 'hablan' },
    preterito: { yo: 'hablé', tu: 'hablaste', el: 'habló', nosotros: 'hablamos', ellos: 'hablaron' },
    futuro: { yo: 'hablaré', tu: 'hablarás', el: 'hablará', nosotros: 'hablaremos', ellos: 'hablarán' },
    imperfecto: { yo: 'hablaba', tu: 'hablabas', el: 'hablaba', nosotros: 'hablábamos', ellos: 'hablaban' }
  },
  // LLEVAR - regular -ar
  'llevar': {
    presente: { yo: 'llevo', tu: 'llevas', el: 'lleva', nosotros: 'llevamos', ellos: 'llevan' },
    preterito: { yo: 'llevé', tu: 'llevaste', el: 'llevó', nosotros: 'llevamos', ellos: 'llevaron' },
    futuro: { yo: 'llevaré', tu: 'llevarás', el: 'llevará', nosotros: 'llevaremos', ellos: 'llevarán' },
    imperfecto: { yo: 'llevaba', tu: 'llevabas', el: 'llevaba', nosotros: 'llevábamos', ellos: 'llevaban' }
  },
  // DEJAR - regular -ar
  'dejar': {
    presente: { yo: 'dejo', tu: 'dejas', el: 'deja', nosotros: 'dejamos', ellos: 'dejan' },
    preterito: { yo: 'dejé', tu: 'dejaste', el: 'dejó', nosotros: 'dejamos', ellos: 'dejaron' },
    futuro: { yo: 'dejaré', tu: 'dejarás', el: 'dejará', nosotros: 'dejaremos', ellos: 'dejarán' },
    imperfecto: { yo: 'dejaba', tu: 'dejabas', el: 'dejaba', nosotros: 'dejábamos', ellos: 'dejaban' }
  },
  // SEGUIR - irregular (stem change e->i)
  'seguir': {
    presente: { yo: 'sigo', tu: 'sigues', el: 'sigue', nosotros: 'seguimos', ellos: 'siguen' },
    preterito: { yo: 'seguí', tu: 'seguiste', el: 'siguió', nosotros: 'seguimos', ellos: 'siguieron' },
    futuro: { yo: 'seguiré', tu: 'seguirás', el: 'seguirá', nosotros: 'seguiremos', ellos: 'seguirán' },
    imperfecto: { yo: 'seguía', tu: 'seguías', el: 'seguía', nosotros: 'seguíamos', ellos: 'seguían' }
  },
  // ENCONTRAR - irregular (stem change o->ue)
  'encontrar': {
    presente: { yo: 'encuentro', tu: 'encuentras', el: 'encuentra', nosotros: 'encontramos', ellos: 'encuentran' },
    preterito: { yo: 'encontré', tu: 'encontraste', el: 'encontró', nosotros: 'encontramos', ellos: 'encontraron' },
    futuro: { yo: 'encontraré', tu: 'encontrarás', el: 'encontrará', nosotros: 'encontraremos', ellos: 'encontrarán' },
    imperfecto: { yo: 'encontraba', tu: 'encontrabas', el: 'encontraba', nosotros: 'encontrábamos', ellos: 'encontraban' }
  },
  // LLAMAR - regular -ar
  'llamar': {
    presente: { yo: 'llamo', tu: 'llamas', el: 'llama', nosotros: 'llamamos', ellos: 'llaman' },
    preterito: { yo: 'llamé', tu: 'llamaste', el: 'llamó', nosotros: 'llamamos', ellos: 'llamaron' },
    futuro: { yo: 'llamaré', tu: 'llamarás', el: 'llamará', nosotros: 'llamaremos', ellos: 'llamarán' },
    imperfecto: { yo: 'llamaba', tu: 'llamabas', el: 'llamaba', nosotros: 'llamábamos', ellos: 'llamaban' }
  },
  // VENIR - irregular
  'venir': {
    presente: { yo: 'vengo', tu: 'vienes', el: 'viene', nosotros: 'venimos', ellos: 'vienen' },
    preterito: { yo: 'vine', tu: 'viniste', el: 'vino', nosotros: 'vinimos', ellos: 'vinieron' },
    futuro: { yo: 'vendré', tu: 'vendrás', el: 'vendrá', nosotros: 'vendremos', ellos: 'vendrán' },
    imperfecto: { yo: 'venía', tu: 'venías', el: 'venía', nosotros: 'veníamos', ellos: 'venían' }
  },
  // PENSAR - irregular (stem change e->ie)
  'pensar': {
    presente: { yo: 'pienso', tu: 'piensas', el: 'piensa', nosotros: 'pensamos', ellos: 'piensan' },
    preterito: { yo: 'pensé', tu: 'pensaste', el: 'pensó', nosotros: 'pensamos', ellos: 'pensaron' },
    futuro: { yo: 'pensaré', tu: 'pensarás', el: 'pensará', nosotros: 'pensaremos', ellos: 'pensarán' },
    imperfecto: { yo: 'pensaba', tu: 'pensabas', el: 'pensaba', nosotros: 'pensábamos', ellos: 'pensaban' }
  },
  // SALIR - irregular
  'salir': {
    presente: { yo: 'salgo', tu: 'sales', el: 'sale', nosotros: 'salimos', ellos: 'salen' },
    preterito: { yo: 'salí', tu: 'saliste', el: 'salió', nosotros: 'salimos', ellos: 'salieron' },
    futuro: { yo: 'saldré', tu: 'saldrás', el: 'saldrá', nosotros: 'saldremos', ellos: 'saldrán' },
    imperfecto: { yo: 'salía', tu: 'salías', el: 'salía', nosotros: 'salíamos', ellos: 'salían' }
  },
  // VOLVER - irregular (stem change o->ue)
  'volver': {
    presente: { yo: 'vuelvo', tu: 'vuelves', el: 'vuelve', nosotros: 'volvemos', ellos: 'vuelven' },
    preterito: { yo: 'volví', tu: 'volviste', el: 'volvió', nosotros: 'volvimos', ellos: 'volvieron' },
    futuro: { yo: 'volveré', tu: 'volverás', el: 'volverá', nosotros: 'volveremos', ellos: 'volverán' },
    imperfecto: { yo: 'volvía', tu: 'volvías', el: 'volvía', nosotros: 'volvíamos', ellos: 'volvían' }
  },
  // TOMAR - regular -ar
  'tomar': {
    presente: { yo: 'tomo', tu: 'tomas', el: 'toma', nosotros: 'tomamos', ellos: 'toman' },
    preterito: { yo: 'tomé', tu: 'tomaste', el: 'tomó', nosotros: 'tomamos', ellos: 'tomaron' },
    futuro: { yo: 'tomaré', tu: 'tomarás', el: 'tomará', nosotros: 'tomaremos', ellos: 'tomarán' },
    imperfecto: { yo: 'tomaba', tu: 'tomabas', el: 'tomaba', nosotros: 'tomábamos', ellos: 'tomaban' }
  },
  // CONOCER - irregular (yo form)
  'conocer': {
    presente: { yo: 'conozco', tu: 'conoces', el: 'conoce', nosotros: 'conocemos', ellos: 'conocen' },
    preterito: { yo: 'conocí', tu: 'conociste', el: 'conoció', nosotros: 'conocimos', ellos: 'conocieron' },
    futuro: { yo: 'conoceré', tu: 'conocerás', el: 'conocerá', nosotros: 'conoceremos', ellos: 'conocerán' },
    imperfecto: { yo: 'conocía', tu: 'conocías', el: 'conocía', nosotros: 'conocíamos', ellos: 'conocían' }
  },
  // VIVIR - regular -ir (model verb)
  'vivir': {
    presente: { yo: 'vivo', tu: 'vives', el: 'vive', nosotros: 'vivimos', ellos: 'viven' },
    preterito: { yo: 'viví', tu: 'viviste', el: 'vivió', nosotros: 'vivimos', ellos: 'vivieron' },
    futuro: { yo: 'viviré', tu: 'vivirás', el: 'vivirá', nosotros: 'viviremos', ellos: 'vivirán' },
    imperfecto: { yo: 'vivía', tu: 'vivías', el: 'vivía', nosotros: 'vivíamos', ellos: 'vivían' }
  },
  // SENTIR - irregular (stem change e->ie, e->i)
  'sentir': {
    presente: { yo: 'siento', tu: 'sientes', el: 'siente', nosotros: 'sentimos', ellos: 'sienten' },
    preterito: { yo: 'sentí', tu: 'sentiste', el: 'sintió', nosotros: 'sentimos', ellos: 'sintieron' },
    futuro: { yo: 'sentiré', tu: 'sentirás', el: 'sentirá', nosotros: 'sentiremos', ellos: 'sentirán' },
    imperfecto: { yo: 'sentía', tu: 'sentías', el: 'sentía', nosotros: 'sentíamos', ellos: 'sentían' }
  },
  // TRATAR - regular -ar
  'tratar': {
    presente: { yo: 'trato', tu: 'tratas', el: 'trata', nosotros: 'tratamos', ellos: 'tratan' },
    preterito: { yo: 'traté', tu: 'trataste', el: 'trató', nosotros: 'tratamos', ellos: 'trataron' },
    futuro: { yo: 'trataré', tu: 'tratarás', el: 'tratará', nosotros: 'trataremos', ellos: 'tratarán' },
    imperfecto: { yo: 'trataba', tu: 'tratabas', el: 'trataba', nosotros: 'tratábamos', ellos: 'trataban' }
  },
  // MIRAR - regular -ar
  'mirar': {
    presente: { yo: 'miro', tu: 'miras', el: 'mira', nosotros: 'miramos', ellos: 'miran' },
    preterito: { yo: 'miré', tu: 'miraste', el: 'miró', nosotros: 'miramos', ellos: 'miraron' },
    futuro: { yo: 'miraré', tu: 'mirarás', el: 'mirará', nosotros: 'miraremos', ellos: 'mirarán' },
    imperfecto: { yo: 'miraba', tu: 'mirabas', el: 'miraba', nosotros: 'mirábamos', ellos: 'miraban' }
  },
  // CONTAR - irregular (stem change o->ue)
  'contar': {
    presente: { yo: 'cuento', tu: 'cuentas', el: 'cuenta', nosotros: 'contamos', ellos: 'cuentan' },
    preterito: { yo: 'conté', tu: 'contaste', el: 'contó', nosotros: 'contamos', ellos: 'contaron' },
    futuro: { yo: 'contaré', tu: 'contarás', el: 'contará', nosotros: 'contaremos', ellos: 'contarán' },
    imperfecto: { yo: 'contaba', tu: 'contabas', el: 'contaba', nosotros: 'contábamos', ellos: 'contaban' }
  },
  // EMPEZAR - irregular (stem change e->ie, spelling z->c)
  'empezar': {
    presente: { yo: 'empiezo', tu: 'empiezas', el: 'empieza', nosotros: 'empezamos', ellos: 'empiezan' },
    preterito: { yo: 'empecé', tu: 'empezaste', el: 'empezó', nosotros: 'empezamos', ellos: 'empezaron' },
    futuro: { yo: 'empezaré', tu: 'empezarás', el: 'empezará', nosotros: 'empezaremos', ellos: 'empezarán' },
    imperfecto: { yo: 'empezaba', tu: 'empezabas', el: 'empezaba', nosotros: 'empezábamos', ellos: 'empezaban' }
  },
  // ESPERAR - regular -ar
  'esperar': {
    presente: { yo: 'espero', tu: 'esperas', el: 'espera', nosotros: 'esperamos', ellos: 'esperan' },
    preterito: { yo: 'esperé', tu: 'esperaste', el: 'esperó', nosotros: 'esperamos', ellos: 'esperaron' },
    futuro: { yo: 'esperaré', tu: 'esperarás', el: 'esperará', nosotros: 'esperaremos', ellos: 'esperarán' },
    imperfecto: { yo: 'esperaba', tu: 'esperabas', el: 'esperaba', nosotros: 'esperábamos', ellos: 'esperaban' }
  },
  // BUSCAR - regular -ar (spelling c->qu)
  'buscar': {
    presente: { yo: 'busco', tu: 'buscas', el: 'busca', nosotros: 'buscamos', ellos: 'buscan' },
    preterito: { yo: 'busqué', tu: 'buscaste', el: 'buscó', nosotros: 'buscamos', ellos: 'buscaron' },
    futuro: { yo: 'buscaré', tu: 'buscarás', el: 'buscará', nosotros: 'buscaremos', ellos: 'buscarán' },
    imperfecto: { yo: 'buscaba', tu: 'buscabas', el: 'buscaba', nosotros: 'buscábamos', ellos: 'buscaban' }
  },
  // EXISTIR - regular -ir
  'existir': {
    presente: { yo: 'existo', tu: 'existes', el: 'existe', nosotros: 'existimos', ellos: 'existen' },
    preterito: { yo: 'existí', tu: 'exististe', el: 'existió', nosotros: 'existimos', ellos: 'existieron' },
    futuro: { yo: 'existiré', tu: 'existirás', el: 'existirá', nosotros: 'existiremos', ellos: 'existirán' },
    imperfecto: { yo: 'existía', tu: 'existías', el: 'existía', nosotros: 'existíamos', ellos: 'existían' }
  },
  // ENTRAR - regular -ar
  'entrar': {
    presente: { yo: 'entro', tu: 'entras', el: 'entra', nosotros: 'entramos', ellos: 'entran' },
    preterito: { yo: 'entré', tu: 'entraste', el: 'entró', nosotros: 'entramos', ellos: 'entraron' },
    futuro: { yo: 'entraré', tu: 'entrarás', el: 'entrará', nosotros: 'entraremos', ellos: 'entrarán' },
    imperfecto: { yo: 'entraba', tu: 'entrabas', el: 'entraba', nosotros: 'entrábamos', ellos: 'entraban' }
  },
  // TRABAJAR - regular -ar
  'trabajar': {
    presente: { yo: 'trabajo', tu: 'trabajas', el: 'trabaja', nosotros: 'trabajamos', ellos: 'trabajan' },
    preterito: { yo: 'trabajé', tu: 'trabajaste', el: 'trabajó', nosotros: 'trabajamos', ellos: 'trabajaron' },
    futuro: { yo: 'trabajaré', tu: 'trabajarás', el: 'trabajará', nosotros: 'trabajaremos', ellos: 'trabajarán' },
    imperfecto: { yo: 'trabajaba', tu: 'trabajabas', el: 'trabajaba', nosotros: 'trabajábamos', ellos: 'trabajaban' }
  },
  // ESCRIBIR - regular -ir
  'escribir': {
    presente: { yo: 'escribo', tu: 'escribes', el: 'escribe', nosotros: 'escribimos', ellos: 'escriben' },
    preterito: { yo: 'escribí', tu: 'escribiste', el: 'escribió', nosotros: 'escribimos', ellos: 'escribieron' },
    futuro: { yo: 'escribiré', tu: 'escribirás', el: 'escribirá', nosotros: 'escribiremos', ellos: 'escribirán' },
    imperfecto: { yo: 'escribía', tu: 'escribías', el: 'escribía', nosotros: 'escribíamos', ellos: 'escribían' }
  },
  // PERDER - irregular (stem change e->ie)
  'perder': {
    presente: { yo: 'pierdo', tu: 'pierdes', el: 'pierde', nosotros: 'perdemos', ellos: 'pierden' },
    preterito: { yo: 'perdí', tu: 'perdiste', el: 'perdió', nosotros: 'perdimos', ellos: 'perdieron' },
    futuro: { yo: 'perderé', tu: 'perderás', el: 'perderá', nosotros: 'perderemos', ellos: 'perderán' },
    imperfecto: { yo: 'perdía', tu: 'perdías', el: 'perdía', nosotros: 'perdíamos', ellos: 'perdían' }
  },
  // PRODUCIR - irregular
  'producir': {
    presente: { yo: 'produzco', tu: 'produces', el: 'produce', nosotros: 'producimos', ellos: 'producen' },
    preterito: { yo: 'produje', tu: 'produjiste', el: 'produjo', nosotros: 'produjimos', ellos: 'produjeron' },
    futuro: { yo: 'produciré', tu: 'producirás', el: 'producirá', nosotros: 'produciremos', ellos: 'producirán' },
    imperfecto: { yo: 'producía', tu: 'producías', el: 'producía', nosotros: 'producíamos', ellos: 'producían' }
  },
  // OCURRIR - regular -ir
  'ocurrir': {
    presente: { yo: 'ocurro', tu: 'ocurres', el: 'ocurre', nosotros: 'ocurrimos', ellos: 'ocurren' },
    preterito: { yo: 'ocurrí', tu: 'ocurriste', el: 'ocurrió', nosotros: 'ocurrimos', ellos: 'ocurrieron' },
    futuro: { yo: 'ocurriré', tu: 'ocurrirás', el: 'ocurrirá', nosotros: 'ocurriremos', ellos: 'ocurrirán' },
    imperfecto: { yo: 'ocurría', tu: 'ocurrías', el: 'ocurría', nosotros: 'ocurríamos', ellos: 'ocurrían' }
  },
  // ENTENDER - irregular (stem change e->ie)
  'entender': {
    presente: { yo: 'entiendo', tu: 'entiendes', el: 'entiende', nosotros: 'entendemos', ellos: 'entienden' },
    preterito: { yo: 'entendí', tu: 'entendiste', el: 'entendió', nosotros: 'entendimos', ellos: 'entendieron' },
    futuro: { yo: 'entenderé', tu: 'entenderás', el: 'entenderá', nosotros: 'entenderemos', ellos: 'entenderán' },
    imperfecto: { yo: 'entendía', tu: 'entendías', el: 'entendía', nosotros: 'entendíamos', ellos: 'entendían' }
  },
  // PEDIR - irregular (stem change e->i)
  'pedir': {
    presente: { yo: 'pido', tu: 'pides', el: 'pide', nosotros: 'pedimos', ellos: 'piden' },
    preterito: { yo: 'pedí', tu: 'pediste', el: 'pidió', nosotros: 'pedimos', ellos: 'pidieron' },
    futuro: { yo: 'pediré', tu: 'pedirás', el: 'pedirá', nosotros: 'pediremos', ellos: 'pedirán' },
    imperfecto: { yo: 'pedía', tu: 'pedías', el: 'pedía', nosotros: 'pedíamos', ellos: 'pedían' }
  },
  // RECIBIR - regular -ir
  'recibir': {
    presente: { yo: 'recibo', tu: 'recibes', el: 'recibe', nosotros: 'recibimos', ellos: 'reciben' },
    preterito: { yo: 'recibí', tu: 'recibiste', el: 'recibió', nosotros: 'recibimos', ellos: 'recibieron' },
    futuro: { yo: 'recibiré', tu: 'recibirás', el: 'recibirá', nosotros: 'recibiremos', ellos: 'recibirán' },
    imperfecto: { yo: 'recibía', tu: 'recibías', el: 'recibía', nosotros: 'recibíamos', ellos: 'recibían' }
  },
  // RECORDAR - irregular (stem change o->ue)
  'recordar': {
    presente: { yo: 'recuerdo', tu: 'recuerdas', el: 'recuerda', nosotros: 'recordamos', ellos: 'recuerdan' },
    preterito: { yo: 'recordé', tu: 'recordaste', el: 'recordó', nosotros: 'recordamos', ellos: 'recordaron' },
    futuro: { yo: 'recordaré', tu: 'recordarás', el: 'recordará', nosotros: 'recordaremos', ellos: 'recordarán' },
    imperfecto: { yo: 'recordaba', tu: 'recordabas', el: 'recordaba', nosotros: 'recordábamos', ellos: 'recordaban' }
  },
  // TERMINAR - regular -ar
  'terminar': {
    presente: { yo: 'termino', tu: 'terminas', el: 'termina', nosotros: 'terminamos', ellos: 'terminan' },
    preterito: { yo: 'terminé', tu: 'terminaste', el: 'terminó', nosotros: 'terminamos', ellos: 'terminaron' },
    futuro: { yo: 'terminaré', tu: 'terminarás', el: 'terminará', nosotros: 'terminaremos', ellos: 'terminarán' },
    imperfecto: { yo: 'terminaba', tu: 'terminabas', el: 'terminaba', nosotros: 'terminábamos', ellos: 'terminaban' }
  },
  // PERMITIR - regular -ir
  'permitir': {
    presente: { yo: 'permito', tu: 'permites', el: 'permite', nosotros: 'permitimos', ellos: 'permiten' },
    preterito: { yo: 'permití', tu: 'permitiste', el: 'permitió', nosotros: 'permitimos', ellos: 'permitieron' },
    futuro: { yo: 'permitiré', tu: 'permitirás', el: 'permitirá', nosotros: 'permitiremos', ellos: 'permitirán' },
    imperfecto: { yo: 'permitía', tu: 'permitías', el: 'permitía', nosotros: 'permitíamos', ellos: 'permitían' }
  },
  // APARECER - irregular (yo form)
  'aparecer': {
    presente: { yo: 'aparezco', tu: 'apareces', el: 'aparece', nosotros: 'aparecemos', ellos: 'aparecen' },
    preterito: { yo: 'aparecí', tu: 'apareciste', el: 'apareció', nosotros: 'aparecimos', ellos: 'aparecieron' },
    futuro: { yo: 'apareceré', tu: 'aparecerás', el: 'aparecerá', nosotros: 'apareceremos', ellos: 'aparecerán' },
    imperfecto: { yo: 'aparecía', tu: 'aparecías', el: 'aparecía', nosotros: 'aparecíamos', ellos: 'aparecían' }
  },
  // CONSEGUIR - irregular (stem change e->i)
  'conseguir': {
    presente: { yo: 'consigo', tu: 'consigues', el: 'consigue', nosotros: 'conseguimos', ellos: 'consiguen' },
    preterito: { yo: 'conseguí', tu: 'conseguiste', el: 'consiguió', nosotros: 'conseguimos', ellos: 'consiguieron' },
    futuro: { yo: 'conseguiré', tu: 'conseguirás', el: 'conseguirá', nosotros: 'conseguiremos', ellos: 'conseguirán' },
    imperfecto: { yo: 'conseguía', tu: 'conseguías', el: 'conseguía', nosotros: 'conseguíamos', ellos: 'conseguían' }
  },
  // COMENZAR - irregular (stem change e->ie, spelling z->c)
  'comenzar': {
    presente: { yo: 'comienzo', tu: 'comienzas', el: 'comienza', nosotros: 'comenzamos', ellos: 'comienzan' },
    preterito: { yo: 'comencé', tu: 'comenzaste', el: 'comenzó', nosotros: 'comenzamos', ellos: 'comenzaron' },
    futuro: { yo: 'comenzaré', tu: 'comenzarás', el: 'comenzará', nosotros: 'comenzaremos', ellos: 'comenzarán' },
    imperfecto: { yo: 'comenzaba', tu: 'comenzabas', el: 'comenzaba', nosotros: 'comenzábamos', ellos: 'comenzaban' }
  },
  // SERVIR - irregular (stem change e->i)
  'servir': {
    presente: { yo: 'sirvo', tu: 'sirves', el: 'sirve', nosotros: 'servimos', ellos: 'sirven' },
    preterito: { yo: 'serví', tu: 'serviste', el: 'sirvió', nosotros: 'servimos', ellos: 'sirvieron' },
    futuro: { yo: 'serviré', tu: 'servirás', el: 'servirá', nosotros: 'serviremos', ellos: 'servirán' },
    imperfecto: { yo: 'servía', tu: 'servías', el: 'servía', nosotros: 'servíamos', ellos: 'servían' }
  },
  // SACAR - regular -ar (spelling c->qu)
  'sacar': {
    presente: { yo: 'saco', tu: 'sacas', el: 'saca', nosotros: 'sacamos', ellos: 'sacan' },
    preterito: { yo: 'saqué', tu: 'sacaste', el: 'sacó', nosotros: 'sacamos', ellos: 'sacaron' },
    futuro: { yo: 'sacaré', tu: 'sacarás', el: 'sacará', nosotros: 'sacaremos', ellos: 'sacarán' },
    imperfecto: { yo: 'sacaba', tu: 'sacabas', el: 'sacaba', nosotros: 'sacábamos', ellos: 'sacaban' }
  },
  // NECESITAR - regular -ar
  'necesitar': {
    presente: { yo: 'necesito', tu: 'necesitas', el: 'necesita', nosotros: 'necesitamos', ellos: 'necesitan' },
    preterito: { yo: 'necesité', tu: 'necesitaste', el: 'necesitó', nosotros: 'necesitamos', ellos: 'necesitaron' },
    futuro: { yo: 'necesitaré', tu: 'necesitarás', el: 'necesitará', nosotros: 'necesitaremos', ellos: 'necesitarán' },
    imperfecto: { yo: 'necesitaba', tu: 'necesitabas', el: 'necesitaba', nosotros: 'necesitábamos', ellos: 'necesitaban' }
  },
  // MANTENER - irregular (like tener)
  'mantener': {
    presente: { yo: 'mantengo', tu: 'mantienes', el: 'mantiene', nosotros: 'mantenemos', ellos: 'mantienen' },
    preterito: { yo: 'mantuve', tu: 'mantuviste', el: 'mantuvo', nosotros: 'mantuvimos', ellos: 'mantuvieron' },
    futuro: { yo: 'mantendré', tu: 'mantendrás', el: 'mantendrá', nosotros: 'mantendremos', ellos: 'mantendrán' },
    imperfecto: { yo: 'mantenía', tu: 'mantenías', el: 'mantenía', nosotros: 'manteníamos', ellos: 'mantenían' }
  },
  // RESULTAR - regular -ar
  'resultar': {
    presente: { yo: 'resulto', tu: 'resultas', el: 'resulta', nosotros: 'resultamos', ellos: 'resultan' },
    preterito: { yo: 'resulté', tu: 'resultaste', el: 'resultó', nosotros: 'resultamos', ellos: 'resultaron' },
    futuro: { yo: 'resultaré', tu: 'resultarás', el: 'resultará', nosotros: 'resultaremos', ellos: 'resultarán' },
    imperfecto: { yo: 'resultaba', tu: 'resultabas', el: 'resultaba', nosotros: 'resultábamos', ellos: 'resultaban' }
  },
  // LEER - regular -er (spelling change)
  'leer': {
    presente: { yo: 'leo', tu: 'lees', el: 'lee', nosotros: 'leemos', ellos: 'leen' },
    preterito: { yo: 'leí', tu: 'leíste', el: 'leyó', nosotros: 'leímos', ellos: 'leyeron' },
    futuro: { yo: 'leeré', tu: 'leerás', el: 'leerá', nosotros: 'leeremos', ellos: 'leerán' },
    imperfecto: { yo: 'leía', tu: 'leías', el: 'leía', nosotros: 'leíamos', ellos: 'leían' }
  },
  // CAER - irregular
  'caer': {
    presente: { yo: 'caigo', tu: 'caes', el: 'cae', nosotros: 'caemos', ellos: 'caen' },
    preterito: { yo: 'caí', tu: 'caíste', el: 'cayó', nosotros: 'caímos', ellos: 'cayeron' },
    futuro: { yo: 'caeré', tu: 'caerás', el: 'caerá', nosotros: 'caeremos', ellos: 'caerán' },
    imperfecto: { yo: 'caía', tu: 'caías', el: 'caía', nosotros: 'caíamos', ellos: 'caían' }
  },
  // CAMBIAR - regular -ar
  'cambiar': {
    presente: { yo: 'cambio', tu: 'cambias', el: 'cambia', nosotros: 'cambiamos', ellos: 'cambian' },
    preterito: { yo: 'cambié', tu: 'cambiaste', el: 'cambió', nosotros: 'cambiamos', ellos: 'cambiaron' },
    futuro: { yo: 'cambiaré', tu: 'cambiarás', el: 'cambiará', nosotros: 'cambiaremos', ellos: 'cambiarán' },
    imperfecto: { yo: 'cambiaba', tu: 'cambiabas', el: 'cambiaba', nosotros: 'cambiábamos', ellos: 'cambiaban' }
  },
  // PRESENTAR - regular -ar
  'presentar': {
    presente: { yo: 'presento', tu: 'presentas', el: 'presenta', nosotros: 'presentamos', ellos: 'presentan' },
    preterito: { yo: 'presenté', tu: 'presentaste', el: 'presentó', nosotros: 'presentamos', ellos: 'presentaron' },
    futuro: { yo: 'presentaré', tu: 'presentarás', el: 'presentará', nosotros: 'presentaremos', ellos: 'presentarán' },
    imperfecto: { yo: 'presentaba', tu: 'presentabas', el: 'presentaba', nosotros: 'presentábamos', ellos: 'presentaban' }
  },
  // CREAR - regular -ar
  'crear': {
    presente: { yo: 'creo', tu: 'creas', el: 'crea', nosotros: 'creamos', ellos: 'crean' },
    preterito: { yo: 'creé', tu: 'creaste', el: 'creó', nosotros: 'creamos', ellos: 'crearon' },
    futuro: { yo: 'crearé', tu: 'crearás', el: 'creará', nosotros: 'crearemos', ellos: 'crearán' },
    imperfecto: { yo: 'creaba', tu: 'creabas', el: 'creaba', nosotros: 'creábamos', ellos: 'creaban' }
  },
  // ABRIR - regular -ir
  'abrir': {
    presente: { yo: 'abro', tu: 'abres', el: 'abre', nosotros: 'abrimos', ellos: 'abren' },
    preterito: { yo: 'abrí', tu: 'abriste', el: 'abrió', nosotros: 'abrimos', ellos: 'abrieron' },
    futuro: { yo: 'abriré', tu: 'abrirás', el: 'abrirá', nosotros: 'abriremos', ellos: 'abrirán' },
    imperfecto: { yo: 'abría', tu: 'abrías', el: 'abría', nosotros: 'abríamos', ellos: 'abrían' }
  },
  // CONSIDERAR - regular -ar
  'considerar': {
    presente: { yo: 'considero', tu: 'consideras', el: 'considera', nosotros: 'consideramos', ellos: 'consideran' },
    preterito: { yo: 'consideré', tu: 'consideraste', el: 'consideró', nosotros: 'consideramos', ellos: 'consideraron' },
    futuro: { yo: 'consideraré', tu: 'considerarás', el: 'considerará', nosotros: 'consideraremos', ellos: 'considerarán' },
    imperfecto: { yo: 'consideraba', tu: 'considerabas', el: 'consideraba', nosotros: 'considerábamos', ellos: 'consideraban' }
  },
  // OÍR - irregular
  'oír': {
    presente: { yo: 'oigo', tu: 'oyes', el: 'oye', nosotros: 'oímos', ellos: 'oyen' },
    preterito: { yo: 'oí', tu: 'oíste', el: 'oyó', nosotros: 'oímos', ellos: 'oyeron' },
    futuro: { yo: 'oiré', tu: 'oirás', el: 'oirá', nosotros: 'oiremos', ellos: 'oirán' },
    imperfecto: { yo: 'oía', tu: 'oías', el: 'oía', nosotros: 'oíamos', ellos: 'oían' }
  },
  // ACABAR - regular -ar
  'acabar': {
    presente: { yo: 'acabo', tu: 'acabas', el: 'acaba', nosotros: 'acabamos', ellos: 'acaban' },
    preterito: { yo: 'acabé', tu: 'acabaste', el: 'acabó', nosotros: 'acabamos', ellos: 'acabaron' },
    futuro: { yo: 'acabaré', tu: 'acabarás', el: 'acabará', nosotros: 'acabaremos', ellos: 'acabarán' },
    imperfecto: { yo: 'acababa', tu: 'acababas', el: 'acababa', nosotros: 'acabábamos', ellos: 'acababan' }
  },
  // CONVERTIR - irregular (stem change e->ie, e->i)
  'convertir': {
    presente: { yo: 'convierto', tu: 'conviertes', el: 'convierte', nosotros: 'convertimos', ellos: 'convierten' },
    preterito: { yo: 'convertí', tu: 'convertiste', el: 'convirtió', nosotros: 'convertimos', ellos: 'convirtieron' },
    futuro: { yo: 'convertiré', tu: 'convertirás', el: 'convertirá', nosotros: 'convertiremos', ellos: 'convertirán' },
    imperfecto: { yo: 'convertía', tu: 'convertías', el: 'convertía', nosotros: 'convertíamos', ellos: 'convertían' }
  },
  // GANAR - regular -ar
  'ganar': {
    presente: { yo: 'gano', tu: 'ganas', el: 'gana', nosotros: 'ganamos', ellos: 'ganan' },
    preterito: { yo: 'gané', tu: 'ganaste', el: 'ganó', nosotros: 'ganamos', ellos: 'ganaron' },
    futuro: { yo: 'ganaré', tu: 'ganarás', el: 'ganará', nosotros: 'ganaremos', ellos: 'ganarán' },
    imperfecto: { yo: 'ganaba', tu: 'ganabas', el: 'ganaba', nosotros: 'ganábamos', ellos: 'ganaban' }
  },
  // FORMAR - regular -ar
  'formar': {
    presente: { yo: 'formo', tu: 'formas', el: 'forma', nosotros: 'formamos', ellos: 'forman' },
    preterito: { yo: 'formé', tu: 'formaste', el: 'formó', nosotros: 'formamos', ellos: 'formaron' },
    futuro: { yo: 'formaré', tu: 'formarás', el: 'formará', nosotros: 'formaremos', ellos: 'formarán' },
    imperfecto: { yo: 'formaba', tu: 'formabas', el: 'formaba', nosotros: 'formábamos', ellos: 'formaban' }
  },
  // TRAER - irregular
  'traer': {
    presente: { yo: 'traigo', tu: 'traes', el: 'trae', nosotros: 'traemos', ellos: 'traen' },
    preterito: { yo: 'traje', tu: 'trajiste', el: 'trajo', nosotros: 'trajimos', ellos: 'trajeron' },
    futuro: { yo: 'traeré', tu: 'traerás', el: 'traerá', nosotros: 'traeremos', ellos: 'traerán' },
    imperfecto: { yo: 'traía', tu: 'traías', el: 'traía', nosotros: 'traíamos', ellos: 'traían' }
  },
  // PARTIR - regular -ir
  'partir': {
    presente: { yo: 'parto', tu: 'partes', el: 'parte', nosotros: 'partimos', ellos: 'parten' },
    preterito: { yo: 'partí', tu: 'partiste', el: 'partió', nosotros: 'partimos', ellos: 'partieron' },
    futuro: { yo: 'partiré', tu: 'partirás', el: 'partirá', nosotros: 'partiremos', ellos: 'partirán' },
    imperfecto: { yo: 'partía', tu: 'partías', el: 'partía', nosotros: 'partíamos', ellos: 'partían' }
  },
  // MORIR - irregular (stem change o->ue, o->u)
  'morir': {
    presente: { yo: 'muero', tu: 'mueres', el: 'muere', nosotros: 'morimos', ellos: 'mueren' },
    preterito: { yo: 'morí', tu: 'moriste', el: 'murió', nosotros: 'morimos', ellos: 'murieron' },
    futuro: { yo: 'moriré', tu: 'morirás', el: 'morirá', nosotros: 'moriremos', ellos: 'morirán' },
    imperfecto: { yo: 'moría', tu: 'morías', el: 'moría', nosotros: 'moríamos', ellos: 'morían' }
  },
  // ACEPTAR - regular -ar
  'aceptar': {
    presente: { yo: 'acepto', tu: 'aceptas', el: 'acepta', nosotros: 'aceptamos', ellos: 'aceptan' },
    preterito: { yo: 'acepté', tu: 'aceptaste', el: 'aceptó', nosotros: 'aceptamos', ellos: 'aceptaron' },
    futuro: { yo: 'aceptaré', tu: 'aceptarás', el: 'aceptará', nosotros: 'aceptaremos', ellos: 'aceptarán' },
    imperfecto: { yo: 'aceptaba', tu: 'aceptabas', el: 'aceptaba', nosotros: 'aceptábamos', ellos: 'aceptaban' }
  },
  // REALIZAR - regular -ar (spelling z->c)
  'realizar': {
    presente: { yo: 'realizo', tu: 'realizas', el: 'realiza', nosotros: 'realizamos', ellos: 'realizan' },
    preterito: { yo: 'realicé', tu: 'realizaste', el: 'realizó', nosotros: 'realizamos', ellos: 'realizaron' },
    futuro: { yo: 'realizaré', tu: 'realizarás', el: 'realizará', nosotros: 'realizaremos', ellos: 'realizarán' },
    imperfecto: { yo: 'realizaba', tu: 'realizabas', el: 'realizaba', nosotros: 'realizábamos', ellos: 'realizaban' }
  },
  // SUPONER - irregular (like poner)
  'suponer': {
    presente: { yo: 'supongo', tu: 'supones', el: 'supone', nosotros: 'suponemos', ellos: 'suponen' },
    preterito: { yo: 'supuse', tu: 'supusiste', el: 'supuso', nosotros: 'supusimos', ellos: 'supusieron' },
    futuro: { yo: 'supondré', tu: 'supondrás', el: 'supondrá', nosotros: 'supondremos', ellos: 'supondrán' },
    imperfecto: { yo: 'suponía', tu: 'suponías', el: 'suponía', nosotros: 'suponíamos', ellos: 'suponían' }
  },
  // COMPRENDER - regular -er
  'comprender': {
    presente: { yo: 'comprendo', tu: 'comprendes', el: 'comprende', nosotros: 'comprendemos', ellos: 'comprenden' },
    preterito: { yo: 'comprendí', tu: 'comprendiste', el: 'comprendió', nosotros: 'comprendimos', ellos: 'comprendieron' },
    futuro: { yo: 'comprenderé', tu: 'comprenderás', el: 'comprenderá', nosotros: 'comprenderemos', ellos: 'comprenderán' },
    imperfecto: { yo: 'comprendía', tu: 'comprendías', el: 'comprendía', nosotros: 'comprendíamos', ellos: 'comprendían' }
  },
  // LOGRAR - regular -ar
  'lograr': {
    presente: { yo: 'logro', tu: 'logras', el: 'logra', nosotros: 'logramos', ellos: 'logran' },
    preterito: { yo: 'logré', tu: 'lograste', el: 'logró', nosotros: 'logramos', ellos: 'lograron' },
    futuro: { yo: 'lograré', tu: 'lograrás', el: 'logrará', nosotros: 'lograremos', ellos: 'lograrán' },
    imperfecto: { yo: 'lograba', tu: 'lograbas', el: 'lograba', nosotros: 'lográbamos', ellos: 'lograban' }
  },
  // EXPLICAR - regular -ar (spelling c->qu)
  'explicar': {
    presente: { yo: 'explico', tu: 'explicas', el: 'explica', nosotros: 'explicamos', ellos: 'explican' },
    preterito: { yo: 'expliqué', tu: 'explicaste', el: 'explicó', nosotros: 'explicamos', ellos: 'explicaron' },
    futuro: { yo: 'explicaré', tu: 'explicarás', el: 'explicará', nosotros: 'explicaremos', ellos: 'explicarán' },
    imperfecto: { yo: 'explicaba', tu: 'explicabas', el: 'explicaba', nosotros: 'explicábamos', ellos: 'explicaban' }
  },
  // ALCANZAR - regular -ar (spelling z->c)
  'alcanzar': {
    presente: { yo: 'alcanzo', tu: 'alcanzas', el: 'alcanza', nosotros: 'alcanzamos', ellos: 'alcanzan' },
    preterito: { yo: 'alcancé', tu: 'alcanzaste', el: 'alcanzó', nosotros: 'alcanzamos', ellos: 'alcanzaron' },
    futuro: { yo: 'alcanzaré', tu: 'alcanzarás', el: 'alcanzará', nosotros: 'alcanzaremos', ellos: 'alcanzarán' },
    imperfecto: { yo: 'alcanzaba', tu: 'alcanzabas', el: 'alcanzaba', nosotros: 'alcanzábamos', ellos: 'alcanzaban' }
  },
  // RECONOCER - irregular (yo form)
  'reconocer': {
    presente: { yo: 'reconozco', tu: 'reconoces', el: 'reconoce', nosotros: 'reconocemos', ellos: 'reconocen' },
    preterito: { yo: 'reconocí', tu: 'reconociste', el: 'reconoció', nosotros: 'reconocimos', ellos: 'reconocieron' },
    futuro: { yo: 'reconoceré', tu: 'reconocerás', el: 'reconocerá', nosotros: 'reconoceremos', ellos: 'reconocerán' },
    imperfecto: { yo: 'reconocía', tu: 'reconocías', el: 'reconocía', nosotros: 'reconocíamos', ellos: 'reconocían' }
  },
  // CUMPLIR - regular -ir
  'cumplir': {
    presente: { yo: 'cumplo', tu: 'cumples', el: 'cumple', nosotros: 'cumplimos', ellos: 'cumplen' },
    preterito: { yo: 'cumplí', tu: 'cumpliste', el: 'cumplió', nosotros: 'cumplimos', ellos: 'cumplieron' },
    futuro: { yo: 'cumpliré', tu: 'cumplirás', el: 'cumplirá', nosotros: 'cumpliremos', ellos: 'cumplirán' },
    imperfecto: { yo: 'cumplía', tu: 'cumplías', el: 'cumplía', nosotros: 'cumplíamos', ellos: 'cumplían' }
  },
  // NACER - irregular (yo form)
  'nacer': {
    presente: { yo: 'nazco', tu: 'naces', el: 'nace', nosotros: 'nacemos', ellos: 'nacen' },
    preterito: { yo: 'nací', tu: 'naciste', el: 'nació', nosotros: 'nacimos', ellos: 'nacieron' },
    futuro: { yo: 'naceré', tu: 'nacerás', el: 'nacerá', nosotros: 'naceremos', ellos: 'nacerán' },
    imperfecto: { yo: 'nacía', tu: 'nacías', el: 'nacía', nosotros: 'nacíamos', ellos: 'nacían' }
  },
  // CORRER - regular -er
  'correr': {
    presente: { yo: 'corro', tu: 'corres', el: 'corre', nosotros: 'corremos', ellos: 'corren' },
    preterito: { yo: 'corrí', tu: 'corriste', el: 'corrió', nosotros: 'corrimos', ellos: 'corrieron' },
    futuro: { yo: 'correré', tu: 'correrás', el: 'correrá', nosotros: 'correremos', ellos: 'correrán' },
    imperfecto: { yo: 'corría', tu: 'corrías', el: 'corría', nosotros: 'corríamos', ellos: 'corrían' }
  },
  // DIRIGIR - irregular (spelling g->j)
  'dirigir': {
    presente: { yo: 'dirijo', tu: 'diriges', el: 'dirige', nosotros: 'dirigimos', ellos: 'dirigen' },
    preterito: { yo: 'dirigí', tu: 'dirigiste', el: 'dirigió', nosotros: 'dirigimos', ellos: 'dirigieron' },
    futuro: { yo: 'dirigiré', tu: 'dirigirás', el: 'dirigirá', nosotros: 'dirigiremos', ellos: 'dirigirán' },
    imperfecto: { yo: 'dirigía', tu: 'dirigías', el: 'dirigía', nosotros: 'dirigíamos', ellos: 'dirigían' }
  },
  // PAGAR - regular -ar (spelling g->gu)
  'pagar': {
    presente: { yo: 'pago', tu: 'pagas', el: 'paga', nosotros: 'pagamos', ellos: 'pagan' },
    preterito: { yo: 'pagué', tu: 'pagaste', el: 'pagó', nosotros: 'pagamos', ellos: 'pagaron' },
    futuro: { yo: 'pagaré', tu: 'pagarás', el: 'pagará', nosotros: 'pagaremos', ellos: 'pagarán' },
    imperfecto: { yo: 'pagaba', tu: 'pagabas', el: 'pagaba', nosotros: 'pagábamos', ellos: 'pagaban' }
  },
  // JUGAR - irregular (stem change u->ue, spelling g->gu)
  'jugar': {
    presente: { yo: 'juego', tu: 'juegas', el: 'juega', nosotros: 'jugamos', ellos: 'juegan' },
    preterito: { yo: 'jugué', tu: 'jugaste', el: 'jugó', nosotros: 'jugamos', ellos: 'jugaron' },
    futuro: { yo: 'jugaré', tu: 'jugarás', el: 'jugará', nosotros: 'jugaremos', ellos: 'jugarán' },
    imperfecto: { yo: 'jugaba', tu: 'jugabas', el: 'jugaba', nosotros: 'jugábamos', ellos: 'jugaban' }
  },
  // OBTENER - irregular (like tener)
  'obtener': {
    presente: { yo: 'obtengo', tu: 'obtienes', el: 'obtiene', nosotros: 'obtenemos', ellos: 'obtienen' },
    preterito: { yo: 'obtuve', tu: 'obtuviste', el: 'obtuvo', nosotros: 'obtuvimos', ellos: 'obtuvieron' },
    futuro: { yo: 'obtendré', tu: 'obtendrás', el: 'obtendrá', nosotros: 'obtendremos', ellos: 'obtendrán' },
    imperfecto: { yo: 'obtenía', tu: 'obtenías', el: 'obtenía', nosotros: 'obteníamos', ellos: 'obtenían' }
  },
  // DESARROLLAR - regular -ar
  'desarrollar': {
    presente: { yo: 'desarrollo', tu: 'desarrollas', el: 'desarrolla', nosotros: 'desarrollamos', ellos: 'desarrollan' },
    preterito: { yo: 'desarrollé', tu: 'desarrollaste', el: 'desarrolló', nosotros: 'desarrollamos', ellos: 'desarrollaron' },
    futuro: { yo: 'desarrollaré', tu: 'desarrollarás', el: 'desarrollará', nosotros: 'desarrollaremos', ellos: 'desarrollarán' },
    imperfecto: { yo: 'desarrollaba', tu: 'desarrollabas', el: 'desarrollaba', nosotros: 'desarrollábamos', ellos: 'desarrollaban' }
  },
  // TOCAR - regular -ar (spelling c->qu)
  'tocar': {
    presente: { yo: 'toco', tu: 'tocas', el: 'toca', nosotros: 'tocamos', ellos: 'tocan' },
    preterito: { yo: 'toqué', tu: 'tocaste', el: 'tocó', nosotros: 'tocamos', ellos: 'tocaron' },
    futuro: { yo: 'tocaré', tu: 'tocarás', el: 'tocará', nosotros: 'tocaremos', ellos: 'tocarán' },
    imperfecto: { yo: 'tocaba', tu: 'tocabas', el: 'tocaba', nosotros: 'tocábamos', ellos: 'tocaban' }
  },
  // COMER - regular -er (model verb)
  'comer': {
    presente: { yo: 'como', tu: 'comes', el: 'come', nosotros: 'comemos', ellos: 'comen' },
    preterito: { yo: 'comí', tu: 'comiste', el: 'comió', nosotros: 'comimos', ellos: 'comieron' },
    futuro: { yo: 'comeré', tu: 'comerás', el: 'comerá', nosotros: 'comeremos', ellos: 'comerán' },
    imperfecto: { yo: 'comía', tu: 'comías', el: 'comía', nosotros: 'comíamos', ellos: 'comían' }
  },
  // DORMIR - irregular (stem change o->ue, o->u)
  'dormir': {
    presente: { yo: 'duermo', tu: 'duermes', el: 'duerme', nosotros: 'dormimos', ellos: 'duermen' },
    preterito: { yo: 'dormí', tu: 'dormiste', el: 'durmió', nosotros: 'dormimos', ellos: 'durmieron' },
    futuro: { yo: 'dormiré', tu: 'dormirás', el: 'dormirá', nosotros: 'dormiremos', ellos: 'dormirán' },
    imperfecto: { yo: 'dormía', tu: 'dormías', el: 'dormía', nosotros: 'dormíamos', ellos: 'dormían' }
  },
  // CONTINUAR - regular -ar
  'continuar': {
    presente: { yo: 'continúo', tu: 'continúas', el: 'continúa', nosotros: 'continuamos', ellos: 'continúan' },
    preterito: { yo: 'continué', tu: 'continuaste', el: 'continuó', nosotros: 'continuamos', ellos: 'continuaron' },
    futuro: { yo: 'continuaré', tu: 'continuarás', el: 'continuará', nosotros: 'continuaremos', ellos: 'continuarán' },
    imperfecto: { yo: 'continuaba', tu: 'continuabas', el: 'continuaba', nosotros: 'continuábamos', ellos: 'continuaban' }
  },
  // APRENDER - regular -er
  'aprender': {
    presente: { yo: 'aprendo', tu: 'aprendes', el: 'aprende', nosotros: 'aprendemos', ellos: 'aprenden' },
    preterito: { yo: 'aprendí', tu: 'aprendiste', el: 'aprendió', nosotros: 'aprendimos', ellos: 'aprendieron' },
    futuro: { yo: 'aprenderé', tu: 'aprenderás', el: 'aprenderá', nosotros: 'aprenderemos', ellos: 'aprenderán' },
    imperfecto: { yo: 'aprendía', tu: 'aprendías', el: 'aprendía', nosotros: 'aprendíamos', ellos: 'aprendían' }
  },
  // BEBER - regular -er
  'beber': {
    presente: { yo: 'bebo', tu: 'bebes', el: 'bebe', nosotros: 'bebemos', ellos: 'beben' },
    preterito: { yo: 'bebí', tu: 'bebiste', el: 'bebió', nosotros: 'bebimos', ellos: 'bebieron' },
    futuro: { yo: 'beberé', tu: 'beberás', el: 'beberá', nosotros: 'beberemos', ellos: 'beberán' },
    imperfecto: { yo: 'bebía', tu: 'bebías', el: 'bebía', nosotros: 'bebíamos', ellos: 'bebían' }
  },
  // DECIDIR - regular -ir
  'decidir': {
    presente: { yo: 'decido', tu: 'decides', el: 'decide', nosotros: 'decidimos', ellos: 'deciden' },
    preterito: { yo: 'decidí', tu: 'decidiste', el: 'decidió', nosotros: 'decidimos', ellos: 'decidieron' },
    futuro: { yo: 'decidiré', tu: 'decidirás', el: 'decidirá', nosotros: 'decidiremos', ellos: 'decidirán' },
    imperfecto: { yo: 'decidía', tu: 'decidías', el: 'decidía', nosotros: 'decidíamos', ellos: 'decidían' }
  },
  // COMPRAR - regular -ar
  'comprar': {
    presente: { yo: 'compro', tu: 'compras', el: 'compra', nosotros: 'compramos', ellos: 'compran' },
    preterito: { yo: 'compré', tu: 'compraste', el: 'compró', nosotros: 'compramos', ellos: 'compraron' },
    futuro: { yo: 'compraré', tu: 'comprarás', el: 'comprará', nosotros: 'compraremos', ellos: 'comprarán' },
    imperfecto: { yo: 'compraba', tu: 'comprabas', el: 'compraba', nosotros: 'comprábamos', ellos: 'compraban' }
  },
  // VENDER - regular -er
  'vender': {
    presente: { yo: 'vendo', tu: 'vendes', el: 'vende', nosotros: 'vendemos', ellos: 'venden' },
    preterito: { yo: 'vendí', tu: 'vendiste', el: 'vendió', nosotros: 'vendimos', ellos: 'vendieron' },
    futuro: { yo: 'venderé', tu: 'venderás', el: 'venderá', nosotros: 'venderemos', ellos: 'venderán' },
    imperfecto: { yo: 'vendía', tu: 'vendías', el: 'vendía', nosotros: 'vendíamos', ellos: 'vendían' }
  },
  // RESPONDER - regular -er
  'responder': {
    presente: { yo: 'respondo', tu: 'respondes', el: 'responde', nosotros: 'respondemos', ellos: 'responden' },
    preterito: { yo: 'respondí', tu: 'respondiste', el: 'respondió', nosotros: 'respondimos', ellos: 'respondieron' },
    futuro: { yo: 'responderé', tu: 'responderás', el: 'responderá', nosotros: 'responderemos', ellos: 'responderán' },
    imperfecto: { yo: 'respondía', tu: 'respondías', el: 'respondía', nosotros: 'respondíamos', ellos: 'respondían' }
  }
};
