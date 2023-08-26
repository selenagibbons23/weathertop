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
    console.log(`adding reading ${newReading.station}`);
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
  
  
  /*
  
  async updateReading(readingId, updatedReading) {
    const reading = await this.getReadingById(readingId);
    reading.code = updatedReading.code;
    reading.temp = updatedReading.temp;
    reading.windSpeed = updatedReading.windSpeed;
    reading.windDirection = updatedReading.windDirection;
    reading.pressure = updatedReading.pressure;
    reading.fahrenheit = updatedReading.fahrenheit;
    reading.weatherCondition=updatedReading.weatherCondition;
    reading.weatherIcon=updatedReading.weatherIcon;
    reading.beaufortScale=updatedReading.beaufortScale;
    reading.windDirectionCalculation=updatedReading.WindDirectionCalculation;
    await db.write();
    
    */
  },
};
