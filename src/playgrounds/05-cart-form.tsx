import { ReactEventHandler, useState } from 'react';
import Product from './../components/hw/product';
import style from './../components/hw/styles/product.module.css';

const Products = [
  {
    name: '1A 우유 900ml',
    price: 1880,
    img: 'cart/image2.png',
    total: 1880,
  },
  {
    name: '맛있는 콩나물 500g',
    price: 1280,
    img: 'cart/image3.png',
    total: 1280,
  },
  {
    name: '고소한 두부',
    price: 2280,
    img: 'cart/image4.png',
    total: 2280,
  },
];

function CartForm() {
  const [sumProducts, setSumProducts] = useState(Products);

  const handleTotal = (name: string, total: number) => {
    const newTotal = sumProducts.map((pd) =>
      pd.name === name ? { ...pd, total } : pd
    );

    setSumProducts(newTotal);

    // Products.map((pd) => {
    //   if (pd.name === name) {
    //     pd.total = total;
    //   }
    // });
    // 지금 Products 값 자체가 useState로 관리되는 상태가 아니다
    // 그래서 map 으로 total을 변경해도 React가 변경을 감지하지 못한다
  };

  const total = sumProducts.reduce((sum, pd) => {
    return sum + pd.total;
  }, 0);

  const formatTotal = new Intl.NumberFormat('en-US').format(total);

  return (
    <div className={style['box-wrapper']}>
      <h2>장바구니</h2>
      <hr />
      {Products.map((pd, index) => (
        <Product
          key={index}
          name={pd.name}
          price={pd.price}
          src={pd.img}
          totalPrice={handleTotal}
        />
      ))}
      <hr />
      <p>구매 총액: {formatTotal}원</p>
    </div>
  );
}

export default CartForm;
