/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson } from '../types';

export const VOCAB_LESSONS: Lesson[] = [
  // A1 - Beginners
  {
    id: 'vl-a1-family',
    level: 'A1',
    subject: 'vocab',
    topic: 'Family',
    title: 'Family Members',
    description: 'Learn the basic names for family members in English.',
    content: {
      title: 'Family & Relationships',
      sections: [
        {
          heading: 'Immediate Family',
          content: 'The people you live with or are closest to.',
          wordList: [
            { word: 'Mother', definition: 'The female parent.', example: 'My mother is very kind.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Father', definition: 'The male parent.', example: 'My father works in a bank.', imageUrl: 'https://images.unsplash.com/photo-1502035618526-6468a1a99328?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Brother', definition: 'A boy or man who has the same parents as you.', example: 'I have an older brother.', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Sister', definition: 'A girl or woman who has the same parents as you.', example: 'My sister is a student.', imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c35dd6?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Grandmother', definition: 'The mother of your mother or father.', example: 'My grandmother tells great stories.', imageUrl: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe9b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Grandfather', definition: 'The father of your mother or father.', example: 'My grandfather loves gardening.', imageUrl: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Uncle', definition: 'The brother of your mother or father.', example: 'My uncle lives in London.', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Aunt', definition: 'The sister of your mother or father.', example: 'My aunt is an artist.', imageUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cousin', definition: 'The child of your aunt or uncle.', example: 'I am visiting my cousin this weekend.', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Nephew', definition: 'A son of your brother or sister.', example: 'My nephew is ten years old.', imageUrl: 'https://images.unsplash.com/photo-1548332166-5126868f0578?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Niece', definition: 'A daughter of your brother or sister.', example: 'My niece loves to draw.', imageUrl: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-fam-1',
              type: 'fill-in-blank',
              question: 'My mother\'s husband is my ___.',
              correctAnswer: ['father'],
              explanation: 'Your mother\'s husband is biologically or legally your father.'
            },
            {
              id: 'a1-fam-2',
              type: 'comprehension',
              question: 'Who is your mother\'s sister?',
              options: ['Aunt', 'Uncle', 'Cousin', 'Niece'],
              correctAnswer: ['Aunt'],
              explanation: 'An aunt is the sister of your mother or father.'
            },
            {
              id: 'a1-fam-3',
              type: 'matching',
              question: 'Grandmother',
              options: [
                'The mother of your mother or father',
                'The father of your mother or father',
                'A girl who has the same parents as you'
              ],
              correctAnswer: ['The mother of your mother or father'],
              explanation: 'Grandmother is the female parent of your parents.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-animals',
    level: 'A1',
    subject: 'vocab',
    topic: 'Animals',
    title: 'Common Animals',
    description: 'Learn the names of animals you see every day.',
    content: {
      title: 'Pets & Farm Animals',
      sections: [
        {
          heading: 'Common Pets',
          content: 'Animals people keep at home.',
          wordList: [
            { word: 'Dog', definition: 'A common animal with four legs and a tail, often kept as a pet.', example: 'My dog loves to play fetch.', imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cat', definition: 'A small furry animal often kept as a pet.', example: 'The cat is sleeping on the sofa.', imageUrl: 'https://images.unsplash.com/photo-1514888286872-409a636af4fd?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Rabbit', definition: 'A small animal with long ears and soft fur.', example: 'The rabbit is eating a carrot.', imageUrl: 'https://images.unsplash.com/photo-1585110396054-c8112c897d01?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Hamster', definition: 'A small rodent with a short tail and large cheek pouches.', example: 'The hamster is running in its wheel.', imageUrl: 'https://images.unsplash.com/photo-1548767791-52fa6f076144?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Parrot', definition: 'A brightly colored bird that can sometimes mimic human speech.', example: 'The parrot said "Hello!".', imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30eba3?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Goldfish', definition: 'A small orange fish often kept in a bowl or tank.', example: 'I have three goldfish.', imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Horse', definition: 'A large animal used for riding or pulling heavy loads.', example: 'He lives on a farm and has a horse.', imageUrl: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cow', definition: 'A large farm animal kept for its milk or meat.', example: 'Cows eat grass in the field.', imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Pig', definition: 'A pink or black farm animal with a flat nose and a curly tail.', example: 'The pig is playing in the mud.', imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Lion', definition: 'A large wild cat of Africa and India.', example: 'The lion is the king of the jungle.', imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Elephant', definition: 'A very large animal with a long trunk and tusks.', example: 'Elephants are known for their great memory.', imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Monkey', definition: 'A small to medium-sized primate that typically has a long tail.', example: 'The monkey is climbing the tree.', imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Tiger', definition: 'A very large solitary cat with a yellow-brown coat striped with black.', example: 'Tigers are excellent swimmers.', imageUrl: 'https://images.unsplash.com/photo-1508061461508-cb18c242f556?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Giraffe', definition: 'A large African mammal with a very long neck and forelegs.', example: 'The giraffe eats leaves from the top of the tree.', imageUrl: 'https://images.unsplash.com/photo-1547721064-3620263321ff?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Zebra', definition: 'An African wild horse with black-and-white stripes.', example: 'Zebras live in herds.', imageUrl: 'https://images.unsplash.com/photo-1501705388883-4ed8a543392c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Kangaroo', definition: 'A large Australian marsupial with a long powerful tail and strong hind legs.', example: 'The kangaroo hops across the field.', imageUrl: 'https://images.unsplash.com/photo-1528697203043-733dafdaa316?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Shark', definition: 'A large sea fish with a skeleton of cartilage and multiple rows of teeth.', example: 'The shark is a powerful predator.', imageUrl: 'https://images.unsplash.com/photo-1560273574-323862908077?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Whale', definition: 'A very large marine mammal.', example: 'The blue whale is the largest animal on Earth.', imageUrl: 'https://images.unsplash.com/photo-1511270252601-523277b0ec3f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Dolphin', definition: 'A small gregarious toothed whale that typically has a beaklike snout.', example: 'Dolphins are very intelligent.', imageUrl: 'https://images.unsplash.com/photo-1570485418545-20921021bc27?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-ani-1',
              type: 'comprehension',
              question: 'Which animal has a very long neck?',
              options: ['Elephant', 'Giraffe', 'Lion', 'Tiger'],
              correctAnswer: ['Giraffe'],
              explanation: 'Giraffes have evolved long necks to reach leaves on tall trees.'
            },
            {
              id: 'a1-ani-2',
              type: 'fill-in-blank',
              question: 'A dog is a common ___.',
              correctAnswer: ['pet', 'animal'],
              explanation: 'Dogs are one of the most popular pets in the world.'
            },
            {
              id: 'a1-ani-3',
              type: 'matching',
              question: 'Lion',
              options: ['King of the jungle', 'A small furry pet', 'An animal with a trunk'],
              correctAnswer: ['King of the jungle'],
              explanation: 'The lion is famously known as the "king of the jungle".'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-food',
    level: 'A1',
    subject: 'vocab',
    topic: 'Food',
    title: 'Everyday Food',
    description: 'Basic food items and drinks.',
    content: {
      title: 'Bread, Milk & Fruit',
      sections: [
        {
          heading: 'Breakfast Items',
          content: 'Common things we eat in the morning.',
          wordList: [
            { word: 'Apple', definition: 'A round fruit with red, yellow, or green skin.', example: 'An apple a day keeps the doctor away.', imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Banana', definition: 'A long curved fruit with yellow skin.', example: 'He ate a banana after his workout.', imageUrl: 'https://images.unsplash.com/photo-1571771894821-ad9902d7364b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Orange', definition: 'A round citrus fruit with thick orange skin.', example: 'Orange juice is rich in Vitamin C.', imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Strawberry', definition: 'A small red fruit with tiny seeds on its surface.', example: 'I like strawberries and cream.', imageUrl: 'https://images.unsplash.com/photo-1464960350423-93c6bcd67b8c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Watermelon', definition: 'A large fruit with green skin and red watery flesh.', example: 'Watermelon is refreshing in summer.', imageUrl: 'https://images.unsplash.com/photo-1587049633562-ba35e63a75bb?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Potato', definition: 'A round vegetable with edible flesh that grows underground.', example: 'Mashed potatoes are my favorite.', imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Carrot', definition: 'A long orange root vegetable.', example: 'Carrots are good for your eyesight.', imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Tomato', definition: 'A glossy red, or occasionally yellow, edible fruit that is typically eaten as a vegetable.', example: 'I added some tomatoes to the salad.', imageUrl: 'https://images.unsplash.com/photo-1518977822534-7049a6130cee?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cucumber', definition: 'A long, green-skinned fruit with watery flesh, usually eaten raw in salads.', example: 'Cucumber is very refreshing.', imageUrl: 'https://images.unsplash.com/photo-1449339043519-7d3a86392095?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Bread', definition: 'A basic food made from flour, water, and yeast.', example: 'I like toasted bread with butter.', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Milk', definition: 'A white liquid produced by cows.', example: 'I drink a glass of milk every night.', imageUrl: 'https://images.unsplash.com/photo-1563636619-e9107da5a1bb?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Egg', definition: 'An oval object produced by a bird, used for food.', example: 'I had two scrambled eggs for breakfast.', imageUrl: 'https://images.unsplash.com/photo-1516448386411-96696d747c34?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Rice', definition: 'Small white or brown grains from a cereal plant.', example: 'Rice is a staple food in many cultures.', imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Chicken', definition: 'The domestic fowl as food.', example: 'We had roasted chicken for dinner.', imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cheese', definition: 'A food made from the pressed curds of milk.', example: 'I love cheese on my pizza.', imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-foo-1',
              type: 'fill-in-blank',
              question: 'A common red fruit often used in salads is a ___.',
              correctAnswer: ['tomato'],
              explanation: 'Tomatoes are scientifically fruits but culinary vegetables, and they are red.'
            },
            {
              id: 'a1-foo-2',
              type: 'comprehension',
              question: 'Which of these is a liquid produced by cows?',
              options: ['Water', 'Milk', 'Juice', 'Soda'],
              correctAnswer: ['Milk'],
              explanation: 'Milk is a white liquid produced by mammals, and cow\'s milk is widely consumed.'
            },
            {
              id: 'a1-foo-3',
              type: 'matching',
              question: 'Apple',
              options: ['A round red or green fruit', 'A long yellow fruit', 'A large green vegetable'],
              correctAnswer: ['A round red or green fruit'],
              explanation: 'Apples are common round fruits with a crunch.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-colors-numbers',
    level: 'A1',
    subject: 'vocab',
    topic: 'Colors & Numbers',
    title: 'Colors and Numbers',
    description: 'Learn the basic colors and numbers 1-20.',
    content: {
      title: 'Basic Colors & Numbers',
      sections: [
        {
          heading: 'Primary & Common Colors',
          content: 'The basic colors we see around us.',
          wordList: [
            { word: 'Red', definition: 'The color of blood or a tomato.', example: 'The apple is red.', imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Blue', definition: 'The color of the sky on a clear day.', example: 'The sea looks blue.', imageUrl: 'https://images.unsplash.com/photo-1500462859233-01970220a74b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Yellow', definition: 'The color of a lemon or the sun.', example: 'Bananas are yellow.', imageUrl: 'https://images.unsplash.com/photo-1512502283151-5120387a321d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Green', definition: 'The color of grass and leaves.', example: 'The trees are green in spring.', imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Orange', definition: 'A color between red and yellow.', example: 'Pumpkins are orange.', imageUrl: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Purple', definition: 'A color between blue and red.', example: 'Grapes can be purple.', imageUrl: 'https://images.unsplash.com/photo-1523413184742-9993da29f4aa?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Black', definition: 'The darkest color, like night.', example: 'He is wearing a black shirt.', imageUrl: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'White', definition: 'The color of milk or snow.', example: 'The clouds are white.', imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Pink', definition: 'A pale red color.', example: 'Flamingos are pink.', imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Brown', definition: 'The color of earth or wood.', example: 'The chocolate is brown.', imageUrl: 'https://images.unsplash.com/photo-1512413316925-fd47914c9c14?q=80&w=400&h=250&auto=format&fit=crop' },
          ]
        },
        {
          heading: 'Numbers 1-10',
          content: 'Counting the basics.',
          wordList: [
            { word: 'One', definition: 'The number 1.', example: 'I have one sister.', imageUrl: 'https://images.unsplash.com/photo-1544377093-546fe4238a7c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Two', definition: 'The number 2.', example: 'A person has two hands.', imageUrl: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Five', definition: 'The number 5.', example: 'We have five fingers on each hand.', imageUrl: 'https://images.unsplash.com/photo-1563853110-3882779a5198?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Ten', definition: 'The number 10.', example: 'Ten years is a decade.', imageUrl: 'https://images.unsplash.com/photo-1590518386445-5654cc3c85f7?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-cn-1',
              type: 'matching',
              question: 'Blue',
              options: [
                'The color of the sky',
                'The color of a banana',
                'The color of a tomato'
              ],
              correctAnswer: ['The color of the sky'],
              explanation: 'Blue is the typical color of the sky and the sea.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-clothes',
    level: 'A1',
    subject: 'vocab',
    topic: 'Clothes',
    title: 'Daily Clothes',
    description: 'Learn the names of common clothes and accessories.',
    content: {
      title: 'What are you wearing?',
      sections: [
        {
          heading: 'Common Clothing',
          content: 'Things we wear every day.',
          wordList: [
            { word: 'Shirt', definition: 'A garment for the upper body.', example: 'He is wearing a white shirt.', imageUrl: 'https://images.unsplash.com/photo-1620012253295-c05c60937a6a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Pants', definition: 'A garment covering the body from the waist to the ankles.', example: 'I bought new blue pants.', imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Dress', definition: 'A one-piece garment for women or girls.', example: 'She wore a beautiful pink dress.', imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Shoes', definition: 'Footwear for protection and comfort.', example: 'These shoes are comfortable.', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Hat', definition: 'A covering for the head.', example: 'It is cold, wear a hat.', imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Coat', definition: 'A garment worn over other clothes for warmth.', example: 'Put on your coat, it is raining.', imageUrl: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Socks', definition: 'Garments for the feet, worn inside shoes.', example: 'I have colorful socks.', imageUrl: 'https://images.unsplash.com/photo-1586350977771-b39aa47f8976?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Skirt', definition: 'A garment worn by women and girls that hangs from the waist.', example: 'She is wearing a blue skirt.', imageUrl: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Jacket', definition: 'A short coat.', example: 'It\'s a bit chilly, take a jacket.', imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Gloves', definition: 'Coverings for the hands with separate parts for each finger.', example: 'I wear gloves in winter.', imageUrl: 'https://images.unsplash.com/photo-1584285418504-0ee279639532?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Scarf', definition: 'A length of fabric worn around the neck.', example: 'A woolly scarf keeps you warm.', imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Boots', definition: 'Sturdy footwear covering the foot and ankle.', example: 'He wore hiking boots.', imageUrl: 'https://images.unsplash.com/photo-1520639889313-727276179924?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Sandals', definition: 'Light shoes with straps.', example: 'Sandals are great for the beach.', imageUrl: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Belt', definition: 'A strip of leather worn around the waist.', example: 'His belt is made of leather.', imageUrl: 'https://images.unsplash.com/photo-1554990772-184de022d9bc?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Watch', definition: 'A small clock worn on the wrist.', example: 'I check the time on my watch.', imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Glasses', definition: 'Lenses worn in front of the eyes.', example: 'She needs glasses to read.', imageUrl: 'https://images.unsplash.com/photo-1511499767350-a1590fad674d?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-clo-1',
              type: 'comprehension',
              question: 'What do you wear on your feet inside shoes?',
              options: ['Hats', 'Gloves', 'Socks', 'Belts'],
              correctAnswer: ['Socks'],
              explanation: 'Socks are garments worn on the feet to provide comfort and absorb sweat.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-feelings',
    level: 'A1',
    subject: 'vocab',
    topic: 'Feelings',
    title: 'Feelings & Emotions',
    description: 'Learn how to describe how you feel.',
    content: {
      title: 'Emotions',
      sections: [
        {
          heading: 'Positive & Negative Feelings',
          content: 'Expressing your state of mind.',
          wordList: [
            { word: 'Happy', definition: 'Feeling or showing pleasure or contentment.', example: 'I am so happy today!', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Sad', definition: 'Feeling or showing sorrow; unhappy.', example: 'She felt sad after the movie.', imageUrl: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Angry', definition: 'Feeling or showing strong annoyance or hostility.', example: 'Don\'t be angry with me.', imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Tired', definition: 'In need of sleep or rest; weary.', example: 'I am tired after work.', imageUrl: 'https://images.unsplash.com/photo-1520206151081-7bfb4205b2b0?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Hungry', definition: 'Feeling or displaying the need for food.', example: 'Is it lunchtime? I am hungry.', imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Thirsty', definition: 'Feeling a need to drink.', example: 'I need water, I am thirsty.', imageUrl: 'https://images.unsplash.com/photo-1523362628741-99b38d8bf254?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Excited', definition: 'Very enthusiastic and eager.', example: 'I am excited about the holiday.', imageUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Bored', definition: 'Feeling weary and restless through lack of interest.', example: 'I am bored of this game.', imageUrl: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Scared', definition: 'Fearful; frightened.', example: 'The loud noise made the child scared.', imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Surprised', definition: 'Feeling or showing surprise.', example: 'She was surprised by the party.', imageUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-fee-1',
              type: 'fill-in-blank',
              question: 'If you want to eat something, you are ___.',
              correctAnswer: ['hungry'],
              explanation: 'Hunger is the physical sensation of needing food.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-objects',
    level: 'A1',
    subject: 'vocab',
    topic: 'Objects',
    title: 'Everyday Objects',
    description: 'Learn the names of things you use every day.',
    content: {
      title: 'Things around you',
      sections: [
        {
          heading: 'Personal Items',
          content: 'Things you carry or use closely.',
          wordList: [
            { word: 'Key', definition: 'A small piece of metal used for locking and unlocking a door.', example: 'I lost my house keys.', imageUrl: 'https://images.unsplash.com/photo-1579847514334-1cc599f667f5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Wallet', definition: 'A small folding case for holding money and credit cards.', example: 'My wallet is empty.', imageUrl: 'https://images.unsplash.com/photo-1559563458-527598cd4c9c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Phone', definition: 'A device used for calling and messaging.', example: 'I have a new smartphone.', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Laptop', definition: 'A portable computer.', example: 'She works on her laptop.', imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Bag', definition: 'A container made of flexible material.', example: 'Put your books in your bag.', imageUrl: 'https://images.unsplash.com/photo-1548036230-cb2a3a302257?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Umbrella', definition: 'A folding canopy used for protection from rain.', example: 'Don\'t forget your umbrella, it\'s raining.', imageUrl: 'https://images.unsplash.com/photo-1541571433061-0062a4d3392c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Comb', definition: 'A strip of plastic or metal with teeth, used for smoothing the hair.', example: 'I need a comb for my messy hair.', imageUrl: 'https://images.unsplash.com/photo-1590540179852-2110a54f813a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Mirror', definition: 'A surface that reflects a clear image.', example: 'Look at yourself in the mirror.', imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Towel', definition: 'A piece of thick absorbent cloth.', example: 'Dry your hands with a towel.', imageUrl: 'https://images.unsplash.com/photo-1563212891-b3b3a6288339?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Soap', definition: 'A substance used with water for washing and cleaning.', example: 'Wash your hands with soap.', imageUrl: 'https://images.unsplash.com/photo-1605264964521-35788f6683b1?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-obj-1',
              type: 'matching',
              question: 'Umbrella',
              options: [
                'Something you use for protection from rain',
                'Something you use for smooth hair',
                'Something you use to open a door'
              ],
              correctAnswer: ['Something you use for protection from rain'],
              explanation: 'An umbrella keeps you dry when it is raining.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-body',
    level: 'A1',
    subject: 'vocab',
    topic: 'Body',
    title: 'Body Parts',
    description: 'Learn the basic parts of the human body.',
    content: {
      title: 'Human Body',
      sections: [
        {
          heading: 'Head and Face',
          content: 'Parts of the upper body.',
          wordList: [
            { word: 'Head', definition: 'The upper part of the human body.', example: 'Put a hat on your head.', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Eye', definition: 'The organ of sight.', example: 'She has blue eyes.', imageUrl: 'https://images.unsplash.com/photo-1544468266-6a8948003cd7?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Ear', definition: 'The organ of hearing.', example: 'We listen with our ears.', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Nose', definition: 'The organ of smell.', example: 'You breathe through your nose.', imageUrl: 'https://images.unsplash.com/photo-1589149098258-3e9102ca63d3?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Mouth', definition: 'The opening through which food is taken in.', example: 'Open your mouth and say "Ah".', imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=400&h=250&auto=format&fit=crop' },
          ]
        },
        {
          heading: 'Limbs and Trunk',
          content: 'Parts of the body used for movement.',
          wordList: [
            { word: 'Arm', definition: 'The limb extending from the shoulder to the hand.', example: 'He broke his arm.', imageUrl: 'https://images.unsplash.com/photo-1541625602330-2277a1cd1f59?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Hand', definition: 'The part of the arm at the end, with fingers.', example: 'Wash your hands.', imageUrl: 'https://images.unsplash.com/photo-1510733140576-8809eba4d343?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Leg', definition: 'The limb used for standing and walking.', example: 'She has long legs.', imageUrl: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Foot', definition: 'The part of the leg below the ankle.', example: 'My feet are cold.', imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Back', definition: 'The rear surface of the human body.', example: 'He carried a backpack on his back.', imageUrl: 'https://images.unsplash.com/photo-1527633546914-b529680ca451?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-bod-1',
              type: 'comprehension',
              question: 'Which body part do you use to see?',
              options: ['Ears', 'Nose', 'Eyes', 'Mouth'],
              correctAnswer: ['Eyes'],
              explanation: 'Eyes are the organs of the visual system.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-school',
    level: 'A1',
    subject: 'vocab',
    topic: 'School',
    title: 'School & Learning',
    description: 'Learn words related to school and classroom objects.',
    content: {
      title: 'Back to School',
      sections: [
        {
          heading: 'Classroom Objects',
          content: 'Things you find in a classroom.',
          wordList: [
            { word: 'Pen', definition: 'An instrument for writing or drawing with ink.', example: 'Can I borrow your pen?', imageUrl: 'https://images.unsplash.com/photo-1585336139118-100411a0abf2?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Pencil', definition: 'An instrument for writing or drawing made of wood and graphite.', example: 'Sharpen your pencil before the test.', imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Notebook', definition: 'A book with blank pages for writing notes.', example: 'Write the homework in your notebook.', imageUrl: 'https://images.unsplash.com/photo-1544816153-39ad0c1b0ba0fa5a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Desk', definition: 'A piece of furniture with a flat surface for reading or writing.', example: 'Sit at your desk and start your work.', imageUrl: 'https://images.unsplash.com/photo-1519315530511-73600f952f14?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Whiteboard', definition: 'A smooth white surface for writing on with special markers.', example: 'The teacher is writing on the whiteboard.', imageUrl: 'https://images.unsplash.com/photo-1517433434642-8f156d9ba0d3?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Eraser', definition: 'An object used to remove marks made by a pencil.', example: 'Can I borrow your eraser?', imageUrl: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Backpack', definition: 'A bag carried on the back.', example: 'My backpack is heavy.', imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb94c6a62?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Ruler', definition: 'A tool used to measure straight lines.', example: 'Measure the paper with a ruler.', imageUrl: 'https://images.unsplash.com/photo-1586075010620-137bc382713e?q=80&w=400&h=250&auto=format&fit=crop' },
          ]
        },
        {
          heading: 'School Places',
          content: 'Different areas of a school.',
          wordList: [
            { word: 'Classroom', definition: 'A room where a class of students is taught.', example: 'Our classroom is on the second floor.', imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Library', definition: 'A room or building containing books for reading or borrowing.', example: 'I go to the library to study.', imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Playground', definition: 'An outdoor area for children to play.', example: 'We play football during the break in the playground.', imageUrl: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-sch-1',
              type: 'fill-in-blank',
              question: 'You write with a pen or a ___.',
              correctAnswer: ['pencil'],
              explanation: 'Pencils use graphite and can be erased, unlike most pens.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-time',
    level: 'A1',
    subject: 'vocab',
    topic: 'Time',
    title: 'Days, Months & Seasons',
    description: 'Learn how to talk about years, months, and days.',
    content: {
      title: 'The Calendar',
      sections: [
        {
          heading: 'Days of the Week',
          content: 'The seven days.',
          wordList: [
            { word: 'Monday', definition: 'The first day of the working week.', example: 'I go to the gym on Monday.', imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Friday', definition: 'The day before the weekend.', example: 'We watch a movie every Friday night.', imageUrl: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Sunday', definition: 'The last day of the week.', example: 'Sunday is a rest day.', imageUrl: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=400&h=250&auto=format&fit=crop' },
          ]
        },
        {
          heading: 'The Four Seasons',
          content: 'Times of the year.',
          wordList: [
            { word: 'Spring', definition: 'The season between winter and summer when plants grow.', example: 'Flowers bloom in spring.', imageUrl: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Summer', definition: 'The warmest season of the year.', example: 'I love going to the beach in summer.', imageUrl: 'https://images.unsplash.com/photo-1523496929180-f1ca5ce7a08b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Autumn', definition: 'The season between summer and winter when leaves fall.', example: 'Leaves turn orange in autumn.', imageUrl: 'https://images.unsplash.com/photo-1503335811567-3ab204eeb99b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Winter', definition: 'The coldest season of the year.', example: 'It often snows in winter.', imageUrl: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-tim-1',
              type: 'matching',
              question: 'Autumn',
              options: [
                'The season when leaves fall',
                'The season when flowers bloom',
                'The hottest season'
              ],
              correctAnswer: ['The season when leaves fall'],
              explanation: 'Autumn (or Fall) is known for the transition of deciduous trees shedding their leaves.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-actions',
    level: 'A1',
    subject: 'vocab',
    topic: 'Actions',
    title: 'Daily Actions',
    description: 'Common verbs for everyday activities.',
    content: {
      title: 'What are they doing?',
      sections: [
        {
          heading: 'Common Verbs',
          content: 'Basic action words.',
          wordList: [
            { word: 'Eat', definition: 'To put food into your mouth and swallow it.', example: 'I eat an apple every morning.', imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Drink', definition: 'To take liquid into your mouth and swallow it.', example: 'Drink plenty of water.', imageUrl: 'https://images.unsplash.com/photo-1523362628741-99b38d8bf254?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Sleep', definition: 'To rest with your eyes closed.', example: 'I sleep eight hours a night.', imageUrl: 'https://images.unsplash.com/photo-1520206151081-7bfb4205b2b0?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Run', definition: 'To move fast on your feet.', example: 'He runs in the park.', imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Read', definition: 'To look at and understand words.', example: 'I read the newspaper every day.', imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Speak', definition: 'To use your voice to say words.', example: 'I speak English and Spanish.', imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-act-1',
              type: 'comprehension',
              question: 'What do you do with a book?',
              options: ['Eat', 'Run', 'Read', 'Speak'],
              correctAnswer: ['Read'],
              explanation: 'Reading is the process of looking at a series of written symbols and getting meaning from them.'
            },
            {
              id: 'a1-act-2',
              type: 'fill-in-blank',
              question: 'I am thirsty, I need to ___ some water.',
              correctAnswer: ['drink'],
              explanation: 'When you are thirsty, you drink liquids.'
            },
            {
              id: 'a1-act-3',
              type: 'matching',
              question: 'Sleep',
              options: ['To rest with eyes closed', 'To move fast on feet', 'To swallow food'],
              correctAnswer: ['To rest with eyes closed'],
              explanation: 'Sleep is a natural state of rest.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a1-kitchen',
    level: 'A1',
    subject: 'vocab',
    topic: 'Objects',
    title: 'Kitchen Items',
    description: 'Learn the names of things you find in a kitchen.',
    content: {
      title: 'In the Kitchen',
      sections: [
        {
          heading: 'Eating and Cooking Tools',
          content: 'Basic utensils and appliances.',
          wordList: [
            { word: 'Plate', definition: 'A flat dish from which food is eaten.', example: 'Put the sandwich on a plate.', imageUrl: 'https://images.unsplash.com/photo-1577705998148-6da4f3e4f3de?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Fork', definition: 'A tool with prongs used for lifting food to the mouth.', example: 'I eat salad with a fork.', imageUrl: 'https://images.unsplash.com/photo-1571167505230-85bc975e5ed5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Knife', definition: 'An instrument used for cutting.', example: 'Be careful, the knife is sharp.', imageUrl: 'https://images.unsplash.com/photo-1594041419735-7634040da4cc?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Spoon', definition: 'A tool used for eating soup or stirring coffee.', example: 'I use a spoon for my cereal.', imageUrl: 'https://images.unsplash.com/photo-1589531853401-4439c6360f06?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cup', definition: 'A small bowl-shaped container for drinking.', example: 'I want a cup of tea.', imageUrl: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Fridge', definition: 'A large appliance used to keep food cold.', example: 'The milk is in the fridge.', imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a1-kit-1',
              type: 'fill-in-blank',
              question: 'You eat soup with a ___.',
              correctAnswer: ['spoon'],
              explanation: 'Spoons are used for liquids and soft foods.'
            },
            {
              id: 'a1-kit-2',
              type: 'comprehension',
              question: 'Where do you put milk to keep it cold?',
              options: ['Oven', 'Fridge', 'Table', 'Bag'],
              correctAnswer: ['Fridge'],
              explanation: 'A refrigerator (fridge) keeps food at low temperatures to keep it fresh.'
            }
          ]
        }
      ]
    }
  },
  // A2 - Elementary
  {
    id: 'vl-a2-transport',
    level: 'A2',
    subject: 'vocab',
    topic: 'Transport',
    title: 'Getting Around',
    description: 'Vehicles and ways to travel.',
    content: {
      title: 'Transportation',
      sections: [
        {
          heading: 'Public Transport',
          content: 'Ways to travel in a city.',
          wordList: [
            { word: 'Bus', definition: 'A large vehicle that carries many people.', example: 'I take the bus to school.', imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Train', definition: 'A long vehicle that travels on tracks.', example: 'The train is arriving at platform 5.', imageUrl: 'https://images.unsplash.com/photo-1474487056289-b682709ca81d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Bicycle', definition: 'A vehicle with two wheels that you pedal.', example: 'She rides her bicycle to the park.', imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Car', definition: 'A vehicle with four wheels and an engine.', example: 'He drives a blue car.', imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Motorcycle', definition: 'A vehicle with two wheels and an engine.', example: 'He wearing a helmet on his motorcycle.', imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Airplane', definition: 'A vehicle that flies through the air.', example: 'The airplane is about to take off.', imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Ship', definition: 'A large boat for traveling on water.', example: 'The ship sailed across the ocean.', imageUrl: 'https://images.unsplash.com/photo-1544436246-a5505d13c004?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Subway', definition: 'An underground electric railway.', example: 'I take the subway to work.', imageUrl: 'https://images.unsplash.com/photo-1515165561174-88981c206b3e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Taxi', definition: 'A car with a driver that you pay to take you somewhere.', example: 'I called a taxi to go to the airport.', imageUrl: 'https://images.unsplash.com/photo-1511210352396-444026046e7f?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-tra-1',
              type: 'comprehension',
              question: 'Which of these travels underground?',
              options: ['Airplane', 'Subway', 'Ship', 'Bicycle'],
              correctAnswer: ['Subway'],
              explanation: 'A subway (or metro) is an underground electric railway.'
            },
            {
              id: 'a2-tra-2',
              type: 'fill-in-blank',
              question: 'A vehicle with two wheels that you pedal is a ___.',
              correctAnswer: ['bicycle', 'bike'],
              explanation: 'Bicycles are powered by human pedaling.'
            },
            {
              id: 'a2-tra-3',
              type: 'matching',
              question: 'Airplane',
              options: ['Flies in the sky', 'Travels on tracks', 'Sail on water'],
              correctAnswer: ['Flies in the sky'],
              explanation: 'Airplanes are designed for atmospheric flight.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-weather-seasons',
    level: 'A2',
    subject: 'vocab',
    topic: 'Weather',
    title: 'Weather & Seasons',
    description: 'Words to describe the weather.',
    content: {
      title: 'How is the weather?',
      sections: [
        {
          heading: 'Common Conditions',
          content: 'Describing the day.',
          wordList: [
            { word: 'Sunny', definition: 'Plenty of bright sunlight.', example: 'It is a beautiful sunny day.', imageUrl: 'https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Rainy', definition: 'Having a lot of rain.', example: 'Don\'t forget your umbrella on a rainy day.', imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Snowy', definition: 'Covered with or full of snow.', example: 'The mountains look lovely and snowy.', imageUrl: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=400&h=250&auto=format&fit=crop' }
          ],
          activities: [
            {
              id: 'a2-wea-1',
              type: 'fill-in-blank',
              question: 'It is very ___ today, let\'s go to the beach and enjoy the sun.',
              correctAnswer: ['sunny'],
              explanation: 'Sunny weather is ideal for visiting the beach.'
            },
            {
              id: 'a2-wea-2',
              type: 'comprehension',
              question: 'What should you take with you on a rainy day?',
              options: ['Sunglasses', 'Umbrella', 'Sunscreen', 'Swimwear'],
              correctAnswer: ['Umbrella'],
              explanation: 'An umbrella protects you from getting wet when it rains.'
            },
            {
              id: 'a2-wea-3',
              type: 'matching',
              question: 'Snowy',
              options: ['White and cold', 'Bright and hot', 'Wet and grey'],
              correctAnswer: ['White and cold'],
              explanation: 'Snow is frozen water that falls as white flakes.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-hobbies',
    level: 'A2',
    subject: 'vocab',
    topic: 'Hobbies',
    title: 'Free Time & Hobbies',
    description: 'Talk about what you like to do in your free time.',
    content: {
      title: 'Interests & Hobbies',
      sections: [
        {
          heading: 'Common Activities',
          content: 'Things people do for fun.',
          wordList: [
            { word: 'Reading', definition: 'The action or skill of reading books.', example: 'I enjoy reading novels.', imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cooking', definition: 'The practice or skill of preparing food.', example: 'Cooking is my favorite hobby.', imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Swimming', definition: 'The sport or activity of moving through water.', example: 'He goes swimming every morning.', imageUrl: 'https://images.unsplash.com/photo-1519315530511-73600f952f14?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Painting', definition: 'The action or skill of using paint.', example: 'She is good at painting landscapes.', imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4ce046e60b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Photography', definition: 'The art or practice of taking photos.', example: 'Photography is an expensive hobby.', imageUrl: 'https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-hob-1',
              type: 'matching',
              question: 'Cooking',
              options: [
                'Preparing food for eating',
                'Taking pictures with a camera',
                'Moving through water'
              ],
              correctAnswer: ['Preparing food for eating'],
              explanation: 'Cooking involves the various methods and processes of preparing food.'
            },
            {
              id: 'a2-hob-2',
              type: 'fill-in-blank',
              question: 'I like ___ pictures of beautiful landscapes.',
              correctAnswer: ['painting', 'taking'],
              explanation: 'Painting and photography are common creative hobbies.'
            },
            {
              id: 'a2-hob-3',
              type: 'comprehension',
              question: 'Which of these is a sport done in water?',
              options: ['Reading', 'Cooking', 'Swimming', 'Photography'],
              correctAnswer: ['Swimming'],
              explanation: 'Swimming is a popular water-based activity and sport.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-town',
    level: 'A2',
    subject: 'vocab',
    topic: 'Town',
    title: 'Places in Town',
    description: 'Learn the names of buildings and places in a city.',
    content: {
      title: 'City & Town Locations',
      sections: [
        {
          heading: 'Buildings & Landmarks',
          content: 'Common places you visit in a town.',
          wordList: [
            { word: 'Supermarket', definition: 'A large shop selling food and household goods.', example: 'I need to go to the supermarket.', imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Hospital', definition: 'A place where sick people are treated.', example: 'The hospital is near the park.', imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Library', definition: 'A building containing collections of books for people to read or borrow.', example: 'The library is a quiet place to study.', imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cinema', definition: 'A place where movies are shown.', example: 'Let\'s go to the cinema tonight.', imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Park', definition: 'A large public garden or area of land used for recreation.', example: 'The park is full of flowers.', imageUrl: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-tow-1',
              type: 'comprehension',
              question: 'Where can you borrow books for free?',
              options: ['Cinema', 'Hospital', 'Library', 'Supermarket'],
              correctAnswer: ['Library'],
              explanation: 'Libraries provide access to books and other resources for the community.'
            },
            {
              id: 'a2-tow-2',
              type: 'fill-in-blank',
              question: 'I need to buy some groceries, I\'m going to the ___.',
              correctAnswer: ['supermarket', 'shop', 'store'],
              explanation: 'Supermarkets are the primary place for grocery shopping.'
            },
            {
              id: 'a2-tow-3',
              type: 'matching',
              question: 'Cinema',
              options: ['Where movies are shown', 'Where sick people go', 'Where you borrow books'],
              correctAnswer: ['Where movies are shown'],
              explanation: 'Cinemas (or movie theaters) are venues for public film screenings.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-weather',
    level: 'A2',
    subject: 'vocab',
    topic: 'Weather',
    title: 'Weather & Nature',
    description: 'Learn how to describe the world and weather around you.',
    content: {
      title: 'The Great Outdoors',
      sections: [
        {
          heading: 'Weather Conditions',
          content: 'Describing the day\'s conditions.',
          wordList: [
            { word: 'Sunny', definition: 'Bright with sunlight.', example: 'It is a sunny day, let\'s go out.', imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Rainy', definition: 'Having a lot of rain.', example: 'The weather is rainy today.', imageUrl: 'https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Windy', definition: 'Characterized by or exposed to strong winds.', example: 'Hold onto your hat, it\'s windy.', imageUrl: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cloudy', definition: 'Full of or covered with clouds.', example: 'It is a bit cloudy, but warm.', imageUrl: 'https://images.unsplash.com/photo-1483977399921-6cf3d166c7a6?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Snowy', definition: 'Covered with snow.', example: 'The mountains are snowy in winter.', imageUrl: 'https://images.unsplash.com/photo-1491002299896-103c2ba6299b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Storm', definition: 'A violent disturbance of the atmosphere with strong winds and usually rain, thunder, lightning, or snow.', example: 'There was a big storm last night.', imageUrl: 'https://images.unsplash.com/photo-1504253163759-c23fccaebb55?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Rainbow', definition: 'An arch of colors in the sky after rain.', example: 'Look at the beautiful rainbow!', imageUrl: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=400&h=250&auto=format&fit=crop' },
          ]
        },
        {
          heading: 'Nature Features',
          content: 'Landscape and surroundings.',
          wordList: [
            { word: 'Mountain', definition: 'A large natural elevation of the earth\'s surface.', example: 'He lives in the mountains.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'River', definition: 'A large natural stream of water flowing in a channel.', example: 'We went fishing in the river.', imageUrl: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Beach', definition: 'A pebbly or sandy shore by the ocean.', example: 'I love spending summer at the beach.', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Forest', definition: 'A large area covered with trees.', example: 'The forest is dark and mysterious.', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Desert', definition: 'A barren area of landscape with little precipitation.', example: 'Camels live in the desert.', imageUrl: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-nat-1',
              type: 'fill-in-blank',
              question: 'A large area covered with many trees is a ___.',
              correctAnswer: ['forest'],
              explanation: 'Forests are defined by high densities of trees.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-house',
    level: 'A2',
    subject: 'vocab',
    topic: 'House',
    title: 'Rooms in a House',
    description: 'Vocabulary for different rooms and furniture.',
    content: {
      title: 'The Home',
      sections: [
        {
          heading: 'Common Rooms',
          content: 'Rooms you find in a typical house.',
          wordList: [
            { word: 'Living Room', definition: 'The room used for relaxing and watching TV.', example: 'We sit in the living room in the evening.', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Kitchen', definition: 'The room used for cooking.', example: 'The fridge is in the kitchen.', imageUrl: 'https://images.unsplash.com/photo-1556911220-e150213483de?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Bedroom', definition: 'The room where you sleep.', example: 'My bedroom has a big bed.', imageUrl: 'https://images.unsplash.com/photo-1505691722772-36303673efc1?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Bathroom', definition: 'The room where you wash yourself.', example: 'I brush my teeth in the bathroom.', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Dining Room', definition: 'The room where people eat their meals.', example: 'We have dinner together in the dining room.', imageUrl: 'https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Garden', definition: 'An area of land next to a house where vegetables or flowers are grown.', example: 'The children are playing in the garden.', imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Garage', definition: 'A building or part of a building where cars are kept.', example: 'He parked his car in the garage.', imageUrl: 'https://images.unsplash.com/photo-1504221507732-5246c045949b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Attic', definition: 'The space or room at the top of a house, under the roof.', example: 'We store old boxes in the attic.', imageUrl: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Basement', definition: 'The part of a building that is partly or completely below ground level.', example: 'The laundry machine is in the basement.', imageUrl: 'https://images.unsplash.com/photo-1558211516-1f9f25712850?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Balcony', definition: 'A platform on the outside of a building, above ground level.', example: 'I enjoy reading on the balcony.', imageUrl: 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-house-1',
              type: 'matching',
              question: 'Kitchen',
              options: [
                'Where you cook food',
                'Where you sleep',
                'Where you park your car'
              ],
              correctAnswer: ['Where you cook food'],
              explanation: 'The kitchen is the room dedicated to food preparation.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-jobs',
    level: 'A2',
    subject: 'vocab',
    topic: 'Jobs',
    title: 'Common Occupations',
    description: 'Learn names of various jobs and professions.',
    content: {
      title: 'Work & Professions',
      sections: [
        {
          heading: 'Common Jobs',
          content: 'Jobs that many people have.',
          wordList: [
            { word: 'Teacher', definition: 'A person who helps students learn.', example: 'My teacher is very patient.', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Doctor', definition: 'A person who helps sick people.', example: 'I need to see a doctor today.', imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Chef', definition: 'A professional cook.', example: 'The chef prepared a delicious meal.', imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Nurse', definition: 'A person trained to care for the sick.', example: 'The nurse checked my blood pressure.', imageUrl: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Engineer', definition: 'A person who designs, builds, or maintains engines, machines, or public works.', example: 'He is a civil engineer.', imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Pilot', definition: 'A person who flies an aircraft.', example: 'The pilot landed the plane safely.', imageUrl: 'https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Dentist', definition: 'A person who treats diseases of the teeth and gums.', example: 'I go to the dentist twice a year.', imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Farmer', definition: 'A person who owns or manages a farm.', example: 'The farmer grows corn and wheat.', imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Firefighter', definition: 'A person whose job is to put out fires.', example: 'The firefighter rescued the cat.', imageUrl: 'https://images.unsplash.com/photo-1583907608222-774c7030e8ce?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Police Officer', definition: 'A person whose job is to maintain public order and safety.', example: 'The police officer helped with the directions.', imageUrl: 'https://images.unsplash.com/photo-1596727147705-61a532a77a47?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Artist', definition: 'A person who creates paintings or drawings as a profession or hobby.', example: 'The artist is painting a beautiful landscape.', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Musician', definition: 'A person who plays a musical instrument or is musically talented.', example: 'The musician plays the guitar brilliantly.', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Scientist', definition: 'A person who is studying or has expert knowledge of one or more of the natural or physical sciences.', example: 'The scientist is working in the laboratory.', imageUrl: 'https://images.unsplash.com/photo-1532187875471-da796a5814ea?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-job-1',
              type: 'fill-in-blank',
              question: 'A person who flies an airplane is called a ___.',
              correctAnswer: ['pilot'],
              explanation: 'A pilot is the person who operates the flight controls of an aircraft.'
            },
            {
              id: 'a2-job-2',
              type: 'comprehension',
              question: 'Who should you see if you have a toothache?',
              options: ['Doctor', 'Dentist', 'Teacher', 'Nurse'],
              correctAnswer: ['Dentist'],
              explanation: 'Dentists specialize in oral health and treating teeth.'
            },
            {
              id: 'a2-job-3',
              type: 'matching',
              question: 'Chef',
              options: ['Cooks in a restaurant', 'Heals sick people', 'Teaches students'],
              correctAnswer: ['Cooks in a restaurant'],
              explanation: 'A chef is a professional cook in charge of a kitchen.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-health-extra',
    level: 'A2',
    subject: 'vocab',
    topic: 'Health',
    title: 'Health & Illness',
    description: 'Learn how to describe common health problems.',
    content: {
      title: 'How do you feel?',
      sections: [
        {
          heading: 'Common Ailments',
          content: 'Basic health issues.',
          wordList: [
            { word: 'Headache', definition: 'A continuous pain in the head.', example: 'I have a terrible headache today.', imageUrl: 'https://images.unsplash.com/photo-1486312384990-dd3b212891cc?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cough', definition: 'To force air out of your lungs with a sudden loud noise.', example: 'He has a dry cough.', imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Fever', definition: 'A high body temperature.', example: 'The child has a high fever.', imageUrl: 'https://images.unsplash.com/photo-1584036533827-49b07bb1c841?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Sore Throat', definition: 'Pain in the throat, typically caused by inflammation.', example: 'It hurts to swallow because of my sore throat.', imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Medicine', definition: 'A substance used for treating illness.', example: 'Don\'t forget to take your medicine.', imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-hea-1',
              type: 'comprehension',
              question: 'What do you call a high body temperature?',
              options: ['Cough', 'Fever', 'Headache', 'Sore Throat'],
              correctAnswer: ['Fever'],
              explanation: 'A fever is a temporary increase in your body temperature, often due to an illness.'
            },
            {
              id: 'a2-hea-2',
              type: 'fill-in-blank',
              question: 'My head hurts, I have a ___.',
              correctAnswer: ['headache'],
              explanation: 'A headache is pain in the head region.'
            },
            {
              id: 'a2-hea-3',
              type: 'matching',
              question: 'Cough',
              options: ['Force air out of lungs', 'High body temp', 'Pain in the throat'],
              correctAnswer: ['Force air out of lungs'],
              explanation: 'A cough is a sudden, often involuntary, forceful release of air from the lungs.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-routines',
    level: 'A2',
    subject: 'vocab',
    topic: 'Daily Life',
    title: 'Daily Routines',
    description: 'Vocabulary for your regular daily activities.',
    content: {
      title: 'A Day in the Life',
      sections: [
        {
          heading: 'Morning Routine',
          content: 'Activities at the start of the day.',
          wordList: [
            { word: 'Wake up', definition: 'To stop sleeping.', example: 'I wake up at 7 AM.', imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Brush teeth', definition: 'To clean your teeth with a toothbrush.', example: 'I brush my teeth twice a day.', imageUrl: 'https://images.unsplash.com/photo-1559591937-e1b0232588f0?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Get dressed', definition: 'To put on clothes.', example: 'It takes me ten minutes to get dressed.', imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Have breakfast', definition: 'To eat the first meal of the day.', example: 'I usually have breakfast at 8 AM.', imageUrl: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=400&h=250&auto=format&fit=crop' },
          ]
        },
        {
          heading: 'Evening Routine',
          content: 'Activities at the end of the day.',
          wordList: [
            { word: 'Have dinner', definition: 'To eat the main meal of the day, usually in the evening.', example: 'We have dinner at 7 PM.', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Go to bed', definition: 'To go to sleep.', example: 'I go to bed at 11 PM.', imageUrl: 'https://images.unsplash.com/photo-1513201099793-ec632fb5a043?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-rou-1',
              type: 'matching',
              question: 'Wake up',
              options: [
                'To stop sleeping',
                'To put on clothes',
                'To clean your teeth'
              ],
              correctAnswer: ['To stop sleeping'],
              explanation: 'Waking up is the act of becoming conscious after sleep.'
            },
            {
              id: 'a2-rou-2',
              type: 'fill-in-blank',
              question: 'Before I go to work, I get ___.',
              correctAnswer: ['dressed'],
              explanation: 'Getting dressed means putting on your clothes for the day.'
            },
            {
              id: 'a2-rou-3',
              type: 'comprehension',
              question: 'What do we call the first meal of the day?',
              options: ['Lunch', 'Dinner', 'Breakfast', 'Snack'],
              correctAnswer: ['Breakfast'],
              explanation: 'Breakfast is the first meal eaten after waking up from the night\'s sleep.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-housing-types',
    level: 'A2',
    subject: 'vocab',
    topic: 'Housing',
    title: 'Types of Homes',
    description: 'Learn names for different types of places people live.',
    content: {
      title: 'Where do you live?',
      sections: [
        {
          heading: 'Home Types',
          content: 'Different styles of housing.',
          wordList: [
            { word: 'Apartment/Flat', definition: 'A suite of rooms forming one residence, typically on one floor.', example: 'I live in a small apartment in the city.', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Detached House', definition: 'A house that is not joined to any other house.', example: 'They own a large detached house in the suburbs.', imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cottage', definition: 'A small simple house, typically one in the country.', example: 'We rented a cozy cottage for the weekend.', imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Villa', definition: 'A large and luxurious country house in its own grounds.', example: 'The celebrity stays in a villa by the sea.', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-hou-1',
              type: 'fill-in-blank',
              question: 'An ___ is a suite of rooms forming one residence, usually on one floor of a building.',
              correctAnswer: ['apartment'],
              explanation: 'Apartments (or flats) are common housing units in urban areas.'
            },
            {
              id: 'a2-hou-2',
              type: 'comprehension',
              question: 'Which type of home is usually small and in the country?',
              options: ['Vila', 'Cottage', 'Apartment', 'Skyscraper'],
              correctAnswer: ['Cottage'],
              explanation: 'A cottage is typically a small, traditional house, especially one in the country.'
            },
            {
              id: 'a2-hou-3',
              type: 'matching',
              question: 'Detached House',
              options: ['Not joined to another house', 'Sharing a wall', 'On top of another'],
              correctAnswer: ['Not joined to another house'],
              explanation: 'A detached house is a stand-alone residential structure.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-a2-jobs',
    level: 'A2',
    subject: 'vocab',
    topic: 'Work',
    title: 'Jobs & Professions',
    description: 'Learn the names of common jobs and what people do.',
    content: {
      title: 'What do you do?',
      sections: [
        {
          heading: 'Common Careers',
          content: 'Different types of work.',
          wordList: [
            { word: 'Teacher', definition: 'A person who helps students to learn.', example: 'My English teacher is very helpful.', imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Doctor', definition: 'A person who treats sick people.', example: 'The doctor gave me some medicine.', imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Chef', definition: 'A professional cook.', example: 'The chef prepared a delicious meal.', imageUrl: 'https://images.unsplash.com/photo-1583394238182-6f3ad36b51a5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Artist', definition: 'A person who creates art, such as painting.', example: 'The artist is painting a portrait.', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Engineer', definition: 'A person who designs or builds machines or structures.', example: 'He works as a software engineer.', imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Pilot', definition: 'A person who flies an airplane.', example: 'The pilot landed the plane safely.', imageUrl: 'https://images.unsplash.com/photo-1506190500388-7e238059ff94?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'a2-job-1',
              type: 'fill-in-blank',
              question: 'A person who treats animals is a ___.',
              correctAnswer: ['vet', 'veterinarian'],
              explanation: 'A vet is a doctor for animals.'
            },
            {
              id: 'a2-job-2',
              type: 'comprehension',
              question: 'Who flies an airplane?',
              options: ['Driver', 'Pilot', 'Captain', 'Chef'],
              correctAnswer: ['Pilot'],
              explanation: 'Pilots are trained professionals who operate aircraft.'
            }
          ]
        }
      ]
    }
  },
  // B1 - Intermediate
  {
    id: 'vl-b1-social-media',
    level: 'B1',
    subject: 'vocab',
    topic: 'Media',
    title: 'Social Media & Networking',
    description: 'Vocabulary for the digital world and social connections.',
    content: {
      title: 'Connecting Online',
      sections: [
        {
          heading: 'Digital Interaction',
          content: 'How we communicate on social platforms.',
          wordList: [
            { word: 'Profile', definition: 'A short description of someone\'s life, work, or character on a social network.', example: 'I updated my profile picture yesterday.', imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Engagement', definition: 'The level of interaction that people have with a post.', example: 'The post had high engagement with thousands of likes.', imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Algorithm', definition: 'A set of rules used by a computer to determine what you see on your feed.', example: 'The algorithm recommends videos based on your interests.', imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Influencer', definition: 'A person with the ability to influence potential buyers by recommending items on social media.', example: 'Many brands work with influencers to promote products.', imageUrl: 'https://images.unsplash.com/photo-1522071823991-b1ae5e44788e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Privacy Settings', definition: 'Controls that allow you to decide who can see your information.', example: 'Always check your privacy settings on new apps.', imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-med-1',
              type: 'comprehension',
              question: 'What determines what you see on your social media feed?',
              options: ['Profile', 'Algorithm', 'Influencer', 'Engagement'],
              correctAnswer: ['Algorithm'],
              explanation: 'Social media algorithms prioritize content based on your past behavior and preferences.'
            },
            {
              id: 'b1-med-2',
              type: 'fill-in-blank',
              question: 'A person with many followers who promotes products is an ___.',
              correctAnswer: ['influencer'],
              explanation: 'Influencers utilize their large following to market products or ideas.'
            },
            {
              id: 'b1-med-3',
              type: 'matching',
              question: 'Privacy Settings',
              options: ['Controls who sees info', 'The set of rules for feed', 'Interaction level'],
              correctAnswer: ['Controls who sees info'],
              explanation: 'Privacy settings help protect your personal data online.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-environment-action',
    level: 'B1',
    subject: 'vocab',
    topic: 'Environment',
    title: 'Environmental Protection',
    description: 'Learn words related to saving the planet and sustainable living.',
    content: {
      title: 'Going Green',
      sections: [
        {
          heading: 'Sustainable Habits',
          content: 'Daily actions to protect nature.',
          wordList: [
            { word: 'Recycle', definition: 'To convert waste into reusable material.', example: 'We should recycle plastic and glass.', imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Renewable Energy', definition: 'Energy from sources that are not depleted when used, such as wind or solar power.', example: 'Solar panels are a great source of renewable energy.', imageUrl: 'https://images.unsplash.com/photo-1509391366360-fe5bb658582f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Compost', definition: 'Decayed organic material used as a plant fertilizer.', example: 'Start a compost bin for your food scraps.', imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Carbon Footprint', definition: 'The total amount of greenhouse gases produced by an individual or organization.', example: 'Traveling by train reduces your carbon footprint.', imageUrl: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-env-1',
              type: 'matching',
              question: 'Renewable Energy',
              options: [
                'Energy from sources that are not depleted, like solar or wind',
                'Energy from burning coal and oil',
                'The total greenhouse gases we produce'
              ],
              correctAnswer: ['Energy from sources that are not depleted, like solar or wind'],
              explanation: 'Renewable means the source can be reused or is naturally replenished.'
            },
            {
              id: 'b1-env-2',
              type: 'fill-in-blank',
              question: 'We should ___ our paper, plastic, and glass waste.',
              correctAnswer: ['recycle'],
              explanation: 'Recycling is the process of converting waste into new materials.'
            },
            {
              id: 'b1-env-3',
              type: 'comprehension',
              question: 'What do we call the total amount of greenhouse gases we produce?',
              options: ['Recycle', 'Carbon Footprint', 'Compost', 'Renewable Energy'],
              correctAnswer: ['Carbon Footprint'],
              explanation: 'A carbon footprint measures the impact of human activities on the environment in terms of greenhouse gases.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-workplace-modern',
    level: 'B1',
    subject: 'vocab',
    topic: 'Work',
    title: 'Modern Workplaces',
    description: 'Vocabulary for new ways of working and office culture.',
    content: {
      title: 'The Future of Work',
      sections: [
        {
          heading: 'Working Styles',
          content: 'Terms for modern employment.',
          wordList: [
            { word: 'Remote Work', definition: 'Working from home or another location rather than an office.', example: 'Many companies now offer remote work options.', imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Coworking Space', definition: 'A shared office environment where people from different companies work.', example: 'I use a coworking space in the city center.', imageUrl: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Freelancer', definition: 'A person who works for themselves rather than for a single employer.', example: 'She is a successful freelance graphic designer.', imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Networking', definition: 'The action of interacting with others to exchange information and develop professional contacts.', example: 'Networking is vital for career growth.', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c29530ad?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-wor-1',
              type: 'fill-in-blank',
              question: 'Working from home is often called ___ work.',
              correctAnswer: ['remote'],
              explanation: 'Remote work allows employees to work from a location of their choice, typically home.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-transport',
    level: 'B1',
    subject: 'vocab',
    topic: 'Transport',
    title: 'Advanced Transport',
    description: 'Travel-related vocabulary for intermediate learners.',
    content: {
      title: 'Voyages & Journeys',
      sections: [
        {
          heading: 'On the Move',
          content: 'More complex travel terms.',
          wordList: [
            { word: 'Commuter', definition: 'A person who travels some distance to work on a regular basis.', example: 'The trains are packed with commuters.', imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Destination', definition: 'The place to which someone or something is going.', example: 'We finally reached our destination.', imageUrl: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=400&h=250&auto=format&fit=crop' }
          ],
          activities: [
            {
              id: 'b1-tra-1',
              type: 'comprehension',
              question: 'What do you call a person who travels to work regularly?',
              options: ['Explorer', 'Commuter', 'Tourist', 'Nomad'],
              correctAnswer: ['Commuter'],
              explanation: 'A commuter is someone who travels between their home and place of work on a regular basis.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-technology',
    level: 'B1',
    subject: 'vocab',
    topic: 'Technology',
    title: 'Modern Technology',
    description: 'Digital age vocabulary.',
    content: {
      title: 'Computers & The Internet',
      sections: [
        {
          heading: 'Digital Life',
          content: 'Essential tech words.',
          wordList: [
            { word: 'Software', definition: 'Programs and other operating information used by a computer.', example: 'I need to update my antivirus software.', imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Algorithm', definition: 'A process or set of rules to be followed in calculations or other problem-solving operations.', example: 'The social media algorithm shows me what I like.', imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Hardware', definition: 'The physical parts of a computer.', example: 'The hardware needs to be upgraded.', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Database', definition: 'A structured set of data held in a computer.', example: 'We stored the customer info in a database.', imageUrl: 'https://images.unsplash.com/photo-1544383335-c533c40b70c8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cybersecurity', definition: 'The state of being protected against the criminal or unauthorized use of electronic data.', example: 'Cybersecurity is a major concern for banks.', imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Artificial Intelligence', definition: 'The theory and development of computer systems able to perform tasks that normally require human intelligence.', example: 'Artificial Intelligence is transforming many industries.', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cloud Computing', definition: 'The practice of using a network of remote servers hosted on the internet to store, manage, and process data.', example: 'Many companies use cloud computing for better scalability.', imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Encryption', definition: 'The process of converting information or data into a code, especially to prevent unauthorized access.', example: 'Strong encryption is vital for online privacy.', imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-tec-1',
              type: 'matching',
              question: 'Cybersecurity',
              options: [
                'Protection against unauthorized use of electronic data',
                'Physical parts of a computer',
                'Programs used by a computer'
              ],
              correctAnswer: ['Protection against unauthorized use of electronic data'],
              explanation: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-personality',
    level: 'B1',
    subject: 'vocab',
    topic: 'Personality',
    title: 'Personality Traits',
    description: 'Learn words to describe people\'s character.',
    content: {
      title: 'Character & Personality',
      sections: [
        {
          heading: 'Positive Traits',
          content: 'Describing good qualities.',
          wordList: [
            { word: 'Reliable', definition: 'Consistently good in quality or performance; able to be trusted.', example: 'He is a very reliable employee.', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c29530ad?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Ambitious', definition: 'Having or showing a strong desire and determination to succeed.', example: 'She is an ambitious lawyer.', imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Generous', definition: 'Showing a readiness to give more of something, especially money, than is strictly necessary or expected.', example: 'It was very generous of you to pay.', imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Easy-going', definition: 'Relaxed and tolerant in attitude or manner.', example: 'My new roommate is very easy-going.', imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&h=250&auto=format&fit=crop' },
          ]
        },
        {
          heading: 'Negative Traits',
          content: 'Describing difficult qualities.',
          wordList: [
            { word: 'Stubborn', definition: 'Having or showing dogged determination not to change one\'s attitude or position.', example: 'He is too stubborn to admit he is wrong.', imageUrl: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Arrogant', definition: 'Having or revealing an exaggerated sense of one\'s own importance or abilities.', example: 'He was so arrogant that he ignored our advice.', imageUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-per-1',
              type: 'matching',
              question: 'Reliable',
              options: [
                'Able to be trusted',
                'Unwilling to change their mind',
                'Feeling superior to others'
              ],
              correctAnswer: ['Able to be trusted'],
              explanation: 'A reliable person is someone you can count on to do what they promised.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-office',
    level: 'B1',
    subject: 'vocab',
    topic: 'Office',
    title: 'Work & Office',
    description: 'Vocabulary for the modern workplace.',
    content: {
      title: 'The Office Environment',
      sections: [
        {
          heading: 'Equipment & Supplies',
          content: 'Common items found in an office.',
          wordList: [
            { word: 'Stationery', definition: 'Writing and other office materials.', example: 'I need to buy some new stationery.', imageUrl: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Whiteboard', definition: 'A large board with a smooth white surface, used for writing on.', example: 'Let\'s brainstorm on the whiteboard.', imageUrl: 'https://images.unsplash.com/photo-1517433434642-8f156d9ba0d3?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Stapler', definition: 'A device for fastening together sheets of paper.', example: 'Can I borrow your stapler?', imageUrl: 'https://images.unsplash.com/photo-1549465220-1d8c9d9c674a?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-off-1',
              type: 'fill-in-blank',
              question: 'Writing and office materials like pens and paper are called ___.',
              correctAnswer: ['stationery'],
              explanation: 'Stationery is a general term for various materials used for writing and in offices.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-hotel',
    level: 'B1',
    subject: 'vocab',
    topic: 'Travel',
    title: 'Staying at a Hotel',
    description: 'Learn vocabulary for booking and staying at a hotel.',
    content: {
      title: 'Hotel & Hospitality',
      sections: [
        {
          heading: 'Check-in & Service',
          content: 'Common terms used in hotels.',
          wordList: [
            { word: 'Reception', definition: 'The area in a hotel where guests are received.', example: 'The reception is open 24 hours.', imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Reservation', definition: 'An arrangement to have something kept for one\'s use.', example: 'I have a reservation under the name Smith.', imageUrl: 'https://images.unsplash.com/photo-1551882547-ff43c637f68b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Housekeeping', definition: 'The department that keeps the hotel clean.', example: 'Housekeeping will bring extra towels.', imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-hot-1',
              type: 'comprehension',
              question: 'Where should you go first when you arrive at a hotel?',
              options: ['Housekeeping', 'Reception', 'Garage', 'Restaurant'],
              correctAnswer: ['Reception'],
              explanation: 'The reception or front desk is where guests check in and receive their keys.'
            }
          ]
        }
      ]
    }
  },
  // B2 - Upper Intermediate
  {
    id: 'vl-b2-environment',
    level: 'B2',
    subject: 'vocab',
    topic: 'Environment',
    title: 'The Natural World',
    description: 'Advanced environmental vocabulary.',
    content: {
      title: 'Ecology & Conservation',
      sections: [
        {
          heading: 'Global Issues',
          content: 'Environmental challenges.',
          wordList: [
            { word: 'Sustainability', definition: 'The ability to be maintained at a certain rate or level.', example: 'The company is committed to environmental sustainability.', imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Biodiversity', definition: 'The variety of plant and animal life in the world.', example: 'Protecting biodiversity is crucial for our planet.', imageUrl: 'https://images.unsplash.com/photo-1472396961695-1ad7a02b3a1a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Ecosystem', definition: 'A biological community of interacting organisms and their physical environment.', example: 'The coral reef is a complex ecosystem.', imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01674aa3e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Conservation', definition: 'Prevention of wasteful use of a resource.', example: 'Water conservation is important in dry areas.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Pollution', definition: 'The presence or introduction into the environment of a substance that has harmful effects.', example: 'Air pollution is a major problem in cities.', imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-env-1',
              type: 'fill-in-blank',
              question: '___ is the variety of plant and animal life in a particular habitat.',
              correctAnswer: ['biodiversity'],
              explanation: 'Biodiversity is a measure of the health of an ecosystem.'
            }
          ]
        }
      ]
    }
  },  {
    id: 'vl-b1-travel',
    level: 'B1',
    subject: 'vocab',
    topic: 'Travel',
    title: 'Travel & Tourism',
    description: 'Words for traveling, airports, and hotels.',
    content: {
      title: 'Traveling the World',
      sections: [
        {
          heading: 'At the Airport',
          content: 'Useful words when flying.',
          wordList: [
            { word: 'Departure', definition: 'The act of leaving a place.', example: 'The departure time is 10:00 AM.', imageUrl: 'https://images.unsplash.com/photo-1510156405230-6644f8b03049?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Arrival', definition: 'The act of reaching a place.', example: 'We waited for his arrival at the gate.', imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Passport', definition: 'An official document for travel.', example: 'Don\'t forget your passport!', imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Check-in', definition: 'The process of reporting one\'s arrival at an airport or hotel.', example: 'You should check-in at least two hours before your flight.', imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Boarding Pass', definition: 'A pass for boarding an aircraft.', example: 'I lost my boarding pass!', imageUrl: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-tra-2',
              type: 'matching',
              question: 'Passport',
              options: [
                'An official document for international travel',
                'A pass to enter the plane',
                'The act of reaching a destination'
              ],
              correctAnswer: ['An official document for international travel'],
              explanation: 'A passport verifies your identity and nationality for international travel.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-shopping',
    level: 'B1',
    subject: 'vocab',
    topic: 'Shopping',
    title: 'Retail & Consumption',
    description: 'Vocabulary for shopping, prices, and products.',
    content: {
      title: 'The Art of Shopping',
      sections: [
        {
          heading: 'In the Store',
          content: 'Common retail terms.',
          wordList: [
            { word: 'Bargain', definition: 'Something on sale at a lower price than its true value.', example: 'This coat was a real bargain.', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Refund', definition: 'An amount of money that is given back to you.', example: 'I\'d like to get a refund for this broken toaster.', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Receipt', definition: 'A piece of paper that proves you have paid for something.', example: 'Always keep your receipt.', imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=400&h=250&auto=format&fit=crop' }
          ],
          activities: [
            {
              id: 'b1-sho-1',
              type: 'comprehension',
              question: 'What do you need if you want to return a product and get your money back?',
              options: ['Bargain', 'Refund', 'Receipt', 'Product Tag'],
              correctAnswer: ['Receipt'],
              explanation: 'A receipt proves you purchased the item and is usually required for returns.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-health',
    level: 'B1',
    subject: 'vocab',
    topic: 'Health',
    title: 'Health & Lifestyle',
    description: 'Vocabulary for physical well-being and daily habits.',
    content: {
      title: 'Healthy Living',
      sections: [
        {
          heading: 'Well-being',
          content: 'Describing physical and mental states.',
          wordList: [
            { word: 'Nutrition', definition: 'The process of providing or obtaining the food necessary for health and growth.', example: 'Good nutrition is essential for a long life.', imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Exercise', definition: 'Activity requiring physical effort, carried out to sustain or improve health and fitness.', example: 'Regular exercise improves your mood.', imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Stress', definition: 'A state of mental or emotional strain or tension.', example: 'Yoga is great for reducing stress.', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Wellness', definition: 'The state of being in good health, especially as an actively pursued goal.', example: 'The spa focuses on holistic wellness.', imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Balanced Diet', definition: 'A diet consisting of a variety of different types of food.', example: 'A balanced diet includes fruits, vegetables, and proteins.', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&h=250&auto=format&fit=crop' },
          ]
        },
        {
          heading: 'Symptoms & Ailments',
          content: 'Common health problems.',
          wordList: [
            { word: 'Symptoms', definition: 'A physical or mental feature which is regarded as indicating a condition of disease.', example: 'What are your symptoms?', imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Prescription', definition: 'An instruction written by a medical practitioner that authorizes a patient to be provided with a medicine.', example: 'The doctor gave me a prescription for antibiotics.', imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Infection', definition: 'The process of infecting or the state of being infected.', example: 'Use alcohol to prevent infection.', imageUrl: 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-hea-2',
              type: 'fill-in-blank',
              question: 'A state of mental or emotional strain is called ___.',
              correctAnswer: ['stress'],
              explanation: 'Stress is common in modern life and can affect your health.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-arts',
    level: 'B1',
    subject: 'vocab',
    topic: 'Arts',
    title: 'Arts & Performance',
    description: 'Learn vocabulary related to theater, music, and visual arts.',
    content: {
      title: 'Culture & The Arts',
      sections: [
        {
          heading: 'Creative Expression',
          content: 'Terms used in the arts world.',
          wordList: [
            { word: 'Performance', definition: 'An act of staging or presenting a play, concert, or other form of entertainment.', example: 'The actor gave a wonderful performance.', imageUrl: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Audience', definition: 'The assembled spectators or listeners at a public event.', example: 'The audience clapped at the end of the show.', imageUrl: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Exhibition', definition: 'A public display of works of art or items of interest.', example: 'We went to see the new art exhibition.', imageUrl: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Masterpiece', definition: 'A work of outstanding artistry, skill, or workmanship.', example: 'The Mona Lisa is a masterpiece.', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Symphony', definition: 'An elaborate musical composition for full orchestra.', example: 'Beethoven wrote nine symphonies.', imageUrl: 'https://images.unsplash.com/photo-1514320299584-4bd0075d1df7?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-art-1',
              type: 'fill-in-blank',
              question: 'A group of people watching a show is the ___.',
              correctAnswer: ['audience'],
              explanation: 'The audience is the collective group of viewers or listeners.'
            },
            {
              id: 'b1-art-2',
              type: 'comprehension',
              question: 'What is a "masterpiece"?',
              options: ['A bad painting', 'An outstanding work of art', 'A type of musical instrument', 'A room in a museum'],
              correctAnswer: ['An outstanding work of art'],
              explanation: 'A masterpiece represents the highest level of skill and creativity.'
            }
          ]
        }
      ]
    }
  },
  // B2 - Upper Intermediate
  {
    id: 'vl-b2-education',
    level: 'B2',
    subject: 'vocab',
    topic: 'Education',
    title: 'Academic Life',
    description: 'Vocabulary for university and higher education.',
    content: {
      title: 'University & Studies',
      sections: [
        {
          heading: 'Higher Education',
          content: 'Academic terminology.',
          wordList: [
            { word: 'Curriculum', definition: 'The subjects comprising a course of study.', example: 'The school is updating its science curriculum.', imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Scholarship', definition: 'A grant or payment made to support a student\'s education.', example: 'She won a scholarship to study in London.', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Degree', definition: 'An academic rank conferred by a college or university.', example: 'He has a degree in philosophy.', imageUrl: 'https://images.unsplash.com/photo-1523240715632-d9e03d42e20d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Lecturer', definition: 'A person who gives lectures, especially as an occupation.', example: 'The lecturer explained the theory clearly.', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Enrollment', definition: 'The action of enrolling or being enrolled at a school or university.', example: 'Enrollment started last week.', imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-edu-1',
              type: 'matching',
              question: 'Curriculum',
              options: [
                'The subjects comprising a course of study',
                'A grant for education',
                'The person who gives lectures'
              ],
              correctAnswer: ['The subjects comprising a course of study'],
              explanation: 'The curriculum defines what students are expected to learn.'
            },
            {
              id: 'b2-edu-2',
              type: 'fill-in-blank',
              question: 'She won a ___ to study at a top university.',
              correctAnswer: ['scholarship'],
              explanation: 'Scholarships provide financial aid to students based on merit or need.'
            },
            {
              id: 'b2-edu-3',
              type: 'comprehension',
              question: 'Who typically delivers academic talks at a university?',
              options: ['Students', 'Lecturers', 'Librarians', 'Admissions officers'],
              correctAnswer: ['Lecturers'],
              explanation: 'Lecturers are academic professionals who teach and research at universities.'
            }
          ]
        }
      ]
    }
  },  {
    id: 'vl-b2-bank',
    level: 'B2',
    subject: 'vocab',
    topic: 'Bank',
    title: 'Banking & Finance',
    description: 'Advanced vocabulary for money and banking.',
    content: {
      title: 'Money Management',
      sections: [
        {
          heading: 'Bank Transactions',
          content: 'Common actions at a bank.',
          wordList: [
            { word: 'Withdrawal', definition: 'Taking money out of an account.', example: 'I made a cash withdrawal.', imageUrl: 'https://images.unsplash.com/photo-1550565118-3d1428df732e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Interest Rate', definition: 'The percentage of a sum of money charged by a bank.', example: 'Interest rates are rising.', imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Overdraft', definition: 'Spending more money than you have in your account.', example: 'I went into overdraft this month.', imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Collateral', definition: 'Something pledged as security for repayment of a loan.', example: 'She used her house as collateral for the loan.', imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Mortgage', definition: 'A legal agreement by which a bank lends money at interest in exchange for taking title of the debtor\'s property.', example: 'They took out a mortgage to buy the house.', imageUrl: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-ban-1',
              type: 'comprehension',
              question: 'What is collateral in the context of a loan?',
              options: ['The interest rate', 'Security pledged for repayment', 'A type of bank account', 'The money withdrawn'],
              correctAnswer: ['Security pledged for repayment'],
              explanation: 'Collateral protects the lender if the borrower fails to pay back the loan.'
            },
            {
              id: 'b2-ban-2',
              type: 'fill-in-blank',
              question: 'Taking money out of your account is called a ___.',
              correctAnswer: ['withdrawal'],
              explanation: 'A withdrawal is the opposite of a deposit.'
            },
            {
              id: 'b2-ban-3',
              type: 'matching',
              question: 'Mortgage',
              options: ['Loan for buying property', 'Percentage charged by bank', 'Minor wrongdoing'],
              correctAnswer: ['Loan for buying property'],
              explanation: 'A mortgage is a specific type of loan used to purchase real estate.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-media',
    level: 'B2',
    subject: 'vocab',
    topic: 'Media',
    title: 'Mass Communication',
    description: 'Terms related to news, journalism, and digital media.',
    content: {
      title: 'Media & Society',
      sections: [
        {
          heading: 'Journalism',
          content: 'Words used in the news industry.',
          wordList: [
            { word: 'Bias', definition: 'A tendency to favor one person, group, or point of view over another.', example: 'The newspaper was accused of political bias.', imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Headline', definition: 'The heading or caption at the top of a newspaper or magazine article.', example: 'The scandal hit the headlines yesterday.', imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Censorship', definition: 'The suppression or prohibition of any parts of books, films, or news.', example: 'The government imposed strict censorship on the media.', imageUrl: 'https://images.unsplash.com/photo-1585829365234-781f8f4242ec?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Broadcast', definition: 'Transmit by radio or television.', example: 'The event was broadcast live.', imageUrl: 'https://images.unsplash.com/photo-1557426436-e4905d465360?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Correspondent', definition: 'A person who writes letters to a person or a newspaper, or who contributes reports to a newspaper.', example: 'The war correspondent reported from the front lines.', imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-med-2',
              type: 'fill-in-blank',
              question: 'A tendency to favor one point of view over another is called ___.',
              correctAnswer: ['bias'],
              explanation: 'Media bias can influence public perception of events.'
            },
            {
              id: 'b2-med-3',
              type: 'comprehension',
              question: 'What do we call the suppression of news or books by a government?',
              options: ['Bias', 'Censorship', 'Broadcast', 'Headline'],
              correctAnswer: ['Censorship'],
              explanation: 'Censorship can limit freedom of speech and access to information.'
            },
            {
              id: 'b2-med-4',
              type: 'matching',
              question: 'Headline',
              options: ['Caption at the top of an article', 'A person who reports news', 'Transmit by radio'],
              correctAnswer: ['Caption at the top of an article'],
              explanation: 'Headlines are designed to grab the reader\'s attention and summarize the story.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-politics',
    level: 'B2',
    subject: 'vocab',
    topic: 'Politics',
    title: 'Political Systems',
    description: 'Learn vocabulary related to government and elections.',
    content: {
      title: 'Government & Politics',
      sections: [
        {
          heading: 'Political Terms',
          content: 'Words for describing how a country is run.',
          wordList: [
            { word: 'Democracy', definition: 'A system of government by the whole population.', example: 'Many countries are democracies.', imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Election', definition: 'A formal and organized process of electing members of a political body.', example: 'The presidential election is next month.', imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Parliament', definition: 'A legislative body of government.', example: 'Laws are debated in parliament.', imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Citizen', definition: 'A legally recognized subject or national of a state or commonwealth.', example: 'Every citizen has the right to vote.', imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-pol-1',
              type: 'matching',
              question: 'Democracy',
              options: [
                'A system of government by the whole population',
                'The process of electing members',
                'A legislative body'
              ],
              correctAnswer: ['A system of government by the whole population'],
              explanation: 'In a democracy, the power is typically exercised through elected representatives.'
            },
            {
              id: 'b2-pol-2',
              type: 'fill-in-blank',
              question: 'A formal process of choosing a political leader is an ___.',
              correctAnswer: ['election'],
              explanation: 'Elections are the cornerstone of democratic political systems.'
            },
            {
              id: 'b2-pol-3',
              type: 'comprehension',
              question: 'Who has the right to vote in most modern democracies?',
              options: ['Only land owners', 'All adult citizens', 'Only politicians', 'Only the wealthy'],
              correctAnswer: ['All adult citizens'],
              explanation: 'Universal suffrage is a key principle of modern democracy.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-science',
    level: 'B2',
    subject: 'vocab',
    topic: 'Science',
    title: 'Scientific Discovery',
    description: 'Vocabulary for various scientific fields.',
    content: {
      title: 'Science & Research',
      sections: [
        {
          heading: 'Common Science Terms',
          content: 'General words used in science.',
          wordList: [
            { word: 'Experiment', definition: 'A scientific procedure undertaken to make a discovery.', example: 'The scientist conducted an experiment.', imageUrl: 'https://images.unsplash.com/photo-1532187875471-da796a5814ea?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Hypothesis', definition: 'A proposed explanation made on the basis of limited evidence.', example: 'The researcher tested the hypothesis.', imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Innovation', definition: 'The action or process of innovating.', example: 'Technology is driving innovation.', imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Analysis', definition: 'Detailed examination of the elements or structure of something.', example: 'The analysis of the data took weeks.', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-sci-1',
              type: 'comprehension',
              question: 'What is a hypothesis?',
              options: ['A proven fact', 'A proposed explanation based on limited evidence', 'A piece of laboratory equipment', 'The final result of an experiment'],
              correctAnswer: ['A proposed explanation based on limited evidence'],
              explanation: 'A hypothesis is a starting point for further investigation.'
            },
            {
              id: 'b2-sci-2',
              type: 'fill-in-blank',
              question: 'Detailed examination of data is called ___.',
              correctAnswer: ['analysis'],
              explanation: 'Scientific analysis involves breaking down data to understand its meaning.'
            },
            {
              id: 'b2-sci-3',
              type: 'matching',
              question: 'Innovation',
              options: ['New ideas or methods', 'A proven theory', 'Ancient history'],
              correctAnswer: ['New ideas or methods'],
              explanation: 'Innovation is about creating or significantly improving processes or products.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-history',
    level: 'B2',
    subject: 'vocab',
    topic: 'History',
    title: 'Historical Eras',
    description: 'Learn vocabulary related to the past and historical events.',
    content: {
      title: 'The Past & Beyond',
      sections: [
        {
          heading: 'Historical Terms',
          content: 'Words for discussing history.',
          wordList: [
            { word: 'Ancient', definition: 'Belonging to the very distant past.', example: 'Ancient civilizations left many ruins.', imageUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Revolution', definition: 'A forcible overthrow of a government or social order.', example: 'The French Revolution changed the history of Europe.', imageUrl: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Dynasty', definition: 'A line of hereditary rulers of a country.', example: 'The Ming Dynasty ruled China for centuries.', imageUrl: 'https://images.unsplash.com/photo-1528697203043-733dafdaa316?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Archaeology', definition: 'The study of human history through the excavation of sites.', example: 'Archaeology helps us understand ancient lives.', imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Heritage', definition: 'Something that is handed down from the past.', example: 'We must preserve our cultural heritage.', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-his-1',
              type: 'fill-in-blank',
              question: 'The study of human history through excavation is called ___.',
              correctAnswer: ['archaeology'],
              explanation: 'Archaeologists dig up artifacts to learn about the past.'
            },
            {
              id: 'b2-his-2',
              type: 'comprehension',
              question: 'What does "ancient" refer to?',
              options: ['The very distant past', 'Last week', 'The future', 'Recent events'],
              correctAnswer: ['The very distant past'],
              explanation: 'Ancient history covers civilizations from the beginning of recorded history up to the Middle Ages.'
            },
            {
              id: 'b2-his-3',
              type: 'matching',
              question: 'Revolution',
              options: ['Overthrow of a social order', 'A peaceful transition', 'A steady state'],
              correctAnswer: ['Overthrow of a social order'],
              explanation: 'Revolutions often result in fundamental changes to political or social structures.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-ai',
    level: 'B2',
    subject: 'vocab',
    topic: 'Technology',
    title: 'Advanced Robotics & AI',
    description: 'Explore the terminology of artificial intelligence and automation.',
    content: {
      title: 'Silicon Intelligence',
      sections: [
        {
          heading: 'AI Concepts',
          content: 'Technical and ethical terms in AI.',
          wordList: [
            { word: 'Machine Learning', definition: 'The use and development of computer systems that are able to learn and adapt without following explicit instructions.', example: 'Machine learning is used to improve search engine results.', imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Neural Network', definition: 'A computer system modeled on the human brain and nervous system.', example: 'Neural networks are exceptionally good at image recognition.', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Automation', definition: 'The technique of making an apparatus, a process, or a system operate automatically.', example: 'Automation in manufacturing has increased efficiency.', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Ethics of AI', definition: 'The branch of ethics that deals with the moral implications of artificial intelligence.', example: 'Data bias is a major concern in the ethics of AI.', imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Algorithm', definition: 'A process or set of rules to be followed in calculations or other problem-solving operations.', example: 'The algorithm determines the content you see.', imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Big Data', definition: 'Extremely large data sets that may be analyzed computationally to reveal patterns.', example: 'Companies use big data to understand consumer behavior.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bbda38a5f85d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Sentiment Analysis', definition: 'The process of computationally identifying and categorizing opinions expressed in text.', example: 'We used sentiment analysis to gauge customer satisfaction.', imageUrl: 'https://images.unsplash.com/photo-1518186239745-63bc76538af3?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-ai-1',
              type: 'fill-in-blank',
              question: '___ networks are computer systems modeled on the human brain.',
              correctAnswer: ['neural'],
              explanation: 'Neural networks are a type of machine learning model inspired by biological neural networks.'
            },
            {
              id: 'b2-ai-2',
              type: 'comprehension',
              question: 'What is the goal of automation in industry?',
              options: ['To increase manual labor', 'To make processes operate automatically', 'To reduce computer usage', 'To increase paper waste'],
              correctAnswer: ['To make processes operate automatically'],
              explanation: 'Automation aims to increase efficiency and reduce human error.'
            },
            {
              id: 'b2-ai-3',
              type: 'matching',
              question: 'Big Data',
              options: ['Large sets of complex data', 'A small computer chip', 'A type of robot'],
              correctAnswer: ['Large sets of complex data'],
              explanation: 'Big data analytics reveals patterns and trends in massive datasets.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-space',
    level: 'B2',
    subject: 'vocab',
    topic: 'Science',
    title: 'Astronomy & Space Exploration',
    description: 'Learn terms related to the cosmos and space travel.',
    content: {
      title: 'The Final Frontier',
      sections: [
        {
          heading: 'The Cosmos',
          content: 'Universe and celestial bodies.',
          wordList: [
            { word: 'Galaxy', definition: 'A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction.', example: 'The Milky Way is our home galaxy.', imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Celestial', definition: 'Positioned in or relating to the sky, or outer space as observed in astronomy.', example: 'The telescope allows us to see celestial bodies more clearly.', imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Orbit', definition: 'The curved path of a celestial object or spacecraft around a star, planet, or moon.', example: 'The Earth is in orbit around the Sun.', imageUrl: 'https://images.unsplash.com/photo-1451187530220-4e2a74c65360?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Exoplanet', definition: 'A planet which orbits a star outside the solar system.', example: 'Scientists have discovered thousands of exoplanets.', imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f18bd4861e?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Supernova', definition: 'A star that suddenly increases greatly in brightness because of a catastrophic explosion.', example: 'A supernova can outshine an entire galaxy.', imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Black Hole', definition: 'A region of space having a gravitational field so intense that no matter or radiation can escape.', example: 'Light cannot escape from a black hole.', imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Astronaut', definition: 'A person who is trained to travel in a spacecraft.', example: 'The astronauts are living on the space station.', imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-spa-1',
              type: 'comprehension',
              question: 'What is an exoplanet?',
              options: ['A planet in our solar system', 'A planet orbiting a star outside our solar system', 'A star that has exploded', 'A moon revolving around Mars'],
              correctAnswer: ['A planet orbiting a star outside our solar system'],
              explanation: 'Exoplanets are any planets beyond our solar system.'
            },
            {
              id: 'b2-spa-2',
              type: 'fill-in-blank',
              question: 'The Milky Way is an example of a ___.',
              correctAnswer: ['galaxy'],
              explanation: 'A galaxy is a massive collection of stars, gas, and dust.'
            },
            {
              id: 'b2-spa-3',
              type: 'matching',
              question: 'Black Hole',
              options: ['Region with intense gravity', 'A bright star', 'A type of rocket'],
              correctAnswer: ['Region with intense gravity'],
              explanation: 'Black holes are regions where gravity is so strong even light cannot escape.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-rights',
    level: 'B2',
    subject: 'vocab',
    topic: 'Society',
    title: 'Human Rights & Civil Liberties',
    description: 'Vocabulary for discussing social justice and legal protections.',
    content: {
      title: 'Justice & Equality',
      sections: [
        {
          heading: 'Civil Rights',
          content: 'Fundamental protections for individuals.',
          wordList: [
            { word: 'Sovereignty', definition: 'The authority of a state to govern itself.', example: 'The people fought for their political sovereignty.', imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Liberty', definition: 'The state of being free within society from oppressive restrictions.', example: 'Fundamental liberties are protected by the constitution.', imageUrl: 'https://images.unsplash.com/photo-1467226632440-65f0b4957563?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Equality', definition: 'The state of being equal, especially in status, rights, and opportunities.', example: 'Gender equality is a key goal for modern society.', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Discrimination', definition: 'The unjust or prejudicial treatment of different categories of people.', example: 'The law forbids discrimination in the workplace.', imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-rig-1',
              type: 'matching',
              question: 'Equality',
              options: [
                'State of being equal in status and rights',
                'Authority of a state to govern itself',
                'Extreme freedom from restrictions'
              ],
              correctAnswer: ['State of being equal in status and rights'],
              explanation: 'Equality is a fundamental human right ensuring everyone has the same opportunities.'
            },
            {
              id: 'b2-rig-2',
              type: 'fill-in-blank',
              question: 'The right of a state to govern itself is called ___.',
              correctAnswer: ['sovereignty'],
              explanation: 'Sovereignty is the ultimate authority in a territory.'
            },
            {
              id: 'b2-rig-3',
              type: 'comprehension',
              question: 'What is the unjust treatment of different categories of people called?',
              options: ['Equality', 'Discrimination', 'Liberty', 'Sovereignty'],
              correctAnswer: ['Discrimination'],
              explanation: 'Discrimination based on race, gender, or religion is prohibited by most international human rights laws.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-climate',
    level: 'B2',
    subject: 'vocab',
    topic: 'Environment',
    title: 'Climate Change & Energy',
    description: 'Vocabulary for discussing global warming and renewable energy.',
    content: {
      title: 'Our Changing Planet',
      sections: [
        {
          heading: 'Causes and Solutions',
          content: 'Key terms in the climate debate.',
          wordList: [
            { word: 'Greenhouse Effect', definition: 'The trapping of the sun\'s warmth in a planet\'s lower atmosphere.', example: 'The greenhouse effect is driving global warming.', imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Emissions', definition: 'The production and discharge of something, especially gas or radiation.', example: 'We must reduce carbon emissions.', imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Renewable Energy', definition: 'Energy from a source that is not depleted when used.', example: 'Solar and wind are forms of renewable energy.', imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Carbon Footprint', definition: 'The total amount of greenhouse gases produced to support human activities.', example: 'I try to reduce my carbon footprint by walking.', imageUrl: 'https://images.unsplash.com/photo-1526379310331-5080ee8b2743?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Deforestation', definition: 'The action of clearing a wide area of trees.', example: 'Deforestation is destroying animal habitats.', imageUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-cli-1',
              type: 'fill-in-blank',
              question: 'Solar power is a form of ___ energy.',
              correctAnswer: ['renewable'],
              explanation: 'Renewable energy comes from natural sources that replenish themselves.'
            },
            {
              id: 'b2-cli-2',
              type: 'comprehension',
              question: 'What is "carbon footprint"?',
              options: ['A literal footprint in coal', 'The amount of CO2 produced by an individual', 'A type of shoe made of carbon', 'A way to measure forest size'],
              correctAnswer: ['The amount of CO2 produced by an individual'],
              explanation: 'It measures the total greenhouse gas emissions caused by an individual, event, or organization.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-psychology',
    level: 'B2',
    subject: 'vocab',
    topic: 'Science',
    title: 'Psychology & The Mind',
    description: 'Learn terms related to behavior, thought, and emotion.',
    content: {
      title: 'Exploring the Mind',
      sections: [
        {
          heading: 'Mental Processes',
          content: 'Key concepts in psychology.',
          wordList: [
            { word: 'Cognition', definition: 'The mental action or process of acquiring knowledge and understanding through thought.', example: 'Cognition plays a major role in how we learn.', imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Empathy', definition: 'The ability to understand and share the feelings of another.', example: 'Empathy is essential for good relationships.', imageUrl: 'https://images.unsplash.com/photo-1522071823903-519782550186?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Subconscious', definition: 'Concerning the part of the mind of which one is not fully aware.', example: 'Dreams often reveal our subconscious fears.', imageUrl: 'https://images.unsplash.com/photo-1454486844807-ca3b245199bb?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Motivation', definition: 'The reason or reasons one has for acting or behaving in a particular way.', example: 'What is your motivation for learning English?', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Perception', definition: 'The ability to see, hear, or become aware of something through the senses.', example: 'Our perception of reality can be influenced by our beliefs.', imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-psy-1',
              type: 'fill-in-blank',
              question: 'The ability to share the feelings of others is ___.',
              correctAnswer: ['empathy'],
              explanation: 'Empathy allows us to connect with others on an emotional level.'
            },
            {
              id: 'b2-psy-2',
              type: 'comprehension',
              question: 'What does "cognition" refer to?',
              options: ['Physical strength', 'Mental processes of acquiring knowledge', 'A type of medicine', 'The study of the stars'],
              correctAnswer: ['Mental processes of acquiring knowledge'],
              explanation: 'Cognition includes thinking, knowing, remembering, judging, and problem-solving.'
            }
          ]
        }
      ]
    }
  },
  // C1 - Advanced
  {
    id: 'vl-c1-work',
    level: 'C1',
    subject: 'vocab',
    topic: 'Work',
    title: 'Professional Environment',
    description: 'Upper-level professional and corporate vocabulary.',
    content: {
      title: 'The Modern Workplace',
      sections: [
        {
          heading: 'Corporate Culture',
          content: 'Advanced business terminology.',
          wordList: [
            { word: 'Redundancy', definition: 'The state of being no longer in employment because the job is no longer needed.', example: 'The company announced 200 redundancies.', imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Appraisal', definition: 'A formal assessment of the performance of an employee.', example: 'I have my annual performance appraisal next week.', imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Remuneration', definition: 'Money paid for work or a service.', example: 'They offered a generous remuneration package.', imageUrl: 'https://images.unsplash.com/photo-1454165833767-02a521773b64?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Prerequisite', definition: 'A thing that is required as a prior condition for something else to happen or exist.', example: 'Experience is a prerequisite for this job.', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Bureaucracy', definition: 'A system of government in which most of the important decisions are taken by state officials rather than by elected representatives.', example: 'The new laws will reduce bureaucracy.', imageUrl: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-wor-1',
              type: 'fill-in-blank',
              question: 'Money paid for work or service is formally known as ___.',
              correctAnswer: ['remuneration'],
              explanation: 'Remuneration includes salary, wages, and other benefits.'
            },
            {
              id: 'c1-wor-2',
              type: 'comprehension',
              question: 'What is a performance appraisal?',
              options: ['A redundancy notice', 'A formal assessment of an employee\'s performance', 'A promotion ceremony', 'A casual team meeting'],
              correctAnswer: ['A formal assessment of an employee\'s performance'],
              explanation: 'Appraisals are common in corporate settings to provide feedback and set goals.'
            },
            {
              id: 'c1-wor-3',
              type: 'matching',
              question: 'Redundancy',
              options: ['Job loss because it\'s no longer needed', 'A system of government officials', 'A prior condition required'],
              correctAnswer: ['Job loss because it\'s no longer needed'],
              explanation: 'Redundancies often occur during company restructuring or economic downturns.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-sport',
    level: 'C1',
    subject: 'vocab',
    topic: 'Sport',
    title: 'The World of Sport',
    description: 'Advanced sporting terminology and idioms.',
    content: {
      title: 'Athletics & Competition',
      sections: [
        {
          heading: 'Competition Terms',
          content: 'High-level sporting words.',
          wordList: [
            { word: 'Unbeaten', definition: 'Not having been defeated.', example: 'The team remains unbeaten this season.', imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Tournament', definition: 'A series of contests between several competitors.', example: 'She won the tennis tournament.', imageUrl: 'https://images.unsplash.com/photo-1461896646984-d7578640a321?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Endorsement', definition: 'Public support of a product by a famous person.', example: 'The athlete signed a major endorsement deal.', imageUrl: 'https://images.unsplash.com/photo-1473615695634-d39d09ed3161?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Disqualification', definition: 'The action of being stopped from taking part in a competition.', example: 'He faced disqualification for using a banned substance.', imageUrl: 'https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Champion', definition: 'A person who has surpassed all rivals in a sporting contest or other competition.', example: 'She is the world champion in chess.', imageUrl: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-spo-1',
              type: 'comprehension',
              question: 'What is a sports endorsement?',
              options: ['A player being disqualified', 'A famous person supporting a product', 'Winning a tournament', 'Remaining unbeaten'],
              correctAnswer: ['A famous person supporting a product'],
              explanation: 'Endorsements are a major source of income for professional athletes.'
            },
            {
              id: 'c1-spo-2',
              type: 'fill-in-blank',
              question: 'A series of contests between several competitors is a ___.',
              correctAnswer: ['tournament'],
              explanation: 'Tournaments are organized to determine a champion.'
            },
            {
              id: 'b1-spo-3',
              type: 'matching',
              question: 'Disqualification',
              options: ['Being stopped from taking part', 'Surpassing all rivals', 'Remaining undefeated'],
              correctAnswer: ['Being stopped from taking part'],
              explanation: 'Disqualification can happen due to rule violations or misconduct.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-psychology',
    level: 'C1',
    subject: 'vocab',
    topic: 'Psychology',
    title: 'The Human Mind',
    description: 'Advanced vocabulary for psychological concepts and mental states.',
    content: {
      title: 'Psychology & Behavioral Science',
      sections: [
        {
          heading: 'Mental Processes',
          content: 'Terms describing how the mind works.',
          wordList: [
            { word: 'Cognitive', definition: 'Relating to the mental action or process of acquiring knowledge and understanding.', example: 'Cognitive development is fast in early childhood.', imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Ambivalent', definition: 'Having mixed feelings or contradictory ideas about something or someone.', example: 'He felt ambivalent about his new job.', imageUrl: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Empathy', definition: 'The ability to understand and share the feelings of another.', example: 'Empathy is crucial for strong relationships.', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c29530ad?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Subconscious', definition: 'Concerning the part of the mind which is not fully aware but which influences one\'s actions and feelings.', example: 'Maybe it was a subconscious decision.', imageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Resilience', definition: 'The capacity to recover quickly from difficulties.', example: 'She showed great resilience after the accident.', imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-psy-1',
              type: 'matching',
              question: 'Empathy',
              options: [
                'Ability to understand and share feelings of another',
                'Mixed feelings or contradictory ideas',
                'Mental action of acquiring knowledge'
              ],
              correctAnswer: ['Ability to understand and share feelings of another'],
              explanation: 'Empathy allows people to connect on a deeper emotional level.'
            },
            {
              id: 'c1-psy-2',
              type: 'fill-in-blank',
              question: 'The part of the mind that is not fully aware but influences actions is the ___.',
              correctAnswer: ['subconscious'],
              explanation: 'The subconscious plays a large role in human behavior.'
            },
            {
              id: 'c1-psy-3',
              type: 'comprehension',
              question: 'What does "cognitive" relate to?',
              options: ['Physical training', 'Acquiring knowledge and understanding', 'Social status', 'Environmental issues'],
              correctAnswer: ['Acquiring knowledge and understanding'],
              explanation: 'Cognitive processes include memory, reasoning, and problem-solving.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-linguistics',
    level: 'C1',
    subject: 'vocab',
    topic: 'Linguistics',
    title: 'Linguistics & Communication Mastery',
    description: 'Upper-level vocabulary for language study and discourse.',
    content: {
      title: 'The Structure of Language',
      sections: [
        {
          heading: 'Academic Linguistics',
          content: 'Technical terms for language analysis.',
          wordList: [
            { word: 'Syntax', definition: 'The arrangement of words and phrases to create well-formed sentences.', example: 'The syntax of the poem is highly complex.', imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Pragmatics', definition: 'The branch of linguistics dealing with language in use and its contexts.', example: 'Pragmatics helps explain how we understand irony.', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c29530ad?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Phonology', definition: 'The system of relationships among the speech sounds that constitute the fundamental components of a language.', example: 'Phonology is the study of sound patterns.', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-lin-1',
              type: 'fill-in-blank',
              question: 'The arrangement of words to create well-formed sentences is called ___.',
              correctAnswer: ['syntax'],
              explanation: 'Syntax rules vary significantly across different languages.'
            },
            {
              id: 'c1-lin-2',
              type: 'comprehension',
              question: 'Which branch of linguistics deals with language in context?',
              options: ['Syntax', 'Pragmatics', 'Phonology', 'Morphology'],
              correctAnswer: ['Pragmatics'],
              explanation: 'Pragmatics explains how context contributes to meaning.'
            },
            {
              id: 'c1-lin-3',
              type: 'matching',
              question: 'Phonology',
              options: ['Study of sound patterns', 'Arrangement of words', 'Language in context'],
              correctAnswer: ['Study of sound patterns'],
              explanation: 'Phonology focuses on how sounds function within a language.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-sociology',
    level: 'C1',
    subject: 'vocab',
    topic: 'Sociology',
    title: 'Sociology & Modern Society',
    description: 'Advanced vocabulary for social structures and cultural phenomena.',
    content: {
      title: 'Society & Culture',
      sections: [
        {
          heading: 'Social Theory',
          content: 'Terms describing societal organization.',
          wordList: [
            { word: 'Stratification', definition: 'The arrangement or classification of something into different groups.', example: 'Social stratification is a key concept in sociology.', imageUrl: 'https://images.unsplash.com/photo-1523413184742-9993da29f4aa?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Assimilation', definition: 'The process of taking in and fully understanding information or ideas.', example: 'Cultural assimilation can be a slow process.', imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Alienation', definition: 'The state or experience of being isolated from a group or an activity.', example: 'Urban life can lead to feelings of alienation.', imageUrl: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-soc-1',
              type: 'comprehension',
              question: 'What is cultural assimilation?',
              options: ['Social isolation', 'The process of taking in and understanding ideas/culture', 'Class stratification', 'A financial model'],
              correctAnswer: ['The process of taking in and understanding ideas/culture'],
              explanation: 'Assimilation often happens when a minority group adopts the customs of a majority group.'
            },
            {
              id: 'c1-soc-2',
              type: 'fill-in-blank',
              question: 'The arrangement of society into different groups or layers is ___.',
              correctAnswer: ['stratification'],
              explanation: 'Social stratification often relates to wealth, status, or power.'
            },
            {
              id: 'c1-soc-3',
              type: 'matching',
              question: 'Alienation',
              options: ['Isolation from a group', 'Taking in new culture', 'Class arrangement'],
              correctAnswer: ['Isolation from a group'],
              explanation: 'Alienation can occur when individuals feel disconnected from their community or society.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-medical-ethics',
    level: 'C1',
    subject: 'vocab',
    topic: 'Ethics',
    title: 'Bio-Ethics & Research',
    description: 'High-level vocabulary for the intersection of medicine, technology, and morality.',
    content: {
      title: 'Ethical Dilimmas',
      sections: [
        {
          heading: 'Bioethical Concepts',
          content: 'Vocabulary for modern medical debates.',
          wordList: [
            { word: 'Bioethics', definition: 'The ethics of medical and biological research.', example: 'The committee discussed the bioethics of cloning.', imageUrl: 'https://images.unsplash.com/photo-1532187875471-da796a5814ea?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Autonomy', definition: 'The right or condition of self-government.', example: 'Patient autonomy is a fundamental principle of medical ethics.', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Informed Consent', definition: 'Permission granted in the knowledge of the possible consequences.', example: 'The doctor must obtain informed consent before surgery.', imageUrl: 'https://images.unsplash.com/photo-1454165833767-02a521773b64?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-eth-1',
              type: 'matching',
              question: 'Autonomy',
              options: [
                'Right to self-government and decision-making',
                'Permission granted after knowing consequences',
                'Ethics of biological research'
              ],
              correctAnswer: ['Right to self-government and decision-making'],
              explanation: 'In healthcare, autonomy refers to the patient\'s right to choose their treatment.'
            },
            {
              id: 'c1-eth-2',
              type: 'fill-in-blank',
              question: 'Permission granted with knowledge of consequences is ___ consent.',
              correctAnswer: ['informed'],
              explanation: 'Informed consent is a legal and ethical requirement in medicine.'
            },
            {
              id: 'c1-eth-3',
              type: 'comprehension',
              question: 'What does "bioethics" primarily deal with?',
              options: ['Business management', 'Ethics of medical and biological research', 'Space exploration', 'Linguistic analysis'],
              correctAnswer: ['Ethics of medical and biological research'],
              explanation: 'Bioethics addresses questions about cloning, organ transplants, and genetic engineering.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-abstract',
    level: 'C1',
    subject: 'vocab',
    topic: 'Philosophy',
    title: 'Abstract Concepts',
    description: 'Learn vocabulary for discussing complex ideas and theories.',
    content: {
      title: 'Ideas & Intellect',
      sections: [
        {
          heading: 'Philosophical Terms',
          content: 'Words for higher-level discussion.',
          wordList: [
            { word: 'Ambiguity', definition: 'The quality of being open to more than one interpretation.', example: 'The ambiguity of the poem allows for multiple readings.', imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Paradox', definition: 'A seemingly absurd or self-contradictory statement that when explained may prove to be true.', example: 'The paradox of thrift suggests that saving can be bad for the economy.', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Synthesis', definition: 'The combination of ideas to form a theory or system.', example: 'Her work is a synthesis of several different styles.', imageUrl: 'https://images.unsplash.com/photo-1518186239745-63bc76538af3?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Pragmatism', definition: 'An approach that assesses the truth of meaning of theories or beliefs in terms of the success of their practical application.', example: 'His politics were driven by pragmatism rather than ideology.', imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-abs-1',
              type: 'fill-in-blank',
              question: 'Something that is open to multiple interpretations has ___.',
              correctAnswer: ['ambiguity'],
              explanation: 'Ambiguity can be a powerful tool in literature and art.'
            }
          ]
        }
      ]
    }
  },
  // C2 - Mastery
  {
    id: 'vl-c2-philosophy',
    level: 'C2',
    subject: 'vocab',
    topic: 'Philosophy',
    title: 'Abstract Concepts',
    description: 'Mastery-level vocabulary for philosophy and academic thought.',
    content: {
      title: 'Philosophical Discourse',
      sections: [
        {
          heading: 'Existential Concepts',
          content: 'High-level academic vocabulary.',
          wordList: [
            { word: 'Inherent', definition: 'Existing in something as a permanent, essential, or characteristic attribute.', example: 'There are inherent risks in this project.', imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Paradigm', definition: 'A typical example or pattern of something; a model.', example: 'This represents a paradigm shift in our thinking.', imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Juxtaposition', definition: 'The fact of two things being seen or placed close together with contrasting effect.', example: 'The artist uses the juxtaposition of light and shadow.', imageUrl: 'https://images.unsplash.com/photo-1579762795188-aa33d23f899f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Absurdism', definition: 'A philosophy based on the belief that the universe is irrational and meaningless.', example: 'The play explores themes of absurdism.', imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Epistemology', definition: 'The theory of knowledge, especially with regard to its methods, validity, and scope.', example: 'Epistemology is a key branch of philosophy.', imageUrl: 'https://images.unsplash.com/photo-1532012197367-6bb40673010b?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c2-phi-1',
              type: 'fill-in-blank',
              question: 'A typical example or pattern of something is a ___.',
              correctAnswer: ['paradigm'],
              explanation: 'A paradigm shift represents a fundamental change in approach or underlying assumptions.'
            },
            {
              id: 'c2-phi-2',
              type: 'comprehension',
              question: 'What is epistemology?',
              options: ['The study of insects', 'The theory of knowledge', 'A type of poetry', 'The study of stars'],
              correctAnswer: ['The theory of knowledge'],
              explanation: 'Epistemology examines the nature, origin, and limits of human knowledge.'
            },
            {
              id: 'c2-phi-3',
              type: 'matching',
              question: 'Juxtaposition',
              options: ['Placing things close for contrast', 'An essential attribute', 'Meaninglessness of universe'],
              correctAnswer: ['Placing things close for contrast'],
              explanation: 'Juxtaposition is a common technique in art and literature.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b1-health-advanced',
    level: 'B1',
    subject: 'vocab',
    topic: 'Health',
    title: 'Health & Wellness',
    description: 'In-depth health and medical vocabulary.',
    content: {
      title: 'Healthy Living',
      sections: [
        {
          heading: 'Medical Symptoms',
          content: 'Common health issues.',
          wordList: [
            { word: 'Symptom', definition: 'A physical or mental feature indicating a condition of disease.', example: 'Fever is a common symptom of the flu.', imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Prescription', definition: 'An instruction written by a medical practitioner that authorizes a patient to be provided with a medicine.', example: 'The doctor wrote a prescription for antibiotics.', imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Therapy', definition: 'Treatment intended to relieve or heal a disorder.', example: 'She is undergoing physical therapy.', imageUrl: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Recovery', definition: 'A return to a normal state of health, mind, or strength.', example: 'The surgery was a success and he is in recovery.', imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Immunity', definition: 'The ability of an organism to resist a particular infection.', example: 'Vaccines provide immunity against diseases.', imageUrl: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b1-hea-3',
              type: 'comprehension',
              question: 'What is a medical prescription?',
              options: ['A type of treatment', 'Authorized instruction for medicine', 'A physical symptom', 'A recovery plan'],
              correctAnswer: ['Authorized instruction for medicine'],
              explanation: 'Prescriptions are written by doctors to ensure patients receive correct medication.'
            },
            {
              id: 'b1-hea-4',
              type: 'fill-in-blank',
              question: 'A physical or mental feature indicating a disease is a ___.',
              correctAnswer: ['symptom'],
              explanation: 'Symptoms help doctors diagnose medical conditions.'
            },
            {
              id: 'b1-hea-5',
              type: 'matching',
              question: 'Recovery',
              options: ['Return to normal health', 'Ability to resist infection', 'Mental assessment'],
              correctAnswer: ['Return to normal health'],
              explanation: 'Recovery is the process of getting better after being sick or injured.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-b2-crime',
    level: 'B2',
    subject: 'vocab',
    topic: 'Crime',
    title: 'Crime & Justice',
    description: 'Terminology for law enforcement and legal processes.',
    content: {
      title: 'Law & Order',
      sections: [
        {
          heading: 'Legal Terms',
          content: 'Common words in the legal system.',
          wordList: [
            { word: 'Verdict', definition: 'A decision on a disputed issue in a civil or criminal case.', example: 'The jury reached a unanimous verdict.', imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Acquittal', definition: 'A judgment that a person is not guilty of the crime with which they have been charged.', example: 'The trial ended in an acquittal.', imageUrl: 'https://images.unsplash.com/photo-1453723490680-8882a24d036d?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Rehabilitation', definition: 'The action of restoring someone to health or normal life through training and therapy.', example: 'Prisons should focus more on rehabilitation.', imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea530af494ad?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Prosecution', definition: 'The institution and conducting of legal proceedings against someone.', example: 'The prosecution presented strong evidence.', imageUrl: 'https://images.unsplash.com/photo-1589216532372-2c2a9ec671cc?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Misdemeanor', definition: 'A minor wrongdoing.', example: 'He was charged with a misdemeanor.', imageUrl: 'https://images.unsplash.com/photo-1585829365234-781f8f4242ec?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'b2-cri-1',
              type: 'fill-in-blank',
              question: 'A unanimous decision reached by a jury is called a ___.',
              correctAnswer: ['verdict'],
              explanation: 'A verdict is the final decision on whether a defendant is guilty or not guilty.'
            },
            {
              id: 'b2-cri-2',
              type: 'comprehension',
              question: 'What is rehabilitation in the legal sense?',
              options: ['Punishing a criminal', 'Restoring someone to normal life through training', 'Conducting legal proceedings', 'A minor wrongdoing'],
              correctAnswer: ['Restoring someone to normal life through training'],
              explanation: 'Rehabilitation aims to help criminals re-enter society as productive members.'
            },
            {
              id: 'b2-cri-3',
              type: 'matching',
              question: 'Acquittal',
              options: ['Judgment of not guilty', 'Decision by a jury', 'A minor crime'],
              correctAnswer: ['Judgment of not guilty'],
              explanation: 'An acquittal means the defendant has been cleared of the charges.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-finance',
    level: 'C1',
    subject: 'vocab',
    topic: 'Finance',
    title: 'Global Finance',
    description: 'High-level financial and economic terminology.',
    content: {
      title: 'Economics & Markets',
      sections: [
        {
          heading: 'Market Dynamics',
          content: 'Advanced financial terms.',
          wordList: [
            { word: 'Volatility', definition: 'Liability to change rapidly and unpredictably, especially for the worse.', example: 'The stock market has shown great volatility.', imageUrl: 'https://images.unsplash.com/photo-1611974714851-13511eb96020?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Liquidity', definition: 'The availability of liquid assets to a market or company.', example: 'The company is facing a liquidity crisis.', imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e10?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Dividend', definition: 'A sum of money paid regularly by a company to its shareholders.', example: 'The company announced a record dividend.', imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Equity', definition: 'The value of the shares issued by a company.', example: 'They traded their debt for equity.', imageUrl: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Arbitrage', definition: 'The simultaneous buying and selling of securities in different markets to take advantage of differing prices.', example: 'Arbitrage is a common strategy in hedge funds.', imageUrl: 'https://images.unsplash.com/photo-1543286386-713bcd53b971?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-fin-1',
              type: 'fill-in-blank',
              question: 'The liability of an asset to change rapidly and unpredictably is ___.',
              correctAnswer: ['volatility'],
              explanation: 'Volatility is often used to measure the risk associated with a particular investment.'
            },
            {
              id: 'c1-fin-2',
              type: 'comprehension',
              question: 'What is a dividend?',
              options: ['A type of bank loan', 'Money paid regularly by a company to shareholders', 'A rapid market change', 'Buying and selling in different markets'],
              correctAnswer: ['Money paid regularly by a company to shareholders'],
              explanation: 'Dividends are a way for companies to distribute profits to their investors.'
            },
            {
              id: 'c1-fin-3',
              type: 'matching',
              question: 'Liquidity',
              options: ['Availability of liquid assets', 'Value of shares', 'Simultaneous buying and selling'],
              correctAnswer: ['Availability of liquid assets'],
              explanation: 'Liquidity refers to how easily an asset can be converted into cash.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-psychology-behavior',
    level: 'C1',
    subject: 'vocab',
    topic: 'Psychology',
    title: 'Mind & Behavior',
    description: 'Vocabulary for psychological concepts.',
    content: {
      title: 'Psychological Concepts',
      sections: [
        {
          heading: 'Mental Processes',
          content: 'High-level terminology for the mind.',
          wordList: [
            { word: 'Cognitive', definition: 'Relating to the mental action or process of acquiring knowledge.', example: 'Reading is a complex cognitive task.', imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Resilience', definition: 'The capacity to recover quickly from difficulties.', example: 'Psychological resilience is key to coping with stress.', imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Subconscious', definition: 'Concerning the part of the mind of which one is not fully aware.', example: 'Dreams often reflect our subconscious fears.', imageUrl: 'https://images.unsplash.com/photo-1516335973783-f09627763261?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Introversion', definition: 'The quality of being shy and reticent.', example: 'His introversion makes him a good listener.', imageUrl: 'https://images.unsplash.com/photo-1499209974431-9ddd37a484d7?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Extroversion', definition: 'The quality of being outgoing and socially confident.', example: 'Her extroversion helps her in sales.', imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-psy-2',
              type: 'matching',
              question: 'Introversion',
              options: [
                'Quality of being outgoing and social',
                'Quality of being shy and reticent',
                'Ability to recover from difficulties'
              ],
              correctAnswer: ['Quality of being shy and reticent'],
              explanation: 'Introversion and extroversion represent different ways people gain energy and interact with the world.'
            },
            {
              id: 'c1-psy-4',
              type: 'fill-in-blank',
              question: 'The capacity to recover quickly from difficulties is ___.',
              correctAnswer: ['resilience'],
              explanation: 'Resilience is a key trait for maintaining mental well-being.'
            },
            {
              id: 'c1-psy-5',
              type: 'comprehension',
              question: 'What is extroversion?',
              options: ['The quality of being reticent', 'The quality of being outgoing and socially confident', 'Acquiring knowledge', 'A physical symptom'],
              correctAnswer: ['The quality of being outgoing and socially confident'],
              explanation: 'Extroverts often find social interactions energizing.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-art',
    level: 'C1',
    subject: 'vocab',
    topic: 'Art',
    title: 'Artistic Masterpieces',
    description: 'Learn vocabulary related to art, literature, and creativity.',
    content: {
      title: 'Art & Expression',
      sections: [
        {
          heading: 'Creative Concepts',
          content: 'High-level words for the arts.',
          wordList: [
            { word: 'Aesthetic', definition: 'Concerned with beauty or the appreciation of beauty.', example: 'The building has a unique aesthetic.', imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Metaphor', definition: 'A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable.', example: 'Her life was a metaphor for transition.', imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Abstract', definition: 'Existing in thought or as an idea but not having a physical or concrete existence.', example: 'Abstract art can be difficult to interpret.', imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-art-1',
              type: 'comprehension',
              question: 'What is a metaphor in literature?',
              options: ['A literal description', 'A contrast of light and shadow', 'Applying a phrase to something non-literal', 'An academic model'],
              correctAnswer: ['Applying a phrase to something non-literal'],
              explanation: 'Metaphors help create vivid imagery and deeper meaning in writing.'
            },
            {
              id: 'c1-art-2',
              type: 'fill-in-blank',
              question: 'A word or phrase applied to an object to which it is not literally applicable is a ___.',
              correctAnswer: ['metaphor'],
              explanation: 'Metaphors are a common poetic device.'
            },
            {
              id: 'c1-art-3',
              type: 'matching',
              question: 'Aesthetic',
              options: ['Appreciation of beauty', 'A non-physical idea', 'Figure of speech'],
              correctAnswer: ['Appreciation of beauty'],
              explanation: 'Aesthetics is a core branch of philosophy concerned with the nature of beauty and art.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c1-tech-advanced',
    level: 'C1',
    subject: 'vocab',
    topic: 'Technology',
    title: 'Advanced Tech & Ethics',
    description: 'In-depth vocabulary for modern technology and its implications.',
    content: {
      title: 'Technology & Humanity',
      sections: [
        {
          heading: 'Tech Implications',
          content: 'Advanced words for the digital world.',
          wordList: [
            { word: 'Automation', definition: 'The use of largely automatic equipment in a system of manufacturing or other production process.', example: 'Automation is replacing manual labor.', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Surveillance', definition: 'Close observation, especially of a suspected spy or criminal.', example: 'CCTV is used for surveillance.', imageUrl: 'https://images.unsplash.com/photo-1557597774-9d2739f15a9a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Infrastructure', definition: 'The basic physical and organizational structures and facilities.', example: 'Digital infrastructure is critical for the economy.', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c1-tec-2',
              type: 'fill-in-blank',
              question: 'Close observation of individuals is known as ___.',
              correctAnswer: ['surveillance'],
              explanation: 'Surveillance technologies raise important privacy concerns in the modern world.'
            },
            {
              id: 'c1-tec-3',
              type: 'comprehension',
              question: 'What does "infrastructure" refer to?',
              options: ['A type of robot', 'Basic physical and organizational structures', 'Close observation found in spying', 'Mental action of thinking'],
              correctAnswer: ['Basic physical and organizational structures'],
              explanation: 'Infrastructure includes roads, bridges, and digital networks.'
            },
            {
              id: 'c1-tec-4',
              type: 'matching',
              question: 'Automation',
              options: ['Use of automatic equipment', 'Observation of criminals', 'Social structures'],
              correctAnswer: ['Use of automatic equipment'],
              explanation: 'Automation is transforming industries by reducing the need for manual intervention.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c2-physics',
    level: 'C2',
    subject: 'vocab',
    topic: 'Physics',
    title: 'Theoretical Physics',
    description: 'Mastery-level vocabulary for scientific theories.',
    content: {
      title: 'Quantum & Theoretical Physics',
      sections: [
        {
          heading: 'Scientific Terms',
          content: 'High-level scientific vocabulary.',
          wordList: [
            { word: 'Entropy', definition: 'A thermodynamic quantity representing the unavailability of a system\'s thermal energy.', example: 'The total entropy of an isolated system can never decrease.', imageUrl: 'https://images.unsplash.com/photo-1451187530220-4e2a74c65360?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Singularity', definition: 'A point at which a function takes an infinite value.', example: 'A black hole contains a gravitational singularity.', imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Relativity', definition: 'The absence of standards of absolute and universal application.', example: 'Einstein\'s theory of relativity revolutionized physics.', imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Quantum Mechanics', definition: 'The branch of mechanics that deals with the mathematical description of the motion and interaction of subatomic particles.', example: 'Quantum mechanics is a fundamental theory in physics.', imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Superposition', definition: 'The principle that a physical system may be in any of several states at once.', example: 'A quantum particle is in a state of superposition.', imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Dark Matter', definition: 'A hypothetical form of matter that does not interact with light.', example: 'Dark matter accounts for about 85% of the matter in the universe.', imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Spacetime', definition: 'The four-dimensional continuum of three spatial dimensions and one time dimension.', example: 'Gravity is the curvature of spacetime.', imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c2-phy-2',
              type: 'matching',
              question: 'Entropy',
              options: [
                'State of being in several states at once',
                'Unavailability of thermal energy',
                'Point of infinite value'
              ],
              correctAnswer: ['Unavailability of thermal energy'],
              explanation: 'Entropy is a key concept in thermodynamics, often associated with disorder.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c2-geopolitics',
    level: 'C2',
    subject: 'vocab',
    topic: 'Politics',
    title: 'Global Affairs & Geopolitics',
    description: 'Mastery-level vocabulary for international relations.',
    content: {
      title: 'Geopolitical Strategy',
      sections: [
        {
          heading: 'Diplomatic & Strategic Terms',
          content: 'High-level vocabulary for global politics.',
          wordList: [
            { word: 'Sovereignty', definition: 'Supreme power or authority.', example: 'The nation fought for its sovereignty.', imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Hegemony', definition: 'Leadership or dominance, especially by one country or social group over others.', example: 'The country sought to maintain its global hegemony.', imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Sanctions', definition: 'Commonly used in international relations, a threatened penalty for disobeying a law or rule.', example: 'The international community imposed economic sanctions.', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Diplomacy', definition: 'The profession, activity, or skill of managing international relations.', example: 'Diplomacy is key to avoiding conflict.', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c29530ad?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Multilateralism', definition: 'The principle of participation by three or more parties, especially by the governments of different countries.', example: 'He is a strong advocate for multilateralism.', imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Appeasement', definition: 'The action or process of appeasing.', example: 'A policy of appeasement was tried before the war.', imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Annexation', definition: 'The action of annexing something, especially territory.', example: 'The annexation of the neighboring province was widely condemned.', imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c2-geo-1',
              type: 'fill-in-blank',
              question: 'Dominance by one country over others is called ___.',
              correctAnswer: ['hegemony'],
              explanation: 'Hegemony can be economic, political, or military in nature.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c2-neuroscience',
    level: 'C2',
    subject: 'vocab',
    topic: 'Science',
    title: 'Cognitive Neuroscience',
    description: 'Mastery-level vocabulary for the study of the brain and mind.',
    content: {
      title: 'The Neural Landscape',
      sections: [
        {
          heading: 'Neurobiological Terms',
          content: 'Very advanced scientific terms.',
          wordList: [
            { word: 'Neuroplasticity', definition: 'The ability of the brain to form and reorganize synaptic connections.', example: 'Learning a new language promotes neuroplasticity.', imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Synaptic Transmission', definition: 'The process by which signaling molecules are released by the axon terminal of a neuron.', example: 'Caffeine affects synaptic transmission in the brain.', imageUrl: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Cognitive Dissonance', definition: 'The state of having inconsistent thoughts, beliefs, or attitudes.', example: 'He experienced cognitive dissonance when his actions didn\'t match his values.', imageUrl: 'https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c2-neu-1',
              type: 'comprehension',
              question: 'What is neuroplasticity?',
              options: ['The death of brain cells', 'The ability of the brain to reorganize connections', 'Signal transmission via caffeine', 'Consistent thought patterns'],
              correctAnswer: ['The ability of the brain to reorganize connections'],
              explanation: 'Neuroplasticity is what allows us to learn new things and recover from brain injuries.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c2-macro-econ',
    level: 'C2',
    subject: 'vocab',
    topic: 'Economics',
    title: 'Macro-Economic Theory',
    description: 'Mastery-level vocabulary for global economic systems.',
    content: {
      title: 'Global Economy & Policy',
      sections: [
        {
          heading: 'Economic Frameworks',
          content: 'Technical terms for world economics.',
          wordList: [
            { word: 'Fiscal Policy', definition: 'The use of government spending and taxation to influence the economy.', example: 'The government adjusted its fiscal policy to combat inflation.', imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Monetary Policy', definition: 'The actions of a central bank to manage the money supply and interest rates.', example: 'The central bank announced a shift in monetary policy.', imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Deflationary Spiral', definition: 'A downward price-level change in which many things occur in a specific order.', example: 'The country was trapped in a deflationary spiral for years.', imageUrl: 'https://images.unsplash.com/photo-1611974714851-13511eb96020?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c2-mac-1',
              type: 'fill-in-blank',
              question: 'Management of money supply and interest rates is ___ policy.',
              correctAnswer: ['monetary'],
              explanation: 'Monetary policy is typically set by a central bank like the Federal Reserve.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c2-logic',
    level: 'C2',
    subject: 'vocab',
    topic: 'Philosophy',
    title: 'Formal Logic & Analytical Philosophy',
    description: 'Mastery-level vocabulary for logical reasoning and structured thought.',
    content: {
      title: 'The Logic of Thought',
      sections: [
        {
          heading: 'Logical Foundations',
          content: 'High-level philosophical terms.',
          wordList: [
            { word: 'Syllogism', definition: 'An instance of a form of reasoning in which a conclusion is drawn from two given or assumed propositions.', example: 'The philosopher used a complex syllogism to prove her point.', imageUrl: 'https://images.unsplash.com/photo-1520691763444-245ed78c067c?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Ontology', definition: 'The branch of metaphysics dealing with the nature of being.', example: 'Ontology is fundamental to his philosophical system.', imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Deontology', definition: 'The study of the nature of duty and obligation.', example: 'Deontology focuses on the rightness or wrongness of actions themselves.', imageUrl: 'https://images.unsplash.com/photo-1533073356960-7ea0728ce92f?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c2-log-1',
              type: 'matching',
              question: 'Ontology',
              options: [
                'Branch of metaphysics dealing with the nature of being',
                'Study of duty and obligation',
                'Form of reasoning with premises and conclusion'
              ],
              correctAnswer: ['Branch of metaphysics dealing with the nature of being'],
              explanation: 'Ontology asks what it means for something to exist.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'vl-c2-arts',
    level: 'C2',
    subject: 'vocab',
    topic: 'Arts',
    title: 'Fine Arts & Literature',
    description: 'Mastery-level vocabulary for discussing high culture.',
    content: {
      title: 'The Peak of Expression',
      sections: [
        {
          heading: 'Aesthetic Analysis',
          content: 'Sophisticated terms for the arts.',
          wordList: [
            { word: 'Ephemeral', definition: 'Lasting for a very short time.', example: 'Street art is often ephemeral by nature.', imageUrl: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Juxtaposition', definition: 'The fact of two things being seen or placed close together with contrasting effect.', example: 'The juxtaposition of traditional and modern elements was striking.', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Visceral', definition: 'Relating to deep inward feelings rather than to the intellect.', example: 'The movie had a visceral impact on the audience.', imageUrl: 'https://images.unsplash.com/photo-1514320299584-4bd0075d1df7?q=80&w=400&h=250&auto=format&fit=crop' },
            { word: 'Avant-garde', definition: 'New and unusual or experimental ideas, especially in the arts.', example: 'The avant-garde performance challenged traditional views.', imageUrl: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=400&h=250&auto=format&fit=crop' },
          ],
          activities: [
            {
              id: 'c2-art-1',
              type: 'fill-in-blank',
              question: 'A ___ feeling is one that comes from deep within your gut.',
              correctAnswer: ['visceral'],
              explanation: 'Visceral feelings are often strong and instinctive.'
            }
          ]
        }
      ]
    }
  }
];
