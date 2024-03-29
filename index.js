document.addEventListener('DOMContentLoaded', init())

function init(){
     clearHTML()
     btnOptions()
     getUser()
     createUser()
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
    let li = document.createElement('li')
    li.style.color = "white"
    return li
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

function createH5(character){
   let h5 = document.createElement('h5')
        h5.classList.add('card-title')
        h5.innerText = character.name
        return h5
}

function createImg(){
    return document.createElement('img')
}

function createH2(character){
    let h2 = document.createElement('h2')
    h2.innerText = character.name
    h2.style.color = "white"
    return h2
}


/////////////////////////CLEARING AND SHOWING HTML///////////////////////////
function clearHTML(){
    let signUp = document.getElementById('new-user')
    let login = document.getElementById('userName')
  let div1 =  document.getElementById("bigaf-container")
  div1.style.display = "none";
  signUp.style.display = "none";
  login.style.display = "none";

  
}

function showHTML(){
    return document.getElementById("bigaf-container").style.display = "block"
 }



////////////////////////////GETTING FUNCTIONS/////////////////////////////////////
function getForm(){
    return document.getElementById('postForm')
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


/////////////////////////////BEGINNING OPTIONS/////////////////////////////////////
function btnOptions(){
    let userDiv = document.querySelector('.userDiv')
    let br1 = document.createElement('br')
    let br2 = document.createElement('br')
    let btn1 = createBtn()
        btn1.innerText = "Sign Up"
        btn1.className += 'btn btn-secondary btn-sm btn-info'
        btn1.style.display = "block";
        btn1.addEventListener('click', (e) => signUpSheet(e, btn1, btn2))
    let btn2 = createBtn()
        btn2.innerText = "Login"
        btn2.className += 'btn btn-secondary btn-sm btn-info'
        btn2.style.display = "block";
        btn2.addEventListener('click', (e) => loginSheet(e, btn1, btn2))
    userDiv.append(btn1, br1, br2, btn2)
}



/////////////////////////////CREATE USER///////////////////////////////////////////
function createUser(){
    let nuUser = document.getElementById('new-user')
    return nuUser.addEventListener('submit', (e) => postUserInfo(e))
}

function signUpSheet(e, btn1, btn2){
    let signUp = document.getElementById('new-user')
        signUp.style.display = "block";
        btn1.style.display = "none";
        btn2.style.display = "none";
    let btn3 = createBtn()
        btn3.innerText = "Go Back"
        btn3.className += 'btn btn-secondary btn-sm btn-info'
        btn3.addEventListener('click', (e) => goBack(e, btn1, btn2))
        signUp.append(btn3)
}

function goBack(e, btn1, btn2){
    let signUp = document.getElementById('new-user')
    let login = document.getElementById('userName')
    let btn3 = e.target
    login.style.display = "none";
    login.reset()
    signUp.style.display = "none";
    signUp.reset()
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.remove()
}

function loginSheet(e, btn1, btn2){
    let login = document.getElementById('userName')
    login.style.display = "block";
    btn1.style.display = "none";
    btn2.style.display = "none";
    let btn3 = createBtn()
    btn3.innerText = "Go Back"
    btn3.className += 'btn btn-secondary btn-sm btn-info'
    btn3.addEventListener('click', (e) => goBack(e, btn1, btn2))
    login.append(btn3)
}


function postUserInfo(e){
   e.preventDefault()
   let name = e.currentTarget.children[0].value
   let trimName = name.trim()
   let firstLetter = trimName.charAt(0).toUpperCase()
   let nuName = firstLetter + trimName.slice(1)
   let password = e.currentTarget.children[1].value
   let trimPassword = password.trim()
   
    fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            username: nuName,
            password_digest: trimPassword
        })
    })
    .then(resp => resp.json())
    .then(user => display(user))
   
}


///////////////////////////////READ USER/////////////////////////////////////////
function getUser(){
    let user = document.getElementById('userName')
   return user.addEventListener('submit', (e) => grabUserInfo(e))//line 71
 }

//grabing user information w/fetch 
function grabUserInfo(e){
    e.preventDefault()
   let name = e.target.children[0].value.trim()

   let password1 = e.target.children[1].value.trim()
   
   let firstLetter = name.charAt(0).toUpperCase()
   let nuName = firstLetter + name.slice(1)
   
    
    fetch(`http://localhost:3000/users/${nuName}/${password1}`)
        .then(resp => resp.json())
        .then(user => display(user))
}

//if the user exists, display their name and other info 
function display(user){
     if(user == undefined || user == null){
        alert("Please Enter A Valid Username or Password!")   
    }
    else if(user.message != null){
        alert(user.message)
    }
    else{
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
         createCard(character)
        })
     }
}

