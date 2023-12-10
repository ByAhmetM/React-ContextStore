import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  /* toplam fiyat */
  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);
  /* toplam ürün */
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value === ""
      ? alert("kodunuzu giriniz")
      : alert("30% indirim uygulandı");
    e.target[0].value = "";
  };

  return (
    <div className="container">
      <div className="d-flex flex-column gap-5">
        {basket.length === 0 && (
          <p className="text-center my-5">
            <span className="mx-3 text-danger fs-5">
              Öncelikle sepete bir ürün ekleyiniz.
            </span>
            <Link className="btn btn-warning fw-bold" to="/">
              Ürünler{" "}
            </Link>
          </p>
        )}

        {basket.map((product) => (
          <div
            key={product.id}
            className="d-flex justify-content-between gap-3 align-items-center"
          >
            <div
              className="bg-white rounded"
              style={{ width: "100px", height: "100px" }}
            >
              <img
                style={{ width: "100px", height: "100px" }}
                className="object-fit-contain rounded shadow"
                src={product.image}
              />
            </div>

            <h4 className="text-truncate">{product.title}</h4>
            <h3 className="text-success">{product.price}₺</h3>
            <p className="text-sm text-nowrap">Miktar: {product.amount}</p>
            <div className="d-flex gap-3">
              <button
                onClick={() => removeFromBasket(product.id)}
                className="btn btn-danger"
              >
                -
              </button>
              <button
                onClick={() => addToBasket(product)}
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border p-5 rounded my-5 fs-4">
        <p>
          Sepetteki Ürün: <span className="text-warning">{totalAmount}</span>
        </p>
        <p>
          Toplam Fiyat:{" "}
          <span className="text-success">{totalPrice.toFixed(2)}₺</span>
        </p>
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            className="form-control w-25"
            type="text"
            placeholder="Kampanya kodu giriniz"
          />
          <button className="btn btn-primary">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
