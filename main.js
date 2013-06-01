var Leopold = Leopold || {};

(function(NS) {
  var curLocation = [39.9525, -75.1637],
      $promptContainer = $('#prompt-container'),
      $placeContainer = $('#place-container'),
      promptTpl = Handlebars.compile($('#prompt-tpl').html());

  var renderPlaces = function(data) {
    console.log('render this data', data, 'to $placeContainer');
  };

  var getLayerData = function(layerConfig) {
    // TODO: do a buffer around curLocation
    var envelope = '39.9424,-75.1833,39.9625,-75.1440';

    // TODO: update ajax options to get by buffer
    data = $.extend({
      // geometry: envelope
    }, layerConfig.agsOptions);

    $.ajax({
      url: layerConfig.url,
      data: data,
      dataType: 'json',
      success: function(data) {
        renderPlaces(data);
      }
    });
  };

  var init = function() {
    var $row;

    // Get the current location, default to city hall for simplicity
    navigator.geolocation.getCurrentPosition(function(position) {
      curLocation = [position.coords.latitude, position.coords.longitude];

      console.log(curLocation);
    });

    // Read the config and render the list
    $.each(NS.Config, function(i, conf) {
      conf.id = i;

      if (i % 4 === 0) {
        $row = $('<div class="row-fluid">').appendTo($promptContainer);
      }

      $row.append(promptTpl(conf));
    });

    // Bind click event to the prompts
    $(document).on('click', '.prompt', function(evt) {
      evt.preventDefault();
      console.log($(evt.target).attr('href'));

      var config = NS.Config[parseInt($(evt.target).attr('href'), 10)];

      $.each(config.layers, function(i, layer) {
        getLayerData(layer);
      });

    });
  };

  init();
}(Leopold));