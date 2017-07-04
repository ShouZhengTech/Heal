//contactus.js
$(document).ready(function() {

	if($('.checkboxes-wrapper input[type="checkbox"]').length > 0){
	  $('.checkboxes-wrapper input[type="checkbox"]').checkbox();
	}

   // var sel = $('#city-select');
   // sel.selectpicker();

	$('.selectpicker').selectpicker()

	$('#contact-us').submit(function(event) {

		var doctorCheck = $('#c_doctor');
		var checked = doctorCheck.prop('checked');
		if (checked) {
			var doctorResult = 'Yes';
		} else {
			var doctorResult = 'No'
		}

		var formData = {
			'z_name'              : $('input[name=z_name]').val(),
			'z_requester'         : $('input[name=z_requester]').val(),
			'z_subject'         : $('select[name=z_subject]').val(),
			'z_description'       : $('textarea[name=z_description]').val(),
			'c_24000369'          : doctorResult
		};

		$.ajax({
			type        : 'POST',
			url         : 'contact_us_3.php',
			data        : formData,
			dataType    : 'json',
			encode          : true
		})

		.done(function(data) {

				console.log(data);

				if (!data.success) {
						var errorElement = $('.submission-message.error');
						errorElement.fadeIn(100);
						var msgElement = errorElement;
						ga('send', 'event', 'contact-us', 'request', 'error', 0);
				} else {
						var successElement = $('.submission-message.success');
						successElement.siblings('.row').fadeOut(100).parents('.get-app-content').siblings('.email-notification').fadeOut(100);
						successElement.fadeIn(100);
						ga('send', 'event', 'Body', 'Contact us', 'Sned Message', 1);
						//var msgElement = successElement;
				}

				var timeoutId = setTimeout(function(){
					msgElement.fadeOut(300);
				}, 5000);

				msgElement.data('timeoutId', timeoutId);

		});
		event.preventDefault();
	});
});
