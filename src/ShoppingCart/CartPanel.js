import React, { useState, useEffect } from 'react'
import ShoppingCartData from './ShoppingCartData';
import CartProductPanel from './Product/CartProductPanel';
import SearchPanel from './Search/SearchPanel';
import CartProductCategory from './Category/CartProductCategory';
import classes from './ShoppingCart.module.css';
import Checkout from './Cart/Checkout'
export default function CartPanel() {
    //var ShoppingCartData.CartRepository;
    var cartData = [];
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [currentCategoryId, setCurrentCategoryId] = useState(0);
    const [categoryProducts, setCategoryProducts] = useState(ShoppingCartData.CartRepository.CartCategories);


    const handleFilterTextChange = (filterText) => {
        setFilterText(filterText);


    }

    const handleInStockChange = (inStockOnly) => {
        setInStockOnly(inStockOnly);

    }



    const modifyCartData = () => {

        ShoppingCartData.CartRepository.CartCategories.map((a) => {

            var products = ShoppingCartData.CartRepository.CartProducts.filter((b) => {
                return b.CategoryId == a.CategoryId
                    && (b.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) >= 0 || filterText == "")
                    && (inStockOnly == true ? b.stocked == inStockOnly : true)
                    && (currentCategoryId == 0 ? true : b.CategoryId == currentCategoryId)
            });
            // console.log(products);
            if (products != null) {
                var obj = {
                    category: a, categoryProducts: products
                };
                cartData.push(obj);
            }

        });
        cartData = cartData.filter((a) => {
            return (a.categoryProducts.length > 0)
        });
    }

    const GetCategory = (currentCategory) => {
        setCurrentCategoryId(currentCategory);
    };


    modifyCartData();

    return (
        <>

            <div className={classes.filterProduct+' col-sm-2  pull-left ' } >
                <SearchPanel onFilterTextChange={handleFilterTextChange}
                    onInStockChange={handleInStockChange}></SearchPanel>
                <CartProductCategory key={1} data={categoryProducts} GetCategory={GetCategory}></CartProductCategory>
            </div>
            <div className={classes.contentProduct+' col-sm-9 ' } ><CartProductPanel key={1} data={cartData} ></CartProductPanel></div>





        </>
    )
}
