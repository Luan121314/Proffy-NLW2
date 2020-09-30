import React, { useState } from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
import styles from './style';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useFocusEffect(() => {
        loadFavorites()
    })


    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(reponse => {
            if (reponse) {
                const favoritedTeachers = JSON.parse(reponse)
                setFavorites(favoritedTeachers)
            }
        })
    }

    return (
        <View style={styles.container} >
            <PageHeader title='Meus proffs favoritos' />
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                                key= {teacher.user_id}
                                teacher= {teacher}
                                favorited= {true}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;