// ─── Global UI strings (translated) ──────────────────────────
const TEXTS = {
    back:             { ca: '← Tornar',   es: '← Volver',   en: '← Back'     },
    openPlaceholder:  { ca: 'Escriu la vostra resposta...', es: 'Escribe vuestra respuesta...', en: 'Write your answer...' },
    enterHint:        { ca: 'clica Enter ↵', es: 'pulsa Enter ↵', en: 'press Enter ↵' },
    continue:         { ca: 'Continuar',  es: 'Continuar',  en: 'Continue'   },
    questionLabel:    { ca: 'Pregunta',   es: 'Pregunta',   en: 'Question'   },

    errRequired:      { ca: 'Aquest camp és obligatori.',           es: 'Este campo es obligatorio.',           en: 'This field is required.'            },
    errChoice:        { ca: 'Seleccioneu una opció per continuar.', es: 'Selecciona una opción para continuar.', en: 'Please select an option to continue.' },
    errMultiChoice:   { ca: "Seleccioneu almenys una opció.",       es: 'Selecciona al menos una opción.',      en: 'Please select at least one option.'  },
    errDate:          { ca: 'Introduïu una data vàlida.',           es: 'Introduce una fecha válida.',          en: 'Please enter a valid date.'          },
    errNumber:        { ca: 'Introduïu un valor vàlid.',            es: 'Introduce un valor válido.',           en: 'Please enter a valid value.'         },
    errCoupleNames:   { ca: 'Introduïu els noms dels dos membres de la parella.', es: 'Introducid los nombres de ambos miembros de la pareja.', en: 'Please enter both names.' },

    couplePh1:        { ca: "Nom d'un membre de la parella",       es: 'Nombre de un miembro de la pareja',   en: 'Name of one partner'      },
    couplePh2:        { ca: "Nom de l'altre membre de la parella", es: 'Nombre del otro miembro de la pareja', en: 'Name of the other partner' },

    contactQuestion:  { ca: 'Gairebé ho tenim!',                        es: '¡Casi lo tenemos!',                        en: "We're almost there!"              },
    contactSubtitle:  { ca: 'Introduïu les vostres dades per rebre la proposta personalitzada.', es: 'Introduce vuestros datos para recibir la propuesta personalizada.', en: 'Enter your details to receive your personalised proposal.' },
    labelFirstName:   { ca: 'Nom *',               es: 'Nombre *',          en: 'First name *'     },
    labelLastName:    { ca: 'Cognom *',             es: 'Apellido *',        en: 'Last name *'      },
    labelEmail:       { ca: 'Correu electrònic *',  es: 'Correo electrónico *', en: 'Email address *' },
    labelPhone:       { ca: 'Telèfon *',            es: 'Teléfono *',        en: 'Phone *'          },
    phFirstName:      { ca: 'El vostre nom',        es: 'Vuestro nombre',    en: 'Your name'        },
    phLastName:       { ca: 'El vostre cognom',     es: 'Vuestro apellido',  en: 'Your surname'     },
    phEmail:          { ca: 'vostre@correu.cat',    es: 'vuestro@correo.es', en: 'your@email.com'   },
    phPhone:          { ca: '000 000 000',          es: '000 000 000',       en: '000 000 000'      },
    errFieldRequired: { ca: 'Camp obligatori',      es: 'Campo obligatorio', en: 'Required field'   },
    errEmail:         { ca: 'Introduïu un correu vàlid', es: 'Introduce un correo válido', en: 'Enter a valid email' },
    errPhone:         { ca: 'Introduïu un telèfon vàlid', es: 'Introduce un teléfono válido', en: 'Enter a valid phone number' },
    privacy:          { ca: "He llegit i accepto la", es: "He leído y acepto la", en: "I have read and accept the" },
    privacyLink:      { ca: 'política de privacitat', es: 'política de privacidad', en: 'privacy policy' },
    errPrivacy:       { ca: "Heu d'acceptar la política de privacitat per continuar.", es: 'Debes aceptar la política de privacidad para continuar.', en: 'You must accept the privacy policy to continue.' },
    errForm:          { ca: 'Reviseu els camps marcats en vermell.', es: 'Revisad los campos marcados en rojo.', en: 'Please check the highlighted fields.' },
    submit:           { ca: 'Enviar sol·licitud →', es: 'Enviar solicitud →', en: 'Send request →'  },

    phEmailSimple:    { ca: 'Correu electrònic',   es: 'Correo electrónico', en: 'Email address' },
    phPhoneSimple:    { ca: 'Número de telèfon',   es: 'Número de teléfono', en: 'Phone number'  },
};

// ─── Step definitions ─────────────────────────────────────────
// question / subtitle / btnLabel / options[].label accept:
//   - string (Catalan, no translation)
//   - { ca, es, en } object
//
// Use {{partner1}} / {{partner2}} anywhere in question/subtitle text.

