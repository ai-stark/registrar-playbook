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


	var sidebar = $('.sidebar');
	
	var overlay = $('.overlay');
	$('.btn-touch').on('click', function(){
		if (sidebar.hasClass('closed')){ 
			sidebar.removeClass('closed');
			sidebar.addClass('open');
			overlay.addClass('on');


		}else{
			sidebar.removeClass('open');
			sidebar.addClass('closed');
			overlay.removeClass('on');
		}
	});


		
	var subnavs = $('.subnav li');
	$(subnavs).on('click', function(){
		if ($('.mobile-menu').is(':visible')) {
			if (sidebar.hasClass('closed')){ 
				sidebar.removeClass('closed');
				sidebar.addClass('open');
				overlay.addClass('on');


			}else{
				sidebar.removeClass('open');
				sidebar.addClass('closed');
				overlay.removeClass('on');
			}
		}
	});


	$('#show_ad').on('click', function(){
		if($('#addresses').css('display') == 'block'){
			$('#addresses').slideUp('slow');
		}else{
			$('#addresses').slideDown('slow');
		}
		
	});
		 
		
});




function pausePlayingVideo(clicked){
	var videos = $('video');
	videos.each(function(){
		if (this.paused == false){
			if(this !== videos[clicked]){
				this.pause();
				this.currentTime = 0;
				this.load();
			}
		}
	});
}



var videoButtons = $('.video-buttons a');
videoButtons.on('click', function(event){
	event.preventDefault();

	videoButtons.removeClass('active');
	$(this).addClass('active');

	var clicked = $(this).data('button');
	pausePlayingVideo(clicked);

	//$('.video-slideout').css('display', 'block');
	//$('.video-slideout').css('opacity', '1');
	
	$('.video-slideout div').css('position', 'absolute');
	$('.video-slideout div').css('display', 'none');

	$('#video' + clicked).css('position', 'static');
	$('#video' + clicked).css('display', 'block');
});

