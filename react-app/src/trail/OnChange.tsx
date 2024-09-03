import { useState } from "react";

const OnChange = () => {
  const [name, setname] = useState("guest");

  const handleChange = (e: any) => {
    setname(e.target.value);
  };
  const [textarea, settextarea] = useState("hi there");

  const handletextarea = (e: any) => {
    settextarea(e.target.value);
  };

  const [payment, setpayment] = useState("");
  const handleselect = (e: any) => {
    setpayment(e.target.value);
  };

  const [shipping, setshipping] = useState("");
  const handleshipping = (e: any) => {
    setshipping(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={(e) => handleChange(e)}></input>
      <p>name:{name}</p>
      <textarea onChange={(e) => handletextarea(e)}></textarea>
      <p>text:{textarea}</p>
      <select onChange={handleselect}>
        <option value="visa">visa</option>
        <option value="mastercard">mastercard</option>
      </select>
      <p>method:{payment}</p>
      <label>
        <input
          type="radio"
          value="pickup"
          onChange={handleshipping}
          checked={shipping === "pickup"}
        ></input>
        pickup
      </label>
      <label>
        <input
          type="radio"
          value="delivery"
          onChange={handleshipping}
          checked={shipping === "delivery"}
        ></input>
        Delivery
      </label>
    </>
  );
};

export default OnChange;
