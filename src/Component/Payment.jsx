import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = ({pause,id}) => {
  console.log(pause);
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm pause={pause} id={id}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
