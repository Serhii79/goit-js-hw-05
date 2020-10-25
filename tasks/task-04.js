 // Write code under this line
class StringBuilder {
    constructor(value) {
        this._value = value;
    }
    
    get value() {
        return this._value;
    }

    // set value(str) {
    //     this._value = str;
    // }

    append(str) {
        this._value += str;
    }

    prepend(str) {
        this._value = str + this._value;
    }

    pad(str) {
        this.append(str);
        this.prepend(str);
    }
  }

console.log(typeof StringBuilder);
'function'


const builder = new StringBuilder('.');
console.log(builder.value);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
