/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Form } from '@unform/web';
import {
  MdInsertPhoto,
  MdCancel,
  MdCheckCircle,
  MdRemoveRedEye,
  MdReply,
} from 'react-icons/md';

import BannerInput from './BannerInput';

import './styles.css';

import api from '~/services/api';

import {
  CardButton,
  CardHeader,
  CardBody,
  WindowBannerImg,
  DivButton,
  Close,
} from '../styles/styles';

function Banner() {
  const { url } = useSelector((state) => state.file);
  const [files, setItem] = useState([]);

  const [tagWindow, setTagWindow] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  useEffect(() => {
    api.get('files').then((response) => {
      setItem(response.data);
    });
  }, [url]);

  // function handleInputChange(event) {
  //   const { name, value } = event.target;

  //   setFormData({ ...formData, [name]: value });
  // }

  function handleWindow() {
    setTagWindow(!tagWindow);
  }

  // function handleSelectImage() {
  //   setSelectedImage(!selectedImage);
  // }

  function handleSelectItem(id) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  function handleSelectImage(id) {
    setSelectedImage([id]);
  }

  return (
    <>
      <CardButton onClick={handleWindow}>
        <span>
          <div />
        </span>
        <CardHeader>
          <MdInsertPhoto color="#FFF" size={35} />
        </CardHeader>
        <CardBody>
          <strong>Baner pincipal</strong>
          <p>
            Selecione uma nova imagem para o seu banner principal wedqwedqedqwe
          </p>
        </CardBody>
      </CardButton>

      <WindowBannerImg tag={tagWindow} tagImg={selectedImage}>
        <Form>
          <Close>
            <MdCancel color="red" size={20} onClick={() => handleWindow([])} />
          </Close>
          <h3>Escolha qualquer imagem para banner de fundo.</h3>
          <fieldset>
            <ul className="items-grid">
              {files.map((file) => (
                <>
                  <li key={file._id}>
                    <p>{file.name}</p>
                    <span
                      className={
                        selectedItems.includes(file._id) ? 'selected' : ''
                      }
                    >
                      <img
                        className={
                          selectedImage.includes(file._id) ? 'select' : ''
                        }
                        src={file.url}
                        alt={file.name}
                        onClick={() => handleSelectItem(file._id)}
                      />

                      <MdCancel
                        color="red"
                        size={25}
                        className={
                          selectedImage.includes(file._id)
                            ? 'closeSelected'
                            : 'closeSelectedNone'
                        }
                        onClick={() => handleSelectImage([])}
                      />
                      <a href={file.url}>
                        <MdReply
                          color="blue"
                          size={25}
                          className={
                            selectedImage.includes(file._id)
                              ? 'closeSelectedLink'
                              : 'closeSelectedNone'
                          }
                        />
                      </a>
                    </span>

                    <div>
                      <button
                        onClick={() => handleSelectImage(file._id)}
                        type="button"
                      >
                        <MdRemoveRedEye color="#999" size={20} />
                      </button>
                      <button
                        onClick={() => handleSelectItem(file._id)}
                        type="button"
                      >
                        <MdCheckCircle
                          size={20}
                          color={
                            selectedItems.includes(file._id)
                              ? '#34CB79'
                              : '#999'
                          }
                        />
                      </button>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </fieldset>
        </Form>
        <DivButton>
          <BannerInput />
          <button className="btn btn1" type="button">
            <strong>Salvar</strong>
          </button>
          {/* <button type="button">Cancelar</button> */}
        </DivButton>
      </WindowBannerImg>
    </>
  );
}

export default Banner;
