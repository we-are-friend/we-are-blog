import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CustomButton from 'src/components/CustomButton';
import AddIcon from '@material-ui/icons/Add';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Container from '@material-ui/core/Container';
import VerticalCard from 'src/components/VerticalCard';
import PageLayout from 'src/components/PageLayout';

const Demo = () => {
  return (
    <PageLayout>
      <Container>
        <Typography variant="h5">Domo Button</Typography>
        <Box m={2}>
          <CustomButton startIcon={<AddIcon />}>READ MORE</CustomButton>
          <CustomButton startIcon={<PlayArrow />}>WATCH VEDIO</CustomButton>
        </Box>

        <Box m={2}>
          <CustomButton startIcon={<AddIcon />} variant="outlined">
            READ MORE
          </CustomButton>

          <CustomButton startIcon={<PlayArrow />} variant="outlined">
            WATCH VEDIO
          </CustomButton>
        </Box>
        <Box m={2}>
          <CustomButton startIcon={<AddIcon />} variant="text">
            READ MORE
          </CustomButton>
          <CustomButton startIcon={<PlayArrow />} variant="text">
            WATCH VEDIO
          </CustomButton>
        </Box>

        <VerticalCard />
      </Container>
    </PageLayout>
  );
};
export default Demo;
