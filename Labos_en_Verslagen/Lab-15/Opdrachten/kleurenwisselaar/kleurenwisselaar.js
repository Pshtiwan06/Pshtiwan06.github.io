const setup = () =>{
    let elem = document.getElementsByClassName("");
    for(i = 0; i < elem.length; i++){
        elem[i].addEventListener("click", () => {
            elem[i].classList.toggle("active")
        })
    }
}