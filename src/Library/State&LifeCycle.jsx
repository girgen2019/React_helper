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
          <Text>
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
      </p>
      <p className="content_wrapper">
        Единственный допустимый способ обновления состояния компонента – через
        setState().
        <b>Так нельзя менять состояние: this.state.username='Mark'</b><br/>
        1 способ изменить state:
        <Paragraph style={{ margin: '0' }}>
          <Text>
            <pre>{`this.setState({username:'Mark'});`}</pre>
          </Text>
        </Paragraph>
      </p>
    </div>
  );
};
