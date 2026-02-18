let familieLeden = ["Jeffery", "Nicholas", "Twin", "Boid", "Theyo"];
console.log(familieLeden.length);
console.log(familieLeden[0], familieLeden[2], familieLeden[4])
let VoegNaamToe = () =>{
    let persoon = prompt("Wie wil je toevoegen aan je array?")
    if(persoon != null){
        familieLeden.push(persoon);
    }
}
console.log(familieLeden);
VoegNaamToe();
let tekst = familieLeden.toString();
console.log(familieLeden);