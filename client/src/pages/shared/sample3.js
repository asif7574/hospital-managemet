
// update profile


import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFetch } from "../../hooks/useFetch";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";



export const Home = () => {
  
  const [updateMessage, setUpdateMessage] = useState("");
    const [profileData, isLoading, error] = useFetch("/staff/profile");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
//     // Fetch profile data from the API
//     fetch("https://api.example.com/profile") // Replace with your API URL
//       .then((res) => res.json())
//       .then((data) => {
//         setProfileData(data);
//         reset(data); // Set default values in the form
//       });
  // }, [reset]);
console.log("profileData==",profileData);

  // const onSubmit = (formData) => {
    // fetch("https://api.example.com/profile/update", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    // //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.success) {
    //       setUpdateMessage("Profile updated successfully!");
    //     } else {
    //       setUpdateMessage("Failed to update profile. Check your password.");
    //     }
    //   });
  // };
  const onSubmit = async (data) => {
    try {
        console.log(data,'====data');
        
        const response = await axiosInstance({ method: "PUT", url: "/staff/profile-update", data });
        console.log(response, "====response");
        toast.success("Profile updated");
        // navigate(user.profile_route);
    } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
        console.log("error=",error.response.data.message);
        
    }
};

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <form
        className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name */}
        <div className="flex gap-4 mb-4">
          {/* <label className="label">"Name"</label> */}
          <input
            placeholder={profileData?.employeeID || "employeeID"}
            {...register("employeeID")}
            className="input input-bordered w-1/2"
            readOnly
          />
          <input
            placeholder={profileData?.name || "Name"}
            {...register("name", { required: true })}
            className="input input-bordered w-1/2"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            placeholder={profileData?.email || "Email"}
            {...register("email", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <input
            placeholder={profileData?.mobile || "Mobile"}
            {...register("mobile", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <textarea
            placeholder={profileData?.address || "Address"}
            {...register("address")}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* role */}
        <div className="mb-4">
          <input
            placeholder={profileData?.role || "Role"}
            // {...register("role", { required: true })}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-red-500 mt-1">Password is required</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button className="btn btn-primary w-full">UPDATE</button>
        </div>

        {/* Update Message */}
        {updateMessage && (
          <p className="mt-4 text-center font-semibold">{updateMessage}</p>
        )}
      </form>
    </div>
  );
};


