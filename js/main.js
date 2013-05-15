//登录检查
function check_login(){
 	var usr=$('#login_name').val();
	var pwd=$('#login_pwd').val();
	// 检查用户权限
	if(usr===''||pwd===''){
		$.mobile.changePage('login_error.html', 'pop', true, true);
		return false;
	}
}

$(document).on("pageinit", function(){
	//console.log('pageinit')
});


jQuery(function($){
//////////////////////

$('table.gtb tr').click(function(){
	//console.log($(this).attr('data-id'))
	location='p02.html';
})

$("input[type='radio']").change(function(){
	// console.log($(this).prop('checked'))
	//if($(this).val())
	//alert(111)
	var obj=$(this).parents('li').find('.desc');
	if($(this).val()==='1'){
		obj.hide();
	}else{
		obj.show();
	}
})

//////////////////////
})