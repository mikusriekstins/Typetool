import React from 'react'

class ToolPanel extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleChange.bind(this);
    this.defaultRatio = this.props.ratios[0];
  }

  handleChange = (event) =>
  {
    this.props.updateParent(event.target.name, event.target.value);
  }

  render()
  {
    const ratioOptions = this.props.ratios.map(ratio => {
      return (<option key={ratio.value} value={ratio.value}>{ratio.label}</option>);
    });

    return (
      <>
        <div className="input_group">
          <label>Heading family</label>
          <input type="text"
                 name="headingFamily"
                 placeholder="Helvetica"
                 onChange={this.handleChange}
                 value={this.props.headingFamily} />
        </div>

        <div className="input_group">
          <label>Line height</label>
          <input type="range" min="1" max="2" step=".025"
                 name="headingLineHeight"
                 placeholder="16"
                 />
        </div>

        <div className="input_group">
          <label>Body family</label>
          <input type="text"
                 name="bodyFamily"
                 placeholder="Helvetica"
                 onChange={this.handleChange}
                 value={this.props.bodyFamily} />
        </div>

        <div className="input_group">
          <label>Line height</label>
          <input type="range" min="1" max="2" step=".025"
                 name="lineHeight"
                 placeholder="16"
                 onChange={this.handleChange}
                 value={this.props.lineHeight} />
        </div>


        <div className="input_group">
          <label>Base size</label>
          <input type="number"
                 name="baseSize"
                 placeholder="16"
                 onChange={this.handleChange}
                 value={this.props.baseSize} />
        </div>

        <div className="input_group">
          <label>Scale ratio</label>
          <select name="scaleRatio" 
                  defaultValue={this.defaultRatio}
                  onChange={this.handleChange}
                  >
            { ratioOptions }
          </select>
        </div>

        <div className="input_group">
          <button className="button button--secondary">Reset</button>
          <button className="button">Save snapshot</button>
        </div>
      </>
    );
  }
}

export default ToolPanel;
