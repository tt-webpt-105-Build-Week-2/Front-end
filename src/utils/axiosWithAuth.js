import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'https://secret-family-recipes-6.herokuapp.com/',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  })
}

export default axiosWithAuth