import React, { useState } from 'react';

import DSdata from '../api/designsystem/data.json';
import DSicons from '../api/designsystem/icons.json';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {
  const [filter, setFilter] = useState('');

  return(
  <>
    <div className='flex items-end justify-between mb-2'>
      <h1>
        Icons
      </h1>
      <div className='form-group mb-1'>
        <div className='input-group'>
          <span className='icon icon-zoom'></span>
          <input id='filter'
            name='filter'
            type='text'
            value={filter}
            placeholder='Filter icons'
            onChange={event => setFilter(event.target.value)}
          />
        </div>
      </div>
    </div>

    {DSicons.categories.map((category, categoryIndex) => (
      <div key={categoryIndex}>
        
        <h2 className={`h4 mb-3 mx-2 md:mx-0 ${filter ? 'hidden' : ''}`}>{category.name}</h2>
        <div className='flex flex-wrap justify-stretch gap-2'>
          {category.icons
            .filter(item => {
              if (!filter) return true
              if (item.name.includes(filter.toLowerCase()) || item.tags.includes(filter.toLowerCase())) {
                return true
              }
            })
            .map(item => (
              <div key={item} description={item.keywords} className='surface surface-dimmed rounded-lg text-0 w-32 h-32 inline-flex flex-col justify-center items-center relative cursor-pointer text-ui-300 hover:text-ui-100 transition duration-200' onClick={() => {navigator.clipboard.writeText(item.name)}}>
                <span className={`icon block text-4xl mb-4 icon-${item.name}`}></span>
                <span className='absolute bottom-0 p-2 text-ui-400 text-xs text-center leading-none'>
                  {item.name}
                </span>
              </div>
            ))
          }
        </div>
        <div className={`w-full ${filter ? 'mb-2' : 'mb-8'}`}></div>
      </div>
    ))}
  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;