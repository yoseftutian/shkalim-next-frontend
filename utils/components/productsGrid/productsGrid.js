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

export default function ProductsGrid({ products }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);
  // const { loading } = useLoadingContext();

  const productsToShow = products
    .filter((p) => p.title.includes(search))
    .sort((a, b) => sortProducts(a, b, sortBy))
    .map((product) => <GridItem key={nanoid()} item={product} />);

  return (
    <div className="grid-container">
      <ToolsBar sortBy={sortBy} setSortBy={setSortBy} setSearch={setSearch} />
      <div className="grid">
        {productsToShow.length > 0 ? productsToShow : <p>No Products Found</p>}
      </div>
    </div>
  );
}

function GridItem({ item }) {
  return (
    <Link href={`/speakers/${item._id}`} className="grid-item">
      <Image fill src={item.img} objectFit="contain" loading="lazy" />

      <div>
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <p>{item.desc}</p>
      </div>
      <div className="remove">
        <RemoveCircle />
      </div>
    </Link>
  );
}
