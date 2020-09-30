import React from 'react';
import './style.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

interface teacherItmProps {
    teacher: {
        id: number,
        subject: string,
        cost: number,
        name: string,
        avatar: string,
        whatsapp: string,
        bio: string
    }
}


const TeacherItem: React.FC<teacherItmProps> = ({ teacher }) => {

  async  function createNewConnection(){
       await api.post('connections',{
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Luan Correia" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>Preço/hora
                <strong>R$ {teacher.cost}</strong>
                </p>
                <a onClick={createNewConnection} target="blank" href={`https://wa.me/5511${teacher.whatsapp}/?text=Olá, tenho interesse em estudar ${teacher.subject}`} >
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar um contato

                </a>
            </footer>
        </article>
    )
}


export default TeacherItem