import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Theme, THEMES} from "./Themes";
import {ActivityRingData} from "./ActivityRings";

interface ActivityLegendsProps {
    data: ActivityRingData[];
    theme?: Theme;
}

const ActivityLegendBase = (props: ActivityLegendsProps) => {
    const {data, theme} = props;
    const selectedTheme = THEMES[theme || "dark"];
    const textStyle = {...styles.text, color: selectedTheme.LegendColor };
    return (
        <View style={styles.container}>
            {data.map((ring: ActivityRingData, idx: number) => {
                const bulletColor = ring.color || selectedTheme.RingColors[idx];
                const bulletStyle = {...styles.bullets, backgroundColor: bulletColor};
                return (
                    <View style={styles.row} key={`l_${idx}`}>
                        <View style={bulletStyle}></View>
                        <Text style={textStyle}>{ring.label} {ring.value * 100}%</Text>
                    </View>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    bullets: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 10
    },
    text: {
        padding: 7
    }
});

const ActivityLegend = React.memo(ActivityLegendBase);
export default ActivityLegend;