var Leopold = Leopold || {};

(function(NS) {
  var curLocation = [39.9525, -75.1637],
      $promptContainer = $('#prompt-container'),
      $placeContainer = $('#place-container'),
      promptTpl = Handlebars.compile($('#prompt-tpl').html());

  var getBoundingBox = function(coords, radius) {
    var lngMile = 0.0192,
        latMile = 0.01499,
        bottom = coords[0] - (latMile * radius),
        top = coords[0] + (latMile * radius),
        left = coords[1] - (lngMile * radius),
        right = coords[1] + (lngMile * radius);

    console.log(left + "," + bottom + "," + right + "," + top);
    return [left, bottom, right, top]; // <xmin>,<ymin>,<xmax>,<ymax>
  };

  var renderPlaces = function(data) {
    console.log('render this data', data, 'to $placeContainer');
  };

  var getLayerData = function(layerConfig) {
    // do a buffer around curLocation
    var bbox = getBoundingBox(curLocation, layerConfig.buffer).join(','),

    // override defaults
    data = $.extend({
      outFields: '*',
      where: '1=1',
      // TODO: this doesn't work for some reason
      geometry: bbox,
      geometryType: 'esriGeometryEnvelope',
      spatialRel: 'esriSpatialRelContains',
      inSR: '4326',
      outSR: '4326',
      returnGeometryOnly: 'True',
      returnIdsOnly: 'False',
      f: 'json'
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