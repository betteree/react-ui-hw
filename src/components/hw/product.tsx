import style from './styles/product.module.css';
import CartBtn from './cart-btn';

type ProductProps = {
  name: string;
  price: number;
};

function Product({ name, price }: ProductProps) {
  const handleCount = (newValue: number) => {
    console.log(newValue);
  };

  return (
    <section className={style['product-container']}>
      <img src="cart/image2.png" alt="우유" />
      <span>
        <p>{name}</p>
        <p>{price}원</p>
      </span>
      <CartBtn countValue={handleCount} />
    </section>
  );
}

export default Product;
