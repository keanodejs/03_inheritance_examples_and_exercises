    var dog = {
        sound: 'wuf'
    };

    var cat = {
        sond: 'miaw'
    };

    var fido = {};

    // assign dog as the prototype of fido
    fido.__proto__ = dog;

    // fido is now 'inheriting' the properties of dog
    console.log(fido.sound); //=> ‘wuf’


    // Now assign cat as the prototype of fido
    fido.__proto__ = cat;

    // fido is now 'inheriting' the properties of cat instead
    console.log(fido.sound); //=> ‘miaw’
