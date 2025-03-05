
document.getElementById("newPage").addEventListener("click", function(){
    window.location.href = "./second.html"
})
// random color change
function randomColor(){
    return "#" + Math.floor(Math.random() * 16777215) .toString(16);
}
document.getElementById("colorWheel").addEventListener("click", function(){
    document.body.style.backgroundColor = randomColor();
})
// completed btn alert
let clicked = document.getElementsByClassName("completedBtn");
for(let i = 0; i < clicked.length; i++){
    clicked[i].addEventListener("click", function(){
        alert('Board updated Successfully');
        this.disabled = true;
    })
}
