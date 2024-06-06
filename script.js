function submitUser(event)
{
    event.preventDefault();
    const cusername=document.getElementById("cusername").value;
    const cpassword=document.getElementById("cpassword").value;
    const rcpassword=document.getElementById("rcpassword").value;
    const successtoast=document.getElementById("successtoast");
    const failuretoast=document.getElementById("failuretoast");
    if(cusername!="" && cpassword !="" && rcpassword!="" && cpassword === rcpassword)
    {
        successtoast.style.display="inline";
        localStorage.setItem("cusername", cusername);
        localStorage.setItem("cpassword", cpassword);
        setTimeout(()=>window.open("index.html",'_self'),2000);
    }
    else
    {
        failuretoast.style.display="inline";
        setTimeout(()=>{failuretoast.style.display="none";},2000)
    }
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const failuretoast = document.getElementById("failuretoast");
    const cusername = localStorage.getItem("cusername");
    const cpassword = localStorage.getItem("cpassword");
    console.log(cusername,cpassword);
    if (username!="" && password!="" && username===cusername && password===cpassword ) {
        window.open("category.html", '_self');
    } else {
        failuretoast.style.display = "inline";
        setTimeout(() => {
            failuretoast.style.display = "none";
        }, 2000);
    }
}
// function quiz(category)
// {
//     window.open("quiz.html",'_self');
// }

// function quiz(category) {
//     try {
//         // const headers = { 'X-Api-Key': apiKey };
//         const apiKey="UkgTTTdP6gC5+mbvoQ5jJg==LeZGfXwPZBzFFcvP";
//         const headers = {
//             headers: {
//               method: 'GET',
//               'X-Api-Key':apiKey,
//             }
//           };
//         fetch('https://api.api-ninjas.com/v1/trivia?category='+category,{headers})
//             .then(response => {
//                 console.log(response);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//         // window.open("quiz.html", "_self");
//     } catch (e) {
//         console.log(e);
//     }
// }

// function quiz(category)
// {
//     $.ajax({
//         method: 'GET',
//         url: 'https://api.api-ninjas.com/v1/trivia?category=' + category,
//         headers: { 'X-Api-Key': 'UkgTTTdP6gC5+mbvoQ5jJg==LeZGfXwPZBzFFcvP'},
//         contentType: 'application/json',
//         success: function(result) {
//             console.log(result);
//         },
//         error: function ajaxError(jqXHR) {
//             console.error('Error: ', jqXHR.responseText);
//         }
//     });
// }
function quiz(category)
{
    localStorage.setItem('category',category);
    window.open("quiz.html","_self");
}
var questionAndAnswerArray = [];
function displayquiz() {
    try {
        const category=localStorage.getItem('category');
        fetch(`http://localhost:3000/proxy?category=${category}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                    document.getElementById('ques').textContent = data[0].question;
                    console.log(data);
                    const question = data[0].question;
                    const answer = data[0].answer;
                    questionAndAnswerArray.push({ question, answer });
                    localStorage.setItem('question',data[0].question);
                    localStorage.setItem('answer',data[0].answer);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } catch (e) {
        console.log(e);
    }
}
var score=0;
var questionCount=0;
function submitAnswer()
{
    const correct_answer=localStorage.getItem('answer');
    // const successtoast=document.getElementById("successtoasta");
    // const failuretoast=document.getElementById("failuretoasta");
    var answer=document.getElementById('ans').value;
    if(answer===correct_answer)
    {
        // successtoast.style.display="inline";
        // localStorage.removeItem('answer');
        setTimeout(() => {
        //     successtoast.style.display = "none";
            document.getElementById('ans').value = ""; 
        }, 2000);
        score+=1;
    }
    else
    {
        // failuretoast.style.display="inline";
        setTimeout(() => {
            // failuretoast.style.display = "none";
            document.getElementById('ans').value = ""; 
        }, 2000);
    }
    questionCount++;
    if (questionCount < 10) {
        displayquiz();
    } else {
        const questionClass= document.querySelector('.question');
        questionClass.style.display="none";
        const resultClass= document.querySelector('.result');
        resultClass.style.display="block";
        const result = document.getElementById('showresult');
        const questions=document.getElementById('questions');
        if(score==10)
        {
            result.innerHTML = "Outstanding achievement! A perfect score of " + score + "/10! You're a trivia master!";
        }
        else if(score<10 && score>=6)
        {
            result.innerHTML = "Impressive progress! You're so close to a perfect score. Your current score: " + score + "/10!";
        }
        else
        {
           result.innerHTML= "Don't be discouraged! Every correct answer counts. You scored " + score + "/10!";
        }
        questions.innerHTML = questionAndAnswerArray.map((qa,index)=>"<b>Question</b>"+` <b>${index+1}</b>`+"<br>"+qa.question+"<br><br>"+"<b>Answer</b>"+"<br>"+qa.answer+"<br><br><hr>").join(' ');
    }
}

function navigateCategory()
{
    window.open('category.html','_self');
}