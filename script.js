const element=document.querySelector('.menuicon');
const ham=document.querySelector('.hamburger-hide');
element.addEventListener('click',()=>{
    if(ham.className==='hamburger-hide')
    {
        ham.className="hamburger";
    }
    else{
        ham.className="hamburger-hide";
    
    }
})