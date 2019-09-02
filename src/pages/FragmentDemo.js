import React, {Component, Fragment} from 'react';

/***
 *
 * @returns {*}
 * @constructor
 *
 * 当li存在多个时候，需要使用Fragment 包起来
 */

const FragmentDemo = () => {
    return (

        <Fragment>
            <li>
                FragmentDemo
            </li>
            <li>
                FragmentDemo
            </li>
        </Fragment>
    )


}

export default FragmentDemo;