/** @format */

import { Typography } from 'antd';

export const About = () => {
  const { Paragraph, Text } = Typography;
  return (
    <>
      <div className="content" style={{ overflowY: 'scroll' }}>
        <div>
          <h1 className="title"> React это</h1>
          <p className="content_wrapper">
            React — это декларативная, эффективная и гибкая
            JavaScript-библиотека для создания пользовательских интерфейсов. Она
            позволяет вам собирать сложный UI из маленьких изолированных
            кусочков кода, называемых «компонентами».
          </p>
          <p className="content_wrapper">
            <ul>
              <b>Основные концепции:</b>
              <li>компонентный подход;</li>
              <li>однонаправленный поток данных;</li>
              <li> “виртуальный” DOM;</li>
            </ul>
          </p>
          <p className="content_wrapper">
            <ul>
              <b>Преимущества:</b>
              <li> переиспользование компонентов;</li>
              <li>возможность хранения данных в стейте компонента;</li>
              <li>быстрота (благодаря Virtual DOM) и простота (из-за JSX);</li>
            </ul>
          </p>

          <p className="content_wrapper">
            JSX — расширение языка JavaScript. Мы рекомендуем использовать его,
            когда требуется объяснить React, как должен выглядеть UI. JSX
            напоминает язык шаблонов, наделённый силой JavaScript. После
            компиляции каждое JSX-выражение становится обычным вызовом
            JavaScript-функции, результат которого — объект JavaScript. Из этого
            следует, что JSX можно использовать внутри инструкций if и циклов
            for, присваивать переменным, передавать функции в качестве аргумента
            и возвращать из функции.
            <li>
              JSX компилируется c помощью Bable в{' '}
              <Paragraph style={{ display: 'inline' }}>
                <Text keyboard>React.createElement()</Text>
              </Paragraph>
            </li>
          </p>
          <h2 className="title">Рендеринг элемента в DOM</h2>
          <p className="content_wrapper">
            <Paragraph style={{ display: 'inline' }}>
              <Text keyboard>&lt;div&gt;id="root"&lt;/div&gt;</Text>
            </Paragraph>
            Мы назовём его «корневым» узлом DOM, так как React DOM будет
            управлять его содержимым. Обычно в приложениях, написанных полностью
            на React, есть только один корневой элемент. При встраивании React в
            существующее приложение вы можете рендерить во столько независимых
            корневых элементов, во сколько посчитаете нужным. Для рендеринга
            React-элемента, сперва передайте DOM-элемент в{' '}
            <Paragraph style={{ display: 'inline' }}>
              <Text keyboard>&lt;ReactDOM.createRoot( )&gt;</Text>
            </Paragraph>
            , далее передайте React-элемент в
            <Paragraph style={{ display: 'inline' }}>
              <Text keyboard>&lt;root.render( )&gt;</Text>
            </Paragraph>
            :
          </p>
        </div>
      </div>
    </>
  );
};
