export const QUESTIONS = [
  {
    questionText: 'Manakah library JavaScript yang paling populer untuk membangun antarmuka pengguna?',
    answerOptions: [
      { answerText: 'Angular', isCorrect: false },
      { answerText: 'Vue', isCorrect: false },
      { answerText: 'React', isCorrect: true },
      { answerText: 'Svelte', isCorrect: false },
    ],
    point: 5,
  },
  {
    questionText: 'Di React, hook apa yang digunakan untuk mengelola state dalam sebuah functional component?',
    answerOptions: [
      { answerText: 'useEffect', isCorrect: false },
      { answerText: 'useState', isCorrect: true },
      { answerText: 'useContext', isCorrect: false },
      { answerText: 'useReducer', isCorrect: false },
    ],
    point: 10,
  },
  {
    questionText: 'Atribut apa yang harus unik untuk setiap elemen dalam sebuah daftar (list) di React?',
    answerOptions: [
      { answerText: 'id', isCorrect: false },
      { answerText: 'class', isCorrect: false },
      { answerText: 'name', isCorrect: false },
      { answerText: 'key', isCorrect: true },
    ],
    point: 15,
  },
  {
    questionText: 'Perintah apa yang digunakan untuk membuat proyek React baru menggunakan Vite?',
    answerOptions: [
      { answerText: 'npx create-react-app', isCorrect: false },
      { answerText: 'npm start react', isCorrect: false },
      { answerText: 'npm create vite@latest', isCorrect: true },
      { answerText: 'vite new project', isCorrect: false },
    ],
    point: 20, 
  },
];
