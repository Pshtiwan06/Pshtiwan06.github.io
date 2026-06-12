const go = document.getElementById("go");

function create(title, text, url){
    document.getElementById("cardhistory").childNodes;
    document.createElement("div");
    document.createElement("h5");
    document.createElement("p");
}


function zoeken(){
    let zoek = document.getElementById("zoek").value;
    const vcmds = "ygix"
    let cmd = zoek.toLowerCase().slice(0, 3);
    let rest = zoek.toLowerCase().slice(3)
    let valid = false;

    while(!valid){
    if(cmd.slice(0, 1) != "/"){
        alert("Invalid command")
    }else if(vcmds.indexOf(cmd.slice(1, 2)) == -1 || cmd.slice(2, 3) != " " || cmd.slice(2, 3) != ''){
        alert("Unknown command prefix")
    }else{valid = true}
    }
    switch(cmd){
        case "/y": window.open('https://Youtube.com/results?search_query=' + rest, '_blank');
        // let card = {
        //     title: "youtube",
        //     text: rest,
        //     url: 'https://Youtube.com/results?search_query=' + rest
        // }



        break;
        case "/g": window.open('https://Google.com/search?q=' + rest, '_blank');
        break;
        case "/i": window.open('https://Instagram.com/explore/tags/' + rest, '_blank');
        break;
        case "/x": window.open('https://X.com/hashtag/' + rest, '_blank');
        break;
    }
    document.getElementById("zoek").value = "";
}
go.onclick = zoeken;
go.onclick = create("a", "b", "c")