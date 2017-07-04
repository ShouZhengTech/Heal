$(document).ready(function(){

  $('.qualified-doctors .bios').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    responsive:[
      {
        breakpoint:768,
        settings:{
          centerMode: true,
        }
      }
    ]
  });

  $('.qualified-doctors .bios').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);
    $('.qualified-doctors .full-body .photo').addClass("hidden");
    $('.qualified-doctors .full-body .photo:nth-child('+(nextSlide+1)+')').removeClass("hidden");
  });

  $('.qualified-doctors .headshots').slick({
    arrows:false,
    swipe:false,
    swipeToSlide:false
  });

  hideDoctorBio();

});


function showDoctorBio(pos){
  $(".marketing-copy").addClass("hidden");
  $("#doctor-bios").removeClass("hide-bios");
  $("#doctor-headshots").addClass("hidden");
  $("#qualified-doctors-section").addClass("fullscreen");

  $('.qualified-doctors .full-body').resize();
  setTimeout(function () {
    $('.qualified-doctors .bios').slick('slickGoTo',pos,true);
  }, 100);


  //$('.qualified-doctors .full-body').slick('slickGoTo',pos,true);

  return true;
}

function hideDoctorBio(){
  $(".marketing-copy").removeClass("hidden");
  $("#doctor-bios").addClass("hide-bios");
  $("#doctor-headshots").removeClass("hidden");
  $("#qualified-doctors-section").removeClass("fullscreen");

  var slide = Number($('.qualified-doctors .bios').slick('slickCurrentSlide'));
  slide = Math.floor(slide/10);
  $('.qualified-doctors .headshots').slick('slickGoTo',slide,true);
  return true;
}
