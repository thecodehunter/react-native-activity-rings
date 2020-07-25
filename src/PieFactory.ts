import { ActivityRingData } from "./ActivityRings";
const Pie = require("paths-js/pie");

const PieFactory = {
  create: (data: ActivityRingData[], height: number, rad: number, fill?: number[]) => {
    return data.map((ring: ActivityRingData, idx: number) => {
      const pieData = fill || [ring.value, 1 - ring.value];
      const r = ((height / 2 - rad) / data.length) * (data.length - idx - 1) + rad;
      return Pie({
        r,
        R: r,
        data: pieData,
        center: [0, 0],
        accessor(x: any) {
          return x;
        }
      });
    });
  }
};

export default PieFactory;
