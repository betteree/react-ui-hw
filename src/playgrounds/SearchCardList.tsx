import SearchedList from '@/components/hwSearch/SearchedList';
import SearchForm from '@/components/hwSearch/SearchForm';
import { tm } from '@/utils/tw-merge';
import { useRef, useState } from 'react';
import { getQueryParam } from './../components/utils/query-param';
import colorMoodList from '../components/hwSearch/data/list-data';
import { type ColorMoodItem } from '../components/utils/types';
const getQueryState = () => getQueryParam() ?? '';

export default function SearchCardList() {
  const [list, setList] = useState<ColorMoodItem[]>(colorMoodList);

  const handleUpdateList = (item: ColorMoodItem, isFavorited: boolean) => {
    setList(
      list.map((it) => (it.id === item.id ? { ...it, isFavorited } : it))
    );
  };

  const [query, setQuery] = useState(getQueryState);

  const sharedImperativeHandlesRef = useRef<{
    focus: () => void;
    select: () => void;
    remove: () => void;
  }>(null);

  return (
    <section className={tm('flex flex-col gap-5 items-start')}>
      <h2 className="text-2xl font-bold text-react ">Users</h2>
      <SearchForm
        ref={sharedImperativeHandlesRef}
        query={query}
        setQuery={setQuery}
      />
      <SearchedList list={list} query={query} onUpdate={handleUpdateList} />
    </section>
  );
}
