
document.getElementById("newPage").addEventListener("click", function () {
    window.location.href = "./second.html"
})
// random color change
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
document.getElementById("colorWheel").addEventListener("click", function () {
    document.body.style.backgroundColor = randomColor();
})
// completed btn alert
let clicked = document.getElementsByClassName("completedBtn");
for (let i=0; i<clicked.length; i++) {
    clicked[i].addEventListener("click", function () {
        alert('Board updated Successfully');
        this.disabled = true;

        // dubble alert
       let clickedAll = true;
       for(let j = 0; j<clicked.length; j++){
        if(clicked[j].disabled ==false){
            clickedAll =false;
            break;
        }
       }
       if(clickedAll){
        alert('congrates!!! You have completed all the current task');
       }
    })
}

