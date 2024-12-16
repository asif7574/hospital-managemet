import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";

const PrescriptionForm = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      prescription: [
        {
          medicine: "",
          type: "",
          dose_tab: "",
          dose: "",
          duration: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "prescription",
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Send data to the backend
      const response = await axios.post("/api/prescriptions", data);
      alert("Prescription saved successfully!");
    } catch (error) {
      console.error("Error saving prescription:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="card w-full max-w-3xl bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Prescription Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => (
            <div key={item.id} className="mb-6 border p-4 rounded-md">
              <h3 className="font-semibold mb-2">Prescription {index + 1}</h3>
              {/* Medicine */}
              <div className="form-control mb-4">
                <label className="label" htmlFor={`prescription[${index}].medicine`}>
                  <span className="label-text">Medicine</span>
                </label>
                <input
                  id={`prescription[${index}].medicine`}
                  type="text"
                  placeholder="Enter Medicine ID"
                  className="input input-bordered"
                  {...register(`prescription[${index}].medicine`, { required: "Medicine is required" })}
                />
              </div>

              {/* Type */}
              <div className="form-control mb-4">
                <label className="label" htmlFor={`prescription[${index}].type`}>
                  <span className="label-text">Type</span>
                </label>
                <select
                  id={`prescription[${index}].type`}
                  className="select select-bordered"
                  {...register(`prescription[${index}].type`, { required: "Type is required" })}
                >
                  <option value="">Select Type</option>
                  <option value="INJ">INJ</option>
                  <option value="TAB">TAB</option>
                  <option value="SYP">SYP</option>
                  <option value="BOLUS">BOLUS</option>
                </select>
              </div>

              {/* Dose Tab */}
              <div className="form-control mb-4">
                <label className="label" htmlFor={`prescription[${index}].dose_tab`}>
                  <span className="label-text">Dose Tab</span>
                </label>
                <select
                  id={`prescription[${index}].dose_tab`}
                  className="select select-bordered"
                  {...register(`prescription[${index}].dose_tab`, { required: "Dose Tab is required" })}
                >
                  <option value="">Select Dose Tab</option>
                  <option value="OD">OD</option>
                  <option value="BID">BID</option>
                  <option value="TID">TID</option>
                  <option value="QID">QID</option>
                  <option value="Before food">Before Food</option>
                  <option value="After food">After Food</option>
                </select>
              </div>

              {/* Dose */}
              <div className="form-control mb-4">
                <label className="label" htmlFor={`prescription[${index}].dose`}>
                  <span className="label-text">Dose</span>
                </label>
                <input
                  id={`prescription[${index}].dose`}
                  type="text"
                  placeholder="Enter Dose"
                  className="input input-bordered"
                  {...register(`prescription[${index}].dose`, { required: "Dose is required" })}
                />
              </div>

              {/* Duration */}
              <div className="form-control mb-4">
                <label className="label" htmlFor={`prescription[${index}].duration`}>
                  <span className="label-text">Duration</span>
                </label>
                <input
                  id={`prescription[${index}].duration`}
                  type="text"
                  placeholder="Enter Duration"
                  className="input input-bordered"
                  {...register(`prescription[${index}].duration`, { required: "Duration is required" })}
                />
              </div>

              {/* Remove Button */}
              <button
                type="button"
                className="btn btn-error"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Add Prescription Button */}
          <div className="form-control mt-4">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                append({ medicine: "", type: "", dose_tab: "", dose: "", duration: "" })
              }
            >
              Add Another Prescription
            </button>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionForm;






// modal







import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";

const PrescriptionForm = () => {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      prescription: [
        {
          medicine: "",
          type: "",
          dose_tab: "",
          dose: "",
          duration: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "prescription",
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Send data to the backend
      const response = await axios.post("/api/prescriptions", data);
      alert("Prescription saved successfully!");
      reset(); // Reset the form after successful submission
      setIsModalOpen(false); // Close the modal
    } catch (error) {
      console.error("Error saving prescription:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Add Prescription Button */}
      <button
        className="btn btn-primary"
        onClick={() => setIsModalOpen(true)}
      >
        Add Prescription
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-6">
              Add Prescription
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {fields.map((item, index) => (
                <div key={item.id} className="mb-6 border p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Prescription {index + 1}</h3>
                  {/* Medicine */}
                  <div className="form-control mb-4">
                    <label className="label" htmlFor={`prescription[${index}].medicine`}>
                      <span className="label-text">Medicine</span>
                    </label>
                    <input
                      id={`prescription[${index}].medicine`}
                      type="text"
                      placeholder="Enter Medicine ID"
                      className="input input-bordered"
                      {...register(`prescription[${index}].medicine`, { required: "Medicine is required" })}
                    />
                  </div>

                  {/* Type */}
                  <div className="form-control mb-4">
                    <label className="label" htmlFor={`prescription[${index}].type`}>
                      <span className="label-text">Type</span>
                    </label>
                    <select
                      id={`prescription[${index}].type`}
                      className="select select-bordered"
                      {...register(`prescription[${index}].type`, { required: "Type is required" })}
                    >
                      <option value="">Select Type</option>
                      <option value="INJ">INJ</option>
                      <option value="TAB">TAB</option>
                      <option value="SYP">SYP</option>
                      <option value="BOLUS">BOLUS</option>
                    </select>
                  </div>

                  {/* Dose Tab */}
                  <div className="form-control mb-4">
                    <label className="label" htmlFor={`prescription[${index}].dose_tab`}>
                      <span className="label-text">Dose Tab</span>
                    </label>
                    <select
                      id={`prescription[${index}].dose_tab`}
                      className="select select-bordered"
                      {...register(`prescription[${index}].dose_tab`, { required: "Dose Tab is required" })}
                    >
                      <option value="">Select Dose Tab</option>
                      <option value="OD">OD</option>
                      <option value="BID">BID</option>
                      <option value="TID">TID</option>
                      <option value="QID">QID</option>
                      <option value="Before food">Before Food</option>
                      <option value="After food">After Food</option>
                    </select>
                  </div>

                  {/* Dose */}
                  <div className="form-control mb-4">
                    <label className="label" htmlFor={`prescription[${index}].dose`}>
                      <span className="label-text">Dose</span>
                    </label>
                    <input
                      id={`prescription[${index}].dose`}
                      type="text"
                      placeholder="Enter Dose"
                      className="input input-bordered"
                      {...register(`prescription[${index}].dose`, { required: "Dose is required" })}
                    />
                  </div>

                  {/* Duration */}
                  <div className="form-control mb-4">
                    <label className="label" htmlFor={`prescription[${index}].duration`}>
                      <span className="label-text">Duration</span>
                    </label>
                    <input
                      id={`prescription[${index}].duration`}
                      type="text"
                      placeholder="Enter Duration"
                      className="input input-bordered"
                      {...register(`prescription[${index}].duration`, { required: "Duration is required" })}
                    />
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    className="btn btn-error"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Add Prescription Button */}
              <div className="form-control mt-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() =>
                    append({ medicine: "", type: "", dose_tab: "", dose: "", duration: "" })
                  }
                >
                  Add Another Prescription
                </button>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary w-full">
                  Submit
                </button>
              </div>
            </form>
            {/* Close Modal Button */}
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrescriptionForm;



///


import React from 'react';
import { useForm } from 'react-hook-form';
import 'daisyui/dist/full.css';

const PatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can replace this with an API call to save the data
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Patient Details</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="input input-bordered"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="input input-bordered"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          {/* Mobile */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Mobile</span>
            </label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="input input-bordered"
              {...register('mobile', {
                required: 'Mobile number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Invalid mobile number',
                },
              })}
            />
            {errors.mobile && (
              <span className="text-red-500 text-sm">{errors.mobile.message}</span>
            )}
          </div>

          {/* Address */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <textarea
              placeholder="Enter address"
              className="textarea textarea-bordered"
              {...register('address', { required: 'Address is required' })}
            ></textarea>
            {errors.address && (
              <span className="text-red-500 text-sm">{errors.address.message}</span>
            )}
          </div>

          {/* Sex */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Sex</span>
            </label>
            <select
              className="select select-bordered"
              {...register('sex', { required: 'Please select sex' })}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.sex && (
              <span className="text-red-500 text-sm">{errors.sex.message}</span>
            )}
          </div>

          {/* Age */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              type="number"
              placeholder="Enter age"
              className="input input-bordered"
              {...register('age', {
                required: 'Age is required',
                min: {
                  value: 0,
                  message: 'Age cannot be negative',
                },
              })}
            />
            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;



//pharmacy



import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";

const BillingPage = () => {
  const [medicineList, setMedicineList] = useState([]); // Medicines fetched from backend
  const [totalAmount, setTotalAmount] = useState(0); // Total bill amount

  // React Hook Form setup
  const { register, control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      medicines: [{ medicineId: "", quantity: 1, price: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "medicines",
  });

  // Fetch medicine list from backend
  useEffect(() => {
    axios
      .get("/api/medicines") // Replace with your API endpoint
      .then((response) => {
        setMedicineList(response.data);
      })
      .catch((error) => console.error("Error fetching medicines:", error));
  }, []);

  // Watch form values to dynamically update total amount
  const watchFields = watch("medicines");

  useEffect(() => {
    const total = watchFields.reduce((sum, item) => {
      const medicine = medicineList.find((m) => m._id === item.medicineId);
      const price = medicine ? medicine.price : 0;
      return sum + price * item.quantity;
    }, 0);
    setTotalAmount(total);

    // Update price fields dynamically
    watchFields.forEach((item, index) => {
      const medicine = medicineList.find((m) => m._id === item.medicineId);
      if (medicine) setValue(`medicines.${index}.price`, medicine.price);
    });
  }, [watchFields, medicineList, setValue]);

  // Submit handler
  const onSubmit = (data) => {
    console.log("Final Bill:", data, "Total Amount:", totalAmount);
    alert("Bill Generated Successfully!");
  };

  return (
    <div className="p-5 bg-base-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-5 text-primary">Pharmacy Billing Software</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Medicine</th>
                <th>Quantity</th>
                <th>Price (₹)</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => {
                const selectedMedicine = medicineList.find(
                  (m) => m._id === watch(`medicines.${index}.medicineId`)
                );
                const price = selectedMedicine ? selectedMedicine.price : 0;

                return (
                  <tr key={field.id}>
                    <td>
                      <select
                        className="select select-bordered w-full"
                        {...register(`medicines.${index}.medicineId`)}
                      >
                        <option value="">Select Medicine</option>
                        {medicineList.map((medicine) => (
                          <option key={medicine._id} value={medicine._id}>
                            {medicine.drug_name} ({medicine.brand_name})
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min="1"
                        {...register(`medicines.${index}.quantity`)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        value={price}
                        readOnly
                        {...register(`medicines.${index}.price`)}
                      />
                    </td>
                    <td>₹ {price * watch(`medicines.${index}.quantity`) || 0}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-error btn-sm"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={() =>
            append({ medicineId: "", quantity: 1, price: 0 })
          }
        >
          Add Medicine
        </button>

        <div className="mt-5 text-right">
          <h3 className="text-xl font-semibold text-secondary">
            Total Amount: ₹ {totalAmount}
          </h3>
          <button type="submit" className="btn btn-success mt-2">
            Generate Bill
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingPage;





//pharmacy 2

import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";

const BillForm = ({ pharmacistId }) => {
  const { register, control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      medicines: [{ medicine: "", quantity: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "medicines",
  });

  const [medicineList, setMedicineList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Fetch medicine list on component mount
  useEffect(() => {
    const fetchMedicines = async () => {
      const response = await axios.get("/api/medicines"); // Endpoint to fetch medicines
      setMedicineList(response.data);
    };
    fetchMedicines();
  }, []);

  const calculateTotal = (data) => {
    const total = data.medicines.reduce((sum, item) => {
      const selectedMedicine = medicineList.find(
        (med) => med._id === item.medicine
      );
      return sum + (selectedMedicine?.price || 0) * item.quantity;
    }, 0);
    setTotalAmount(total);
  };

  const onSubmit = async (data) => {
    const billData = {
      op_number: Date.now(), // Dummy OP number
      medicines: data.medicines,
      total_amount: totalAmount,
      pharmacist: pharmacistId, // Pass pharmacist object ID
    };

    console.log("Bill Data: ", billData);

    // Send data to backend
    await axios.post("/api/bills", billData);
    alert("Bill Created Successfully!");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Pharmacy Bill</h1>
      <form
        onSubmit={handleSubmit((data) => {
          calculateTotal(data);
          onSubmit(data);
        })}
        className="space-y-4"
      >
        <div className="space-y-2">
          <label className="block text-sm font-bold">Medicines</label>
          {fields.map((item, index) => (
            <div key={item.id} className="flex space-x-2 items-center">
              <select
                {...register(`medicines.${index}.medicine`, { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Medicine</option>
                {medicineList.map((med) => (
                  <option key={med._id} value={med._id}>
                    {med.drug_name} ({med.price})
                  </option>
                ))}
              </select>
              <input
                type="number"
                {...register(`medicines.${index}.quantity`, {
                  required: true,
                  min: 1,
                })}
                className="input input-bordered w-24"
                placeholder="Qty"
                defaultValue={1}
              />
              <button
                type="button"
                className="btn btn-error btn-sm"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => append({ medicine: "", quantity: 1 })}
          >
            Add Medicine
          </button>
        </div>

        <div className="font-bold text-lg">
          Total Price: ₹ {totalAmount.toFixed(2)}
        </div>

        <button type="submit" className="btn btn-success">
          Create Bill
        </button>
      </form>
    </div>
  );
};

export default BillForm;
