var par;

par = (i) => i%2 == 0;

function ehPar(i) {
	return i%2 == 0;
}

for (var i=0; i<30; i++) {
	console.log(par(i)? i: "");
}