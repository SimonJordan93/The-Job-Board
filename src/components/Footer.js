const Footer = (props) => {
  return (
    <p className="footer-text">
      Made with <span>{props.tech}</span> at <span>{props.bootcamp}</span> By{" "}
      <span>{props.name}</span>
    </p>
  );
};

export default Footer;
