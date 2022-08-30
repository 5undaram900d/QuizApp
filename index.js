const questions = [
    {
        'qus': 'When Unicompiler founded?',
        'a': '2021',
        'b': '2020',
        'c': '2019',
        'd': '2018',
        'correct': 'a'
    },
    {
        'qus': 'Who is the founder of Unicompiler?',
        'a': 'Larry Ellison',
        'b': 'K Dinesh',
        'c': 'Biswojit Panda',
        'd': 'Suvangi Paul',
        'correct': 'c'
    },
    {
        'qus': 'Who is the founder of Google?',
        'a': 'Bill Gates',
        'b': 'Jerry Yang',
        'c': 'Larry page',
        'd': 'M.H.Premji',
        'correct': 'c'
    },
    {
        'qus': 'Who is the founder of Microsoft?',
        'a': 'Bill Gates',
        'b': 'Jerry Yang',
        'c': 'Larry page',
        'd': 'M.H.Premji',
        'correct': 'a'
    },
    {
        'qus': 'Who is the co-founder of Unicompiler?',
        'a': 'Larry Ellison',
        'b': 'K Dinesh',
        'c': 'Biswojit Panda',
        'd': 'Suvangi Paul',
        'correct': 'd'
    },
    {
        'qus': 'Headquarters of Unicompiler at?',
        'a': 'Bangalore',
        'b': 'Bhubaneswar',
        'c': 'Noida',
        'd': 'Ahmedabad',
        'correct': 'b'
    },
    {
        'qus': 'Unicompiler company is based on?',
        'a': 'Selling Providers',
        'b': 'Electronics System Design & manufacturing',
        'c': 'Agriculture and Allied Industries',
        'd': 'E-Learning Providers',
        'correct': 'd'
    },
    {
        'qus': 'Unicompiler company consist?',
        'a': '0-10 employees',
        'b': '11-50 employees',
        'c': '51-100 employees',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'qus': 'Which is first Search engine?',
        'a': 'Google',
        'b': 'Microsoft Edge',
        'c': 'Bing',
        'd': 'Yahoo',
        'correct': 'd'
    },
    {
        'qus': 'When SEO comes?',
        'a': '1992',
        'b': '1996',
        'c': '1993',
        'd': '1991',
        'correct': 'd'
    }
]
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${index+1}) ${data.qus}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}
const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
        <div style="text-align: center">
            <h3> Your Quiz has been submitted </h3>
            <h2> ${right} / ${total} are correct </h2>
        </div>
    `
}
loadQuestion();