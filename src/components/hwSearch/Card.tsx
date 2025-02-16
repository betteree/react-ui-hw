import { tm } from '@/utils/tw-merge';
import { ColorMoodItem } from './../utils/types';

interface CardProps {
  item: ColorMoodItem;
  onUpdate: (item: ColorMoodItem, isFavorited: boolean) => void;
}

function Card({ item, onUpdate }: CardProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(slug);
  };

  const slug = `/color-mood/${item.id}`;

  return (
    <li className={tm('flex items-center gap-3 ')}>
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
        className={tm('flex flex-col items-start gap-0')}
        onClick={handleLink}
      >
        <h4 className="text-[18px] font-semibold">{item.title}</h4>
        <p className="text-sm text-slate-700">{item.description}</p>
        <section className={tm('grid grid-cols-2 gap-1')}>
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
