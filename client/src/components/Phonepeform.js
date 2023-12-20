import { useState } from "react";


function Phonepeform  ()  {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    var options = {
      key: "rzp_test_FMrM29cOOp5hT2",
      key_secret: "42LuNNsCAfWD0PtUbeaDIyT8",
      amount: amount * 100,
      currency: "INR",
      name: "Sharath App",
      description: name,
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: name,
        email: email,
        contact: number,
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }

    };
    var pay = new window.Razorpay(options);
    pay.open();


  }



  return (
    <div className="main-2 container">
      <div>
        <h1 className="mt-4 fw-bold">Phonepe payment gateway integration</h1>
      </div>
      <form >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            onChange={(event)=>setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Number
          </label>
          <input
            type="text"
            name="number"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
           onChange={(event)=>setNumber(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Number
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
           onChange={(event)=>setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAmount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            className="form-control"
            id="exampleInputAmount"
            aria-describedby="emailHelp"
            onChange={(event)=>setAmount(event.target.value)}
          />
        </div>
        <button type="button" onClick={handleSubmit} className="btn btn-primary">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Phonepeform;
