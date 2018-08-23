import React from "react";
import ContentHeader from "./ContentHeader.js";
import ContentItems from "./ContentItems/ContentItems.js";

class Content extends React.Component {
  render() {
    return (
      <section className="content">
        <ContentHeader />
        <ContentItems />
      </section>
    );
  }
}

export default Content;
