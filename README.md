# React Native Activity Rings & Chart

![Screenshot](./docs/screenshot.png?raw=true "Activity Rings")  

Activity Rings is the perfect Progress Chart for your project.

This library provides Ring visualization of data, used alongside with the ActivityRingsLegend component this will be the perfect Progress Chart solution too.

---  

## Installation

```
yarn add react-native-activity-rings  
```

## Example

```typescript
import ActivityRings, {ActivityRingData, ActivityRingsConfig} from "react-native-activity-rings";  

const Example = () => {

 const activityData: ActivityRingData[] = [ 
     { value: 0.3 }, 
     { value: 0.6 }, 
     { value: 0.8 }
 ];
 const activityConfig: ActivityRingsConfig = { 
     width: 150,  
     height: 150,  
     radius: 32,  
     ringSize: 14,  
 }  
 return ( <View> <ActivityRings data={activityData} config={activityConfig} /> </View> );  
}  
```


## Features

- Typescript support.

- Lightweight.

- Support for multiple rings.

- Themes.

- Customize ring color, size and background to fit your needs.

- Customize size and position, wrap it inside a View container and use it anywhere.


## Activity Data

Define an array of objects with the data for each ring:

```typescript
  const activityData: ActivityRingData[] = [
    {
        value: 0.3, // ring will use color from theme
    },
    {
        value: 0.6,
        color: "#cb5f18",
    },
    {
        value: 0.8,
        color: "#86040f",
        backgroundColor: "#cccccc"
    }
  ];
```

| Property         | Type   | Description                                                                                                                                           |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| value            | Number | The value used as percentage to render for each ring. value of 1 represents 100% so this means 0.2 represents 20%. Values > 1 will not be considered. |
| color?           | string | Hex representation of the color code for the ring. Only compatible with hex values (for now).                                                         |
| backgroundColor? | string | Hex representation of the background color code for the ring. Only compatible with hex values (for now). The background color will get 30% opacity.   |


## Configuration

Object with config options for the rings:

```typescript
  const activityConfig: ActivityRingsConfig = {
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
| radius   | Number | Defines the radius of the complete pie.    |
| ringSize | Number | Defines the size of each ring in px.       |


## Themes

By default this components comes with `Dark` theme and will work best of course with dark backgrounds. But the library also provides a theme for light backgrounds and yes it's pretty obvious, it's called `Light` theme.

```typescript
<ActivityRings data={activityData} config={activityConfig} />
```

*Please notice that dark is the default theme so you don't actually need to specify it.*

```typescript
<ActivityRings theme={"light"} data={activityData} config={activityConfig} />
```


## Coming soon

Being able to visualize more than 100% percentage on a ring is a valuable feature for specific use cases like Apple does on the smart watch. Stay tunned!
