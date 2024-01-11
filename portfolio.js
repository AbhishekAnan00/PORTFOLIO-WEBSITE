// sidebar-function
function showSidebar() {
  const sidebar = document.querySelector(".hide-sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".hide-sidebar");
  sidebar.style.display = "none";
}

//contact-section to store data
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx82DWYafERm3HskDhV1NyKbe81FROLWPxYliL5LfljqK_DH7KlWrXEypDpfwzvUUC4SQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => {
      msg.innerHTML = "messege sent successfully";
    }
  );
  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
  form.reset().catch((error) => console.error("Error!", error.message));
});