/////////////////////////////////READ USER'S CHARACTER//////////////////////////////
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
    let h5 = createH5(character)
    let img = createImg()
        img.src = character.picture
        img.classList.add("card-img-top")
        //add event listener to display information of the character
        img.addEventListener('click', (e) => {
            getCharacter(character) //line 174
        })
    let btn1 = createBtn()
        btn1.className += 'btn btn-secondary btn-sm btn-info'
        btn1.innerText = 'Edit'
        btn1.dataset.characterId = character.id
        //when clicked this puts the character's information to the form 
        btn1.addEventListener('click', (e) => {
            editChar(e, character) //line 244
            }
        )
    let btn2 = createBtn()
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

//////////////////////READ SPECIFIC CHARACTER INFO.////////////////////////////////s
//gets specific character w/fetch and display info to DOM
function getCharacter(character){
    fetch(`http://localhost:3000/characters/${character.id}`)
    .then(resp => resp.json())
    .then(data => characterInfo(data))
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
    let li2 = createLi()
        li2.innerText = `Background: ${character.background}`
    let li3 = createLi()
        li3.innerText = `Race: ${character.race}`
    let li4 = createLi()
        li4.innerText = `Strength: ${character.strength}`
    let li5 = createLi()
        li5.innerText = `Dexterity: ${character.dexterity}`
    let li6 = createLi()
        li6.innerText = `Constitution: ${character.constitution}`
    let li7 = createLi()
        li7.innerText = `Intelligence: ${character.intelligence}`
    let li8 = createLi()
        li8.innerText = `Wisdom: ${character.wisdom}`
    let li9 = createLi()
        li9.innerText = `Charisma: ${character.charisma}`
    let img = createImg()
        img.style.width = "20rem";
        img.style.minHeight = '24rem';
        img.style.maxHeight = '24rem';
        img.src = character.picture
        img.classList.add("card-text")
    let picDiv = createDiv()
        picDiv.classList.add("card")
        picDiv.classList.add("border-success")
        picDiv.classList.add("mb-5")

        picDiv.style.maxWidth = "24rem";
        //picDiv.style.cssFloat = "left"
        picDiv.append(img)
    let h2 = createH2(character)
    let btn = createBtn()
        btn.type = 'button'
        btn.className += 'btn btn-secondary btn-sm'
        btn.innerText = 'go back'
        btn.style.backgroundColor = 'red'
        //when clicked, shows everyting back to DOM 
        btn.addEventListener('click', (e) => retrieveCharacters(e))//line 238
    ul.append(li1, li2, li3, li4, li5, li6, li7, li8, li9, btn)
    h2.append(ul)
    newDiv.append(h2)
    rowClass.append(newDiv, picDiv)
}

//puts everything back to DOM and removes the information previously displayed
function retrieveCharacters(e){
    let rowClass = document.querySelector('.row')
    let charDiv = document.getElementById('cardInfo')
    let cardDiv = document.getElementById('card-div')
    let form = document.getElementById('div-form')
    // getForm().firstElementChild.innerText = 'Create Character!'
    // getForm().lastElementChild.remove()
    rowClass.children[3].remove()
    charDiv.remove()
    cardDiv.style.display = "block"
    form.style.display = "block"

}

////////////////////////////CREATE CHARACTER////////////////////////////////
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


////////////////////////////EDIT CHARACTER////////////////////////////////////////
//sends a fetch to get character information and put it to the form
//changes form's id to 'patchForm'
function editChar(e, character){
   let form = getForm()
   let arr = getNuArr()
   let btn = createBtn()
        btn.className += 'btn btn-secondary btn-md'
        btn.id = 'nvm'
        btn.innerText = 'Nevermind'
        btn.style.backgroundColor = 'grey'
        btn.addEventListener('click', (e) => {resetBack(e, btn)})
   form.append(btn)
   form.id = 'patchForm'
   form.firstElementChild.innerText = `Edit ${character.name}!` 
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

//resets page back to normal
function resetBack(e, btn){
   let form = e.target.parentElement
   form.id = 'postForm'
   form.dataset.id = ''
   form.firstElementChild.innerText = "Create Character"
   form.reset()
   form.removeChild(btn) 
    
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
    
    getForm().firstElementChild.innerText = 'Create Character!'
    getForm().reset()
    getForm().lastElementChild.remove()
    
}


//When editing a character it grabs the picture and puts it to the DOM
function getCardDiv(e, value){
    e.target.dataset.id 
    let cards = document.getElementsByClassName('card')
    let arrCards = Array.from(cards)

   let card = arrCards.filter(card => {return card.dataset.id === e.target.dataset.id})
   card[0].children[0].src = value
}


////////////////////////////////////////DELETE CHARACTER///////////////////////////
//delete character and removes card from DOM
function deleteCharacter(e, character){
    if (confirm("Are you sure you want to delete?")){
    let card = e.target.parentElement
        fetch(`http://localhost:3000/characters/${character.id}`,{
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        card.remove()
    }else{}
}   

