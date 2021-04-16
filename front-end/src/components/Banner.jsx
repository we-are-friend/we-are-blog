import React, { useMemo } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    button__bar: {
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: 'auto',
      padding: 0,
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '40px',
      width: '100px',
      textAlign: 'center',
      '& ul': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      '& li': {
        listStyle: 'none',
        cursor: 'pointer',
        display: 'inline-block',
        margin: '10px 3px',
        padding: 0,
      },

      '& li button': {
        border: 'none',
        background: theme.palette.primary.main,
        color: 'transparent',
        cursor: 'pointer',
        display: 'block',
        height: theme.spacing(1.5),
        width: theme.spacing(1.5),
        borderRadius: '50%',
      },

      '& li.slick-active button': {
        backgroundColor: theme.palette.common.white,
        height: theme.spacing(2.5),
        width: theme.spacing(2.5),
        borderRadius: '50%',
        border: `4px solid ${theme.palette.primary.main}`,
      },

      '& li button:hover, li button:focus': {
        // background: 'rgba(247, 34, 34, 0.8)',
        outline: 0,
      },

      '& .slick-slide img': {
        border: '5px solid #fff',
        display: 'block',
        margin: 'auto',
      },
    },
  }),
);

const Banner = ({ className }) => {
  const classes = useStyles();
  const settings = useMemo(() => {
    return {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      dotsClass: classes.button__bar,
    };
  }, []);

  return (
    <div className={clsx(classes.root, className)}>
      <Slider height={300} width={300} {...settings}>
        <div>
          <Image
            alt="Mountains"
            className={classes.img}
            height={475}
            layout="responsive"
            src="/images/banner/Banner1.png"
            width={700}
          />
        </div>
        <div>
          <Image
            alt="Mountains"
            height={475}
            layout="responsive"
            src="/images/banner/Banner2.png"
            width={700}
          />
        </div>
        <div>
          <Image
            alt="Mountains"
            height={475}
            layout="responsive"
            src="/images/banner/Banner3.png"
            width={700}
          />
        </div>
      </Slider>
    </div>
  );
};
export default Banner;
