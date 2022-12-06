export default async function sendRequest(url, mdata) {
  if(!url) {return;}
  if(!mdata) {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  }
  const {method, id, content} = mdata;
  const data = {id, content}
  await fetch(url, {
    method,
    body: JSON.stringify(data)
  });
}
