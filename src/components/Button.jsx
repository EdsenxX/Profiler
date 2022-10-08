const Button = ({ children, className, onClick, loading }) => {
  return (
    <button
      className={`${className} p-2 bg-primary-100 text-white rounded-lg shadow-xl shadow-black/40`}
      onClick={onClick}
    >
      {loading && (
        <i className="fa-solid fa-spinner animate-spin mr-2"></i>
      )}
      {children}
    </button>
  );
};

export default Button;