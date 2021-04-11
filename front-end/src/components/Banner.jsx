import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles(() =>
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
    },
  }),
);

const Banner = ({ className }) => {
  const classes = useStyles();
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dotsClass: classes.button__bar,
    // // eslint-disable-next-line react/display-name
    // appendDots: (dots) => <ul>{dots}</ul>,
    // // eslint-disable-next-line react/display-name
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: '30px',
    //       color: 'blue',
    //       border: '1px blue solid',
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
  };
  return (
    <div className={clsx(classes.root, className)}>
      <h2> Single Item</h2>
      <Slider height={300} width={300} {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
export default Banner;
