jQuery(function($){
	//header scroll
	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$('header').addClass('scroll');
		}else{
			$('header').removeClass('scroll');
		}
	});

	//mobile menu
	$('.fusion-menu>li').each(function(){
		var menuText = $(this).find('.menu-text').text();
		$(this).find('.sub-menu').before('<span class="menu_on">'+menuText+'</span>');
	});
	$('.fusion-mobile-nav-holder').after('<div class="dim"></div>');

	//header resize
	$(window).resize(function(){
		var admBarH = $('#wpadminbar').height(),
		mainTop = $('#main').offset().top;
		$('header').css({'margin-top':admBarH});

		//scroll down
		$('.scroll_down').click(function(){
			$('body, html').stop().animate({'scrollTop':mainTop},500);
		});
	});

	//sub menu
	var current = $('.current_page_parent').find('.sub-menu').html(),
	url = window.location.href;
	if(url.indexOf('news') == -1){
		$('.sub_menu ul').html(current);
		//$('.sub_menu ul li').attr({'id':'','class':''});
		var listLeng = $('.sub_menu ul li').length,
		listW = 100/listLeng;
		$('.sub_menu ul li').css({'width':listW+'%'});
	}
	$('.sub_menu ul li').each(function(){
		if($(this).hasClass('current_page_item')){
			$(this).addClass('on');
		}else{
			$(this).removeClass('on');
		}
	});

	//gnb sub menu click
	$(window).load(function(){
		$('.sub-menu li a').click(function(){
			if($('header').hasClass('web')){
				$('header').removeClass('on');
			}else{
				$('.fusion-icon-bars').trigger('click');
				$('.fusion-mobile-nav-holder').removeClass('fusion-mobile-menu-expanded').hide();
			}
		});
	});

	//history slider
	$('.history.slider>div').slick({
		infinite:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1
				}
			}
		],
	});

	//back slider
	$('.back.slider>div').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.feasibility .mobile .fusion-clearfix').remove();

	//feasibility slider
	$('.feasibility .mobile>div').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	//var historyLeng = $('.history.slider .slick-slide').length;
	$(window).resize(function(){
		if($(this).width() > 1024){
			$('.slider .slick-slide').addClass('fusion-layout-column');
		}else{
			$('.slider .slick-slide').removeClass('fusion-layout-column');
		}
	});

	if($(window).width() > 1024){
		$('.slider .slick-slide').addClass('fusion-layout-column');
		//$('.history.slider>div').slick('slickGoTo', historyLeng-3);
	}else{
		$('.slider .slick-slide').removeClass('fusion-layout-column');
		//$('.history.slider>div').slick('slickGoTo', historyLeng-1);
	}

	$('.recycling .box.top').wrapAll('<div class="flex"></div>');
	$('.recycling .box.bottom').wrapAll('<div class="flex"></div>');


function responsive(){
	var res = '',
	param = $('header');

	if($('.fusion-mobile-menu-icons').is(':visible')) res = 'mob';
	else res = 'web';
	param.removeClass('web mob');
	param.addClass(res);
	def(param);

	$(window).resize(function(){
		if($('.fusion-mobile-menu-icons').is(':visible')) res2 = 'mob';
		else res2 = 'web';
		param.removeClass('web mob');
		param.addClass(res2);
		if(res != res2){
			res = res2;
			def(param);
		}
	});

	function def(param){
		if(param.hasClass('web')){
			$('header').on({
				mouseenter: function () {
					$(this).addClass('on');
				},
				mouseleave: function () {
					$(this).removeClass('on');
				}
			});
		}else if(param.hasClass('mob')){
			$('header').off('mouseenter mouseleave');
		}
	}
}

responsive();



	//waypoints
	$('.slide_text').waypoint(function() {
		$(this).children('h2').addClass('fadeInUpSec');
		$(this).children('p').addClass('fadeInUpSec');
	}, {
		offset: '70%'
	});

	$('.left_section>div').addClass('animated');
	$('.left_section').waypoint(function() {
		$(this).children('div').addClass('leftSec');
	}, {
		offset: '70%'
	});

	$('.right_section>div').addClass('animated');
	$('.right_section').waypoint(function() {
		$(this).children('div').addClass('rightSec');
	}, {
		offset: '70%'
	});

	$('#kboard-default-latest ul>li:nth-child(1)').addClass('animated delay-075s');
	$('#kboard-default-latest ul>li:nth-child(2)').addClass('animated delay-1s');
	$('.top_section').waypoint(function() {
		$(this).find('.animated').addClass('fadeInUpSec');
	}, {
		offset: '70%'
	});

});
