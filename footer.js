'use strict';

var footer  = `<div id="footer_container">
<div id="city_num_email" class="contact_inf">
<p>Calgary, AB, Canada</p>
<p>kristin.petrivska@gmail.com</p>
</div>
<div class="contact_inf">
<a href="https://github.com/KhPetrivska">
<img src="assets/images/Github_icon.svg" alt="Github Icon"/>
</a>
<a href="https://www.linkedin.com/in/khrystyna-petrivska-764827256/">
<img src="assets/images/LinkedIn.svg" alt="LinkedIn Icon"/>
</a>
</div>
</div>`;

const domContainerFooter = document.querySelector('#footerid');
domContainer.insertAdjacentHTML( 'beforeend', footer );
