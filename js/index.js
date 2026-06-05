btnAgregarPlatillo = document.getElementById('btnAgregarPlatillo');

<<<<<<< HEAD

=======
>>>>>>> 9b8c55b6c9f0d0cabe41214613f33183fd6e3126
document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

btnAgregarPlatillo.addEventListener('click', function() {
<<<<<<< HEAD
  alert('Platillo agregado');
=======
   alert('Platillo agregado'); 
>>>>>>> 9b8c55b6c9f0d0cabe41214613f33183fd6e3126
});