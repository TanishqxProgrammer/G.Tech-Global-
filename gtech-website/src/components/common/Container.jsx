const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-screen-2xl px-6 lg:px-8 xl:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;