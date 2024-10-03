function save(){
   const name = document.getElementById('name');
   const email = document.getElementById('email');

   localStorage.setItem("name",name.value)
}

let heading = document.getElementById('heading');
let login = document.getElementById('login');
let logout = document.getElementById('logout');

if(localStorage.length == 0){
heading.innerHTML = "Hello"
}
else{
    let value = localStorage.getItem("name");
    heading.innerHTML = value;
    login.style.display ="none";
    logout.style.display = "block"
    }

logout.addEventListener('click',()=>{
    localStorage.removeItem("name");
})