function Container({ children, className }) {
  return (
    <div className={`w-11/12 md:max-w-4xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Container;
