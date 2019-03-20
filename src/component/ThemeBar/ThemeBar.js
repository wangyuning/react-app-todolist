import React from 'react';
import ThemeContext from '../../ThemeContext'

const ThemeBar = () => {
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    return (
                        <div
                            style={{background: theme.bgColor, color: theme.color}}
                        >
                            <h5>局部修改主题</h5>
                            <button
                                className={ theme.classnames }
                            >按钮
                            </button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
};

export default ThemeBar;