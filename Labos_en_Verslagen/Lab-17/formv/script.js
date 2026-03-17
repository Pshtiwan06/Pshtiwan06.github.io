const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    let allValid = true;


    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();

    if (voornaam.length > 30) {
        txtVoornaam.className = "invalid";
        errVoornaam.innerHTML = "Max. 30 karakters";
        allValid = false;
    } else {
        txtVoornaam.className = "";
        errVoornaam.innerHTML = "";
    }

    let txtfamillieNaam = document.getElementById("txtfamillieNaam");
    let errfamillieNaam = document.getElementById("errfamillieNaam");
    let famillienaam = txtfamillieNaam.value.trim();

    if (!famillienaam) {
        txtfamillieNaam.className = "invalid";
        errfamillieNaam.innerHTML = "Dit veld is verplicht";
        allValid = false;
    } else if (famillienaam.length > 50) {
        txtfamillieNaam.className = "invalid";
        errfamillieNaam.innerHTML = "Max. 50 karakters";
        allValid = false;
    } else {
        txtfamillieNaam.className = "";
        errfamillieNaam.innerHTML = "";
    }

    let txtGeboortedatum = document.getElementById("geboortedatum");
    let errGeboortedatum = document.getElementById("errgeboortedatum");
    let geboortedatum = txtGeboortedatum.value;

    if (!geboortedatum) {
        txtGeboortedatum.className = "invalid";
        errGeboortedatum.innerHTML = "Verplicht veld";
        allValid = false;
    } else {
        txtGeboortedatum.className = "";
        errGeboortedatum.innerHTML = "";
    }

    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if (!email) {
        txtEmail.className = "invalid";
        errEmail.innerHTML = "Verplicht veld";
        allValid = false;
    } else if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
        txtEmail.className = "invalid";
        errEmail.innerHTML = "Geen geldig email adres";
        allValid = false;
    } else {
        txtEmail.className = "";
        errEmail.innerHTML = "";
    }

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let errAantalKinderen = document.getElementById("errAantalKinderen");
    let aantalKinderen = txtAantalKinderen.value.trim();

    if (aantalKinderen && (isNaN(aantalKinderen) || aantalKinderen < 0 || aantalKinderen > 99)) {
        txtAantalKinderen.className = "invalid";
        if (isNaN(aantalKinderen)) {
            errAantalKinderen.innerHTML = "Voer een geldig getal in";
        } else if (aantalKinderen < 0) {
            errAantalKinderen.innerHTML = "Het aantal kinderen mag niet negatief zijn";
        } else if (aantalKinderen > 99) {
            errAantalKinderen.innerHTML = "Max. 99 kinderen";
        }
        allValid = false;
    } else {
        txtAantalKinderen.className = "";
        errAantalKinderen.innerHTML = "";
    }
    if (allValid) {
        alert("Proficiat! Alle velden zijn correct ingevuld.");
    }
};

window.addEventListener("load", setup);
