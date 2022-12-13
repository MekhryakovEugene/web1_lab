const questions = [
    {
        text: 'What is 2^2?',
        variants: [
            '1',
            '2',
            '4',
            '8',
        ],
        correct: 2,
    },
    {
        text: 'Is it cold in winter?',
        variants: [
            'Yes',
            'No',
        ],
        correct: 0,
    },
    {
        text: 'Can cats fly?',
        variants: [
            'Yes',
            'No',
        ],
        correct: 1,
    },
    {
        text: 'What is the remainder of 10 divided by 3?',
        variants: [
            '0',
            '0.(3)',
            '0.25',
			'0.(6)',
        ],
        correct: 1,
    },
    {
        text: 'What is the name of the third musketeer?',
        variants: [
            'Porthos',
			'Athos',
			'Aramis',
        ],
        correct: 0,
    },
];

const quizApp = new Vue({
    el: '#quizApp',
    data: {
        questions: questions,
        currentIndex: 0,
        answers: Array(questions.length).fill(null),
        incorrectAnswersIndex: new Set(),
    },
    methods: {
        getVariantId: function(iq, iv) {
            return `q${iq}_v${iv}`;
        },
        onButtonClick: function() {
            ++this.currentIndex;
        },
        getCorrectAnswersAmount: function() {
          let correctAnswersAmount = 0;
          
          for (let i = 0; i < this.questions.length; ++i) {
            if (this.questions[i].correct === this.answers[i]) {
                ++correctAnswersAmount;
            }
          }

          this.calculateIncorrectAnswersIndex();
          return correctAnswersAmount;
        },
        calculateIncorrectAnswersIndex : function() {
            for (let i = 0; i < this.questions.length; ++i) {
                if (this.questions[i].correct !== this.answers[i]) {
                    this.incorrectAnswersIndex.add(i);
                }
            }
        }
    },
});