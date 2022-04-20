


// Before===================================================================================================



// game 1 javascript code==========================================
let firstGameDiv = document.getElementsByClassName('game-1')[0];
let secondGameDiv = document.getElementsByClassName('game-2')[0];
let thirdGameDiv = document.getElementsByClassName('game-3')[0];
let fourthGameDiv = document.getElementsByClassName('game-4')[0];


let button1 = document.querySelectorAll('button')[1];
console.log(button1);
let button2 = document.getElementById('button-2');
let button3 = document.getElementById('button-3');
let button4 = document.getElementById('button-4');
let image1Game1 =document.getElementById('image-1');
let image2Game1 =document.getElementById('image-2');
let image3Game1 =document.getElementById('image-3');
let image4Game1 =document.getElementById('image-4');

let choice;


let listImages1 = [
    "https://ichef.bbci.co.uk/images/ic/1920x1080/p07hblcn.jpg",
    "https://thumbs.dreamstime.com/b/click-here-button-hand-icon-click-here-button-hand-icon-isolated-white-background-135876616.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/05/72/mouse-click-vector-26690572.jpg",
    "https://lh3.googleusercontent.com/VU3lbTgPoF5ypWwjDqRFF_NvD6cWhGNH5qGm4mOZxJLJSZznPXPTbmrf2cS3TA7QMyDITqx-WtmtMPt_NwhaS0Ms6Q=w640-h400-e365-rj-sc0x00ffffff",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGnC8jWiFfboiJkxOV_Xy0pQ6CXaHlF4OMg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPv17no-ljbBoTfJN2z5bFOE06cyspOozyBA&usqp=CAU",
    "https://ksp.co.il/site/siteUpload/204852567-image1_result.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Souris_clic_gauche.svg/1200px-Souris_clic_gauche.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMbTwNXben-J3RE7Xxg-aKxgyTYdVg9ma_g&usqp=CAU",
    "https://cdn.worldvectorlogo.com/logos/click.svg",
]

let listImages2 = [
    "https://ichef.bbci.co.uk/images/ic/1920x1080/p07hblcn.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/05/72/mouse-click-vector-26690572.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONk1VD6xmJDOCO_oesG2xy-0S-jp5obkE3w&usqp=CAU",
    "https://thejournal.com/~/media/EDU/THEJournal/THElogo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIkQtWD_v0_XCXQac2SVcWmOyj3JbMocUtw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8wIZcKXwfRJh7dZRSQLuLyeEGdFAcaoINw&usqp=CAU",
    "https://s.hdnux.com/photos/01/23/46/07/21914076/3/rawImage.jpg",
    "https://www.thesunmagazine.org/img/placeholders/facebook_og.png",
    "https://thenet.fr/wp-content/themes/the-new/dist/images/thelogo-menu.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ufehzIFV34BJISiYgOyacBX08qBoX-1QGg&usqp=CAU",
]

let listImages3 = [
    "https://ichef.bbci.co.uk/images/ic/1920x1080/p07hblcn.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/05/72/mouse-click-vector-26690572.jpg",
    "https://dictionary.cambridge.org/fr/images/thumb/button_noun_002_05071.jpg?version=5.0.230",
    "https://www.kafkabrigade.org.uk/wp-content/uploads/2011/07/button-pic.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiy972v1pTwbytCDqt5cxZ2Ly8u6iuWz2FRA&usqp=CAU",
    "https://www.qoovee.com/media/files/Plastic_Buttons.jpg",
    "https://m.media-amazon.com/images/I/41OnYisNVZL._AC_SY780_.jpg",
    "https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/05/button.jpg?fit=1200%2C600&ssl=1",
    "https://i1.wp.com/www.alphr.com/wp-content/uploads/2018/03/we_can_improve_the_button_researchers_declare_2-scaled.jpg?fit=2560%2C1442&ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN90loXZBKpWJc7WIsdCSWvarrqzyn_gH4Pg&usqp=CAU",
]

let listImages4 = [
    "https://ichef.bbci.co.uk/images/ic/1920x1080/p07hblcn.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/05/72/mouse-click-vector-26690572.jpg",
    "https://c8.alamy.com/comp/2B11XTB/infinity-symbol-infinit-repetition-unlimited-contour-and-endless-isolated-vector-symbols-set-2B11XTB.jpg",
    "https://i.pinimg.com/originals/b1/a2/12/b1a2128360f6942606aafaf9dd55c217.png",
    "http://www.sporcle.com/blog/wp-content/uploads/2018/11/1-80.jpg",
    "https://i.ytimg.com/vi/SrU9YDoXE88/maxresdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrKFFAKyDxqEhSv45LwzHU4SajF2Azu2PxA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBpULV6gMXdPJfL1H3gIiw3cVR9kZnzF9DQ&usqp=CAU",
    "https://d2r55xnwy6nx47.cloudfront.net/uploads/2017/09/Infinities_520x292.jpg",
    "https://image.shutterstock.com/image-vector/infinity-symbol-icon-aka-lemniscate-260nw-1496743463.jpg",
]
function CheckIfWinGame1() {
    let firstImage = image1Game1.getAttribute('src');
    let secondImage = image2Game1.getAttribute('src');
    let thirdImage = image3Game1.getAttribute('src');
    let fourthImage = image4Game1.getAttribute('src');
    // firstGameDiv.style.display = 'none';
    
    if (firstImage == secondImage && firstImage == thirdImage && firstImage == fourthImage) {
        setTimeout(() => {
            alert('you did it');
            firstGameDiv.style.display = 'none';    
        }, 1000);
        setTimeout(() => {
            secondGameDiv.style.display = 'flex';    
        }, 1500);
           
    }
}



