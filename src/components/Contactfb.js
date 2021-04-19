import React, { useState } from "react";
import { db } from "../firebase";

// class Contact extends Component {
//   state = {
//     name: "",
//     email: "",
//     description: "",
//     submitMessage: "",
//     submitMessageTextColor: "",
//   };

//   onChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   onSubmit = (event) => {
//     event.preventDefault();

//     let isSuccessful = true;
//     const { name } = this.state;

//     if (isSuccessful) {
//       this.setState({
//         submitMessage: `Thank you ${name}. I will contact you soon!`,
//         submitMessageTextColor: "text-info",
//       });
//     } else {
//       this.setState({
//         submitMessage: "Oops! Something went wrong. Please try again later :(",
//         submitMessageTextColor: "text-danger",
//       });
//     }
//   };

//   render() {
//     const { submitMessageTextColor, submitMessage } = this.state;

  const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);

      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          alert("Message has been Submitted !!!");
          setLoader(false);
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

        setName("");
        setMessage("");
        setEmail("");



    };
    return (
      <div className="container my-5 py-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">Thank you! </span>for your interest
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form className="px-5 mx-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name *</label>
                <input
                  placeholder="Name"
                  value={name}
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  placeholder="Email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Tell me about your project *
                </label>
                <textarea
                  placeholder="Message"
                  value={message}
                  className="form-control"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-dark float-right"
                style={{ backgroundColor: loader ? "black" : "green"}}
              >
                Let's talk business
              </button>
            </form>
          </div>
        </div>
{/* 
        <div className="py-5 mx-2 text-center">
          <h5 className={submitMessageTextColor}>{submitMessage}</h5>
        </div> */}
      </div>
    );
  }


export default Contact;
