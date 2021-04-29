import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  Typography,
  Paper,
  Box,
  CardContent,
  Card,
} from '@material-ui/core';
import CustomButton from 'src/components/CustomButton';
import AddIcon from '@material-ui/icons/Add';

import { getPaginatedBlogs } from 'lib/api';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderStyle: 'none', // remove border card ??
    },

    paper: {
      padding: theme.spacing(2, 0, 2, 0),
      margin: 'auto',
      maxWidth: '100%',
    },
    imgBorderRight: {
      width: 256,
      height: 256,
      borderRight: `5px solid ${theme.palette.primary.main}`,
    },
    displayRow: {
      display: 'flex',
      flexDirection: 'row',
      //flexWrap: 'wrap',
    },
  }),
);

const HorizontalCard = ({
  blogs,
  className,
  title = 'Title Goes Here',
  subtitle = ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  image = 'image',
  link,
  // date,
  // author,
}) => {
  //console.log(blogs);

  const classes = useStyles();
  return (
    <>
      <Card className={clsx(classes.root)}>
        <Box className={classes.displayRow}>
          <CardContent>
            <Paper className={(classes.paper, classes.imgBorderRight)}>
              <img alt={title} component="img" height="256" src={image} />
            </Paper>
          </CardContent>
          <Box>
            <CardContent>
              <Paper className={classes.paper}>
                <Typography> {title} </Typography>
                <Typography>{subtitle}</Typography>

                <Box m={2}>
                  <CustomButton startIcon={<AddIcon />}>READ MORE</CustomButton>
                </Box>
              </Paper>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </>
  );
};
export default HorizontalCard;

export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
      preview,
    },
    revalidate: 1,
  };
}
