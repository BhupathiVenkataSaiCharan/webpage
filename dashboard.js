// window.addEventListener("DOMContentLoaded", () => {
// document.querySelector(".siderbar .toggle-btn")
// .addEventListener("click",function(e){
//     document.querySelector(".sidebar").classList.toggle(".active")
// })
// })

window.addEventListener("DOMContentLoaded", () => {
    
    const toggleButton = document.querySelector(".sidebar .toggle-btn");

    toggleButton.addEventListener("click", function (e) {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
});
})

