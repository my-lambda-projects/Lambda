// https://observablehq.com/@bgoonz/spacetime@472
import define1 from "./1f49ae23647b93f2@204.js";

export default function define( runtime, observer ) {
  const main = runtime.module();
  main.variable( observer() ).define( [ "md" ], function ( md ) {
    return (
      md `# Spacetime

[spacetime](https://github.com/smallwins/spacetime) lets you figure-out what time it is, all-over the world:
`
    )
  } );
  main.variable( observer( "chart" ) ).define( "chart", [ "d3", "DOM", "tzList", "selected", "mutable selected", "tzColor", "topojson", "tzData", "spacetime", "epoch" ], function ( d3, DOM, tzList, selected, $0, tzColor, topojson, tzData, spacetime, epoch ) {
    const width = 960;
    const height = 675;
    //const projection = d3.geoNaturalEarth1().scale(width / 2 / Math.PI).translate([width, height]).precision(.1);
    const path = d3.geoPath() //.projection(projection);

    //draw the timezones
    const svg = d3.select( DOM.svg( width, height ) )
      .style( "width", "100%" )
      .style( "height", "auto" );
    svg.insert( 'g', '.graticule' )
      .attr( 'style', 'cursor:pointer;' )
      .selectAll( 'path' )
      .data( tzList )
      .enter().append( 'path' )
      .attr( 'd', path )
      .on( 'click', ( d ) => {
        if ( selected === d.id ) { //toggle
          $0.value = null
        } else {
          $0.value = d.id
        }
      } )
      .attr( 'opacity', ( d ) => {
        if ( selected && d.id !== selected ) {
          return 1
        }
        return 1
      } )
      .attr( 'fill', ( d ) => {
        let color = tzColor( d.id )
        return color
      } )
      .attr( 'stroke-width', 2 )
      .attr( 'stroke', ( d ) => {
        if ( d.id === selected ) {
          return 'lightgrey'
        }
        return 'none'
      } )
      .append( 'title' )
      .text( function ( d ) {
        return d.id;
      } );
    //make the outlines
    svg.append( "path" )
      .datum( topojson.mesh( tzData, tzData.objects.timezones, ( a, b ) => a !== b ) )
      .attr( "fill", "none" )
      .attr( 'stroke', ( d ) => {
        if ( d.id === selected ) {
          return 'steelblue'
        }
        return 'lightgrey'
      } )
      .attr( "stroke-linejoin", "round" )
      .attr( "d", path )

    //draw selected tz legend
    svg.append( "text" ).attr( 'x', width / 2 ).attr( 'y', 30 ).attr( 'fill', 'slategrey' ).text( selected )
    svg.append( "text" ).attr( 'x', width / 2 ).attr( 'y', 50 ).attr( 'fill', 'lightgrey' ).text( () => {
      if ( selected ) {
        return spacetime( epoch, selected ).format( 'time' )
      }
    } )
    return svg.node();
  } );
  main.variable( observer( "viewof progress" ) ).define( "viewof progress", [ "html", "currentDayProgress" ], function ( html, currentDayProgress ) {
    return (
      html `<input type="range" min="0" max="100" value="${currentDayProgress}" style="width:700px; margin-left:100px;">`
    )
  } );
  main.variable( observer( "progress" ) ).define( "progress", [ "Generators", "viewof progress" ], ( G, _ ) => G.input( _ ) );
  main.variable( observer() ).define( [ "spacetime", "epoch", "referenceTz", "html" ], function ( spacetime, epoch, referenceTz, html ) {
    let s = spacetime( epoch, referenceTz )
    let time = s.format( 'nice' ) + ' - ' + referenceTz
    return html `<div style="padding-left:90px;">
    <span style="font-size:30px; color:steelblue;">${s.time()}</span>
    <span style="font-size:20px; color:slategrey;"> (${s.timezone().name})</span>
    <div style="margin-left:120px; font-size:15px; color:slategrey;">
      ${s.format('month')} 
      ${s.format('date-ordinal')},
      ${s.format('year')} 
    </div>

</div>`
  } );
  main.variable( observer() ).define( [ "html" ], function ( html ) {
    return (
      html `<div><hr/>try it out:</div>`
    )
  } );
  main.variable( observer( "viewof date" ) ).define( "viewof date", [ "html" ], function ( html ) {
    return (
      html `<input value="June 8th 2019"/>`
    )
  } );
  main.variable( observer( "date" ) ).define( "date", [ "Generators", "viewof date" ], ( G, _ ) => G.input( _ ) );
  main.variable( observer() ).define( [ "spacetime", "date", "html" ], function ( spacetime, date, html ) {
    let s = spacetime( date )
    return html `<div class="col" style="max-width:20rem; text-align:left;">
   
    <div class="row">
      <div>week-day: </div> 
      <div class="blue">${s.format('day')}</div>
    </div>

    <div class="row">
      <div>quarter: </div> 
      <div class="blue">${s.format('quarter')}</div>
    </div>

    <div class="row">
      <div>season: </div> 
      <div class="blue">${s.format('season')}</div>
    </div>

    <div class="row">
      <div>day of year: </div> 
      <div class="blue">${s.dayOfYear()}</div>
    </div>

    <div class="row">
      <div>hemisphere: </div> 
      <div class="blue">${s.timezone().hemisphere}</div>
    </div>

    <div class="row">
      <div>timezone: </div> 
      <div class="blue">${s.timezone().name}  (${s.timezone().current.offset}h)</div>
    </div>

    <div class="row">
      <div>abbreviation: </div> 
      <div class="blue">${s.timezone().display}</div>
    </div>

    <div class="row">
      <div>has DST: </div> 
      <div class="blue">${s.timezone().hasDst}</div>
    </div>

    <div class="row">
      <div>is DST: </div> 
      <div class="blue">${s.timezone().current.isDST}</div>
    </div>

    <div class="row">
      <div>time: </div> 
      <div class="blue">${s.format('time')}</div>
    </div>

    <div class="row">
      <div>valid: </div> 
      <div class="blue">${s.isValid()}</div>
    </div>

    <div class="row">
      <div>ISO: </div> 
      <div class="blue">${s.format('iso')}</div>
    </div>
</div>
`
  } );
  main.variable( observer() ).define( [ "html" ], function ( html ) {
    return (
      html `<div style="min-height:120px;"><hr/></div>`
    )
  } );
  main.variable( observer( "version" ) ).define( "version", [ "spacetime" ], function ( spacetime ) {
    return (
      spacetime.version
    )
  } );
  main.variable( observer( "referenceTz" ) ).define( "referenceTz", [ "spacetime" ], function ( spacetime ) {
    return (
      spacetime.now().timezone().name
    )
  } );
  main.define( "initial selected", function () {
    return (
      null
    )
  } );
  main.variable( observer( "mutable selected" ) ).define( "mutable selected", [ "Mutable", "initial selected" ], ( M, _ ) => new M( _ ) );
  main.variable( observer( "selected" ) ).define( "selected", [ "mutable selected" ], _ => _.generator );
  main.variable( observer( "currentDayProgress" ) ).define( "currentDayProgress", [ "spacetime" ], function ( spacetime ) {
    return (
      spacetime.now().progress().day * 100
    )
  } );
  main.variable( observer( "epoch" ) ).define( "epoch", [ "spacetime", "d3", "progress" ], function ( spacetime, d3, progress ) {
    let s = spacetime.now()
    let start = s.startOf( 'day' ).epoch
    let end = s.endOf( 'day' ).epoch
    let dayScale = d3.scaleLinear().domain( [ 0, 100 ] ).range( [ start, end ] )
    return dayScale( progress )
  } );
  main.variable( observer( "tzColor" ) ).define( "tzColor", [ "spacetime", "epoch", "colorScale" ], function ( spacetime, epoch, colorScale ) {
    return (
      function tzColor( tz ) {
        let percent = spacetime( epoch, tz, {
          silent: true
        } ).hour24() //.progress().day
        return colorScale( percent )
      }
    )
  } );
  main.variable( observer( "spacetime" ) ).define( "spacetime", [ "require" ], function ( require ) {
    return (
      require( 'spacetime@latest' )
    )
  } );
  main.variable( observer( "fixData" ) ).define( "fixData", [ "topojson" ], function ( topojson ) {
    return (
      function fixData( data ) {
        //fixup our timezone data
        let tzs = topojson.feature( data, data.objects.timezones ).features
        tzs.forEach( ( o ) => {
          let places = o.id.split( '/' )
          if ( places.length > 2 ) {
            places.pop()
            o.id = places.join( '/' )
          }
          if ( o.id === 'uninhabited' ) {
            o.id = 'UTC'
          }
        } )
        return data
      }
    )
  } );
  main.variable( observer( "tzList" ) ).define( "tzList", [ "topojson", "tzData" ], function ( topojson, tzData ) { //fixup our timezone data
    let tzs = topojson.feature( tzData, tzData.objects.timezones ).features
    tzs.forEach( ( o ) => {
      let places = o.id.split( '/' )
      if ( places.length > 2 ) {
        places.pop()
        o.id = places.join( '/' )
      }
      if ( o.id === 'uninhabited' ) {
        o.id = 'UTC'
      }
    } )
    return tzs
  } );
  main.variable( observer( "tzData" ) ).define( "tzData", [ "d3" ], function ( d3 ) {
    return (
      d3.json( "https://raw.githubusercontent.com/smallwins/spacetime/gh-pages/lib/timezones.json" )
    )
  } );
  main.variable( observer( "topojson" ) ).define( "topojson", [ "require" ], function ( require ) {
    return (
      require( "topojson-client@3" )
    )
  } );
  const child1 = runtime.module( define1 );
  main.import( "colorScale", child1 );
  main.variable( observer( "style" ) ).define( "style", [ "html" ], function ( html ) {
    return (
      html `<style>
body{
  font-family: 'avenir next', avenir, sans-serif;
}
h3 { 
     padding-top: 5rem; 
     color:#f46979;
  }
input {
  color:grey;
  margin:0.5rem;
  padding:0.25rem;
  font-size:30px;
}
.blue {
  color:cornflowerblue;
  padding:1rem;
}

.row{
  display:flex;
  flex-direction: row !important;
  justify-content: flex-start;
  align-items: flex-start;
  text-align:left;
  flex-wrap: wrap;
  width:100%;
}
.col{
  display:flex;
  flex-direction: column !important;
  justify-content: space-around;
  align-items: center;
  text-align:left;
  flex-wrap: wrap;
  width:100%;
}
</style>`
    )
  } );
  main.variable( observer( "d3" ) ).define( "d3", [ "require" ], function ( require ) {
    return (
      require( "https://d3js.org/d3.v5.min.js" )
    )
  } );
  return main;
}
