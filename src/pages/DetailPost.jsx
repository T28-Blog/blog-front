import React, { useState, useEffect } from 'react'
import {
    DetailContainer,
    DetailHeader,
    DetailTitle,
    DetailInfo,
    DetailImg,
    DetailWriter,
    DetailDate,
    DetailHits,
    DetailBody
} from 'styles/DetailPostElements'
import { FaEye } from 'react-icons/fa'
import nature from '../assets/nature4.jpeg'
import profile from '../assets/woman.jpg'
import Comments from '../components/Comments'
import { firebaseInstance } from "fbase/Fbase";
import store from 'store/store'

const DetailPost = () => {

    const database = firebaseInstance.database();

    const detailPost = database.ref();

    detailPost.child("posts").child(`post_${post_id}`).get()
        .then((snapshot) => {
            if(snapshot.exists()){
                console.log(snapshot.val())
                // title = snapshot.val().title;
                // content = snapshot.val().content;
                // name = snapshot.val().name;
                // date = snapshot.val().date;
                // hits = snapshot.val().hits;
                store.getState().userInfo.post_id;
            } else {
                console.log('No data available')
            }
        }).catch((error) => {
            console.log(error);
        })

    return (
        <DetailContainer>
            <DetailHeader>
                <DetailTitle></DetailTitle>
                <DetailInfo>
                    <DetailImg img src={profile} alt="profile_image"></DetailImg>
                    <DetailWriter></DetailWriter>
                    <DetailDate></DetailDate>
                    <DetailHits><FaEye/></DetailHits>
                </DetailInfo>
            <hr />
            </DetailHeader>
            <DetailBody>
                <img src={nature} alt="text" width="100%"/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan dui quis
                rhoncus tincidunt. Etiam tincidunt, lectus id sollicitudin faucibus, mauris
                libero rutrum orci, eget lobortis diam tellus ut dolor. Suspendisse in gravida
                sem. Cras non pharetra ipsum, eu egestas leo. Donec libero nisi, aliquam in quam
                et, interdum mattis ex. Vivamus dictum lacinia orci ut sollicitudin. Sed
                scelerisque dictum neque, a sodales tortor aliquam vel. Nunc semper lacinia
                ipsum. Duis sit amet nibh vulputate, ultrices risus ac, dapibus est. Aliquam
                erat volutpat. Nunc luctus feugiat orci, ac accumsan sem venenatis vitae. Nam
                purus mi, ultrices in bibendum et, ultrices non dui. Vivamus lacus urna,
                facilisis ut rutrum in, finibus in quam. Donec nulla velit, lacinia vitae
                fermentum et, gravida semper justo. Donec ultricies arcu at sem maximus, a
                ultricies felis fermentum. Donec et efficitur mauris, nec laoreet dolor. Mauris
                maximus turpis sed mi sodales efficitur. Nulla vel lorem et nulla egestas
                efficitur. Mauris quis eros pharetra, rutrum nisl vitae, pretium felis. Maecenas
                in orci sapien. Sed sollicitudin purus sit amet nunc tincidunt, et rutrum arcu
                scelerisque. Phasellus magna leo, venenatis id eleifend eget, luctus sed dui.
                Maecenas dui enim, ullamcorper vel urna nec, ultricies eleifend mi. Curabitur eu
                cursus lorem, a commodo felis. Cras congue aliquam turpis ac ullamcorper.
                Maecenas nec erat nec nunc hendrerit aliquet. Curabitur dictum interdum
                sollicitudin. Aenean dictum et nisi vitae mattis. Mauris pretium viverra ex,
                vitae rhoncus mi euismod id. Pellentesque eu dapibus nulla. Phasellus accumsan
                tincidunt ornare. Fusce dictum dui et sapien auctor elementum. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Proin laoreet, diam ut tempus
                vestibulum, augue neque laoreet tortor, eget commodo urna ex in eros. Aenean
                vestibulum nulla eu tempor pulvinar. Etiam sed est rhoncus, tincidunt risus non,
                varius orci. Proin eu turpis risus. Sed gravida purus porttitor rutrum
                vestibulum. Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Mauris vulputate dui mattis tortor dignissim, in
                interdum mauris dignissim. Vestibulum vulputate eu dolor mattis imperdiet.
                Phasellus rhoncus, purus et tincidunt mollis, arcu risus semper erat, eget
                consequat urna lectus eget diam. Aenean accumsan rutrum mauris, sit amet
                accumsan sem commodo aliquet. Integer gravida sodales viverra. Phasellus
                tincidunt turpis sem, eget ultrices ante varius a. Donec aliquam laoreet ipsum,
                id tempor neque faucibus at. Curabitur mollis purus metus, at pellentesque neque
                hendrerit id. Nam aliquet ligula non ornare aliquet. Phasellus consequat
                convallis turpis eu porttitor.
            <hr />
            </DetailBody>
            <Comments />
        </DetailContainer>
    )
}

export default DetailPost
