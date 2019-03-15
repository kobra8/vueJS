let baseUrl

export async function $fetch(url, options) {
  const finalOptions = Object.assign({}, {
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  }, options)
  const reponse = await fetch(`${baseUrl}${url}`, finalOptions)
  if (reponse.ok) {
    const data = await reponse.json()
    return data
  } else {
    const message = await response.text()
    const error = new Error(message)
    error.response = response
    throw error
  }
}

export default {
  install(Vue, options) {
    console.log("Plugin installed in Vue with options: ", options);
    baseUrl = options.baseUrl
    Vue.prototype.$fetch = $fetch
  }
}
