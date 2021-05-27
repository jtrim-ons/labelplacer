import test from 'ava';
import labelplacer from './index.js';

test('title', t => {
	const elements = [
		{targetY: 2, label: 'label0', height: 10},
		{targetY: 5, label: 'label1', height: 10},
		{targetY: 50, label: 'label2', height: 10},
		{targetY: 80, label: 'label2', height: 10}
	];

	const testPlacement = (bounds, expected) => {
		t.is(JSON.stringify(labelplacer(elements, bounds, d => d.targetY, d => d.height)
			.map(d => d.y)), JSON.stringify(expected));
	};

	testPlacement([0, 100], [5, 15, 50, 80]);
	testPlacement([0, 75], [5, 15, 50, 70]);
	testPlacement([0, 55], [5, 15, 40, 50]);
	testPlacement([0, 5], [-30, -20, -10, 0]);
	testPlacement([-100, 100], [-1.5, 8.5, 50, 80]);
});
