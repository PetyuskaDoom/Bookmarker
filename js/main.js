console.log("... main.js linked OK ...");

// Listen for form submit
document.getElementById('myBtn').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
  console.log("In saveBookmark");

  e.preventDefault();
}

