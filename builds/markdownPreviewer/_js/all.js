"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Divider() {
    return React.createElement("div", { className: "divider" });
}

var Output = function (_React$Component) {
    _inherits(Output, _React$Component);

    function Output(props) {
        _classCallCheck(this, Output);

        var _this = _possibleConstructorReturn(this, (Output.__proto__ || Object.getPrototypeOf(Output)).call(this, props));

        _this.getMarkdown = _this.getMarkdown.bind(_this);
        return _this;
    }

    _createClass(Output, [{
        key: "getMarkdown",
        value: function getMarkdown() {
            var out = "";
            if (this.props.value === "") {
                out = "See results here.";
            } else {
                out = marked(this.props.value);
            }
            return { __html: out };
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("aside", { className: "input-output", id: "react-output", dangerouslySetInnerHTML: this.getMarkdown() });
        }
    }]);

    return Output;
}(React.Component);

var Input = function (_React$Component2) {
    _inherits(Input, _React$Component2);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this2 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this2.state = { value: "" };
        _this2.processInput = _this2.processInput.bind(_this2);
        return _this2;
    }

    _createClass(Input, [{
        key: "processInput",
        value: function processInput(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                null,
                React.createElement("textarea", { className: "input-output", id: "editor", placeholder: "Enter markdown here", value: this.state.value, onChange: this.processInput }),
                React.createElement(Divider, null),
                React.createElement(Output, { value: this.state.value })
            );
        }
    }]);

    return Input;
}(React.Component);

ReactDOM.render(React.createElement(Input, null), document.getElementById('react-container'));
//# sourceMappingURL=all.js.map
