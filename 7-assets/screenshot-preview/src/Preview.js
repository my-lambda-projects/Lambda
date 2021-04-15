'use strict';

var PREVIEW = {};

PREVIEW.Image = 0;
PREVIEW.Video = 1;
PREVIEW.Other = 2;

PREVIEW.MouseNone = 0;
PREVIEW.MouseLeft = 1;
PREVIEW.MouseMiddle = 2;
PREVIEW.MouseRight = 3;

PREVIEW.KeyEscape = 27;

window.requestAnimFrame = ( function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function ( callback ) {
    window.setTimeout( callback, 1000 / 60 );
  };
} )();

PREVIEW.Transform3D = {
  vendorPrefix: '',

  initCanvas: function ( element ) {
    var css = {};

    this.vendorPrefix = this.getVendorPrefix( 'Perspective' );

    css[ this.vendorPrefix + 'Perspective' ] = '800px';
    css[ this.vendorPrefix + 'UserSelect' ] = 'none';
    css[ 'overflow' ] = 'hidden';
    css[ 'position' ] = 'absolute';

    this.applyCSS( element, css );
  },

  transform: function ( element, position, rotation, scale ) {
    var p = position.round( 3 ),
      r = rotation.round( 3 ),
      s = scale.round( 3 ),
      css = {};

    css[ this.vendorPrefix + 'Transform' ] = [
      'translate3d(' + p.x + 'px, ' + p.y + 'px, ' + p.z + 'px)',
      'rotateX(' + r.x + 'deg)',
      'rotateY(' + r.y + 'deg)',
      'rotateZ(' + r.z + 'deg)',
      'scale3d(' + s.x + ', ' + s.y + ', ' + s.z + ')'
    ].join( ' ' );

    this.applyCSS( element, css );
  },

  applyCSS: function ( element, css ) {
    for ( var prop in css ) {
      element.style[ prop ] = css[ prop ];
    }
  },

  getVendorPrefix: function ( property ) {
    var testElement = document.createElement( 'div' ),
      prefix = [ '', 'Moz', 'webkit', 'o', 'ms' ];

    for ( var i = 0; i < prefix.length; i++ ) {
      if ( prefix[ i ] + property in testElement.style ) {
        return prefix[ i ];
      }
    }
  }
};

PREVIEW.Filter = {
  htmlEncode: function ( html ) {
    var span_node = document.createElement( 'span' );

    span_node.appendChild( document.createTextNode( html ) );

    return span_node.innerHTML;
  }
};

PREVIEW.Event = {
  listen: function ( element, event, callback ) {
    if ( !( 'addEventListener' in window ) ) {
      element.attachEvent( 'on' + event, callback );
    } else {
      element.addEventListener( event, callback, false );
    }
    return this;
  },

  ignore: function ( element, event ) {
    this.listen( element, event, function ( e ) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    } );
    return this;
  }
};

PREVIEW.Vector3 = function ( x, y, z ) {
  if ( arguments.length === 3 ) {
    this.set( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ] );
  }
  return this;
};

PREVIEW.Vector3.prototype = {
  x: 0.0,
  y: 0.0,
  z: 0.0,

  reset: function () {
    this.set( 0.0, 0.0, 0.0 );
    return this;
  },

  set: function ( x, y, z ) {
    this.x = x, this.y = y, this.z = z;
    return this;
  },

  add: function ( other ) {
    this.x += other.x, this.y += other.y, this.z += other.z;
    return this;
  },

  sub: function ( other ) {
    this.x -= other.x, this.y -= other.y, this.z -= other.z;
    return this;
  },

  multiplyScalar: function ( scalar ) {
    this.x *= scalar, this.y *= scalar, this.z *= scalar;
    return this;
  },

  round: function ( places ) {
    var factor = 10 * ( places - 1 );

    this.x = Math.round( this.x * factor ) / factor;
    this.y = Math.round( this.y * factor ) / factor;
    this.z = Math.round( this.z * factor ) / factor;
    return this;
  },

  clone: function () {
    return new PREVIEW.Vector3( this.x, this.y, this.z );
  },

  cloneTo: function ( other ) {
    other.set( this.x, this.y, this.z );
    return this;
  }
};

PREVIEW.Media = function ( file ) {
  return this.set( file );
};

PREVIEW.Media.prototype = {
  file: undefined,
  element: undefined,

  set: function ( file ) {
    this.file = PREVIEW.Filter.htmlEncode( file );
    return this;
  },

  create: function () {
    switch ( this.getMediaType() ) {
      case PREVIEW.Image:
        this.createImageDomElement();
        break;
      case PREVIEW.Video:
        this.createVideoDomElement();
        break;
    };

    this.element.draggable = false;
    this.element.unselectable = true;
    PREVIEW.Event.ignore( this.element, 'dragstart' );
    PREVIEW.Event.ignore( this.element, 'selectstart' );

    return this.element;
  },

  createImageDomElement: function () {
    this.element = document.createElement( 'img' );
    this.element.src = this.file;
  },

  createVideoDomElement: function () {
    this.element = document.createElement( 'video' );
    this.element.src = this.file;
    this.element.autoplay = true;
    this.element.loop = true;
    this.element.controls = true;
  },

  getFileExtension: function () {
    return this.file.split( '.' ).slice( -1 )[ 0 ].toLowerCase();
  },

  getMediaType: function () {
    switch ( this.getFileExtension() ) {
      case 'png':
      case 'jpeg':
      case 'jpg':
      case 'gif':
      case 'bmp':
        return PREVIEW.Image;
      case 'webm':
      case 'mp4':
      case 'ogv':
        return PREVIEW.Video;
      default:
        return PREVIEW.Other;
    };
  }
};

