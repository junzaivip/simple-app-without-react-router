import React, {Component} from 'react';
import PropTypes from 'prop-types'

/***
 *
 * @returns {*}
 * @constructor
 *
 * 当li存在多个时候，需要使用Fragment 包起来
 */



const ContextDemo = (props, context) => {
    return (

       <div>
           {context.color}
       </div>
    )


}

ContextDemo.contextTypes = {
    color: PropTypes.string
}

export default ContextDemo;