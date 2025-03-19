let toggleState = 0;

function toggleContact() {
    let contactText = document.getElementById("contact-text");

    if (toggleState === 0) {
        contactText.innerHTML = "Contact: 8319001260";
        toggleState = 1;
    } else if (toggleState === 1) {
        contactText.innerHTML = "Manish Mod Gaye";
        toggleState = 2;
    } else {
        contactText.innerHTML = "";
        toggleState = 0;
    }
}
