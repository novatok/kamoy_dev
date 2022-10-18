//Get the button
let toTopButton = document.getElementById("toTopBtn");

// When the user scrolls down 745px from the top of the document, show the button
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 745 || document.documentElement.scrollTop> 745) {
        toTopButton.style.display = "block";
        // toTopButton.classList.add("show");
    } 
    else {
        toTopButton.style.display = "none";
        // toTopButton.classList.remove("show");
    }
}

// When the user clicks on the button, scroll to the top of the document
toTopButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




/*Change color of Nav Bar*/
window.onscroll = function() {navScroll()};

function navScroll() {
    if (document.body.scrollTop > 657 || document.documentElement.scrollTop > 657) {
        document.getElementById("menubar").classList.add("navScroll");
    }
    else{
        document.getElementById("menubar").classList.remove("navScroll");
    }

}


/*Animate and change text */
function changeText() {
    var myAnim = document.getElementById("heroAnim");
    myAnim.innerHTML = "the Enthusiast";
    setTimeout(function () {
        myAnim.innerHTML = "the Engineer";
    }, 2000);
    setTimeout(function () {
        myAnim.innerHTML = "Kamoy";
    }, 4000);
}

changeText();
setInterval(changeText, 10000);

