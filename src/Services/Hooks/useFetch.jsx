import { useSearchParams } from "react-router-dom";

const host = import.meta.env.VITE_HOST;

const generateUrl = (obj) => {
  let url = '?';
  const length = obj.length;
    if (length === 0){
      return '';
    }
    if (obj.sort ?? undefined){
      url += `&_sort=${obj.sort}`;
    }
    if (obj.order ?? undefined){
      url += `&_order=${obj.order}`;
    }
    if (obj.page ?? undefined){
      url += `&_page=${obj.page}`;
    }
    if (obj.limit ?? undefined){
      url += `&_limit=${obj.limit}`;
    }
    if (obj.search ?? undefined){
      url += `q=${obj.search}`;
    }
    if (obj.filter ?? undefined){
      for (let item in obj.filter){
        url += `&${item}=${ obj.filter[item]}`;
      }
    }
    return url;
  };
export default function useFetch(path) {
  const [searchParams, setSearchParams] = useSearchParams();
  /**
   * 
   * @param {string} method Set method to call api. Require* UPPERCASE.
   * @param {{
   * id?: string | number,
   * data: string | object,
   * extraUrl?: string
   * }} requestObject Set object data to call api.
   * @returns Promise
   */
  const send = async(method, requestObject) => {
    let responsive = {};
    const defData = requestObject.data ?? null;
    const defExUrl = requestObject.extraUrl ?? '';
    const defUrl = host + path + defExUrl;
    let initFetch = {
      method,
      'content-type': 'application/json',
    };
    if (defData != null){
      return initFetch.body = JSON.stringify(defData);
    }
    const RES = await fetch(defUrl, initFetch);
    const DATA = await RES.json();
    responsive = {data: DATA, res: RES};
    return responsive;
  };
  const get = (extraOpt) => {
    const defExOpt = extraOpt ?? {};
    setSearchParams(defExOpt, {replace: true});
    const extraUrl = generateUrl(defExOpt);
    return send('GET', {extraUrl});
  };
  const post = (data) => {
    return send('POST', {data});
  };
  const update = (id, data) => {
    return send('PATCH', {id, data});
  };
  const remove = (id) => {
    return send('DELETE', {id});
  };
  return {get, post, update, remove};
}
