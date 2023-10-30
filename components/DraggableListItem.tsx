import { Grid } from '@mui/material';
import { ReactElement, useRef, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props {
  defaultRestingPositionX: number;
  defaultRestingPositionY: number;
  onDrop?: (arg0: {restingPositionX: number, restingPositionY: number}) => void,
  children: ReactElement;
  onButtonUpClick: () => void;
  onButtonDownClick: () => void;
}

export function DraggableListItem({children, onDrop, defaultRestingPositionX, defaultRestingPositionY, onButtonUpClick, onButtonDownClick}: Props) {
  const [restingPositionX, setRestingPositionX] = useState(defaultRestingPositionX);
  const [restingPositionY, setRestingPositionY] = useState(defaultRestingPositionY);

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const touchStartRefX = useRef<number | null>(null);
  const touchEndRefX = useRef<number | null>(null);
  const touchStartRefY = useRef<number | null>(null);
  const touchEndRefY = useRef<number | null>(null);

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    touchEndRefX.current = null;
    touchEndRefY.current = null;

    touchStartRefX.current = e.targetTouches[0].clientX;
    touchStartRefY.current = e.targetTouches[0].clientY;
  }

  function onTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    touchEndRefX.current = e.targetTouches[0].clientX;
    touchEndRefY.current = e.targetTouches[0].clientY;

    setOffsetX(getOffsetX());
    setOffsetY(getOffsetY());
  }

  function onTouchEnd() {
    if(!touchStartRefX.current || !touchEndRefX.current ||
      !touchStartRefY.current || !touchEndRefY.current)
      return;

    const newRestingPositionX = restingPositionX + offsetX;
    const newRestingPositionY = restingPositionY + offsetY;
    setRestingPositionX(newRestingPositionX);
    setRestingPositionY(newRestingPositionY);
    setOffsetX(0);
    setOffsetY(0);

    touchStartRefX.current = null;
    touchStartRefY.current = null;

    touchEndRefX.current = null;
    touchEndRefY.current = null;

    if(onDrop !== undefined)
      onDrop({restingPositionX: newRestingPositionX, restingPositionY: newRestingPositionY});
  }

  function getOffsetX() {
    if(touchStartRefX.current === null || touchEndRefX.current === null)
      return 0;

    return touchEndRefX.current - touchStartRefX.current;
  }

  function getOffsetY() {
    if(touchStartRefY.current === null || touchEndRefY.current === null)
      return 0;

    return touchEndRefY.current - touchStartRefY.current;
  }

  return (
    <div
      style={{
        width: '100%',
        position: 'absolute',
        left: restingPositionX + offsetX,
        top: restingPositionY + offsetY,
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Grid container>
        <Grid item xs={10}>
          {children}
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
          <button onClick={onButtonUpClick}>
            <KeyboardArrowUpIcon />
          </button>
          <button onClick={onButtonDownClick}>
            <KeyboardArrowDownIcon />
          </button>
        </Grid>
      </Grid>
    </div>
  );
}
