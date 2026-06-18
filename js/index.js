const btnAgregarPlatillo = document.getElementById('btnAgregarPlatillo');
let contenido = '';

document.addEventListener('DOMContentLoaded', function() {

  // Menú lateral derecho
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });

  // Formulario lateral izquierdo
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, { edge: 'left' });

  // Selects de Materialize
  const selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

});

// Evento del botón
btnAgregarPlatillo.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Platillo agregado');
});

// Mostrar platillo
function mostrarPlatillo(platillo, id) {

  contenido += `
    <div class="card-panel recipe white row" id="${id}">
      <div class="recipe-details">

        <div class="recipe-title">
          ${platillo.nombre}
        </div>

        <div class="recipe-ingredients">
          Ingredientes: ${platillo.ingredientes}
        </div>

        <div class="recipe-price">
          Precio: $${platillo.precio}
        </div>

      </div>

      <div class="recipe-delete">
        <i class="material-icons" data-id="${id}">
          delete_outline
        </i>
      </div>
    </div>
  `;

  document.querySelector('.recipes').innerHTML = contenido;
}

// Actualizar platillo
function actualizarPlatillo(platillo, id) {

  const tarjeta = document.getElementById(id);

  if (!tarjeta) return;

  tarjeta.querySelector('.recipe-title').innerHTML =
    platillo.nombre;

  tarjeta.querySelector('.recipe-ingredients').innerHTML =
    `Ingredientes: ${platillo.ingredientes}`;

  tarjeta.querySelector('.recipe-price').innerHTML =
    `Precio: $${platillo.precio}`;
}