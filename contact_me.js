'use strict';

var contact  = `<div class="inf_block" id="contact_me"> 
<div id="contact_me_container">
<h2 class="subtitle">LET’S CHAT</h2>
<div id="contact_me_text_button">
<p class="align_to_center_text">For orders, inquiries, or collaboration opportunities, please email me. I am open to working with employers, clients seeking website development, and partners for collaborative projects.</p>
<a href="mailto:kristin.petrivska@gmail.com">
<button type="button" class="primary_button">Write an email</button>
</a>
</div>
</div>
</div>`;

const domContainer = document.querySelector('#letschat');
domContainer.insertAdjacentHTML( 'beforeend', contact );
