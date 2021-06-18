import React from 'react'
import styled from 'styled-components'

const BlueBox = styled.div`
    border: solid 5px black;
    color: blue;
`


function Box() {
    return (
        <BlueBox>
            <h2>This is the box component.</h2>
        </BlueBox>
    )
}

export default Box