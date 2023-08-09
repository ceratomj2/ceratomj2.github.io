// burger click toggle
const burger = document.querySelectorAll('.burger'),
    navs = document.querySelectorAll('.mob.nav');

for (let i = 0; i < burger.length; i++) {
    burger[i].addEventListener('click', () => {
        burger[i].classList.toggle('active');
        navs[i].classList.toggle('active');
    });
}

//video manager
function loadVideos(videos, stIndex, col1, col2, cat) {
    //as input the videos array to put in the divs, the startIndex from where the divs must be added, and the two columns to add the innerHTML to those
    let output = [col1, col2];

    for (let i = stIndex; i < stIndex + 10; i++) {
        //if all videos are rendered, break
        if (videos.length == i || categories[cat].length == i) break;

        output[i % 2] +=
        `<div class="vid vid${i}">
            <img src="${videos[categories[cat][i]].thumbnail}" onclick="createIFrame('${videos[categories[cat][i]].url}')" loading="lazy">
            <div class="caption-txt" onclick="createIFrame('${videos[categories[cat][i]].url}')">
                <p>${videos[categories[cat][i]].caption}</p>
            </div>
        </div>`;
    }

    return output;
}

function isInCategory(cat, str) {
    if (cat == -1) return true; //"see all" category

    for (let i = 0; i < str.length; i++) {
        if (str[i] == cat) return true;
    }

    return false;
}

function loadPhotos(photos, stIndex, col1, col2, col3) {
    let output = [col1, col2, col3];


    for (let i = stIndex; i < stIndex + 9; i++) {
        if (photos.length == i) { break; }

        output[i % 3] +=
        `<div class="ph ph${i}">
            <img src="${photos[i].img}" id="img${i}" onclick="openImage('${photos[i].img}')" loading="lazy" draggable="false">
        </div>`;
    }

    return output;
}

function openImage(url) {
    let mouseOverImg;
    const IMG_DIV = document.querySelector('.open-img'),
        IMG = document.createElement('img'),
        TXT = document.createElement('p');

    IMG.src = url;
    if (IMG.naturalWidth / IMG.naturalHeight > window.innerWidth / window.innerHeight) {
        IMG.style.width = '84vw';
        TXT.style.width = '84vw';
    } else {
        IMG.style.height = '80vh';
        TXT.style.width = (window.innerHeight / 100 * 80) * (IMG.naturalWidth / IMG.naturalHeight) + 'px';
    }
    TXT.innerHTML = '↗ Apri nel Browser';
    IMG_DIV.style.display = 'block';
    IMG_DIV.append(TXT);
    IMG_DIV.append(IMG);

    IMG_DIV.onclick = () => {
        if (!mouseOverImg) {
            IMG_DIV.style.display = 'none';
            IMG_DIV.innerHTML = '';
        }
    }

    IMG.onmouseover = () => { mouseOverImg = true; }
    IMG.onmouseleave = () => { mouseOverImg = false; }
    TXT.onclick = () => { window.open(url); }
}

function createIFrame(url) {
    let div = document.createElement('div');
    div.className = 'iframe-container'; div.onclick = () => {
        document.querySelector('.iframe-container').classList.toggle('active');
        //remove iframes on click
        removeIFrames();
    };

    let el = document.createElement('iframe'); // is a node
    let width = document.body.scrollWidth;
    //ratio = .5625
    el.title = 'vimeo-player'; el.src = url; el.width = width * .65; el.height = width * .65 * .5625; el.allowFullscreen = true;
    el.style.border = 0;

    div.appendChild(el);
    document.body.appendChild(div);
    // <iframe title="vimeo-player" src="https://player.vimeo.com/video/381882573?h=bbbb33cb79" width="640" height="360" frameborder="0" allowfullscreen></iframe>
}

function removeIFrames() {
    document.querySelectorAll('iframe')
        .forEach(iframe => iframe.remove());
    document.querySelectorAll('.iframe-container')
        .forEach(iframe => iframe.remove());
}

