const SectionBody = (props: React.PropsWithChildren<object>) => {
  return <div className="section__body my-6 relative">{props.children}</div>;
};

export default SectionBody;
