/* ==================================
   SARAKI PERSONAL BRAND JAVASCRIPT
================================== */


// Typing Effect

const text = [
"AI Content Creator",
"Digital Skills Mentor",
"Personal Brand Builder",
"Creative Thinker"
];


let index = 0;
let char = 0;

function typing(){

let element =
document.getElementById("typing");


if(!element) return;


if(char < text[index].length){

element.innerHTML += text[index].charAt(char);

char++;

setTimeout(typing,100);

}

else{

setTimeout(()=>{

element.innerHTML="";

char=0;

index++;

if(index >= text.length){
index=0;
}

typing();

},1500);

}

}


typing();




// Visitor Counter

let visits =
localStorage.getItem("sarakiVisits");


if(!visits){

visits=1;

}else{

visits++;

}


localStorage.setItem(
"sarakiVisits",
visits
);


let counter =
document.getElementById("visitor");


if(counter){

counter.innerHTML=visits;

}




// Cursor Effect

document.addEventListener(
"mousemove",
function(e){

let cursor =
document.querySelector(".cursor");


if(cursor){

cursor.style.left =
e.clientX+"px";


cursor.style.top =
e.clientY+"px";

}

});
