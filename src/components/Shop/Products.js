import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "This is a description"
  },
  {
    id: "p2",
    price: 4,
    title: "My Second Book",
    description: "This is a description"
  }
];

const products = DUMMY_PRODUCTS.map((item) => (
  <ProductItem
    key={item.id}
    id={item.id}
    price={item.price}
    description={item.description}
    title={item.title}
  />
));

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
