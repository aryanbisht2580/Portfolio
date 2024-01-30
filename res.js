
var tablinks=document.getElementsByClassName('tab-link');
var tabcontents=document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(e of tablinks){
        e.classList.remove('active-link');
    }
    for(e of tabcontents){
        e.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

function seemore(){
    var workContainer=document.getElementById("wc");
    var sm=document.getElementById("sm");
    sm.style.display="none";
    workContainer.style.height="auto";
}


var sidem=document.getElementById("sidemenu");
function openmenu(){
    sidem.style.right="0";
}

function closemenu(){
    sidem.style.right="-200px";
}