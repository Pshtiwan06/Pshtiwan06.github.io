const setup = () => {
    const sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    document.getElementById("btnSave").addEventListener("click", saveColor);

    update();
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

const saveColor = () => {
    let swatch = document.getElementById("swatch");
    let divColors = document.getElementById("divColor");
    let btnDelete = document.createElement("button");
    let obj = document.createElement("div");

    obj.style.backgroundColor = swatch.style.backgroundColor;
    obj.style.position = "relative";
    obj.style.width = "70px";
    obj.style.height = "70px";
    obj.style.margin = "5px";
    obj.style.display = "inline-block";

    btnDelete.textContent = "x";
    btnDelete.style.position = "absolute";
    btnDelete.style.top = "2px";
    btnDelete.style.right = "2px";

    divColors.appendChild(obj);
    obj.appendChild(btnDelete);

    btnDelete.addEventListener("click", deleteColor);
};

const deleteColor = (event) => {
    event.target.parentElement.remove();
};

window.addEventListener("load", setup);