import { FaTag } from "react-icons/fa";

const Offers = () => {
    return ( <>
        <h3 className="text-lg font-semibold">Available Offers</h3>
          <li className="list-none">
            <span className="block">
              <span className="font-semibold">
                <FaTag className="inline" /> Bank Offer
              </span>{" "}
              &nbsp;&nbsp;10% off on HDFC Bank Credit Card and Credit/Debit EMI
            </span>
            <span className="block">
              <span className="font-semibold">
                <FaTag className="inline" /> Bank Offer
              </span>{" "}
              &nbsp;&nbsp;5% Cashback on Flipkart Axis Bank Card.
            </span>
            <span className="block">
              <span className="font-semibold">
                <FaTag className="inline" /> Special Price
              </span>{" "}
              &nbsp;&nbsp;Get extra $5 off (price inclusive of cashback/coupon).
            </span>
          </li>
    </> );
}
 
export default Offers;