$(function(){
//////////////

//$('ul.pList')

//$("input[type='radio']").attr("checked",true).checkboxradio("refresh");

$("input[type='radio']").change(function(){
	// console.log($(this).prop('checked'))
	//if($(this).val())
	alert(111)
	var obj=$(this).parents('li').find('.desc');
	if($(this).val()==='1'){
		obj.hide();
	}else{
		obj.show();
	}
})


//////////////
})