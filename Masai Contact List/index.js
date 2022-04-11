




document.querySelector("#submit").addEventListener("click",contact)
function contact(){
    event.preventDefault();
    var details ={
        name : document.querySelector("#name").value,
        mobile: document.querySelector("#mobile").value,
        select:document.querySelector("#select").value

    }
    localStorage.setItem("contactList",JSON.stringify(details))
    alert("Added contact to your contact list")
    



document.querySelector("h1").innerText=fix


}
var fix = localStorage.getItem("contactList")
JSON.parse(fix)
console.log(fix)

    