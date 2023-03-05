import { useState } from 'react';

function usePost(url, initialData = null) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function post(dataToPost) {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToPost),
      });

      if(response.status === '200' || response.status === '201'){
        const responseData = await response.json();
        setData(responseData);
        return responseData;
      } else {
        return response.status;
      }

    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, error, post };
}

export default usePost;