var comment = document.getElementById("comment"),
    addComment = comment.nextElementSibling,
    commentsContainer = document.getElementById("comments-container");

comment.onfocus = function(){
    comment.setAttribute('placeholder', '');
}    

function HideCmt(){
    if(commentsContainer.style.display == "none")
    {
        document.getElementById("hide").innerHTML = `<i class="fas fa-angle-up"></i>`;
        commentsContainer.style.display = "block";
    }
    else
    {
        document.getElementById("hide").innerHTML = `<i class="fas fa-angle-down"></i>`;
        commentsContainer.style.display = "none";
    }
}
addComment.addEventListener("click", function () {
        date = new Date();
    commentsContainer.style.display = "block";
    document.getElementById("hide").innerHTML = `<i class="fas fa-angle-up"></i>`;
    var cnt = `<div>
    <span class = 'cmtText'>${comment.value}</span>
    <span class = 'datetime'>${date.toLocaleTimeString()} - ${date.toLocaleDateString()}</span>
    <i class="far fa-trash-alt"></i>
    </div>`;
    commentsContainer.innerHTML += cnt;
    comment.value = "";
    var deleteIcons = document.querySelectorAll(".container .comments div i");
    for (var i = 0; i < deleteIcons.length; i++) {
        deleteIcons[i].addEventListener("click", function () {
            this.parentElement.remove();
            localStorage.cmtData6 = JSON.stringify(commentsContainer.innerHTML);
        });
    }
    
    localStorage.cmtData6 = JSON.stringify(commentsContainer.innerHTML);
});

document.body.onload = function (){
    if(!localStorage.cmtData6){
        localStorage.cmtData6 = null;
    }
    else
    {
        commentsContainer.innerHTML = JSON.parse(localStorage.cmtData6);
    }
    var deleteIcons = document.querySelectorAll(".container .comments div i");
    for (var i = 0; i < deleteIcons.length; i++) {
        deleteIcons[i].addEventListener("click", function () {
            this.parentElement.remove();
            localStorage.cmtData6 = JSON.stringify(commentsContainer.innerHTML);
        });
    }
}
