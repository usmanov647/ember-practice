import Component from '@glimmer/component';
import ENV from 'test-project/config/environment';

const MAPBOX_API = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static";

export default class MapComponent extends Component {
  get token(){
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }

  get src() {
    let {lng, lat, width, height, zoom} = this.args;
    return `${MAPBOX_API}/${lng},${lat},${zoom}/${width}x${height}@2x?access_token=${this.token}`;
  }
}
