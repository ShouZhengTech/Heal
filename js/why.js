$(document).ready(function() {
  var tabNames = ["sick", "well", "doctor"];

  function selectTab(clickedTabName){
    var tab = $('.tabs .'+clickedTabName);
    for (var i=0;i<tabNames.length;i++) {
      var tabName = tabNames[i];
      $(".tabs ."+tabName).removeClass("selected");
      $("section .container #"+tabName).addClass("hidden");
    }
    tab.addClass("selected");
    $("section .container #"+clickedTabName).removeClass("hidden");
  }

  $('.tabs li a').on('click',function(e){
    var tab = $(e.currentTarget);
    selectTab(tab.attr('data-tab-name'));
  });

  $('.square').on('touchstart', function () {
    $('.square.active').removeClass('active');
    $(this).addClass('active');
  });

  // only run why.html
  if($('#tabs').length > 0){
    var tab = String(window.location).split("#")[1];
    console.log(tab);
    console.log(typeof(tab));
    console.log(typeof(tab) == "undefined");
    if(typeof(tab) == "undefined"){
      selectTab("sick")
    }else{
      if(tab || $.inArray(tab,tabNames)){
        selectTab(tab);
      }
    }
  }
});
