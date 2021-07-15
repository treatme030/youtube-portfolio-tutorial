import React from 'react';

const Categories = ({handleFilter, categories}) => {
    return (
        <div className="buttons">
            {
                categories.map((category, index) => {
                    return <button className="btn-port" type="button" key={index} onClick={() => handleFilter(category)}>{category}</button>
                })
            }
        </div>
    );
};

export default Categories;