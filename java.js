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

// Safe handler for setting the local video src without letting a form submit/reload the page.
function yo(event) {
    if (event && event.preventDefault) event.preventDefault();
    const video = document.getElementById('localVideo') || document.querySelector('video');
    if (video) {
        // Local file path provided by user (file URI). If you move the file into the project,
        // replace this with a relative path like 'videos/myvideo.mp4'.
        video.src = 'file:///C:/Users/syray/Downloads/Njibou%20L%20Bac%20We%20Ndiro%20Day%20Day.mp4';
        try { video.load(); video.play(); } catch (e) {}
    }
    return false;
}

// Generic submit handler to attach to forms/buttons that should not reload the page.
function handleSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    return yoDebug(e);
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
        btn.addEventListener('click', function (e) { yoDebug(e); });
    }
});

// Debugging: log when yo() runs and when video is set
function yoDebug(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log('yo() called, preventing default and setting video src');
    const video = document.getElementById('localVideo') || document.querySelector('video');
    if (video) {
        video.src = 'file:///C:/Users/syray/Downloads/Njibou%20L%20Bac%20We%20Ndiro%20Day%20Day.mp4';
        console.log('video src set to', video.src);
        try { video.load(); video.play(); } catch (e) {}
    } else {
        console.warn('No video element found on page');
    }
    return false;
}

// Replace the main handler with debug handler for extra logging
// (the click listener calls `yo`, so update it to call `yoDebug` below)