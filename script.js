// LOGIN
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("loginMsg").innerText = "Invalid login!";
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// CHECK LOGIN
if(localStorage.getItem("loggedIn") !== "true"){
    if(!window.location.href.includes("login.html")){
        window.location.href = "login.html";
    }
}

// DARK MODE
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

// BUTTON EVENT
function showMessage(){
    let msg = document.getElementById("message");
    msg.innerText = "🔥 You triggered an event!";
}

// FORM VALIDATION
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let msg = document.getElementById("message").value.trim();

            if(name === "" || email === "" || msg === ""){
                document.getElementById("formMsg").innerText = "⚠️ Please fill all fields!";
            } else if(!email.includes("@")){
                document.getElementById("formMsg").innerText = "⚠️ Invalid email!";
            } else {
                document.getElementById("formMsg").innerText = "✅ Message sent successfully!";
            }
        });
    }

    // JSON DATA LOAD
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById("projects");

        if(container){
            data.projects.forEach(p => {
                container.innerHTML += `
                    <p>
                        <strong>${p.name}</strong><br>
                        ${p.desc}
                    </p>
                `;
            });
        }
    });
});
