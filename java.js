// Prompt and DOM updates
function salut() {
    let mp = prompt("mode pass talifunk");
    while (mp != 503322 && mp != 53939279 && mp != 27002212 && mp != 200520) {
        mp = prompt("hata nomru talifunik nasih?");
    }
    if (mp == 503322) {
        document.getElementById("i").innerHTML = "Saroura";
        document.getElementById("il").innerHTML = "bent el hamadi";
        document.getElementById("des").innerHTML = "just habit ngolk makber rassek ya isra w nchalah tanjah l bac w nasm3 ek tsaghrita";
    } else if (mp == 53939279) {
        document.getElementById("i").innerHTML = "Rayen";
        document.getElementById("il").innerHTML = "Patron";
    } else if (mp == 200520) {
        document.getElementById("i").innerHTML = "Weld sahbtiiiiii";
    } else if (mp == 27002212) {
        document.getElementById("i").innerHTML = "Meryema";
        document.getElementById("il").innerHTML = "Al hob";
        document.getElementById("des").innerHTML = "ana nhebik barcha w nhebb na3mel 3lik haja mli7a barcha barcha barcha ...";
    }
    return true;
}

// Call the password prompt only once per browser session.
function askPasswordOnce() {
    if (!sessionStorage.getItem('askedPass')) {
        salut();
        sessionStorage.setItem('askedPass', '1');
    }
}

// Safe handler for setting the iframe src without letting a form submit/reload the page.
function yo(event) {
    if (event && event.preventDefault) event.preventDefault();
    const iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.src = 'https://www.youtube.com/embed/otwkkWS8pxg';
    }
    return false;
}

// Generic submit handler to attach to forms/buttons that should not reload the page.
function handleSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    return yo();
}

// If you want the prompt to run on load, use this (it will only run once per session):
document.addEventListener('DOMContentLoaded', function () {
    askPasswordOnce();
});