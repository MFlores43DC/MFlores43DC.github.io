/* Validated via https://www.minifier.org/javascript-validator 
External resources used: https://www.youtube.com/watch?v=Ul50MLZwMz8&list=PL41tKSPrUfiwXWjX8luvZizILnf7vv7Rs&index=6
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory=newStory.replaceAll(":insertx:",xItem).replaceAll(":inserty:",yItem).replaceAll(":insertz:",zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory=newStory.replace("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`;
    const temperature =  `${Math.round((94-32)*(5/9))} centigrade`;
    newStory=newStory.replace("94 fahrenheit",temperature).replace("300 pounds",weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
