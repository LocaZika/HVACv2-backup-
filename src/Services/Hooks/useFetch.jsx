const host = import.meta.env.VITE_HOST;
export default function useFetch(path) {
  const send = async(method, extraUrl, data) => {
    let responsive = {};
    const defData = data ?? null;
    const defExUrl = extraUrl ?? '';
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
