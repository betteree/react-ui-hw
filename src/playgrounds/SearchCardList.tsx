import SearchedList from '@/components/hwSearch/SearchedList';
import SearchForm from '@/components/hwSearch/SearchForm';
import { tm } from '@/utils/tw-merge';

export default function SearchCardList() {
  return (
    <section className={tm('flex flex-col gap-5 items-center')}>
      <h2 className="text-2xl font-medium text-react ">카드 검색 리스트</h2>
      <SearchForm />
      <SearchedList />
    </section>
  );
}
