![Screenshot](./docs/screenshot.png?raw=true "Activity Rings")  


***Activity Rings is also the perfect Progress Chart for your project.***

This library provides Ring visualization of data, and you can also enable legends for chart representation.

---  

## Installation

```
yarn add react-native-activity-rings  
```

## Example

```javascript
import ActivityRings from "react-native-activity-rings";  

const BasicExample = () => {

 const activityData = [ 
   { value: 0.8 }, 
   { value: 0.6 }, 
   { value: 0.2 }
 ];

 const activityConfig = { 
   width: 150,  
   height: 150
 };

 return (
  <View>
    <ActivityRings data={activityData} config={activityConfig} /> 
  </View>
  );
}  
```


## Activity Data

Define an array of objects with the data for each ring:

```javascript
const activityData = [
  {
    value: 0.8, // ring will use color from theme
  },
  {
    label: "ACTIVITY",
    value: 0.6,
    color: "#cb5f18",
  },
  {
    label: "RINGS",
    value: 0.2,
    color: "#86040f",
    backgroundColor: "#cccccc"
  }
];
```

| Property         | Type   | Description                                                                                                                                           |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| value            | Number | The value used as percentage to render for each ring. value of 1 represents 100% so this means 0.2 represents 20%. Values > 1 will not be considered. |
| label?           | string | Label will be used when enabling legend flag alongside the percentage value. |
| color?           | string | Hex representation of the color code for the ring. Only compatible with hex values (for now).                                                         |
| backgroundColor? | string | Hex representation of the background color code for the ring. Only compatible with hex values (for now). The background color will get 30% opacity.   |


## Configuration

Config options for the ring pie:

```javascript
const activityConfig = {
  width: 150,
  height: 150,
  radius: 32,
  ringSize: 14,
}
```

| Property | Type   | Description                                |
| -------- | ------ | ------------------------------------------ |
| width    | Number | The width of the activity ring component.  |
| height   | Number | The height of the activity ring component. |
| radius?  | Number | Defines the radius of the complete pie.    |
| ringSize?| Number | Defines the size of each ring in px.       |

## Legend
Legend is disabled by default.

Enable legend on the right side of the rings, this is ideal for chart representation.
Notice that legend will use the *label* value you defined for every ring inside the data object. 

```typescript
<ActivityRings legend={true} data={activityData} config={activityConfig} />
```

## Themes

By default this component comes with `Dark` theme and will work best of course with dark backgrounds. The library also provides a theme for light backgrounds and yes it's pretty obviously named `Light` theme.

```typescript
<ActivityRings data={activityData} config={activityConfig} />
```

*Please notice that dark is the default theme so you don't actually need to specify it.*

```typescript
<ActivityRings theme={"light"} data={activityData} config={activityConfig} />
```


## Not yet supported

1. Visualize more than 100 percentage on a ring like the Apple Watch does.
