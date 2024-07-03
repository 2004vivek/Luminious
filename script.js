function closeSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}
function displays(){
    document.querySelector('.sidebar').style.display = 'block';
}
document.addEventListener('DOMContentLoaded',function(){
    let a=document.querySelector(".buttons");
    let b=document.querySelector(".background");
    a.addEventListener('mouseenter',function() {
      b.style.backgroundColor="rgba(0,0,0,0.5)";
    }
    );
    a.addEventListener('mouseleave',() => {
      b.style.backgroundColor=""
    }
    )
   

})

