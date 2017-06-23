module.exports = [
  {
  "name":"HelloWorld",
  "description":"A super lame component that says Hello with a custom message.",
  "props":{
    "message":{
      "type":{"name":"string"},
      "required":false,
      "description":"Message to display",
      "defaultValue":{"value":"'World'","computed":false}
    }
  },
    "code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A super lame component that says Hello with a custom message. */\nfunction HelloWorld({message}) {\n  return <div>Hello {message}</div>\n}\n\nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: 'World'\n};\n\nexport default HelloWorld;\n",
    "examples":[
      {
        "name":"ExampleHelloWorld",
        "description":"Custom message",
        "code":"import React from 'react';\nimport HelloWorld from 'ps-react/HelloWorld';\n\n/** Custom message */\nexport default function ExampleHelloWorld() {\n  return <HelloWorld message=\"Pluralsight viewers!\" />\n}\n"
      }
    ]
  },
  {
    "name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nclass ProgressBar extends React.Component {\n  getColor = (percent) => {\n    if (this.props.percent === 100) return 'green';\n    return this.props.percent > 50 ? 'lightgreen' : 'red';\n  }\n\n  getWidthAsPercentOfTotalWidth = () => {\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\n  }\n\n  render() {\n    const {percent, width, height} = this.props;\n    return (\n      <div style={{border: 'solid 1px lightgray', width: width}}>\n        <div style={{\n          width: this.getWidthAsPercentOfTotalWidth(),\n          height,\n          backgroundColor: this.getColor(percent)\n        }} />\n      </div>\n    );\n  }\n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number.isRequired,\n\n  /** Bar width */\n  width: PropTypes.number.isRequired,\n\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  height: 5\n};\n\nexport default ProgressBar;\n",
  "examples":[
    {"name":"Example100Percent","description":"100%progress","code":"import React from 'react';\nimport ProgressBar from 'ps-react/ProgressBar';\n\n/** 100%progress */\nexport default function example100Percent() {\n  return <ProgressBar percent={100} width={150} height={20} />\n}\n"},
    {"name":"Example10Percent","description":"10%progress","code":"import React from 'react';\nimport ProgressBar from 'ps-react/ProgressBar';\n\n/** 10%progress */\nexport default function example10Percent() {\n  return <ProgressBar percent={10} width={150} />\n} \n"},
    {"name":"Example70Percent","description":"70%progress","code":"import React from 'react';\nimport ProgressBar from 'ps-react/ProgressBar';\n\n/** 70%progress */\nexport default function example70Percent() {\n  return <ProgressBar percent={70} width={150} />\n}\n"}
    ]
  }
]
