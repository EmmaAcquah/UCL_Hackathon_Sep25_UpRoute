import './Main.css';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="Main">
      {children}
    </main>
  );
};

export default Main;
