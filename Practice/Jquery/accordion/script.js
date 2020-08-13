
$('.accordion-header').click(function(){
 $(this).toggleClass('active');
 $(this).next().toggleClass('active');
 $(this).next().slideUp();

 if( $('.accordion-body.active') ){
  $('.accordion-body.active').slideDown();
 }
});



