import { Blurhash } from 'react-blurhash';
import './VenueBanner.scss';

type VenueBannerPropsType = {
  blurhash: string;
  name: string;
  online: boolean;
};

const VenueBanner = ({ blurhash, name, online }: VenueBannerPropsType) => {
  const statusClass = !online ? 'venue-banner-offline' : 'venue-banner-online';
  const blurhashClasses = 'venue-banner-img ' + statusClass;
  return (
    <div className="venue-banner">
      <div className="venue-banner-img-section">
        <Blurhash
          className={blurhashClasses}
          hash={blurhash}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />

        <div className="venue-banner-restaurant-name-section">{name}</div>
      </div>
      <div className="venue-banner-status">
        {online ? (
          <span>{'Online'} </span>
        ) : (
          <span className="status-light-text">{'Closed'} </span>
        )}
      </div>
    </div>
  );
};

export default VenueBanner;
