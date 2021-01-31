import './Header.scss';

type HeaderPropsType = {
  title: string;
  restaurantsCount: number;
};

const Header = ({ title, restaurantsCount }: HeaderPropsType) => {
  return (
    <div className="header-wrapper">
      <span>
        <div className="header-wrapper__title">{title}</div>
        <div className="header-wrapper__restaurants-count">
          {`(${restaurantsCount} restaurants)`}
        </div>
      </span>
    </div>
  );
};

export default Header;
