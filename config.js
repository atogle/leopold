var Leopold = Leopold || {};

Leopold.Config = [
  {
    prompt: 'Where can I get some fresh food around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Farmers_Markets/MapServer/0/query',
        template: '<div class="span6">{{NAME}} (farmers market)</div>',
        buffer: 1.0, //in miles
        agsOptions: {} //just use defaults
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Healthy_Corner_Stores/MapServer/0/query',
        template: '<div class="span6">{{OFFICIAL_S}} (healthy store)</div>',
        buffer: 1.0, //in miles
        agsOptions: {} //just use defaults
      }

    ]
  }
];