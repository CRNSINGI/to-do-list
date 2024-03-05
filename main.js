document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

// Create a new img element
var deleteButton = document.createElement("img");

// Set the src attribute to the path of your delete button image
deleteButton.src = ""; // Change 'delete_button.png' to your actual image path

// Optionally, you can set other attributes like alt text, width, height, etc.
deleteButton.alt = "Delete Button";
deleteButton.width = 30;
deleteButton.height = 30;

// Append the img element to the container
document.getElementById("container").appendChild(deleteButton);
