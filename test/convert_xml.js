require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

const sample = require('../samples/xml')

describe('Create - convert_xml', () => {
	it('should convert xml', async () => {
		
		const bundle = {
			inputData: {
				xml: sample.xml,
			},
		};

		const result = await appTester(
			App.creates['convert_xml'].operation.perform,
			bundle
		);
		result.should.not.be.an.Array();

	});
});