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
              <li>
                <Paragraph style={{ margin: '0', display: 'inline' }}>
                  <Text keyboard>React.createContext()</Text>
                </Paragraph>
              </li>
              <li>
                <Paragraph style={{ margin: '0', display: 'inline' }}>
                  <Text keyboard>Context.Provider</Text>
                </Paragraph>
              </li>
              <li>
                <Paragraph style={{ margin: '0', display: 'inline' }}>
                  <Text keyboard> Context.Consumer</Text>
                </Paragraph>
              </li>
              <li>
                <Paragraph style={{ margin: '0', display: 'inline' }}>
                  <Text keyboard>Class.contextType</Text>
                </Paragraph>
              </li>
            </ul>
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            React.createContext()
          </h2>
          <p className="content_wrapper">
            Создаёт объект Context. Когда React рендерит компонент, который
            подписан на этот объект, React получит текущее значение контекста из
            ближайшего подходящего Provider выше в дереве компонентов. Аргумент
            defaultValue используется только в тoм случае, если для компонента
            нет подходящего Provider выше в дереве.
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Context.Provider
          </h2>
          <p className="content_wrapper">
            Каждый объект Context используется вместе с Provider компонентом,
            который позволяет дочерним компонентам, использующим этот контекст,
            подписаться на его изменения. Компонент Provider принимает проп
            value, который будет передан во все компоненты, использующие этот
            контекст и являющиеся потомками этого компонента Provider. Один
            Provider может быть связан с несколькими компонентами,
            потребляю-щими контекст.
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Context.Provider. Важно!
          </h2>
          <p className="content_wrapper">
            Все потребители, которые являются потомками Provider, будут повторно
            рендериться, как только проп value у Provider изменится. Потребитель
            (включая .contextType и useContext) перерендерится при изменении
            контекста, даже если его родитель, не использующий данный контекст,
            блокирует повторные рендеры с помощью shouldComponentUpdate.
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Class.contextType
          </h2>
          <p className="content_wrapper">
            В свойство класса contextType может быть назначен объект контекста,
            созданный с помощью React.createContext(). С помощью этого свойства
            вы можете использовать ближайшее и актуальное значение указанного
            контекста при помощи this.context. В этом случае вы получаете доступ
            к контексту, как во всех методах жизненного цикла, так и в рендер
            методе.
          </p>
          <p className="content_wrapper">
            Если вы используете экспериментальный синтаксис публичных полей
            класса, вы можете использовать static поле класса, чтобы
            инициализировать ваш contextType.
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Context.Consumer
          </h2>
          <p className="content_wrapper">
            Consumer — это React-компонент, который подписывается на изменения
            контекста. Consumer принимает функцию в качестве дочернего
            компонента. Эта функция принимает текущее значение контекста и
            возвращает React-компонент. Передаваемый аргумент value будет равен
            ближайшему (вверх по дереву) значению этого контекста, а именно
            пропу value компонента Provider. Если такого компонента Provider не
            существует, аргумент value будет равен значению defaultValue,
            которое было передано в React.createContext().
          </p>
        </div>
      </div>
    </>
  );
};
