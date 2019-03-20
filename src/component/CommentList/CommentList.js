import React from 'react';

//组件如果没有状态成为stateless无状态组件，组件可以简写成下面的方法。
//comments为props，如果没有props不用写
const CommentList = ({comments}) => {
    return (
        <div>
            <h5>评论列表</h5>
            <ul>
                {
                    comments.map((comment, index) => {
                        return (
                            <li
                                key={ index }
                            >
                                { comment }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CommentList;