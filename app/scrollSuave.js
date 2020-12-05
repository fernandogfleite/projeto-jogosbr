//Scroll suave Navbar

function scrollToIdOnClick(event){
    event.preventDefault();
    const elemento = event.target;
    var id = elemento.getAttribute('id');

    if (id == null){
        var id = elemento.getAttribute('href');
    }
    
    const section = document.querySelector(id).getBoundingClientRect().top ;
    
    window.scroll({
        top: section - 10,
        behavior: "smooth"
    });
}

const iconLink = document.querySelectorAll(".nav-interna a[href^='#']")

iconLink.forEach(icon => {
    icon.addEventListener("click", scrollToIdOnClick)
})
