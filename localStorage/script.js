//exercice (partie 1)
let person = {
    "name" : "Ali"
}
// store to local storage
const itemtostore = JSON.stringify(person)
localStorage.setItem("person",itemtostore)
console.log(itemtostore)

//get from local storage 
const localdata = localStorage.getItem("person")
const storeddata = JSON.parse(localdata)
console.log(storeddata)