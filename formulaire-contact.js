document.getElementById('assoForm').addEventListener('submit', (e)=>{
    e.preventDefault()
    validationForm()
})

function validationForm(){
    let userName = document.getElementById('userName').value;
    let userMail = document.getElementById('userMail').value;
    let userMessage = document.getElementById('userMessage').value;

    let error_userName = document.getElementById('error-username');
    let error_userMail = document.getElementById('error-usermail');
    let error_userMessage = document.getElementById('error-usermessage');


    function verificationMail(mail) {
        let regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
        return regex.test(mail)
    }

    let isValid = true

    error_userName.innerHTML = ""
    error_userMail.innerHTML = ""
    error_userMessage.innerHTML = ""

    if(userName === ""){
        error_userName.innerHTML = "Le nom est obligatoire."
        isValid = false
    }
    if(userMail === ""){
        error_userMail.innerHTML = "L'adresse mail est obligatoire."
        isValid = false
    }
    if(!verificationMail(userMail)){
        error_userMail.innerHTML = "L'adresse mail entrée n'est pas valide."
        isValid = false
    }
    if(userMessage === ""){
        error_userMessage.innerHTML = "Veuilez saisir un message s'il vous plaît."
        isValid = false
    }

    if(isValid){
        alert("Le formulaire est validé")
        document.getElementById('userName').value = ""
        document.getElementById('userMail').value = ""
        document.getElementById('userSubject').value = ""
        document.getElementById('userMessage').value = ""
    }
}

