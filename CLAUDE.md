# UAUU Onboarding Quiz — CLAUDE.md

## Projecte
Quiz d'onboarding estil Typeform per UAUU Weddings & Events. Qualificació de leads per a 4 finques (Mas Vivencs, Castell de Tous, Ca n'Alzina, Can Macià). Sense frameworks, sense build step. HTML + CSS + JS vanilla. Mobile-first.

## Fitxers
- `index.html` — shell; formulari ocult CRM, reCAPTCHA, scripts
- `css/styles.css` — tot el CSS; variables de color a `:root`
- `js/quiz.js` — `STEPS[]` (config preguntes) + objecte `Quiz` (motor)
- `js/crm.js` — `submitToCRM()`, `buildDescription()`, callback reCAPTCHA
- `logos/` — UAUU.png + logos de les 4 finques
- `media/` — imatges (`.webp` al servidor `uauu.cat/media/onboarding/`)

## Colors de marca
```
--bg:      #faf9f8  (fons càlid)
--white:   #ffffff
--dark:    #302b29  (text, botons, selected)
--dark-70 / --dark-40 / --dark-15 / --dark-08  (opacitats)
```
Tipografies: `Ogg` (titulars) · `Inter` (tot the rest)

## Com afegir una pregunta
1. Afegir un objecte a `STEPS[]` a `js/quiz.js` amb `id`, `type`, `question` i els camps específics del tipus.
2. Afegir una línia a `buildDescription()` a `js/crm.js` per mapar la resposta al CRM.
3. Si cal lògica de desbloquejament especial, afegir un `case` a `canAdvance()`.

## Tipus de slide disponibles
| type | Descripció |
|---|---|
| `couple-names` | Dos inputs de text (noms parella) |
| `photo-choice` | Grid 2×2 de fotos clicables |
| `slider` | Rang numèric amb odòmetre animat |
| `card-choice` | Dues cards (dark/light) swipeable |
| `swipe-stack` | Stack de cards amb gest dreta/esquerra |
| `rank` | Llista arrossegable (drag-and-drop FLIP) |
| `single-choice` | Opcions A/B/C... (desktop: 2 columnes) |
| `multi-choice` | Igual però multi-selecció |
| `text` | Input de text lliure |
| `number` | Input numèric |
| `date` | Input de data |
| `contact` | Formulari complet (nom, cognom, email, tel) |
| `contact-simple` | Formulari mínim (email + tel) — pantalles de tancament |

Camps de config dels steps: `id`, `type`, `question`, `subtitle`, `options` / `items` / `cards`, `required` (default true), `manual` (avança amb fletxa, no auto), `btnLabel`, `placeholder`, `min`, `max`, `default`, `crmField`, `grid`.

## Opcions obertes (text lliure)
A `single-choice` i `multi-choice`, afegir `{ value: 'other', open: true }` a `options` per mostrar l'opció E amb icona de llapis i placeholder.

## Variables de plantilla
Usar `{{partner1}}` i `{{partner2}}` a `question` o `subtitle` per inserir els noms.

## Navegació
- `#btn-nav-up` / `#btn-nav-down` — sempre visibles, `disabled` controla l'estat
- `canAdvance()` — validació silenciosa per tipus de slide (totes les preguntes són obligatòries)
- `updateNavBtns()` — **ha de cridar-se DINS del doble `requestAnimationFrame`** after `.active` — no abans, o les queries `.slide.active .X.selected` retornen buit
- `contact` i `contact-simple` bloquegen sempre la fletxa avall (s'envien amb el seu propi botó)
- Browser back/forward interceptat via History API → navega entre slides, no surt de la pàgina

## Qualificació de leads (isQualified)
Un lead és "positiu" si `management === 'all-in-one'` i `guests >= 80`. En cas contrari va a `contact-negative`.

## Integració CRM
- **URL:** `https://crm.espaigastronomia.cat/index.php?entryPoint=WebToPersonCapture`
- **Camps directes:** `first_name`, `last_name`, `email1`, `phone_mobile`, `num_diners_c`, `idioma_contacto_c`
- **La resta de respostes** van al camp `description` via `buildDescription()` a `crm.js`
- Enviament via iframe ocult (evita redirect de pàgina)
- reCAPTCHA invisible sitekey: `6LdUgHksAAAAADiH1j0npMbw-eH-5EPywowWgFAb`
- Honeypot: `input[name="hp_website"]`

## Telèfon
Selector de país via **intl-tel-input v24** (CDN jsDelivr). S'inicialitza a `initPhoneField()` quan la slide es fa activa. `dropdownContainer: document.body` per evitar problemes de z-index amb `will-change` de les slides. `getNumber()` retorna el número en format E.164.

## Imatges
Totes al servidor: `https://uauu.cat/media/onboarding/[nom].webp`
Swipe cards: `https://uauu.cat/media/onboarding/swipe/[nom].webp`

## Patterns importants
- **Swipe stack reset:** en tornar enrere a P6, `resetSwipe()` clona el DOM per netejar tots els listeners de pointer
- **Rank drag-and-drop:** tècnica FLIP; `el.style.animation = 'none'` on pointerdown per eliminar interferències de `fill-mode: both`; `list.setPointerCapture` (no `item.setPointerCapture`); alçada dels slots mesurada UNA sola vegada al pointerdown
- **Odometer (slider):** intercanvi de dos elements amb transició CSS; gradients top/bottom via `::before`/`::after` sobre `overflow: hidden`
- **Pantalles de tancament** (`contact-positive`, `contact-negative`): card blanca amb `border-radius: 20px` i `box-shadow`; `overflow-y: auto` per seguretat en pantalles curtes

## Animació d'entrada slides
Cada slide té `will-change: opacity, transform` (crea stacking context). `fadeUp` escalonat via `nth-child` a les choices i items.

## Responsive
- `≤640px` — mobile: slides centrades verticalment, padding reduït, `btn-hint` ocult
- `≤380px` — mòbils molt petits: font i padding addicionals reduïts
- `≥768px` — desktop: `single-choice` i `rank` en layout 2 columnes (pregunta esquerra, contingut dreta)
- `max-height: 640px` — pantalles curtes: tot compactat
