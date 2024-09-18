var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        var li_1 = document.createElement("li");
        li_1.innerHTML = inputBox.value;
        // X buttonu yarat
        var span = document.createElement("span");
        span.innerHTML = " X";
        span.className = "close";
        span.style.marginLeft = "10px";
        span.style.color = "red";
        span.style.cursor = "pointer";
        span.onclick = function () {
            li_1.remove();
        };
        li_1.appendChild(span);
        listContainer.appendChild(li_1);
        inputBox.value = '';
    }
}
;
