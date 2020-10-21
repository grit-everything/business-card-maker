import React from 'react';
import { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    //input에 있는 button은 submit 기능이 있어 페이지를 reload 시킨다.
    inputRef.current.click();
  };
  const onChange = async (e) => {
    // imageUploader.upload(e.target.files[0]).then(console.log);
    //=> ImageUploader가 async이기 떄문에 promise를 리턴하고, then then tehn 해서 처리된 값을 사용 또는. e 자체에 async를 해주고 await 를 사용해도 된다
    console.log(e.target.files[0]);
    console.log(e.target);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input} //
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button
        className={styles.button} //
        onClick={onButtonClick}
      >
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
