// Size ?
var box = document.querySelector('.content');
var width = box.offsetWidth;
var height = box.offsetWidth - box.offsetWidth/3;

// The svg
var svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

// Map and projection
var projection = d3.geoMercator() 
                .scale(100)// width / 2.5 / Math.PI) 
                //.rotate([90, 0]) 
                .center([15, 48]) 
                //.translate([width / 2, height / 2]); 

// Create data for circles:
/*var markers = [
  {long: -91.445, lat: 29.510, name: "Atchafalaya River and Terrebonne Basins, Louisiana "},
  {long: -90.822, lat: 29.171, name: "Atchafalaya River and Terrebonne Basins, Louisiana 1"}
];*/


var cities = [
    {lat : 37, long: -122, name: "SF"},
    {lat: 48, long: 16, name: "Vie"}
  //{lat: 30.222708, long: -92.021188, name: "Lafayette"},
  //{lat: 30.446537, long: -91.179788, name: "Baton Rouge"},
  //{lat: 29.935802, long: -90.092378, name: "New Orleans"},
  //{lat: 29.487184, long: -89.703631, name: "Port Sulphur"},
  //{lat: 29.639886, long: -91.224589, name: "St Mary Parish"}
  //{lat: 30.219550, long: -93.212037, name: "Lake Charles"},
  //{lat: 30.207972, long: -92.681870, name: "Jennings"},
];

const vienna_polygon = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [13.2205, 48.9000], // Southwest corner
        [15.2205, 47.3400], // Northwest corner
        [18.5705, 46.3400], // Northeast corner
        [16.5705, 45.3400],
        [17.5705, 50.9000], // Southeast corner
        [11.2205, 48.9000]  // Back to Southwest corner
      ]
    ]
  }
};


var featurecoll_nino = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              -173.9056840880245,
              9.764993461347885
            ],
            [
              -173.9056840880245,
              -4.771704820855831
            ],
            [
              -104.29630908802446,
              -4.771704820855831
            ],
            [
              -104.29630908802446,
              9.764993461347885
            ],
            [
              -173.9056840880245,
              9.764993461347885
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}

const vienna2_polygon ={
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              -173.9056840880245,
              9.764993461347885
            ],
            [
              -173.9056840880245,
              -4.771704820855831
            ],
            [
              -104.29630908802446,
              -4.771704820855831
            ],
            [
              -104.29630908802446,
              9.764993461347885
            ],
            [
              -173.9056840880245,
              9.764993461347885
            ]
          ]
        ],
        "type": "Polygon"
      }
    };



var regions = [
            { pol: [{"x":0.0, "y":25.0},{"x":8.5,"y":23.4},{"x":13.0,"y":21.0},{"x":19.0,"y":15.5}], name:"Nino_3_4"}
    ];

poly = [{"x":0.0, "y":25.0},
        {"x":8.5,"y":23.4},
        {"x":13.0,"y":21.0},
        {"x":19.0,"y":15.5}];

// 5N-5S, 170W-120W
// N = plus, W = minus
const polygonData = [
            //{ name: "Nino_3_4", points: [[10, 170], [100, 120], [-5, 170], [-5, 120]] },
            //{ name: "Quadrilateral", points: [[-170, 5], [170, -5], [350, 200], [250, 100]] },
            { name: "sanfran", points: [[50, -122], [37, -121], [59, -120], [40, -172]] }
        ];







/*
    poly = [{"x":0.0, "y":25.0},
        {"x":8.5,"y":23.4},
        {"x":13.0,"y":21.0},
        {"x":19.0,"y":15.5}];*/

/*
var Bathy = [];
d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/ADCP_20210325-154526_WLO_VP-MW-center_001_Rep1_Bathy.csv", function(d) {
  
  for (var i = 0; i < d.length; i++) {
        Bathy.push({"long": d[i].longitude, "lat": d[i].latitude, "river_depth": d[i].river_depth, "colour": "#9999FF"});
    }
})
*/


