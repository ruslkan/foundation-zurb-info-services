import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

Foundation.Abide.defaults.patterns['phone_number'] = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;

$(document).foundation();

// Popup Back Call
var $popupBackCall = new Foundation.Reveal($('#popupBackCall'), {
    animationIn: "scale-in-up",
    animationOut: "scale-out-down"
  });
 
// Callback popup validator
