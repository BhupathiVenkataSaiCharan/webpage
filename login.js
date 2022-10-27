window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".form").addEventListener("submit", function(e) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("NAME", username);
        localStorage.setItem("PASSWORD", password);

        if(username.length > 4 && password.length > 4){
        this.action = "landing.html";
        } else {
        e.preventDefault();
        alert("Invalid credentials");
        }
    })
})
