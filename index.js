var timeline = document.querySelector("#timeline");
var input = document.querySelector("#post input");
var button = document.querySelector("#post button");

var posts = JSON.parse(localStorage.getItem("twitter:postagem")) || [];
function renderPost() {
  timeline.innerHTML = "";

  for (var post of posts) {
    timeline.insertAdjacentHTML(
      "afterbegin",
      `
        <ul>
          <b>${post.username}<b/>
          <p>${post.message}<p/>
        </ul>
        
        <hr />
      `
    );
  }
}

renderPost();

function addPost() {
  var message = message;

  posts.push({
    username: localStorage.getItem("twitter:user"),
    message: document.querySelector("#message").value,
  });
  console.log(posts);
  //input.Value = '';
  savePost();

  document.querySelector("#message").value = "";
  document.querySelector("#message").focus();
}

button.onclick = addPost;

function sair() {
  localStorage.removeItem("twitter:user");
  window.location.href = "index.html";
}

var inputpost = document.querySelector("#input");

function savePost() {
  localStorage.setItem("twitter:postagem", JSON.stringify(posts));
  renderPost();
}
