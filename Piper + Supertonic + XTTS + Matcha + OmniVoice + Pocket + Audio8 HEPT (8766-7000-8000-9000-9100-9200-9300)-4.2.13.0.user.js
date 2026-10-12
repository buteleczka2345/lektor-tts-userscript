// ==UserScript==
// @name        Piper + Supertonic + XTTS + Matcha + OmniVoice + Pocket + Audio8 HEPT (8766/7000/8000/9000/9100/9200/9300)
// @namespace   http://tampermonkey.net/
// @version     4.2.13.0
// @description v4.2.13.0: ⬇ „Całe napisy” NA ŻĄDANIE (przycisk w panelu, każda strona z filmem) — bez kliknięcia lektor czyta w locie i NIC nie pobiera; automat YouTube i pełne napisy Netflixa przy LIVE domyślnie WYŁ.; 🔋 oszczędzanie energii: karta w tle i strony bez filmu nic nie skanują, Shadow DOM buforowany co 2 s, wyłączony lektor = zero pracy. v4.2.12.0: 🌐 port opcji z rozszerzenia „Lektor Google RPC” — tłumaczenie sieciowe (Google gtx+RPC / Bing+batch / DeepL / AI / rotacja), Łowca napisów + bazy (OpenSubtitles / SubDL), 🤖 AI Subtitle Translator — w ⚙️ Ustawieniach, domyślnie WYŁ. (silnik „lokalny”). v4.2.11.3: 🛠️ „Panel lektora” z menu Tampermonkey nie znika już zaraz po pokazaniu (pozycja menu rejestrowana tylko w głównej ramce strony). v4.2.11.2: 🔊 mały półprzezroczysty głośniczek na odtwarzaczu YouTube (także m.youtube, Shorts, Music, embed) — jednym kliknięciem całkowicie wyłącza albo włącza lektora. v4.2.11.1: 👁️ cały panel można ukryć przyciskiem ✖ i przywrócić z menu Tampermonkey; w menu Tampermonkey została JEDNA pozycja „Panel lektora” (reszta jest w panelu i w Ustawieniach), stan wspólny dla wszystkich kart. v4.2.11: 🔇➡️🔊 LIVE na wolnych silnikach (Pocket/Audio8/XTTS/OmniVoice): naprawiono „powie 2–3 kwestie, bufor rośnie, a lektor milczy” — generator gubił kwestie przy skracaniu kolejki i lektor czekał na nagranie, którego nikt nie liczył; strażnik wybudza generator; suwak bufora przy pełnych napisach Netflixa nie odsuwa już całej kolejki. v4.2.3: 🚀 Hybryda/„Od razu” na Netflixie ładuje CAŁY film — czeka na pełne napisy z manifestu (do ~8 s), nigdy nie zadowala się niepełnymi cue’ami z odtwarzacza bez ostrzeżenia, wykrywa i odrzuca niepełny zapis w pamięci (cache), pokazuje ile kwestii i do której minuty pobrano. v4.2.2: 🔊 naprawiono ciszę lektora przy przyspieszonym filmie (1.5×) — czas startu kwestii liczony PO rozciągnięciu (wcześniej stary, więc kwestie kończyły się „w locie” i nakładały), kontrola jakości rozciągniętego dźwięku z automatycznym awaryjnym powrotem, diagnostyka tempa w panelu i konsoli, pauza nie wyzwala się fałszywie tuż po zmianie prędkości filmu. v4.2.1: ⏸️ pauza filmu (Netflix i inne) zatrzymuje też lektora i bufor LIVE — wznowienie dogrywa od miejsca, w którym stanęło; 🎤 przy przyspieszonym filmie (np. 1.5×) głos lektora NIE jest już piskliwy — tempo zmieniane z zachowaniem wysokości (WSOLA). Jeden skrypt, siedem silników TTS: ⚡ Piper (8766), 🔊 Supertonic (7000), 🧬 XTTS (8000), 🍵 Matcha PL (9000), 🌍 OmniVoice (9100), 🥔 Pocket PL (9200), 🎛️ Audio8 ONNX (9300). v3.6: ⏳ BUFOR LIVE 0–120 min (lektor z zapasem — zero zastoju, np. Netflix), ▶️ „Zapas teraz" (pomija bufor), 🗄️ trwałe nagrania bufora w IndexedDB z zarządzaniem (odsłuch/usuwanie), 🎚️ strzałki przesunięcia lektora ±1s/±100ms, SYNC Hybryda/Od razu/Plik/Cache, LIVE 5 trybów skanowania, Audio Focus, PL dubbing, audiobook (zakładka/nagrywanie WAV-MP3), Kreator napisów, eksport/import. v3.6.6: 🖱️ naprawiono przeciąganie zwiniętego panelu (małego kwadracika), 🎬 naprawiono znikanie/brak reakcji panelu w trybie pełnoekranowym wideo (YouTube i inne). v3.6.7: 🧹 usunięto pozostałość starych przycisków przy stanie WYŁĄCZONYM lektora. v3.6.8: 🌐 ON/OFF lektora teraz WSPÓLNE dla wszystkich stron (jeden przełącznik). v3.6.9: 📍 naprawiono "skakanie" panelu przy zwijaniu/rozwijaniu i zmianie skali — kwadracik zostaje dokładnie w tym samym miejscu. v3.6.10: ⏳🎯 naprawiono synchronizację bufora LIVE — pauza filmu zatrzymuje teraz zegar bufora (bez „przeterminowanej” kolejki po wciśnięciu play), a przewinięcie do przodu/tyłu czyści zaległe kwestie i dosynchronizowuje lektora do nowej pozycji zamiast puszczać stare kwestie nie po kolei. v3.6.11: 🛠️ naprawiono fałszywe resetowanie bufora LIVE na Netflixie (i podobnych) — wykrywanie przewinięcia oparte teraz o realny skok czasu wideo, a nie samo zdarzenie \"seeking\", które potrafiło odpalać się samoczynnie i blokować lektora. v3.6.12: 🐢➡️🐇 naprawiono ciągłe zerowanie bufora LIVE przez zbyt sztywny próg wykrywania przewinięcia (bufor rósł tylko do jednego zdania i się zatrzymywał) — teraz próg jest dynamiczny, dopasowany do realnie upływającego czasu, a nasłuch działa tylko na głównym wideo. v3.6.13: 🔎🛠️ wykrywanie przewinięcia oparte teraz o własny, stały zegar (1s) zamiast zawodnego zdarzenia przeglądarki, mniej czułe na drobne korekty odtwarzacza; dodano WIDOCZNE komunikaty błędów generowania kolejnych kwestii i informację o wykrytym resyncu, żeby było widać co się faktycznie dzieje. v3.6.15: bufor od biezacego momentu (suwak restartuje odliczanie), podmiana wideo (nowy odcinek) czysci zalegly zapas jak przewiniecie, straznik co 5 s wybudza utknieta kolejke, natywne napisy Netflixa z fallbackiem na textContent. v3.7.1: 🛑🔁 tryb Hybryda (syncTick) — naprawiono powtarzanie ostatnich kwestii po zatrzymaniu/zacięciu się filmu: wykrywanie przewinięcia oparte teraz (tak jak w buforze LIVE) o relację między realnym upływem czasu a przesunięciem currentTime, zamiast sztywnego progu 2s, który fałszywie odpalał reset przy zwykłym buforowaniu i po dogonieniu odtwarzania powodował ponowne odczytanie ostatnich linii. v3.7.2: 🧲⬆️ panel GŁÓWNY (mini pasek) przepięty na kotwiczenie WYŁĄCZNIE przez right/bottom (tak jak w Piper SOLO) — kwadracik zostaje w tym samym miejscu przy zwijaniu/rozwijaniu/skalowaniu i przeciąganiu (bez przełączania się na left/top), panel po rozwinięciu wyrasta teraz W GÓRĘ i W LEWO znad kwadracika (zamiast w dół), a stare "domykanie do ekranu" przestawiające pozycję boxa zastąpiono wewnętrznym przewijaniem panelu, żeby nic nigdy nie przesuwało kwadracika. v3.7.3: 🎧 naprawiono gubienie wyrazów/kwestii w LIVE (wyścig dekodowania audio w ścieżce ciągłej; dekodowanie było też błędnie wywoływane na Promise). v4.2.0: 📺 Netflix — hak z „Netflix subtitle downloader" (wymuszenie profili napisów w manifeście, mapowanie odcinka, zapasowe URL-e), napisy bieżącego odcinka pobierane i BUFOROWANE z wyprzedzeniem, WebVTT preferowany przed IMSC, obsługa znaczników czasu „t" w IMSC, automatyczna zmiana odcinka w trybie LIVE.
// @author      Fix / Asystent
// @match       *://*/*
// @connect     127.0.0.1
// @connect     localhost
// @connect     translate.googleapis.com
// @connect     translate.google.com
// @connect     edge.microsoft.com
// @connect     api.cometapi.com
// @connect     oneshot-free.www.deepl.com
// @connect     rest.opensubtitles.org
// @connect     api.opensubtitles.com
// @connect     api.subdl.com
// @connect     dl.subdl.com
// @connect     dl.opensubtitles.org
// @connect     opensubtitles.org
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_addValueChangeListener
// @grant       GM_registerMenuCommand
// @grant       GM_xmlhttpRequest
// @grant       GM_openInTab
// @require     https://cdn.jsdelivr.net/npm/lamejs@1.2.0/lame.min.js
// @run-at      document-start
// ==/UserScript==

(function () {
    'use strict';

    if (window.__PIPER_SUPERTRONIC_DUO_RUNNING__) {
        console.warn('[DUO] Skrypt jest już uruchomiony na tej stronie.');
        return;
    }
    window.__PIPER_SUPERTRONIC_DUO_RUNNING__ = true;

    // ============================================================
    // --- OCHRONA PISANIA W POLACH PANELU ---
    // Wiele stron (zwłaszcza z odtwarzaczem wideo) nasłuchuje klawiszy
    // globalnie (spacja=play/pauza, strzałki=przewijanie, litery=skróty)
    // i przechwytuje je jeszcze zanim dotrą do naszego pola tekstowego —
    // przez co pisanie w panelu "nie działa", mimo że w konsoli/terminalu
    // ten sam tekst działa normalnie (bo tam nie ma żadnych skrótów strony).
    // Rejestrujemy nasłuch JAK NAJWCZEŚNIEJ (script działa od document-start)
    // w fazie przechwytywania (capture) na window, żeby zdążyć PRZED
    // skryptami samej strony i zablokować im dalsze przetwarzanie zdarzenia,
    // gdy pisanie odbywa się w jednym z naszych pól (prefiks id "duo-").
    // ============================================================
    ['keydown', 'keyup', 'keypress'].forEach((evtName) => {
        window.addEventListener(evtName, (e) => {
            const path = typeof e.composedPath === 'function' ? e.composedPath() : [];
            const realTarget = path.length ? path[0] : e.target;
            if (realTarget && realTarget.id && String(realTarget.id).indexOf('duo-') === 0) {
                e.stopImmediatePropagation();
            }
        }, true);
    });

    // ============================================================
    // --- SILNIKI ---
    // ============================================================
    const ENGINES = {
        piper: {
            id: 'piper', name: '⚡ Piper',
            wsUrl: 'ws://127.0.0.1:8766', httpBase: 'http://127.0.0.1:8767',
            voices: [
                { id: 'jarvis', name: 'Jarvis (M)' }, { id: 'gosia', name: 'Gosia (Ż)' },
                { id: 'bass', name: 'Bass (M)' }, { id: 'justyna', name: 'Justyna (Ż)' },
                { id: 'meski', name: 'Męski WG' }, { id: 'zenski', name: 'Żeński WG' }
            ],
            defaultVoice: 'jarvis', maxSpeed: 2.5
        },
        supertonic: {
            id: 'supertonic', name: '🔊 Supertonic',
            wsUrl: 'ws://127.0.0.1:7000', httpBase: 'http://127.0.0.1:7001',
            voices: [
                { id: 'gosia', name: 'Gosia (Ż)' }, { id: 'justyna', name: 'Justyna (Ż)' },
                { id: 'zenski', name: 'Żeński WG' }, { id: 'jarvis', name: 'Jarvis (M)' },
                { id: 'bass', name: 'Bass (M)' }, { id: 'bass_bb', name: 'Bass BB / Diuna (M)' },
                { id: 'meski', name: 'Męski WG' }
            ],
            defaultVoice: 'gosia', maxSpeed: 2.5
        },
        xtts: {
            id: 'xtts', name: '🧬 XTTS',
            wsUrl: 'ws://127.0.0.1:8000', httpBase: 'http://127.0.0.1:8001',
            voices: [
                { id: 'gosia', name: 'Gosia (Ż)' }, { id: 'jarvis', name: 'Jarvis (M)' },
                { id: 'bass', name: 'Bass (M)' }, { id: 'justyna', name: 'Justyna (Ż)' },
                { id: 'meski', name: 'Męski WG' }, { id: 'zenski', name: 'Żeński WG' }
            ],
            defaultVoice: 'gosia', maxSpeed: 2.0,
            // XTTS (Coqui) liczy kwestie 1-3 s, a przy dluzszych nawet wiecej -
            // domyslne 10 s potrafiło ucinac poprawnie liczone zdania (timeout,
            // a nie blad serwera). Serwer i tak liczy JEDNA kwestie naraz.
            replyTimeoutMs: 30000
        },
        matcha: {
            id: 'matcha', name: '🍵 Matcha PL',
            wsUrl: 'ws://127.0.0.1:9000', httpBase: 'http://127.0.0.1:9001',
            voices: [
                { id: 'synthetic', name: 'Mieszanka 1 (domyślna)' },
                { id: 'synthetic2', name: 'Mieszanka 2' },
                { id: 'synthetic3', name: 'Mieszanka 3' },
                { id: 'synthetic4', name: 'Mieszanka 4 (żeńska)' },
                { id: 'synthetic5', name: 'Mieszanka 5' },
                { id: '0', name: 'Bartosz Bielenia (M)' },
                { id: '1', name: 'Katarzyna Faszczewska (Ż)' },
                { id: '2', name: 'Wojciech Masiak (M)' },
                { id: '3', name: 'Bartosz Głogowski (M)' },
                { id: '4', name: 'Jan Staszczyk (M)' },
                { id: '5', name: 'Marek Proszek (M)' },
                { id: '6', name: 'Piotr Kopa (M)' },
                { id: '7', name: 'Radosław Krzyżowski (M)' },
                { id: '8', name: 'Andrzej Seweryn (M)' },
                { id: '9', name: 'Magdalena Gaweł (Ż)' },
                { id: '13', name: 'Joanna Domańska (Ż)' },
                { id: '0.5*6+0.5*3', name: 'Mieszanka własna (Kopa+Głogowski)' }
            ],
            defaultVoice: 'synthetic', maxSpeed: 2.5
        },
        omnivoice: {
            id: 'omnivoice', name: '🌍 OmniVoice',
            wsUrl: 'ws://127.0.0.1:9100', httpBase: 'http://127.0.0.1:9101',
            // OmniVoice nie ma gotowych glosow - glos opisuje sie slowami
            // kluczowymi (instruct), wiec kazde "id" to taki opis.
            // Pusty id = model sam dobiera losowy glos.
            voices: [
                { id: 'male, young adult, moderate pitch', name: 'Męski · młody · neutralny' },
                { id: 'male, middle-aged, low pitch', name: 'Męski · dojrzały · niski' },
                { id: 'male, middle-aged, moderate pitch', name: 'Męski · dojrzały · neutralny' },
                { id: 'male, elderly, moderate pitch', name: 'Męski · starszy · neutralny' },
                { id: 'female, young adult, moderate pitch', name: 'Żeński · młody · neutralny' },
                { id: 'female, middle-aged, moderate pitch', name: 'Żeński · dojrzały · neutralny' },
                { id: 'female, young adult, high pitch', name: 'Żeński · młody · wysoki' },
                { id: 'female, elderly, moderate pitch', name: 'Żeński · starszy · neutralny' },
                { id: 'child, moderate pitch', name: 'Dziecko' },
                { id: 'teenager, moderate pitch', name: 'Nastolatek' },
                { id: 'male, young adult, moderate pitch, whisper', name: 'Męski · szept' },
                { id: 'male, young adult, moderate pitch, british accent', name: 'Męski · brytyjski akcent' },
                { id: 'female, young adult, moderate pitch, american accent', name: 'Żeński · amerykański akcent' },
                { id: 'male, young adult, very high pitch', name: 'Męski · bardzo wysoki (test)' },
                { id: '', name: 'Losowy (opisuje model)' }
            ],
            defaultVoice: 'male, young adult, moderate pitch', maxSpeed: 2.0,
            // OmniVoice liczy wolno (RTF ~1 na RTX 3050): dluzsza kwestia potrafi
            // liczyc sie 10-30 s, a domyslne 10 s skryptu ucinalo ja timeoutem
            // (mimo ze serwer pracowal poprawnie) - stad "bufor leci, glosu nie ma".
            replyTimeoutMs: 120000
        },
        pocket: {
            id: 'pocket', name: '🥔 Pocket PL',
            wsUrl: 'ws://127.0.0.1:9200', httpBase: 'http://127.0.0.1:9201',
            // Pocket-TTS klonuje glos z krotkiego nagrania. Kazdy "id"
            // wskazuje plik .wav z katalogu serwera (patrz VOICES w serwerze).
            // "ref" = probka glosu dolaczona do modelu na HuggingFace.
            voices: [
                { id: 'ref', name: 'Głos referencyjny (z repozytorium)' },
                { id: 'mojglos', name: 'Mój własny głos' },
                // --- Głosy z katalogu glosy\ (serwer) ---
                { id: 'brzustynski', name: 'Jacek Brzostyński' },
                { id: 'brzustynski4', name: 'Jacek Brzostyński (próbka 4)' },
                { id: 'brzustynski5', name: 'Jacek Brzostyński (próbka 5)' },
                { id: 'jacek2', name: 'Jacek (próbka 2)' },
                { id: 'alekpawlikowski', name: 'Alek Pawlikowski' },
                { id: 'marcin', name: 'Marcin' },
                { id: 'piotr', name: 'Piotr' },
                { id: 'lukasz', name: 'Łukasz' },
                { id: 'ferenc', name: 'Ferenc' },
                { id: 'luko', name: 'Lektor LU.KO' },
                { id: 'probka2026', name: 'Próbka 2026 (stereo 44,1 kHz)' },
                { id: 'probka202609', name: 'Próbka 2026-09' }
            ],
            defaultVoice: 'ref', maxSpeed: 2.5, replyTimeoutMs: 120000
        },
        audio8: {
            id: 'audio8', name: '🎛️ Audio8 ONNX',
            wsUrl: 'ws://127.0.0.1:9300', httpBase: 'http://127.0.0.1:9301',
            // Audio8 klonuje glos z nagrania (rejestracja przez dodaj_glos.py).
            // Kazdy "id" musi zgadzac sie z katalogiem `voices` po stronie serwera.
            // "default" = glos referencyjny dolaczony do modelu.
            voices: [
                { id: 'default', name: 'Głos referencyjny (z modelu)' }
            ],
            defaultVoice: 'default', maxSpeed: 2.5,
            // Audio8 jest bardzo wolne (RTF 3,7-5,0 na CPU) - jedno zdanie
            // potrafi trwac 10-20 s, a dłuższa kwestia nawet kilka minut.
            // Domyślne 10 s skryptu dawało timeout przy każdym zdaniu.
            replyTimeoutMs: 300000
        }
    };
    const ENGINE_ORDER = ['piper', 'supertonic', 'xtts', 'matcha', 'omnivoice', 'pocket', 'audio8'];
    function nextEngineId(fromId) {
        const idx = ENGINE_ORDER.indexOf(fromId);
        return ENGINE_ORDER[(idx + 1) % ENGINE_ORDER.length] || 'piper';
    }

    const SCRIPT_VERSION = '4.2.12.0';
    const PARALLEL_WORKERS = 8;

    // Token stylu dla Matcha-TTS-PL (0-17). -1 = bez tokenu stylu.
    // Styl to dodatkowy embedding dodawany do embeddingu głosu: zmienia
    // rozpiętość wysokości (flat/mid/wide), tempo (slow/normal/fast) i daje
    // rosnącą końcówkę dla pytań. Neutralny = 8, pytania = 9/15.
    const MATCHA_STYLES = [
        'bez stylu', 'flat · slow', 'flat · slow · pyt.', 'flat · normal', 'flat · normal · pyt.',
        'flat · fast', 'flat · fast · pyt.', 'mid · slow', 'mid · slow · pyt.', 'mid · normal',
        'mid · normal · pyt.', 'mid · fast', 'mid · fast · pyt.', 'wide · slow', 'wide · slow · pyt.',
        'wide · normal', 'wide · normal · pyt.', 'wide · fast', 'wide · fast · pyt.'
    ];
    let matchaStyle = parseInt(localStorage.getItem('duo_MatchaStyle'), 10);
    if (isNaN(matchaStyle)) matchaStyle = -1;
    if (matchaStyle < -1 || matchaStyle > 17) matchaStyle = -1;
    function saveMatchaStyle() { try { localStorage.setItem('duo_MatchaStyle', String(matchaStyle)); } catch (e) {} }

    // ============================================================
    // --- FIX: obsługa trybu pełnoekranowego (Fullscreen API) ---
    // Gdy film jest na pełnym ekranie (np. YouTube po klawiszu F),
    // przeglądarka renderuje WYŁĄCZNIE element w trybie fullscreen
    // i jego potomków — wszystko inne dołączone bezpośrednio do
    // <body> (nasz panel, okno ustawień, napisy, itd.) staje się
    // niewidoczne i nieklikalne. Dlatego po wejściu w fullscreen
    // "przenosimy" nasze elementy do wnętrza elementu pełnoekranowego,
    // a po wyjściu — z powrotem do <body>.
    // ============================================================
    const DUO_FLOATING_IDS = [
        'duo-ui-box', 'duo-caption-overlay', 'duo-cache-panel', 'duo-filter-panel',
        'duo-custom-panel', 'duo-spoken-panel', 'duo-pick-overlay', 'duo-pick-banner',
        'duo-prof-results', 'duo-settings-host', 'duo-yt-speaker'
    ];
    function getFullscreenEl() {
        return document.fullscreenElement || document.webkitFullscreenElement ||
               document.mozFullScreenElement || document.msFullscreenElement || null;
    }
    function reparentDuoUI() {
        const target = getFullscreenEl() || document.body;
        if (!target) return;
        DUO_FLOATING_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el && el.parentNode !== target) {
                try { target.appendChild(el); } catch (e) {}
            }
        });
    }
    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange']
        .forEach((evt) => document.addEventListener(evt, reparentDuoUI));

    let currentEngineId = localStorage.getItem('duo_Engine') || 'piper';
    if (!ENGINES[currentEngineId]) currentEngineId = 'piper';
    function getEngine() { return ENGINES[currentEngineId]; }

    let selectedVoice = localStorage.getItem('duo_Voice_' + currentEngineId) || getEngine().defaultVoice;
    function validateVoiceForEngine() {
        const ids = getEngine().voices.map(v => v.id);
        if (!ids.includes(selectedVoice)) {
            selectedVoice = getEngine().defaultVoice;
            localStorage.setItem('duo_Voice_' + currentEngineId, selectedVoice);
        }
    }
    validateVoiceForEngine();

    function switchEngine(newId) {
        if (!ENGINES[newId] || newId === currentEngineId) return;
        stopLektor();
        if (imtLektorEnabled) toggleImmersiveLektor();
        stopCustomReading(true);
        if (wsSocket) { try { wsSocket.close(); } catch (e) {} wsSocket = null; }
        currentEngineId = newId;
        localStorage.setItem('duo_Engine', newId);
        selectedVoice = localStorage.getItem('duo_Voice_' + newId) || getEngine().defaultVoice;
        validateVoiceForEngine();
        connectWebSocket();
        ensureUI();
        setPrepareStatus(getEngine().name + ' — silnik przełączony (głos: ' + selectedVoice + ')');
    }

    let SPEECH_RATE = parseFloat(localStorage.getItem('duo_SpeechRate'));
    if (isNaN(SPEECH_RATE)) SPEECH_RATE = 1.3;
    function saveSpeechRate() { localStorage.setItem('duo_SpeechRate', String(SPEECH_RATE)); }

    const VIDEO_VOLUME = 1.0;
    let duckVolume = parseFloat(localStorage.getItem('duo_DuckVolume'));
    if (isNaN(duckVolume)) duckVolume = 0.15;

    const SPEECH_GAIN_MIN = 0.5;
    const SPEECH_GAIN_MAX = 2.0; // rozsądny sufit "turbo boostu" — wyżej ryzyko przesteru/warczenia
    let speechGain = parseFloat(localStorage.getItem('duo_SpeechGain'));
    if (isNaN(speechGain)) speechGain = 1.0;
    speechGain = Math.max(SPEECH_GAIN_MIN, Math.min(SPEECH_GAIN_MAX, speechGain));
    let compressorEnabled = localStorage.getItem('duo_Compressor') === 'true';
    function applySpeechGain(v) {
        speechGain = Math.max(SPEECH_GAIN_MIN, Math.min(SPEECH_GAIN_MAX, v));
        localStorage.setItem('duo_SpeechGain', String(speechGain));
        // powyżej 100% włącz automatycznie kompresor anty-trzask, żeby "turbo" nie warczało
        if (speechGain > 1.0 && !compressorEnabled) {
            compressorEnabled = true;
            localStorage.setItem('duo_Compressor', 'true');
            buildAudioChain();
        } else if (masterGain) {
            try { masterGain.gain.value = speechGain; } catch (e) {}
        }
    }

    // ============================================================
    // --- KROKI GENEROWANIA (Supertonic total_steps) ---
    // ============================================================
    let synthSteps = parseInt(localStorage.getItem('duo_SynthSteps'), 10);
    if (isNaN(synthSteps)) synthSteps = 8;
    let dynamicSteps = localStorage.getItem('duo_DynamicSteps') !== 'false';

    let speechGap = parseFloat(localStorage.getItem('duo_SpeechGap'));
    if (isNaN(speechGap)) speechGap = 0.15;
    function saveSpeechGap() { localStorage.setItem('duo_SpeechGap', String(speechGap)); }
    function pickStepsForText(text) {
        if (!dynamicSteps) return synthSteps;
        const len = (text || '').length;
        if (len <= 180) return 6;
        return 10;
    }

    // ============================================================
    // --- v3.6: BUFOR LIVE (0..120 min) + PRZESUNIĘCIE AUDIO + NAGRANIA ---
    // ============================================================
    let liveDelayMin = parseFloat(localStorage.getItem('duo_LiveDelayMin'));
    if (isNaN(liveDelayMin) || liveDelayMin < 0) liveDelayMin = 0;
    function saveLiveDelayMin() { localStorage.setItem('duo_LiveDelayMin', String(liveDelayMin)); }

    let audioOffsetMs = parseInt(localStorage.getItem('duo_AudioOffsetMs'), 10);
    if (isNaN(audioOffsetMs)) audioOffsetMs = 0;
    function saveAudioOffsetMs() { localStorage.setItem('duo_AudioOffsetMs', String(audioOffsetMs)); }
    function clampOffset() { audioOffsetMs = Math.max(-60000, Math.min(60000, audioOffsetMs)); }
    // Skuteczne opóźnienie czytania w LIVE = bufor + offset (nigdy < 0)
    function getEffectiveDelaySec() { return Math.max(0, liveDelayMin * 60 + audioOffsetMs / 1000); }

    let imtDelayTimer = null;
    function scheduleImmersivePlay() {
        if (imtDelayTimer) { clearTimeout(imtDelayTimer); imtDelayTimer = null; }
        if (!imtLektorEnabled || !imtQueue.length || imtSpeaking) return;
        const item = imtQueue[0];
        if (!item.ready || !item.audio) return;
        const waitMs = (item.addedAt || 0) + getEffectiveDelaySec() * 1000 - Date.now();
        if (waitMs > 0) {
            const ahead = imtQueue.filter(x => x.ready && !x.failed).length;
            const el = document.getElementById('duo-now-reading');
            if (el) el.textContent = '⏳ Bufor: start za ' + (waitMs > 90000
                ? Math.ceil(waitMs / 60000) + ' min'
                : Math.ceil(waitMs / 1000) + ' s') + ' (gotowych: ' + ahead + ')';
            imtDelayTimer = setTimeout(() => { imtDelayTimer = null; playNextImmersive(); }, Math.max(0, waitMs + 50));
        } else {
            // v3.6.14: bufor 0 / kwestia dojrzala i gotowa -> graj od razu.
            // Wczesniej ten branch nie istnial i zapadala cisza az do nastepnej kwestii.
            playNextImmersive();
        }
    }
    // ▶️ Zapas teraz — pomija bufor: wszystko gotowe gra natychmiast.
    // v4.2.8: twardy reset stanu odtwarzania przed startem. Wczesniej flush tylko
    // przesuwal addedAt i wolal playNextImmersive() - ale jesli imtSpeaking utknal
    // na true (zgubiony finish) albo imtPauseHold zostal po pauzie, playNext
    // wychodzil na pierwszym guardzie i przycisk "umieral" (cisza po kliknieciu).
    function flushImmersiveBuffer() {
        if (!imtLektorEnabled) { setPrepareStatus('ℹ️ Włącz najpierw tryb 🌐 LIVE'); return; }
        if (imtDelayTimer) { clearTimeout(imtDelayTimer); imtDelayTimer = null; }
        try {
            if (imtPauseHold) {
                // Film gra, a flaga pauzy zostala - synchronizuj ze stanem wideo.
                const v = getVideoEl();
                if (v && !v.paused) { imtPauseHold = false; imtPauseStartedAt = 0; }
            }
        } catch (e) {}
        if (imtPauseHold) { setPrepareStatus('⏸️ Film jest wstrzymany — wznów film, potem Zapas'); return; }
        if (imtSpeaking) {
            // Odklej utkniete mowienie: uniewaznij stare zrodla, kolejka ruszy od head.
            try { imtGen++; } catch (e) {}
            imtSpeaking = false; imtSpeakStartedAt = 0;
            imtNextStartAt = 0; imtActiveUntil = 0;
        }
        try { if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume(); } catch (e) {}
        let n = 0;
        imtQueue.forEach(x => { if (!x.failed) { x.addedAt = Date.now() - getEffectiveDelaySec() * 1000 - 1000; if (x.ready) n++; } });
        if (!n && !imtQueue.length) { setPrepareStatus('ℹ️ Bufor pusty — nic do odtworzenia'); return; }
        playNextImmersive();
        setPrepareStatus('▶️ Odtwarzam zapas teraz (' + n + ' gotowych kwestii — bufor pominięty)');
    }

    // --- 🗄️ Trwałe nagrania bufora (IndexedDB) ---
    const LIVEBUF_PREFIX = 'livebuf::';
    const LIVEBUF_ON_KEY = 'duo_LiveBufRecord';
    // Ile dni przetrwaja nagrania krotkiego bufora LIVE (0 = od razu kasuj).
    // Nagrania z BUFORA CALEGO FILMU (plik .srt / Hybryda) sa trwale.
    const LIVEBUF_TTL_DAYS_KEY = 'duo_LiveBufTTLDays';
    let liveBufRecord = localStorage.getItem(LIVEBUF_ON_KEY) !== 'false'; // domyślnie WŁ.
    function liveBufTTLDays() {
        const v = parseInt(localStorage.getItem(LIVEBUF_TTL_DAYS_KEY), 10);
        return isNaN(v) ? 7 : Math.max(0, Math.min(90, v));
    }
    function saveLiveBufTTLDays(v) { localStorage.setItem(LIVEBUF_TTL_DAYS_KEY, String(v)); }
    // Termin waznosci w ms albo null (= trwale, bez terminu).
    function liveBufExpiry(source) {
        if (source === 'file') return null;              // bufor pelnego filmu — trwale
        const days = liveBufTTLDays();
        if (days <= 0) return 0;                          // 0 = nie zapisuj w ogole
        return Date.now() + days * 24 * 60 * 60 * 1000;
    }
    async function liveBufSave(text, blob) {
        // Zapis zalezy tylko od checkboxa — NIE od suwaka bufora, bo ten
        // dotyczy tylko trybu LIVE (przy pliku z napisami bywa 0).
        if (!liveBufRecord || !blob) return;
        const source = customSubFileActive() ? 'file' : 'live';
        const expires = liveBufExpiry(source);
        if (expires !== null && expires <= Date.now()) return;   // TTL=0: nie zapisuj
        try {
            const rec = {
                date: Date.now(), host: HOST, engine: currentEngineId, voice: selectedVoice,
                text: String(text).slice(0, 300), audio: blob,
                source: source,
                expires: expires   // null = trwale; liczba = auto-kasowanie
            };
            await idbSet(LIVEBUF_PREFIX + Date.now() + '::' + Math.random().toString(36).slice(2, 7), rec);
        } catch (e) {}
    }
    // Kasuje nagrania po terminie — wywolywane przy starcie i przy otwarciu listy.
    async function liveBufPurgeExpired() {
        const ttlDays = liveBufTTLDays();
        if (ttlDays <= 0) return 0;   // TTL=0: nic nie jest tymczasowe
        const now = Date.now();
        let removed = 0;
        try {
            const keys = (await idbListKeys()).filter(k => String(k).startsWith(LIVEBUF_PREFIX));
            for (const k of keys) {
                try {
                    const r = await idbGet(k);
                    if (r && r.expires && r.expires <= now) { await idbDelete(k); removed++; }
                } catch (e) {}
            }
        } catch (e) {}
        return removed;
    }
    async function liveBufList() {
        try {
            const keys = (await idbListKeys()).filter(k => String(k).startsWith(LIVEBUF_PREFIX));
            const out = [];
            for (const k of keys) {
                try { const r = await idbGet(k); if (!r) continue;
                    const source = r.source || 'live';
                    // Termin waznosci: nowe wpisy maja pole `expires`.
                    // Stare (sprzed zmiany) dostaja go w pamieci z `date`+TTL,
                    // zeby nie wisialy w nieskonczonosc.
                    let expires = (r.expires === undefined) ? null : r.expires;
                    if (expires === null && source !== 'file') {
                        const d = liveBufTTLDays();
                        if (d > 0) expires = r.date + d * 24 * 60 * 60 * 1000;
                    }
                    out.push({ key: k, date: r.date, host: r.host, text: r.text, audio: r.audio, source: source, expires: expires }); } catch (e) {}
            }
            out.sort((a, b) => b.date - a.date);
            return out;
        } catch (e) { return []; }
    }
    async function liveBufDelete(key) { try { await idbDelete(key); } catch (e) {} }
    async function liveBufDeleteAll() {
        try {
            const keys = (await idbListKeys()).filter(k => String(k).startsWith(LIVEBUF_PREFIX));
            for (const k of keys) await idbDelete(k);
        } catch (e) {}
    }

    // ============================================================
    // --- TEMPO: warianty A/B/C ---
    // ============================================================
    const TEMPO_MODES = [
        { id: 'A', label: 'A — Za wideo 1:1', hint: 'Lektor gra dokładnie z tempem wideo.' },
        { id: 'B', label: 'B — Za wideo łagodnie', hint: 'Lektor przyspiesza do połowy przyspieszenia wideo.' },
        { id: 'C', label: 'C — Stałe tempo', hint: 'Lektor ignoruje przyspieszenie wideo.' }
    ];
    // TEMPO wariant C (stale tempo): warianty A/B mnozy SPEECH_RATE przez
    // playbackRate wideo, przez co genSpeed byl przycinany do maxSpeed,
    // a playRate zostawal 1.0 — lektor uciekal naprzod przed filmem.
    let tempoMode = localStorage.getItem('duo_TempoMode') || 'C';
    if (!TEMPO_MODES.some(m => m.id === tempoMode)) tempoMode = 'C';
    function saveTempoMode() { localStorage.setItem('duo_TempoMode', tempoMode); }

    const SERVER_GEN_THRESHOLD = 1.15;
    // FIX: bufor jest ZAWSZE generowany z predkoscia 1.0x, niezaleznie od
    // suwaka "Głos" i od playbackRate filmu. Dzieki temu nagrania w buforze
    // (i w pamieci trwalej) sa zawsze takie same - przyspieszenie filmu
    // albo suwaka nie tworzy nowych, innych nagran. Kompensacje tempo
    // robimy dopiero przy ODTWARZANIU (playRate), nie przy generowaniu.
    // Dzieki temu ten sam bufor pasuje do filmu odtworzonego wolno
    // i odtworzonego szybko.
    const BUFFER_GEN_SPEED = 1.0;
    // Do jakiej predkosci mozemy rozciagnac/skrocic nagranie z bufora.
    const BUFFER_PLAY_MAX = 2.5;

    function computeTempo(baseSpeed, videoRate) {
        baseSpeed = Math.max(0.5, Math.min(2.5, baseSpeed || 1));
        videoRate = Math.max(0.25, Math.min(4, videoRate || 1));
        if (tempoMode === 'C') return { genSpeed: baseSpeed, playRate: 1 };
        let want = baseSpeed;
        if (tempoMode === 'A') want = baseSpeed * videoRate;
        else if (tempoMode === 'B') want = baseSpeed * (1 + (videoRate - 1) * 0.5);
        want = Math.max(0.5, Math.min(getEngine().maxSpeed, want));
        const effBase = baseSpeed;
        if (want <= SERVER_GEN_THRESHOLD) {
            return { genSpeed: effBase, playRate: Math.max(0.5, Math.min(1.15, want / effBase)) };
        }
        return { genSpeed: Math.round(want * 100) / 100, playRate: 1 };
    }

    // AUTO-CATCHUP wylaczony: boost do 0.5 na 2+ kwestii rozjezdzal kolejke.
    // Wlacz: localStorage.setItem('duo_AutoCatchup','true'); location.reload();
    let autoCatchup = localStorage.getItem('duo_AutoCatchup') === 'true';
    let singleTabMode = localStorage.getItem('duo_SingleTabMode') !== 'false';
    let autoMuteHiddenTab = localStorage.getItem('duo_AutoMuteHidden') !== 'false';
    let pauseVideoWithLektor = localStorage.getItem('duo_PauseVideo') === 'true';
    let detectYTPolishAudio = localStorage.getItem('duo_DetectYTPolish') !== 'false';
    let detectYTPolishChannel = localStorage.getItem('duo_DetectYTPolishChannel') !== 'false';
    let soundCuesFilter = localStorage.getItem('duo_SoundCuesFilter') !== 'false';
    let scanMode = localStorage.getItem('duo_ScanMode') || 'turbo_it';

    function gmSet(k, v) { try { GM_setValue(k, v); } catch (e) {} }
    function gmGet(k) { try { return GM_getValue(k); } catch (e) { return undefined; } }
    function gmDel(k) { try { GM_deleteValue(k); } catch (e) {} }

    const WL_KEY = 'duo_Whitelist';
    const BL_KEY = 'duo_Blacklist';
    const PAUSED_KEY = 'duo_PausedDomains';
    const SUBSRC_KEY = 'duo_SubtitleSources';
    const PROF_PL_KEY = 'duo_ProfPreferPolish';
    const CT_TEXT_KEY = 'duo_CustomText';
    const CT_REMEMBER_KEY = 'duo_CustomRemember';
    const CT_BOOKMARK_KEY = 'duo_CustomBookmark';
    const HOST = (window.location.hostname || '').toLowerCase();

    // ============================================================
    // --- IndexedDB (cache + nagrania bufora) ---
    // ============================================================
    let idbPromise = null;
    function openIdb() {
        if (idbPromise) return idbPromise;
        idbPromise = new Promise((resolve, reject) => {
            try {
                const req = indexedDB.open('duo_lektor_db', 1);
                req.onupgradeneeded = () => { try { req.result.createObjectStore('kv'); } catch (e) {} };
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            } catch (e) { reject(e); }
        });
        return idbPromise;
    }
    async function idbSet(k, v) {
        const db = await openIdb();
        return new Promise((res, rej) => {
            try { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(v, k); tx.oncomplete = () => res(true); tx.onerror = () => rej(tx.error); }
            catch (e) { rej(e); }
        });
    }
    async function idbGet(k) {
        const db = await openIdb();
        return new Promise((res, rej) => {
            try { const tx = db.transaction('kv', 'readonly'); const r = tx.objectStore('kv').get(k); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }
            catch (e) { rej(e); }
        });
    }
    async function idbDelete(k) {
        const db = await openIdb();
        return new Promise((res, rej) => {
            try { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').delete(k); tx.oncomplete = () => res(true); tx.onerror = () => rej(tx.error); }
            catch (e) { rej(e); }
        });
    }
    async function idbListKeys() {
        const db = await openIdb();
        return new Promise((res, rej) => {
            try { const tx = db.transaction('kv', 'readonly'); const r = tx.objectStore('kv').getAllKeys(); r.onsuccess = () => res(r.result || []); r.onerror = () => rej(r.error); }
            catch (e) { rej(e); }
        });
    }
    function cacheKey(videoId, voice, speed) {
        return [currentEngineId, videoId, voice, Number(speed).toFixed(2)].join('::');
    }

    function parseDomainList(text) {
        const out = [];
        String(text || '').split(/\r?\n/).forEach(line => {
            let l = line.trim();
            if (!l || l.startsWith('#') || l.startsWith('//')) return;
            l = l.replace(/^\*\./, '').toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '').trim();
            if (l && !out.includes(l)) out.push(l);
        });
        return out;
    }
    function hostMatches(host, list) { return list.some(d => host === d || host.endsWith('.' + d)); }
    function getPausedSet() { try { return new Set(JSON.parse(gmGet(PAUSED_KEY) || '[]')); } catch (e) { return new Set(); } }
    function isSleepForHost(host) {
        if (hostMatches(host, parseDomainList(gmGet(BL_KEY)))) return true;
        const wl = parseDomainList(gmGet(WL_KEY));
        if (wl.length && !hostMatches(host, wl)) return true;
        return false;
    }
    const SLEEP_MODE = isSleepForHost(HOST);
    let scanPaused = !SLEEP_MODE && getPausedSet().has(HOST);

    // --- AUDIO FOCUS ---
    const TAB_ID = 'tab_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
    let hasAudioFocus = true;
    let syncChannel = null;
    try {
        if (typeof BroadcastChannel !== 'undefined') {
            syncChannel = new BroadcastChannel('duo_lektor_audio_sync');
            syncChannel.onmessage = (event) => handleCrossTabMessage(event.data);
        }
    } catch (e) {}
    function broadcastCrossTab(msg) {
        if (!singleTabMode) return;
        try { if (syncChannel) syncChannel.postMessage({ ...msg, senderTabId: TAB_ID, domain: HOST }); } catch (e) {}
    }
    function handleCrossTabMessage(data) {
        if (!singleTabMode || !data || data.senderTabId === TAB_ID) return;
        if (data.type === 'CLAIM_AUDIO_FOCUS' || data.type === 'START_SPEECH') {
            hasAudioFocus = false;
            stopSyncSource();
            if (syncMode) pendingSyncQueue.length = 0;
            stopImmersiveAudio();
            // v4.2.10: NIE kasujemy kolejki LIVE przy utracie fokusu - tylko pauzujemy.
            // Wczesniej imtQueue.length = 0 wywalalo caly bufor przy przejsciu na inna
            // karte i po powrocie lektor startowal od zera ("przechodze do innej karty,
            // od razu znika"). Pauza = AudioContext stoi, kwestie czekaja, po powrocie
            // karta odzyskuje fokus i dogrywa od miejsca, w ktorym stanęła.
            imtSpeaking = false;
            if (imtLektorEnabled && imtQueue.length) {
                try {
                    if (audioCtx && audioCtx.state === 'running') audioCtx.suspend();
                } catch (e) {}
                try { if (imtCurrentAudio && !imtCurrentAudio.paused) imtCurrentAudio.pause(); } catch (e) {}
            } else {
                imtQueue.length = 0;
            }
            stopCustomReading(true);
            pauseVideosWithLektor();
            setPrepareStatus('⏸️ Wyciszono (inna karta przejęła lektora' + (data.domain ? ': ' + data.domain : '') + ') — bufor zachowany (' + imtQueue.length + ')');
        } else if (data.type === 'RELEASE_AUDIO_FOCUS') {
            // Poprzednia karta oddala fokus (zamknieta / przelaczona) - mozemy mowic.
            hasAudioFocus = true;
            if (imtLektorEnabled && imtQueue.length) {
                try { if (audioCtx && audioCtx.state === 'suspended' && !imtPauseHold) audioCtx.resume(); } catch (e) {}
                try { playNextImmersive(); } catch (e) {}
                try { generateImmersiveAudio(); } catch (e) {}
            }
        }
    }
    function claimAudioFocus() {
        hasAudioFocus = true;
        broadcastCrossTab({ type: 'CLAIM_AUDIO_FOCUS' });
    }
    function releaseAudioFocus() {
        // Wywolywane przy zamykaniu / chowaniu karty - zwalnia fokus, zeby karta
        // z buforem (np. Netflix) mogla wznowic bez recznego klikania.
        hasAudioFocus = false;
        broadcastCrossTab({ type: 'RELEASE_AUDIO_FOCUS' });
    }

    // --- PAUZA FILMU Z LEKTOREM ---
    let pausedByLektor = new WeakSet();
    function pauseVideosWithLektor() {
        if (!pauseVideoWithLektor) return;
        document.querySelectorAll('video').forEach(v => {
            try { if (!v.paused && !v.ended) { pausedByLektor.add(v); v.pause(); } } catch (e) {}
        });
    }
    function resumeVideosAfterLektor() {
        document.querySelectorAll('video').forEach(v => {
            if (pausedByLektor.has(v)) {
                pausedByLektor.delete(v);
                try { const p = v.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
            }
        });
    }

    // ============================================================
    // --- NARZĘDZIA (DOM / wideo / audio) ---
    // ============================================================
    function clean(text) { return String(text || '').replace(/\s+/g, ' ').trim(); }
    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
    function findAllVideos() {
        const out = [];
        try { document.querySelectorAll('video').forEach(v => out.push(v)); } catch (e) {}
        return out;
    }
    function getVideoEl() {
        let best = null, bestArea = 0;
        findAllVideos().forEach(v => {
            try {
                const r = v.getBoundingClientRect();
                if (r.width * r.height > bestArea) { bestArea = r.width * r.height; best = v; }
            } catch (e) {}
        });
        return best;
    }
    function isVisibleElement(el) {
        try {
            if (!el || !el.getBoundingClientRect) return false;
            const r = el.getBoundingClientRect();
            if (r.width < 2 || r.height < 2) return false;
            const st = getComputedStyle(el);
            return st.visibility !== 'hidden' && st.display !== 'none';
        } catch (e) { return false; }
    }
    function setVideoVolume(vol) {
        try { document.querySelectorAll('video').forEach(v => { try { v.volume = Math.max(0, Math.min(1, vol)); } catch (e) {} }); } catch (e) {}
    }
    function setPrepareStatus(txt) {
        const el = document.getElementById('duo-prepare-status');
        if (el) el.textContent = txt || '';
    }
    function updateNowReadingLabel(txt) {
        const el = document.getElementById('duo-now-reading');
        if (el) el.textContent = txt || '';
        updateCaptionOverlay(txt);
        if (txt && txt.trim()) registerSpokenText(txt);
    }
    // ============================================================
// --- NAPISY NETFLIXA: hak JSON.parse ---
// Netflix nie wystawia napisow w DOM ani w publicznym API — trzyma je
// w wewnetrznym manifeście, ktory leci do strony jako odpowiedz JSON.
// Dlatego nadpisujemy JSON.parse (jak robi to DownSub), wyciagamy z
// odpowiedzi `textTracks` / `timedtexttracks` i zapisujemy sciezki do
// napisow. Nastepnie `fetchTranscriptSegmentsAuto()` sciaga z nich pelne
// napisy z czasami — dzieki temu na Netflixie dziala takze Hybryda
// i bufor z wyprzedzeniem, a nie tylko tryb LIVE czytajacy z DOM.
// ============================================================
const NF_TRACKS = new Map();          // movieId -> [{id, lang, name, isCC, url, urls, fmt}]
const NF_SEG_CACHE = new Map();      // "movieId|trackId" -> segmenty (zbuforowane napisy)
const NF_SEG_INFLIGHT = new Map();   // "movieId|trackId" -> Promise (trwa pobieranie)
let nfChannel = null;                // BroadcastChannel do haka w stronie
let nfTracksReady = false;           // true, gdy hakiem zlapano sciezki
let nfCurMovieId = '';               // movieId biezacego odcinka (rozpoznane w swiecie strony)
let nfMovieChangeTimer = null;

function nfAskMain() {
    // Prosimy wstrzykniety hak, zeby ponowil wyslanie (gdy manifest byl
    // juz sparsowany, zanim skrypt zdazyl go wstrzyknac).
    try { if (nfChannel) nfChannel.postMessage({ type: 'DUO_NF_REQ' }); } catch (e) {}
    try { window.postMessage({ type: 'DUO_NF_REQ' }, '*'); } catch (e) {}
}

function isNetflixHost() {
    try { return /(^|\.)netflix\.com$/i.test(location.hostname); } catch (e) { return false; }
}
function nfUrlId() {
    try { const m = location.pathname.match(/\/watch\/(\d+)/); return m ? m[1] : ''; } catch (e) { return ''; }
}
// movieId biezacego odcinka: najpierw to, co rozpoznal hak (falcorCache / id_override),
// potem samo ID z adresu strony.
function nfCurrentMovieId() {
    if (nfCurMovieId && NF_TRACKS.has(nfCurMovieId)) return nfCurMovieId;
    const u = nfUrlId();
    if (u && NF_TRACKS.has(u)) return u;
    return '';
}
// Ostatnio przechwycony manifest (NIE pierwszy — pierwszy to zwykle poprzedni odcinek).
function nfLastTracks() {
    let last = null;
    for (const e of NF_TRACKS) { if (e[1] && e[1].length) last = e[1]; }
    return last;
}

// --- Kod haka dzialajacy w swiecie STRONY (MAIN) ---
// Wstrzykiwany przez .toString(), wiec MUSI byc w pelni samodzielny
// (zadnych odwolan do zmiennych skryptu). Polaczenie logiki z skryptu
// „Netflix - subtitle downloader" (profile w zadaniu manifestu, id_override,
// falcorCache) z dotychczasowym przechwytywaniem sciezek napisow.
function nfHookMain(cfg) {
    if (window.__duoNfMainHook) return;
    window.__duoNfMainHook = true;
    var ch = null;
    try { ch = new BroadcastChannel('duo_nf_bridge'); } catch (e) {}
    var FMT = cfg.formats;              // kolejnosc preferencji przy wyborze URL
    var PROF = cfg.profiles;            // profile dopisywane do zadania manifestu
    var MANIFEST = /manifest|licensedManifest/;
    var ST = {};                        // movieId -> sciezki
    var OV = {};                        // id z adresu -> movieId
    var lastCur = null;
    function send(m) {
        try { if (ch) ch.postMessage(m); } catch (e) {}
        try { window.postMessage(m, '*'); } catch (e) {}
    }
    function pathId() { return String(location.pathname.split('/').pop() || ''); }
    function pickUrls(dl) {
        if (!dl || typeof dl !== 'object') return null;
        var keys = FMT.filter(function (k) { return k in dl; })
            .concat(Object.keys(dl).filter(function (k) { return FMT.indexOf(k) < 0; }));
        for (var i = 0; i < keys.length; i++) {
            var en = dl[keys[i]], urls = [];
            if (en && Array.isArray(en.urls)) {
                for (var j = 0; j < en.urls.length; j++) if (en.urls[j] && en.urls[j].url) urls.push(en.urls[j].url);
            }
            if (!urls.length && en && en.downloadUrls && typeof en.downloadUrls === 'object') {
                urls = Object.keys(en.downloadUrls).map(function (x) { return en.downloadUrls[x]; }).filter(Boolean);
            }
            if (urls.length) return { urls: urls, fmt: keys[i] };
        }
        return null;
    }
    function findManifest(o) {
        if (!o || typeof o !== 'object') return null;
        var ok = function (m) { return m && m.movieId && (Array.isArray(m.textTracks) || Array.isArray(m.timedtexttracks)); };
        if (ok(o)) return o;
        if (ok(o.result)) return o.result;
        if (Array.isArray(o.result)) { for (var i = 0; i < o.result.length; i++) if (ok(o.result[i])) return o.result[i]; }
        return null;
    }
    function toTracks(m) {
        var ar = m.textTracks || m.timedtexttracks || [], out = [], seen = {};
        for (var i = 0; i < ar.length; i++) {
            var t = ar[i];
            if (!t || t.isNoneTrack || t.isForcedNarrative) continue;
            var u = pickUrls(t.downloadables || t.ttDownloadables);
            if (!u) continue;
            var lg = String(t.language || ''),
                cc = t.rawTrackType === 'closedcaptions' || t.trackType === 'ASSISTIVE',
                k = lg + '|' + cc;
            if (seen[k]) continue;
            seen[k] = 1;
            out.push({
                id: String(t.new_track_id || t.id || (lg + '-' + out.length)),
                lang: lg,
                name: String(t.languageDescription || lg),
                isCC: cc, url: u.urls[0], urls: u.urls, fmt: u.fmt
            });
        }
        return out;
    }
    function curId() {
        var id = pathId();
        if (ST[id]) return id;
        try {
            var n = String(window.netflix.falcorCache.videos[id].current.value[1]);
            if (ST[n]) return n;
        } catch (e) {}
        if (OV[id] && ST[OV[id]]) return String(OV[id]);
        return '';
    }
    function announceCur(force) {
        var c = curId();
        if (force || c !== lastCur) {
            lastCur = c;
            send({ type: 'DUO_NF_CUR', movieId: c, watchId: pathId() });
        }
    }
    var op = JSON.parse.bind(JSON);
    JSON.parse = function (tx, rv) {
        var out = op(tx, rv);
        try {
            var m = findManifest(out);
            if (m) {
                var tr = toTracks(m);
                if (tr.length) {
                    var mid = String(m.movieId);
                    ST[mid] = tr;
                    send({ type: 'DUO_NF_TRACKS', movieId: mid, tracks: tr });
                    announceCur(true);
                }
            }
        } catch (e) {}
        return out;
    };
    var os = JSON.stringify.bind(JSON);
    JSON.stringify = function (data) {
        try {
            // (a) zadanie manifestu: dopisz profile napisow, pokaz wszystkie jezyki
            if (data && typeof data.url === 'string' && MANIFEST.test(data.url)) {
                Object.keys(data).forEach(function (key) {
                    var v = data[key];
                    try {
                        if (!v || typeof v !== 'object') return;
                        if (Array.isArray(v.profiles)) {
                            PROF.forEach(function (p) { if (v.profiles.indexOf(p) < 0) v.profiles.unshift(p); });
                        }
                        if (v.showAllSubDubTracks != null && cfg.forceAll) v.showAllSubDubTracks = true;
                        if (cfg.prefLocale) v.preferredTextLocale = cfg.prefLocale;
                    } catch (e) {}
                });
            }
            // (b) starszy ksztalt zadania (params.profiles)
            var p = data && data.params && data.params.profiles;
            if (Array.isArray(p) && p.every(function (x) { return typeof x === 'string'; })) {
                PROF.forEach(function (x) { if (p.indexOf(x) < 0) p.push(x); });
            }
            // (c) mapowanie ID z adresu -> movieId
            if (data && typeof data.movieId === 'number') {
                var vid = data.params.sessionParams.uiplaycontext.video_id;
                if (typeof vid === 'number' && vid !== data.movieId) { OV[vid] = data.movieId; announceCur(true); }
            }
        } catch (e) {}
        return os.apply(null, arguments);
    };
    function resend() {
        Object.keys(ST).forEach(function (mid) { send({ type: 'DUO_NF_TRACKS', movieId: mid, tracks: ST[mid] }); });
        announceCur(true);
    }
    try { if (ch) ch.onmessage = function (ev) { if (ev && ev.data && ev.data.type === 'DUO_NF_REQ') resend(); }; } catch (e) {}
    window.addEventListener('message', function (e) {
        if (e.source !== window) return;
        var d = e.data;
        if (d && d.type === 'DUO_NF_REQ') resend();
    });
    // zmiana odcinka bez przeladowania strony (SPA) -> od razu informujemy skrypt
    setInterval(function () { announceCur(false); }, 1000);
    setTimeout(resend, 500); setTimeout(resend, 2500); setTimeout(resend, 6000);
}

function injectNetflixHook() {
    const cfg = {
        formats: ['webvtt-lssdh-ios8', 'dfxp-ls-sdh', 'imsc1.1', 'simplesdh', 'nflx-cmisc'],
        profiles: ['imsc1.1', 'dfxp-ls-sdh', 'webvtt-lssdh-ios8', 'simplesdh'],
        forceAll: (localStorage.getItem('duo_NfForceAll') || localStorage.getItem('NSD_force-all-lang')) !== 'false',
        prefLocale: localStorage.getItem('duo_NfPrefLocale') || localStorage.getItem('NSD_pref-locale') || ''
    };
    try {
        const s = document.createElement('script');
        s.textContent = '(' + nfHookMain.toString() + ')(' + JSON.stringify(cfg) + ')';
        (document.head || document.documentElement).appendChild(s);
        s.remove();
    } catch (e) {
        console.warn('[DUO] Nie udało się wstrzyknąć haka Netflixa:', e);
    }
}

// Odcinek sie zmienil (autoodtwarzanie nastepnego, reczny wybor) — gdy LIVE czyta
// z pelnych napisow, trzeba je pobrac na nowo, inaczej lektor czytalby stary odcinek.
function nfOnMovieChanged() {
    if (nfMovieChangeTimer) clearTimeout(nfMovieChangeTimer);
    nfMovieChangeTimer = setTimeout(function () {
        nfMovieChangeTimer = null;
        try {
            if (!imtLektorEnabled || !liveFromFullSubs) return;
            // v4.2.13: nowy odcinek = koniec trybu „na żądanie” — wracamy do czytania w locie
            liveFullStop();
            liveFromFullSubs = false;
            resetImmersiveForSeek();
            setupScanMode(scanMode);   // znów czytanie w locie z ekranu
            setPrepareStatus('🎬 Nowy odcinek — czytam w locie. Kliknij „⬇ Całe napisy”, jeśli chcesz pełne.');
        } catch (e) {}
    }, 700);
}

function nfHandleBridgeMessage(d) {
    if (!d || typeof d !== 'object') return;
    if (d.type === 'DUO_NF_TRACKS') {
        if (!d.movieId || !Array.isArray(d.tracks) || !d.tracks.length) return;
        const mid = String(d.movieId);
        NF_TRACKS.delete(mid);          // delete+set: ostatnio przechwycony laduje na koncu
        NF_TRACKS.set(mid, d.tracks);
        nfTracksReady = true;
        if (mid === nfCurrentMovieId()) nfPrefetchCurrent();
    } else if (d.type === 'DUO_NF_CUR') {
        const prev = nfCurMovieId;
        nfCurMovieId = d.movieId ? String(d.movieId) : '';
        if (nfCurMovieId && nfCurMovieId !== prev) {
            nfPrefetchCurrent();
            if (prev) nfOnMovieChanged();
        }
    }
}

// Wybiera najlepsza sciezke: preferujemy polska, bez CC (narracja).
function nfPickTrack(tracks) {
    if (!tracks || !tracks.length) return null;
    const pl = tracks.filter(t => /^pl|pol|polski|polish/i.test(String(t.lang || '') + ' ' + String(t.name || '')));
    const pool = pl.length ? pl : tracks;
    const normal = pool.filter(t => !t.isCC);
    return (normal[0] || pool[0]) || null;
}
// Pobiera i parsuje napisy jednej sciezki; probuje kolejnych URL-i (rozne CDN).
async function nfFetchTrackSegments(track) {
    const urls = (track.urls && track.urls.length ? track.urls.slice() : [track.url]).filter(Boolean);
    while (urls.length) {
        const u = urls.splice(Math.floor(Math.random() * urls.length), 1)[0];
        try {
            const res = await fetch(u, { mode: 'cors', credentials: 'omit' });
            if (!res.ok) continue;
            const text = await res.text();
            if (!text) continue;
            const segs0 = parseSubtitleFile(text, detectFormat(text), null);
            if (segs0.length) {
                // autoSubsOn: niepolskie napisy Netflixa tłumaczymy zanim trafią do bufora.
                const segs = await extTrMaybeTranslateSegs(segs0, track.lang);
                return segs;
            }
        } catch (e) {}
    }
    return null;
}
// Napisy sciezki z bufora (pamiec); gdy brak — pobiera raz i zapamietuje.
function nfSegmentsForTrack(mid, track) {
    const key = mid + '|' + track.id;
    if (NF_SEG_CACHE.has(key)) return Promise.resolve(NF_SEG_CACHE.get(key));
    if (NF_SEG_INFLIGHT.has(key)) return NF_SEG_INFLIGHT.get(key);
    const p = nfFetchTrackSegments(track).then(segs => {
        NF_SEG_INFLIGHT.delete(key);
        if (segs && segs.length) {
            NF_SEG_CACHE.set(key, segs);
            // trzymamy tylko kilka ostatnich odcinkow
            while (NF_SEG_CACHE.size > 12) NF_SEG_CACHE.delete(NF_SEG_CACHE.keys().next().value);
        }
        return segs;
    }, () => { NF_SEG_INFLIGHT.delete(key); return null; });
    NF_SEG_INFLIGHT.set(key, p);
    return p;
}
// Buforowanie napisow biezacego odcinka od razu po wykryciu manifestu —
// adresy napisow Netflixa wygasaja, wiec pobieramy je zanim lektor ich zazada.
function nfPrefetchCurrent() {
    try {
        if (!/\/watch\//.test(location.pathname)) return;
        const mid = nfCurrentMovieId();
        if (!mid) return;
        const track = nfPickTrack(NF_TRACKS.get(mid));
        if (!track) return;
        nfSegmentsForTrack(mid, track).then(segs => {
            if (segs && segs.length) {
                try { setPrepareStatus('📺 Netflix: napisy odcinka zbuforowane (' + segs.length + ' kwestii, ' + (track.lang || '?') + ')'); } catch (e) {}
            }
        });
    } catch (e) {}
}

// KLUCZOWE: skrypt Tampermonkey dziala w IZOLOWANYM swiecie. Nadpisanie
// JSON.parse w tym swiecie NIE wplywa na kod strony Netflixa — Netflix parsuje
// manifest swoim wlasnym JSON.parse i hak nigdy by nie zadzialal. Dlatego
// wstrzykujemy skrypt do strony (swiat MAIN). Komunikacja odbywa sie przez
// BroadcastChannel (dziala miedzy swiatami) + postMessage jako zapas.
function installNetflixHook() {
    if (!isNetflixHost()) return;
    if (window.__duoNfHookInstalled) return;
    window.__duoNfHookInstalled = true;

    if (typeof BroadcastChannel !== 'undefined') {
        try {
            const ch = new BroadcastChannel('duo_nf_bridge');
            ch.onmessage = (ev) => nfHandleBridgeMessage(ev && ev.data);
            nfChannel = ch;
        } catch (e) {}
    }
    window.addEventListener('message', function (e) {
        if (e.source !== window) return;
        nfHandleBridgeMessage(e.data);
    });
    // v4.2.13: wyłączony lektor = nie ingerujemy w stronę Netflixa (po włączeniu: odśwież stronę dla pełnych napisów)
    let nfPowerOn = true;
    try { const pv = GM_getValue('duo_MasterPowerGlobal'); nfPowerOn = !(pv === false || pv === 'false'); } catch (e) {}
    if (nfPowerOn) {
        injectNetflixHook();
        setTimeout(function () { nfAskMain(); }, 1200);
        setTimeout(function () { nfAskMain(); }, 4000);
    }

    // (pozycje menu Tampermonkey dla Netflixa usunięte — w menu zostaje tylko „Panel lektora”)
}
installNetflixHook();

function getVideoId() {
        const yt = getYTVideoId();
        if (yt) return 'yt_' + yt;
        try {
            const m = location.pathname.match(/\/(?:watch|video)\/(\d+)/);
            if (m) return location.hostname.replace(/\./g, '_') + '_' + m[1];
            return location.hostname.replace(/\./g, '_') + '_' + location.pathname.replace(/[^a-zA-Z0-9]+/g, '_').slice(0, 60);
        } catch (e) {}
        return null;
    }

    // --- AudioContext / kompresor / gain ---
    function ensureAudioCtx() {
        try {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                buildAudioChain();
            }
            return audioCtx;
        } catch (e) { return null; }
    }
    function buildAudioChain() {
        try {
            if (!audioCtx) return;
            if (masterGain) { try { masterGain.disconnect(); } catch (e) {} masterGain = null; }
            if (compressorNode) { try { compressorNode.disconnect(); } catch (e) {} compressorNode = null; }
            masterGain = audioCtx.createGain();
            masterGain.gain.value = speechGain;
            if (compressorEnabled) {
                compressorNode = audioCtx.createDynamicsCompressor();
                compressorNode.threshold.value = -18;
                compressorNode.knee.value = 20;
                compressorNode.ratio.value = 6;
                compressorNode.attack.value = 0.003;
                compressorNode.release.value = 0.2;
                masterGain.connect(compressorNode);
                compressorNode.connect(audioCtx.destination);
            } else {
                masterGain.connect(audioCtx.destination);
            }
        } catch (e) {}
    }
    // v4.2.1: true = film jest wstrzymany przez uzytkownika, lektor LIVE tez stoi
    // (AudioContext zawieszony, nic nowego nie startuje).
    let imtPauseHold = false;
    function ensureAudioCtxRunning() {
        const ctx = ensureAudioCtx();
        try { if (ctx && ctx.state === 'suspended' && !imtPauseHold) ctx.resume(); } catch (e) {}
        return ctx;
    }
    // v3.7.3: dekodowanie asynchroniczne z unieważnianiem przez imtGen (tylko stop/seek),
    // a nie przez licznik sekwencji, który gubił kwestie przy szybkim kolejkowaniu.
    let imtNextStartAt = 0;
    let imtActiveUntil = 0;
    let imtGen = 0;                 // zwiększane TYLKO przy stop/seek
    const imtSources = new Set();   // zaplanowane źródła (do ucinania przy stop/seek)
    // v4.2.1: zmiana tempa BEZ zmiany wysokosci glosu (WSOLA).
    // AudioBufferSourceNode.playbackRate przyspiesza nagranie razem z wysokoscia
    // dzwieku — przy filmie 1.5x lektor brzmial piskliwie. Tu skracamy/wydluzamy
    // sam czas trwania, a wysokosc zostaje. Wylaczenie: localStorage duo_NoPitchKeep = 'true'.
    function wsolaStretch(ctx, buf, rate) {
        const sr = buf.sampleRate, n = buf.length, ch = buf.numberOfChannels;
        if (!(rate > 0) || Math.abs(rate - 1) < 0.02 || n < 64) return buf;
        let win = Math.round(sr * 0.032); if (win % 2) win++;
        const hopS = win >> 1;                         // skok syntezy (50% nakladania)
        const hopA = hopS * rate;                      // skok analizy
        const tol = Math.round(sr * 0.012);            // zakres szukania najlepszego dopasowania
        const outLen = Math.max(1, Math.floor(n / rate));
        const pad = win + 2 * tol + hopS + 8;
        const x = [];
        for (let c = 0; c < ch; c++) {
            const a = new Float32Array(n + pad);
            a.set(buf.getChannelData(c), 0);
            x.push(a);
        }
        const hann = new Float32Array(win);
        for (let i = 0; i < win; i++) hann[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / win);
        const outFull = outLen + win * 2;
        const out = [], norm = new Float32Array(outFull);
        for (let c = 0; c < ch; c++) out.push(new Float32Array(outFull));
        const m0 = x[0];
        let prevIn = 0, k = 0;
        for (let outPos = 0; outPos < outLen + win; outPos += hopS, k++) {
            let inPos;
            if (k === 0) inPos = 0;
            else {
                const nominal = Math.round(k * hopA);
                if (nominal >= n) break;
                // naturalna kontynuacja poprzedniej ramki w oryginale
                const ref = prevIn + hopS;
                let best = nominal, bestScore = -Infinity;
                const lo = Math.max(0, nominal - tol), hi = nominal + tol;
                for (let cand = lo; cand <= hi; cand++) {
                    let s = 0;
                    for (let i = 0; i < hopS; i += 2) s += m0[ref + i] * m0[cand + i];
                    if (s > bestScore) { bestScore = s; best = cand; }
                }
                inPos = best;
            }
            for (let c = 0; c < ch; c++) {
                const xs = x[c], os = out[c];
                for (let i = 0; i < win; i++) {
                    const o = outPos + i;
                    if (o >= outFull) break;
                    os[o] += xs[inPos + i] * hann[i];
                }
            }
            for (let i = 0; i < win; i++) { const o = outPos + i; if (o < outFull) norm[o] += hann[i]; }
            prevIn = inPos;
        }
        const res = ctx.createBuffer(ch, outLen, sr);
        for (let c = 0; c < ch; c++) {
            const d = res.getChannelData(c), os = out[c];
            for (let i = 0; i < outLen; i++) d[i] = norm[i] > 1e-3 ? os[i] / norm[i] : 0;
        }
        return res;
    }
    // v4.2.2: kontrola jakosci rozciagnietego dzwieku. Zwraca true, gdy wynik ma
    // sensowna dlugosc, nie zawiera NaN/Infinity i nie jest wyraznie cichszy od wejscia.
    function wsolaLooksOk(inBuf, outBuf, rate) {
        try {
            if (!inBuf || !outBuf) return false;
            const expect = inBuf.length / rate;
            if (!(outBuf.length > 0) || Math.abs(outBuf.length - expect) > Math.max(64, expect * 0.08)) return false;
            const a = inBuf.getChannelData(0), b = outBuf.getChannelData(0);
            let sa = 0, sb = 0;
            for (let i = 0; i < a.length; i++) sa += a[i] * a[i];
            for (let i = 0; i < b.length; i++) { const v = b[i]; if (!isFinite(v)) return false; sb += v * v; }
            const ra = Math.sqrt(sa / a.length), rb = Math.sqrt(sb / b.length);
            if (ra > 1e-4 && rb < ra * 0.4) return false;     // wyraznie ciszej niz oryginal
            return true;
        } catch (e) { return false; }
    }
    let imtLastTempoNote = '';
    function scheduleChunkContinuous(blob, rate) {
        const ctx = ensureAudioCtxRunning();
        if (!ctx || !masterGain) return null;
        const myGen = imtGen;
        // Nagranie jest zapisane z predkoscia 1.0 (BUFFER_GEN_SPEED), wiec
        // rozciagamy je dopiero tutaj - inaczej lektor wylapalby z obrazu
        // za kazdym razem, gdy zmienil sie suwak lub tempo filmu.
        const r = Math.max(0.5, Math.min(BUFFER_PLAY_MAX, Number(rate) || 1));
        return blob.arrayBuffer()
            .then(ab => ctx.decodeAudioData(ab))
            .then(buf => {
                if (myGen !== imtGen) return null; // stop/seek w międzyczasie
                // v4.2.1/4.2.2: tempo bez zmiany wysokosci glosu; awaryjnie (blad / zly
                // wynik / wylaczone) zostaje stare zachowanie przez playbackRate.
                let playBuf = buf, srcRate = r, how = 'playbackRate';
                if (localStorage.getItem('duo_NoPitchKeep') !== 'true' && Math.abs(r - 1) >= 0.02) {
                    try {
                        const t0 = (typeof performance !== 'undefined') ? performance.now() : Date.now();
                        const st = wsolaStretch(ctx, buf, r);
                        const ms = Math.round(((typeof performance !== 'undefined') ? performance.now() : Date.now()) - t0);
                        if (st !== buf && wsolaLooksOk(buf, st, r)) { playBuf = st; srcRate = 1; how = 'WSOLA ' + ms + ' ms'; }
                        else how = 'playbackRate (WSOLA odrzucone)';
                    } catch (e) { how = 'playbackRate (blad WSOLA: ' + (e && e.message ? e.message : e) + ')'; }
                }
                if (myGen !== imtGen) return null;   // stop/seek w trakcie obliczen
                // WAZNE: czas startu liczymy DOPIERO TERAZ. Rozciaganie trwa dziesiatki/setki ms —
                // wczesniej liczony czas byl juz przeterminowany, przez co kwestia „konczyla sie”
                // za wczesnie, a nastepna nakladala sie na nia (lub kolejka stawala).
                const startAt = Math.max(ctx.currentTime + 0.005, imtNextStartAt);
                const src = ctx.createBufferSource();
                src.buffer = playBuf;
                // playbackRate skraca czas trwania (bufor.duration / r) —
                // inaczej kolejna kwestia startowalaby za pozno.
                const dur = Math.max(0.02, playBuf.duration / srcRate);
                src.playbackRate.setValueAtTime(srcRate, ctx.currentTime);
                try {
                    const note = 'tempo lektora ×' + r.toFixed(2) + ' → ' + how;
                    if (note.replace(/\d+ ms/, '') !== imtLastTempoNote) {
                        imtLastTempoNote = note.replace(/\d+ ms/, '');
                        console.debug('[DUO] ' + note);
                        setPrepareStatus('🎚️ ' + note);
                    }
                } catch (e) {}
                src.connect(masterGain);
                src.start(startAt);
                imtSources.add(src);
                imtNextStartAt = startAt + dur;
                imtActiveUntil = imtNextStartAt;
                src.onended = () => { imtSources.delete(src); try { src.disconnect(); } catch (e) {} };
                return imtActiveUntil;
            });
    }
    const __duoElemSources = new WeakSet();
    function boostAudioElement(audio) {
        try {
            const ctx = ensureAudioCtxRunning();
            if (!ctx || !masterGain || __duoElemSources.has(audio)) return;
            const src = ctx.createMediaElementSource(audio);
            src.connect(masterGain);
            __duoElemSources.add(audio);
        } catch (e) {}
    }

    // --- POLSKI DUBBING / KANAŁ ---
    const PL_DIACRITICS_RE = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g;
    const PL_COMMON_WORDS_RE = /\b(i|w|na|z|do|że|się|to|jest|nie|jak|ale|o|po|za|od|dla|co|tym|tak|ze|już|ten|ta|to)\b/gi;
    function isPolishTextHeuristic(text) {
        if (!text || typeof text !== 'string') return false;
        const c = text.trim();
        if (!c) return false;
        const words = c.split(/\s+/).filter(w => w.length >= 2);
        if (words.length < 2) return false;
        const dia = (c.match(PL_DIACRITICS_RE) || []).length;
        const cw = (c.match(PL_COMMON_WORDS_RE) || []).length;
        if (dia >= 2 && dia / words.length >= 0.15) return true;
        if (dia >= 1 && words.length <= 4) return true;
        if (cw >= 2 && cw / words.length >= 0.15) return true;
        return false;
    }
    function profPolishScore(text) {
        const t = String(text || '').trim();
        if (!t) return 0;
        if (isPolishTextHeuristic(t)) return 4;
        let s = 0;
        const dia = (t.match(PL_DIACRITICS_RE) || []).length;
        if (dia >= 1) s += 1;
        if (dia >= 3) s += 1;
        const cw = (t.match(PL_COMMON_WORDS_RE) || []).length;
        if (cw >= 1) s += 1;
        if (cw >= 3) s += 1;
        return Math.min(4, s);
    }
    function extractTitleFromDOM() {
        try {
            const t1 = document.querySelector('.ytp-title-link, .ytp-title-text, .ytp-title-channel-logo');
            if (t1 && t1.textContent && t1.textContent.trim().length > 2) return t1.textContent.trim();
            const t2 = document.querySelector('.slim-video-metadata-title, .slim-video-information-title, .media-item-headline');
            if (t2 && t2.textContent && t2.textContent.trim().length > 2) return t2.textContent.trim();
            const inline = document.querySelector('ytd-inline-preview-renderer, #inline-preview-player');
            if (inline) {
                const p = inline.closest('ytd-rich-item-renderer, ytd-video-renderer, ytd-compact-video-renderer');
                const h = p && p.querySelector('#video-title, #video-title-link');
                if (h && h.textContent) return h.textContent.trim();
            }
            const hv = document.querySelector('ytd-rich-item-renderer:hover #video-title, ytd-video-renderer:hover #video-title');
            if (hv && hv.textContent) return hv.textContent.trim();
            if (document.title && !document.title.includes('YouTube') && document.title.length > 3) return document.title.trim();
        } catch (e) {}
        return '';
    }
    function getYTVideoId() {
        try {
            const u = new URL(location.href);
            const v = u.searchParams.get('v');
            if (v) return v;
            const m = u.pathname.match(/\/?(?:shorts|embed|v)\/([A-Za-z0-9_-]{11})/);
            if (m) return m[1];
        } catch (e) {}
        return null;
    }
    const polishChannelCache = new Map();
    function detectPolishInMeta() {
        try {
            const pr = window.ytInitialPlayerResponse;
            if (pr) {
                const lang = (pr.microformat && pr.microformat.playerMicroformatRenderer && pr.microformat.playerMicroformatRenderer.defaultAudioLanguage) ||
                    (pr.videoDetails && pr.videoDetails.defaultAudioLanguage);
                if (typeof lang === 'string' && lang.trim().toLowerCase().startsWith('pl')) return true;
                const tracks = pr.captions && pr.captions.playerCaptionsTracklistRenderer && pr.captions.playerCaptionsTracklistRenderer.captionTracks;
                if (Array.isArray(tracks)) {
                    for (const tr of tracks) {
                        if ((tr.languageCode || '').toLowerCase().startsWith('pl') && (tr.kind || '').toLowerCase() !== 'asr') return true;
                    }
                }
                const title = pr.videoDetails && pr.videoDetails.title ? String(pr.videoDetails.title).trim() : '';
                const desc = pr.videoDetails && pr.videoDetails.shortDescription ? String(pr.videoDetails.shortDescription).trim() : '';
                if (isPolishTextHeuristic(title + ' ' + desc)) return true;
            }
            const domTitle = extractTitleFromDOM();
            if (domTitle && isPolishTextHeuristic(domTitle)) return true;
        } catch (e) {}
        return false;
    }
    function checkYouTubeIsPolishChannel() {
        if (!detectYTPolishChannel) return false;
        if (!HOST.includes('youtube.com') && !HOST.includes('youtube-nocookie.com')) return false;
        const vid = getYTVideoId();
        if (vid && polishChannelCache.has(vid)) return polishChannelCache.get(vid);
        const result = detectPolishInMeta();
        if (vid) {
            polishChannelCache.set(vid, result);
            if (polishChannelCache.size > 500) {
                const oldest = polishChannelCache.keys().next().value;
                if (oldest) polishChannelCache.delete(oldest);
            }
        }
        return result;
    }
    function checkYouTubeHasPolishAudio() {
        if (!detectYTPolishAudio) return false;
        if (!HOST.includes('youtube.com') && !HOST.includes('youtube-nocookie.com')) return false;
        try {
            const player = document.getElementById('movie_player') || document.querySelector('.html5-video-player');
            if (player) {
                if (typeof player.getAudioTrack === 'function') {
                    const tr = player.getAudioTrack();
                    if (tr) {
                        const n = (tr.displayName || tr.name || tr.id || '').toLowerCase();
                        if (n.includes('polski') || n.includes('polish') || n.startsWith('pl')) return true;
                    }
                }
                if (typeof player.getAvailableAudioTracks === 'function') {
                    const tracks = player.getAvailableAudioTracks();
                    if (Array.isArray(tracks) && tracks.length) {
                        const active = tracks.find(t => t.isActive || t.isDefault);
                        if (active) {
                            const n = (active.displayName || active.name || active.id || '').toLowerCase();
                            if (n.includes('polski') || n.includes('polish') || n.startsWith('pl')) return true;
                        }
                    }
                }
            }
            const items = document.querySelectorAll('.ytp-menuitem-content, .ytp-menuitem-label');
            for (const it of items) {
                const t = (it.textContent || '').toLowerCase();
                if (t.includes('polski (oryginalny)') || t.includes('polski (dubbing)') || t.includes('polski (audio)')) return true;
            }
        } catch (e) {}
        return false;
    }
    let pdCache = { t: 0, v: false }, pdActive = false;
    function polishDubbingActive() {
        const now = Date.now();
        if (now - pdCache.t >= 1000) {
            pdCache.t = now;
            pdCache.v = checkYouTubeHasPolishAudio() || checkYouTubeIsPolishChannel();
        }
        return pdCache.v;
    }
    function stopForPolishDubbing() {
        if (imtLektorEnabled) {
            stopImmersiveAudio();
            imtQueue.length = 0; imtSpeaking = false;
            clearSpokenHistory();
            setVideoVolume(VIDEO_VOLUME);
            resumeVideosAfterLektor();
        }
        if (enabled && syncMode) {
            stopSyncSource();
            pendingSyncQueue.length = 0;
            enabled = false;
            setVideoVolume(VIDEO_VOLUME);
        }
        setPrepareStatus('🇵🇱 Wykryto polski dubbing/kanał na YouTube — lektor wyłączony');
        ensureUI();
    }

    // --- STAN ---
    // Stan zwinięcia panelu trzymany przez GM_setValue/GM_getValue (wspólny dla WSZYSTKICH kart/domen),
    // a nie przez localStorage (osobny dla każdej strony) — dzięki temu panel zostaje zminimalizowany
    // wszędzie, także po przełączeniu na inną kartę/stronę, dopóki sam go nie rozwiniesz.
    const UI_COLLAPSED_KEY = 'duo_UiCollapsedGlobal';
    let uiCollapsed = (() => {
        const v = gmGet(UI_COLLAPSED_KEY);
        if (v === false || v === 'false') return false;
        if (v === true || v === 'true') return true;
        return true; // domyślnie: zminimalizowany (mały kwadracik)
    })();
    // v3.6.7: stan ON/OFF (masterPower) trzymany przez GM_setValue/GM_getValue
    // (wspólny dla WSZYSTKICH kart/domen), tak samo jak stan zwinięcia panelu —
    // jeden przełącznik włącza/wyłącza lektora wszędzie naraz.
    const MASTER_POWER_KEY = 'duo_MasterPowerGlobal';
    let masterPower = (() => {
        const v = gmGet(MASTER_POWER_KEY);
        if (v === false || v === 'false') return false;
        if (v === true || v === 'true') return true;
        return true; // domyślnie: włączony
    })();
    // ============================================================
    // --- WIDOCZNOŚĆ CAŁEGO PANELU (menu Tampermonkey + przycisk ✖) ---
    // Stan trzymany przez GM (wspólny dla wszystkich kart/domen), tak samo
    // jak zwinięcie panelu i ON/OFF. Ukrycie panelu NIE wyłącza lektora.
    // ============================================================
    const PANEL_VISIBLE_KEY = 'duo_SettingsPanelVisible';
    let isSettingsPanelVisible = (() => {
        const v = gmGet(PANEL_VISIBLE_KEY);
        if (v === true || v === 'true') return true;
        if (v === false || v === 'false') return false;
        return false; // domyślnie: ukryty (zmień na true, żeby panel był widoczny od razu)
    })();

    function applyPanelVisibility() {
        const panel = document.getElementById('duo-ui-box');
        // 'flex', nie 'block' — box jest flexem (column-reverse), 'block' psuje układ
        if (panel) panel.style.display = isSettingsPanelVisible ? 'flex' : 'none';
    }

    function setSettingsPanelVisible(visible) {
        isSettingsPanelVisible = !!visible;
        gmSet(PANEL_VISIBLE_KEY, isSettingsPanelVisible);
        // panel mógł jeszcze nie powstać (np. strona się ładowała) — zbuduj go
        if (isSettingsPanelVisible && !SLEEP_MODE) ensureUI();
        applyPanelVisibility();
    }

    function toggleSettingsPanel() {
        setSettingsPanelVisible(!isSettingsPanelVisible);
    }

    // ============================================================
    // --- 🔊 GŁOŚNICZEK NA ODTWARZACZU YOUTUBE ---
    // Mały, półprzezroczysty przycisk przy lewej krawędzi odtwarzacza
    // (youtube.com, m.youtube.com, music.youtube.com, Shorts, osadzone
    // odtwarzacze /embed i youtube-nocookie). Jedno kliknięcie = lektor
    // CAŁKOWICIE wyłączony (ON/OFF skryptu) albo włączony i od razu czyta.
    // Przycisk NIE siedzi w strukturze odtwarzacza (na m.youtube nakładka
    // sterowania leży nad odtwarzaczem i zasłoniłaby go) — jest position:fixed
    // i podąża za prostokątem odtwarzacza; w pełnym ekranie przenosi go
    // reparentDuoUI(), tak jak resztę panelu. Działa też przy ukrytym panelu.
    // ============================================================
    const YT_SPK_ID = 'duo-yt-speaker';
    const YT_SPK_MODE_KEY = 'duo_SpeakerMode';   // ostatni tryb: 'imt' (LIVE) / 'sync'
    let ytSpkEl = null, ytSpkBusy = false, ytSpkRaf = 0, ytSpkLastTap = 0, ytSpkTouch = null;

    function isYouTubeHost() {
        return /(^|\.)youtube(-nocookie)?\.com$/.test(HOST);
    }
    // „Lektor działa” = skrypt włączony ORAZ faktycznie czyta/przygotowuje.
    function ytSpeakerActive() {
        return !!(masterPower && (imtLektorEnabled || enabled || preparing));
    }
    function ytSpeakerTargetRect() {
        let best = null, bestArea = 0;
        findAllVideos().forEach((v) => {
            try {
                if (v.closest('#inline-preview-player')) return;   // podgląd po najechaniu myszą
                const host = v.closest('.html5-video-player') || v;
                const r = host.getBoundingClientRect();
                const a = r.width * r.height;
                if (r.width >= 150 && r.height >= 90 && a > bestArea && isVisibleElement(host)) { bestArea = a; best = r; }
            } catch (e) {}
        });
        return best;
    }
    function buildYtSpeaker() {
        const NS = 'http://www.w3.org/2000/svg';
        let coarse = false;
        try { coarse = window.matchMedia('(pointer: coarse)').matches; } catch (e) {}
        const size = coarse ? 40 : 32;   // na dotyku większy cel
        // DIV, nie BUTTON i bez tabindex: nie przejmuje fokusu, więc skróty
        // klawiszowe YouTube (spacja, K, F…) działają dalej po kliknięciu.
        const el = document.createElement('div');
        el.id = YT_SPK_ID;
        el.setAttribute('role', 'button');
        el.dataset.size = String(size);
        el.style.cssText = 'position:fixed;left:0;top:0;width:' + size + 'px;height:' + size + 'px;z-index:2147483646;display:none;align-items:center;justify-content:center;box-sizing:border-box;margin:0;padding:0;border-radius:50%;background:rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.35);cursor:pointer;opacity:.55;transition:opacity .15s,transform .12s;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;touch-action:manipulation;pointer-events:auto;';
        const svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.style.cssText = 'width:62%;height:62%;display:block;pointer-events:none;';
        const mk = (d, fill, stroke) => {
            const pth = document.createElementNS(NS, 'path');
            pth.setAttribute('d', d);
            pth.setAttribute('fill', fill);
            if (stroke) {
                pth.setAttribute('stroke', stroke);
                pth.setAttribute('stroke-width', '2');
                pth.setAttribute('stroke-linecap', 'round');
            }
            svg.appendChild(pth);
            return pth;
        };
        el.__duoBody = mk('M3 9h4l5-4v14l-5-4H3z', '#fff', null);                                   // głośnik
        el.__duoWaves = mk('M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11', 'none', '#fff');      // fale = WŁ.
        el.__duoCross = mk('M16 9.5l5 5M21 9.5l-5 5', 'none', '#ff6b6b');                           // krzyżyk = WYŁ.
        el.appendChild(svg);

        const act = (e) => {
            try { e.preventDefault(); e.stopPropagation(); } catch (err) {}
            if (e.type === 'touchend' && ytSpkTouch && e.changedTouches && e.changedTouches[0]) {
                // palec przesunął się (przewijanie strony) — to nie było stuknięcie
                const t = e.changedTouches[0];
                if (Math.abs(t.clientX - ytSpkTouch.x) > 12 || Math.abs(t.clientY - ytSpkTouch.y) > 12) return;
            }
            const now = Date.now();
            if (now - ytSpkLastTap < 450) return;   // touchend + click = jedno stuknięcie
            ytSpkLastTap = now;
            ytSpeakerToggle();
        };
        el.addEventListener('click', act);
        el.addEventListener('touchend', act);
        el.addEventListener('touchstart', (e) => {
            e.stopPropagation();
            const t = e.touches && e.touches[0];
            ytSpkTouch = t ? { x: t.clientX, y: t.clientY } : null;
        }, { passive: true });
        // Nie przepuszczamy zdarzeń do odtwarzacza (klik = pauza, dwuklik =
        // pełny ekran) i nie zabieramy fokusu.
        ['mousedown', 'pointerdown'].forEach((n) => el.addEventListener(n, (e) => { e.stopPropagation(); e.preventDefault(); }));
        ['mouseup', 'pointerup', 'dblclick', 'contextmenu'].forEach((n) => el.addEventListener(n, (e) => { e.stopPropagation(); if (n !== 'mouseup' && n !== 'pointerup') e.preventDefault(); }));
        el.addEventListener('mouseenter', () => { el.style.opacity = '1'; });
        el.addEventListener('mouseleave', () => { el.style.opacity = '.55'; });
        return el;
    }
    function updateYtSpeaker() {
        if (SLEEP_MODE || !document.body || !isYouTubeHost()) return;
        const r = ytSpeakerTargetRect();
        if (!r) { if (ytSpkEl) ytSpkEl.style.display = 'none'; return; }
        if (!ytSpkEl) ytSpkEl = document.getElementById(YT_SPK_ID) || buildYtSpeaker();
        const parent = getFullscreenEl() || document.body;
        if (ytSpkEl.parentNode !== parent) { try { parent.appendChild(ytSpkEl); } catch (e) {} }

        // pozycja: lewa krawędź, środek WIDOCZNEJ części odtwarzacza
        const size = parseInt(ytSpkEl.dataset.size, 10) || 32;
        const vw = window.innerWidth, vh = window.innerHeight;
        const top = Math.max(r.top, 0), bottom = Math.min(r.bottom, vh);
        const left = Math.max(r.left, 0);
        if (bottom - top < size + 12 || r.right < size + 16 || left > vw - size - 16) { ytSpkEl.style.display = 'none'; return; }
        ytSpkEl.style.left = Math.round(left + 8) + 'px';
        ytSpkEl.style.top = Math.round(top + (bottom - top) / 2 - size / 2) + 'px';
        ytSpkEl.style.display = 'flex';

        const on = ytSpeakerActive();
        if (ytSpkEl.dataset.on !== String(on)) {
            ytSpkEl.dataset.on = String(on);
            ytSpkEl.__duoWaves.style.display = on ? '' : 'none';
            ytSpkEl.__duoCross.style.display = on ? 'none' : '';
            ytSpkEl.__duoBody.setAttribute('fill', on ? '#fff' : '#bbb');
            ytSpkEl.style.borderColor = on ? 'rgba(120,255,150,.75)' : 'rgba(255,255,255,.35)';
            ytSpkEl.title = on ? 'Lektor WŁĄCZONY — kliknij, aby całkowicie wyłączyć' : 'Lektor WYŁĄCZONY — kliknij, aby włączyć';
            ytSpkEl.setAttribute('aria-label', ytSpkEl.title);
        }
    }
    async function ytSpeakerToggle() {
        if (ytSpkBusy) return;
        ytSpkBusy = true;
        if (ytSpkEl) ytSpkEl.style.transform = 'scale(.85)';
        try {
            if (ytSpeakerActive()) {
                // WYŁĄCZ całkowicie. Zwykłe OFF kasuje „ostatni tryb”, więc
                // zapamiętujemy go osobno — żeby włączenie wróciło do tego samego.
                try { localStorage.setItem(YT_SPK_MODE_KEY, imtLektorEnabled ? 'imt' : 'sync'); } catch (e) {}
                await toggleMasterPower();
            } else {
                let resumedByMaster = false;
                if (!masterPower) {
                    const pre = localStorage.getItem('duo_LastMode');
                    resumedByMaster = (pre === 'imt' || pre === 'sync');   // wtedy tryb startuje samo włączenie
                    await toggleMasterPower();
                }
                if (!resumedByMaster && !imtLektorEnabled && !enabled && !preparing) {
                    let mode = 'imt';
                    try { if (localStorage.getItem(YT_SPK_MODE_KEY) === 'sync') mode = 'sync'; } catch (e) {}
                    if (mode === 'sync') await toggleLektor(); else await toggleImmersiveLektor();
                }
            }
        } catch (e) {
            console.warn('[DUO] Głośniczek YouTube:', e);
        } finally {
            ytSpkBusy = false;
            if (ytSpkEl) ytSpkEl.style.transform = '';
            updateYtSpeaker();
        }
    }
    function initYtSpeaker() {
        if (SLEEP_MODE || !isYouTubeHost()) return;
        const sched = () => {
            if (ytSpkRaf) return;
            ytSpkRaf = requestAnimationFrame(() => { ytSpkRaf = 0; updateYtSpeaker(); });
        };
        setInterval(() => { if (document.visibilityState === 'visible') updateYtSpeaker(); }, 500);   // nowe odtwarzacze, zmiana stanu, nawigacja SPA (v4.2.13: nie w tle)
        window.addEventListener('scroll', sched, { capture: true, passive: true });
        window.addEventListener('resize', sched, { passive: true });
        ['fullscreenchange', 'webkitfullscreenchange', 'yt-navigate-finish'].forEach((n) => document.addEventListener(n, sched));
        updateYtSpeaker();
    }

    let enabled = false;
    let audioCtx = null;
    let masterGain = null;
    let compressorNode = null;
    let curSyncAudio = null, curSyncUrl = null, curSyncIdx = null;
    let lastSyncTime = -1, lastPlayedIdx = -1, syncGenRate = 1.3;
    let lastSyncWallTime = 0; // v3.7.1: zegar systemowy do rozróżnienia buforowania od realnego przewinięcia
    let syncJustReset = false;
    const RESET_THRESHOLD_SECONDS = 2.0;
    let syncMode = false, syncVideoId = null, syncSegments = null, syncBlobs = null;
    let preparing = false, liveListenMode = false;
    const pendingSyncQueue = [];

    let imtLektorEnabled = false, imtSpeaking = false, imtLastSubtitle = '', imtSpeakStartedAt = 0, imtHiddenAt = 0;
    let imtCurrentAudio = null, imtCurrentUrl = null;
    const imtQueue = [];
    let imtGenerating = false;
    let lastSubtitleSpokenAt = 0;

    // --- ANTI-REPEAT v3 ---
    const REPEAT_WINDOW_MS = 12000;
    const recentSpoken = [];
    function textsSimilar(a, b) {
        if (!a || !b) return false;
        if (a === b) return true;
        if (a.startsWith(b) || b.startsWith(a)) return true;
        if (a.includes(b) || b.includes(a)) return Math.abs(a.length - b.length) <= 30;
        return false;
    }
    function clearSpokenHistory() {
        recentSpoken.length = 0;
        imtLastSubtitle = '';
        lastSubtitleSpokenAt = 0;
    }
    function touchRecent(text) {
        const now = Date.now();
        for (const r of recentSpoken) {
            if (textsSimilar(r.text, text)) { r.at = now; r.text = text; return; }
        }
        recentSpoken.unshift({ text, at: now });
        if (recentSpoken.length > 12) recentSpoken.pop();
    }
    function markRecentlyFinished(text) {
        const now = Date.now();
        for (const r of recentSpoken) {
            if (textsSimilar(r.text, text)) { r.at = now; return; }
        }
        recentSpoken.unshift({ text, at: now });
        if (recentSpoken.length > 12) recentSpoken.pop();
    }

    let lastSpokenText = '';
    const spokenHistory = [];
    function registerSpokenText(text) {
        if (!text) return;
        lastSpokenText = String(text);
        spokenHistory.unshift({ text: lastSpokenText, at: Date.now() });
        if (spokenHistory.length > 30) spokenHistory.pop();
        updateSpokenPanelLive();
    }

    // --- CENZURA / BLOKADY ---
    let filterEnabled = localStorage.getItem('duo_FilterEnabled') !== 'false';
    let filterMode = localStorage.getItem('duo_FilterMode') || 'remove';
    let customProfanity = [];
    try { customProfanity = JSON.parse(localStorage.getItem('duo_CustomProfanity') || '[]'); } catch (e) { customProfanity = []; }
    const BUILT_IN_PROFANITY = ['kurwa', 'kurwy', 'kurwo', 'chuj', 'chuja', 'chujem', 'pizda', 'pizdy', 'jebac', 'jebać', 'jebany', 'jebana', 'jebane', 'spierdalaj', 'wypierdalaj', 'pierdalac', 'pierdolić', 'pierdole', 'skurwysyn', 'skurwiel', 'zajebany', 'pojebany', 'huj', 'cipa', 'gówno', 'gowno', 'dupek', 'zaluj', 'zjebany', 'wyjebane'];
    function saveCustomProfanity() { try { localStorage.setItem('duo_CustomProfanity', JSON.stringify(customProfanity)); } catch (e) {} }
    function censorText(text) {
        let t = String(text || '');
        if (!filterEnabled) return t;
        const words = BUILT_IN_PROFANITY.concat(customProfanity);
        for (const w of words) {
            if (!w) continue;
            const re = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
            if (filterMode === 'remove') t = t.replace(re, '');
            else if (filterMode === 'beep') t = t.replace(re, '[BEEP]');
            else t = t.replace(re, (m) => m[0] + '*'.repeat(Math.max(1, m.length - 1)));
        }
        return t.replace(/\s{2,}/g, ' ').trim();
    }

    const BLOCKED_KEY = 'duo_BlockedPhrases';
    let blockedPhrases = [];
    try { blockedPhrases = JSON.parse(localStorage.getItem(BLOCKED_KEY) || '[]'); } catch (e) { blockedPhrases = []; }
    function saveBlockedPhrases() { try { localStorage.setItem(BLOCKED_KEY, JSON.stringify(blockedPhrases.slice(0, 500))); } catch (e) {} }
    function addBlockedPhrase(p) {
        const t = clean(p).toLowerCase();
        if (!t || t.length < 2) return false;
        if (blockedPhrases.some(b => b.toLowerCase() === t)) return false;
        blockedPhrases.unshift(t); saveBlockedPhrases(); return true;
    }
    function removeBlockedPhrase(idx) { blockedPhrases.splice(idx, 1); saveBlockedPhrases(); }
    function isPhraseBlocked(text) {
        const t = ' ' + String(text || '').toLowerCase() + ' ';
        return blockedPhrases.some(b => t.includes(b.toLowerCase()));
    }

    // --- CZYSZCZENIE TEKSTU ---
    function cleanSubtitleText(t) {
        return String(t || '')
            .replace(/<[^>]*>/g, ' ')
            .replace(/\{[^}]*\}/g, ' ')
            .replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&#39;|&apos;/gi, "'").replace(/&quot;/gi, '"')
            .replace(/\s*-\s*$/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }
    function isSystemPrompt(t) {
        const s = String(t || '').toLowerCase().trim();
        if (!s) return true;
        const bad = ['włącz napisy', 'włącz podpis', 'subtitles unavailable', 'napisy są niedostępne', 'przetłumaczono przez', 'translated by', 'napisy wył', 'loading', 'ładowanie', 'an error occurred', 'błąd odtwarzania', 'playback error', 'subscribe', 'subskrybuj'];
        return bad.some(b => s.includes(b));
    }
    function cleanTranslationJunk(t) {
        let s = String(t || '');
        s = s.replace(/^\s*(►|»|–|-)\s*/g, '');
        s = s.replace(/\b\d{1,2}:\d{2}(:\d{2})?\b/g, ' ');
        s = s.replace(/[«»【】]/g, ' ');
        const parts = s.split(/\s*✦\s*|\s*\|\s*/g).filter(Boolean);
        if (parts.length > 1) {
            let best = parts[0];
            for (const p of parts) if (profPolishScore(p) > profPolishScore(best)) best = p;
            // Nie odrzucaj pozostalych fragmentow: serwer dostawal wtedy
            // urwany napis, co brzmialo jak ucinanie koncowek wyrazow.
            s = parts.join(' '); void best;
        }
        return s.replace(/\s+/g, ' ').trim();
    }
    function stripPlayerUiJunk(t) {
        let s = String(t || '');
        s = s.replace(/\b(1080p|720p|480p|360p|4k|hdr|auto)\b/gi, ' ');
        s = s.replace(/^[\s•·▪—-]+|[\s•·▪—-]+$/g, '');
        return s.replace(/\s+/g, ' ').trim();
    }
    function stripSoundCues(t) {
        const before = String(t || '');
        const after = before
            .replace(/[\(\[\{][^\)\]\}]{0,40}[\)\]\}]/g, ' ')
            .replace(/♪[^♪]*♪|♪/g, ' ')
            .replace(/♫|♬|🎵|🎶/g, ' ')
            .replace(/\s+/g, ' ').trim();
        // Jesli sprzatanie skasowaloby wiekszosc napisu, zostaw
        // oryginal — uciety napis brzmi jak urwane wyrazy.
        if (before && after.length < before.length * 0.5) return before.trim();
        return after;
    }

    // --- PARSERY PLIKÓW NAPISÓW ---
    function detectFormat(content) {
        const c = String(content || '');
        if (/^\s*WEBVTT/m.test(c)) return 'vtt';
        // Netflix: DFXP/TTML w XML — musi być przed ass/srt.
        if (/<tt[\s>]/i.test(c) || /<p\s+[^>]*begin\s*=/i.test(c)) return 'dfxp';
        if (/^Dialogue:/mi.test(c) || /^\s*\[Script Info\]/mi.test(c)) return 'ass';
        if (/\d+\s*\n\s*\d{2}:\d{2}:\d{2}[,.]\d{3}\s*-->/.test(c)) return 'srt';
        if (/^\s*\d+:\d{2}[.,]\d+\s*$/m.test(c)) return 'lrc';
        if (/^\s*\d+:\d{2}:\d{2}[.,]\d+\s*,\s*\d+:\d{2}:\d{2}[.,]\d+\s*$/m.test(c)) return 'sbv';
        if (/\{0:\d+\}/.test(c)) return 'sub';
        return 'txt';
    }
    // === Netflix DFXP / TTML ===
    // Czas w atrybutach begin/end bywa "00:01:23.456", "01:23.456" albo "83.456s".
    function tcDfxp(v, tickRate) {
        const s = String(v || '').trim();
        // IMSC1.1 Netflixa: begin="123456t" (ticki, ttp:tickRate)
        let mt = s.match(/^(\d+(?:\.\d+)?)t$/i);
        if (mt) return parseFloat(mt[1]) / (tickRate || 10000000);
        let m = s.match(/^(?:(\d+):)?(\d{1,2}):(\d{2})[.,](\d{1,3})$/);
        if (m) return (+m[1] || 0) * 3600 + (+m[2]) * 60 + (+m[3]) + (+String(m[4]).padEnd(3, '0')) / 1000;
        m = s.match(/^(?:(\d+):)?(\d{1,2}):(\d{2})$/);
        if (m) return (+m[1] || 0) * 3600 + (+m[2]) * 60 + (+m[3]);
        m = s.match(/^(\d+(?:[.,]\d+)?)\s*s$/i);
        if (m) return parseFloat(String(m[1]).replace(',', '.'));
        m = s.match(/^(\d+(?:[.,]\d+)?)$/);
        if (m) return parseFloat(String(m[1]).replace(',', '.'));
        return 0;
    }
    function parseDfxp(content) {
        const c = String(content || '').replace(/\r/g, '');
        const segs = [];
        const tickRate = parseInt((c.match(/ttp:tickRate\s*=\s*"(\d+)"/i) || [])[1], 10) || 10000000;
        // <p begin="..." end="...">tekst</p>  (jedna lub wiecej linii)
        const re = /<p\b([^>]*)>([\s\S]*?)<\/p>/gi;
        let m;
        while ((m = re.exec(c)) !== null) {
            const attrs = m[1] || '';
            const bAttr = attrs.match(/\bbegin\s*=\s*"([^"]*)"/i) || attrs.match(/\bbegin\s*=\s*'([^']*)'/i);
            const eAttr = attrs.match(/\bend\s*=\s*"([^"]*)"/i) || attrs.match(/\bend\s*=\s*'([^']*)'/i);
            const start = bAttr ? tcDfxp(bAttr[1], tickRate) : null;
            if (start === null) continue;
            let end = eAttr ? tcDfxp(eAttr[1], tickRate) : null;
            let text = m[2] || '';
            // Usuwamy znaczniki <br>, <span>, <i>, {..} oraz encje.
            text = text.replace(/<br\s*\/?>/gi, ' ')
                .replace(/<[^>]+>/g, '')
                .replace(/\{[^}]*\}/g, '')
                .replace(/&nbsp;/gi, ' ')
                .replace(/&amp;/gi, '&')
                .replace(/&lt;/gi, '<')
                .replace(/&gt;/gi, '>')
                .replace(/&quot;/gi, '"')
                .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d))
                .replace(/\s+/g, ' ')
                .trim();
            if (!text) continue;
            let dur = (end !== null && end > start) ? (end - start) : null;
            if (dur === null) {
                // Bez end: szacujemy po długości tekstu (jak dla txt).
                dur = Math.max(1.2, text.length * 0.075);
            }
            segs.push({ start: Math.max(0, start), duration: Math.max(dur, 0.4), text: text });
        }
        if (!segs.length) {
            // Fallback: sam tekst, czasy policzone z dlugosci zdan.
            const sentences = c.replace(/<[^>]+>/g, ' ').replace(/\{[^}]*\}/g, ' ')
                .replace(/\n+/g, ' ').match(/[^.!?…]+[.!?…]*/g) || [];
            let t0 = 0;
            for (const s of sentences) {
                const s2 = s.trim();
                if (!s2) continue;
                const dur = Math.max(1.2, s2.length * 0.075);
                segs.push({ start: t0, duration: dur, text: s2 });
                t0 += dur + 0.1;
            }
        }
        segs.sort((a, b) => a.start - b.start);
        return segs;
    }
    function parseSubtitleFile(content, format, videoDuration) {
        const c = String(content || '').replace(/\r/g, '');
        if (format === 'dfxp') return parseDfxp(content);
        const segs = [];
        const push = (start, dur, text) => {
            const t = cleanSubtitleText(text);
            if (t) segs.push({ start: Math.max(0, start), duration: Math.max(dur, 0.4), text: t });
        };
        const tc = (s) => {
            const m = String(s).trim().match(/(?:(\d+):)?(\d{1,2}):(\d{2})[.,](\d{1,3})/);
            if (!m) return 0;
            return (+m[1] || 0) * 3600 + (+m[2]) * 60 + (+m[3]) + (+String(m[4]).padEnd(3, '0')) / 1000;
        };
        if (format === 'srt' || format === 'vtt') {
            const blocks = c.split(/\n{2,}/);
            for (const b of blocks) {
                const m = b.match(/(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3}|\d{1,2}:\d{2}[.,]\d{1,3})\s*-->\s*(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3}|\d{1,2}:\d{2}[.,]\d{1,3})/);
                if (!m) continue;
                const text = b.split('\n').filter(l => !l.includes('-->') && !/^\s*\d+\s*$/.test(l) && !/^\s*WEBVTT/.test(l)).join(' ');
                push(tc(m[1]), tc(m[2]) - tc(m[1]), text);
            }
        } else if (format === 'ass' || format === 'ssa') {
            c.split('\n').forEach(line => {
                const m = line.match(/^Dialogue:\s*[^,]*,(\d+:\d{2}:\d{2}\.\d{2}),(\d+:\d{2}:\d{2}\.\d{2}),[^,]*,[^,]*,[^,]*,[^,]*,[^,]*,[^,]*,[^,]*,(.*)$/);
                if (m) push(tc(m[1]), tc(m[2]) - tc(m[1]), m[3].replace(/\{[^}]*\}/g, '').replace(/\\N/gi, ' '));
            });
        } else if (format === 'lrc') {
            const items = [];
            c.split('\n').forEach(line => {
                const m = line.match(/^\s*((?:\[\d+:\d{2}[.,]\d+\])+)(.*)$/);
                if (!m) return;
                const times = m[1].match(/\[(\d+):(\d{2})[.,](\d{1,3})\]/g) || [];
                const text = m[2].trim();
                times.forEach(tm => {
                    const mm = tm.match(/\[(\d+):(\d{2})[.,](\d{1,3})\]/);
                    if (mm) items.push({ t: (+mm[1]) * 60 + (+mm[2]) + (+String(mm[3]).padEnd(3, '0')) / 1000, text });
                });
            });
            items.sort((a, b) => a.t - b.t);
            for (let i = 0; i < items.length; i++) push(items[i].t, (items[i + 1] ? items[i + 1].t - items[i].t : 3), items[i].text);
        } else if (format === 'sbv') {
            const lines = c.split('\n');
            for (let i = 0; i < lines.length - 1; i++) {
                const m = lines[i].match(/^\s*(\d+:\d{2}:\d{2})[.,](\d{1,3}),(\d+:\d{2}:\d{2})[.,](\d{1,3})\s*$/);
                if (m && lines[i + 1].trim()) {
                    push(tc(m[1] + ',' + m[2]), tc(m[3] + ',' + m[4]) - tc(m[1] + ',' + m[2]), lines[i + 1]);
                    i++;
                }
            }
        } else {
            const sentences = c.replace(/\n+/g, ' ').match(/[^.!?…]+[.!?…]*/g) || [];
            let t0 = 0;
            sentences.forEach(s => {
                const s2 = s.trim();
                if (!s2) return;
                const dur = Math.max(1.2, s2.length * 0.075);
                push(t0, dur, s2);
                t0 += dur + 0.1;
            });
        }
        segs.sort((a, b) => a.start - b.start);
        return segs;
    }

    // --- POBIERANIE NAPISÓW Z YOUTUBE ---
    // Sciezka awaryjna dla Netflixa: Netflix trzyma napisy w video.textTracks.
// Gdy hak JSON.parse nie zadzialal (CSP itp.), mozna odczytac PELNE
// cue'y (z czasami) prosto z odtwarzacza — bez zadnego haka i bez sieci.
// Kolejnosc prob: hak -> textTracks -> dopiero potem DOM.
function nfTracksFromVideoCues() {
    try {
        const vids = findAllVideos();
        for (const v of vids) {
            let tracks = [];
            try { tracks = Array.from(v.textTracks || []); } catch (e) {}
            if (!tracks.length) continue;
            // Preferujemy polskie; przydatne sa te w trybie hidden (Netflix
            // trzyma napisy jako 'hidden', a 'showing' to warstwa renderowana).
            const isPl = (t) => {
                try {
                    const raw = [t.language, t.label, t.id, t.kind].filter(Boolean).join(' ').toLowerCase();
                    return /(^|[^a-z])(pl|pol|polski|polish)([^a-z]|$)/i.test(raw);
                } catch (e) { return false; }
            };
            const pools = [];
            const pl = tracks.filter(isPl);
            if (pl.length) pools.push(pl);
            pools.push(tracks);
            for (const pool of pools) {
                for (const t of pool) {
                    let cues = null;
                    try { cues = t.cues; } catch (e) {}
                    if (!cues || !cues.length) continue;
                    const segs = [];
                    for (let i = 0; i < cues.length; i++) {
                        const c = cues[i];
                        const text = String(c.text || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
                        if (!text) continue;
                        const start = Number(c.startTime) || 0;
                        const end = Number(c.endTime) || (start + 2);
                        segs.push({ start, duration: Math.max(end - start, 0.4), text });
                    }
                    if (segs.length) return segs;
                }
            }
        }
    } catch (e) {}
    return null;
}

// Sciaga pelne napisy Netflixa i zamienia na segmenty z czasami.
// Kolejnosc: (1) bufor/hak dla BIEZACEGO odcinka, (2) pelne cue'y z odtwarzacza,
// (3) ostatnio przechwycony manifest, (4) dopiero potem blad.
// Pokrycie napisow: do ktorej sekundy filmu siegaja kwestie.
function nfSegsCoverage(segs) {
    let end = 0;
    for (const s of (segs || [])) end = Math.max(end, (Number(s.start) || 0) + (Number(s.duration || s.orig_duration) || 0));
    return end;
}
// true, gdy napisy wygladaja na NIEPELNE (np. same cue'y z odtwarzacza Netflixa,
// ktory trzyma tylko te w poblizu aktualnej pozycji) — wtedy Hybryda dalaby film „do polowy”.
function nfLooksPartial(segs) {
    try {
        if (!isNetflixHost() || !segs || !segs.length) return false;
        if (segs.__partial) return true;
        const v = getVideoEl();
        const dur = (v && isFinite(v.duration)) ? v.duration : 0;
        if (dur < 300) return false;
        return nfSegsCoverage(segs) < dur * 0.5;
    } catch (e) { return false; }
}
function nfFmtTime(sec) {
    sec = Math.max(0, Math.round(sec || 0));
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0');
}
// Pokazuje, ile pobrano; przy niepelnych napisach pyta, czy kontynuowac. true = jedziemy dalej.
function nfConfirmSegments(segs) {
    if (!isNetflixHost()) return true;
    const end = nfSegsCoverage(segs);
    try { setPrepareStatus('📺 Netflix: pobrano ' + segs.length + ' kwestii (do ' + nfFmtTime(end) + ') — generuję…'); } catch (e) {}
    console.debug('[DUO] Netflix napisy:', segs.length, 'kwestii, do', nfFmtTime(end), segs.__partial ? '(CZESCIOWE z odtwarzacza)' : '');
    if (!nfLooksPartial(segs)) return true;
    const v = getVideoEl();
    const dur = (v && isFinite(v.duration)) ? v.duration : 0;
    return confirm('Netflix udostępnił tylko CZĘŚĆ napisów (' + segs.length + ' kwestii, do ' + nfFmtTime(end)
        + (dur ? ' z ' + nfFmtTime(dur) : '') + ').\n\nOdśwież stronę (F5) przy otwartym filmie i spróbuj ponownie, '
        + 'żeby pobrać pełne napisy.\n\nKontynuować mimo to z niepełnymi napisami?');
}
// Ostatnio przechwycony movieId (manifest zadany przy starcie odtwarzania = biezacy odcinek).
function nfLastMovieId() {
    let last = '';
    for (const k of NF_TRACKS.keys()) { if ((NF_TRACKS.get(k) || []).length) last = k; }
    return last;
}

// Sciaga pelne napisy Netflixa i zamienia na segmenty z czasami.
// Kolejnosc: (1) PELNY plik napisow z manifestu dla biezacego odcinka (czekamy do ~8 s),
// (2) ostatnio przechwycony manifest, (3) dopiero na koncu cue'y z odtwarzacza —
// te sa NIEPELNE (Netflix laduje je tylko wokol biezacej pozycji), wiec oznaczamy je __partial.
async function fetchNetflixSegments() {
    let mid = '';
    for (let i = 0; i < 32; i++) {
        mid = nfCurrentMovieId();
        if (mid) break;
        if (i >= 6 && nfLastMovieId()) break;     // mamy jakis manifest — nie czekamy dalej
        if (i % 4 === 0) nfAskMain();
        await new Promise(r => setTimeout(r, 250));
    }
    if (!mid) mid = nfLastMovieId();
    if (mid) {
        const track = nfPickTrack(NF_TRACKS.get(mid));
        if (track) {
            const segs = await nfSegmentsForTrack(mid, track);
            if (segs && segs.length) return segs;
        }
    }
    // Awaryjnie: cue'y z odtwarzacza (bez haka, bez sieci) — CZESCIOWE.
    let fromCues = null;
    for (let i = 0; i < 12; i++) {
        fromCues = nfTracksFromVideoCues();
        if (fromCues && fromCues.length) break;
        await new Promise(r => setTimeout(r, 500));
    }
    if (fromCues && fromCues.length) { fromCues.__partial = true; return fromCues; }
    throw new Error('Nie znaleziono pełnych napisów Netflixa. '
        + 'Odśwież stronę (F5) przy otwartym filmie i włącz napisy w odtwarzaczu.');
}

async function fetchTranscriptSegmentsAuto() {
    // Netflix: pelne napisy z wewnetrznego manifestu (hak JSON.parse).
    if (isNetflixHost()) return await fetchNetflixSegments();
    const vid = getYTVideoId();
    if (!vid) throw new Error('Nie znaleziono ID filmu (auto-pobieranie działa na YouTube i Netflix; inne serwisy: 📄 Plik lub 🌐 LIVE).');
    return await ytFetchTranslatedSegments(vid);
}

// ============================================================
// --- YT-AUTO-BEGIN: napisy YouTube -> Translator API Chrome -> lektor ---
// 1) Adres napisow (z tokenem) bierzemy z Resource Timing — to, co odtwarzacz sam
//    pobral (/api/timedtext). Nie wymaga to haka w stronie (dziala w piaskownicy
//    Tampermonkeya i przy Trusted Types YouTube). Gdy odtwarzacz jeszcze nic nie
//    pobral, na chwile wlaczamy CC, zlapiemy adres i przywracamy poprzedni stan.
// 2) Pobieramy plik (json3/XML) -> segmenty {start, duration, text}.
// 3) Do Translatora Chrome (en->pl, lokalnie) ida WYLACZNIE same zdania; czasy zostaja
//    w segmentach, a przetlumaczony tekst wraca pod ten sam indeks.
// Usuniecie funkcji: wytnij bloki YT-AUTO-BEGIN/END i linie z komentarzem YT-AUTO.
// ============================================================
function ytFindTimedtextUrl(vid) {
    try {
        const list = performance.getEntriesByType('resource') || [];
        for (let i = list.length - 1; i >= 0; i--) {
            const n = list[i].name || '';
            if (n.indexOf('/api/timedtext') === -1) continue;
            let u; try { u = new URL(n); } catch (e) { continue; }
            if (u.searchParams.get('v') !== vid) continue;
            if (u.searchParams.get('tlang')) continue;      // pomijamy auto-tlumaczenie YouTube
            return n;
        }
    } catch (e) {}
    return null;
}
async function ytCaptureTimedtextUrl(vid) {
    let url = ytFindTimedtextUrl(vid);
    if (url) return url;
    const btn = document.querySelector('.ytp-subtitles-button');
    if (!btn) return null;
    const wasOn = btn.getAttribute('aria-pressed') === 'true';
    if (!wasOn) { try { btn.click(); } catch (e) {} }
    else { try { btn.click(); await new Promise(r => setTimeout(r, 250)); btn.click(); } catch (e) {} } // wylacz i wlacz, zeby odtwarzacz zaladowal napisy
    for (let i = 0; i < 30 && !url; i++) {
        await new Promise(r => setTimeout(r, 200));
        url = ytFindTimedtextUrl(vid);
    }
    if (!wasOn) { try { if (btn.getAttribute('aria-pressed') === 'true') btn.click(); } catch (e) {} }
    return url;
}
function ytDecodeEntities(s) {
    return s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
        .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
        .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}
// json3 albo XML -> segmenty (sekundy). Dopiski aAppend sklejane, nakladajace sie konce przycinane.
function ytParseCaptions(raw) {
    raw = String(raw || '').trim();
    const cues = [];
    if (raw.charAt(0) === '{') {
        const evs = (JSON.parse(raw).events || []).filter(e => e && e.segs);
        let pending = null;
        const flush = () => { if (pending && pending.text.trim()) cues.push(pending); pending = null; };
        for (const e of evs) {
            const text = e.segs.map(x => x.utf8 || '').join('').replace(/\s+/g, ' ').trim();
            if (!text) continue;
            const st = (e.tStartMs || 0) / 1000, en = st + ((e.dDurationMs || 2000) / 1000);
            if (e.aAppend === 1 && pending) { pending.text += ' ' + text; pending.end = en; continue; }
            flush();
            pending = { start: st, end: en, text };
        }
        flush();
    } else {
        const re = /<(text|p)\b([^>]*)>([\s\S]*?)<\/\1>/g;
        const attr = (a, n) => { const m = a.match(new RegExp('\\b' + n + '="([^"]*)"')); return m ? m[1] : null; };
        let m;
        while ((m = re.exec(raw))) {
            const tx = ytDecodeEntities(ytDecodeEntities(m[3].replace(/<[^>]+>/g, ''))).replace(/\s+/g, ' ').trim();
            if (!tx) continue;
            const st = m[1] === 'text' ? parseFloat(attr(m[2], 'start')) : (+attr(m[2], 't')) / 1000;
            const du = m[1] === 'text' ? parseFloat(attr(m[2], 'dur') || '2') : (+(attr(m[2], 'd') || 2000)) / 1000;
            cues.push({ start: st, end: st + du, text: tx });
        }
    }
    cues.sort((a, b) => a.start - b.start);
    for (let i = 0; i < cues.length - 1; i++) {
        if (cues[i].end > cues[i + 1].start) cues[i].end = Math.max(cues[i].start + 0.3, cues[i + 1].start);
    }
    return cues.map(c => ({ start: c.start, duration: Math.max(c.end - c.start, 0.4), text: c.text }));
}
let ytTranslator = null, ytTranslatorLang = '';
async function ytGetTranslator(srcLang) {
    srcLang = String(srcLang || 'en').toLowerCase().split('-')[0];
    if (ytTranslator && ytTranslatorLang === srcLang) return ytTranslator;
    if (typeof self.Translator === 'undefined') throw new Error('Ta wersja Chrome nie ma Translator API (potrzebny Chrome 138+).');
    const av = await self.Translator.availability({ sourceLanguage: srcLang, targetLanguage: 'pl' });
    if (av === 'unavailable') throw new Error('Chrome nie obsługuje tłumaczenia ' + srcLang + '→pl.');
    if (av === 'downloadable' || av === 'downloading') throw new Error('Pakiet ' + srcLang + '→pl nie jest zainstalowany (chrome://on-device-translation-internals).');
    ytTranslator = await self.Translator.create({ sourceLanguage: srcLang, targetLanguage: 'pl' });
    ytTranslatorLang = srcLang;
    return ytTranslator;
}
// Tlumaczy tylko pole text; start/duration nietkniete. Kolejnosc: od aktualnej pozycji filmu w przod, potem wstecz.
async function ytTranslateSegments(segs, srcLang) {
    // Wybrany silnik sieciowy (Google RPC/Bing/DeepL/AI/rotacja) zamiast
    // lokalnego Translatora Chrome — patrz sekcja TŁUMACZENIE SIECIOWE niżej.
    if (extTrNetOn()) return await extTrTranslateSegmentsNet(segs, srcLang);
    const tr = await ytGetTranslator(srcLang);
    const v = getVideoEl();
    const now = v ? v.currentTime : 0;
    let first = 0;
    while (first < segs.length && segs[first].start + segs[first].duration < now) first++;
    const order = [];
    for (let i = first; i < segs.length; i++) order.push(i);
    for (let i = 0; i < first; i++) order.push(i);
    let done = 0;
    for (const idx of order) {
        let out = '';
        try { out = await tr.translate(segs[idx].text); } catch (e) { out = ''; }
        segs[idx].text = String(out || '').replace(/\s+/g, ' ').trim();
        if (++done % 25 === 0) { try { setPrepareStatus('🌐 Tłumaczę (Translator Chrome): ' + done + '/' + segs.length); } catch (e) {} }
    }
    return segs.filter(s => s.text);
}
async function ytFetchTranslatedSegments(vid) {
    setPrepareStatus('📥 Pobieram napisy YouTube…');
    const url = await ytCaptureTimedtextUrl(vid);
    if (!url) throw new Error('Nie udało się pobrać napisów YouTube (film bez napisów albo odtwarzacz jeszcze nie gotowy — włącz CC i spróbuj ponownie).');
    let lang = 'en';
    try { lang = new URL(url).searchParams.get('lang') || 'en'; } catch (e) {}
    let raw = '';
    for (const fmt of ['json3', '']) {
        try {
            const u = new URL(url);
            if (fmt) u.searchParams.set('fmt', fmt);
            const r = await fetch(u.toString(), { credentials: 'include' });
            raw = r.ok ? await r.text() : '';
        } catch (e) { raw = ''; }
        if (raw && raw.trim()) break;
    }
    if (!raw || !raw.trim()) throw new Error('YouTube zwrócił pusty plik napisów.');
    let segs = ytParseCaptions(raw);
    if (!segs.length) throw new Error('Napisy YouTube są puste.');
    if (/^pl/i.test(lang)) return segs;                       // polskie — bez tłumaczenia
    setPrepareStatus('🌐 Tłumaczę (Translator Chrome): 0/' + segs.length);
    segs = await ytTranslateSegments(segs, lang);
    if (!segs.length) throw new Error('Tłumaczenie nie zwróciło tekstu.');
    setPrepareStatus('✅ Napisy PL (Translator Chrome): ' + segs.length + ' kwestii');
    return segs;
}

// --- Automat: wejscie na film YouTube => pobierz, przetlumacz, czytaj (tryb na biezaco) ---
// v4.2.13: domyślnie WYŁĄCZONY — całe napisy tylko na żądanie (przycisk „⬇ Całe napisy”).
try { if (!localStorage.getItem('duo_OnDemandV1')) { localStorage.setItem('duo_YtAuto', 'false'); localStorage.setItem('duo_OnDemandV1', '1'); } } catch (e) {}
let ytAutoOn = localStorage.getItem('duo_YtAuto') === 'true';
let ytAutoVid = '', ytAutoBusy = false, ytAutoTimer = null;
function ytAutoMaybeStart() {
    try {
        if (ytAutoTimer) { clearTimeout(ytAutoTimer); ytAutoTimer = null; }
        if (SLEEP_MODE || !ytAutoOn || !masterPower || !isYouTubeHost()) return;
        if (location.pathname !== '/watch') return;
        const vid = getYTVideoId();
        if (!vid || vid === ytAutoVid || ytAutoBusy) return;
        // krotka zwloka: onVideoChanged zdazy zaladowac ewentualny cache, a player sie ustabilizuje
        ytAutoTimer = setTimeout(() => { ytAutoTimer = null; ytAutoRun(vid); }, 2000);
    } catch (e) {}
}
async function ytAutoRun(vid) {
    if (!ytAutoOn || !masterPower || ytAutoBusy || getYTVideoId() !== vid) return;
    if (syncMode && syncVideoId === vid) { ytAutoVid = vid; return; }   // wczytane z cache — nie nadpisujemy
    if (polishDubbingActive()) return;
    ytAutoBusy = true;
    try {
        try { await healthCheck(); } catch (e) { setPrepareStatus('⚠️ Serwer ' + getEngine().name + ' nie odpowiada — automat YouTube czeka.'); ytAutoBusy = false; return; }
        const segs = await ytFetchTranslatedSegments(vid);
        if (!ytAutoOn || getYTVideoId() !== vid) { ytAutoBusy = false; return; }
        ytAutoVid = vid;
        await startLiveListening(segs, vid);
    } catch (e) {
        ytAutoVid = vid;                                                 // bez ponawiania w kolko dla tego filmu
        try { setPrepareStatus('⚠️ Automat YouTube: ' + ((e && e.message) || e)); } catch (e2) {}
    }
    ytAutoBusy = false;
}
// --- YT-AUTO-END ---

    // ============================================================
    // --- NAKŁADKA NAPISÓW NA EKRANIE ---
    // ============================================================
    const CAP_OVERLAY_KEY = 'duo_CaptionOverlay';
    let captionOverlayEnabled = localStorage.getItem(CAP_OVERLAY_KEY) === 'true';
    let capEl = null, capDrag = null;
    function saveCapGeo() {
        if (!capEl) return;
        try { localStorage.setItem('duo_CapGeo', JSON.stringify({ left: capEl.style.left, top: capEl.style.top })); } catch (e) {}
    }
    function setCapPos(l, t) {
        if (!capEl) return;
        capEl.style.left = Math.max(0, Math.min(window.innerWidth - 80, l)) + 'px';
        capEl.style.top = Math.max(0, Math.min(window.innerHeight - 40, t)) + 'px';
    }
    function ensureCaptionOverlay() {
        if (capEl && document.body.contains(capEl)) return capEl;
        capEl = document.createElement('div');
        capEl.id = 'duo-caption-overlay';
        capEl.style.cssText = 'position:fixed;z-index:2147483646;max-width:60vw;background:rgba(0,0,0,.72);color:#fff;font:bold 15px Arial,sans-serif;padding:6px 10px;border-radius:5px;text-align:center;cursor:move;display:none;white-space:pre-wrap;line-height:1.3;text-shadow:0 1px 2px #000;';
        try {
            const geo = JSON.parse(localStorage.getItem('duo_CapGeo') || 'null');
            if (geo && geo.left) { capEl.style.left = geo.left; capEl.style.top = geo.top || '80px'; }
            else { capEl.style.left = '50%'; capEl.style.top = '80px'; }
        } catch (e) { capEl.style.left = '50%'; capEl.style.top = '80px'; }
        document.body.appendChild(capEl);
        reparentDuoUI();
        capEl.addEventListener('mousedown', (e) => {
            capDrag = { x: e.clientX, y: e.clientY, l: parseInt(capEl.style.left, 10) || 0, t: parseInt(capEl.style.top, 10) || 0 };
            e.preventDefault();
        });
        capEl.addEventListener('touchstart', (e) => {
            const t = e.touches[0];
            capDrag = { x: t.clientX, y: t.clientY, l: parseInt(capEl.style.left, 10) || 0, t: parseInt(capEl.style.top, 10) || 0 };
        }, { passive: true });
        window.addEventListener('mouseup', () => { if (capDrag) { capDrag = null; saveCapGeo(); } });
        window.addEventListener('touchend', () => { if (capDrag) { capDrag = null; saveCapGeo(); } });
        window.addEventListener('resize', () => {
            if (capEl && capEl.style.display === 'block') {
                setCapPos(parseInt(capEl.style.left, 10) || 0, parseInt(capEl.style.top, 10) || 0);
            }
        });
        return capEl;
    }
    function updateCaptionOverlay(text) {
        if (!captionOverlayEnabled || SLEEP_MODE || !masterPower) return;
        if (!document.body) return;
        ensureCaptionOverlay();
        if (capEl) {
            capEl.textContent = text || '—';
            capEl.style.opacity = text ? '1' : '0.4';
        }
    }
    function toggleCaptionOverlay() {
        captionOverlayEnabled = !captionOverlayEnabled;
        localStorage.setItem(CAP_OVERLAY_KEY, String(captionOverlayEnabled));
        if (captionOverlayEnabled) {
            ensureCaptionOverlay();
            updateCaptionOverlay(lastSpokenText);
            setPrepareStatus('💬 Napisy lektora na ekranie: WŁĄCZONE');
        } else {
            if (capEl) capEl.style.display = 'none';
            setPrepareStatus('💬 Napisy lektora na ekranie: WYŁĄCZONE');
        }
        ensureUI();
    }

    // ============================================================
    // --- SILNIK SYNCHRONIZACJI (Hybryda / Plik / Cache) ---
    // ============================================================
    function findSyncSegment(t) {
        const segs = syncSegments;
        if (!segs) return -1;
        for (let i = 0; i < segs.length; i++) {
            const s = segs[i];
            if (t >= s.start && t < s.start + Math.max(s.orig_duration, 0.1)) return i;
        }
        return -1;
    }
    function stopSyncSource() {
        if (curSyncAudio) {
            try { curSyncAudio.pause(); curSyncAudio.currentTime = 0; } catch (e) {}
            curSyncAudio.onended = null; curSyncAudio.onerror = null;
            curSyncAudio = null;
        }
        if (curSyncUrl) { try { URL.revokeObjectURL(curSyncUrl); } catch (e) {} curSyncUrl = null; }
        curSyncIdx = null;
    }
    function resetSyncState() {
        stopSyncSource();
        lastPlayedIdx = -1;
        pendingSyncQueue.length = 0;
        syncJustReset = true;
        updateNowReadingLabel('');
    }
    function clearSyncData() {
        stopSyncSource();
        syncMode = false; liveListenMode = false;
        syncVideoId = null; syncSegments = null; syncBlobs = null;
        lastPlayedIdx = -1; lastSyncTime = -1; lastSyncWallTime = 0;
        pendingSyncQueue.length = 0;
        resetSyncState();
        ensureUI();
    }
    async function loadSyncData(videoId, record) {
        syncVideoId = videoId;
        syncSegments = record.segments;
        syncBlobs = record.blobs;
        syncGenRate = Number(record.rate) || 1.3;
        syncMode = true;
        liveListenMode = false;
        curSyncIdx = null; lastPlayedIdx = -1; lastSyncTime = -1; lastSyncWallTime = 0;
        pendingSyncQueue.length = 0;
        ensureUI();
    }
    async function playSyncSegment(idx, video) {
        if (curSyncIdx === idx && curSyncAudio) return;
        const seg = syncSegments[idx];
        if (!seg || seg.failed) return;
        if (!syncBlobs[idx]) { updateNowReadingLabel(`(Ładowanie...) ${seg.text}`); return; }
        if (!enabled || !syncMode) return;
        if (singleTabMode && !hasAudioFocus) return;
        stopSyncSource();
        curSyncIdx = idx;
        updateNowReadingLabel(seg.text);
        const blob = syncBlobs[idx];
        curSyncUrl = URL.createObjectURL(blob);
        const audio = new Audio(curSyncUrl);
        audio.preservesPitch = true;
        audio.webkitPreservesPitch = true;
        boostAudioElement(audio);
        let boost = 0;
        if (autoCatchup && pendingSyncQueue.length > 1) boost = Math.min(0.5, (pendingSyncQueue.length - 1) * 0.25);
        const want = SPEECH_RATE + boost;
        // FIX synchronizacji przy pliku z napisami: audio generowane jest pod
        // konkretny, nierozciągnięty odcinek czasu z pliku. Przyspieszenie
        // filmu NIE może rozciągać tego audio (playRate = 1), bo wtedy
        // kwestia kończy się później niz jej slot w napisach i kolejne
        // teksty gonią za obrazem - lektor traci synchronizację.
        // Tempo odtwarzacza wpływa tylko na to, KIEDY puścimy segment.
        // Bloby pochodza z bufora zapisanego z predkoscia BUFFER_GEN_SPEED
        // (1.0), wiec rozciagamy je dopiero tutaj do wybranego tempa glosu.
        // W trybie pliku z napisami zostawiamy playRate = 1 - tam czas
        // trwania kwestii wynika wprost z czasow w pliku.
        const targetRate = customSubFileActive()
            ? 1
            : Math.max(0.5, Math.min(BUFFER_PLAY_MAX, want / (BUFFER_GEN_SPEED || 1)));
        audio.playbackRate = targetRate;
        audio.defaultPlaybackRate = targetRate;
        curSyncAudio = audio;
        audio.onended = () => {
            if (curSyncAudio === audio) {
                curSyncAudio = null; curSyncIdx = null;
                updateNowReadingLabel('');
                markRecentlyFinished(seg.text);
            }
        };
        audio.onerror = () => { if (curSyncAudio === audio) { curSyncAudio = null; curSyncIdx = null; updateNowReadingLabel(''); } };
        audio.play().catch(() => {
            if (curSyncUrl) { try { URL.revokeObjectURL(curSyncUrl); } catch (e) {} curSyncUrl = null; }
            curSyncAudio = null; curSyncIdx = null;
        });
    }
    // Zmiana tempa filmu NIE moze byc interpretowana jako przewinięcie.
// Dla pliku z napisami (brak prawdziwego wideo) nie ma sensu mnożyć
// oczekiwany upływ przez playbackRate - przy zwykłym przyspieszeniu
// kolejność segmentów i tak musi zostać nietknięta.
function seekToleranceSec(video) {
    const base = Math.max(RESET_THRESHOLD_SECONDS, 2.5);
    // Plik z napisami: brak filmu = brak sensownego progu opartego na rate.
    if (customSubFileActive()) return base + 6;
    const rate = Math.max(0.25, Math.min(8, (video && video.playbackRate) || 1));
    return Math.max(base, (RESET_THRESHOLD_SECONDS * rate) + 2);
}

function syncTick(video) {
        if (!syncMode || !enabled) return;
        if (singleTabMode && !hasAudioFocus) return;
        if (polishDubbingActive()) { if (!pdActive) { pdActive = true; stopForPolishDubbing(); } return; }
        pdActive = false;
        if (!video || video.paused) {
            if (curSyncAudio && !curSyncAudio.paused) { try { curSyncAudio.pause(); } catch (e) {} }
            return;
        }
        ensureAudioCtxRunning();
        if (curSyncAudio && curSyncAudio.paused && !curSyncAudio.ended) curSyncAudio.play().catch(() => {});
        // v3.6: offset — plus = lektor czyta PÓŹNIEJ względem obrazu, minus = WCZEŚNIEJ
        const t = video.currentTime - audioOffsetMs / 1000;
        const nowWall = Date.now();
        // v3.7.1: zamiast sztywnego progu 2s (który potrafił fałszywie odpalić reset przy
        // zwykłym buforowaniu/zacięciu się filmu — a to properly wygląda jak "przewinięcie"
        // i kasowało lastPlayedIdx, przez co po dogonieniu odtwarzania lektor potrafił
        // powtórzyć ostatnie kwestie), porównujemy realny upływ czasu systemowego z tym,
        // o ile przesunął się film. Bufor/zacięcie: video.currentTime prawie stoi, ale to
        // NIE jest przewinięcie — tolerujemy to. Prawdziwe przewinięcie: currentTime skacze
        // dużo bardziej niż upłynęło realnego czasu (lub cofa się) — to nadal resetujemy.
        if (lastSyncTime !== -1 && lastSyncWallTime) {
            const wallDt = (nowWall - lastSyncWallTime) / 1000;
            const rate = Math.max(0.25, Math.min(8, (video && video.playbackRate) || 1));
            const expected = wallDt * rate;
            // Przy pliku z napisami rate odtwarzacza nie opisuje zrodla
            // dzwieku, wiec nie mnozymy nim tolerancji - inaczej kazde
            // przyspieszenie/zwolnienie odtwarzacza kasuje kolejke.
            const tolerance = customSubFileActive()
                ? seekToleranceSec(video)
                : Math.max(RESET_THRESHOLD_SECONDS, expected * 0.7 + 1.5);
            const videoDt = t - lastSyncTime;
            // Cofniecie czasu to zawsze przewinięcie (niezależnie od trybu).
            if (videoDt < -RESET_THRESHOLD_SECONDS || (videoDt - expected) > tolerance) resetSyncState();
        } else if (lastSyncTime !== -1 && Math.abs(t - lastSyncTime) > seekToleranceSec(video)) {
            resetSyncState();
        }
        lastSyncTime = t;
        lastSyncWallTime = nowWall;
        if (syncSegments) {
            for (let i = lastPlayedIdx + 1; i < syncSegments.length; i++) {
                const s = syncSegments[i];
                if (s.start <= t + 0.05) { if (!pendingSyncQueue.includes(i)) pendingSyncQueue.push(i); }
                else break;
            }
        }
        if (syncJustReset) {
            syncJustReset = false;
            if (pendingSyncQueue.length > 4) {
                const keep = pendingSyncQueue.slice(-3);
                pendingSyncQueue.length = 0;
                for (const k of keep) pendingSyncQueue.push(k);
                lastPlayedIdx = keep[0] - 1;
            }
        }
        if (curSyncAudio && !curSyncAudio.ended) return;
        while (pendingSyncQueue.length) {
            const idx = pendingSyncQueue[0];
            const seg = syncSegments && syncSegments[idx];
            if (!seg || seg.failed || seg.skipped) {
                pendingSyncQueue.shift();
                if (idx > lastPlayedIdx) lastPlayedIdx = idx;
                continue;
            }
            break;
        }
        if (!pendingSyncQueue.length) return;
        const idx = pendingSyncQueue[0];
        if (liveListenMode && syncSegments[idx] && !syncBlobs[idx] && !syncSegments[idx].failed && !syncSegments[idx].skipped) {
            updateNowReadingLabel(`(Generuję na żywo...) ${syncSegments[idx].text}`);
        }
        if (idx !== curSyncIdx) playSyncSegment(idx, video);
        if (curSyncIdx === idx) { pendingSyncQueue.shift(); lastPlayedIdx = idx; }
    }
    async function prepareHybridStreaming(cacheKeyStr, segments, videoId, genSpeed) {
        ensureAudioCtx();
        liveListenMode = false;
        if (polishDubbingActive()) { alert('🇵🇱 Wykryto polski dubbing/kanał na YouTube — przygotowanie anulowane.'); return; }
        const gen = genSpeed || BUFFER_GEN_SPEED;
        const cleaned = segments.map(s => ({ ...s, text: cleanSubtitleText(s.text) })).filter(s => s.text.length > 0);
        const blobs = new Array(cleaned.length);
        const meta = new Array(cleaned.length);
        for (let i = 0; i < cleaned.length; i++) {
            meta[i] = { start: cleaned[i].start, orig_duration: Math.max(cleaned[i].duration, 0.05), text: cleaned[i].text };
        }
        await loadSyncData(videoId, { segments: meta, blobs, rate: gen });
        if (!enabled) toggleLektor();
        let completedCount = 0, currentIndex = 0;
        async function worker() {
            while (true) {
                if (!syncMode || syncVideoId !== videoId) break;
                const i = currentIndex++;
                if (i >= cleaned.length) break;
                const seg = cleaned[i];
                if (isPhraseBlocked(seg.text)) { meta[i].skipped = true; completedCount++; setPrepareStatus(`Blokada: ${completedCount}/${cleaned.length}`); continue; }
                const finalText = cleanSubtitleText(censorText(seg.text) || seg.text);
                if (!finalText || finalText.length < 2) {
                    meta[i].skipped = true; completedCount++;
                    setPrepareStatus(`Pominięto: ${completedCount}/${cleaned.length}`);
                    continue;
                }
                try {
                    blobs[i] = await requestEngineBlob(finalText, gen);
                    meta[i].translated = finalText;
                    // Trwały zapis nagrania (IndexedDB) — dzięki temu kwestia
                    // z buforu pliku zostaje na dysku i da się ją później
                    // odsłuchać lub usunąć w panelu 🗄️.
                    liveBufSave(finalText, blobs[i]);
                } catch (e) { meta[i].failed = true; }
                completedCount++;
                setPrepareStatus(`Równolegle: ${completedCount}/${cleaned.length}`);
                if (completedCount % 5 === 0) await idbSet(cacheKeyStr, { segments: meta, blobs, rate: gen }).catch(() => {});
            }
        }
        const workers = [];
        for (let w = 0; w < Math.min(PARALLEL_WORKERS, cleaned.length); w++) workers.push(worker());
        await Promise.all(workers);
        await idbSet(cacheKeyStr, { segments: meta, blobs, rate: gen }).catch(() => {});
        setPrepareStatus(`Gotowe w 100%`);
    }
    async function generateSegmentOnDemand(i, cleanedSegments, videoId, genSpeed) {
        if (syncVideoId !== videoId || !syncSegments || !syncSegments[i]) return;
        if (syncBlobs[i] || syncSegments[i].failed || syncSegments[i].skipped) return;
        const seg = cleanedSegments[i];
        if (isPhraseBlocked(seg.text)) { syncSegments[i].skipped = true; return; }
        const finalText = cleanSubtitleText(censorText(seg.text) || seg.text);
        if (!finalText || finalText.length < 2) { syncSegments[i].skipped = true; return; }
        try {
            const blob = await requestEngineBlob(finalText, genSpeed);
            if (syncVideoId !== videoId) return;
            syncBlobs[i] = blob;
            syncSegments[i].translated = finalText;
            liveBufSave(finalText, blob);   // trwały zapis (jak wyżej)
        } catch (e) { syncSegments[i].failed = true; }
    }
    async function liveListenLoop(cleanedSegments, videoId) {
        while (liveListenMode && syncMode && syncVideoId === videoId) {
            const video = getVideoEl();
            if (video) {
                const idx = findSyncSegment(video.currentTime - audioOffsetMs / 1000); // v3.6: offset
                const base = idx !== -1 ? idx : lastPlayedIdx;
                if (base !== -1) {
                    const t = { genSpeed: BUFFER_GEN_SPEED, playRate: 1 };
                    const toFetch = [base, base + 1, base + 2]
                        .filter(i => i >= 0 && i < cleanedSegments.length && !syncBlobs[i] && !syncSegments[i].failed && !syncSegments[i].skipped);
                    await Promise.all(toFetch.map(i => generateSegmentOnDemand(i, cleanedSegments, videoId, t.genSpeed)));
                }
            }
            await sleep(400);
        }
    }
    async function startLiveListening(segments, videoId) {
        ensureAudioCtx();
        if (polishDubbingActive()) { alert('🇵🇱 Wykryto polski dubbing/kanał na YouTube — lektor nie został uruchomiony.'); return; }
        const cleaned = segments.map(s => ({ ...s, text: cleanSubtitleText(s.text) })).filter(s => s.text.length > 0);
        const meta = cleaned.map(s => ({ start: s.start, orig_duration: Math.max(s.duration, 0.05), text: s.text }));
        syncVideoId = videoId; syncSegments = meta;
        syncBlobs = new Array(cleaned.length);
        syncGenRate = BUFFER_GEN_SPEED;
        syncMode = true; liveListenMode = true;
        curSyncIdx = null; lastPlayedIdx = -1; lastSyncTime = -1; lastSyncWallTime = 0;
        ensureUI();
        if (!enabled) toggleLektor();
        setPrepareStatus('Słuchanie na żywo — generuję w locie, bez zapisu do pamięci.');
        liveListenLoop(cleaned, videoId);
    }
    async function prepareLiveListen() {
        if (preparing) return;
        const videoId = getVideoId();
        if (!videoId) { alert('Nie wykryto identyfikatora filmu.'); return; }
        try { await healthCheck(); } catch (e) { alert('Serwer ' + getEngine().name + ' nie odpowiada.'); return; }
        preparing = true; ensureUI();
        setPrepareStatus('Pobieram napisy...');
        let segments;
        try { segments = await fetchTranscriptSegmentsAuto(); }
        catch (e) { alert('Błąd pobrania napisów:\n' + e.message); setPrepareStatus(''); preparing = false; ensureUI(); return; }
        if (!nfConfirmSegments(segments)) { setPrepareStatus('Anulowano — niepełne napisy.'); preparing = false; ensureUI(); return; }
        preparing = false; ensureUI();
        await startLiveListening(segments, videoId);
    }
    async function prepareWholeVideo() {
        if (preparing) return;
        const videoId = getVideoId();
        if (!videoId) { alert('Nie wykryto identyfikatora filmu.'); return; }
        try { await healthCheck(); } catch (e) { alert('Serwer ' + getEngine().name + ' nie odpowiada.'); return; }
        preparing = true; ensureUI();
        const video = getVideoEl();
        // Bufor/cache zawsze 1.0x - suwak i tempo filmu nie tworza nowych
        // nagran, tylko zmieniaja sposob ich odtworzenia.
        const t = { genSpeed: BUFFER_GEN_SPEED, playRate: 1 };
        const gen = t.genSpeed;
        const key = cacheKey(videoId, selectedVoice, gen);
        setPrepareStatus('Sprawdzam pamięć podręczną...');
        let cached = await idbGet(key).catch(() => null);
        // v4.2.3: niepelny zapis z Netflixa (np. z cue'ow odtwarzacza) wczesniej „zatruwal” pamiec —
        // Hybryda ladowala pol filmu na stale. Takie wpisy kasujemy i pobieramy napisy od nowa.
        if (cached && isNetflixHost() && nfLooksPartial(cached.segments)) {
            setPrepareStatus('⚠️ Zapisany bufor Netflixa jest niepełny — pobieram napisy od nowa…');
            await idbDelete(key).catch(() => {});
            cached = null;
        }
        if (cached) {
            await loadSyncData(videoId, cached);
            setPrepareStatus('Gotowe (z pamięci, tempo ' + gen.toFixed(2) + 'x).');
            preparing = false; ensureUI();
            if (!enabled) toggleLektor();
            return;
        }
        setPrepareStatus('Pobieram napisy...');
        let segments;
        try { segments = await fetchTranscriptSegmentsAuto(); }
        catch (e) { alert('Błąd pobrania napisów:\n' + e.message); setPrepareStatus(''); preparing = false; ensureUI(); return; }
        if (!nfConfirmSegments(segments)) { setPrepareStatus('Anulowano — niepełne napisy (nic nie zapisano).'); preparing = false; ensureUI(); return; }
        preparing = false; ensureUI();
        await prepareHybridStreaming(key, segments, videoId, gen);
    }
    async function openCacheManagerPanel() {
        let panel = document.getElementById('duo-cache-panel');
        if (!panel) {
            panel = document.createElement('div');
            panel.id = 'duo-cache-panel';
            panel.style.cssText = 'position:fixed;right:15px;bottom:220px;z-index:2147483647;width:350px;max-height:450px;background:rgba(17,17,17,.98);border:1px solid #777;border-radius:6px;padding:10px;display:flex;flex-direction:column;gap:8px;color:#fff;font:11px Arial,sans-serif;';
            document.body.appendChild(panel);
            reparentDuoUI();
        }
        panel.style.display = 'flex';
        panel.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #444;padding-bottom:5px;">
                <strong>🗑️ Zarządzanie pamięcią (Cache)</strong>
                <button id="duo-cache-close" style="background:#222;color:#f66;border:1px solid #f66;border-radius:3px;cursor:pointer;padding:2px 6px;">X</button>
            </div>
            <div id="duo-cache-list" style="display:flex;flex-direction:column;gap:4px;max-height:280px;overflow-y:auto;background:#111;padding:5px;border:1px solid #333;">Ładowanie...</div>
            <button id="duo-cache-clear-all" style="background:#511;color:#ff8888;border:1px solid #f44;padding:5px;cursor:pointer;font-weight:bold;">Wyczyść wszystko</button>
        `;
        panel.querySelector('#duo-cache-close').addEventListener('click', () => panel.style.display = 'none');
        panel.querySelector('#duo-cache-clear-all').addEventListener('click', async () => {
            if (confirm('Usunąć całą pamięć cache?')) {
                const keys = await idbListKeys();
                for (const k of keys) await idbDelete(k);
                clearSyncData();
                openCacheManagerPanel();
            }
        });
        const listContainer = panel.querySelector('#duo-cache-list');
        const keys = await idbListKeys();
        if (keys.length === 0) { listContainer.innerHTML = '<div style="color:#666;text-align:center;">Brak danych w pamięci podręcznej.</div>'; return; }
        listContainer.innerHTML = '';
        keys.forEach(key => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;background:#1a1a1a;padding:4px;border:1px solid #333;gap:4px;';
            const span = document.createElement('span');
            span.style.cssText = 'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;color:#9cf;font-size:10px;';
            span.textContent = key; span.title = key;
            const playBtn = document.createElement('button');
            playBtn.textContent = '▶️ Uruchom';
            playBtn.style.cssText = 'background:#133;color:#aff;border:1px solid #388;cursor:pointer;font-size:9px;padding:2px 5px;white-space:nowrap;';
            playBtn.addEventListener('click', async () => {
                const record = await idbGet(key);
                if (record) {
                    const parts = String(key).split('::');
                    await loadSyncData(parts[1] || getVideoId(), record);
                    panel.style.display = 'none';
                    if (!enabled) toggleLektor();
                    setPrepareStatus('Załadowano z pamięci!');
                }
            });
            const delBtn = document.createElement('button');
            delBtn.textContent = '❌';
            delBtn.style.cssText = 'background:#311;color:#faa;border:1px solid #833;cursor:pointer;font-size:9px;padding:2px 4px;';
            delBtn.addEventListener('click', async () => {
                await idbDelete(key);
                if (syncVideoId && key.includes('::' + syncVideoId + '::')) clearSyncData();
                openCacheManagerPanel();
            });
            row.appendChild(span); row.appendChild(playBtn); row.appendChild(delBtn);
            listContainer.appendChild(row);
        });
    }

    // ============================================================
    // --- PANEL CENZURY + PANEL PLIKU ---
    // ============================================================
    function ensureFilterPanel() {
        let panel = document.getElementById('duo-filter-panel');
        if (panel) { renderFilterPanel(panel); return panel; }
        panel = document.createElement('div');
        panel.id = 'duo-filter-panel';
        panel.style.cssText = 'position:fixed;right:15px;bottom:220px;z-index:2147483647;width:210px;background:rgba(17,17,17,.97);border:1px solid #555;border-radius:4px;padding:6px;display:none;flex-direction:column;gap:5px;';
        document.body.appendChild(panel);
        reparentDuoUI();
        renderFilterPanel(panel);
        return panel;
    }
    function renderFilterPanel(panel) {
        panel.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <strong style="color:#9cf;font:9px Arial;">Cenzura przekleństw</strong>
                <button id="duo-filter-close" style="background:#111;color:#f66;border:1px solid #f66;cursor:pointer;font:9px Arial;padding:0 3px;">X</button>
            </div>
            <label style="display:flex;align-items:center;gap:5px;color:#ccc;font:10px Arial;cursor:pointer;">
                <input type="checkbox" id="duo-filter-enabled" ${filterEnabled ? 'checked' : ''}/> Filtr włączony
            </label>
            <select id="duo-filter-mode" style="width:100%;height:20px;background:#111;color:#fff;border:1px solid #666;font:9px Arial;">
                <option value="remove" ${filterMode === 'remove' ? 'selected' : ''}>Usuń słowo</option>
                <option value="beep" ${filterMode === 'beep' ? 'selected' : ''}>[BEEP]</option>
                <option value="replace" ${filterMode === 'replace' ? 'selected' : ''}>Za*****j (gwiazdki)</option>
            </select>
            <div style="color:#888;font:9px Arial;border-top:1px solid #333;padding-top:4px;">Własne słowa do cenzury:</div>
            <div style="display:flex;gap:4px;">
                <input id="duo-filter-word-input" type="text" placeholder="np. słowo" style="flex:1;height:20px;background:#111;color:#fff;border:1px solid #666;font:10px Arial;padding:0 4px;box-sizing:border-box;"/>
                <button id="duo-filter-word-add" style="width:24px;height:20px;background:#111;color:#0f0;border:1px solid #0f0;cursor:pointer;font:bold 10px Arial;">+</button>
            </div>
            <div id="duo-filter-word-list" style="display:flex;flex-direction:column;gap:2px;max-height:100px;overflow-y:auto;"></div>
        `;
        panel.querySelector('#duo-filter-close').addEventListener('click', () => panel.style.display = 'none');
        panel.querySelector('#duo-filter-enabled').addEventListener('change', (e) => {
            filterEnabled = e.target.checked;
            localStorage.setItem('duo_FilterEnabled', String(filterEnabled));
        });
        panel.querySelector('#duo-filter-mode').addEventListener('change', (e) => {
            filterMode = e.target.value;
            localStorage.setItem('duo_FilterMode', filterMode);
        });
        const wordInput = panel.querySelector('#duo-filter-word-input');
        const addWord = () => {
            const w = clean(wordInput.value).toLowerCase();
            if (!w) return;
            if (!customProfanity.includes(w)) { customProfanity.push(w); saveCustomProfanity(); renderFilterPanel(panel); }
            wordInput.value = '';
        };
        panel.querySelector('#duo-filter-word-add').addEventListener('click', addWord);
        wordInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') addWord(); });
        const listEl = panel.querySelector('#duo-filter-word-list');
        customProfanity.forEach((w, idx) => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;background:#1a1a1a;padding:2px 4px;border:1px solid #333;';
            const span = document.createElement('span');
            span.textContent = w; span.style.cssText = 'color:#faa;font:10px Arial;';
            const delBtn = document.createElement('button');
            delBtn.textContent = '❌';
            delBtn.style.cssText = 'background:none;color:#f66;border:none;cursor:pointer;font:9px Arial;';
            delBtn.addEventListener('click', () => { customProfanity.splice(idx, 1); saveCustomProfanity(); renderFilterPanel(panel); });
            row.appendChild(span); row.appendChild(delBtn);
            listEl.appendChild(row);
        });
    }
    // ============================================================
    // --- AKTYWNY PLIK NAPISOW (.srt/.vtt/...) zamiast filmu ---
    // Gdy lektor czyta tekst z pliku, a nie z filmu, nie wolno traktowac
    // zmiany tempa odtwarzacza jako "przewinięcia" - inaczej kolejność
    // segmentów rozjeżdża się przy każdym przyspieszeniu.
    let customSubFileId = null;
    function customSubFileActive() { return !!customSubFileId; }

    function ensureCustomPanel() {
        let panel = document.getElementById('duo-custom-panel');
        if (panel) return panel;
        panel = document.createElement('div');
        panel.id = 'duo-custom-panel';
        panel.style.cssText = 'position:fixed;right:15px;bottom:220px;z-index:2147483647;width:180px;background:rgba(17,17,17,.97);border:1px solid #555;border-radius:4px;padding:5px;display:none;flex-direction:column;gap:4px;';
        panel.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <strong style="color:#9cf;font:9px Arial;">Plik napisów</strong>
                <button id="duo-custom-close" style="background:#111;color:#f66;border:1px solid #f66;cursor:pointer;font:9px Arial;padding:0 3px;">X</button>
            </div>
            <button id="duo-file-upload-btn" style="background:#111;color:#0f0;border:1px solid #0f0;height:20px;cursor:pointer;font:bold 9px Arial;">📂 Wybierz</button>
        `;
        document.body.appendChild(panel);
        reparentDuoUI();
        panel.querySelector('#duo-custom-close').addEventListener('click', () => panel.style.display = 'none');
        const input = document.createElement('input');
        input.type = 'file'; input.accept = '.txt,.srt,.vtt,.ass,.ssa,.sbv,.lrc,.sub'; input.style.display = 'none';
        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                const content = ev.target.result;
                const format = detectFormat(content);
                const segments = parseSubtitleFile(content, format, null);
                const videoId = getVideoId() || 'custom_' + file.name;
                const t = { genSpeed: BUFFER_GEN_SPEED, playRate: 1 };
                const key = cacheKey(videoId, selectedVoice, t.genSpeed) + '::file_' + file.name;
                panel.style.display = 'none';
                // Oznaczamy, ze lektor czyta z pliku - syncTick nie moze wtedy
                // traktowac zmiany tempa odtwarzacza jako przewinięcia.
                customSubFileId = videoId;
                // autoSubsOn: niepolski plik napisów → najpierw tłumaczenie sieciowe,
                // potem dopiero start lektora (jak auto_subs.js w rozszerzeniu).
                duoLoadSegmentsAuto(key, segments, videoId, t.genSpeed);
            };
            reader.readAsText(file);
        });
        document.body.appendChild(input);
        panel.querySelector('#duo-file-upload-btn').addEventListener('click', () => input.click());
        return panel;
    }

    // ============================================================
    // --- KREATOR ŹRÓDEŁ NAPISÓW ---
    // ============================================================
    function getSubSources() { try { return JSON.parse(gmGet(SUBSRC_KEY) || '{}'); } catch (e) { return {}; } }
    function setSubSources(o) { gmSet(SUBSRC_KEY, JSON.stringify(o)); }
    function getSubSourcesForHost(host) { return getSubSources()[host] || null; }
    function addSubSourceSelector(host, sel) {
        const all = getSubSources();
        const entry = all[host] || { enabled: true, selectors: [] };
        if (!entry.selectors.includes(sel)) entry.selectors.push(sel);
        entry.enabled = true; all[host] = entry; setSubSources(all);
    }
    function removeSubSourceSelector(host, sel) {
        const all = getSubSources();
        if (all[host]) {
            all[host].selectors = all[host].selectors.filter(s => s !== sel);
            if (!all[host].selectors.length) delete all[host];
            setSubSources(all);
        }
    }
    function setSubSourcesEnabled(host, en) {
        const all = getSubSources();
        if (all[host]) { all[host].enabled = !!en; setSubSources(all); }
    }
    function removeSubSourceHost(host) {
        const all = getSubSources();
        if (all[host]) { delete all[host]; setSubSources(all); }
    }
    function getCustomSourceSubtitle() {
        const entry = getSubSourcesForHost(HOST);
        if (!entry || !entry.enabled || !entry.selectors || !entry.selectors.length) return null;
        for (const sel of entry.selectors) {
            try {
                const nodes = document.querySelectorAll(sel);
                const texts = [];
                nodes.forEach(n => {
                    if (!isVisibleElement(n)) return;
                    const t = (n.innerText || n.textContent || '').replace(/\s+/g, ' ').trim();
                    if (t && !/^[\d\s:.,-]+$/.test(t)) texts.push(t);
                });
                if (texts.length) {
                    const combined = [...new Set(texts)].join(' ').replace(/\s+/g, ' ').trim();
                    if (combined) return combined;
                }
            } catch (e) {}
        }
        return null;
    }
    function cssEscapeS(s) { try { return CSS.escape(s); } catch (e) { return String(s).replace(/([^\w-])/g, '\\$1'); } }
    function generateSelectorFor(el) {
        if (!el) return '';
        if (el === document.body) return 'body';
        if (el.id) return '#' + cssEscapeS(el.id);
        const parts = [];
        let cur = el, depth = 0;
        while (cur && cur !== document.body && depth < 6) {
            if (cur.id) { parts.unshift('#' + cssEscapeS(cur.id)); return parts.join(' > '); }
            let part = cur.tagName.toLowerCase();
            if (cur.classList && cur.classList.length) part += [...cur.classList].slice(0, 3).map(c => '.' + cssEscapeS(c)).join('');
            const parent = cur.parentElement;
            if (parent) {
                const same = [...parent.children].filter(c => c.tagName === cur.tagName);
                if (same.length > 1) part += ':nth-of-type(' + (same.indexOf(cur) + 1) + ')';
            }
            parts.unshift(part); cur = parent; depth++;
        }
        return parts.join(' > ');
    }

    // --- ŹRÓDŁA LIVE ---
    function getAllTextTracksForSubtitles() {
        const tracks = [];
        try {
            findAllVideos().forEach(video => {
                try { Array.from(video.textTracks || []).forEach(track => tracks.push(track)); } catch (e) {}
            });
        } catch (e) {}
        return tracks;
    }
    function isPolishTextTrack(track) {
        try {
            const raw = [track.language, track.lang, track.label, track.id, track.kind].filter(Boolean).join(' ').toLowerCase();
            return /(^|[^a-z])(pl|pol|polski|polish)([^a-z]|$)/i.test(raw);
        } catch (e) { return false; }
    }
    function getNativeTextTrackSubtitle() {
        const tracks = getAllTextTracksForSubtitles();
        if (!tracks.length) return null;
        const polish = tracks.filter(isPolishTextTrack);
        const showing = polish.filter(t => t.mode === 'showing' || t.mode === 'hidden');
        const cands = showing.length ? showing : polish;
        for (const track of cands) {
            try {
                const cues = Array.from(track.activeCues || []);
                if (!cues.length) continue;
                const text = cues.map(c => c.text || '').join(' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
                const cl = cleanTranslationJunk(text);
                if (cl && cl.length >= 2 && !isSystemPrompt(cl)) return cl;
            } catch (e) {}
        }
        return null;
    }
    function getAsbplayerSubtitleText() {
        try {
            const containers = document.querySelectorAll('.asbplayer-subtitles');
            if (!containers.length) return null;
            const results = [];
            containers.forEach(container => {
                if (!isVisibleElement(container)) return;
                const tn = container.querySelectorAll('[data-track]');
                const nodes = tn.length ? tn : [container];
                nodes.forEach(node => {
                    if (!isVisibleElement(node)) return;
                    const t = cleanTranslationJunk((node.innerText || node.textContent || '').replace(/\s+/g, ' ').trim());
                    if (t && !/^[\d\s:.,-]+$/.test(t) && !isSystemPrompt(t)) results.push(t);
                });
            });
            if (!results.length) return null;
            return [...new Set(results)].join(' ').replace(/\s+/g, ' ').trim() || null;
        } catch (e) { return null; }
    }
    function collectTextFromRoot(root, results = []) {
        if (!root) return results;
        const selectors = ['.imt-captions-text', '.imt-cue', '[class*="imt-"]', '[class*="immersive-translate"]'];
        for (const sel of selectors) {
            try {
                const nodes = root.querySelectorAll(sel);
                nodes.forEach(node => {
                    if (!isVisibleElement(node)) return;
                    const text = (node.innerText || node.textContent || '').replace(/\s+/g, ' ').trim();
                    if (text.length >= 2 && !/^\d+:\d+/.test(text)) { results.push(text); duoFoundNode = node; }
                });
            } catch (e) {}
        }
        return results;
    }

    // ============================================================
    // v4.2.13: ENERGIA — ZAPAMIĘTANE MIEJSCE NAPISÓW (Immersive Translate)
    // * Raz znaleziony kontener → czytamy i obserwujemy TYLKO jego, nie całą stronę.
    // * Globalne szukanie (cała strona + Shadow DOM) WYŁĄCZNIE na żądanie — przycisk
    //   „🔍 Szukaj napisów” w panelu. Znaczniki hostów Shadow DOM zapisujemy w pamięci strony,
    //   więc następnym razem trafiamy od razu (getElementsByTagName), bez przeszukiwania.
    // * Bez zapisu w pamięci NIC nie szukamy — lektor czeka na kliknięcie 🔍 (oszczędność energii).
    // * Zapisane miejsce (host Shadow DOM albo ścieżka kontenera) odnajdujemy celowanym zapytaniem.
    // ============================================================
    const DUO_SUB_HINT_KEY = 'duo_SubHint';
    let duoSubHint = { hosts: [] }, duoSubLock = null, duoFoundNode = null, duoSubLastRelock = 0;
    try { duoSubHint = JSON.parse(localStorage.getItem(DUO_SUB_HINT_KEY) || 'null') || { hosts: [] }; } catch (e) { duoSubHint = { hosts: [] }; }
    function duoSubLockAlive() {
        if (!duoSubLock) return false;
        if (duoSubLock.nodeType === 11) return !!(duoSubLock.host && duoSubLock.host.isConnected);
        return duoSubLock.isConnected;
    }
    // Odnajdź zapamiętane miejsce (celowane zapytania — nie przeszukiwanie strony), max raz na sekundę.
    function duoSubRelock() {
        const now = Date.now();
        if (now - duoSubLastRelock < 1000) return;
        duoSubLastRelock = now;
        for (const tag of (duoSubHint.hosts || [])) {
            let hs;
            try { hs = document.getElementsByTagName(tag); } catch (e) { continue; }
            for (const h of hs) if (h.shadowRoot) { duoSubSetLock(h.shadowRoot); return; }
        }
        if (duoSubHint.box) {
            let el = null;
            try { el = document.querySelector(duoSubHint.box); } catch (e) {}
            if (el) duoSubSetLock(el);
        }
    }
    function duoSubBoxFor(node) {
        const r = node.getRootNode ? node.getRootNode() : document;
        if (r && r.nodeType === 11) return r;
        let box = node, up = 0;
        while (box.parentElement && box.parentElement !== document.body && up < 3) { box = box.parentElement; up++; }
        return box;
    }
    function duoSubSetLock(box) {
        duoSubLock = box;
        if (subtitleObserver) {
            try { subtitleObserver.disconnect(); } catch (e) {}
            const root = getScanRoot();
            if (root) { try { subtitleObserver.observe(root, { childList: true, subtree: true, characterData: true }); } catch (e) {} }
        }
    }
    function duoImtTexts() {
        // TYLKO zapamiętane miejsce; brak → nic nie szukamy (przycisk „🔍 Szukaj napisów”)
        if (!duoSubLockAlive()) { duoSubRelock(); if (!duoSubLockAlive()) return []; }
        const results = [];
        collectTextFromRoot(duoSubLock, results);
        duoFoundNode = null;
        return results;
    }
    // NA ŻĄDANIE: jednorazowe globalne szukanie → zapis w pamięci strony.
    // Zapis ZASTĘPUJE poprzedni — w pamięci jest zawsze JEDNO miejsce (najnowsze), nigdy stare + nowe.
    // Kolejność: miejsca z Kreatora → Immersive Translate (cała strona + Shadow DOM) →
    // napisy odtwarzacza w DOM (Netflix, Prime, …) → ścieżka napisów <video>.
    function duoSubSave(hint, box, label) {
        duoSubHint = hint;
        try { localStorage.setItem(DUO_SUB_HINT_KEY, JSON.stringify(duoSubHint)); } catch (e) {}
        duoSubSetLock(box || null);
        setPrepareStatus('🔍 Znaleziono napisy (' + label + ') — zapisano w pamięci w miejsce poprzedniego, lektor patrzy tylko tam.');
    }
    function duoSubSearchOnDemand() {
        // 1) Kreator (własne selektory tej strony)
        const entry = getSubSourcesForHost(HOST);
        if (entry && entry.enabled && entry.selectors) {
            for (const sel of entry.selectors) {
                let nodes = [];
                try { nodes = document.querySelectorAll(sel); } catch (e) {}
                for (const n of nodes) if (duoNativeNodeText(n)) return duoSubSave({ kind: 'native', hosts: [], box: sel }, n, 'Kreator: ' + sel);
            }
        }
        // 2) Immersive Translate — cała strona + Shadow DOM
        const roots = [document];
        duoGatherShadowRoots(document, roots);
        for (const r of roots) {
            duoFoundNode = null;
            collectTextFromRoot(r, []);
            if (!duoFoundNode) continue;
            const box = duoSubBoxFor(duoFoundNode);
            duoFoundNode = null;
            const host = box.nodeType === 11 && box.host ? box.host.tagName.toLowerCase() : '';
            return duoSubSave(host ? { kind: 'imt', hosts: [host], box: '' } : { kind: 'imt', hosts: [], box: generateSelectorFor(box) },
                box, host ? 'Immersive Translate, Shadow DOM: <' + host + '>' : 'Immersive Translate');
        }
        duoFoundNode = null;
        // 3) napisy odtwarzacza w DOM
        for (const sel of DUO_NATIVE_SELECTORS) {
            let nodes = [];
            try { nodes = document.querySelectorAll(sel); } catch (e) {}
            for (const n of nodes) if (duoNativeNodeText(n)) return duoSubSave({ kind: 'native', hosts: [], box: sel }, n, 'odtwarzacz: ' + sel);
        }
        // 4) ścieżka napisów <video> (aktywne kwestie)
        if (getNativeTextTrackSubtitle()) return duoSubSave({ kind: 'track', hosts: [], box: '' }, null, 'ścieżka napisów odtwarzacza');
        setPrepareStatus('🔍 Nie znaleziono napisów (zapis w pamięci bez zmian) — włącz film tak, żeby napisy były widoczne, i kliknij jeszcze raz.');
    }
    function duoGatherShadowRoots(root, out) {
        let all;
        try { all = root.querySelectorAll('*'); } catch (e) { return; }
        for (const el of all) { if (el.shadowRoot) { out.push(el.shadowRoot); duoGatherShadowRoots(el.shadowRoot, out); } }
    }
    // v4.2.13: LIVE czyta WYŁĄCZNIE z miejsca zapamiętanego przyciskiem „🔍 Szukaj napisów”.
    // Żadnych stałych list serwisów (Netflix/Prime/…), Kreatora ani ścieżek odtwarzacza „na próbę” —
    // wszystkie te źródła sprawdza tylko 🔍 (na żądanie) i zapisuje JEDNO, które działa.
    const DUO_NATIVE_SELECTORS = [
        '.player-timedtext-text-container', '.player-timedtext',
        '.atvwebplayersdk-captions-text', 'div[class*="atvwebplayersdk-captions"]',
        '.timedTextOverlay span', '.iqp-subtitle-item', '.dss-subtitle-text',
        '.shaka-text-wrapper', '.vjs-text-track-display', '.jw-text-track-container', '.bump-subtitle-container',
        '.asbplayer-subtitles'
    ];
    function duoNativeNodeText(n) {
        if (!n || !isVisibleElement(n)) return null;
        if (n.querySelector && n.querySelector('button, [role="button"], [role="radio"], [role="menuitem"], input, li')) return null;
        const t = cleanTranslationJunk((n.innerText || n.textContent || '').replace(/\s+/g, ' ').trim());
        return (t && t.length >= 2 && !/^[\d\s:.,-]+$/.test(t) && !isSystemPrompt(t)) ? t : null;
    }
    function getCurrentLiveSubtitle() {
        const kind = duoSubHint.kind || 'imt';
        if (kind === 'track') return getNativeTextTrackSubtitle();   // ścieżka napisów odtwarzacza (bez DOM)
        if (kind === 'native') {
            if (!duoSubLockAlive()) { duoSubRelock(); if (!duoSubLockAlive()) return null; }
            return duoNativeNodeText(duoSubLock);
        }
        const texts = duoImtTexts();
        return texts.length ? [...new Set(texts)].pop() : null;
    }

    // ===== 5 TRYBÓW SKANOWANIA =====
    const SCAN_MODES = [
        { id: 'turbo_it', icon: '⚡', label: 'Turbo IT', title: 'MutationObserver na playerze + throttle 50ms.' },
        { id: 'turbo_native', icon: '📺', label: 'Turbo Native', title: 'Napisy natywne — cuechange + poll 800ms.' },
        { id: 'smart_raf', icon: '🧠', label: 'Smart', title: 'MutationObserver + debounce rAF. Zero CPU gdy cisza.' },
        { id: 'standard', icon: '🎯', label: 'Standard', title: 'Poll 120ms. Zalecany domyślny.' },
        { id: 'eco', icon: '🌙', label: 'Eco', title: 'Poll 400ms. Najmniej CPU.' }
    ];
    let subtitleObserver = null, scanThrottleTimer = null, scanRafFrame = null, scanPollTimer = null;
    function getScanRoot() {
        if (duoSubLockAlive()) return duoSubLock;   // v4.2.13: tylko zapamiętany kontener napisów
        try {
            const p = document.querySelector('.html5-video-player');
            if (p) return p;
        } catch (e) {}
        return null;   // v4.2.13: nie obserwujemy całej strony — wystarczy poll
    }
    function stopScanMechanisms() {
        if (subtitleObserver) { try { subtitleObserver.disconnect(); } catch (e) {} subtitleObserver = null; }
        if (scanPollTimer) { clearInterval(scanPollTimer); scanPollTimer = null; }
        if (scanThrottleTimer) { clearTimeout(scanThrottleTimer); scanThrottleTimer = null; }
        if (scanRafFrame !== null) { cancelAnimationFrame(scanRafFrame); scanRafFrame = null; }
    }
    function scheduleThrottledScan() {
        if (scanThrottleTimer) return;
        scanThrottleTimer = setTimeout(() => { scanThrottleTimer = null; scanSubtitlesInstant(); }, 50);
    }
    function scheduleRafScan() {
        if (scanRafFrame !== null) return;
        scanRafFrame = requestAnimationFrame(() => { scanRafFrame = null; scanSubtitlesInstant(); });
    }
    function onScanCueChange() { scanSubtitlesInstant(); }
    function installCueWatchers() {
        try {
            findAllVideos().forEach(video => {
                const tracks = video.textTracks;
                if (!tracks) return;
                if (!tracks.__duoCueAdd) {
                    tracks.__duoCueAdd = true;
                    try { tracks.addEventListener('addtrack', installCueWatchers); } catch (e) {}
                }
                for (let j = 0; j < tracks.length; j++) {
                    const tr = tracks[j];
                    if (tr && !tr.__duoCue) {
                        tr.__duoCue = true;
                        try { tr.addEventListener('cuechange', onScanCueChange); } catch (e) {}
                    }
                }
            });
        } catch (e) {}
    }
    function setupScanMode(mode, quiet) {
        stopScanMechanisms();
        scanMode = SCAN_MODES.some(m => m.id === mode) ? mode : 'standard';
        // v4.2.13: LIVE wyłączony / lektor wyłączony = ZERO timerów i obserwatorów (jakby skryptu nie było).
        // Całe napisy wczytane (na żądanie) = też zero skanowania strony — kolejkę karmi liveFullFill co 2 s.
        if (!masterPower || !imtLektorEnabled || liveFromFullSubs || document.visibilityState !== 'visible') {
            try { localStorage.setItem('duo_ScanMode', scanMode); } catch (e) {}
            updateScanModeButtons();
            return;
        }
        if (scanMode === 'turbo_it') {
            subtitleObserver = new MutationObserver(() => { if (masterPower && imtLektorEnabled) scheduleThrottledScan(); });
            try { const sr = getScanRoot(); if (sr) subtitleObserver.observe(sr, { childList: true, subtree: true, characterData: true }); } catch (e) {}
            scanPollTimer = setInterval(() => { if (masterPower && imtLektorEnabled) scanSubtitlesInstant(); }, 500);
        } else if (scanMode === 'turbo_native') {
            installCueWatchers();
            scanPollTimer = setInterval(() => { installCueWatchers(); if (masterPower && imtLektorEnabled) scanSubtitlesInstant(); }, 800);
        } else if (scanMode === 'smart_raf') {
            subtitleObserver = new MutationObserver(() => { if (masterPower && imtLektorEnabled) scheduleRafScan(); });
            try { const sr = getScanRoot(); if (sr) subtitleObserver.observe(sr, { childList: true, subtree: true, characterData: true }); } catch (e) {}
            scanPollTimer = setInterval(() => { if (masterPower && imtLektorEnabled) scanSubtitlesInstant(); }, 500);
        } else if (scanMode === 'eco') {
            scanPollTimer = setInterval(() => { if (masterPower && imtLektorEnabled) scanSubtitlesInstant(); }, 400);
        } else {
            scanPollTimer = setInterval(() => { if (masterPower && imtLektorEnabled) scanSubtitlesInstant(); }, 120);
        }
        try { localStorage.setItem('duo_ScanMode', scanMode); } catch (e) {}
        updateScanModeButtons();
        if (quiet) return;
        const info = SCAN_MODES.find(m => m.id === scanMode);
        setPrepareStatus(info ? `${info.icon} Tryb skanowania: ${info.label}` : '');
    }
    function updateScanModeButtons() {
        try {
            const host = document.getElementById('duo-settings-host');
            if (!host || !host.shadowRoot) return;
            host.shadowRoot.querySelectorAll('[data-duo-scan-mode]').forEach(btn => {
                const active = btn.dataset.duoScanMode === scanMode;
                btn.classList.toggle('active', active);
                btn.style.background = active ? '#0a7a3d' : '#f3f3f3';
                btn.style.borderColor = active ? '#0a7a3d' : '#ccc';
                btn.style.color = active ? '#fff' : '#444';
                btn.style.fontWeight = active ? 'bold' : 'normal';
            });
        } catch (e) {}
    }
    // v3.6.10: gdy wideo stoi na pauzie, zegar bufora LIVE (addedAt) ma się ZATRZYMAĆ,
    // inaczej po wciśnięciu play kolejka jest "przeterminowana" i leci od razu, bez synchronizacji.
    let imtPauseStartedAt = 0;
    let imtLastRateChangeAt = 0;   // v4.2.2: zmiana prędkości filmu bywa przeplatana krótkim pause/play
    // v4.2.1: pauza filmu => pauza lektora. Uzytkownik zatrzymal film (pauza lektora
    // wymuszona przez sam skrypt jest pomijana). Zawieszamy AudioContext — wszystko,
    // co zaplanowane, staje w miejscu i dogrywa sie po wznowieniu.
    function imtVideoUserPaused() {
        try {
            const v = getVideoEl();
            return !!(v && v.paused && !v.ended && !pausedByLektor.has(v));
        } catch (e) { return false; }
    }
    function imtApplyPauseHold() {
        const want = !!(masterPower && imtLektorEnabled && imtVideoUserPaused());
        if (want === imtPauseHold) return;
        // v4.2.2: tuz po zmianie prędkości filmu nie wstrzymujemy lektora (to nie jest pauza uzytkownika)
        if (want && !imtPauseHold && Date.now() - imtLastRateChangeAt < 1500) return;
        imtPauseHold = want;
        if (want) {
            if (!imtPauseStartedAt) imtPauseStartedAt = Date.now();
            if (imtDelayTimer) { clearTimeout(imtDelayTimer); imtDelayTimer = null; }
            try { if (audioCtx && audioCtx.state === 'running') audioCtx.suspend(); } catch (e) {}
            try { if (imtCurrentAudio && !imtCurrentAudio.paused) imtCurrentAudio.pause(); } catch (e) {}
            try { setPrepareStatus('⏸️ Film wstrzymany — lektor czeka'); } catch (e) {}
        } else {
            // przesun czas oczekujacych kwestii o dlugosc pauzy (bufor liczy od nowa)
            if (imtPauseStartedAt) {
                const pausedMs = Date.now() - imtPauseStartedAt;
                imtPauseStartedAt = 0;
                if (pausedMs > 200) imtQueue.forEach(x => { if (x.addedAt) x.addedAt += pausedMs; });
            }
            try { if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume(); } catch (e) {}
            try { if (imtCurrentAudio && imtCurrentAudio.paused && !imtCurrentAudio.ended) imtCurrentAudio.play().catch(() => {}); } catch (e) {}
            if (imtLektorEnabled) { try { playNextImmersive(); } catch (e) {} }
        }
    }
    function attachVideoPlayWatchers() {
        try {
            document.querySelectorAll('video').forEach(v => {
                if (!v.__duoPlayHook) {
                    v.__duoPlayHook = true;
                    v.addEventListener('play', () => {
                        ensureAudioCtx();
                        if (masterPower && imtLektorEnabled && v === getVideoEl()) {
                            // v3.6.14: tylko glowne wideo pauzuje zegar bufora - ukryte <video>
                            // (podglady Netflixa) wczesniej bez przerwy przesuwaly addedAt i bufor nie dojrzewal.
                            if (imtPauseStartedAt) {
                                const pausedMs = Date.now() - imtPauseStartedAt;
                                imtPauseStartedAt = 0;
                                // przesuń "addedAt" wszystkich oczekujących kwestii o czas pauzy,
                                // żeby odliczanie bufora wznowiło się dokładnie tam, gdzie stanęło
                                if (pausedMs > 200) imtQueue.forEach(x => { if (x.addedAt) x.addedAt += pausedMs; });
                            }
                        }
                        imtApplyPauseHold();
                        if (masterPower && imtLektorEnabled && v === getVideoEl()) scanSubtitlesInstant();
                    }, { passive: true });
                }
                if (!v.__duoRateHook) {
                    v.__duoRateHook = true;
                    v.addEventListener('ratechange', () => { imtLastRateChangeAt = Date.now(); }, { passive: true });
                }
                if (!v.__duoPauseHook) {
                    v.__duoPauseHook = true;
                    v.addEventListener('pause', () => {
                        // ignoruj pauzy, które sam skrypt wymusił (np. żeby dać lektorowi dograć kwestię)
                        if (masterPower && imtLektorEnabled && !pausedByLektor.has(v) && v === getVideoEl()) imtPauseStartedAt = Date.now();
                        imtApplyPauseHold();
                    }, { passive: true });
                }
                // v3.6.13: wykrywanie przewinięcia przeniesione do OSOBNEGO, własnego tickera (patrz
                // imtSeekWatchTick niżej) — zdarzenie 'timeupdate' okazało się zbyt zawodne (nieregularne
                // odpalanie + ryzyko, że na stronie jest więcej niż jeden <video> i miesza się ich czas).
            });
        } catch (e) {}
    }
    // v3.6.12: próg wykrywania przewinięcia oparty o RELACJĘ między realnym upływem czasu (zegar systemowy)
    // a przesunięciem currentTime wideo — a nie o sztywną liczbę sekund.
    // v3.6.13: WŁASNY, stały ticker (co 1s) zamiast zdarzenia 'timeupdate' — to my decydujemy kiedy
    // sprawdzamy, więc nie ma znaczenia jak nieregularnie strona odpala swoje zdarzenia. Dodatkowo:
    // śledzimy KONKRETNY obiekt wideo — jeśli getVideoEl() zwróci inny element niż poprzednio (np.
    // strona podmieniła <video> albo na chwilę "głównym" stał się inny tag), to NIE jest traktowane
    // jako przewinięcie, tylko jako nowy punkt odniesienia (żeby uniknąć fałszywych zerowań bufora,
    // gdyby na stronie chwilowo istniał drugi <video>, np. podgląd miniaturek).
    let imtSeekWatchVideo = null;
    let imtSeekWatchTime = -1;
    let imtSeekWatchWall = 0;
    function imtSeekWatchTick() {
        if (!masterPower || document.visibilityState !== 'visible') return;   // v4.2.13: wyłączony / w tle = zero pracy
        try { imtApplyPauseHold(); } catch (e) {}   // v4.2.1: zabezpieczenie, gdy zdarzenie pause/play nie dotarlo
        if (!masterPower || !imtLektorEnabled) { imtSeekWatchVideo = null; imtSeekWatchTime = -1; imtSeekWatchWall = 0; return; }
        const v = getVideoEl();
        const now = Date.now();
        if (!v) { imtSeekWatchVideo = null; imtSeekWatchTime = -1; imtSeekWatchWall = 0; return; }
        if (v !== imtSeekWatchVideo) {
            const prevT = imtSeekWatchTime;
            imtSeekWatchVideo = v; imtSeekWatchTime = v.currentTime; imtSeekWatchWall = now;
            // v3.6.15: podmiana <video> (np. nowy odcinek na Netflixie) = jak przewiniecie.
            // Bez tego zalegle kwestie z poprzedniego playera blokowaly nowe przez caly czas bufora.
            // Warunek roznicy czasu chroni przed czyszczeniem przy hover-podgladach (ten sam moment filmu).
            if (imtLektorEnabled && imtQueue.length && prevT >= 0 && Math.abs(v.currentTime - prevT) > 5) resetImmersiveForSeek();
            return; // nowy punkt odniesienia — nie oceniamy skoku przy pierwszym pomiarze
        }
        if (v.seeking || v.paused) { imtSeekWatchTime = v.currentTime; imtSeekWatchWall = now; return; }
        const wallDt = (now - imtSeekWatchWall) / 1000;    // ile realnie upłynęło czasu od poprzedniego ticka
        const videoDt = v.currentTime - imtSeekWatchTime;   // o ile przesunął się currentTime
        const rate = Math.max(0.25, Math.min(8, v.playbackRate || 1));
        const expected = wallDt * rate;
        // hojny margines (throttling karty w tle, jittery timera) — celowo wolimy przepuścić
        // wątpliwy przypadek niż fałszywie zerować bufor. Prawdziwe cofnięcie przez użytkownika to
        // zwykle kilka+ sekund, więc małe, rutynowe korekty odtwarzacza (ułamek-1-2s) ignorujemy.
        const tolerance = Math.max(5, expected * 0.7 + 4);
        if (videoDt < -2.5 || (videoDt - expected) > tolerance) {
            resetImmersiveForSeek();
            setTimeout(() => { if (masterPower && imtLektorEnabled) scanSubtitlesInstant(); }, 150);
        }
        imtSeekWatchTime = v.currentTime;
        imtSeekWatchWall = now;
    }
    setInterval(imtSeekWatchTick, 1000);
    // v3.6.15: straznik bufora LIVE - co 5 s sprawdza, czy gotowa i dojrzala kwestia nie utknela
    // (zgubiony timer, wyscig pauzy). Gra tylko gdy nic nie gra i zaden timer nie tyka.
    setInterval(() => {
        try {
            if (!masterPower || !imtLektorEnabled) return;
            if (document.visibilityState !== 'visible') return;   // v4.2.13: w tle nie budzimy dźwięku ani kolejki
            if (singleTabMode && !hasAudioFocus) return;
            // OmniVoice (wolny, RTF~1): wybudz zawieszony AudioContext nawet gdy cos "gra",
            // inaczej zrodla stoja w miejscu, waitForEnd nigdy nie odpala, a kolejka milknie.
            try {
                if (audioCtx && audioCtx.state === 'suspended' && !imtPauseHold) audioCtx.resume();
            } catch (e) {}
            if (imtSpeaking) {
                // Odklejanie "utknietego mowienia": odtwarzanie dawno powinno sie skonczyc
                // (ponad 2 s po imtActiveUntil), a finish() nie odpalil (zawieszony kontekst
                // / zgubiony timer). Lepszy dubel kwestii niz wieczna cisza.
                // DODATKOWO: zawieszony kontekst + brak postepu currentTime przez >15 s
                // (karta w tle / throttling timera) - tez odklejamy, bo waitForEnd stoi.
                // Pauzy filmu (imtPauseHold) i oczekiwania na bufor nie ruszamy.
                try {
                    const ctx = audioCtx;
                    if (!imtPauseHold && !imtDelayTimer && ctx && ctx.state === 'running'
                        && imtActiveUntil && (ctx.currentTime - imtActiveUntil) > 2) {
                        imtSpeaking = false; imtSpeakStartedAt = 0;
                    } else if (!imtPauseHold && !imtDelayTimer && imtSpeakStartedAt
                        && (Date.now() - imtSpeakStartedAt) > 15000) {
                        // 15 s bez zakonczenia kwestii: reset odtwarzania.
                        // Nastepne playNextImmersive przeplanuje biezaca kwestie od nowa
                        // (imtGen++ uniewaznia stare zrodla), kolejka rusza dalej.
                        imtGen++;
                        imtSpeaking = false; imtSpeakStartedAt = 0;
                        imtNextStartAt = 0; imtActiveUntil = 0;
                    }
                } catch (e) {}
                return;
            }
            if (imtDelayTimer) return;
            const head = imtQueue.length ? imtQueue[0] : null;
            // v4.2.11: czolo kolejki nie ma nagrania, a generator nie pracuje -> wybudz go.
            // (np. kolejka wyczyszczona i napelniona od nowa w trakcie liczenia kwestii)
            if (head && !head.failed && !head.ready && !imtGenerating && !imtPauseHold) {
                try { generateImmersiveAudio(); } catch (e) {}
                return;
            }
            if (!head || head.failed || !head.ready || !head.audio) return;
            // v4.2.9: odswiezaj pasek "Bufor: start za X (gotowych: N)" TAKZE gdy kwestia
            // jeszcze nie dojrzala. Wczesniej pasek pojawial sie tylko w scheduleImmersivePlay
            // (czyli raz, przy wejsciu w oczekiwanie) i nikt go nie odswiezal - wygladalo
            // jakby "po zatrzymaniu pasek zgasl i lektor umarl", mimo ze timer tykal.
            try {
                const waitMs = (head.addedAt || 0) + getEffectiveDelaySec() * 1000 - Date.now();
                if (waitMs > 0) {
                    const ahead = imtQueue.filter(x => x.ready && !x.failed).length;
                    const el = document.getElementById('duo-now-reading');
                    if (el) el.textContent = '⏳ Bufor: start za ' + (waitMs > 90000
                        ? Math.ceil(waitMs / 60000) + ' min'
                        : Math.ceil(waitMs / 1000) + ' s') + ' (gotowych: ' + ahead + ')';
                    return;
                }
            } catch (e) {}
            if ((head.addedAt || 0) + getEffectiveDelaySec() * 1000 - Date.now() <= 0) playNextImmersive();
        } catch (e) {}
    }, 5000);
    // v3.6.10: pełny reset stanu bufora LIVE (kolejka + historia + audio) po przewinięciu wideo
    function resetImmersiveForSeek() {
        if (imtDelayTimer) { clearTimeout(imtDelayTimer); imtDelayTimer = null; }
        imtPauseStartedAt = 0; // nie przenosimy "czasu pauzy" sprzed przewinięcia na nowe kwestie
        imtSeekWatchTime = -1; imtSeekWatchWall = 0; // wystartuj pomiar od nowa po przewinięciu
        stopImmersiveAudio();
        imtQueue.length = 0;
        imtSpeaking = false;
        clearSpokenHistory();
        setVideoVolume(VIDEO_VOLUME);
        resumeVideosAfterLektor();
        updateNowReadingLabel('');
        updateFlushBtn();
        setPrepareStatus('🔄 Wykryto przewinięcie wideo — resync bufora LIVE');
        // Przy pelnych napisach odsuwamy kursor na nowa pozycje filmu,
        // zeby lektor nie probowal grac kwestii, ktore juz przeszly.
        if (liveFromFullSubs) liveFullSeek();
    }

    // ============================================================
// --- LIVE Z PELNYCH NAPISÓW (bufor z wyprzedzeniem) ---
// Na Netflixie tryb LIVE czytal napisy z DOM, wiec bufor NIE MOGL dzialac:
// napis o 15 minutach dalej nie istnieje jeszcze w DOM, wiec skrypt
// czekalby na nieistniejaca kwestie. Teraz, gdy mamy pelne napisy
// z manifestu, mozemy wypelnic kolejke z wyprzedzeniem i naprawde
// zbuforowac tyle minut, ile user ustawi suwakiem.
// ============================================================
let liveFromFullSubs = false;   // true = kolejka z pelnych napisow
let liveFullSegments = [];      // segmenty z times (Netflix)
let liveFullCursor = 0;         // nastepny segment do wrzucenia
let liveFullTimer = null;

// Ile sekundy filmu jest juz "zrobione" (do konca kolejki).
function liveFullBufferedSec() {
    if (!liveFullSegments.length) return 0;
    const i = Math.max(0, Math.min(liveFullCursor - 1, liveFullSegments.length - 1));
    const seg = liveFullSegments[i];
    return seg ? (seg.start + seg.duration) : 0;
}
// Znajduje pierwszy segment, ktory jeszcze nie minal (pozycja filmu t).
function liveFullIndexAt(t) {
    let idx = 0;
    for (let i = 0; i < liveFullSegments.length; i++) {
        if (liveFullSegments[i].start <= t + 0.5) idx = i + 1; else break;
    }
    return idx;
}
// Wypelnia kolejke segmentami az do celu (bufor w minutach).
function liveFullFill() {
    if (!liveFullSegments.length) return;
    const video = getVideoEl();
    const rate = Math.max(0.5, Math.min(3, (video && video.playbackRate) || 1));
    const cur = video ? video.currentTime : 0;
    const target = cur + getEffectiveDelaySec() + 20;
    const delayMs = getEffectiveDelaySec() * 1000;
    let added = 0;
    while (liveFullCursor < liveFullSegments.length) {
        const seg = liveFullSegments[liveFullCursor];
        if (seg.start > target) break;
        const text = cleanSubtitleText(censorText(seg.text) || seg.text);
        if (!text || text.length < 2) { liveFullCursor++; continue; }
        if (isPhraseBlocked(text)) { liveFullCursor++; continue; }
        // addedAt = kiedy ta kwestia ma zostac ROZPLAYOWANA. Odejmujemy
        // opoznienie, bo playNextImmersive dodaje je z powrotem. Dzieki temu:
        //   * kwestia z biezacej pozycji filmu gra sie NATYCHMIAST,
        //   * kolejne graja sie w odstepach zgodnych z filmem,
        //   * a wygenerowane z wyprzedzeniem audio czeka jako zapas.
        const playAt = Date.now() + Math.round(((seg.start - cur) / rate) * 1000) - delayMs;
        imtQueue.push({
            text: text, audio: null, ready: false, failed: false,
            addedAt: playAt, mediaStart: seg.start
        });
        liveFullCursor++;
        added++;
    }
    if (added) {
        updateFlushBtn();
        generateImmersiveAudio();
        playNextImmersive();
    }
}
// v4.2.11: restart odliczania bufora po zmianie suwaka.
//  * napisy z ekranu (DOM): jak dotad - kazda oczekujaca kwestia liczy bufor od teraz,
//  * pelne napisy (Netflix): czas kwestii wynika z pozycji filmu, wiec przeliczamy go
//    tak samo jak liveFullFill. Wczesniej wszystkie dostawaly "teraz" i CALA kolejka
//    odsuwala sie o dlugosc bufora (lektor milkl na N minut, a bufor rosl dalej).
function imtRestartBufferClock() {
    const now = Date.now();
    if (liveFromFullSubs) {
        const video = getVideoEl();
        if (video) {
            const rate = Math.max(0.5, Math.min(3, video.playbackRate || 1));
            const cur = video.currentTime;
            const delayMs = getEffectiveDelaySec() * 1000;
            imtQueue.forEach(x => {
                if (!x.failed && typeof x.mediaStart === 'number') {
                    x.addedAt = now + Math.round(((x.mediaStart - cur) / rate) * 1000) - delayMs;
                }
            });
            return;
        }
    }
    imtQueue.forEach(x => { if (!x.failed) x.addedAt = now; });
}
function liveFullStart(fetcher) {
    liveFullStop();
    liveFullSegments = [];
    liveFullCursor = 0;
    // Krótki komunikat startowy — widzisz od razu, że bufor startuje.
    setPrepareStatus('⏳ LIVE: pobieram pełne napisy…');
    (fetcher || fetchTranscriptSegmentsAuto)().then(segments => {
        if (!imtLektorEnabled) return;
        liveFullSegments = segments
            .map(s => ({ start: Number(s.start) || 0, duration: Math.max(Number(s.duration) || 1, 0.4), text: s.text }))
            .sort((a, b) => a.start - b.start);
        liveFromFullSubs = true;
        stopScanMechanisms();   // v4.2.13: są całe napisy — strona nie jest już przeszukiwana
        // Start w POLOWIE odcinka: pomijamy wszystko, co juz obejrzane.
        // Bez tego kolejka wypelnia sie od 0 i lektor regeneruje caly
        // odcinek od poczatku, zamiast buforowac od miejsca w ktorym jestes.
        const vid0 = getVideoEl();
        const cur0 = vid0 ? vid0.currentTime : 0;
        liveFullCursor = liveFullIndexAt(cur0);
        const skipped = liveFullCursor;
        liveFullFill();
        // Co 2 s dosuwamy kolejke, zeby zapas rosl razem z filmem.
        liveFullTimer = setInterval(() => {
            if (!imtLektorEnabled) { liveFullStop(); return; }
            if (document.visibilityState !== 'visible') return;   // v4.2.13: karta w tle — nic nie robimy
            try { liveFullFill(); } catch (e) {}
        }, 2000);
        const buf = (getEffectiveDelaySec() / 60).toFixed(1);
        const min = Math.floor(cur0 / 60), sec = Math.round(cur0 % 60);
        setPrepareStatus('🌐 LIVE: pełne napisy — bufor ' + buf + ' min z wyprzedzeniem'
            + (skipped > 0 ? ' • start od ' + min + ':' + String(sec).padStart(2, '0')
              + ' (pominięto ' + skipped + ' kwestii)' : '')
            + ' • do przodu: ' + (liveFullSegments.length - liveFullCursor) + ' kwestii');
    }).catch(e => {
        // Nie udaje sie pobrac napisow — wracamy do czytania z DOM.
        liveFromFullSubs = false;
        if (imtLektorEnabled) setupScanMode(scanMode);
        setPrepareStatus('⚠️ ' + (e && e.message ? e.message : 'Nie znaleziono napisów') + ' — czytam z ekranu.');
    });
}
function liveFullStop() {
    if (liveFullTimer) { clearInterval(liveFullTimer); liveFullTimer = null; }
    liveFullSegments = [];
    liveFullCursor = 0;
}
// Po przewinieciu odsuwamy kursor na nowa pozycje, zeby nie grac kwestii,
// ktore juz przeszly.
function liveFullSeek() {
    if (!liveFromFullSubs || !liveFullSegments.length) return;
    const video = getVideoEl();
    if (!video) return;
    // Po przewinieciu do przodu pomijamy kwestie, ktore juz przeszly.
    // Po przewinieciu do tylu cofamy kursor, zeby wygenerowac je ponownie
    // (kolejka jest czyszczona przez resetImmersiveForSeek).
    const idx = liveFullIndexAt(video.currentTime);
    liveFullCursor = Math.max(0, Math.min(idx, liveFullSegments.length));
}

function scanSubtitlesInstant() {
        if (SLEEP_MODE || !masterPower || !imtLektorEnabled || scanPaused) return;
        if (document.visibilityState !== 'visible') return;   // v4.2.13: karta w tle — zero skanowania
        if (singleTabMode && !hasAudioFocus) return;
        // v4.2.13: strona/ramka bez filmu (i bez własnego źródła z Kreatora) — nie ma czego czytać
        if (!liveFromFullSubs && !document.querySelector('video') && !getSubSourcesForHost(HOST)) return;
        if (polishDubbingActive()) { if (!pdActive) { pdActive = true; stopForPolishDubbing(); } return; }
        pdActive = false;
        attachVideoPlayWatchers();
        try { if (audioCtx && audioCtx.state === 'suspended' && !imtPauseHold) audioCtx.resume(); } catch (e) {}
        // Gdy mamy pelne napisy, kolejka jest zywiona z wyprzedzeniem —
        // nie czytamy wtedy z DOM (inaczej kwestie bylyby zdublowane).
        if (liveFromFullSubs) { try { liveFullFill(); } catch (e) {} return; }
        const raw = getCurrentLiveSubtitle();
        if (!raw) return;
        let t = cleanTranslationJunk(String(raw)).replace(/\s+/g, ' ').trim();
        t = stripPlayerUiJunk(t);
        if (soundCuesFilter) t = stripSoundCues(t);
        if (!t || t.length < 2 || isSystemPrompt(t)) return;
        if (isPhraseBlocked(t)) return;
        const now = Date.now();
        for (const r of recentSpoken) {
            if (now - r.at < REPEAT_WINDOW_MS && textsSimilar(t, r.text)) return;
        }
        for (const q of imtQueue) {
            if (textsSimilar(q.text, t)) {
                if (!q.ready && !q.audio) q.text = t;
                touchRecent(t);
                return;
            }
        }
        touchRecent(t);
        imtLastSubtitle = t;
        lastSubtitleSpokenAt = now;
        addImmersiveSubtitle(t);
    }
    function addImmersiveSubtitle(text, extTrDone) {
        text = String(text || '').replace(/\s+/g, ' ').trim();
        if (!imtLektorEnabled || !text) return;
        // Tłumaczenie sieciowe LIVE (jak extTrTranslateLive w rozszerzeniu):
        // niepolska kwestia najpierw przechodzi przez wybrany silnik,
        // dopiero potem trafia do kolejki lektora.
        if (!extTrDone && extTrLiveNeeded(text)) { extTrLiveTranslate(text); return; }
        // v4.2.6: DEDUP + LIMIT dla wolnych silnikow (pocket/audio8/xtts/omnivoice).
        // Twoj log pokazal problem: serwer generowal "5 znakow, 9 znakow, 6 znakow..."
        // non-stop, bo MutationObserver doklejal KAZDA mikro-zmiane napisu w DOM
        // (narastajacy tekst), a przy semaforze 1 kolejka rosla w nieskonczonosc.
        // Krotsze niz 12 znakow do wolnego silnika w ogole nie wysylamy (to urywki).
        if (currentEngineId === 'pocket' || currentEngineId === 'audio8'
            || currentEngineId === 'xtts' || currentEngineId === 'omnivoice') {
            if (text.length < 12) return;
            for (const q of imtQueue) {
                if (q.text === text) return;                       // identyczny juz w kolejce
                if (textsSimilar(q.text, text)) { q.text = text; return; }  // narastajacy - podmien
            }
            let pending = 0;
            for (const q of imtQueue) if (!q.ready && !q.failed) pending++;
            if (pending >= 12) return;                            // bufor pelny - serwer i tak nie nadaza
        }
        imtQueue.push({ text, audio: null, ready: false, failed: false, addedAt: Date.now() });
        updateFlushBtn();
        generateImmersiveAudio();
        playNextImmersive();
    }
    let imtConsecFails = 0;
    // Ile nagran LIVE generowac rownolegle. Hybryda uzywa 8 workerow, a LIVE
    // jednego - przez to przy przyspieszonym filmie (1.5x) kolejka zjadla
    // sie szybciej, niz jazy jedno nagranie, i lektor szarpal ("szwankowal").
    function liveGenConcurrency() {
        // Pocket i Audio8 to wolne silniki CPU - wieksza ichosc tylko
        // obciaza procesor, ale nie przyspiesza (kolejka jest szeregowa).
        // Pocket i Audio8 to wolne silniki CPU - wieksza ichosc tylko
        // obciaza procesor, ale nie przyspiesza (kolejka jest szeregowa).
        // XTTS (Coqui) nie jest bezpieczny watkowo: jeden model trzyma wspolny
        // prefiks warunkowania i cache KV, wiec dwie generacje naraz potrafia
        // wywalic CUDA ("device-side assert triggered"). Dlatego 1 kwestia naraz.
        // OmniVoice dokladamy do tej samej grupy: serwer ma semafor 1 (jedna
        // synteza naraz) i RTF ~1, wiec 2. worker nic nie przyspiesza - tylko
        // ustawia sie w kolejce na serwerze i podwaja latencje najmlodszych
        // kwestii (timeout -> pomijane po cichu -> "chwile gra i milknie").
        if (currentEngineId === 'pocket' || currentEngineId === 'audio8' || currentEngineId === 'xtts' || currentEngineId === 'omnivoice') return 1;
        const video = getVideoEl();
        const rate = Math.max(0.5, Math.min(3, (video && video.playbackRate) || 1));
        // Im szybciej film, tym wiecej nagran musi powstac na sekunde.
        return Math.max(2, Math.min(PARALLEL_WORKERS, Math.ceil(rate * 2)));
    }
    async function generateImmersiveAudio() {
        if (!imtLektorEnabled || imtGenerating) return;
        imtGenerating = true;
        try {
            const workers = [];
            async function worker() {
                while (imtLektorEnabled) {
                    // v4.2.11: szukamy ZAWSZE od poczatku kolejki, a zajeta pozycje
                    // oznaczamy flaga genBusy. Wczesniej byl tu licznik (cursor++),
                    // ale kolejka skraca sie od przodu po kazdej wypowiedzianej kwestii
                    // (imtQueue.shift()), wiec licznik PRZESKAKIWAL jedna kwestie przy
                    // kazdym shifcie. Pominieta kwestia ladowala na czele kolejki bez
                    // nagrania -> playNextImmersive czekal na nia w nieskonczonosc, a
                    // worker liczyl dalsze ("bufor rosnie, lektor milczy"). Przy wolnych
                    // silnikach (Pocket/Audio8/XTTS/OmniVoice) trwalo to do konca kolejki.
                    let item = null;
                    for (let qi = 0; qi < imtQueue.length; qi++) {
                        const c = imtQueue[qi];
                        if (!c.failed && !c.ready && !c.audio && !c.genBusy) { item = c; break; }
                    }
                    if (!item) break;
                    if (isPhraseBlocked(item.text)) { item.failed = true; continue; }
                    item.genBusy = true;
                    try {
                        const finalText = (censorText(item.text) || item.text).trim();
                        if (!finalText || finalText.length < 2) item.failed = true;
                        else {
                            // Bufor zawsze 1.0x - suwak i tempo filmu nie wplywaja
                            // na to, co zapisujemy.
                            const t = { genSpeed: BUFFER_GEN_SPEED, playRate: 1 };
                            item.audio = await requestEngineBlob(finalText, t.genSpeed);
                            item.ready = true;
                            // v4.2.7: przyblizony czas trwania do backup-timera w playNextImmersive.
                            try { item.durHint = Math.max(0.3, (item.audio.size - 44) / 2 / 24000); } catch (e) {}
                            imtConsecFails = 0;
                            liveBufSave(finalText, item.audio); // trwałe nagranie bufora (fire & forget)
                            updateFlushBtn();
                        }
                    } catch (e) {
                        // Widoczny komunikat błędu - bez tego kolejne kwestie mogą
                        // cicho nie generować się i wygląda to jak "zatrzymany bufor".
                        item.failed = true;
                        imtConsecFails++;
                        const msg = (e && e.message) ? e.message : String(e);
                        setPrepareStatus('❌ Błąd generowania (' + getEngine().name + '): ' + msg
                            + (imtConsecFails >= 2 ? ' — sprawdź, czy serwer silnika działa (' + imtConsecFails + ' błędów pod rząd)' : ''));
                    }
                    finally { item.genBusy = false; playNextImmersive(); }
                }
            }
            for (let w = 0; w < liveGenConcurrency(); w++) workers.push(worker());
            await Promise.all(workers);
        } finally { imtGenerating = false; }
    }
    function playNextImmersive() {
        if (!imtLektorEnabled || imtSpeaking) return;
        if (imtPauseHold) return;   // v4.2.1: film na pauzie — nie startuj kolejnych kwestii
        if (singleTabMode && !hasAudioFocus) return;
        while (imtQueue.length && imtQueue[0].failed) imtQueue.shift();
        if (!imtQueue.length) { setVideoVolume(VIDEO_VOLUME); resumeVideosAfterLektor(); updateFlushBtn(); return; }
        const item = imtQueue[0];
        if (!item.ready || !item.audio) return;
        const waitMs = (item.addedAt || 0) + getEffectiveDelaySec() * 1000 - Date.now();
        if (waitMs > 0) { setVideoVolume(VIDEO_VOLUME); resumeVideosAfterLektor(); scheduleImmersivePlay(); return; }
        if (imtDelayTimer) { clearTimeout(imtDelayTimer); imtDelayTimer = null; }
        imtSpeaking = true; imtSpeakStartedAt = Date.now();
        updateNowReadingLabel(item.text);
        if (pauseVideoWithLektor) pauseVideosWithLektor();
        let boost = 0;
        if (autoCatchup && imtQueue.length > 1) boost = Math.min(0.5, (imtQueue.length - 1) * 0.25);
        const want = SPEECH_RATE + boost;
        const video = getVideoEl();
        // Nagranie w buforze jest zawsze 1.0x (BUFFER_GEN_SPEED), wiec
        // rozciagamy je dopiero teraz. W LIVE dodatkowo musimy nadazac za
        // tempem filmu: przy 1.5x obrazu lektor musi grac 1.5x szybciej,
        // inaczej zostaje za obrazem i kolejka sie wyprzedza (szarpnie).
        // W wariancie "C - stale tempo" ignorujemy tempo filmu (jak dotad).
        const vr = (tempoMode === 'C') ? 1 : Math.max(0.5, Math.min(3, (video && video.playbackRate) || 1));
        const playRate = Math.max(0.5, Math.min(BUFFER_PLAY_MAX,
            (want / (BUFFER_GEN_SPEED || 1)) * vr));
        const genAtStart = imtGen;
        let finished = false;
        const finish = () => {
            if (finished) return;
            finished = true;
            try { if (imtCurrentAudio) imtCurrentAudio.pause(); } catch (e) {}
            if (imtCurrentUrl) { try { URL.revokeObjectURL(imtCurrentUrl); } catch (e) {} }
            imtCurrentAudio = null; imtCurrentUrl = null;
            if (imtQueue[0] === item) imtQueue.shift();
            imtSpeaking = false; imtSpeakStartedAt = 0;
            markRecentlyFinished(item.text);
            if (!imtQueue.length) { setVideoVolume(VIDEO_VOLUME); resumeVideosAfterLektor(); }
            updateFlushBtn();
            playNextImmersive();
            generateImmersiveAudio();
        };
        // v4.2.7: PARANOIC-BACKUP: gdyby waitForEnd/onended zgubil sie (throttling karty,
        // zawieszony kontekst), kwestia i tak zakonczy sie po swoim czasie trwania + 2 s.
        // Bez tego imtSpeaking zostaje true na zawsze, licznik stoi, a kolejka milknie.
        try {
            const __durMs = Math.round((Number(item.durHint) || 0) * 1000)
                || Math.round(((item.audio && item.audio.size) || 0) / 48); // ~24kHz*2B
            if (__durMs > 0 && __durMs < 120000) {
                const __gen = genAtStart, __item = item;
                setTimeout(() => {
                    try {
                        if (!finished && imtQueue[0] === __item && __gen === imtGen) finish();
                    } catch (e) {}
                }, __durMs + 2000);
            }
        } catch (e) {}

        // Ścieżka ciągła: dekodowanie + planowanie na jednym AudioContext.
        // Kwestia kończy się dopiero PO zaplanowaniu, więc żadna nie jest gubiona.
        const planned = scheduleChunkContinuous(item.audio, playRate);
        if (planned) {
            setVideoVolume(duckVolume);
            planned.then(endAt => {
                // null = stop/seek w międzyczasie; stan był już wyzerowany przez stopImmersiveAudio
                if (finished || endAt === null || genAtStart !== imtGen) return;
                (function waitForEnd() {
                    if (finished || genAtStart !== imtGen) return;
                    const ctx = audioCtx;
                    if (!ctx) { finish(); return; }
                    const leftMs = (imtActiveUntil - ctx.currentTime) * 1000;
                    // 300 ms zapasu: następna kwestia zdąży się zdekodować, zanim ta się skończy
                    if (leftMs <= 300) { finish(); return; }
                    setTimeout(waitForEnd, Math.min(100, leftMs - 300));
                })();
            }).catch(() => { if (genAtStart === imtGen) finish(); });
            return;
        }

        // Ścieżka zapasowa: zwykłe new Audio()
        imtCurrentUrl = URL.createObjectURL(item.audio);
        imtCurrentAudio = new Audio(imtCurrentUrl);
        imtCurrentAudio.preservesPitch = true;
        imtCurrentAudio.webkitPreservesPitch = true;
        imtCurrentAudio.volume = 1.0;
        imtCurrentAudio.playbackRate = playRate;
        imtCurrentAudio.defaultPlaybackRate = playRate;
        boostAudioElement(imtCurrentAudio);
        imtCurrentAudio.onplay = () => setVideoVolume(duckVolume);
        imtCurrentAudio.onended = finish;
        imtCurrentAudio.onerror = finish;
        imtCurrentAudio.play().catch(() => {
            if (imtCurrentUrl) { try { URL.revokeObjectURL(imtCurrentUrl); } catch (e) {} imtCurrentUrl = null; }
            finish();
        });
    }
    function stopImmersiveAudio() {
        if (imtDelayTimer) { clearTimeout(imtDelayTimer); imtDelayTimer = null; }
        try { if (imtCurrentAudio) { imtCurrentAudio.onended = null; imtCurrentAudio.onerror = null; imtCurrentAudio.pause(); } } catch (e) {}
        if (imtCurrentUrl) { try { URL.revokeObjectURL(imtCurrentUrl); } catch (e) {} }
        imtCurrentAudio = null; imtCurrentUrl = null;
        // unieważnij oczekujące dekodowania i utnij już zaplanowane źródła
        imtGen++;
        imtSources.forEach(s => { try { s.onended = null; s.stop(); s.disconnect(); } catch (e) {} });
        imtSources.clear();
        imtNextStartAt = 0; imtActiveUntil = 0;
    }
    async function toggleImmersiveLektor() {
        if (imtLektorEnabled) {
            imtLektorEnabled = false;
            try { imtApplyPauseHold(); } catch (e) {}   // zwolnij zawieszony AudioContext
            stopScanMechanisms();
            stopImmersiveAudio();
            liveFullStop();          // koniec buforu z pelnych napisow
            liveFromFullSubs = false;
            imtQueue.length = 0; imtSpeaking = false;
            clearSpokenHistory();
            setVideoVolume(VIDEO_VOLUME);
            resumeVideosAfterLektor();
            updateFlushBtn();
            if (localStorage.getItem('duo_LastMode') === 'imt') localStorage.setItem('duo_LastMode', '');
            ensureUI();
            return;
        }
        try { await healthCheck(); } catch (e) { alert('Serwer ' + getEngine().name + ' nie odpowiada.'); return; }
        if (polishDubbingActive()) { alert('🇵🇱 Wykryto polski dubbing/kanał na YouTube — LIVE nie zostanie uruchomiony.'); return; }
        if (enabled) stopLektor();
        imtLektorEnabled = true;
        clearSpokenHistory();
        localStorage.setItem('duo_LastMode', 'imt');
        setupScanMode(scanMode);
        ensureUI();
        // v4.2.13: pełne napisy (Netflix i inne) TYLKO na żądanie — przycisk „⬇ Całe napisy”.
        // Bez kliknięcia LIVE czyta w locie z ekranu i nic nie pobiera.
        setPrepareStatus('🌐 LIVE włączony' + (liveDelayMin > 0 ? ' — ⏳ bufor ' + liveDelayMin + ' min (generuję z wyprzedzeniem)' : ''));
    }

    // ============================================================
    // --- WŁASNY TEKST (AUDIOBOOK) ---
    // ============================================================
    const CUSTOM_CHUNK_WORDS = 80;
    let customQueue = [], customTotal = 0, customSpeaking = false, customPaused = false, customStopped = true;
    let customGenerateRunning = false, customCurrentSource = null, customCurrentBuffer = null;
    let customStartedAtCtx = 0, customOffsetSec = 0, customResumeOffset = 0, customBaseOffset = 0, customSessionFp = '';
    let customBookmark = null, customSaveTimer = null;
    let recActive = false, recChunks = [], recSampleRate = 0, recTimer = null;

    function customFingerprint(text) { const t = String(text || ''); return t.length + ':' + t.slice(0, 100); }
    function loadCustomBookmark() {
        try {
            const raw = gmGet(CT_BOOKMARK_KEY);
            if (raw) {
                const obj = (typeof raw === 'string') ? JSON.parse(raw) : raw;
                if (obj && typeof obj.chunkIndex === 'number') {
                    customBookmark = { fp: String(obj.fp || ''), chunkIndex: Math.max(0, obj.chunkIndex | 0), offsetSec: Math.max(0, Number(obj.offsetSec) || 0) };
                    return customBookmark;
                }
            }
        } catch (e) {}
        customBookmark = null; return null;
    }
    function saveCustomBookmark() { if (customBookmark) gmSet(CT_BOOKMARK_KEY, JSON.stringify(customBookmark)); }
    function clearCustomBookmark() { customBookmark = null; gmDel(CT_BOOKMARK_KEY); }
    function clearCustomTextMemory() { gmDel(CT_TEXT_KEY); clearCustomBookmark(); }
    function splitTextIntoChunks(text, maxWords) {
        const c = String(text || '').replace(/\s+/g, ' ').trim();
        if (!c) return [];
        const max = maxWords || CUSTOM_CHUNK_WORDS;
        const wc = (s) => s.split(' ').filter(Boolean).length;
        const sentences = c.match(/[^.!?…]+[.!?…]*/g) || [c];
        const chunks = [];
        let cur = '';
        for (let s of sentences) {
            s = s.trim();
            if (!s) continue;
            if (wc(s) > max) {
                if (cur) { chunks.push(cur.trim()); cur = ''; }
                const words = s.split(' ');
                let part = '';
                for (const w of words) {
                    if (wc(part) >= max) { chunks.push(part.trim()); part = w; }
                    else part = part ? part + ' ' + w : w;
                }
                if (part.trim()) cur = part.trim();
            } else if (wc(cur) + wc(s) > max) { chunks.push(cur.trim()); cur = s; }
            else cur = cur ? cur + ' ' + s : s;
        }
        if (cur.trim()) chunks.push(cur.trim());
        return chunks.filter(Boolean);
    }
    function kickCustomGenerate() { if (customGenerateRunning) return; customGenerateRunning = true; customGenerateLoop(); }
    async function customGenerateLoop() {
        try {
            while (!customStopped) {
                const item = customQueue.find(x => !x.failed && !x.ready && !x.audioBuffer);
                if (!item) break;
                try {
                    const finalText = censorText(item.text);
                    if (!finalText || finalText.length < 2) item.failed = true;
                    else {
                        let targetSpeed = SPEECH_RATE;
                        if (autoCatchup && customQueue.length > 1) {
                            targetSpeed = parseFloat((SPEECH_RATE + Math.min(0.5, (customQueue.length - 1) * 0.25)).toFixed(2));
                        }
                        item.audioBuffer = await requestEngineArrayBuffer(finalText, targetSpeed);
                        item.ready = true;
                    }
                } catch (e) { item.failed = true; }
                if (!customStopped && !customPaused) customPlayNext();
            }
        } finally {
            customGenerateRunning = false;
            if (!customStopped && customQueue.some(x => !x.failed && !x.ready && !x.audioBuffer)) kickCustomGenerate();
        }
        if (!customStopped && !customSpeaking && !customPaused && customQueue.length && customQueue.every(x => x.failed)) {
            customQueue = []; customTotal = 0;
            setVideoVolume(VIDEO_VOLUME);
            updateCustomProgress('⚠️ Błąd syntezy');
            setPrepareStatus('⚠️ Błąd syntezy (serwer ' + getEngine().name + ' działa?)');
            setCustomButtonsState();
        }
    }
    function customPlayNext() {
        if (customStopped || customPaused || customSpeaking) return;
        if (singleTabMode && !hasAudioFocus) return;
        const item = customQueue[0];
        if (!item || !item.ready || !item.audioBuffer) return;
        customSpeaking = true;
        const ctx = ensureAudioCtxRunning();
        setVideoVolume(duckVolume);
        const dur = item.audioBuffer.duration || 0;
        const startOff = Math.max(0, Math.min(customResumeOffset || 0, Math.max(0, dur - 0.05)));
        customResumeOffset = 0;
        if (recActive) recPushBuffer(item.audioBuffer, startOff);
        const source = ctx.createBufferSource();
        source.buffer = item.audioBuffer;
        customCurrentSource = source; customCurrentBuffer = item.audioBuffer;
        customStartedAtCtx = ctx.currentTime; customBaseOffset = startOff; customOffsetSec = startOff;
        source.connect(masterGain);
        customBookmark = { fp: customSessionFp, chunkIndex: Math.max(0, customTotal - customQueue.length), offsetSec: startOff };
        saveCustomBookmark();
        source.onended = () => {
            if (customCurrentSource !== source) return;
            customCurrentSource = null; customCurrentBuffer = null; customSpeaking = false;
            if (customQueue[0] === item) customQueue.shift();
            if (!customStopped && customQueue.length) customPlayNext();
            else if (!customQueue.length) customFinishAll();
        };
        source.start(ctx.currentTime, startOff);
        updateNowReadingLabel(item.text);
        updateCustomProgress('🔊');
    }
    function customFinishAll() {
        finishRecording(false);
        customSpeaking = false; customPaused = false;
        customCurrentSource = null; customCurrentBuffer = null;
        customQueue = []; customTotal = 0;
        clearCustomBookmark();
        setVideoVolume(VIDEO_VOLUME);
        updateCustomProgress('✅ Zakończono');
        setPrepareStatus('✅ Zakończono czytanie własnego tekstu');
        setCustomButtonsState();
    }
    function pauseCustomReading() {
        if (customPaused || customStopped) return;
        if (customSpeaking && customCurrentSource && audioCtx) {
            customOffsetSec = customBaseOffset + (audioCtx.currentTime - customStartedAtCtx);
            try { customCurrentSource.onended = null; customCurrentSource.stop(); customCurrentSource.disconnect(); } catch (e) {}
            customCurrentSource = null;
        }
        customSpeaking = false; customPaused = true;
        customBookmark = { fp: customSessionFp, chunkIndex: Math.max(0, customTotal - customQueue.length), offsetSec: customOffsetSec };
        saveCustomBookmark();
        setVideoVolume(VIDEO_VOLUME);
        updateCustomProgress('⏸️');
        setPrepareStatus('⏸️ Własny tekst: zapauzowano (🔖 zakładka zapamiętana)');
        setCustomButtonsState();
    }
    function resumeCustomReading() {
        if (!customPaused || customStopped) return;
        customPaused = false;
        const ctx = ensureAudioCtxRunning();
        if (customCurrentBuffer) {
            setVideoVolume(duckVolume);
            const dur = customCurrentBuffer.duration || 0;
            const off = Math.max(0, Math.min(customOffsetSec, Math.max(0, dur - 0.05)));
            const source = ctx.createBufferSource();
            source.buffer = customCurrentBuffer;
            customCurrentSource = source;
            customStartedAtCtx = ctx.currentTime; customBaseOffset = off;
            source.connect(masterGain);
            source.onended = () => {
                if (customCurrentSource !== source) return;
                customCurrentSource = null; customCurrentBuffer = null; customSpeaking = false;
                if (customQueue[0]) customQueue.shift();
                if (!customStopped && customQueue.length) customPlayNext();
                else if (!customQueue.length) customFinishAll();
            };
            customSpeaking = true;
            source.start(ctx.currentTime, off);
            updateCustomProgress('🔊');
            setPrepareStatus('▶️ Własny tekst: wznawiam');
            setCustomButtonsState();
        } else { setCustomButtonsState(); customPlayNext(); }
    }
    function stopCustomReading(quiet) {
        if (recActive) finishRecording(false);
        if (customTotal > 0 && customSessionFp && (customSpeaking || customPaused)) {
            let off = 0;
            try {
                if (customSpeaking && audioCtx && customCurrentSource) off = customBaseOffset + (audioCtx.currentTime - customStartedAtCtx);
                else if (customPaused) off = customOffsetSec;
            } catch (e) {}
            customBookmark = { fp: customSessionFp, chunkIndex: Math.max(0, customTotal - customQueue.length), offsetSec: Math.max(0, off) };
            saveCustomBookmark();
        }
        customStopped = true; customPaused = false; customSpeaking = false;
        if (customCurrentSource) {
            try { customCurrentSource.onended = null; customCurrentSource.stop(); customCurrentSource.disconnect(); } catch (e) {}
            customCurrentSource = null;
        }
        customCurrentBuffer = null; customQueue = []; customTotal = 0;
        setVideoVolume(VIDEO_VOLUME);
        if (!quiet) {
            updateCustomProgress('⏹ Zatrzymano');
            setPrepareStatus(customBookmark ? '⏹ Zatrzymano — 🔖 zakładka zapamiętana' : '⏹ Zatrzymano czytanie własnego tekstu');
        }
        setCustomButtonsState();
    }
    function startCustomReading(rawText, opts) {
        opts = opts || {};
        const text = String(rawText || '').replace(/\s+/g, ' ').trim();
        if (!text) return;
        ensureAudioCtxRunning();
        stopCustomReading(true);
        const chunks = splitTextIntoChunks(text, CUSTOM_CHUNK_WORDS);
        if (!chunks.length) return;
        let fromChunk = 0, fromOffset = 0;
        if (opts.fromChunk && opts.fromChunk > 0 && opts.fromChunk < chunks.length) {
            fromChunk = opts.fromChunk;
            fromOffset = Math.max(0, Number(opts.fromOffset) || 0);
        }
        customStopped = false; customPaused = false;
        customTotal = chunks.length;
        customQueue = chunks.slice(fromChunk).map(t => ({ text: t, ready: false, failed: false, audioBuffer: null }));
        customSessionFp = customFingerprint(text);
        customResumeOffset = fromOffset; customBaseOffset = 0; customOffsetSec = 0;
        updateCustomProgress(fromChunk > 0 ? '🔖 Wznowiono' : '⏳ Przygotowuję...');
        setPrepareStatus(fromChunk > 0
            ? '🔖 Czytam od zakładki (fragment ' + (fromChunk + 1) + ' z ' + customTotal + ')'
            : '🔊 Czytam własny tekst (' + customTotal + ' fragmentów po max. ' + CUSTOM_CHUNK_WORDS + ' słów)');
        setCustomButtonsState();
        kickCustomGenerate();
    }
    function updateCustomProgress(prefix) {
        const panel = document.getElementById('duo-spoken-panel');
        const el = panel ? panel.querySelector('#duo-custom-progress') : null;
        if (!el) return;
        if (customTotal > 0) {
            const done = customTotal - customQueue.length;
            el.textContent = (prefix ? prefix + ' ' : '') + 'Fragment ' + Math.min(done + 1, customTotal) + ' / ' + customTotal;
        } else el.textContent = prefix || '';
    }
    function setCustomButtonsState() {
        const panel = document.getElementById('duo-spoken-panel');
        if (!panel) return;
        const pauseBtn = panel.querySelector('#duo-custom-pause');
        const stopBtn = panel.querySelector('#duo-custom-stop');
        const resumeBtn = panel.querySelector('#duo-custom-resume');
        if (pauseBtn && stopBtn) {
            const active = customSpeaking || customPaused || customQueue.length > 0;
            pauseBtn.textContent = customPaused ? '▶️ Wznów' : '⏸️ Pauza';
            pauseBtn.disabled = !active; stopBtn.disabled = !active;
            pauseBtn.style.opacity = active ? '1' : '0.45';
            stopBtn.style.opacity = active ? '1' : '0.45';
        }
        if (resumeBtn) {
            const hasBm = !!customBookmark;
            resumeBtn.disabled = !hasBm;
            resumeBtn.style.opacity = hasBm ? '1' : '0.45';
        }
    }

    // ============================================================
    // --- WebSocket + fallback HTTP ---
    // ============================================================
    let wsSocket = null, wsReconnectTimer = null, wsReconnectDelay = 500;
    const wsPending = [];
    function connectWebSocket() {
        if (!masterPower || SLEEP_MODE) return;   // v4.2.13: wyłączony = zero połączeń z serwerem
        if (wsSocket && (wsSocket.readyState === WebSocket.OPEN || wsSocket.readyState === WebSocket.CONNECTING)) return;
        if (wsReconnectTimer) { clearTimeout(wsReconnectTimer); wsReconnectTimer = null; }
        try {
            const socket = new WebSocket(getEngine().wsUrl);
            socket.binaryType = 'arraybuffer';
            wsSocket = socket;
            socket.onopen = () => { wsReconnectDelay = 500; setPrepareStatus('🟢 Połączono: ' + getEngine().name + ' (WebSocket)'); };
            socket.onmessage = (event) => {
                const idx = wsPending.findIndex((entry) => entry.socket === socket);
                if (idx === -1) return;
                const entry = wsPending.splice(idx, 1)[0];
                clearTimeout(entry.timer);
                if (event.data instanceof ArrayBuffer) { entry.resolve(event.data); return; }
                try {
                    const parsed = JSON.parse(event.data);
                    console.warn('[DUO] Błąd z serwera:', parsed.error || event.data);
                    entry.reject(new Error(parsed.error || 'Błąd serwera'));
                } catch (e) { entry.reject(new Error('Nieoczekiwana odpowiedź serwera')); }
            };
            socket.onerror = () => { try { socket.close(); } catch (e) {} };
            socket.onclose = () => {
                if (wsSocket === socket) wsSocket = null;
                const stale = wsPending.filter((entry) => entry.socket === socket);
                stale.forEach((entry) => {
                    const i = wsPending.indexOf(entry);
                    if (i !== -1) wsPending.splice(i, 1);
                    clearTimeout(entry.timer);
                    entry.reject(new Error('Połączenie WebSocket rozłączone'));
                });
                if (wsReconnectTimer) { clearTimeout(wsReconnectTimer); wsReconnectTimer = null; }
                // v4.2.13: ponawiamy tylko, gdy lektor coś czyta (nie co 5 s w każdej karcie bez końca)
                if (!masterPower || !(imtLektorEnabled || enabled)) return;
                wsReconnectTimer = setTimeout(connectWebSocket, wsReconnectDelay);
                wsReconnectDelay = Math.min(wsReconnectDelay * 2, 5000);
            };
        } catch (e) {
            wsSocket = null;
            if (wsReconnectTimer) { clearTimeout(wsReconnectTimer); wsReconnectTimer = null; }
            if (!masterPower || !(imtLektorEnabled || enabled)) return;
            wsReconnectTimer = setTimeout(connectWebSocket, wsReconnectDelay);
            wsReconnectDelay = Math.min(wsReconnectDelay * 2, 5000);
        }
    }
    function ensureWebSocketOpen(timeoutMs) {
        const ms = timeoutMs || 5000;
        return new Promise((resolve, reject) => {
            connectWebSocket();
            if (!wsSocket) { reject(new Error('Nie można otworzyć połączenia WebSocket')); return; }
            if (wsSocket.readyState === WebSocket.OPEN) { resolve(); return; }
            let done = false, timer = null;
            const finish = (fn, arg) => { if (done) return; done = true; if (timer) clearTimeout(timer); fn(arg); };
            wsSocket.addEventListener('open', () => finish(resolve), { once: true });
            wsSocket.addEventListener('error', () => finish(reject, new Error('Połączenie WebSocket nie powiodło się')), { once: true });
            wsSocket.addEventListener('close', () => finish(reject, new Error('Połączenie WebSocket zamknięte')), { once: true });
            timer = setTimeout(() => finish(reject, new Error('Timeout połączenia WebSocket')), ms);
        });
    }
    function sendOverWebSocket(payload) {
        return new Promise((resolve, reject) => {
            const socket = wsSocket;
            if (!socket || socket.readyState !== WebSocket.OPEN) { reject(new Error('WebSocket nie jest połączony')); return; }
            const entry = {
                socket, resolve, reject,
                timer: setTimeout(() => {
                    const idx = wsPending.indexOf(entry);
                    if (idx !== -1) wsPending.splice(idx, 1);
                    reject(new Error('Timeout odpowiedzi WebSocket'));
                    // Wolne silniki (np. Audio8 RTF ~5) potrzebują dluzszego
                    // limitu niz domyslne 10 s - inaczej kazde zdanie jest
                    // odrzucane jako timeout, mimo ze serwer pracuje poprawnie.
                }, getEngine().replyTimeoutMs || 10000)
            };
            wsPending.push(entry);
            try { socket.send(JSON.stringify(payload)); }
            catch (e) {
                const idx = wsPending.indexOf(entry);
                if (idx !== -1) wsPending.splice(idx, 1);
                clearTimeout(entry.timer);
                reject(e);
            }
        });
    }
    let preferHttp = { piper: false, supertonic: false, xtts: false, matcha: false, omnivoice: false, pocket: false, audio8: false };
    function enginePort() {
        const m = /:(\d+)$/.exec(getEngine().wsUrl || '');
        return m ? m[1] : '?';
    }
    function httpHealthCheck(timeoutMs) {
        return new Promise((resolve, reject) => {
            try {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: getEngine().httpBase + '/health',
                    timeout: timeoutMs || 3000,
                    onload: (r) => (r.status >= 200 && r.status < 400) ? resolve({ http: true }) : reject(new Error('HTTP ' + r.status)),
                    onerror: () => reject(new Error('HTTP nieosiągalny')),
                    ontimeout: () => reject(new Error('HTTP timeout'))
                });
            } catch (e) { reject(e); }
        });
    }
    function httpSynthesize(payload, timeoutMs) {
        return new Promise((resolve, reject) => {
            try {
                GM_xmlhttpRequest({
                    method: 'POST',
                    url: getEngine().httpBase + '/tts',
                    headers: { 'Content-Type': 'application/json' },
                    data: JSON.stringify(payload),
                    responseType: 'arraybuffer',
                    timeout: timeoutMs || (getEngine().replyTimeoutMs || 60000),
                    onload: (r) => {
                        if (r.status >= 200 && r.status < 300 && r.response && r.response.byteLength > 100) resolve(r.response);
                        else reject(new Error('HTTP /tts: status ' + r.status));
                    },
                    onerror: () => reject(new Error('HTTP /tts nieosiągalny')),
                    ontimeout: () => reject(new Error('HTTP /tts timeout'))
                });
            } catch (e) { reject(e); }
        });
    }
    function healthCheck() {
        if (preferHttp[currentEngineId]) return httpHealthCheck(3000);
        return ensureWebSocketOpen(3000).then(() => ({ ws: true })).catch((wsErr) => {
            return httpHealthCheck(3000).then((ok) => {
                preferHttp[currentEngineId] = true;
                setPrepareStatus('🔌 WS zablokowany przez tę stronę (CSP) — przełączam na HTTP');
                return ok;
            });
        });
    }
    // Silniki SZEREGOWE (XTTS/OmniVoice/Pocket/Audio8): serwer liczy JEDNA kwestie
    // naraz (semafor), wiec rownolegle wysylki przez jeden wspolny WebSocket tylko
    // ustawiaja sie w kolejce po stronie serwera i nadmuchuja latencje najmlodszych
    // (timeout). Szeregujemy je juz po stronie klienta - latencja = czysty czas syntezy.
    let __serialEngineChain = Promise.resolve();
    async function requestEngineArrayBuffer(text, speed) {
        if (currentEngineId === 'omnivoice' || currentEngineId === 'pocket' || currentEngineId === 'audio8' || currentEngineId === 'xtts') {
            const run = () => requestEngineArrayBufferInner(text, speed);
            const p = __serialEngineChain.then(run, run);
            __serialEngineChain = p.catch(() => {});
            return p;
        }
        return requestEngineArrayBufferInner(text, speed);
    }
    async function requestEngineArrayBufferInner(text, speed) {
        const payload = { text, voice: selectedVoice, speed: speed || SPEECH_RATE };
        if (currentEngineId === 'supertonic') {
            payload.steps = pickStepsForText(text);
            payload.silence = speechGap;
        }
        if (currentEngineId === 'matcha') {
            // Matcha-TTS-PL: token stylu zmienia rozpiętość wysokości / tempo /
            // intonację. -1 = bez stylu (sam tekst + interpunkcja).
            payload.style = (typeof matchaStyle !== 'undefined' && matchaStyle !== null)
                ? matchaStyle : -1;
        }
        if (preferHttp[currentEngineId]) {
            const ab = await httpSynthesize(payload);
            if (ab && ab.byteLength > 100) return ab;
            throw new Error('Pusty bufor audio (HTTP)');
        }
        try {
            await ensureWebSocketOpen(5000);
        } catch (e) {
            try {
                const ab = await httpSynthesize(payload);
                preferHttp[currentEngineId] = true;
                setPrepareStatus('🔌 WS zablokowany przez tę stronę (CSP) — przełączam na HTTP');
                if (ab && ab.byteLength > 100) return ab;
            } catch (e2) {
                console.warn('[DUO] Fallback HTTP też nie działa:', e2);
            }
            throw e;
        }
        const arrayBuffer = await sendOverWebSocket(payload);
        if (arrayBuffer && arrayBuffer.byteLength > 100) return arrayBuffer;
        throw new Error('Pusty bufor audio');
    }
    async function requestEngineBlob(text, speed) {
        const ab = await requestEngineArrayBuffer(text, speed);
        return new Blob([ab], { type: 'audio/wav' });
    }

    // ============================================================
    // --- NAGRYWANIE WAV/MP3 ---
    // ============================================================
    function recTotalSeconds() {
        if (!recSampleRate) return 0;
        let s = 0;
        for (const c of recChunks) s += c.length;
        return s / recSampleRate;
    }
    function updateRecBtn() {
        const panel = document.getElementById('duo-spoken-panel');
        const btn = panel ? panel.querySelector('#duo-custom-rec') : null;
        if (!btn) return;
        if (recActive) {
            btn.textContent = '⏺ Nagrywam...';
            btn.style.background = '#5a1515'; btn.style.borderColor = '#f44'; btn.style.color = '#faa';
        } else {
            btn.textContent = '🎙️ Nagraj';
            btn.style.background = '#0d2d3d'; btn.style.borderColor = '#0af'; btn.style.color = '#7fe9ff';
        }
    }
    function recPushBuffer(audioBuffer, startOff) {
        try {
            if (!audioBuffer) return;
            const ch = audioBuffer.getChannelData(0);
            if (!recSampleRate) recSampleRate = audioBuffer.sampleRate;
            const startSample = Math.max(0, Math.floor((startOff || 0) * audioBuffer.sampleRate));
            if (startSample < ch.length) recChunks.push(ch.slice(startSample));
        } catch (e) {}
    }
    function pad2(n) { return String(n).padStart(2, '0'); }
    function encodeWavBlob(chunks, rate) {
        let total = 0;
        for (const c of chunks) total += c.length;
        const buffer = new ArrayBuffer(44 + total * 2);
        const view = new DataView(buffer);
        const ws = (off, s) => { for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i)); };
        ws(0, 'RIFF'); view.setUint32(4, 36 + total * 2, true); ws(8, 'WAVE');
        ws(12, 'fmt '); view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true);
        view.setUint32(24, rate, true); view.setUint32(28, rate * 2, true);
        view.setUint16(32, 2, true); view.setUint16(34, 16, true);
        ws(36, 'data'); view.setUint32(40, total * 2, true);
        let off = 44;
        for (const chunk of chunks) {
            for (let i = 0; i < chunk.length; i++, off += 2) {
                const s = Math.max(-1, Math.min(1, chunk[i]));
                view.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
            }
        }
        return new Blob([buffer], { type: 'audio/wav' });
    }
    function f32ToInt16(f32) {
        const out = new Int16Array(f32.length);
        for (let i = 0; i < f32.length; i++) {
            const s = Math.max(-1, Math.min(1, f32[i]));
            out[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }
        return out;
    }
    function encodeMp3Blob(chunks, rate) {
        const enc = new lamejs.Mp3Encoder(1, rate, 128);
        const parts = [];
        const blockSize = 1152;
        for (const chunk of chunks) {
            const pcm = f32ToInt16(chunk);
            for (let i = 0; i < pcm.length; i += blockSize) {
                const buf = enc.encodeBuffer(pcm.subarray(i, i + blockSize));
                if (buf.length) parts.push(new Uint8Array(buf));
            }
        }
        const end = enc.flush();
        if (end.length) parts.push(new Uint8Array(end));
        return new Blob(parts, { type: 'audio/mp3' });
    }
    function finishRecording(cancel) {
        if (!recActive) return;
        recActive = false;
        if (recTimer) { clearInterval(recTimer); recTimer = null; }
        const chunks = recChunks, rate = recSampleRate;
        recChunks = []; recSampleRate = 0;
        updateRecBtn();
        if (cancel || !chunks.length || !rate) {
            setPrepareStatus(cancel ? '🎙️ Nagrywanie anulowane' : '🎙️ Nagranie było puste');
            return;
        }
        const wantMp3 = (() => {
            const panel = document.getElementById('duo-spoken-panel');
            const cb = panel ? panel.querySelector('#duo-mp3-check') : null;
            return !!(cb && cb.checked);
        })();
        let blob, ext, note = '';
        try {
            if (wantMp3 && typeof lamejs !== 'undefined') { blob = encodeMp3Blob(chunks, rate); ext = 'mp3'; }
            else { blob = encodeWavBlob(chunks, rate); ext = 'wav'; if (wantMp3) note = ' (MP3 niedostępny — WAV)'; }
        } catch (e) { blob = encodeWavBlob(chunks, rate); ext = 'wav'; note = ' (błąd MP3 — WAV)'; }
        const d = new Date();
        const fname = `duo-lektor_${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}_${pad2(d.getHours())}-${pad2(d.getMinutes())}.${ext}`;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = fname;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => { try { URL.revokeObjectURL(url); } catch (e) {} }, 5000);
        const secs = (chunks.reduce((n, c) => n + c.length, 0) / rate).toFixed(1);
        setPrepareStatus(`🎙️ Zapisano ${fname} (${secs} s)${note}`);
    }
    function toggleRecording() {
        if (recActive) { finishRecording(false); return; }
        recActive = true; recChunks = []; recSampleRate = 0;
        updateRecBtn();
        recTimer = setInterval(() => {
            const panel = document.getElementById('duo-spoken-panel');
            const btn = panel ? panel.querySelector('#duo-custom-rec') : null;
            if (btn) btn.textContent = '⏺ ' + recTotalSeconds().toFixed(1) + ' s';
        }, 250);
        setPrepareStatus('🎙️ Nagrywanie WŁĄCZONE — klik „🔊 Przeczytaj". Ponowny klik zapisze plik.');
    }

    // ============================================================
    // --- PANEL: PODGLĄD + BLOKADY + WŁASNY TEKST ---
    // ============================================================
    const SPOKEN_GEO_KEY = 'duo_SpokenPanelGeo';
    function saveSpokenGeo(panel) {
        try {
            const minimized = panel.dataset.minimized === '1';
            const rect = panel.getBoundingClientRect();
            localStorage.setItem(SPOKEN_GEO_KEY, JSON.stringify({
                left: panel.style.left, top: panel.style.top,
                width: minimized ? panel.dataset.savedWidth || rect.width + 'px' : panel.style.width,
                height: minimized ? panel.dataset.savedHeight || rect.height + 'px' : panel.style.height,
                minimized
            }));
        } catch (e) {}
    }
    function applySpokenMinimized(panel, minimized) {
        const body = panel.querySelector('#duo-spoken-body');
        const grip = panel.querySelector('#duo-spoken-resize');
        const minBtn = panel.querySelector('#duo-spoken-min');
        if (!body) return;
        if (minimized) {
            const rect = panel.getBoundingClientRect();
            panel.dataset.savedWidth = panel.style.width || rect.width + 'px';
            panel.dataset.savedHeight = panel.style.height || rect.height + 'px';
            panel.dataset.minimized = '1';
            body.style.display = 'none';
            if (grip) grip.style.display = 'none';
            panel.style.height = 'auto'; panel.style.width = '190px';
            if (minBtn) minBtn.textContent = '➕';
        } else {
            panel.dataset.minimized = '0';
            body.style.display = '';
            if (grip) grip.style.display = '';
            panel.style.width = panel.dataset.savedWidth || '300px';
            panel.style.height = panel.dataset.savedHeight || '';
            if (minBtn) minBtn.textContent = '➖';
        }
        saveSpokenGeo(panel);
    }
    function renderSpokenPanel() {
        let panel = document.getElementById('duo-spoken-panel');
        if (!panel) {
            panel = document.createElement('div');
            panel.id = 'duo-spoken-panel';
            panel.style.cssText = 'position:fixed;right:280px;bottom:20px;z-index:2147483647;width:300px;height:min(620px,86vh);background:rgba(17,17,17,.97);border:1px solid #0af;border-radius:6px;padding:0;display:none;flex-direction:column;font-family:Arial,sans-serif;overflow:hidden;';
            document.body.appendChild(panel);
            reparentDuoUI();
        }
        loadCustomBookmark();
        panel.innerHTML = `
            <div id="duo-spoken-header" style="display:flex;justify-content:space-between;align-items:center;gap:6px;padding:7px 8px;background:#0a1a24;border-bottom:1px solid #0af;cursor:move;user-select:none;">
                <strong style="color:#00f7ff;font:11px Arial;pointer-events:none;">⠿ 📺 Napisy lektora + 🚫 Blokady</strong>
                <span style="display:flex;gap:4px;">
                    <button id="duo-spoken-min" title="Minimalizuj / przywróć" style="background:#111;color:#8cf;border:1px solid #08f;cursor:pointer;font:10px Arial;padding:1px 6px;border-radius:3px;">➖</button>
                    <button id="duo-spoken-close" title="Zamknij" style="background:#111;color:#f66;border:1px solid #f66;cursor:pointer;font:10px Arial;padding:1px 5px;border-radius:3px;">X</button>
                </span>
            </div>
            <div id="duo-spoken-body" style="flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column;gap:6px;padding:8px;color:#fff;">
                <div style="color:#888;font:10px Arial;">Aktualnie czytane:</div>
                <div id="duo-spoken-current" style="min-height:34px;background:#0a1a24;border:1px solid #0af;border-radius:4px;padding:5px;color:#7fe9ff;font:11px Arial;word-wrap:break-word;">— cisza —</div>
                <div style="color:#888;font:10px Arial;border-top:1px solid #333;padding-top:4px;">Historia (ostatnie kwestie):</div>
                <div id="duo-spoken-history" style="display:flex;flex-direction:column;gap:3px;"></div>
                <div style="color:#f88;font:10px Arial;border-top:1px solid #333;padding-top:4px;">🚫 Zablokowane — lektor POMIJE każdą kwestię zawierającą:</div>
                <div style="display:flex;gap:4px;">
                    <input id="duo-block-input" type="text" placeholder="Wpisz wyraz lub całe zdanie..." style="flex:1;height:22px;background:#111;color:#fff;border:1px solid #a66;font:11px Arial;padding:0 4px;border-radius:3px;"/>
                    <button id="duo-block-add" style="width:28px;height:22px;background:#5a1515;color:#faa;border:1px solid #faa;cursor:pointer;border-radius:3px;font-weight:bold;">+</button>
                </div>
                <div id="duo-block-list" style="display:flex;flex-direction:column;gap:3px;max-height:130px;overflow-y:auto;"></div>
                <div style="color:#8f8;font:10px Arial;border-top:1px solid #333;padding-top:4px;display:flex;justify-content:space-between;align-items:center;">
                    <span>✍️ Własny tekst dla lektora:</span>
                    <label style="display:flex;align-items:center;gap:3px;color:#aaa;font:9px Arial;cursor:pointer;margin:0;">
                        <input type="checkbox" id="duo-custom-remember"/> 💾 Pamiętaj
                    </label>
                </div>
                <textarea id="duo-custom-text" placeholder="Wklej swój tekst — nawet bardzo długi. Podzielę go na fragmenty i przeczytam jak audiobook..." style="width:100%;box-sizing:border-box;height:150px;min-height:70px;background:#111;color:#fff;border:1px solid #6a6;font:11px Arial;padding:4px;border-radius:3px;resize:vertical;line-height:1.35;"></textarea>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <div id="duo-custom-count" style="color:#666;font:9px Arial;">0 wyrazów</div>
                    <label style="display:flex;align-items:center;gap:3px;color:#aaa;font:9px Arial;cursor:pointer;margin:0;" title="Nagrywaj w MP3 (lamejs). Bez zaznaczenia: WAV.">
                        <input type="checkbox" id="duo-mp3-check"/> ⏺ MP3
                    </label>
                </div>
                <div style="display:flex;gap:4px;">
                    <button id="duo-custom-speak" style="flex:1;height:24px;background:#0d2d3d;color:#7fe9ff;border:1px solid #0af;cursor:pointer;font:bold 10px Arial;border-radius:3px;">🔊 Przeczytaj</button>
                    <button id="duo-custom-rec" title="Nagrywanie czytanego tekstu do WAV/MP3" style="flex:1;height:24px;background:#0d2d3d;color:#7fe9ff;border:1px solid #0af;cursor:pointer;font:bold 10px Arial;border-radius:3px;">🎙️ Nagraj</button>
                </div>
                <div style="display:flex;gap:4px;">
                    <button id="duo-custom-block" style="flex:1;height:24px;background:#5a1515;color:#faa;border:1px solid #faa;cursor:pointer;font:bold 10px Arial;border-radius:3px;">🚫 Blokady</button>
                </div>
                <div style="display:flex;gap:4px;">
                    <button id="duo-custom-pause" style="flex:1;height:24px;background:#33280d;color:#fd8;border:1px solid #d80;cursor:pointer;font:bold 10px Arial;border-radius:3px;">⏸️ Pauza</button>
                    <button id="duo-custom-stop" style="flex:1;height:24px;background:#3a1515;color:#faa;border:1px solid #a55;cursor:pointer;font:bold 10px Arial;border-radius:3px;">⏹ Stop</button>
                </div>
                <div style="display:flex;gap:4px;">
                    <button id="duo-custom-resume" title="Wznów od zakładki (nawet po restarcie)" style="flex:1;height:24px;background:#2d1a3d;color:#e9c7ff;border:1px solid #a6f;cursor:pointer;font:bold 10px Arial;border-radius:3px;">🔖 Wznów z zakładki</button>
                    <button id="duo-custom-clear" title="Czyści pole, pamięć i zakładkę" style="flex:1;height:24px;background:#2a2a2a;color:#ccc;border:1px solid #888;cursor:pointer;font:bold 10px Arial;border-radius:3px;">🗑 Wyczyść</button>
                </div>
                <div id="duo-custom-progress" style="color:#8f8;font:10px Arial;min-height:12px;"></div>
            </div>
            <div id="duo-spoken-resize" title="Przeciągnij, aby zmienić rozmiar" style="position:absolute;right:0;bottom:0;width:16px;height:16px;cursor:nwse-resize;background:linear-gradient(135deg,transparent 0 50%,#0af 50% 55%,transparent 55% 65%,#0af 65% 70%,transparent 70% 80%,#0af 80% 85%,transparent 85%);"></div>
        `;
        try {
            const geo = JSON.parse(localStorage.getItem(SPOKEN_GEO_KEY) || 'null');
            if (geo) {
                if (geo.left) { panel.style.left = geo.left; panel.style.right = 'auto'; panel.style.bottom = 'auto'; }
                if (geo.top) panel.style.top = geo.top;
                if (geo.width) panel.style.width = geo.width;
                if (geo.height) panel.style.height = geo.height;
                if (geo.minimized) { panel.dataset.savedWidth = geo.width || '300px'; panel.dataset.savedHeight = geo.height || ''; applySpokenMinimized(panel, true); }
            }
        } catch (e) {}

        const header = panel.querySelector('#duo-spoken-header');
        let dragState = null;
        header.addEventListener('mousedown', (e) => {
            if (e.target.closest('button')) return;
            const rect = panel.getBoundingClientRect();
            dragState = { x: e.clientX, y: e.clientY, l: rect.left, t: rect.top };
            e.preventDefault();
        });
        header.addEventListener('touchstart', (e) => {
            if (e.target.closest('button')) return;
            const t = e.touches[0];
            const rect = panel.getBoundingClientRect();
            dragState = { x: t.clientX, y: t.clientY, l: rect.left, t: rect.top };
        }, { passive: true });
        const onMove = (cx, cy) => {
            if (!dragState) return;
            panel.style.left = Math.max(0, Math.min(window.innerWidth - 60, dragState.l + (cx - dragState.x))) + 'px';
            panel.style.top = Math.max(0, Math.min(window.innerHeight - 40, dragState.t + (cy - dragState.y))) + 'px';
            panel.style.right = 'auto'; panel.style.bottom = 'auto';
        };
        window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
        window.addEventListener('touchmove', (e) => { if (!dragState) return; const t = e.touches[0]; onMove(t.clientX, t.clientY); e.preventDefault(); }, { passive: false });
        const endMove = () => { if (!dragState) return; dragState = null; saveSpokenGeo(panel); };
        window.addEventListener('mouseup', endMove);
        window.addEventListener('touchend', endMove);

        const grip = panel.querySelector('#duo-spoken-resize');
        let rsState = null;
        grip.addEventListener('mousedown', (e) => {
            const rect = panel.getBoundingClientRect();
            rsState = { x: e.clientX, y: e.clientY, w: rect.width, h: rect.height };
            e.preventDefault(); e.stopPropagation();
        });
        grip.addEventListener('touchstart', (e) => {
            const t = e.touches[0];
            const rect = panel.getBoundingClientRect();
            rsState = { x: t.clientX, y: t.clientY, w: rect.width, h: rect.height };
            e.stopPropagation();
        }, { passive: true });
        const onRs = (cx, cy) => {
            if (!rsState) return;
            panel.style.width = Math.max(220, Math.min(window.innerWidth - 12, rsState.w + (cx - rsState.x))) + 'px';
            panel.style.height = Math.max(150, Math.min(window.innerHeight - 12, rsState.h + (cy - rsState.y))) + 'px';
        };
        window.addEventListener('mousemove', (e) => onRs(e.clientX, e.clientY));
        window.addEventListener('touchmove', (e) => { if (!rsState) return; const t = e.touches[0]; onRs(t.clientX, t.clientY); e.preventDefault(); }, { passive: false });
        const endRs = () => { if (!rsState) return; rsState = null; saveSpokenGeo(panel); };
        window.addEventListener('mouseup', endRs);
        window.addEventListener('touchend', endRs);

        panel.querySelector('#duo-spoken-min').addEventListener('click', () => applySpokenMinimized(panel, panel.dataset.minimized !== '1'));
        panel.querySelector('#duo-spoken-close').addEventListener('click', () => panel.style.display = 'none');

        const blockInput = panel.querySelector('#duo-block-input');
        const submitBlock = () => { if (addBlockedPhrase(blockInput.value)) { blockInput.value = ''; updateSpokenPanelLive(); } };
        panel.querySelector('#duo-block-add').addEventListener('click', submitBlock);
        blockInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitBlock(); });

        const customTa = panel.querySelector('#duo-custom-text');
        const rememberCb = panel.querySelector('#duo-custom-remember');
        const countEl = panel.querySelector('#duo-custom-count');
        const updateCount = () => { countEl.textContent = ((customTa.value.trim().match(/\S+/g) || []).length) + ' wyrazów'; };
        const rememberOn = gmGet(CT_REMEMBER_KEY) === 'true';
        rememberCb.checked = rememberOn;
        if (rememberOn) customTa.value = String(gmGet(CT_TEXT_KEY) || '');
        updateCount();
        customTa.addEventListener('input', () => {
            updateCount();
            if (rememberCb.checked) {
                clearTimeout(customSaveTimer);
                customSaveTimer = setTimeout(() => gmSet(CT_TEXT_KEY, customTa.value), 400);
            }
        });
        rememberCb.addEventListener('change', () => {
            gmSet(CT_REMEMBER_KEY, rememberCb.checked);
            if (rememberCb.checked) gmSet(CT_TEXT_KEY, customTa.value);
            setPrepareStatus(rememberCb.checked ? '💾 Pamięć tekstu WŁĄCZONA' : '💾 Pamięć tekstu WYŁĄCZONA');
        });
        panel.querySelector('#duo-custom-speak').addEventListener('click', () => {
            const t = (customTa.value || '').trim();
            if (!t) return;
            if (!rememberCb.checked) { customTa.value = ''; updateCount(); }
            startCustomReading(t);
        });
        panel.querySelector('#duo-custom-rec').addEventListener('click', toggleRecording);
        panel.querySelector('#duo-custom-pause').addEventListener('click', () => { if (customPaused) resumeCustomReading(); else pauseCustomReading(); });
        panel.querySelector('#duo-custom-stop').addEventListener('click', () => stopCustomReading(false));
        panel.querySelector('#duo-custom-resume').addEventListener('click', () => {
            const bm = customBookmark || loadCustomBookmark();
            if (!bm) { setPrepareStatus('ℹ️ Brak zakładki — najpierw przeczytaj, zapauzuj lub zatrzymaj tekst.'); return; }
            let text = (customTa.value || '').trim();
            if (!text) text = String(gmGet(CT_TEXT_KEY) || '').trim();
            if (!text) { setPrepareStatus('⚠️ Brak tekstu — wklej tekst lub włącz 💾 pamięć.'); return; }
            if (customFingerprint(text) !== bm.fp) { setPrepareStatus('⚠️ Tekst różni się od zapamiętanego — zakładka nieaktualna.'); return; }
            startCustomReading(text, { fromChunk: bm.chunkIndex, fromOffset: bm.offsetSec });
        });
        panel.querySelector('#duo-custom-clear').addEventListener('click', () => {
            customTa.value = ''; updateCount(); clearTimeout(customSaveTimer);
            clearCustomTextMemory(); setCustomButtonsState();
            setPrepareStatus('🗑 Wyczyszczono tekst i zakładkę');
        });
        panel.querySelector('#duo-custom-block').addEventListener('click', () => {
            const raw = (customTa.value || '').trim();
            if (!raw) return;
            const lines = raw.split(/\r?\n/).map(s => clean(s)).filter(Boolean);
            let added = 0;
            lines.forEach(l => { if (addBlockedPhrase(l)) added++; });
            customTa.value = ''; updateCount(); updateSpokenPanelLive();
            const btn = panel.querySelector('#duo-custom-block');
            btn.textContent = added ? ('✅ Dodano: ' + added) : 'Już na liście';
            setTimeout(() => { btn.textContent = '🚫 Blokady'; }, 1500);
        });

        setCustomButtonsState();
        updateRecBtn();
        updateSpokenPanelLive();
        return panel;
    }
    function renderBlockedList(panel) {
        const listEl = panel.querySelector('#duo-block-list');
        if (!listEl) return;
        listEl.innerHTML = '';
        if (!blockedPhrases.length) {
            const empty = document.createElement('div');
            empty.style.cssText = 'color:#666;font:10px Arial;padding:2px 4px;';
            empty.textContent = 'Brak zablokowanych fraz.';
            listEl.appendChild(empty);
            return;
        }
        blockedPhrases.forEach((p, idx) => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex;justify-content:space-between;background:#241414;padding:3px 6px;border:1px solid #5a3030;border-radius:3px;align-items:center;gap:4px;';
            const txt = document.createElement('span');
            txt.style.cssText = 'color:#fcc;font:11px Arial;word-wrap:break-word;flex:1;';
            txt.textContent = p;
            const btn = document.createElement('button');
            btn.style.cssText = 'background:none;color:#f66;border:none;cursor:pointer;font:10px Arial;';
            btn.textContent = '❌';
            btn.addEventListener('click', () => { removeBlockedPhrase(idx); updateSpokenPanelLive(); });
            row.appendChild(txt); row.appendChild(btn);
            listEl.appendChild(row);
        });
    }
    function updateSpokenPanelLive() {
        const panel = document.getElementById('duo-spoken-panel');
        if (!panel || panel.style.display !== 'flex') return;
        const cur = panel.querySelector('#duo-spoken-current');
        if (cur) cur.textContent = lastSpokenText || '— cisza —';
        const listEl = panel.querySelector('#duo-spoken-history');
        if (listEl) {
            listEl.innerHTML = '';
            if (!spokenHistory.length) {
                const empty = document.createElement('div');
                empty.style.cssText = 'color:#666;font:10px Arial;padding:4px;';
                empty.textContent = 'Brak kwestii — lektor jeszcze nic nie przeczytał.';
                listEl.appendChild(empty);
            } else {
                spokenHistory.forEach((entry, idx) => {
                    const row = document.createElement('div');
                    row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;background:#1a1a1a;padding:3px 6px;border:1px solid #333;border-radius:3px;' + (idx === 0 ? 'border-color:#0af;' : '');
                    const txt = document.createElement('span');
                    txt.style.cssText = 'color:#ccc;font:10px Arial;word-wrap:break-word;flex:1;';
                    txt.textContent = entry.text;
                    const btn = document.createElement('button');
                    btn.style.cssText = 'background:#3a1515;color:#faa;border:1px solid #a55;cursor:pointer;font:9px Arial;padding:2px 4px;border-radius:3px;white-space:nowrap;';
                    btn.textContent = '🚫';
                    btn.title = 'Zablokuj to zdanie';
                    btn.addEventListener('click', () => { addBlockedPhrase(entry.text); updateSpokenPanelLive(); });
                    row.appendChild(txt); row.appendChild(btn);
                    listEl.appendChild(row);
                });
            }
        }
        renderBlockedList(panel);
    }

    // ============================================================
    // --- KREATOR: WSKAŻ MYSZKĄ + AUTO-WYKRYWANIE ---
    // ============================================================
    let pickMode = false, pickOverlay = null, pickBanner = null;
    function pickIsUi(el) {
        return !!(el && el.closest && el.closest('#duo-spoken-panel,#duo-ui-box,#duo-cache-panel,#duo-filter-panel,#duo-custom-panel,#duo-caption-overlay,#duo-settings-host,#duo-prof-results,#duo-pick-banner,#duo-pick-overlay,#duo-yt-speaker'));
    }
    function pickTargetFromPoint(x, y) {
        let el = document.elementFromPoint(x, y);
        if (!el || pickIsUi(el)) return null;
        if (!(el.innerText || '').trim()) {
            let cur = el;
            while (cur.children.length === 1 && !(cur.children[0].innerText || '').trim()) cur = cur.children[0];
            if (cur.children.length === 1 && (cur.children[0].innerText || '').trim()) el = cur.children[0];
            else {
                let p = el.parentElement, i = 0;
                while (p && i < 3 && !(p.innerText || '').trim()) { p = p.parentElement; i++; }
                if (p && (p.innerText || '').trim()) el = p;
            }
        }
        return el;
    }
    function startPicker() {
        if (pickMode) return;
        pickMode = true;
        pickOverlay = document.createElement('div');
        pickOverlay.id = 'duo-pick-overlay';
        pickOverlay.style.cssText = 'position:fixed;z-index:2147483649;pointer-events:none;display:none;border:2px solid #0af;background:rgba(0,140,255,.15);border-radius:2px;';
        document.body.appendChild(pickOverlay);
        pickBanner = document.createElement('div');
        pickBanner.id = 'duo-pick-banner';
        pickBanner.style.cssText = 'position:fixed;top:8px;left:50%;transform:translateX(-50%);z-index:2147483649;background:#0a1a24;border:1px solid #0af;color:#7fe9ff;font:bold 12px Arial;padding:6px 14px;border-radius:6px;';
        pickBanner.textContent = '🎯 Kliknij na napisy w filmie • ESC anuluje';
        document.body.appendChild(pickBanner);
        reparentDuoUI();
        document.addEventListener('mousemove', pickOnMove, true);
        document.addEventListener('click', pickOnClick, true);
        document.addEventListener('keydown', pickOnKey, true);
        document.addEventListener('touchstart', pickOnTouch, true);
    }
    function stopPicker(msg) {
        if (!pickMode) return;
        pickMode = false;
        if (pickOverlay) { pickOverlay.remove(); pickOverlay = null; }
        if (pickBanner) { pickBanner.remove(); pickBanner = null; }
        document.removeEventListener('mousemove', pickOnMove, true);
        document.removeEventListener('click', pickOnClick, true);
        document.removeEventListener('keydown', pickOnKey, true);
        document.removeEventListener('touchstart', pickOnTouch, true);
        if (msg) setPrepareStatus(msg);
    }
    function pickOnMove(e) {
        if (!pickOverlay) return;
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (!el || pickIsUi(el)) { pickOverlay.style.display = 'none'; return; }
        const r = el.getBoundingClientRect();
        pickOverlay.style.display = 'block';
        pickOverlay.style.left = r.left + 'px'; pickOverlay.style.top = r.top + 'px';
        pickOverlay.style.width = r.width + 'px'; pickOverlay.style.height = r.height + 'px';
    }
    function pickOnKey(e) { if (e.key === 'Escape') stopPicker('🎯 Wybór anulowany'); }
    function pickOnTouch(e) {
        if (!pickMode) return;
        const t = e.touches && e.touches[0];
        if (!t) return;
        e.preventDefault(); e.stopPropagation();
        pickHandlePoint(t.clientX, t.clientY);
    }
    function pickOnClick(e) {
        if (!pickMode) return;
        e.preventDefault(); e.stopPropagation();
        pickHandlePoint(e.clientX, e.clientY);
    }
    function pickHandlePoint(x, y) {
        const el = pickTargetFromPoint(x, y);
        if (!el) return;
        const sel = generateSelectorFor(el);
        if (!sel) { stopPicker('🎯 Nie udało się wygenerować selektora.'); return; }
        let nodes;
        try { nodes = document.querySelectorAll(sel); }
        catch (err) { stopPicker('❌ Selektor nieprawidłowy: ' + err.message); return; }
        const texts = [];
        nodes.forEach(n => { if (isVisibleElement(n)) { const t = (n.innerText || n.textContent || '').replace(/\s+/g, ' ').trim(); if (t) texts.push(t); } });
        if (!texts.length) {
            stopPicker('⚠️ Element jeszcze bez tekstu — poczekaj aż napisy będą widoczne i kliknij ponownie.');
            startPicker();
            return;
        }
        addSubSourceSelector(HOST, sel);
        stopPicker('🧪 Dodano własne źródło napisów dla ' + HOST + ' (priorytet)');
        openDuoSettings(true);
    }

    let profActive = false, profObserver = null, profTicker = null, profKeyH = null;
    let profCandidates = new Map();
    const PROF_DURATION = 15000;
    function profTextOwner(el) {
        let cur = el;
        for (let i = 0; i < 3 && cur; i++) {
            if ((cur.innerText || '').trim()) return cur;
            cur = cur.parentElement;
        }
        return null;
    }
    function profRecord(el) {
        if (pickIsUi(el)) return;
        const text = (el.innerText || '').replace(/\s+/g, ' ').trim();
        if (!text || text.length > 400) return;
        let c = profCandidates.get(el);
        if (!c) { c = { el, changes: 0, lastText: '', bestText: '', texts: [], times: [] }; profCandidates.set(el, c); }
        if (text !== c.lastText) {
            c.changes++; c.lastText = text;
            if (!c.bestText || profPolishScore(text) > profPolishScore(c.bestText)) c.bestText = text;
            if (!c.texts.includes(text.slice(0, 120))) c.texts.push(text.slice(0, 120));
            if (c.texts.length > 10) c.texts.shift();
            c.times.push(Date.now());
            if (c.times.length > 40) c.times.shift();
        }
    }
    function startSubtitleProfiler() {
        if (profActive) return;
        profActive = true;
        profCandidates = new Map();
        const t0 = Date.now();
        profObserver = new MutationObserver((muts) => {
            if (!profActive) return;
            for (const m of muts) {
                let el = null;
                if (m.type === 'characterData') el = m.target.parentElement;
                else if (m.type === 'childList') {
                    for (const node of m.addedNodes) {
                        if (node.nodeType === 3) { el = node.parentElement; break; }
                        if (node.nodeType === 1) { el = node; break; }
                    }
                }
                if (!el) continue;
                const owner = profTextOwner(el);
                if (owner) profRecord(owner);
            }
        });
        try { profObserver.observe(document.body, { childList: true, subtree: true, characterData: true }); } catch (e) {}
        profKeyH = (e) => { if (e.key === 'Escape') stopSubtitleProfiler(true); };
        document.addEventListener('keydown', profKeyH, true);
        profTicker = setInterval(() => {
            const left = Math.max(0, Math.ceil((t0 + PROF_DURATION - Date.now()) / 1000));
            if (left <= 0) stopSubtitleProfiler(false);
            else setPrepareStatus('🧠 Auto-wykrywanie... ' + left + ' s — odtwarzaj wideo z napisami (ESC anuluje)');
        }, 400);
        setPrepareStatus('🧠 Auto-wykrywanie: obserwuję stronę 15 s...');
    }
    function stopSubtitleProfiler(cancelled) {
        if (!profActive) return;
        profActive = false;
        if (profObserver) { profObserver.disconnect(); profObserver = null; }
        if (profTicker) { clearInterval(profTicker); profTicker = null; }
        if (profKeyH) { document.removeEventListener('keydown', profKeyH, true); profKeyH = null; }
        if (cancelled) { setPrepareStatus('🧠 Auto-wykrywanie anulowane'); return; }
        const preferPolish = gmGet(PROF_PL_KEY) !== 'false';
        const video = document.querySelector('video');
        const results = [];
        profCandidates.forEach(c => {
            if (c.changes < 2) return;
            const intervals = [];
            for (let i = 1; i < c.times.length; i++) intervals.push(c.times[i] - c.times[i - 1]);
            intervals.sort((a, b) => a - b);
            const med = intervals.length ? intervals[Math.floor(intervals.length / 2)] : 999999;
            const sample = c.texts[c.texts.length - 1] || c.lastText;
            const probeText = (preferPolish && c.bestText) ? c.bestText : sample;
            let score = 0;
            if (med >= 800 && med <= 20000) score += 3;
            if (probeText.length >= 2 && probeText.length <= 300) score += 2;
            if (!/^[\d\s:.,-]+$/.test(probeText)) score += 2;
            if (!isSystemPrompt(probeText)) score += 1;
            if (video) {
                try {
                    const vr = video.getBoundingClientRect();
                    const er = c.el.getBoundingClientRect();
                    const dist = Math.hypot((vr.left + vr.right) / 2 - (er.left + er.right) / 2, (vr.top + vr.bottom) / 2 - (er.top + er.bottom) / 2);
                    if (dist < Math.max(vr.width, vr.height) * 1.2) score += 3;
                } catch (e) {}
            }
            let plBonus = 0;
            if (preferPolish) { plBonus = profPolishScore(probeText); score += plBonus; }
            if (score >= 4) results.push({ el: c.el, score, changes: c.changes, sample: probeText, plBonus });
        });
        results.sort((a, b) => (b.score - a.score) || (b.changes - a.changes));
        setPrepareStatus('🧠 Znaleziono ' + results.length + ' kandydatów' + (preferPolish ? ' (🇵🇱)' : ''));
        // Łowca napisów (jak rozszerzenie): bez GUI „Pokazuj GUI Łowcy”
        // najlepszy kandydat trafia od razu do Kreatora źródeł, a domena
        // zapisuje się na liście lowcaSites (auto-start przy następnym wejściu).
        if (!extTrFlag('lowcaGui') && results.length && results[0].el && results[0].el.isConnected) {
            try {
                addSubSourceSelector(HOST, generateSelectorFor(results[0].el));
                extTrRememberLowcaSite(HOST);
                setPrepareStatus('🔍 Łowca: zapisano najlepsze źródło napisów dla ' + HOST + ' (' + results.length + ' kandydatów, GUI Łowcy wyłączone)');
            } catch (e) { showProfilerResults(results.slice(0, 6)); }
            return;
        }
        showProfilerResults(results.slice(0, 6));
    }
    function closeProfilerResults() { const d = document.getElementById('duo-prof-results'); if (d) d.remove(); }
    function showProfilerResults(results) {
        closeProfilerResults();
        if (!results.length) { setPrepareStatus('🧠 Brak kandydatów — odtwórz wideo z widocznymi napisami i spróbuj ponownie.'); return; }
        const dlg = document.createElement('div');
        dlg.id = 'duo-prof-results';
        dlg.style.cssText = 'position:fixed;top:60px;left:50%;transform:translateX(-50%);z-index:2147483649;width:min(560px,94vw);max-height:70vh;overflow-y:auto;background:rgba(17,17,17,.98);border:1px solid #0af;border-radius:8px;padding:10px;font-family:Arial,sans-serif;color:#fff;';
        const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
        let html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><strong style="color:#00f7ff;font:12px Arial;">🧠 Kandydaci na napisy</strong><button id="duo-prof-close" style="background:#111;color:#f66;border:1px solid #f66;cursor:pointer;font:10px Arial;padding:1px 5px;border-radius:3px;">X</button></div>';
        results.forEach((r, i) => {
            let sel = '';
            try { sel = generateSelectorFor(r.el); } catch (e) {}
            const plBadge = r.plBonus >= 3 ? ' <span style="color:#7f7;">🇵🇱</span>' : '';
            html += `<div style="background:#111;border:1px solid #333;border-radius:4px;padding:6px;margin-bottom:5px;">
                <div style="color:#ccc;font:11px Arial;word-wrap:break-word;">„${esc(r.sample)}"${plBadge}</div>
                <div style="color:#888;font:9px Arial;margin:2px 0;">zmian: ${r.changes} • ocena: ${r.score}${r.plBonus ? ' (🇵🇱+' + r.plBonus + ')' : ''} • <span style="color:#8cf;word-break:break-all;">${esc(sel)}</span></div>
                <button data-prof-idx="${i}" style="background:#155115;color:#0f0;border:1px solid #0f0;cursor:pointer;font:bold 10px Arial;padding:2px 10px;border-radius:3px;">✓ To są napisy — dodaj</button>
            </div>`;
        });
        dlg.innerHTML = html;
        document.body.appendChild(dlg);
        dlg.querySelector('#duo-prof-close').onclick = () => closeProfilerResults();
        dlg.querySelectorAll('button[data-prof-idx]').forEach(btn => {
            btn.onclick = () => {
                const r = results[parseInt(btn.dataset.profIdx, 10)];
                if (!r || !r.el || !r.el.isConnected) { alert('Element już nie istnieje — powtórz wykrywanie.'); return; }
                addSubSourceSelector(HOST, generateSelectorFor(r.el));
                extTrRememberLowcaSite(HOST);
                closeProfilerResults();
                openDuoSettings(true);
                setPrepareStatus('🧠 Dodano źródło napisów dla ' + HOST + ' (priorytet)');
            };
        });
    }

    // ============================================================
    // --- LISTY DOMEN + EKSPORT/IMPORT ---
    // ============================================================
    function applyDomainListsAndMaybeReload() {
        const nowSleep = isSleepForHost(HOST);
        if (nowSleep !== SLEEP_MODE) { location.reload(); return; }
        setPrepareStatus('💾 Listy domen zapisane');
    }
    function toggleWhitelistCurrentHost() {
        const wl = parseDomainList(gmGet(WL_KEY));
        if (hostMatches(HOST, wl)) gmSet(WL_KEY, wl.filter(d => !(HOST === d || HOST.endsWith('.' + d))).join('\n'));
        else { wl.push(HOST); gmSet(WL_KEY, wl.join('\n')); }
        applyDomainListsAndMaybeReload();
    }
    function removeCurrentHostFromBlacklist() {
        const bl = parseDomainList(gmGet(BL_KEY));
        gmSet(BL_KEY, bl.filter(d => !(HOST === d || HOST.endsWith('.' + d))).join('\n'));
        applyDomainListsAndMaybeReload();
    }
    function toggleScanPauseForHost() {
        const set = getPausedSet();
        if (set.has(HOST)) set.delete(HOST); else set.add(HOST);
        gmSet(PAUSED_KEY, JSON.stringify([...set]));
        scanPaused = set.has(HOST);
        setPrepareStatus(scanPaused ? '⏸️ Pauza napisów live na tej domenie' : '▶️ Pauza wyłączona — napisy live aktywne');
    }
    function exportAllSettings() {
        try {
            const data = { duoExport: true, version: SCRIPT_VERSION, exportedAt: new Date().toISOString(), localStorage: {}, gm: {} };
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && k.startsWith('duo_')) data.localStorage[k] = localStorage.getItem(k);
            }
            [WL_KEY, BL_KEY, PAUSED_KEY, CT_TEXT_KEY, CT_REMEMBER_KEY, CT_BOOKMARK_KEY, SUBSRC_KEY, PROF_PL_KEY, ...EXTTR_GM_KEYS].forEach(k => {
                const v = gmGet(k);
                if (v !== undefined) data.gm[k] = v;
            });
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const d = new Date();
            const fname = `duo-ustawienia_${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}.json`;
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = fname;
            document.body.appendChild(a); a.click(); a.remove();
            setTimeout(() => { try { URL.revokeObjectURL(url); } catch (e) {} }, 5000);
            setPrepareStatus('📤 Wyeksportowano: ' + fname);
        } catch (e) { alert('Błąd eksportu: ' + e); }
    }
    function importAllSettings(file) {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(String(reader.result || '{}'));
                if (!data || !data.duoExport) { alert('To nie jest prawidłowy plik eksportu DUO.'); return; }
                if (data.localStorage) Object.keys(data.localStorage).forEach(k => { if (k.startsWith('duo_')) localStorage.setItem(k, String(data.localStorage[k])); });
                if (data.gm) Object.keys(data.gm).forEach(k => gmSet(k, data.gm[k]));
                alert('✅ Ustawienia zaimportowane. Odświeżam stronę.');
                location.reload();
            } catch (e) { alert('Błąd importu: ' + e); }
        };
        reader.readAsText(file);
    }

    // ============================================================
    // --- A) TŁUMACZENIE SIECIOWE (jak w rozszerzeniu Lektor Google RPC) ---
    // --- B) ŁOWCA NAPISÓW + BAZY (OpenSubtitles / SubDL)              ---
    // --- C) AI SUBTITLE TRANSLATOR                                     ---
    // Port z rozszerzenia v3.0.6 (src/background/ext_net.js, subs_db.js,
    // assets/lowca_*.js, src/options/options.js). Różnice: fetch() →
    // GM_xmlhttpRequest (CORS w userscripcie), chrome.storage.local →
    // gmGet/gmSet (eksport/import objęty), AI Chrome → Translator API
    // bezpośrednio na stronie (bez offscreena), gtab → relay przez GM.
    // ============================================================
    const EXTTR_DEFAULTS = {
        extTrEngine: 'lokalny', extTrChunk: 'mieszane', extTrInterval: '30s',
        extTrGoogleRpc: false, extTrMicrosoftBatch: false, extTrStopWithLektor: false,
        aiOn: false, aiApiKey: '', autoSubsOn: true,
        lowcaGui: false, osApiKey: '', subdlApiKey: '', lowcaSites: '[]',
        aitEngine: 'translator', aitLang: 'auto', aitPrompt: ''
    };
    const EXTTR_GM_KEYS = Object.keys(EXTTR_DEFAULTS);
    function extTrOpt(k) { const v = gmGet(k); return (v === undefined || v === null) ? EXTTR_DEFAULTS[k] : v; }
    function extTrSet(k, v) { gmSet(k, v); }
    function extTrFlag(k) { const v = extTrOpt(k); return v === true || v === 'true'; }
    function extTrNetOn() { return String(extTrOpt('extTrEngine')) !== 'lokalny'; }

    // --- transport (zamiast fetch() z rozszerzenia) ----------------------
    function extTrXhr(o) {
        return new Promise((resolve, reject) => {
            try {
                GM_xmlhttpRequest({
                    method: o.method || 'GET',
                    url: o.url,
                    headers: o.headers || {},
                    data: o.data,
                    responseType: o.responseType || 'text',
                    timeout: o.timeout || 60000,
                    onload: (r) => {
                        if (r.status >= 200 && r.status < 300) resolve(r);
                        else reject(new Error('HTTP ' + r.status + ' (' + String(o.url).slice(0, 70) + ')'));
                    },
                    onerror: () => reject(new Error('brak połączenia: ' + String(o.url).slice(0, 70))),
                    ontimeout: () => reject(new Error('timeout: ' + String(o.url).slice(0, 70))),
                    onabort: () => reject(new Error('przerwano'))
                });
            } catch (e) { reject(e); }
        });
    }
    async function extTrFetchText(url, init) {
        const i = init || {};
        const r = await extTrXhr({ url, method: i.method || 'GET', headers: i.headers || {}, data: i.body, timeout: i.timeout || 60000 });
        return r.responseText || '';
    }
    async function extTrFetchBytes(url, init, timeoutMs) {
        const i = init || {};
        const r = await extTrXhr({ url, method: i.method || 'GET', headers: i.headers || {}, data: i.body, responseType: 'arraybuffer', timeout: timeoutMs || 30000 });
        return new Uint8Array(r.response);
    }
    // --- stan (jak ext_net.js) -------------------------------------------
    const EXT_TR_ENGINES = ['google', 'bing', 'deepl', 'ai'];
    let extTrIdx = 0;
    let extTrCooldownUntil = {};
    let extTrCache = new Map();
    let bingAuthCache = { token: '', at: 0 };
    let extTrListStop = false;
    function extTrCountWords(s) { return String(s || '').trim().split(/\s+/).filter(Boolean).length; }
    function extTrCooldown(engine) { extTrCooldownUntil[engine] = Date.now() + 5 * 60000; }
    async function extTrAiOn() { return extTrFlag('aiOn') && !!String(extTrOpt('aiApiKey') || '').trim(); }
    // Pojedynczy wybor = ten silnik (o ile nie na cooldownie); rotacja = round-robin.
    async function extTrPickEngine(engineOpt) {
        const now = Date.now();
        const list = (await extTrAiOn()) ? EXT_TR_ENGINES : EXT_TR_ENGINES.filter((e) => e !== 'ai');
        if (list.includes(engineOpt) || engineOpt === 'gtab') {
            return (extTrCooldownUntil[engineOpt] || 0) > now ? null : engineOpt;
        }
        for (let i = 0; i < list.length; i++) {
            const e = list[(extTrIdx + i) % list.length];
            if ((extTrCooldownUntil[e] || 0) <= now) { extTrIdx = (extTrIdx + i + 1) % list.length; return e; }
        }
        return null; // wszystkie odpoczywają
    }

    // --- Google: limiter + RPC + zwykłe gtx ------------------------------
    let extTrGgTokens = 4, extTrGgLast = Date.now();
    async function extTrGoogleGate() {
        while (true) {
            const now = Date.now();
            extTrGgTokens = Math.min(4, extTrGgTokens + ((now - extTrGgLast) / 1350) * 4);
            extTrGgLast = now;
            if (extTrGgTokens >= 1) { extTrGgTokens -= 1; return; }
            await new Promise((r) => setTimeout(r, ((1 - extTrGgTokens) / 4) * 1350));
        }
    }
    function extTrPickGoogleTranslation(outer, sourceText, minLen) {
        const allowed = Math.max(0, sourceText.length - minLen);
        let best = '';
        (function walk(node) {
            if (!node) return;
            if (typeof node === 'string') { if (node.length > best.length && node.length <= allowed) best = node; return; }
            if (Array.isArray(node)) { node.forEach(walk); return; }
            if (typeof node === 'object') { Object.values(node).forEach(walk); }
        })(outer);
        return best || '';
    }
    async function extTrGoogleRpc(src, tgt, texts) {
        const sep = ' /// ';
        const q = texts.join(sep);
        if (extTrCountWords(q) === 0) return texts.map(() => '');
        await extTrGoogleGate();
        const body = JSON.stringify({
            jsonrpc: '2.0', method: 'LinguaTranslate', id: Math.floor(Math.random() * 1e9),
            params: { from: src, to: tgt, q: q, format: 'text' }
        });
        const raw = await extTrFetchText('https://translate.googleapis.com/rpc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Origin': 'https://translate.google.com',
                'Referer': 'https://translate.google.com/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
            },
            body: body
        });
        let data;
        try { data = JSON.parse(raw); } catch (e) { throw new Error('Google RPC: zla odpowiedz'); }
        const inner = data && (data.result || data);
        const picked = extTrPickGoogleTranslation(inner, q, 10);
        if (!picked) throw new Error('Google RPC: puste tlumaczenie');
        const parts = String(picked).split('///').map((s) => s.trim());
        const out = texts.map((_, i) => (parts[i] !== undefined ? parts[i] : ''));
        if (!out.some(Boolean)) throw new Error('Google RPC: puste tlumaczenie');
        return out;
    }
    async function extTrGoogle(src, tgt, texts) {
        // Checkbox „Google RPC" w ustawieniach zamienia główną funkcję Google na metodę RPC.
        if (extTrFlag('extTrGoogleRpc')) return extTrGoogleRpc(src, tgt, texts);
        const sep = ' /// ';
        const q = texts.join(sep);
        if (extTrCountWords(q) === 0) return texts.map(() => '');
        await extTrGoogleGate();
        const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl='
            + encodeURIComponent(src) + '&tl=' + encodeURIComponent(tgt) + '&dt=t&q=' + encodeURIComponent(q);
        const raw = await extTrFetchText(url, { headers: { 'Accept': '*/*' } });
        const data = JSON.parse(raw);
        let flat = '';
        if (Array.isArray(data[0])) for (const part of data[0]) { if (Array.isArray(part) && part[0]) flat += part[0]; }
        const parts = String(flat).split('///').map((s) => s.trim());
        const out = texts.map((_, i) => (parts[i] !== undefined ? parts[i] : ''));
        if (!out.some(Boolean)) throw new Error('Google: puste tlumaczenie');
        return out;
    }
    // --- Microsoft/Bing: token + klasyczna metoda + tryb batch ------------
    async function extTrBingAuth() {
        const now = Date.now();
        if (bingAuthCache.token && now - bingAuthCache.at < 8 * 60000) return bingAuthCache.token;
        const t = await extTrFetchText('https://edge.microsoft.com/translate/auth');
        bingAuthCache = { token: String(t || '').trim(), at: now };
        if (!bingAuthCache.token) throw new Error('Bing: brak tokenu auth');
        return bingAuthCache.token;
    }
    function extTrBingUnescape(s) {
        return String(s || '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    }
    async function extTrBing(src, tgt, texts) {
        const auth = await extTrBingAuth();
        let id = 10;
        const body = texts.map((t) => {
            const r = '<b' + id + '>' + String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</b' + id + '>';
            id++;
            return r;
        }).join('');
        const from = (src && src !== 'auto') ? '&from=' + encodeURIComponent(src) : '';
        const url = 'https://edge.microsoft.com/translate/translatetext?isEnterpriseClient=false' + from + '&to=' + encodeURIComponent(tgt);
        const raw = await extTrFetchText(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth },
            body: JSON.stringify([body])
        });
        const data = JSON.parse(raw);
        const html = String((data[0] && data[0].translations && data[0].translations[0] && data[0].translations[0].text) || '');
        if (!html) throw new Error('Bing: pusta odpowiedz');
        const parts = [];
        const re = /<b(\d+)>([\s\S]*?)<\/b\1>/g;
        let m;
        while ((m = re.exec(html)) !== null) parts.push({ id: +m[1], text: extTrBingUnescape(m[2]).trim() });
        parts.sort((a, b) => a.id - b.id);
        const out = texts.map((_, i) => (parts[i] ? parts[i].text : ''));
        if (!out.some(Boolean)) throw new Error('Bing: puste tlumaczenie');
        return out;
    }
    let extTrEdgeTokens = 7, extTrEdgeLast = Date.now();
    async function extTrEdgeGate() {
        while (true) {
            const now = Date.now();
            extTrEdgeTokens = Math.min(7, extTrEdgeTokens + ((now - extTrEdgeLast) / 1250) * 7);
            extTrEdgeLast = now;
            if (extTrEdgeTokens >= 1) { extTrEdgeTokens -= 1; return; }
            await new Promise((r) => setTimeout(r, ((1 - extTrEdgeTokens) / 7) * 1250));
        }
    }
    // Tryb batch: zamiast tagów <bN> czysta tablica tekstów (styl Immersive Translate).
    async function extTrBingBatch(src, tgt, texts) {
        if (extTrCountWords(texts.join(' ')) === 0) return texts.map(() => '');
        await extTrEdgeGate();
        const auth = await extTrBingAuth();
        const from = (src && src !== 'auto') ? '&from=' + encodeURIComponent(src) : '';
        const url = 'https://edge.microsoft.com/translate/translatetext?isEnterpriseClient=false' + from + '&to=' + encodeURIComponent(tgt);
        const raw = await extTrFetchText(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth },
            body: JSON.stringify(texts)
        });
        const data = JSON.parse(raw);
        if (!Array.isArray(data) || data.length !== texts.length) {
            throw new Error('Bing batch: zla liczba wynikow');
        }
        const out = data.map((d) => {
            const t = d && d.translations && d.translations[0] && d.translations[0].text;
            return typeof t === 'string' ? t : '';
        });
        if (!out.some(Boolean)) throw new Error('Bing batch: pusta odpowiedz');
        return out;
    }
    // --- DeepL (oneshot-free, bez klucza) --------------------------------
    async function extTrDeepl(src, tgt, texts) {
        const tgtL = tgt === 'en' ? 'en-US' : tgt;
        const raw = await extTrFetchText('https://oneshot-free.www.deepl.com/v1/storefront/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                language_model: 'next-gen',
                source_lang: (src && src !== 'auto') ? src.toUpperCase() : 'EN',
                target_lang: String(tgtL || 'PL').toUpperCase(),
                usage_type: 'Translate',
                text: texts
            })
        });
        const data = JSON.parse(raw);
        const tr = data && data.translations;
        if (!Array.isArray(tr) || !tr.length || !tr[0].text) throw new Error('DeepL: pusta odpowiedz');
        const flat = String(tr[0].text);
        if (texts.length === 1) return [flat.trim()];
        const words = flat.split(/\s+/).filter(Boolean);
        const srcWords = texts.map(extTrCountWords);
        const total = srcWords.reduce((a, b) => a + b, 0) || 1;
        const out = [];
        let pos = 0;
        for (let i = 0; i < texts.length; i++) {
            const n = i === texts.length - 1 ? words.length - pos : Math.round(words.length * srcWords[i] / total);
            out.push(words.slice(pos, pos + n).join(' '));
            pos += n;
        }
        if (!out.some(Boolean)) throw new Error('DeepL: puste tlumaczenie');
        return out;
    }
    // --- Silnik AI (OpenAI-compatible: CometAPI + gpt-oss-20b-free) -------
    async function extTrAiCfg() {
        return {
            url: 'https://api.cometapi.com/v1/chat/completions',
            key: String(extTrOpt('aiApiKey') || '').trim(),
            model: 'gpt-oss-20b-free'
        };
    }
    async function extTrAi(src, tgt, texts) {
        const c = await extTrAiCfg();
        if (!c.key) throw new Error('AI: brak klucza API');
        if (extTrCountWords(texts.join(' ')) === 0) return texts.map(() => '');
        const langName = (l) => (l === 'pl' ? 'Polish' : l === 'en' ? 'English' : (l || 'unknown'));
        const sys = 'You are a translation engine. Translate the user\'s text from ' + langName(src) +
            ' to ' + langName(tgt) + '. Output ONLY the translation, no quotes, no commentary. ' +
            'The separator " /// " separates segments: translate each segment independently and KEEP the separator " /// " exactly unchanged in your output.';
        const res = await extTrFetchText(c.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + c.key, 'Accept': '*/*' },
            body: JSON.stringify({
                model: c.model,
                temperature: 0,
                messages: [
                    { role: 'system', content: sys },
                    { role: 'user', content: texts.join(' /// ') }
                ]
            })
        });
        let data;
        try { data = JSON.parse(res); } catch (e) { throw new Error('AI: zla odpowiedz JSON'); }
        const content = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
        if (typeof content !== 'string' || !content.trim()) {
            throw new Error('AI: ' + ((data && data.error && data.error.message) || 'pusta odpowiedz'));
        }
        let clean = content.trim();
        if (clean.startsWith('```')) clean = clean.replace(/^```[a-zA-Z]*\s*/, '').replace(/\s*```$/, '').trim();
        const parts = clean.split('///').map((s) => s.trim());
        if (parts.length !== texts.length) throw new Error('AI: zla liczba czesci (' + parts.length + ' != ' + texts.length + ')');
        if (!parts.some(Boolean)) throw new Error('AI: puste tlumaczenie');
        return parts;
    }
    // --- chrome-ai: lokalny Translator API Chrome (jak AI_CHROME_TRANSLATE,
    //     ale bez offscreena — skrypt i tak działa w kontekście strony) ----
    async function extTrChromeAi(src, tgt, texts) {
        if (typeof Translator === 'undefined' || !Translator.create) throw new Error('Brak Translator API (Chrome 138+)');
        const srcL = String(src || 'en').toLowerCase().split('-')[0];
        const out = new Array(texts.length);
        const todo = [];
        for (let i = 0; i < texts.length; i++) {
            const saved = await aiMemGet(texts[i]);
            if (saved) out[i] = saved;
            else todo.push(i);
        }
        if (!todo.length) return out;
        const tr = await Translator.create({ sourceLanguage: srcL === 'auto' ? 'en' : srcL, targetLanguage: 'pl' });
        try {
            for (const i of todo) {
                try {
                    const v = String(await tr.translate(texts[i]) || '').trim();
                    out[i] = v;
                    if (v) aiMemSave(texts[i], v).catch(() => {});
                } catch (e) { out[i] = ''; }
            }
        } finally { try { tr.destroy(); } catch (e) {} }
        if (!out.some(Boolean)) throw new Error('AI Chrome: puste tłumaczenie');
        return out;
    }
    // --- pamięć tłumaczeń (wspólna z AI Subtitle Translatorem) ------------
    const AI_MEM_KEY = 'aiTranslationMemory';
    const AI_MEM_MAX = 5000;
    function aiHash(s) {
        s = String(s || '');
        let h1 = 0x811c9dc5, h2 = 0x01000193;
        for (let i = 0; i < s.length; i++) {
            h1 = Math.imul(h1 ^ s.charCodeAt(i), 16777619);
            h2 = Math.imul(h2 + s.charCodeAt(i), 2246822519);
        }
        return (h1 >>> 0).toString(36) + (h2 >>> 0).toString(36);
    }
    function aiMemRead() {
        try { const m = JSON.parse(localStorage.getItem(AI_MEM_KEY) || '{}'); return (m && typeof m === 'object') ? m : {}; }
        catch (e) { return {}; }
    }
    async function aiMemGet(src) {
        try { const mem = aiMemRead(); const e = mem[aiHash(src)]; return e && e.pl ? String(e.pl) : ''; }
        catch (e) { return ''; }
    }
    async function aiMemSave(src, pl, engine) {
        if (!src || !pl) return;
        try {
            const mem = aiMemRead();
            mem[aiHash(src)] = { src: String(src).slice(0, 2000), pl: String(pl).slice(0, 2000), engine: engine || 'chrome-ai', ts: Date.now() };
            const keys = Object.keys(mem);
            if (keys.length > AI_MEM_MAX) {
                keys.sort((a, b) => (mem[a].ts || 0) - (mem[b].ts || 0));
                for (let i = 0; i < keys.length - AI_MEM_MAX; i++) delete mem[keys[i]];
            }
            localStorage.setItem(AI_MEM_KEY, JSON.stringify(mem));
        } catch (e) { /* quota — tłumaczenie i tak wraca do lektora */ }
    }
    // --- wywołanie silnika z cache + fallback (jak extTrEngineCall) --------
    async function extTrEngineCall(engine, src, tgt, texts) {
        const key = (t) => engine + '|' + src + '|pl|' + t;
        const uncached = [];
        const uncachedPos = [];
        const out = new Array(texts.length);
        texts.forEach((t, i) => {
            const c = extTrCache.get(key(t));
            if (c !== undefined) out[i] = c;
            else { uncached.push(t); uncachedPos.push(i); }
        });
        if (uncached.length) {
            let res;
            if (engine === 'google') res = await extTrGoogle(src, tgt, uncached);
            else if (engine === 'gtab') res = await extTrGoogleTab(src, tgt, uncached);
            else if (engine === 'bing') {
                // Checkbox „Microsoft/Bing — tryb batch": OFF = tagi <bN>, ON = czysta tablica.
                if (extTrFlag('extTrMicrosoftBatch')) res = await extTrBingBatch(src, tgt, uncached);
                else res = await extTrBing(src, tgt, uncached);
            }
            else if (engine === 'ai') res = await extTrAi(src, tgt, uncached);
            else if (engine === 'chrome-ai') res = await extTrChromeAi(src, tgt, uncached);
            else res = await extTrDeepl(src, tgt, uncached);
            uncached.forEach((t, j) => {
                const v = res[j] || '';
                out[uncachedPos[j]] = v;
                if (v) {
                    extTrCache.set(key(t), v);
                    if (extTrCache.size > 2000) { const fk = extTrCache.keys().next().value; extTrCache.delete(fk); }
                    aiMemSave(t, v, engine === 'chrome-ai' ? undefined : engine).catch(() => {});
                }
            });
        }
        return out;
    }
    // Pamięć tłumaczeń (localStorage aiTranslationMemory) zamiast subs_cache.js.
    async function extTrTranslateBatch(src, texts, engineOpt) {
        const mem = new Array(texts.length).fill('');
        const miss = [];
        for (let i = 0; i < texts.length; i++) {
            const t = String(texts[i] || '');
            if (!t.trim()) continue;
            const saved = await aiMemGet(t);
            if (saved) mem[i] = saved;
            else miss.push(i);
        }
        if (!miss.length) return { texts: mem, engine: 'pamięć' };
        const r = await extTrTranslateBatchNet(src, miss.map((i) => texts[i]), engineOpt);
        miss.forEach((p, j) => { mem[p] = r.texts[j] || ''; });
        return { texts: mem, engine: r.engine };
    }
    async function extTrTranslateBatchNet(src, texts, engineOpt) {
        const tried = new Set();
        for (let attempt = 0; attempt < EXT_TR_ENGINES.length + 1; attempt++) {
            const engine = await extTrPickEngine(engineOpt);
            if (!engine || tried.has(engine)) break;
            tried.add(engine);
            try {
                const out = await extTrEngineCall(engine, src || 'en', 'pl', texts);
                return { texts: out, engine: engine };
            } catch (e) {
                console.warn('[DUO] EXT-TRANSLATE silnik padl:', engine, String((e && e.message) || e));
                extTrCooldown(engine);
            }
        }
        throw new Error('Wszystkie silniki sieciowe niedostepne');
    }
    // Porcje wyrazowe i odstępy (jak extTrJobPush/Pump w rozszerzeniu).
    const EXT_TR_CHUNK_WORDS = { '100': 100, '300': 300, '400': 400 };
    const EXT_TR_INT_MS = { '20s': 20000, '30s': 30000, '1min': 60000, '5min': 300000, '10min': 600000 };
    function extTrChunkWords(chunkOpt) {
        const base = EXT_TR_CHUNK_WORDS[chunkOpt];
        const pick = base || [100, 300, 400][Math.floor(Math.random() * 3)];
        return Math.max(20, Math.round(pick * (0.9 + Math.random() * 0.2)));
    }
    function extTrIntervalMs(intervalOpt) {
        const base = EXT_TR_INT_MS[intervalOpt] || 30000;
        return Math.round(base * (0.7 + Math.random() * 0.6)); // ±30%
    }
    async function extTrOpts() {
        const engine = String(extTrOpt('extTrEngine') || 'lokalny');
        return {
            on: engine !== 'lokalny',
            engine: engine === 'lokalny' ? 'google' : engine,
            chunk: String(extTrOpt('extTrChunk') || 'mieszane'),
            interval: String(extTrOpt('extTrInterval') || '30s')
        };
    }
    // --- lista kwestii: porcje + odstęp + postęp (jak extTrJobPump) -------
    async function extTrTranslateList(src, texts, onProgress) {
        const o = await extTrOpts();
        extTrListStop = false;
        const queue = [];
        texts.forEach((t, i) => { if (String(t || '').trim()) queue.push({ idx: i, text: String(t) }); });
        const out = new Array(texts.length).fill('');
        let done = 0;
        while (queue.length) {
            if (extTrListStop) break;
            const target = extTrChunkWords(o.chunk);
            const chunk = [];
            let words = 0;
            while (queue.length) {
                const w = extTrCountWords(queue[0].text);
                if (chunk.length && words + w > target) break;
                if (w > 4000) { queue.shift(); continue; } // absurdalna kwestia — pomijam
                chunk.push(queue.shift());
                words += w;
                if (words >= target) break;
            }
            if (!chunk.length) break;
            try {
                const r = await extTrTranslateBatch(src, chunk.map((c) => c.text), o.engine);
                chunk.forEach((c, i) => { out[c.idx] = r.texts[i] || ''; });
            } catch (e) {
                console.warn('[DUO] EXT-TRANSLATE porcja nieudana:', String((e && e.message) || e));
            }
            done += chunk.length;
            if (onProgress) { try { onProgress(done, texts.length); } catch (e) {} }
            if (queue.length && !extTrListStop) await new Promise((r) => setTimeout(r, extTrIntervalMs(o.interval)));
        }
        return out;
    }
    // Tłumaczenie pełnej listy segmentów (napisy YouTube / plik / Netflix)
    // w kolejności od aktualnej pozycji filmu — jak ytTranslateSegments.
    async function extTrTranslateSegmentsNet(segs, srcLang) {
        const v = getVideoEl();
        const now = v ? v.currentTime : 0;
        let first = 0;
        while (first < segs.length && segs[first].start + segs[first].duration < now) first++;
        const order = [];
        for (let i = first; i < segs.length; i++) order.push(i);
        for (let i = 0; i < first; i++) order.push(i);
        const texts = order.map((i) => segs[i].text);
        setPrepareStatus('🌐 Tłumaczę (sieć): 0/' + segs.length);
        const out = await extTrTranslateList(srcLang || 'auto', texts, (d, n) => {
            try { setPrepareStatus('🌐 Tłumaczę (sieć): ' + d + '/' + n); } catch (e) {}
        });
        order.forEach((idx, j) => {
            const t = String(out[j] || '').replace(/\s+/g, ' ').trim();
            if (t) segs[idx].text = t;
        });
        return segs.filter((s) => s.text);
    }
    // autoSubsOn: niepolska całość napisów (plik/Netflix) → tłumaczenie przed startem.
    async function extTrMaybeTranslateSegs(segs, lang) {
        try {
            if (!extTrFlag('autoSubsOn') || !extTrNetOn() || !segs || !segs.length) return segs;
            if (/^pl/i.test(String(lang || ''))) return segs;
            const sample = segs.slice(0, 40).map((s) => s.text).join(' ');
            if (extTrLooksPolish(sample)) return segs;
            setPrepareStatus('🌐 Napisy nie są po polsku — tłumaczę całość (' + segs.length + ' kwestii)…');
            const texts = segs.map((s) => s.text);
            const out = await extTrTranslateList('auto', texts, (d, n) => {
                try { setPrepareStatus('🌐 Tłumaczę napisy (sieć): ' + d + '/' + n); } catch (e) {}
            });
            out.forEach((t, i) => {
                const s = String(t || '').replace(/\s+/g, ' ').trim();
                if (s) segs[i].text = s;
            });
            setPrepareStatus('✅ Napisy przetłumaczone (sieć): ' + segs.length + ' kwestii');
        } catch (e) {
            setPrepareStatus('⚠️ Tłumaczenie sieciowe nie powiodło się: ' + ((e && e.message) || e));
        }
        return segs;
    }
    // Wczytanie segmentów (przycisk 📂) z opcjonalnym tłumaczeniem całości.
    async function duoLoadSegmentsAuto(key, segments, videoId, genSpeed) {
        try { segments = await extTrMaybeTranslateSegs(segments, null); } catch (e) {}
        prepareHybridStreaming(key, segments, videoId, genSpeed);
    }
    // --- LIVE: jedna kwestia na żywo (jak extTrTranslateLive) -------------
    let extTrLivePending = new Map();
    function extTrLooksPolish(s) {
        s = String(s || '');
        if (/[ąćęłńśźżó]/i.test(s)) return true;
        const m = s.toLowerCase().match(/\b(i|że|to|jest|nie|się|na|do|co|jak|ale|być|było|była|tak|lub|od|za|przez|dla|są)\b/g);
        return !!m && m.length >= 2;
    }
    function extTrLiveNeeded(text) {
        try {
            if (!extTrNetOn() || !masterPower || !imtLektorEnabled) return false;
            if (extTrLooksPolish(text)) return false;
            if (extTrLivePending.has(text)) return false;
            return true;
        } catch (e) { return false; }
    }
    function extTrLiveTranslate(text) {
        if (extTrLivePending.has(text)) return;
        const p = (async () => {
            try {
                const o = await extTrOpts();
                const r = await extTrTranslateBatch('auto', [text], o.engine);
                const pl = String((r.texts && r.texts[0]) || '').replace(/\s+/g, ' ').trim();
                if (pl && imtLektorEnabled) addImmersiveSubtitle(pl, true);
            } catch (e) {
                console.warn('[DUO] tłumaczenie LIVE nieudane:', String((e && e.message) || e));
                // Bez paniki: lektor czyta oryginał (jak po stronie rozszerzenia).
                if (imtLektorEnabled) addImmersiveSubtitle(text, true);
            } finally { extTrLivePending.delete(text); }
        })();
        extTrLivePending.set(text, p);
    }
    // Opcja „Zatrzymaj tłumaczenie razem z lektorem".
    function extTrStopAll() {
        try {
            if (!extTrFlag('extTrStopWithLektor')) return;
            extTrListStop = true;
            extTrLivePending.clear();
        } catch (e) {}
    }
    // ===== silnik 'gtab': Google Translate w przypiętej karcie =====
    // Rozszerzenie trzyma kartę przez chrome.tabs + executeScript. Tutaj:
    // skrypt działa też na translate.google.com, więc karta ma własnego
    // „robotnika" (przechwytuje batchexecute/MkEWBc), a zlecenia idą
    // przez GM_setValue/GM_addValueChangeListener (jak relais klatek).
    const GTAB_JOB_KEY = 'duoGtabJob', GTAB_RES_KEY = 'duoGtabRes', GTAB_READY_KEY = 'duoGtabReady';
    const GTAB_MAX_CHARS = 4800;
    let gtabLock = Promise.resolve();
    let gtabFailUntil = 0;
    let gtabTabWin = null;
    let gtabWaiter = null;
    let gtabLastJobId = '';
    function gtabUrl(src, tgt) {
        return 'https://translate.google.com/?sl=' + encodeURIComponent(src) + '&tl=' + encodeURIComponent(tgt) + '&op=translate';
    }
    // --- strona karty (worker) ---
    function extTrGtabHookNetwork() {
        try {
            const G = window.__lektorGtab || (window.__lektorGtab = { subs: new Set(), seen: new Map(), hooked: false });
            if (G.hooked) return G;
            G.hooked = true;
            const norm = (s) => String(s || '').replace(/\s+/g, ' ').trim();
            const parse = (raw) => {
                const body = String(raw || '').replace(/^\)\]\}'?\s*/, '');
                for (const line of body.split('\n')) {
                    const t = line.trim();
                    if (!t.startsWith('[')) continue;
                    let arr;
                    try { arr = JSON.parse(t); } catch (e) { continue; }
                    const row = Array.isArray(arr) && arr.find((x) => Array.isArray(x) && x[0] === 'wrb.fr' && x[1] === 'MkEWBc');
                    if (!row) continue;
                    let inner;
                    try { inner = JSON.parse(row[2]); } catch (e) { return null; }
                    const src = (inner && inner[1] && inner[1][4] && inner[1][4][0]) || (inner && inner[0] && inner[0][6] && inner[0][6][0]) || '';
                    const sents = inner && inner[1] && inner[1][0] && inner[1][0][0] && inner[1][0][0][5];
                    if (!Array.isArray(sents)) return null;
                    let out = '';
                    for (const s of sents) { if (Array.isArray(s) && typeof s[0] === 'string') out += (out ? '\n' : '') + s[0]; }
                    return { src: src, out: out.trim() };
                }
                return null;
            };
            const deliver = (raw) => {
                const r = parse(raw);
                if (!r || !r.out) return;
                G.seen.set(norm(r.src), r.out);
                if (G.seen.size > 100) G.seen.delete(G.seen.keys().next().value);
                G.subs.forEach((fn) => { try { fn(r); } catch (e) {} });
            };
            const isRpc = (u) => /batchexecute/.test(u) && /MkEWBc/.test(u);
            const xOpen = XMLHttpRequest.prototype.open, xSend = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.open = function (m, u) { this.__lektorUrl = String(u || ''); return xOpen.apply(this, arguments); };
            XMLHttpRequest.prototype.send = function () {
                if (isRpc(this.__lektorUrl)) this.addEventListener('load', () => { try { deliver(this.responseText); } catch (e) {} });
                return xSend.apply(this, arguments);
            };
            const oFetch = window.fetch;
            window.fetch = function (input) {
                const p = oFetch.apply(this, arguments);
                const u = String((input && input.url) || input || '');
                if (isRpc(u)) p.then((r) => r.clone().text()).then(deliver).catch(() => {});
                return p;
            };
            return G;
        } catch (e) { return null; }
    }
    // Obsługa zlecenia w karcie Tłumacza: wpisz tekst w pole, przeczytaj
    // wynik z przechwyconej odpowiedzi sieciowej (bez patrzenia na ekran).
    function extTrGtabRunJob(job) {
        const G = extTrGtabHookNetwork();
        const norm = (s) => String(s || '').replace(/\s+/g, ' ').trim();
        const reply = (ok, text, error) => {
            try { GM_setValue(GTAB_RES_KEY, { reqId: job.reqId, ok: !!ok, text: text || '', error: error || '' }); } catch (e) {}
        };
        if (!G) { reply(false, '', 'brak hooka sieci w karcie'); return; }
        const want = norm(job.text);
        if (G.seen.has(want)) { reply(true, G.seen.get(want)); return; }
        const findTa = () => document.querySelector('textarea[aria-label="Tekst źródłowy"]')
            || document.querySelector('textarea[aria-label="Source text"]')
            || document.querySelector('textarea');
        const proceed = (ta) => {
            let done = false;
            const finish = (ok, text, err) => { if (done) return; done = true; G.subs.delete(sub); clearTimeout(hard); clearTimeout(otherTm); reply(ok, text, err); };
            let other = null, otherTm = null;
            const sub = (r) => {
                if (norm(r.src) === want) { finish(true, r.out); return; }
                const ls = norm(r.src).length;
                if (ls > want.length * 0.8 && ls < want.length * 1.2) {
                    other = r.out;
                    clearTimeout(otherTm);
                    otherTm = setTimeout(() => finish(true, other), 1500);
                }
            };
            G.subs.add(sub);
            const hard = setTimeout(() => finish(other ? true : false, other || '', other ? '' : 'brak odpowiedzi Google'), 15000);
            if (!ta) { finish(false, '', 'brak pola tekstowego Google'); return; }
            try {
                ta.focus();
                if (ta.value) { ta.select(); document.execCommand('delete', false, null); }
                if (job.text) document.execCommand('insertText', false, job.text);
                if (ta.value !== job.text) ta.value = job.text;
                ta.dispatchEvent(new Event('input', { bubbles: true }));
            } catch (e) { finish(false, '', String((e && e.message) || e)); }
        };
        const ta0 = findTa();
        if (ta0) { proceed(ta0); return; }
        const obs = new MutationObserver(() => { const t = findTa(); if (t) { obs.disconnect(); clearTimeout(tm); proceed(t); } });
        try { obs.observe(document.documentElement, { subtree: true, childList: true }); } catch (e) {}
        const tm = setTimeout(() => { try { obs.disconnect(); } catch (e) {} proceed(null); }, 8000);
    }
    function extTrGtabInstallWorker() {
        try {
            if (!/translate\.google\./.test(location.hostname)) return;
            if (typeof GM_addValueChangeListener !== 'function') return;
            extTrGtabHookNetwork();
            GM_addValueChangeListener(GTAB_JOB_KEY, (name, oldV, newV) => {
                try {
                    const job = newV;
                    if (!job || !job.reqId || job.reqId === gtabLastJobId) return;
                    gtabLastJobId = job.reqId;
                    extTrGtabRunJob(job);
                } catch (e) {}
            });
            GM_setValue(GTAB_READY_KEY, Date.now());
            console.log('[DUO] gtab: robotnik gotowy w karcie Tłumacza');
        } catch (e) {}
    }
    // --- strona lektora (main) ---
    async function gtabEnsure() {
        try {
            if (gtabTabWin && gtabTabWin.closed === false) return true;
            const u = gtabUrl('auto', 'pl');
            if (typeof GM_openInTab === 'function') gtabTabWin = GM_openInTab(u, { active: false, setParent: true, insert: true });
            else gtabTabWin = window.open(u, 'duo_gtab');
            return !!gtabTabWin;
        } catch (e) { return false; }
    }
    async function gtabWaitWorker() {
        const fresh = () => Date.now() - Number(GM_getValue(GTAB_READY_KEY, 0) || 0) < 600000;
        if (fresh()) return;
        for (let i = 0; i < 24; i++) {
            await new Promise((r) => setTimeout(r, 500));
            if (fresh()) return;
        }
        throw new Error('karta Tłumacza nie odpowiada (zaakceptuj cookies w otwartej karcie Google)');
    }
    async function gtabOnce(src, tgt, text) {
        const okTab = await gtabEnsure();
        if (!okTab) throw new Error('nie udało się otworzyć karty Tłumacza');
        await gtabWaitWorker();
        const reqId = 'gt' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
        const res = new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                if (gtabWaiter && gtabWaiter.reqId === reqId) gtabWaiter = null;
                reject(new Error('Google karta: timeout'));
            }, 22000);
            gtabWaiter = { reqId: reqId, resolve: resolve, reject: reject, timer: timer };
        });
        GM_setValue(GTAB_JOB_KEY, { reqId: reqId, src: 'auto', tgt: tgt || 'pl', text: String(text || ''), ts: Date.now() });
        return await res;
    }
    // Tłumaczy linie 1:1; gdy Google sklei/rozdzieli — dzieli porcję na pół.
    async function gtabLines(src, tgt, lines) {
        if (lines.length > 1 && lines.join('\n').length > GTAB_MAX_CHARS) {
            const mid = Math.ceil(lines.length / 2);
            return (await gtabLines(src, tgt, lines.slice(0, mid))).concat(await gtabLines(src, tgt, lines.slice(mid)));
        }
        const out = await gtabOnce(src, tgt, lines.join('\n'));
        const res = String(out || '').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
        if (res.length === lines.length) return res;
        if (lines.length === 1) return [res.join(' ')];
        const mid = Math.ceil(lines.length / 2);
        return (await gtabLines(src, tgt, lines.slice(0, mid))).concat(await gtabLines(src, tgt, lines.slice(mid)));
    }
    async function extTrGoogleTab(src, tgt, texts) {
        const flat = texts.map((t) => String(t || '').replace(/\s*\n\s*/g, ' ').trim());
        const pos = [], lines = [];
        flat.forEach((t, i) => { if (t) { pos.push(i); lines.push(t); } });
        const out = texts.map(() => '');
        if (!lines.length) return out;
        if (Date.now() < gtabFailUntil) return extTrGoogle(src, tgt, texts);
        const job = gtabLock.then(() => gtabLines(src, tgt, lines));
        gtabLock = job.catch(() => {});
        try {
            const res = await job;
            res.forEach((t, j) => { out[pos[j]] = t; });
            return out;
        } catch (e) {
            gtabFailUntil = Date.now() + 2 * 60000;
            console.warn('[DUO] Google karta zawiodła, porcja idzie przez Google API:', String((e && e.message) || e));
            return extTrGoogle(src, tgt, texts);
        }
    }
    // Cały tekst (paczka SRT) w karcie Google — dla AI Subtitle Translatora.
    async function gtabTranslateText(src, text) {
        const job = gtabLock.then(() => gtabOnce(src, 'pl', String(text || '')));
        gtabLock = job.catch(() => {});
        return job;
    }
    try {
        if (typeof GM_addValueChangeListener === 'function') {
            GM_addValueChangeListener(GTAB_RES_KEY, (name, oldV, newV) => {
                try {
                    if (newV && gtabWaiter && newV.reqId === gtabWaiter.reqId) {
                        const w = gtabWaiter;
                        gtabWaiter = null;
                        clearTimeout(w.timer);
                        if (newV.ok) w.resolve(newV);
                        else w.reject(new Error('Google karta: ' + (newV.error || 'brak odpowiedzi')));
                    }
                } catch (e) {}
            });
        }
        extTrGtabInstallWorker();
    } catch (e) {}
    // ============================================================
    // --- B) BAZY NAPISÓW — port src/background/subs_db.js ----------
    // OpenSubtitles.org (bez klucza), OpenSubtitles.com (klucz),
    // SubDL (klucz). Pliki .gz/.zip rozpakowane przez DecompressionStream.
    // ============================================================
    const DB_ORG_UA = 'TemporaryUserAgent';
    const DB_APP_UA = 'LektorMultilanguage(userscript)';
    const DB_LANG3 = { pl: 'pol', en: 'eng', de: 'ger', fr: 'fre', es: 'spa', it: 'ita', ru: 'rus', uk: 'ukr', cs: 'cze', sk: 'slo', pt: 'por', ja: 'jpn', ko: 'kor', zh: 'chi', tr: 'tur', nl: 'dut', sv: 'swe', hu: 'hun', ro: 'rum' };
    const DB_SUB_EXT = /\.(srt|vtt|sub|ass|ssa|smi|sami|sbv|txt|lrc|dfxp|ttml)$/i;
    const DB_AD_LINE = /osdb\.link|opensubtitles|subdl\.com|napiprojekt|watch online movies|do you want subtitles for any video|become vip member|advertise your product|napisy zostały specjalnie dopasowane|naciśnij play\. napisy|tryray\.app|www\.[a-z0-9-]+\.(?:com|org|net|link|pl|info|tv)\b/i;
    async function dbGetJson(url, init) {
        const i = init || {};
        const r = await extTrFetchText(url, { method: i.method || 'GET', headers: i.headers || {}, data: i.body, timeout: 20000 });
        return JSON.parse(r);
    }
    async function dbGetBytes(url, init) { return await extTrFetchBytes(url, init, 30000); }
    async function dbInflate(bytes, format) {
        const ds = new DecompressionStream(format);
        const out = new Response(new Blob([bytes]).stream().pipeThrough(ds));
        return new Uint8Array(await out.arrayBuffer());
    }
    function dbIsGzip(b) { return b.length > 2 && b[0] === 0x1f && b[1] === 0x8b; }
    function dbIsZip(b) { return b.length > 4 && b[0] === 0x50 && b[1] === 0x4b && b[2] === 0x03 && b[3] === 0x04; }
    // Minimalny czytnik ZIP (katalog centralny; metoda 0 = bez kompresji, 8 = deflate).
    async function dbUnzipFirstSub(bytes) {
        const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        let eocd = -1;
        for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 65557); i--) {
            if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
        }
        if (eocd < 0) throw new Error('uszkodzone archiwum ZIP');
        const count = dv.getUint16(eocd + 10, true);
        let p = dv.getUint32(eocd + 16, true);
        const entries = [];
        for (let k = 0; k < count && p + 46 <= bytes.length; k++) {
            if (dv.getUint32(p, true) !== 0x02014b50) break;
            const method = dv.getUint16(p + 10, true);
            const csize = dv.getUint32(p + 20, true);
            const loc = dv.getUint32(p + 42, true);
            const nlen = dv.getUint16(p + 28, true), elen = dv.getUint16(p + 30, true), clen = dv.getUint16(p + 32, true);
            const name = new TextDecoder('utf-8').decode(bytes.subarray(p + 46, p + 46 + nlen));
            entries.push({ name: name, method: method, csize: csize, loc: loc });
            p += 46 + nlen + elen + clen;
        }
        const subs = entries.filter((e) => DB_SUB_EXT.test(e.name) && !/\/$/.test(e.name));
        subs.sort((a, b) => Number(!/\.srt$/i.test(a.name)) - Number(!/\.srt$/i.test(b.name)));
        const e = subs[0];
        if (!e) throw new Error('w archiwum nie ma pliku napisów');
        const lnlen = dv.getUint16(e.loc + 26, true), lelen = dv.getUint16(e.loc + 28, true);
        const start = e.loc + 30 + lnlen + lelen;
        const data = bytes.subarray(start, start + e.csize);
        if (e.method === 0) return { name: e.name, bytes: data };
        if (e.method === 8) return { name: e.name, bytes: await dbInflate(data, 'deflate-raw') };
        throw new Error('nieobsługiwana kompresja ZIP (' + e.method + ')');
    }
    function dbDecodeText(bytes, enc) {
        const label = String(enc || '').trim().toLowerCase();
        if (label && label !== 'ascii' && label !== 'utf-8' && label !== 'utf8') {
            try { return new TextDecoder(label).decode(bytes); } catch (e) { /* nieznana etykieta */ }
        }
        let t = new TextDecoder('utf-8').decode(bytes);
        if (t.includes('�')) { try { t = new TextDecoder('windows-1250').decode(bytes); } catch (e) {} }
        return t;
    }
    function dbPad(n, w) { return String(n).padStart(w || 2, '0'); }
    function dbMsToSrt(ms) {
        ms = Math.max(0, Math.round(ms));
        return dbPad(Math.floor(ms / 3600000)) + ':' + dbPad(Math.floor(ms / 60000) % 60) + ':' + dbPad(Math.floor(ms / 1000) % 60) + ',' + dbPad(ms % 1000, 3);
    }
    // MicroDVD {klatka}{klatka}tekst → SRT wg FPS z bazy.
    function dbMicroDvdToSrt(text, fps) {
        const lines = text.replace(/\r/g, '').split('\n');
        const out = [];
        let f = Number(fps) > 0 ? Number(fps) : 23.976;
        for (const line of lines) {
            const m = /^\{(\d+)\}\{(\d*)\}(.*)$/.exec(line.trim());
            if (!m) continue;
            if (+m[1] <= 1 && !out.length && /^\s*\d{2}(?:[.,]\d+)?\s*$/.test(m[3])) { f = Number(m[3].replace(',', '.')) || f; continue; }
            const s = (+m[1] / f) * 1000, e = m[2] ? (+m[2] / f) * 1000 : s + 3000;
            const t = m[3].replace(/\{[^}]*\}/g, '').split('|').join('\n').trim();
            if (t && e > s) out.push((out.length + 1) + '\n' + dbMsToSrt(s) + ' --> ' + dbMsToSrt(e) + '\n' + t + '\n');
        }
        return out.length ? out.join('\n') : text;
    }
    function dbStripAds(text) {
        return text.split(/\r?\n/).filter((l) => !DB_AD_LINE.test(l)).join('\n');
    }
    // ================= OpenSubtitles.org (bez klucza) =================
    async function dbSearchOrg(q) {
        const langs = q.langs.map((l) => DB_LANG3[l]).filter(Boolean);
        const res = await Promise.allSettled((langs.length ? langs : ['']).map((l) => dbSearchOrgLang(q, l)));
        const ok = res.filter((r) => r.status === 'fulfilled');
        if (!ok.length) throw res[0].reason;
        return [].concat(...ok.map((r) => r.value));
    }
    async function dbSearchOrgLang(q, lang3) {
        // Parametry w ścieżce MUSZĄ być alfabetycznie: episode, query, season, sublanguageid
        let path = '';
        if (q.episode) path += '/episode-' + q.episode;
        path += '/query-' + encodeURIComponent(q.query.toLowerCase());
        if (q.season) path += '/season-' + q.season;
        if (lang3) path += '/sublanguageid-' + lang3;
        const j = await dbGetJson('https://rest.opensubtitles.org/search' + path, { headers: { 'X-User-Agent': DB_ORG_UA } });
        if (!Array.isArray(j)) return [];
        return j.filter((x) => x && x.SubDownloadLink && /^(srt|sub|ssa|ass|vtt|txt|smi)$/i.test(x.SubFormat || '')).map((x) => ({
            provider: 'org',
            providerName: 'OpenSubtitles.org',
            title: (x.MovieName || '') + (x.MovieYear ? ' (' + x.MovieYear + ')' : '') + (+x.SeriesSeason ? ' S' + dbPad(x.SeriesSeason) + 'E' + dbPad(x.SeriesEpisode) : ''),
            release: x.SubFileName || x.MovieReleaseName || '',
            lang: String(x.ISO639 || '').toLowerCase(),
            downloads: +x.SubDownloadsCnt || 0,
            hi: x.SubHearingImpaired === '1',
            dl: x.SubDownloadLink, enc: x.SubEncoding || '', fps: +x.MovieFPS || 0, format: String(x.SubFormat || '').toLowerCase()
        }));
    }
    async function dbGetOrg(it) {
        let b = await dbGetBytes(it.dl);
        if (dbIsGzip(b)) b = await dbInflate(b, 'gzip');
        let t = dbDecodeText(b, it.enc);
        if (it.format === 'sub' || /^\s*\{\d+\}\{\d*\}/.test(t)) t = dbMicroDvdToSrt(t, it.fps);
        return t;
    }
    // ================= OpenSubtitles.com (klucz API) =================
    function dbOsHeaders(key, json) {
        const h = { 'Api-Key': key, 'Accept': 'application/json', 'X-User-Agent': DB_APP_UA };
        if (json) h['Content-Type'] = 'application/json';
        return h;
    }
    async function dbSearchCom(q, key) {
        // API wymaga parametrów posortowanych alfabetycznie i małymi literami (inaczej 301)
        const p = { languages: q.langs.join(','), query: q.query.toLowerCase() };
        if (q.season) p.season_number = String(q.season);
        if (q.episode) p.episode_number = String(q.episode);
        const qs = Object.keys(p).sort().map((k) => k + '=' + encodeURIComponent(p[k])).join('&');
        const j = await dbGetJson('https://api.opensubtitles.com/api/v1/subtitles?' + qs, { headers: dbOsHeaders(key) });
        const data = (j && Array.isArray(j.data)) ? j.data : [];
        return data.map((d) => {
            const a = d.attributes || {};
            const f = (a.files || [])[0];
            if (!f || !f.file_id) return null;
            const fd = a.feature_details || {};
            return {
                provider: 'com',
                providerName: 'OpenSubtitles.com',
                title: (fd.title || fd.movie_name || '') + (fd.year ? ' (' + fd.year + ')' : '') + (fd.season_number ? ' S' + dbPad(fd.season_number) + 'E' + dbPad(fd.episode_number || 0) : ''),
                release: a.release || f.file_name || '',
                lang: String(a.language || '').toLowerCase().slice(0, 2),
                downloads: +a.download_count || 0,
                hi: !!a.hearing_impaired,
                fileId: f.file_id
            };
        }).filter(Boolean);
    }
    async function dbGetCom(it, key) {
        const j = await dbGetJson('https://api.opensubtitles.com/api/v1/download', {
            method: 'POST', headers: dbOsHeaders(key, true), body: JSON.stringify({ file_id: it.fileId, sub_format: 'srt' })
        });
        if (!j || !j.link) throw new Error((j && j.message) || 'OpenSubtitles.com nie dał linku (limit pobrań?)');
        return dbDecodeText(await dbGetBytes(j.link), 'utf-8');
    }
    // ================= SubDL (klucz API) =================
    async function dbSearchSubdl(q, key) {
        const p = new URLSearchParams({ api_key: key, film_name: q.query, languages: q.langs.map((l) => l.toUpperCase()).join(','), subs_per_page: '30' });
        if (q.season) { p.set('season_number', String(q.season)); p.set('type', 'tv'); }
        if (q.episode) p.set('episode_number', String(q.episode));
        const j = await dbGetJson('https://api.subdl.com/api/v1/subtitles?' + p.toString());
        if (!j || j.status === false) throw new Error((j && (j.error || j.message)) || 'SubDL: błąd');
        const film = (j.results && j.results[0]) || {};
        return (j.subtitles || []).filter((s) => s && s.url).map((s) => ({
            provider: 'subdl',
            providerName: 'SubDL',
            title: (film.name || q.query) + (film.year ? ' (' + film.year + ')' : '') + (s.season ? ' S' + dbPad(s.season) + 'E' + dbPad(s.episode || 0) : ''),
            release: s.release_name || s.name || '',
            lang: String(s.lang || s.language || '').toLowerCase().slice(0, 2),
            downloads: 0,
            hi: !!s.hi,
            dl: 'https://dl.subdl.com' + (s.url[0] === '/' ? '' : '/') + s.url
        }));
    }
    async function dbGetSubdl(it) {
        const b = await dbGetBytes(it.dl);
        const f = dbIsZip(b) ? await dbUnzipFirstSub(b) : { bytes: b, name: '' };
        let t = dbDecodeText(f.bytes, '');
        if (/\.sub$/i.test(f.name) && /^\s*\{\d+\}\{\d*\}/.test(t)) t = dbMicroDvdToSrt(t, 0);
        return t;
    }
    // ================= wspólne =================
    function dbKeys() {
        return { os: String(extTrOpt('osApiKey') || '').trim(), subdl: String(extTrOpt('subdlApiKey') || '').trim() };
    }
    async function subsDbSearch(q) {
        const query = String(q.query || '').trim();
        if (!query) return { ok: false, error: 'Wpisz tytuł' };
        const langs = (Array.isArray(q.langs) && q.langs.length ? q.langs : ['pl', 'en']).map((l) => String(l).toLowerCase());
        const qq = { query: query, langs: langs, season: +q.season || 0, episode: +q.episode || 0 };
        const keys = dbKeys();
        const jobs = [['OpenSubtitles.org', dbSearchOrg(qq)]];
        if (keys.os) jobs.push(['OpenSubtitles.com', dbSearchCom(qq, keys.os)]);
        if (keys.subdl) jobs.push(['SubDL', dbSearchSubdl(qq, keys.subdl)]);
        const settled = await Promise.allSettled(jobs.map((j) => j[1]));
        let items = [];
        const errors = [];
        settled.forEach((s, i) => {
            if (s.status === 'fulfilled') items = items.concat(s.value);
            else errors.push(jobs[i][0] + ': ' + ((s.reason && s.reason.message) || s.reason));
        });
        const norm = (s) => String(s || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
        const nq = norm(query);
        const miss = (it) => Number(!(' ' + norm(it.title) + ' ').includes(' ' + nq + ' '));
        const rank = (it) => { const i = langs.indexOf(it.lang); return i < 0 ? 99 : i; };
        items.sort((a, b) => miss(a) - miss(b) || rank(a) - rank(b) || Number(a.hi) - Number(b.hi) || b.downloads - a.downloads);
        return { ok: true, items: items.slice(0, 40), errors: errors, providers: jobs.map((j) => j[0]) };
    }
    async function subsDbGet(it) {
        if (!it || !it.provider) throw new Error('brak pozycji');
        const keys = dbKeys();
        let text;
        if (it.provider === 'org') text = await dbGetOrg(it);
        else if (it.provider === 'com') text = await dbGetCom(it, keys.os);
        else if (it.provider === 'subdl') text = await dbGetSubdl(it);
        else throw new Error('nieznany dostawca');
        return dbStripAds(String(text || '').replace(/^﻿/, ''));
    }
    // ============================================================
    // --- C) AI SUBTITLE TRANSLATOR — port src/options/options.js ---
    // Wgrywasz plik → tłumaczy Translator Chrome / Gemini Nano /
    // kartą Google → pobierasz .srt albo wczytujesz do lektora.
    // ============================================================
    const AIT_ARROW = /(\d{1,2}:\d{2}(?::\d{2})?[.,]\d{1,3})\s*-->\s*(\d{1,2}:\d{2}(?::\d{2})?[.,]\d{1,3})/;
    const AIT_LANGS = [
        ['auto', 'Wykryj automatycznie'], ['en', 'angielski'], ['de', 'niemiecki'], ['fr', 'francuski'], ['es', 'hiszpański'],
        ['it', 'włoski'], ['pt', 'portugalski'], ['nl', 'niderlandzki'], ['ru', 'rosyjski'], ['uk', 'ukraiński'], ['cs', 'czeski'],
        ['sv', 'szwedzki'], ['tr', 'turecki'], ['ja', 'japoński'], ['ko', 'koreański'], ['zh', 'chiński'], ['hi', 'hindi'], ['ar', 'arabski']
    ];
    const AIT_PROMPT_DEF = 'Przetłumacz poniższe napisy na język polski, zachowując czasy i formatowanie, dbając o naturalny kontekst filmowy.';
    function aitTs(s) {
        s = String(s || '').trim().replace(',', '.');
        const p = s.split(':').map(Number);
        if (p.some((n) => isNaN(n))) return -1;
        if (p.length === 3) return Math.round((p[0] * 3600 + p[1] * 60 + p[2]) * 1000);
        if (p.length === 2) return Math.round((p[0] * 60 + p[1]) * 1000);
        return -1;
    }
    const aitClean = (t) => String(t || '').replace(/\{[^}]*\}/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\\N|\\n/gi, ' ').replace(/\s+/g, ' ').trim();
    // Cały plik idzie paczkami ≤4500 znaków (podział po pustych liniach).
    function aitChunk(text, maxSize) {
        maxSize = maxSize || 4500;
        const chunks = [];
        let cur = '';
        for (const block of String(text || '').split(/\r?\n\s*\r?\n/)) {
            const b = block.trim();
            if (!b) continue;
            if (b.length > maxSize) { if (cur) { chunks.push(cur); cur = ''; } chunks.push(b); continue; }
            if (cur && (cur + '\n\n' + b).length > maxSize) { chunks.push(cur); cur = b; }
            else cur = cur ? cur + '\n\n' + b : b;
        }
        if (cur) chunks.push(cur);
        return chunks;
    }
    // Filtr SRT (jak skrypt 2.9): naprawia czasy zepsute przez Google, odkleja
    // numery od tekstu i składa czysty SRT z kolejną numeracją.
    const SRT_TS = '(\\d{1,2})\\s*:\\s*(\\d{2})\\s*:\\s*(\\d{2})\\s*[,.]\\s*(\\d{1,3})';
    const SRT_ARROW_FIX = new RegExp(SRT_TS + '\\s*(?:-+\\s*>|[–—]+\\s*>?|→|>)\\s*' + SRT_TS, 'g');
    const SRT_TIME_LINE = /^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$/;
    function srtFilter(text) {
        const fmt = (h, m, s, f) => String(h).padStart(2, '0') + ':' + m + ':' + s + ',' + String(f).padEnd(3, '0');
        let t = String(text || '').replace(/\r/g, '')
            .replace(SRT_ARROW_FIX, (_, h1, m1, s1, f1, h2, m2, s2, f2) => '\n' + fmt(h1, m1, s1, f1) + ' --> ' + fmt(h2, m2, s2, f2) + '\n')
            .replace(/[ \t]+(\d+)[ \t]*\n(?=\d{2}:\d{2}:\d{2},\d{3} --> )/g, '\n$1\n');
        const cues = [];
        let cur = null, lastNum = null;
        for (const raw of t.split('\n')) {
            const l = raw.trim();
            if (SRT_TIME_LINE.test(l)) { if (cur) cues.push(cur); cur = { time: l, text: [], num: lastNum }; lastNum = null; continue; }
            if (!l) continue;
            if (/^\d+$/.test(l)) { lastNum = +l; continue; }
            if (cur) cur.text.push(l);
        }
        if (cur) cues.push(cur);
        const out = [];
        cues.forEach((c, k) => {
            const own = c.num != null ? c.num : (cues[k - 1] && cues[k - 1].num != null ? cues[k - 1].num + 1 : null);
            let txt = c.text.join('\n');
            if (own != null) {
                txt = txt.replace(/[ \t]+(\d{1,5})$/, (m, n) => (+n === own + 1 ? '' : m))
                    .replace(/^(\d{1,5})[ \t]+/, (m, n) => (+n === own ? '' : m));
            }
            txt = txt.trim();
            if (txt) out.push((out.length + 1) + '\n' + c.time + '\n' + txt + '\n');
        });
        return out.join('\n');
    }
    // Dzieli tekst na jednostki: linie do strzałki "-->" zostają bez zmian,
    // tłumaczony jest tylko tekst kwestii. Bez strzałek (TXT) każda linia = kwestia.
    function aitSplit(raw) {
        const lines = String(raw || '').replace(/\r/g, '')
            .replace(/(?<!\n|(?:^|\n)\d+)\n(\d+\n)?(?=[^\n]*-->)/g, '\n\n$1').split('\n');
        const timed = lines.some((l) => AIT_ARROW.test(l));
        const units = []; // { head, text } albo { sep }
        if (!timed) {
            lines.forEach((l) => units.push(l.trim() ? { head: [], text: [l] } : { sep: l }));
            return { timed: timed, units: units };
        }
        let cur = null;
        const flush = () => { if (cur) { units.push(cur); cur = null; } };
        lines.forEach((l) => {
            if (!l.trim()) { flush(); units.push({ sep: l }); return; }
            if (!cur) cur = { head: [], text: [], gotArrow: false };
            if (!cur.gotArrow) { cur.head.push(l); if (AIT_ARROW.test(l)) cur.gotArrow = true; }
            else cur.text.push(l);
        });
        flush();
        units.forEach((u) => { if (u.sep === undefined && !u.gotArrow) { u.head = u.head.concat(u.text); u.text = []; } });
        return { timed: timed, units: units };
    }
    function aitJoin(units) {
        return units.map((u) => (u.sep !== undefined ? u.sep : u.head.concat(u.text).join('\n'))).join('\n');
    }
    // Kwestie dla lektora — spójne z parseSubtitleFile ({start, duration, text}).
    function aitCues(raw) {
        const parts = aitSplit(raw);
        const cues = [];
        if (parts.timed) {
            parts.units.forEach((u) => {
                if (u.sep !== undefined || !u.text.length) return;
                const m = u.head.map((l) => l.match(AIT_ARROW)).find(Boolean);
                if (!m) return;
                const startMs = aitTs(m[1]), endMs = aitTs(m[2]);
                const t = aitClean(u.text.join(' '));
                if (startMs >= 0 && endMs > startMs && t) cues.push({ startMs: startMs, endMs: endMs, text: t });
            });
        } else {
            let t = 0;
            parts.units.forEach((u) => {
                if (u.sep !== undefined) return;
                const l = aitClean(u.text.join(' '));
                if (l) { cues.push({ startMs: t, endMs: t + 3000, text: l }); t += 3000; }
            });
        }
        cues.sort((a, b) => a.startMs - b.startMs);
        return cues;
    }
    async function aitReadFile(file) {
        const buf = await file.arrayBuffer();
        let raw = new TextDecoder('utf-8').decode(buf);
        if (raw.includes('�')) {
            // Polskie napisy bywają w CP1250 — gdy UTF-8 daje krzaki, próbujemy tej strony.
            try { raw = new TextDecoder('windows-1250').decode(buf); } catch (e) {}
        }
        return raw.replace(/^﻿/, '');
    }
    // --- pamięć AIT (wspólna z aiMemSave) + status modeli -----------------
    async function aitMemSave(pairs, engine) {
        if (!pairs.length) return;
        try {
            const mem = aiMemRead();
            const now = Date.now();
            pairs.forEach(([src, pl]) => { if (src && pl) mem[aiHash(src)] = { src: String(src).slice(0, 2000), pl: String(pl).slice(0, 2000), engine: engine, ts: now }; });
            const keys = Object.keys(mem);
            if (keys.length > AI_MEM_MAX) {
                keys.sort((a, b) => (mem[a].ts || 0) - (mem[b].ts || 0));
                for (let i = 0; i < keys.length - AI_MEM_MAX; i++) delete mem[keys[i]];
            }
            localStorage.setItem(AI_MEM_KEY, JSON.stringify(mem));
        } catch (e) { /* quota */ }
    }
    function aitMemExport() {
        try {
            const blob = new Blob([JSON.stringify(aiMemRead(), null, 2)], { type: 'application/json' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'pamiec-tlumaczen_' + new Date().toISOString().slice(0, 10) + '.json';
            document.body.appendChild(a); a.click(); a.remove();
            setTimeout(() => { try { URL.revokeObjectURL(a.href); } catch (e) {} }, 5000);
        } catch (e) {}
    }
    function aitMemClear() {
        try { localStorage.removeItem(AI_MEM_KEY); } catch (e) {}
    }
    async function aitStatusText() {
        const isAvail = (s) => /\bavailable\b/i.test(s) && !/unavailable/i.test(s);
        let t, p;
        try {
            t = (typeof Translator !== 'undefined' && Translator.availability)
                ? String(await Translator.availability({ sourceLanguage: 'en', targetLanguage: 'pl' }))
                : 'brak API (Chrome 138+)';
        } catch (e) { t = 'błąd: ' + ((e && e.message) || e); }
        try {
            p = (typeof LanguageModel !== 'undefined' && LanguageModel.availability)
                ? String(await LanguageModel.availability())
                : 'brak API';
        } catch (e) { p = 'błąd: ' + ((e && e.message) || e); }
        const ready = isAvail(t) || isAvail(p) || /downloadable|downloading/i.test(t + p);
        return 'Translator: ' + t + ' · Prompt AI: ' + p + (ready ? '' : ' — wymagany Chrome 138+ i model z chrome://components.');
    }
    async function aitDetectLang(sample) {
        try {
            if (typeof LanguageDetector !== 'undefined' && LanguageDetector.create) {
                const det = await LanguageDetector.create();
                try {
                    const r = await det.detect(String(sample || '').slice(0, 2000));
                    const top = r && r[0] && r[0].detectedLanguage;
                    if (top && top !== 'und' && top !== 'pl') return top.split('-')[0];
                } finally { try { det.destroy(); } catch (e) {} }
            }
        } catch (e) { /* brak detektora — zostaje angielski */ }
        return 'en';
    }
    function aitMonitor(label) {
        return (m) => {
            try { m.addEventListener('downloadprogress', (e) => { try { aitSay('⏬ Pobieram model ' + label + ': ' + Math.round((e.loaded || 0) * 100) + '%'); } catch (err) {} }); } catch (e) {}
        };
    }
    // Zwraca { translate(text, signal), destroy() } dla wybranego silnika.
    async function aitMakeEngine(kind, srcLang, promptText) {
        if (kind === 'prompt') {
            if (typeof LanguageModel === 'undefined' || !LanguageModel.create) throw new Error('Brak Prompt API (LanguageModel) — Chrome 138+ z Gemini Nano.');
            const sys = (String(promptText || '').trim() || AIT_PROMPT_DEF) + '\nOdpowiadaj wyłącznie tłumaczeniem podanej kwestii — bez numerów, czasów, cudzysłowów i komentarzy. Zachowaj podział na linie.';
            const opts = { initialPrompts: [{ role: 'system', content: sys }], monitor: aitMonitor('Gemini Nano') };
            let base;
            try { base = await LanguageModel.create(Object.assign({ expectedInputs: [{ type: 'text', languages: [srcLang, 'pl'] }], expectedOutputs: [{ type: 'text', languages: ['pl'] }] }, opts)); }
            catch (e) { base = await LanguageModel.create(opts); }
            return {
                async translate(text, signal) {
                    const sess = base.clone ? await base.clone({ signal }) : base;
                    try { return String(await sess.prompt(text, { signal }) || '').trim(); }
                    finally { if (sess !== base) { try { sess.destroy(); } catch (e) {} } }
                },
                destroy() { try { base.destroy(); } catch (e) {} }
            };
        }
        if (typeof Translator === 'undefined' || !Translator.create) throw new Error('Brak Translator API — wymagany Chrome 138+.');
        const tr = await Translator.create({ sourceLanguage: srcLang, targetLanguage: 'pl', monitor: aitMonitor('tłumacza') });
        return {
            async translate(text, signal) { return String(await tr.translate(text, { signal }) || ''); },
            destroy() { try { tr.destroy(); } catch (e) {} }
        };
    }
    // --- stan i komunikaty AI Tłumacza (panel podłącza swój span) ---------
    let aitState = null;         // { abort: AbortController, stop: bool }
    let aitStatusSink = null;    // ustawiane przez panel ⚙️ USTAWIENIA
    function aitSay(t) {
        if (aitStatusSink) { try { aitStatusSink(t); return; } catch (e) {} }
        try { setPrepareStatus(t); } catch (e) {}
    }
    // Pełne tłumaczenie pliku: split → detekcja języka → silnik → join.
    // onProgress(done, total) co kwestię (co 5 odświeżamy wynik przez onResult).
    async function aitTranslateRun(raw, kind, langVal, promptText, onResult, onProgress) {
        const parts = aitSplit(raw);
        const todo = parts.units.filter((u) => u.text && u.text.length);
        if (!todo.length) throw new Error('Nie znaleziono kwestii do tłumaczenia.');
        aitState = { abort: new AbortController(), stop: false };
        let eng = null, done = 0, errors = 0;
        const memPairs = [];
        try {
            const srcLang = langVal === 'auto'
                ? await aitDetectLang(todo.slice(0, 40).map((u) => u.text.join(' ')).join('\n'))
                : langVal;
            aitSay('⏳ Uruchamiam silnik (' + kind + ', ' + srcLang + ' → pl)…');
            eng = await aitMakeEngine(kind, srcLang, promptText);
            for (const u of todo) {
                if (aitState.stop) break;
                const src = u.text.join('\n');
                try {
                    const pl = await eng.translate(src, aitState.abort.signal);
                    if (pl) { u.text = pl.split('\n'); memPairs.push([aitClean(src), aitClean(pl)]); }
                } catch (e) {
                    if (aitState.stop) break;
                    errors++;
                }
                done++;
                if (done % 5 === 0 || done === todo.length) {
                    if (onResult) { try { onResult(aitJoin(parts.units)); } catch (e) {} }
                    aitSay('⏳ Tłumaczę… ' + done + ' / ' + todo.length + ' kwestii' + (errors ? ' (błędy: ' + errors + ')' : ''));
                }
                if (onProgress) { try { onProgress(done, todo.length); } catch (e) {} }
            }
            const out = aitJoin(parts.units);
            if (onResult) { try { onResult(out); } catch (e) {} }
            aitSay((aitState.stop ? '⏹ Zatrzymano po ' : '✅ Gotowe: ') + done + ' / ' + todo.length + ' kwestii'
                + (errors ? ' (pominięte z błędem: ' + errors + ')' : '') + '. Możesz pobrać .srt albo wczytać do lektora.');
            return { text: out, done: done, errors: errors, stopped: !!aitState.stop };
        } finally {
            if (eng) eng.destroy();
            aitMemSave(memPairs, kind === 'prompt' ? 'ait-prompt' : 'ait-translator').catch(() => {});
            aitState = null;
        }
    }
    // Google w przypiętej karcie: paczka po paczce, na końcu filtr SRT.
    async function aitRunGtab(raw, onResult) {
        const srt = AIT_ARROW.test(raw) && !/^﻿?WEBVTT/.test(raw.trim());
        const chunks = aitChunk(raw, 4500);
        if (!chunks.length) throw new Error('Nie znaleziono tekstu do tłumaczenia.');
        aitState = { abort: new AbortController(), stop: false };
        let out = '', done = 0;
        try {
            for (const ch of chunks) {
                if (aitState.stop) break;
                aitSay('⏳ Google (karta): paczka ' + (done + 1) + ' / ' + chunks.length + '…');
                const r = await gtabTranslateText('auto', ch);
                const t = String(r && (r.text || r) || '');
                out += t + '\n\n';
                done++;
                if (onResult) { try { onResult(srt ? srtFilter(out) : out.trim()); } catch (e) {} }
            }
            const finalOut = srt ? srtFilter(out) : out.trim();
            if (onResult) { try { onResult(finalOut); } catch (e) {} }
            aitSay((aitState.stop ? '⏹ Zatrzymano po ' : '✅ Gotowe: ') + done + ' / ' + chunks.length + ' paczek'
                + (srt ? ' (filtr numerów i czasów zastosowany)' : '') + '. Możesz pobrać .srt albo wczytać do lektora.');
            return { text: finalOut, done: done, errors: 0, stopped: !!aitState.stop };
        } finally { aitState = null; }
    }
    function aitStop() {
        try {
            if (aitState) { aitState.stop = true; aitState.abort.abort(); }
        } catch (e) {}
    }
    // Wczytanie wyniku (SRT/TXT) wprost do lektora — jak przycisk 📂 w panelu.
    function aitLoadToLektor(raw) {
        const cues = aitCues(raw);
        if (!cues.length) throw new Error('Brak kwestii do wczytania (potrzebne napisy z czasami).');
        const segs = cues.map((c) => ({ start: c.startMs / 1000, duration: Math.max((c.endMs - c.startMs) / 1000, 0.4), text: c.text }))
            .sort((a, b) => a.start - b.start);
        const videoId = getVideoId() || 'ait_' + Date.now();
        const key = cacheKey(videoId, selectedVoice, BUFFER_GEN_SPEED) + '::ait_' + Date.now();
        prepareHybridStreaming(key, segs, videoId, BUFFER_GEN_SPEED);
        return segs.length;
    }
    // ============================================================
    // --- B) ŁOWCA: zapamiętane domeny + auto-start ----------------
    // ============================================================
    function extTrLowcaSites() {
        try { const a = JSON.parse(String(extTrOpt('lowcaSites') || '[]')); return Array.isArray(a) ? a : []; }
        catch (e) { return []; }
    }
    function extTrRememberLowcaSite(host) {
        try {
            const arr = extTrLowcaSites();
            if (host && !arr.includes(host)) { arr.push(host); extTrSet('lowcaSites', JSON.stringify(arr)); }
        } catch (e) {}
    }
    // Wspomniana domena + brak własnego źródła → cichy Łowca raz przy wejściu
    // (odpowiednik registerContentScripts w rozszerzeniu; tylko gdy lektor włączony).
    function extTrLowcaAutoStart() {
        try {
            if (SLEEP_MODE) return;
            if (!extTrLowcaSites().includes(HOST)) return;
            if (getSubSourcesForHost(HOST)) return;
            if (!masterPower) return;
            setTimeout(() => { try { startSubtitleProfiler(); } catch (e) {} }, 5000);
        } catch (e) {}
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(extTrLowcaAutoStart, 100), { once: true });
    } else {
        setTimeout(extTrLowcaAutoStart, 100);
    }
    // ============================================================
    // --- B) BAZY: pobranie wyniku i wczytanie do lektora ----------
    // ============================================================
    let dbBusy = false;
    async function subsDbLoadToLektor(item) {
        if (dbBusy) return;
        dbBusy = true;
        try {
            setPrepareStatus('🌐 Pobieram napisy: ' + (item.title || item.release || item.providerName) + '…');
            const text = await subsDbGet(item);
            const segs = parseSubtitleFile(text, detectFormat(text), null);
            if (!segs.length) throw new Error('plik bez kwestii');
            // Niepolskie bazy też przechodzą przez autoSubsOn → tłumaczenie sieciowe.
            const segs2 = await extTrMaybeTranslateSegs(segs, item.lang);
            const videoId = getVideoId() || 'db_' + Date.now();
            const key = cacheKey(videoId, selectedVoice, BUFFER_GEN_SPEED) + '::db_' + Date.now();
            customSubFileId = videoId;
            prepareHybridStreaming(key, segs2, videoId, BUFFER_GEN_SPEED);
            setPrepareStatus('🔊 Wczytano z bazy: ' + segs2.length + ' kwestii (' + item.providerName + ')');
        } catch (e) {
            setPrepareStatus('❌ Błąd pobierania napisów: ' + ((e && e.message) || e));
        } finally { dbBusy = false; }
    }

    // --- FLAGI ---
    const SETTINGS_FLAGS = [
        { key: 'AutoCatchup', label: 'Auto-synchronizacja tempa (przyspiesza przy zaległościach)' },
        { key: 'SingleTabMode', label: 'Tylko 1 karta naraz (Audio Focus)' },
        { key: 'AutoMuteHidden', label: 'Wyciszaj kartę w tle' },
        { key: 'PauseVideo', label: 'Pauzuj film razem z lektorem (tryb LIVE) — domyślnie WYŁ.' },
        { key: 'YtAuto', label: 'Automatycznie na YouTube: pobierz CAŁE napisy, przetłumacz i czytaj (domyślnie WYŁ. — jest przycisk „⬇ Całe napisy”)' }, // YT-AUTO
        { key: 'DetectYTPolish', label: 'Wyłącz przy polskim dubbingu (YouTube)' },
        { key: 'DetectYTPolishChannel', label: 'Wyłącz na polskich kanałach, podglądach Hover i m.youtube (YouTube)' },
        { key: 'SoundCuesFilter', label: 'Pomiń wstawki: (wiatr), [muzyka], ♪' },
        { key: 'FilterEnabled', label: 'Cenzura przekleństw' }
    ];
    function getFlag(key) {
        if (key === 'FilterEnabled') return filterEnabled;
        if (key === 'PauseVideo') return pauseVideoWithLektor;
        if (key === 'YtAuto') return ytAutoOn;
        return localStorage.getItem('duo_' + key) !== 'false';
    }
    function setFlag(key, val) {
        try { localStorage.setItem('duo_' + key, String(val)); } catch (e) {}
    }
    const FLAG_APPLY = {
        'AutoCatchup': v => { autoCatchup = v; },
        'SingleTabMode': v => { singleTabMode = v; if (v && masterPower) claimAudioFocus(); },
        'AutoMuteHidden': v => { autoMuteHiddenTab = v; },
        'PauseVideo': v => { pauseVideoWithLektor = v; if (!v) resumeVideosAfterLektor(); },
        'YtAuto': v => { ytAutoOn = v; if (v) { ytAutoVid = ''; ytAutoMaybeStart(); } }, // YT-AUTO
        'DetectYTPolish': v => { detectYTPolishAudio = v; },
        'DetectYTPolishChannel': v => { detectYTPolishChannel = v; },
        'SoundCuesFilter': v => { soundCuesFilter = v; },
        'FilterEnabled': v => { filterEnabled = v; localStorage.setItem('duo_FilterEnabled', String(v)); }
    };

    // ============================================================
    // --- PANEL USTAWIEŃ (SZEROKI 600px) ---
    // ============================================================
    // ============================================================
// --- STRONA USTAWIEŃ (osobny plik HTML) ---
// Plik DUO-ustawienia.html to osobne origin (file://), wiec NIE WIDZI
// localStorage stron filmowych. Dlatego skrypt wystawia tu dwie rzeczy:
//   openDuoSettingsPage() — otwiera plik i przesyla mu AKTUALNE ustawienia,
//   message-handler      — odbiera komendy z pliku, zapisuje je w
//                           localStorage/GM stron filmowych i odswieza panel.
// Komunikacja: window.postMessage (plik <-> skrypt).
// ============================================================
const DUO_SETTINGS_FILE = 'file:///C:/Users/Admin/Downloads/DUO-ustawienia.html';

function duoSettingsSnapshot() {
    return {
        duo_Engine: currentEngineId,
        duo_Voice_piper: localStorage.getItem('duo_Voice_piper'),
        duo_Voice_supertonic: localStorage.getItem('duo_Voice_supertonic'),
        duo_Voice_xtts: localStorage.getItem('duo_Voice_xtts'),
        duo_Voice_matcha: localStorage.getItem('duo_Voice_matcha'),
        duo_Voice_omnivoice: localStorage.getItem('duo_Voice_omnivoice'),
        duo_Voice_pocket: localStorage.getItem('duo_Voice_pocket'),
        duo_Voice_audio8: localStorage.getItem('duo_Voice_audio8'),
        duo_SpeechRate: SPEECH_RATE,
        duo_DuckVolume: duckVolume,
        duo_SpeechGain: speechGain,
        duo_Compressor: compressorEnabled,
        duo_SynthSteps: synthSteps,
        duo_DynamicSteps: dynamicSteps,
        duo_SpeechGap: speechGap,
        duo_LiveDelayMin: liveDelayMin,
        duo_AudioOffsetMs: audioOffsetMs,
        duo_LiveBufRecord: liveBufRecord,
        duo_LiveBufTTLDays: liveBufTTLDays(),
        duo_TempoMode: tempoMode,
        duo_ScanMode: scanMode,
        duo_UiScale: uiScale,
        duo_MatchaStyle: matchaStyle,
        duo_CaptionOverlay: captionOverlayEnabled,
        duo_AutoCatchup: autoCatchup,
        duo_SingleTabMode: singleTabMode,
        duo_AutoMuteHidden: autoMuteHiddenTab,
        duo_PauseVideo: pauseVideoWithLektor,
        duo_DetectYTPolish: detectYTPolishAudio,
        duo_DetectYTPolishChannel: detectYTPolishChannel,
        duo_SoundCuesFilter: soundCuesFilter,
        duo_FilterEnabled: filterEnabled,
        duo_FilterMode: filterMode,
        duo_UiCollapsedGlobal: gmGet(UI_COLLAPSED_KEY),
        duo_MasterPowerGlobal: gmGet(MASTER_POWER_KEY),
        duo_Whitelist: gmGet(WL_KEY),
        duo_Blacklist: gmGet(BL_KEY),
        duo_SubtitleSources: gmGet(SUBSRC_KEY),
        duo_ProfPreferPolish: gmGet(PROF_PL_KEY),
        duo_BlockedPhrases: gmGet(BLOCKED_KEY),
        duo_CustomProfanity: localStorage.getItem('duo_CustomProfanity'),
        duo_ExtTrEngine: extTrOpt('extTrEngine'),
        duo_ExtTrChunk: extTrOpt('extTrChunk'),
        duo_ExtTrInterval: extTrOpt('extTrInterval'),
        duo_ExtTrGoogleRpc: extTrFlag('extTrGoogleRpc'),
        duo_ExtTrMicrosoftBatch: extTrFlag('extTrMicrosoftBatch'),
        duo_ExtTrStopWithLektor: extTrFlag('extTrStopWithLektor'),
        duo_AiOn: extTrFlag('aiOn'),
        duo_AiApiKey: extTrOpt('aiApiKey'),
        duo_AutoSubsOn: extTrFlag('autoSubsOn'),
        duo_LowcaGui: extTrFlag('lowcaGui'),
        duo_LowcaSites: extTrLowcaSites(),
        duo_OsApiKey: extTrOpt('osApiKey'),
        duo_SubdlApiKey: extTrOpt('subdlApiKey'),
        duo_AitEngine: extTrOpt('aitEngine'),
        duo_AitLang: extTrOpt('aitLang'),
        duo_AitPrompt: extTrOpt('aitPrompt'),
        version: SCRIPT_VERSION
    };
}
// Zapis ustawienia przychodzacego z pliku HTML.
function duoApplySetting(key, value) {
    const num = (v, d) => { const n = parseFloat(v); return isNaN(n) ? d : n; };
    switch (key) {
        case 'duo_Engine':
            if (value && value !== currentEngineId) switchEngine(String(value));
            return;
        case 'duo_SpeechRate': SPEECH_RATE = Math.max(0.5, Math.min(2.5, num(value, 1.3))); saveSpeechRate(); return;
        case 'duo_DuckVolume': duckVolume = Math.max(0, Math.min(1, num(value, 0.25))); try { localStorage.setItem('duo_DuckVolume', String(duckVolume)); } catch (e) {} return;
        case 'duo_SpeechGain': speechGain = Math.max(SPEECH_GAIN_MIN, Math.min(SPEECH_GAIN_MAX, num(value, 1))); try { localStorage.setItem('duo_SpeechGain', String(speechGain)); } catch (e) {} return;
        case 'duo_Compressor': compressorEnabled = !!value; try { localStorage.setItem('duo_Compressor', String(compressorEnabled)); } catch (e) {} return;
        case 'duo_SynthSteps': synthSteps = Math.max(4, Math.min(24, Math.round(num(value, 8)))); try { localStorage.setItem('duo_SynthSteps', String(synthSteps)); } catch (e) {} return;
        case 'duo_DynamicSteps': dynamicSteps = !!value; try { localStorage.setItem('duo_DynamicSteps', String(dynamicSteps)); } catch (e) {} return;
        case 'duo_SpeechGap': speechGap = Math.max(0, Math.min(0.5, num(value, 0))); saveSpeechGap(); return;
        case 'duo_LiveDelayMin': liveDelayMin = Math.max(0, Math.min(120, num(value, 0))); saveLiveDelayMin(); return;
        case 'duo_AudioOffsetMs': audioOffsetMs = Math.max(-10000, Math.min(10000, Math.round(num(value, 0)))); saveAudioOffsetMs(); return;
        case 'duo_LiveBufRecord': liveBufRecord = !!value; localStorage.setItem(LIVEBUF_ON_KEY, String(liveBufRecord)); return;
        case 'duo_LiveBufTTLDays': saveLiveBufTTLDays(Math.max(0, Math.min(90, Math.round(num(value, 7))))); return;
        case 'duo_TempoMode': tempoMode = String(value); saveTempoMode(); return;
        case 'duo_ScanMode': scanMode = String(value); setupScanMode(scanMode); return;
        case 'duo_UiScale': uiScale = Math.max(0.8, Math.min(2, num(value, 1))); saveUiScale(); return;
        case 'duo_MatchaStyle': matchaStyle = Math.max(-1, Math.min(17, Math.round(num(value, -1)))); saveMatchaStyle(); return;
        case 'duo_CaptionOverlay': captionOverlayEnabled = !!value; localStorage.setItem(CAP_OVERLAY_KEY, String(captionOverlayEnabled)); return;
        case 'duo_AutoCatchup': autoCatchup = !!value; try { localStorage.setItem('duo_AutoCatchup', String(autoCatchup)); } catch (e) {} return;
        case 'duo_SingleTabMode': singleTabMode = !!value; try { localStorage.setItem('duo_SingleTabMode', String(singleTabMode)); } catch (e) {} return;
        case 'duo_AutoMuteHidden': autoMuteHiddenTab = !!value; try { localStorage.setItem('duo_AutoMuteHidden', String(autoMuteHiddenTab)); } catch (e) {} return;
        case 'duo_PauseVideo': pauseVideoWithLektor = !!value; try { localStorage.setItem('duo_PauseVideo', String(pauseVideoWithLektor)); } catch (e) {} return;
        case 'duo_DetectYTPolish': detectYTPolishAudio = !!value; try { localStorage.setItem('duo_DetectYTPolish', String(detectYTPolishAudio)); } catch (e) {} return;
        case 'duo_DetectYTPolishChannel': detectYTPolishChannel = !!value; try { localStorage.setItem('duo_DetectYTPolishChannel', String(detectYTPolishChannel)); } catch (e) {} return;
        case 'duo_SoundCuesFilter': soundCuesFilter = !!value; try { localStorage.setItem('duo_SoundCuesFilter', String(soundCuesFilter)); } catch (e) {} return;
        case 'duo_FilterEnabled': filterEnabled = !!value; try { localStorage.setItem('duo_FilterEnabled', String(filterEnabled)); } catch (e) {} return;
        case 'duo_FilterMode': filterMode = String(value); try { localStorage.setItem('duo_FilterMode', filterMode); } catch (e) {} return;
        case 'duo_UiCollapsedGlobal': gmSet(UI_COLLAPSED_KEY, !!value); return;
        case 'duo_MasterPowerGlobal': gmSet(MASTER_POWER_KEY, !!value); return;
        case 'duo_Whitelist': gmSet(WL_KEY, String(value || '')); return;
        case 'duo_Blacklist': gmSet(BL_KEY, String(value || '')); return;
        case 'duo_SubtitleSources': gmSet(SUBSRC_KEY, String(value || '{}')); return;
        case 'duo_ProfPreferPolish': gmSet(PROF_PL_KEY, String(value)); return;
        case 'duo_BlockedPhrases': gmSet(BLOCKED_KEY, String(value || '[]')); return;
        case 'duo_CustomProfanity': try { localStorage.setItem('duo_CustomProfanity', String(value || '[]')); } catch (e) {} return;
        case 'duo_ExtTrEngine': extTrSet('extTrEngine', String(value || 'lokalny')); return;
        case 'duo_ExtTrChunk': extTrSet('extTrChunk', String(value || 'mieszane')); return;
        case 'duo_ExtTrInterval': extTrSet('extTrInterval', String(value || '30s')); return;
        case 'duo_ExtTrGoogleRpc': extTrSet('extTrGoogleRpc', !!value); return;
        case 'duo_ExtTrMicrosoftBatch': extTrSet('extTrMicrosoftBatch', !!value); return;
        case 'duo_ExtTrStopWithLektor': extTrSet('extTrStopWithLektor', !!value); return;
        case 'duo_AiOn': extTrSet('aiOn', !!value); return;
        case 'duo_AiApiKey': extTrSet('aiApiKey', String(value || '')); return;
        case 'duo_AutoSubsOn': extTrSet('autoSubsOn', !!value); return;
        case 'duo_LowcaGui': extTrSet('lowcaGui', !!value); return;
        case 'duo_LowcaSites': extTrSet('lowcaSites', Array.isArray(value) ? JSON.stringify(value) : String(value || '[]')); return;
        case 'duo_OsApiKey': extTrSet('osApiKey', String(value || '')); return;
        case 'duo_SubdlApiKey': extTrSet('subdlApiKey', String(value || '')); return;
        case 'duo_AitEngine': extTrSet('aitEngine', String(value || 'translator')); return;
        case 'duo_AitLang': extTrSet('aitLang', String(value || 'auto')); return;
        case 'duo_AitPrompt': extTrSet('aitPrompt', String(value || '')); return;
        default: return;
    }
}

let duoBridgeWin = null;
// Otwiera plik HTML z ustawieniami i synchronizuje go z tym skryptem.
function openDuoSettingsPage() {
    try {
        if (!duoBridgeWin || duoBridgeWin.closed) duoBridgeWin = window.open(DUO_SETTINGS_FILE, 'duo_settings');
        else duoBridgeWin.focus();
    } catch (e) {}
    const send = () => {
        try {
            if (duoBridgeWin && !duoBridgeWin.closed) {
                duoBridgeWin.postMessage({ type: 'DUO_SETTINGS_SNAPSHOT', data: duoSettingsSnapshot() }, '*');
            }
        } catch (e) {}
    };
    setTimeout(send, 300); setTimeout(send, 900); setTimeout(send, 1800);
}
// Komunikacja z plikiem HTML (file://) przez window.postMessage.
window.addEventListener('message', function (e) {
    const d = e && e.data;
    if (!d || typeof d !== 'object') return;
    const reply = (msg) => { try { if (e.source && e.source.postMessage) e.source.postMessage(msg, '*'); } catch (err) {} };
    if (d.type === 'DUO_SETTINGS_HELLO' || d.type === 'DUO_SETTINGS_PING') {
        reply({ type: 'DUO_SETTINGS_SNAPSHOT', data: duoSettingsSnapshot() });
        return;
    }
    if (d.type === 'DUO_SETTINGS_SET') {
        const items = (d.data && typeof d.data === 'object') ? d.data : null;
        if (!items) return;
        for (const k of Object.keys(items)) { try { duoApplySetting(k, items[k]); } catch (err) {} }
        ensureUI();
        setPrepareStatus('⚙️ Ustawienia zapisane z strony DUO');
        reply({ type: 'DUO_SETTINGS_SAVED', data: duoSettingsSnapshot() });
        return;
    }
});
function openDuoSettings(forceOpen) {
        const old = document.getElementById('duo-settings-host');
        if (old) { old.remove(); if (!forceOpen) return; }
        const host = document.createElement('div');
        host.id = 'duo-settings-host';
        const shadow = host.attachShadow({ mode: 'open' });
        const escHtml = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
        let html = `
            <style>
                :host { all: initial; }
                * { box-sizing: border-box; font: 13px/1.45 'Segoe UI', Arial, sans-serif; color: #222; }
                .panel { position: fixed; top: 12px; right: 12px; z-index: 2147483648; width: 600px; max-width: 96vw;
                         background: #fff; border: 1px solid #999; border-radius: 6px;
                         box-shadow: 0 4px 16px #0006; padding: 10px 12px; max-height: 92vh; overflow-y: auto; }
                h3 { margin: 0 0 6px; font-size: 14px; }
                h4 { margin: 10px 0 4px; font-size: 12px; }
                section { border-top: 1px solid #ddd; margin-top: 6px; padding-top: 4px; }
                label { display: block; margin: 6px 0; cursor: pointer; }
                input[type=checkbox] { width: 15px; height: 15px; cursor: pointer; vertical-align: middle; margin-right: 6px; }
                button { margin-top: 4px; padding: 3px 12px; cursor: pointer; }
                textarea { width: 100%; box-sizing: border-box; height: 70px; font: 11px monospace; padding: 4px; }
                .hint { color: #777; font-size: 10px; margin-top: 8px; }
                .scan-modes-row { display: flex; gap: 5px; margin: 6px 0 2px; }
                .scan-mode-btn { flex: 1; display: flex; flex-direction: column; align-items: center;
                    gap: 2px; padding: 6px 2px; margin: 0; border: 1px solid #ccc; border-radius: 5px;
                    background: #f3f3f3; cursor: pointer; font-size: 9px; color: #444; line-height: 1.1; }
                .scan-mode-btn .icon { font-size: 15px; }
                .row { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
                .tempo-row { display: flex; gap: 5px; margin: 6px 0 2px; }
                .tempo-btn { flex: 1; padding: 6px 2px; border: 1px solid #ccc; border-radius: 5px;
                    background: #f3f3f3; cursor: pointer; font-size: 9px; color: #444; line-height: 1.2; }
                .lb-row { display: flex; align-items: center; gap: 5px; border: 1px solid #ddd; border-radius: 3px; padding: 3px 5px; margin-bottom: 3px; }
            </style>
            <div class=panel>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
                    <h3 style="margin:0;">🔀 DUO — Ustawienia <span style="font-size:10px;color:#888;">v${SCRIPT_VERSION}</span></h3>
                    <button id=duo-open-page-btn style="margin-left:auto;padding:4px 10px;font-size:11px;">🌐 Otwórz stronę ustawień</button>
                </div>
                <div class=hint>🌐 Nowa, czytelna strona <b>DUO-ustawienia.html</b> — wszystkie opcje w jednym miejscu. Panel poniżej działa jak zawsze.</div>
                <section>
                    <h4>🖥️ Wygląd panelu</h4>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span style="font-size:11px;">Skala:</span>
                        <input type=range id=duo-ui-scale min="80" max="200" step="10" value="${Math.round(uiScale * 100)}" style="flex:1;">
                        <b id=duo-ui-scale-val style="font-size:12px;min-width:38px;text-align:right;">${Math.round(uiScale * 100)}%</b>
                    </div>
                    <div class=hint>Pasek panelu jest minimalny: tylko [▾] rozwiń i [ON/OFF]. Przeciągnij za pasek, aby przenieść panel.</div>
                </section>
                <section>
                    <h4>🔀 Aktywny silnik: <span style="color:#0a7a3d;">${getEngine().name}</span> (głos: ${selectedVoice})</h4>
                    <div class=row>
                        <button id=duo-eng-piper>⚡ Piper (8766)</button>
                        <button id=duo-eng-super>🔊 Supertonic (7000)</button>
                        <button id=duo-eng-xtts>🧬 XTTS (8000)</button>
                        <button id=duo-eng-matcha>🍵 Matcha PL (9000)</button>
                        <button id=duo-eng-omni>🌍 OmniVoice (9100)</button>
                        <button id=duo-eng-pocket>🥔 Pocket PL (9200)</button>
                        <button id=duo-eng-audio8>🎛️ Audio8 ONNX (9300)</button>
                    </div>
                    <div class=row style="align-items:center;">
                        <label style="display:flex;align-items:center;gap:4px;white-space:nowrap;"><input type=checkbox id=duo-comp ${compressorEnabled ? 'checked' : ''}> 🛡️ Anty-trzask</label>
                        <span style="font-size:11px;white-space:nowrap;">🚀 TurboBoost Lektora:</span>
                        <input type=range id=duo-gain min="${Math.round(SPEECH_GAIN_MIN * 100)}" max="${Math.round(SPEECH_GAIN_MAX * 100)}" step="5" value="${Math.round(speechGain * 100)}" style="flex:1;min-width:70px;">
                        <b id=duo-gain-val style="font-size:12px;min-width:36px;text-align:right;">${Math.round(speechGain * 100)}%</b>
                    </div>
                    <div class=hint>🚀 Powyżej 100% lektor gra głośniej ("turbo"). Sufit 200% i automatyczny kompresor anty-trzask powyżej 100%, żeby dźwięk nie warczał.</div>
                    <h4>🍵 Styl mowy (Matcha-TTS-PL)</h4>
                    <div class=row>
                        <select id=duo-style-sel-settings style="flex:1;min-width:0;height:26px;background:#0a1a0e;color:#dfd;border:1px solid #0a4;border-radius:4px;font:11px Arial;">
                        </select>
                    </div>
                    <div class=hint>Token stylu dodaje do głosu dodatkowy embedding: rozpiętość wysokości (flat/mid/wide) × tempo (slow/normal/fast) × pytanie (rosnąca końcówka). Działa tylko dla silnika 🍵 Matcha PL. Zapisuje się na stałe. Zwykła interpunkcja w napisach ("?") i tak steruje intonacją.</div>
                    <h4>🎚️ Kroki generowania (Supertonic)</h4>
                    <label style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
                        <input type=checkbox id=duo-dyn-steps ${dynamicSteps ? 'checked' : ''}> ⚡ Tryb dynamiczny (krótkie/średnie=6, długie=10)
                    </label>
                    <div style="display:flex;align-items:center;gap:8px;${dynamicSteps ? 'opacity:.4;' : ''}" id=duo-steps-row>
                        <span style="font-size:11px;">Stała liczba kroków:</span>
                        <input type=range id=duo-steps-slider min="1" max="16" step="1" value="${synthSteps}" style="flex:1;${dynamicSteps ? 'pointer-events:none;' : ''}">
                        <b id=duo-steps-val style="font-size:12px;min-width:22px;text-align:right;">${synthSteps}</b>
                    </div>
                    <div class=hint>Więcej kroków = ładniejszy głos, dłuższa synteza. „Auto" biblioteki = 8. Dotyczy tylko 🔊 Supertonic.</div>
                    <h4>🔇 Przerwa między zdaniami</h4>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span style="font-size:11px;">Cisza na końcu kwestii:</span>
                        <input type=range id=duo-gap-slider min="0" max="0.5" step="0.05" value="${speechGap}" style="flex:1;">
                        <b id=duo-gap-val style="font-size:12px;min-width:40px;text-align:right;">${speechGap.toFixed(2)}s</b>
                    </div>
                    <div class=hint>0 = kwestie sklejone na styk. Dotyczy tylko 🔊 Supertonic (serwer v2.2+).</div>
                </section>
                <section>
                    <h4>⏳ Bufor LIVE (opóźnienie lektora = zapas na przyszłość)</h4>
                    <div class=row>
                        <span style="font-size:11px;">Suwak w panelu głównym (0–120 min).</span>
                    </div>
                    <label><input type=checkbox id=duo-livebuf-on ${liveBufRecord ? 'checked' : ''}> 🗄️ Zapisuj nagrania bufora do pamięci (IndexedDB) — mogę je później odsłuchać lub usunąć</label>
                    <div class=row style="align-items:center;gap:6px;margin-top:4px;">
                        <span style="font-size:11px;">🕐 Nagrania z krótkiego bufora LIVE znikają po:</span>
                        <select id=duo-livebuf-ttl style="font-size:11px;">
                            <option value="0">bez zapisywania</option>
                            <option value="1">1 dniu</option>
                            <option value="2">2 dni</option>
                            <option value="3">3 dni</option>
                            <option value="7">7 dni</option>
                            <option value="14">14 dni</option>
                            <option value="30">30 dni</option>
                        </select>
                        <button id=duo-livebuf-purge-now title="Usuń od razu wszystko, co już po terminie">🧹 Wyczyść przeterminowane</button>
                    </div>
                    <div id=duo-livebuf-stats style="font-size:11px;color:#555;margin:4px 0;">Ładowanie nagrań...</div>
                    <div class=row>
                        <button id=duo-livebuf-refresh>🔄 Odśwież listę</button>
                        <button id=duo-livebuf-del-all>🗑 Usuń wszystkie nagrania</button>
                    </div>
                    <div id=duo-livebuf-list style="max-height:180px;overflow-y:auto;margin-top:4px;"></div>
                    <div class=hint>📁 Bufor <b>całego filmu</b> (przycisk 🚀 Hybryda lub plik z napisami) zapisuje się <b>na stałe</b> — zostaje, aż sam go usuniesz.<br>🌐 Krótki bufor <b>LIVE</b> (np. 15 min na zapas) jest tymczasowy i kasuje się sam po wybranym terminie powyżej. Stare nagrania sprzed tej zmiany dostają termin automatycznie.</div>
                </section>
                <section>
                    <h4>🎚️ Przesunięcie lektora (audio vs obraz)</h4>
                    <div class=row>
                        <button id=duo-off-b title="-1 sekunda">⏪</button>
                        <button id=duo-off-s title="-100 ms">◀️</button>
                        <b id=duo-off-val style="min-width:70px;text-align:center;">0 ms</b>
                        <button id=duo-off-sp title="+100 ms">▶️</button>
                        <button id=duo-off-bp title="+1 sekunda">⏩</button>
                        <button id=duo-off-reset title="Reset">↺ 0</button>
                    </div>
                    <div class=hint>⏪⏩ = ±1 sekunda (duże), ◀️▶️ = ±100 ms (małe). Plus = lektor czyta PÓŹNIEJ, minus = WCZEŚNIEJ względem filmu. Działa natychmiast w LIVE i Hybrydzie.</div>
                </section>
                <section>
                    <h4>⏩ Tempo lektora vs przyspieszenie wideo:</h4>
                    <div class="tempo-row">
                        ${TEMPO_MODES.map(m => `
                        <button type="button" class="tempo-btn${m.id === tempoMode ? ' active' : ''}"
                                data-duo-tempo="${m.id}" title="${m.hint}"
                                style="${m.id === tempoMode ? 'background:#0a7a3d;border-color:#0a7a3d;color:#fff;font-weight:bold;' : ''}">${m.label}</button>`).join('')}
                    </div>
                    <div class=hint>Przy tempie >1.15× mowa jest GENEROWANA przyspieszona u serwera. Zmiana tempa = nowy wpis w cache (Hybryda).</div>
                </section>
                <section>
                    <label style="margin-bottom:2px;">🔍 Tryb skanowania napisów (LIVE):</label>
                    <div class="scan-modes-row">
                        ${SCAN_MODES.map(m => `
                        <button type="button" class="scan-mode-btn${m.id === scanMode ? ' active' : ''}"
                                data-duo-scan-mode="${m.id}" title="${m.title}"
                                style="${m.id === scanMode ? 'background:#0a7a3d;border-color:#0a7a3d;color:#fff;font-weight:bold;' : ''}">
                            <span class="icon">${m.icon}</span><span>${m.label}</span>
                        </button>`).join('')}
                    </div>
                    <div class="hint">Tylko jeden tryb aktywny naraz — klik na inny automatycznie wyłącza poprzedni.</div>
                </section>
                <section>`;
        for (const item of SETTINGS_FLAGS) {
            html += `
                <label><input type=checkbox data-duo-flag="${item.key}" ${getFlag(item.key) ? 'checked' : ''}> ${item.label}</label>`;
        }
        html += `
                </section>
                <section>
                    <h4>📋 Biała lista domen (pusta = działa WSZĘDZIE)</h4>
                    <textarea id=duo-wl-text placeholder="np.:&#10;netflix.com&#10;youtube.com"></textarea>
                    <h4>⛔ Czarna lista domen (całkowita blokada — priorytet)</h4>
                    <textarea id=duo-bl-text placeholder="np.:&#10;facebook.com&#10;allegro.pl"></textarea>
                    <div class=row>
                        <button id=duo-save-lists>💾 Zapisz listy</button>
                        <button id=duo-add-wl>➕ Bieżąca → biała</button>
                        <button id=duo-add-bl>➕ Bieżąca → czarna</button>
                    </div>
                    <button id=duo-toggle-pause style="width:100%;margin-top:8px;">⏸️ Pauza napisów live na tej domenie: ${scanPaused ? 'WŁĄCZONA' : 'wyłączona'}</button>
                    <div class=hint>SYNC (Hybryda/Plik) to akcje ręczne — pauza dotyczy trybu LIVE. Zmiana stanu tej strony przeładowuje stronę.</div>
                </section>
                <section>
                    <h4>🧪 Kreator napisów — własne źródła (priorytet) dla: <span style="color:#0a7a3d;">${escHtml(HOST)}</span></h4>
                    <div style="display:flex;gap:6px;">
                        <input id=duo-cs-input placeholder=".selektor-kontenera-napisow" style="flex:1;font:11px monospace;padding:3px;">
                        <button id=duo-cs-add>💾 Dodaj</button>
                    </div>
                    <div class=row>
                        <button id=duo-cs-test>🧪 Testuj selektor</button>
                        <button id=duo-cs-pick title="Kliknij potem w napisy na ekranie">🎯 Wskaż myszką</button>
                        <button id=duo-cs-profiler title="Obserwuje stronę 15 s — odtwórz wideo z napisami">🧠 Auto-wykrywanie</button>
                    </div>
                    <div id=duo-cs-test-result style="font-size:10px;color:#555;margin-top:4px;word-break:break-word;"></div>
                    <div id=duo-cs-list style="margin-top:6px;"></div>
                    <label><input type=checkbox id=duo-cs-enabled> Używaj własnych źródeł na tej domenie (priorytet)</label>
                    <label><input type=checkbox id=duo-prof-pl ${gmGet(PROF_PL_KEY) !== 'false' ? 'checked' : ''}> 🇵🇱 Priorytet tekstu polskiego w auto-wykrywaniu</label>
                    <div class=hint>Własne źródła mają najwyższy priorytet w trybie LIVE.</div>
                    <button id=duo-cs-viewall style="width:100%;margin-top:6px;">📋 Podgląd wszystkich zapisanych domen</button>
                    <div id=duo-cs-all-list style="margin-top:6px;display:none;max-height:220px;overflow-y:auto;"></div>
                </section>
                <section>
                    <h4>🔎 Szukaj tekstu w kontenerze (DOM)</h4>
                    <div style="display:flex;gap:6px;">
                        <input id=duo-find-input placeholder="wpisz szukane słowo lub zdanie..." style="flex:1;font:11px Arial;padding:3px;">
                        <button id=duo-find-btn>🔎 Szukaj</button>
                    </div>
                    <div id=duo-find-result style="font-size:10px;color:#ccc;margin-top:4px;max-height:160px;overflow-y:auto;"></div>
                    <div class=hint>Znajduje na stronie element zawierający ten tekst, zaznacza jego kontener na niebiesko i pokazuje klasę/ID/znacznik — bez otwierania konsoli.</div>
                </section>
                <section>
                    <h4>💾 Ustawienia — eksport / import</h4>
                    <div class=row>
                        <button id=duo-export>📤 Eksportuj do pliku</button>
                        <button id=duo-import-btn>📥 Importuj z pliku</button>
                    </div>
                    <input type=file id=duo-import-file accept=".json,application/json" style="display:none;">
                </section>
                <section>
                    <h4>🌐 Tłumaczenie sieciowe (eksperyment — jak „Lektor Google RPC”)</h4>
                    <div class=row><span style="font-size:11px;white-space:nowrap;">Silnik:</span>
                        <select id=duo-exttr-engine style="flex:1;min-width:0;height:24px;">
                            <option value="lokalny">Lokalny Translator Chrome (bez sieci)</option>
                            <option value="rotacja">Rotacja: Google → Bing → DeepL → AI</option>
                            <option value="google">Google</option>
                            <option value="gtab">Google — karta Tłumacza</option>
                            <option value="bing">Bing</option>
                            <option value="deepl">DeepL</option>
                            <option value="ai">AI (gpt-oss-20b-free)</option>
                        </select>
                    </div>
                    <label><input type=checkbox id=duo-exttr-rpc> Google RPC — nowa metoda (limiter jak Immersive)</label>
                    <label><input type=checkbox id=duo-exttr-msbatch> Microsoft/Bing — tryb batch (czysta tablica)</label>
                    <label><input type=checkbox id=duo-exttr-stop> Zatrzymaj tłumaczenie razem z lektorem</label>
                    <label><input type=checkbox id=duo-exttr-autosubs> Automatycznie tłumacz całe napisy (plik, Netflix, YouTube)</label>
                    <div class=row style="margin-top:4px;">
                        <span style="font-size:11px;">Porcja:</span>
                        <select id=duo-exttr-chunk style="height:22px;">
                            <option value="100">100 wyrazów</option><option value="300">300 wyrazów</option>
                            <option value="400">400 wyrazów</option><option value="mieszane">Mieszane (100/300/400)</option>
                        </select>
                        <span style="font-size:11px;">Odstęp:</span>
                        <select id=duo-exttr-int style="height:22px;">
                            <option value="20s">20 s</option><option value="30s">30 s</option><option value="1min">1 min</option>
                            <option value="5min">5 min</option><option value="10min">10 min</option>
                        </select>
                    </div>
                    <div class=hint>Porcja/odstęp dotyczy tłumaczenia CAŁYCH list napisów (YouTube/plik/Netflix) — pojedyncze kwestie LIVE idą od razu.</div>
                    <label style="margin-top:4px;"><input type=checkbox id=duo-ai-on> Silnik AI w rotacji (wymaga klucza)</label>
                    <input type=password id=duo-ai-key placeholder="Klucz API AI (np. CometAPI)" style="width:100%;box-sizing:border-box;height:24px;margin-top:2px;">
                    <div class=row style="margin-top:4px;">
                        <button id=duo-exttr-test>🧪 Przetłumacz test</button>
                        <span id=duo-exttr-status style="font-size:10px;color:#555;"></span>
                    </div>
                    <div class=hint>„lokalny” = nic się nie zmienia (jak dotąd). Reszta wymaga sieci; wpisywane zapytania nie zawierają tekstu filmu — tylko kwestie, które lektor ma przeczytać.</div>
                </section>
                <section>
                    <h4>🔍 Łowca napisów</h4>
                    <label><input type=checkbox id=duo-lowca-gui> Pokazuj GUI Łowcy (okno z kandydatami)</label>
                    <button id=duo-lowca-run style="width:100%;">🔍 Szukaj napisów na tej stronie (15 s)</button>
                    <div class=hint>Zapamiętane domeny: <span id=duo-lowca-sites>—</span>. Bez GUI Łowca sam zapisuje najlepsze źródło do Kreatora napisów i startuje cicho przy kolejnej wizycie (gdy lektor włączony).</div>
                </section>
                <section>
                    <h4>🌐 Szukaj w bazach napisów</h4>
                    <div class=row>
                        <input id=duo-db-query placeholder="tytuł filmu / serialu" style="flex:1;min-width:0;height:24px;">
                        <input id=duo-db-season type=number min=0 placeholder="S" title="Sezon (puste = film)" style="width:44px;height:24px;">
                        <input id=duo-db-episode type=number min=0 placeholder="E" title="Odcinek" style="width:44px;height:24px;">
                    </div>
                    <div class=row style="margin-top:4px;">
                        <select id=duo-db-lang style="flex:1;height:24px;">
                            <option value="pl,en">Polskie, potem angielskie</option>
                            <option value="pl">Tylko polskie</option>
                            <option value="en">Tylko angielskie (tłumaczę)</option>
                        </select>
                        <button id=duo-db-search>🔍 Szukaj w bazach</button>
                    </div>
                    <div id=duo-db-results style="display:none;max-height:200px;overflow:auto;margin-top:6px;border:1px solid #ddd;border-radius:4px;"></div>
                    <div class=row style="margin-top:4px;">
                        <input type=password id=duo-db-oskey placeholder="Klucz OpenSubtitles.com (darmowy)" style="flex:1;min-width:0;height:24px;">
                        <input type=password id=duo-db-subdlkey placeholder="Klucz SubDL (darmowy)" style="flex:1;min-width:0;height:24px;">
                    </div>
                    <div class=hint>OpenSubtitles.org działa od razu, bez klucza. Klik w wynik = pobranie i wczytanie napisów do lektora (niepolskie tłumacz wg opcji wyżej).</div>
                </section>
                <section>
                    <h4>🤖 AI Subtitle Translator</h4>
                    <div class=row>
                        <input type=file id=ait-file accept=".srt,.vtt,.sbv,.txt" style="display:none;">
                        <button id=ait-file-btn>📂 Wybierz plik</button>
                        <span id=ait-file-name style="font-size:11px;color:#777;">brak pliku</span>
                    </div>
                    <div class=row style="margin-top:4px;">
                        <select id=ait-lang style="flex:1;min-width:0;height:24px;"></select>
                        <select id=ait-engine style="flex:1;min-width:0;height:24px;">
                            <option value="translator">Translator Chrome — szybki, offline</option>
                            <option value="prompt">Prompt AI (Gemini Nano) — z Twoim promptem</option>
                            <option value="gtab">Google — karta Tłumacza (z filtrem numerów)</option>
                        </select>
                        <button id=ait-check title="Sprawdź dostępność modeli">🔍</button>
                    </div>
                    <div id=ait-model-status style="font-size:10px;color:#777;">—</div>
                    <textarea id=ait-prompt placeholder="Własny prompt / instrukcja dla Prompt AI…" style="min-height:52px;margin-top:4px;"></textarea>
                    <textarea id=ait-content placeholder="Tutaj pojawią się wczytane napisy lub wynik tłumaczenia…" style="min-height:150px;"></textarea>
                    <div class=row style="margin-top:4px;">
                        <button id=ait-go>🤖 Tłumacz</button>
                        <button id=ait-stop style="display:none;">⏹ Stop</button>
                        <button id=ait-dl>⬇ Pobierz .srt</button>
                        <button id=ait-lektor>🔊 Wczytaj do lektora</button>
                    </div>
                    <div id=ait-status style="font-size:10px;color:#555;margin-top:4px;">—</div>
                    <div class=row>
                        <button id=ait-mem-export>📤 Pamięć tłumaczeń</button>
                        <button id=ait-mem-clear>🗑 Wyczyść pamięć</button>
                    </div>
                    <div class=hint>Numery i czasy kwestii zostają bez zmian. Prompt AI trzyma kontekst; Translator ignoruje prompt.</div>
                </section>
                <button id=duo-spoken-btn>📺 Napisy lektora + 🚫 Blokady</button>
                <button id=duo-close>Zamknij</button>
            </div>`;
        shadow.innerHTML = html;
        document.body.appendChild(host);
        reparentDuoUI();

        shadow.getElementById('duo-close').onclick = () => host.remove();
        // Otwarcie osobnej strony HTML z ustawieniami.
        const openPageBtn = shadow.getElementById('duo-open-page-btn');
        if (openPageBtn) openPageBtn.onclick = () => openDuoSettingsPage();

        shadow.getElementById('duo-ui-scale').addEventListener('input', (e) => {
            uiScale = parseInt(e.target.value, 10) / 100;
            saveUiScale();
            shadow.getElementById('duo-ui-scale-val').textContent = e.target.value + '%';
            ensureUI();
        });

        shadow.getElementById('duo-eng-piper').onclick = () => {
            if (currentEngineId === 'piper') { setPrepareStatus('⚡ Piper już aktywny.'); return; }
            host.remove();
            switchEngine('piper');
        };
        shadow.getElementById('duo-eng-super').onclick = () => {
            if (currentEngineId === 'supertonic') { setPrepareStatus('🔊 Supertonic już aktywny.'); return; }
            host.remove();
            switchEngine('supertonic');
        };
        shadow.getElementById('duo-eng-xtts').onclick = () => {
            if (currentEngineId === 'xtts') { setPrepareStatus('🧬 XTTS już aktywny.'); return; }
            host.remove();
            switchEngine('xtts');
        };
        shadow.getElementById('duo-eng-matcha').onclick = () => {
            if (currentEngineId === 'matcha') { setPrepareStatus('🍵 Matcha PL już aktywny.'); return; }
            host.remove();
            switchEngine('matcha');
        };
        shadow.getElementById('duo-eng-omni').onclick = () => {
            if (currentEngineId === 'omnivoice') { setPrepareStatus('🌍 OmniVoice już aktywny.'); return; }
            host.remove();
            switchEngine('omnivoice');
        };
        shadow.getElementById('duo-eng-pocket').onclick = () => {
            if (currentEngineId === 'pocket') { setPrepareStatus('🥔 Pocket PL już aktywny.'); return; }
            host.remove();
            switchEngine('pocket');
        };
        shadow.getElementById('duo-eng-audio8').onclick = () => {
            if (currentEngineId === 'audio8') { setPrepareStatus('🎛️ Audio8 ONNX już aktywny.'); return; }
            host.remove();
            switchEngine('audio8');
        };
        // Styl Matcha w oknie ustawień (ten sam mechanizm co w głównym panelu)
        const mStyle = shadow.getElementById('duo-style-sel-settings');
        if (mStyle) {
            if (!mStyle.options.length) {
                MATCHA_STYLES.forEach((label, idx) => {
                    const o = document.createElement('option');
                    o.value = String(idx - 1);
                    o.textContent = (idx === 0 ? '— ' : idx + '. ') + label;
                    mStyle.appendChild(o);
                });
            }
            mStyle.value = String(matchaStyle);
            mStyle.addEventListener('change', () => {
                matchaStyle = parseInt(mStyle.value, 10);
                saveMatchaStyle();
                setPrepareStatus('🍵 Styl Matcha: ' + (matchaStyle < 0 ? 'bez stylu' : MATCHA_STYLES[matchaStyle]));
            });
        }
        shadow.getElementById('duo-comp').addEventListener('change', (e) => {
            compressorEnabled = e.target.checked;
            localStorage.setItem('duo_Compressor', String(compressorEnabled));
            buildAudioChain();
            setPrepareStatus(compressorEnabled ? '🛡️ Kompresor WŁĄCZONY (anty-trzask)' : '🛡️ Kompresor WYŁĄCZONY');
        });
        shadow.getElementById('duo-gain').addEventListener('input', (e) => {
            const pct = parseInt(e.target.value, 10);
            applySpeechGain(pct / 100);
            shadow.getElementById('duo-gain-val').textContent = pct + '%';
            const compCb = shadow.getElementById('duo-comp');
            if (compCb) compCb.checked = compressorEnabled;
        });

        shadow.getElementById('duo-dyn-steps').addEventListener('change', (e) => {
            dynamicSteps = e.target.checked;
            localStorage.setItem('duo_DynamicSteps', String(dynamicSteps));
            const row = shadow.getElementById('duo-steps-row');
            const slider = shadow.getElementById('duo-steps-slider');
            row.style.opacity = dynamicSteps ? '.4' : '1';
            slider.style.pointerEvents = dynamicSteps ? 'none' : 'auto';
            setPrepareStatus(dynamicSteps ? '⚡ Kroki DYNAMICZNE (6/6/10)' : '🎚️ Kroki STAŁE: ' + synthSteps);
        });
        shadow.getElementById('duo-steps-slider').addEventListener('input', (e) => {
            synthSteps = parseInt(e.target.value, 10);
            localStorage.setItem('duo_SynthSteps', String(synthSteps));
            shadow.getElementById('duo-steps-val').textContent = String(synthSteps);
        });
        shadow.getElementById('duo-gap-slider').addEventListener('input', (e) => {
            speechGap = parseFloat(e.target.value);
            saveSpeechGap();
            shadow.getElementById('duo-gap-val').textContent = speechGap.toFixed(2) + 's';
        });

        // --- v3.6: Bufor LIVE — nagrania ---
        shadow.getElementById('duo-livebuf-on').addEventListener('change', (e) => {
            liveBufRecord = e.target.checked;
            localStorage.setItem(LIVEBUF_ON_KEY, String(liveBufRecord));
            setPrepareStatus(liveBufRecord ? '🗄️ Zapis nagrań bufora WŁĄCZONY' : '🗄️ Zapis nagrań bufora WYŁĄCZONY');
        });
        // Termin waznosci dla krotkiego bufora LIVE (bufor calego filmu
        // z pliku jest zawsze trwaly i tego nie dotyczy).
        const ttlSel = shadow.getElementById('duo-livebuf-ttl');
        ttlSel.value = String(liveBufTTLDays());
        ttlSel.addEventListener('change', async () => {
            saveLiveBufTTLDays(parseInt(ttlSel.value, 10) || 0);
            // Przy zmianie terminu od razu sprzątamy to, co juz po terminie.
            const n = await liveBufPurgeExpired();
            renderLiveBufSection();
            const d = liveBufTTLDays();
            setPrepareStatus(d <= 0
                ? '🕐 Bufor LIVE: zapisywanie wyłączone (bufor całego filmu nadal się zapisuje)'
                : '🕐 Bufor LIVE: nagrania znikną po ' + d + (d === 1 ? ' dniu' : ' dniach')
                  + (n ? ' • usunięto ' + n + ' przeterminowanych' : ''));
        });
        shadow.getElementById('duo-livebuf-purge-now').onclick = async () => {
            const n = await liveBufPurgeExpired();
            renderLiveBufSection();
            setPrepareStatus(n ? ('🧹 Usunięto ' + n + ' przeterminowanych nagrań') : '🧹 Nie ma przeterminowanych nagrań');
        };
        function renderLiveBufSection() {
            const stats = shadow.getElementById('duo-livebuf-stats');
            const list = shadow.getElementById('duo-livebuf-list');
            liveBufList().then(items => {
                let bytes = 0;
                items.forEach(it => { try { bytes += (it.audio && (it.audio.size || it.audio.byteLength)) || 0; } catch (e) {} });
                stats.textContent = items.length
                    ? ('🗄️ Nagranych kwestii: ' + items.length + ' • razem ~' + (bytes / 1048576).toFixed(1) + ' MB')
                    : '🗄️ Brak nagrań. Wystarczy włączyć tryb 🌐 LIVE lub wczytać plik z napisami — każda wygenerowana kwestia zapisuje się tutaj.';
                list.innerHTML = '';
                if (!items.length) return;
                items.forEach(it => {
                    const row = document.createElement('div');
                    row.className = 'lb-row';
                    const play = document.createElement('button');
                    play.textContent = '▶';
                    play.style.cssText = 'padding:1px 8px;margin:0;font-size:11px;';
                    play.onclick = () => {
                        try {
                            const u = URL.createObjectURL(it.audio);
                            const a = new Audio(u);
                            a.onended = () => { try { URL.revokeObjectURL(u); } catch (e) {} };
                            a.play();
                        } catch (e) {}
                    };
                    const info = document.createElement('div');
                    info.style.cssText = 'flex:1;min-width:0;';
                    const t1 = document.createElement('div');
                    t1.style.cssText = 'font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
                    t1.textContent = it.text || '(bez tekstu)';
                    t1.title = it.text || '';
                    const t2 = document.createElement('div');
                    t2.style.cssText = 'font-size:9px;color:#888;';
                    t2.textContent = new Date(it.date).toLocaleString() + ' • ' + (it.source === 'file' ? '📁 plik' : '🌐 live')
                        + ' • ' + (it.engine || '?') + '/' + (it.voice || '?')
                        + (it.expires ? ' • ⏳ do ' + new Date(it.expires).toLocaleDateString() : '');
                    info.appendChild(t1); info.appendChild(t2);
                    const del = document.createElement('button');
                    del.textContent = '🗑';
                    del.style.cssText = 'padding:1px 6px;margin:0;font-size:11px;';
                    del.onclick = async () => { await liveBufDelete(it.key); renderLiveBufSection(); };
                    row.appendChild(play); row.appendChild(info); row.appendChild(del);
                    list.appendChild(row);
                });
            }).catch(() => { stats.textContent = '⚠️ Błąd odczytu nagrań.'; });
        }
        renderLiveBufSection();
        shadow.getElementById('duo-livebuf-refresh').onclick = renderLiveBufSection;
        shadow.getElementById('duo-livebuf-del-all').onclick = async () => {
            if (confirm('Usunąć WSZYSTKIE nagrania bufora?')) {
                await liveBufDeleteAll();
                renderLiveBufSection();
                setPrepareStatus('🗑 Usunięto wszystkie nagrania bufora');
            }
        };

        // --- v3.6: strzałki przesunięcia ---
        const offVal = shadow.getElementById('duo-off-val');
        const offLbl = () => {
            offVal.textContent = (audioOffsetMs >= 0 ? '+' : '') + (audioOffsetMs / 1000).toFixed(2) + ' s';
        };
        offLbl();
        const offBtns = [['duo-off-b', -1000], ['duo-off-s', -100], ['duo-off-sp', 100], ['duo-off-bp', 1000]];
        offBtns.forEach(([id, delta]) => {
            shadow.getElementById(id).onclick = () => {
                audioOffsetMs += delta; clampOffset(); saveAudioOffsetMs(); offLbl();
                if (imtLektorEnabled) scheduleImmersivePlay();
                setPrepareStatus('🎚️ Przesunięcie lektora: ' + (audioOffsetMs >= 0 ? '+' : '') + (audioOffsetMs / 1000).toFixed(2) + ' s');
            };
        });
        shadow.getElementById('duo-off-reset').onclick = () => {
            audioOffsetMs = 0; saveAudioOffsetMs(); offLbl();
            if (imtLektorEnabled) scheduleImmersivePlay();
            setPrepareStatus('🎚️ Przesunięcie zresetowane do 0');
        };

        // --- Tempo A/B/C ---
        shadow.querySelectorAll('[data-duo-tempo]').forEach(btn => {
            btn.addEventListener('click', () => {
                tempoMode = btn.dataset.duoTempo;
                saveTempoMode();
                shadow.querySelectorAll('[data-duo-tempo]').forEach(b => {
                    const active = b.dataset.duoTempo === tempoMode;
                    b.style.background = active ? '#0a7a3d' : '#f3f3f3';
                    b.style.borderColor = active ? '#0a7a3d' : '#ccc';
                    b.style.color = active ? '#fff' : '#444';
                    b.style.fontWeight = active ? 'bold' : 'normal';
                });
                setPrepareStatus('⏩ Tempo: wariant ' + tempoMode
                    + ' — bufor zawsze zapisywany 1.0x, wariant steruje tylko odtwarzaniem');
            });
        });

        shadow.querySelectorAll('[data-duo-scan-mode]').forEach(btn => {
            btn.addEventListener('click', () => { setupScanMode(btn.dataset.duoScanMode); });
        });

        shadow.querySelectorAll('input[data-duo-flag]').forEach(cb => {
            cb.addEventListener('change', () => {
                const key = cb.dataset.duoFlag;
                setFlag(key, cb.checked);
                const apply = FLAG_APPLY[key];
                if (apply) apply(cb.checked);
            });
        });

        const wlText = shadow.getElementById('duo-wl-text');
        const blText = shadow.getElementById('duo-bl-text');
        wlText.value = String(gmGet(WL_KEY) || '');
        blText.value = String(gmGet(BL_KEY) || '');
        shadow.getElementById('duo-save-lists').onclick = () => { gmSet(WL_KEY, wlText.value); gmSet(BL_KEY, blText.value); applyDomainListsAndMaybeReload(); };
        shadow.getElementById('duo-add-wl').onclick = () => {
            const cur = parseDomainList(wlText.value);
            if (!cur.includes(HOST)) cur.push(HOST);
            wlText.value = cur.join('\n'); gmSet(WL_KEY, wlText.value);
            applyDomainListsAndMaybeReload();
        };
        shadow.getElementById('duo-add-bl').onclick = () => {
            const cur = parseDomainList(blText.value);
            if (!cur.includes(HOST)) cur.push(HOST);
            blText.value = cur.join('\n'); gmSet(BL_KEY, blText.value);
            applyDomainListsAndMaybeReload();
        };
        shadow.getElementById('duo-toggle-pause').onclick = (e) => {
            toggleScanPauseForHost();
            e.target.textContent = '⏸️ Pauza napisów live na tej domenie: ' + (scanPaused ? 'WŁĄCZONA' : 'wyłączona');
        };

        const csInput = shadow.getElementById('duo-cs-input');
        const csOut = shadow.getElementById('duo-cs-test-result');
        function renderSubtitleSourcesUI() {
            const listEl = shadow.getElementById('duo-cs-list');
            const enabledCb = shadow.getElementById('duo-cs-enabled');
            const entry = getSubSourcesForHost(HOST);
            const has = !!(entry && entry.selectors && entry.selectors.length);
            enabledCb.checked = !!(entry && entry.enabled);
            listEl.innerHTML = '';
            if (!has) {
                const d = document.createElement('div');
                d.style.cssText = 'color:#999;font:10px Arial;padding:2px 0;';
                d.textContent = 'Brak własnych źródeł na tej domenie (używane są standardowe mechanizmy).';
                listEl.appendChild(d);
                return;
            }
            entry.selectors.forEach(sel => {
                const row = document.createElement('div');
                row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;background:#f3f6ff;border:1px solid #bcd;border-radius:3px;padding:2px 5px;margin-bottom:3px;';
                const span = document.createElement('span');
                span.style.cssText = 'font:10px monospace;color:#335;word-break:break-all;';
                span.textContent = sel;
                const del = document.createElement('button');
                del.textContent = '❌';
                del.style.cssText = 'background:none;border:none;color:#c33;cursor:pointer;font:11px Arial;padding:0 4px;';
                del.onclick = () => { removeSubSourceSelector(HOST, sel); renderSubtitleSourcesUI(); setPrepareStatus('🗑 Usunięto własne źródło napisów'); };
                row.appendChild(span); row.appendChild(del);
                listEl.appendChild(row);
            });
        }
        renderSubtitleSourcesUI();

        function renderAllHostsUI() {
            const allBox = shadow.getElementById('duo-cs-all-list');
            const all = getSubSources();
            const hosts = Object.keys(all);
            allBox.innerHTML = '';
            if (!hosts.length) {
                const d = document.createElement('div');
                d.style.cssText = 'color:#999;font:10px Arial;padding:2px 0;';
                d.textContent = 'Nic jeszcze nie zapisano na żadnej domenie.';
                allBox.appendChild(d);
                return;
            }
            hosts.sort().forEach(h => {
                const entry = all[h];
                const card = document.createElement('div');
                card.style.cssText = 'background:#1a1a1a;border:1px solid ' + (h === HOST ? '#0a7a3d' : '#444') + ';border-radius:4px;padding:5px;margin-bottom:5px;';

                const head = document.createElement('div');
                head.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;margin-bottom:3px;';
                const nameSpan = document.createElement('span');
                nameSpan.style.cssText = 'font:bold 11px Arial;color:' + (h === HOST ? '#0f7a3d' : '#8cf') + ';';
                nameSpan.textContent = (h === HOST ? '🟢 ' : '') + h;
                const enCb = document.createElement('input');
                enCb.type = 'checkbox';
                enCb.checked = !!entry.enabled;
                enCb.title = 'Używaj własnych źródeł na tej domenie';
                enCb.onchange = () => { setSubSourcesEnabled(h, enCb.checked); if (h === HOST) renderSubtitleSourcesUI(); };
                const delHostBtn = document.createElement('button');
                delHostBtn.textContent = '🗑 Usuń domenę';
                delHostBtn.style.cssText = 'font-size:9px;padding:1px 5px;';
                delHostBtn.onclick = () => {
                    if (!confirm('Usunąć wszystkie zapisane selektory dla „' + h + '"?')) return;
                    removeSubSourceHost(h);
                    renderAllHostsUI();
                    if (h === HOST) renderSubtitleSourcesUI();
                };
                head.appendChild(nameSpan);
                head.appendChild(enCb);
                head.appendChild(delHostBtn);
                card.appendChild(head);

                (entry.selectors || []).forEach(sel => {
                    const row = document.createElement('div');
                    row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;background:#111;border:1px solid #333;border-radius:3px;padding:2px 4px;margin-bottom:2px;';
                    const span = document.createElement('span');
                    span.style.cssText = 'font:10px monospace;color:#bcd;word-break:break-all;';
                    span.textContent = sel;
                    const del = document.createElement('button');
                    del.textContent = '❌';
                    del.style.cssText = 'background:none;border:none;color:#c33;cursor:pointer;font:11px Arial;padding:0 4px;';
                    del.onclick = () => {
                        removeSubSourceSelector(h, sel);
                        renderAllHostsUI();
                        if (h === HOST) renderSubtitleSourcesUI();
                    };
                    row.appendChild(span); row.appendChild(del);
                    card.appendChild(row);
                });
                allBox.appendChild(card);
            });
        }
        shadow.getElementById('duo-cs-viewall').onclick = () => {
            const allBox = shadow.getElementById('duo-cs-all-list');
            const willShow = allBox.style.display === 'none';
            allBox.style.display = willShow ? 'block' : 'none';
            if (willShow) renderAllHostsUI();
        };
        shadow.getElementById('duo-cs-test').onclick = () => {
            const sel = csInput.value.trim();
            if (!sel) { csOut.textContent = '⚠️ Wpisz najpierw selektor.'; return; }
            let nodes;
            try { nodes = document.querySelectorAll(sel); }
            catch (e) { csOut.textContent = '❌ Nieprawidłowy selektor CSS: ' + e.message; return; }
            const texts = [];
            nodes.forEach(n => { if (isVisibleElement(n)) { const t = (n.innerText || n.textContent || '').replace(/\s+/g, ' ').trim(); if (t) texts.push(t); } });
            if (!texts.length) csOut.textContent = '— nic nie znalazł (napisy muszą być widoczne) —';
            else {
                const joined = texts.join(' | ');
                const plMark = isPolishTextHeuristic(joined) ? ' 🇵🇱 (wygląda na polski)' : '';
                csOut.textContent = '✅ Łapie: „' + joined.slice(0, 200) + '"' + plMark;
            }
        };
        shadow.getElementById('duo-cs-add').onclick = () => {
            const sel = csInput.value.trim();
            if (!sel) { csOut.textContent = '⚠️ Wpisz selektor.'; return; }
            try { document.querySelectorAll(sel); }
            catch (e) { csOut.textContent = '❌ Nieprawidłowy selektor CSS.'; return; }
            addSubSourceSelector(HOST, sel);
            csInput.value = '';
            renderSubtitleSourcesUI();
            csOut.textContent = '✅ Dodano źródło (priorytet na tej domenie).';
        };
        shadow.getElementById('duo-cs-pick').onclick = () => { host.remove(); startPicker(); };
        shadow.getElementById('duo-cs-profiler').onclick = () => { host.remove(); startSubtitleProfiler(); };

        // --- 🔎 SZUKAJ TEKSTU W DOM (jak ręczny snippet z konsoli, tylko w panelu) ---
        const findInput = shadow.getElementById('duo-find-input');
        const findOut = shadow.getElementById('duo-find-result');
        let findHighlighted = [];
        function clearFindHighlights() {
            findHighlighted.forEach(el => { try { el.style.outline = ''; el.style.outlineOffset = ''; } catch (e) {} });
            findHighlighted = [];
        }
        function runDomFind() {
            clearFindHighlights();
            const szukaneZdanie = findInput.value.trim();
            findOut.innerHTML = '';
            if (!szukaneZdanie) { findOut.textContent = '⚠️ Wpisz najpierw słowo lub zdanie.'; return; }

            const trafienia = [];
            const wzorzec = szukaneZdanie.replace(/\s+/g, ' ').trim().toLowerCase();
            document.querySelectorAll('body *').forEach(el => {
                if (el.children.length === 0 && el.textContent) {
                    const tekstEl = el.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
                    if (tekstEl.includes(wzorzec)) {
                        let kontener = el.parentElement;
                        while (kontener && !kontener.className && !kontener.id && kontener !== document.body) {
                            kontener = kontener.parentElement;
                        }
                        if (kontener) trafienia.push({ el, kontener });
                    }
                }
            });

            if (!trafienia.length) {
                findOut.textContent = '❌ Nie znaleziono „' + szukaneZdanie + '" na stronie.';
                return;
            }

            // Podświetl WSZYSTKIE znalezione kontenery na niebiesko naraz
            trafienia.forEach(({ kontener }) => {
                kontener.style.outline = '3px solid #2196f3';
                kontener.style.outlineOffset = '1px';
                findHighlighted.push(kontener);
            });
            try { trafienia[0].kontener.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {}

            findOut.appendChild(document.createTextNode('✅ Znaleziono ' + trafienia.length + ' miejsce(a):'));
            trafienia.forEach(({ kontener }, i) => {
                const klasaTxt = kontener.className && typeof kontener.className === 'string' ? kontener.className : '(brak)';
                const idTxt = kontener.id || '(brak)';
                const row = document.createElement('div');
                row.style.cssText = 'background:#222;border:1px solid #444;border-radius:3px;padding:4px;margin-top:4px;';
                row.innerHTML =
                    '<div>#' + (i + 1) + ' &lt;' + kontener.tagName.toLowerCase() + '&gt;</div>' +
                    '<div>Klasa: <code style="color:#8cf;">' + escHtml(klasaTxt) + '</code></div>' +
                    '<div>ID: <code style="color:#8cf;">' + escHtml(idTxt) + '</code></div>';
                const useBtn = document.createElement('button');
                useBtn.textContent = '➡️ Użyj jako selektor';
                useBtn.style.cssText = 'margin-top:3px;';
                useBtn.onclick = () => {
                    csInput.value = generateSelectorFor(kontener);
                    csInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    csInput.focus();
                };
                row.appendChild(useBtn);
                findOut.appendChild(row);
            });
        }
        shadow.getElementById('duo-find-btn').onclick = runDomFind;
        findInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') runDomFind(); });
        shadow.getElementById('duo-cs-enabled').addEventListener('change', (e) => {
            setSubSourcesEnabled(HOST, e.target.checked);
            setPrepareStatus(e.target.checked ? '🧪 Własne źródła WŁĄCZONE na tej domenie' : '🧪 Własne źródła WYŁĄCZONE');
        });
        shadow.getElementById('duo-prof-pl').addEventListener('change', (e) => {
            gmSet(PROF_PL_KEY, e.target.checked);
            setPrepareStatus(e.target.checked ? '🇵🇱 Priorytet polskiego WŁĄCZONY' : '🌐 Priorytet polskiego WYŁĄCZONY');
        });

        shadow.getElementById('duo-export').onclick = exportAllSettings;
        shadow.getElementById('duo-import-btn').onclick = () => shadow.getElementById('duo-import-file').click();
        shadow.getElementById('duo-import-file').addEventListener('change', (e) => {
            const f = e.target.files && e.target.files[0];
            if (f) importAllSettings(f);
        });

        // --- EXT-TR: handlery sekcji panelu (port opcji rozszerzenia) -------
        try {
            const extTrEl = (id) => shadow.getElementById(id);
            const extEng = extTrEl('duo-exttr-engine');
            if (extEng) {
                extEng.value = String(extTrOpt('extTrEngine') || 'lokalny');
                extEng.addEventListener('change', () => {
                    extTrSet('extTrEngine', extEng.value);
                    setPrepareStatus(extTrNetOn() ? '🌐 Tłumaczenie sieciowe: ' + extEng.value : '🌐 Tłumaczenie sieciowe WYŁ. (lokalne)');
                });
            }
            const extChk = (id, key, msg) => {
                const c = extTrEl(id);
                if (!c) return;
                c.checked = extTrFlag(key);
                c.addEventListener('change', () => {
                    extTrSet(key, !!c.checked);
                    if (msg) setPrepareStatus(msg + (c.checked ? ' WŁ.' : ' WYŁ.'));
                });
            };
            extChk('duo-exttr-rpc', 'extTrGoogleRpc', '🌐 Google RPC');
            extChk('duo-exttr-msbatch', 'extTrMicrosoftBatch', '🌐 Microsoft batch');
            extChk('duo-exttr-stop', 'extTrStopWithLektor', '🌐 Stop z lektorem');
            extChk('duo-exttr-autosubs', 'autoSubsOn', '🌐 Auto-tłumaczenie całych napisów');
            extChk('duo-ai-on', 'aiOn', '🤖 Silnik AI');
            const extChunk = extTrEl('duo-exttr-chunk');
            if (extChunk) {
                extChunk.value = String(extTrOpt('extTrChunk') || 'mieszane');
                extChunk.addEventListener('change', () => extTrSet('extTrChunk', extChunk.value));
            }
            const extInt = extTrEl('duo-exttr-int');
            if (extInt) {
                extInt.value = String(extTrOpt('extTrInterval') || '30s');
                extInt.addEventListener('change', () => extTrSet('extTrInterval', extInt.value));
            }
            const aiKey = extTrEl('duo-ai-key');
            if (aiKey) {
                aiKey.value = String(extTrOpt('aiApiKey') || '');
                let aiKeyT = null;
                aiKey.addEventListener('input', () => {
                    clearTimeout(aiKeyT);
                    aiKeyT = setTimeout(() => extTrSet('aiApiKey', aiKey.value), 500);
                });
            }
            const extTestBtn = extTrEl('duo-exttr-test');
            const extTestSt = extTrEl('duo-exttr-status');
            if (extTestBtn) extTestBtn.onclick = async () => {
                try {
                    if (extTestSt) extTestSt.textContent = '⏳ tłumaczę…';
                    const o = await extTrOpts();
                    const r = await extTrTranslateBatch('en', ['Hello, this is a test.'], o.engine);
                    const pl = (r.texts && r.texts[0]) || '';
                    if (extTestSt) extTestSt.textContent = pl ? ('✅ [' + r.engine + '] ' + pl) : '❌ pusto';
                    setPrepareStatus(pl ? ('🌐 Test [' + r.engine + ']: ' + pl) : '❌ Test: pusta odpowiedź');
                } catch (e) {
                    if (extTestSt) extTestSt.textContent = '❌ ' + ((e && e.message) || e);
                }
            };
            // --- Łowca ---
            const lowGui = extTrEl('duo-lowca-gui');
            if (lowGui) {
                lowGui.checked = extTrFlag('lowcaGui');
                lowGui.addEventListener('change', () => {
                    extTrSet('lowcaGui', !!lowGui.checked);
                    setPrepareStatus(lowGui.checked ? '🔍 GUI Łowcy WŁ.' : '🔍 GUI Łowcy WYŁ. (cichy zapis)');
                });
            }
            const lowSites = extTrEl('duo-lowca-sites');
            if (lowSites) lowSites.textContent = extTrLowcaSites().join(', ') || '—';
            const lowRun = extTrEl('duo-lowca-run');
            if (lowRun) lowRun.onclick = () => {
                try {
                    if (lowSites) lowSites.textContent = extTrLowcaSites().join(', ') || HOST;
                    host.remove();
                    extTrRememberLowcaSite(HOST);
                    startSubtitleProfiler();
                } catch (e) { setPrepareStatus('❌ Łowca: ' + ((e && e.message) || e)); }
            };
            // --- Bazy napisów ---
            const dbQ = extTrEl('duo-db-query');
            const dbS = extTrEl('duo-db-season');
            const dbE = extTrEl('duo-db-episode');
            const dbL = extTrEl('duo-db-lang');
            const dbRes = extTrEl('duo-db-results');
            const dbBtn = extTrEl('duo-db-search');
            if (dbBtn) dbBtn.onclick = async () => {
                try {
                    if (dbRes) { dbRes.style.display = 'block'; dbRes.innerHTML = '<div style="padding:6px;">⏳ Szukam…</div>'; }
                    const langs = String((dbL && dbL.value) || 'pl,en').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
                    const r = await subsDbSearch({ query: dbQ ? dbQ.value : '', langs: langs, season: dbS ? (+dbS.value || 0) : 0, episode: dbE ? (+dbE.value || 0) : 0 });
                    if (!r.ok) { if (dbRes) dbRes.innerHTML = '<div style="padding:6px;">❌ ' + r.error + '</div>'; return; }
                    if (!r.items.length) {
                        if (dbRes) dbRes.innerHTML = '<div style="padding:6px;">❌ Nic nie znaleziono' + (r.errors.length ? ' (' + r.errors.join('; ') + ')' : '') + '</div>';
                        return;
                    }
                    if (dbRes) {
                        dbRes.innerHTML = '';
                        r.items.forEach((it, i) => {
                            const row = document.createElement('div');
                            row.style.cssText = 'padding:4px 6px;border-bottom:1px solid #eee;cursor:pointer;font-size:11px;';
                            row.textContent = (i + 1) + '. [' + it.providerName + '][' + it.lang + '] ' + it.title + (it.release ? ' — ' + it.release : '');
                            row.title = 'Klik = pobierz i wczytaj do lektora';
                            row.onclick = () => { try { host.remove(); } catch (e) {} subsDbLoadToLektor(it); };
                            dbRes.appendChild(row);
                        });
                        if (r.errors.length) {
                            const er = document.createElement('div');
                            er.style.cssText = 'padding:4px 6px;font-size:10px;color:#888;';
                            er.textContent = 'Uwagi: ' + r.errors.join('; ');
                            dbRes.appendChild(er);
                        }
                    }
                    setPrepareStatus('🌐 Bazy: ' + r.items.length + ' wyników (' + r.providers.join(', ') + ')');
                } catch (e) {
                    if (dbRes) dbRes.innerHTML = '<div style="padding:6px;">❌ ' + ((e && e.message) || e) + '</div>';
                }
            };
            const dbOs = extTrEl('duo-db-oskey');
            if (dbOs) {
                dbOs.value = String(extTrOpt('osApiKey') || '');
                let t = null;
                dbOs.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => extTrSet('osApiKey', dbOs.value), 500); });
            }
            const dbSubdl = extTrEl('duo-db-subdlkey');
            if (dbSubdl) {
                dbSubdl.value = String(extTrOpt('subdlApiKey') || '');
                let t2 = null;
                dbSubdl.addEventListener('input', () => { clearTimeout(t2); t2 = setTimeout(() => extTrSet('subdlApiKey', dbSubdl.value), 500); });
            }
            // --- AI Subtitle Translator: pola + wczytanie pliku ---
            const aitFile = extTrEl('ait-file');
            const aitFileBtn = extTrEl('ait-file-btn');
            const aitFileName = extTrEl('ait-file-name');
            const aitLang = extTrEl('ait-lang');
            const aitEngine = extTrEl('ait-engine');
            const aitCheck = extTrEl('ait-check');
            const aitModelSt = extTrEl('ait-model-status');
            const aitPrompt = extTrEl('ait-prompt');
            const aitContent = extTrEl('ait-content');
            const aitGo = extTrEl('ait-go');
            const aitStopB = extTrEl('ait-stop');
            const aitDl = extTrEl('ait-dl');
            const aitLektor = extTrEl('ait-lektor');
            const aitStatus = extTrEl('ait-status');
            if (aitLang && !aitLang.options.length) {
                AIT_LANGS.forEach(([v, t]) => {
                    const o = document.createElement('option');
                    o.value = v; o.textContent = t;
                    aitLang.appendChild(o);
                });
            }
            if (aitLang) {
                aitLang.value = String(extTrOpt('aitLang') || 'auto');
                aitLang.addEventListener('change', () => extTrSet('aitLang', aitLang.value));
            }
            if (aitEngine) {
                aitEngine.value = String(extTrOpt('aitEngine') || 'translator');
                aitEngine.addEventListener('change', () => extTrSet('aitEngine', aitEngine.value));
            }
            if (aitPrompt) {
                aitPrompt.value = String(extTrOpt('aitPrompt') || '') || AIT_PROMPT_DEF;
                let aitPT = null;
                aitPrompt.addEventListener('input', () => {
                    clearTimeout(aitPT);
                    aitPT = setTimeout(() => extTrSet('aitPrompt', aitPrompt.value), 500);
                });
            }
            let aitSrcName = 'napisy.srt';
            const aitSayLocal = (t) => {
                try { if (aitStatus) aitStatus.textContent = t; else setPrepareStatus(t); } catch (e) {}
            };
            aitStatusSink = (t) => { try { if (aitStatus) aitStatus.textContent = t; } catch (e) {} };
            if (aitFileBtn && aitFile) aitFileBtn.onclick = () => aitFile.click();
            if (aitFile) aitFile.addEventListener('change', async () => {
                const f = aitFile.files && aitFile.files[0];
                if (!f) return;
                try {
                    const raw = await aitReadFile(f);
                    if (aitContent) aitContent.value = raw;
                    aitSrcName = f.name || 'napisy.srt';
                    if (aitFileName) aitFileName.textContent = aitSrcName;
                    const n = aitSplit(raw).units.filter((u) => u.text && u.text.length).length;
                    aitSayLocal('📂 Wczytano „' + aitSrcName + '” — ' + n + ' kwestii. Kliknij „Tłumacz”.');
                } catch (e) { aitSayLocal('❌ Błąd czytania pliku: ' + ((e && e.message) || e)); }
                aitFile.value = '';
            });
            if (aitCheck) aitCheck.onclick = async () => {
                try {
                    if (aitModelSt) aitModelSt.textContent = 'sprawdzam…';
                    if (aitModelSt) aitModelSt.textContent = await aitStatusText();
                } catch (e) { if (aitModelSt) aitModelSt.textContent = '❌ ' + ((e && e.message) || e); }
            };
            if (aitGo) aitGo.onclick = async () => {
                const raw = aitContent ? aitContent.value : '';
                if (!raw.trim()) { aitSayLocal('Wczytaj najpierw plik z napisami.'); return; }
                const kind = aitEngine ? aitEngine.value : String(extTrOpt('aitEngine') || 'translator');
                const langV = aitLang ? aitLang.value : String(extTrOpt('aitLang') || 'auto');
                const prm = aitPrompt ? aitPrompt.value : String(extTrOpt('aitPrompt') || '');
                aitGo.disabled = true;
                if (aitStopB) aitStopB.style.display = '';
                try {
                    if (kind === 'gtab') {
                        await aitRunGtab(raw, (out) => { if (aitContent) aitContent.value = out; });
                    } else {
                        await aitTranslateRun(raw, kind, langV, prm, (out) => { if (aitContent) aitContent.value = out; });
                    }
                } catch (e) {
                    aitSayLocal('❌ Błąd tłumaczenia: ' + ((e && e.message) || e));
                } finally {
                    aitGo.disabled = false;
                    if (aitStopB) aitStopB.style.display = 'none';
                }
            };
            if (aitStopB) aitStopB.onclick = () => { try { aitStop(); } catch (e) {} };
            const aitMemExp = extTrEl('ait-mem-export');
            const aitMemClr = extTrEl('ait-mem-clear');
            if (aitMemExp) aitMemExp.onclick = () => { try { aitMemExport(); aitSayLocal('📤 Pamięć tłumaczeń wyeksportowana.'); } catch (e) {} };
            if (aitMemClr) aitMemClr.onclick = () => { try { aitMemClear(); aitSayLocal('🗑 Pamięć tłumaczeń wyczyszczona.'); } catch (e) {} };
            if (aitDl) aitDl.onclick = () => {
                const raw = aitContent ? aitContent.value : '';
                if (!raw.trim()) { aitSayLocal('Brak treści do pobrania.'); return; }
                try {
                    const out = String(aitSrcName || 'napisy.srt').replace(/\.[^.]+$/, '') + '.pl.srt';
                    const blob = new Blob([raw], { type: 'text/plain;charset=utf-8' });
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob); a.download = out;
                    document.body.appendChild(a); a.click(); a.remove();
                    setTimeout(() => { try { URL.revokeObjectURL(a.href); } catch (e) {} }, 5000);
                    aitSayLocal('⬇ Pobrano: ' + out);
                } catch (e) { aitSayLocal('❌ Błąd pobierania: ' + ((e && e.message) || e)); }
            };
            if (aitLektor) aitLektor.onclick = () => {
                const raw = aitContent ? aitContent.value : '';
                if (!raw.trim()) { aitSayLocal('Brak treści do wczytania.'); return; }
                try {
                    const n = aitLoadToLektor(raw);
                    aitSayLocal('🔊 Wczytano do lektora: ' + n + ' kwestii. Odtwórz film.');
                    try { host.remove(); } catch (e) {}
                } catch (e) { aitSayLocal('❌ ' + ((e && e.message) || e)); }
            };
        } catch (e) { console.warn('[DUO] EXT-TR handlery:', e); }

        shadow.getElementById('duo-spoken-btn').onclick = () => {
            const sPanel = document.getElementById('duo-spoken-panel') || renderSpokenPanel();
            sPanel.style.display = sPanel.style.display === 'flex' ? 'none' : 'flex';
            if (sPanel.style.display === 'flex') updateSpokenPanelLive();
        };
    }

    // ============================================================
    // --- GŁÓWNY UI (v3.7: pasek MINI jak w Piper SOLO — [▾][ON/OFF],
    //     przeciąganie przez pointer events, skala w USTAWIENIACH) ---
    // ============================================================
    function updateFlushBtn() {
        const b = document.getElementById('duo-flush-button');
        if (!b) return;
        const ready = imtQueue.filter(x => x.ready && !x.failed).length;
        b.textContent = ready ? '▶️ Zapas (' + ready + ')' : '▶️ Zapas';
        b.disabled = !ready;
        b.style.opacity = ready ? '1' : '0.45';
    }

    let uiScale = parseFloat(localStorage.getItem('duo_UiScale'));
    if (isNaN(uiScale)) uiScale = 1.0;
    uiScale = Math.max(0.8, Math.min(2, uiScale));
    function saveUiScale() { try { localStorage.setItem('duo_UiScale', String(uiScale)); } catch (e) {} }

    // Czy na elemencie (albo w jego okolicy) trw otwarta lista rozwijana?
// Chrome nie daje do niej dostępu przez DOM, więc odróżniamy ją po tym,
// że select ma focus (albo właśnie się otworzył) — wtedy nie wolno go
// przepinać w drzewie, bo lista się wtedy sama zamknie.
function isDropdownOpen(el) {
    if (!el) return false;
    const a = document.activeElement;
    if (a === el) return true;
    // Przyciski w panelu tez trzymaja focus — przeskakiwanie focusu na
    // inny element skryptu tez zamyka natywna liste.
    try { if (el.matches(':focus')) return true; } catch (e) {}
    return false;
}

function ensureUI() {
        if (!document.body) return;
        let box = document.getElementById('duo-ui-box');
        if (!box) {
            box = document.createElement('div');
            box.id = 'duo-ui-box';
            box.style.cssText = 'position:fixed;right:15px;bottom:80px;z-index:2147483647;display:flex;flex-direction:column-reverse;align-items:flex-end;gap:5px;padding:4px;background:rgba(17,17,17,.96);border:2px solid #08f;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.55);font-family:Arial,sans-serif;';
            document.body.appendChild(box);
        }
        if (!document.body.contains(box)) document.body.appendChild(box);
        reparentDuoUI();
        // zapisany stan widoczności (menu Tampermonkey / ✖) — przed wczesnymi return niżej
        box.style.display = isSettingsPanelVisible ? 'flex' : 'none';
        try { updateYtSpeaker(); } catch (e) {}   // głośniczek na YouTube odzwierciedla stan od razu
        // Skala NIE zmienia punktu zaczepienia (prawy-dolny róg = kwadracik) —
        // box jest kotwiczony WYŁĄCZNIE przez right/bottom (nigdy left/top),
        // dzięki czemu kwadracik zostaje dokładnie w tym samym miejscu przy
        // zwijaniu/rozwijaniu, skalowaniu i przeciąganiu. flex-direction:
        // column-reverse sprawia, że panel po rozwinięciu wyrasta W GÓRĘ
        // i W LEWO znad kwadracika, a nie w dół.
        box.style.transform = 'scale(' + uiScale + ')';
        box.style.transformOrigin = 'bottom right';
        try {
            const pos = JSON.parse(localStorage.getItem('duo_UiPos') || 'null');
            if (pos && pos.right) { box.style.right = pos.right; box.style.bottom = pos.bottom; box.style.left = 'auto'; box.style.top = 'auto'; }
        } catch (e) {}

        // ---- MINI PASEK: tylko [▾ zwiń/rozwiń][ON/OFF] — jak w Piper SOLO ----
        let header = document.getElementById('duo-header');
        if (!header) {
            header = document.createElement('div');
            header.id = 'duo-header';
            header.style.cssText = 'display:flex;align-items:center;gap:2px;padding:3px;background:rgba(10,26,36,.95);border:1px solid #08f;border-radius:5px;cursor:move;user-select:none;flex:0 0 auto;';
            const mkH = (nid, txt, tip) => {
                const b = document.createElement('button');
                b.id = nid; b.textContent = txt; b.title = tip;
                b.style.cssText = 'width:18px;height:18px;background:#111;color:#8cf;border:1px solid #08f;border-radius:3px;cursor:pointer;font:bold 10px Arial;padding:0;line-height:1;flex:0 0 auto;';
                header.appendChild(b);
                return b;
            };
            mkH('duo-collapse-button', '▾', 'Rozwiń / zwiń panel').addEventListener('click', () => {
                uiCollapsed = !uiCollapsed;
                gmSet(UI_COLLAPSED_KEY, uiCollapsed);
                ensureUI();
            });
            const pw = mkH('duo-power-button', 'ON', 'Włącz / wyłącz skrypt');
            pw.addEventListener('click', toggleMasterPower);
            const closeBtn = mkH('duo-hide-button', '✖', 'Ukryj panel (przywrócisz go z menu Tampermonkey → Panel lektora)');
            closeBtn.style.color = '#fff';
            closeBtn.addEventListener('click', () => setSettingsPanelVisible(false));
            box.appendChild(header);
        }
        const colB = document.getElementById('duo-collapse-button');
        if (colB) colB.textContent = uiCollapsed ? '▸' : '▾';
        const pwB = document.getElementById('duo-power-button');
        if (pwB) {
            pwB.textContent = masterPower ? 'ON' : 'OFF';
            pwB.style.color = masterPower ? '#0f0' : '#f66';
            pwB.style.borderColor = masterPower ? '#0f0' : '#f66';
        }

        // ---- przeciąganie panelu za pasek (pointer events — jeden spójny
        // mechanizm dla myszy i dotyku, bez progu odległości). Liczymy
        // pozycję w układzie right/bottom (a nie left/top), bo to prawy-dolny
        // róg (kwadracik) jest zaczepem — dzięki temu przeciąganie i
        // otwieranie/zwijanie nigdy sobie nie przeczą i nic nie "skacze". ----
        if (!header.__duoDrag) {
            header.__duoDrag = true;
            let st = null;
            header.addEventListener('pointerdown', (e) => {
                if (e.target.closest('button')) return;
                const rect = box.getBoundingClientRect();
                st = {
                    x: e.clientX, y: e.clientY,
                    r: window.innerWidth - rect.right,
                    b: window.innerHeight - rect.bottom,
                    pid: e.pointerId
                };
                try { header.setPointerCapture(e.pointerId); } catch (err) {}
                e.preventDefault();
            });
            header.addEventListener('pointermove', (e) => {
                if (!st || e.pointerId !== st.pid) return;
                const nr = Math.max(0, Math.min(window.innerWidth - 40, st.r - (e.clientX - st.x)));
                const nb = Math.max(0, Math.min(window.innerHeight - 26, st.b - (e.clientY - st.y)));
                box.style.right = nr + 'px';
                box.style.bottom = nb + 'px';
                box.style.left = 'auto';
                box.style.top = 'auto';
            });
            const endDrag = (e) => {
                if (!st || (e && e.pointerId !== st.pid)) return;
                try { header.releasePointerCapture(st.pid); } catch (err) {}
                st = null;
                try { localStorage.setItem('duo_UiPos', JSON.stringify({ right: box.style.right, bottom: box.style.bottom })); } catch (err) {}
            };
            header.addEventListener('pointerup', endDrag);
            header.addEventListener('pointercancel', endDrag);
        }

        // ---- CIAŁO PANELU ----
        let body = document.getElementById('duo-body');
        if (!body) {
            body = document.createElement('div');
            body.id = 'duo-body';
            // max-height/max-width zamiast przestawiania pozycji boxa: gdy
            // panelowi zabraknie miejsca (np. mała przeglądarka, wysokie
            // skalowanie), sam się przewija — kwadracik i tak zostaje
            // dokładnie w tym samym miejscu, bez żadnego przesuwania.
            body.style.cssText = 'display:flex;flex-direction:column;gap:5px;max-height:calc(100vh - 100px);max-width:calc(100vw - 30px);overflow-y:auto;overflow-x:hidden;';
            box.appendChild(body);
        }
        body.style.display = uiCollapsed ? 'none' : 'flex';
        if (!uiCollapsed) body.style.minWidth = '250px';

        // Gdy wyłączony — duży, nie do przeoczenia przycisk włączenia
        const turnOn = document.getElementById('duo-turn-on');
        if (!masterPower) {
            if (uiCollapsed) return;
            // FIX: gdy lektor jest WYŁĄCZONY na danej stronie, chowamy
            // wszystkie "stare" rzędy przycisków (silnik, odtwarzanie,
            // ustawienia itd.) — inaczej zostawały widoczne obok
            // przycisku "WŁĄCZ LEKTORA" i panel wyglądał na zepsuty/
            // pomniejszony, mimo że to tylko pozostałość z trybu ON.
            Array.from(body.children).forEach((ch) => {
                if (ch.id !== 'duo-turn-on') ch.style.display = 'none';
            });
            if (!turnOn) {
                const on = document.createElement('button');
                on.id = 'duo-turn-on';
                on.textContent = '🔌 WŁĄCZ LEKTORA';
                on.style.cssText = 'width:100%;height:32px;background:#0d3d1d;color:#6f6;border:2px solid #0f0;border-radius:5px;cursor:pointer;font:bold 12px Arial;';
                on.addEventListener('click', toggleMasterPower);
                body.appendChild(on);
            }
            return;
        }
        if (turnOn) turnOn.remove();

        function row(id) {
            let r = document.getElementById(id);
            if (!r) {
                r = document.createElement('div');
                r.id = id;
                r.style.cssText = 'display:flex;gap:4px;align-items:center;';
                body.appendChild(r);
            }
            // FIX: gdy wracamy z trybu OFF (gdzie chowaliśmy rzędy wyżej),
            // trzeba je z powrotem odsłonić — bez tego zostałyby na
            // "display:none" na zawsze po pierwszym wyłączeniu.
            r.style.display = 'flex';
            return r;
        }
        const rEng = row('duo-row-eng'), rPlay = row('duo-row-play'), rTool = row('duo-row-tool'),
              rLive = row('duo-row-live'), rSet = row('duo-row-set'), rInfo = row('duo-row-info'),
              rSlid = row('duo-row-slid'), rBuf = row('duo-row-buf');

        function mkBtn(id, label, title, onClick, rowEl, style) {
            let b = document.getElementById(id);
            if (!b) {
                b = document.createElement('button');
                b.id = id;
                b.style.cssText = 'flex:1;min-width:0;height:26px;background:#161616;color:#fff;border:1px solid #777;border-radius:4px;font:bold 10px Arial;cursor:pointer;padding:0 2px;white-space:nowrap;overflow:hidden;';
                if (title) b.title = title;
                b.addEventListener('click', onClick);
            }
            if (style) Object.assign(b.style, style);
            // NIE przepinamy przycisku, gdy ma focus — inaczej przeskok
            // focusu zamyka otwarta lista rozwijana glosow.
            if (b.parentNode !== rowEl && !isDropdownOpen(b)) rowEl.appendChild(b);
            if (label !== undefined) b.textContent = label;
            return b;
        }

        // RZĄD 1: silnik + głos
        const ENGINE_BTN_STYLE = {
            piper:      { color: '#0ff',   border: '#08f' },
            supertonic: { color: '#7fe9ff', border: '#0af' },
            xtts:       { color: '#ff8fe9', border: '#a0f' },
            matcha:     { color: '#9ef7b4', border: '#0a4' },
            omnivoice: { color: '#ffc46b', border: '#d80' },
            pocket:    { color: '#e0a3ff', border: '#90f' },
            audio8:    { color: '#7fe0d8', border: '#0aa' }
        };
        const engBtn = mkBtn('duo-engine-button', getEngine().name,
            'Przełącz silnik TTS (Piper 8766 → Supertonic 7000 → XTTS 8000 → Matcha PL 9000 → OmniVoice 9100 → Pocket PL 9200 → Audio8 9300). Każdy ma swój zapamiętany głos.',
            () => switchEngine(nextEngineId(currentEngineId)), rEng,
            ENGINE_BTN_STYLE[currentEngineId] || ENGINE_BTN_STYLE.piper);

        let select = document.getElementById('duo-voice-select');
        if (!select) {
            select = document.createElement('select');
            select.id = 'duo-voice-select';
            select.style.cssText = 'flex:1;min-width:0;height:26px;background:#111;color:#fff;border:1px solid #666;border-radius:4px;font:10px Arial;padding:0 2px;';
            select.addEventListener('change', () => {
                selectedVoice = select.value;
                try { localStorage.setItem('duo_Voice_' + currentEngineId, selectedVoice); } catch (e) {}
                onVideoChanged();
            });
        }
        // FIX: otwarta lista rozwijana zamyka się, gdy element <select> zostanie
        // przepięty w drzewie DOM (appendChild w dół przebudowuje panel przy
        // każdym ensureUI(), m.in. z cyklicznego sprawdzania location.href).
        // Dopóki użytkownik ma listę otwartą, NIE ruszamy tego elementu —
        // inaczej lista znika po ułamku sekundy.
        if (!isDropdownOpen(select)) {
            if (select.dataset.engine !== currentEngineId) {
                select.innerHTML = '';
                getEngine().voices.forEach(v => {
                    const o = document.createElement('option');
                    o.value = v.id; o.textContent = v.name;
                    select.appendChild(o);
                });
                select.dataset.engine = currentEngineId;
            }
            select.value = selectedVoice;
            rEng.appendChild(select);
        }

        // ---- Style dla Matcha-TTS-PL: osobny wiersz, widoczny tylko przy tym silniku ----
        let styleRow = document.getElementById('duo-style-row');
        if (!styleRow) {
            styleRow = document.createElement('div');
            styleRow.id = 'duo-style-row';
            styleRow.style.cssText = 'display:flex;gap:4px;align-items:center;';
            body.appendChild(styleRow);
        }
        styleRow.style.display = currentEngineId === 'matcha' ? 'flex' : 'none';
        if (currentEngineId === 'matcha') {
            let styleSel = document.getElementById('duo-style-select');
            if (!styleSel) {
                styleSel = document.createElement('select');
                styleSel.id = 'duo-style-select';
                styleSel.style.cssText = 'flex:1;min-width:0;height:24px;background:#0a1a0e;color:#dfd;border:1px solid #0a4;border-radius:4px;font:10px Arial;padding:0 2px;';
                styleSel.addEventListener('change', () => {
                    // -1 = "bez stylu", potem 0..17 = tokeny stylu modelu
                    matchaStyle = parseInt(styleSel.value, 10);
                    saveMatchaStyle();
                    setPrepareStatus('🍵 Styl Matcha: ' + (matchaStyle < 0 ? 'bez stylu' : MATCHA_STYLES[matchaStyle]));
                });
            }
            if (styleSel.options.length !== MATCHA_STYLES.length) {
                styleSel.innerHTML = '';
                MATCHA_STYLES.forEach((label, idx) => {
                    const o = document.createElement('option');
                    o.value = String(idx - 1);           // -1, 0, 1 ... 17
                    o.textContent = (idx === 0 ? '— ' : idx + '. ') + label;
                    styleSel.appendChild(o);
                });
            }
            styleSel.value = String(matchaStyle);
            styleSel.title = 'Token stylu Matcha: rozpiętość wysokości × tempo × pytanie. Zapisuje się na stałe.';
            styleRow.appendChild(styleSel);
        }

        // RZĄD 2: odtwarzanie
        const lektorBtn = mkBtn('duo-lektor-button', undefined, 'Włącz/wyłącz lektora YouTube (SYNC)', toggleLektor, rPlay);
        if (enabled) { lektorBtn.textContent = syncMode ? '🔊 SYNC ON' : '🔊 YT ON'; lektorBtn.style.color = '#0ff'; lektorBtn.style.borderColor = '#0af'; }
        else if (syncMode && syncSegments) { lektorBtn.textContent = '▶️ WZNÓW'; lektorBtn.style.color = '#ff0'; lektorBtn.style.borderColor = '#aa0'; }
        else { lektorBtn.textContent = '🔇 YT OFF'; lektorBtn.style.color = '#fff'; lektorBtn.style.borderColor = '#777'; }

        mkBtn('duo-prepare-button', '🚀 Hybryda', 'Przygotuj cały film z zapisem do pamięci', prepareWholeVideo, rPlay, { borderColor: '#06f', color: '#9cf' });
        mkBtn('duo-live-button', '🎧 Od razu', 'Słuchaj od razu, bez zapisu', prepareLiveListen, rPlay, { borderColor: '#0af', color: '#7fe9ff' });
        mkBtn('duo-fullsubs-button', '⬇ Całe napisy', 'NA ŻĄDANIE: pobierz całe napisy tego filmu i czytaj (YouTube, Netflix i każda strona z napisami w odtwarzaczu). Bez kliknięcia lektor czyta w locie i nic nie pobiera.', fullSubsOnDemand, rPlay, { borderColor: '#2a6a7a', color: '#7ee0ff' });

        // RZĄD 3: narzędzia
        mkBtn('duo-custom-button', '📄 Plik', 'Wczytaj plik napisów', () => ensureCustomPanel().style.display = 'flex', rTool);
        mkBtn('duo-cache-button', '💾 Pamięć', 'Zarządzanie cache', openCacheManagerPanel, rTool, { color: '#fc6', borderColor: '#a80' });
        mkBtn('duo-findsubs-button', '🔍 Szukaj napisów', 'NA ŻĄDANIE: raz przeszukaj całą stronę (z Shadow DOM) i zapamiętaj, gdzie są napisy. Potem lektor patrzy tylko tam — bez przeszukiwania.', duoSubSearchOnDemand, rTool, { color: '#c9b8ff', borderColor: '#5a4a8a' });
        mkBtn('duo-filter-button', '🤬 Cenzura', 'Filtr przekleństw i własne słowa', () => {
            const panel = ensureFilterPanel();
            panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
        }, rTool);

        // RZĄD 4: LIVE + podgląd + napisy ekranowe
        const imtBtn = mkBtn('duo-imt-button', undefined,
            'LIVE: czyta napisy na żywo (Netflix, własne źródła, IT, TextTrack, Asbplayer)', toggleImmersiveLektor, rLive);
        imtBtn.textContent = imtLektorEnabled ? '🌐 LIVE ON' : '🌐 LIVE';
        imtBtn.style.color = imtLektorEnabled ? '#0f0' : '#fff';
        imtBtn.style.borderColor = imtLektorEnabled ? '#0f0' : '#777';

        mkBtn('duo-spoken-button', '📺 Podgląd', 'Podgląd napisów + blokady + własny tekst audiobook', () => {
            const sPanel = document.getElementById('duo-spoken-panel') || renderSpokenPanel();
            sPanel.style.display = sPanel.style.display === 'flex' ? 'none' : 'flex';
            if (sPanel.style.display === 'flex') updateSpokenPanelLive();
        }, rLive, { color: '#7fe9ff', borderColor: '#08f' });

        const capBtn = mkBtn('duo-cap-button', undefined, 'Mały podgląd napisów lektora nad wideo (przeciągnij, aby przenieść)', toggleCaptionOverlay, rLive);
        capBtn.textContent = captionOverlayEnabled ? '💬 ON' : '💬 Napisy';
        capBtn.style.color = captionOverlayEnabled ? '#0f0' : '#fff';
        capBtn.style.borderColor = captionOverlayEnabled ? '#0f0' : '#777';

        // RZĄD 5: ustawienia (pełna szerokość)
        mkBtn('duo-settings-button', '⚙️ USTAWIENIA', 'Silnik, bufor LIVE + nagrania, przesunięcie lektora, tempo, tryby skanowania, listy domen, Kreator napisów, eksport/import', () => openDuoSettings(), rSet)
            .style.borderColor = '#8af';

        // RZĄD 6: statusy (obok siebie)
        let statusEl = document.getElementById('duo-prepare-status');
        if (!statusEl) {
            statusEl = document.createElement('div');
            statusEl.id = 'duo-prepare-status';
            statusEl.style.cssText = 'flex:1;min-width:0;color:#9cf;font:9px Arial;word-wrap:break-word;';
            rInfo.appendChild(statusEl);
        }
        let readingEl = document.getElementById('duo-now-reading');
        if (!readingEl) {
            readingEl = document.createElement('div');
            readingEl.id = 'duo-now-reading';
            readingEl.style.cssText = 'flex:1;min-width:0;color:#aaa;font:italic 9px Arial;word-wrap:break-word;text-align:right;';
            rInfo.appendChild(readingEl);
        }

        // RZĄD 7: trzy suwaki obok siebie (tempo / ściszanie / bufor)
        function sliderBlock(rowEl, id, min, max, step, val, onInput, fmt) {
            let wrap = document.getElementById(id);
            if (wrap) return wrap;
            wrap = document.createElement('div');
            wrap.id = id;
            wrap.style.cssText = 'flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;';
            const label = document.createElement('div');
            label.id = id + '-label';
            label.style.cssText = 'color:#ccc;font:8px Arial;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
            const s = document.createElement('input');
            s.type = 'range';
            s.min = String(min); s.max = String(max); s.step = String(step);
            s.value = String(val);
            s.style.cssText = 'width:100%;height:14px;';
            s.addEventListener('input', () => onInput(parseFloat(s.value), label, s));
            label.textContent = fmt(val);
            wrap.appendChild(label); wrap.appendChild(s);
            rowEl.appendChild(wrap);
            return wrap;
        }
        sliderBlock(rSlid, 'duo-speed-row', 0.5, 2.5, 0.1, SPEECH_RATE, (v, label, s) => {
            SPEECH_RATE = v; saveSpeechRate();
            label.textContent = 'Głos: ' + v.toFixed(1) + 'x';
        }, v => 'Głos: ' + v.toFixed(1) + 'x');

        sliderBlock(rSlid, 'duo-duck-row', 0, 100, 1, Math.round(duckVolume * 100), (v, label, s) => {
            duckVolume = v / 100;
            try { localStorage.setItem('duo_DuckVolume', String(duckVolume)); } catch (e) {}
            label.textContent = 'Film: ' + v + '%';
            if (enabled || imtLektorEnabled) setVideoVolume(duckVolume);
        }, v => 'Film: ' + v + '%');

        sliderBlock(rSlid, 'duo-delay-row', 0, 120, 1, liveDelayMin, (v, label) => {
            liveDelayMin = v; saveLiveDelayMin();
            label.textContent = v === 0 ? '⏳ Bufor: 0 (live)' : '⏳ Bufor: ' + v + ' min';
            // v3.6.15: bufor liczony OD BIEZACEGO MOMENTU - restart odliczania dla oczekujacych kwestii.
            if (imtLektorEnabled && imtQueue.length) imtRestartBufferClock();
            if (imtLektorEnabled) scheduleImmersivePlay();
        }, v => v === 0 ? '⏳ Bufor: 0 (live)' : '⏳ Bufor: ' + v + ' min');

        // RZĄD 8: przycisk zapasu (pod suwakiem bufora, pełna szerokość)
        let flushBtn = document.getElementById('duo-flush-button');
        if (!flushBtn) {
            flushBtn = document.createElement('button');
            flushBtn.id = 'duo-flush-button';
            flushBtn.style.cssText = 'flex:1;min-width:0;height:24px;background:#1a1206;color:#fd8;border:1px solid #d80;border-radius:4px;font:bold 10px Arial;cursor:pointer;';
            flushBtn.title = 'Natychmiast odtwórz wszystko, co gotowe w buforze (pomija odliczanie bufora LIVE)';
            flushBtn.addEventListener('click', flushImmersiveBuffer);
        }
        rBuf.appendChild(flushBtn);
        updateFlushBtn();
    }
    // ============================================================
    // --- STEROWANIE GŁÓWNE ---
    // ============================================================
    async function toggleLektor() {
        if (enabled) { stopLektor(); return; }
        if (imtLektorEnabled) toggleImmersiveLektor();
        if (polishDubbingActive()) { alert('🇵🇱 Wykryto polski dubbing/kanał na YouTube — lektor nie zostanie uruchomiony.'); return; }
        localStorage.setItem('duo_LastMode', 'sync');
        if (syncMode && syncSegments) {
            enabled = true;
            ensureAudioCtxRunning();
            setVideoVolume(duckVolume);
            ensureUI();
            setPrepareStatus('Odtwarzanie z cache.');
            return;
        }
        const videoId = getVideoId();
        if (videoId) {
            const video = getVideoEl();
            // Klucz cache jest oparty o BUFFER_GEN_SPEED (1.0), nie o suwak
            // ani o tempo filmu - inaczej kazde przyspieszenie tworzylo by
            // osobny, zdublowany wpis w pamieci.
            const t = { genSpeed: BUFFER_GEN_SPEED, playRate: 1 };
            let cached = await idbGet(cacheKey(videoId, selectedVoice, t.genSpeed)).catch(() => null);
            if (cached && isNetflixHost() && nfLooksPartial(cached.segments)) cached = null;   // niepelny zapis — nie uzywaj
            if (cached) {
                await loadSyncData(videoId, cached);
                enabled = true;
                ensureAudioCtxRunning();
                setVideoVolume(duckVolume);
                ensureUI();
                setPrepareStatus('Wznowiono z cache.');
                return;
            }
        }
        try { await healthCheck(); } catch (e) { alert('Serwer ' + getEngine().name + ' nie działa (port ' + enginePort() + ').'); return; }
        enabled = true;
        ensureUI();
        prepareWholeVideo();
    }
    function stopLektor() {
        enabled = false;
        try { extTrStopAll(); } catch (e) {}   // opcja „zatrzymaj tłumaczenie razem z lektorem”
        stopSyncSource();
        updateNowReadingLabel('');
        setVideoVolume(VIDEO_VOLUME);
        if (localStorage.getItem('duo_LastMode') === 'sync') localStorage.setItem('duo_LastMode', '');
        ensureUI();
    }
    async function applyMasterPowerState() {
        if (!masterPower) {
            if (enabled) stopLektor();
            if (imtLektorEnabled) toggleImmersiveLektor();
            try { extTrStopAll(); } catch (e) {}
            preparing = false;
            stopScanMechanisms();
            stopCustomReading(true);
            if (recActive) finishRecording(false);
            if (capEl) capEl.style.display = 'none';
            // v4.2.13: wyłączony = jakby skryptu nie było — rozłącz serwer, zatrzymaj ponawianie
            if (wsReconnectTimer) { clearTimeout(wsReconnectTimer); wsReconnectTimer = null; }
            try { if (wsSocket) wsSocket.close(); } catch (e) {}
        } else {
            if (isTopFrame) connectWebSocket();
            setupScanMode(scanMode);
            ensureCaptionOverlay();
            updateCaptionOverlay(lastSpokenText);
            const lastMode = localStorage.getItem('duo_LastMode');
            if (lastMode === 'imt') toggleImmersiveLektor();
            else if (lastMode === 'sync') resumeSyncOrLive();
        }
        ensureUI();
    }
    async function toggleMasterPower() {
        masterPower = !masterPower;
        gmSet(MASTER_POWER_KEY, masterPower);
        await applyMasterPowerState();
    }

    setInterval(() => { if (masterPower && syncMode && enabled && document.visibilityState === 'visible') syncTick(getVideoEl()); }, 50);   // v4.2.13: nie w tle

    document.addEventListener('visibilitychange', () => {
        if (SLEEP_MODE) return;
        // v4.2.13: karta w tle = zero skanowania (obserwator i pętle odłączone); powrót = podłącz po cichu
        if (document.visibilityState === 'visible') setupScanMode(scanMode, true);
        else stopScanMechanisms();
        if (document.visibilityState === 'visible') {
            if (singleTabMode && masterPower) {
                claimAudioFocus();
                resumeVideosAfterLektor();
                // v4.2.10: po powrocie na karte wznow kolejke LIVE (bufor zachowany,
                // a nie skasowany). Przesun addedAt o czas nieobecnosci, zeby kwestie
                // nie byly "przeterminowane" i nie wystrzelily wszystkie naraz.
                if (imtLektorEnabled && imtQueue.length) {
                    try { if (imtHiddenAt) { const away = Date.now() - imtHiddenAt; if (away > 200) imtQueue.forEach(x => { if (x.addedAt) x.addedAt += away; }); } } catch (e) {}
                    try { if (audioCtx && audioCtx.state === 'suspended' && !imtPauseHold) audioCtx.resume(); } catch (e) {}
                    try { if (imtCurrentAudio && imtCurrentAudio.paused && !imtCurrentAudio.ended) imtCurrentAudio.play().catch(() => {}); } catch (e) {}
                    try { playNextImmersive(); } catch (e) {}
                    try { generateImmersiveAudio(); } catch (e) {}
                    setPrepareStatus('🟢 Wrócono na kartę — bufor zachowany (' + imtQueue.length + '), dogrywam');
                } else {
                    setPrepareStatus('🟢 Aktywna karta (Lektor gotowy)');
                }
            }
            imtHiddenAt = 0;
        } else if (document.visibilityState === 'hidden') {
            // v4.2.10: schowanie karty = PAUZA, nie kasowanie. Bufor (imtQueue + audio)
            // zostaje w pamieci; po powrocie dogrywamy od miejsca, w ktorym stanęło.
            // releaseAudioFocus() oddaje glos innym kartom, zeby nie bylo konfliktu.
            imtHiddenAt = Date.now();
            if (singleTabMode && autoMuteHiddenTab && masterPower) {
                stopSyncSource();
                try { stopImmersiveAudio(); } catch (e) {}
                imtSpeaking = false;
                try { if (audioCtx && audioCtx.state === 'running') audioCtx.suspend(); } catch (e) {}
                try { if (imtCurrentAudio && !imtCurrentAudio.paused) imtCurrentAudio.pause(); } catch (e) {}
                stopCustomReading(true);
                pauseVideosWithLektor();
                try { releaseAudioFocus(); } catch (e) {}
                setPrepareStatus('⏸️ Karta w tle — bufor zachowany (' + imtQueue.length + '), dogram po powrocie');
            }
        }
    });
    window.addEventListener('focus', () => {
        if (SLEEP_MODE) return;
        if (singleTabMode && masterPower) claimAudioFocus();
    });

    function onVideoChanged() {
        // Nowy film/zasob = koniec trybu "czytam z pliku". Gdyby tego nie
        // wyczyscic, playRate zostalby na 1 mimo filmu (patrz playSyncSegment).
        customSubFileId = null;
        if (liveFromFullSubs && !isNetflixHost()) {   // v4.2.13: nowy film = znów czytanie w locie
            liveFullStop(); liveFromFullSubs = false;
            try { resetImmersiveForSeek(); } catch (e) {}
            if (imtLektorEnabled) setupScanMode(scanMode);   // znów czytanie w locie z ekranu
        }
        clearSyncData();
        stopCustomReading(true);
        clearSpokenHistory();
        updateNowReadingLabel('');
        if (!masterPower) { ensureUI(); return; }
        const videoId = getVideoId();
        if (!videoId) { ensureUI(); return; }
        const video = getVideoEl();
        const t = { genSpeed: BUFFER_GEN_SPEED, playRate: 1 };
        idbGet(cacheKey(videoId, selectedVoice, t.genSpeed)).then(rec => {
            if (rec) { loadSyncData(videoId, rec); setPrepareStatus('Gotowe w cache.'); }
            ensureUI();
        }).catch(() => ensureUI());
        ytAutoMaybeStart(); // YT-AUTO
    }
    document.addEventListener('yt-navigate-finish', onVideoChanged);
    let lastHref = location.href;
    setInterval(() => {
        if (!masterPower) return;   // v4.2.13: wyłączony = zero pracy
        if (location.href !== lastHref) { lastHref = location.href; onVideoChanged(); }
    }, 1000);

    async function autoResumeLastMode() {
        if (!masterPower) return;
        const lastMode = localStorage.getItem('duo_LastMode');
        if (!lastMode || !getVideoEl()) return;
        try { await healthCheck(); } catch (e) { return; }
        if (lastMode === 'imt' && !imtLektorEnabled) toggleImmersiveLektor();
        else if (lastMode === 'sync' && !enabled) resumeSyncOrLive();
    }
    // v4.2.13: SYNC wraca sam TYLKO z pamięci (cache) — bez pobierania napisów.
    // Brak zapisu = czytanie w locie (LIVE); pełne napisy po kliknięciu „⬇ Całe napisy”.
    async function resumeSyncOrLive() {
        try {
            const videoId = getVideoId();
            const cached = videoId ? await idbGet(cacheKey(videoId, selectedVoice, BUFFER_GEN_SPEED)).catch(() => null) : null;
            if (cached && !(isNetflixHost() && nfLooksPartial(cached.segments))) { if (!enabled) toggleLektor(); return; }
        } catch (e) {}
        if (!imtLektorEnabled) toggleImmersiveLektor();
    }

    // ============================================================
    // --- v4.2.13: CAŁE NAPISY NA ŻĄDANIE (przycisk „⬇ Całe napisy”) ---
    // YouTube: pobierz + przetłumacz + czytaj (jak „🎧 Od razu”).
    // Netflix: pełne napisy z manifestu do bufora LIVE.
    // Każda inna strona: ścieżki napisów odtwarzacza HTML5 (textTracks / <track src>).
    // Bez kliknięcia: NIC nie jest pobierane — LIVE czyta w locie z ekranu.
    // ============================================================
    async function genericFetchSegments() {
        const v = getVideoEl();
        if (!v) throw new Error('Nie widzę filmu na tej stronie (może jest w ramce innej strony). Włącz odtwarzanie.');
        const tracks = Array.from(v.textTracks || []).filter(t => t.kind === 'subtitles' || t.kind === 'captions');
        const changed = [];
        tracks.forEach(t => { if (t.mode === 'disabled') { changed.push(t); try { t.mode = 'hidden'; } catch (e) {} } });
        for (let i = 0; i < 20 && !tracks.some(t => t.cues && t.cues.length); i++) await sleep(200);
        const clean = (x) => String(x || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
        const list = [];
        tracks.forEach(t => {
            if (!t.cues || !t.cues.length) return;
            const segs = [];
            for (let i = 0; i < t.cues.length; i++) {
                const c = t.cues[i], tx = clean(c.text);
                if (tx) segs.push({ start: c.startTime, duration: Math.max(c.endTime - c.startTime, 0.4), text: tx });
            }
            if (segs.length) list.push({ lang: String(t.language || '').toLowerCase(), label: t.label || '', pl: isPolishTextTrack(t), segs });
        });
        changed.forEach(t => { try { t.mode = 'disabled'; } catch (e) {} });
        if (!list.length) {
            for (const el of v.querySelectorAll('track[src]')) {
                try {
                    const r = await fetch(el.src, { credentials: 'include' });
                    if (!r.ok) continue;
                    const segs = duoParseVttLike(await r.text());
                    if (segs.length) list.push({ lang: String(el.srclang || '').toLowerCase(), label: el.label || '', pl: /^pl/i.test(el.srclang || '') || /polski|polish/i.test(el.label || ''), segs });
                } catch (e) {}
            }
        }
        if (!list.length) throw new Error('Ten odtwarzacz nie udostępnia pliku napisów — LIVE czyta w locie z ekranu');
        const pick = list.find(x => x.pl) || list.find(x => /^en/.test(x.lang) || /english|angiel/i.test(x.label)) || list[0];
        setPrepareStatus('📥 Pobrano ' + pick.segs.length + ' kwestii (' + (pick.lang || '?') + ')' + (pick.pl ? '' : ' — tłumaczę na polski…'));
        if (pick.pl) return pick.segs;
        const out = await ytTranslateSegments(pick.segs, pick.lang || 'en');
        if (!out.length) throw new Error('Tłumaczenie nie zwróciło tekstu.');
        return out;
    }
    function duoParseVttLike(text) {
        const out = [];
        const tm = (x) => { const m = String(x).trim().replace(',', '.').match(/(?:(\d+):)?(\d+):(\d+(?:\.\d+)?)/); return m ? (+(m[1] || 0)) * 3600 + (+m[2]) * 60 + parseFloat(m[3]) : NaN; };
        String(text || '').replace(/\r/g, '').split(/\n{2,}/).forEach(b => {
            const lines = b.split('\n'), k = lines.findIndex(l => l.indexOf('-->') !== -1);
            if (k < 0) return;
            const pr = lines[k].split('-->'), st = tm(pr[0]), en = tm(pr[1]);
            const tx = lines.slice(k + 1).join(' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
            if (!isNaN(st) && !isNaN(en) && tx) out.push({ start: st, duration: Math.max(en - st, 0.4), text: tx });
        });
        return out;
    }
    let fullSubsBusy = false;
    async function fullSubsOnDemand() {
        if (fullSubsBusy) return;
        if (!masterPower) { setPrepareStatus('⚠️ Lektor jest wyłączony — włącz go, żeby pobrać napisy.'); return; }
        fullSubsBusy = true;
        try {
            if (isYouTubeHost()) { await prepareLiveListen(); return; }
            if (!imtLektorEnabled) await toggleImmersiveLektor();
            if (!imtLektorEnabled) return;   // serwer nie odpowiada / polski dubbing — komunikat już był
            resetImmersiveForSeek();
            liveFromFullSubs = false;
            liveFullStart(isNetflixHost() ? fetchTranscriptSegmentsAuto : genericFetchSegments);
        } finally { fullSubsBusy = false; }
    }

    // --- MENU TAMPERMONKEY ---
    // Celowo JEDNA pozycja. Wszystko inne (silnik, tempo, bufor, napisy,
    // listy domen…) jest w panelu i w ⚙️ USTAWIENIA.
    // v4.2.11.3: rejestrujemy TYLKO w głównej ramce strony. Skrypt działa też
    // w ramkach (iframe) — np. YouTube ma ukrytą ramkę accounts.youtube.com —
    // a Tampermonkey skleja pozycje o tej samej nazwie z różnych ramek w jedną
    // i po kliknięciu woła wszystkie. Wtedy jedna ramka panel pokazywała,
    // a druga od razu go chowała („pojawia się i zaraz znika”). Ramki i tak
    // dostają nowy stan przez GM_addValueChangeListener niżej.
    let isTopFrame = true;
    try { isTopFrame = (window.top === window.self); } catch (e) { isTopFrame = false; }
    let panelMenuLastClick = 0;
    if (isTopFrame && typeof GM_registerMenuCommand === 'function') {
        GM_registerMenuCommand('⚙️ Panel lektora', () => {
            // jedno kliknięcie = jedno przełączenie, nawet gdyby wywołanie przyszło dwa razy
            const nowClick = Date.now();
            if (nowClick - panelMenuLastClick < 500) return;
            panelMenuLastClick = nowClick;
            if (SLEEP_MODE) {
                // Strona uśpiona listą domen — panelu tu nie ma, więc zamiast
                // przełączać „w ciemno”, proponujemy obudzenie tej strony.
                if (!confirm('Lektor jest uśpiony na tej stronie (biała/czarna lista domen).\n\nWłączyć go tutaj? Strona się przeładuje.')) return;
                const bl = parseDomainList(gmGet(BL_KEY));
                gmSet(BL_KEY, bl.filter(d => !(HOST === d || HOST.endsWith('.' + d))).join('\n'));
                const wl = parseDomainList(gmGet(WL_KEY));
                if (wl.length && !hostMatches(HOST, wl)) { wl.push(HOST); gmSet(WL_KEY, wl.join('\n')); }
                gmSet(PANEL_VISIBLE_KEY, true);
                location.reload();
                return;
            }
            toggleSettingsPanel();
        });
    }

    [WL_KEY, BL_KEY].forEach(k => {
        try {
            GM_addValueChangeListener(k, () => {
                const nowSleep = isSleepForHost(HOST);
                if (nowSleep !== SLEEP_MODE) location.reload();
            });
        } catch (e) {}
    });

    // v3.6.7: gdy stan ON/OFF zmieni się na innej karcie/stronie (bo jest
    // teraz globalny), od razu odzwierciedlamy to tutaj.
    try {
        GM_addValueChangeListener(MASTER_POWER_KEY, (name, oldVal, newVal) => {
            if (SLEEP_MODE) return;
            const nv = (newVal === true || newVal === 'true');
            if (nv !== masterPower) { masterPower = nv; applyMasterPowerState(); }
        });
    } catch (e) {}

    // Widoczność panelu zmieniona na innej karcie — odzwierciedl tutaj.
    try {
        GM_addValueChangeListener(PANEL_VISIBLE_KEY, (name, oldVal, newVal) => {
            const nv = (newVal === true || newVal === 'true');
            if (nv === isSettingsPanelVisible) return;
            isSettingsPanelVisible = nv;
            if (nv && !SLEEP_MODE) ensureUI();
            applyPanelVisibility();
        });
    } catch (e) {}

    loadCustomBookmark();
    // Automatyczne sprzątanie nagrań bufora po terminie ważności.
    // Nagrania z bufora CAŁEGO filmu (source 'file') są trwałe i nigdy
    // nie są kasowane — dotyczy tylko krótkiego bufora LIVE.
    liveBufPurgeExpired().then(n => {
        if (n > 0) console.info('[DUO] Usunięto ' + n + ' przeterminowanych nagrań bufora LIVE.');
    }).catch(() => {});

    if (SLEEP_MODE) {
        console.info('[DUO] Strona uśpiona (lista domen).');
    } else {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                ensureUI();
                if (singleTabMode && masterPower) claimAudioFocus();
                setupScanMode(scanMode);
                if (masterPower && captionOverlayEnabled) { ensureCaptionOverlay(); updateCaptionOverlay(lastSpokenText); }
                onVideoChanged();
                autoResumeLastMode();
            });
        } else {
            ensureUI();
            if (singleTabMode && masterPower) claimAudioFocus();
            setupScanMode(scanMode);
            if (masterPower && captionOverlayEnabled) { ensureCaptionOverlay(); updateCaptionOverlay(lastSpokenText); }
            onVideoChanged();
            autoResumeLastMode();
        }
        // v4.2.13: połączenie z serwerem tylko przy włączonym lektorze i tylko w głównej ramce
        // (ramki/iframe łączą się dopiero, gdy faktycznie mają coś przeczytać).
        if (masterPower && isTopFrame) connectWebSocket();
        initYtSpeaker();
    }

})();