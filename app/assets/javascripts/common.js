$(document).on('turbolinks:load', function(){
  // $('.slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.thumbnail-list'
  // });
  // $('.thumbnail-list').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true

  var slider = ".slider";
  var thumbnailItem = ".thumbnail-list .thumbnail-item";
  
  
  $(thumbnailItem).each(function(){
    var index = $(thumbnailItem).index(this);
    $(this).attr("data-index",index);
  });
  

  $(slider).on('init',function(slick){
    var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
    $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
  });

  $(slider).slick({
    arrows: false,
    infinite: false
  });

  $(thumbnailItem).on('mouseover click',function(){
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo",index,false);
  });
  
  $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItem).each(function(){
      $(this).removeClass("thumbnail-current");
    });
    $(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current");
  });
});