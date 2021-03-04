// Declare variables for the to do input and output container 
const taskInput = document.getElementById('to-do-input');
const toDoOutputContainer = document.getElementById('to-do-output-container');
let remainingNumber = document.getElementById('remaining-number');


// Event listener on the submit button to add item to the output
document.getElementById('submit-button').addEventListener('click', getInput);

// Event listener on status active link to display active items
document.getElementById('status-active').addEventListener('click', displayActive);

// Event listener on status completed link to display completed items
document.getElementById('status-completed').addEventListener('click', displayCompleted);

// Event listener on status all link to display all items
document.getElementById('status-all').addEventListener('click', displayAll);



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
    outputStatusButton.classList.add('output-status-button-incomplete');
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
    
    //Call calculate items left function to count active items
    calculateItemsLeft();
  }
  e.preventDefault();
}

/* Count each active item and display the running total in the items left section of the form */
function calculateItemsLeft(statusButton){
  let activeItemsTotal = 0;

  document.querySelectorAll('.output-status-button-incomplete').forEach(button => {
    activeItemsTotal +=1;
  });

  remainingNumber.innerText = activeItemsTotal;
  console.log(activeItemsTotal);
}

/* Delete individual item rows when the delete button is clicked */
function deleteItem(e){
  if(e.target.classList.contains('output-delete-button')){
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

/* Toggle status button complete when button is clicked */
function toggleStatusButton(e){
  let statusButton = e.target;

  if(e.target.classList.contains('output-status-button')){
    console.log('works')
    if(e.target.classList.contains('output-status-button-complete')){
      e.target.classList.remove('output-status-button-complete');
      e.target.classList.add('output-status-button-incomplete');
    }else if(!e.target.classList.contains('output-status-button-complete')){
      e.target.classList.add('output-status-button-complete');
      e.target.classList.remove('output-status-button-incomplete');
    }
  
  } 
  e.preventDefault();
}

/* Display active items when active link is clicked - 
Go through class names and remove all items that have been completed */
function displayActive(e){
  document.querySelectorAll('.output-status-button-complete').forEach
  (row => row.parentElement.parentElement.style.display = "none");

  document.querySelectorAll('.output-status-button-incomplete').forEach
  (row => row.parentElement.parentElement.style.display = "flex");
  console.log('works');
  e.preventDefault();
}

/* Display active items when active link is clicked - 
Go through class names and remove all items that have been completed */
function displayCompleted(e){
  document.querySelectorAll('.output-status-button-complete').forEach
  (row => row.parentElement.parentElement.style.display = "flex");

  document.querySelectorAll('.output-status-button-incomplete').forEach
  (row => row.parentElement.parentElement.style.display = "none");
  console.log('Block');
  e.preventDefault();
}

/* Display active items when active link is clicked - 
Go through class names and remove all items that have been completed */
function displayAll(e){
  document.querySelectorAll('.output-status-button-complete').forEach
  (row => row.parentElement.parentElement.style.display = "flex");

  document.querySelectorAll('.output-status-button-incomplete').forEach
  (row => row.parentElement.parentElement.style.display = "flex");
  console.log('Block');
  e.preventDefault();
}