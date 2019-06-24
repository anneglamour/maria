// Autor: Ana Samaniego; 
//Versión: 13

function validarFormulario(){
    var usuario = document.getElementById("nombre").value;
    var pass = document.getElementById("email").value;
    var repass= document.getElementById("edad").value;
/* aqui la funciones son dadas para que el usuario mas de 2 caracteres,
para el email he colocado que sean mas de 8 , y par la edad tambien lo he puesto en negativo y en positivo, y una alerta de de no coincidir*/

    if (usuario =="")
    {
        alert("debe poner un nombre");
        return false;
    }
    else if(usuario.length < 2 )
    {
        alert("nombre debe tener mas de 2 caracteres");
        return false;
    }
    else if(pass =="")
    {
        alert("debe poner un email");
        return false;
    }   
    else if (pass.length < 8 )
    {
    alert("email debe tener mas de 8 caracteres");
    return false;
    }
    else if (repass.length < 8 )
    {
    alert("edad debe tener mas de 8 caracteres");
    return false;
    }
    else if (pass != repass)
    {
    alert("las contrase��as no coinciden");
    return false;
    }

alert("todos los campos son validos");
return true;
}
