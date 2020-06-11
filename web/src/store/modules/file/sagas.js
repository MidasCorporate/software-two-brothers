import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

import { uploadSucess } from './actions';

export function* upload({ payload }) {
  try {
    const { url } = payload;

    yield put(uploadSucess(url));

    history.push('/dashboardadm');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export default all([takeLatest('@file/UPLOAD_IN_REQUEST', upload)]);
