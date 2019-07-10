document.addEventListener('DOMContentLoaded', init())

function init(){
     clearHTML()
    
     getUser()
     
    
    //checks to see if the submit is for posting a new character or editing an existing one
    getForm().addEventListener("submit", (e) => {
        e.preventDefault()
        if(e.currentTarget.id === 'postForm'){
             createCharacter(e) //line 144
        }else{
            changeChar(e) // line 270
         }
    })
}

///////////////////////////////CREATING ELEMENTS////////////////////////////////////
function createDiv(){
    return document.createElement('div')
}

function createLi(){
    return document.createElement('li')
}

function createBtn(){
    return document.createElement('btn')
}

function createCardDiv(){
    let div = createDiv()
    div.classList.add('col-6')
    div.id = 'cardInfo'
    return div
}

/////////////////////////CLEARING AND SHOWING HTML///////////////////////////

function clearHTML(){
  div1 =  document.getElementById("bigaf-container")
  div1.style.display = "none";
  
}

function showHTML(){
    return document.getElementById("bigaf-container").style.display = "block"
 }

////////////////////////////GETTING FUNCTIONS/////////////////////////////////////
function getForm(){
    return document.getElementById('postForm')
}

function getUser(){
    let user = document.getElementById('userName')
   return user.addEventListener('submit', (e) => grabUserInfo(e))//line 71
 }

function getNuArr(){
    //gets the inputs of the form by class name
    let arr = document.getElementsByClassName('form-input')
    return arr
}

function getUserDiv(){
   let row = document.querySelector('.row')
   let div = document.querySelector('.userDiv')
   div.classList.add('col-12')
   div.style.textAlign = "center"
   div.style.height = "100px"
   div.style.width = "100px"
   div.style.display = "inline-block"
    row.append(div)
   return row
}


////////////////////////////////////////////////////////////////////////



//grabing user information w/fetch 
function grabUserInfo(e){
    e.preventDefault()
   let name = e.target.children[1].value 
    
    fetch(`http://localhost:3000/users/${name}`)
        .then(resp => resp.json())
        .then(user => display(user))
}

//if the user exists, display their name and other info 
function display(user){
    //check if user exists here 
    if(user.username == undefined){
        alert("User Does Not Exist!")   
    }else{
    showHTML()
    let userDiv = document.querySelector('.userDiv')
    userDiv.id = user.id
    let header = document.querySelector('.header')
    let h5 = document.createElement('h5')
    h5.innerText = `Welcome ${user.username}!`
    h5.style.color = 'white'
    userDiv.innerHTML = ''
    header.appendChild(h5)
    //putting characters to cards
    user.characters.forEach(character => { 
         createCard(character)//line 102
        })
     }
}

//creates cards w/image and name for characters and puts to DOM
function createCard(character){
    let div0 = document.querySelector('#card-div')
    let div1 = createDiv()
        div1.classList.add('card')
        div1.dataset.id = character.id
        div1.style.width = "12rem";
        div1.style.cssFloat = "left"
    let div2 = createDiv()
        div2.classList.add('card-body')
    let h5 = document.createElement('h5')
        h5.classList.add('card-title')
        h5.innerText = character.name
    let img = document.createElement('img')
        img.src = character.picture
        img.classList.add("card-img-top")
        //add event listener to display information of the character
        img.addEventListener('click', (e) => {
            getCharacter(character) //line 174
        })
    let btn1 = document.createElement('button')
        btn1.className += 'btn btn-secondary btn-sm btn-info'
        btn1.innerText = 'Edit'
        btn1.dataset.characterId = character.id
        //when clicked this puts the character's information to the form 
        btn1.addEventListener('click', (e) => {
            editChar(e, character) //line 244
        })
    let btn2 = document.createElement('button')
        btn2.className += 'btn btn-secondary btn-sm btn-danger'
        btn2.innerText = 'Delete'
        btn2.dataset.characterId = character.id
        //when clicked, this will delete a character
        btn2.addEventListener('click', (e) => {
            deleteCharacter(e, character) //line 302
        })
    div2.append(h5)
    div1.append(img, div2, btn1, btn2)
    div0.appendChild(div1)    
}
   


//uses fetch to create a new character and posts to Dom
function createCharacter(e){
    let arr = getNuArr()
    let user = document.querySelector('.userDiv')
    fetch(`http://localhost:3000/characters`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: arr[0].value,
            gender: arr[1].value, 
            background: arr[2].value, 
            race: arr[3].value,
            strength: arr[5].value,
            dexterity: arr[6].value, 
            constitution:  arr[7].value, 
            intelligence:  arr[8].value, 
            wisdom:  arr[9].value, 
            charisma:  arr[10].value, 
            picture: arr[4].value,
            user_id: user.id
        })
    })
    .then(resp => resp.json())
    .then(data => createCard(data))//line 101
    getForm().reset()
}

