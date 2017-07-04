
var modal = '';

$(document).ready(function() {

  $.scrollIt({ topOffset : 0}); //{ topOffset : -85}

  if(!Modernizr.touch){

    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40,
      responsive: true
    });

  }//disable for Mobile

  var ua = navigator.userAgent.toLowerCase();
  if ((Modernizr.touch && $(document).width()<=995) || ua.includes("ios") || ua.includes("iphone") || ua.includes("android") ) {
    $('.bgvid-wrapper').remove();
    $('.video.photo').addClass("forceVideoPhoto");
  }

  $('.when-to-use-heal-photos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable:false,
    accessibility:false
  });

  $('.when-to-use-heal a').on('mouseenter',function(){
    $('.when-to-use-heal-photos').slick('slickGoTo',Number($(this).attr('photo-index')));
  });

  $('.user-headshots').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.user-stories .gallery',
    centerMode: true,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive:[
      {
        breakpoint:768,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true
        }
      }
    ]
  });

  $('.user-stories .gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.user-headshots',
    centerMode: true,
    focusOnSelect: true,
    dots: true,
    customPaging: function(slider, i) {
      return '<button class="tab">' + '<img height="50" width="50" src="' + $(slider.$slides[i]).find('.slide-headshot').text() + '" />' + '</button>';
    },
    responsive:[
      {
        breakpoint:768,
        settings:{
          dots: false
        }
      }
    ]
  });

  $('.user-stories .gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);
    var backgroundImage = "";
    if(nextSlide==0){
      backgroundImage="images/user-stories/jennifer_story_bg@2x.jpg";
    }else if(nextSlide==1){
      backgroundImage="images/user-stories/kevin_story_bg@2x.jpg";
    }else if(nextSlide==2){
      backgroundImage="images/user-stories/priya_story_bg@2x.jpg";
    }else if(nextSlide==3){
      backgroundImage="images/user-stories/nicky_story_bg@2x.jpg";
    }else if(nextSlide==4){
      backgroundImage="images/user-stories/andre_story_bg@2x.jpg";
    }else if(nextSlide==5){
      backgroundImage="images/user-stories/noelle_story_bg@2x.jpg";
    }else if(nextSlide==6){
      backgroundImage="images/user-stories/chad_story_bg@2x.jpg";
    }
    $('.user-stories').css('background-image',"url("+backgroundImage+")");
  });

  var pressNum = 0;
  var tid;

  function activateQuote(num) {
    pressNum = num;
    $('.quote h4').hide();
    $('.quote h4').eq(num).fadeIn().css("display","inline-block");
    $('.quote > a')[0].href = $('.press-logo').eq(num)[0].href;
    if($(document).width()<=515){
      $('.press-logo').addClass('hide-and-keep');
      $('.press-logo').eq(num).removeClass('hide-and-keep');
    }else{
      $('.press-logo').removeClass('hide-and-keep');
    }
    $('.press-logo-active').css('opacity', 0);
    $('.press-logo').eq(num).find('.press-logo-active').fadeTo('default', 1);
  }


  activateQuote(pressNum);


  function startPressSlideshow(){
    clearTimeout(tid);
    tid = setInterval(
      function() {
        pressNum++;
        pressNum = pressNum % 11;

        activateQuote(pressNum);
      },
      4000
    );
  }

  startPressSlideshow();

  $('#all-press-logos a').on('mouseenter',function(){
    if($(document).width()>515){
      clearTimeout(tid);
      activateQuote(Number($(this).attr('data-press-index')));
    }
  });

  $('#all-press-logos a').on('mouseout',function(){
    if($(document).width()>515){
      startPressSlideshow();
    }
  });




  //var shrinkHeader = $(window).height() - 85;
  var shrinkHeader = $(window).height();
  var wHeight = $(window).height();
  //var whatHeal = 150;
  var whatHeal = $(window).height()/5;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
      $('.fixedtop-wrapper').addClass('shrink');
      $('.logo-icon').removeClass('sprite-logo');
      $('.logo-icon').addClass('sprite-logo_2');
      $('.phone-icon i').removeClass('img-phone-icon');
      $('.phone-icon i').addClass('img-phone-icon2');
      $('.nav-icon i').removeClass('sprite-nav-icon');
      $('.nav-icon i').addClass('sprite-nav-icon2');
      $('.btn-2').fadeIn(100);

      //$('#bgvid video').trigger('pause');

    }
    else {
      $('.fixedtop-wrapper').removeClass('shrink');
      $('.logo-icon').addClass('sprite-logo');
      $('.logo-icon').removeClass('sprite-logo_2');
      $('.phone-icon i').addClass('img-phone-icon');
      $('.phone-icon i').removeClass('img-phone-icon2');
      $('.nav-icon i').addClass('sprite-nav-icon');
      $('.nav-icon i').removeClass('sprite-nav-icon2');
      $('.btn-2').fadeOut(100);

      //$('#bgvid video').trigger('play'); //since we have modal to pause video, this causes a conflict

    }

    if ( scroll >= whatHeal ){

      $('.what-is-heal .col-sm-4').addClass('move-in');
    }
    if ( scroll <= 50 ) {

      $('.what-is-heal .col-sm-4').removeClass('move-in');
    }


  });
  function getCurrentScroll() {
    return window.pageYOffset;
  }






  if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) {

    $(".about-page img.a").on('touchstart', function(){
      if($(this).hasClass('tapped')){
        $(this).stop().animate({"opacity": "1"}, "100"); // removes silly photo
        $(this).parents('.inner-wrapper').stop().animate({"border-color": "#ffffff"}, "100");
        $(this).removeClass('tapped');

      } else {
        // remove silly photo states from all other photos
        $(".tapped").stop().animate({"opacity": "1"}, "100");
        $(".tapped").parents('.inner-wrapper').stop().animate({"border-color": "#ffffff"}, "100");
        $(".tapped").removeClass('tapped');

        $(this).stop().animate({"opacity": "0"}, "100"); // shows silly photo
        $(this).parents('.inner-wrapper').stop().animate({"border-color": "#f05a6d"}, "100");
        $(this).addClass('tapped');

        var tapped = $(this);
      }

      // var timeoutId = setTimeout(function(){
      //         tapped.removeClass('tapped');
      //         tapped.stop().animate({"opacity": "1"}, "100");
      //         tapped.parents('.inner-wrapper').stop().animate({"border-color": "#ffffff"}, "100");
      //     }, 3000);
      //     tapped.data('timeoutId', timeoutId);

    });




  } else {
    $(".about-page img.a").hover(function(){
      $(this).stop().animate({"opacity": "0"}, "100");
      $(this).parents('.inner-wrapper').stop().animate({"border-color": "#f05a6d"}, "100");
    },
    function() {
      $(this).stop().animate({"opacity": "1"}, "100");
      $(this).parents('.inner-wrapper').stop().animate({"border-color": "#ffffff"}, "100");
    }
  );
}





