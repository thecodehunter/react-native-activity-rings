# React Native Activity Rings

This library is also compatible with Expo SDK and provides an activity ring visualization of data, used alongside with the ActivityRingsLegend component this will be a perfect solution for a 3 ring chart or progress chart.

---

## Installation

```
yarn add react-native-activity-rings
```

## Example

```
import ActivityRings, {ActivityRingsData, ActivityRingsConfig} from "react-native-activity-rings";

const Example = () => {

  const activityData: ActivityRingsData[] = [
      {
        value: 0.8
      },
      {
        value: 0.4
      },
      {
        value: 0.6
      }
  ];

  const activityConfig: ActivityRingsConfig = {
      width: 200,
      height: 150,
      radius: 32,
      ringSize: 14,
  }

  return (
        <View>
          <ActivityRings data={activityData} config={activityConfig} />
        </View>
  );

}
```


