document.addEventListener("DOMContentLoaded", function () {
    loadLocal("localtasks")
    RenderTasks()
});
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
function loadLocal(key) {
    let getlocal = localStorage.getItem(key);
    if (getlocal === null) {
        tasks = [];
        return;
    }

    try {
        let localdata = JSON.parse(getlocal);
        tasks = localdata;
    } catch (error) {
        console.error("Couldnt retrive data (data not found , error (404))")
        tasks = [];
    }
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
                        <button class="editbtn btn btn-outline-primary btn-sm btn-action w-45" data-ref="${task.ref}" data-bs-toggle="modal" data-bs-target="#edittask"> 
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
            const foundtask = tasks.find((task) => {
                return task.ref == currentTaskRef
            })
            const modalbody = document.getElementById("editform")
            modalbody.innerHTML = `                            <div class="mb-3">
                                <label for="taskTitle" class="form-label">Task Title</label>
                                <input type="text" class="form-control" id="taskTitleedit" placeholder="Enter task title"
                                    required value ="${foundtask.title}">
                            </div>

                            <div class="mb-3">
                                <label for="taskDescription" class="form-label">Description</label>
                                <textarea class="form-control" id="taskDescriptionedit" placeholder="Add a description..."
                                    style="height: 100px" required>${foundtask.description}</textarea>
                            </div>`
        })

    })
}
RenderTasks()



function editTask() {

}

