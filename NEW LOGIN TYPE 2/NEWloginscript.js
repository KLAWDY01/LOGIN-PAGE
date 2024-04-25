document.addEventListener("DOMContentLoaded", function() {
    const userTypeSelect = document.getElementById("user");
    const emailInput = document.querySelector('input[type="email"]');
    const adminPlaceholder = "Username";
    const studentPlaceholder = "Studentnumber";
    const emailPlaceholder = "Email";

    userTypeSelect.addEventListener("change", function() {
        const selectedUserType = userTypeSelect.value;
        if (selectedUserType === "Admin") {
            emailInput.placeholder = adminPlaceholder;
        } else if (selectedUserType === "Email"){
            emailInput.placeholder = emailPlaceholder;
        } else {
            emailInput.placeholder = studentPlaceholder;
        }

    });
});