const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toon);
};

const toon = () => {
    let chkIsRoker = document.getElementById("chkIsRoker");
    if (chkIsRoker.checked) {
        console.log("is roker");
    } else {
        console.log("is geen roker");
    }

    let rbtMoedertaal = document.getElementsByName("rbtMoedertaal");
    for (let i = 0; i < rbtMoedertaal.length; i++) {
        if (rbtMoedertaal[i].checked) {
            console.log("moedertaal is " + rbtMoedertaal[i].value);
            break;
        }
    }

    let selFavorieteBuurland = document.getElementById("selFavorieteBuurland");
    let selectedIndex = selFavorieteBuurland.selectedIndex;
    let option = selFavorieteBuurland.options[selectedIndex];
    console.log("favoriete buurland is " + option.text);

    let bestellingen = [];
    document.querySelectorAll("#bestellingen option:checked").forEach(option => {
        bestellingen.push(option.value);
    });

    console.log("bestellingen: " + bestellingen.join(", "));
};

window.addEventListener("load", setup);