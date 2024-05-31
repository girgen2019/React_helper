/** @format */
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;
export const Components_Props = () => {
  return (
    <>
      <div className="content" style={{overflowY: 'scroll' }}>
        <h1 className="title">Компоненты и пропсы</h1>
        <p className="content_wrapper">
          Компоненты позволяют разбить интерфейс на независимые части, про
          которые легко думать в отдельности. Их можно складывать вместе и
          использовать несколько раз. Компоненты бывают функциональные и
          классовые.
          <Paragraph style={{ display: 'inline' }}>
            <Text >
              <pre>{`
            function Welcome() {
                return <h1>Привет, мир!</h1>;
            }
            `}</pre>
            </Text>
          </Paragraph>
          Эта функция — компонент, потому что она получает данные в одном
          объекте («пропсы») в качестве параметра и возвращает React-элемент. Мы
          будем называть такие компоненты «функциональными», так как они
          буквально являются функциями. Ещё компоненты можно определять как
          классы ES6:
          <Paragraph style={{ margin: '0' }}>
            <Text >
              <pre>
                {`class Welcome extends React.Component {
                render() {
                    return <h1>Привет, {this.props.name}</h1>;
                }
            }`}
              </pre>
            </Text>
          </Paragraph>
        </p>
        <p className="content_wrapper">
          <Paragraph style={{ margin: '0' }}>
            <Text >{`const element = <Welcome name="Алиса" />;`}</Text>
          </Paragraph>
          Когда React встречает подобный элемент, он собирает все JSX-атрибуты и
          дочерние элементы в один объект и передаёт их нашему компоненту. Этот
          объект называется «пропсы» (props).
        </p>
        <p className="content_wrapper">
          Компонента должна себя вести как чистая функция. «Чистой» называется
          функция, которая: Для одинаковых входных данных всегда возвращает один
          результат. Не имеет побочных эффектов (то есть не изменяет внешние
          состояния). Не зависит от внешних состояний. Такие функции называют
          «чистыми», потому что они не меняют свои входные данные и предсказуемо
          возвращают один и тот же результат для одинаковых аргументов.
          <b>
            React-компоненты обязаны вести себя как чистые функции по отношению
            к своим пропсам.
          </b>
        </p>
      </div>
    </>
  );
};
