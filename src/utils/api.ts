export const fetchData = async <T>(url: string, requestJSON = true): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return requestJSON ? await response.json() : await response.text();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
  
export const postRequest = async (url: string, params: object) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};