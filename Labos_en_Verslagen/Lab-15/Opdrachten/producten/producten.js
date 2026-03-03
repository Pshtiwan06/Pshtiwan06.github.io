const setup = () => {
    let btnBereken = document.getElementById("btnBereken");
    btnBereken.addEventListener("click", berekenen)
}

const berekenen = () => {
    let totaal = document.getElementById("totaal");
    let prijzen = document.getElementsByClassName("prijs");
    let aantalen = document.getElementsByClassName("aantal");
    let tarieven = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaalInt = 0;
    for (let i = 0; i < aantalen.length; i++) {
        let prijsString = prijzen[i].textContent;
        let prijs = parseFloat(prijsString);

        let btwString = tarieven[i].textContent;
        let btw = parseInt(btwString, 10);

        let aantal = parseInt(aantalen[i].querySelector("input").value, 10) || 0;

        let subtotaal = (prijs * aantal) * ((btw/100)+1);
        subtotalen[i].textContent = subtotaal.toFixed(2).toString() + " EUR";

        totaalInt += subtotaal;
    }
    totaal.textContent = totaalInt.toFixed(2).toString() + " EUR";

}

window.addEventListener("load", setup);