import React from 'react';
import {
  ListItemIcon,
  ListItemText,
  MenuList,
  MenuItem,
  Paper
} from '@material-ui/core';

const Menu = ({menuItems, selectedMenuItem, selectMenuItem}) => {
  return (
    <Paper>
      <MenuList>
        {menuItems.map(item => {
          return (
            <MenuItem
              selected={selectedMenuItem === item.key}
              onClick={() => selectMenuItem(item.key)}
              key={item.key}>
              <ListItemIcon className='menu-icon'>
                <item.icon/>
              </ListItemIcon>
              <ListItemText classes={{ primary: 'primary' }} inset primary={item.label} />
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
};

export default Menu;
