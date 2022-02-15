
function Mensaje(){

    var name = document.getElementById("exampleInputName").value;
    var lastname = document.getElementById("exampleInputApellidos").value;
    var user = document.getElementById("exampleInputUsuario").value;
    var email = document.getElementById("exampleInputEmail").value;
    var tel = document.getElementById("exampleInputTelefono").value;
    var msg = document.getElementById("exampleInputMensaje").value;
    var not = document.getElementById("exampleCheck1").value;


    var alerta = "Nombre: " + name + " " +  lastname + "\n" + "Usuario: " + user + "\n" + "email: " + email + "\n" + "Telefono: " + tel + "\n" + "Mensaje: " + msg + "\n";
    alert(alerta);


}