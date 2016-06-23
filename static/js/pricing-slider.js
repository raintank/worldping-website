$('#pricing-slider').slider({
  tooltip: 'always',
  formatter: function(value) {
    return value + ' Million checks/mo';
  }
});
