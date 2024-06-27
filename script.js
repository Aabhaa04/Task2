function validateForm() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return false;
    }

    // Here you can add further validation or authentication logic
    // For a real Instagram-like login, you'd typically send the data to a server and handle the response

    return true;
}
