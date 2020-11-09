This is to support a stack overflow question

# Question

## How do I transpile JSX for use on the browser

I have a simple React project set up in github to demonstrate this.

The file `square.js` contains the following 

```
import React from 'react';
const e = React.createElement;

function Square(props) {
    return (<button className='square' onClick={ props.data.onClick()}>{}</button>)
}
Square
```

I wish to transpile it to generate javascript code that can execute in the browser.
 
 If I run `babel` using the command `babel square.js --out-dir out` (after making the directory out)  
 then I get the following code(shown in `out/square.js`)
 
 ```
'use strict';
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var e = _react2['default'].createElement;
function Square(props) {
    return _react2['default'].createElement('button', { className: 'square', onClick: props.data.onClick() });
}
Square;
```

This all seems reasonable except for `var _react = require('react');` This is node feature and
doesn't work on the browser. I want to take this output file and use it in the browser

I have tried a number of options around .babelrc and babel.config.json. I only had exceptions working
with .babelrc but the babel.config.json seems to work.

I've tried (based on internet searching) the following, but I don't really know what I am doing. 
```
{  "presets": [   "es2015",    "react"  ] }
```
and
```
{  "presets": ["@babel/preset-env", "@babel/preset-react"]}
```

Summary of question
How do I transpile `square.rs` (from the command line) so that it produces javascript that can be used natively in the browser