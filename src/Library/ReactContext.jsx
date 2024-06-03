/** @format */
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

export const ReactContext = () => {
  return (
    <>
      <div className="content">
        <div>
          <h1 className="title">React Context</h1>
          <p className="content_wrapper">
            Контекст разработан для передачи данных, которые можно назвать
            «глобальными» для всего дерева React-компонентов (например, текущий
            аутентифицированный пользователь, UI-тема или выбранный язык).
            Обычно контекст используется, если необходимо обеспечить доступ
            данных во многих компонентах на разных уровнях вложенности. По
            возможности не используйте его, так как это усложняет повторное
            использование компонентов.
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Важно!
          </h2>
          <p className="content_wrapper">
            Если вы хотите избавиться от передачи некоторых пропсов на множество
            уровней вниз, обычно композиция компонентов является более простым
            решением, чем контекст.
            <Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>React.Fragment</Text>
            </Paragraph>
            в том что последнней можно присваивать ключи (проп key).
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            React Context API
          </h2>
          <p className="content_wrapper">
          Для работы с контекстом в React Context существуют такие методы:
          <ul>
            <li><Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>React.createContext()</Text>
            </Paragraph></li>
            <li><Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>Context.Provider</Text>
            </Paragraph></li>
            <li><Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>  Context.Consumer</Text>
            </Paragraph></li>
            <li><Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>Class.contextType</Text>
            </Paragraph></li>
          </ul>
            
          </p>
        </div>
      </div>
    </>
  );
};
