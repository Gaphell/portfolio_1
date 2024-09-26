const Typography = ({h1, h2, h3, className = '', children}) => {
  const style = `font-nunito ${h1 && 'text-7xl font-squada' || h2 && 'text-4xl' || h3 && 'text-2xl lowercase' || 'text-xl text-secondary'}`;
  
  return (
    <div className={`${className} ${style}`}>{children}</div>
  );
};

export default Typography;
