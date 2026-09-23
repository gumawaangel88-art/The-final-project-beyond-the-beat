function learnMore() {
    document.getElementById("music").scrollIntoView({
        behavior: "smooth"
    });
}


function searchWebsite() {

    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    if (search.includes("music")) {
        document.getElementById("music")
            .scrollIntoView({ behavior: "smooth" });

    } else if (search.includes("live")) {
        document.getElementById("live")
            .scrollIntoView({ behavior: "smooth" });

    } else if (search.includes("idol")) {
        document.getElementById("idols")
            .scrollIntoView({ behavior: "smooth" });

    } else if (search.includes("contact")) {
        document.getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });

    } else {
        alert("Try searching for Music, Live, Idols, or Contact.");
    }
}


document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been received.");

        this.reset();
    });
function searchMusic() {

    const searchValue =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const songs =
        document.querySelectorAll(".song-card");

    songs.forEach(function(song) {

        const songText =
            song.textContent.toLowerCase();

        if (songText.includes(searchValue)) {
            song.style.display = "flex";
        } else {
            song.style.display = "none";
        }

    });

}
// =========================
// IDOLS PAGE
// =========================

function searchIdols() {

    const searchValue =
        document
        .getElementById("idolSearchInput")
        .value
        .toLowerCase();

    const idols =
        document.querySelectorAll(".idol-card");

    idols.forEach(function(idol) {

        const idolText =
            idol.textContent.toLowerCase();

        if (idolText.includes(searchValue)) {

            idol.style.display = "flex";

        } else {

            idol.style.display = "none";

        }

    });
}


function showIdol(idolName) {

    alert(
        "You selected: " + idolName
    );

}
// =========================
// CONTACT PAGE
// =========================

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    document.querySelector(".contact-form form").reset();
}


function socialMessage(platform) {

    alert(
        platform +
        " social media link will be added soon!"
    );

}