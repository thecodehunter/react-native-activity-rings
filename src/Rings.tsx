import * as React from "react";
import { ActivityRingsData } from "./ActivityRings";
import { ThemeColors } from "./Themes";
import { G, Path } from "react-native-svg";

type Pie = {
  // pie-js does not support TS
  curves: any[];
};

type RingsProps = {
  size: number;
  pie: Pie[];
  data: ActivityRingsData;
  theme: ThemeColors;
  opacity: boolean;
};

const Rings = ({ size, pie, data, theme, opacity }: RingsProps) => {
  const alpha = opacity ? "33" : "";
  return (
    <G>
      {pie.map((ring: Pie, idx: number) => {
        const dataObj = data[idx];
        const color = opacity ? dataObj.backgroundColor || dataObj.color : dataObj.color;
        const ringColor = color || theme.RingColors[idx];
        // check decimals between 0 and 1
        if (!(dataObj.value > 0 && dataObj.value <= 1)) {
          return null;
        }
        return (
          <Path
            key={`r_${idx}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            d={ring.curves[0].sector.path.print()}
            stroke={`${ringColor}${alpha}`}
            strokeWidth={size}
          />
        );
      })}
    </G>
  );
};

export default Rings;
