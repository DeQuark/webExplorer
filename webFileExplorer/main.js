/*eslint-env browser*/
$(document).ready(function(){
   
    let acc=document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i += 1) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var loadDoc = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML =
          xhttp.responseText;
        }
      };
      xhttp.open("GET", "main.json", true);
      xhttp.send();
    }

    
});

