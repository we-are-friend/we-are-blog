import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  Typography,
  CardContent,
  CardMedia,
  Card,
} from '@material-ui/core';
import CustomButton from 'src/components/CustomButton';
import { urlFor, getPaginatedBlogs } from 'lib/api';
import AuthorSocialMedia from './AuthorSocialMedia';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // borderStyle: 'none', // remove border card ??
    },
    card: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: 156,
    },
    image: {
      minWidth: 120,
      maxWidth: 120,
      height: 156,
      maxHeight: 156,
      borderRight: `5px solid ${theme.palette.primary.main}`,
    },
    button: {
      display: 'block',
      marginTop: theme.spacing(1),
    },
    title: {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
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

const HorizontalCard = ({
  className,
  title = 'Title Goes Here',
  subtitle = ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  caption = 'caption',
  social,
  image,
  link,
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Card className={clsx(classes.card)}>
        <CardMedia
          alt="alt"
          className={classes.image}
          component="img"
          src={urlFor(image)?.width(144).crop('center').fit('clip').url()}
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

          {link && (
            <CustomButton link={link} variant="contained">
              READ MORE
            </CustomButton>
          )}
          <AuthorSocialMedia social={social} />
        </CardContent>
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
