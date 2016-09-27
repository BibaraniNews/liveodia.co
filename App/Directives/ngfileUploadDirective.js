"use strict";
app.directive("ngFile",['$parse',function($parse){
	return{
	link:function(scope,ele,attr){
		debugger;
		var onChange=$parse(attr.ngFile);

			ele.on('change',function(event){

				onChange(scope,{$files:event.target.files});
			});

		}
	};
}])