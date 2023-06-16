import React, { useContext, useState } from "react";
import FoodContext from "../Context/FoodContext";

const FoodForm = () => {
  const { addFood } = useContext(FoodContext);
  const [submission, setSubmission] = useState({
    protein: "",
    veggies: "",
    fat: "",
    carbs: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSubmission((prevSubmission) => ({
      ...prevSubmission,
      [name]: value
    }));
    console.log("Handle Input")
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addFood(submission);
    setSubmission({
      protein: "",
      veggies: "",
      fat: "",
      carbs: ""
    });
    console.log("Handle Submission")
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Protein (hand):
        <input
          type="text"
          name="protein"
          value={submission.protein}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Veggies (clenched fist):
        <input
          type="text"
          name="veggies"
          value={submission.veggies}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Fat (thumb):
        <input
          type="text"
          name="fat"
          value={submission.fat}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Carbs (palm):
        <input
          type="text"
          name="carbs"
          value={submission.carbs}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FoodForm;
