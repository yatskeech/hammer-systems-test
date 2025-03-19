import fetch from 'auth/FetchInterceptor'

const UsersService = {}

UsersService.getUsers = function (params) {
  return fetch({
    url: '/users',
    method: 'get',
    params
  })
}

UsersService.updateUser = function (user) {
  return fetch({
    url: `/users/${user.id}`,
    method: 'put',
    data: user
  })
}

export default UsersService