PREVIEW.Stage = function ( stage_element, media_element, camera ) {
  return this.set( stage_element, media_element, camera );
};

PREVIEW.Stage.prototype = {
  stage_element: undefined,
  media_element: undefined,

  stage: undefined,
  media: undefined,

  camera: undefined,

  set: function ( stage_element, media_element, camera ) {
    this.stage_element = stage_element;
    this.media_element = media_element;
    this.camera = camera;
  },

  create: function () {
    PREVIEW.Transform3D.initCanvas( this.stage_element );

    this.stage_element.appendChild( this.media_element );
  },

  update: function () {
    var center = new PREVIEW.Vector3( -this.stage_element.offsetWidth / 2 + this.media_element.offsetWidth / 2, -this.stage_element.offsetHeight / 2 + this.media_element.offsetHeight / 2, 0 );
    var camera_position = this.camera.getPosition().clone().sub( center );
    var camera_rotation = this.camera.getRotation();

    PREVIEW.Transform3D.transform( this.media_element, camera_position, camera_rotation, new PREVIEW.Vector3( 1, 1, 1 ) );
  }
};

PREVIEW.BasicInputBehaviour = function ( camera ) {
  this.set( camera );
  this.listen();
};

PREVIEW.BasicInputBehaviour.prototype = {
  camera: undefined,
  pressed_mouse_button: PREVIEW.MouseNone,
  pressed_mouse_position: new PREVIEW.Vector3(),
  last_camera_position: new PREVIEW.Vector3(),

  set: function ( camera ) {
    this.camera = camera;
  },

  listen: function () {
    var self = this;

    PREVIEW.Event.listen( window, 'keydown', function ( e ) {
      self.keydown( e.which );
    } );

    PREVIEW.Event.listen( window, 'mousemove', function ( e ) {
      self.mousemove( e.clientX, e.clientY );
    } );

    PREVIEW.Event.listen( window, 'mousewheel', function ( e ) {
      self.mousewheel( e.wheelDelta, e.clientX, e.clientY );
    } );

    PREVIEW.Event.listen( window, 'mousedown', function ( e ) {
      self.mousedown( e.which, e.clientX, e.clientY );
    } );

    PREVIEW.Event.listen( window, 'mouseup', function ( e ) {
      self.mouseup( e.which, e.clientX, e.clientY );
    } );

    PREVIEW.Event.listen( window, 'DOMMouseScroll', function ( e ) {
      self.mousewheel( -e.detail * 40.0, e.clientX, e.clientY );
    } );
  },

  keydown: function ( keyCode ) {
    if ( keyCode === PREVIEW.KeyEscape ) {
      this.camera.reset();
    }
  },

  mousemove: function ( x, y ) {
    switch ( this.pressed_mouse_button ) {
      case PREVIEW.MouseMiddle:
        return this.camera.rotate( ( innerHeight / 2 - y ) * 0.02, -( innerWidth / 2 - x ) * 0.02, 0 );
      case PREVIEW.MouseLeft:
        return this.camera.move( x - this.pressed_mouse_position.x + this.last_camera_position.x, y - this.pressed_mouse_position.y + this.last_camera_position.y );
    }
  },

  mousewheel: function ( delta, x, y ) {
    this.camera.zoom( delta );
  },

  mouseup: function ( button, x, y ) {
    this.pressed_mouse_button = PREVIEW.MouseNone;
  },

  mousedown: function ( button, x, y ) {
    this.pressed_mouse_button = button;
    this.pressed_mouse_position.set( x, y, 0 );
    this.camera.position.cloneTo( this.last_camera_position );
  }
};

PREVIEW.Camera = function () {};
PREVIEW.Camera.prototype = {
  position: new PREVIEW.Vector3(),
  rotation: new PREVIEW.Vector3(),

  reset: function () {
    this.position.reset(), this.rotation.reset();
  },

  zoom: function ( amount ) {
    this.position.z = Math.min( Math.max( this.position.z + amount, -1800 ), 720 );
  },

  move: function ( x, y ) {
    this.position.x = x, this.position.y = y;
  },

  rotate: function ( x, y, z ) {
    this.rotation.set( x, y, z );
  },

  getPosition: function () {
    return this.position;
  },

  getRotation: function () {
    return this.rotation;
  },
};

PREVIEW.SmoothedCamera = function () {};
PREVIEW.SmoothedCamera.prototype = new PREVIEW.Camera();

PREVIEW.SmoothedCamera.prototype.smoothedPosition = new PREVIEW.Vector3();
PREVIEW.SmoothedCamera.prototype.getPosition = function () {
  this.smoothedPosition = new PREVIEW.Vector3( this.position.x, this.position.y, this.smoothedPosition.z * .75 + this.position.z * .25 );
  return this.clampToZero( this.smoothedPosition );
};

PREVIEW.SmoothedCamera.prototype.smoothedRotation = new PREVIEW.Vector3();
PREVIEW.SmoothedCamera.prototype.getRotation = function () {
  this.smoothedRotation = this.smoothedRotation.clone().multiplyScalar( .9 ).add( this.rotation.clone().multiplyScalar( .1 ) );
  return this.clampToZero( this.smoothedRotation );
};

PREVIEW.SmoothedCamera.prototype.clampToZero = function ( vector ) {
  var factor = .25;
  vector.x = vector.x > -factor && vector.x < factor ? 0 : vector.x;
  vector.y = vector.y > -factor && vector.y < factor ? 0 : vector.y;
  vector.z = vector.z > -factor && vector.z < factor ? 0 : vector.z;
  return vector;
};
