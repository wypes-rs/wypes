import test from 'ava'

import { sum } from '../dist'

test('foo', t => {
    t.pass();
});

test('sync function from native code', (t) => {
    const fixture = 42
    t.is(sum(1, 2), 3)
})