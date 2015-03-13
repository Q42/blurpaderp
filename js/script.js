/*
bl-u-rp-a-d-e-rp

[dbpkfgvt] [lrj]? [aeiou ee oo] [rsxnm]
[dbpkgvt]  [lrj]? [aeiou ee oo] 
[dbpkfgvt] [lrj]? [aeiou ee oo] [rnm]
[pkt]

*/

var Blurpaderp = function() {
	var public = {};
	public.pattern = '[dbpkfgvt][lrj]?[ae2io2u][rsxnm][dbpkgvt][lrj]?[ae2io2u][dbpkfgvt][lrj]?[ae2io2u][rnm][pkt]';

	public.generate = function() {
		var derp = '';
		public.pattern.replace(/\[(.*?)\](\??)/gi, function(m, chars, optional){
			if (!optional || Utils.between(1,2)==1) {
				var arr = [], last = '';
				for (var i=0; i<chars.length; i++) {
					var char = chars.substr(i,1);
					if (char == '2')
						arr.push(last + last);
					else
						arr.push(char);
					last = char;
				}
				derp += Utils.draw(arr);
			}			
		});
		return derp;		
	}

	return public;
}();

$(function(){

	if ((''+document.location.hash).substr(1) == 'test') {
		var count = 0, had = {}, last = 0, duplicates = 0, retries = 0;
		var stopped = false;
		var max = 9 * 1000 * 1000;		
		
		while (count < max) {
			if (new Date() * 1 > (last + 1000)) {
				document.title = count;
				console.log(duplicates, 'DUPLICATES AFTER', count, 'BLURPADERPS - MAX RETRIES SO FAR IS', retries)
				last = new Date() * 1;
			}
			var derp = Blurpaderp.generate();
			count++;			
			var retry = 0;			
			while (had[derp]) {
				duplicates++;
				retry++;
				derp = Blurpaderp.generate();
				if (retry > retries)
					retries++;
			}
			had[derp] = true;			
		}
		console.log(duplicates, 'DUPLICATES AFTER', count, 'BLURPADERPS - MAX RETRIES SO FAR IS', retries)
	}
	else {
		$('html').bind('click keypress', generate);
		generate();

		function generate() {
			var derp = Blurpaderp.generate();
			$('#derp').html(derp);
		}
	}
})
