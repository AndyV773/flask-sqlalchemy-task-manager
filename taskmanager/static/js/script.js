document.addEventListener('DOMContentLoaded', function () {
  // sidenav initialization
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // delete model initialization
  let delModal = document.querySelectorAll('.modal');
  M.Modal.init(delModal);
});
