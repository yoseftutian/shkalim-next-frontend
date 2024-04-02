import { createNewProduct } from "@/utils/functions/apiCalls";
import "./addProductForm.css";
import { TextField } from "@mui/material";
import SubmitBtn from "../submitBtn/submitBtn";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/services/firebase";

export default function AddProductForm() {
  const createProduct = async (formData) => {
    "use server";
    const file = formData.get("img");
    const imgRef = ref(storage, `images/${file.name}`);
    await uploadBytes(imgRef, file);
    const downloadUrl = await getDownloadURL(imgRef);
    const body = Object.fromEntries(formData);
    body["img"] = downloadUrl;

    await createNewProduct(body);
  };

  return (
    <div className="column form-container">
      <h1>Add new product</h1>
      <form className="column form" action={createProduct}>
        <TextField label="title" name="title" />
        <TextField label="price" name="price" />
        <TextField type="file" name="img" />
        <textarea placeholder="Description..." maxLength={200} name="desc" />
        <SubmitBtn />
      </form>
    </div>
  );
}
