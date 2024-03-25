import  { useState } from 'react';

function ApiComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>API Component</h2>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h3>Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {data && (
        <div>
          <p>Title: {data.activity}</p>
        </div>
      )}
    </div>
  );
}

export default ApiComponent;
