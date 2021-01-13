function Yes(){
    if(Math.round(Math.random() * 10) == document.getElementById("exe").value) {
        document.getElementById("no").style.display = "none";
        document.getElementById("yes").style.display = "flex";
    }
    else{
        document.getElementById("no").style.display = "flex";
        document.getElementById("yes").style.display = "none";
    }
}