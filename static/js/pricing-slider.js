$('#pricing-slider').slider({
  tooltip: 'always',
  formatter: function(value) {
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

  var monthlyCost = 0;

  if (millionChecks > 1000) {
    $('#monthlyCost').text('Please call us');
    return;
  }

  if (millionChecks > 200) {
    monthlyCost += (millionChecks - 200) * 5;
    millionChecks = 200;
  }

  if (millionChecks > 3) {
    monthlyCost += (millionChecks - 3) * 7;
  }

  $('#monthlyCost').html('<div class="checks-slider-emc">$<span>' + monthlyCost + '</span><small> / month</small></div>');
}

$(function() {
  updateEndpointsText();
  updatePrice();
  $('#endpoints-dropdown').on('change', 'input[type=checkbox]', updateEndpointsText);
  $('#seconds-dropdown').on('click', '.dropdown-menu button', updateSecondsText);
  $('#calculate').click(calculateChecks);
  $('#pricing-slider').on('change', updatePrice);
});
