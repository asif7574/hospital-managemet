useEffect(() => {
    // Fetch medicines from the backend
    axios
      .get("/api/medicines") // Replace with your backend API endpoint
      .then((response) => {
        setMedicines(response.data);
        setFilteredMedicines(response.data);
        const prices = {};
        response.data.forEach((med) => {
          prices[med._id] = med.price; // Assuming backend returns _id and price
        });
        setUnitPrices(prices);
      })
      .catch((err) => console.error(err));
  }, []);


  const response = await axiosInstance({ method: "POST", url: user.login_api, data });
  
  const fetchDrugData = async () => {
      try {
        const response = await axiosInstance({ method: "GET", url: user.drug_route });
        setMedicines(response?.data);
        setFilteredMedicines(response?.data);
        // response.data.forEach((med) => {
        //     prices[med._id] = med.price; // Assuming backend returns _id and price
        //   });
        //   setUnitPrices(prices);
        console.log("respon===", response);
        console.log("medicine===", medicines);
        
    } catch (error) {
        console.log(err)
    } 
};
useEffect(() => {
    fetchDrugData()
  }, []);
  const fetchData2 = async () => {
    try {
        const response = await axiosInstance({
            url: url,
        });
        setTimeout(() => {
            setData(response?.data?.data);
            setIsLoading(false);
        }, 1000);
    } catch (error) {
        setError(error);
    } finally {
        setIsLoading(false);
    }
};


const onSubmit = async (data) => {
    try {
        console.log(data,'====data');
        
        const response = await axiosInstance({ method: "POST", url: user.login_api, data });
        console.log(response, "====response");
        toast.success("Log-in success");
        navigate(user.profile_route);
    } catch (error) {
        toast.error("Log-in failed");
        console.log(error);
    }
};

setTimeout(() => {
    setMedicines(response?.data?.data); 
}, 1000);