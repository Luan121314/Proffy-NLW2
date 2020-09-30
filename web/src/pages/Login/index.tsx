import React from 'react';
import './styles.css'
import background from '../../assets/images/background.svg';
import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

const Login = () => {
    return (
        <div className="login-container" >
            <div className="logo-content" >
                <img src={background} alt="Imagem de fundo" className="backgroundImg" />
                <div className="content" >
                    <img className="logoImg" src={logoImg} alt="Logo" />
                    <label>Sua plataforma de estudos online</label>

                </div>
            </div>
            <div className="login-content">
                <form className="form" action="">
                    <label className="doLogin-title">Fazer login</label>
                    <input id="email-input" type="text" placeholder="E-mail" />
                    <input id="password-input" type="password" placeholder="Senha" />

                    <div className="form-check">
                        <div className="form-checkBox" >
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Lembrar-me</label>
                        </div>
                        <a className="forgtPassword" >Esqueci minha senha</a>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
                <footer className="footer-content" >
                    <div className="footer-newAccount" >
                        <label >Não tem conta?</label>
                        <a href="">Cadastre-se</a>
                    </div>
                    <label >É de graça
                        <img src={purpleHeartIcon} alt="hearth" />
                    </label>
                </footer>
            </div>
        </div>
    )

}

export default Login;