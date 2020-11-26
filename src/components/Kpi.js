import React from "react"

const Kpi = ({ text, value }) => (
  <div className="kpi">
    <div className="value">{value}</div>
    <div className="text">{text}</div>
  </div>
)

export default Kpi
