import React from 'react';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '연예'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    }
]

const Categories = ({ onSelect, category }) => {
    return (
        <div className="categoriesBlock">
            {categories.map(c => (
                <div className="category" key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>{c.text}</div>
            ))}
        </div>
    );
};

export default Categories;