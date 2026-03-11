const setup = () => {
    let btnSubmit = document.getElementById('btnSubmit')
    btnSubmit.addEventListener('click', methodeAanroepen);
}

const methodeAanroepen = () => {
    let textInput = document.getElementById("textInput").value;
    let resultaat = maakMetSpaties(textInput);
    console.log(resultaat);
}
const maakMetSpaties = (inputText) => {
    let result="";
    for(let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }
    return result;
}
window.addEventListener("load", setup);