import React from "react"

export default class extends React.Component<{ username: string }> {
  static async getInitialProps({ query }) {
    return { username: query.username }
  }

  render() {
    return <div>Hey, {this.props.username}</div>
  }
}
