// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name) {
    const appendCat = [...cats, name];
    return appendCat
}
function prependCat(name){
    const prependCat = [name, ...cats]
    return prependCat
}
function removeLastCat(){
    const lessCats = cats.slice(0,2);
    return lessCats;
}
function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}