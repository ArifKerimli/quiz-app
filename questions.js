let htmlQuestions = [
  {
    quiz: 1,
    question: "Html'in mənası nədir?",
    correctAnswer: "Hyper Text Markup Language",
    variants: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
  },
  {
    quiz: 2,
    question: "Ən vəcib başlıq hansıdır?",
    correctAnswer: "h1",
    variants: ["h1", "h6", "heading"],
  },
  {
    quiz: 3,
    question: "Hansı Html etiketi sətri sonlandırır və alt sətirə keçirir?",
    correctAnswer: "br",
    variants: ["bt", "br", "break"],
  },
  {
    quiz: 4,
    question: "Hansı input attributu label'in for atributu ilə əlaqəlidir?",
    correctAnswer: "id",
    variants: ["name", "value", "id"],
  },
  {
    quiz: 5,
    question:
      "Hansı Html attributu elementə link əlavə etmək üçün istifadə olunur?",
    correctAnswer: "href",
    variants: ["href", "link", "url"],
  },
  {
    quiz: 6,
    question: "Dropdown list yaratmaq üçün hansı doğru elementdir?",
    correctAnswer: "select",
    variants: ["select", "list", "ul"],
  },
  {
    quiz: 7,
    question: "Hansı Htmldə etiketin bağlanma simvoludur?",
    correctAnswer: "/",
    variants: ["/", "|", "()"],
  },
  {
    quiz: 8,
    question: "Hansı Html etiketi pataqaf yaradır?",
    correctAnswer: "p",
    variants: ["paragraf", "p", "par"],
  },
  {
    quiz: 9,
    question: "Html nə üçün programlaşdırma dili deyil?",
    correctAnswer: "Hamısı",
    variants: [
      "Programlaşdırma dillərində olduğu kimi funksional məqsəd yoxdur",
      "Hesablamalar aparmaq olmur",
      "hər ikisi doğrudur",
    ],
  },
  {
    quiz: 10,
    question: "Hansı etiket səhifədə şəkil əlavə edir?",
    correctAnswer: "img",
    variants: ["pic", "img", "image"],
  },
];

let cssQuestions = [
  {
    quiz: 1,
    question: "Css'in mənası nədir?",
    correctAnswer: "Cascading Style Sheets",
    variants: [
      "Cyber Security System",
      "Cascading Style Sheets",
      "Cascadding Style System",
    ],
  },
  {
    quiz: 2,
    question: "Hansı variant arxaplan rəngini göy rəng etmək üçün düzgündür?",
    correctAnswer: "body{background-color: blue;}",
    variants: [
      "body{bg-color: blue;}",
      "body{color: blue;}",
      "body{background-color: blue;}",
    ],
  },
  {
    quiz: 3,
    question:
      "Hansı variantda padding-left: 30px; padding-bottom: 20px; padding-top: 10px; padding-right: 50px; daha qısa və doğru yazılmışdır?",
    correctAnswer: "padding: 10px 50px 20px 30px;",
    variants: [
      "padding: 10px 50px 20px 30px;",
      "padding: 50px 20px 10px 30px;",
      "padding: 50px 30px 20px 10px;",
    ],
  },
  {
    quiz: 4,
    question: "Hansı viewport'un genişliyini təyin edir?",
    correctAnswer: "vw",
    variants: ["vv", "vw", "vh"],
  },
  {
    quiz: 5,
    question: "Html faylı içərisində Css yazmaq üçün doğru etiket hansıdır?",
    correctAnswer: "style",
    variants: ["css", "style", "heç biri"],
  },
  {
    quiz: 6,
    question: "Css'də şərh necə yazılır?",
    correctAnswer: "/* */",
    variants: ["/* */", "#", "///"],
  },
  {
    quiz: 7,
    question: "Hansı bütün p elementlərini bold etmək üçün istifadə olunur",
    correctAnswer: "p{font-weight: bold;}",
    variants: [
      "p{font-weight: bold;}",
      "p{font-size: bold;}",
      "p{font-width: bold;}",
    ],
  },
  {
    quiz: 8,
    question: "Css'də elementi id dəyərinə görə necə seçə bilərik?",
    correctAnswer: "#id",
    variants: ["id", "#id", ".id"],
  },
  {
    quiz: 9,
    question: "Css'də elementi class dəyərinə görə necə seçə bilərik?",
    correctAnswer: ".class",
    variants: [".class", "#class", "class"],
  },
  {
    quiz: 10,
    question: "Position default dəyəri hansıdır?",
    correctAnswer: "static",
    variants: ["fixed", "static", "absolute"],
  },
];

