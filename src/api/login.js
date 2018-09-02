import request from '@/utils/request';

export function loginByUsername(username, password) {
  const data = {
    username,
    password,
  };
  return request({
    url: '/logout',
    method: 'post',
    data,
  });
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get',
  });
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token },
  });
}
