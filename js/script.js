const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector(".list");
const lis = document.querySelectorAll("ul li");
open.onclick = function() {
    nav.style.transform = "translateX(0%)";
    document.querySelector("section").style.visibility="hidden";
}
close.onclick = function() {
    nav.style.transform = "translateX(-100%)";
    document.querySelector("section").style.visibility="visible";
}
window.onresize = function() {
    if(document.body.clientWidth< 900) {
        open.onclick = function() {
            nav.style.transform = "translateX(0%)";
            document.querySelector("section").style.visibility="hidden";
        }
        close.onclick = function() {
            nav.style.transform = "translateX(-100%)";
            document.querySelector("section").style.visibility="visible";
        }
    }else {
        nav.style.transform = "translateX(0%)";
        document.querySelector("section").style.visibility="visible";
    }
}
function rsz() {
    if(document.body.clientWidth< 900) {
        open.onclick = function() {
            nav.style.transform = "translateX(0%)";
            document.querySelector("section").style.visibility="hidden";
        }
        close.onclick = function() {
            nav.style.transform = "translateX(-100%)";
            document.querySelector("section").style.visibility="visible";
        }
    }else {
        nav.style.transform = "translateX(0%)";
        document.querySelector("section").style.visibility="visible";
    }
}
rsz(); 
for(i=0;i<lis.length;i++) {
    lis[i].onclick = function() {
        lis.forEach(li=> {
            li.firstElementChild.classList.remove("line");
        })
        this.firstElementChild.classList.add("line");
    }
}
