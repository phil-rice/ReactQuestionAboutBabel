'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var e = _react2['default'].createElement;

function Square(props) {
    return _react2['default'].createElement('button', { className: 'square', onClick: props.data.onClick() });
}
Square;