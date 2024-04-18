import { Meal } from "../models/meal.js";

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      meals,
      title: 'Add New Meal',
    }) 
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function create(req, res) {
  Meal.create(req.body)
  .then(meals => {
    res.redirect('/meals/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meals/new')
  })
}

export {
  newMeal as new,
  create,
}