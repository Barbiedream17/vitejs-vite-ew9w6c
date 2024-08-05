import React from 'react';
import { TextInput, Box, List, ListItem, Text } from '@mantine/core';
import { ScanSearch } from 'lucide-react';

export const Command: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const items = ['Item 1', 'Item 2', 'Item 3'].filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <TextInput
        leftSection={<ScanSearch />}
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
      />
      <List>
        {items.length > 0 ? (
          items.map((item, index) => (
            <ListItem key={index}>
              <Text>{item}</Text>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <Text>No results found.</Text>
          </ListItem>
        )}
      </List>
    </Box>
  );
};
