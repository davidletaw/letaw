export default function Loop() {
  const items = ['item1', 'item2', 'item3'];

  return (
    <div>
      <h2>Loop Example</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}