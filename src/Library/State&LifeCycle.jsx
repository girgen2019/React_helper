/** @format */

import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

export const State_LifeCycle = () => {
  return (
    <div className="content" style={{ overflowY: 'scroll' }}>
      <h1 className="title">State</h1>
      <p className="content_wrapper">
        Компоненты в React могут иметь свой state для хранения в нем состояния.
        Состоянием компонента можно управлять с помощью функции
        <Paragraph style={{ margin: '0', display: 'inline' }}>
          <Text keyboard>this.setState(state, [callback]).</Text>
        </Paragraph>
        Данная функция добавляет в очередь изменения состояния компонента. Так
        же она указывает React, что компонент и его дочерние элементы должны
        быть повторно отрисованы с уже обновленным состоянием. Функция
        <Paragraph style={{ margin: '0', display: 'inline' }}>
          <Text keyboard>this.setState(state, [callback])</Text>
        </Paragraph>
        является ассинхронной.
      </p>
      <p className="content_wrapper">
        <h2
          style={{
            textAlign: 'center',
            background: 'aliceblue',
            margin: '0px',
          }}
        >
          Особенности использовани setState(state, [callback])
        </h2>
        <ul>
          <li>
            Первый аргумент
            <Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>setState()</Text>
            </Paragraph>
            может быть как объектом нового состояния так и функцией. Если ваше
            новое состояние основывается на значении предыдущего состояния, то
            во избежание багов всегда передавайте в качестве первого аргумента
            функцию.
          </li>
          <li>
            Функция, как первый аргумент
            <Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>this.setState()</Text>
            </Paragraph>
            , в качестве аргументов получает предыдущее состояние state и
            обновленные props компонента. Для того чтобы произошла перерисовка
            компонента данная функция должна вернуть объект с новым состоянием.
          </li>
          <li>
            Если нам необходимо по тем или иным причинам избежать перерисовки,
            то данная функция должна вернуть{' '}
            <Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>null.</Text>
            </Paragraph>
          </li>
          <li>
            Вторым аргументом{' '}
            <Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>this.setState()</Text>
            </Paragraph>
            принимает callback функцию которая выполниться сразу после
            завершения обновления состояния.
          </li>
          <li>
            Никогда не вызывайте{' '}
            <Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>this.setState()</Text>
            </Paragraph>{' '}
            в конструкторе – иначе вы получите ошибку «Can only update a mounted
            or mounting component». Поэтому для инициализации переменных внутри
            конструктора следует использовать только this.state.
          </li>
        </ul>
      </p>
      <p className="content_wrapper">
        <h2
          style={{
            textAlign: 'center',
            background: 'aliceblue',
            margin: '0px',
          }}
        >
          Props
        </h2>
        Компоненты в React могут иметь свойства (props). Пропсы это данные
        которые родительский компонент может передать дочернему. Пропсы нельзя
        изменять и мутировать. В React есть одно обязательное правило -
        компоненты обязаны вести себя как чистые функции по отношению к своим
        пропсам.
      </p>
    </div>
  );
};
