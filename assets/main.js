import { getData } from "./http.js";

const getProducts = async () => {
  try {
    const productList = await getData(
      "https://fakestoreapi.com/products/categories"
    );
    console.log("ProductList: ", productList);
    const products = await getData("https://fakestoreapi.com/products");
    console.log("products", products);
  } catch (err) {
    console.log("Err: ", err);
  }
};

getProducts();
