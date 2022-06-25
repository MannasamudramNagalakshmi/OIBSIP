
let inputTask=document.querySelector(".input input");
let addBtn=document.querySelector(".input span");
let clearBtn=document.querySelector(".clear");
let filters=document.querySelectorAll(".filters span");
let taskBox=document.querySelector(".taskBox")
let editedId;
let edit=false;
let todos=JSON.parse(localStorage.getItem("todo_list"));
function showTask(filter)
{
    let li="";
    if(todos){
        todos.forEach((work,id) => {
            let isChecked=(work.status=="completed")?"checked":"";
            if(filter==work.status||filter=="all")
            {
                li+=`<li class="task">
            <label for="${id}">
                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isChecked}>
                <p class=${isChecked}>${work.name}</p>
            </label>
            <div>
                <span title="Edit" onclick="Edit('${work.name}',${id})"><i class="bi bi-pencil-square"></i></span>
                <span title="Delete" onclick="Delete(${id})"><i class="bi bi-trash3"></i></span>
            </div>
        </li>`;
            }
        });
    }
    taskBox.innerHTML=li||`<span>You don't have any tasks here</span>`;
}
showTask("all");
filters.forEach((e)=>{
    e.addEventListener("click",()=>{
        document.querySelector("span.active1").classList.remove("active1");
        e.classList.add("active1");
        showTask(e.id);
    })
})
function updateStatus(selectedEle){
    let taskNameupd=selectedEle.parentElement.lastElementChild;
    if(selectedEle.checked){
        taskNameupd.classList.add("checked");
        todos[selectedEle.id].status="completed";
    }
    else{
        taskNameupd.classList.remove("checked");
        todos[selectedEle.id].status="pending";
    }
    localStorage.setItem("todo_list",JSON.stringify(todos));
}
function Edit(selectedTask,selectedTaskId){
    inputTask.value=selectedTask;
    editedId=selectedTaskId;
    edit=true;
}
function Delete(deleteId){
    todos.splice(deleteId,1);
    localStorage.setItem("todo_list",JSON.stringify(todos));
    showTask("all");
}
clearBtn.addEventListener("click",()=>{
    todos.splice(0,todos.length);
    localStorage.setItem("todo_list",JSON.stringify(todos));
    showTask("all");
})
inputTask.addEventListener("keyup",(e)=>{
    let userTask=inputTask.value.trim();

    if(userTask!=0)
    {
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    } 
    if(e.key=="Enter"&&userTask)
    {
        if(!edit)
        {
            if(!todos)
            {
                todos=[];
            }
            let taskInfo={name: userTask,status:"pending"};
            todos.push(taskInfo);
        }
        else{
            todos[editedId].name=userTask;
            edit=false;
        }
        inputTask.value="";
        addBtn.classList.remove("active");
        localStorage.setItem("todo_list",JSON.stringify(todos));
        showTask("all");
    }
})
addBtn.addEventListener("click",()=>{
    let userTask=inputTask.value.trim();
    if(userTask){
        if(!edit)
        {
            if(!todos)
            {
                todos=[];
            }
            let taskInfo={name: userTask,status:"pending"};
            todos.push(taskInfo);
        }
        else{
            todos[editedId].name=userTask;
            edit=false;
        }
        inputTask.value="";
        addBtn.classList.remove("active");
        localStorage.setItem("todo_list",JSON.stringify(todos));
        showTask("all");
    }
})
