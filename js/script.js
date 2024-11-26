function validarEmail(Email){
    if (Email === "") {
        document.getElementById('msj').innerHTML = "Por favor, completa todos los campos"
    } else {
        let pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
        return pattern.test(Email)
    }
}    