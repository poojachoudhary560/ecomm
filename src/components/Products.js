import React, { Component } from 'react'
import util from '../util';

export default class Products extends Component {
    render() {
        const productItems = this.props.products.map(product =>
            <div>
                <div>
                    <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
                        <img src="" alt={product.title} />
                        <p>
                            {product.title}
                        </p>
                    </a>
                    {product.sku}
                    <div>
                        <b>{util.formatCurrency(product.price)}</b>
                        <button
                        onClick={(e) => this.props.handleAddToCart(e, product)}
                        >
                            Add To Cart
                        </button>
                    </div>

                </div>
            </div>
        )
        return (
            <div>
                {productItems}
            </div>
        )
    }
}
