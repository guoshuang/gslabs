$(document).on('pagebeforeshow', '#page_test', function(e, data){
console.log('external test1.js')
	$.ajax({
		async:false,
		url:'data.json',
		success:function(d){
			
			var d=$.parseJSON(d);
			console.log(d)
			console.log($('#test1'))
			console.log(d.users[0].u)
			$('#test1').html(d.users[0].u)
		}
	})

})
