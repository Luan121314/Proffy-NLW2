import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import style from './style';
import landingImg from '../../assets/images/landing.png';
import studyIcons from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'
import api from '../../services/api';


const Landing = () => {
    const [totalConnections, setTotalConncections] = useState(0);
    useEffect(()=>{
        api.get('connections').then(response =>{
            const {total} = response.data;
            setTotalConncections(total)
        })
    },[]);


    const { navigate } = useNavigation();

    function handleNavigateToGiveCLassesPage() {
        navigate('GiveClasses');
    }
    function handleNavigateToStudyPage() {
        navigate('Study');
    }

    return (
        <View style={style.container} >
            <Image style={style.banner} source={landingImg} />
            <Text style={style.title} >
                Seja bem-vindo {'\n'}
                <Text style={style.titleBold} >O que deseja fazer ? </Text>
            </Text>

            <View style={style.buttonContainer} >

                <RectButton onPress={handleNavigateToStudyPage} style={[style.button, style.buttonPrimary]} >
                    <Image source={studyIcons} />
                    <Text style={style.buttonText} >Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToGiveCLassesPage}
                    style={[style.button, style.buttonSecondary]} >
                    <Image source={giveClassesIcon} />
                    <Text style={style.buttonText} >Dar aula</Text>
                </RectButton>

            </View>

            <Text style={style.totalConnections} >
                Total de {totalConnections} de conexões realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing; 