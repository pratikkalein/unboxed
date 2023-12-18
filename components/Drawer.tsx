import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ImCross } from "react-icons/im";


type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface TemporaryDrawerProps { 
    children: React.ReactNode
    }

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ children }) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"

      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className='flex items-end justify-end mt-2'><Button onClick={toggleDrawer(anchor, false)} ><ImCross className='text-red-500'/></Button></div>
        {children}
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
            <div className="sticky z-30 mt-3">

          <Button className='text-violet-700' onClick={toggleDrawer(anchor, true)}>Filters</Button>

            </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}            
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;
