import test from 'ava';
import m from '.';

const onions = ['https://abcdefghijkl1234.onion/', 'http://xmh57jrzrnw6insl.onion/', 'https://facebookcorewwwi.onion/'];

test('Active onion links', async t => {
	const activeOnions = await m(onions);
	t.deepEqual(activeOnions, onions.slice(1));
});