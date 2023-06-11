import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const params = useParams();

  const [mySelectedClasses] = useSelectedClasses();

  const selectedId = mySelectedClasses.find((classItem) => {
    return classItem._id === params.id;
  });
  const price = selectedId?.price;

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-center text-3xl font-semibold my-10">
        Please complete your Payment here
      </h2>
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckoutForm selectedId={selectedId} price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
