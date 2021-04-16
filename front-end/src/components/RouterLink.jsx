import React from 'react';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

// eslint-disable-next-line react/display-name
const RouterLink = React.forwardRef((props, ref) => {
  const {
    href,
    as,
    replace,
    scroll,
    shallow,
    prefetch,
    children,
    ...other
  } = props;

  return (
    <NextLink
      passHref
      as={as}
      href={href}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <MuiLink ref={ref} underline="none" {...other}>
        {children}
      </MuiLink>
    </NextLink>
  );
});

export default RouterLink;
