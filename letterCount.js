var  letterCount = function(word){
var count = 0;
var object = {}

	for(var i = 0; i < word.length; i++){
		for(var j = 0; j < word.length; j++){
			if(word[i] === word[j]){
				count = count + 1
				object[word[i]] = count;
			}
			}
			count = 0;
		}
		return object 
	}
console.log(letterCount("apple"))