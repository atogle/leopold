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
  },
  {
      prompt: 'Where can I park my car?',
      layers: [
	  {
	      url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Business/MapServer/8/query',
	      template: '<div class="span6">{{CONTACT_LAST_NAME}} (car park)</div>',
	      buffer: 1.0, //in miles
	      agsOptions: { where: 'TYPE = 3371' } //do I need spatialRel=esriSpatialRelContains??
	  }
      ]
  },
  {
    prompt: 'Where can I go outside and play around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Playgrounds/MapServer/0/query',
        template: '<div class="span6">{{SITE}} (playground) {{ADDRESS}}</div>',
        buffer: 1.0, //in miles
        agsOptions: {} //just use defaults
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Parks/MapServer/0/query',
        template: '<div class="span6">{{NAME}} (parks) {{ADDRESS}}</div>',
        buffer: 1.0, //in miles
        agsOptions: {} //just use defaults
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Recreation_Facilities/MapServer/0/query',
        template: '<div class="span6">{{NAME}} (recreation center)</div>',
        buffer: 1.0, //in miles
        agsOptions: {} //just use defaults
      }
    ]
  },
  {
    prompt: 'Where can I find indoor recreation activities around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/PAL_Centers/MapServer/0/query',
        template: '<div class="span6">{{CENTER_NAM}} (PAL Center) {{ADDRESS}}</div>',
        buffer: 2.0, //in miles
        agsOptions: {} //just use defaults
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Ice_Rinks/MapServer/0/query',
        template: '<div class="span6">{{ICE_RINK}} (ice rink) {{ADDRESS}} {{WEBSITE}}</div>',
        buffer: 1.0, //in miles
        agsOptions: {} //just use defaults
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Recreation_Facilities/MapServer/0/query',
        template: '<div class="span6">{{NAME}} (recreation center) {{ADDRESS}}</div>',
        buffer: 1.0, //in miles
        agsOptions: {} //just use defaults
      },

    ]
  },
  {
    prompt: 'Where can I find emergency help around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Hospitals/MapServer/0/query',
        template: '<div class="span6">{{NAME}} (hospital) {{ADDRESS}} {{PHONE}}</div>',
        buffer: 1.5, //in miles
        agsOptions: {} //just use defaults
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Fire_Stations/MapServer/0/query',
        template: '<div class="span6">{{FIRESTA_}} (fire station) {{LOCATION}}</div>',
        buffer: 1.0, //in miles
        agsOptions: {} //just use defaults
      }
    ]
  },
  {
    prompt: 'Where can I rent a property around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/RentalLicense/MapServer/1/query',
        template: '<div class="span6">{{LICENSE_ADDRESS}} (apartment)</div>',
        buffer: .5, //in miles
        agsOptions: {} //just use defaults
      }
    ]
  },
  {
    prompt: 'Where can I check out some cool sustainable infrastructure around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Green_Storm_Water_Projects/MapServer/0/query',
        template: '<div class="span6">{{NAME}} (project) {{Primary_Feature}} {{LINK_1}}{{LINK_2}}</div>',
        buffer: 2.0, //in miles
        agsOptions: {} //just use defaults
      }
    ]
  }
];
