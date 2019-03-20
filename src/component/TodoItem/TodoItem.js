import React, {Component} from 'react';

//子组件
class TodoItem extends Component {
    //子组件想要和父组件通信，子组件需要调用父组件传过来的方法
    constructor(props) {
        super(props);
        this.state = {};
        this.onhandleDeleteItem = this.onhandleDeleteItem.bind(this);
    }

    onhandleDeleteItem() {
        //ES6变量的结构赋值
        //这里也可以写成 this.props.deleteItem(this.props.index);
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

    render() {
        //ES6变量的结构赋值
        const {content} = this.props;
        return (
            <li onClick={ this.onhandleDeleteItem }> { content } </li>
        );
    }
}

export default TodoItem;