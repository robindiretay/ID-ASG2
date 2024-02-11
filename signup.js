document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65c84ee9c8b825bf750d9f37";

    // Add event listener to the submit button
    document.getElementById("contact-submit").addEventListener("click", function(e) {
        // Prevent default action of the button
        e.preventDefault();

        // Retrieve form data
        let contactName = document.getElementById("nameInput").value;
        let contactEmail = document.getElementById("emailInput").value;
        let contactNumber = document.getElementById("phoneInput").value;

        // Create JSON data with form values
        let jsondata = {
            "Name": contactName,
            "Email": contactEmail,
            "Phone Number": contactNumber
        };

        // Create AJAX settings
        let settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata)
        };

        // Send the form data to RestDB
        fetch("https://coffeebucks-711e.restdb.io/rest/contact", settings)
            .then(response => {
                if (response.ok) {
                    // Successful response, do something
                    alert("Thank you for signing up to our newsletter!");
                } else {
                    // Error response, handle accordingly
                    alert("Failed to send message. Please try again later.");
                }
            })
            .catch(error => {
                // Error occurred during fetch
                console.error("Error sending message:", error);
                alert("An error occurred. Please try again later.");
            });
    });
});
