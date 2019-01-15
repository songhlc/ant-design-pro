import { Component } from 'react';
class Index extends Component {
  constructor (props) {
    super(props);
    let curlink = sessionStorage.getItem('curmenu') || ''
    this.state = {
      height: '400px',
      framesrc: curlink
    };
  }
  resetIframeHeight = () => {
    var clientHeight = document.body.clientHeight;
    this.setState({
      height: clientHeight - 69,
    });
  };
  componentDidMount () {
    this.resetIframeHeight();
  }
  render () {
    return (
      <div>
        <iframe
          id="frame"
          name="frame"
          width="100%"
          src={ this.state.framesrc }
          frameBorder="0"
          style={ { minHeight: this.state.height } }
        />
      </div>
    );
  }
}
export default Index;
