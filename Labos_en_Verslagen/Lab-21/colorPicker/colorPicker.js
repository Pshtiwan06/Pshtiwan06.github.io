const setup = () => {
    const sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    document.getElementById("btnSave").addEventListener("click", saveColor);

    loadSliders();
    loadColors();

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

    saveSliders();
};

const saveSliders = () => {
    const values = {
        r: document.getElementById("sldrood").value,
        g: document.getElementById("sldgroen").value,
        b: document.getElementById("sldblauw").value
    };

    sessionStorage.setItem("sliders", JSON.stringify(values));
};

const loadSliders = () => {
    const data = sessionStorage.getItem("sliders");

    if (data) {
        const values = JSON.parse(data);

        document.getElementById("sldrood").value = values.r;
        document.getElementById("sldgroen").value = values.g;
        document.getElementById("sldblauw").value = values.b;
    }
};

const saveColor = () => {
    let swatch = document.getElementById("swatch");
    let color = swatch.style.backgroundColor;

    createColorBlock(color);

    let colors = JSON.parse(localStorage.getItem("colors")) || [];
    colors.push(color);
    localStorage.setItem("colors", JSON.stringify(colors));
};

const loadColors = () => {
    let colors = JSON.parse(localStorage.getItem("colors")) || [];

    for (let i = 0; i < colors.length; i++) {
        createColorBlock(colors[i]);
    }
};

const createColorBlock = (color) => {
    let divColors = document.getElementById("divColor");
    let btnDelete = document.createElement("button");
    let obj = document.createElement("div");

    obj.style.backgroundColor = color;
    obj.style.position = "relative";
    obj.style.width = "70px";
    obj.style.height = "70px";
    obj.style.margin = "5px";
    obj.style.display = "inline-block";

    btnDelete.textContent = "x";
    btnDelete.style.position = "absolute";
    btnDelete.style.top = "2px";
    btnDelete.style.right = "2px";

    btnDelete.addEventListener("click", () => {
        deleteColor(obj, color);
    });

    obj.appendChild(btnDelete);
    divColors.appendChild(obj);
};

const deleteColor = (element, color) => {
    element.remove();

    let colors = JSON.parse(localStorage.getItem("colors")) || [];
    colors = colors.filter(c => c !== color);
    localStorage.setItem("colors", JSON.stringify(colors));
};

window.addEventListener("load", setup);