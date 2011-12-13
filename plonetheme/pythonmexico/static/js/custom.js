$(function () {

	// HOMEPAGE ILLUSTATION / SLIDER CHANGER
    if ($('body').hasClass('home')) {

        $('#slider_switch :checkbox').removeAttr('checked');

        $('#slider_switch input').change(function () {
            if ($(this).attr("checked")) {
                $('.featured_text').fadeOut();
                $('#featured_slider_home').css('visibility', 'visible').fadeIn();
                $('h2.slider_title').fadeIn();
                return false;
            }

            $('.featured_text').fadeIn();
            $('#featured_slider_home').fadeOut();
            $('h2.slider_title').fadeOut();
        });

    }
    
   
	//NAVBAR  SLIDEDOWN
    $('#navbar ul').css({
        display: "none"
    });
    
    $('#navbar li').hover(function () {
        $(this).find('ul:first').css({
            visibility: "visible",
            display: "none"
        }).slideDown('fast');
    }, function () {
        $(this).find('ul:first').css({
            visibility: "hidden"
        });
    });

    $("#navbar li").has('ul').addClass('parent_nav').find('>a').append('<span class="has_children"></span>');




	//GALLERY IMAGES HOVER SCRIPT
	
	$('#portfolio a.image_item').append('<span class="image_hover"></span>');	//add span to images 		
	$('#portfolio a.video_item').append('<span class="video_hover"></span>');	// add span to videos		

	$('#portfolio li a span:not(.new_work)').css('opacity', '0').css('display', 'block') //span opacity = 0 
	
	// show / hide span on hover
	$("#portfolio a").hover(
		 function () {
			 $(this).find('.image_hover, .video_hover').stop().fadeTo('slow', .7); }, 
		function () {
	  		  $('.image_hover, .video_hover').stop().fadeOut('slow', 0);
	});



	
	//HIDE FORM LABEL ON FOCUS
	
	 $('#contact_form input, #contact_form textarea, #comment_form input, #comment_form textarea, #newsletter_form input.form_input')
	.bind("focus.labelFx", function(){
		$(this).prev().fadeOut();
	})
	.bind("blur.labelFx", function(){
		$(this).prev()[!this.value ? "fadeIn" : "fadeOut"]();
	})
	.trigger("blur.labelFx");
		
		
	// CONTACT FORM HANDLING SCRIPT - WHEN USER CLICKS "SUBMIT"
	
	$("#contact_form #form_submit").click(function(){		
				   				 		
		
		// remove "error" class from text fields
		$("form input, form textarea").focus(function() {
 			$(this).removeClass('error_input');
 			$(this).parent().find('label.error').fadeOut().remove();
		});

		// set variables
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		
		// validate "name" field
		var nameVal = $("#form_name").val();
		if(nameVal == '') {
			$("#form_name")
			.after('<label for="form_name" class="error">Please enter your name</label>')
			.addClass('error_input')				  
			hasError = true;
			$("#form_name").parent().find('label:not(.error)').hide();	
		}
	
		// validate "e-mail" field - andd error message and animate border to red color on error
		var emailVal = $("#form_email").val();
		if(emailVal == '') {
			$("#form_email")
			.after('<label for="form_email" class="error">Please enter your e-mail</label>')
			.addClass('error_input')
			hasError = true; 
			
			$("#form_email").parent().find('label:not(.error)').hide();
				
		} else if(!emailReg.test(emailVal)) {	
			$("#form_email")
			.after('<label for="form_email" class="error">Please provide a valid e-mail</label>')
			.addClass('error_input')
			hasError = true;
			$("#form_email").attr("value", "");
			$("#form_email").parent().find('label:not(.error)').hide();
		}
		
				
		// validate "message" field
		var messageVal = $("#form_message").val();
		if(messageVal == '') {
			
			$("#form_message")
			.after('<label for="form_message" class="error comment_error">Please enter your message</label>')
			.addClass('error_input')
			hasError = true;
			
			$("#form_message").parent().find('label:not(.error)').hide();
		}
		
                // if the are errors - return false
                if(hasError == true) { return false; }
            
		// if no errors are found - submit the form with AJAX
		if(hasError == false) {
			
		var dataString = $('#contact_form').serialize();

			//hide the submit button and show the loader image	
			$("#form_submit").fadeOut('fast', function () {
			$('#loader').fadeIn(); 
			});
			       
			
		// make an Ajax request
        $.ajax({
            type: "POST",
            url: "php/contact-send.php",
            data: dataString,
            success: function(){ 
           
          // on success fade out the form and show the success message
          $('#loader').hide();
          $('#contact_form input, #contact_form textarea').fadeOut('fast');
          $('.contact_info').fadeOut('fast');
           $('.success').fadeIn();    	
            }
        }); // end ajax

		 return false;  
		} 	
		
	});		
		

		
	// FOOTER TOOLTIPS
	$('.tooltip_link').tipsy({gravity: 's', fade: 'true' });	
		
		
	// FOOTER SOCIAL LIST HOVER
    $(".social_list a").hover(function () {
        $(this).filter(':not(:animated)').animate({
            top: '-=7px'
        });
    }, function () {
        $(this).animate({
            top: '0px'
        });
    });

});