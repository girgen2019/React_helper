/** @format */
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

export const Hooks = () => {
  return (
    <>
      <div className="content" style={{ overflowY: 'scroll' }}>
        <div>
          <h1 className="title"> Hooks</h1>
          <p className="content_wrapper">
            Хуки — это просто еще один способ описывать логику ваших
            компонентов. Он позволяет добавить к функциональным компонентам
            некоторые возможности, ранее присущие только компонентам на классах.
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Какие задачи можно решать с помощью Хуков?
          </h2>
          <p className="content_wrapper">
            <ul>
              <li> Поддержка внутреннего состояния.</li>
              <li>
                Поддержка побочных эффектов. Например — сетевых запросов или
                запросов к WebSocket: подписка, отписка от каких-то каналов.
                Или, возможно, речь о запросах к каким-то другим асинхронным или
                синхронным API браузера.
              </li>
              <li>
                Дают нам доступ к жизненному циклу компонента, к его началу
                жизни, то есть монтированию, к обновлению его пропсов и к его
                размонтированию.
              </li>
            </ul>
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Какие преимущества хуков?
          </h2>
          <p className="content_wrapper">
            <ul>
              <li> Упрощение логики связанной с жизненным циклом.</li>
              <li>Не нужно помнить о this.</li>
              <li>Гибче возможности оптимизации за счет мемоизации</li>
              <li>Легче шарить логику состояния (кастомные хуки).</li>
              <li>
                Эффективнее минимизация (не нужно сохранять имена методов, не
                нужно работать с прототипами).
              </li>
            </ul>
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Ограничения хуков.
          </h2>
          <p className="content_wrapper">
            <ul>
              <li>
                Нельзя использовать в компонентах на классах, только для
                функциональных компонентов.
              </li>
              <li>
                Нельзя вызывать внутри условий, циклов, вложенных функций.
              </li>
            </ul>
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            useState()
          </h2>
          <p className="content_wrapper">
            <Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>useState</Text>
            </Paragraph>
            — это хук который наделяет наш функциональный компонент внутренним
            состоянием. React будет хранить это состояние между рендерами. Вызов
            useState возвращает две вещи: текущее значение состояния и функцию
            для его обновления.
            <br /> useState() не объеденяет измененные поля с текущим объектом
            состояния, как это делает классовый метод this.setState(). Поэтому в
            таких случаях используйте аргумент предыдущего состояния функции
            обновления состояния:
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            useEffect()
          </h2>
          <p className="content_wrapper">
            Хук эффекта даёт нам возможность выполнять побочные эффекты в
            функциональном компоненте: Если вам знакомы классовые методы
            жизненного цикла React, хук useEffect представляет собой
            совокупность методов:
            <ul>
              <li>componentDidMount</li>
              <li>componentDidUpdate</li>
              <li>componentWillUnmount</li>
            </ul>
            Эффекты выполняются один раз при каждом рендере!
            <br />
            Существует два распространенных вида побочных эффектов в компонентах
            React: компоненты, которые требуют и не требуют сброса.
          </p>
          <p className="content_wrapper">
            <h2
              style={{
                textAlign: 'center',
                background: 'aliceblue',
                margin: '0px',
              }}
            >
              Компоненты которые не требуют сброса
            </h2>
            Когда мы хотим выполнить дополнительный код после того, как React
            обновил DOM. Например:
            <ul>
              <li> сетевые запросы;</li>
              <li> изменения DOM вручную;</li>
              <li>логирование;</li>
            </ul>
            После того, как мы запустили их, можно сразу забыть о них, ведь
            больше никаких дополнительных действий не требуется. Тем самым мы
            имитируем метод жизненного цикла componentDidMount().
          </p>
          <p className="content_wrapper">
            <h2
              style={{
                textAlign: 'center',
                background: 'aliceblue',
                margin: '0px',
              }}
            >
              Компоненты которые требуют сброса
            </h2>
            Например, предположим, что у нас есть некий модуль ChatAPI, с
            помощью которого мы можем подписаться на статус друга в сети. Но при
            размонтировании компонента нам необходимо отписаться от статуса. Для
            этого мы должны в useEffect c помощью return вернуть функцию в
            которой будем вызывать метод отписки. Таким образом мы сымитируем
            метод жизненного цикла componentWillUnmount().
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Создание кастомных хуков
          </h2>
          <p className="content_wrapper">
            Пользовательский хук — это JavaScript-функция, имя которой
            начинается с «use», и которая может вызывать другие хуки. В отличие
            от React компонента, пользовательский хук не обязательно должен
            иметь конкретную сигнатуру. Мы можем решить, что он принимает в
            качестве аргументов, и должен ли он что-либо возвращать. Так же как
            и в компонентах, убедитесь, что вы не используете другие хуки внутри
            условных операторов и вызываете их на верхнем уровне вашего хука.
          </p>
        </div>
      </div>
    </>
  );
};
