import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import {conversions } from "../utils/conversions.js";
import { stationAnalytics} from "../utils/station-analytics.js";


export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const latestReading = stationAnalytics.getLatestReading(station);
    const latestTemp = stationAnalytics.getLatestTemp(station);
    const latestWindSpeed = stationAnalytics.getLatestWindSpeed(station);
    const latestWindDirection = stationAnalytics.getLatestWindDirection(station);
    const viewData = {
      station: "Station",
      station: station,
      latestReading: latestReading,
      fahrenheit: conversions.tempConversion(latestTemp),
      beafourt: conversions.beafourt(latestWindSpeed),
      windChill: stationAnalytics.getWindChill(latestTemp, latestWindSpeed),
      windCompass: conversions.degreesToCompass(latestWindDirection),
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
    console.log(`adding reading ${newReading.code}`);
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + station._id);
  },

  async deleteReading(request, response) {
    const stationId = request.params.stationid;
    const readingId = request.params.readingid;
    console.log(`Deleting Reading ${readingId} from Station ${stationId}`);
    await readingStore.deleteReading(request.params.readingId);
    response.redirect("/station/" + stationId);
  },
  
};
