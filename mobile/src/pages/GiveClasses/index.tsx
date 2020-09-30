import React from 'react';
import { View, Text ,ImageBackground, ImageBackgroundBase} from 'react-native';
import style from './style';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses =()=>{
    const {goBack} = useNavigation();

    function handleNavigationBack(){
        goBack();
    }

    return(
        <View style={style.container} >
            <ImageBackground 
            source={giveClassesBgImage} 
            resizeMode='contain'  style={style.content} >
                <Text style={style.title} >Quer ser um Proffy?</Text>
                <Text style={style.description} >
                    Pra começar, você precisa se cadastrar como professor na nossa plataforma web.
                    </Text>
            </ImageBackground>
            <RectButton onPress={handleNavigationBack} style={style.okButton} >
                <Text style={style.okButtonText} >Tudo bem!</Text>

            </RectButton>
        </View>
    )
}

export default GiveClasses