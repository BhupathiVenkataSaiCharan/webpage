document.addEventListener( 'DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxRJo4gGwmTHCh6jXO2fcICFJQwI1LwEi7dPI_7vbLq8r4Q-6hbzXprJWIvYn6N7JL_Vw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "We will get back to you!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
})