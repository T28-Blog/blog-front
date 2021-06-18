import React from 'react'
import {
    LoaderContainer,
    Loader,
    LoadingPlane,
    LoadingTitle
} from 'styles/PreLoaderElements'
import airplane from '../assets/airplane.png'

const PreLoader = () => {
    return (
        <LoaderContainer>
            <Loader>
                <LoadingPlane img src={airplane} alt="airplane"></LoadingPlane>
                <LoadingTitle>Loading ...</LoadingTitle>
            </Loader>            
        </LoaderContainer>
    )
}

export default PreLoader
