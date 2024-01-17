import React from "react";
import s from "../lessonsStyle.module.css";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import sprite from "../../assets/img/icomoon/sprite.svg";
import virtualDOM from "../../assets/img/virtualDom.jpg";
import request1 from "../../assets/img/request1.png";
import request2 from "../../assets/img/request2.png";

const ReactStart = () => {
  const codeStyle = materialDark;

  return (
    <div>
      <h1>Що таке React?</h1>
      <img
        className={`${s.lessons_img} ${s.text_image_right}`}
        src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
        alt="react-icon"
        style={{ marginTop: "0" }}
      />
      <p>
        <strong>React</strong> - це JavaScript бібліотека від компанії Facebook
        для побудови інтерфейсів користувача. Звичайно, ви можете створювати
        інтерфейси користувача на чистому JavaScript, однак це потребує значно
        більшої кількості часу та зусиль. Краще освоїти один із найпопулярніших
        інструментів веб розробки - React
      </p>
      <p>
        React має досить хорошу документацію, в якій можна знайти всі відповіді,
        щодо загальної концепції, створення проєкту та його функціонального
        налаштування.{" "}
        <a href="https://uk.legacy.reactjs.org">React офіційна документація</a>
      </p>
      <p>
        Ім'я <strong>React</strong> носять дві бібліотеки:
      </p>
      <ul>
        <li>
          <strong>React</strong> - для побудови веб-інтерфейсів
        </li>
        <li>
          <strong>
            React Native - для побудови кросплатформових додатків для платформ
            iOS, Android та ін.
          </strong>
        </li>
      </ul>
      <p>
        React допомагає розробнику розробляти різного роду інтерактивні
        інтерфейси. Розробнику потрібно лише описати, який вигляд мають мати
        ваші компоненти в у кожному <a href="">стані вашого додатку</a>.
      </p>
      <p>
        Історія створення React - це історія про виникнення відповіді на реальні
        проблеми, з якими зіштовхнулися розробники під час роботи над великими
        веб-проектами.{" "}
        <Link to="/react-history">Ось коротка версія історії React:</Link>
      </p>
      <h1>Переваги React:</h1>
      <ul>
        <li>
          <strong>Віртуальний DOM</strong>: React використовує віртуальний DOM,
          що дозволяє зменшити кількість зайвих операцій з реальним DOM, що
          покращує продуктивність та швидкість рендерингу.
        </li>
        <li>
          <strong>Компонентна Архітектура</strong>: React сприяє розділенню
          інтерфейсу на компоненти, що полегшує розробку, тестування та
          підтримку.
        </li>
        <li>
          <strong>Хідрація та Рендеринг на Сервері</strong>: Можливість
          використовувати серверний рендеринг дозволяє покращити швидкість
          завантаження сторінки та покращити SEO.
        </li>
        <li>
          <strong>Хуки</strong>: Хуки (наприклад, useState, useEffect)
          дозволяють зручно та ефективно працювати зі станом та побічними
          ефектами.
        </li>
        <li>
          <strong>Спільнота</strong>: Є велика та активна спільнота розробників,
          яка надає підтримку, ресурси та бібліотеки.
        </li>
        <li>
          <strong>Розширеність</strong>: Можливість використовувати багато
          розширень та бібліотек для різних завдань.
        </li>
        <li>
          <strong>JSX</strong>: Використання JSX спрощує створення інтерфейсу та
          полегшує читання коду.
        </li>
      </ul>
      <h1>Недоліки React:</h1>
      <ul>
        <li>
          <strong>Велика Кількість Концепцій: </strong> Перехід від чистого
          JavaScript до вивчення компонентів, стану, хуків та інших концепцій
          може бути важким для початківців.
        </li>
        <li>
          <strong>Синтаксична Складність:</strong> Використання JSX та деяких
          хуків може викликати плутанину для тих, хто щойно розпочав вивчати
          React.
        </li>
        <li>
          <strong>Потребує Навчання:</strong> Навчання інших бібліотек та
          концепцій, таких як Redux або контекст, може зайняти час.
        </li>
        <li>
          <strong> Документація:</strong> Хоча документація React досить добра,
          іноді її не вистачає для розуміння складних концепцій.
        </li>
        <li>
          <strong> Нестабільність API:</strong> Періодично виникають зміни в
          API, що може вплинути на стабільність та сумісність коду після
          оновлень.
        </li>
        <li>
          <strong> Розмір Бандла:</strong> Великі проекти на React можуть мати
          великий розмір бандла, що впливає на швидкість завантаження сторінки.
        </li>
      </ul>
      <h1>Віртуальний DOM</h1>
      <p>
        <strong>Віртуальний DOM</strong> – це концептуальна структура даних, яка
        використовується React для відображення стану додатку. Він представляє
        поточний стан додатку як дерево вузлів, і React використовує його для
        визначення різниці між поточним і бажаним станом. Потім React застосовує
        ці зміни до DOM, щоб оновити вміст сторінки.
      </p>
      <p>
        Віртуальний DOM має кілька переваг над традиційним DOM. По-перше, він
        набагато швидший, оскільки React не потрібно безпосередньо змінювати
        DOM. По-друге, він більш гнучкий, оскільки React може легко змінювати
        стан додатку без необхідності перемальовувати всю сторінку. По-третє,
        він більш надійний, оскільки React може легко виявляти і виправляти
        помилки в стані додатку.
      </p>
      <p>
        Щоб зрозуміти, як працює віртуальний DOM, розглянемо простий приклад.
        Уявіть, що у нас є React-додаток, який відображає список чисел. Коли
        користувач клікає на число, воно видаляється зі списку.
      </p>
      <p>
        Щоб відобразити список чисел, React спочатку створить віртуальний DOM,
        який представляє поточний стан додатку. У цьому випадку віртуальний DOM
        буде містити наступне дерево вузлів:
      </p>
      <SyntaxHighlighter language="javascript" style={codeStyle}>
        {`
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
`}
      </SyntaxHighlighter>
      <p>
        Коли користувач клікає на число, React порівняє віртуальний DOM з
        бажаним станом, в якому число видалено зі списку. React потім застосує
        ці зміни до віртуального DOM, щоб отримати наступне дерево вузлів:
      </p>
      <SyntaxHighlighter language="javascript" style={codeStyle}>
        {`
<ul>
<li>2</li>
<li>3</li>
</ul>
`}
      </SyntaxHighlighter>
      <p>
        В результаті, React оновлює DOM, щоб відображати дерево вузлів
        віртуального DOM.
      </p>
      <img src={virtualDOM} alt="" />
      <div className={s.interestBox}>
        <div className={s.interestHeader}>
          <svg className={s.textIcon}>
            <use href={sprite + "#target"}></use>
          </svg>
          <h5 style={{ fontWeight: "900", fontSize: "23px" }}>ЦІКАВО</h5>
        </div>
        <p>
          <strong>Віртуальний DOM</strong> – це потужний інструмент, який
          використовується React для підвищення продуктивності, гнучкості та
          надійності веб-додатків.
        </p>
      </div>
      <h1>Принцип SPA (односторінкові додатки)</h1>
      <p>
        <strong>SPA (single page application)</strong> - це веб-додаток або
        веб-сайт , що використовує єдиний HTML-документ як оболонку для всіх
        веб-сторінок і організовує взаємодію з користувачем через HTML , CSS ,
        JavaScript , що динамічно підвантажуються{" "}
      </p>
      <p>Переваги Single Page Applications</p>
      <ul>
        <li>
          <strong>Доступність</strong>. Можна отримати негайний доступ до
          функціоналу з будь-якого типу пристрою без проблем із сумісністю,
          обсягом пам'яті, потужностями або часом на установку.
        </li>
        <li>
          <strong>Універсальність</strong>. Використовувати програму можна
          практично з будь-якого пристрою, якщо на ньому є доступ до інтернету.
          Якщо при розробці інтерфейсу враховувалися різні роздільні здатності
          екрану, то використовувати SPA однаково зручно і з ПК, і зі смартфона.
        </li>
        <li>
          <strong>Можливість задіяти великі обсяги даних</strong>. Розмір
          програми та даних, що використовуються, не обмежений пам'яттю
          пристрою.
        </li>
        <li>
          <strong>Швидкість</strong>. Одна сторінка з усім необхідним не тільки
          заощаджує час на повторне завантаження даних, а й підвищує
          продуктивність роботи.
        </li>
        <li>
          <strong>Можливості розробки</strong>. Розробникам доступні фреймворки,
          які спрощують створення архітектури проекту та надають чимало готових
          елементів для роботи.
        </li>
      </ul>
      <p>
        <strong>SPA (single page application)</strong> - це буквально одна
        сторінка, яка постійно взаємодіє з користувачем, динамічно переписуючи
        поточну сторінку, а не завантажуючи нові сторінки з сервера. Ми бачимо
        приклади односторінкових програм щодня: Trello, Facebook, Gmail,
        Twitter.
      </p>
      <p>
        Даний вид софту за способом взаємодії з користувачем найбільше нагадує
        роботу десктопних додатків, але на сервері.
      </p>
      <p>Традиційна модель взаємодії клієнта з сервером</p>
      <img src={request1} alt="Traditional Page Lifecycle" />
      <p>Модель взаємодії клієнта з сервером по принципу SPA</p>
      <img src={request2} alt="Traditional Page Lifecycle" />
      <h2>Недоліки SPA</h2>
      <p>
        Концепція SPA на сьогоднішній день набула досить великої популярності
        через свою ефективність та широкі можливості у використині. Проте має і
        свої недоліки.
      </p>
      <ul>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #282c34",
            background: "#282c34",
            borderRadius: "1vw",
            color: "white",
            height: "15vh",
            width: "100%",
            paddingRight: "1vw",
          }}
        >
          <img
            src="https://www.freeiconspng.com/thumbs/network-icon/network-icon-free-download-as-png-and-ico-formats-veryiconm-0.png"
            alt="network icon"
            style={{ width: "10%" }}
          />
          Необхідність інтернет-з'єднання . Без доступу до мережі
          використовувати цей софт неможливо. Але навіть десктопне ПЗ
          використовує у роботі зовнішні бази даних, то доступом до Інтернету
          необхідний у разі.
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #282c34",
            background: "#282c34",
            borderRadius: "1vw",
            color: "white",
            height: "15vh",
            width: "100%",
            paddingRight: "1vw",
          }}
        >
          <img
            src="https://freepngimg.com/download/seo/8-2-seo-png-pic.png"
            alt="network icon"
            style={{ width: "10%" }}
          />
          Проблеми с SEO . Особливості SPA ускладнюють або унеможливлюють процес
          індексації пошуковими системами всіх модулів програми. Це може
          спричинити труднощі з оптимізацією.
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #282c34",
            background: "#282c34",
            borderRadius: "1vw",
            color: "white",
            height: "15vh",
            width: "100%",
            paddingRight: "1vw",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/597/318/original/3d-file-js-icon-illustration-png.png"
            alt="network icon"
            style={{ width: "10%" }}
          />
          Не працює у користувачів з відключеною підтримкою JS . Багато хто
          відключає відображення JS-елементів у себе в браузерах, а Single Page
          Application використовує їх у роботі, тому може не працювати.
        </li>
      </ul>
      <h1>Створення React проєкту</h1>
      <h2>Встановлення необхідних інструментів</h2>
      <p>
        Перш за все, переконайтеся, що на вашому комп'ютері встановлені наступні
        інструменти:
      </p>
      <p>
        <strong>Node.js:</strong> Це середовище виконання JavaScript, яке
        дозволяє запускати React-проєкти. Ви можете завантажити його з
        <a href="https://nodejs.org/uk">офіційного сайту Node.js</a>.
      </p>
      <h2>Створення нового React-проєкту</h2>
      <ol>
        <li style={{ listStyle: "inherit" }}>
          Відкрийте командний рядок або термінал у вашому робочому каталозі.
        </li>
        <li style={{ listStyle: "inherit" }}>
          Введіть наступну команду для створення нового React-проєкту:
        </li>

        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
