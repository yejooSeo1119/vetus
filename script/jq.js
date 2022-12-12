
// gnb
$('.sub, .nav-bg').slideUp(0);
$('.nav').hover(function(){
    $('.sub, .nav-bg').stop().slideDown();
}, function(){
    $('.sub, .nav-bg').stop().slideUp();
});



//popup tab 
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


//popup
$(document).ready(function(){

   
      $('.popupOpen').click(function(){

        $('.popupBg').show(0);

      });

      $('.popupOpen').click(function(){

        $('.popup').show(0);

      });



      $('.close').click(function(){

        $('.popupBg').hide(0);

      });

      $('.close').click(function(){

        $('.popup').hide(0);

      });


});

