let tasks = []

function addnewtask() {
    const addtaskform = document.forms[0]
    addtaskform.addEventListener("submit", (e) => {
        e.preventDefault()
        let newtask = {
            title: addtaskform.taskTitle.value,
            description: addtaskform.taskDescription.value,
            ref: Date.now()
        }
        tasks.push(newtask)
        console.log(tasks)
        StoreToLocalStorage(tasks, "localtasks")
        RenderTasks()
    })

}
addnewtask()

function StoreToLocalStorage(item, key) {
    const ToStore = JSON.stringify(item)
    localStorage.setItem(key, ToStore)
}

function RenderTasks() {
    const taskscontainer = document.getElementById("taskscontainer")
    taskscontainer.innerHTML = ``
    const taskcarddy = document.createElement("div")
    taskcarddy.className = "row g-4 justify-content-center w-100";
    tasks.forEach((task) => {
        taskcarddy.innerHTML += `<div class="task-container  col-12 col-md-6 col-lg-3">
                <div class="task-card d-flex flex-column">
                    <div class="card-body">
                        <h5 class="card-title text-primary">${task.title}</h5>
                        <p class="card-text text-secondary">${task.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button class="editbtn btn btn-outline-primary btn-sm btn-action w-45 data-ref="${task.ref}" ">
                            <i class="bi bi-pencil-square me-1"></i> Modify
                        </button>
                        <button class="deletebtn btn btn-outline-danger btn-sm btn-action w-45">
                            <i class="bi bi-trash me-1"></i> Delete
                        </button>
                    </div>
                </div>
            </div>`
    })
    taskscontainer.appendChild(taskcarddy)
    const editbtns = taskcarddy.querySelectorAll(".editbtn")

    editbtns.forEach((editbtn) => {
        editbtn.addEventListener("click", (e) => {
            const currentTaskRef = editbtn.getAttribute("data-ref")
            console.log(currentTaskRef)
        })
    })
}
RenderTasks()



// function editTask(){

// }
// editTask()
