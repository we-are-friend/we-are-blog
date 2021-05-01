import React from 'react';
import { Typography } from '@material-ui/core';
//import CustomButton from 'src/components/CustomButton';
//import AddIcon from '@material-ui/icons/Add';
//import PlayArrow from '@material-ui/icons/PlayArrow';
import Container from '@material-ui/core/Container';
import PageLayout from 'src/components/PageLayout';
import HorizontalCard from 'src/components/HorizontalCard';

const DemoHorizon = () => {
  return (
    <PageLayout>
      <Container>
        <HorizontalCard />
      </Container>
    </PageLayout>
  );
};
export default DemoHorizon;
