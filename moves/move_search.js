function toggle_navbar() {
  document
    .querySelector(".navbarcontents")
    .classList.toggle("navbarcontents_visible");
}

function search_move_tmhm() {
  let input = document.getElementById("searchbar_tmhm").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("tmhm");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

function search_move_learn() {
  let input = document.getElementById("searchbar_learn").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("learn");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
