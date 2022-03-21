import React from 'react'

import styles from './tool_display.module.scss'

class ToolDisplay extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <>
        <div className={styles.tool_display}>
          <div className={styles.tool_display__container}>
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default ToolDisplay;
