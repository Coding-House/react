var Game = React.createClass({
  getInitialState: function() {
    return {currentNumberOfStars: 0, currentSelectedNumbers: []};
  },
  generateRandomNumber: function() {
    return Math.floor(Math.random() * 11 + 2);
  },
  drawStars: function() {
    this.setState({currentNumberOfStars: this.generateRandomNumber()});
  },
  changeSelectedNumber: function(number) {
    var newSelectedNumbers = this.state.currentSelectedNumbers.concat([number]);
    this.setState({currentSelectedNumbers: newSelectedNumbers});
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
            <SelectedNumbers selectedNumbers={this.state.currentSelectedNumbers} />
          </div>
        </div>
        <div id="button" className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <button type="button" className="btn btn-default btn-wide" onClick={this.drawStars} >Draw</button>
          </div>
        </div>
        <div id="lower" className="row">
          <NumbersFrame changeSelectedNumbers={this.changeSelectedNumber} />
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

var NumbersFrame = React.createClass({
  selectNumber: function(clickedNumber) {
    this.props.changeSelectedNumbers(clickedNumber);
  },
  render: function() {
    var component = this;
    var content = [1,2,3,4,5,6,7,8,9].map(function(e, i) {
      return (
        <span className="number" key={i} onClick={component.selectNumber.bind('', e)}>{e}</span>
      )
    });
    return (
      <div className="col-sm-12 content text-center">
        {content}
      </div>
    );
  }
});

var SelectedNumbers = React.createClass({
  render: function() {
    var content = this.props.selectedNumbers.map(function(e, i) {
      return (
        <span className="number" key={i}>{e}</span>
      )
    });
    return (
      <div className="content text-center">
        {content}
      </div>
    );
  }
});

React.render(
  <Game />,
  document.getElementById('main')
);
