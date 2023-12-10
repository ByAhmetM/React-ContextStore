import { useContext } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { ProductContext } from "../context/productContext";

const MainPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="container d-flex flex-wrap justify-content-center  justify-content-md-between gap-3 gap-md-4 ">
      {/* veriler gelmediğinde */}

      {!products && <Loading />}

      {/* veriler geldiğinde */}
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MainPage;
