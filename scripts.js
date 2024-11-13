let currentPage = 1;
const maxPages = 26;

function updateMainNotes() {
    const mainNotesImg = document.getElementById("main-notes");
    const pageNumberSpan = document.getElementById("page-number");

    // Update main notes image source and page number
    mainNotesImg.src = `im${currentPage}.jpg`;
    mainNotesImg.alt = `Main Notes - Page ${currentPage}`;
    pageNumberSpan.textContent = `Page ${currentPage}`;

    // Clear additional notes when page changes
    document.getElementById("additional-notes").innerHTML = "";
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updateMainNotes();
    }
}

function nextPage() {
    if (currentPage < maxPages) {
        currentPage++;
        updateMainNotes();
    }
}

function showShortNotes() {
    const additionalNotesDiv = document.getElemen
