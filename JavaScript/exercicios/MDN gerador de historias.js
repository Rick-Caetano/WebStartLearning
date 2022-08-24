// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Silly_story_generator

//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


//2. RAW TEXT STRINGS

const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`

const insertX = [
'Willy the Goblin',
'Big Daddy',
'Father Christmas'
]

const insertY = [
'the soup kitchen',
'Disneyland',
'the White House'
]

const insertZ = [
'spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away'
]


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

let newHistory = storyText; // deve ser declarada fora das fuctions para que possa ser usadas por todas
let count = 0


function createRandomText(letter, Item){

    //caso queira usar o array, é iteressante troccar o "letter" por "index"
    //const inserts = [':insertx:',':inserty:',':insertz:']
    
    let historyModified = '';
    
    newHistory = newHistory.split(' ')

    for (let word of newHistory){
        //historyModified += word.replace(inserts[index], Item) + ' '
        historyModified += word.replace(`:insert${letter}:`, Item) + ' '
    }

    return historyModified
}

randomize.addEventListener('click', result);

function result() {

    /*
    let resetContent = () => {
        story.textContent = ''
    }

    if(count > 0){
            resetContent();
        }
        */
    
    let xItem = randomValueFromArray(insertX)
    let yItem = randomValueFromArray(insertY)
    let zItem = randomValueFromArray(insertZ)

  

  if(customName.value !== '') {
    const name = customName.value;
    newHistory = newHistory.replace('Bob', name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }
 
  
  newHistory = createRandomText('x', xItem)
  newHistory = createRandomText('y', yItem)
  newHistory = createRandomText('z', zItem)
  

  story.textContent = newHistory;
  story.style.visibility = 'visible';
  

 

  count++

}
