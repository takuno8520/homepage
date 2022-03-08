$(function(){
	
	//object-fitのIE対応
	objectFitImages();
	
	//ドロワーメニュー
	$('.drawer').drawer();
	$('.drawer-button a').click(function() {
		$('.drawer').drawer('toggle');
	});
	$('.close a').click(function() {
		$('.drawer').drawer('close');
	});
	
	//トップに戻る
	var topBtn = $('.pagetop');
	var showFlag = false;
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			if(showFlag == false){
				showFlag = true;
				topBtn.animate({bottom : '1.5rem'}, 400, 'swing');
			}
		} else {
			if(showFlag){
				showFlag = false;
				topBtn.animate({bottom : '-6rem'}, 400, 'swing');
			}
		}
	});

	//スムーズスクロール
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('html, body').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});