const setup = () => {
    let gemeenten = [];

    while (true) {
        let gemeente = prompt("Geef een gemeente in (typ 'stop' om te stoppen):");
        if (gemeente === null || gemeente.toLowerCase() === 'stop') {

            break;
        }

        if (gemeente.trim() !== "") {
            gemeenten.push(gemeente.trim());
        }
    }
    gemeenten.sort();
    let gemeenteSelect = document.getElementById("gemeenteSelect");
    gemeenten.forEach(gemeente => {
        let option = document.createElement("option");
        option.value = gemeente;
        option.textContent = gemeente;
        gemeenteSelect.appendChild(option);
    })
}
window.addEventListener("load", setup);