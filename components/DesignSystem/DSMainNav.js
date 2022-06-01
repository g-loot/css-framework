import MainNav from '../MainNav/MainNav';
import { useRouter } from 'next/router'

export default function DSMainNav(props) {

  const router = useRouter();

  return (
    <>
    {props.data.sections.map((item, itemIndex) => (
      <div className="surface md:rounded-lg overflow-hidden mb-4" key={itemIndex}>
        <button className='flex items-center py-2 px-4'>
          <span className={`icon icon-16 icon-${item.icon}`}></span>
          <span className='font-headings uppercase text-ui-100'>{item.label}</span>
        </button>
        <div className={`${router.pathname.includes(item.url) ? 'is-active' : ''}`}>
          <div className='border-t border-ui-700'>
            <MainNav items={item.pages.sort((a, b) => a.label.localeCompare(b.label))} style="secondary" />
          </div>
        </div>
      </div>
    ))}
    </>
  )
};