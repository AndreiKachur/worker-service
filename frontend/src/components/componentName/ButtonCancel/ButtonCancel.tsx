import React from 'react';

import Button from '../../common/Button';

const ButtonCancel = () => (
  <Button
    title="ОТМЕНИТЬ"
    width={22}
    fontSize={12}
    paddingVertical={8}
    borderRadius={5}
    onClick={() => console.log('click')}
  />
);

export default ButtonCancel;
