import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleFormSubmit(formData) {
    console.log(formData);
  }
  return (
    <div
      style={{
        width: "400px",
        margin: "45px",
        padding: "0px 25px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Name */}
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <br />

          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name should contain at least 3 characters",
              },

              maxLength: {
                value: 9,
                message: "Name should contain maximum 9 characters",
              },
            })}
            type="text"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "5px",
              marginTop: "5px",
            }}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <br />

          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "5px",
              marginTop: "5px",
            }}
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px" }}>
          <label>phone no</label>
          <br />

          <input
            {...register("phone", { required: "phone no is required" })}
            type="tel"
            placeholder="Enter your phone number"
            style={{
              width: "100%",
              padding: "5px",
              marginTop: "5px",
            }}
          />
          {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
        </div>

        {/* Message */}
        <div style={{ marginBottom: "15px" }}>
          <label>Message</label>
          <br />

          <textarea
            {...register("message", { required: "description is required" })}
            rows="5"
            placeholder="Enter your message"
            style={{
              width: "100%",
              padding: "6px",
              marginTop: "5px",
            }}
          ></textarea>
          {errors.message && <p className="text-red-600">{errors.message.message}</p>}
          
        </div>

        {/* Button */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
