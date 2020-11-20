import React from 'react';
import Text from './Text';

const MediumText = ({children, fontWeight, ...rest}) => {
  return (
    <Text fontWeight="medium" {...rest}>
      {children}
    </Text>
  );
};

export default MediumText;
