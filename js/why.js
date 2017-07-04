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
  console.log(tab);
}

$(document).ready(function() {

  $('.tabs li a').on('click',function(e){
    var tab = $(e.currentTarget);
    selectTab(tab.attr('data-tab-name'));

  });

  $('.square').on('touchstart', function () {
    $('.square.active').removeClass('active');
    $(this).addClass('active');
  });

  var tab = String(window.location).split("#")[1];
  if(tab && $.inArray(tab,tabNames)){
    selectTab(tab);
  }

});
