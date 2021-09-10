function getFibonacci() {
	function printSequence(howFar) {
		var output = '',
			i;
		for (i = 0; i < howFar; i++) {
			output += seq[i];
			output += (i < howFar - 1) ? ', ' : '';
		}
		return output;
	}
	var seq = [ 0, 1 ],
		howFar = document.getElementById('howFar').value,
		i;
	if (+howFar === 0) {
		document.getElementById('result').innerHTML = '';
	} else if (+howFar === 1) {
		document.getElementById('result').innerHTML = seq[0];
	} else if (+howFar > 1) {
		for (i = 1; i < howFar; i++) {
			seq.push(seq[i-1]+seq[i]);
		};
		document.getElementById('result').innerHTML = printSequence(howFar);
	};
}
