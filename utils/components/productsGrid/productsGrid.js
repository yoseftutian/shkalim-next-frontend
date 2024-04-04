"use client";
import { nanoid } from "nanoid";
import "./productsGrid.css";
import { useState } from "react";
import ToolsBar from "./toolsBar/toolsBar";
// import { useLoadingContext } from "../../contexts/loadingContext";
import Link from "next/link";
import { RemoveCircle } from "@mui/icons-material";
import { sortProducts } from "@/utils/functions/functions";
import Image from "next/image";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { deleteProduct } from "@/utils/functions/apiCalls";

export default function ProductsGrid({ products }) {
  const [productsToDisplay, setProductsToDisplay] = useState(products);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsToShow = productsToDisplay
    .filter((p) => p.title.includes(search))
    .sort((a, b) => sortProducts(a, b, sortBy))
    .map((product) => (
      <GridItem
        key={product._id}
        item={product}
        setSelectedProduct={setSelectedProduct}
      />
    ));

  return (
    <div className="grid-container">
      <ToolsBar sortBy={sortBy} setSortBy={setSortBy} setSearch={setSearch} />
      <div className="grid">
        {productsToShow.length > 0 ? productsToShow : <p>No Products Found</p>}
      </div>
      {selectedProduct && (
        <Dialog open={selectedProduct} onClose={() => setSelectedProduct(null)}>
          <DialogTitle>
            {`Are you sure you want to delete ${selectedProduct.title}`}
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setSelectedProduct(null)}>No</Button>
            <Button
              onClick={async () => {
                await deleteProduct(selectedProduct._id);
                setProductsToDisplay((prev) =>
                  prev.filter((p) => p._id !== selectedProduct._id)
                );
                setSelectedProduct(null);
              }}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

function GridItem({ item, setSelectedProduct }) {
  return (
    <Link href={`/speakers/${item._id}`} className="grid-item">
      <Image
        fill
        src={item.mainImg}
        style={{ objectFit: "contain" }}
        loading="lazy"
      />
      <div>
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <p>{item.desc}</p>
      </div>
      <Button
        className="remove"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setSelectedProduct(item);
        }}
      >
        <RemoveCircle />
      </Button>
    </Link>
  );
}