if($('.checkboxes-wrapper input[type="checkbox"]').length > 0){
  //$('.checkboxes-wrapper input[type="checkbox"]').checkbox();
}

if($('.doctor-call').length > 0){
  $('.doctor-call').click(function(e){

    var someElement = $(this).parents('.slider'),
    car = $(this).parents('.iphone-wrapper').siblings('.car'),
    logoGps = $(this).parent().siblings('.img-container').children('.logo-gps-img'),
    self = $(this);

    $('.moveUp').addClass('dr-moveup-call');
    $('.anim-header-wrapper').addClass('tooltip-call');

    someElement.addClass('d-call');
    logoGps.addClass('gps-call');
    $(this).addClass('opac');
    logoGps.removeClass('opac');
    car.each(function(){
      $(this).addClass('c-call');
    });

    var timeoutId = setTimeout(function(){
      someElement.removeClass('d-call');
      logoGps.removeClass('gps-call');
      logoGps.addClass('opac');
      self.removeClass('opac');
      $('.moveUp').removeClass('dr-moveup-call');
      $('.anim-header-wrapper').removeClass('tooltip-call');

      car.each(function(){
        $(this).removeClass('c-call');
      });

    }, 21000);


    someElement.data('timeoutId', timeoutId);

    e.preventDefault();

  });

}



/*
if($('#bgvid').length > 0){

  $('#bgvid').videoBG({
    position:"fixed",
    zIndex:-100,
    mp4:'video/Blabs_H264_Revised_1Target_1Max.mp4',
    ogv:'video/heal-website.ogv',
    webm:'video/Blab_wallpaper_WebM_15kps.webm',
    poster:'video/video_poster.jpg',
    opacity:1,
    fullscreen:true,
  });

}
*/

