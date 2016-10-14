$(document).ready(function() {

	$('#calendar').fullCalendar({
		events: [
			{
				title: 'Meeting Chartres',
				start: '2016-10-01'
			},
			{
				title: 'Compétition internationale',
				start: '2016-10-07',
				end: '2016-10-10'
			},
			{
				title: 'Compétitions Judo',
				start: '2016-10-11',
				end: '2016-10-13'
			},
			{
				title: 'Debriefing',
				start: '2016-10-12T18:30:00'
			}

		]
	});
		
});