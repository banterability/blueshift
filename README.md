## blueshift

Generate unique(ish) colors for city names using Dopplr's algorithm.

[![🚦 CI](https://github.com/banterability/blueshift/actions/workflows/ci.yml/badge.svg)](https://github.com/banterability/blueshift/actions/workflows/ci.yml) [![Latest published version](https://img.shields.io/npm/v/blueshift.svg)](https://www.npmjs.com/package/blueshift)

# About

In 2007, the team at Dopplr posted about their technique for [generating colors for cities](https://web.archive.org/web/20080413142609/http://blog.dopplr.com/2007/10/23/in-rainbows/) (linked to the Wayback Machine, because the Internet is cruel).

Here's the relevant bit:

> We wanted a deterministic RGB colour value for each city [...] we take the MD5 digest of the city’s name, convert it to hex and take the first 6 characters as a CSS RGB value.

This is that, basically.

# Installation

```shell
npm install blueshift
```

# Usage

```javascript
var blueshift = require("blueshift");

blueshift("San Francisco");
// -> '#f4334f'
```
