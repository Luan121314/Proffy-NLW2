import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import styles from './style';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string,
    user_id: number
}

interface TeacherItemProps {
    teacher: Teacher,
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setFavorited] = useState(favorited)

    function handleLinkToWhatsapp() {
        api.post('connections',{
            user_id : teacher.user_id
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];
        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            //Remover dos favoritos
            const favoriteIndex = favoritesArray.findIndex((TeacherItem: Teacher) => {
                return TeacherItem.user_id === TeacherItem.user_id
            })
            favoritesArray.splice(favoriteIndex, 1)
            setFavorited(false);
        } else {
            //Adicionar ao favoritos

            favoritesArray.push(teacher);
            setFavorited(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container} >
            <View style={styles.profile} >
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />
                <View style={styles.profileInfo} >
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}> {teacher.subject} </Text>
                </View>

            </View>
            <Text style={styles.bio} >
                {teacher.bio}
            </Text>
            <View style={styles.footer} >
                <Text style={styles.price} >
                    Preço/hora {'  '}
                    <Text style={styles.priceValue} >R$ {teacher.cost} </Text>
                </Text>

                <View style={styles.buttonsContainer} >

                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favoriteButton,
                            isFavorited ? styles.favorited : {}
                        ]}
                    >
                        {isFavorited ? <Image source={unFavoriteIcon} />
                            : <Image source={heartOutlineIcon} />}
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}  >
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText} >Entrar em contato</Text>
                    </RectButton>

                </View>
            </View>
        </View>
    )
}


export default TeacherItem;