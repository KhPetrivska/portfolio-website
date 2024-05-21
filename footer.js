'use strict';

var footer  = `<div id="footer_container">
<div id="city_num_email" class="contact_inf">
<p>Calgary, AB, Canada</p>
<p>+1 (431) 373-8279</p>
<p>kristin.petrivska@gmail.com</p>
</div>
<div class="contact_inf">
<img src="assets/images/Github_icon.svg" alt="Github Icon"/>
<img src="assets/images/LinkedIn.svg" alt="LinkedIn Icon"/>
</div>
</div>`;

const domContainerFooter = document.querySelector('#footerid');
domContainer.insertAdjacentHTML( 'beforeend', footer );
