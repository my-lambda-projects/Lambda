class ObjArray {
    constructor() {
        this.storage = {};
        this.length = 0;
    }

    get( index ) {
        return this.storage[ index ];
    }

    delete( index ) {
        delete this.storage[ index ];
        for ( let i = index; i <= this.length; i++ ) {
            this.storage[ i ] = this.storage[ i + 1 ];
        }
        this.length--;
    }

    push( element ) {
        this.storage[ this.length ] = element;
        this.length++;
    }

    pop() {
        const lastIndex = this.length - 1;
        const valueToReturn = this.storage[ lastIndex ];
        delete this.storage[ lastIndex ];
        this.length--;
        return valueToReturn;
    }
}
