/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React from 'react';

import { Link } from '@reach/router';

const NavLink = (props: any) => (
  <Link
    exact
    {...props}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      if (!isCurrent || !isPartiallyCurrent) {
      	return;
      }

      return {
        style: {
          textDecoration: 'underline',
          textDecorationColor: '#e0000c'
        }
      };
    }}
  />
);

export default NavLink;