/*---------jqm 全局定义*/
$(document).on("mobileinit", function(){
	//-fade | flip | flow | pop | slide | slidedown | slidefade | slideup | turn | none
	$.mobile.defaultPageTransition='slide';
  $.mobile.defaultDialogTransition='pop';
  $.mobile.loadingMessage='加载中...';
  $.mobile.pageLoadErrorMessage='加载错误';

	//-page theme a黑 b蓝 c浅灰 d深灰 e 黄色
	// $.mobile.page.prototype.options.headerTheme = "b";  
	// $.mobile.page.prototype.options.contentTheme  = "c";
	// $.mobile.page.prototype.options.footerTheme = "c";


	$.mobile.page.prototype.options.headerTheme = "z";  
	$.mobile.page.prototype.options.contentTheme  = "y";
	$.mobile.page.prototype.options.footerTheme = "z";
});


