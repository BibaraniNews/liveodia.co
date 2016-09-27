"use strict";
app.directive("ngFile",['$parse',function($parse){
	return{
	link:function(scope,ele,attr){
		var onChange=$parse(attr.ngFile)
		ele.on('change',function(event){
			onChange(scope,{$files:event.target.file});
		});
	}
};
}])