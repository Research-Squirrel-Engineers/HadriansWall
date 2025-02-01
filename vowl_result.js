var vowlresult={
 "_comment": "Created with pyowl2vowl (version 0.1) as part of the SPARQLing Unicorn QGIS Plugin",
 "header": {
  "prefixList": {
   "brick": "https://brickschema.org/schema/Brick#",
   "csvw": "http://www.w3.org/ns/csvw#",
   "dc": "http://purl.org/dc/elements/1.1/",
   "dcat": "http://www.w3.org/ns/dcat#",
   "dcmitype": "http://purl.org/dc/dcmitype/",
   "dcterms": "http://purl.org/dc/terms/",
   "dcam": "http://purl.org/dc/dcam/",
   "doap": "http://usefulinc.com/ns/doap#",
   "foaf": "http://xmlns.com/foaf/0.1/",
   "geo": "http://www.opengis.net/ont/geosparql#",
   "odrl": "http://www.w3.org/ns/odrl/2/",
   "org": "http://www.w3.org/ns/org#",
   "prof": "http://www.w3.org/ns/dx/prof/",
   "prov": "http://www.w3.org/ns/prov#",
   "qb": "http://purl.org/linked-data/cube#",
   "schema": "https://schema.org/",
   "sh": "http://www.w3.org/ns/shacl#",
   "skos": "http://www.w3.org/2004/02/skos/core#",
   "sosa": "http://www.w3.org/ns/sosa/",
   "ssn": "http://www.w3.org/ns/ssn/",
   "time": "http://www.w3.org/2006/time#",
   "vann": "http://purl.org/vocab/vann/",
   "void": "http://rdfs.org/ns/void#",
   "wgs": "https://www.w3.org/2003/01/geo/wgs84_pos#",
   "owl": "http://www.w3.org/2002/07/owl#",
   "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
   "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
   "xsd": "http://www.w3.org/2001/XMLSchema#",
   "xml": "http://www.w3.org/XML/1998/namespace"
  },
  "baseIris": [
   "https://brickschema.org/schema/Brick#",
   "http://www.w3.org/ns/csvw#",
   "http://purl.org/dc/elements/1.1/",
   "http://www.w3.org/ns/dcat#",
   "http://purl.org/dc/dcmitype/",
   "http://purl.org/dc/terms/",
   "http://purl.org/dc/dcam/",
   "http://usefulinc.com/ns/doap#",
   "http://xmlns.com/foaf/0.1/",
   "http://www.opengis.net/ont/geosparql#",
   "http://www.w3.org/ns/odrl/2/",
   "http://www.w3.org/ns/org#",
   "http://www.w3.org/ns/dx/prof/",
   "http://www.w3.org/ns/prov#",
   "http://purl.org/linked-data/cube#",
   "https://schema.org/",
   "http://www.w3.org/ns/shacl#",
   "http://www.w3.org/2004/02/skos/core#",
   "http://www.w3.org/ns/sosa/",
   "http://www.w3.org/ns/ssn/",
   "http://www.w3.org/2006/time#",
   "http://purl.org/vocab/vann/",
   "http://rdfs.org/ns/void#",
   "https://www.w3.org/2003/01/geo/wgs84_pos#",
   "http://www.w3.org/2002/07/owl#",
   "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
   "http://www.w3.org/2000/01/rdf-schema#",
   "http://www.w3.org/2001/XMLSchema#",
   "http://www.w3.org/XML/1998/namespace"
  ],
  "languages": []
 },
 "namespace": [],
 "class": [
  {
   "id": 69,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 70,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 71,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 72,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 73,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 74,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 75,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 94,
   "type": "http://www.w3.org/2000/01/rdf-schema#Datatype"
  }
 ],
 "classAttribute": [
  {
   "id": 69,
   "iri": "http://hadrianswall.squirrel.link/ontology#Minor_Road",
   "baseIRI": "http://hadrianswall.squirrel.link/ontology",
   "instances": 0,
   "label": {
    "IRI-based": "Minor_Road"
   },
   "annotations": {},
   "subClasses": [
    "75"
   ],
   "superClasses": [
    "73"
   ]
  },
  {
   "id": 70,
   "iri": "http://www.opengis.net/ont/geosparql#Feature",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "Feature"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "72"
   ]
  },
  {
   "id": 71,
   "iri": "http://www.opengis.net/ont/sf#the_geom",
   "baseIRI": "http://www.opengis.net/ont/sf",
   "instances": 0,
   "label": {
    "IRI-based": "the_geom"
   },
   "annotations": {},
   "subClasses": [
    "71"
   ],
   "superClasses": [
    "73"
   ]
  },
  {
   "id": 72,
   "iri": "http://www.opengis.net/ont/geosparql#Geometry",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "Geometry"
   },
   "annotations": {},
   "subClasses": [
    "70",
    "72"
   ],
   "superClasses": []
  },
  {
   "id": 73,
   "iri": "http://www.opengis.net/ont/geosparql#SpatialObject",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": "Major Road",
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "75"
   ]
  },
  {
   "id": 74,
   "iri": "http://hadrianswall.squirrel.link/ontology#Major_Road",
   "baseIRI": "http://hadrianswall.squirrel.link/ontology",
   "instances": 0,
   "label": {
    "IRI-based": "Major_Road"
   },
   "annotations": {},
   "subClasses": [
    "69",
    "74"
   ],
   "superClasses": [
    "70"
   ]
  },
  {
   "id": 75,
   "iri": "http://hadrianswall.squirrel.link/ontology#RomanRoad",
   "baseIRI": "http://hadrianswall.squirrel.link/ontology",
   "instances": 0,
   "label": {
    "IRI-based": "RomanRoad"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": []
  },
  {
   "id": 94,
   "iri": "http://www.w3.org/2001/XMLSchema#string",
   "baseIRI": "(rdflib.term.URIRef('http://www.spp-haefen.de/ontology#from_to'), rdflib.term.URIRef('http://www.w3.org/2001/XMLSchema",
   "instances": 0,
   "label": "Minor Road",
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "75"
   ]
  }
 ],
 "property": [
  {
   "id": 0,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 1,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 2,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 3,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 4,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 5,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 6,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 7,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 8,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 9,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 10,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 11,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 12,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 13,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 14,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 15,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 16,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 17,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 18,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 19,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 20,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 21,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 22,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 23,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 24,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 25,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 26,
   "type": "http://www.opengis.net/ont/sf#the_geom"
  },
  {
   "id": 27,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 28,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 29,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 30,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 31,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 32,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 33,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 34,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 35,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 36,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 37,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 38,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 39,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 40,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 41,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 42,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 43,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 44,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 45,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 46,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 47,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 48,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 49,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 50,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 51,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 52,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 53,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 54,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 55,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 56,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 57,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 58,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 59,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 60,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 61,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 62,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 63,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 64,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 65,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 66,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 67,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 68,
   "type": "http://hadrianswall.squirrel.link/ontology#Major_Road"
  },
  {
   "id": 76,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 77,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 78,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 79,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 80,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 81,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 82,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 83,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 84,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 85,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 86,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 87,
   "type": "http://hadrianswall.squirrel.link/ontology#Minor_Road"
  },
  {
   "id": 88,
   "type": "owl:ObjectProperty"
  },
  {
   "id": 89,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 90,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 91,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 92,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 93,
   "type": "owl:AnnotationProperty"
  }
 ],
 "propertyAttribute": [
  {
   "id": 0,
   "iri": "http://hadrianswall.squirrel.link/data/road/4_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "4_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.266526073829034 55.28121504154389, -2.273942804295719 55.324498811112946))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 1,
   "iri": "http://hadrianswall.squirrel.link/data/road/25_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "25_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-1.564349545318278 54.92666495203925, -1.55823186417539 54.929228572669615, -1.547599883795961 54.933855619414786, -1.5376409554024 54.93809793040204, -1.492436442460003 54.95298076783872, -1.442963555750486 54.96877472675615, -1.425504125935609 54.9760609780536, -1.421135497142381 54.98283127118526, -1.422463316283546 54.99364323102163))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 2,
   "iri": "http://hadrianswall.squirrel.link/data/road/7_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "7_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.603710224883274 54.99082076600298, -2.617425131720493 55.00176513291836, -2.648177896252725 55.02890516194139, -2.664139502271968 55.0429897660745, -2.675699734353069 55.06543131778404))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 3,
   "iri": "http://hadrianswall.squirrel.link/data/road/10_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "10_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-1.601094265857918 54.96834011587278, -1.57002350243433 54.9380705297775, -1.563331463209617 54.92457271289415, -1.562633407259845 54.913560698520804, -1.569298921133736 54.857894742491844, -1.578461798728689 54.8401416405076, -1.584139921974239 54.82707731023707, -1.583901602694238 54.821975108203404, -1.581727044154701 54.80999334418058, -1.575080537942057 54.798291184710926))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 4,
   "iri": "http://hadrianswall.squirrel.link/data/road/6_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "6_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-1.954930235295502 54.517575322390314, -1.89500190701459 54.53956140127278, -1.781623354780114 54.595967386498224, -1.674762759255416 54.657818540143516))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 5,
   "iri": "http://hadrianswall.squirrel.link/data/road/27_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "27_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.780809533824118 54.73044300359125, -2.808455940944939 54.711313909816944, -2.816585040130649 54.70352000120939, -2.845265479684079 54.67857547328462, -2.86706487534635 54.662398945363414, -2.925914543232128 54.63453563112078, -2.935987960022286 54.631527080822295))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 6,
   "iri": "http://hadrianswall.squirrel.link/data/road/9_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "9_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-1.693106123296948 54.7192441290833, -1.683369262660473 54.72203919147091, -1.637709144105405 54.75018772675318))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 7,
   "iri": "http://hadrianswall.squirrel.link/data/road/12_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "12_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-1.52601893943295 54.74718692344157, -1.472203041113274 54.68969561470367, -1.467742024436557 54.680522922728315, -1.4623250483951 54.67133579284029, -1.460010793677768 54.65438264636918, -1.460437658739896 54.63956213266733, -1.473514037415652 54.62130959050624, -1.480453208638012 54.60418394075246, -1.462745937283325 54.51444677457484, -1.455354033971265 54.50319426428378, -1.433329201114749 54.48199026941815, -1.42376447280315 54.47315538033201, -1.415604390087067 54.44262377612534, -1.408513566723868 54.40382206252508, -1.406416683169169 54.38441928907698))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 8,
   "iri": "http://hadrianswall.squirrel.link/data/road/8_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "8_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-1.821979060110386 55.39570671983253, -1.808142126343716 55.38496448122417, -1.802010092687115 55.34884430099226, -1.798201089466541 55.34075597903076, -1.783854268316245 55.32230640419435, -1.780880043713023 55.31372378731391, -1.785410800735958 55.2941846305264, -1.792138413401031 55.23454951173311, -1.795257724437177 55.22691431927338, -1.854627149979007 55.16116064506376, -1.880342645630663 55.138757151601695, -1.915397821942189 55.11462619535187, -1.937415638558017 55.09270653757283, -1.951320909205311 55.07820975223895, -1.9569984081423 55.073773794636615, -1.958164217336313 55.07286276598442, -1.971440640309895 55.06238067328097, -1.991455492718967 55.04656527185295, -2.007362170232606 55.037859911183766, -2.031649644908418 55.032115618940026))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 9,
   "iri": "http://hadrianswall.squirrel.link/data/road/11_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "11_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.476917740955806 54.84080404134618, -2.466178494430921 54.84329720593927, -2.437772445196756 54.844779242190334, -2.421520914270102 54.846694353815195, -2.413142387342138 54.849202664427764, -2.360468096418535 54.88029639712622, -2.315284657909637 54.90450975376333, -2.286320945167794 54.9171028021558, -2.273452630954154 54.92559280292886))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 10,
   "iri": "http://hadrianswall.squirrel.link/data/road/14_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "14_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.680849701194939 54.64276327715847, -2.642926378016955 54.60963991210416, -2.627650048070206 54.595663895054564, -2.616223543406844 54.5801789924712, -2.607887711585793 54.56382105752826, -2.600338266177469 54.53905173549024, -2.594471605935174 54.49939005556935, -2.605486618100328 54.47131782757895, -2.60215895724077 54.461941706789986, -2.590587928364072 54.44425234383247, -2.582576181933565 54.43355413762616, -2.577924252371056 54.42292589448501, -2.577973949513932 54.416810502021335, -2.579556326383415 54.40317979171403))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 11,
   "iri": "http://hadrianswall.squirrel.link/data/road/20_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "20_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-3.484550406820068 54.718424034900885, -3.469878929876745 54.71256283270148, -3.4536846150301 54.705338935092904, -3.432867702928795 54.69493362990354, -3.413184068970764 54.6851774070295, -3.403166867882939 54.68018414185414, -3.396525952232912 54.676694417235915, -3.391904883046196 54.6735611483963, -3.385926239354924 54.67038062719135))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 12,
   "iri": "http://hadrianswall.squirrel.link/data/road/13_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "13_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.934451940054599 54.904672928456584, -2.931430043177678 54.90547015594539, -2.925507079646521 54.907032424198825, -2.918079770094088 54.910358347802614, -2.914649414589174 54.91219253176461, -2.910574907201536 54.9140077199218, -2.91035471124357 54.91410580861249, -2.908502670094539 54.91489005408818, -2.906246166632402 54.915862751548076, -2.902713908324928 54.91737988070535, -2.899193766073694 54.91889681436473, -2.897746711709393 54.91953523290399, -2.895461192543248 54.92055838114813, -2.894479906313032 54.920984087189446, -2.893951751786533 54.92118576914086, -2.893172803923084 54.9214292705049, -2.892513729176545 54.92156978108459, -2.891948393635385 54.92169030299419, -2.890788852913752 54.921898538109865, -2.889924698014893 54.92202375530445, -2.887827404008394 54.922391000746835, -2.885699767920597 54.922882070000185, -2.883828411242662 54.923390261769754, -2.883474368846698 54.92343563524646, -2.882623056282221 54.92370513552926, -2.882367388323907 54.92378607018728, -2.881754262342311 54.924066335782605, -2.881133287532056 54.92436567714931, -2.878684662913194 54.92585477026508, -2.877687595409406 54.926328007851346, -2.87652718930386 54.92670061860744, -2.875522430393575 54.926821992067694, -2.873980191884898 54.92690918192182, -2.871222549500373 54.92692422766826, -2.869595685243161 54.926916859607985, -2.866656505491642 54.92693785734038, -2.865659456123903 54.9270353173743, -2.864654755653944 54.92716135523916, -2.864221256533148 54.927354655887896, -2.86363842771976 54.927515729066066, -2.863152734558249 54.927585755453244, -2.862138536562107 54.92765477673487, -2.860567372508743 54.927936972078285, -2.859030024723737 54.928256952760215, -2.858700274948453 54.92828306010743, -2.857563721214963 54.928424237028395, -2.856690154383364 54.92850648554022, -2.854968587851535 54.92870882767957, -2.852597653660763 54.929053609678235, -2.850827366619137 54.93000952176101, -2.84946260837063 54.93072672406354, -2.847734426198218 54.93101341600089, -2.845961149820071 54.93121836850613, -2.844016374616106 54.93153194162132, -2.843695714286009 54.931583640337614, -2.842122872172984 54.931897707815345, -2.840477774415551 54.93231211709593, -2.837294134851189 54.9329083093223, -2.835246614766821 54.93333612059193, -2.833020847430717 54.9338328824118, -2.831141187701594 54.93429513842549, -2.829082462770482 54.93478711839406, -2.826733621090225 54.93533096839855, -2.826154069925451 54.935463306952535, -2.824383403809684 54.93581058655174, -2.822137473947568 54.93624308561998, -2.820693403459234 54.936509638811806, -2.81955747284202 54.93669919780005, -2.817539740714603 54.937087274843236, -2.816089631618461 54.937364512219176, -2.814431507494231 54.93777152178661, -2.811773818384494 54.938377782756994, -2.810695189008912 54.93864890683592, -2.809552885775952 54.93883484945152, -2.808052819546038 54.939098057094434, -2.807466314307799 54.939198252367326, -2.805898512454788 54.93948328209451, -2.80438757532205 54.93982497882462, -2.80351839518439 54.940041154644966, -2.802587616308636 54.94027556390291, -2.801614957331819 54.94058513875653, -2.801128586763841 54.94073814058156, -2.800406616172556 54.94088199199458, -2.799117374563325 54.94116153311428, -2.796662377061661 54.94170193276923, -2.795928404514819 54.94186723486222, -2.794599402475581 54.94201859218921, -2.793480861729105 54.94216142939519, -2.792882307901563 54.94228303048076, -2.791879323113344 54.9426319572626, -2.791836081119116 54.94265517172354, -2.790769648608281 54.943227660613346, -2.789685909088791 54.94388381636949, -2.78909501473336 54.94425194907025, -2.788737164410706 54.94447488926924, -2.787799596805384 54.94500525008967, -2.786604250387597 54.945662100312326, -2.785880395618392 54.94603413653033, -2.78482852006388 54.94674354070105, -2.783763036079788 54.947392390382646, -2.783254507967697 54.947688123877384, -2.782070460547455 54.94797750512679, -2.781397922735912 54.948124491508615, -2.780409893963416 54.94829846564145, -2.778526467790072 54.94863153215291, -2.776019380820983 54.94907911373076, -2.773771912688827 54.94949646059988, -2.771380033963954 54.9499350205504, -2.770159359696503 54.95014354474342, -2.768714508758591 54.950413047914296, -2.768658951142955 54.95042342100938, -2.766855940706396 54.95076004085527, -2.764799814991122 54.95114747991505, -2.762811535069933 54.95152019403249, -2.761107427960446 54.95184829558499, -2.758723735875488 54.95228761464632, -2.756753729737688 54.95264941409825, -2.755061449976546 54.95295239244449, -2.753949862711384 54.95315901696424, -2.736138526756041 54.955652712600575, -2.726671456279912 54.95700003490675, -2.722080885050555 54.95765305289055, -2.720698017868382 54.95789661119344, -2.719496319530658 54.958108246304974, -2.719033022660079 54.95819420668672, -2.718426927861289 54.95838205932776, -2.716736320316902 54.95857630995414, -2.71409587823288 54.95879989586826, -2.705385892163087 54.959591776434124, -2.685294629497793 54.961442394725715, -2.669417023314409 54.96512775244145, -2.661048569616745 54.96706905191025, -2.652681703117683 54.96919112946815, -2.634704389830533 54.97374799034311, -2.632725745972673 54.97409117534928, -2.615794994365634 54.97786346029977, -2.607034391193099 54.98006282333982, -2.60399907319086 54.98082464069835, -2.600895972255577 54.981210926624904, -2.598733430799739 54.981464115583336, -2.597080415125625 54.981647656757275, -2.596851335441861 54.98167309043085, -2.596174498780671 54.98175249565648, -2.59338024933056 54.98234630826006, -2.590643237105792 54.982901736507486, -2.587765935757445 54.98348155811713, -2.584303085217961 54.984173497535664, -2.581573676936841 54.98470015367958, -2.579742595765924 54.985022745538544, -2.578104055364916 54.98551082944522, -2.575823166457798 54.98618739101316, -2.574398436253363 54.98659832744478, -2.57356403020408 54.987234718502386, -2.572593706684375 54.98783479652984, -2.571337052397339 54.9881498002435, -2.57005616598002 54.988215252769784, -2.569350489161645 54.98823123327143, -2.56708644800978 54.98794032815365, -2.566761491966025 54.9878985704613, -2.564421360935879 54.98761819508272, -2.562774879481921 54.98741184063104, -2.561625633803715 54.9872804398883, -2.559782790128824 54.98707494999621, -2.557433078743868 54.986842037383106, -2.555756064655916 54.98666544578916, -2.555600447112801 54.986624548499826, -2.554203509624443 54.98651798615314, -2.551523269496529 54.986298354459194, -2.549112201619021 54.98610716623672, -2.547508578435396 54.98600146029635, -2.546245242606795 54.985834764115474, -2.545054912967313 54.985715279574606, -2.543676535858474 54.985448023986486, -2.542194576776648 54.98516338050578, -2.541210436011565 54.985001330369606, -2.540765597800736 54.984973590036915, -2.539545978454281 54.984979007202924, -2.538771592081431 54.98504188276592, -2.538317454644962 54.98509144708524, -2.53669081553835 54.98503768099075, -2.53593621473118 54.98501273218471, -2.531389572283831 54.98449058582118, -2.530607005675745 54.98444653504149, -2.526921017242929 54.98423898445358, -2.525470202288124 54.98417943395467, -2.524307721083497 54.984125963169205))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 13,
   "iri": "http://hadrianswall.squirrel.link/data/road/16_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "16_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.934772974361758 54.90458822583055, -2.937559395846606 54.91294933882793, -2.939596278336179 54.92242788749084, -2.940736812964837 54.93238174615839, -2.943439952673948 54.95066094039777, -2.944068168818271 54.95490659590531, -2.944711304558125 54.958358445856064, -2.946752239703659 54.96344277197448, -2.947800953224956 54.96585987160094, -3.032489598825825 54.99679086309221, -3.093965416148129 55.02420277076654, -3.150599683118167 55.04307382894991, -3.210165935093821 55.06856259248255, -3.296020795313179 55.11790424519998, -3.299694074983795 55.12098570766374, -3.304127287790599 55.13232824108776, -3.316390303823009 55.13643459896588, -3.344952981347435 55.14212378453182, -3.383209975364117 55.157329612541865, -3.387562307126534 55.16464780333137, -3.383966151790614 55.20244040166889, -3.389273416964335 55.23551767419595, -3.387361188754668 55.24225831700121, -3.37712284515255 55.25476222019859, -3.379219437987596 55.272194277029726, -3.384816011300236 55.298008912121084, -3.387569678488052 55.304873421225125, -3.436975459822786 55.34140718745144, -3.44194087930535 55.34754628001768, -3.450020266934663 55.36892326512209, -3.46419230700775 55.38435913511575, -3.477460686003526 55.39266060692923, -3.505266295482191 55.404952467689306, -3.550496661353642 55.410828452834785, -3.582131297314445 55.42130024545707, -3.622540291363757 55.43233848533674, -3.628231648809447 55.4347093178327, -3.630534540524305 55.43863048802038, -3.616499377158168 55.46158294576496, -3.614968522150066 55.46647860190356, -3.617350127693708 55.474983297909844, -3.628536424042661 55.481275819649156, -3.641655163398856 55.48457448753515, -3.655474200319071 55.48487477643217, -3.66078189802504 55.490415728999125, -3.670829914378061 55.50921213299325, -3.668994875177771 55.516090001337126, -3.654948196430792 55.526834557479994))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 14,
   "iri": "http://hadrianswall.squirrel.link/data/road/1_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "1_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-1.674762759255416 54.657818540143516, -1.664875005982414 54.63465338241481, -1.662573757757077 54.61464729257685, -1.663381941847382 54.521891275415115, -1.656007995276868 54.45332460680151, -1.663360533361922 54.44056980547393))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 15,
   "iri": "http://hadrianswall.squirrel.link/data/road/22_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "22_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.934451940012968 54.90467292665955, -2.934772974361758 54.90458822583055, -2.936046428545056 54.90363612864172, -2.938312092144544 54.90194206131951, -2.939315250777214 54.90119192747219, -2.9405470435305 54.900029108467535, -2.942007921066478 54.898649927981204, -2.946428303017449 54.89479869890368, -2.946938032354619 54.89454506332456, -2.950361561115241 54.8929294173029, -2.950895668703704 54.89267733820622, -2.953557947230061 54.89143193021544, -2.954289505314277 54.89096846785841, -2.956037042583037 54.889860962854534, -2.95876789526077 54.888912115791285, -2.962591861461236 54.887538441175366, -2.964019019500785 54.886579760254584, -2.964875335509422 54.88600450697801, -2.966855206875373 54.88471666514753, -2.967467819612451 54.884034128520035, -2.968265259445311 54.883320392444325, -2.96906805672836 54.88240152666039, -2.974138467173334 54.87717745796842, -2.97930203559659 54.87363157076225, -2.983697847569578 54.87061225107732, -2.990267601166001 54.867408316532476, -3.006216558055585 54.86014389607578, -3.01579497078981 54.855843589787334, -3.024555593180273 54.85187636803079, -3.032939869603613 54.848133241660086, -3.047726931023522 54.841528524757415, -3.049253393895203 54.84084649632235, -3.057418427119253 54.83798173918865, -3.082856939536279 54.8302673993608, -3.105488787112339 54.82191937372511, -3.121463028259319 54.81640118867804, -3.132356839124484 54.81263593731907, -3.139883144721263 54.80930238615722, -3.145724340281516 54.806714506079324, -3.165538823233133 54.799689513550945, -3.184018229906298 54.79121785310932, -3.197283657272649 54.784073001181255, -3.199877661300749 54.782669415026014, -3.21479375926768 54.77459553745492, -3.22405475342103 54.769687254283795, -3.227077361961448 54.76814736985285, -3.23286365994915 54.76519897278423, -3.244719692466281 54.75722925946261, -3.25762942268213 54.749954537658716, -3.259556136789632 54.74886848069643, -3.263296625283248 54.74675977534092, -3.286445179728124 54.73370233703716, -3.290055421558268 54.7316647522109, -3.292493234142444 54.729712250944296, -3.297632361393475 54.72659579723796, -3.310843605352369 54.71766015282799, -3.311654401745666 54.717111582992636, -3.322206577577016 54.71004152252541, -3.32337150295686 54.70921390931126, -3.335800888379404 54.7003807509302, -3.353314176312348 54.69228617664564, -3.354827716029546 54.691323609490894, -3.378538225495758 54.6762360359985, -3.381888949712519 54.67410261907744, -3.382417757298934 54.67376589622021, -3.3828885341307 54.67346611787271, -3.401219026361554 54.65456108409086, -3.404171336455216 54.65235301805979, -3.412270474019363 54.646293988409006, -3.428222928806521 54.6343530083414, -3.431278494337285 54.62900893276632, -3.429405095494953 54.613991092469966, -3.428140313398935 54.6038454071752, -3.427710049140228 54.60039272804076, -3.429076954643624 54.574272950648, -3.429510122050224 54.56598989334207, -3.429833208483657 54.55980994995833, -3.43303153870204 54.55639764726997, -3.476614522097861 54.53512099582776, -3.488779511083118 54.529175475949216, -3.518098795626581 54.512016057903004, -3.526320567680158 54.5049818648307, -3.528541616790188 54.49861090760449, -3.528824634382739 54.491838329160274, -3.529061588142699 54.48616668258317, -3.529353597078023 54.479175628471694))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 16,
   "iri": "http://hadrianswall.squirrel.link/data/road/15_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "15_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-1.663360533361922 54.44056980547393, -1.694084188953149 54.4500689597885, -1.782687361025793 54.48576880085468, -1.845524113162086 54.50741961278224, -1.859773420696011 54.51393982948777, -1.925524682494218 54.51476014591935, -1.954930235295502 54.517575322390314, -1.966723919613635 54.51592210669876, -2.033238324621723 54.506574194901724, -2.129030485640604 54.48213504055907, -2.148088641116066 54.48052114438447, -2.232324434167594 54.508466869494086, -2.26961450776216 54.5120150015633, -2.320220552076797 54.5248229380348, -2.348387619592427 54.53628094906364, -2.355585849199139 54.54041106660818, -2.370400528443931 54.544464722762164, -2.403946741888543 54.549674527961045, -2.413560997042754 54.55307136995764, -2.454186980753528 54.57698133514295, -2.513321974575108 54.608154718071546, -2.541231563820848 54.61973981581163, -2.550685998801435 54.62644182649601, -2.573845284437599 54.63885325952925, -2.588708898253013 54.649129906600116, -2.603327148788896 54.65387664575304, -2.61186398814332 54.654387958006545, -2.616653594738807 54.65375215055813, -2.642005863056485 54.650383222874915, -2.680849699615522 54.64276327536998))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 17,
   "iri": "http://hadrianswall.squirrel.link/data/road/21_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "21_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.524307721083497 54.984125963169205, -2.520653888798382 54.983886304968465, -2.517985119776048 54.983726513807206, -2.517066779180237 54.98368762541295, -2.516147799454677 54.9835988031058, -2.5152045670782 54.98355287390026, -2.514099921272228 54.98349335244494, -2.511405400784374 54.98325506562024, -2.50939457771562 54.983135114185245, -2.507743887227967 54.983049290952685, -2.502579231500754 54.982649910187504, -2.499761344279094 54.982454671001086, -2.49876828255264 54.98238742017976, -2.496920618821246 54.9824163840228, -2.495189842845243 54.98287281785427, -2.49395302357882 54.98315603137427, -2.492530062621623 54.98343285404864, -2.490399522743993 54.98366258554106, -2.489544871033947 54.98375875747116, -2.487787243981828 54.984058268827546, -2.487046216774046 54.98417045440078, -2.485657763388454 54.984380641478744, -2.483527735377367 54.98466018085618, -2.482388034217518 54.98477883293784, -2.479946608429766 54.98495255118758, -2.477393616101772 54.98513379091691, -2.476154490962421 54.985238510043686, -2.474845366173507 54.98539287494547, -2.473714352667076 54.9855262247124, -2.471175036528871 54.98582140624781, -2.469329359214062 54.98603539814891, -2.467953745275021 54.986140561315004, -2.466614839990051 54.98620277089327, -2.464731330629169 54.986366906782486, -2.462094223651765 54.98679779782554, -2.459010362463718 54.987216053280044, -2.456260854677117 54.98759017725825, -2.453820189386319 54.987856095187915, -2.451118524428727 54.98808013475592, -2.449743511577726 54.988249284702164, -2.44901095372986 54.98818779704905, -2.448944522333937 54.98819122709431, -2.448415875916805 54.98821852370734, -2.447981891945834 54.988234390104935, -2.447784219773623 54.988306446755324, -2.447440715776879 54.98865008805641, -2.446799659648016 54.98900908875178, -2.446293378583578 54.98921780206977, -2.445699311439141 54.98934124004167, -2.443209873319866 54.989699850007874, -2.44083226619726 54.9900794015996, -2.438255980599034 54.99044535902489, -2.43718971213003 54.990499126242966, -2.434883111662861 54.990571595169676, -2.433220710026327 54.990563264124894, -2.431532580484633 54.99046940759901, -2.430427635782396 54.99038773018592, -2.42939651438192 54.99024871753188, -2.427594866887328 54.9899768867175, -2.425147450669158 54.98963595977621, -2.42186733086513 54.98914095158436, -2.41971764349688 54.98879174881411, -2.418338686970823 54.988596782818455, -2.417717806951901 54.988534720692854, -2.416339459780665 54.98839679177142, -2.41451538080168 54.988338828516866, -2.411636441458017 54.988234485491816, -2.409043900384414 54.988236102314026, -2.407320084951076 54.9882775535239, -2.404070908346362 54.988359725028886, -2.403153139159624 54.98837703750388, -2.401480139037933 54.98853949694049, -2.398802940019104 54.98876229237238, -2.397068094798583 54.988946291964105, -2.393063635937328 54.989180423621086, -2.391134058373789 54.989358800670786, -2.387387266091463 54.989705075335976, -2.384672765024292 54.98993481254242, -2.378859588800939 54.990445231287694, -2.375623647805078 54.99064072654358, -2.371644955445519 54.991009595302636, -2.366501013379277 54.99148171345253, -2.365745445137637 54.99154314790061, -2.362583729821214 54.991800172049096, -2.362051457773123 54.991930148165565, -2.361506134553691 54.99198883347434, -2.360800757235861 54.99218351542329, -2.360095307600846 54.99237106021384, -2.358954065758939 54.99238156930616, -2.358518855044201 54.99226872754362, -2.357230777411893 54.99250790262361, -2.356586764467808 54.99263105069549, -2.355883688964482 54.99308961282374, -2.355060192420465 54.99396222579779, -2.354492661899283 54.99432052351221, -2.353057690039727 54.99479546568305, -2.351313208246471 54.99534974698105, -2.350122127707286 54.9953460487807, -2.349104490770976 54.9953133115582, -2.348099755360072 54.99533759137063, -2.34651388448443 54.99559177053251, -2.344000125585993 54.996155270106826, -2.34144864732625 54.996668891635295, -2.337740436550311 54.996850437910226, -2.336126882955962 54.99677644928729, -2.334303186356042 54.99679574242162, -2.333583587524465 54.99679771992634, -2.330618981663911 54.99688427956521, -2.328673078214539 54.99713207119051, -2.326193934009497 54.997416927122686, -2.325190516973627 54.99761220226053, -2.322948317681464 54.99805328046557, -2.318563029996872 54.99893505475421, -2.314610986489767 54.99970855601593, -2.312405500865073 55.00011368092796, -2.311674814237293 55.000293876712085, -2.309865721078403 55.000619477414254, -2.305876010950219 55.00137852561942, -2.30236927913687 55.00202925101957, -2.300213015282663 55.00241263320199, -2.296123252187797 55.00311454565632, -2.293483335647345 55.003556047768974, -2.290346993383574 55.00399868091339, -2.287842026640126 55.0042400191562, -2.285003242963552 55.00466040979002, -2.283118977656094 55.004942991579284, -2.281882820535388 55.00508075572314, -2.272516997068375 55.0061240982623, -2.268986460378836 55.00651719346458, -2.26409880513686 55.006813222009285, -2.259618581899525 55.00717808545063, -2.256468261081342 55.007477216908406, -2.253627837418893 55.00772569159352, -2.251395309507176 55.00794431229414, -2.24655668617605 55.00818960457461, -2.245314981963296 55.00808512472539, -2.243067301614501 55.007861392145095, -2.241142573150916 55.007679772658435, -2.236796338382494 55.00724608435163, -2.233133207484284 55.006889392638115, -2.230153100503283 55.00660262790965, -2.228700352952908 55.00646984693129, -2.226342372464851 55.00645999527904, -2.224097078787649 55.00662820994276, -2.222757307110163 55.00672340013581, -2.22150443978755 55.006825548645764, -2.218649026325389 55.006631000508584, -2.215905444390068 55.00645758553479, -2.214471417951448 55.00632928326301, -2.21379471561462 55.00626873157785, -2.211944994244602 55.00615071472319, -2.209636116687737 55.00603346173544, -2.208903563288313 55.005963394539535, -2.208419207129495 55.00589289844681, -2.207822760755715 55.00574413214393, -2.207325521330353 55.005580927279304, -2.207089294423789 55.00549573590924, -2.205835547511424 55.00542653814956, -2.204109873976803 55.00528679331049, -2.202967681652021 55.00518884662468, -2.201975306791569 55.00526896178982, -2.200945698213834 55.00534912863251, -2.200560998256094 55.005349764133584, -2.198488229748814 55.00528183870948, -2.195869408852098 55.00520762791815, -2.192704573962572 55.00513422696728, -2.189986530279096 55.00506718010544, -2.187218857305231 55.00500014721469, -2.184799187302828 55.005046647789094, -2.183509306260696 55.005205523507534, -2.182269022848378 55.00535717883614, -2.182110308006438 55.00541374297104, -2.180460092611115 55.0060018295264, -2.179010266970399 55.00648186977696, -2.178477428372863 55.006660974054206, -2.177969152266786 55.006782976109214, -2.177027710976298 55.007176653803256, -2.176482632987635 55.00739856282127, -2.176123328153424 55.007534607100744, -2.175291926246471 55.007557207205686, -2.174348583087814 55.007522902004254, -2.174276456078328 55.00751812958923, -2.173293393777596 55.007453083901474, -2.1726105493066 55.00738985967296, -2.171406136944121 55.00724891038257, -2.171058528114383 55.00722086831984, -2.169979347550544 55.007343639388964, -2.169644480033599 55.00739403808989, -2.168516577528093 55.007737980250695, -2.166855625405343 55.00823243356163, -2.165826988758935 55.008583348456966, -2.165158193590394 55.00891950048527, -2.164662024301561 55.008984367430934, -2.160010571166781 55.00971031492863, -2.159428804416158 55.00980109582638, -2.155294388785798 55.0104816865332, -2.154748696532942 55.01058699691295, -2.151455953965359 55.01069576156446, -2.147766378279333 55.010900022670164, -2.14412348202818 55.01076417143709, -2.142283696827569 55.0099484499127, -2.141693382800451 55.009023780418204, -2.140064655235633 55.0046390140398, -2.137557694662431 54.997330780368756, -2.135606762643648 54.99361845959181, -2.133437219125493 54.98948930995973, -2.132870286338091 54.988494505678446, -2.132563817571319 54.98795671585596, -2.129833244222581 54.987460370899754, -2.127170479834916 54.98733426897444, -2.123940366872616 54.98718121766463, -2.111535155743429 54.98680094663483, -2.110578561386752 54.98677768237151, -2.091749613699932 54.98631822530772, -2.08325377956314 54.986422963216334, -2.080955941827774 54.98645118814003, -2.063744143156936 54.98203039135097, -2.02693995134873 54.980583558233604))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 18,
   "iri": "http://hadrianswall.squirrel.link/data/road/18_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "18_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.02693994978505 54.980583556436706, -2.028208244543588 54.97568401226602, -2.028568865232026 54.97429067938987, -2.014584120031858 54.965963440367325, -2.006886654836566 54.962486887419715, -1.995908752274143 54.958614765702855, -1.977193921732016 54.949437880955564, -1.956144488452455 54.93723083552247, -1.950863783981792 54.935419529475055, -1.94269681417367 54.93261744670367, -1.934255830321432 54.92819082105557, -1.920232668345722 54.919717506825776, -1.917394530494323 54.91800196820338, -1.89731157278035 54.912115055856184, -1.889357544002535 54.90955848258015, -1.878050095911095 54.90549699958254, -1.855534763739104 54.8968177851624, -1.849340592413422 54.89399515632857, -1.84495310898431 54.89355216095137, -1.84109856911265 54.89019947839912, -1.836242112654802 54.886054926863395, -1.832064945139397 54.88248925252716, -1.819582378359315 54.87029784735295, -1.814935511767772 54.86689044589265, -1.805081673660402 54.85966244168624, -1.792843021495592 54.851242436015006, -1.762184940214192 54.81459600508248, -1.735169794848287 54.78212001635857, -1.678343818423743 54.76175224349729, -1.677831548676752 54.754875308395995, -1.689825549912918 54.732993226580476, -1.69310612330373 54.71924412818467, -1.699649031147769 54.70518566482789, -1.699995484249198 54.696286651659086, -1.689609327469218 54.67566370666188, -1.674762759255416 54.657818540143516))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 19,
   "iri": "http://hadrianswall.squirrel.link/data/road/3_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "3_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-3.386890510960808 54.35794739361075, -3.353048145005644 54.374188264486506, -3.294681910664173 54.39281920276586, -3.19074496490837 54.407734767203685, -3.142272028353847 54.4112347000031, -3.135852977729217 54.41053750117103, -3.123814035093972 54.40488188838321, -3.115987178107452 54.40350008718332, -3.063430807014406 54.421240692847235, -3.034767581074438 54.42333552708287, -3.00194552970023 54.42280921240554, -2.973009841044007 54.42783768866762))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 20,
   "iri": "http://hadrianswall.squirrel.link/data/road/24_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "24_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.524307721071779 54.98412596227062, -2.52453497426419 54.983164419564794, -2.525887854888111 54.980005152419636, -2.526091553980149 54.9795294262737, -2.525299321871988 54.977744871666935, -2.524741453618385 54.976348769023666, -2.52461253595691 54.976026128862806, -2.524538679393043 54.975841292538256, -2.523927742456337 54.974636088340645, -2.523027317986755 54.97278065521699, -2.522586052088396 54.97190282781387, -2.522328509616636 54.97180407322292, -2.52206097734507 54.971572214226825, -2.521075504296714 54.97063727525744, -2.520402560533677 54.96997136053843, -2.520321907649177 54.969891548652726, -2.520089357979542 54.969646456863664, -2.520462767312095 54.96846377504705, -2.520512193385697 54.96830722738273, -2.521248200078052 54.9660632982209, -2.521299398744205 54.96590719457345, -2.52201523280991 54.96374641498892, -2.522182442258072 54.96325709176009, -2.522566650422748 54.961340251716045, -2.52260756379699 54.96086029965204, -2.522754901386088 54.959131802980394, -2.522777909551351 54.958945106217634, -2.522822181774162 54.95858584489676, -2.523287487936018 54.95346783601915, -2.523545464657658 54.95062764490409, -2.523605504776755 54.94996657547638, -2.523629564574007 54.94935950003383, -2.523705031284553 54.94745535188077, -2.521003946930475 54.940952036688245, -2.520882024666621 54.94065843461628, -2.521166432537412 54.93897139463739, -2.522475903394867 54.9312021064018, -2.522761253949174 54.92950868348147, -2.522997332160189 54.92159634635217, -2.520222031555867 54.917661351708986, -2.519277861062796 54.91485975590544, -2.518237228255852 54.91096483899367, -2.516931408426245 54.906540030799334, -2.51553782180381 54.90404940883164, -2.514259996341114 54.900916311607524, -2.512339407182307 54.895883781481245, -2.511571547531979 54.89388978023023, -2.512235366703399 54.89093867639955, -2.511339354371618 54.88858856249181, -2.509592715514436 54.8776586259271, -2.5103609123026 54.87231831711348, -2.510638582611592 54.86982396049999, -2.501379596902907 54.862700175055274, -2.498268452743582 54.860305761219486, -2.497478164844575 54.85970160647656, -2.490895517932377 54.85466843320811, -2.485049943274492 54.850197480373176, -2.480728360682994 54.84689131911748, -2.478978794498745 54.8455526434288, -2.477607118601363 54.84239247733665, -2.476917739398799 54.84080404135231, -2.476254886420961 54.839276599844375, -2.474816759464306 54.835962254497076, -2.472312809867236 54.83019023317415, -2.47194808264339 54.82934933319399, -2.470582253039255 54.82776389672296, -2.467277459427157 54.82392715677392, -2.466154762859663 54.82262356137897, -2.466195543159158 54.82221059728349, -2.466500585927097 54.819121247230974, -2.467081787855936 54.81323378774773, -2.467275682254408 54.81126930636035, -2.467284131471761 54.811253174437255, -2.471096834208907 54.80397379030841, -2.472258860957056 54.801754651650675, -2.475497677304893 54.7955681015274, -2.475640122919628 54.7952959672993, -2.477059509124997 54.79337522745573, -2.482003703820975 54.78668310428766, -2.483884947559068 54.78413614989966, -2.485125253713757 54.78245674602234, -2.487956826866393 54.778622166996094, -2.488988275091019 54.77722516203288, -2.490422764355465 54.77528209777969, -2.496223019421228 54.767423380156416, -2.497859588745214 54.765205406846675, -2.502557159239884 54.75883751822555, -2.504753539908668 54.75585942105319, -2.509131280614938 54.7499221726314, -2.51024040005931 54.74841764530993, -2.516430140777494 54.7400189894453, -2.517449861997029 54.73863499886279, -2.518549978168649 54.73714178183988, -2.522407922843651 54.73190434162323, -2.522902009016846 54.73123347536912, -2.523491022029904 54.73090974159342, -2.524193228187951 54.73052378319845, -2.53739645223334 54.72326470347253, -2.539961400905808 54.72185403727238, -2.541187963860212 54.721179400870454, -2.54269420540673 54.718250510922395, -2.539755150866532 54.71296812837286, -2.538573344318365 54.71084364403533, -2.53633698072936 54.70682278825272, -2.538365458418335 54.70253126949455, -2.53905440603399 54.70107349537922, -2.540341914091808 54.69834891081744, -2.543492512974488 54.69168012342607, -2.543917909425029 54.6907795240522, -2.543798974561708 54.6901499116166, -2.543715067955017 54.68970573077931, -2.542348946409688 54.682472246793864, -2.541093857614489 54.6808055197883, -2.540264235723577 54.67970372447819, -2.536720872228274 54.67499713895612, -2.534664669116814 54.66953498504954, -2.534358896288428 54.66872258825006, -2.531740175503081 54.661763657055445, -2.531971793310385 54.657962406149856, -2.532022583799152 54.65712876763355, -2.532275957407709 54.65296953083742, -2.532493741644827 54.64939385519861, -2.532540056810266 54.64863334798384, -2.533702336749013 54.64611353344415, -2.533752317681479 54.64600516673504, -2.53643679836202 54.64018396025585, -2.540007498810254 54.63753987926256, -2.543736609608018 54.634778017598066, -2.547960818082121 54.63164888266824, -2.550685998825723 54.62644182829325))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 21,
   "iri": "http://hadrianswall.squirrel.link/data/road/17_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "17_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.266419378647881 55.28065511956686, -2.234473220391081 55.26938316210477, -2.225848169662863 55.259277260274374, -2.210622648618771 55.230409327784514, -2.1883413292105 55.20056746656593, -2.177824974115883 55.1702665118131, -2.140167525388755 55.125152128260744, -2.122866273020613 55.103110827875035, -2.119476895654207 55.098619411308654, -2.098395283618376 55.07833396201561, -2.060437603008267 55.05253842442534, -2.031649644908418 55.032115618940026, -2.028601480554931 55.02995609601545, -2.022280921233568 55.01497866040944, -2.021530690077692 55.01284380669666, -2.021460749812804 55.012644773603135, -2.02120423762922 55.01191478181924, -2.020985979946086 55.011293635415235, -2.021212708059862 55.00401263878387, -2.022454821548446 54.998506693685144, -2.026939951348123 54.98058355733499))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 22,
   "iri": "http://hadrianswall.squirrel.link/data/road/2_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "2_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-1.66336053182747 54.44056980457096, -1.639314455368201 54.38869216905621))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 23,
   "iri": "http://hadrianswall.squirrel.link/data/road/23_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "23_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.934772975941893 54.90458822671706, -2.887749560570499 54.86652478557484, -2.881000524629634 54.85904473346755, -2.878974780667742 54.8568612286417, -2.876748770886697 54.854461546278834, -2.871928408269125 54.850405475037306, -2.866587763471788 54.84591043006549, -2.85963493035255 54.84072792645968, -2.854777659737526 54.836899298249016, -2.843262746635481 54.81934085280013, -2.8401541442276 54.81459788540391, -2.837257700987743 54.8098453591035, -2.821848646179545 54.79283923969266, -2.806926320389174 54.77272616457714, -2.800242822217016 54.7589765003349, -2.784449687889874 54.74061958349502, -2.780809533806835 54.73044300269266, -2.776763106915076 54.71586426550179, -2.769004402210407 54.70167158044074, -2.753676233664731 54.6815977430438, -2.680849701194939 54.64276327715847))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 24,
   "iri": "http://hadrianswall.squirrel.link/data/road/5_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "5_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.266526073829034 55.28121504154389, -2.266433019712397 55.28067137199591, -2.266419378653903 55.28065512046543, -2.215080011202434 55.28209982736606, -2.20318311364133 55.28243151485795, -2.175921690923724 55.29226875217888, -2.175786830730363 55.29231738963409, -2.15452600841604 55.297577469775405, -2.119085573657119 55.302549551104704, -2.107177745824362 55.305310480429135, -2.097497403750906 55.30755380989226, -2.064379526741541 55.32021152195584, -2.047962350596943 55.32647987199362, -2.000374821682549 55.34062078183055, -1.992015921650559 55.342057843266154, -1.983950130824544 55.34344387159207, -1.961221298648844 55.34556009989558, -1.932600101193191 55.34821861878909, -1.918140859135621 55.35361556793008, -1.887257631192008 55.36859077610602, -1.879392353178523 55.37240157185279, -1.851585954788115 55.38369552234682, -1.821979060106355 55.39570672073106, -1.821148954276727 55.39506248154521))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 25,
   "iri": "http://hadrianswall.squirrel.link/data/road/26_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "26_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.874438768366245 54.48649634743214, -2.863070922476481 54.50443715003372, -2.855577529559883 54.511059935878464, -2.842154879993911 54.51858497968664, -2.842299019517668 54.52982227656732, -2.84548024969616 54.5485212051321, -2.842309543918096 54.555245233072235, -2.8265464466629 54.5660670251289, -2.818613037153069 54.574400845820456, -2.809601627480006 54.59006779003101, -2.802931009869259 54.59632236488458, -2.785969119193105 54.60490078406664, -2.777390272340449 54.61274028433554, -2.771150035882944 54.625058379450856, -2.757256203044706 54.64206078455995))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 26,
   "iri": "http://hadrianswall.squirrel.link/data/road/19_geom",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "19_geom"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 27,
   "iri": "http://hadrianswall.squirrel.link/data/road/15",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "15"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 28,
   "iri": "http://hadrianswall.squirrel.link/data/road/22",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "22"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 29,
   "iri": "http://hadrianswall.squirrel.link/data/road/1",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "1"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 30,
   "iri": "http://hadrianswall.squirrel.link/data/road/21",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "21"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 31,
   "iri": "http://hadrianswall.squirrel.link/data/road/19",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "19"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 32,
   "iri": "http://hadrianswall.squirrel.link/data/road/20",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "20"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 33,
   "iri": "http://hadrianswall.squirrel.link/data/road/5",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "5"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 34,
   "iri": "http://hadrianswall.squirrel.link/data/road/18",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "18"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 35,
   "iri": "http://hadrianswall.squirrel.link/data/road/25",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "25"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 36,
   "iri": "http://hadrianswall.squirrel.link/data/road/4",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "4"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 37,
   "iri": "http://hadrianswall.squirrel.link/data/road/17",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "17"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 38,
   "iri": "http://hadrianswall.squirrel.link/data/road/3",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "3"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 39,
   "iri": "http://hadrianswall.squirrel.link/data/road/16",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "16"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 40,
   "iri": "http://hadrianswall.squirrel.link/data/road/23",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "23"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 41,
   "iri": "http://hadrianswall.squirrel.link/data/road/2",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/15_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Carlisle - Cockermouth - Egremont",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "75",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 42,
   "iri": "http://hadrianswall.squirrel.link/data/road/15",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "Dere Street",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/22_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Catterick Bridge - Binchester",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "8c",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "Dere Street",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 43,
   "iri": "http://hadrianswall.squirrel.link/data/road/22",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "22"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 44,
   "iri": "http://hadrianswall.squirrel.link/data/road/7",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/1_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Carlisle - Crawford",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "7f",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 45,
   "iri": "http://hadrianswall.squirrel.link/data/road/1",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "1"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 46,
   "iri": "http://hadrianswall.squirrel.link/data/road/14",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "14"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 47,
   "iri": "http://hadrianswall.squirrel.link/data/road/27",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/21_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Scotch Corner - Bowes - Penrith",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "82",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 48,
   "iri": "http://hadrianswall.squirrel.link/data/road/21",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "21"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 49,
   "iri": "http://hadrianswall.squirrel.link/data/road/6",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "High Street",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/19_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Penrith - Ambleside",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "74",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "High Street",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 50,
   "iri": "http://hadrianswall.squirrel.link/data/road/19",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "19"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 51,
   "iri": "http://hadrianswall.squirrel.link/data/road/13",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "13"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 52,
   "iri": "http://hadrianswall.squirrel.link/data/road/26",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/20_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Tebay - Penrith",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "7d",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 53,
   "iri": "http://hadrianswall.squirrel.link/data/road/20",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/5_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Penrith - Carlisle",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "7e",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 54,
   "iri": "http://hadrianswall.squirrel.link/data/road/5",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "Stanegate",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/18_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Corbridge - Carvoran",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "85a",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "Stanegate",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 55,
   "iri": "http://hadrianswall.squirrel.link/data/road/18",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "18"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 56,
   "iri": "http://hadrianswall.squirrel.link/data/road/12",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "Dere Street",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/25_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "High Rochester - Newstead",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "8f",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "Dere Street",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 57,
   "iri": "http://hadrianswall.squirrel.link/data/road/25",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/4_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Longtown - Netherby",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "868",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 58,
   "iri": "http://hadrianswall.squirrel.link/data/road/4",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "Maiden Way",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/17_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Kirkby Thore - Carvoran",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "84",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "Maiden Way",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 59,
   "iri": "http://hadrianswall.squirrel.link/data/road/17",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "17"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 60,
   "iri": "http://hadrianswall.squirrel.link/data/road/11",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "11"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 61,
   "iri": "http://hadrianswall.squirrel.link/data/road/24",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "24"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 62,
   "iri": "http://hadrianswall.squirrel.link/data/road/9",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "Dere Street",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/3_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Binchester - Corbridge",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "8d",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "Dere Street",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 63,
   "iri": "http://hadrianswall.squirrel.link/data/road/3",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "Stanegate",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/16_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Carvoran - Carlisle",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "85b",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "Stanegate",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 64,
   "iri": "http://hadrianswall.squirrel.link/data/road/16",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "16"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 65,
   "iri": "http://hadrianswall.squirrel.link/data/road/10",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "Dere Street",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/23_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Alborough - Catterick Bridge",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "8b",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "Dere Street",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 66,
   "iri": "http://hadrianswall.squirrel.link/data/road/23",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "23"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 67,
   "iri": "http://hadrianswall.squirrel.link/data/road/8",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "Dere Street",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/2_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Corbridge - High Rochester",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "8e",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "Dere Street",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 68,
   "iri": "http://hadrianswall.squirrel.link/data/road/2",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "Wrekendyke",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/7_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Wrekenton - South Shields",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "809",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "Wrekendyke",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 76,
   "iri": "http://hadrianswall.squirrel.link/data/road/7",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/14_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Whitley Castle - Corbridge",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 77,
   "iri": "http://hadrianswall.squirrel.link/data/road/14",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/27_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Bowes - Bishop Auckland",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "820",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 78,
   "iri": "http://hadrianswall.squirrel.link/data/road/27",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/6_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Durham - Newcastle upon Tyne",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "80b",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 79,
   "iri": "http://hadrianswall.squirrel.link/data/road/6",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/13_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Maryport - Papcastle",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "751",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 80,
   "iri": "http://hadrianswall.squirrel.link/data/road/13",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/26_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "High Rochester - Whittingham",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "88",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 81,
   "iri": "http://hadrianswall.squirrel.link/data/road/26",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/12_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Willington - Durham",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "83",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 82,
   "iri": "http://hadrianswall.squirrel.link/data/road/12",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "The Devil's Causeway",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/11_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Bewclay - Berwick upon Tweed",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "87",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "The Devil's Causeway",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 83,
   "iri": "http://hadrianswall.squirrel.link/data/road/11",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/24_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Ambleside - Ravenglass",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "740",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 84,
   "iri": "http://hadrianswall.squirrel.link/data/road/24",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/9_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Plumpton Wall - Greystoke - Troutbeck",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "741",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 85,
   "iri": "http://hadrianswall.squirrel.link/data/road/9",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/10_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Birdoswalk - Bewcastle",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "865",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 86,
   "iri": "http://hadrianswall.squirrel.link/data/road/10",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": "-",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://hadrianswall.squirrel.link/data/road/8_geom",
      "type": "iri"
     }
    ],
    "http://www.spp-haefen.de/ontology#from_to": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#from_to",
      "language": "undefined",
      "value": "Barmby - Stanford Bridge - Thirsk - Durham",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#margary_re": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#margary_re",
      "language": "undefined",
      "value": "80a",
      "type": "label"
     }
    ],
    "http://www.spp-haefen.de/ontology#road_name": [
     {
      "identifier": "http://www.spp-haefen.de/ontology#road_name",
      "language": "undefined",
      "value": "-",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 87,
   "iri": "http://hadrianswall.squirrel.link/data/road/8",
   "baseIRI": "http://hadrianswall.squirrel.link/data/road",
   "instances": 0,
   "label": {
    "IRI-based": "8"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 88,
   "iri": "http://www.opengis.net/ont/geosparql#hasGeometry",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "hasGeometry"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 89,
   "iri": "http://www.opengis.net/ont/geosparql#asWKT",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": "from_to",
   "annotations": {
    "http://www.w3.org/2000/01/rdf-schema#range": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#range",
      "language": "undefined",
      "value": "http://www.w3.org/2001/XMLSchema#string",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 90,
   "iri": "http://www.spp-haefen.de/ontology#from_to",
   "baseIRI": "http://www.spp-haefen.de/ontology",
   "instances": 0,
   "label": "margary_re",
   "annotations": {
    "http://www.w3.org/2000/01/rdf-schema#range": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#range",
      "language": "undefined",
      "value": "http://www.w3.org/2001/XMLSchema#string",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 91,
   "iri": "http://www.spp-haefen.de/ontology#margary_re",
   "baseIRI": "http://www.spp-haefen.de/ontology",
   "instances": 0,
   "label": "road_name",
   "annotations": {
    "http://www.w3.org/2000/01/rdf-schema#range": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#range",
      "language": "undefined",
      "value": "http://www.w3.org/2001/XMLSchema#string",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 92,
   "iri": "http://www.spp-haefen.de/ontology#road_name",
   "baseIRI": "http://www.spp-haefen.de/ontology",
   "instances": 0,
   "label": "road_name",
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 93,
   "iri": "http://www.w3.org/2000/01/rdf-schema#label",
   "baseIRI": "http://www.w3.org/2000/01/rdf-schema",
   "instances": 0,
   "label": {
    "IRI-based": "label"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> MULTILINESTRING ((-2.948154794627775 55.02411675210321, -2.947784982103629 54.96584846447211))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  }
 ]
}