import React from 'react';
import ContentItem from './ContentItem.js';
import './ContentItems.css';

class ContentItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          img: require('../../../static/img/derivatives/group.png'),
          srcSet: `${require('../../../static/img/derivatives/group.png')}, ${require('../../../static/img/derivatives/group@2x.png')} 2x, ${require('../../../static/img/derivatives/group@3x.png')} 3x`,
          title: 'Derivatives',
          content:
            'Futures provide natural summetry between longs and shorts. This allows traders to gain profits both on bullish and bearish runs without any additional fees.',
        },
        {
          img: require('../../../static/img/leverage/group-10.png'),
          srcSet: `${require('../../../static/img/leverage/group-10.png')}, ${require('../../../static/img/leverage/group-10@2x.png')} 2x, ${require('../../../static/img/leverage/group-10@3x.png')} 3x`,
          title: 'Leverage up to 100×',
          content:
            'Futures trading volume on classic exchangesis 18 times larger thant he spot volumes. Crypto is still immature.',
        },
        {
          img: require('../../../static/img/latencies/group-5.png'),
          srcSet: `${require('../../../static/img/latencies/group-5.png')}, ${require('../../../static/img/latencies/group-5@2x.png')} 2x, ${require('../../../static/img/latencies/group-5@3x.png')} 3x`,
          title: 'Low latencies',
          content:
            'Futures trading volume on classic exchangesis 18 times larger thant he spot volumes. Crypto is still immature',
        },
        {
          img: require('../../../static/img/fees/group.png'),
          srcSet: `${require('../../../static/img/fees/group.png')}, ${require('../../../static/img/fees/group@2x.png')} 2x, ${require('../../../static/img/fees/group@3x.png')} 3x`,
          title: 'Low fees and rebates',
          content:
            '20% of each quarter profit DERx will be spent on buying DCoin back at the market price.',
        },
      ],
    };
  }
  render() {
    let outputItems = this.state.items.map((item, index) => {
      return <ContentItem item={item} key={index} />;
    });
    return <div className="content-items">{outputItems}</div>;
  }
}

export default ContentItems;
