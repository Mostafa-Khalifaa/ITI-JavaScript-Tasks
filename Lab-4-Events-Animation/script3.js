function addData() {
    var nameInput = document.getElementById("nameInput");
    var ageInput = document.getElementById("ageInput");
    var emailInput = document.getElementById("emailInput");

    var nameVal = nameInput.value;
    var ageVal = ageInput.value;
    var emailVal = emailInput.value;

    var nameErr = document.getElementById("nameError");
    var ageErr = document.getElementById("ageError");
    var emailErr = document.getElementById("emailError");

    nameErr.style.display = "none";
    ageErr.style.display = "none";
    emailErr.style.display = "none";

    var isValid = true; 


    if (nameVal == "") {
        nameErr.textContent = "this field is required";
        nameErr.style.display = "inline";
        isValid = false;
    } else if (isFinite(nameVal)) {
        nameErr.textContent = "numbers are not allowed";
        nameErr.style.display = "inline";
        isValid = false;
    }

    if (ageVal == "") {
        ageErr.textContent = "this field is required";
        ageErr.style.display = "inline";
        isValid = false;
    } else if (isNaN(ageVal)) { 
        ageErr.textContent = "please enter numbers only";
        ageErr.style.display = "inline";
        isValid = false;
    }

    if (emailVal == "") {
        emailErr.textContent = "this field is required";
        emailErr.style.display = "inline";
        isValid = false;
    } else if (emailVal.indexOf("@") === -1) { 
        emailErr.textContent = "Not a valid e-mail";
        emailErr.style.display = "inline";
        isValid = false;
    }

    if (isValid == true) {
        var tableBody = document.querySelector("#studentTable");

        var newRow = tableBody.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = nameVal;
        cell2.innerHTML = ageVal;
        cell3.innerHTML = emailVal;

        resetForm();
    }
}

function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("emailInput").value = "";
    
    document.getElementById("nameError").style.display = "none";
    document.getElementById("ageError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
}