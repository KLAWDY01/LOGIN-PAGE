const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

    const coursesByDepartment = {
        Engr: ["Computer Engineering", "Electronic Engineering"],
        TED: ["Automotive Technology", "Entrepreneurship","Electrical Technology" , "Electronics Technology" , "Mechanical Technology"],
        CSD: ["Computer Science", "Information Technology" , "Information Technology(Animation)"],
        NURS: ["Nursing"],
        TEDD: ["Secondary Education", "Elementary Education" , "BTLEd"]
    };


    function populateCourses() {
        const department = document.getElementById("department").value;
        const courseDropdown = document.getElementById("course");
        courseDropdown.innerHTML = '<option value="">Course</option>'; 

   
        coursesByDepartment[department].forEach(course => {
            const option = document.createElement("option");
            option.text = course;
            option.value = course;
            courseDropdown.appendChild(option);
        });
    }

    document.getElementById("department").addEventListener("change", populateCourses);

  
    populateCourses();