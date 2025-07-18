const input = document.getElementById('favchap');
const chapterButton = document.getElementById('submit');
const list = document.getElementById('list');

chapterButton.addEventListener("click", () => {
    const chapter = input.value.trim();
    if (chapter !== '') {
        displayList(chapter);
        chaptersArray.push(chapter);
        setChapterList();
    }
    input.value = '';
    input.focus();
});


function displayList(item) {

    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = "❌";

    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    input.value = "";
    input.focus();

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log("bummer to think someone would just copy the code and not write it themselves, don't worry, I wrote all this.")
};


let chaptersArray = getChapterList() || [];




function setChapterList() {
    localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBomList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}


chaptersArray.forEach(chapter => {
    displayList(chapter);

});