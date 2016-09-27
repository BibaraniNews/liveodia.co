"use strict";
app.controller("indexController",['$scope','$http',function($scope,$http){
	
	var formdata=new FormData();

	$scope.getTheFile=function($files){
		$scope.imgSrc=[];

		for(var i=0;i<$files.length;i++){
			var reader=new FileReader();
			reader.fileName=$files[i].name;

			reader.onload=function(event){
				var image={};
				image.name=event.target.filename;
				image.size=(event.total/1024).toFixed(2);
				image.Src=event.target.result;
				$scope.imgSrc.push(image);
				$scope.$apply();
			}

			reader.readAsDataURL($files[i]);
		}
		angular.forEach($files,function(value,key){
 			formdata.append(key,value);
		});
	};

	$scope.uploadFiles=function(){
		var request={
			method:"POST",
			url:"api/fileUpload",
			data:formdata;
			headers:
			{
				'Containt-type':undefind;
			}
		};
		$http(request).success(function(data){

		}).error(function(){
			$scope.reset();
		})
	};

	$scope.reset=function(){
		angular.forEach(
			angular.element("input [type='file']"),function(inputElem){
				angular.element(inputElem).val(null);
			});
		$scope.imgSrc=[];
		formdata=new FormData();
	}


}]);