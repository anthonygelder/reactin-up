import React from 'react'
import styled from 'styled-components'

const BlueBox = styled.div`
    border: solid 5px black;
    color: blue;
    font-size: 30px;
    width: 40%;

    &:hover {
        background-color: green;
    }

    @media screen and (max-width: 800px) {
        width: 20%;
    }

    .big-header {
        font-size: 60px;
    }
`
const Container = styled.div`
    border: solid 5px red;
    padding: 10px;
    display: flex;
`

const InnerContainer = styled(Container)`
    border: solid 5px yellow;
    padding: 50px;
    background-color: ${props => props.color}
`


function Box(props) {
    console.log(props)
    return (
        <Container>
            <InnerContainer>
                <BlueBox>   
                    <h2 class='big-header'>This is the box component.</h2>
                </BlueBox>
            </InnerContainer>
            <BlueBox>
                <h2>This is the box component.</h2>
            </BlueBox>
        </Container>
    )
}

export default Box