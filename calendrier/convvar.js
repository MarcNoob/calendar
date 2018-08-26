function vartype(myvar) {
let tvar = '';
	tvar = typeof myvar;
	if (tvar === 'object') {
		if (Array.isArray(myvar)) {
			tvar = 'array';
		} else {
			tvar = myvar.constructor.name;
			if (tvar === 'p') {		//moment returns 'p'
				tvar = 'moment';
			}
		}
	}
	return tvar.toLowerCase();
}


function dateconv(datein, typeout) {
	return typeof datein;
}

function toto(uu) {
	alert (uu);
}