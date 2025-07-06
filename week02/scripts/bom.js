const input = document.getElementById('favchap');
const chapterButton = document.getElementById('submit');
const list = document.getElementById('list');

chapterButton.addEventListener("click", function () {
    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);

        input.value = "";
        input.focus();

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });
    }
    else {
        alert("Empty input field");
        input.focus();
    }
});
