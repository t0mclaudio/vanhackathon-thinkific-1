/* eslint-disable no-unused-vars */
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className="d-flex justify-content-center align-items-center bg-white rounded" style={{ height: 200 }}>
          <p>Something went wrong...</p>
        </div>
      );
    }

    return children;
  }
}
