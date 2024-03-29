import { createNewProduct } from "@/utils/functions/apiCalls";
import "./addProductForm.css";
import { TextField } from "@mui/material";
import SubmitBtn from "../submitBtn/submitBtn";

export default function AddProductForm() {
  const createProduct = async (formData) => {
    "use server";
    const body = Object.fromEntries(formData);
    await createNewProduct(body);
  };

  return (
    <div className="column form-container">
      <h1>Add new product</h1>
      <form className="column form" action={createProduct}>
        <TextField label="title" name="title" />
        <TextField label="price" name="price" />
        <TextField type="text" label="img" name="img" />
        <textarea placeholder="Description..." maxLength={200} name="desc" />
        <SubmitBtn text="Add amazing product" />
      </form>
    </div>
  );
}
