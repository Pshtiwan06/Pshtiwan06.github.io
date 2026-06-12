const funny = document.getElementById("funny");
const smart = document.getElementById("smart");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const s = document.getElementById("s");

s.onclick = function(){
    let sm = false;
    let fn = false;
    let msg = "";
    let lk = false;
    let dlk = false;

    fn = document.getElementById("funny").ischecked;
    if(document.getElementById("smart").ischecked){sm = true}

    if(document.getElementById("like").ischecked){document.getElementById("dislike").uncheck; lk = true; dlk = false;}
    if(document.getElementById("dislike").ischecked){document.getElementById("like").uncheck; dlk = true; lk = false;}



    if(!fn){
        msg += "You didn't find it funny, "
    }else{msg += "You did find it funny, "}
    if(!sm){msg += "didn't find it smart, "}else{msg += "did find it smart and "}
    if(lk){
        msg += "you liked!"
    }else{msg += "you disliked!"}


    document.getElementById("c").textContent = msg;
}