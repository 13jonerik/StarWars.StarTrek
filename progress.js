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
             var initialSalaryAmount = theForm.elements["start"]; 
 			 var initialSalary = 0;
 			 
 			 //if the textbox is not blank
 			 if (initialSalaryAmount.value != "") {
   				 initialSalary = parseInt(initialSalaryAmount.value);
   				 
  			  }

  			  if (team.value == "wars") {
  			    updateFalcon(initialSalary); 
  			    initialSalary = 0;
  			    initialSalaryAmount.reset()
        	  } else {
        	    updateEnterprise(initialSalary);
        	    initialSalary = 0;
        	    initialSalaryAmount.reset()
        	  }
        	  
        	  
}

