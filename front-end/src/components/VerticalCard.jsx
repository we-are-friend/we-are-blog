import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CustomButton from './CustomButton';
import { urlFor } from 'lib/api';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 324,
      minWidth: '100%',
      minHeight: 200,
      [theme.breakpoints.up('md')]: {
        height: 437,
      },
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
    },
    cardMedia: {
      height: 236,
      borderBottom: `5px solid ${theme.palette.primary.main}`,
      [theme.breakpoints.up('md')]: {
        height: 256,
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
      height: 50,
      overflow: 'hidden',
      maxHeight: 40,

      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
    },
  }),
);
const VerticalCard = ({
  className,
  title = 'title',
  subtitle = 'subtitle',
  image,
  link,
  // date,
  // author,
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
            className={classes.content}
            color="textSecondary"
            component="div"
            variant="body2"
          >
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {link && (
          <CustomButton link={link} variant="text">
            READ MORE
          </CustomButton>
        )}
      </CardActions>
    </Card>
  );
};
export default VerticalCard;
