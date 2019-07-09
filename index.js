document.addEventListener('DOMContentLoaded', init())

function init(){
    // clearHTML()
    getUser()
}

function createDiv(){
    return document.createElement('div')
}

function clearHTML(){
  div1 =  document.getElementById('bigaf-container')
  div1.innerHTML =" "
}

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
   let div = document.getElementById('username') 
   let h2 = document.createElement('h2')
   h2.innerText = user.username
   div.innerHTML = ''
   div.appendChild(h2)
   user.characters.forEach(character => {
    let div0 = document.querySelector('#card-div')
     let div1 = createDiv()
        div1.classList.add('card')
        div1.style.width = "18rem";
    let div2 = createDiv()
        div2.classList.add('card-body')
    let h5 = document.createElement('h5')
        h5.classList.add('card-title')
        h5.innerText = character.name
     let img = document.createElement('img')
        img.src = character.picture
        img.classList.add("card-img-top")
     
    div2.append(h5)
    div1.append(img, div2)
    div0.append(div1)    
     })
   }
}