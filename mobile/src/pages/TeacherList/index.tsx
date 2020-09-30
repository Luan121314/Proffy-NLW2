import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const TeacherList = () => {
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([])

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(reponse => {
            if (reponse) {
                const favoritedTeachers = JSON.parse(reponse)
                const favoritedTeacherIds = favoritedTeachers.map((teacher: Teacher) => teacher.user_id)
                setFavorites(favoritedTeacherIds)
            }
        })
    }

    useFocusEffect(()=>{
        loadFavorites()
    })


    function handleToggleFiltersVisible() {
        setFilterVisible(!isFilterVisible);
    }
    async function handleFilterSubmit() {

        loadFavorites()
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        console.log(teachers)
        setFilterVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container} >
            <PageHeader
                title='Proffys disponíveis'
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible} >
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )} >

                {isFilterVisible && (
                    <View style={styles.searchForm} >

                        <Text style={styles.label} >Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a matéria ?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup} >
                            <View style={styles.inputBlock} >
                                <Text style={styles.label} >Dia da semana</Text>
                                <TextInput
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock} >
                                <Text style={styles.label} >Horário</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    style={styles.input}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                        </View>
                        <RectButton onPress={handleFilterSubmit} style={styles.submitButton} >
                            <Text style={styles.submitButtonText} >Filtrar</Text>
                        </RectButton>

                    </View>)}

            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >

                {/* <TeacherItem /> */}
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.user_id}
                            teacher={teacher}
                            favorited= {favorites.includes(teacher.user_id)}
                        />)
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;