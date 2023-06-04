// url для локальной увязки
// export const baseUrl = 'http://localhost:3001';
export const baseUrl = 'https://api.movies.nabiulin.nomoredomains.club';

const request = ({
  url,
  method = 'POST',
  // token,
  data,
}) => {
  return fetch (`${baseUrl}${url}`, {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    ...!!data && {body: JSON.stringify(data)},
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response.status);
    });
};

export const register = (password, email, name) => {
  return request({
    url: '/signup',
    data: { password, email, name }
  });
};

export const authorize = (password, email) => {
  return request({
    url: '/signin',
    data: { password, email }
  });
};

export const logout = () => {
  return request({
    url: '/signout',
    method: 'DELETE',
  });
};

export const checkToken = () => {
  return request({
    url: '/users/me',
    method: 'GET',
  });
};
