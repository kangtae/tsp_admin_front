/* eslint-disable */
$(document).ready(function(){

	Hh = $(window).height();
	Bh = $('body').height();
	Ch = $('#container').height();
	TagHh = $('#container').height() + 87;
	Gmoney_h01 = $('.inner_cont > .btn-group').outerHeight(true);
	Gmoney_h02 = $('.inner_cont > .cont_tit').outerHeight();
	Gmoney_h03 = $('.g_money_left > .box1').eq(0).outerHeight(true);
	Gmoney_h04 = $('.g_money_left > .box1').eq(1).outerHeight(true);
	Gmoney_h05 = $('.g_money_left > .box1').eq(2).outerHeight(true);
	dis_height = Gmoney_h01 + Gmoney_h02 + Gmoney_h03 + Gmoney_h04 + Gmoney_h05;

	ContHeight();
	Inner_Scroll();
	Gmoney_h();
	
	
	$(window).resize(function(){
		Hh = $(window).height();
		Bh = $('body').height();
		Ch = $('#container').height();
		Gmoney_h01 = $('.inner_cont > .btn-group').outerHeight(true);
		Gmoney_h02 = $('.inner_cont > .cont_tit').outerHeight();
		Gmoney_h03 = $('.g_money_left > .box1').eq(0).outerHeight(true);
		Gmoney_h04 = $('.g_money_left > .box1').eq(1).outerHeight(true);
		Gmoney_h05 = $('.g_money_left > .box1').eq(2).outerHeight(true);
		dis_height = Gmoney_h01 + Gmoney_h02 + Gmoney_h03 + Gmoney_h04 + Gmoney_h05;
		ContHeight();
		Inner_Scroll();
		Gmoney_h();
	});

	//레이어 팝업 닫기
	$(document).on('click','.layer_close',function(e){
		e.preventDefault();
		$('.popup_area').remove();
	});
	// Gnb 대분류
	var Gnb = $('.menu_lst > ul > li > a');
	$(Gnb).each(function(){
		$(this).click(function(){
			if ($(this).next('ul').css('display') == 'block')
			{
				$(Gnb).next('ul').slideUp(300);
				$(Gnb).removeClass('on');
			} else if ($(this).next('ul').css('display') == 'none')
			{
				$(Gnb).next('ul').slideUp(300);
				$(this).next('ul').slideDown(300);
				$(Gnb).removeClass('on');
				$(this).addClass('on');
			}
		});
	});

	// Gnb 중분류
	/*
	var Middle_Link = $('.menu_lst > ul > li > ul > li');
	$(Middle_Link).each(function(x){
		$(this).click(function(){
			if ( $(this).has('ul') )
			{
				$(this).addClass('x');
			} else {
				alert('xx');
			}
		});
	});
	*/

	// Gnb 소분류
	var lnbMenu = $('.menu_lst > ul > li > ul > li ul li');
	$(lnbMenu).each(function(){
		$(this).click(function(){
			$(lnbMenu).children('a').removeClass('on');
			$(this).children('a').addClass('on');
		});
	});

	// G-money 메뉴 활성화
	//status_btn
	$('.status_btn').each(function(i){
		$(this).click(function(e){
			e.preventDefault();
			if ( $('.status_cont').eq(i).children('.status_cont_tbl').hasClass('on') )
			{
				$('.status_cont').children('.status_cont_tbl').removeClass('on');
				$(this).children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
				$(this).children('span').html('메뉴 펼침');
			} else if ( !$('.status_cont').eq(i).children('.status_cont_tbl').hasClass('on') )
			{
				$('.status_cont').children('.status_cont_tbl').removeClass('on');
				$('.status_cont').eq(i).children('.status_cont_tbl').addClass('on');
				$('.status_btn').children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
				$('.status_btn').children('span').html('메뉴 펼침');
				$(this).children('i').removeClass('fa-angle-down').addClass('fa-angle-up');
				$(this).children('span').html('메뉴 닫힘');
				Inner_Scroll();
			}
		});
	});


	// G-money content menu btn
	$('.btn_cont_menu').click(function(){
		
		if ( $(this).parents('#container').hasClass('on') )
		{
			$(this).parents('#container').removeClass('on');
			$(this).parents('.content').removeClass('on');
			$(this).html('메뉴 닫힘');
			Inner_Scroll();
		} else {
			$(this).parents('#container').addClass('on');
			$(this).parents('.content').addClass('on');
			$(this).html('메뉴 펼침');
			Inner_Scroll();
		}
	});


	


	// 삭제 예정 **************************************************************************
	Dsp();
	$(window).resize(function(){
		Dsp();
	});

	// del
	function Dsp() {
		$('.a').html( $('#container').height());
	}
	// 삭제 예정 **************************************************************************
//
});

// function


// container 높이제어
	function ContHeight(){
		if (TagHh < Hh)
		{
			$('#container').css('min-height',Hh - 87);
		} else if ( Bh > Hh)
		{
			$('#container').css('min-height','initial');
		}
	}


	// G-money left 높이
	function Gmoney_h() {
		if (TagHh < Hh)
		{
			$('.status_list').height( Hh - dis_height - 67);
		} else if ( Bh > Hh)
		{
			$('.status_list').height( Bh - dis_height - 67);
		}
	}


	// 테이블 넓이
	function Inner_Scroll(){
		$('.inner_scroll').delay(100).each(function(){
			//$(this).width($(this).parent().prev().width());
			$(this).width('100%');
		});
	}