//traduzione
const trad = [
    //{it: '', en: ''}
    {it: 'CHI SIAMO', en: 'ABOUT US'},
    {it: 'LAVORI', en: 'WORKS'},
    {it: 'CONTATTACI', en: 'CONTACT US'},
    {it: 'YourCreativeFilm è un team di creativi per i quali la parola d’ordine è solo una: eccellenza. La nostra forza? È semplice: condividere idee, pianificare, creare qualcosa che ti vestirà addosso come un abito su misura.',
        en: 'YourCreativeFilm is a team of creatives whose only watchword is excellence. Our strength? It\'s simple: sharing ideas, planning, creating something that will fit you like a tailor-made suit.'},
    {it: 'I più visti', en: 'Most viewed'},
    {it: 'VEDI ALTRI', en: 'VIEW MORE'},
    {it: 'I più recenti', en: 'Most recent'},
    {it: 'VEDI TUTTI I VIDEO', en: 'SEE ALL VIDEOS'},
    {it: 'Il nostro obiettivo', en: 'Our goal'},
    {it: 'Il goal di YourCreativeFilm è quello di sviluppare al meglio la tua identità visuale. Vogliamo raccontare la tua storia attraverso un film coinvolgente ed emozionante, con i migliori strumenti tecnologici disponibili sul mercato.',
        en: 'The goal of YourCreativeFilm is to develop your visual identity to its fullest potential. We aim to tell your story through a captivating and emotive film, using the best technological tools available in the market.'},
    {it: 'Fotografie', en: 'Photographs'},
    {it: 'APRI IMMAGINE', en: 'OPEN IMAGE'},
    {it: 'VEDI ALTRE', en: 'VIEW MORE'},
    {it: 'VEDI ALTRE FOTO', en: 'SEE MORE PHOTOS'},
    {it: 'Chi siamo', en: 'About Us'},
    {it: 'Il team di YourCreativeFilm a Venezia è specializzato nella produzione di video e film. Ci impegniamo per produrre prodotti di alta qualità e offriamo una vasta gamma di servizi tra cui riprese, montaggio e post-produzione. Siamo appassionati del nostro lavoro e ci dedichiamo a creare video coinvolgenti e stimolanti che raccontano la storia dei nostri clienti in modo efficace. Costantemente alla ricerca del miglioramento delle nostre abilità, siamo orgogliosi di essere professionisti nel nostro campo.',
        en: 'The YourCreativeFilm team in Venice specializes in video and film production. We strive to deliver high-quality products and offer a wide range of services including filming, editing, and post-production. We are passionate about our work and dedicated to creating engaging and impactful videos that effectively tell the story of our clients. Constantly seeking to improve our skills, we take pride in being professionals in our field.'},
    {it: 'Raccontaci la tua storia e sapremo tradurla in immagini in movimento utilizzando un linguaggio visuale moderno e accattivante, facendo del tuo film non solo qualcosa che racconta di te, ma anche qualcosa di unico, che ti farà brillare sul web. Che si tratti di un evento, di marketing, di un’artista, di un cortometraggio o di un wedding, sapremo seguirti dall’inizio alla fine di “YourCreativeFilm”.',
        en: 'Our team of experts will translate your story into captivating and visually stunning moving images using a modern and engaging visual language. Whether it\'s an event, marketing, an artist showcase, a short film, or a wedding, we will be there with you from start to finish at "YourCreativeFilm".'},
    {it: 'Contattaci...', en: 'Contact us...'},
    {it: '...o mandaci un messaggio', en: '...or send us a message'},
    {it: 'Nome (richiesto)', en: 'Name (required)'},
    {it: 'E-mail (richiesta)', en: 'E-main (required)'},
    {it: 'Messaggio', en: 'Message'},
    {it: 'INVIA', en: 'SEND'},
    {it: 'Shooting Fotografici', en: 'Photographic Shoots'},
    {it: 'Divisione Video e Films', en: 'Video and Films Division'},
    {it: 'Eccellenza creativa e innovazione', en: 'Creative excellence and innovation'},
    {it: 'Scopri la nostra missione e i servizi di qualità che offriamo per comunicare la tua storia.', en: 'Discover our mission and the quality services we offer to communicate your story.'},
    {it: 'Film e video making', en: 'Film and video making'},
    {it: 'Editing e montaggio', en: 'Editing and montage'},
    {it: 'Shooting fotografico', en: 'Photographic shooting'},
    {it: 'Servizi aggiuntivi', en: 'Additional services'},
    {it: 'Operatore Drone:', en: 'Drone Operator:'},
    {it: 'Parte integrante dell’opera cinematografica è vivere l’esperienza da un punto di vista insolito e unico. I nostri operatori drone vi faranno fare il salto di qualità che cercate, integrando il vostro film con del materiale stupefacente che lascerà tutti a bocca aperta. Servizio disponibile sia per riprese cinematografiche sia per rilevazioni tecniche di siti sensibili, quali edifici, cantieri, aree altrimenti inaccessibili.',
    en: 'An integral part of the cinematic experience is to live it from an unusual and unique perspective. Our drone operators will elevate your film to the level of excellence you seek by integrating stunning footage that will leave everyone in awe. Our services are available for both cinematic shoots and technical surveys of sensitive sites, such as buildings, construction sites, and otherwise inaccessible areas.'},
    {it: 'Scouting locations:', en: 'Scouting locations:'},
    {it: 'L’esperienza accumulata nel corso degli anni ci aiuta a trovare la giusta location per il tuo film.', en: 'The experience we have accumulated over the years helps us find the right location for your film.'},
    {it: 'Vuoi integrare delle infografiche animate all’interno del tuo film? Ci avvaliamo di artisti del settore di motion graphic che sapranno rendere ancora più unico il tuo film.', en: 'Do you want to integrate animated infographics into your film? We collaborate with motion graphic artists who specialize in this field and can make your film even more unique.'},
    {it: 'Non solo film. I nostri partner fotografi professionisti forniranno il miglior servizio fotografico possibile per il tuo evento e le tue necessità.', en: 'Not only films. Our partner professional photographers will provide the best possible photographic service for your event and your needs.'},
    {it: 'YourCreativeFilm è un team di creativi con una sola parola d’ordine:', en: 'YourCreativeFilm is a team of creatives with one motto:'},
    {it: 'eccellenza.', en: 'excellence.'},
    {it: 'CARICA ALTRI', en: 'LOAD MORE'},
    {it: 'FOTOGRAFIE', en: 'PHOTOGRAPHS'},
    {it: 'CARICA ALTRE', en: 'LOAD MORE'}
];

