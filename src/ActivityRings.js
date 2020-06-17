"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var react_native_svg_1 = require("react-native-svg");
var Pie = require("paths-js/pie");
var Colors;
(function (Colors) {
    Colors["White"] = "#ffffff";
    Colors["Gray"] = "#323232";
    // Light Theme
    Colors["Green"] = "#50eba9";
    Colors["Red"] = "#E02020";
    Colors["Canary"] = "#FAEB3F";
    // Dark Theme
    Colors["Move"] = "#54f0f7";
    Colors["Exercise"] = "#c1ff00";
    Colors["Stand"] = "#ef135f";
})(Colors || (Colors = {}));
var THEMES = {
    dark: {
        LegendColor: Colors.White,
        RingColors: [Colors.Move, Colors.Exercise, Colors.Stand]
    },
    light: {
        LegendColor: Colors.Gray,
        RingColors: [Colors.Red, Colors.Canary, Colors.Green]
    }
};
var ActivityRingsBase = function (props) {
    var data = props.data, config = props.config, theme = props.theme;
    var selectedTheme = THEMES[theme || "dark"];
    var containerStyle = {
        width: config.width,
        height: config.height
    };
    var createRings = function (data, height, rad, fill) {
        return data.map(function (ring, idx) {
            var pieData = fill || [ring.value, 1 - ring.value];
            var r = ((height / 2 - rad) / data.length) * idx + rad;
            return Pie({
                r: r,
                R: r,
                data: pieData,
                center: [0, 0],
                accessor: function (x) { return x; }
            });
        });
    };
    var RingsDrawer = function (props) { return (<react_native_svg_1.G>
            {props.rings.map(function (ring, idx) {
        var dataObj = data[idx];
        if (dataObj.value > 0 && dataObj.value <= 1) {
            return (<react_native_svg_1.Path key={"r_" + idx} strokeLinecap="round" strokeLinejoin="round" d={ring.curves[0].sector.path.print()} stroke={"" + (dataObj.color || selectedTheme.RingColors[idx]) + props.alpha} strokeWidth={config.ringSize}/>);
        }
    })}
        </react_native_svg_1.G>); };
    var frontRings = createRings(data, config.height, config.radius);
    var backRings = createRings(data, config.height, config.radius, [0.999, 0.001]);
    return (<react_native_1.View style={containerStyle}>
        <react_native_svg_1.Svg width={config.width} height={config.height}>
          <react_native_svg_1.G x={config.width / 2} y={config.height / 2}>
              <RingsDrawer rings={frontRings} alpha={"FF"}/>
              <RingsDrawer rings={backRings} alpha={"33"}/>
          </react_native_svg_1.G>
        </react_native_svg_1.Svg>
      </react_native_1.View>);
};
ActivityRingsBase.defaultProps = {
    data: [],
    theme: "dark",
    config: {
        ringSize: 14,
        radius: 32,
        width: 150,
        height: 150
    }
};
var ActivityRings = React.memo(ActivityRingsBase);
exports["default"] = ActivityRings;
