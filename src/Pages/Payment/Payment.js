import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
function Payment() {
  return (
    <div>
      <div className="mt-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Payment Method</h1>
            <div className="py-6">
              <PayPalScriptProvider>
                <PayPalButtons />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
