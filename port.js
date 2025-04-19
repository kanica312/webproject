let modeBtn=document.querySelector("#mode");

let currMode="dark";


modeBtn.addEventListener("click",()=>{
    
if(currMode==="dark"){
    
currMode="light";
    

 document.querySelector("body").style.backgroundImage="url('https://tse1.mm.bing.net/th?id=OIP.bhQ1UqG4bTO5hOmhrdM51gHaE7&pid=Api&P=0&h=180')"; 
    modeBtn.innerHTML="Dark Mode";
   
 
}

else{
  
  currMode="dark";
   
 document.querySelector("body").style.backgroundImage="url('https://tse3.mm.bing.net/th?id=OIP.snOCo7y8gBUb7r0Qw9OJMwHaEK&pid=Api&P=0&h=180')";

  
 
 modeBtn.innerHTML="Light Mode";

}
});