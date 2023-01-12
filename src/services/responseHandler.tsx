// Response Handler
export function handleResponse(response: any) {
  if (response.data) {
    return response.data;
  }

  if (response.isSuccess) {
    return response.isSuccess;
  }

  return response;
}

export function handleError(error: any) {
  if (error.data) {
    return error.data;
  }
  return error;
}
