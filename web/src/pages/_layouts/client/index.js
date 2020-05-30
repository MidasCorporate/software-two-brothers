import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

// eslint-disable-next-line react/prop-types
export default function LayoutClient({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

LayoutClient.prototype = {
  children: PropTypes.element.isRequired,
};
