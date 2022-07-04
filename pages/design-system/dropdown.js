import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Dropdown
    </h1>


    {/* Structure */}
    <div className='mb-12' id='structure'>

      <h2 className='h3 mb-3'>
        Structure
      </h2>

      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown">
              <label tabIndex="0" className="button button-primary">Click me</label>
              <div tabIndex="0" className="dropdown-content bg-ui-600 w-52 p-1">
                <ul className='menu menu-rounded'>
                  <li><a><span>Item 1</span></a></li>
                    <li><a><span>Item 2</span></a></li>
                    <li><a><span>Item 3</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/czxg1ort/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>

    {/* Open (forced) */}
    <div className='mb-12' id='open-force'>

      <h2 className='h3 mb-3'>
        Open (forced)
      </h2>

      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown dropdown-open">
              <label tabIndex="0" className="button button-primary">Click me</label>
              <div tabIndex="0" className="dropdown-content bg-ui-600 w-52 p-1">
                <ul className='menu menu-rounded'>
                  <li><a><span>Item 1</span></a></li>
                    <li><a><span>Item 2</span></a></li>
                    <li><a><span>Item 3</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/w03vp2bj/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>


    {/* On hover */}
    <div className='mb-12' id='on-hover'>

      <h2 className='h3 mb-3'>
        On hover
      </h2>

      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown dropdown-hover">
              <label tabIndex="0" className="button button-primary">Click me</label>
              <div tabIndex="0" className="dropdown-content bg-ui-600 w-52 p-1">
                <ul className='menu menu-rounded'>
                  <li><a><span>Item 1</span></a></li>
                    <li><a><span>Item 2</span></a></li>
                    <li><a><span>Item 3</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/w03vp2bj/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>


  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;