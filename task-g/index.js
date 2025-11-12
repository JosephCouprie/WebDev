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
  const CheckTerms_Input = document.getElementById("Terms");

  function checkName() {
    const FullName = FullName_Input.value.trim();
    if (!FullName) {
      document.getElementById("name_error").innerHTML = "Please enter your fullname";
      return;
    }
    if (!FullName.includes(" ") || FullName.split(" ")[0].length < 2 || FullName.split(" ")[1].length < 2) {
      document.getElementById("name_error").innerHTML = "Please enter your FULL fullname";
      return;
    }
    document.getElementById("name_error").innerHTML = "";
  }
  FullName_Input.addEventListener("input", checkName);

  function checkEmail() {
    const Email = Email_Input.value.trim();
    if (!Email) {
      document.getElementById("email_error").innerHTML = "Please enter your email";
      return;
    }
    if (!Email.includes("@") || !Email.split("@")[1].includes(".")) {
      document.getElementById("email_error").innerHTML = "Please a valid email (containing '@' and '.')";
      return;
    }
    document.getElementById("email_error").innerHTML = "";
  }
  Email_Input.addEventListener("input", checkEmail);

  function checkNumber() {
    const PhoneNumber = PhoneNumber_Input.value.trim();
    if (!PhoneNumber) {
      document.getElementById("tel_error").innerHTML = "Please enter your phone number";
      return;
    }
    if (PhoneNumber.length < 8) {
      document.getElementById("tel_error").innerHTML = "Please a valid phone number (at least 8 characters)";
      return;
    }
    document.getElementById("tel_error").innerHTML = "";
  }
  PhoneNumber_Input.addEventListener("input", checkNumber);

  function checkBirth() {
    const DateofBirth = DateofBirth_Input.value.trim();
    if (!DateofBirth) {
      document.getElementById("date_error").innerHTML = "Please enter your birth date";
      console.log("a");
      return;
    }
    if (2025 - DateofBirth.split("-")[0] < 13 || 2025 - DateofBirth.split("-")[0] > 130) {
      document.getElementById("date_error").innerHTML = "Please enter a valid birth date (you must be at least 13yo and younger than 130yo)";
      console.log("b");
      return;
    }
    document.getElementById("date_error").innerHTML = "";
  }
  DateofBirth_Input.addEventListener("input", checkBirth);

  function checkedTerms() {
    const CheckTerms = CheckTerms_Input.checked;
    if (!CheckTerms) {
      document.getElementById("terms_error").innerHTML = "Please accept the terms";
      return;
    }
    document.getElementById("terms_error").innerHTML = "";
  }
  CheckTerms_Input.addEventListener("input", checkedTerms);


  form.addEventListener("submit", (event) => {
    HiddenTimestamp_Input.value = new Date().toLocaleString();

    const HiddenTimestamp = HiddenTimestamp_Input.value;
    const FullName = FullName_Input.value.trim();
    const Email = Email_Input.value.trim();
    const PhoneNumber = PhoneNumber_Input.value.trim();
    const DateofBirth = DateofBirth_Input.value.trim();
    const CheckTerms = CheckTerms_Input.checked;
    
    event.preventDefault();

    checkName();
    checkEmail();
    checkNumber();
    checkBirth();
    checkedTerms();

    if (document.getElementById("name_error").innerHTML ||
      document.getElementById("email_error").innerHTML ||
      document.getElementById("tel_error").innerHTML ||
      document.getElementById("date_error").innerHTML ||
      document.getElementById("terms_error").innerHTML ){ 
      return;
    }

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
