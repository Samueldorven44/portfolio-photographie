import BannerCountry from '../components/country/BannerCountry'
import PhotoListing from '../components/country/PhotoListing'

function Philippines() {
  return (
    <div>
      <BannerCountry id={60} />
      <PhotoListing category="philippines" />
    </div>
  )
}
export default Philippines;
