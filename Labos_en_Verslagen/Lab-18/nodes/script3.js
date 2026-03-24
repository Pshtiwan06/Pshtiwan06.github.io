const setup = () => {
    const knop = document.querySelector("#btn");
  const div = document.querySelector("#myDIV");

  knop.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Nieuw p element";
    div.appendChild(p);
  });
}
window.addEventListener("load", setup);