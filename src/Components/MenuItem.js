import React from 'react';

const MenuItem = ({menu}) => {
    return (
        <div className="MenuItem">
            {
              menu.map(item => {
                  return <div key={item.id} className="portfolio">
                      <div className="image-data">
                          <img src={item.image} alt="" />
                          <ul className="hover-items">
                              <li>
                                  <a href={item.link1}>{item.icon1}</a>
                                  <a href={item.link2}>{item.icon2}</a>
                              </li>
                          </ul>
                      </div>
                      <h5>{item.title}</h5>
                      <p>Placeholder paragraphy</p>
                  </div>
              })  
            }
        </div>
    );
};

export default MenuItem;