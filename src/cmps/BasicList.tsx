import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ISearchesListProps } from '../interfaces';
import React from 'react';

const SearchesList: React.FC<ISearchesListProps> = ({searches})=> {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 4 }}>
        <List>
            {searches.map((city, index) => (
               <ListItem key={index}>
                  <ListItemText primary={city}></ListItemText>
                </ListItem>
            ))}
        </List>
    </Box>
  );
}

export default SearchesList;