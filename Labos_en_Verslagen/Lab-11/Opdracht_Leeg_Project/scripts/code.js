const setup = () => {

}
const t = document.querySelector("h1");
const b = document.querySelector("button");

let butt = JSON.parse(localStorage.getItem("butt")) ?? [];
function opsbutt () {localStorage.setItem("butt", JSON.stringify(t.textContent));}
b.addEventListener("click", ()=>{

    t.textContent="sqdfqsdf";
    opsbutt();
});




window.addEventListener("load", setup);