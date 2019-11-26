import React from 'react';
import { connect } from 'react-redux';
// import { Container } from './styles';

const Video = ({ activeModule, activeLesson }) => (
    <header>
        <strong>Modulo: {activeModule.title}</strong>
        <span> Aula: {activeLesson.title}</span>
    </header>
);

export default connect(state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson
}))(Video);