let jsQuestions = [
  {
    quiz: 1,
    question: "JavaScript'də toplu şərh necə yazılır?",
    correctAnswer: "/* */",
    variants: ["/* */", "!", "#"],
  },
  {
    quiz: 2,
    question: "JavaScript kodları hansı etiket arasında yazılır?",
    correctAnswer: "script",
    variants: ["app", "script", "javascript"],
  },
  {
    quiz: 3,
    question: "JavaScript kodları harada yazılır",
    correctAnswer: "hər ikisi doğrudur",
    variants: [
      "body teqləri arasında",
      "head teqləri arasında",
      "hər ikisi doğrudur",
    ],
  },
  {
    quiz: 4,
    question: "Salam yazısını mesaj qutusunda necə göstərə bilərik?",
    correctAnswer: "alert('Salam')",
    variants: ["mesage('Salam')", "alert('Salam')", "not('Salam')"],
  },
  {
    quiz: 5,
    question: "Hansı variantda doğru funksiya örnəyi göstərilib?",
    correctAnswer: "function sayHello(){alert('Hello')}",
    variants: [
      "function sayHello(){alert('Hello')}",
      "sayHello: alert('Hello')}",
      "func sayHello{alert('Hello')}",
    ],
  },
  {
    quiz: 6,
    question: "JavaScript'də funksiya necə çağırılır?",
    correctAnswer: "sayHello();",
    variants: ["sayHello();", "function sayHello(){};", "sayHello(){};"],
  },
  {
    quiz: 7,
    question: "Hansı variant doğrudur?",
    correctAnswer: "if(i == 5){alert('Hello')}",
    variants: [
      "if(i = 5){alert('Hello')}",
      "if(i == 5){alert('Hello')}",
      "i == 5{alert('Hello')}",
    ],
  },
  {
    quiz: 8,
    question: "Hansı variantda doğru massiv örnəyi mövcuddur?",
    correctAnswer: "var array = [1,2]",
    variants: ["var array = [1,2]", "array = {1,2}", "hər ikisi doğrudur"],
  },
  {
    quiz: 9,
    question:
      "Hansı variant 3.65 sayını ən yaxın tam ədədə yuvarlaqlaşdırmaq üçün doğrudur?",
    correctAnswer: "Math.round(3.65)",
    variants: ["rnd(3.65)", "Math.round(3.65)", "rnd(3.65)"],
  },
  {
    quiz: 10,
    question: "Hansı selector id-ə görə elementi seçir?",
    correctAnswer: "document.getElementById();",
    variants: [
      "document.getElementByName();",
      "document.getElementsByClassName();",
      "document.getElementById();",
    ],
  },
  {
    quiz: 11,
    question:
      "for(let i = 1; i < 6; i++){console.log(i)} consol'a nə yazılacaq?",
    correctAnswer: "1 2 3 4 5",
    variants: ["1 2 3 4 5", "1 2 3 4 5 6", "1 2 3"],
  },
  {
    quiz: 12,
    question: "Boolean(10 == 20); nəticə nə olacaq?",
    correctAnswer: "false",
    variants: ["true", "false", "error"],
  },
  {
    quiz: 13,
    question: "console.log(typeof typeof 2)",
    correctAnswer: "string",
    variants: ["number", "string", "error"],
  },
  {
    quiz: 14,
    question:
      "const element = document.querySelector('.element'); Elementə klik olunduqda consol'a 'Salam' yazısını necə yazdıra bilərik?",
    correctAnswer:
      "element.addEventListener('click',function(){console.log('Salam')});",
    variants: [
      "element.addEventListener('click',function(){console.log('Salam')});",
      "console.log('Salam');",
      "element.clicked('Salam');",
    ],
  },
  {
    quiz: 15,
    question:
      "let array = [1, 2, 3];<br>array.push('quiz');<br>console.log(array); nəticə nə olacaq?",
    correctAnswer: "[1, 2, 3,'quiz']",
    variants: ["[1, 2, 3,'quiz']", "[1, 2, 3]", "['quiz']"],
  },
];
