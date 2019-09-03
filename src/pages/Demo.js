import React, { Component } from 'react';
import PropTypes from 'prop-types'


import FragmentDemo from './FragmentDemo.js';
import ContextDemo from './ContextDemo.js';





class Demo extends Component{

    getChildContext(){
        return{
            color:"red"
        }
    }

    render(){
        return(
            <div>
                {/*<ul>*/}
                    {/*<FragmentDemo/>*/}
                {/*</ul>*/}

                <ContextDemo>
                </ContextDemo>
            </div>


        )

    }




}

// 用于传递上下文内容
Demo.childContextTypes= {
    color: PropTypes.string
}

export default Demo;
