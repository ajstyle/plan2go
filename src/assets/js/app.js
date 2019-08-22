var example1 = document.getElementById('example1'),
	example2Left = document.getElementById('example2-left'),
	example3Left = document.getElementById('example3-left'),
	example4Left = document.getElementById('example4-left'),
	example2Right = document.getElementById('example2-right'),
	example3Right = document.getElementById('example3-right'),
	example4Right = document.getElementById('example4-right'),
	example5Right = document.getElementById('example5-right'),
	example3Left = document.getElementById('example3-left'),
	example3Right = document.getElementById('example3-right'),
	example4Left = document.getElementById('example4-left'),
	example4Right = document.getElementById('example4-right'),
	example5 = document.getElementById('example5'),
	example6 = document.getElementById('example6'),
	example7 = document.getElementById('example7'),
	gridDemo = document.getElementById('gridDemo'),
	multiDragDemo = document.getElementById('multiDragDemo'),
	swapDemo = document.getElementById('swapDemo');




// Example 4 - No Sorting
new Sortable(example4Left, {
	group: {
		name: 'shared',
		pull: 'clone',
		put: false // Do not allow items to be put into this list
	},
	animation: 150,
	sort: false // To disable sorting: set sort to false
});

new Sortable(example4Right, {
	group: 'shared',
	animation: 150
});


// Example 5 - Handle
new Sortable(example5, {
    handle: '.handle', // handle class
    animation: 150
});

// Example 6 - Filter
new Sortable(example6, {
    filter: '.filtered',
    animation: 150
});

// Example 7 - Thresholds
var example7Sortable = new Sortable(example7, {
    animation: 150
});


var example7SwapThreshold = 1;
var example7SwapThresholdInput = document.getElementById('example7SwapThresholdInput');
var example7SwapThresholdCode = document.getElementById('example7SwapThresholdCode');
var example7SwapThresholdIndicators = [].slice.call(document.querySelectorAll('.swap-threshold-indicator'));

var example7InvertSwapInput = document.getElementById('example7InvertSwapInput');
var example7InvertSwapCode = document.getElementById('example7InvertSwapCode');
var example7InvertedSwapThresholdIndicators = [].slice.call(document.querySelectorAll('.inverted-swap-threshold-indicator'));

var example7Squares = [].slice.call(document.querySelectorAll('.square'));

var activeIndicators = example7SwapThresholdIndicators;

var example7DirectionInput = document.getElementById('example7DirectionInput');
var example7SizeProperty = 'width';


function renderThresholdWidth(evt) {
	example7SwapThreshold = Number(evt.target.value);
	example7SwapThresholdCode.innerHTML = evt.target.value.indexOf('.') > -1 ? evt.target.value.padEnd(4, '0') : evt.target.value;

	for (var i = 0; i < activeIndicators.length; i++) {
		activeIndicators[i].style[example7SizeProperty] = (evt.target.value * 100) /
			(activeIndicators == example7SwapThresholdIndicators ? 1 : 2) + '%';
	}

	example7Sortable.option('swapThreshold', example7SwapThreshold);
}

example7SwapThresholdInput.addEventListener('input', renderThresholdWidth);

example7InvertSwapInput.addEventListener('input', function(evt) {
	example7Sortable.option('invertSwap', evt.target.checked);


	for (var i = 0; i < activeIndicators.length; i++) {
		activeIndicators[i].style.display = 'none';
	}

	if (evt.target.checked) {

		example7InvertSwapCode.style.display = '';

		activeIndicators = example7InvertedSwapThresholdIndicators;
	} else {
		example7InvertSwapCode.style.display = 'none';
		activeIndicators = example7SwapThresholdIndicators;
	}

	renderThresholdWidth({
		target: example7SwapThresholdInput
	});

	for (i = 0; i < activeIndicators.length; i++) {
		activeIndicators[i].style.display = '';
	}
});

