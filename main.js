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