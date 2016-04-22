$(document).ready(function(){
	
	var paused = false;

	$('.crop').click(function(){
		$("#bigImg").attr('src', $(this).attr('src'));
		
		var id = $(this).attr('id');

		counter = parseInt(id.slice(-1));
		
	});

	var counter = 1;
	$("#img" + counter).click();
	

	$("#backward").click(function(){
		counter = counter - 1;
		if (counter < 1) {
			counter = $('.crop').length;
		}

		$("#img" + counter).click();
	});

	$("#forward").click(function(){
		counter = counter + 1;
		if (counter > $('.crop').length) {
			counter = 1;
		}

		$("#img" + counter).click();
	});
		
		$("#bigImg").click(function (){
			paused = !paused;
		});

		$("#play").click(function(){
			paused = false;
			$('#play').addClass('active-button');
			$('#stop').removeClass('active-button');
		});

		setInterval(function (){
			
			if(!paused){
				$("#forward").click();
			};
		}, 3000);

});

