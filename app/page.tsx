import Link from 'next/link';

type ToDoReturnType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Index = async () => {
  const loader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    return (await res.json()) as ToDoReturnType[];
  };

  const data = await loader();

  return (
    <div className="space-y-5">
      {data
        .map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.completed ? 'Completed' : 'Not completed'}</p>
            <Link
              href={`/${item.id}`}
              className="py-2 px-4 bg-sky-800 rounded-sm"
            >
              Link
            </Link>
          </div>
        ))
        .slice(0, 10)}
    </div>
  );
};

export default Index;
