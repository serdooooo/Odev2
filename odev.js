function CloseButton(){
    let myNodelist = document.getElementsByTagName("li");
    for (let i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}

function closeFunction(){
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }
}




CloseButton()
closeFunction()


let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !==null
}

function newElement() {
    let liDOM =document.createElement('li')
    let text = document.querySelector("#task").value
    if(isEmptyOrSpaces(text)){
        document.getElementById("listAdd").style.display="none"
        $('.toast').toast('show');
    }
    else{
        document.getElementById("listNull").style.display="none"
        let ulDOM = document.querySelector("#list")
        
        liDOM.innerHTML=text
        ulDOM.appendChild(liDOM)
        $('.toast').toast('show');


        
        CloseButton()

        closeFunction()
    }

    localStorage.setItem(`eleman ${localStorage.length+1}`,liDOM.innerText)
}


