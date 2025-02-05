import Product from './../components/hw/product';
import style from './../components/hw/styles/product.module.css';

const Products = [
  {
    name: '1A 우유 900ml',
    price: 1000,
    img: 'cart/image2.png',
  },
  {
    name: '맛있는 콩나물 500g',
    price: 1280,
    img: 'cart/image3.png',
  },
  {
    name: '고소한 두부',
    price: 2880,
    img: 'cart/image4.png',
  },
];

function CartForm() {
  return (
    <div className={style['box-wrapper']}>
      <h2>장바구니</h2>
      <hr />
      {Products.map((pd, index) => (
        <Product key={index} name={pd.name} price={pd.price} />
      ))}

      <p>구매 총액:얼마</p>
    </div>
  );
}

export default CartForm;
