$(document).ready(function() {
  var citySelectTopCounter = 0;
  var citySelectCounter = 0;
  function AnalyticsTrack(name, props) {
    ga('secondTracker.send', {
      hitType: 'event',
      eventCategory: props.category || 'All',
      eventAction: name,
      eventLabel: props.label || 'All'
    });
  };

  $('#city-select-top').on('change', function(event) {
    if(citySelectTopCounter > 0) {
      analytics.track('Pick Your City', {
        category:'Top Nav',
        label: event.target.value
      });
    }
    citySelectTopCounter++;
  });

  $('#city-select').on('change', function(event) {
    if(citySelectCounter > 0) {
      analytics.track('Pick Your City', {
        category:'Top Nav',
        label: event.target.value
      });
    }
    citySelectCounter++;
  });

  $('#body-healhome-requestdoctor').on('click', function(event) {

    analytics.track('Heal Home', {
      category:'Body',
      label:'Request doctor'
    });
  });

  $('#topnav-requestdoctor-requestdoctor').on('click', function(event) {

    analytics.track('Request doctor', {
      category:'Top Nav',
      label:'Request doctor'
    });
  });


  $('#topnav-heallogo-home').on('click', function(event) {

    analytics.track('Heal Logo', {
      category:'Top Nav',
      label:'Home'
    });
  });

  $('#topnav-service-doctors').on('click', function(event) {

    analytics.track('Service', {
      category:'Top Nav',
      label:'Doctors'
    });
  });

  $('#topnav-service-whatisheal').on('click', function(event) {

    analytics.track('Service', {
      category:'Top Nav',
      label:'What is Heal'
    });
  });

  $('#topnav-service-getthehealapp').on('click', function(event) {

    analytics.track('Service', {
      category:'Top Nav',
      label:'Get the Heal App'
    });
  });

  $('#topnav-service-whentouseheal').on('click', function(event) {

    analytics.track('Service', {
      category:'Top Nav',
      label:'When to use Heal'
    });
  });

  $('#topnav-service-whyuseheal').on('click', function(event) {

    analytics.track('Service', {
      category:'Top Nav',
      label:'Why use Heal'
    });
  });

  $('#topnav-service-healstories').on('click', function(event) {

    analytics.track('Service', {
      category:'Top Nav',
      label:'Heal Stories'
    });
  });

  $('#topnav-company-aboutus').on('click', function(event) {

    analytics.track('Company', {
      category:'Top Nav',
      label:'About Us'
    });
  });

  $('#topnav-company-blog').on('click', function(event) {

    analytics.track('Company', {
      category:'Top Nav',
      label:'Blog'
    });
  });

  $('#topnav-company-pricing').on('click', function(event) {

    analytics.track('Company', {
      category:'Top Nav',
      label:'Pricing'
    });
  });

  $('#topnav-company-careers').on('click', function(event) {

    analytics.track('Company', {
      category:'Top Nav',
      label:'Careers'
    });
  });

  $('#topnav-company-press').on('click', function(event) {

    analytics.track('Company', {
      category:'Top Nav',
      label:'Press'
    });
  });

  $('#topnav-support-contactus').on('click', function(event) {

    analytics.track('Support', {
      category:'Top Nav',
      label:'Contact Us'
    });
  });

  $('#topnav-support-help').on('click', function(event) {

    analytics.track('Support', {
      category:'Top Nav',
      label:'Help'
    });
  });

  // $('#phone-number-submit').on('click', function(event) {
  //
  //   analytics.track('App Install', {
  //     category:'Body',
  //     label:'Text Me'
  //   });
  // });

  $('#header-store-ios-link').on('click', function(event) {

    analytics.track('App Install', {
      category:'Body',
      label:'App Store'
    });
  });

  $('#header-store-android-link').on('click', function(event) {

    analytics.track('App Install', {
      category:'Body',
      label:'Google Play'
    });
  });

  $('#body-whentouseheal-whenyouresick').on('click', function(event) {

    analytics.track('When to use Heal', {
      category:'Body',
      label:'When you\'re sick'
    });
  });

  $('#body-whentouseheal-whenyourewell').on('click', function(event) {

    analytics.track('When to use Heal', {
      category:'Body',
      label:'When you\'re well'
    });
  });

  $('#body-whentouseheal-whenyouneedanewdoctor').on('click', function(event) {

    analytics.track('When to use Heal', {
      category:'Body',
      label:'When you need a new doctor'
    });
  });

  $('#body-whenyouresick-coldandcough').on('click', function(event) {

    analytics.track('When you\'re sick', {
      category:'Body',
      label:'Cold and Cough'
    });
  });

  $('#body-whenyouresick-feverfluorheadache').on('click', function(event) {

    analytics.track('When you\'re sick', {
      category:'Body',
      label:'Fever, Flu or Headache'
    });
  });

  $('#body-whenyouresick-earinfection').on('click', function(event) {

    analytics.track('When you\'re sick', {
      category:'Body',
      label:'Ear Infection'
    });
  });

  $('#body-whenyouresick-rash').on('click', function(event) {

    analytics.track('When you\'re sick', {
      category:'Body',
      label:'Rash'
    });
  });

  $('#body-whenyouresick-sorethroatorstrep').on('click', function(event) {

    analytics.track('When you\'re sick', {
      category:'Body',
      label:'Sore Throat or Strep'
    });
  });

  $('#body-whenyouresick-sportsinjuries').on('click', function(event) {

    analytics.track('When you\'re sick', {
      category:'Body',
      label:'Sports Injuries'
    });
  });

  $('#body-whenyouresick-stomachaches').on('click', function(event) {

    analytics.track('When you\'re sick', {
      category:'Body',
      label:'Stomach aches'
    });
  });

  $('#body-whenyourewell-wellbabyexam').on('click', function(event) {

    analytics.track('When you\'re well', {
      category:'Body',
      label:'Well-baby exam'
    });
  });

  $('#body-whenyourewell-annualphysical').on('click', function(event) {

    analytics.track('When you\'re well', {
      category:'Body',
      label:'Annual Physical'
    });
  });

  $('#body-whenyourewell-sportsphysical').on('click', function(event) {

    analytics.track('When you\'re well', {
      category:'Body',
      label:'Sports Physical'
    });
  });

  $('#body-whenyourewell-campphysical').on('click', function(event) {

    analytics.track('When you\'re well', {
      category:'Body',
      label:'Camp Physical'
    });
  });

  $('#body-whenyourewell-schoolphysical').on('click', function(event) {

    analytics.track('When you\'re well', {
      category:'Body',
      label:'School Physical'
    });
  });

  $('#body-whenyourewell-flushots').on('click', function(event) {

    analytics.track('When you\'re well', {
      category:'Body',
      label:'Flushots'
    });
  });

  $('#body-whenyourewell-familyhealthassessment').on('click', function(event) {

    analytics.track('When you\'re well', {
      category:'Body',
      label:'Family Health Assessment'
    });
  });

  $('#body-whenyouneedanewdoctor-primarycarephysician').on('click', function(event) {

    analytics.track('When you Need a New Doctor', {
      category:'Body',
      label:'Primary Care Physician'
    });
  });

  $('#body-inthepress-techcrunch').on('click', function(event) {

    analytics.track('In the Press', {
      category:'Body',
      label:'Tech Crunch'
    });
  });

  $('#body-inthepress-abc').on('click', function(event) {

    analytics.track('In the Press', {
      category:'Body',
      label:'ABC'
    });
  });

  $('#body-inthepress-fox').on('click', function(event) {

    analytics.track('In the Press', {
      category:'Body',
      label:'Fox'
    });
  });

  $('#body-inthepress-forbes').on('click', function(event) {

    analytics.track('In the Press', {
      category:'Body',
      label:'Forbes'
    });
  });

  $('#body-inthepress-latimes').on('click', function(event) {

    analytics.track('In the Press', {
      category:'Body',
      label:'LA Times'
    });
  });

  $('#body-inthepress-sfchronicle').on('click', function(event) {

    analytics.track('In the Press', {
      category:'Body',
      label:'SF Chronicle'
    });
  });

// DO IT FOR THE DOCTORS AND HEAL STORIES

  $('#body-inthepress-sfchronicle').on('click', function(event) {

    analytics.track('In the Press', {
      category:'Body',
      label:'SF Chronicle'
    });
  });

  $('#footer-service-whatisheal').on('click', function(event) {

    analytics.track('Service', {
      category:'Footer',
      label:'What is Heal'
    });
  });

  $('#footer-service-gettheapp').on('click', function(event) {

    analytics.track('Service', {
      category:'Footer',
      label:'Get the App'
    });
  });

  $('#footer-service-whentouseheal').on('click', function(event) {

    analytics.track('Service', {
      category:'Footer',
      label:'When to use Heal'
    });
  });
  $('#footer-service-whyuseheal').on('click', function(event) {

    analytics.track('Service', {
      category:'Footer',
      label:'Why use Heal'
    });
  });
  $('#footer-service-doctors').on('click', function(event) {

    analytics.track('Service', {
      category:'Footer',
      label:'Doctors'
    });
  });
  $('#footer-service-healstories').on('click', function(event) {

    analytics.track('Service', {
      category:'Footer',
      label:'Heal Stories'
    });
  });

  $('#footer-company-aboutus').on('click', function(event) {

    analytics.track('Company', {
      category:'Footer',
      label:'About Us'
    });
  });

  $('#footer-company-blog').on('click', function(event) {

    analytics.track('Company', {
      category:'Footer',
      label:'Blog'
    });
  });

  $('#footer-company-pricing').on('click', function(event) {

    analytics.track('Company', {
      category:'Footer',
      label:'Pricing'
    });
  });

  $('#footer-company-press').on('click', function(event) {

    analytics.track('Company', {
      category:'Footer',
      label:'Press'
    });
  });

  $('#footer-company-careers').on('click', function(event) {

    analytics.track('Company', {
      category:'Footer',
      label:'Careers'
    });
  });

  $('#footer-support-contactus').on('click', function(event) {

    analytics.track('Support', {
      category:'Footer',
      label:'Contact Us'
    });
  });

  $('#footer-support-help').on('click', function(event) {

    analytics.track('Support', {
      category:'Footer',
      label:'Help'
    });
  });

  $('#footer-appinstall-appstore').on('click', function(event) {

    analytics.track('App Install', {
      category:'Footer',
      label:'App Store'
    });
  });

  $('#footer-appinstall-googleplay').on('click', function(event) {

    analytics.track('App Install', {
      category:'Footer',
      label:'Google Play'
    });
  });
});

