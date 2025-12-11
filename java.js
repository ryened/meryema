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
        iframe.src = 'https://youtu.be/otwkkWS8pxg?si=4vhqC7n8YSfX0w_i';
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
    // Attach form submit handler from JS so the event object is passed reliably
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
    // Attach click handler to the button (if you changed to type="button")
    const btn = document.querySelector('input[type="button"]');
    if (btn) {
        btn.addEventListener('click', function (e) { yo(e); });
    }
});

// Debugging: log when yo() runs and when iframe is set
const _origYo = yo;
function yo(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log('yo() called, preventing default and setting iframe src');
    const iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.src = 'https://youtu.be/otwkkWS8pxg?si=4vhqC7n8YSfX0w_i';
        console.log('iframe src set to', iframe.src);
    } else {
        console.warn('No iframe found on page');
    }
    return false;
}