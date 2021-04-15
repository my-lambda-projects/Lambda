// https://observablehq.com/@spencermountain/daylight-color-gradient@204
export default function define( runtime, observer ) {
  const main = runtime.module();
  main.variable( observer() ).define( [ "md" ], function ( md ) {
    return (
      md `# Daylight color gradient

an attempt at making an intuitive color scale for time-of-day. wish me luck.
`
    )
  } );
  main.variable( observer() ).define( [ "colorScale", "html" ], function ( colorScale, html ) {
    let colors = []
    for ( let i = 0; i < 24; i += 1 ) {
      let color = colorScale( i )
      colors.push( `<div style="background-color:${color}; width:100%;"></div>` )
    }
    return html `
    <div style="width:100%; height:200px; display:flex;"> 
      ${colors}
    </div>`
  } );
  main.variable( observer( "colorScale" ) ).define( "colorScale", [ "d3" ], function ( d3 ) {
    let twilight = '#D0D3C9'
    let colors = [
      //3-darks
      '#605754',
      '#716567',
      '#8B7F8D',
      //3-blues
      '#79768F',
      '#7482AB',
      '#92A4CD',
      //3-pinks
      '#ABA1B5',
      '#CBABAA',
      '#baa584',
      //3-browns
      '#D0AA80',
      '#B88372',
      '#C99551',
    ]
    let tmp = JSON.parse( JSON.stringify( colors ) )
    tmp.pop()
    tmp = tmp.reverse()
    colors = colors.concat( tmp )
    return d3.scaleLinear().domain( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ] ).range( colors ).clamp( true )
  } );
  main.variable( observer( "d3" ) ).define( "d3", [ "require" ], function ( require ) {
    return (
      require( "https://d3js.org/d3.v5.min.js" )
    )
  } );
  return main;
}
