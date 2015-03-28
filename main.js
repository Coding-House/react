var Game = React.createClass({
  render: function() {
    return (
      <div className="game-frame">
        <div id="upper" className="row">
          <div id="stars" className="col-sm-5">
            <div className="content">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div id="equal" className="col-sm-2">
            =
          </div>
          <div id="display" className="col-sm-5">
          </div>
        </div>
        <div id="button" className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <button type="button" className="btn btn-default btn-wide">Draw</button>
          </div>
        </div>
        <div id="lower" className="row">
          <div className="col-sm-12 content text-center">
            <span className="number">1</span>
            <span className="number">2</span>
            <span className="number">3</span>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <Game />,
  document.getElementById('main')
);
