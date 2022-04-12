




document.querySelector("#submit").addEventListener("click",contact)
document.querySelector("#submit").addEventListener("click",contactAdd)
var contactData=[];
if(localStorage.getItem("contactList")===null){
    contactData=[]
}else {
     contactData= JSON.parse(localStorage.getItem("contactList"))
}
function contact(){
    event.preventDefault();
    var details ={
        name : document.querySelector("#name").value,
        mobile: document.querySelector("#mobile").value,
        select:document.querySelector("#select").value

    }
    contactData.push(details)
    localStorage.setItem("contactList",JSON.stringify(contactData))
    alert("Added contact to your contact list")
}


function contactAdd(){
    var contactAll= JSON.parse(localStorage.getItem("contactList"))
   var tr= document.createElement("tr")
   var td1=document.createElement("td")
   var td2=document.createElement("td")
   var td3=document.createElement("td")
  
   contactAll.forEach(function(ele){
       td1.innerText=ele.name;
       td2.innerText=ele.mobile;
       td3.innerText=ele.select
   })

   var tbody=document.querySelector("tbody")
   tr.append(td1,td2,td3);
   tbody.append(tr)

   

}
