import * as React from 'react'
const logo = require('@assets/LOGO-fixing.svg')

export default class Overview extends React.Component<{}, {}> {
    render () {
        return (
            <div style={{
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                opacity: 0.3
            }}>
                <img src={logo} alt="Logo" style={{
                    width: 200
                }}/>

                <h1 style={{ color: '#54759A', marginTop: 20 }}>Coming Soon...</h1>
            </div>
        )
    }
}
