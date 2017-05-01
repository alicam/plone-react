import React from 'react';
import renderer from 'react-test-renderer';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Tile from './Tile';

jest.mock('draft-js-editor', () => jest.fn(() => <div />));
global.__SERVER__ = true; // eslint-disable-line no-underscore-dangle

const Wrapper = DragDropContext(HTML5Backend)(({ children }) => (
  <div>{children}</div>
));

test('renders a tile component', () => {
  const component = renderer.create(
    <Wrapper>
      <Tile
        content={{ data: '<h1>Hello World!</h1>' }}
        type="Title"
        width={4}
        row={0}
        column={0}
        tile={0}
        selected
        selectTile={() => {}}
        setHovered={() => {}}
        setTileContent={() => {}}
      />
    </Wrapper>,
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
