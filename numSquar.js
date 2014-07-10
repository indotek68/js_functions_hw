var numSquare = function(max){
var square = []
	
	for(var i = 1; i < max; i++){
		
		if( i*i < max ){
			square.push(i*i);
		}
		//console.log(square)
	}
	return square;
}
console.log(numSquare(25))