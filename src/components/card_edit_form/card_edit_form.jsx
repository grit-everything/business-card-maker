import React from 'react';
import styles from './card_edit_form.module.css';
import Button1 from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const { id, name, company, theme, title, email, message, fileName, fileURL } = card;

  const onsubmit = () => {
    console.log('good');
  };

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input className={styles.input} type="text" name="company" value={company} />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea className={styles.textarea} name="message" value={message}></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button1 name="Delete" onClick={onsubmit} />
    </form>
  );
};

export default CardEditForm;
