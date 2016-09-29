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
  var totalChecks = endpointCount * endpoints * locationCount * 30.5 * 24 * (3600 / seconds);

  console.log([endpointCount, endpoints, locationCount, seconds, totalChecks]);

  $('#pricing-slider').slider('setValue', totalChecks / 1000000);
  updatePrice();
}

function updatePrice() {
  var millionChecks = $('#pricing-slider').slider('getValue');

  var plan = '';
  var baseprice = '';
  var overages = '';
  var monthlyCost = 0;

  if (millionChecks >= 1000) {
    $('#plan').text('Custom');
    $('#base-price').text('N/A');
    $('#overages').text('N/A');
    $('#monthlyCost').html('<div class="please-call"><a href="mailto:hello@raintank.io">Contact us</a></div>');
    return;
  }

  if (millionChecks > 42) {
    plan = 'Large';
    baseprice = '$379/mo includes 50 Million checks';
    overages = Math.max(millionChecks - 50, 0) + 'M at $7 per Million per month.';

    monthlyCost = 379 + Math.max(millionChecks - 50, 0) * 7;
  } else if (millionChecks > 8) {
    plan = 'Medium';
    baseprice = '$89/mo includes 10 Million checks';
    overages = Math.max(millionChecks - 10, 0) + 'M at $9 per Million per month.';

    monthlyCost = 89 + Math.max(millionChecks - 10, 0) * 9;
  } else if (millionChecks > 3) {
    plan = 'Small';
    baseprice = '$19/mo includes 3 Million checks';
    overages = Math.max(millionChecks - 3, 0) + 'M at $13 per Million per month.';

    monthlyCost = 19 + Math.max(millionChecks - 3, 0) * 13;
  } else {
    plan = 'Free';
    baseprice = '$0/mo includes 3 Million checks';
    overages = 'N/A';

    monthlyCost = 0;
  }

  $('#plan').text(plan);
  $('#base-price').text(baseprice);
  $('#overages').text(overages);
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
