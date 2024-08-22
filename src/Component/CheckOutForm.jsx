/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CheckOutForm = ({ pause, id }) => {
  console.log(pause);
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (amount > 0) {
      axiosSecure
        .post("/create-payment-intent", { donation: amount })
        .then((res) => {
          console.log("Client Secret fetched:", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
          console.error("Error fetching client secret:", err);
          setError("Failed to fetch client secret");
        });
    }
  }, [axiosSecure, amount]);

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
      return;
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }

    if (!clientSecret) {
      console.error("Client secret is empty");
      setError("Client secret is not available.");
      return;
    }

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
      console.log("Confirm error", confirmError);
      setError(confirmError.message);
    } else {
      console.log("Payment intent", paymentIntent);
      let danateMoney = 0;
      if (paymentIntent.status === "succeeded") {
        const amount = paymentIntent.amount;
        danateMoney = paymentIntent.amount;
        const donate_person_email = user.email;
        const donate_person_name = user.displayName;
        const donate_details = {
          amount,
          donate_person_email,
          donate_person_name,
          danateMoney,
        };
        axiosSecure
          .patch(`/campaigndonateUpdate/${id}`, donate_details)
          .then((res) => {
            console.log(res.data);
          });
        console.log("Transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        toast.success("Payment Succesfull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const handleAmountChange = (event) => {
    const value = parseFloat(event.target.value);
    setAmount(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Donation Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        min="0"
        step="0.01"
        value={amount}
        onChange={handleAmountChange}
        className="input input-bordered mb-7 w-full"
      />
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#ff4880",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {pause && <p className="text-red-800 mt-5">The donation is paused </p>}
      <button
        type="submit"
        className="btn mt-7 flex justify-center mx-auto px-10 bg-[#ff4880] text-white font-bold hover:text-black "
        disabled={!stripe || pause}
      >
        Donate
      </button>
      <div className="p-5">
        <p className="text-red-500">{error}</p>
        <p className="text-green-500">Your Transaction Id: {transactionId}</p>
      </div>
    </form>
  );
};

export default CheckOutForm;
