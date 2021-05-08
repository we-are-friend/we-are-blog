import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { urlFor } from 'lib/api';

import AuthorSocialMedia from './AuthorSocialMedia';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 324,
      minWidth: '100%',
      minHeight: 200,
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
    },
    cardMedia: {
      height: 236,
      borderBottom: `5px solid ${theme.palette.primary.main}`,
      [theme.breakpoints.up('md')]: {
        height: 325,
      },
    },
    title: {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 1,
      '-webkit-box-orient': 'vertical',
    },
    content: {
      position: 'relative',
      height: 20,
      overflow: 'hidden',
      maxHeight: 20,

      display: '-webkit-box',
      '-webkit-line-clamp': 1,
      '-webkit-box-orient': 'vertical',
    },
  }),
);
const VerticalCard = ({
  className,
  title = 'title',
  subtitle = 'subtitle',
  caption = 'caption',
  social,
  image,
}) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardActionArea>
        <CardMedia
          alt="alt"
          className={classes.cardMedia}
          component="img"
          src={urlFor(image)?.height(300).crop('center').fit('clip').url()}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom className={classes.title} variant="h6">
            {title}
          </Typography>
          <Typography
            gutterBottom
            className={classes.content}
            color="textSecondary"
            component="div"
            variant="body2"
          >
            {subtitle}
          </Typography>
          <Typography
            gutterBottom
            className={classes.content}
            color="textSecondary"
            component="div"
            variant="body2"
          >
            {caption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <AuthorSocialMedia social={social} />
    </Card>
  );
};
export default VerticalCard;
