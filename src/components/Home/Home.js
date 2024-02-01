import React from 'react'
import Question from '../Quiz/Question'
import questions from '../../staticData/Data' 

function Home() {
    // const [questions, setQuestions] = useState(quizData);
  return (
    <main>
       <div className='container'>
       <h3>Sample AI<br /> Quize App</h3>
        <section className='info'>
{
    questions.map((question)=>{
        return(
            <Question key={question.id} {...question} />
        )
    })
}

        </section>
       </div>
    </main>
  )
}

export default Home
