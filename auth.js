window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".form").addEventListener("submit", function(e) {

        
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // localStorage.setItem("NAME", username);
        // localStorage.setItem("PASSWORD", password);

        const regex = /^(\+91[-\s]?)?[0]?(91)?[123456789]\d{9}$/;

        // if(username.length > 4 && password.length > 4){
        if(regex.test(username)){
        this.action = "Dashboard.html";
        } else {
        e.preventDefault();
        alert("Invalid credentials \n Mobile number must be 10 digits \n password must have atleast 5 characters");
        }
    })
})