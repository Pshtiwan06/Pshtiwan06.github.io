const setup = () => {
    let txtTekst = document.getElementById('txtTekst');
    document.getElementById('btnToon').addEventListener('click', () => toon(txtTekst));

    const toon = (tekst) => {
        let tekstUse = tekst.value;
        let txtOutput = document.getElementById('txtOutput');
        txtOutput.innerHTML = "";

        for (let i = 0; i <= tekstUse.length - 3; i++) {
            console.log(tekstUse.slice(i, i + 3));
            txtOutput.innerHTML += `<li>${tekstUse.slice(i, i + 3)}</li>`;
        }
    }
}

window.addEventListener("load", setup);