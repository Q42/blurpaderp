/*
bl-u-rp-a-d-e-rp

[dbpkfgvt] [lrj]? [aeiou ee oo] [rsxnm]
[dbpkgvt]  [lrj]? [aeiou ee oo] 
[dbpkfgvt] [lrj]? [aeiou ee oo] [rnm]
[pkt]

*/

import Utils from './utils';

export default class Blurpaderp {

	private static pattern = '[dbpkfgvt][lrj]?[ae2io2u][rsxnm][dbpkgvt][lrj]?[ae2io2u][dbpkfgvt][lrj]?[ae2io2u][rnm][pkt]';

	static generate = function () {
		var derp = '';
		Blurpaderp.pattern.replace(/\[(.*?)\](\??)/gi, ({}, chars: string, optional: number) => {
			if (!optional || Utils.between(1, 2) == 1) {
				var arr = [], last = '';
				for (var i = 0; i < chars.length; i++) {
					var char = chars.substr(i, 1);
					if (char == '2')
						arr.push(last + last);
					else
						arr.push(char);
					last = char;
				}
				derp += Utils.draw(arr);
			}
			return ''; // TODO unused, needed for typescript compilation
		});
		return derp;
	}

}
