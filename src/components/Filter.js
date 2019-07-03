import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.count} Products Found
                </div>
                <div>
                    <label>
                        Order by
                        <select 
                        value={this.props.sort}
                        onChange={this.props.handleChangeSort}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest to Highest</option>
                            <option value="highest">Highest to Lowest</option>
                        </select>
                    </label>

                </div>
                <div>

                </div>
            </div>
        )
    }
}
