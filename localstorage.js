var login = document.querySelector("#login");

function logar() {
  if (login.value) {
    localStorage.setItem("twitter:user", login.value);
    window.location.href = "timeline.html";
  } else {
    localStorage.removeItem("twitter:user");
  }
}
