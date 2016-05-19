blueshift
---------

Generate unique(ish) colors for city names using Dopplr's algorithm.

[![Build Status](https://travis-ci.org/banterability/blueshift.svg?branch=master)](https://travis-ci.org/banterability/blueshift)

About
=====

In 2007, the team at Dopplr posted about their technique for [generating colors for cities](http://blog.dopplr.com/2007/10/23/in-rainbows/).

That link no longer works, because the internet is cruel, but here are the relevant bits:

> We wanted a deterministic RGB colour value for each city. At first, we tried mapping the latitude and longitude of a city to a point in colour space, but we found that this made neighbouring cities too similar in colour. This means that people who travel frequently between Glasgow and Edinburgh wouldn’t clearly see the difference in colour between the two. Also, since so much of the Earth’s surface is covered in water rather than cities, it leads to a sparse use of the potential colour space. In the end, we went with a much simpler approach: we take the MD5 digest of the city’s name, convert it to hex and take the first 6 characters as a CSS RGB value.

This is that, basically.

Installation
============

```shell
npm install blueshift --save
```

Usage
=====

```javascript
var blueshift = require('blueshift');

blueshift('San Francisco');
// -> '#f4334f'
```