//gets specific character w/fetch and display info to DOM
function getCharacter(character){
    fetch(`http://localhost:3000/characters/${character.id}`)
    .then(resp => resp.json())
    .then(data => characterInfo(data))//line 179
}


//grabs the character information
//sets all html display within divs to hidden
//creates a ul with li's to display character information 
//creates an img tag that fits a character's picture 
//creates a back button 
function characterInfo(character){
    let rowClass = document.querySelector('.row')
    let cardDiv = document.getElementById('card-div')
    let form = document.getElementById('div-form')
    cardDiv.style.display = "none";
    form.style.display = 'none';
    let newDiv = createCardDiv()
    let ul = document.createElement('ul')
    let li1 = createLi()
        li1.innerText = `Gender: ${character.gender}`
        li1.style.color = "white" 
    let li2 = createLi()
        li2.innerText = `Background: ${character.background}`
        li2.style.color = "white"
    let li3 = createLi()
        li3.innerText = `Race: ${character.race}`
        li3.style.color = "white"
    let li4 = createLi()
        li4.innerText = `Strength: ${character.strength}`
        li4.style.color = "white"
    let li5 = createLi()
        li5.innerText = `Dexterity: ${character.dexterity}`
        li5.style.color = "white"
    let li6 = createLi()
        li6.innerText = `Constitution: ${character.constitution}`
        li6.style.color = "white"
    let li7 = createLi()
        li7.innerText = `Intelligence: ${character.intelligence}`
        li7.style.color = "white"
    let li8 = createLi()
        li8.innerText = `Wisdom: ${character.wisdom}`
        li8.style.color = "white"
    let li9 = createLi()
        li9.innerText = `Charisma: ${character.charisma}`
        li9.style.color = "white"
    let img = document.createElement('img')
        img.style.width = "24rem";
        img.style.cssFloat = "left"
        img.src = character.picture
    let h2 = document.createElement('h2')
        h2.innerText = character.name
        h2.style.color = "white"
    let btn = createBtn()
        btn.type = 'button'
        btn.className += 'btn btn-secondary btn-sm'
        btn.innerText = 'go back'
        btn.style.backgroundColor = 'green'
        //when clicked, shows everyting back to DOM 
        btn.addEventListener('click', (e) => retrieveCharacters(e))//line 238
    ul.append(li1, li2, li3, li4, li5, li6, li7, li8, li9, btn)
    h2.append(ul)
    newDiv.append(h2)
    rowClass.append(newDiv, img)
}

//puts everything back to DOM and removes the information previously displayed
function retrieveCharacters(e){
    let rowClass = document.querySelector('.row')
    let charDiv = document.getElementById('cardInfo')
    let cardDiv = document.getElementById('card-div')
    let form = document.getElementById('div-form')
    
    rowClass.children[3].remove()
    charDiv.remove()
    cardDiv.style.display = "block"
    form.style.display = "block"

}

//sends a fetch to get character information and put it to the form
//changes form's id to 'patchForm'
function editChar(e, character){
   let form = getForm()
   let arr = getNuArr()
   form.id = 'patchForm'
   fetch(`http://localhost:3000/characters/${character.id}`)
    .then(resp => resp.json())
    .then(character => {
   form.dataset.id = character.id 
   arr[0].value = character.name
   arr[1].value = character.gender
   arr[2].value = character.background
   arr[3].value = character.race
   arr[4].value = character.picture 
   arr[5].value = character.strength 
   arr[6].value = character.dexterity
   arr[7].value = character.constitution 
   arr[8].value = character.intelligence 
   arr[9].value = character.wisdom
   arr[10].value = character.charisma
    })
}


function getCardDiv(e, value){
    e.target.dataset.id 
    let cards = document.getElementsByClassName('card')
    let arrCards = Array.from(cards)

   let card = arrCards.filter(card => {return card.dataset.id === e.target.dataset.id})
   card[0].children[0].src = value
}

// sends a PATCH to change the data of the character
//changes the form's id back to 'postForm'
// then resets form 
function changeChar(e){
    let arr = getNuArr()
    getCardDiv(e, arr[4].value )
    let charId = e.currentTarget.dataset.id

    fetch(`http://localhost:3000/characters/${charId}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: arr[0].value,
            gender: arr[1].value, 
            background: arr[2].value, 
            race: arr[3].value,
            strength: arr[5].value,
            dexterity: arr[6].value, 
            constitution:  arr[7].value, 
            intelligence:  arr[8].value, 
            wisdom:  arr[9].value, 
            charisma:  arr[10].value, 
            picture: arr[4].value
        })
    })
    .then(resp => resp.json())
    //puts the character information to DOM and hides everything else 
    .then(data => characterInfo(data)) //line 186
    e.target.id = 'postForm'
    getForm().reset()
}

//delete character and removes card from DOM
function deleteCharacter(e, character){
    let card = e.target.parentElement
        fetch(`http://localhost:3000/characters/${character.id}`,{
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        card.remove()
}

