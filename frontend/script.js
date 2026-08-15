const API_URL = "https://81ismc1hs9.execute-api.ap-south-1.amazonaws.com/students";

const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const inputs = form.querySelectorAll("input");

    const studentData = {
        name: inputs[0].value,
        email: inputs[1].value,
        college: inputs[2].value,
        course: inputs[3].value
    };

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentData)
        });

        const result = await response.json();

        if (response.ok) {
            alert(
                "Student registered successfully!\nStudent ID: " +
                result.studentId
            );

            form.reset();
        } else {
            alert("Registration failed.");
        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to server.");
    }
});