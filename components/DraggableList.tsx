import {Box} from '@mui/material';
import {ReactElement, useState} from 'react';
import {DraggableListItem} from './DraggableListItem';


interface Props {
  children: ReactElement[] | ReactElement;
  itemDistanceY?: number;
}

export function DraggableList({children, itemDistanceY = 50}: Props) {
  const [items, setItems] = useState(Array.isArray(children) ? children : [children]);

  function updateItemPositions(index: number, restingPositionY: number) {
    const itemsSansUpdatedItem = items.map((item, originalIndex) => ({item, originalIndex}))
      .filter(({originalIndex}) => originalIndex !== index);
    const itemsWithLowerRestingPosition = itemsSansUpdatedItem
      .filter(({originalIndex}) => getRestingPositionY(originalIndex) < restingPositionY)
      .map(({item}) => item);
    const itemsWithGreaterRestingPosition = itemsSansUpdatedItem
      .filter(({originalIndex}) => getRestingPositionY(originalIndex) >= restingPositionY)
      .map(({item}) => item);
    const resortedItems = [...itemsWithLowerRestingPosition, items[index], ...itemsWithGreaterRestingPosition];

    setItems(resortedItems);
  }

  function getRestingPositionY(index: number) {
    return 0 + index * itemDistanceY;
  }

  // TODO: find better way to force react to re-render than to use a random value as the key
  // or set the positions in a different way

  // The position of the box must be set to relative so that the absolute positioning
  // of the list items is relative to the box. The rule for absolute positioning is that
  // it is relative to the closest parent element with position set to absolute or relative.
  return (
    <Box sx={{position: 'relative', height: items.length * itemDistanceY}}>
      {
        items.map((item, i) =>
          <DraggableListItem
            key={Math.random()}
            defaultRestingPositionX={10}
            defaultRestingPositionY={getRestingPositionY(i)}
            onDrop={({restingPositionY}) => updateItemPositions(i, restingPositionY)}
          >
            {item}
          </DraggableListItem>
        )
      }
    </ Box>
  );
}

