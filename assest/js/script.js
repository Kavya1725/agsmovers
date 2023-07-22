let actvlink = document.querySelectorAll('.leftgroup>ul>li>a')

actvlink.forEach(a => {
    a.addEventListener('click', function(){
        actvlink.forEach(anc => anc.classList.remove('active'));
        this.classList.add('active');
    });
});
//mega menu onclick start//
function showhide(){
    let click=document.getElementById("mega-menu");
    if( click.style.display == "none"){
       click.style.display = "block";
    }
    else{
        click.style.display = 'none';
    }
}
//mega menu onclick end//