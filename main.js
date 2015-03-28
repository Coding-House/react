var Game = React.createClass({
  getInitialState: function() {
    return {currentNumberOfStars: 0};
  },
  generateRandomNumber: function() {
    return Math.floor(Math.random() * 11 + 2);
  },
  drawStars: function() {
    this.setState({currentNumberOfStars: this.generateRandomNumber()});
  },
  render: function() {
    return (
      <div className="game-frame">
        <div id="upper" className="row">
          <div id="stars" className="col-sm-5">
            <div className="content">
              <StarsFrame currentNumberOfStars={this.state.currentNumberOfStars} />
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
            <button type="button" className="btn btn-default btn-wide" onClick={this.drawStars} >Draw</button>
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

var StarsFrame = React.createClass({
  render: function() {
    // var numberOfStars = 7;
    var content = [];

    for (var i=0; i < this.props.currentNumberOfStars; i++) {
      content.push(<i className="fa fa-2x fa-star"></i>);
    }

    return (
      <div>
        {content}
      </div>
    );
  }
});

React.render(
  <Game />,
  document.getElementById('main')
);
