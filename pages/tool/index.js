import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { roundDecimal } from '../../lib/utils'

import Sidebar from '../../components/sidebar'
import ToolPanel from '../../components/tool_panel'
import ToolDisplay from '../../components/tool_display'

class Tool extends React.Component
{
  constructor(props)
  {
    super(props);
    this.updateState.bind(this);

    this.ratios = [
      { value: 1.667, label: "3:5 Major Sixth" },
      { value: 1.618, label: "1:1.618 Golden Ratio" },
      { value: 1.6, label: "5:8 Minor Sixth" },
      { value: 1.5, label: "2:3 Perfect Fifth" },
      { value: 1.414, label: "1:/2 Augumented Forth" },
      { value: 1.333, label: "3:4 Perfect Forth" },
      { value: 1.25, label: "4:5 Major Third" },
      { value: 1.2, label: "5:6 Minor Third" },
      { value: 1.125, label: "8:9 Major Second" },
    ];

    this.state = {
      headingFamily: "Inter Black",
      bodyFamily: "IBM Plex Serif",
      baseSize: 18,
      scaleRatio: this.ratios[3].value,
      lineHeight: 1.5,
    };
  }

  updateState = (name, value) =>
  {
    this.setState({ [name]: value });
  }

  render()
  {
    const h1Style = {
      fontFamily: this.state.headingFamily,
      lineHeight: roundDecimal(this.state.lineHeight * 0.75, 2),
      fontSize: roundDecimal(this.state.baseSize * this.state.scaleRatio * 3, 2) + "px",
    };

    const h2Style = {
      fontFamily: this.state.headingFamily,
      lineHeight: roundDecimal(this.state.lineHeight * 0.75, 2),
      fontSize: roundDecimal(this.state.baseSize * this.state.scaleRatio * 2, 2) + "px",
    };

    const h3Style = {
      fontFamily: this.state.headingFamily,
      lineHeight: roundDecimal(this.state.lineHeight * 0.875, 2),
      fontSize: roundDecimal(this.state.baseSize * this.state.scaleRatio, 2) + "px",
    };

    const h4Style = {
      fontFamily: this.state.headingFamily,
      lineHeight: roundDecimal(this.state.lineHeight, 2),
      fontSize: roundDecimal(this.state.baseSize, 2) + "px",
    };

    const pStyle = {
      fontFamily: this.state.bodyFamily,
      lineHeight: roundDecimal(this.state.lineHeight, 2),
      fontSize: roundDecimal(this.state.baseSize, 2) + "px",
    };

    const pSmallStyle = {
      fontFamily: this.state.bodyFamily,
      lineHeight: roundDecimal(this.state.lineHeight, 2),
      fontSize: roundDecimal(this.state.baseSize / this.state.scaleRatio, 2) + "px",
    };

    const pLargeStyle = {
      fontFamily: this.state.bodyFamily,
      lineHeight: roundDecimal(this.state.lineHeight, 2),
      fontSize: roundDecimal(this.state.baseSize * this.state.scaleRatio, 2) + "px",
    };

    return (
      <>
        <Head>
          <title>Typetool 0.1</title>
        </Head>
        <Sidebar>
          <ToolPanel headingFamily={this.state.headingFamily}
                     bodyFamily={this.state.bodyFamily}
                     baseSize={this.state.baseSize}
                     scaleRatio={this.state.scaleRatio}
                     lineHeight={this.state.lineHeight}
                     ratios={this.ratios}
                     updateParent={this.updateState}
                     />
        </Sidebar>
        <ToolDisplay>

          <p style={pLargeStyle}>Spoken by Mr. Betterton.</p>
          <h1 contenteditable="true" style={h1Style}>The Way of the World</h1>
          <p style={pLargeStyle}>A book from <a href="#">Archive.org</a></p>
          <h2 contenteditable="true" style={h2Style}>Prologue</h2>
          <p style={pStyle}>Of those few fools, who with ill stars are curst, Sure scribbling fools, called poets, fare the worst: For they're a sort of fools which fortune makes, And, after she has made 'em fools, forsakes.  With Nature's oafs 'tis quite a diff'rent case, For Fortune favours all her idiot race.  In her own nest the cuckoo eggs we find, O'er which she broods to hatch the changeling kind: No portion for her own she has to spare, So much she dotes on her adopted care.</p>
          <p style={pStyle}>Poets are bubbles, by the town drawn in, Suffered at first some trifling stakes to win: But what unequal hazards do they run!  Each time they write they venture all they've won: The Squire that's buttered still, is sure to be undone.  This author, heretofore, has found your favour, But pleads no merit from his past behaviour.  To build on that might prove a vain presumption, Should grants to poets made admit resumption, And in Parnassus he must lose his seat, If that be found a forfeited estate.</p>
          <h3 contenteditable="true" style={h3Style}>Prologue</h3>
          <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ligula ac nunc placerat cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ex enim, lobortis eget accumsan sit amet, euismod eget ex.</p>
          <h4 style={h4Style}>Heading four {h4Style.fontSize}</h4>
          <p style={pSmallStyle}>Small text { pSmallStyle.fontSize } size with line height of { pSmallStyle.lineHeight }. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ligula ac nunc placerat cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ex enim, lobortis eget accumsan sit amet, euismod eget ex.</p>
          <p>
          <Link href="/">
            <a>Go back</a>
          </Link>
          </p>

        </ToolDisplay>
      </>
    );
  }
}

export default Tool;
