import * as React from 'react';

/**
 * This will provide a fetching service for components that need to get data before rendering.
 *
 */
class FetchService extends React.Component {

  state = {
    dataReady: false,
    response: void 0,
    err: void 0
  };

  componentDidMount() {
    this.goFetch();
  }

  async goFetch() {

    const {host, path} = this.props;

    try {

      const URL = encodeURI(host + path);
      const result = await fetch(URL);
      const response = await result.json()
        .catch(err => console.log(err));

      this.setState({
        dataReady: true,
        response: response
      });

    } catch (e) {

      this.setState({
        dataReady: true,
        err: e
      })
    }
  }

  render() {

    // Return a loading screen while retrieving data

    if (!this.state.dataReady) {
      return (
        <h1>LOADING....</h1>
      )
    }

    // passes data into the render attribute for the JSX  <FetchService render((data) => <example data={data}}/>) >
    if (this.state.dataReady) {
      return this.props.render(this.state.response);
    }
  }
}

export default FetchService;