const STEPS = [
    {
        id: 'couple-names',
        type: 'couple-names',
        question: { ca: 'Abans de res, com ens dirigim a vosaltres?', es: 'Antes de nada, ¿cómo nos dirigimos a vosotros?', en: 'First of all, what are your names?' },
        btnLabel: { ca: 'Comencem', es: 'Empecemos', en: "Let's start" },
    },

    {
        id: 'vibe',
        type: 'photo-choice',
        question: {
            ca: 'Genial, {{partner1}} i {{partner2}},\ncom us imagineu el vostre dia?',
            es: 'Genial, {{partner1}} i {{partner2}},\n¿cómo os imagináis vuestro día?',
            en: 'Great, {{partner1}} and {{partner2}},\nhow do you picture your day?',
        },
        options: [
            {
                value: 'romantic',
                label: { ca: 'Romàntic i íntim',      es: 'Romántico e íntimo',       en: 'Romantic and intimate'    },
                img: 'media/romantic.jpg',
            },
            {
                value: 'festiu',
                label: { ca: 'Festiu i divertit',     es: 'Festivo y divertido',      en: 'Festive and fun'          },
                img: 'media/festiu.jpg',
            },
            {
                value: 'elegant',
                label: { ca: 'Elegant i sofisticat',  es: 'Elegante y sofisticado',   en: 'Elegant and sophisticated' },
                img: 'media/elegant.jpg',
            },
            {
                value: 'petfriendly',
                label: { ca: 'Pet friendly',          es: 'Pet friendly',             en: 'Pet friendly'             },
                img: 'media/petfriendly.jpg',
            },
        ],
    },

    {
        id: 'word',
        type: 'single-choice',
        manual: true,
        question: {
            ca: 'I... si haguéssiu de descriure el vostre casament amb una paraula, quina seria?',
            es: 'Y... si tuviéseis que describir vuestra boda con una palabra, ¿cuál sería?',
            en: 'And... if you had to describe your wedding in one word, what would it be?',
        },
        options: [
            { value: 'senzill',  label: { ca: 'Senzill',  es: 'Sencillo',  en: 'Simple'    } },
            { value: 'emotiu',   label: { ca: 'Emotiu',   es: 'Emotivo',   en: 'Emotional' } },
            { value: 'elegant',  label: { ca: 'Elegant',  es: 'Elegante',  en: 'Elegant'   } },
            { value: 'original', label: { ca: 'Original', es: 'Original',  en: 'Original'  } },
            { value: 'other', open: true },
        ],
    },

    {
        id: 'guests',
        type: 'slider',
        question: {
            ca: 'Quants convidats hi hauria?',
            es: '¿Cuántos invitados habría?',
            en: 'How many guests would there be?',
        },
        min: 10,
        max: 350,
        default: 100,
        crmField: 'num_diners_c',
    },

    {
        id: 'management',
        type: 'card-choice',
        question: {
            ca: 'Ràpid...! Dreta o esquerra?',
            es: '¡Rápido...! ¿Derecha o izquierda?',
            en: 'Quick...! Right or left?',
        },
        options: [
            {
                value: 'all-in-one',
                bg: 'dark',
                text: {
                    ca: 'Un sol equip<br>que ho gestiona<br>tot.',
                    es: 'Un solo equipo<br>que lo gestiona<br>todo.',
                    en: 'One team<br>that manages<br>everything.',
                },
            },
            {
                value: 'separate',
                bg: 'light',
                text: {
                    ca: 'Llogar la finca,<br>contractar el càtering,<br>definir el menú i les begudes,<br>escollir la decoració i les flors,<br>contractar la música i el DJ,<br>organitzar la cerimònia,<br>gestionar els horaris<br>i la coordinació del dia,<br>preparar un pla B en cas de mal temps.',
                    es: 'Alquilar la finca,<br>contratar el catering,<br>definir el menú y las bebidas,<br>elegir la decoración y las flores,<br>contratar la música y el DJ,<br>organizar la ceremonia,<br>gestionar los horarios<br>y la coordinación del día,<br>preparar un plan B en caso de mal tiempo.',
                    en: 'Renting the venue,<br>hiring the catering,<br>defining the menu and drinks,<br>choosing the decoration and flowers,<br>hiring the music and DJ,<br>organising the ceremony,<br>managing the schedules<br>and day coordination,<br>preparing a plan B in case of bad weather.',
                },
            },
        ],
    },

    {
        id: 'preferences',
        type: 'swipe-stack',
        question: {
            ca: 'Amb què feu “match”?',
            es: '¿Con qué hacéis “match”?',
            en: 'What do you “match” with?',
        },
        cards: [
            { id: 'banquet',     label: { ca: 'Banquet exterior',  es: 'Banquete exterior',   en: 'Outdoor banquet' }, img: 'media/swipe/banquet_exterior.jpg' },
            { id: 'allotjament', label: { ca: 'Allotjament',       es: 'Alojamiento',          en: 'Accommodation'   }, img: 'media/swipe/allotjament.jpg'      },
            { id: 'cerimonia',   label: { ca: 'Cerimònia',         es: 'Ceremonia',            en: 'Ceremony'        }, img: 'media/swipe/cerimonia.jpg'        },
            { id: 'musica',      label: { ca: 'Música en directe', es: 'Música en directo',    en: 'Live music'      }, img: 'media/swipe/musica_directe.jpg'   },
        ],
    },

    {
        id: 'rank',
        type: 'rank',
        question: {
            ca: 'Ordeneu per importància, què recordaran els vostres convidats?',
            es: '¿Qué recordarán vuestros invitados? Ordenadlo por importancia.',
            en: 'What will your guests remember most? Rank by importance.',
        },
        items: [
            { id: 'menjar',   label: { ca: 'El menjar i el vi',    es: 'La comida y el vino',       en: 'The food and wine'        } },
            { id: 'ambient',  label: { ca: "L'ambient i la festa", es: 'El ambiente y la fiesta',   en: 'The atmosphere and party' } },
            { id: 'bellesa',  label: { ca: "La bellesa i l'espai", es: 'La belleza y el espacio',   en: 'The beauty and the venue' } },
            { id: 'moments',  label: { ca: 'Els moments emotius',  es: 'Los momentos emotivos',     en: 'The emotional moments'    } },
        ],
    },

    {
        id: 'wedding-date',
        type: 'text',
        question: {
            ca: 'Quina data aproximada teniu en ment?',
            es: '¿Qué fecha aproximada tenéis en mente?',
            en: 'What approximate date do you have in mind?',
        },
        placeholder: {
            ca: 'Data aproximada del casament',
            es: 'Fecha aproximada de la boda',
            en: 'Approximate wedding date',
        },
    },

    {
        id: 'stage',
        type: 'single-choice',
        manual: true,
        question: {
            ca: 'En quin punt us trobeu?',
            es: '¿En qué punto os encontráis?',
            en: 'Where are you in the planning process?',
        },
        options: [
            { value: '1', label: { ca: "Acabem de prometre'ns, estem explorant opcions",  es: 'Acabamos de prometernos, estamos explorando opciones',    en: 'We just got engaged and are exploring options'    } },
            { value: '2', label: { ca: 'Tenim data en ment i estem comparant espais',     es: 'Tenemos fecha en mente y estamos comparando espacios',    en: 'We have a date in mind and are comparing venues'  } },
            { value: '3', label: { ca: 'Hem pres decisions i volem tancar-ho aviat',      es: 'Hemos tomado decisiones y queremos cerrarlo pronto',      en: 'We have made decisions and want to close soon'    } },
            { value: '4', label: { ca: "Volem moure'ns ràpid, estem buscant activament", es: 'Queremos movernos rápido, estamos buscando activamente',  en: 'We want to move fast, actively looking'           } },
            { value: 'other', open: true },
        ],
    },

    {
        id: 'contact-positive',
        type: 'contact-simple',
        question: {
            ca: "Genial, parella! Encaixeu perfectament amb un casament UAUU. Deixeu-nos un correu electrònic i telèfon de contacte i us compartirem la nostra proposta i preus!",
            es: "¡Genial, pareja! Encajáis perfectamente con una boda UAUU. Dejadnos un correo electrónico y teléfono de contacto y os compartiremos nuestra propuesta y precios.",
            en: "Amazing! You're a perfect fit for a UAUU wedding. Leave us your email and phone and we'll share our proposal and pricing with you!",
        },
        btnLabel: { ca: 'Enviar', es: 'Enviar', en: 'Send' },
    },

    {
        id: 'contact-negative',
        type: 'contact-simple',
        question: {
            ca: "Sentim que la nostra proposta pot no acabar-vos d'encaixar... Tot i això, si teniu ganes de fer-hi un cop d'ull i valorar-la, deixeu-nos un correu electrònic i telèfon de contacte i us la compartim a l'instant!",
            es: "Sentimos que nuestra propuesta puede que no os encaje del todo... Aun así, si queréis echarle un vistazo, dejadnos un correo electrónico y teléfono y os la compartimos al instante.",
            en: "We feel our proposal might not be the perfect fit... Still, if you'd like to take a look, leave us your email and phone and we'll share it right away!",
        },
        btnLabel: { ca: 'Enviar', es: 'Enviar', en: 'Send' },
    },

    // ── Next steps will be added here ─────────────────────────
];

