/* Validated via https://www.minifier.org/javascript-validator 
External resources used: https://www.youtube.com/watch?v=nKfc1j4PrOk&list=PL41tKSPrUfiwXWjX8luvZizILnf7vv7Rs&index=6
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images=["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */
const altTexts=["A closeup of an eye on someone's face","A picture showing some kind of stone-like pattern","A picture of purple flowers","A picture of Egyptian wall art","A picture of a butterfly on a leaf"];

/* Looping through images */

for (let i=0;i<images.length;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${images[i]}`);
    newImage.setAttribute('alt', altTexts[i]);
    thumbBar.appendChild(newImage);
}

/* Click event listener for image thumb bar */
thumbBar.addEventListener("click", (click) => {
    displayedImage.setAttribute('src', click.target.getAttribute('src'));
    displayedImage.setAttribute('alt', click.target.getAttribute('alt'));
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});