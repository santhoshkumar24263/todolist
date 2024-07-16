import React, { createElement, useState } from 'react'
import './TodoCss.css'
const TodoComponent = () => {
    // const [task,setTask]=useState('');
    // const [list,setList]=useState([]);
    function taskAdd(event){
        // setList([...list,task]);
        // var mybr = document.createElement('br');
        // let x=document.getElementById("lis");
        // x.append(`${task}`);
        // x.append(mybr)
        event.preventDefault();
        let task = document.getElementById("taskName").value;
        let table = document.getElementById("outputTable");
        if(task==""){
          alert("Please enter a Task");
        }
        else{
          if(table.rows.length<1){
            table.style.display="none";
          }
          else{
            table.style.display="flex";
            table.style.justifyContent="center"
            table.style.width="100%";
            table.style.height="100%";
            table.style.margin="0px auto"
            table.style.marginTop="20px"
            table.style.alignItems="center"


            let newRow = table.insertRow(table.rows.length);
            newRow.insertCell(0).innerHTML = task;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editData(editButton));
            editButton.style.color="white"
            editButton.style.backgroundColor="red"
            editButton.style.padding="10px"
            editButton.style.margin="10px"
            editButton.style.border="none"
            editButton.style.borderRadius="10px"
            editButton.style.cursor="pointer"

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteData(deleteButton));
            deleteButton.style.color="white"
            deleteButton.style.backgroundColor="red"
            deleteButton.style.padding="10px"
            deleteButton.style.margin="10px"
            deleteButton.style.border="none"
            deleteButton.style.borderRadius="10px"
            deleteButton.style.cursor="pointer"

            const newCell = newRow.insertCell(1);
            newCell.appendChild(editButton);
            newCell.appendChild(deleteButton);
            clearInputs();
          }
        }
    }
    function editData(button){
      event.preventDefault();
      let row = button.parentNode.parentNode;
      let taskCell = row.cells[0];
      taskCell.value
      let taskInput =prompt("Enter the updated task:",taskCell.innerHTML);
      if(taskInput==""){
        alert("Enter a task to update.");
      }
      else{
        taskCell.innerHTML = taskInput;
      }
    }
    function deleteData(button) {

      // Get the parent row of the clicked button
      let row = button.parentNode.parentNode;

      // Remove the row from the table
      row.parentNode.removeChild(row);
      let table = document.getElementById("outputTable");
      if(table.rows.length==1){
        table.style.display="none";
      }
  }
  function clearInputs() {

    // Clear input fields
    document.getElementById("taskName").value = "";
  }
  return (
    <div className="maindiv">
      <h1>Todo-List</h1>
        <form>
            <input type="text" id="taskName" placeholder='Enter a Task'/> 
            <button className='addButton' onClick={taskAdd}>Add</button>
            <table id="outputTable">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
        </form>
    </div>
  )
}
export default TodoComponent