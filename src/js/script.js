$(function(){
	//リンクにactiveクラス
	$('.js-header-item').click(function(){
		$('.js-header-item').removeClass('js-header-item-active');
		$(this).addClass('js-header-item-active');
	})
})

$(document).ready(function() {
	$('.drawer').drawer();
});

new WOW().init();
