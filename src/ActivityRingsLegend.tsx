import * as React from "react";
import { Theme, THEMES } from "./Themes";
import { ActivityRingsData, ActivityRingData } from "./ActivityRings";
import { View, Text, StyleSheet } from "react-native";

interface ActivityLegendsProps {
  data: ActivityRingsData;
  title?: string;
  theme?: Theme;
}

const ActivityLegendBase = ({ data, title, theme }: ActivityLegendsProps) => {
  const selectedTheme = THEMES[theme || "dark"];
  const textStyle = {
    ...styles.text,
    color: selectedTheme.LegendColorPercentage
  };
  const labelStyle = { color: selectedTheme.LegendColor };
  return (
    <View style={styles.container}>
      <Text style={textStyle}>{title}</Text>
      {data.map((ring: ActivityRingData, idx: number) => {
        const bulletColor = ring.color || selectedTheme.RingColors[idx];
        const bulletStyle = { ...styles.bullets, backgroundColor: bulletColor };
        return (
          <View style={styles.row} key={`l_${idx}`}>
            <View style={bulletStyle}></View>
            {ring.label && (
              <Text style={textStyle}>
                {`${Math.round(ring.value * 100)}% `}
                <Text style={labelStyle}>{ring.label}</Text>
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  row: {
    alignItems: "center"
  },
  bullets: {
    width: 16,
    height: 16,
    borderRadius: 8
  },
  text: {
    padding: 7,
    margin: 0
  }
});

const ActivityLegend = React.memo(ActivityLegendBase);
export default ActivityLegend;