function clickfirstButton() {
    choice = Math.floor(Math.random() * 10);
    let newImage = listImages1[choice]; 
    image1Game1.setAttribute('src', newImage);
    CheckIfWinGame1()
}

function clicksecondButton() {
    choice = Math.floor(Math.random() * 10);
    let newImage = listImages2[choice]; 
    image2Game1.setAttribute('src', newImage);
    CheckIfWinGame1()
}

function clickthirdButton() {
    choice = Math.floor(Math.random() * 10);
    let newImage = listImages3[choice]; 
    image3Game1.setAttribute('src', newImage);
    CheckIfWinGame1()
}

function clickfourthButton() {
    choice = Math.floor(Math.random() * 10);
    let newImage = listImages4[choice]; 
    image4Game1.setAttribute('src', newImage);
    CheckIfWinGame1()
}




// game 2 logic



let winingOne = document.getElementById('click-to-win');
let allImages = document.getElementsByClassName('mouse-over-hidden');



for (let image of allImages) {
    image.addEventListener('mouseover', ()=>{
        image.style.visibility = 'hidden';
        image.style.border = '1px solid red';
    });

    image.addEventListener('mouseleave', ()=>{
        image.style.visibility = 'visible';
    });
}


winingOne.addEventListener('click', () => {
    alert('ouch you find me');
    secondGameDiv.style.display = 'none';
    thirdGameDiv.style.display = 'flex';
});



// game number 3 logic

let submitGame3 = document.getElementById('submit-game-3');
let formGame3 = document.forms[0];
let question1Answer;
let question2Answer;
let question3Answer;
let question4Answer;





submitGame3.addEventListener('click', (event) => {
    event.preventDefault();
    let correctAnswers = 0;
    question1Answer = formGame3.elements.question1.value;
    question2Answer = formGame3.elements.question2.value;
    question3Answer = formGame3.elements.question3.value;
    question4Answer = formGame3.elements.question4.value;
    if (question1Answer == 'egg') {
        correctAnswers ++;
    }
    if (question2Answer == 'peter') {
        correctAnswers ++;

    }
    if (question3Answer == 'piano') {
        correctAnswers ++;
    }
    if (question4Answer == 'and') {
        correctAnswers ++;
    }

    if (correctAnswers == 4){
        alert('ALL answers correct you can continue');
        setTimeout(() => {
            thirdGameDiv.style.display = 'none';
            fourthGameDiv.style.display = 'flex';
        }, 1000);
    } else {
        alert(`you have ${correctAnswers} correct from 4`);
    }
    
})






// game 4 logic



let rainbow = document.getElementsByClassName('todrag');
let correctColors = 0

function checkIfWinGame4 () {
    let correctColors = 0
    if (rainbow[0].firstElementChild) {
        if(rainbow[0].firstElementChild.innerHTML == "RED") {
            correctColors ++
        }
        
    }
    if (rainbow[1].firstElementChild) {
        if(rainbow[1].firstElementChild.innerHTML == "ORANGE") {
            correctColors ++
        }
    }
    if (rainbow[2].firstElementChild) {
        if(rainbow[2].firstElementChild.innerHTML == "YELLOW") {
            correctColors ++
        }
    }
    if (rainbow[3].firstElementChild) {
        if(rainbow[3].firstElementChild.innerHTML == "GREEN") {
            correctColors ++
        }
    }
    if (rainbow[4].firstElementChild) {
        if(rainbow[4].firstElementChild.innerHTML == "BLUE") {
            correctColors ++
        }
    }
    if (rainbow[5].firstElementChild) {
        if(rainbow[5].firstElementChild.innerHTML == "INDIGO") {
            correctColors ++
        }
    }
    if (rainbow[6].firstElementChild) {
        if(rainbow[6].firstElementChild.innerHTML == "VIOLET") {
            correctColors ++
        }
    }
    return correctColors
}


function dragStart(event) {
    event.dataTransfer.setData("Div", event.target.id);
}
  
  
function allowDrop(event) {
    event.preventDefault();
}
  
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Div");
    event.target.appendChild(document.getElementById(data));
    let corrects = checkIfWinGame4();
    if (corrects == 7) {
        let imageDiv = document.getElementsByClassName('rainbow-div')[0];
        imageDiv.style.display = 'flex';
        setTimeout(() => {
            fourthGameDiv.style.display = 'none';
        }, 5000);
    }
}
