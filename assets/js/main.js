$(window).on('load', function(){


//controls the arrows and the nav expansion
//using the arrow button should not change the content being viewed only expand and collapse nav
//click on chapter title to change content
	$('.toggle-switch').on('click', function(event){
		event.preventDefault();
		if ($(this).hasClass('arrow-img-right')){
			$(this).removeClass('arrow-img-right');
			$(this).addClass('arrow-img-down');
			$(this).next().removeClass('subnav-expanded');
		}else if ($(this).hasClass('arrow-img-down')){
			$(this).removeClass('arrow-img-down');
			$(this).addClass('arrow-img-up');
			$(this).next().addClass('subnav-expanded');
		}else{
			$(this).removeClass('arrow-img-up');
			$(this).addClass('arrow-img-down');
			$(this).next().removeClass('subnav-expanded');
		}

	});






	
});

