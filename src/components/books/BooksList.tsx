import React, { useEffect, useState } from 'react';
import { getAllBooks, getBookById } from '../../services/booksService';
import { Book } from '../../models/Book';
import { Button, Spin, Table } from 'antd';
import { useStore } from '../../store/translationStore';
import { useNavigate } from 'react-router-dom';
import { getBookAsText } from '../../utils/fileUtils';
import { READ_TRANSLATE_PATH } from '../../utils/constants';

export const BooksList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const setToTranslate = useStore((state) => state.setTotranslate);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getAllBooks().then((books) => {
      setBooks(books);
      setLoading(false);
    });
  }, []);

  const readBook = (id: string) => {
    setLoading(true);
    getBookById(id).then((book) => {
      const textContent = getBookAsText(book);
      setLoading(false);
      if (!textContent) {
        alert('It seems that this book is empty, please select another one');
      } else {
        setToTranslate(textContent);
        navigate(`${READ_TRANSLATE_PATH}`);
      }
    });
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    },
    {
      dataIndex: 'id',
      key: 'id',
      render: (id: string) => (
        <Button onClick={() => readBook(id)}> Read </Button>
      ),
    },
  ];

  return (
    <div className="inputTextAreaContainer">
      {loading ? (
        <Spin />
      ) : books?.length ? (
        <Table columns={columns} dataSource={books} />
      ) : (
        <div> No books available </div>
      )}
    </div>
  );
};
