//登录检查
function check_login(){
 // 	var usr=$('#login_name').val();
	// var pwd=$('#login_pwd').val();
	// // 检查用户权限
	// if(usr===''||pwd===''){
	// 	$.mobile.changePage('login_error.html', 'pop', true, true);
	// 	return false;
	// }
	return true;
}

function save_desc(){
	alert('保存备注！')	
}

function save_xunjian(){
	alert('保存巡检单！')	
}

//数据下载
function upgrade_data(){
	var obj=$('#upgrade_div')
	//console.log(obj)
	$.ajax({
		url:"template.json",
		async:false,
		success:function(d){
			var d=$.parseJSON(d);
			var tempnums=d.total;
			var html='<div style="text-align:right;color:#666">一共'+tempnums+'条模版</div>';
			
			$.each(d.items,function(j,k){
				html+='<h2>'+k.h+'</h2>';
				html+='<div><ol data-role="listview">'
				$.each(k.templates,function(n,m){
					html+='<li>'+m.title+' '+m.ver+'</li>';
				})
				html+='</ol></div>'
			})
			obj.html(html).trigger('create');
		}
	})


//local database --start----------------
$('#info p').text('初始化本地数据库！')
var db=openDatabase('gtb','2.0','gs table for test',1024*1024);

db.transaction(function (tx) { //create insert
	tx.executeSql('create table if not exists t1 (id unique, log text, kkkk text)');  
	tx.executeSql('insert into t1 (id, log , kkkk) values (1, "z3333中文名cnehg","3333")');
	//tx.executeSql('drop table t1')//drop table
});
//local database --end----------------

	
}



$(document).on("pageinit", function(){
	//console.log('pageinit')
});


jQuery(function($){
//////////////////////

// $('table.gtb tr').click(function(){
// 	//console.log($(this).attr('data-id'))
// 	location='p02.html';
// })

// $("input[type='radio']").change(function(){
// 	// console.log($(this).prop('checked'))
// 	//if($(this).val())
// 	//alert(111)
// 	var obj=$(this).parents('li').find('.desc');
// 	if($(this).val()==='1'){
// 		obj.hide();
// 	}else{
// 		obj.show();
// 	}
// })

//////////////////////
})