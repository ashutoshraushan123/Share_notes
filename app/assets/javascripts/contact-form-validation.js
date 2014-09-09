$(document).ready(function(){
	$('#commentForm').submit(function(){
		var emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		if($('#contact_name').val() == ''){
			alert('Please provide Name');
			return false;
		}		
		if($('#contact_passsword').val() == ''){
			alert('Please provide a password');
			return false;
		}
		if($('#contact_passsword').val() != $('#contact_confi_pass').val()) {
			alert("Password and Password confirmation doesn't match");
			return false;
		}
		if($('#contact_email').val() == ''){
			alert('Please provide an Email');
			return false;
		}	
	  	if( !emailReg.test( $('#contact_email').val() ) ) {
	  		alert('Invalid Email');
	    	return false;
	  	}				
	});
});