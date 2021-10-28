import React from 'react';

import Button from '../../common/Button';

type ButtonCancelProps = {
  submitForm: () => void
};

const ButtonCancel: React.FC<ButtonCancelProps> = ({ submitForm }) => (
  <Button
    title="ОТМЕНИТЬ"
    width={22}
    fontSize={12}
    paddingVertical={8}
    borderRadius={5}
    marginVertical={2}
    onClick={submitForm}
  />
);

export default ButtonCancel;
