import React from 'react';
import ReactDOM from 'react-dom';

export const PaypalButtonBase = paypal.Buttons.driver('react', {
  React,
  ReactDOM,
});

export const PaypalButton = () => {
  return (
    <div data-testid="paypal-button">
      <PaypalButtonBase />
    </div>
  );
};

export default PaypalButton;
