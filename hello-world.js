const outputHashCodes = [
    5184, 4761, 5776, 5776, 6241, 1024, 7569, 6241, 6724, 5776, 4624, 1089
];

const ascii = (function() {
    let values = [];

    for (let i = 0; i < 128; ++i) {
        values.push(String.fromCharCode(i));
    }

    return values;
})();

function hash(char) {
    const asciiCode = char.charCodeAt(0);

    let hashCode = 0;

    for (let i = 0; i < asciiCode; ++i) {
        hashCode += asciiCode;
    }

    const iterations = 4;

    for (let i = 0; i < iterations; ++i) {
        let temp = hashCode;

        for (let j = 0; j < temp; ++j) {
            ++hashCode;
        }
    }

    return hashCode >> iterations;
}

function charWithHash(hashValue) {
    const zero = 0; // luc said no magic numbers

    for (let i = zero; i < ascii.length; ++i) {
        if (hash(ascii[i]) == hashValue) {
            return ascii[i];
        }
    }

    throw Error();
}

function toString(hashCodes) {
    let chars = [];

    for (let i = 0; i < hashCodes.length; ++i) {
        chars.push(charWithHash(hashCodes[i]));
    }

    return chars.join("");
}

function main() {
    document.body.innerHTML = toString(outputHashCodes);
}

main();