//var allGroup = ["Spring 2021", "Fall 2021"]
var dropdownButton = d3.select("#dataviz_builtWithD3")
  .append('select')


var pathijamessmells = "https://raw.githubusercontent.com/senv-team/senv-team.github.io/main/data/elnino_rectangle.geojson";


// https://geojson-maps.ash.ms/
// need to upload it to github
// Load external data and boot
// https://d3-graph-gallery.com/graph/bubblemap_tooltip.html
/* https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/us-filtered.json */
// 'https://raw.githubusercontent.com/senv-team/senv-team.github.io/main/data/custom.geo.json', 
d3.json("https://raw.githubusercontent.com/senv-team/senv-team.github.io/main/data/elnino_rectangle.geojson", function(data) {
//d3.json("https://raw.githubusercontent.com/senv-team/senv-team.github.io/main/data/custom.geo.json", function(data){

  // "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"

    // Filter data
    // data.features = data.features.filter( function(d){return d.properties.adm0_a3=="USA"} )

    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
          .attr("fill", "#b8b8b8")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "black")
        .style("opacity", .3)

    // create a tooltip
    var Tooltip = d3.select("#my_dataviz")
      .append("div")
      .attr("id", "plot")
      .attr("class", "tooltip")
      .style("opacity", 1)
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .html("Select a box [coming soon]")


    var mouseover_Airpressure = function(d) {

      boxes = document.getElementsByClassName(d.class)
      for(var i=0, len=boxes.length; i<len; i++)
      {
          boxes[i].style.stroke = "#173b6c";
      }

      box = document.getElementById(d.id)
      box.style.stroke = "#149ddd"
      
      Tooltip
        .html(d.name + "<br>" + d.description + "<br> <div id='plot'></div>")
        .style("left", (d3.mouse(this)[0]+10) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
        .attr("stroke", "#119900")

      // set the dimensions and margins of the graph
      var margin = {top: 10, right: 30, bottom: 30, left: 60},
          width = 300 - margin.left - margin.right,
          height = 200 - margin.top - margin.bottom;

      // append the svg object to the body of the page
      var svg_plot = d3.select("#plot")
        .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");


      if (d.id == "Atchafalaya_Airpressure") {

        //Read the data
      d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Turbidity_Data_V3_2113/DeltaX_Fall2021_AirPressure_Atchafalaya_MikeIsland_MW_channel.csv", function(data) {

        // group the data: I want to draw one line per group
        var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
          .key(function(d) { return d.instrument;})
          .entries(data);

        // Add X axis --> it is a date format
        var x = d3.scaleTime()
          .domain([
            new Date(d3.min(data, function(d) { return + new Date(d.time).getTime(); })), 
            new Date(d3.max(data, function(d) { return + new Date(d.time).getTime(); }))])
          .range([ 0, width ]);
        var xAxis = d3.axisBottom(x)
          .tickFormat(d3.timeFormat("%m-%d"))
          .ticks(3);
        svg_plot.append("g")
          .attr("transform", "translate(0," + height + ")") // makes it go to the bottom
          .call(xAxis); // d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
          .domain([
            d3.min(data, function(d) { return + d.measured_pressure; }), 
            d3.max(data, function(d) { return + d.measured_pressure; })])
          .range([ height, 0 ]);
        var yAxis = d3.axisLeft(y)
          .ticks(5);
        svg_plot.append("g")
          .call(yAxis);

        // color palette
        var res = sumstat.map(function(d){ return d.key }) // list of group names
        var color = d3.scaleOrdinal()
          .domain(res)
          .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

        // Draw the line
        svg_plot.selectAll(".line")
            .data(sumstat)
            .enter()
            .append("path")
              .attr("fill", "none")
              .attr("stroke", function(d){ return color(d.key) })
              .attr("stroke-width", 1.5)
              .attr("d", function(d){
                return d3.line()
                  .x(function(d) { return x(+new Date(d.time).getTime()); })
                  .y(function(d) { return y(+d.measured_pressure); })
                  (d.values)
              })
        })

      } else if (d.id == "Terrebonne_Airpressure"){

        //Read the data
      d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Turbidity_Data_V3_2113/DeltaX_Fall2021_AirPressure_Terrebonne_421_pond.csv", function(data) {

        // group the data: I want to draw one line per group
        var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
          .key(function(d) { return d.instrument;})
          .entries(data);

        // Add X axis --> it is a date format
        var x = d3.scaleTime()
          .domain([
            new Date(d3.min(data, function(d) { return + new Date(d.time).getTime(); })), 
            new Date(d3.max(data, function(d) { return + new Date(d.time).getTime(); }))])
          .range([ 0, width ]);
        var xAxis = d3.axisBottom(x)
          .tickFormat(d3.timeFormat("%m-%d"))
          .ticks(3);
        svg_plot.append("g")
          .attr("transform", "translate(0," + height + ")") // makes it go to the bottom
          .call(xAxis); // d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
          .domain([
            d3.min(data, function(d) { return + d.measured_pressure; }), 
            d3.max(data, function(d) { return + d.measured_pressure; })])
          .range([ height, 0 ]);
        var yAxis = d3.axisLeft(y)
          .ticks(5);
        svg_plot.append("g")
          .call(yAxis);

        // color palette
        var res = sumstat.map(function(d){ return d.key }) // list of group names
        var color = d3.scaleOrdinal()
          .domain(res)
          .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

        // Draw the line
        svg_plot.selectAll(".line")
            .data(sumstat)
            .enter()
            .append("path")
              .attr("fill", "none")
              .attr("stroke", function(d){ return color(d.key) })
              .attr("stroke-width", 1.5)
              .attr("d", function(d){
                return d3.line()
                  .x(function(d) { return x(+new Date(d.time).getTime()); })
                  .y(function(d) { return y(+d.measured_pressure); })
                  (d.values)
              })
      })
    }



      }

      
    var mouseover_Alternanthera = function(d) {
      boxes = document.getElementsByClassName(d[0].class)
      for(var i=0, len=boxes.length; i<len; i++)
      {
          boxes[i].style.stroke = "#173b6c";
      }

      box = document.getElementById(d[0].id)
      box.style.stroke = "#149ddd"
      Tooltip
        .html(d[0].name + "<br>" + d[0].description + "<br> <div id='plot'></div>")
        .style("left", (d3.mouse(this)[0]+10) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
        .attr("stroke", "#119900")
    }


    polygonData.forEach((polygon, index) => {
            svg.append("polygon")
                .attr("points", polygon.points.map(p => p.join(",")).join(" "))
                .attr("fill", `rgba(0, 100, 200, ${0.2 + index * 0.2})` ) // Varying blue opacity for each polygon
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("data-name", polygon.name); // Custom attribute to store polygon name
      });






    /*
    svg
      .selectAll("Airpressure_polygons")
      .data(Airpressure)
      .enter()
      .append('rect')
        .attr('x', function(d){ return projection([d.long, d.lat])[0]-15 })
        .attr('y', function(d){ return projection([d.long, d.lat])[1]-15 })
        .attr('width', 15)
        .attr('height', 15)
      .attr("stroke-width",2)
      .style("fill", "#111111")
      .attr("stroke", "#173b6c")
      .attr("id", function(d){return d.id})
      .attr("class", function(d){return d.class})
      .attr("fill-opacity", .2)
      .on("mouseover", mouseover_Airpressure)

    svg
      .selectAll("Alternanthera_polygon")
      .data([Alternanthera])
      .enter()
      .append("polygon")
      .attr("points",function(d) { 
                return d.map(function(d) {
                  return [projection([d.long, d.lat])[0], projection([d.long, d.lat])[1]].join(",")
          }).join(" ");
      })
      .attr("stroke-width",2)
      .style("fill", "#111111")
      .attr("stroke", "#173b6c")
      .attr("id", function(d){return d[0].id})
      .attr("class", function(d){return d[0].class})
      .attr("fill-opacity", .2)
      .on("mouseover", mouseover_Alternanthera)
*/
    svg
      .selectAll("city_circle")
      .data(cities)
      .enter()
      .append("circle")
        .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
        .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
        .attr("r", 5)
        .attr("class", "city")
        .style("fill", "#173b6c")

    svg
     .selectAll("city_text")
     .data(cities)
     .enter()
     .append("text")
     .attr("x", function(d){ return projection([d.long+0.07, d.lat-0.03])[0] })
     .attr("y", function(d){ return projection([d.long+0.07, d.lat-0.03])[1] })
     .attr("text-anchor", "start")
     .text(function(d){ return d.name })

    const path = d3.geoPath().projection(projection);
    svg
    .selectAll("path")
        .data(jamessmells.features) // data.features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 1);




//     {lat : 37, long: -122, name: "SF"}
//   { name: "sanfran", points: [[50, -122], [37, -121], [59, -120], [40, -172]] }



    
    /*
    svg.selectAll("path")
    .data(featurecoll_nino.features) // data.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 1);*/
    

    // Draw the polygon
    /*
    svg.append("path")
      .datum(vienna2_polygon)
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1);
    */




/*
     svg
      .selectAll("region_polygons")
      .data([regions])
      .enter()
      .append("polygon")
        .attr("points",function(d) { 
            return d.map(function(d) {
                return [scaleX(d.x),scaleY(d.y)].join(",");
            }).join(" ");
        })
        .attr("class", "region")
        .style("fill", "#173b6c")*/

    /*
    svg.selectAll("polygon")
        .data([poly])
      .enter().append("polygon")
        .attr("points",function(d) { 
            return d.map(function(d) {
                return [scaleX(d.x),scaleY(d.y)].join(",");
            }).join(" ");
        })
        .attr("stroke","black")
        .attr("stroke-width",2);
    */

    /*
     svg
      .selectAll("river_circle")
      .data(Bathy)
      .enter()
      .append("circle")
        .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
        .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
        .attr("r", 5)
        .attr("class", "river")
        .style("fill",  function(d){ return d.colour})
      */ 
      
    ;
})




