'use strict';

function calcAge (a) {
    const age = 2100 - a;

    function printAge () {
        const output = `You are ${age}, born in ${a}`;
        console.log(output);

        if (a >= 1981 && a <= 1996) {
            var millenial = true;
            console.log(`Oh, you're a millenial, ${firstName}`)
        }
        console.log(millenial);
    }
    printAge();

    return age;
}

const firstName = "Quang";
calcAge(2000);  