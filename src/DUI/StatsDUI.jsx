import React from 'react'
import "../tailwind.css"

const StatsDUI = (props) => {
    return (
        <div className="stats shadow">

            <div className="stat">
                <div className="stat-title">{props.title}</div>
                <div className="stat-value">{props.value}</div>
                <div className="stat-desc">{props.description}</div>
            </div>

        </div>
    )
}

export default StatsDUI