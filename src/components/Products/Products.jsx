import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product'

import useStyles from './style'


const products = [
    { id: 1, name:'Samsung Fold 3', description:'Samsung Fold 3 512gb in Silver', price:'$1950', image: 'https://m.media-amazon.com/images/I/61SkymxHYqL._AC_SL1000_.jpg'},
    { id: 2, name:'Lenova Laptop', description:'Lenovo Laptop Yoga ft 12gb ram, i7,1tb SSD', price:'$1500', image: 'https://cutt.ly/pEpCsu8'},
];



const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} m={4} l={2}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>    
    )
    

}

export default Products;