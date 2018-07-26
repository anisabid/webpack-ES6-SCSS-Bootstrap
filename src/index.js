'use strict';

// Import or Require Bootstrap
//import 'bootstrap';
require('bootstrap');

// Required all Styles
require('../assets/stylesheets/styles.scss');

// Required HoldJS
require('holderjs');

// import Offcanvas
import {Offcanvas} from "./modules/offcanvas";

// Custom scripts
(($) => {
  let offcanvas = new Offcanvas();
  offcanvas.init();
})(jQuery);

(($) => {
  $(document).ready(function () {
    console.log("Document ready!");
  });
})(jQuery);
