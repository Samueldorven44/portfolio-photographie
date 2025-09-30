import BannerCountry from '../components/country/BannerCountry'
import PhotoListing from '../components/country/PhotoListing'

function Vietnam() {
  return (
    <div>
      <BannerCountry id={50} />
      <PhotoListing category="vietnam" />
    </div>
  )
}
export default Vietnam;
