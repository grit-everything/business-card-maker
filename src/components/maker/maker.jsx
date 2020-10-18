import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';
const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Jake',
      company: 'DTL',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'gomgom3409@gmail.com',
      message: 'grit is everything',
      fileName: 'Jeong Cheol',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Jenny',
      company: 'DTL',
      theme: 'light',
      title: 'Software Engineer',
      email: 'gomgom3409@gmail.com',
      message: 'grit is everything',
      fileName: 'Jeong Cheol',
      fileURL: '',
    },
    3: {
      id: '3',
      name: 'Leon',
      company: 'DTL',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'gomgom3409@gmail.com',
      message: 'grit is everything',
      fileName: 'Jeong Cheol',
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards} //
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>

      <Footer />
    </section>
  );
};

export default Maker;
