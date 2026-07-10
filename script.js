//Desplazamiento de la barra de navegación

document.querySelectorAll('a[hreft^="index.html"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
    document.querySelector(this.getAttribute('hreft')). 
    scrollIntoView({
        behavior: 'smooth'
    });  
});
});