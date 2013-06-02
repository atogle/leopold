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
      prompt: 'Where can I park my car? around here',
      layers: [
	  {
	      url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Business/MapServer/8/query',
	      template: '<div class="span6">{{CONTACT_LAST_NAME}} (car park) {{LICENSE_ADDRESS}} </div>',
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
        buffer: .5, //in miles
        agsOptions: {} //just use defaults
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Parks/MapServer/0/query',
        template: '<div class="span6">{{NAME}} (parks) {{ADDRESS}}</div>',
        buffer: .5, //in miles
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
        buffer: 1.0, //in miles
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
        buffer: .25, //in miles
        agsOptions: {} //just use defaults
      }
    ]
  },
  {
    prompt: 'Where can I find some cool sustainable infrastructure around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Green_Storm_Water_Projects/MapServer/0/query',
        template: '<div class="span6">{{NAME}} (project) {{Primary_Feature}}</div>',
        buffer: 2.0, //in miles
        agsOptions: {} //just use defaults
      }
    ]
  },
  {
    prompt: 'Where can I go party around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Business/MapServer/8/query',
        template: '<div class="span6">{{CONTACT_COMPANY_NAME}} {{CONTACT_LAST_NAME}} (bar/club) {{LICENSE_ADDRESS}} {{LINK_1}}{{LINK_2}}</div>',
        buffer: 1.0, //in miles
        agsOptions: { where: 'TYPE = 3006' } //only special assembly business licenses
      }
    ]
  },
  {
    prompt: 'Where can I find daycare around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Business/MapServer/8/query',
        template: '<div class="span6">{{CONTACT_COMPANY_NAME}} {{CONTACT_LAST_NAME}} (daycare) {{LICENSE_ADDRESS}}</div>',
        buffer: 1.0, //in miles
        agsOptions: { where: 'TYPE = 3397' } //only daycare business licenses
      }
    ]
  },
  {
    prompt: 'Where can I get my car repaired around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Business/MapServer/8/query',
        template: '<div class="span6">{{CONTACT_COMPANY_NAME}} {{CONTACT_LAST_NAME}} (auto repair) {{LICENSE_ADDRESS}}</div>',
        buffer: 1.0, //in miles
        agsOptions: { where: 'TYPE = 3311' } //only auto repair licenses
      }
    ]
  },
    {
    prompt: 'Where can I eat outside around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Business/MapServer/7',
        template: '<div class="span6">{{CONTACT_COMPANY_NAME}} {{CONTACT_LAST_NAME}} (sidewalk cafe) {{LICENSE_ADDRESS}}</div>',
        buffer: 1.0, //in miles
        agsOptions: { where: 'TYPE = 3123' } //only sidewalk licenses
      }
    ]
  },
  {
    prompt: 'Where can I get some food around here?',
    layers: [
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Business/MapServer/7/query',
        template: '<div class="span6">{{CONTACT_COMPANY_NAME}} {{CONTACT_LAST_NAME}} (food / takeout) {{LICENSE_ADDRESS}}</div>',
        buffer: 1.0, //in miles
        agsOptions: { where: 'TYPE = 3120 OR TYPE = 3121' } //only restaurant licenses
      }
    ]
  },
  {
    prompt: 'What council district, ward division and census district am I in?*',
    layers: [
     
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/2/query',
        template: '<div class="span6">My Current Council District is: {{DIST_NUM}}.</div>',
        buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/3/query',
        template: '<div class="span6">My 2016 Council District is: {{DISTRICT}}.</div>',
        buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/23/query',
        template: '<div class="span6">My Ward Divison is: {{NAME2_}}.</div>',
	buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/0/query',
        template: '<div class="span6">My Census Tract is: {{NAME10}}.</div>',
	buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/1/query',
        template: '<div class="span6">My Block Group is: {{NAMELSAD10}}.</div>',
	buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      },
       {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Green_Storm_Water_Projects/MapServer/2/query',
        template: '<div class="span6">My Watershed is: {{Watershed_Name}}.</div>',
	buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      },
    ]
  },
   {
    prompt: 'What school district am I in?*',
    layers: [
     
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/17/query',
        template: '<div class="span6">I am in elementary school district: {{es_name}}.</div>',
        buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/18/query',
        template: '<div class="span6">I am in middle school district: {{Name}}.</div>',
        buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      },
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/19/query',
        template: '<div class="span6">I am in high school district: {{Name}}.</div>',
	buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      }
    ]
  },
  {
    prompt: 'Where can I volunteer locally?*',
    layers: [
     
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/RCO/MapServer/0/query',
        template: '<div class="span6">Organization: {{ORG_NAME}} Contact: {{CONTACT}} {{ADDRESS}} {{EMAIL}} Contact by: {{CONTACT_MODE}}</div>',
        buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      }
    ]
  },
    {
    prompt: 'Where can I volunteer for a cause?*',
    layers: [
     
      {
        url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/RCO/MapServer/1/query',
        template: '<div class="span6">Organization: {{ORG_NAME}} Contact: {{CONTACT}} {{ADDRESS}} {{EMAIL}} Contact by: {{CONTACT_MODE}}</div>',
        buffer: 0, //in miles - this is so the bounding box will effectively be a point. hack? yes.
	agsOptions: { spatialRel: 'esriSpatialRelEnvelopeIntersects' } //changing the spatial relation to Envelope Intersects
      }
    ]
  }
];
