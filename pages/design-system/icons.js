import React, { useState } from 'react';

import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import DSicons from '../api/designsystem/icons.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Icons() {
  const [filter, setFilter] = useState('');
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Icons' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>
          <div className='mx-2 md:ml-0 md:pr-4 flex items-end justify-between mb-4'>
            <h1 className='leading-none'>
              Icons
            </h1>
            <div className='form-group'>
              <div className='input-group'>
                <span className='icon icon-right icon-zoom'></span>
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
              <div className='flex flex-wrap gap-2'>
                {category.icons
                  .filter(item => {
                    if (!filter) return true
                    if (item.name.includes(filter) || item.tags.includes(filter)) {
                      return true
                    }
                  })
                  .map(item => (
                    <div key={item} className='surface surface-dimmed rounded-lg text-0 w-32 h-32 inline-flex flex-col justify-center items-center relative cursor-pointer text-ui-300 hover:text-ui-100' onClick={() => {navigator.clipboard.writeText(item.name)}}>
                      <span className={`icon block text-4xl icon-${item.name}`}></span>
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

        </DSStructure>


    </div>
  );
}
