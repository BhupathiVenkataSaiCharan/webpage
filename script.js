// window.addEventListener("DOMContentLoaded", () => {
//     document.querySelector(".form").addEventListener("submit", function(e) {
//         const username = this.username.value;
//         const password = this.password.value;
//         if (username === "username" && password === "user123") {
//             // if(username.length > 4 && password.length > 4){
//         this.action = "landing.html";
//         } else {
//         e.preventDefault(); // this goes here now
//         alert("Invalid credentials");
//         }
//     })
// })


window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".form").addEventListener("submit", function(e) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("NAME", username);
        localStorage.setItem("PASSWORD", password);

        if(username.length > 4 && password.length > 4){
        // if(username == "username" && password.length > 4){
        this.action = "landing.html";
        } else {
        e.preventDefault();
        alert("Invalid credentials \n username must be more than 4 characters \n password must contain atleast 4 characters");
        }
    })
})


