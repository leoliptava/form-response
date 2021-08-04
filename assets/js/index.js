let formCep = document.getElementById('formCep')

formCep.addEventListener('submit', (e) => {

    if (formCep.checkValidity() === false) {
        e.preventDefault()
        e.stopPropagation()
        formCep.classList.add('was-validated')
    }

})