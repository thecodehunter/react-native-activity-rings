import * as React from "react";
import { View } from "react-native";
import { Svg, G, Path } from "react-native-svg";

const Pie = require("paths-js/pie");

enum Colors {
    White = "#ffffff",
    Gray = "#323232",
    // Light Theme
    Green = "#50eba9",
    Red = "#E02020",
    Canary = "#FAEB3F",
    // Dark Theme
    Move = "#54f0f7",
    Exercise = "#c1ff00",
    Stand = "#ef135f"
}
type Theme = "dark" | "light";

interface ThemeColors {
    LegendColor: string;
    RingColors: string[];
}

const THEMES: { dark: ThemeColors, light: ThemeColors } = {
    dark: {
        LegendColor: Colors.White,
        RingColors: [Colors.Move, Colors.Exercise, Colors.Stand]
    },
    light: {
        LegendColor: Colors.Gray,
        RingColors: [Colors.Red, Colors.Canary, Colors.Green]
    }
}

type Pie = { // pie-js does not support TS
    curves: any[];
}

export type ActivityRingData = {
    value: number;
    color?: string;
    backgroundColor?: string;
}

export type ActivityRingsConfig = {
    width: number;
    height: number;
    radius: number;
    ringSize: number;
}


interface ActivityRingsProps {
  data: ActivityRingData[];
  config: ActivityRingsConfig;
  theme?: Theme;
}

const ActivityRingsBase = (props: ActivityRingsProps) => {
    const { data, config, theme } = props;
    const selectedTheme = THEMES[theme || "dark"];
    const containerStyle = {
        width: config.width,
        height: config.height,
    };

    const createRings = (data: ActivityRingData[], height: number, rad: number, fill?: number[]) => {
        return data.map((ring: ActivityRingData, idx: number) => {
            const pieData = fill || [ring.value, 1 - ring.value];
            const r = ((height / 2 - rad) / data.length) * idx + rad;
            return Pie({
                r,
                R: r,
                data: pieData,
                center: [0, 0],
                accessor (x: any) {return x;}
            });
        });
    };

    const RingsDrawer = (props: { rings: Pie[], alpha: string }) => (
        <G>
            {props.rings.map((ring: Pie, idx: number) => {
                const dataObj = data[idx];
                if (dataObj.value > 0 && dataObj.value <= 1) {
                    return (
                        <Path
                            key={`r_${idx}`}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={ring.curves[0].sector.path.print()}
                            stroke={`${dataObj.color || selectedTheme.RingColors[idx]}${props.alpha}`}
                            strokeWidth={config.ringSize}
                        />
                    );
                }
            })}
        </G>
    );

    const frontRings = createRings(data, config.height, config.radius);
    const backRings = createRings(data,  config.height, config.radius,[0.999, 0.001]);

    return (
      <View style={containerStyle}>
        <Svg width={config.width} height={config.height}>
          <G x={config.width / 2} y={config.height / 2}>
              <RingsDrawer rings={frontRings} alpha={"FF"} />
              <RingsDrawer rings={backRings} alpha={"33"} />
          </G>
        </Svg>
      </View>
    );
}

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

const ActivityRings = React.memo(ActivityRingsBase);

export default ActivityRings;
