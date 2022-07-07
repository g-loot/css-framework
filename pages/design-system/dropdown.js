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

    {/* Align to end */}
    <div className='mb-12' id='align-end'>
      <h2 className='h3 mb-3'>
        Align to end
      </h2>
      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown dropdown-end">
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
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ot7yv5sn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>

    {/* Dropdown top */}
    <div className='mb-12' id='dropdown-top'>
      <h2 className='h3 mb-3'>
        Dropdown top
      </h2>
      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown dropdown-top">
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
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/vdsua3qn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>

    {/* Dropdown top / align to end */}
    <div className='mb-12' id='dropdown-top-align-end'>
      <h2 className='h3 mb-3'>
        Dropdown top / align to end
      </h2>
      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown dropdown-top dropdown-end">
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
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/dLc1nvoh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>

    {/* Dropdown left */}
    <div className='mb-12' id='dropdown-left'>
      <h2 className='h3 mb-3'>
        Dropdown left
      </h2>
      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown dropdown-left">
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
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/zn8e1bmg/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>

    {/* Dropdown left / align to end */}
    <div className='mb-12' id='dropdown-left-align-end'>
      <h2 className='h3 mb-3'>
        Dropdown left / align to end
      </h2>
      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown dropdown-left dropdown-end">
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
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/1vao78xp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>

    {/* Dropdown right */}
    <div className='mb-12' id='dropdown-right'>
      <h2 className='h3 mb-3'>
        Dropdown right
      </h2>
      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown dropdown-right">
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
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/056fr2sv/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>

    {/* Dropdown right / align to end */}
    <div className='mb-12' id='dropdown-right-align-end'>
      <h2 className='h3 mb-3'>
        Dropdown right / align to end
      </h2>
      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className="dropdown dropdown-right dropdown-end">
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
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3Ls9kz6e/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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

    {/* Dropdown in navbar */}
    <div className='mb-12' id='in-navbar'>

      <h2 className='h3 mb-3'>
        Dropdown in navbar
      </h2>

      <div className='surface rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex justify-center items-center'>
            <div className='w-full surface surface-ui-700 rounded-xl p-2 flex items-center justify-between'>
              <a href="#" className='text-0 rounded-full bg-ui-800 border border-ui-600 p-1 block'>
                <span className='icon icon-gloot-symbol text-main text-2xl'></span>
              </a>
              <div className="dropdown dropdown-end">
                <figure tabIndex="0" className="avatar avatar-circle avatar-xs">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                  </div>
                </figure>
                <div tabIndex="0" className="dropdown-content bg-ui-600 w-52 p-1">
                  <ul className='menu menu-rounded'>
                      <li><a><span className="icon icon-wallet-43"></span><span>Wallet</span></a></li>
                      <li><a><span className="icon icon-circle-09"></span><span>Public profile</span></a></li>
                      <li><a><span className="icon icon-cogwheel"></span><span>Settings</span></a></li>
                      <li className='separator'></li>
                      <li><a><span className="icon icon-leave"></span><span>Log out</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          <div className='flex-1'>
            <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/378d6x2q/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
          </div>
        </div>
      </div>
    </div>


  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;