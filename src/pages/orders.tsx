import { NextPage } from "next";

import IsAuth from "../components/utils/IsAuth";
const orders = () => {
  return (
    <section className='section-orders'>
      <h2>Заказы</h2>
    </section>
  );
};

// TODO: deal with flashing (https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page) and state reset on page refresh

export default IsAuth(orders);
