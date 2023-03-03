import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
        There are some projects I have created that solve real-life problems
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} projectname={item.projectname} discription={item.discription} videolink={item.videolink}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
