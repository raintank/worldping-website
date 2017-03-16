$('#pricing-slider').slider({
  tooltip: 'always',
  formatter: function(value) {
    if (value >= 1000) {
      return '1 Billion+ checks/mo';
    }
    return value + ' Million checks/mo';
  }
});

function updateEndpointsText() {
  $('#endpoints span').text(
    $('#endpoints-dropdown input[type=checkbox]:checked')
      .map(function() {
        return $(this.parentNode).text().trim();
      })
      .get()
      .join(', ')
      .replace(/, ([^,]+)$/, ' & $1')
      .replace(/(, .+) &/, '$1, &') || 'Select'
  );
}

function updateSecondsText() {
  $('#seconds span').text($(this).text());
}

function calculateChecks() {
  var endpointCount = parseInt($('#endpointCount').val());
  var endpoints = $('#endpoints-dropdown input[type=checkbox]:checked').length;
  var locationCount = parseInt($('#locationCount').val());
  var seconds = parseInt($('#seconds span').text());
  var totalChecks = endpointCount * endpoints * locationCount * 30.4375 * 24 * (3600 / seconds);

  console.log([endpointCount, endpoints, locationCount, seconds, totalChecks]);

  $('#pricing-slider').slider('setValue', totalChecks / 1000000);
  updatePrice();
}

function updatePrice() {
  var millionChecks = $('#pricing-slider').slider('getValue');

  var plan = '';
  var baseprice = '';
  var overages = '';
  var quotas = 'Unlimited Endpoints, Unlimited Private Probes';
  var monthlyCost = 0;

  if (millionChecks >= 100) {
    $('#plan').text('Custom');
    $('#base-price').text('TBD');
    $('#overages').text('TBD');
    $('#quotas').text(quotas);
    $('#monthlyCost').html('<div class="please-call"><a href="https://grafana.com/contact">Contact us</a></div>');
    return;
  }

  if (millionChecks > 20) {
    plan = 'Basic';
    baseprice = '$475/mo includes 20 Million checks';
    overages = Math.max(millionChecks - 20, 0) + 'M at $20 per Million per month.';

    monthlyCost = 475 + Math.max(millionChecks - 20, 0) * 20;
  } else if (millionChecks > 1 || parseInt($('#endpointCount').val()) > 3) {
    plan = 'Basic';
    baseprice = '$100/mo includes 5 Million checks';
    overages = Math.max(millionChecks - 3, 0) + 'M at $25 per Million per month.';

    monthlyCost = 100 + Math.max(millionChecks - 5, 0) * 25;
  } else {
    plan = 'Free';
    baseprice = '$0/mo includes 1 Million checks';
    quotas = 'Limited to 3 Endpoints, No Private Probes';
    overages = 'N/A';

    monthlyCost = 0;
  }

  $('#plan').text(plan);
  $('#base-price').text(baseprice);
  $('#overages').text(overages);
  $('#quotas').text(quotas);
  $('#monthlyCost').html('<div class="checks-slider-emc">$<span>' + monthlyCost.toString().replace(/([0-9]+)([0-9]{3})$/, '$1,$2') + '</span><small> / month</small></div>');
}

$(function() {
  updateEndpointsText();
  updatePrice();
  $('#endpoints-dropdown').on('change', 'input[type=checkbox]', updateEndpointsText);
  $('#seconds-dropdown').on('click', '.dropdown-menu button', updateSecondsText);
  $('#calculate').click(calculateChecks);
  $('#pricing-slider').on('change', updatePrice);
});


// Line 1 is just for tooltip
$("[data-toggle='tooltip']").tooltip();

// Scroll-to js
$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

});
