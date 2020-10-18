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
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>

      <Footer />
    </section>
  );
};

export default Maker;
