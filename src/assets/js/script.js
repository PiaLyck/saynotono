$(document).ready(function () {
  $('.quote-carousel').slick();

  $('.img-carousel').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 2500
  });

  var windowWidth = $(window).width();

  if (windowWidth > 768) {
    $('#fullpage').fullpage({
      navigation: true,
      navigationTooltips: ['Home', 'Info', 'Quotes', 'Sign up',
        'Supporters', 'Agencies'
      ],
      anchors: ['Home', 'Info', 'Quotes', 'signupform',
        'Supporters', 'Agencies'
      ],
      showActiveTooltip: true,
      normalScrollElements: '.supporters-container, .signup-form-cnt, .agency-list, .scrollbox'
    });
  }

  // Mobile menu
  $('.menu-btn').click(function () {
    $('.mobile-menu').addClass("is-showing");
  });

  $('.mobile-menu a').click(function () {
    $('.mobile-menu').removeClass("is-showing");
  });

  $('.close-menu').click(function () {
    $('.mobile-menu').removeClass("is-showing");
  });


  function reframe(target, cName) {
    var frames = typeof target === 'string' ? document.querySelectorAll(
      target) : target;
    var c = cName || 'js-reframe';
    if (!('length' in frames)) frames = [frames];
    for (var i = 0; i < frames.length; i += 1) {
      var frame = frames[i];
      var hasClass = frame.className.split(' ').indexOf(c) !== -1;
      if (hasClass) return;
      var h = frame.offsetHeight;
      var w = frame.offsetWidth;
      var padding = h / w * 100;
      var div = document.createElement('div');
      div.className = c;
      var divStyles = div.style;
      divStyles.position = 'relative';
      divStyles.width = '100%';
      divStyles.paddingTop = padding + '%';
      var frameStyle = frame.style;
      frameStyle.position = 'absolute';
      frameStyle.width = '100%';
      frameStyle.height = '100%';
      frameStyle.left = '0';
      frameStyle.top = '0';
      frame.parentNode.insertBefore(div, frame);
      frame.parentNode.removeChild(frame);
      div.appendChild(frame);
    }
  }
  reframe('iframe');

  $('.letter').click(function (e) {
    e.preventDefault();
    var letter = this.text;
    scrollTo(letter);
  });

  function scrollTo(letter) {
    var topPos = document.getElementById(letter).offsetTop;
    var lettersPos = document.getElementById('A').offsetTop;
    document.getElementById('supporters-list').scrollTop = topPos - lettersPos;
  }

});
