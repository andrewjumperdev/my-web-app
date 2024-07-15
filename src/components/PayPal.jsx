import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ onSuccess }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AcQd9-zuBIv12aQJBLP1pbLwSEe1YL3Hoo0C3dlz070XTDVklGd_SPsgWPSpFOBIMRpLEyvGHrUgNZnb" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '25.00'
              }
            }]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(details => {
            onSuccess(details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
