// Declare variables for the to do input, output container, and remaining items on the form 
const taskInput = document.getElementById('to-do-input');
const toDoOutputContainer = document.getElementById('to-do-output-container');
let remainingNumber = document.getElementById('remaining-number');

// Calls function that loads all event listeners on the form
loadAllEventListeners();


// All of the event listeners on the form
function loadAllEventListeners(){
  // Event listener on the submit button to add an item to the output
  document.getElementById('submit-button').addEventListener('click', getInput);

  // Event listener on the submit button to calculate and display the number of remaining active items
  document.getElementById('submit-button').addEventListener('click', itemsLeftOnSubmit);

  // Event listener on the status active link that only displays active items on the form
  document.getElementById('status-active').addEventListener('click', displayActiveItems);

  // Event listener on the status completed link that only displays completed items
  document.getElementById('status-completed').addEventListener('click', displayCompletedItems);

  // Event listener on the status all link that displays all items
  document.getElementById('status-all').addEventListener('click', displayAllItems);

  //Event listener on the output container that deletes individual items
  toDoOutputContainer.addEventListener('click', deleteItem);

  //Event listener on the output container that toggles completion styling on the status button
  toDoOutputContainer.addEventListener('click', toggleStatusButton);
}


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
    
  }
  e.preventDefault();
}

/* Function that toggles the status button to the left of the to do item when clicked */
function toggleStatusButton(e){
  if(e.target.classList.contains('output-status-button')){
    console.log('works')
    if(e.target.classList.contains('output-status-button-complete')){
      e.target.classList.remove('output-status-button-complete');
      e.target.classList.add('output-status-button-incomplete'); 
    }else if(!e.target.classList.contains('output-status-button-complete')){
      e.target.classList.add('output-status-button-complete');
      e.target.classList.remove('output-status-button-incomplete');
    }

    // Call function to display number of incomplete items after the status button is clicked
    itemsLeftOnToggleStatus(); 
  } 
  e.preventDefault();
}


/* Function that deletes individual item rows when the delete button is clicked */
function deleteItem(e){
  if(e.target.classList.contains('output-delete-button')){
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

/* Function that displays active items when active link is clicked - 
Go through class names and remove all items that have been completed */
function displayActiveItems(e){
  document.querySelectorAll('.output-status-button-complete').forEach
  (row => row.parentElement.parentElement.style.display = "none");

  document.querySelectorAll('.output-status-button-incomplete').forEach
  (row => row.parentElement.parentElement.style.display = "flex");
  console.log('works');
  e.preventDefault();
}

/* Function that displays active items when active link is clicked - 
Go through class names and remove all items that have been completed */
function displayCompletedItems(e){
  document.querySelectorAll('.output-status-button-complete').forEach
  (row => row.parentElement.parentElement.style.display = "flex");

  document.querySelectorAll('.output-status-button-incomplete').forEach
  (row => row.parentElement.parentElement.style.display = "none");
  console.log('Block');
  e.preventDefault();
}

/* Function that displays active items when active link is clicked - 
Go through class names and remove all items that have been completed */
function displayAllItems(e){
  document.querySelectorAll('.output-status-button-complete').forEach
  (row => row.parentElement.parentElement.style.display = "flex");

  document.querySelectorAll('.output-status-button-incomplete').forEach
  (row => row.parentElement.parentElement.style.display = "flex");
  console.log('Block');
  e.preventDefault();
}


/* Function that displays the number of incomplete items at the bottom of the form each time an item is submitted */
function itemsLeftOnSubmit(e){
  let remainingActive = 0;
  let activeItems;
  
  document.querySelectorAll('.output-status-button-incomplete').forEach(button => {
    remainingActive +=1;
  });

  activeItems = remainingActive; 
  remainingNumber.innerText = activeItems; 
  
  e.preventDefault();
}

/* Function that displays the number of incomplete items at the bottom of the form each time an item is marked
as complete (blue button with checkmark to the left of the item) */
function itemsLeftOnToggleStatus(){
  let toggleRemainingActive;
  let toggleComplete = 0;
  let toggleIncomplete = 0
  

  document.querySelectorAll('.output-status-button-incomplete').forEach(button => {
    toggleIncomplete+=1;
  });

  document.querySelectorAll('.output-status-button-complete').forEach(button => {
    toggleComplete +=1;
  });

 toggleRemainingActive = toggleIncomplete;

 remainingNumber.innerText = toggleRemainingActive;

 console.log(toggleIncomplete);
 console.log(toggleComplete);

}