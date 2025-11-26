
let list = []

const addform = document.forms[0]
GetLocalStorage("totalpeople")
addform.addEventListener("submit", (e) => {
    console.log("works")
    e.preventDefault()
    let person = {
        name: addform.name.value,
        age: addform.age.value
    }
    list.push(person)
    StoreToLocalStorage(list, "totalpeople")
})
console.log(list)
function StoreToLocalStorage(item, key) {
    const ToStore = JSON.stringify(item)
    localStorage.setItem(key, ToStore)
}
function GetLocalStorage(key) {
    let getlocal = localStorage.getItem(key)
    let localdata = JSON.parse(getlocal)
    localdata = list
}

