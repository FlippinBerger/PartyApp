$(document).ready(function() {
	$.ajax({
	    type: 'GET',
	    url: 'http://127.0.0.1:5000/2017-06-12/12',
	    success: callback
	});

	function callback(response) {
	    console.log(response);
	}
});




