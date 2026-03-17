const setup = () => {
    let input = document.getElementById('input');
    let btnConsole = document.getElementById('btnConsole');

    btnConsole.addEventListener('click', () => toConsole(input));
}

const toConsole = (input) => {
    let text = input.value;
    console.log("before: " + text);
    let newText = text.split("de").join("het");

    console.log("after: " + newText);
};
window.addEventListener("load", setup);
