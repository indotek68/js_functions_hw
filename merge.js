var arr1 = [3,6,11]
var arr2 = [2,4,5,8,9]


var merge = function(a, b){
	var arr3 = []
	var small

	while(arr1.length > 0 && arr2.length > 0){
		if (a[0] < b[0]){
			small = a.shift();
		}
		else{
			small = b.shift();
		}
		arr3.push(small)
	}

	if(arr1.length  > 0){
		return arr3.concat(arr1)
	}
	else{
		return arr3.concat(arr2)
	}
}

console.log(merge(arr1, arr2))

// var sort = function(a, b){
// 	var arr3 = []

// 	for(var i = 0; i < arr1.length; i++){
// 		//arr1[i] < arr2[j]
// 		for(var j = 0; j < arr2.length; j++){


// 		}

// 	}

// }


// items.sort(function (a, b) {
//     if (a.name > b.name)
//       return 1;
//     if (a.name < b.name)
//       return -1;
//     // a must be equal to b
//     return 0;
// });
// // var merge = function(){

// // }

// console.log[arr3]