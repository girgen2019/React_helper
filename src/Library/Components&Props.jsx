/** @format */
import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
export const ComponentsProps = () => {
  return (
    <>
      <div className="content">
        <h1 className="title">Компоненты и пропсы</h1>
        <p className="content_wrapper">
          Компоненты позволяют разбить интерфейс на независимые части, про
          которые легко думать в отдельности. Их можно складывать вместе и
          использовать несколько раз. Компоненты бывают функциональные и
          классовые.
          <Paragraph style={{ display: 'inline' }}>
            <Text keyboard>{`function Welcome() {
                return <h1>Привет, мир!</h1>;
            }`}</Text>
          </Paragraph>
          Эта функция — компонент, потому что она получает данные в одном
          объекте («пропсы») в качестве параметра и возвращает React-элемент. Мы
          будем называть такие компоненты «функциональными», так как они
          буквально являются функциями. Ещё компоненты можно определять как
          классы ES6:
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
        <p className="content_wrapper">
          <Paragraph style={{ margin: '0' }}>
            <Text keyboard>{`const element = <Welcome name="Алиса" />;`}</Text>
          </Paragraph>
          Когда React встречает подобный элемент, он собирает все JSX-атрибуты и
          дочерние элементы в один объект и передаёт их нашему компоненту. Этот
          объект называется «пропсы» (props).
        </p>
        <p className="content_wrapper">
          Компонента должна себя вести как чистая функция. «Чистой» называется
          функция, которая: Для одинаковых входных данных всегда возвращает один
          результат. Не имеет побочных эффектов (то есть не изменяет внешние
          состояния). Не зависит от внешних состояний.
        </p>
      </div>
    </>
  );
};
