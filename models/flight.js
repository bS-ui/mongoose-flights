import mongoose, { SchemaType } from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  }
})
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function() {
      const adjustedDate = new Date(new Date().getFullYear()+1, new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes())
      return adjustedDate
    }
  },
  tickets: [ticketSchema],
  meals: {
    type: [Schema.Types.ObjectId],
    ref: "Meal"
  }
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}