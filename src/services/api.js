const LIMIT_DEFAULT = 5;

const api = {
  modalities: async () => {
    const data = await fetch('https://wine-club-proxy.herokuapp.com/modalities');
    const [result] = await data.json();
    return result;
  },

  products: async (page = 1, limit = LIMIT_DEFAULT) => {
    const data = await fetch(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=${limit}`);
    const result = await data.json();
    return result;
  },
};

export default api;
