var React = require('react');
var createReactClass = require("create-react-class");

var ActionSheetButton = createReactClass({
  displayName: "ActionSheetButton",
  toggle: function () {
    this.props.setActiveState(!this.props.active);
  },
  render: function () {
    var Title = null;
    if (this.props.title.length > 0) {
      Title = <a className='button'>{this.props.title}</a>;
    }
    return (
      <div onClick={this.toggle}>
        { Title }
        <div>{this.props.children}</div>
      </div>
    );
  }
});

module.exports = ActionSheetButton;
