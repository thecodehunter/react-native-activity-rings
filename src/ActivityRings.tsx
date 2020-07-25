import * as React from "react";
import { Theme, THEMES } from "./Themes";
import ActivityLegend from "./ActivityRingsLegend";
import Rings from "./Rings";
import PieFactory from "./PieFactory";
import { Svg, G } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export type ActivityRingsData = ActivityRingData[];

export type ActivityRingData = {
  value: number;
  label?: string;
  color?: string;
  backgroundColor?: string;
};

export type ActivityRingsConfig = {
  width: number;
  height: number;
  radius?: number;
  ringSize?: number;
};

type ActivityRingsProps = {
  data: ActivityRingData[];
  config: ActivityRingsConfig;
  legend?: boolean;
  theme?: Theme;
};

const defaultCfg: ActivityRingsConfig = {
  width: 150,
  height: 150,
  ringSize: 14,
  radius: 32
};

const ActivityRingsBase = ({ data, config, theme, legend }: ActivityRingsProps) => {
  const cfg: ActivityRingsConfig = { ...defaultCfg, ...config };
  const backPie = PieFactory.create(data, cfg.height, cfg.radius, [0.999, 0.001]);
  const frontPie = PieFactory.create(data, cfg.height, cfg.radius);
  const selectedTheme = THEMES[theme || "dark"];

  return (
    <View style={styles.layout}>
      <View style={{ width: cfg.width, height: cfg.height }}>
        <Svg width={cfg.width} height={cfg.height}>
          <G x={cfg.width / 2} y={cfg.height / 2}>
            <Rings size={cfg.ringSize} pie={backPie} data={data} theme={selectedTheme} opacity={true} />
            <Rings size={cfg.ringSize} pie={frontPie} data={data} theme={selectedTheme} opacity={false} />
          </G>
        </Svg>
      </View>
      {legend && <ActivityLegend data={data} theme={theme} />}
    </View>
  );
};

ActivityRingsBase.defaultProps = {
  data: [],
  theme: "dark",
  legend: false
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

const ActivityRings = React.memo(ActivityRingsBase);
export default ActivityRings;
