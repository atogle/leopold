var Leopold = Leopold || {};

Leopold.Config = [
  {
    prompt: 'Where can I get some fresh food around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Farmers_Markets/MapServer/0/query',
        template: '<p>{{NAME}}</p>',
        agsOptions: {
          where: '1=1',
          outFields: '*',
          inSR: 4326,
          outSR: 4326,
          f: 'json'
        }
      }
    ]
  }
];