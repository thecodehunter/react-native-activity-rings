import * as React from "react";
import {StyleSheet, View} from "react-native";
import { Svg, G, Path } from "react-native-svg";
import {Theme, THEMES} from "./Themes";
import ActivityLegend from "./ActivityRingsLegend";

const Pie = require("paths-js/pie");

type Pie = { // pie-js does not support TS
    curves: any[];
}

export type ActivityRingData = {
    value: number;
    label?: string;
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
    legend?: boolean;
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
            const r = ((height / 2 - rad) / data.length) * (data.length - idx - 1) + rad;
            return Pie({
                r,
                R: r,
                data: pieData,
                center: [0, 0],
                accessor (x: any) {return x;}
            });
        });
    };

    const Rings = (props: { data: Pie[], opacity: boolean }) => {
        const alpha = props.opacity ? "33" : "FF";
        const rings = props.data;
        return (
            <G>
                {rings.map((ring: Pie, idx: number) => {
                    const dataObj = data[idx];
                    const color = props.opacity ? dataObj.backgroundColor : dataObj.color;
                    const ringColor = color || selectedTheme.RingColors[idx];
                    if (dataObj.value > 0 && dataObj.value <= 1) {
                        return (
                            <Path
                                key={`r_${idx}`}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={ring.curves[0].sector.path.print()}
                                stroke={`${ringColor}${alpha}`}
                                strokeWidth={config.ringSize}
                            />
                        );
                    }
                })}
            </G>);
    };

    const backRings = createRings(data,  config.height, config.radius,[0.999, 0.001]);
    const frontRings = createRings(data, config.height, config.radius);

    return (
        <View style={styles.container}>
            <View style={containerStyle}>
                <Svg width={config.width} height={config.height}>
                    <G x={config.width / 2} y={config.height / 2}>
                        <Rings data={backRings} opacity={true} />
                        <Rings data={frontRings} opacity={false} />
                    </G>
                </Svg>
            </View>
            {props.legend && <ActivityLegend data={props.data} theme={theme} />}
        </View>
    );
}

ActivityRingsBase.defaultProps = {
    data: [],
    theme: "dark",
    legend: false,
    config: {
        ringSize: 14,
        radius: 32,
        width: 150,
        height: 150
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});

const ActivityRings = React.memo(ActivityRingsBase);
export default ActivityRings;
