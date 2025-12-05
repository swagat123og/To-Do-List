const input_boc=document.querySelector("#input-box");
const list_constainer=document.querySelector("#list-container");
const btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
    add_event();
});


const add_event=()=>{
    if(input_boc.value===''){
        alert("you must write something!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=input_boc.value;
        list_constainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input_boc.value='';
    saveData();
}

list_constainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",list_constainer.innerHTML);
}


function show_task(){
    list_constainer.innerHTML=localStorage.getItem("data");
}

show_task();
 
