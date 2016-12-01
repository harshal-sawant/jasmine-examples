function Calculator(el) {
	this.$el = el;
}

Calculator.prototype.add = function(a,b, callback) {
	var result = a + b;
	if(typeof callback === 'function'){
		callback(result);
	} else {
		this.outputResult(result);
	}
	
	return result;	
}

Calculator.prototype.substract = function(a,b) {
	var result = a - b;
	this.outputResult(result);
	return result;	
}

Calculator.prototype.outputResult = function(result) {
		console.log('Outputting Result --', result);
}
