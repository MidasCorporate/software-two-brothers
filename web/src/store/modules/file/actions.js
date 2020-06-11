export function uploadFileRequest(url) {
  return {
    type: '@file/UPLOAD_IN_REQUEST',
    payload: { url },
  };
}

export function uploadSucess(url) {
  return {
    type: '@file/SIGN_IN_SUCCESS',
    payload: { url },
  };
}
