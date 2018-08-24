import React from "react";
import ContentItem from "./ContentItem.js";

class ContentItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          img: require('../../../static/img/derivatives/group.png'),
          title: "Derivatives",
          content: "Futures provide natural summetry between longs and shorts. This allows traders to gain profits both on bullish and bearish runs without any additional fees."
        },
        {
          img: require('../../../static/img/leverage/group-10.png'),
          title: "Leverage up to 100×",
          content: "Futures trading volume on classic exchangesis 18 times larger thant he spot volumes. Crypto is still immature."
        },
        {
          img: require('../../../static/img/latencies/group-5.png'),
          title: "Low latencies",
          content: "Futures trading volume on classic exchangesis 18 times larger thant he spot volumes. Crypto is still immature"
        },
        {
          img: require('../../../static/img/fees/group.png'),
          title: "Low fees and rebates",
          content: "20% of each quarter profit DERx will be spent on buying DCoin back at the market price."
        }
      ]
    };
  }
  render() {
    let outputItems = this.state.items.map((item, index) => {
      return <ContentItem item={item} key={index} />
    })
    return (
      <div className="content-items">
        { outputItems }
      </div>
    )
  }
}

export default ContentItems;
