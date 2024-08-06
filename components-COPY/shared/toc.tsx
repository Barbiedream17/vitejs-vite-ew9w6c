
interface TOCProps {
  items: { label: string; id: string }[];
}

export const TOC = ({ items }: TOCProps) => (
  <nav>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}>{item.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);
