import React, { useState } from "react";

import DSHead from "../../components/DesignSystem/DSHead";
import Link from "next/link";
import { getLayout } from "../../components/SiteLayout";
import packageFramework from "../../framework/package.json";

const Structure = [
  {
    title: "Home",
    pages: [
      {
        label: "Home",
        url: "home",
        query: "",
        tags: "home, start, index"
      }
    ]
  },
  {
    title: "Profile",
    pages: [
      {
        label: "Profile",
        url: "profile",
        query: "",
        tags: "profile, view, user"
      },
      {
        label: "Profile settings",
        url: "profile-settings",
        query: "",
        tags: "profile, edit, user, settings, form"
      }
    ]
  },
  {
    title: "Teams",
    pages: [
      {
        label: "Teams listing",
        url: "teams",
        query: "",
        tags: "team"
      }
    ]
  },
  {
    title: "Shop",
    pages: [
      {
        label: "Shop listing",
        url: "shop",
        query: "",
        tags: "shop, voucher, riot games, amazon, steam, drkn, ifood, reward"
      }
    ]
  },
  {
    title: "Premium",
    pages: [
      {
        label: "Premium",
        url: "premium",
        query: "",
        tags: "premium,"
      }
    ]
  }
];

const Index = () => {
  const [filter, setFilter] = useState('');
  const [checked, setChecked] = useState(false);

  function SwitchTheme(isChecked, theme) {
    if (isChecked === false) {
      document.body.setAttribute("data-theme", theme);
    } else {
      document.body.setAttribute("data-theme", "");
    }
    setChecked(!checked);
  }

  return (
    <>
      <DSHead title="Welcome" />
      <div className="bg-ui-900 py-16 ">
        <div className="container max-w-md">
          <div className='flex items-end justify-between mb-2'>
            <h1>
              Page listing
            </h1>
            <div className='form-group mb-1'>
              <div className='input-group'>
                <span className='icon icon-zoom'></span>
                <input id='filter'
                  name='filter'
                  type='text'
                  value={filter}
                  placeholder='Search'
                  className='input-sm'
                  onChange={event => setFilter(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={`overflow-hidden ${filter ? 'surface sm:rounded-lg -mb-2' : ''}`}>
            { Structure.map((section, sectionIndex) => (
              <>
                <section className={`${filter ? '' : 'surface sm:rounded-lg mb-2'}`}>
                  <div className={`item ${filter ? 'hidden' : ''}`}>
                    <div className="item-body py-1 px-4">
                      <div className="item-title font-headings text-xl italic text-ui-100">{section.title}</div>
                    </div>
                  </div>
                  <ul className="item-actions-hidden">
                    { section.pages
                      .filter(item => {
                        if (!filter) return true
                        if (item.label.includes(filter.toLowerCase()) || item.tags.includes(filter.toLowerCase())) {
                          return true
                        }
                      }).map(item => (
                      <>
                        <li className={`item border-ui-700 ${filter ? 'border-b' : ''}`}>
                          <div className="item-body pl-8">
                            <div className="item-title text-ui-300">{item.label}</div>
                          </div>
                          <div className="item-actions">
                            <div className="flex gap-2">
                              <Link href={`prototype/${item.url}${item.query ? '?' : ''}${item.query}`}>
                                <a className="button button-sm button-primary">
                                  <span>View item</span>
                                </a>
                              </Link>
                              <Link href={`prototype/${item.url}?ads=true${item.query ? '&' : ''}${item.query}`}>
                                <a className="button button-sm button-secondary">
                                  <span>View with ads</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </>
                    ))}
                    
                  </ul>
                </section>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Index.getLayout = getLayout;

export default Index;
