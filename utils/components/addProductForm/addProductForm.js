import { createNewProduct } from "@/utils/functions/apiCalls";
import "./addProductForm.css";
import { TextField } from "@mui/material";
import SubmitBtn from "../submitBtn/submitBtn";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/services/firebase";

export default function AddProductForm() {
  const createProduct = async (formData) => {
    "use server";
    try {
      const files = formData.getAll("images"); // "images" should match the input name
      const images = await Promise.all(
        files.map(async (file) => {
          const imgRef = ref(
            storage,
            `images/${formData.get("title")}/${file.name}`
          );
          await uploadBytes(imgRef, file);
          return getDownloadURL(imgRef);
        })
      );

      const body = Object.fromEntries(formData);
      body["mainImg"] = images[0];
      body["images"] = images;
      await createNewProduct(body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="column form-container">
      <h1>Add new product</h1>
      <form className="column form" action={createProduct}>
        <TextField label="title" name="title" />
        <TextField label="price" name="price" />
        <TextField
          name="images"
          type="file"
          inputProps={{
            multiple: true,
          }}
        />
        <textarea
          placeholder="Description..."
          rows={3}
          maxLength={1000}
          name="desc"
        />
        <SubmitBtn />
      </form>
    </div>
  );
}
