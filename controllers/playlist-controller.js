import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const viewData = {
      station: "Station",
      station: station,
    };
    response.render("station-view", viewData);
  },

  async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReading = {
      code:Number(request.body.code),
      temp:Number(request.body.temp),
      windSpeed:Number(request.body.windSpeed),
      windDirection:Number(request.body.windDirection),
      pressure:Number(request.body.pressure),
     
    };
    console.log(`adding track ${newReading.station}`);
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + playlist._id);
  },

  async deleteTrack(request, response) {
    const playlistId = request.params.playlistid;
    const trackId = request.params.trackid;
    console.log(`Deleting Track ${trackId} from Playlist ${playlistId}`);
    await trackStore.deleteTrack(request.params.trackId);
    response.redirect("/playlist/" + playlistId);
  },
};
