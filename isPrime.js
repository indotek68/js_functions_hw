var isPrime = function(num){
	for(var i = 2; i < num; i++){
		if (num%i === 0){
			return false;
		}
		else{
			return true;
		}
	}
}

console.log(isPrime(101))