/*
var visualise = function (d){

  var e = document.getElementById("spring_fall");
  var value = e.value;

  svg.selectAll(".river").remove();

    if (d == "turbidity"){
      if(value == "s2021"){
        turbidity = turbidity_s2021
      }else{
        turbidity = turbidity_f2021
      }
      svg
        .selectAll("turbidity_circle")
        .data(turbidity)
        .enter()
        .append("circle")
          .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
          .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
          .attr("r", 2)
          .attr("class", "river")
          .style("fill",  function(d){ return d.colour(d.turbidity)})

      }else if (d == "salinity"){
        if(value == "s2021"){
          salinity = salinity_s2021
        }else{
          salinity = salinity_f2021
        }
      svg
        .selectAll("salinity_circle")
        .data(salinity)
        .enter()
        .append("circle")
          .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
          .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
          .attr("r", 2)
          .attr("class", "river")
          .style("fill",  function(d){ return d.colour(d.salinity)})

      }else if (d == "temperature"){
        if(value == "s2021"){
          temperature = temperature_s2021
        }else{
          temperature = temperature_f2021
        }
      svg
        .selectAll("temperature_circle")
        .data(temperature)
        .enter()
        .append("circle")
          .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
          .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
          .attr("r", 2)
          .attr("class", "river")
          .style("fill",  function(d){ return d.colour(d.temperature)})
      }else if (d == "chlorophyll"){
        if(value == "s2021"){
          chlorophyll = chlorophyll_s2021
        }else{
          chlorophyll = chlorophyll_f2021
        }
      svg
        .selectAll("chlorophyll_circle")
        .data(chlorophyll)
        .enter()
        .append("circle")
          .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
          .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
          .attr("r", 2)
          .attr("class", "river")
          .style("fill",  function(d){ return d.colour(d.chlorophyll)})
      }

}
*/


 

