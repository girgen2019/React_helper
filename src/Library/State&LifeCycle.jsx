/** @format */

import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

export const State_LifeCycle = () => {
  return (
    <div className="content" style={{ overflowY: 'scroll' }}>
      <h1 className="title">Состояние и жизненный цикл</h1>
      <p className="content_wrapper">
        State (состояние) в React – это объект простого JS, позволяющий
        отслеживать данные компонента. Состояние компонента может меняться.
        Смена состояния компонента зависит от функциональности приложения.
        Изменения могут основываться на ответе от пользователя, новых сообщениях
        с сервера, ответа сети и т.д. Состояние компонента должно быть приватным
        для компонента и контролироваться им. Изменения состояния компонента
        необходимо делать внутри компонента – инициализация и обновление
        состояния компонента.
        <Paragraph style={{ margin: '0' }}>
          <Text keyboard>
            <pre>
              {`
              class App extends React.Component {
                constructor(props) {
                    super(props)
                    this.state = { username: 'johndoe' }
                }
                render() {
                    return (
                        <div> { this.state.username } </div>
                    )
                }
            }
                `}
            </pre>
          </Text>
        </Paragraph>
        Эта функция — компонент, потому что она получает данные в одном объекте
        («пропсы») в качестве параметра и возвращает React-элемент. Мы будем
        называть такие компоненты «функциональными», так как они буквально
        являются функциями. Ещё компоненты можно определять как классы ES6:
        <Paragraph style={{ margin: '0' }}>
          <Text keyboard>
            {`
            class Welcome extends React.Component {`}
          </Text>
        </Paragraph>
        <Paragraph style={{ margin: '0' }}>
          <Text keyboard>{`render() {`} </Text>
        </Paragraph>
        <Paragraph style={{ margin: '0' }}>
          <Text keyboard>
            {`return <h1>Привет, {this.props.name}</h1>;
  }
            }`}{' '}
          </Text>
        </Paragraph>
      </p>
    </div>
  );
};
