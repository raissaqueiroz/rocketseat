const INITIAL_STATE = {
    activeModule: {},
    activeLesson: {},
    modules: [
        {
            id: 1,
            title: "Iniciando com React Native",
            lessons: [
                { id: 1, title: "Primeira Aula" },
                { id: 2, title: "Segunda Aula" },
            ]
        },
        {
            id: 2,
            title: "Iniciando com React.JS",
            lessons: [
                { id: 1, title: "Terceira Aula" },
                { id: 2, title: "Quarta Aula" },
            ]
        }
    ]
};

export default function course(state = INITIAL_STATE, action){
    if(action.type ===  "TOGGLE_LESSON"){
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module 
        }
    }

    return state;
}