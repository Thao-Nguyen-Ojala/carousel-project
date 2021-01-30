import { Blurhash } from 'react-blurhash';
import './VenueBanner.scss';

type VenueBannerPropsType = {
  blurhash: string;
  name: string;
  online: boolean;
};

const VenueBanner = ({ blurhash, name, online }: VenueBannerPropsType) => {
  console.log('online', online);
  return (
    <div className="venue-banner-wrapper">
      <div className="venue-banner-img-container">
        <div
          className={
            !online
              ? 'venue-banner-img-box__offline'
              : 'venue-banner-img-box__online'
          }
        >
          <Blurhash
            className="venue-banner-img"
            hash={blurhash}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
          <div className="venue-banner-status">
            {online ? 'Online' : 'Offline'}
          </div>
        </div>
      </div>

      <div className="venue-banner__textbox">
        <div className="textbox-text">{name}</div>
      </div>
    </div>
  );
};

export default VenueBanner;
