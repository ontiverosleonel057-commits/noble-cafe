// Cargar carrito desde localStorage (si existe)
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Agregar producto al carrito desde el menú
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });

  // Guardar en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert(`Agregado: ${nombre}`);
}

// Mostrar carrito en para_llevar.html
function mostrarCarrito() {
  const contenedor = document.getElementById("lista-carrito");
  if (!contenedor) return; // Solo existe en para_llevar.html

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }

  carrito.forEach((item, index) => {
    contenedor.innerHTML += `
      <div class="item-carrito">
        <strong>${item.nombre}</strong><br>
        Precio: $${item.precio}<br>
        <button onclick="eliminar(${index})">Eliminar</button>
      </div>
      <hr>
    `;
  });
}

function eliminar(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

// Al cargar cualquier página, sincronizar carrito y mostrar si aplica
document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();
});
