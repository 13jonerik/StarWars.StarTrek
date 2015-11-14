/*
http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml

source is shared under the terms of LGPL 3 www.gnu.org/licenses/lgpl.html
*/


function updateFalcon(pledge) {
	var currentLoc = parseInt(document.getElementById('falc').style.left.slice(0,-2));
	
	if (pledge < 10) {
		pledge = 1;
	} else {
		pledge = pledge / 10;
	}
	
	var add = pledge + currentLoc;
	document.getElementById('falc').style.left = add + 'px';

}

function updateEnterprise(pledge) {
	var currentLoc = parseInt(document.getElementById('entr').style.left.slice(0,-2));
	
	if (pledge < 10) {
		pledge = 1;
	} else {
		pledge = pledge / 10;
	}

	var add = pledge + currentLoc;
	document.getElementById('entr').style.left = add + 'px';

}

function update2() {
          
             var theForm = document.forms["starting-point"];
             var initialShipLoc = theForm.elements["start"]; 
 			 var initialShip = 0;
 			 
 			 if (initialShipLoc.value != "") {
   				 initialShip = parseInt(initialShipLoc.value); 
  			  }

  			  if (team.value == "wars") {
  			    updateFalcon(initialShip); 
  			    initialShip = 0;
  			    initialShipLoc.reset()
        	  } else {
        	    updateEnterprise(initialShip);
        	    initialShip = 0;
        	    initialShipLoc.reset()
        	  }
        	    
}

