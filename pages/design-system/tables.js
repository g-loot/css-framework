import React, {useState} from 'react';

import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  const [StartAnim, setStartAnim] = useState(false);

  function handleStartAnim() {
    
    setStartAnim(true);

    const timer = setTimeout(() => {
      setStartAnim(false)
      
    }, 1000);
    return () => clearTimeout(timer);
  }

  return(
  <>
    <h1 className='mb-2'>
      Tables
    </h1>


    {/* Structure */}
    <div className='mb-12' id='structure'>

      <h2 className='h3 mb-3'>
        Structure
      </h2>

      <div className=''>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
          <div className="flex-1 surface rounded-lg overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Favorite game</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Jérôme Weiss</td>
                  <td>5778816157089792</td>
                  <td>Apex Legends</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>5870578368249856</td>
                  <td>League of Legends</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Kees Dieffenthaller</td>
                  <td>5858640415686656</td>
                  <td>Valorant</td>
                </tr>
              </tbody>
            </table>
          </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/7hfr8stL/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Interactive */}
    <div className='mb-12' id='interactive'>

      <h2 className='h3 mb-3'>
        Interactive
      </h2>

      <div className=''>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
          <div className="flex-1 surface rounded-lg overflow-x-auto">
            <table className="table table-interactive w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Favorite game</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Jérôme Weiss</td>
                  <td>5778816157089792</td>
                  <td>Apex Legends</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>5870578368249856</td>
                  <td>League of Legends</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Kees Dieffenthaller</td>
                  <td>5858640415686656</td>
                  <td>Valorant</td>
                </tr>
              </tbody>
            </table>
          </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/dzrLhose/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Rounded table */}
    <div className='mb-12' id='rounded'>

      <h2 className='h3 mb-3'>
        Rounded table
      </h2>

      <div className=''>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
            <div className="flex-1 overflow-x-auto">
              <table className="table table-rounded w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Favorite game</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Jérôme Weiss</td>
                    <td>5778816157089792</td>
                    <td>Apex Legends</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>5870578368249856</td>
                    <td>League of Legends</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Kees Dieffenthaller</td>
                    <td>5858640415686656</td>
                    <td>Valorant</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/nco8p3ra/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Compact table */}
    <div className='mb-12' id='compact'>

      <h2 className='h3 mb-3'>
        Compact table
      </h2>

      <div className=''>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
            <div className="flex-1 surface rounded-lg overflow-x-auto">
              <table className="table table-comptact w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Favorite game</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Jérôme Weiss</td>
                    <td>5778816157089792</td>
                    <td>Apex Legends</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>5870578368249856</td>
                    <td>League of Legends</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Kees Dieffenthaller</td>
                    <td>5858640415686656</td>
                    <td>Valorant</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/7d4npxru/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* With visual elements */}
    <div className='mb-12' id='with-visual-elements'>

      <h2 className='h3 mb-3'>
        With visual elements
      </h2>

      <div className=''>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
            <div className="flex-1 surface rounded-lg overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>
                      <label className="form-checkbox p-0">
                        <input type="checkbox" name="policy" />
                        <i className="form-icon left-0"></i>
                      </label>
                    </th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Favorite game</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <label className="form-checkbox p-0">
                        <input type="checkbox" name="policy" />
                        <i className="form-icon left-0"></i>
                      </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                      <figure className="avatar avatar-xs avatar-circle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </figure>
                      <div>
                        <div className="font-bold">Jérôme Weiss</div>
                        <div className="text-sm text-ui-300">France</div>
                      </div>
                    </div>
                    </td>
                    <td>
                      <span className='text-sm text-ui-300'>
                        5778816157089792
                      </span>
                    </td>
                    <td>
                      <div className='chip chip-sliced chip-sm bg-game-apexlegends'>
                        <span className='icon icon-game-apexlegends-symbol'></span>
                        <span>Apex Legends</span>
                      </div>
                    </td>
                    <td>
                      <button type='button' className="button button-sm button-secondary rounded-full tooltip tooltip-left" data-tooltip="View details">
                        <span className="icon icon-view"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label className="form-checkbox p-0">
                        <input type="checkbox" name="policy" />
                        <i className="form-icon left-0"></i>
                      </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                      <figure className="avatar avatar-xs avatar-circle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </figure>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm text-ui-300">United States</div>
                      </div>
                    </div>
                    </td>
                    <td>
                      <span className='text-sm text-ui-300'>
                        5870578368249856
                      </span>
                    </td>
                    <td>
                      <div className='chip chip-sliced chip-sm bg-game-leagueoflegends'>
                        <span className='icon icon-game-leagueoflegends-symbol'></span>
                        <span>League of Legends</span>
                      </div>
                    </td>
                    <td>
                      <button type='button' className="button button-sm button-secondary rounded-full tooltip tooltip-left" data-tooltip="View details">
                        <span className="icon icon-view"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label className="form-checkbox p-0">
                        <input type="checkbox" name="policy" />
                        <i className="form-icon left-0"></i>
                      </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                      <figure className="avatar avatar-xs avatar-circle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                      </figure>
                      <div>
                        <div className="font-bold">Kees Dieffenthaller</div>
                        <div className="text-sm text-ui-300">Trinidad and Tobago</div>
                      </div>
                    </div>
                    </td>
                    <td>
                      <span className='text-sm text-ui-300'>
                        5858640415686656
                      </span>
                    </td>
                    <td>
                      <div className='chip chip-sliced chip-sm bg-game-valorant'>
                        <span className='icon icon-game-valorant-symbol'></span>
                        <span>Valorant</span>
                      </div>
                    </td>
                    <td>
                      <button type='button' className="button button-sm button-secondary rounded-full tooltip tooltip-left" data-tooltip="View details">
                        <span className="icon icon-view"></span>
                      </button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/b5v9prdc/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Animation */}
    <div className='mb-12' id='animation'>

      <h2 className='h3 mb-3'>
        Animation
      </h2>

      <div className=''>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
            <div className="flex-1 overflow-x-auto">
              <table className="table table-rounded w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Favorite game</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 1 * 0.05s)'}}>
                    <th>1</th>
                    <td>Jérôme Weiss</td>
                    <td>5778816157089792</td>
                    <td>Apex Legends</td>
                  </tr>
                  <tr className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 2 * 0.05s)'}}>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>5870578368249856</td>
                    <td>League of Legends</td>
                  </tr>
                  <tr className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 3 * 0.05s)'}}>
                    <th>3</th>
                    <td>Kees Dieffenthaller</td>
                    <td>5858640415686656</td>
                    <td>Valorant</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/Lafm6j7z/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Loading */}
    <div className='mb-12' id='loading'>

      <h2 className='h3 mb-3'>
        Loading
      </h2>

      <div className=''>
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
          <div className="flex-1 surface rounded-lg overflow-x-auto">
            <table className="table is-loading w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Favorite game</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Jérôme Weiss</td>
                  <td>5778816157089792</td>
                  <td>Apex Legends</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>5870578368249856</td>
                  <td>League of Legends</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Kees Dieffenthaller</td>
                  <td>5858640415686656</td>
                  <td>Valorant</td>
                </tr>
              </tbody>
            </table>
          </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/4pzo6ejv/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;