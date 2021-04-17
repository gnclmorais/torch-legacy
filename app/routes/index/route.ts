import Route from '@ember/routing/route';

export default class RoutesHome extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model() {
    return {
      lat: 51.5074,
      lng: 0.1277,
      zoom: 10
    }
  }
}
