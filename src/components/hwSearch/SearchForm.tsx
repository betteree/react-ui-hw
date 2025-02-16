import { type Ref, useId, useRef, useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { deleteQueryParam, setQueryParam } from '../utils/query-param.tsx';

const getQueryString = () => decodeURIComponent(location.search);

const convertQueryString = (queryArray: string[]) =>
  queryArray.filter(Boolean).join(' ').trim();
interface SearchFormProps {
  query: string;
  ref?: Ref<{ focus: () => void; select: () => void; remove: () => void }>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchForm({ query, ref, setQuery }: SearchFormProps) {
  const searchInputId = useId();

  const words = query
    .split(' ')
    .filter(Boolean)
    .map((word) => word.toLowerCase().trim());
  const isEnabledSearch = words.length > 0;

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSearch = () => {
    if (words.length > 0) {
      setQueryParam(convertQueryString(words));
      setQueryString(getQueryString);
    } else {
      deleteQueryParam();
    }
  };

  const [queryString, setQueryString] = useState(getQueryString);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form className={tm('mb-10')} action={handleSearch}>
        <label htmlFor={searchInputId} className="sr-only">
          카드 검색
        </label>
        <div className={tm('flex gap-1')}>
          <input
            ref={inputRef}
            type="search"
            name="query"
            id={searchInputId}
            value={query}
            onChange={handleQuery}
            placeholder="유저 검색"
            className={tm(
              'rounded-sm px-2.5 py-1',
              'bg-white text-react font-medium',
              'border border-blue-300'
            )}
          />
          <button
            type="submit"
            aria-disabled={!isEnabledSearch}
            className={tm(
              'cursor-pointer opacity-80',
              'grid place-content-center',
              'bg-blue-500 text-white',
              'px-4 py-2 rounded-sm',
              'hover:opacity-100',
              'aria-disabled:cursor-not-allowed'
            )}
          >
            검색
          </button>
        </div>
      </form>
    </>
  );
}
