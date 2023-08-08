import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import s from "../lessonsStyle.module.css";
import sprite from "../../assets/img/icomoon/sprite.svg";
import classFnComponent from "../../assets/img/class_fn_component.png";
import lifeCycle from "../../assets/img/lifeCycle.png";
const Component = () => {
  const codeStyle = materialDark;

  return (
    <div>
      <h1>Компоненти та JSX</h1>
      <p>
        React компоненти та JSX. Ці поняття є ключовими для розробки зрозумілих,
        зручних у використанні та підтримуваних додатків.
      </p>
      <h2>Компоненти</h2>
      <p>
        Компоненти є основним будівельним блоком у React. Вони дозволяють
        розділити інтерфейс на незалежні, реюзабельні частини. Це може бути
        будь-що: кнопка, форма, списки, сторінка і багато іншого.
      </p>
      <p>React ділить компоненти на два типи:</p>
      <ul>
        <li>
          <strong>Функціональні компоненти:</strong> Це прості функції, які
          приймають властивості (props) та повертають JSX.
        </li>
        <li>
          <strong>Класові компоненти:</strong> Це класи, які розширюють
          React.Component. Вони мають внутрішній стан та можуть виконувати
          додаткові дії.
        </li>
      </ul>
      <p>Розглянемо кожен тип окремо</p>
      <h2>Класові компоненти</h2>
      <h3>Створення класового компонента</h3>
      <p>
        <strong>Класовий компонент</strong> - це клас, який наслідує від
        React.Component та має метод render(), який повертає JSX. Давайте
        розглянемо приклад створення простого класового компонента:
      </p>
      <SyntaxHighlighter language="javascript" style={codeStyle}>
        {`
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
`}
      </SyntaxHighlighter>
      <h3>Життєвий цикл класового компонента</h3>
      <p>
        <strong>Класові компоненти мають життєвий цикл </strong>- це
        послідовність подій, які відбуваються під час створення, оновлення та
        знищення компонента. Деякі з методів життєвого циклу:
      </p>
      <ul>
        <li>
          <strong>componentDidMount</strong>: Викликається після першого
          рендерингу компонента.
        </li>
        <li>
          <strong>componentDidUpdate</strong>: Викликається після оновлення
          компонента.
        </li>
        <li>
          <strong>componentWillUnmount</strong>: Викликається перед тим, як
          компонент буде знищено.
        </li>
      </ul>
      <img
        src={lifeCycle}
        alt=""
        style={{ width: "70%", marginLeft: "10vw" }}
      />
      <p>Розберемо поетапно:</p>
      <ul>
        <li style={{ listStyle: "outside" }}>
          <strong>componentDidMount</strong> - компонент був відображений на
          сторінці. Метод показує, що компонента була відображена на сторінці
          перший раз. Це метод більше викликатись не буде доки компонента не
          видалиться та не буде викликана знову.
        </li>
        <li style={{ listStyle: "outside" }}>
          <strong>componentDidUpdate</strong> - в компоненті відбулись певні
          зміни. Відбулись оновлення props, state. Використовуємо цей метод,
          якщо нам потрібно знати, що саме обновилось в компоненті.{" "}
        </li>
        <li style={{ listStyle: "outside" }}>
          <strong>componentWillUnmount</strong> - компонент був видалений
        </li>
      </ul>
      <h3>Переваги класових компонент</h3>
      <ol>
        <li style={{ listStyle: "outside" }}>
          <strong>Стан та методи:</strong> Класові компоненти можуть мати
          внутрішній стан та методи, що дозволяє зберігати дані та взаємодіяти з
          ними.
        </li>
        <li style={{ listStyle: "outside" }}>
          <strong>Життєвий цикл:</strong> Класові компоненти мають більший
          контроль над життєвим циклом, що може бути корисним для виконання
          додаткових дій.
        </li>
      </ol>
      <h3>Недоліки класових компонент</h3>
      <ol>
        <li style={{ listStyle: "outside" }}>
          <strong>Складність</strong>: Класові компоненти потребують більше коду
          та вивчення, особливо для початківців.
        </li>
        <li style={{ listStyle: "outside" }}>
          <strong>Зрозумілість:</strong> Класові компоненти можуть бути менш
          зрозумілими та важчими для читання, особливо для великих проектів.
        </li>
      </ol>
      <div className={s.interestBox}>
        <div className={s.interestHeader}>
          <svg className={s.textIcon}>
            <use href={sprite + "#target"}></use>
          </svg>
          <h5 style={{ fontWeight: "900", fontSize: "23px" }}>ЦІКАВО</h5>
        </div>
        <p>
          Класові компоненти - це потужний інструмент для створення складних
          додатків на React. Вони надають можливість використовувати стан,
          методи та життєвий цикл для побудови більш динамічних інтерфейсів.
          Однак, важливо збалансувати використання класових та функціональних
          компонентів в залежності від потреб вашого проекту.
        </p>
      </div>
      <h2>Функціональні компоненти</h2>
      <p>
        <strong>Функціональні компоненти</strong> - це прості функції, які
        приймають властивості (props) та повертають JSX. Вони використовуються
        для відображення статичного контенту та реюзабельних елементів
        інтерфейсу.
      </p>
      <p>Приклад функціонального компонента:</p>
      <SyntaxHighlighter language="javascript" style={codeStyle}>
        {`
import React from 'react';

function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

export default Greeting
`}
      </SyntaxHighlighter>
      <p>
        У прикладі вище, <strong>Greeting</strong> - це функція, яка відображає
        привітання із переданим іменем.
      </p>
      <h3>Практичне застосування</h3>
      <p>
        Функціональні компоненти використовуються для створення реюзабельних та
        простих елементів інтерфейсу. Вони особливо корисні для:
      </p>
      <ul>
        <li style={{ listStyle: "outside" }}>
          Відображення статичного контенту, такого як текст, зображення тощо.
        </li>
        <li style={{ listStyle: "outside" }}>
          Створення простих кнопок, форм, списків і інших UI-елементів.
        </li>
        <li style={{ listStyle: "outside" }}>
          Організації структури додатку, розділення інтерфейсу на менші частини.
        </li>
      </ul>
      <h3>Життєвий цикл функціональних компонентів</h3>
      <p>
        Життєвий цикл функціональних компонентів менше складний порівняно з
        класовими компонентами. Однак, у React 16.8 із введенням Hooks з'явилася
        можливість використовувати стан та ефекти у функціональних компонентах.
      </p>
      <h3>Переваги та недоліки</h3>
      <h4>Переваги функціональних компонентів:</h4>
      <ul>
        <li style={{ listStyle: "outside" }}>
          Простота: Їх легше читати, розуміти та використовувати.
        </li>
        <li style={{ listStyle: "outside" }}>
          Відсутність стану: Функціональні компоненти не мають внутрішнього
          стану за замовчуванням, що сприяє представленню UI.
        </li>
      </ul>
      <h4>Недоліки функціональних компонентів:</h4>
      <ul>
        <li style={{ listStyle: "outside" }}>
          <strong> Відсутність життєвого циклу:</strong> Функціональні
          компоненти не мають повного життєвого циклу, але Hooks вирішують цю
          проблему.
        </li>
        <li style={{ listStyle: "outside" }}>
          <strong> Відсутність стану: </strong>Якщо потрібно внутрішнє станове
          управління, треба використовувати Hooks або класові компоненти.
        </li>
      </ul>
      <div className={s.interestBox}>
        <div className={s.interestHeader}>
          <svg className={s.textIcon}>
            <use href={sprite + "#target"}></use>
          </svg>
          <h5 style={{ fontWeight: "900", fontSize: "23px" }}>ЦІКАВО</h5>
        </div>
        <p>
          Функціональні компоненти є потужним інструментом для розробки
          реюзабельних та простих UI-елементів у вашому React-додатку. Вони
          надають чистоту, зрозумілість та легкість в розробці. Зі введенням
          Hooks, ви можете використовувати і стан, і ефекти, що робить
          функціональні компоненти ще більш потужними.
        </p>
      </div>
      <h2>Порівнянн структури функціональної та класової компоненти</h2>
      <img
        src={classFnComponent}
        alt=""
        style={{ width: "80%", marginLeft: "10vw" }}
      />
    </div>
  );
};

export default Component;
