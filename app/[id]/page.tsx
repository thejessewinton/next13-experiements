type ToDoReturnType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ToDo = async ({ params }: { params: { id: string } }) => {
  const loader = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${params.id}`
    );

    return (await res.json()) as ToDoReturnType;
  };

  const data = await loader();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.completed ? 'Completed' : 'Not completed'}</p>
    </div>
  );
};

export default ToDo;
