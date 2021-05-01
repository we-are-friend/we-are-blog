import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  Typography,
  Box,
  CardContent,
  CardMedia,
  Card,
} from '@material-ui/core';
import CustomButton from 'src/components/CustomButton';

import { getPaginatedBlogs } from 'lib/api';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // borderStyle: 'none', // remove border card ??
    },
    card: { minWidth: 288, maxWidth: 400 },
    cover: {
      minWidth: 132,
      maxWidth: 150,
      backgroundColor: 'red',
      borderRight: `5px solid ${theme.palette.primary.main}`,
    },

    button: {
      display: 'block',
      marginTop: theme.spacing(1),
    },
    displayRow: {
      display: 'flex',
      flexDirection: 'row',
      maxWidth: 400,
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
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Card className={clsx(classes.card)}>
        <Box className={classes.displayRow}>
          <CardMedia
            className={classes.cover}
            image="/static/images/cards/live-from-space.jpg"
            title="Live from space album cover"
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography gutterBottom variant="caption">
              {subtitle}
            </Typography>
            <Typography gutterBottom variant="caption">
              {subtitle}
            </Typography>
            <CustomButton className={classes.button}>READ MORE</CustomButton>
          </CardContent>
        </Box>
      </Card>
    </div>
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
    revalidate: 30,
  };
}
