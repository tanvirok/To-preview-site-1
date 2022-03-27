// Dom Selection
// Event Listener
// Basic Validation
// Creating Element
// Append

const inputText = document.querySelector('.add_todo_input');
const btn = document.querySelector('.addtudobtn');
const todoList = document.querySelector('.todo_list');
const iteamCounter = document.querySelector('#craud_oparation_counter');
const removeAllTask = document.querySelector('#removeAllTask');
const body = document.querySelector('body');
const something = document.getElementById('something');
let count = 0;


btn.addEventListener('click', function(e){
    e.preventDefault();

    if(inputText.value == ''){
        alert('Please, input something!');
    } 
    else{
        // Creation ul and li lists with input field
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = inputText.value;
        ul.appendChild(li);
        li.appendChild(input);
        todoList.appendChild(ul);
        
        // Creation edit and delete btn 
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        editBtn.innerText = "Edit";
        deleteBtn.innerText = "Delete";
        todoList.appendChild(editBtn);
        todoList.appendChild(deleteBtn);

        // Making style for input field
        input.classList.add("input");

        // Making style for edit and delete btn
        const div = document.createElement('div');
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        li.appendChild(div);
        
        editBtn.classList.add("editBtn");      
        deleteBtn.classList.add("deleteBtn");

        // Iteam counter
        count++;
        iteamCounter.innerText = count;
        // =================================
        inputText.value = '';
        input.setAttribute('readonly', true);

        // Edit btn activity maintain
        editBtn.addEventListener('click', function(){
            if(editBtn.innerText == 'Edit'){
                input.removeAttribute('readonly');
                editBtn.innerText = 'Save';
                input.style.color = 'darkorange';
            }
            else{

                if(input.value == ''){
                    alert('Please fill out the input!');
                }
                else{
                    input.setAttribute('readonly', true);
                    editBtn.innerText = 'Edit';
                    input.style.color = 'black';
                }
            }
            
        })

        // Delete btn activity maintain
        deleteBtn.addEventListener('click', function(){
            ul.removeChild(li);
            count--;
            iteamCounter.innerText = count;
        })

        // Remove All Task maintain
        removeAllTask.addEventListener('click', function(){
            todoList.removeChild(ul);
            count = 0;
            iteamCounter.innerText = count;
        })
        
        // fas btn maintain
        // icon.addEventListener('click', function(){
            // body.classList.toggle('dark');
            // console.log("It is okay !");         
            // if(icon.classList.contains('fa-cloud-sun')){
            //     icon.classList.remove('fa-cloud-sun');
            //     icon.classList.add('fa-moon');
            // }
            // else{
            //     icon.classList.remove('fa-moon');
            //     icon.classList.add('fa-cloud-sun');
            // }
            
        // }) 
        something.addEventListener('click', function(){
            console.log('It is okay !');
        })
        

    }
})


