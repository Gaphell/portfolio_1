const Typography = ({h1, h2, h3, className, children}) => {
  const style = `font-nunito ${h1 && 'text-2xl text-primary font-squada' || h2 && 'text-sm' || h3 && 'text-xs text-primary uppercase'}`;
  
  return (
    <div className={`${className} ${style}`}>{children}</div>
  );
};

export default Typography;
