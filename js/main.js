jQuery(document).ready(function($){

	var section = 'about';
    $('#default-nav').addClass('active');
	$('#' + section).fadeIn();

	var running = false;
	$('.nav-link').on('click', function() {
		if(!(running || $(this).hasClass('active'))) {
            running = true;

            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            section = $(this).data('section');
            $('section').fadeOut();

            setTimeout(function() {
                $('#' + section).fadeIn();
                setTimeout(function() {
                    running = false;
                },400);
            },400);
            return false;
        }
	});
});
