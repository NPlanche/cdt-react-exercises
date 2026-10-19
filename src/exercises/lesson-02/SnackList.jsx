export default function SnackList() {
  const snacks = [
    { name: 'Cheese', rank: 5 },
    { name: 'Popcorn', rank: 4 },
    { name: 'Cookies', rank: 3 },
    { name: 'Chips', rank: 2 },
    { name: 'Chocolate', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snacks) => (
        <li key={snacks.rank}>
          {snacks.name} - Rank: {snacks.rank}
        </li>
      ))}
    </ol>
  );
}