var h = window.location.hash;
if (h) {

  $('html, body').stop().animate({
    scrollTop : $(h).offset().top + 5 + "px"
  }, 1200, 'easeInOutExpo');

  //event.preventDefault();
}

// Get-app header on homepage
(function(){
  window['optimizely'] = window['optimizely'] || [];

  $/*("#get_app_button").bind("mousedown", function() {
    window.optimizely.push(["trackEvent", $("#get_app_button").text()+" Button Pressed"]);
    window.optimizely.push(["trackEvent", "Heal App or Req Doc Button Pressed"]);
  });

  $("#request_doctor_button").bind("mousedown", function() {
    window.optimizely.push(["trackEvent", $("#get_app_button").text()+" Button Pressed"]);
    window.optimizely.push(["trackEvent", "Heal App or Req Doc Button Pressed"]);
  });*/

  $("#header-store-android-link").bind("mousedown", function() {
    window.optimizely.push(["trackEvent", "Heal App Android Button Pressed"]);
    window.optimizely.push(["trackEvent", "Heal App or Req Doc Button Pressed"]);
    window.optimizely.push(["trackEvent", "Heal App or Req Doc Form Submit"]);
  });

  $("#header-store-ios-link").bind("mousedown", function() {
    window.optimizely.push(["trackEvent", "Heal App iOS Button Pressed"]);
    window.optimizely.push(["trackEvent", "Heal App or Req Doc Button Pressed"]);
    window.optimizely.push(["trackEvent", "Heal App or Req Doc Form Submit"]);
  });



  // On homepage, handle 'get app' select and buttons
  if ($('#city-select').length > 0) {

    // Get cached selectors and current city
    var sel = $('#city-select'),
    sel_top = $('#city-select-top'),
    d = new Date(),
    n = d.getHours(),
    city = sel.val(),
    modal = sel.find(':selected').data('modal'),
    //modal_btn = $('#get_app_button'),
    link_btn = $('#get_link_button'),
    //zipcode_input = $('#zipcode'),
    phone_input = $('#phone-field'),
    //top_bar_btn = $('#request_doctor_button'),
    appstore_btn = $('#get_app_button_appstore'),
    call_btn = $('#call_button'),
    let_us_know_text = $('#let_us_know'),
    android_app_soon_text = $('#android_app_soon');


    // Turn city-select into bootstrap menus
    sel.selectpicker();
    sel_top.selectpicker();


    if (city != 'Pick Your City') {
      if(window.optimizely
        && window.optimizely.data
        && window.optimizely.data.state
        && window.optimizely.data.state.variationNamesMap
        && window.optimizely.data.state.variationNamesMap[$("#optimizelyWebBookingExperimentId").val()]=="Variation #1"){
          modal = 'get-modal5';
        }else{
          modal = 'get-modal5';
        }
      } else {
        modal = 'get-modal2';
      }

      // Determine user device
      var ua = navigator.userAgent.toLowerCase(),
      isAndroid = ua.indexOf("android") > -1,
      isiPhone = ua.indexOf("iphone") > -1,
      isiPad = ua.indexOf("ipad") > -1;

      // Based on city and users device, determine which button to show
      var setButton = function(){

        // Only show call button for Android in Los Angeles
        /*if ((city == 'Los Angeles' || city == 'San Francisco' || city == 'Orange County') && (isAndroid || isiPhone || isiPad)) {
        modal_btn.addClass('hide');
        appstore_btn.removeClass('hide');
        call_btn.addClass('hide');
        android_app_soon_text.addClass('hide');
        let_us_know_text.removeClass('hide');
        $('#let_me_know_frame').attr('src', 'https://forms.heal.com/let_me_know.html');
      } else*/
      //{
      //modal_btn.removeClass('hide');
      call_btn.addClass('hide');
      appstore_btn.addClass('hide');
      android_app_soon_text.addClass('hide');
      let_us_know_text.addClass('hide');
      $('#let_me_know_frame').attr('src', 'https://forms.heal.com/let_me_know.html');
      //}

      //modal_btn.addClass("hidden");
      $(".header-content .links-stores").addClass("hidden");
      // Set text of modal button based on city
      console.log("modal: "+modal);
      if (city == 'Los Angeles' || city == 'San Francisco' || city == 'Orange County' || city == 'Silicon Valley' || city == 'San Diego') {

        if(window.optimizely
          && window.optimizely.data
          && window.optimizely.data.state
          && window.optimizely.data.state.variationNamesMap
          && window.optimizely.data.state.variationNamesMap[$("#optimizelyWebBookingExperimentId").val()]=="Variation #1"){
            $('.header-content').addClass("B");
            //modal_btn.text('Request doctor');
            //modal_btn.removeClass("hidden");
            /*
            if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) {
              $(".header-content .links-stores").removeClass("hidden");
            }else{
              //phone_input.removeClass("hidden");
              modal_btn.text('Request doctor');
              modal_btn.removeClass("hidden");
            }
            $('.btn-2').text("Request doctor");
            */




          }else{
            $('.btn-2').text("Request doctor");
            //modal_btn.text('Request doctor');
            //phone_input.addClass("hidden");
            //modal_btn.removeClass("hidden");
          }

          $('#city-name').html(", "+city);
          //zipcode_input.removeClass("hidden");
          //top_bar_btn.attr('data-modal', modal).trigger('reinit.modalEffects');
          //modal_btn.attr('data-modal', modal).trigger('reinit.modalEffects');
          appstore_btn.attr('data-modal', modal).trigger('reinit.modalEffects');
        } else if (city == 'Pick Your City') {
          //modal_btn.text('Notify me');
          //modal_btn.removeClass("hidden");
          $('#city-name').html("");
          phone_input.addClass("hidden");
          //zipcode_input.addClass("hidden");
          //top_bar_btn.attr('data-modal', modal).trigger('reinit.modalEffects');
          //modal_btn.attr('data-modal', modal).trigger('reinit.modalEffects');
          appstore_btn.attr('data-modal', modal).trigger('reinit.modalEffects');
        }

        // Reinit modal action for button
        //modal_btn.attr('data-modal',modal).trigger('reinit.modalEffects');

      };

      setButton();


      /*$('#zipcode').on('keyup',function(event){
      var zipcode = $('#zipcode').val();
      $('#get-modal5').attr('data-iframesrc', 'zip-submit.php?zip='+escape(zipcode));
    });
    */
    /*
    $('#phone-field').on('keyup',function(event){
      var phone = $('#phone-field').val();
      $('#get-modal7').attr('data-iframesrc', 'phone-submit.php?phone='+escape(phone));
    });*/

    // Update button when city changes
    $('#city-select').on('change',function(){
      if(city!=sel.val()){
        city = sel.val();
        //modal = sel.find(':selected').data('modal');
        if (city != 'Pick Your City') {
          if(window.optimizely
            && window.optimizely.data
            && window.optimizely.data.state
            && window.optimizely.data.state.variationNamesMap
            && window.optimizely.data.state.variationNamesMap[$("#optimizelyWebBookingExperimentId").val()]=="Variation #1"){
              modal = 'get-modal5';
            }else{
              modal = 'get-modal5';
            }
          } else {
            modal = 'get-modal2';
          }

          $('#city-select-top').selectpicker('val', city);
          $('#city-select-top').change();

          setButton();



        }
      });

      $('#city-select-top').on('change',function(){
        if(city!=sel_top.val()){
          city = sel_top.val();
          //modal = sel_top.find(':selected').data('modal');
          if (city != 'Pick Your City') {
            if(window.optimizely
              && window.optimizely.data
              && window.optimizely.data.state
              && window.optimizely.data.state.variationNamesMap
              && window.optimizely.data.state.variationNamesMap[$("#optimizelyWebBookingExperimentId").val()]=="Variation #1"){
                modal = 'get-modal5';
              }else{
                modal = 'get-modal5';
              }
            } else {
              modal = 'get-modal2';
            }

            $('#city-select').selectpicker('val', city);
            $('#city-select').change();

            setButton();

          }
        });
      }
    })()

    // Lastly, set src on any iframes which haven't been set yet
    setTimeout(function(){
      $('iframe').filter(function(){ return this.getAttribute('src') === '' && this.getAttribute('data-src'); }).each(function(){
        this.src = this.getAttribute('data-src');
      });
    },5);
  });
