var navbar  = ` <nav class="header navbar navbar-expand-lg">
<div class="container">
    <a class="navbar-brand" href="/">
        <img src="assets/images/Logo.svg" alt="logo" id="navbar_logo">
    </a>
      <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
            <img src="assets/images/burger.svg" id="burger-icon" />
        </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav_burger_ul navbar-nav ml-auto navbar_menu">
            <li class="nav-item">
                <a class="nav-link navbar_links" href="/projects-gallery.html">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link navbar_links" href="/resume.html">Resume</a>
            </li>
          </ul>
          <a href="#contact_me_block">
        <button type="button"  id="nav_contact_me" class="primary_button">Contact me</button>
      </a>
      </a>
    </div>
</div>
</nav>`;

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const icon = document.getElementById('burger-icon');

  toggler.addEventListener('click', function () {
      if (toggler.classList.contains('collapsed')) {
          icon.src = 'assets/images/close.svg';
      } else {
          icon.src = 'assets/images/burger.svg';
      }
  });
});

const domContainerNav = document.querySelector('#navid');
domContainerNav.insertAdjacentHTML( 'beforeend', navbar );
