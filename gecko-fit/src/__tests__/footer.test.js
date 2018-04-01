import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Footer from '../components/footer';

test('Should render Footer correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Footer />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
