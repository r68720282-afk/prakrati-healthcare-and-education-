const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    setSuccess("");

    const response = await axios.post(
      "https://prakrati-healthcare-and-education-1.onrender.com/api/career-applications",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        position: form.position,
        experience: form.experience,
      }
    );

    console.log("Success:", response.data);

    setSuccess("Application submitted successfully.");

    setForm({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
    });
  } catch (err) {
    console.error("Status:", err.response?.status);
    console.error("Data:", err.response?.data);
    console.error("Message:", err.message);

    alert(
      err.response?.data?.message ||
      "Failed to submit application."
    );
  } finally {
    setLoading(false);
  }
};
