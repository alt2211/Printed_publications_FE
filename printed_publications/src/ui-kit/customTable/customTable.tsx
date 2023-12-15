import React, { useContext, useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Book {
  key: string;
  author: string;
  title: string;
  date: Date;
  city: string;
  description?: string;
  quantity: number;
  lbc: string;
  udc: string;
  ISBN: string;
  publication_type: string;
}

interface EditableRowProps {
  index: number;
}



const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Book;
  record: Book;
  handleSave: (record: Book) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  const columnRules = {
    author: { required: true },
  };

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `"${title}" является обязательным полем.`,
          },

        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} style={{ width: `auto`}}/>
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const App: React.FC = () => {
    const handleLoadBooks = async () => {
        const userString = localStorage.getItem('user');
        const user = userString ? JSON.parse(userString) : null;
        try {
          //Переделать через env
          const response = await fetch('http://localhost:5000/loadList', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: user.id,
            }),
          });
          const booksFromServer = await response.json();
          const booksWithKeys = booksFromServer.map((book, index) => ({
            ...book,
            key: String(index + 1),
          }));
          setBookData(booksWithKeys);
        //   setBookData(await response.json());
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };
      useEffect(() => {
        handleLoadBooks();
      }, []);

  const [bookData, setBookData] = useState<Book[]>([
    {
      key: '0',
      author: 'Author 0',
      title: 'Title 0',
      date: new Date(),
      city: 'City 0',
      quantity: 1,
      lbc: 'LBC 0',
      udc: 'UDC 0',
      ISBN: 'ISBN 0',
      publication_type: 'Type 0',
    },
    {
      key: '1',
      author: 'Author 1',
      title: 'Title 1',
      date: new Date(),
      city: 'City 1',
      quantity: 2,
      lbc: 'LBC 1',
      udc: 'UDC 1',
      ISBN: 'ISBN 1',
      publication_type: 'Type 1',
    },
  ]);

  const handleDelete = (key: React.Key) => {
    const indexBD = parseInt(String(key), 10);
    const handleDeleteBD = async () => {
        try {
          //Переделать через env
          const response = await fetch('http://localhost:5000/deleteBook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData[indexBD-1]),
          });
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };
      handleDeleteBD();

    const newData = bookData.filter((item) => item.key!== key)
    setBookData(newData);
  };

  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
      title: 'Автор',
      dataIndex: 'author',
      editable: true,
    },
    {
      title: 'Название издания',
      dataIndex: 'title',
      editable: true,
    },
    {
      title: 'Дата публикации',
      dataIndex: 'date',
      editable: true,
    },
    {
      title: 'Город',
      dataIndex: 'city',
      editable: true,
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      editable: true,
    },
    {
      title: 'ББК',
      dataIndex: 'lbc',
      editable: true,
    },
    {
      title: 'УДК',
      dataIndex: 'udc',
      editable: true,
    },
    {
      title: 'ISBN',
      dataIndex: 'ISBN',
      editable: true,
    },
    {
      title: 'Тип публикации',
      dataIndex: 'publication_type',
      editable: true,
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        editable: true,
    },
    {
      title: 'Операция',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
        bookData.length >= 1 ? (
          <Popconfirm title="Удалить?" 
          okText="Да"
          cancelText="Отмена"
          onConfirm={() => handleDelete(record.key)}>
            <a style={{ color: '#F44B4B'}}>Удалить</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleSave = (row: Book) => {
    const newData = [...bookData];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    const handleEditBook = async () => {
        try {
          //Переделать через env
          const response = await fetch('http://localhost:5000/editBook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData[index]),
          });
        //   console.log(index)
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };
    handleEditBook();
    // handleLoadBooks();
    setBookData(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Book) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <div>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={bookData}
        columns={columns as ColumnTypes}
      />
    </div>
  );
};

export default App;
