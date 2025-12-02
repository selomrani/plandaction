document.addEventListener("DOMContentLoaded", function () {
    GetLocalStorage("LocalContacts")
    RenderContacts(contacts)
});
let contacts = [];
function addNewContact() {
    const addForm = document.forms["addForm"];
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let newContact = {
            fullname: addForm.FullName.value,
            email: addForm.email.value,
            phone: addForm.phone.value,
            ref: Date.now()
        };
        contacts.push(newContact);
        addForm.reset();
        console.log(contacts)
        RenderContacts(contacts)
        StoreToLocalStorage(contacts, "LocalContacts")
    })
}
addNewContact()
function RenderContacts(array) {
    const contactList = document.getElementById("contactList")
    const contactCard = document.createElement("div")
    contactList.innerHTML = ``
    array.forEach((contact) => {
        contactCard.innerHTML += `                    <div class="Contactcard mb-3 w-100">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${contact.fullname}</h5>
                            <div class="card-text mb-3">
                                <div class="mb-1"><i
                                        class="bi bi-envelope me-2 text-primary"></i>${contact.email}
                                </div>
                                <div><i class="bi bi-telephone me-2 text-success"></i>${contact.phone}</div>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="editbtn btn btn-warning flex-fill" data-bs-toggle="modal" data-bs-target="#EditContact" data-ref="${contact.ref}"><i class="bi bi-pencil-square"></i>
                                    Edit</button>
                                <button class="deletebtn btn btn-danger flex-fill" data-ref="${contact.ref}"><i class="bi bi-trash"></i> Delete</button>
                            </div>
                        </div>`
        contactList.appendChild(contactCard)
    })
    const deletebtns = document.querySelectorAll(".deletebtn")
    deletebtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", (e) => {
            const currentref = e.target.getAttribute("data-ref")
            const foundContact = contacts.find((contact) => {
                return contact.ref == currentref
            })
            console.log(foundContact)
            for (let i = 0; i < array.length; i++) {
                if (array[i] == foundContact) {
                    array.splice([i], 1)
                }
                StoreToLocalStorage(contacts, "LocalContacts")
                RenderContacts()
            }
        })
    })
    const editbtns = document.querySelectorAll(".editbtn")
    const editbody = document.getElementById("editbody")

    editbtns.forEach((editbtn) => {
        editbtn.addEventListener("click", (e) => {
            const currentref = e.target.getAttribute("data-ref")
            const contactToEdit = array.find((contact) => {
                return contact.ref == currentref
            })

            for (let i = 0; i < contacts.length; i++) {
                if (array[i] == contactToEdit) {
                    editbody.innerHTML = `
                    <form class="form" name="editform">
                        <div class="mb-3">
                            <label for="FullName" class="form-label">Full Name</label>
                            <input type="text" id="editFullName" name="FullName" class="form-control" value="${array[i].fullname}">
                        </div>
                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input type="email" id="editemail" name="email" class="form-control" value="${array[i].email}">
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone number</label>
                            <input type="tel" id="editphone" name="phone" class="form-control" value="${array[i].phone}">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </form>`
                    const editform = document.forms["editform"]
                    editform.addEventListener("submit", (e) => {
                        e.preventDefault()
                        array[i] = {
                            fullname: editform.editFullName.value,
                            email: editform.editemail.value,
                            phone: editform.editphone.value,
                            ref: contacts[i].ref
                        }
                        RenderContacts(contacts)
                        StoreToLocalStorage(contacts, "LocalContacts")
                    })

                }
            }
        })
    })
}

function seachbyEmail() {
    const search = document.forms["search"]

    search.addEventListener("submit", (e) => {
        e.preventDefault()
        const searchkeyword = search.searchinput.value
        const searchedcontact = contacts.find((contact) => {
            return contact.email == searchkeyword
        })
        RenderContacts([searchedcontact])
    })
}
seachbyEmail()

function StoreToLocalStorage(item, key) {
    const ToStore = JSON.stringify(item)
    localStorage.setItem(key, ToStore)
}

function GetContactsFromLocalStorage(key) {

}

function GetLocalStorage(key) {
    let getlocal = localStorage.getItem(key)
    let localdata = JSON.parse(getlocal)
    contacts = localdata
}

