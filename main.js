var CommentsBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <form>
          <UserInput />
        </form>

        <CommentsList data={this.props.data} />
      </div>
    );
  }
});

var UserInput = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <input type="text" />
        <button type="submit">Send</button>
      </div>
    );
  }
});

var CommentsList = React.createClass({
  render: function() {
    var content = this.props.data.map(function(element) {
      return (
        <SingleComment commentText={element} />
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

var COMMENTS = ["This is the first comment", "This is the second comment"];

React.render(
  <CommentsBox data={COMMENTS} />,
  document.getElementById('main')
);
