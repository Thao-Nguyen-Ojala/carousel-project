import './Header.scss';
type HeaderPropsType = { title: string };
const Header = ({ title }: HeaderPropsType) => {
  return <div className="header-title">{title}</div>;
};

export default Header;
