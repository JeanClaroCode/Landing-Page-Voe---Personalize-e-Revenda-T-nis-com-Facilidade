document.getElementById('comoFuncionaBtn').addEventListener('click', scrollToSection);

function scrollToSection() {
    window.scrollTo({
        top: document.getElementById('Function').offsetTop,
        behavior: 'smooth'
    });
}

