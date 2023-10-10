let users = [];

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("form_container");

  fetch("/usuarios.json")
    .then((response) => response.json())
    .then((data) => {
      users = data;
    });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("clave").value;

    var userExiste = buscarCorreo(users, email);

    if (email === "" || password === "") {
      alert("Ingresa un usuario y contraseña");
    } else {
      if (userExiste) {
        const usuarioEncontrado = users.find(
          (usuario) => usuario.correo === email
        );

        if (usuarioEncontrado && usuarioEncontrado.clave === password) {
          window.location.replace("../home_admin/home_admin.html");
        } else {
          alert("Clave incorrecta");
        }
      } else {
        alert("Usuario no existe");
      }
    }
  });
});

function buscarCorreo(jsonData, correoABuscar) {
  for (var i = 0; i < jsonData.length; i++) {
    if (jsonData[i].correo === correoABuscar) {
      return true;
    }
  }
  return false;
}