/*
var turbidity_s2021 = [];
d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Insitu_WQ_Indicators_V2_2080/DeltaX_WQ_Indicators_Spring2021.csv", function(d) {
  function removeNaN(e,c){
    if(e>=0){return e}else{return c}
  }
  var min = d3.min(d, function(a) { return + removeNaN(a.turbidity); });
  var max = d3.max(d, function(a) { return + a.turbidity; });
  var myColor = d3.scaleLinear().domain([min,max]).range(["white", "red"])
  for (var i = 0; i < d.length; i++) {
        turbidity_s2021.push({"long": d[i].longitude, "lat": d[i].latitude, "turbidity": d[i].turbidity, "colour": myColor});
    }
})
*/
/*
var turbidity_f2021 = [];
d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Insitu_WQ_Indicators_V2_2080/DeltaX_WQ_Indicators_Fall2021.csv", function(d) {
  function removeNaN(e,c){
    if(e>=0){return e}else{return c}
  }
  var min = d3.min(d, function(a) { return + removeNaN(a.turbidity); });
  var max = d3.max(d, function(a) { return + a.turbidity; });
  var myColor = d3.scaleLinear().domain([min,max]).range(["white", "red"])
  for (var i = 0; i < d.length; i++) {
        turbidity_f2021.push({"long": d[i].longitude, "lat": d[i].latitude, "turbidity": d[i].turbidity, "colour": myColor});
    }
})
*/
/*
var salinity_s2021 = [];
d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Insitu_WQ_Indicators_V2_2080/DeltaX_WQ_Indicators_Spring2021.csv", function(d) {
  function removeNaN(e,c){
    if(e>=0){return e}else{return c}
  }
  function removehigh(e,c){
    if(e<10){return e}else{return c}
  }
  var min = d3.min(d, function(a) { return + removeNaN(a.salinity); });
  var max = d3.max(d, function(a) { return + a.salinity; });
  var myColor = d3.scaleLinear().domain([min,max]).range(["white", "red"])
  for (var i = 0; i < d.length; i++) {
        salinity_s2021.push({"long": d[i].longitude, "lat": d[i].latitude, "salinity": d[i].salinity, "colour": myColor});
    }
})
*/
/*
var salinity_f2021 = [];
d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Insitu_WQ_Indicators_V2_2080/DeltaX_WQ_Indicators_Fall2021.csv", function(d) {
  function removeNaN(e,c){
    if(e>=0){return e}else{return c}
  }
  function removehigh(e,c){
    if(e<10){return e}else{return c}
  }
  var min = d3.min(d, function(a) { return + removeNaN(a.salinity); });
  var max = d3.max(d, function(a) { return + a.salinity; });
  var myColor = d3.scaleLinear().domain([min,max]).range(["white", "red"])
  for (var i = 0; i < d.length; i++) {
        salinity_f2021.push({"long": d[i].longitude, "lat": d[i].latitude, "salinity": d[i].salinity, "colour": myColor});
    }
})
*/
/*
var temperature_s2021 = [];
d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Insitu_WQ_Indicators_V2_2080/DeltaX_WQ_Indicators_Spring2021.csv", function(d) {
  function removeNaN(e,c){
    if(e>=0){return e}else{return c}
  }
  var min = d3.min(d, function(a) { return + removeNaN(a.temperature); });
  var max = d3.max(d, function(a) { return + a.temperature; });
  var myColor = d3.scaleLinear().domain([min,max]).range(["white", "red"])
  for (var i = 0; i < d.length; i++) {
        temperature_s2021.push({"long": d[i].longitude, "lat": d[i].latitude, "temperature": d[i].temperature, "colour": myColor});
    }
})
*/
/*
var temperature_f2021 = [];
d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Insitu_WQ_Indicators_V2_2080/DeltaX_WQ_Indicators_Fall2021.csv", function(d) {
  function removeNaN(e,c){
    if(e>=0){return e}else{return c}
  }
  var min = d3.min(d, function(a) { return + removeNaN(a.temperature); });
  var max = d3.max(d, function(a) { return + a.temperature; });
  var myColor = d3.scaleLinear().domain([min,max]).range(["white", "red"])
  for (var i = 0; i < d.length; i++) {
        temperature_f2021.push({"long": d[i].longitude, "lat": d[i].latitude, "temperature": d[i].temperature, "colour": myColor});
    }
})
*/
/*
var chlorophyll_s2021 = [];
d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Insitu_WQ_Indicators_V2_2080/DeltaX_WQ_Indicators_Spring2021.csv", function(d) {
  function removeNaN(e,c){
    if(e>=0){return e}else{return c}
  }
  var min = d3.min(d, function(a) { return + removeNaN(a.chlorophyll_a_fluorescence); });
  var max = d3.max(d, function(a) { return + a.chlorophyll_a_fluorescence; });
  var myColor = d3.scaleLinear().domain([min,max]).range(["white", "red"])
  for (var i = 0; i < d.length; i++) {
        chlorophyll_s2021.push({"long": d[i].longitude, "lat": d[i].latitude, "chlorophyll": d[i].chlorophyll_a_fluorescence, "colour": myColor});
    }
})
*/
/*

var chlorophyll_f2021 = [];
d3.csv("https://raw.githubusercontent.com/Conex-Research/conex-research.github.io/main/data/DeltaX_Insitu_WQ_Indicators_V2_2080/DeltaX_WQ_Indicators_Fall2021.csv", function(d) {
  function removeNaN(e,c){
    if(e>=0){return e}else{return c}
  }
  var min = d3.min(d, function(a) { return + removeNaN(a.chlorophyll_a_fluorescence); });
  var max = d3.max(d, function(a) { return + a.chlorophyll_a_fluorescence; });
  var myColor = d3.scaleLinear().domain([min,max]).range(["white", "red"])
  for (var i = 0; i < d.length; i++) {
        chlorophyll_f2021.push({"long": d[i].longitude, "lat": d[i].latitude, "chlorophyll": d[i].chlorophyll_a_fluorescence, "colour": myColor});
    }
})
*/

