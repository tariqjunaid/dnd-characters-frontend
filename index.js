document.addEventListener('DOMContentLoaded', init())

function init(){
    clearHTML()
    getUser()
    
}

getForm().addEventListener("submit", (e) => {
    e.preventDefault()
  if(e.currentTarget.id === 'postForm'){
      createCharacter(e)
  }else{
      changeChar(e)
  }
})

////////////////////////////////////////////////////////////////////////
function createDiv(){
    return document.createElement('div')
}

function createLi(){
    return document.createElement('li')
}

function createBtn(){
    return document.createElement('btn')
}

function clearHTML(){
  div1 =  document.getElementById('bigaf-container')
  div1.style.display = "none";
}

function getForm(){
    return document.getElementById('postForm')

}


function getNuArr(){
    let arr = document.getElementsByClassName('form-input')
    return arr
}

function showHTML(){
   return document.getElementById("bigaf-container").style.display = "block"
}

function createCardDiv(){
    let div = createDiv()
    div.classList.add('col-6')
    div.id = 'cardInfo'
    return div
}
////////////////////////////////////////////////////////////////////////
function getUser(){
   let user = document.getElementById('userName')
  return user.addEventListener('submit', (e) => grabUserInfo(e))
}

function grabUserInfo(e){
    e.preventDefault()
   let name = e.target.children[1].value 
  
    fetch(`http://localhost:3000/users/${name}`)
        .then(resp => resp.json())
        .then(user => display(user))
}

function display(user){
    //check if user exists here 
    if(user.username == undefined){
        alert("User Does Not Exist!")   
    }else{
    showHTML()
    let div = document.getElementById('username') 
    let h2 = document.createElement('h2')
    h2.innerText = user.username
    div.innerHTML = ''
    div.appendChild(h2)
    user.characters.forEach(character => { 
        let div0 = document.querySelector('#card-div')
        let div1 = createDiv()
            div1.classList.add('card')
            div1.style.width = "12rem; float: left;";
        let div2 = createDiv()
            div2.classList.add('card-body')
        let h5 = document.createElement('h5')
            h5.classList.add('card-title')
            h5.innerText = character.name
        let img = document.createElement('img')
            img.src = character.picture
            img.classList.add("card-img-top")
            img.addEventListener('click', (e) => {
                fetchCharacter(character)
                
            })
        let btn1 = document.createElement('button')
            btn1.className += 'btn btn-secondary btn-sm'
            btn1.innerText = 'Edit'
            btn1.dataset.characterId = character.id
            btn1.addEventListener('click', (e) => {
                editChar(e, character)
            })
        div2.append(h5)
        div1.append(img, div2, btn1)
        div0.append(div1)    
        })
   }
}


function createCharacter(e){
    let arr = getNuArr()

    debugger
    // fetch(`http://localhost:3000/characters`, {
    //     method: 'POST', 
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: arr[0].value,
    //         gender: arr[1].value, 
    //         background: arr[2].value, 
    //         race: arr[3].value,
    //         strength: arr[5].value,
    //         dexterity: arr[6].value, 
    //         constitution:  arr[7].value, 
    //         intelligence:  arr[8].value, 
    //         wisdom:  arr[9].value, 
    //         charisma:  arr[10].value, 
    //         picture: arr[4].value,
    //         user_id: something
    //     })
    // })
}

function fetchCharacter(character){
    fetch(`http://localhost:3000/characters/${character.id}`)
        .then(resp => resp.json())
        .then(data => characterInfo(data))
}

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
    let img = document.createElement('img')
        img.src = character.picture
    let h2 = document.createElement('h2')
        h2.innerText = character.name
    let btn = createBtn()
        btn.type = 'button'
        btn.className += 'btn btn-secondary btn-sm'
        btn.innerText = 'go back'
        btn.addEventListener('click', (e) => retrieveCharacters(e))
    // let btn1 = createBtn()
    //     btn1.type = 'button'
    //     btn1.className += 'btn btn-secondary btn-sm'  
    //     btn1.innerText = 'edit'  
    ul.append(li1, li2, li3, li4, li5, li6, li7, li8, li9, img)
    h2.append(ul)
    newDiv.append(h2, btn)
    rowClass.append(newDiv)
}

function retrieveCharacters(e){
    let rowClass = document.querySelector('.row')
    let charDiv = document.getElementById('cardInfo')
    let cardDiv = document.getElementById('card-div')
    let form = document.getElementById('div-form')
    charDiv.remove()
    cardDiv.style.display = "block"
    form.style.display = "block"

}


function editChar(e, character){
    
    let form = getForm()
   let arr = getNuArr()
   form.id = 'patchForm'
   console.log(arr)
   
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
}



function changeChar(e){
    
    let arr = getNuArr()
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
    .then(data => characterInfo(data))
    e.target.id = 'postForm'
    getForm().reset()
   
}


