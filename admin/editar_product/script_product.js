document.addEventListener("DOMContentLoaded", function () {
  const codigo_prod = document.getElementById("codigo_field");
  const imagen_prod = document.getElementById("images_field");
  const nombre_prod = document.getElementById("nombre_field");
  const precio_prod = document.getElementById("precio_field");

  const consultar = document.getElementById("btn_consultar");
  const editar = document.getElementById("btn_editar");
  const agregar = document.getElementById("btn_agregar");
  const eliminar = document.getElementById("btn_eliminar");

  consultar.addEventListener("click", () => {});

  editar.addEventListener("click", () => {
    fetch("/usuarios.json")
      .then((response) => response.json())
      .then((data) => {
        // Encontrar el objeto que deseas actualizar (por ejemplo, por ID)
        const objetoAActualizar = data.find(
          (item) => item.codigo === codigo_prod
        );

        if (objetoAActualizar) {
          // Actualizar los datos del objeto
          objetoAActualizar.nombre = nombre_prod;
          objetoAActualizar.precio = precio_prod;

          // Guardar los datos actualizados en el JSON
          fetch("/usuarios.json", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => {
            // Actualizar la página con los datos actualizados si es necesario
          });
        } else {
          alert("Error al actualizar el objeto");
        }
      });
  });

  agregar.addEventListener("click", () => {
    // Obtener los datos actuales del JSON
    fetch("/usuarios.json")
      .then((response) => response.json())
      .then((data) => {
        // Crear un nuevo objeto
        const nuevoObjeto = {
          codigo: codigo_prod,
          nombre: nombre_prod,
          precio: precio_prod,
        };

        // Agregar el nuevo objeto a los datos
        data.push(nuevoObjeto);

        // Guardar los datos actualizados en el JSON
        fetch("/usuarios.json", {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => {
          // Actualizar la página con los datos nuevos si es necesario
        });
      });
  });

  eliminar.addEventListener("click", () => {
    fetch("/usuarios.json")
      .then((response) => response.json())
      .then((data) => {
        // Encontrar el índice del objeto que deseas eliminar (por ejemplo, por ID)
        const indiceAEliminar = data.findIndex(
          (item) => item.codigo === codigo_prod
        );

        if (indiceAEliminar !== -1) {
          // Eliminar el objeto del array de datos
          data.splice(indiceAEliminar, 1);

          // Guardar los datos actualizados en el JSON
          fetch("/usuarios.json", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => {
            // Actualizar la página con los datos actualizados si es necesario
          });
        } else {
          alert("Error al tratar de eliminar el objeto");
        }
      });
  });
});
