import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";

export const readingController = {
  async index(request, response) {
    const stationId = request.params.stationid;
    const readingId = request.params.readingid;
    console.log(`Editing Reading ${readingId} from Station ${stationId}`);
    const viewData = {
      name: "Edit Reading",
      station: await stationStore.getStationById(stationId),
      reading: await readingStore.getReadingById(readingId),
    };
    response.render("reading-view", viewData);
  },

  async update(request, response) {
    const reading = await this.getReadingById(readingId);
    const stationId = request.params.stationid;
    const readingId = request.params.readingid;
    const updatedReading = {
    reading.code = updatedReading.code;
    reading.temp = updatedReading.temp;
    reading.windSpeed = updatedReading.windSpeed;
    reading.windDirection = updatedReading.windDirection;
    reading.pressure = updatedReading.pressure;
    };

    console.log(`Updating Reading ${readingId} from Station ${stationId}`);
    const reading = await readingStore.getReadingById(trackId);
    await readingStore.updateReading(reading, updatedReading);
    response.redirect("/station/" + stationId);
  }, 
}; 