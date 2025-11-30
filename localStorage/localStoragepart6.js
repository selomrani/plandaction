document.addEventListener("DOMContentLoaded", function () {
    GetLocalStorage("storestaff")
    renderstaffcards()
});
let staff = []


const addform = document.forms[0]
addform.addEventListener("submit", (e) => {
    e.preventDefault()
    let person = {
        fullname: addform.name.value,
        ref: addform.ref.value
    }
    GetLocalStorage("storestaff")
    staff.push(person)
    StoreToLocalStorage(staff, "storestaff")
    renderstaffcards()
})

function renderstaffcards() {
    const staffcard = document.createElement("div")
    const cardsholder = document.getElementById("cardsholder")
    cardsholder.innerHTML = ""
    staff.forEach(staffmemner => {
        staffcard.innerHTML += `            <div class="card m-3">
                <div class="card-body d-flex gap-5">
                    <div class="pfp">
                        <img src="../src/user-regular-full.svg" alt=""
                            style="width: 40px ; border: 2px solid navy; border-radius: 50%;">
                    </div>
                    <div class="fullname fs-4">${staffmemner.fullname}</div>
                    <button class="delete btn btn-danger align-self-end" staff-ref="${staffmemner.ref}"><i class="bi bi-trash"></i></button>
                </div>
            </div>`
    })
    cardsholder.appendChild(staffcard)
    const delteBtns = document.querySelectorAll(".delete")
    delteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener("click", (e) => {
            const dltref = e.currentTarget.getAttribute("staff-ref");
            const staffToDelete = staff.find(staffMember => {
                return staffMember.ref == dltref
            })
            for (let i = 0; i < staff.length; i++) {
                if (staff[i] == staffToDelete) {
                    staff.splice(i, 1)
                }
            }
            StoreToLocalStorage(staff, "storestaff")
            renderstaffcards()

        })

    })
}
renderstaffcards()

function StoreToLocalStorage(item, key) {
    const ToStore = JSON.stringify(item)
    localStorage.setItem(key, ToStore)
}
function GetLocalStorage(key) {
    let getlocal = localStorage.getItem(key)
    let localdata = JSON.parse(getlocal)
    staff = localdata
}

//  finished part 6