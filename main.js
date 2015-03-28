var Game = React.createClass({
  render: function() {
    return (
      <div className="game-frame">
      </div>
    );
  }
});

React.render(
  <Game />,
  document.getElementById('main')
);
