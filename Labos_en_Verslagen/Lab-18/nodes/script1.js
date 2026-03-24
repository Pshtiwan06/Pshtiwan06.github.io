const setup = () => {
 let paragraaf = document.querySelectorAll("p");
 paragraaf.forEach(p => {p.textContent = "Goed gedaan!"})
}
addEventListener("load", setup)