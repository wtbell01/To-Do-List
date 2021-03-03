// Declare variables for the to do input and output container 
const taskInput = document.getElementById('to-do-input');
const toDoOutputContainer = document.getElementById('to-do-output-container');

// Event listener on the submit button to add item to the output
document.getElementById('submit-button').addEventListener('click', getInput);

//Event listener on the output container to delete individual items
toDoOutputContainer.addEventListener('click', deleteItem);

//Event listener on the output container to toggle completion styling on the status button
toDoOutputContainer.addEventListener('click', toggleStatusButton);


// Function that gets input and creates elements to display to the output
function getInput(e){
  if(taskInput.value === ""){
    alert('Enter an item');
  }else{
    // Variable for output row div
    let toDoOutputRow = document.createElement('div');
    toDoOutputRow.classList.add('to-do-output-row');

    // Variable for output status button div, add class and append to output row
    let outputStatusButtonContainer = document.createElement('div');
    outputStatusButtonContainer.classList.add('output-status-button-container');
    toDoOutputRow.appendChild(outputStatusButtonContainer);
    

    // Variable for output status button, add class and append to the output status button container
    let outputStatusButton = document.createElement('a');
    outputStatusButton.classList.add('output-status-button');
    outputStatusButtonContainer.appendChild(outputStatusButton);

    // Variable for checkmark inside the output status button,add class and append to the output status button
    let checkmark = document.createElement('i');
    checkmark.classList.add('fas');
    checkmark.classList.add('fa-check');
    outputStatusButton.appendChild(checkmark);

    // Variable for output text div, add class and append to the output row
    let outputTextContainer = document.createElement('div');
    outputTextContainer.classList.add('output-text-container');
    toDoOutputRow.appendChild(outputTextContainer);

    // Variable for output text, add class and append to the output text container
    let outputText = document.createElement('p');
    outputText.classList.add('output-text');
    outputText.appendChild(document.createTextNode(taskInput.value));
    outputTextContainer.appendChild(outputText);

    // Variable for output delete container, add class and append to the output row
    let outputDeleteButtonContainer = document.createElement('div');
    outputDeleteButtonContainer.classList.add('output-delete-button-container');
    toDoOutputRow.appendChild(outputDeleteButtonContainer);

    // Variable for output delete button/link, add class and append to the output delete container
    let outputDeleteButton = document.createElement('a');
    outputDeleteButton.classList.add('output-delete-button');
    outputDeleteButton.innerText = 'x';
    outputDeleteButtonContainer.appendChild(outputDeleteButton);
    

    // Display the output row in the output container
    toDoOutputContainer.appendChild(toDoOutputRow);
    
  }
  e.preventDefault();
}


function deleteItem(e){
  if(e.target.classList.contains('output-delete-button')){
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

function toggleStatusButton(e){
  if(e.target.classList.contains('output-status-button')){
    if(e.target.classList.contains('output-status-button-complete')){
      e.target.classList.remove('output-status-button-complete');
    }else if(!e.target.classList.contains('output-status-button-complete')){
      e.target.classList.add('output-status-button-complete');
    }
  }
  e.preventDefault();
}