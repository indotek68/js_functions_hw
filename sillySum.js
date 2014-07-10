var array = [3, 4, 5, 6, 7, 8, 9, 10]


var sillySum = function(){
	var sum = 0;
	for(i = 0; i < array.length; i++){
		sum = sum + array[i] * i;
	}
	return sum;
}

console.log(sillySum(array))