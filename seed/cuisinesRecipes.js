const db = require('../db')
const { Cuisine, Recipe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
cuisineArray = ['Italian', 'Asian', 'American', 'Latin', 'Dessert', 'French']

const main = async () => {
  const italian = await new Cuisine({
    title: 'Italian'
  })
  italian.save()

  const asian = await new Cuisine({
    title: 'Asian'
  })
  asian.save()

  const american = await new Cuisine({
    title: 'American'
  })
  american.save()

  const recipes = [
    {
      name: 'Spaghetti with Meat Sauce',
      description: 'This easy weeknight meal comes together in 20 minutes',
      cuisine: italian._id,
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thewholesomedish.com%2Fwp-content%2Fuploads%2F2020%2F08%2FThe-Best-Classic-Spaghetti-1200-500x375.jpg&imgrefurl=https%3A%2F%2Fwww.thewholesomedish.com%2Fspaghetti%2F&tbnid=06scNXU30KhrAM&vet=12ahUKEwi78tbc1-rwAhUTBzQIHZ80CeoQMygAegUIARCCAg..i&docid=gDJJY2k-m3o6FM&w=500&h=375&itg=1&q=spaghetti&ved=2ahUKEwi78tbc1-rwAhUTBzQIHZ80CeoQMygAegUIARCCAg.jpeg',
      ingredients: [
        'Spaghetti Noodles',
        'Pasta Sauce',
        'Ground Beef',
        'Parmesan Cheese'
      ],
      instructions: [
        'Brown ground beef over medium heat until done',
        'While beef is cooking, boil noodles according to box instructions',
        'Once beef has cooked, add 1 jar of pasta sauce',
        'Scoop noodles onto plate, add meat sauce over noodles, and top with parmesan cheese'
      ],
      time: 20
    },
    {
      name: 'Test Recipe',
      description: 'test description',
      cuisine: american._id,
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fscx2.b-cdn.net%2Fgfx%2Fnews%2Fhires%2F2016%2Fhowcuttingdo.jpg&imgrefurl=https%3A%2F%2Fphys.org%2Fnews%2F2016-10-junk-food-environment.html&tbnid=sPBhlA8_u01kFM&vet=12ahUKEwi3tvi22erwAhUZAzQIHZX9CasQMygIegUIARDhAQ..i&docid=3ygg2Nn-LAULCM&w=1356&h=668&q=food&ved=2ahUKEwi3tvi22erwAhUZAzQIHZX9CasQMygIegUIARDhAQ.jpeg',
      ingredients: ['test ingred', 'test ingred'],
      instructions: ['test instruction 1', 'test instruction 2'],
      time: 30
    }
  ]

  await Recipe.insertMany(recipes)
  console.log('Created recipes!')
}

const run = async () => {
  await main()
  db.close()
}

run()
