let staff = [{
    fullname: "Soufyane el omrani",
    ref :123222
},
{
    fullname: "Adam taj",
    ref : 293922
},
{
    fullname: "Walid jadour",
    ref:456170
}, {
    fullname: "john cena",
    ref : 239383
}]

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
}
renderstaffcards()
const delteBtns = document.querySelectorAll(".delete")
delteBtns.forEach(deleteBtn=>{
    deleteBtn.addEventListener("click",(e)=>{
        const dltref = e.currentTarget.getAttribute("staff-ref");
        console.log(dltref)
    })
})