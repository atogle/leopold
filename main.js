var Leopold = Leopold || {};

(function(NS) {
  var curLocation = [39.9525, -75.1637],
      $promptContainer = $('#prompt-container'),
      $promptRow = $('#prompt-row'),
      $placeContainer = $('#place-container'),
      $placeRow = $('#place-row'),
      promptTpl = Handlebars.compile($('#prompt-tpl').html());

  // Roughly buffer a point to a bounding box
  var getBoundingBox = function(coords, radius) {
    var lngMile = 0.0192,
        latMile = 0.01499,
        bottom = coords[0] - (latMile * radius),
        top = coords[0] + (latMile * radius),
        left = coords[1] - (lngMile * radius),
        right = coords[1] + (lngMile * radius);

    return [left, bottom, right, top]; // <xmin>,<ymin>,<xmax>,<ymax>
  };

  // Thanks Pythagoras!
  var distance = function(point1, point2) {
    var xs = 0,
        ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt( xs + ys );
  };

  // Got get the data from AGS
  var getLayerData = function(layerConfig, callback) {
    // do a buffer around curLocation
    var bbox = getBoundingBox(curLocation, layerConfig.buffer).join(','),

    // override defaults
    data = $.extend({
      outFields: '*',
      where: '1=1',
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
        callback(data);
      }
    });
  };

  // JS Array sort function
  var compareDistance = function(a, b) {
    return a.distance - b.distance;
  };

  // Render the template and attach distance to the item we're going to show.
  // Distance is for sorting.
  var getDisplayItems = function(data, template) {
    var displayItems = [];
    $.each(data.features, function(i, feature) {
      displayItems.push({
        html: template(feature.attributes),
        distance: distance({x: curLocation[1], y: curLocation[0]}, feature.geometry)
      });
    });

    return displayItems;
  };

  var init = function() {
    // Get the current location, default to city hall for simplicity
    navigator.geolocation.getCurrentPosition(function(position) {
      curLocation = [position.coords.latitude, position.coords.longitude];
      console.log('you are here', curLocation);
    });

    // Read the config and render the list
    $.each(NS.Config, function(i, conf) {
      conf.id = i;
      $promptRow.append(promptTpl(conf));
    });

    // Go back to the prompt list
    $('#back-to-prompts-btn').click(function(evt) {
      evt.preventDefault();
      $promptContainer.show();
      $placeContainer.hide();
    });

    // Bind click event to the prompts
    $(document).on('click', '.prompt', function(evt) {
      var layersFetched = 0,
          displayItems = [],
          config, layerCnt;

      evt.preventDefault();

      // From the config file
      config = NS.Config[parseInt($(evt.target).attr('href'), 10)];
      // How many layers for this one? Don't render until we have them all
      layerCnt = config.layers.length;

      //
      $.each(config.layers, function(i, layerConfig) {
        // Get the data from AGO
        getLayerData(layerConfig, function(data) {
          // Render the template in the config file
          var featureTemplate = Handlebars.compile(layerConfig.template);
          // Update how many layers have come back asynchronously
          layersFetched++;

          // Get the display items
          displayItems = displayItems.concat(getDisplayItems(data, featureTemplate));

          // Do we have them all yet?
          if (layersFetched === layerCnt){
            // Sort by distance
            displayItems.sort(compareDistance);

            // Update the display
            $promptContainer.hide();
            $placeContainer.show();
            $placeRow.empty();

            // Render each item
            $.each(displayItems, function(i, item) {
              $placeRow.append(item.html);
            });
          }
        });
      });
    });
  };

  // Ready set go!
  $(init);
}(Leopold));