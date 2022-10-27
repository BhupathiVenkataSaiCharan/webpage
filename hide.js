function myPassword(){
    const x = document.getElementById("password");
    const y = document.getElementById("eye1");
    const z = document.getElementById("eye2");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block"; 
    }

}