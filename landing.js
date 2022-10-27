window.addEventListener('load', ()=>{

    const name = localStorage.getItem('NAME');
    const password = localStorage.getItem('PASSWORD');

    document.getElementById('result-username').innerHTML = name;
})