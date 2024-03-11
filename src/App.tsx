import { Todo } from "./components/Todo";

export const App = () => {
  return (
    <main className="h-screen bg-[#171823] lg:pt-32">
      <div className="max-w-2xl mx-auto p-5">
        <h1 className="text-5xl tracking-[25px] font-semibold text-white">
          TODO
        </h1>
        <h1>hello</h1>
        <Todo />
      </div>
    </main>
  );
};
