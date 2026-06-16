// ─── Thank-you overlay ────────────────────────────────────────
function showThankYou() {
    const msgs = {
        ca: 'Mil gràcies per confiar en nosaltres, parella, en uns minuts rebreu la nostra proposta.',
        es: 'Mil gracias por confiar en nosotros, pareja, en unos minutos recibiréis nuestra propuesta.',
        en: 'Thank you so much for trusting us. In a few minutes you will receive our proposal.',
    };
    const lang    = (typeof Quiz !== 'undefined' && Quiz.lang) ? Quiz.lang : 'ca';
    const overlay = document.getElementById('thankyou-overlay');
    const msgEl   = document.getElementById('thankyou-msg');
    if (msgEl) msgEl.textContent = msgs[lang] || msgs.ca;
    if (overlay) requestAnimationFrame(() => overlay.classList.add('visible'));

    history.pushState({}, '', '/gracies');
    if (typeof fbq === 'function') fbq('track', 'Lead');
}

// ─── reCAPTCHA callback ───────────────────────────────────────
function onRecaptchaSuccess(token) {
    document.getElementById('crm-form').submit();
    showThankYou();
}

// ─── CRM submission ───────────────────────────────────────────
// Receives the accumulated quiz answers, maps them to CRM fields,
// and triggers the invisible reCAPTCHA to submit the form.
function submitToCRM(answers) {
    function set(id, value) {
        const el = document.getElementById('crm-' + id);
        if (el) el.value = value || '';
    }

    // Direct CRM fields
    set('first_name',   answers.first_name);
    set('last_name',    answers.last_name);
    set('email1',       answers.email1);
    set('phone_mobile', answers.phone_mobile);
    set('num_diners_c', answers.guests || answers.num_diners || '');

    // Language
    const langMap = { ca: 'catala', es: 'castella', en: 'angles' };
    set('idioma_contacto_c', langMap[answers.lang] || 'catala');

    // Compiled description from quiz answers
    set('description', buildDescription(answers));

    // Fire reCAPTCHA (calls onRecaptchaSuccess on success → form.submit())
    if (typeof grecaptcha !== 'undefined') {
        grecaptcha.execute();
    } else {
        // Fallback if reCAPTCHA hasn't loaded (dev/test)
        document.getElementById('crm-form').submit();
        showThankYou();
    }
}

// ─── Build description string ─────────────────────────────────
// Maps quiz answers to a readable text for the CRM description field.
// Add one line per quiz step as steps are added to STEPS in quiz.js.
function buildDescription(answers) {
    const lines = [];

    if (answers.partner1 && answers.partner2)
        lines.push(`Parella: ${answers.partner1} i ${answers.partner2}`);

    const vibeLabels = { romantic: 'Romàntic i íntim', festiu: 'Festiu i divertit', elegant: 'Elegant i sofisticat', petfriendly: 'Pet friendly' };
    if (answers.vibe) lines.push(`Ambient: ${vibeLabels[answers.vibe] || answers.vibe}`);

    const wordLabels = { senzill: 'Senzill', emotiu: 'Emotiu', elegant: 'Elegant', original: 'Original' };
    if (answers.word) lines.push(`Paraula: ${wordLabels[answers.word] || answers.word}`);
    if (answers.guests) lines.push(`Convidats: ${answers.guests}`);

    const managementLabels = { 'all-in-one': 'Un sol equip (tot inclòs)', separate: 'Gestió separada de proveïdors' };
    if (answers.management) lines.push(`Gestió: ${managementLabels[answers.management] || answers.management}`);

    if (answers['wedding-date']) lines.push(`Data aproximada: ${answers['wedding-date']}`);

    const stageLabels = [
        "Acabem de prometre'ns, estem explorant opcions",
        'Tenim data en ment i estem comparant espais',
        'Hem pres decisions i volem tancar-ho aviat',
        "Volem moure'ns ràpid, estem buscant activament",
    ];
    if (answers.stage) lines.push(`Punt del procés: ${stageLabels[answers.stage - 1] || answers.stage}`);

    if (answers.rank && Array.isArray(answers.rank)) {
        const rankLabels = { menjar: 'El menjar i el vi', ambient: "L'ambient i la festa", bellesa: "La bellesa i l'espai", moments: 'Els moments emotius' };
        const ranked = answers.rank.map((id, i) => `${i + 1}. ${rankLabels[id] || id}`).join(', ');
        lines.push(`Prioritats: ${ranked}`);
    }

    if (answers.preferences && typeof answers.preferences === 'object') {
        const prefLabels = { banquet: 'Banquet exterior', allotjament: 'Allotjament', cerimonia: 'Cerimònia', musica: 'Música en directe' };
        const liked  = Object.entries(answers.preferences).filter(([,v]) => v).map(([k]) => prefLabels[k] || k);
        const noped  = Object.entries(answers.preferences).filter(([,v]) => !v).map(([k]) => prefLabels[k] || k);
        if (liked.length) lines.push(`Preferències (sí): ${liked.join(', ')}`);
        if (noped.length) lines.push(`Preferències (no): ${noped.join(', ')}`);
    }

    return lines.filter(Boolean).join('\n');
}
