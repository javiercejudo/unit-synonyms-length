# unit-synonyms-length

[![Build Status](https://travis-ci.org/javiercejudo/unit-synonyms-length.svg)](https://travis-ci.org/javiercejudo/unit-synonyms-length)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/unit-synonyms-length/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/unit-synonyms-length?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/unit-synonyms-length/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/unit-synonyms-length)

Length units synonyms

## Install

    npm i unit-synonyms-length

## Units

- [Metre](https://en.wikipedia.org/wiki/Metre)
- [Kilometre](https://en.wikipedia.org/wiki/Kilometre)
- [Centimetre](https://en.wikipedia.org/wiki/Centimetre)
- [Millimetre](https://en.wikipedia.org/wiki/Millimetre)
- [Mile](https://en.wikipedia.org/wiki/Mile)
- [Yard](https://en.wikipedia.org/wiki/Yard)
- [Foot](https://en.wikipedia.org/wiki/Foot_(unit))
- [Inch](https://en.wikipedia.org/wiki/Inch)
- [Nautical mile](https://en.wikipedia.org/wiki/Nautical_mile)

## Usage

```js
var synonyms = require('unit-synonyms-length').synonyms;

synonyms['°C']; // => celsius
synonyms['degrees fahrenheit']; // => fahrenheit
```

## Related projects

- [linear-presets-length](https://github.com/javiercejudo/linear-presets-length): linear presets for length units.
- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
