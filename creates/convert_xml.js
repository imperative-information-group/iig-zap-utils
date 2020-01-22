const sample = require('../samples/xml');
const xmlParser = require('fast-xml-parser');

const convertXml = (z, bundle) => {

	let xml = bundle.inputData.xml;
	
	const errors = xmlParser.validate(xml);
	if (errors.err) {
		// For more generic validation fixing, use the traversal object
		// const tObj = xmlParser.getTraversalObj(xml, { ignoreAttributes : false });
		xml = xml.replace('  PDF  ', '"PDF" ')
	}

	return xmlParser.parse(xml);
};

module.exports = {
	key: 'convert_xml',
	noun: 'XML',

	display: {
		label: 'Convert XML to JSON',
		description: 'Converts XML to JSON',
	},

	operation: {
		inputFields: [
			{key: 'xml', label: 'XML', required: true },
		],
		perform: convertXml,
		sample: sample
	}
}