const setup = () => {
    let indexOfButton = document.getElementById("indexOf");
    let lastIndexOfButton = document.getElementById("lastIndexOf");

    indexOfButton.addEventListener("click", indexOfFunc);
    lastIndexOfButton.addEventListener("click", lastIndexOfFunc);
}

const indexOfFunc = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let teVinden = "an";
    let aantal = 0;
    let index = tekst.indexOf(teVinden);
    while (index !== -1) {
        aantal++;
        tekst = tekst.substring(index+teVinden.length);
        index = tekst.indexOf(teVinden);
    }
    console.log(aantal)
}

const lastIndexOfFunc = () => {
    let tekst= "De man van An geeft geen hand aan ambetante verwanten";
    let teVinden = "an";
    let aantal = 0;
    let index = tekst.lastIndexOf(teVinden);
    while (index !== -1) {
        aantal++;
        tekst = tekst.substring(0, index);
        index = tekst.lastIndexOf(teVinden);
    }
    console.log(aantal);
}
window.addEventListener("load", setup);