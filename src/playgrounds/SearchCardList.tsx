import SearchedList from '@/components/hwSearch/SearchedList';
import SearchForm from '@/components/hwSearch/SearchForm';
import { tm } from '@/utils/tw-merge';
import { useRef, useState } from 'react';
import { getQueryParam } from './../components/utils/query-param';

const getQueryState = () => getQueryParam() ?? '';

export default function SearchCardList() {
  const [query, setQuery] = useState(getQueryState);

  const sharedImperativeHandlesRef = useRef<{
    focus: () => void;
    select: () => void;
    remove: () => void;
  }>(null);

  return (
    <section className={tm('flex flex-col gap-5 items-center')}>
      <h2 className="text-2xl font-medium text-react ">카드 검색 리스트</h2>
      <SearchForm
        ref={sharedImperativeHandlesRef}
        query={query}
        setQuery={setQuery}
      />
      <SearchedList />
    </section>
  );
}
