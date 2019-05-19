import React from 'react';
import renderer from 'react-test-renderer';

import Photo from '../../Photo';

it('renders Photo component correctly', () => {
  const tree = renderer.create(<Photo />).toJSON();
  expect(tree).toMatchSnapshot();
});