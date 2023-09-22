
from shapely.geometry import Polygon
// Define a Polygon object.
var polygon = ee.Geometry.Polygon(
    [[[-122.092, 37.424],
      [-122.086, 37.418],
      [-122.079, 37.425],
      [-122.085, 37.423]]]);

// Apply the simplify method to the Polygon object.
var polygonSimplify = polygon.simplify({'maxError': 1});

// Print the result to the console.
print('polygon.simplify(...) =', polygonSimplify);

// Display relevant geometries on the map.
Map.setCenter(-122.085, 37.422, 15);
Map.addLayer(polygon,
             {'color': 'black'},
             'Geometry [black]: polygon');
Map.addLayer(polygonSimplify,
             {'color': 'red'},
             'Result [red]: polygon.simplify');