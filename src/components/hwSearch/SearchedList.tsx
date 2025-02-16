import { tm } from '@/utils/tw-merge';
import { type ColorMoodItem } from '../utils/types';
import Card from './Card';

interface SearchedListProps {
  query: string;
  list: ColorMoodItem[];
}

function SearchedList({ list, query }: SearchedListProps) {
  const words = query
    .split(' ')
    .filter(Boolean)
    .map((word) => word.toLowerCase().trim());

  const filteredList = list.filter((item) => {
    return words.every((word) => {
      if (
        item.title.toLowerCase().includes(word) ||
        item.description.toLowerCase().includes(word) ||
        item.tags.includes(word)
      ) {
        return true;
      } else {
        return false;
      }
    });
  });

  const filteredCount = filteredList.length;
  const isEmpty = filteredCount === 0;

  return (
    <section className="relative w-full my-8 ">
      <h3 className="sr-only">검색된 리스트</h3>
      {isEmpty && (
        <p className="text-xl text-slate-700 font-semibold text-center">
          &quot;{query}&quot; 검색된 정보가 없습니다.
        </p>
      )}
      {!isEmpty && (
        <ul className={tm('grid grid-cols-3 grid-2 gap-5')}>
          {filteredList.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default SearchedList;
