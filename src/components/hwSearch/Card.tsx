import { tm } from '@/utils/tw-merge';
import { ColorMoodItem } from './../utils/types';

interface CardProps {
  item: ColorMoodItem;
}

function Card({ item }: CardProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(slug);
  };

  const slug = `/color-mood/${item.id}`;

  return (
    <li
      className={tm(
        'flex items-start gap-3 p-5',
        'bg-gray-100',
        'rounded-[10px]'
      )}
    >
      <figure
        className={tm('size-22 rounded-full', 'relative')}
        style={{
          background: `url(${item.img})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></figure>
      <a
        href={slug}
        className={tm('flex flex-col justify-start gap-0')}
        onClick={handleLink}
      >
        <h4 className="text-[18px] font-semibold">{item.title}</h4>
        <p className="text-sm text-slate-700">{item.description}</p>
        <section className={tm('grid grid-cols-2 gap-1', 'mt-2')}>
          {item.tags.map((tag, index) => (
            <span
              className={tm(
                'border border-gray-300 text-blue-500 rounded-lg p-1'
              )}
              key={index}
            >
              {tag}
            </span>
          ))}
        </section>
      </a>
    </li>
  );
}

export default Card;
