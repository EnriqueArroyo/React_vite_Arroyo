import "./CartWidget.css";

const CartWidget = () => {
  const imgCart = "../../../public/img/shopping-cart.png";
  return (
    <>
      <div className="cartBox">
        <img src={imgCart} alt="" />
        <p>45</p>
      </div>
    </>
  );
};

export default CartWidget;
