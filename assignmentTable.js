let addButton = document.querySelector("button");
let table = document.querySelector("table");
let fNameInput = document.querySelector("#fNameInput");
let lNameInput = document.querySelector("#lNameInput");
let ageInput = document.querySelector("#ageInput");
let numberInput = document.querySelector("#numberInput");
let jobInput = document.querySelector("#jobInput");
let foodInput = document.querySelector("#foodInput");

table.addEventListener("click", removeRow);

addButton.addEventListener("click", () => {
    let firstName = fNameInput.value;
    let lastName = lNameInput.value;
    let age = ageInput.value;     
    let phoneNumber = numberInput.value;
    let occupation = jobInput.value;
    let favFood = foodInput.value;
    let row = document.createElement("tr");

    if(firstName == ""||lastName == ""||age == ""||phoneNumber == ""||occupation == ""||favFood == "") {
        return;
    }{
        row.innerHTML= `    
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${age}</td>
      <td>${phoneNumber}</td>
      <td>${occupation}</td>
      <td>${favFood}</td>
      <button class="delete"> delete </button>
    `};
    

    table.querySelector("tbody").appendChild(row);
    fNameInput.value = "";
    lNameInput.value = "";
    ageInput.value = "";
    numberInput.value = "";
    jobInput.value = "";
    foodInput.value = "";
})

function removeRow(event){
    const btn = event.target;
    const row = btn.closest("tr");
 btn.classList.contains("delete") ? row.remove() : console.log('How did it get here?!?!?' )}
