import {config} from '@/config';
import {assertNever} from '@/shared';
import {Grid, Link, Typography} from '@mui/material';
import {CSSProperties, useState} from 'react';


interface Props {
  textLeft: string;
  textRight: string;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  style?: CSSProperties;
}

const linkStyle: CSSProperties = {textDecoration: 'none'};

enum Side {LEFT, RIGHT}

export function DoubleBulletButton({style, textLeft, textRight, onClickLeft, onClickRight}: Props) {
  const [activeSide, setActiveSide] = useState(Side.LEFT);

  function handleClick(side: Side) {
    setActiveSide(side);

    switch(side) {
      case Side.LEFT: {
        if(onClickLeft !== undefined)
          onClickLeft();
        return;
      }
      case Side.RIGHT: {
        if(onClickRight !== undefined)
          onClickRight();
        return;
      }
      default:
        assertNever(side);
    }
  }

  return (
    <div style={{
      width: '100%',
      borderColor: '#ffffff',
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 40,
      margin: 5,
      ...style,
    }}>
      <Grid container>
        <Grid item xs={6} style={{borderColor: '#ffffff', borderRightWidth: 2, borderStyle: 'solid'}}>
          <Link onClick={() => handleClick(Side.LEFT)} style={linkStyle}>
            <Typography
              style={{margin: 5}}
              color={activeSide === Side.LEFT ? config.colors.enbwOrange : 'white'}
              fontSize={14}
              align="center"
            >
              {textLeft}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link onClick={() => handleClick(Side.RIGHT)} style={linkStyle}>
            <Typography
              style={{margin: 5}}
              color={activeSide === Side.RIGHT ? config.colors.enbwOrange : 'white'}
              fontSize={14}
              align="center"
            >
              {textRight}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
