const quarterBtn = document.querySelector('.quarter');
const halfBtn = document.querySelector('.half');
const quarterRestBtn = document.querySelector('.quarter-rest');
const displayDiv = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');

quarterBtn.addEventListener('click', addQuarter);
halfBtn.addEventListener('click', addHalf)
quarterRestBtn.addEventListener('click', addQuarterRest);
clearBtn.addEventListener('click', clearDisplay);

function addQuarter() {
    const newNote = document.createElement('div');
    newNote.classList.add('note-div');
    newNote.innerHTML = `
    <img src="images/quarter.svg">
    <p class="note-count" contenteditable="true"> </p>
    `
    displayDiv.appendChild(newNote);
}

function addHalf() {
    const newNote = document.createElement('div');
    newNote.classList.add('note-div');
    newNote.innerHTML = `
    <img src="images/half.svg">
    <p class="note-count" contenteditable="true"> </p>
    `
    displayDiv.appendChild(newNote);
}

function addQuarterRest() {
    const newNote = document.createElement('div');
    newNote.classList.add('note-div');
    newNote.innerHTML = `
    <img src="images/quarter-rest.svg">
    <p class="note-count" contenteditable="true"> </p>
    `
    displayDiv.appendChild(newNote);
}

function clearDisplay() {
    displayDiv.innerHTML = '';
}