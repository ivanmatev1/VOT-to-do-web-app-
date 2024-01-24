const tasksContainer = document.querySelector('.tasks');

const baseURL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.buttonClass');
    addButton.addEventListener('click', function() {
        var inputValue = document.getElementById('inputField').value;
        console.log(inputValue);
        if( inputValue != ""){
          axios.post(`${baseURL}/tasks`, {"task": `${inputValue}`})
          .then(response => {
            console.log('API Response:', response.data);
            makeAPICall();
            document.getElementById('inputField').reset;
          })
          .catch(error => {
            console.error('API Request Error:', error.message);
          })
        }
    });
});

/*function listenForChanges() {
    const interval = 5000;
    
    function makeAPICall() {
      axios.get(`${baseURL}/tasks`)
        .then(response => {
          console.log('API Response:', response.data);
          displayTasks(response.data);
        })
        .catch(error => {
          console.error('API Request Error:', error.message);
        })
        .finally(() => {
          setTimeout(makeAPICall, interval);
        });
    }
    makeAPICall();
}*/

function makeAPICall() {
    axios.get(`${baseURL}/tasks`)
      .then(response => {
        console.log('API Response:', response.data);
        displayTasks(response.data);
      })
      .catch(error => {
        console.error('API Request Error:', error.message);
      })
}

function deleteTask(id){
    axios.delete(`${baseURL}/tasks/${id}`)
    .then(response => {
       console.log(`Deleted post with ID ${id}`);
       makeAPICall();
    })
    .catch(error => {
       console.error(error);
    });
}

function displayTasks(tasks) {
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const taskHeader = document.createElement('th');

    headerRow.appendChild(taskHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');

    // Iterate over the tasks and create table rows
    tasks.forEach(task => {
        const row = document.createElement('tr');
        const taskCell = document.createElement('td');
        const buttonCell = document.createElement('td');
        const button = document.createElement('button');

        taskCell.textContent = task.task;
        button.textContent = 'Delete';
        button.classList.add("buttonClass");
    
        button.addEventListener('click', function () {
            console.log(`Deleting task with ID ${task.id}`);
            deleteTask(task.id);
        });

        buttonCell.appendChild(button);

        row.appendChild(taskCell);
        row.appendChild(buttonCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    tasksContainer.innerHTML = '';
    tasksContainer.appendChild(table);
}


makeAPICall();