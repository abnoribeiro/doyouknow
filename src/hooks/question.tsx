import React, { createContext, useContext, ReactNode} from 'react';

interface Questions {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface QuestionsProviderPros {
    children:ReactNode
}

const QuestionsContext = createContext<Questions>({} as Questions);

const QuestionsProvider = ({children}:QuestionsProviderPros)=>{
    return(
        <QuestionsContext.Provider
            value={{
                category: "",
                type: "",
                difficulty: "",
                question: "",
                correct_answer: "",
                incorrect_answers: [],
            }}
        >
            {children}
        </QuestionsContext.Provider>
    )
}

const useQuestion = ()=>{
    const context = useContext(QuestionsContext)

    return context
}

export {QuestionsProvider,useQuestion}