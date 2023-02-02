const questions = [
  {
    question: "Приветствуем вас! Как мы спасемся ?",
    answers: ["Делами", "Своей добротой", "Благодатью", "Силой"],
    correct: 3,
  },
  {
    question: "Сколько раз можно получить прощение грехов?",
    answers: ["Один раз за все грехи", "7*70", "7", "Всегда когда попросишь"],
    correct: 4,
  },
  {
    question: "Сколько детей было у Адама и Евы?",
    answers: ["2 сына", "Неизвестно", "4", "12"],
    correct: 2,
  },

  {
    question: "Из какого колена был Апостол Павел",
    answers: ["Вениаминова", "Иудина", "Данова", "Неффалимова"],
    correct: 1,
  },
  {
    question: "Сколько детей было у Иакова",
    answers: ["12", "13", "11", "Неизвсетно"],
    correct: 2,
  },
  {
    question: "Какие имена будут у верующих на небе?",
    answers: [
      "Какие были на земле",
      "Будут, но не знаем какие",
      "Не будут",
      "Одинаковые",
    ],
    correct: 2,
  },
  {
    question: "Кто из этих героев постился 40 дней?",
    answers: ["Авраам", "Даниил", "Илия", "Иов"],
    correct: 3,
  },
  {
    question: "Какой пророк пишет о падении дьявола(сын зари)?",
    answers: ["Иеремия", "Даниил", "Исайя", "Софония"],
    correct: 3,
  },
  {
    question: "Какой пророк воскресил из мертвых ребенка?",
    answers: ["Иезекииль", "Даниил", "Иона", "Елисей"],
    correct: 4,
  },
  {
    question: "Сколько раз в Библии говорили животные?",
    answers: ["2", "1", "Неизвестно", "3"],
    correct: 1,
  },
  {
    question: "Кто придет на суд Божий",
    answers: [
      "Все без исключения",
      "Все кроме верующих",
      "Не написано",
      "Только согрешившие ангелы",
    ],
    correct: 2,
  },
  {
    question: "Что нельзя есть верующим?",
    answers: ["Змею", "Свиное мясо", "Нет ограничений", "Не написано"],
    correct: 3,
  },
  {
    question: "Сколько человек накормил Иисус, не считая женщин и детей?",
    answers: ["5 и 4 тысячи", "5 и 5 тысяч", "12 тысяч", "7 и 5 тысяч"],
    correct: 1,
  },
  {
    question: "Сколько собравшихся челоек изначально было с Гедеоном?",
    answers: ["300", "100", "33000", "32000"],
    correct: 4,
  },
  {
    question: "Кто из них бушевал как вода ?",
    answers: ["Иуда", "Рувим", "Иосиф", "Дан"],
    correct: 2,
  },
  {
    question: "Из какого города была самарянка, у которой Иисус попросил воды?",
    answers: ["Назарет", "Иерихон", "Капернаум", "Сихарь"],
    correct: 4,
  },
  {
    question: "Автор слов-Близок день Господа и очень поспешает...?",
    answers: ["Исайя", "Софония", "Илия", "Даниил"],
    correct: 2,
  },
  {
    question: "Для меня жизнь-Христос, и смерть-приобретение. Где написано?",
    answers: ["Филлипийцам 1:21", "Галатам 2:20", "Рим 4:7", "1 Тим 2:5"],
    correct: 1,
  },
  {
    question: "На сколько частей разделили одежды Иисуса?",
    answers: ["2", "4", "3", "Не делили"],
    correct: 2,
  },
  {
    question: "Какие два сына Иакова напали на город?",
    answers: [
      "Дан и Рувим",
      "Симеон и Рувим",
      "Рувим и Иуда",
      "Симеон и Левий",
    ],
    correct: 4,
  },
];

const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  console.log("showQuestion");

  //   Вопрос
  const headerTemplate = `<h2 class="title">%title%</h2>`;
  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );
  headerContainer.innerHTML = title;

  //   Варианты ответов

  let answerNumber = 1;

  for (answerText of questions[questionIndex]["answers"]) {
    const questionTemplate = `<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
			</li>`;

    const answerHTML = questionTemplate
      .replace("%answer%", answerText)
      .replace("%number%", answerNumber);

    listContainer.innerHTML += answerHTML;
    answerNumber++;
  }
}

function checkAnswer() {
  console.log("checkAnswer started!");
  const checkedRadio = listContainer.querySelector("input:checked");

  if (!checkedRadio) {
    submitBtn.blur();
    return;
  }

  const userAnswer = parseInt(checkedRadio.value);

  if (userAnswer === questions[questionIndex]["correct"]) {
    score++;
  }
  console.log("score = ", score);

  if (questionIndex !== questions.length - 1) {
    console.log("Это НЕ последний вопрос");
    questionIndex++;
    clearPage();
    showQuestion();
    return;
  } else {
    console.log("Это последний вопрос");
    clearPage();
    showResults();
  }
}

function showResults() {
  console.log("showResults started");
  console.log(score);

  const resultsTemplate = `<h2 class="title">%title%</h2>
  <h3 class="summary">%message%</h3>
  <p class="result">%result%</p>`;

  let title, message;

  if (score === questions.length) {
    title = "Поздравляем! 👼 🧚‍♂️ 🥳";
    message = "Вы ответили верно на все вопросы! Вы много читали. 🙌";
  } else if ((score * 100) / questions.length >= 50) {
    title = "Неплохой результат, вы дали более половины правильных ответов. 😐";
    message = "Недалеко вы от царствия Божия 👏";
  } else {
    title = "Вы мало читали Библию 😞";
    message =
      "Царство Небесное силою берется, и употребляющие усилие восхищают его 🙂";
  }

  let result = `${score} из ${questions.length}`;

  const finalMessage = resultsTemplate
    .replace("%title%", title)
    .replace("%message%", message)
    .replace("%result%", result);

  headerContainer.innerHTML = finalMessage;

  submitBtn.blur();
  submitBtn.innerText = "Начать заново";
  submitBtn.onclick = () => history.go();
}
