//your JS code here. If required.
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;

    // Validate inputs
    if (age === "" || name.trim() === "") {
        alert("Please enter valid details.");
        return;
    }

    // Create Promise
    const promise = new Promise(function (resolve, reject) {

        setTimeout(function () {

            if (Number(age) > 18) {
                resolve(name);
            } else {
                reject(name);
            }

        }, 4000);

    });

    // Promise handling
    promise
        .then(function (name) {
            alert("Welcome " + name + ". You can vote.");
        })
        .catch(function (name) {
            alert("Oh sorry " + name + ". You aren't old enough.");
        });
});