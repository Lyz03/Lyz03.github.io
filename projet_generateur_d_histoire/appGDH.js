let userName = document.querySelector("input[type='text']");

let name = [
    "Erwin",
    "Eren",
    "Livai",
    "Mikasa",
    "Armin"
];

let objects = [
    " une Eppé",
    " un Equipement Tridimentionelle",
    " un Balais",
    " une Hache"
];

let temperatures = [
    "10°",
    "20°",
    "15°",
    "5°",
    "0°"
];

let places = [
    " à la Zone d'entrainement ",
    " au District de Trost ",
    " au District de Shiganshina ",
    " à l'Exterieur des murs ",
    " au District de Stohese "
];

let verbs = [
    "se Battre contre les Titans",
    "s'entrainer",
    "se Battre contre le Cuirasse",
    "se Battre contre le Colosal",
    "se Battre contre le Bestial"
];

/*
* return : the name of your array[random number]
 */
function randomIndex(arrayName) {
    const randomNumber = Math.floor(Math.random() * arrayName.length);
    return arrayName[randomNumber];
}

document.querySelector('button').addEventListener("click", function () {
    if (userName.value.length === 0) {
        userName.value = 'Vous';
    }
    document.querySelector('.container').style.display = 'block';
    document.getElementById('story').innerText += userName.value + " et " + randomIndex(name) + " sont allés "
        + randomIndex(places) + " pour " + randomIndex(verbs) + " avec " + randomIndex(objects) + " alors qu'il faisaient "
        + randomIndex(temperatures) + "." + '\n';
})