$('#body-whenyouresick-requestdoctor-coldandcough').on('click', function(event) {

  analytics.track('When you\'re sick', {
    category:'Body',
    label:'Request Doctor | Cold and Cough'
  });

  window.location = $('#patient-portal-link').val() || "https://patient.heal.com";
});

$('#body-whenyouresick-requestdoctor-feverfluorheadache').on('click', function(event) {

  analytics.track('When you\'re sick', {
    category:'Body',
    label:'Request Doctor | Fever, Flu or Headache'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyouresick-requestdoctor-earinfection').on('click', function(event) {

  analytics.track('When you\'re sick', {
    category:'Body',
    label:'Request Doctor | Ear Infection'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyouresick-requestdoctor-rash').on('click', function(event) {

  analytics.track('When you\'re sick', {
    category:'Body',
    label:'Request Doctor | Rash'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyouresick-requestdoctor-sorethroatorstrep').on('click', function(event) {

  analytics.track('When you\'re sick', {
    category:'Body',
    label:'Request Doctor | Sore Throat or Strep'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyouresick-requestdoctor-sportsinjuries').on('click', function(event) {

  analytics.track('When you\'re sick', {
    category:'Body',
    label:'Request Doctor | Sports Injuries'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyouresick-requestdoctor-stomachaches').on('click', function(event) {

  analytics.track('When you\'re sick', {
    category:'Body',
    label:'Request Doctor | Stomach aches'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyourewell-requestdoctor-wellbabyexam').on('click', function(event) {

  analytics.track('When you\'re well', {
    category:'Body',
    label:'Request Doctor | Well-baby exam'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyourewell-requestdoctor-annualphysical').on('click', function(event) {

  analytics.track('When you\'re well', {
    category:'Body',
    label:'Request Doctor | Annual Physical'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyourewell-requestdoctor-sportsphysical').on('click', function(event) {

  analytics.track('When you\'re well', {
    category:'Body',
    label:'Request Doctor | Sports Physical'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyourewell-requestdoctor-campphysical').on('click', function(event) {

  analytics.track('When you\'re well', {
    category:'Body',
    label:'Request Doctor | Camp Physical'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyourewell-requestdoctor-schoolphysical').on('click', function(event) {

  analytics.track('When you\'re well', {
    category:'Body',
    label:'Request Doctor | School Physical'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyourewell-requestdoctor-flushots').on('click', function(event) {

  analytics.track('When you\'re well', {
    category:'Body',
    label:'Request Doctor | Flushots'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyourewell-requestdoctor-familyhealthassessment').on('click', function(event) {

  analytics.track('When you\'re well', {
    category:'Body',
    label:'Request Doctor | Family Health Assessment'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});

$('#body-whenyouneedanewdoctor-requestdoctor-primarycarephysician').on('click', function(event) {

  analytics.track('When you Need a New Doctor', {
    category:'Body',
    label:' Request Doctor | Primary Care Physician'
  });
  window.location = $('#patient-portal-link').val() || "https://patient.heal.com"
});
