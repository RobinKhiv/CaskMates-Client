import config from '../config';
import TokenService from './token-api-service';

const WhiskeyApiService = {
  getWhiskeys() {
    return fetch(`${config.API_ENDPOINT}/whiskeys`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getWhiskey(whiskeyId) {
    return fetch(`${config.API_ENDPOINT}/whiskeys/${whiskeyId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(res => Promise.resolve(res))
      )
  },
  getWhiskeyList(){
    return fetch(`${config.API_ENDPOINT}/lists`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getWhiskeyReviews(whiskeyId) {
    return fetch(`${config.API_ENDPOINT}/reviews/${whiskeyId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  addToList(whiskey_id, list_id){
    return fetch(`${config.API_ENDPOINT}/lists`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        whiskey_id,
        list_id,
      })
    })
    .then(res => 
      (!res.ok) 
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },
  moveToList(whiskey_id, list_id, currentListId){
    return fetch(`${config.API_ENDPOINT}/lists/${currentListId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        whiskey_id,
        list_id
      })
    }) 
  },
  removeWhiskeyFromApi(list_id){
    return fetch(`${config.API_ENDPOINT}/lists/${list_id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
  },
  postReview(whiskey_id, rating, nose, palate,finish, additional_comments) {
    return fetch(`${config.API_ENDPOINT}/reviews/${whiskey_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        rating,
        nose,
        palate,
        finish,
        additional_comments
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )    
  },
  postWhiskey(whiskey_name, image, origin, abv, price, content, nose, palate, finish) {
    return fetch(`${config.API_ENDPOINT}/whiskeys`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        whiskey_name,
        image,
        origin,
        abv,
        price,
        content,
        nose,
        palate,
        finish
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default WhiskeyApiService
