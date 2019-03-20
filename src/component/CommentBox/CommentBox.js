import React, {Component} from 'react';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.onhandleInputChange = this.onhandleInputChange.bind(this);
    }

    onhandleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
        this.addComment = this.addComment.bind(this);
    }

    addComment(comment) {
        if (this.state.inputValue !== '') {
            //写法一
            const {addComment} = this.props
            addComment(comment);
            //写法二
            //this.props.addComment(comment);

            this.setState({
                inputValue: ''
            });
        }
    }

    render() {
        return (
            <div>
                <h5>评论</h5>
                <input
                    type="text"
                    placeholder="请输入评论..."
                    className="input-group"
                    value={ this.state.inputValue }
                    onChange={ this.onhandleInputChange }
                />
                <button
                    className="btn btn-primary"
                    onClick={ (comment) => this.addComment(this.state.inputValue) }
                >留言
                </button>
                <p>共 <span>{ this.props.commentLength }</span> 条留言</p>
            </div>
        )
    }
}

export default CommentBox;
