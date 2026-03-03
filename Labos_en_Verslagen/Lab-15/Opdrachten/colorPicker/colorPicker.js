const setup = () => {
    const sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    update(); // direct juiste kleur/labels tonen bij opstart
};

const update = () => {
    const valueRed = document.getElementById("sldrood").value;
    const valueGreen = document.getElementById("sldgroen").value;
    const valueBlue = document.getElementById("sldblauw").value;

    document.getElementById("rood").innerHTML = valueRed;
    document.getElementById("groen").innerHTML = valueGreen;
    document.getElementById("blauw").innerHTML = valueBlue;

    const swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`;
};

window.addEventListener("load", setup);