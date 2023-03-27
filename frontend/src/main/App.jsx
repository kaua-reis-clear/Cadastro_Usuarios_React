import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home icon="home" title="Início"
            subtitle="Segundo Projeto do capítulo de React.">
            <div className="display-4">Bem Vindo!</div>
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React</p>
        </Home>
        <Footer />
    </div>