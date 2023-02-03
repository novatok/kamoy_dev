
window.onscroll = function() {
    navScroll();
    showButton();
};

//Get the scroll to top button
let toTopButton = document.getElementById("scrollTopBtn");

// When the user scrolls down 745px from the top of the document, show the button
function showButton() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
        toTopButton.style.display = "block";
    }
    else {
        toTopButton.style.display = "none";    
    }
} 

// When the user clicks on the button, scroll to the top of the document
toTopButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




/*Change color of Nav Bar*/
function navScroll() {
    if (document.body.scrollTop > 980 || document.documentElement.scrollTop > 980) {
        document.getElementById("menubar").classList.add("navScroll");
    }
    else{
        document.getElementById("menubar").classList.remove("navScroll");        
    }

}


/*Animate and change text */
function changeText() {
    var myAnim = document.getElementById("heroAnim");
    myAnim.innerHTML = "an Enthusiast";
    setTimeout(function () {
        myAnim.innerHTML = "a passionate developer";
    }, 2000);
    setTimeout(function () {
        myAnim.innerHTML = "Kamoy";
    }, 4000);
}

changeText();
setInterval(changeText, 10000);

/*Flip skills icons on mouse over */
// const skillIcons = document.getElementsByClassName("skillIcons");
// console.log(skillIcons);
// for (const icon of skillIcons) {
//     icon.addEventListener("mouseover", function onmouseover(){
//         icon.classList.add("wow animate__bounceIn");
//         icon.style.display = "#none";
//     });
// }

// function flip() {
//     skillIcons.classList.add("wow animate__bounceIn");
//     skillIcons.style.display = "#none";
// }


// Show or hide Project Details
let card_Details = document.getElementsByClassName("work-body");
let cardIndex;

function currentDetail(item) {
    showDetails(cardIndex = item);
}

function showDetails(cardIndex) {
    card_Details[cardIndex].style.display = "block";
    document.getElementsByClassName("showMore")[cardIndex].style.display = "none";
    document.getElementsByClassName("closeMore")[cardIndex].style.display = "block";
}

function hideDetails(cardIndex) {
    card_Details[cardIndex].style.display = "none";
    document.getElementsByClassName("showMore")[cardIndex].style.display = "block";
    document.getElementsByClassName("closeMore")[cardIndex].style.display = "none";
}
