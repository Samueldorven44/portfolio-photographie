import BannerCountry from '../components/country/BannerCountry'
import PhotoListing from '../components/country/PhotoListing'

function Japon() {
  return (
    <div>
      <BannerCountry id={10} />
      <PhotoListing category="japon" />
    </div>
  )
}
export default Japon;
