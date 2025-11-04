// index.js
// Author: Joseph COUPRIE
// Date: 2025-10-30

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("addInfoForm");
  const table = document.getElementById("infos").querySelector("tbody");

  const HiddenTimestamp_Input = document.getElementById("HiddenTimestamp");
  const FullName_Input = document.getElementById("FullName");
  const Email_Input = document.getElementById("Email");
  const PhoneNumber_Input = document.getElementById("PhoneNumber");
  const DateofBirth_Input = document.getElementById("DateofBirth");

  form.addEventListener("submit", (event) => {
    HiddenTimestamp_Input.value = new Date();

    event.preventDefault();

    const HiddenTimestamp = HiddenTimestamp_Input.value.trim();
    if (!HiddenTimestamp) {
      return;
    } 

    const FullName = FullName_Input.value.trim();
    if (!FullName) {
      document.getElementById("name_error").innerHTML = "Please enter your fullname";
      return;
    }
    document.getElementById("name_error").innerHTML = "";
    
    const Email = Email_Input.value.trim();
    if (!Email) {
      document.getElementById("email_error").innerHTML = "Please enter your email";
      return;
    }
    document.getElementById("email_error").innerHTML = "";

    const PhoneNumber = PhoneNumber_Input.value.trim();
    if (!PhoneNumber) {
      document.getElementById("tel_error").innerHTML = "Please enter your phone number";
      return;
    }
    document.getElementById("tel_error").innerHTML = "";

    const DateofBirth = DateofBirth_Input.value.trim();
    if (!DateofBirth) {
      document.getElementById("date_error").innerHTML = "Please enter your birth date";
      return;
    }
    document.getElementById("date_error").innerHTML = "";
  
    // Create new table row
    const row = document.createElement("tr");

    // HiddenTimestamp cell
    const HiddenTimestamp_cell = document.createElement("td");
    HiddenTimestamp_cell.textContent = HiddenTimestamp;
    row.appendChild(HiddenTimestamp_cell);

    // Fullname cell
    const FullName_cell = document.createElement("td");
    FullName_cell.textContent = FullName;
    row.appendChild(FullName_cell);

    // Email cell
    const Email_cell = document.createElement("td");
    Email_cell.textContent = Email;
    row.appendChild(Email_cell);
  
    // PhoneNumber cell
    const PhoneNumber_cell = document.createElement("td");
    PhoneNumber_cell.textContent = PhoneNumber;
    row.appendChild(PhoneNumber_cell);

    // DateofBirth cell
    const DateofBirth_cell = document.createElement("td");
    DateofBirth_cell.textContent = DateofBirth;
    row.appendChild(DateofBirth_cell);


    table.appendChild(row);

    // Reset form and focus
    form.reset();
    FullName_Input.focus();

  });
});