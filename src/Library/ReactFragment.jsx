/** @format */
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

export const ReactFragment = () => {
  return (
    <>
      <div className="content">
        <div>
          <h1 className="title"> Списки и ключи</h1>
          <p className="content_wrapper">
            Возврат нескольких элементов из компонента является распространённой
            практикой в React. Фрагменты позволяют формировать список дочерних
            элементов, не создавая лишних узлов в DOM. Таким образом наша верска
            не будет ломаться, в тех случаях когда лишний DOM узел препятствует
            корректной работе стилей.
          </p>
          <h2
            style={{
              textAlign: 'center',
              margin: '5px 0px',
            }}
          >
            Сокращённая запись
          </h2>
          <p className="content_wrapper">
            Существует сокращённая запись объявления фрагментов. Она выглядит
            как пустые теги. Основное отличие сокращенной записи от
            <Paragraph style={{ margin: '0', display: 'inline' }}>
              <Text keyboard>React.Fragment</Text>
            </Paragraph>
            в том что последнней можно присваивать ключи (проп key).
          </p>
        </div>
      </div>
    </>
  );
};
