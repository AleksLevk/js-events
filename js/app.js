document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("title");
    const textInput = document.getElementById("text");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const title = titleInput.value;
        const text = textInput.value;

        if (title && text) {
            // добавляемый элемент
            const li = document.createElement("li");
            li.className = "task-item"; 

            // добавляемый заголовок
            const titleHeading = document.createElement("h3");
            titleHeading.textContent = title;
            li.appendChild(titleHeading);

            // добавляемый текст
            const textParagraph = document.createElement("p");
            textParagraph.textContent = text;
            li.appendChild(textParagraph);

            // кнопка удаления TODO
            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-task";
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });
            li.appendChild(deleteButton);

            taskList.appendChild(li);

            // очистка инпута
            titleInput.value = "";
            textInput.value = "";
        }
    });
});