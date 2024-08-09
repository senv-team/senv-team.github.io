// source: https://www.d3indepth.com/geographic/

let geojson;
let georoi;

let projectionTypes = [
  'Equirectangular'
];

let projection;
let geoGenerator = d3.geoPath()
  .projection(projection);

// i think this is some grid
// let graticule = d3.geoGraticule();

/*
let circles = [
  [-135, 0], [-90, 0], [-45, 0], [0, 0], [45, 0], [90, 0], [135, 0], [180, 0],
  [0, -70], [0, -35], [0, 35], [0, 70],
  [180, -70], [180, -35], [180, 35], [180, 70],
];

let geoCircle = d3.geoCircle().radius(10).precision(1);


var radialLineGenerator = d3.radialLine();

var points = [
  [0, 80],
  [Math.PI * 0.25, 80],
  [Math.PI * 0.5, 30],
  [Math.PI * 0.75, 80],
  [Math.PI, 80],
  [Math.PI * 1.25, 80],
  [Math.PI * 1.5, 80],
  [Math.PI * 1.75, 80],
  [Math.PI * 2, 80]
];
*/
// var pathData = radialLineGenerator(points);




let state = {
  type: 'Equirectangular',
  scale: 120,
  translateX: 450,
  translateY: 250,
  centerLon: 0,
  centerLat: 0,
  rotateLambda: 0.1,
  rotatePhi: 0,
  rotateGamma: 0
}

function initMenu() {
  d3.select('#menu')
    .selectAll('.slider.item input')
    .on('input', function(d) {
      let attr = d3.select(this).attr('name');
      state[attr] = this.value;
      d3.select(this.parentNode.parentNode).select('.value').text(this.value);
      update()
    });

  d3.select('#menu .projection-type select')
    .on('change', function(d) {
      state.type = this.options[this.selectedIndex].value;
      update()
    })
    .selectAll('option')
    .data(projectionTypes)
    .enter()
    .append('option')
    .attr('value', function(d) {return d;})
    .text(function(d) {return d;});
}


// trying the mouseover now
/*
function handleMouseover(e, d) {
  

  var path = svg.selectAll('path')
     .data(pie(totals))
     .enter()
     .append('path')
     .attr('d', arc)
     .attr('fill', function (d, i) {
          return color(d.data.title);
     })
     .attr('transform', 'translate(0, 0)')     //Our new hover effects
     .on('mouseover', function (d, i) {
          d3.select(this).transition()
               .duration('50')
               .attr('opacity', '.85');     .on('mouseout', function (d, i) {
          d3.select(this).transition()
               .duration('50')
               .attr('opacity', '1');


}*/

function update() {
  // Update projection
  projection = d3['geo' + state.type]()
  geoGenerator.projection(projection);

  projection
    .scale(state.scale)
    .translate([state.translateX, state.translateY])
    .center([state.centerLon, state.centerLat])
    .rotate([state.rotateLambda, state.rotatePhi, state.rotateGamma])

  // Update world map
  
  let u = d3.select('g.map')
    .selectAll('path')
    .data(geojson.features)

  u.enter()
    .append('path')
    .merge(u)
    .attr('d', geoGenerator)


  // Update region of interest
  let ro = d3.select('g.map')
    .selectAll('path')
    .data(georoi.features)

  ro.enter()
    .append('path')
    .merge(ro)
    .attr('d', geoGenerator)
    .style('fill', 'steelblue')
    .on('mouseover', function(event, d) {
        // Code to handle mouseover event, e.g., change color, show tooltip, etc.
        d3.select(this)
            .style('fill', 'orange'); // Change fill color to orange on mouseover
        
        // You can also use 'event' to get the mouse position, 'd' for data, etc.
    })
    .on('mouseout', function(event, d) {
        // Code to handle mouseout event, e.g., revert color, hide tooltip, etc.
        d3.select(this)
            .style('fill', null); // Revert fill color back to original on mouseout
    });
    //.on('mouseover', (event, d) => console.log(d.mass));
    //.on('mouseover', handleMouseover)
    /*.on('mouseover', function (d, i) {
          d3.select(this).transition()
               .duration('50')
               .attr('opacity', '.85');     
    /*.on('mouseout', function (d, i) {
          d3.select(this).transition()
               .duration('50')
               .attr('opacity', '1');*/


  // Update projection center
  /*
  let projectedCenter = projection([state.centerLon, state.centerLat]);
  d3.select('.projection-center')
    .attr('cx', projectedCenter[0])
    .attr('cy', projectedCenter[1]);
*/

  // Update graticule = gitter
  /*
  d3.select('.graticule path')
    .datum(graticule())
    .attr('d', geoGenerator);
    */
  
  // Update circles
  /*
  u = d3.select('.circles')
    .selectAll('path')
    .data(circles.map(function(d) {
      geoCircle.center(d);
      return geoCircle();
    }));
    */

    // const area = d3.area().x((d) => x(d.Date));


  // needed for zooming
    /*
  u = d3.select('.polygons')
    .selectAll('path')
    .data(circles.map(function(d) {
      geoCircle.center(d); 
      return geoCircle();
    }));*/
    
/*
  u.enter()
    .append('path')
    .merge(u)
    .attr('d', geoGenerator);


  ro.enter()
    .append('path')
    .merge(ro)
    .attr('d', geoGenerator);
*/

}



var path_continents = "https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json"
var path_countries = "https://raw.githubusercontent.com/senv-team/senv-team.github.io/main/data/countries.geo.json"
var path_elnino_3_4 = "https://raw.githubusercontent.com/senv-team/senv-team.github.io/main/data/elnino_3_4.geojson"

// REQUEST DATA
/*
d3.json(path_elnino_3_4) 
	.then(function(json) {
		geojson = json;
		initMenu();
		update();
	});

// ')
*/


Promise.all([
    d3.json(path_countries),
    d3.json(path_elnino_3_4)
]).then(function([map, roi]){
    geojson = map;
    georoi = roi;
    initMenu();
    update();
  });