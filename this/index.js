"use strict";

// console.log(this);

const calcAge = function (year) {
    console.log(2100 - year);
    console.log(this);
};

// calcAge(1991);

const calcAgeArrow = (year) => {
    console.log(2100 -year);
    console.log(this);
}

// calcAgeArrow(2000);

const quang = {
    year: 2000,
    calcAge: function() {
        console.log(this);
        console.log(2100 - this.year)
    }
}

// quang.calcAge();

const wtf = {
    year: 2020,
};

wtf.calcAge = quang.calcAge;
wtf.calcAge();

const f = quang.calcAge;