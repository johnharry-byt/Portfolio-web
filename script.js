function login(){
let u=document.getElementById('username').value;
let p=document.getElementById('password').value;
if(u==='admin'&&p==='1234'){
localStorage.setItem('loggedIn',true);
window.location='index.html';
}else{document.getElementById('loginMsg').innerText='Invalid';}
}
function logout(){localStorage.clear();window.location='login.html';}
function toggleDarkMode(){document.body.classList.toggle('dark');}
function showMessage(){document.getElementById('message').innerText='Clicked!';}

document.addEventListener('DOMContentLoaded',()=>{
fetch('data.json')
.then(r=>r.json())
.then(d=>{
let c=document.getElementById('projects');
if(c){
d.projects.forEach(p=>{
c.innerHTML+=`<p><b>${p.name}</b>: ${p.desc}</p>`;
});
}
});
});