function translate(ita) {
    const body = document.body.getElementsByTagName("*");
    if (!parseInt(ita)) {
        //translate from italian to english
        localStorage.setItem("lang", 0);
        for (let i = 0; i < body.length; i++) {
            for (let j = 0; j < trad.length; j++) {
                if (body[i].innerHTML == trad[j].it) {
                    body[i].innerHTML = trad[j].en;
                    break;
                }
        
                //for placeholders
                if (body[i].getAttribute('placeholder') == trad[j].it) {
                    body[i].placeholder = trad[j].en;
                    break;
                }
            }
        }
    } else {
        //translate from english to italian
        localStorage.setItem("lang", 1);
        for (let i = 0; i < body.length; i++) {
            for (let j = 0; j < trad.length; j++) {
                if (body[i].innerHTML == trad[j].en) {
                    body[i].innerHTML = trad[j].it;
                    break;
                }
        
                //for placeholders
                if (body[i].getAttribute('placeholder') == trad[j].en) {
                    body[i].placeholder = trad[j].it;
                    break;
                }
            }
        }
    }
}

//send mail on contact form send
(function(){emailjs.init("RGsXWjSpSWI_-jAAi");})();

function sendMail(name, email, message) {
    const SERVICE_ID = "service_v7943h4",
        TEMPLATE = "template_0mmkh9g";
        
    emailjs.send(SERVICE_ID, TEMPLATE, {name: name, email: email, message: message});
}

//scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
});

let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));