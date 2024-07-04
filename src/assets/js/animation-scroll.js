// :Javascript for the animation from first semester
function reveal() {
  //first use the fucntion 'query select all' to use every element with the word 'reveal'
  var reveals = document.querySelectorAll(".reveal");
  //for the view
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 30;
    //now I make a function which will replace the elements by adding and removing the active ones.
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
//checks what the position is
window.addEventListener("scroll", reveal);