npx create-react-app my-react-app
`}
        </SyntaxHighlighter>
        <p>
          У цій команді my-react-app - це ім'я вашого проєкту. Ви можете обрати
          будь-яке інше ім'я.
        </p>
        <li style={{ listStyle: "inherit" }}>
          Зачекайте, доки процес створення проєкту не завершиться. Після цього
          ви побачите повідомлення, що проєкт успішно створено.
        </li>
      </ol>
      <p>
        Створенням проєкту з використанням create-react-app, ви отримаєте
        структуру, яка вже готова до розробки. Ось деякі ключові файли та папки:
      </p>{" "}
      <ul>
        <li style={{ listStyle: "outside" }}>
          <strong>src/</strong>: Це директорія, де ви будете розробляти весь ваш
          код React. Основний файл, <strong>index.js</strong>, є вхідною точкою
          додатку.
        </li>
        <li style={{ listStyle: "outside" }}>
          <strong>public/</strong>: Тут знаходяться публічні файли, такі як{" "}
          <strong>index.html</strong>, який використовується для запуску
          додатку.
        </li>
      </ul>
      <h2>Запуск та перевірка додатку</h2>
      <ol>
        <li style={{ listStyle: "inherit" }}>
          Відкрийте командний рядок або термінал у каталозі вашого проєкту (
          <strong>my-react-app</strong> ).
        </li>
        <li style={{ listStyle: "inherit" }}>
          Запустіть ваш React-проєкт, введіть наступну команду:
        </li>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
npm start
`}
        </SyntaxHighlighter>

        <li style={{ listStyle: "inherit" }}>
          Відкрийте ваш веб-браузер і перейдіть за посиланням{" "}
          <strong>http://localhost:3000</strong>. Ви повинні побачити ваш
          React-додаток, готовий для розробки.
        </li>
      </ol>
    </div>
  );
};

export default ReactStart;