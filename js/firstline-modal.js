(function(){
  window.firstlineCountdown = {
    timer: null
  };

  var counterLabelId = 'firstline-automatically-close-counter';
  var counterUnitsLabelId = 'firstline-automatically-close-counter-units';

  window.firstlineCountdown.step = function(){
    var newNumber = parseInt(document.getElementById(counterLabelId).innerHTML, 10) - 1;
    document.getElementById(counterLabelId).innerHTML = newNumber;

    if(newNumber <= 0){
      window.firstlineCountdown.stop();
    }

    if(newNumber === 1){
      document.getElementById(counterUnitsLabelId).innerHTML = 'second';
    }
  };

  window.firstlineCountdown.start = function(){
    window.firstlineCountdown.timer = setInterval(function(){
      window.firstlineCountdown.step();
    }, 1000);
  };

  window.firstlineCountdown.stop = function(){
    if(window.firstlineCountdown.timer){
      clearInterval(window.firstlineCountdown.timer)
    }
    window.firstlineCountdown.timer = null;
    $('#firstline-modal').removeClass('md-show');
  };

  var referralHostname = document.referrer.split('/')[2];
  if(window.location.href.indexOf('heal.com/firstline') >= 0){
    $('#firstline-modal').addClass('md-show');
    window.firstlineCountdown.start();
  }

  $('#firstline-modal .md-close').click(function(){
		$('#firstline-modal').removeClass('md-show');
	});

  $('#firstline-modal .now-meet-heal').click(function(){
		$('#firstline-modal').removeClass('md-show');
	});
})();
