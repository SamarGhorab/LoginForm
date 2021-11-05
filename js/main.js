

var userName = document.getElementById("name");
var signupBtn = document.getElementById("signup");
var signinBtn = document.getElementById("login");
var singIN1 = document.getElementById("signin1")
var signUp1 = document.getElementById("signup1")

var email = document.getElementById("email");
var email1 = document.getElementById("email1");

var password = document.getElementById("password");
var password1 = document.getElementById("password1");

var signIn = document.getElementById("signin");
var signUpForm = document.getElementById("signupform")

var nameAlert = document.getElementById("nameAlert")
var email1Alert = document.getElementById("email1Alert")
var pass1Alert = document.getElementById("pass1Alert")
var accounts = [];
var logout=document.getElementById("logout")
var inputs = document.getElementsByClassName("form")
var formAlert = document.getElementById("formAlert");

var home = document.getElementById("home")
userName.addEventListener("keyup", checkUsername)

function checkUsername() {
       var nameRejex = /^[A-Z][a-z]{1,9}$/;
       if (!nameRejex.test(userName.value)) {
              signUp1.disabled = "true";

              userName.classList.add("is-invalid");
              userName.classList.remove("is-valid");
              nameAlert.classList.remove("d-none");
            
             
       }
       else {
              signUp1.removeAttribute("disabled");
              userName.classList.add("is-valid");
              userName.classList.remove("is-invalid")
              nameAlert.classList.add("d-none");

       }
  
}



email1.addEventListener("keyup", checkEmail1)
function checkEmail1() {
       var email1Rejex = /^[A-Z-a-z-1-9]{5,15}@((yahoo)|(gmail)).com$/
       if (!email1Rejex.test(email1.value)) {
              signUp1.disabled = "true";
              email1.classList.add("is-invalid");
              email1.classList.remove("is-valid");
              email1Alert.classList.remove("d-none");

       }
       else {
              signUp1.removeAttribute("disabled");
              email1.classList.add("is-valid");
              email1.classList.remove("is-invalid")
              email1Alert.classList.add("d-none");

       }
  
}
password1.addEventListener("keyup", checkPassword1)

function checkPassword1() {
       var pass1Rejex = /[A-Z-a-z-1-9]{5,15}/
       if (!pass1Rejex.test(password1.value)) {
              signUp1.disabled = "true";
              password1.classList.add("is-invalid");
              password1.classList.remove("is-valid");
              pass1Alert.classList.remove("d-none");

       }
       else {
              signUp1.removeAttribute("disabled");
              password1.classList.add("is-valid");
              password1.classList.remove("is-invalid")
              pass1Alert.classList.add("d-none");

       }

}
signupBtn.addEventListener("click", signupForm)

function signupForm() {
       signUpForm.classList.remove("d-none")
       signIn.style.display = "none";
       signUpForm.style.display = "block";

}
singIN1.addEventListener("click", signinForm)

function signinForm() {
       signIn.classList.remove("d-none")
       signIn.style.display = "block";
       signUpForm.style.display = "none";



}
signUp1.addEventListener("click", addEmail)

function addEmail() {
          
     
     
       var account = {
              username: userName.value,
              emailaddress: email1.value,
              pass: password1.value

       }
       if ((!userName.value == "") && (!email1.value == "") && (!password1.value == "")) {
              accounts.push(account);
              localStorage.setItem("accountList", JSON.stringify(accounts));
              formAlert.classList.add("d-none");
              formClear();

       }
       else {
              signUp1.disabled = "true"
              formAlert.classList.remove("d-none");

       }



}
function formClear() {

       for (var i = 0; i < inputs.length; i++) {
              inputs[i].value = "";
       }


}
if (JSON.parse(localStorage.getItem("accountList")) != null) {
       accounts = JSON.parse(localStorage.getItem("accountList"));
}

signinBtn.addEventListener("click", login)

function login() {
       var flag = false;
       for (var i = 0; i < accounts.length; i++) {
              if ((email.value == accounts[i].emailaddress) && (password.value==accounts[i].pass)) {
                   
                     home.classList.remove("d-none");
                     home.style.display = "block";
                     signIn.style.display = "none";
                     document.getElementById("data").innerHTML=`<h2>welcome ${accounts[i].username}</h2>`;
                     flag = true
                     i = accounts.length;


              }


       }
       if (!flag) {
              alert("check your email and password !");

       }
}

logout.addEventListener("click", logoutFun)
function logoutFun(){
       signIn.classList.remove("d-none");
       signIn.style.display = "block";

       home.style.display = "none";
       

}





