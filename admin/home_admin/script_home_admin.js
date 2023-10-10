document.addEventListener("DOMContentLoaded", function () {
  const btn_producto = document.getElementById("producto");
  const btn_user = document.getElementById("usuarios");

  btn_producto.addEventListener("click", () => {
    window.location.href = "../editar_product/edit_product.html";
  });

  btn_user.addEventListener("click", () => {
    window.location.href = "../editar_user/edit_user.html";
  });
});
