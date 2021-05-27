# labelplacer

> A simple label placement algorithm for line charts

This module is useful for finding non-overlapping y-positions for the series
labels on a line chart.  The positions calculated are similar to those on
[Our World in Data's charts](https://ourworldindata.org/owid-grapher).

## Install

```
$ npm install labelplacer
```

## Usage

```js
import labelplacer from 'labelplacer';

const elements = [
    {targetY: 2, label: 'label0', height: 10},
    {targetY: 5, label: 'label1', height: 10},
    {targetY: 50, label: 'label2', height: 10},
    {targetY: 80, label: 'label2', height: 10}
];

const bounds = [0, 100];

labelplacer(elements, bounds, d => d.targetY, d => d.height);
//=> [5, 15, 50, 80]
```

## API

### labelplacer(data, bounds, targetYFn, heightFn)

#### data

Type: `array`

An array of data, with each element corresponding to one label.

#### bounds

Type: `array`

A two-element array containing the minimum and maximum y values.

#### targetYFn

Type: `function`

A function that takes and element of `data` and returns the target y position
for the vertical centre of the label.

#### heightFn

Type: `function`

A function that takes and element of `data` and returns the height of the
label.
