
let list = []

const addform = document.forms[0]
addform.addEventListener("submit", (e) => {
    e.preventDefault()
    let person = {
        name: addform.name.value,
        age: addform.age.value
    }
    GetLocalStorage("totalpeople")
    list.push(person)
    StoreToLocalStorage(list, "totalpeople")
    console.log(list)
})
function StoreToLocalStorage(item, key) {
    const ToStore = JSON.stringify(item)
    localStorage.setItem(key, ToStore)
}
function GetLocalStorage(key) {
    let getlocal = localStorage.getItem(key)
    let localdata = JSON.parse(getlocal)
    list = localdata
}

