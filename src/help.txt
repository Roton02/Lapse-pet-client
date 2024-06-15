// CheckOutForm.jsx
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const CheckOutForm = () => {
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");

  // CheckOutForm.jsx
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const totalPrice = 100;

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }
    // CheckOutForm.jsx er handleSubmit() er moddhe
    //  confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm error");
    } else {
      console.log("Payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transiction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // payment successfully hole payment er all information gulo DB te add korbo
        // const payment = {
        //   email: user.email,
        //   price: totalPrice,
        //   transactionId: paymentIntent.id,
        //   date: new Date(), // utc date convert. use moment js to
        //   status: "pending",
        // };

        // const res = await axiosSecure.post("/payments", payment);
        // console.log("Payment saved", res.data);
      }
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      >
        {" "}
      </CardElement>

      <button
        type="submit"
        className="btn btn-secondary mt-5"
        disabled={!stripe}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      <p className="text-green-500">Your Transaction Id: {transactionId}</p>;

    </form>
  );
};

export default CheckOutForm;
