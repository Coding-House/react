var CommentsBox = React.createClass({
  getInitialState: function() {
    return ({
      data: ["This is the first comment", "This is the second comment"],
      currentComment: ''
   });
  },
  changeData: function(event) {
    console.log("changeData function", event.target.value);
    this.setState({currentComment: event.target.value});
    return false;
  },
  handleSubmit: function(event) {
    var currentData = this.state.data;
    // var newData = currentData;
    // newData.push(this.state.currentComment);
    var newData = currentData.concat([this.state.currentComment]);
    var newComment = '';
    this.setState({currentComment: newComment, data: newData});
    return false;
  },
  render: function() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.currentComment} onChange={this.changeData} />
          <button type="submit">Send</button>
        </form>

        <CommentsList data={this.state.data} />
      </div>
    );
  }
});

var CommentsList = React.createClass({
  render: function() {
    var content = this.props.data.map(function(element, i) {
      return (
        <SingleComment commentText={element} key={i}/>
      );
    });
    return (
      <div id="commentsList">
        {content}
      </div>
    );
  }
});

var SingleComment = React.createClass({
  render: function() {
    return (
      <div className="one-comment">
        {this.props.commentText}
      </div>
    );
  }
});

React.render(
  <CommentsBox />,
  document.getElementById('main')
);
