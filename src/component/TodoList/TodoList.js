import React, {Component, Fragment} from 'react';
import TodoItem from '../TodoItem/TodoItem'

//定义组件 （大写字母开头） 父组件
class TodoList extends Component {

    //父组件通过属性的形式向子组件传递参数
    //子组件通过接收props接收父组件传过来的参数
    //组件定义后运行的函数
    constructor(props) {
        super(props);
        //react编程的核心思想就是面向数据的编程，通过改变数据来改变dom
        this.state = {
            list: [],
            inputValue: ''
        };
        this.onhandleBtnClick = this.onhandleBtnClick.bind(this);
        this.onhandleInputChange = this.onhandleInputChange.bind(this);
        this.onhandelDeleteItem = this.onhandelDeleteItem.bind(this);
    }

    onhandleBtnClick() {
        if (this.state.inputValue !== '') {
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            })
        }
    }

    onhandleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    onhandelDeleteItem(index) {
        //ES6使用扩展运算符（...）拷贝数组
        const list = [...this.state.list];
        list.splice(index, 1);
        //这里也可以写成this.setState({list：list})
        this.setState({list});
    }

    getTodoListItems() {
        return (
            //ES6 箭头函数
            this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        key={ index }
                        content={ item }
                        deleteItem={ this.onhandelDeleteItem }
                        index={ index }
                    />
                );
            })
        );
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={ this.state.inputValue } onChange={ this.onhandleInputChange }/>
                    <button onClick={ this.onhandleBtnClick }>add</button>
                </div>
                <ul>{ this.getTodoListItems() }</ul>
            </Fragment>
        );
    }
}

export default TodoList;