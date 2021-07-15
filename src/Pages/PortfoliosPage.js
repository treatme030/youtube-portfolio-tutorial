import React from 'react';
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItem from '../Components/MenuItem';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';

//값이 중복되지 않도록
const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

const PortfoliosPage = () => {
    const [categories, setCategories] = useState(allCategories);
    const [menu, setMenu] = useState(portfolios);

    const handleFilter = (category) => {
        if(category === 'All'){
            setMenu(portfolios)
            return;
        }
        const filteredData = portfolios.filter(item => item.category === category)
        setMenu(filteredData)
    }

    return (
        <div className="PortfoliosPage">
            <Title title={'Portfolios'} span={'Portfolios'}/>
            <div className="portfolios-data">
                <Categories categories={categories} handleFilter={handleFilter}/>
                <MenuItem menu={menu}/>
            </div>
        </div>
    );
};

export default PortfoliosPage;