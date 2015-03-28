// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//       </div>
//     );
//   }
// });


var CommentsBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <form>
          <UserInput />
        </form>

        <div id="commentsList">
          <div className="one-comment">
            this is a test comment
          </div>
          <div className="one-comment">
            this is a test comment
          </div>
        </div>
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

React.render(
  <CommentsBox />,
  document.getElementById('main')
);
