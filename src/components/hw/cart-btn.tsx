import { useState } from 'react';
import style from './styles/product.module.css';

type CountProps = {
  countValue: (newValue: number) => void;
};

export default function CartBtn({ countValue }: CountProps) {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      countValue(newCount);
    }
  };

  const handlePlus = () => {
    const newCount = count + 1; //변수를 따로 선언해준 후에 넣으니까
    setCount(newCount);
    countValue(newCount);
  };

  return (
    <div className={style['cart-button']}>
      <button onClick={handleMinus}>-</button>
      {count}
      <button onClick={handlePlus}>+</button>
    </div>
  );
}
