const setup = () => {
    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", toConsole);
};

const toConsole = () => {
    let input = document.getElementById("textInput").value;
    let output = "";

    for (let i = 0; i < input.length; i++) {
        if(input.charAt(i) === " ") {
            output += input.charAt(i);
        } else {
            output += " " + input.charAt(i);
        }
    }

    console.log(output);
};

window.addEventListener("load", setup);