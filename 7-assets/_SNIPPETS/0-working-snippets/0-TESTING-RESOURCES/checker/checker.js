const checker = Symbol( 'check' );
const isArray = Symbol( 'array' );
const isObject = Symbol( 'object' );
const isInteger = Symbol( 'integer' );
const isDouble = Symbol( 'double' );
const isString = Symbol( "string" );
const isFunction = Symbol( "function" );
const isClass = Symbol( "class" );
const isEmpty = Symbol( "empty" );
//^^^^^NGL i never thought I would ever use symbols for anythig^^^^^
class Util {
    constructor() {}
    get Array() {
        return "Array";
    }
    get Object() {
        return "Object";
    }
    get Integer() {
        return "Integer";
    }
    get Double() {
        return "Double";
    }
    get String() {
        return "String";
    }
    get Function() {
        return "Function";
    }
    get Class() {
        return "Class";
    }
    get Letter() {
        return "Letter";
    }
    get Empty() {
        return "Empty";
    }
    get Blank() {
        return "Blank";
    }
    get Element() {
        return "Element";
    }
    get Email() {
            return "Email";
        }
        [ isArray ]( data ) {
            return Array.isArray( data );
        }
        [ isObject ]( data ) {
            return data instanceof Object && data.constructor === Object;
        }
        [ isInteger ]( data ) {
            let x;
            if ( isNaN( data ) ) {
                return false;
            }
            x = parseFloat( data );
            return ( x | 0 ) === x;
        }
        [ isDouble ]( data ) {
            let isNan = isNaN( data );
            let isDouble = false;
            if ( isNan ) {
                isDouble = false;
            } else {
                isDouble = !( Math.round( data ) === data );
            }
            return isDouble;
        }
        [ isString ]( data ) {
            return data.constructor === String && Object.prototype.toString.call( data ) === '[object String]';
        }
        [ isFunction ]( data ) {
            let isFunc = ( ( Object.prototype.toString.call( data ) === '[object Function]' ||
                    data.constructor === Function ) &&
                this.startsWith( data, '(' ) );
            return isFunc || this.startsWith( data, 'function' );
        }
        [ isClass ]( data ) {
            let isClass = ( ( Object.prototype.toString.call( data ) === '[object Function]' ||
                data.constructor === Function ) );
            return isClass && this.startsWith( data, 'class' );
        }
        [ isEmpty ]( data, type ) {
            let ret = false;
            switch ( type.toString() ) {
                case 'Empty':
                    ret = ( !data || 0 === data.length )
                    break;
                case 'Blank':
                    ret = ( data.length === 0 || !data.trim() );
                    break;
                default:
                    ret = false;
                    break;
            }
            return ret;
        }
        [ checker ]( data, type ) {
            let elemArr = [ 'checked', 'visible' ]
            let types = {
                'Array': this[ isArray ]( data ),
                'Object': this[ isObject ]( data ),
                'Integer': this[ isInteger ]( data ),
                'Double': this[ isDouble ]( data ),
                'String': this[ isString ]( data ),
                'Function': this[ isFunction ]( data ),
                'Class': this[ isClass ]( data ),
                'Empty': this[ isEmpty ]( data, type ),
                'Blank': this[ isEmpty ]( data, type ),
            }
            if ( elemArr.indexOf( type ) > -1 ) {
                type = 'Element';
                types[ 'Element' ] = this[ isElement ]( data, type );
            }
            return types[ type ];
        }
    startsWith( data, search, pos ) {
        return data.toString().substr( !pos || pos < 0 ? 0 : +pos, search.length ) === search;
    }
    format( strVal ) {
        let str = strVal.toString();
        if ( arguments.length ) {
            let t = typeof arguments[ 1 ];
            let key;
            let args = ( "string" === t || "number" === t ) ?
                Array.prototype.slice.call( arguments ) :
                arguments[ 1 ];
            for ( key in args ) {
                str = str.replace( new RegExp( "\\{" + key + "\\}", "gi" ), args[ key ] );
            }
        }
        return str;
    }
    is( data, type ) {
        return this[ checker ]( data, type );
    }
    includes( strVal, search ) {
        if ( !String.prototype.includes ) {
            return strVal.indexOf( search ) > -1;
        } else {
            return strVal.includes( search );
        }
    }
    count( str, search ) {
        let re = new RegExp( '(' + search + ')', 'g' );;
        let count = 0;
        try {
            count = str.match( re ).length;
        } catch ( error ) {}
        if ( search === this.Letter && !this.is( str, this.Array ) ) {
            count = str.length;
        } else if ( search === this.Array && this.is( str, this.Array ) ) {
            count = str.length;
        } else if ( search === this.Object && this.is( str, this.Object ) ) {
            count = Object.keys( str ).length;
        } else
            return count;
    }
}
//------------------------------------------------------------------------------------------------
const OmightyMagicConchShell = new Util();
console.log( 'OmightyMagicConchShell : ', OmightyMagicConchShell );
//OmightyMagicConchShell :  Util {}
//------------------------------------------------------------------------------------------------
console.log( OmightyMagicConchShell.format( 'Hi {0}. Did you see the {1}?', [ 'Pikachu', 'Meow' ] ) );
//    Hi Pikachu.Did you see the Meow ?
//------------------------------------------------------------------------------------------------
console.log( OmightyMagicConchShell.includes( 'Ali Baba', 'Baba' ) );
/*
true
*/
//------------------------------------------------------------------------------------------------
console.log( OmightyMagicConchShell.is( [ 1, 2, 3 ], OmightyMagicConchShell.Array ) );
/*
true
*/
//------------------------------------------------------------------------------------------------
console.log( OmightyMagicConchShell.is( {
    'a': 'v'
}, OmightyMagicConchShell.Object ) )
/*
true
*/
//------------------------------------------------------------------------------------------------
console.log( OmightyMagicConchShell.is( 5.1, OmightyMagicConchShell.Integer ) );
/*
false
*/
//------------------------------------------------------------------------------------------------
console.log( OmightyMagicConchShell.is( 3.2, OmightyMagicConchShell.Double ) );
/*
true
*/
//------------------------------------------------------------------------------------------------
console.log( OmightyMagicConchShell.is( 3.2, OmightyMagicConchShell.Double ) );
/*
true
*/
//------------------------------------------------------------------------------------------------
console.log( 'OmightyMagicConchShell.is( 3.2, OmightyMagicConchShell.Double ): ', OmightyMagicConchShell.is( 3.2, OmightyMagicConchShell.Double ) );
/*
OmightyMagicConchShell.is( 3.2, OmightyMagicConchShell.Double ): true
*/
//------------------------------------------------------------------------------------------------
console.log( ' OmightyMagicConchShell.is( Ali + 123, OmightyMagicConchShell.String ): ', OmightyMagicConchShell.is( "Ali" + 123, OmightyMagicConchShell.String ) );
/*
 OmightyMagicConchShell.is( Ali + 123, OmightyMagicConchShell.String ): true
*/
//------------------------------------------------------------------------------------------------
OmightyMagicConchShell.is( 'Ali' + 123, OmightyMagicConchShell.String )
console.log( 'OmightyMagicConchShell.is( Ali+ 123, OmightyMagicConchShell.String ) : ', OmightyMagicConchShell.is( 'Ali' + 123, OmightyMagicConchShell.String ) );
/*
OmightyMagicConchShell.is( Ali + 123, OmightyMagicConchShell.String ): true
*/
//------------------------------------------------------------------------------------------------
//OmightyMagicConchShell.is( 'Ali' + 123, OmightyMagicConchShell.String )
console.log( ' OmightyMagicConchShell.is(Ali + 123, OmightyMagicConchShell.String ): ', OmightyMagicConchShell.is( 'Ali' + 123, OmightyMagicConchShell.String ) );
/*
true
*/
//------------------------------------------------------------------------------------------------
const a = ( d ) => {}
//OmightyMagicConchShell.is( a , OmightyMagicConchShell.Function )
console.log( 'OmightyMagicConchShell.is( a , OmightyMagicConchShell.Function ): ', OmightyMagicConchShell.is( a, OmightyMagicConchShell.Function ) );
/*
OmightyMagicConchShell.is( a, OmightyMagicConchShell.Function ): true
*/
//OmightyMagicConchShell.is( function a( d ) {}, OmightyMagicConchShell.Function )
console.log( 'OmightyMagicConchShell.is( function a( d ) {}, OmightyMagicConchShell.Function ): ', OmightyMagicConchShell.is( function a( d ) {}, OmightyMagicConchShell.Function ) );
/*
OmightyMagicConchShell.is( function a( d ) {}, OmightyMagicConchShell.Function ): true
*/
//------------------------------------------------------------------------------------------------
// OmightyMagicConchShell.is( class b {}, OmightyMagicConchShell.Class )
console.log( 'OmightyMagicConchShell.is( class b {}, OmightyMagicConchShell.Class ): ', OmightyMagicConchShell.is( class b {}, OmightyMagicConchShell.Class ) );
/*
OmightyMagicConchShell.is( class b {}, OmightyMagicConchShell.Class ): true
*/
//------------------------------------------------------------------------------------------------
OmightyMagicConchShell.count( 'My name is no name when I do not like names. What is your name? Can u say your naming conversion', 'name' )
console.log( 'OmightyMagicConchShell.count( My name is no name when I do not like names. What is your name? Can u say your naming conversion, name): ', OmightyMagicConchShell.count( 'My name is no name when I do not like names. What is your name? Can u say your naming conversion', 'name' ) );
/*
OmightyMagicConchShell.count( My name is no name when I do not like names.What is your name ? Can u say your naming conversion, name ): 4
*/
//------------------------------------------------------------------------------------------------
// OmightyMagicConchShell.count( {
//     'w': 't',
//     'w2': 't2',
//     'wf': 'wf',
//     'wfs': 'wfs2'
// }, OmightyMagicConchShell.Object )
console.log( 'OmightyMagicConchShell.count( {w:t,w2:t2,wf:wf,wfs:wfs2 } OmightyMagicConchShell.Object ):  ', OmightyMagicConchShell.count( {
    'w': 't',
    'w2': 't2',
    'wf': 'wf',
    'wfs': 'wfs2'
}, OmightyMagicConchShell.Object ) );
/*
!OmightyMagicConchShell.count( {
!       w: t,
!        w2: t2,
!        wf: wf,
!        wfs: wfs2
!    }
!    OmightyMagicConchShell.Object ): undefined
*/
//------------------------------------------------------------------------------------------------
