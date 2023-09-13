import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/category.selector.js';

import { CategoryContainer, Title } from './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);

    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <Title className='category-title'>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {
                    products?.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </>
    )

}

export default Category;