
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
// task assigned
function assignedTask(id){
    const text = document.getElementById(id).innerText;
    const convertedText = parseInt(text);
    return convertedText;

}
let clickBtn = document.getElementsByClassName("completedBtn")

let sum = assignedTask("increment")
let sub = assignedTask("taskText")
for(let i=0; i<clicked.length; i++){
    clickBtn[i].addEventListener("click",function(){
        
        const checkboxText = assignedTask("increment")
        sum = sum + 1;
        document.getElementById("increment").innerText = sum;

        const task =assignedTask("taskText");
        sub = sub - 1;
        document.getElementById("taskText").innerText = sub;
    })

}
// real date
function dayAndDate(){
    let now = new Date();
    let todayDay = now.toLocaleString("en-US",{weekday:"short"});
    let todayMonth = now.toLocaleString("en-US",{month:"short"});
    let date =now.getDate();
    let year =now.getFullYear();

    return `${todayDay}, ${todayMonth} ${date} ${year}`;
     
}
document.getElementById("realDate").innerText = dayAndDate();