/*
var Airpressure = [
              {"long":-91.445,"lat":29.510, name:"Air pressure at Make Island in Atchafalaya River", "description": "In Fall 2021, the Solinst Levelogger Junior Edge Model 3001 and the Onset HOBO U20L instruments were used to measure air pressure." , id:"Atchafalaya_Airpressure", class:"measurements"}
              ];





var Airpressure = [
              {"long":-91.445,"lat":29.510, name:"Air pressure at Make Island in Atchafalaya River", "description": "In Fall 2021, the Solinst Levelogger Junior Edge Model 3001 and the Onset HOBO U20L instruments were used to measure air pressure." , id:"Atchafalaya_Airpressure", class:"measurements"},
              {"long":-90.823,"lat":29.172, name:"Air pressure at Terrebonne", "description": "In Fall 2021, the Solinst Levelogger Junior Edge Model 3001 was used to measure air pressure." , id:"Terrebonne_Airpressure", class:"measurements"}
              ];
*/
/*var Alternanthera = [
            {"long":-91.27973,"lat":29.53945, name: "Occurance of alternanthera philoxeroides", "description": "In Fall 2015, vegetation was analysed. In this region, Alternanthera philoxeroides was found." , id:"Alternanthera", class:"measurements"},
              {"long":-91.27973,"lat":29.42521},
              {"long":-91.44506,"lat":29.42521},
              {"long":-91.44506,"lat":29.53945}];
*/


/*
// Define a path generator
const path = d3.geoPath().projection(projection);

// Load the GeoJSON FeatureCollection and draw the bounding box polygon
var pathijamessmells = "https://raw.githubusercontent.com/senv-team/senv-team.github.io/main/data/elnino_rectangle.geojson"

// d3.json(pathijamessmells).then(function(hiii){
d3.json(pathijamessmells, function(data){
    svg.selectAll("path")
        .data(data.features) // data.features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 1);
}).catch(error => {
  console.error("Error loading the GeoJSON data: ", error);
});
*/