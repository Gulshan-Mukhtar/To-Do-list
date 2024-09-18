var inputBox: any = document.getElementById("input-box") as HTMLInputElement;
var listContainer: any = document.getElementById("list-container") as HTMLElement;

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li: any = document.createElement("li") as HTMLLIElement;
        li.innerHTML = inputBox.value;

       
        let span: any = document.createElement("span") as HTMLSpanElement; 
        span.innerHTML = " X"; 
        span.className = "close"; 
        span.style.marginLeft = "10px"; 
        span.style.color = "red"; 
        span.style.cursor = "pointer"; 
        span.onclick = function () {  
            li.remove();
        };

        li.appendChild(span); 
        listContainer.appendChild(li);
        inputBox.value = '';
    }
};



