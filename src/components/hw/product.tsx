import style from './styles/product.module.css';
import CartBtn from './cart-btn';

type ProductProps = {
  name: string;
  price: number;
  src: string;
  totalPrice: (name: string, total: number) => void;
};

function Product({ name, price, src, totalPrice }: ProductProps) {
  const handleCount = (newValue: number) => {
    const total = newValue * price;
    totalPrice(name, total);
  };
  const formatPrice = new Intl.NumberFormat('en-US').format(price);

  return (
    <section className={style['product-container']}>
      <img src={src} alt="우유" />
      <span>
        <p>{name}</p>
        <p>{formatPrice}원</p>
      </span>
      <CartBtn countValue={handleCount} />
    </section>
  );
}

export default Product;
