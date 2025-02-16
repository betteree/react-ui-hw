import { useId } from 'react';

export default function SearchForm() {
  const searchInputId = useId();
  return (
    <form action="">
      <label htmlFor={searchInputId}>카드검색</label>
    </form>
  );
}
