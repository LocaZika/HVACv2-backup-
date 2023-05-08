const host = import.meta.env.VITE_HOST;
export default function useFetch(path) {
  
  /**
   * 
   * @param {string} method Set method to call api. UPPERCASE required
   * @param {{id?: string, data: string | object}} dataObj Set data object
   * @param {{
   *  mode: 'search' | 'sort' | 'filter' | 'paginate',
   *  search: string,
   *  sort: {sortValue: string, sortOrder: 'asc'|'des'},
   *  filter: string,
   *  paginate: {page: number, limit: number}
   * }} optional Set optional for GET api. Default is empty object
   * @returns Promise
   */
  const send = async(method, dataObj, optional) => {
    let responsive = {};
    const defData = dataObj ?? null;
    const defOpt = optional ?? {};
    const mode = defOpt.mode ?? '';
    let defExUrl = '';
    if (mode === 'search'){
      const keyword = defOpt.search ?? '';
      defExUrl = `?q=${keyword}`;
    }
    if (mode === 'sort'){
      const {sortValue, sortOrder} = defOpt.sort ?? { sortValue: '', sortOrder: 'asc' };
      defExUrl = `?_sort=${sortValue}&_order=${sortOrder}`;
    }
    if (mode === 'paginate'){
      const {page, limit} = defOpt.paginate ?? { page: 1, limit: 10 };
      defExUrl = `?_page=${page}&_limit=${limit}`;
    }
    if (mode === 'filter'){
      defExUrl = `?${defOpt.filter}`;
    }
    let initFetch = {
      method,
      'content-type': 'application/json',
    };
    if (defData != null){
      return initFetch.body = JSON.stringify(defData);
    }
    const RES = await fetch(host + path + defExUrl, initFetch);
    const DATA = await RES.json();
    responsive = {data: DATA, res: RES};
    return responsive;
  };
  return send;
}