// ─── Quiz engine ──────────────────────────────────────────────
const Quiz = {
    current: 0,
    answers: {},
    lang: 'ca',

    init() {
        this.container   = document.getElementById('slides-container');
        this.progressBar = document.getElementById('progress-bar');
        this.btnUp   = document.getElementById('btn-nav-up');
        this.btnDown = document.getElementById('btn-nav-down');

        this.btnUp.addEventListener('click',   () => this.goBack());
        this.btnDown.addEventListener('click', () => this.goNext());

        this.container.addEventListener('input', () => this.updateNavBtns());
        this.container.addEventListener('click', () => setTimeout(() => this.updateNavBtns(), 60));
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => this.setLang(btn.dataset.lang));
        });
        document.addEventListener('keydown', e => this.handleKey(e));

        this.renderAll();
        this.showSlide(0);
    },

    // ── i18n ──────────────────────────────────────────────────

    // Resolves a string or {ca,es,en} object to the current language.
    t(val) {
        if (!val) return '';
        if (typeof val === 'string') return val;
        return val[this.lang] || val.ca || '';
    },

    // ── Rendering ─────────────────────────────────────────────

    renderAll() {
        this.container.innerHTML = '';
        STEPS.forEach((step, i) => {
            const el = this.buildSlide(step, i);
            el.dataset.index = i;
            this.container.appendChild(el);
        });
    },

    buildSlide(step, index) {
        const div = document.createElement('div');
        div.className = `slide slide-${step.type}`;
        div.setAttribute('role', 'region');

        switch (step.type) {
            case 'couple-names':  div.innerHTML = this.tplCoupleNames(step, index);  break;
            case 'photo-choice':  div.innerHTML = this.tplPhotoChoice(step, index);  break;
            case 'slider':        div.innerHTML = this.tplSlider(step, index);        break;
            case 'card-choice':   div.innerHTML = this.tplCardChoice(step, index);   break;
            case 'swipe-stack':   div.innerHTML = this.tplSwipeStack(step, index);   break;
            case 'rank':          div.innerHTML = this.tplRank(step, index);         break;
            case 'stage-slider':  div.innerHTML = this.tplStageSlider(step, index);  break;
            case 'single-choice': div.innerHTML = this.tplSingleChoice(step, index); break;
            case 'multi-choice':  div.innerHTML = this.tplMultiChoice(step, index);  break;
            case 'text':          div.innerHTML = this.tplText(step, index);         break;
            case 'number':        div.innerHTML = this.tplNumber(step, index);       break;
            case 'date':          div.innerHTML = this.tplDate(step, index);         break;
            case 'contact':        div.innerHTML = this.tplContact(step);              break;
            case 'contact-simple': div.innerHTML = this.tplContactSimple(step);       break;
            default:
                div.innerHTML = `<div class="slide-inner"><p>${step.id}</p></div>`;
        }

        return div;
    },

    // ── Templates ─────────────────────────────────────────────

    tplCoupleNames(step, index) {
        return `
            <div class="slide-inner">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                ${step.subtitle ? `<p class="slide-subtitle">${this.tplVar_(this.t(step.subtitle))}</p>` : ''}
                <div class="couple-inputs">
                    <input
                        class="quiz-input"
                        type="text"
                        id="input-partner1"
                        placeholder="${this.t(TEXTS.couplePh1)}"
                        autocomplete="off"
                        oninput="Quiz.onInputChange('couple-names')"
                        onkeydown="if(event.key==='Enter') document.getElementById('input-partner2').focus()"
                    >
                    <input
                        class="quiz-input"
                        type="text"
                        id="input-partner2"
                        placeholder="${this.t(TEXTS.couplePh2)}"
                        autocomplete="off"
                        oninput="Quiz.onInputChange('couple-names')"
                        onkeydown="if(event.key==='Enter') Quiz.goNext()"
                    >
                </div>
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.goNext()">${this.t(step.btnLabel) || this.t(TEXTS.continue)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>
                <div class="slide-error" id="err-couple-names">${this.t(TEXTS.errCoupleNames)}</div>
            </div>
        `;
    },

    tplPhotoChoice(step, index) {
        const question = this.tplVar_(this.t(step.question));
        const photos = step.options.map(opt => `
            <button
                class="photo-option"
                data-value="${opt.value}"
                aria-label="${this.t(opt.label)}"
                onclick="Quiz.selectPhoto(this, '${step.id}', '${opt.value}')"
            >
                <img src="${opt.img}" alt="${this.t(opt.label)}" draggable="false">
            </button>
        `).join('');

        return `
            <div class="slide-inner slide-inner--wide">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${question}</p>
                <div class="photo-grid">${photos}</div>
                <div class="slide-error" id="err-${step.id}">${this.t(TEXTS.errChoice)}</div>
            </div>
        `;
    },

    tplSingleChoice(step, index) {
        const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const options = step.options.map((opt, i) => {
            if (opt.open) {
                return `
                    <button type="button" class="choice-btn choice-btn--open" data-value="${opt.value}"
                        onclick="document.getElementById('open-${step.id}').focus()">
                        <span class="choice-key">${keys[i]}</span>
                        <svg class="choice-open-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                            <path d="M9 1.5l2.5 2.5L3.5 12H1v-2.5L9 1.5z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input
                            type="text"
                            class="choice-open-input"
                            id="open-${step.id}"
                            autocomplete="off"
                            placeholder="${this.t(TEXTS.openPlaceholder)}"
                            onfocus="Quiz.selectOpenChoice(this.closest('.choice-btn'), '${step.id}')"
                            oninput="Quiz.onOpenInput('${step.id}', this.value)"
                            onclick="event.stopPropagation()"
                            onkeydown="if(event.key==='Enter'){event.preventDefault();Quiz.goNext()}"
                        >
                    </button>
                `;
            }
            return `
                <button type="button" class="choice-btn" data-value="${opt.value}"
                    onclick="Quiz.selectChoice(this, '${step.id}', false)">
                    <span class="choice-key">${keys[i]}</span>
                    ${this.t(opt.label)}
                </button>
            `;
        }).join('');

        const hasManual = step.manual;
        return `
            <div class="slide-inner">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                ${step.subtitle ? `<p class="slide-subtitle">${this.tplVar_(this.t(step.subtitle))}</p>` : ''}
                <div class="choices ${step.grid ? 'choices-grid' : ''}">${options}</div>
                ${hasManual ? `
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.goNext()">${this.t(step.btnLabel) || this.t(TEXTS.continue)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>` : ''}
                <div class="slide-error" id="err-${step.id}">${this.t(TEXTS.errChoice)}</div>
            </div>
        `;
    },

    tplMultiChoice(step, index) {
        const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const options = step.options.map((opt, i) => `
            <button class="choice-btn" data-value="${opt.value}" onclick="Quiz.selectChoice(this, '${step.id}', true)">
                <span class="choice-key">${keys[i]}</span>
                ${this.t(opt.label)}
            </button>
        `).join('');

        const subtitle = step.subtitle
            ? this.tplVar_(this.t(step.subtitle))
            : { ca: "Podeu seleccionar més d'una opció.", es: 'Podéis seleccionar más de una opción.', en: 'You can select more than one option.' }[this.lang];

        return `
            <div class="slide-inner">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                <p class="slide-subtitle">${subtitle}</p>
                <div class="choices ${step.grid ? 'choices-grid' : ''}">${options}</div>
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.goNext()">${this.t(step.btnLabel) || this.t(TEXTS.continue)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>
                <div class="slide-error" id="err-${step.id}">${this.t(TEXTS.errMultiChoice)}</div>
            </div>
        `;
    },

    tplText(step, index) {
        return `
            <div class="slide-inner">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                ${step.subtitle ? `<p class="slide-subtitle">${this.tplVar_(this.t(step.subtitle))}</p>` : ''}
                <input
                    class="quiz-input"
                    type="text"
                    id="input-${step.id}"
                    placeholder="${this.t(step.placeholder) || ''}"
                    autocomplete="off"
                    oninput="Quiz.onInputChange('${step.id}')"
                    onkeydown="if(event.key==='Enter') Quiz.goNext()"
                >
                ${step.hint ? `<p class="input-hint">${this.t(step.hint)}</p>` : ''}
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.goNext()">${this.t(step.btnLabel) || this.t(TEXTS.continue)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>
                <div class="slide-error" id="err-${step.id}">${this.t(TEXTS.errRequired)}</div>
            </div>
        `;
    },

    tplNumber(step, index) {
        return `
            <div class="slide-inner">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                ${step.subtitle ? `<p class="slide-subtitle">${this.tplVar_(this.t(step.subtitle))}</p>` : ''}
                <input
                    class="quiz-input"
                    type="number"
                    id="input-${step.id}"
                    placeholder="${this.t(step.placeholder) || '0'}"
                    min="${step.min || 1}"
                    ${step.max ? `max="${step.max}"` : ''}
                    autocomplete="off"
                    oninput="Quiz.onInputChange('${step.id}')"
                    onkeydown="if(event.key==='Enter') Quiz.goNext()"
                >
                ${step.hint ? `<p class="input-hint">${this.t(step.hint)}</p>` : ''}
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.goNext()">${this.t(step.btnLabel) || this.t(TEXTS.continue)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>
                <div class="slide-error" id="err-${step.id}">${this.t(TEXTS.errNumber)}</div>
            </div>
        `;
    },

    tplDate(step, index) {
        const ph = { ca: 'DD/MM/AAAA', es: 'DD/MM/AAAA', en: 'DD/MM/YYYY' }[this.lang];
        return `
            <div class="slide-inner">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                ${step.subtitle ? `<p class="slide-subtitle">${this.tplVar_(this.t(step.subtitle))}</p>` : ''}
                <input
                    class="quiz-input"
                    type="text"
                    id="input-${step.id}"
                    placeholder="${ph}"
                    autocomplete="off"
                    inputmode="numeric"
                    oninput="Quiz.onDateInput(this, '${step.id}')"
                    onkeydown="if(event.key==='Enter') Quiz.goNext()"
                >
                ${step.hint ? `<p class="input-hint">${this.t(step.hint)}</p>` : ''}
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.goNext()">${this.t(step.btnLabel) || this.t(TEXTS.continue)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>
                <div class="slide-error" id="err-${step.id}">${this.t(TEXTS.errDate)}</div>
            </div>
        `;
    },

    tplSlider(step, index) {
        const def = step.default ?? Math.round((step.min + step.max) / 2);
        const defSlots = String(def).split('').map(d =>
            `<span class="od-slot"><span class="od-face">${d}</span></span>`
        ).join('');
        return `
            <div class="slide-inner">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                ${step.subtitle ? `<p class="slide-subtitle">${this.tplVar_(this.t(step.subtitle))}</p>` : ''}
                <div class="slider-wrap">
                    <p class="slider-value" id="val-${step.id}">${defSlots}</p>
                    <input
                        type="range"
                        class="quiz-slider"
                        id="input-${step.id}"
                        min="${step.min}"
                        max="${step.max}"
                        value="${def}"
                        oninput="Quiz.onSliderInput('${step.id}', this)"
                        onkeydown="if(event.key==='Enter') Quiz.goNext()"
                    >
                </div>
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.goNext()">${this.t(step.btnLabel) || this.t(TEXTS.continue)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>
            </div>
        `;
    },

    tplCardChoice(step, index) {
        const cards = step.options.map(opt => `
            <button
                type="button"
                class="card-option card-option--${opt.bg}"
                data-value="${opt.value}"
                onclick="Quiz.selectCard(this, '${step.id}', '${opt.value}')"
            >
                <span class="card-text">${this.t(opt.text)}</span>
            </button>
        `).join('');

        return `
            <div class="slide-inner slide-inner--card">
                <p class="slide-step slide-step--center">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question slide-question--center">${this.tplVar_(this.t(step.question))}</p>
                <div class="card-grid">${cards}</div>
                <div class="slide-error" id="err-${step.id}">${this.t(TEXTS.errChoice)}</div>
            </div>
        `;
    },

    tplSwipeStack(step, index) {
        const ROTS = [0, -2, 3, -1.5];
        const cards = step.cards.map((card, i) => {
            const z = step.cards.length - i;
            const scale = (1 - i * 0.04).toFixed(3);
            const rot = ROTS[i] || 0;
            const t = i === 0 ? 'none' : `scale(${scale}) translateY(${i * 10}px) rotate(${rot}deg)`;
            return `
                <div class="swipe-card" data-card-id="${card.id}" data-index="${i}"
                     style="z-index:${z};transform:${t}">
                    <div class="swipe-indicator swipe-like">LIKE</div>
                    <div class="swipe-indicator swipe-nope">NOPE</div>
                    <img src="${card.img}" alt="${this.t(card.label)}" draggable="false">
                    <span class="swipe-label">${this.t(card.label)}</span>
                    <div class="swipe-btns">
                        <button class="swipe-btn swipe-btn--no"
                            onclick="event.stopPropagation();Quiz.swipeCard('${step.id}','dislike')"
                            aria-label="No m'agrada">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <button class="swipe-btn swipe-btn--yes"
                            onclick="event.stopPropagation();Quiz.swipeCard('${step.id}','like')"
                            aria-label="M'agrada">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="currentColor" aria-hidden="true">
                                <path d="M9 14.5S1 9.5 1 4.5a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 5-8 10-8 10z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        const subtitle = step.subtitle ? `<p class="slide-subtitle">${this.t(step.subtitle)}</p>` : '';
        return `
            <div class="slide-inner slide-inner--swipe">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                ${subtitle}
                <div class="swipe-stack" id="swipe-stack-${step.id}">${cards}</div>
            </div>
        `;
    },

    tplRank(step, index) {
        const items = step.items.map(item => `
            <div class="rank-item" data-id="${item.id}">
                <span class="rank-label">${this.t(item.label)}</span>
                <span class="rank-handle" aria-hidden="true">≡</span>
            </div>
        `).join('');
        return `
            <div class="slide-inner">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                <div class="rank-list" id="rank-list-${step.id}">${items}</div>
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.goNext()">${this.t(step.btnLabel) || this.t(TEXTS.continue)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>
            </div>
        `;
    },

    tplStageSlider(step, index) {
        return `
            <div class="slide-inner">
                <p class="slide-step">${this.t(TEXTS.questionLabel)} ${this.questionIndex(index)}</p>
                <p class="slide-question">${this.tplVar_(this.t(step.question))}</p>
                <p class="stage-display" id="stage-display-${step.id}">${this.t(step.stages[0])}</p>
                <input
                    class="quiz-slider stage-slider"
                    type="range"
                    id="input-${step.id}"
                    min="1" max="${step.stages.length}" step="1" value="1"
                    oninput="Quiz.onStageInput('${step.id}', this)"
                >
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.goNext()">${this.t(step.btnLabel) || this.t(TEXTS.continue)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>
            </div>
        `;
    },

    tplContactSimple(step) {
        return `
            <div class="slide-inner contact-simple-inner">
                <p class="slide-question contact-simple-question">${this.tplVar_(this.t(step.question))}</p>
                <div class="contact-simple-fields">
                    <input
                        class="quiz-input"
                        type="email"
                        id="cs-email-${step.id}"
                        placeholder="${this.t(TEXTS.phEmailSimple)}"
                        autocomplete="email"
                        oninput="document.getElementById('cs-err-${step.id}')?.classList.remove('visible')"
                        onkeydown="if(event.key==='Enter'){event.preventDefault();document.getElementById('cs-phone-${step.id}').focus()}"
                    >
                    <input
                        class="quiz-input"
                        type="tel"
                        id="cs-phone-${step.id}"
                        placeholder="${this.t(TEXTS.phPhoneSimple)}"
                        autocomplete="tel"
                        oninput="document.getElementById('cs-err-${step.id}')?.classList.remove('visible')"
                        onkeydown="if(event.key==='Enter') Quiz.submitSimpleContact('${step.id}')"
                    >
                </div>
                <div class="privacy-row privacy-row--simple">
                    <input type="checkbox" id="cs-privacy-${step.id}">
                    <label for="cs-privacy-${step.id}">
                        ${this.t(TEXTS.privacy)} <a href="https://www.uauu.cat/politica-de-privacitat/" target="_blank" rel="noopener noreferrer">${this.t(TEXTS.privacyLink)}</a>
                    </label>
                </div>
                <div class="btn-row">
                    <button class="btn-next" onclick="Quiz.submitSimpleContact('${step.id}')">${this.t(step.btnLabel)}</button>
                    <span class="btn-hint">${this.t(TEXTS.enterHint)}</span>
                </div>
                <div class="slide-error" id="cs-err-${step.id}"></div>
            </div>
        `;
    },

    tplContact(step) {
        const q  = step.question ? this.tplVar_(this.t(step.question)) : this.t(TEXTS.contactQuestion);
        const st = step.subtitle ? this.tplVar_(this.t(step.subtitle)) : this.t(TEXTS.contactSubtitle);
        return `
            <div class="slide-inner">
                <p class="slide-question">${q}</p>
                <p class="slide-subtitle">${st}</p>
                <div class="contact-fields">
                    <div class="contact-row">
                        <div class="contact-field" id="field-first_name">
                            <label for="c-first_name">${this.t(TEXTS.labelFirstName)}</label>
                            <input class="contact-input" type="text" id="c-first_name" placeholder="${this.t(TEXTS.phFirstName)}" autocomplete="given-name">
                            <span class="field-error">${this.t(TEXTS.errFieldRequired)}</span>
                        </div>
                        <div class="contact-field" id="field-last_name">
                            <label for="c-last_name">${this.t(TEXTS.labelLastName)}</label>
                            <input class="contact-input" type="text" id="c-last_name" placeholder="${this.t(TEXTS.phLastName)}" autocomplete="family-name">
                            <span class="field-error">${this.t(TEXTS.errFieldRequired)}</span>
                        </div>
                    </div>
                    <div class="contact-field" id="field-email1">
                        <label for="c-email1">${this.t(TEXTS.labelEmail)}</label>
                        <input class="contact-input" type="email" id="c-email1" placeholder="${this.t(TEXTS.phEmail)}" autocomplete="email">
                        <span class="field-error">${this.t(TEXTS.errEmail)}</span>
                    </div>
                    <div class="contact-field" id="field-phone_mobile">
                        <label for="c-phone_mobile">${this.t(TEXTS.labelPhone)}</label>
                        <div class="phone-wrap">
                            <span class="phone-prefix">🇪🇸 +34</span>
                            <input class="contact-input" type="tel" id="c-phone_mobile" placeholder="${this.t(TEXTS.phPhone)}" autocomplete="tel">
                        </div>
                        <span class="field-error">${this.t(TEXTS.errPhone)}</span>
                    </div>
                </div>
                <div class="privacy-row">
                    <input type="checkbox" id="c-privacy">
                    <label for="c-privacy">
                        ${this.t(TEXTS.privacy)} <a href="https://www.uauu.cat/politica-de-privacitat/" target="_blank" rel="noopener noreferrer">${this.t(TEXTS.privacyLink)}</a>
                    </label>
                </div>
                <button class="btn-next" onclick="Quiz.submitContact()">${this.t(TEXTS.submit)}</button>
                <div class="slide-error" id="err-contact"></div>
            </div>
        `;
    },

    // ── Navigation ────────────────────────────────────────────

    isQualified() {
        const guests = parseInt(this.answers.guests) || 0;
        if (guests > 0 && guests < 30) return false;
        if (this.answers.management === 'separate') return false;
        return true;
    },

    goNext() {
        if (!this.validateCurrent()) return;
        this.collectAnswer();
        this.updateTemplateVars();

        const step = STEPS[this.current];
        if (step.id === 'stage') {
            const target = this.isQualified() ? 'contact-positive' : 'contact-negative';
            this.showSlide(STEPS.findIndex(s => s.id === target));
            return;
        }

        if (this.current < STEPS.length - 1) {
            this.showSlide(this.current + 1);
        }
    },

    goBack() {
        const step = STEPS[this.current];
        if (step.id === 'contact-positive' || step.id === 'contact-negative') {
            this.showSlide(STEPS.findIndex(s => s.id === 'stage'));
            return;
        }
        if (this.current > 0) {
            this.showSlide(this.current - 1);
        }
    },

    showSlide(index) {
        const slides = this.container.querySelectorAll('.slide');
        const goingBack = index < this.current;

        if (slides[this.current] && this.current !== index) {
            const exiting = slides[this.current];
            exiting.classList.add(goingBack ? 'slide-exit-down' : 'slide-exit');
            exiting.classList.remove('active');
            exiting.addEventListener('transitionend', () => {
                exiting.classList.remove('slide-exit', 'slide-exit-down');
            }, { once: true });
        }

        const incoming = slides[index];
        if (goingBack) incoming.classList.add('slide-from-above');

        if (goingBack && STEPS[index].type === 'swipe-stack') {
            this.resetSwipe(STEPS[index].id);
        }

        this.current = index;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                incoming.classList.remove('slide-from-above');
                incoming.classList.add('active');
                this.autoFocus(incoming);
                const step = STEPS[index];
                const slider = incoming.querySelector('.quiz-slider:not(.stage-slider)');
                if (slider) this.onSliderInput(step.id, slider);
                const stageSlider = incoming.querySelector('.stage-slider');
                if (stageSlider) this.onStageInput(step.id, stageSlider);
                if (step.type === 'swipe-stack') this.initSwipe(step.id);
                if (step.type === 'rank')        this.initRank(step.id);
                // Re-evaluate nav state now that .active is set and selections
                // are visible — queries like .slide.active .photo-option.selected
                // only work after this point.
                this.updateNavBtns();
            });
        });

        this.updateProgress();
        this.updateNavBtns();
    },

    autoFocus(slideEl) {
        setTimeout(() => {
            const input = slideEl.querySelector(
                'input[type="text"]:not(.choice-open-input), input[type="email"], input[type="tel"], input[type="number"]'
            );
            if (input) input.focus();
        }, 380);
    },

    // ── Validation ────────────────────────────────────────────

    validateCurrent() {
        const step  = STEPS[this.current];
        if (step.type === 'contact')        return true;
        if (step.type === 'contact-simple') return true;
        if (step.type === 'slider') return true;
        if (step.type === 'swipe-stack') return true;
        if (step.type === 'rank')         return true;
        if (step.type === 'stage-slider') return true;
        if (step.required === false) return true;

        const errEl = document.getElementById(`err-${step.id}`);

        if (step.type === 'photo-choice') {
            const sel = this.container.querySelector('.slide.active .photo-option.selected');
            if (!sel) { errEl && errEl.classList.add('visible'); return false; }
        }

        if (step.type === 'card-choice') {
            const sel = this.container.querySelector('.slide.active .card-option.selected');
            if (!sel) { errEl && errEl.classList.add('visible'); return false; }
        }

        if (step.type === 'couple-names') {
            const p1 = document.getElementById('input-partner1').value.trim();
            const p2 = document.getElementById('input-partner2').value.trim();
            if (!p1 || !p2) { errEl && errEl.classList.add('visible'); return false; }
        }

        if (step.type === 'single-choice') {
            const sel = this.container.querySelector('.slide.active .choice-btn.selected');
            if (!sel) { errEl && errEl.classList.add('visible'); return false; }
            if (sel.classList.contains('choice-btn--open')) {
                const input = document.getElementById(`open-${step.id}`);
                if (!input?.value.trim()) { errEl && errEl.classList.add('visible'); return false; }
            }
        }

        if (step.type === 'multi-choice') {
            const sel = this.container.querySelectorAll('.slide.active .choice-btn.selected');
            if (!sel.length) { errEl && errEl.classList.add('visible'); return false; }
        }

        if (['text', 'number', 'date'].includes(step.type)) {
            const input = document.getElementById(`input-${step.id}`);
            if (!input || !input.value.trim()) { errEl && errEl.classList.add('visible'); return false; }
        }

        errEl && errEl.classList.remove('visible');
        return true;
    },

    // ── Answer collection ─────────────────────────────────────

    collectAnswer() {
        const step = STEPS[this.current];

        if (step.type === 'couple-names') {
            this.answers.partner1   = document.getElementById('input-partner1').value.trim();
            this.answers.partner2   = document.getElementById('input-partner2').value.trim();
            this.answers.first_name = this.answers.partner1;
            this.answers.last_name  = this.answers.partner2;
        }

        if (step.type === 'single-choice') {
            const sel = this.container.querySelector('.slide.active .choice-btn.selected');
            if (sel) {
                if (sel.classList.contains('choice-btn--open')) {
                    const input = document.getElementById(`open-${step.id}`);
                    this.answers[step.id] = input?.value.trim() || sel.dataset.value;
                } else {
                    this.answers[step.id] = sel.dataset.value;
                }
            }
        }

        if (step.type === 'multi-choice') {
            const sel = this.container.querySelectorAll('.slide.active .choice-btn.selected');
            this.answers[step.id] = Array.from(sel).map(b => b.dataset.value);
        }

        if (['text', 'number', 'date'].includes(step.type)) {
            const input = document.getElementById(`input-${step.id}`);
            if (input) this.answers[step.id] = input.value.trim();
        }

        if (step.type === 'slider') {
            const input = document.getElementById(`input-${step.id}`);
            if (input) this.answers[step.id] = input.value;
        }

        if (step.type === 'rank') {
            const items = document.querySelectorAll(`#rank-list-${step.id} .rank-item`);
            this.answers[step.id] = Array.from(items).map(el => el.dataset.id);
        }

        if (step.type === 'stage-slider') {
            const input = document.getElementById(`input-${step.id}`);
            if (input) this.answers[step.id] = parseInt(input.value);
        }
    },

    // ── Interaction handlers ──────────────────────────────────

    selectChoice(btn, stepId, multi) {
        const slide = btn.closest('.slide');
        if (!multi) {
            slide.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            document.getElementById(`err-${stepId}`)?.classList.remove('visible');
            const step = STEPS.find(s => s.id === stepId);
            if (!step?.manual) setTimeout(() => this.goNext(), 120);
        } else {
            btn.classList.toggle('selected');
            document.getElementById(`err-${stepId}`)?.classList.remove('visible');
        }
    },

    selectCard(btn, stepId, value) {
        this.answers[stepId] = value;
        btn.closest('.slide').querySelectorAll('.card-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        setTimeout(() => this.goNext(), 120);
    },

    selectOpenChoice(btn, stepId) {
        btn.closest('.slide').querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById(`err-${stepId}`)?.classList.remove('visible');
    },

    onOpenInput(stepId, value) {
        document.getElementById(`err-${stepId}`)?.classList.remove('visible');
    },

    selectPhoto(btn, stepId, value) {
        btn.closest('.slide').querySelectorAll('.photo-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.answers[stepId] = value;
        setTimeout(() => this.goNext(), 120);
    },

    onSliderInput(stepId, input) {
        const valEl = document.getElementById(`val-${stepId}`);
        if (valEl) this._tickOdometer(valEl, parseInt(input.value), stepId);
        const pct = ((input.value - input.min) / (input.max - input.min)) * 100;
        input.style.setProperty('--fill', pct + '%');
    },

    _tickOdometer(el, newVal, stepId) {
        if (!this._odo) this._odo = {};
        const prev    = this._odo[stepId];
        this._odo[stepId] = newVal;

        const newStr  = String(newVal);
        const goingUp = prev === undefined || newVal > prev;
        const slots   = el.querySelectorAll('.od-slot');

        // Rebuild when digit count changes or on first render
        if (!slots.length || slots.length !== newStr.length) {
            el.innerHTML = newStr.split('').map(d =>
                `<span class="od-slot"><span class="od-face">${d}</span></span>`
            ).join('');
            return;
        }

        const DUR  = 300;
        const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

        newStr.split('').forEach((newDigit, i) => {
            const slot = slots[i];
            const face = slot.querySelector('.od-face:not(.od-out)');
            if (!face || face.textContent === newDigit) return;

            // Cancel in-progress exit from a previous rapid change
            slot.querySelectorAll('.od-out').forEach(o => o.remove());
            if (slot._odoTimer) clearTimeout(slot._odoTimer);

            // Clone current digit as the outgoing element
            const out = face.cloneNode(true);
            out.classList.add('od-out');
            out.style.cssText = 'position:absolute;top:0;left:0;width:100%;transition:none;';
            slot.appendChild(out);

            // Position incoming off-screen (no transition yet)
            face.textContent = newDigit;
            face.style.transition = 'none';
            face.style.transform  = goingUp ? 'translateY(-110%)' : 'translateY(110%)';

            // Force reflow so both start positions are painted
            void slot.offsetWidth;

            // Play: outgoing exits, incoming enters
            out.style.transition = `transform ${DUR}ms ${EASE}`;
            out.style.transform  = goingUp ? 'translateY(110%)' : 'translateY(-110%)';

            face.style.transition = `transform ${DUR}ms ${EASE}`;
            face.style.transform  = 'translateY(0)';

            slot._odoTimer = setTimeout(() => {
                out.remove();
                face.style.transition = '';
                face.style.transform  = '';
            }, DUR + 30);
        });
    },

    onStageInput(stepId, input) {
        const step = STEPS.find(s => s.id === stepId);
        const idx = parseInt(input.value) - 1;
        const displayEl = document.getElementById(`stage-display-${stepId}`);
        if (displayEl && step) displayEl.textContent = this.t(step.stages[idx]);
        const pct = ((input.value - input.min) / (input.max - input.min)) * 100;
        input.style.setProperty('--fill', pct + '%');
    },

    onInputChange(stepId) {
        document.getElementById(`err-${stepId}`)?.classList.remove('visible');
    },

    onDateInput(input, stepId) {
        let v = input.value.replace(/\D/g, '');
        if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
        if (v.length > 5) v = v.slice(0, 5) + '/' + v.slice(5, 9);
        input.value = v;
        this.onInputChange(stepId);
    },

    handleKey(e) {
        if (e.key !== 'Enter' || document.activeElement.tagName === 'TEXTAREA') return;
        const step = STEPS[this.current];
        const types = ['multi-choice', 'text', 'number', 'date', 'couple-names', 'slider'];
        if (types.includes(step.type)) this.goNext();
    },

    // ── Contact submission ────────────────────────────────────

    submitContact() {
        const f = {
            first_name:   document.getElementById('c-first_name'),
            last_name:    document.getElementById('c-last_name'),
            email1:       document.getElementById('c-email1'),
            phone_mobile: document.getElementById('c-phone_mobile'),
        };
        const privacy = document.getElementById('c-privacy');
        let valid = true;

        ['first_name', 'last_name'].forEach(k => {
            const ok = f[k].value.trim().length > 0;
            document.getElementById(`field-${k}`).classList.toggle('has-error', !ok);
            if (!ok) valid = false;
        });

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email1.value.trim());
        document.getElementById('field-email1').classList.toggle('has-error', !emailOk);
        if (!emailOk) valid = false;

        const phoneOk = f.phone_mobile.value.trim().replace(/\s/g, '').length >= 9;
        document.getElementById('field-phone_mobile').classList.toggle('has-error', !phoneOk);
        if (!phoneOk) valid = false;

        const errEl = document.getElementById('err-contact');

        if (!privacy.checked) {
            errEl.textContent = this.t(TEXTS.errPrivacy);
            errEl.classList.add('visible');
            return;
        }
        if (!valid) {
            errEl.textContent = this.t(TEXTS.errForm);
            errEl.classList.add('visible');
            return;
        }

        errEl.classList.remove('visible');
        this.answers.first_name   = f.first_name.value.trim();
        this.answers.last_name    = f.last_name.value.trim();
        this.answers.email1       = f.email1.value.trim();
        this.answers.phone_mobile = '+34 ' + f.phone_mobile.value.trim();
        this.answers.lang         = this.lang;

        submitToCRM(this.answers);
    },

    submitSimpleContact(stepId) {
        const emailEl   = document.getElementById(`cs-email-${stepId}`);
        const phoneEl   = document.getElementById(`cs-phone-${stepId}`);
        const privacyEl = document.getElementById(`cs-privacy-${stepId}`);
        const errEl     = document.getElementById(`cs-err-${stepId}`);

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim());
        const phoneOk = phoneEl.value.trim().replace(/\s/g, '').length >= 9;

        emailEl.classList.toggle('has-error', !emailOk);
        phoneEl.classList.toggle('has-error', !phoneOk);

        if (!emailOk || !phoneOk) {
            errEl.textContent = this.t(TEXTS.errForm);
            errEl.classList.add('visible');
            return;
        }
        if (!privacyEl.checked) {
            errEl.textContent = this.t(TEXTS.errPrivacy);
            errEl.classList.add('visible');
            return;
        }

        errEl.classList.remove('visible');
        this.answers.email1       = emailEl.value.trim();
        this.answers.phone_mobile = phoneEl.value.trim();
        this.answers.lang         = this.lang;

        submitToCRM(this.answers);
    },

    // ── Template variable system ──────────────────────────────

    // Wraps text containing {{variables}} in a span for live updates.
    // Also converts \n to <br> for multiline questions.
    tplVar_(text) {
        if (!text) return '';
        if (!text.includes('{{')) return text.replace(/\n/g, '<br>');
        const escaped = text.replace(/"/g, '&quot;');
        return `<span class="tpl-text" data-tpl="${escaped}">${this.interpolate(text).replace(/\n/g, '<br>')}</span>`;
    },

    interpolate(text) {
        const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return text
            .replace(/\{\{partner1\}\}/g, esc(this.answers.partner1 || ''))
            .replace(/\{\{partner2\}\}/g, esc(this.answers.partner2 || ''));
    },

    updateTemplateVars() {
        document.querySelectorAll('.tpl-text').forEach(el => {
            el.innerHTML = this.interpolate(el.dataset.tpl).replace(/\n/g, '<br>');
        });
    },

    // ── Language switching ────────────────────────────────────

    setLang(lang) {
        this.lang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        document.documentElement.lang = lang;

        // Re-render all slides with new language, then restore state
        this.renderAll();
        this.restoreAnswers();

        // Re-show current slide without animation (instant)
        const slides = this.container.querySelectorAll('.slide');
        slides.forEach((s, i) => s.classList.toggle('active', i === this.current));

        this.updateProgress();
        this.updateNavBtns();
    },

    // Re-applies stored answers to the re-rendered DOM after a lang change.
    restoreAnswers() {
        STEPS.forEach((step, i) => {
            const slides = this.container.querySelectorAll('.slide');

            if (step.type === 'couple-names') {
                const p1 = document.getElementById('input-partner1');
                const p2 = document.getElementById('input-partner2');
                if (p1 && this.answers.partner1) p1.value = this.answers.partner1;
                if (p2 && this.answers.partner2) p2.value = this.answers.partner2;
            }

            if (step.type === 'single-choice' && this.answers[step.id]) {
                const predefined = step.options.filter(o => !o.open).map(o => o.value);
                const isOpen = !predefined.includes(this.answers[step.id]);
                slides[i].querySelectorAll('.choice-btn').forEach(btn => {
                    const match = isOpen
                        ? btn.classList.contains('choice-btn--open')
                        : btn.dataset.value === this.answers[step.id];
                    btn.classList.toggle('selected', match);
                });
                if (isOpen) {
                    const input = document.getElementById(`open-${step.id}`);
                    if (input) input.value = this.answers[step.id];
                }
            }

            if (step.type === 'multi-choice' && this.answers[step.id]) {
                const selected = this.answers[step.id];
                slides[i].querySelectorAll('.choice-btn').forEach(btn => {
                    btn.classList.toggle('selected', selected.includes(btn.dataset.value));
                });
            }

            if (['text', 'number', 'date'].includes(step.type) && this.answers[step.id]) {
                const input = document.getElementById(`input-${step.id}`);
                if (input) input.value = this.answers[step.id];
            }

            if (step.type === 'slider' && this.answers[step.id]) {
                const input = document.getElementById(`input-${step.id}`);
                if (input) {
                    input.value = this.answers[step.id];
                    this.onSliderInput(step.id, input);
                }
            }

            if (step.type === 'card-choice' && this.answers[step.id]) {
                slides[i].querySelectorAll('.card-option').forEach(btn => {
                    btn.classList.toggle('selected', btn.dataset.value === this.answers[step.id]);
                });
            }

            if (step.type === 'photo-choice' && this.answers[step.id]) {
                slides[i].querySelectorAll('.photo-option').forEach(btn => {
                    btn.classList.toggle('selected', btn.dataset.value === this.answers[step.id]);
                });
            }

            if (step.type === 'stage-slider' && this.answers[step.id]) {
                const input = document.getElementById(`input-${step.id}`);
                if (input) {
                    input.value = this.answers[step.id];
                    this.onStageInput(step.id, input);
                }
            }

            if (step.type === 'rank' && this.answers[step.id]) {
                const list = slides[i]?.querySelector('.rank-list');
                if (list) {
                    this.answers[step.id].forEach(id => {
                        const item = list.querySelector(`.rank-item[data-id="${id}"]`);
                        if (item) list.appendChild(item);
                    });
                }
            }

            if (step.type === 'swipe-stack' && this.answers[step.id]) {
                const swiped = Object.keys(this.answers[step.id]);
                if (!this.swipeData) this.swipeData = {};
                this.swipeData[step.id] = { idx: swiped.length };
                slides[i].querySelectorAll('.swipe-card').forEach(card => {
                    if (swiped.includes(card.dataset.cardId)) {
                        card.classList.add('gone');
                        card.style.opacity = '0';
                        card.style.pointerEvents = 'none';
                    }
                });
                this.updateSwipeStack(step.id);
            }
        });

        this.updateTemplateVars();
    },

    // ── Swipe stack ───────────────────────────────────────────

    initSwipe(stepId) {
        if (!this.swipeData) this.swipeData = {};
        if (!this.swipeData[stepId]) this.swipeData[stepId] = { idx: 0 };

        const stack = document.getElementById(`swipe-stack-${stepId}`);
        if (!stack || stack._swipeReady) return;
        stack._swipeReady = true;

        let sx = 0, active = null;

        const topCard = () =>
            stack.querySelector(`.swipe-card[data-index="${this.swipeData[stepId].idx}"]`);

        stack.addEventListener('pointerdown', (e) => {
            if (e.target.closest('.swipe-btns')) return;
            active = topCard();
            if (!active) return;
            e.preventDefault();
            sx = e.clientX;
            active.setPointerCapture(e.pointerId);
            active.style.transition = 'none';
            active.classList.add('dragging');
        });

        stack.addEventListener('pointermove', (e) => {
            if (!active) return;
            const dx = e.clientX - sx;
            const dy = (e.clientY - (e.clientY)) * 0;
            active.style.transform = `translateX(${dx}px) rotate(${dx * 0.07}deg)`;
            active.querySelector('.swipe-like').classList.toggle('visible', dx > 50);
            active.querySelector('.swipe-nope').classList.toggle('visible', dx < -50);
        });

        const onEnd = (e) => {
            if (!active) return;
            const dx = e.clientX - sx;
            active.classList.remove('dragging');
            if (Math.abs(dx) > 80) {
                this.confirmSwipe(stepId, active, dx > 0);
            } else {
                active.style.transition = 'transform 0.3s ease';
                active.style.transform = '';
                active.querySelector('.swipe-like').classList.remove('visible');
                active.querySelector('.swipe-nope').classList.remove('visible');
            }
            active = null;
        };

        stack.addEventListener('pointerup', onEnd);
        stack.addEventListener('pointercancel', onEnd);
    },

    confirmSwipe(stepId, card, liked) {
        const step = STEPS.find(s => s.id === stepId);
        if (!this.answers[stepId]) this.answers[stepId] = {};
        this.answers[stepId][card.dataset.cardId] = liked;

        card.style.transition = 'transform 0.38s ease, opacity 0.28s ease';
        card.style.transform = `translateX(${liked ? '150%' : '-150%'}) rotate(${liked ? 25 : -25}deg)`;
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.querySelector('.swipe-like').classList.remove('visible');
        card.querySelector('.swipe-nope').classList.remove('visible');

        setTimeout(() => {
            card.classList.add('gone');
            this.swipeData[stepId].idx++;
            this.updateSwipeStack(stepId);
            this.updateNavBtns();
            if (this.swipeData[stepId].idx >= step.cards.length) {
                setTimeout(() => this.goNext(), 180);
            }
        }, 360);
    },

    resetSwipe(stepId) {
        const ROTS = [0, -2, 3, -1.5];
        delete this.answers[stepId];
        if (this.swipeData) delete this.swipeData[stepId];

        const stack = document.getElementById(`swipe-stack-${stepId}`);
        if (!stack) return;

        // Clone to remove all pointer event listeners
        const fresh = stack.cloneNode(true);
        stack.parentNode.replaceChild(fresh, stack);
        fresh._swipeReady = false;

        const cards = Array.from(fresh.querySelectorAll('.swipe-card'));
        cards.forEach((card, i) => {
            card.classList.remove('gone');
            card.removeAttribute('style');
            const scale = (1 - i * 0.04).toFixed(3);
            const rot = ROTS[i] || 0;
            card.style.zIndex = cards.length - i;
            card.style.transform = i === 0 ? 'none' : `scale(${scale}) translateY(${i * 10}px) rotate(${rot}deg)`;
        });
    },

    swipeCard(stepId, direction) {
        const stack = document.getElementById(`swipe-stack-${stepId}`);
        if (!stack) return;
        const idx = this.swipeData?.[stepId]?.idx ?? 0;
        const card = stack.querySelector(`.swipe-card[data-index="${idx}"]`);
        if (card) this.confirmSwipe(stepId, card, direction === 'like');
    },

    updateSwipeStack(stepId) {
        const ROTS = [0, -2, 3, -1.5];
        const stack = document.getElementById(`swipe-stack-${stepId}`);
        if (!stack) return;
        const remaining = Array.from(stack.querySelectorAll('.swipe-card:not(.gone)'));
        remaining.forEach((card, i) => {
            const scale = (1 - i * 0.04).toFixed(3);
            const rot = ROTS[i] || 0;
            card.style.transition = 'transform 0.3s ease';
            card.style.transform = i === 0 ? 'none' : `scale(${scale}) translateY(${i * 10}px) rotate(${rot}deg)`;
            card.style.zIndex = remaining.length - i;
            card.style.opacity = '1';
        });
    },

    // ── Rank (drag-to-reorder) ────────────────────────────────

    initRank(stepId) {
        const list = document.getElementById(`rank-list-${stepId}`);
        if (!list || list._rankReady) return;
        list._rankReady = true;

        let dragging = null, originY = 0, h = 0;

        const getItems = () => Array.from(list.children);

        list.addEventListener('pointerdown', e => {
            const item = e.target.closest('.rank-item');
            if (!item) return;
            e.preventDefault();
            dragging = item;
            originY = e.clientY;

            // Kill the entrance animation: its fill-mode 'both' keeps
            // transform:translateY(0) applied, which overrides our inline
            // drag transforms. Once cleared, inline transforms take effect.
            const all = getItems();
            all.forEach(el => { el.style.animation = 'none'; });

            // Measure slot height ONCE before any transforms are applied
            h = all.length >= 2
                ? all[1].getBoundingClientRect().top - all[0].getBoundingClientRect().top
                : all[0].getBoundingClientRect().height;

            dragging._to = all.indexOf(dragging);
            list.setPointerCapture(e.pointerId);
            item.classList.add('rank-dragging');
        });

        list.addEventListener('pointermove', e => {
            if (!dragging) return;
            const dy = e.clientY - originY;
            dragging.style.transform = `translateY(${dy}px)`;

            const all = getItems();
            const from = all.indexOf(dragging);
            const to = Math.max(0, Math.min(all.length - 1, from + Math.round(dy / h)));
            dragging._to = to;

            all.forEach((item, i) => {
                if (item === dragging) return;
                item.style.transition = 'transform 0.15s ease';
                item.style.transform =
                    i > from && i <= to ? `translateY(-${h}px)` :
                    i < from && i >= to ? `translateY(${h}px)` : '';
            });
        });

        const drop = () => {
            if (!dragging) return;
            const all = getItems();
            const from = all.indexOf(dragging);
            const to   = dragging._to ?? from;

            // FLIP – First: snapshot current visual positions
            const firstY = new Map(all.map(el => [el, el.getBoundingClientRect().top]));

            all.forEach(el => {
                el.style.transform  = '';
                el.style.transition = 'none';
                el.classList.remove('rank-dragging');
            });

            // DOM reorder
            const ref = to > from ? (all[to + 1] ?? null) : all[to];
            list.insertBefore(dragging, ref ?? null);

            // FLIP – Invert: push each item back to its visual "first" position
            const newAll = getItems();
            newAll.forEach(el => {
                const delta = (firstY.get(el) ?? 0) - el.getBoundingClientRect().top;
                if (Math.abs(delta) > 0.5) el.style.transform = `translateY(${delta}px)`;
            });

            // Force reflow so the browser paints the inverted positions
            list.getBoundingClientRect();

            // FLIP – Play: animate each item to its final DOM position
            newAll.forEach(el => {
                el.style.transition = 'transform 0.22s ease';
                el.style.transform  = '';
            });

            setTimeout(() => {
                newAll.forEach(el => { el.style.transition = ''; });
            }, 230);

            dragging = null;
        };

        list.addEventListener('pointerup',     drop);
        list.addEventListener('pointercancel', drop);
    },

    // ── Utils ─────────────────────────────────────────────────

    updateProgress() {
        const total = STEPS.length - 1;
        const pct   = total > 0 ? (this.current / total) * 100 : 0;
        this.progressBar.style.width = pct + '%';
    },

    // True when the current question is validly answered and the user may
    // advance. Every question is mandatory except those flagged
    // `required: false`. Terminal contact screens have their own submit
    // button, so the forward arrow is never an "advance" there.
    canAdvance() {
        const step = STEPS[this.current];

        if (step.type === 'contact' || step.type === 'contact-simple') return false;
        if (step.required === false) return true;

        switch (step.type) {
            // Always carry a valid value: sliders have a default, the rank
            // list starts pre-ordered.
            case 'slider':
            case 'stage-slider':
            case 'rank':
                return true;

            case 'couple-names': {
                const p1 = document.getElementById('input-partner1')?.value.trim();
                const p2 = document.getElementById('input-partner2')?.value.trim();
                return !!(p1 && p2);
            }

            case 'photo-choice':
                return !!this.container.querySelector('.slide.active .photo-option.selected');

            case 'card-choice':
                return !!this.container.querySelector('.slide.active .card-option.selected');

            // Complete only once every card has been swiped.
            case 'swipe-stack': {
                const swiped = this.answers[step.id] ? Object.keys(this.answers[step.id]).length : 0;
                return swiped >= step.cards.length;
            }

            case 'single-choice': {
                const sel = this.container.querySelector('.slide.active .choice-btn.selected');
                if (!sel) return false;
                if (sel.classList.contains('choice-btn--open'))
                    return !!document.getElementById(`open-${step.id}`)?.value.trim();
                return true;
            }

            case 'multi-choice':
                return !!this.container.querySelectorAll('.slide.active .choice-btn.selected').length;

            case 'text':
            case 'number':
            case 'date':
                return !!document.getElementById(`input-${step.id}`)?.value.trim();

            default:
                return true;
        }
    },

    updateNavBtns() {
        // Back: blocked only on the very first question.
        this.btnUp.disabled   = this.current === 0;
        // Forward: blocked until the current question is validly answered
        // (and always on terminal screens — canAdvance handles both).
        this.btnDown.disabled = !this.canAdvance();
    },

    questionIndex(stepIndex) {
        return STEPS.slice(0, stepIndex + 1).filter(
            s => s.type !== 'contact'
        ).length;
    },
};

window.addEventListener('DOMContentLoaded', () => Quiz.init());
