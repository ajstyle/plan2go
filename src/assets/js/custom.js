$(function () {
	$(".datepicker").datepicker({
		autoclose: true,
		todayHighlight: true
	});

	new Sortable(example2Left, {
		group: 'shared', // set both lists to same group
		animation: 150
	});

	new Sortable(example3Left, {
		group: 'shared', // set both lists to same group
		animation: 150
	});

	new Sortable(example4Left, {
		group: 'shared', // set both lists to same group
		animation: 150
	});



	new Sortable(example2Right, {
		group: 'shared',
		animation: 150
	});
	new Sortable(example3Right, {
		group: 'shared',
		animation: 150
	});
	new Sortable(example4Right, {
		group: 'shared',
		animation: 150
	});

	new Sortable(example5Right, {
		group: 'shared',
		animation: 150
	});


	
	
	
	$('#one').click(function(){
    $('#count').val('650$');
   
});

$('#two').click(function(){
    $('#count').val('1000$');
   
});
	
	
$('#three').click(function(){
    $('#count').val('1300$');
   
});
	
	
	
	
$('#four').click(function(){
    $('#count').val('1500$');
   
});
	
	
$('#five').click(function(){
    $('#count').val('2000$');
   
});
	
	
	
	
	
	
	
	
	
	
	
	
	


});
