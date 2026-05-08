/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  // A1 - BEGINNER
  {
    id: 'a1-l1',
    level: 'A1',
    subject: 'grammar',
    title: 'Greetings & Introductions',
    description: 'Learn basic ways to say hello and introduce yourself.',
    grammarDetail: `
### **Core Concept: Social Registers**
In English, the way we greet people depends on the **social context** and our **relationship** with them.

**Definition:** 
*   **Formal:** Used with superiors, strangers, or in professional settings.
*   **Informal:** Used with friends, family, and peers.

**Example:**
> **Formal:** "Good morning, Mr. Smith. How are you today?"
> **Informal:** "Hey Jack! What's up?"
`,
    content: {
      title: 'Greetings and Introductions',
      sections: [
        {
          heading: 'Formal and Informal Greetings',
          content: 'Greetings change depending on who you are talking to.',
          examples: ['Hello / Hi (Informal)', 'Good morning (Formal)', 'How are you? (Neutral)'],
              activities: [
                {
                  id: 'a1-l1-act1',
                  type: 'comprehension',
                  question: 'Which of these is a formal greeting?',
                  options: ['Hi', 'What\'s up?', 'Good morning', 'Yo!'],
                  correctAnswer: ['Good morning'],
                  explanation: '"Good morning" is appropriate for formal situations like work or meeting someone for the first time.'
                },
                {
                  id: 'a1-l1-act2',
                  type: 'fill-in-blank',
                  question: 'When you meet a friend, you can say "___!".',
                  correctAnswer: ['Hi', 'Hello'],
                  explanation: '"Hi" and "Hello" are common informal greetings.'
                },
                {
                  id: 'a1-l1-act3',
                  type: 'matching',
                  question: 'Good morning',
                  options: ['Greeting for the AM', 'Greeting for the PM', 'Greeting for the night'],
                  correctAnswer: ['Greeting for the AM'],
                  explanation: '"Good morning" is used before noon.'
                }
              ]
        }
      ]
    }
  },
  {
    id: 'a1-l2',
    level: 'A1',
    subject: 'grammar',
    tags: ['Parts of Speech', 'Tenses'],
    title: 'The Verb "To Be"',
    description: 'The most important verb for describing people and objects.',
    grammarDetail: `
### **Core Concept: The Copula (To Be)**
The verb **"to be"** is used to describe subjects by linking them to a noun or adjective. It changes its form based on the subject pronoun.

**Definition:**
It expresses a state of being, identity, or quality rather than an action.

**Forms:**
*   **I** am
*   **You / We / They** are
*   **He / She / It** is

**Example:**
> "I **am** a student." 
> "They **are** happy."
`,
    content: {
      title: 'Mastering "To Be"',
      sections: [
        {
          heading: 'Conjugation',
          content: 'I am, You are, He/She/It is, We are, They are.',
          examples: ['I am happy.', 'You are a student.', 'They are friends.'],
          activities: [
            {
              id: 'a1-l2-act1',
              type: 'fill-in-blank',
              question: 'She ___ a doctor.',
              correctAnswer: ['is'],
              explanation: 'For "she", we use the verb form "is".'
            },
            {
              id: 'a1-l2-act2',
              type: 'fill-in-blank',
              question: 'They ___ at school.',
              correctAnswer: ['are'],
              explanation: 'For "they", we use the verb form "are".'
            },
            {
              id: 'a1-l2-act3',
              type: 'comprehension',
              question: 'Which form of "to be" do we use with "We"?',
              options: ['am', 'is', 'are'],
              correctAnswer: ['are'],
              explanation: '"We" is plural and takes the "are" form.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a1-l3',
    level: 'A1',
    title: 'Numbers & Counting',
    description: 'Cardinal and ordinal numbers for daily use.',
    content: {
      title: 'Numbers 1-100',
      sections: [
        {
          heading: 'Basic Numbers',
          content: 'Learning to count and say your age.',
          examples: ['I am twenty-one.', 'There are five chairs.'],
          activities: [
            {
              id: 'a1-l3-act1',
              type: 'fill-in-blank',
              question: 'Ten plus five is ___.',
              correctAnswer: ['fifteen'],
              explanation: '10 + 5 = 15 (fifteen).'
            },
            {
              id: 'a1-l3-act2',
              type: 'fill-in-blank',
              question: 'The number after "nineteen" is ___.',
              correctAnswer: ['twenty'],
              explanation: 'Twenty follows nineteen in counting.'
            },
            {
              id: 'a1-l3-act3',
              type: 'comprehension',
              question: 'How do you say 50 in English?',
              options: ['Fifteen', 'Five', 'Fifty', 'Fifth'],
              correctAnswer: ['Fifty'],
              explanation: '50 is "fifty", while 15 is "fifteen".'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a1-l4',
    level: 'A1',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Colors and Adjectives',
    description: 'Describing the world around you with basic colors and traits.',
    content: {
      title: 'Descriptive Vocabulary',
      sections: [
        {
          heading: 'Colors',
          content: 'Red, Blue, Green, Yellow, Black, White.',
          examples: ['The sky is blue.', 'I have a red car.'],
          activities: [
            {
              id: 'a1-l4-act1',
              type: 'comprehension',
              question: 'Which color is usually associated with the sky on a clear day?',
              options: ['Red', 'Green', 'Blue', 'Black'],
              correctAnswer: ['Blue'],
              explanation: 'The sky is blue when the weather is clear.'
            },
            {
              id: 'a1-l4-act2',
              type: 'fill-in-blank',
              question: 'Grass is ___.',
              correctAnswer: ['green'],
              explanation: 'The color of healthy grass is green.'
            },
            {
              id: 'a1-l4-act3',
              type: 'matching',
              question: 'Yellow',
              options: ['The color of the sun', 'The color of the moon', 'The color of the sea'],
              correctAnswer: ['The color of the sun'],
              explanation: 'Yellow is the typical color artists use for the sun.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a1-l5',
    level: 'A1',
    title: 'Daily Routine',
    description: 'Talking about what you do every day.',
    content: {
      title: 'Daily Activities',
      sections: [
        {
          heading: 'Verbs of Action',
          content: 'Wake up, eat, work, sleep.',
          examples: ['I wake up at 7 AM.', 'I eat lunch at noon.'],
          activities: [
            {
              id: 'a1-l5-act1',
              type: 'matching',
              question: 'Eat lunch',
              options: [
                'To have a meal in the middle of the day',
                'To stop sleeping in the morning',
                'To go to your place of work'
              ],
              correctAnswer: ['To have a meal in the middle of the day'],
              explanation: 'Lunch is the meal we eat at noon or in the early afternoon.'
            },
            {
              id: 'a1-l5-act2',
              type: 'fill-in-blank',
              question: 'In the evening, I go to ___.',
              correctAnswer: ['sleep', 'bed'],
              explanation: 'Sleeping is the final activity of the day.'
            },
            {
              id: 'a1-l5-act3',
              type: 'comprehension',
              question: 'Which activity happens at 7 AM?',
              options: ['Lunch', 'Dinner', 'Wake up', 'Work'],
              correctAnswer: ['Wake up'],
              explanation: 'Usually, people wake up in the morning around 7 AM.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a1-l6',
    level: 'A1',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Plural Nouns',
    description: 'Learn how to talk about more than one thing.',
    grammarDetail: `
### **Core Concept: Pluralization**
In English, we usually add **"-s"** to a noun to make it plural (more than one).

**Definition:** 
*   **Singular:** One item.
*   **Plural:** Two or more items.

**Spelling Rules:**
*   Most nouns: add **-s** (friend -> friends)
*   Ends in -sh, -ch, -s, -x: add **-es** (bus -> buses)
*   Ends in consonant + y: change to **-ies** (baby -> babies)

**Example:**
> "I have one **cat**, but he has three **cats**."
`,
    content: {
      title: 'Singular and Plural',
      sections: [
        {
          heading: 'Regular Plurals',
          content: 'Adding -s or -es to words.',
          examples: ['Dog -> Dogs', 'Box -> Boxes', 'City -> Cities'],
          activities: [
            {
              id: 'a1-l6-act1',
              type: 'fill-in-blank',
              question: 'One book, two ___.',
              correctAnswer: ['books'],
              explanation: 'Most English nouns just need an -s for the plural form.'
            },
            {
              id: 'a1-l6-act2',
              type: 'fill-in-blank',
              question: 'One sandwich, two ___.',
              correctAnswer: ['sandwiches'],
              explanation: 'Words ending in -ch need -es for the plural.'
            }
          ]
        }
      ]
    }
  },

  // A2 - ELEMENTARY
  {
    id: 'a2-l1',
    level: 'A2',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Past Simple: Regular Verbs',
    description: 'Talking about what you did yesterday or last week.',
    grammarDetail: `
### **Core Concept: Past Simple**
The **Past Simple** is used to describe actions that started and finished at a specific time in the past.

**Definition:**
For regular verbs, we add **"-ed"** to the base form. Irregular verbs have unique forms that must be memorized.

**Example:**
> **Regular:** "I **walked** to the park yesterday."
> **Irregular:** "She **went** to the cinema last night." (from 'go')
`,
    content: {
      title: 'The Simple Past',
      sections: [
        {
          heading: 'The -ed ending',
          content: 'Most verbs in the past take -ed.',
          examples: ['I walked to work.', 'She played tennis.'],
          activities: [
            {
              id: 'a2-l1-act1',
              type: 'fill-in-blank',
              question: 'Yesterday, I ___ (watch) a great movie.',
              correctAnswer: ['watched'],
              explanation: 'For regular verbs, we add "-ed" to form the past simple.'
            },
            {
              id: 'a2-l1-act2',
              type: 'fill-in-blank',
              question: 'She ___ (play) tennis yesterday.',
              correctAnswer: ['played'],
              explanation: '"Played" is the past simple form of "play".'
            },
            {
              id: 'a2-l1-act3',
              type: 'comprehension',
              question: 'Which verb is NOT in the past simple?',
              options: ['Walked', 'Talked', 'Smile', 'Cooked'],
              correctAnswer: ['Smile'],
              explanation: '"Smile" is in the present tense.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a2-l2',
    level: 'A2',
    title: 'Comparatives & Superlatives',
    description: 'Compare things and people easily.',
    content: {
      title: 'Making Comparisons',
      sections: [
        {
          heading: 'Adjective modifications',
          content: 'Add -er or -est for short adjectives.',
          examples: ['Tall -> Taller', 'Fast -> Fastest'],
          activities: [
            {
              id: 'a2-l2-act1',
              type: 'fill-in-blank',
              question: 'The sun is ___ than the moon.',
              correctAnswer: ['bigger', 'brighter', 'hotter'],
              explanation: 'When comparing two things, we use the comparative form (-er).'
            },
            {
              id: 'a2-l2-act2',
              type: 'fill-in-blank',
              question: 'Mount Everest is the ___ mountain in the world.',
              correctAnswer: ['highest', 'tallest'],
              explanation: 'We use the superlative form (-est) when comparing more than two things.'
            },
            {
              id: 'a2-l2-act3',
              type: 'matching',
              question: 'Better',
              options: ['Comparative of Good', 'Superlative of Good', 'Antonym of Good'],
              correctAnswer: ['Comparative of Good'],
              explanation: '"Better" is the irregular comparative form of "good".'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a2-l3',
    level: 'A2',
    title: 'Health and Emotions',
    description: 'Expressing how you feel physically and mentally.',
    content: {
      title: 'Feelings and Health',
      sections: [
        {
          heading: 'Common Afflictions',
          content: 'A headache, a cold, a fever.',
          examples: ['I have a headache.', 'I feel tired today.'],
          activities: [
            {
              id: 'a2-l3-act1',
              type: 'comprehension',
              question: 'If your head hurts, you have a...',
              options: ['Cold', 'Fever', 'Headache', 'Stomach ache'],
              correctAnswer: ['Headache'],
              explanation: 'A headache is a pain in the head.'
            },
            {
              id: 'a2-l3-act2',
              type: 'fill-in-blank',
              question: 'I feel very ___ so I will go to bed.',
              correctAnswer: ['tired', 'sleepy'],
              explanation: 'When you lack energy, you feel tired.'
            },
            {
              id: 'a2-l3-act3',
              type: 'matching',
              question: 'Fever',
              options: ['High body temperature', 'Pain in the stomach', 'Difficulty breathing'],
              correctAnswer: ['High body temperature'],
              explanation: 'A fever is when your body temperature is higher than normal.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a2-l4',
    level: 'A2',
    title: 'Travel and Directions',
    description: 'Find your way around a new city.',
    content: {
      title: 'Getting Around',
      sections: [
        {
          heading: 'Giving Directions',
          content: 'Turn left, turn right, go straight.',
          examples: ['The bank is on the left.', 'Go straight for two blocks.'],
          activities: [
            {
              id: 'a2-l4-act1',
              type: 'matching',
              question: 'Turn right',
              options: [
                'Change direction to the right side',
                'Continue without turning',
                'Go back to where you started'
              ],
              correctAnswer: ['Change direction to the right side'],
              explanation: 'Turning right means shifting your path to the right-hand side.'
            },
            {
              id: 'a2-l4-act2',
              type: 'comprehension',
              question: 'What is the opposite of "turn left"?',
              options: ['Go straight', 'Turn right', 'Go back'],
              correctAnswer: ['Turn right'],
              explanation: 'Right is the opposite direction of left.'
            },
            {
              id: 'a2-l4-act3',
              type: 'fill-in-blank',
              question: 'The museum is ___ the left side of the street.',
              correctAnswer: ['on'],
              explanation: 'We use the preposition "on" for sides.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a2-l5',
    level: 'A2',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Future with "Going to"',
    description: 'Planning your future near and far.',
    grammarDetail: `
### **Core Concept: Be Going To**
We use **"be going to"** to talk about future plans and intentions that we have already decided.

**Definition:**
Use "am/is/are + going to + verb" to express a plan.

**Example:**
> "I **am going to visit** my grandmother this weekend."
> "We **are going to watch** a movie tonight."
`,
    content: {
      title: 'Making Plans',
      sections: [
        {
          heading: 'Intentions and Predictions',
          content: 'Using going to for decided plans.',
          examples: ['I\'m going to travel.', 'It\'s going to rain.'],
          activities: [
            {
              id: 'a2-l5-act1',
              type: 'fill-in-blank',
              question: 'Tomorrow, I ___ (buy) a new phone.',
              correctAnswer: ['am going to buy'],
              explanation: 'Use the "be going to" structure for a planned future action.'
            },
            {
              id: 'a2-l5-act2',
              type: 'comprehension',
              question: 'Which sentence shows a future plan?',
              options: ['I went to the shop.', 'I am going to the shop tomorrow.', 'I go to the shop.'],
              correctAnswer: ['I am going to the shop tomorrow.'],
              explanation: 'The present continuous (or "going to") can express future plans.'
            }
          ]
        }
      ]
    }
  },

  // B1 - INTERMEDIATE
  {
    id: 'b1-l1',
    level: 'B1',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Present Perfect Simple',
    description: 'Connecting past experiences to the present.',
    grammarDetail: `
### **Core Concept: Present Perfect**
The **Present Perfect** connects the past to the present. It is used for actions that happened at an unspecified time or have a result in the present.

**Definition:**
Formed using **have/has** + **past participle** (V3).

**Example:**
> "I **have seen** that movie three times." (experience)
> "She **has lost** her keys." (result: she doesn't have them now)
`,
    content: {
      title: 'Experiences and Changes',
      sections: [
        {
          heading: 'Have + Past Participle',
          content: 'Used for life experiences with no specific time.',
          examples: ['I have visited Paris.', 'Have you ever eaten sushi?'],
          activities: [
            {
              id: 'b1-l1-act1',
              type: 'fill-in-blank',
              question: 'I ___ (live) in London for five years.',
              correctAnswer: ['have lived'],
              explanation: 'The present perfect uses "have/has" + the past participle.'
            },
            {
              id: 'b1-l1-act2',
              type: 'comprehension',
              question: 'Which sentence is in the present perfect?',
              options: ['I went to Paris.', 'I am going to Paris.', 'I have been to Paris.'],
              correctAnswer: ['I have been to Paris.'],
              explanation: '"Have been" is the present perfect form of "to be".'
            },
            {
              id: 'b1-l1-act3',
              type: 'matching',
              question: 'Since',
              options: ['A point in time', 'A duration of time', 'A future date'],
              correctAnswer: ['A point in time'],
              explanation: '"Since" is used with a specific starting point in time.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b1-l2',
    level: 'B1',
    title: 'Passive Voice (Present)',
    description: 'Focusing on the action rather than the person.',
    content: {
      title: 'The Passive Voice',
      sections: [
        {
          heading: 'Formation',
          content: 'Subject + am/is/are + past participle.',
          examples: ['Wine is produced in France.', 'The rooms are cleaned daily.'],
          activities: [
            {
              id: 'b1-l2-act1',
              type: 'fill-in-blank',
              question: 'English ___ (speak) all over the world.',
              correctAnswer: ['is spoken'],
              explanation: 'The passive voice is formed with the verb "to be" + the past participle.'
            },
            {
              id: 'b1-l2-act2',
              type: 'fill-in-blank',
              question: 'The car ___ (wash) every Saturday.',
              correctAnswer: ['is washed'],
              explanation: 'In the present passive, we use "is" or "are" + past participle.'
            },
            {
              id: 'b1-l2-act3',
              type: 'matching',
              question: 'Passive Voice',
              options: ['Focus on the action', 'Focus on the doer', 'Focus on the time'],
              correctAnswer: ['Focus on the action'],
              explanation: 'The passive voice is used when the doer is unknown or less important than the action.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b1-l3',
    level: 'B1',
    title: 'Environment & Technology',
    description: 'Discussing modern issues and digital tools.',
    content: {
      title: 'The Modern World',
      sections: [
        {
          heading: 'Vocabulary',
          content: 'Global warming, recycling, software, hardware.',
          examples: ['We should recycle more.', 'I installed new software.'],
          activities: [
            {
              id: 'b1-l3-act1',
              type: 'comprehension',
              question: 'Which of these is a modern environmental issue?',
              options: ['Flooding', 'Global warming', 'Volcanoes', 'Rain'],
              correctAnswer: ['Global warming'],
              explanation: 'Global warming is a major environmental challenge in the modern world.'
            },
            {
              id: 'b1-l3-act2',
              type: 'fill-in-blank',
              question: 'The opposite of computer hardware is ___.',
              correctAnswer: ['software'],
              explanation: 'Software refers to the programs and data that run on the hardware.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b1-l4',
    level: 'B1',
    title: 'Modals of Deduction',
    description: 'Making guesses about present situations.',
    content: {
      title: 'Guessing and Deduction',
      sections: [
        {
          heading: 'Must, Might, Can\'t',
          content: 'Must (certainly true), Might (possibly true), Can\'t (certainly not true).',
          examples: ['He must be at work.', 'It might rain later.'],
          activities: [
            {
              id: 'b1-l4-act1',
              type: 'fill-in-blank',
              question: 'He has a key, so he ___ be able to get in.',
              correctAnswer: ['must'],
              explanation: 'We use "must" when we are almost certain that something is true.'
            },
            {
              id: 'b1-l4-act2',
              type: 'fill-in-blank',
              question: 'She is not at home, so she ___ (cannot) be sleeping.',
              correctAnswer: ['can\'t', 'cannot'],
              explanation: 'We use "can\'t" to state that something is almost certainly not true.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b1-l5',
    level: 'B1',
    title: 'Zero & First Conditional',
    description: 'Talking about real possibilities and facts.',
    grammarDetail: `
### **Core Concept: Real Conditionals**
Conditionals describe a result that happens only if a specific condition is met.

**Definition:**
*   **Zero Conditional:** General truths (If + present, present).
*   **First Conditional:** Future possibilities (If + present, will + verb).

**Example:**
> **Zero:** "If you **heat** ice, it **melts**."
> **First:** "If it **rains**, I **will stay** home."
`,
    content: {
      title: 'Cause and Effect',
      sections: [
        {
          heading: 'If and When',
          content: 'Using conditionals for facts and predictions.',
          examples: ['If I study, I will pass.', 'When water reaches 100 degrees, it boils.'],
          activities: [
            {
              id: 'b1-l5-act1',
              type: 'fill-in-blank',
              question: 'If you ___ (not/hurry), you will miss the train.',
              correctAnswer: ['don\'t hurry', 'do not hurry'],
              explanation: 'In the First Conditional, use the present simple in the "if" clause.'
            },
            {
              id: 'b1-l5-act2',
              type: 'comprehension',
              question: 'Which conditional is used for scientific facts?',
              options: ['Zero Conditional', 'First Conditional', 'Second Conditional'],
              correctAnswer: ['Zero Conditional'],
              explanation: 'The Zero Conditional describes things that are always true.'
            }
          ]
        }
      ]
    }
  },

  // B2 - UPPER INTERMEDIATE
  {
    id: 'b2-l1',
    level: 'B2',
    title: 'Second Conditional',
    description: 'Hypothetical situations in the present or future.',
    content: {
      title: 'Imaginary Situations',
      sections: [
        {
          heading: 'If + Past Simple, Would + Verb',
          content: 'Used for unlikely or impossible events.',
          examples: ['If I won the lottery, I would travel the world.'],
          activities: [
            {
              id: 'b2-l1-act1',
              type: 'fill-in-blank',
              question: 'If I ___ (be) you, I would study harder.',
              correctAnswer: ['were'],
              explanation: 'In the second conditional, we typically use "were" for all subjects with the verb "to be".'
            },
            {
              id: 'b2-l1-act2',
              type: 'fill-in-blank',
              question: 'If I had a car, I ___ drive to work.',
              correctAnswer: ['would', 'could'],
              explanation: 'The second conditional uses "would" in the result clause.'
            },
            {
              id: 'b2-l1-act3',
              type: 'matching',
              question: 'If I win...',
              options: ['1st Conditional', '2nd Conditional', '3rd Conditional'],
              correctAnswer: ['1st Conditional'],
              explanation: '"If + present" is the first conditional.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b2-l2',
    level: 'B2',
    title: 'Reported Speech',
    description: 'How to tell someone what another person said.',
    content: {
      title: 'Direct vs Indirect Speech',
      sections: [
        {
          heading: 'Tense Backshift',
          content: 'The tense often moves one step back when reporting.',
          examples: ['"I am tired" -> He said he was tired.'],
          activities: [
            {
              id: 'b2-l2-act1',
              type: 'fill-in-blank',
              question: '"I will help you" -> She said she ___ help me.',
              correctAnswer: ['would'],
              explanation: 'When reporting speech, "will" usually changes to "would".'
            },
            {
              id: 'b2-l2-act2',
              type: 'fill-in-blank',
              question: '"I am happy" -> He said he ___ happy.',
              correctAnswer: ['was'],
              explanation: 'In reported speech, the present simple "am" changes to the past simple "was".'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b2-l3',
    level: 'B2',
    title: 'Future Continuous & Future Perfect',
    description: 'Talking about specific points in the future.',
    content: {
      title: 'Advanced Future Tenses',
      sections: [
        {
          heading: 'Will be + -ing vs Will have + -ed',
          content: 'Actions in progress vs actions completed by a certain time.',
          examples: ['This time tomorrow, I will be flying.', 'By Friday, I will have finished the report.'],
          activities: [
            {
              id: 'b2-l3-act1',
              type: 'comprehension',
              question: 'Which tense describes an action that will be completed by a specific time in the future?',
              options: ['Future Continuous', 'Future Simple', 'Future Perfect', 'Present Continuous'],
              correctAnswer: ['Future Perfect'],
              explanation: 'The future perfect is used for actions that will be finished before a point in the future.'
            },
            {
              id: 'b2-l3-act2',
              type: 'fill-in-blank',
              question: 'By this time next year, I ___ (finish) my degree.',
              correctAnswer: ['will have finished'],
              explanation: 'Use the future perfect for completed actions in the future.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b2-l4',
    level: 'B2',
    title: 'Relative Clauses',
    description: 'Adding detail to your sentences with "who", "which", and "that".',
    grammarDetail: `
### **Core Concept: Relative Clauses**
Relative clauses give us more information about a person or thing.

**Definition:**
*   **Defining:** Necessary for the meaning of the sentence.
*   **Non-defining:** Adds extra, non-essential information (uses commas).

**Example:**
> **Defining:** "The man **who lives next door** is a pilot."
> **Non-defining:** "My car, **which I bought last year**, is very reliable."
`,
    content: {
      title: 'Adding Information',
      sections: [
        {
          heading: 'Relative Pronouns',
          content: 'Who (people), Which (things), That (both), Where (places).',
          examples: ['A baker is someone who makes bread.', 'The hotel where we stayed was lovely.'],
          activities: [
            {
              id: 'b2-l4-act1',
              type: 'fill-in-blank',
              question: 'That is the girl ___ won the race.',
              correctAnswer: ['who', 'that'],
              explanation: 'Use "who" or "that" to refer to people.'
            },
            {
              id: 'b2-l4-act2',
              type: 'comprehension',
              question: 'Which sentence has a non-defining relative clause?',
              options: [
                'The book that I read was great.',
                'My brother, who lives in Spain, is a doctor.',
                'The place where I work is nearby.'
              ],
              correctAnswer: ['My brother, who lives in Spain, is a doctor.'],
              explanation: 'Non-defining clauses add extra info and are separated by commas.'
            }
          ]
        }
      ]
    }
  },

  // C1 - ADVANCED
  {
    id: 'c1-l1',
    level: 'C1',
    title: 'Negative Inversion',
    description: 'Adding emphasis and style to your writing.',
    content: {
      title: 'Advanced Inversion',
      sections: [
        {
          heading: 'Structure',
          content: 'Place the auxiliary before the subject after negative words.',
          examples: ['Never have I seen such a beautiful sunset.', 'Rarely does she forget her keys.'],
          activities: [
            {
              id: 'c1-l1-act1',
              type: 'fill-in-blank',
              question: 'Not only ___ he smart, but he is also kind.',
              correctAnswer: ['is'],
              explanation: 'In negative inversion, the auxiliary or verb "to be" comes before the subject.'
            },
            {
              id: 'c1-l1-act2',
              type: 'fill-in-blank',
              question: 'Rarely ___ we visit the mountains in winter.',
              correctAnswer: ['do'],
              explanation: '"Rarely" triggers inversion, so we use the auxiliary "do".'
            },
            {
              id: 'c1-l1-act3',
              type: 'matching',
              question: 'Hardly ever',
              options: ['Inversion required', 'No inversion', 'Only in questions'],
              correctAnswer: ['Inversion required'],
              explanation: '"Hardly ever" is a negative expression that triggers inversion when placed at the start.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'c1-l2',
    level: 'C1',
    title: 'Mixed Conditionals',
    description: 'Mixing past causes with present results.',
    content: {
      title: 'Hypothetical Mixing',
      sections: [
        {
          heading: 'Type 3 + Type 2',
          content: 'A past event affecting a present situation.',
          examples: ['If I had worked harder at school, I would have a better job now.'],
          activities: [
            {
              id: 'c1-l2-act1',
              type: 'fill-in-blank',
              question: 'If you ___ (take) the map, we wouldn\'t be lost now.',
              correctAnswer: ['had taken'],
              explanation: 'This mixed conditional combines a past action (Type 3) with a present result (Type 2).'
            },
            {
              id: 'c1-l2-act2',
              type: 'comprehension',
              question: 'Which conditional expresses a hypothetical past action with a present result?',
              options: ['Type 1', 'Type 2', 'Type 3', 'Mixed Type 3 + 2'],
              correctAnswer: ['Mixed Type 3 + 2'],
              explanation: 'Mixed conditional (Type 3 + 2) connects a past hypothesis to a present effect.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'c1-l3',
    level: 'C1',
    title: 'Collocations & Idioms',
    description: 'Natural sounding English for advanced learners.',
    content: {
      title: 'Idiomatic Language',
      sections: [
        {
          heading: 'Phrasal Verbs',
          content: 'Advanced phrasal verbs for professional use.',
          examples: ['Bring up a topic.', 'Follow through with a plan.'],
          activities: [
            {
              id: 'c1-l3-act1',
              type: 'matching',
              question: 'Bring up',
              options: [
                'To mention a subject or start to talk about it',
                'To complete something you have started',
                'To cancel an engagement'
              ],
              correctAnswer: ['To mention a subject or start to talk about it'],
              explanation: '"Bring up" is a phrasal verb meaning to introduce a topic into conversation.'
            },
            {
              id: 'c1-l3-act2',
              type: 'fill-in-blank',
              question: 'I will ___ (mention) this in the meeting tomorrow.',
              correctAnswer: ['bring up'],
              explanation: 'Using phrasal verbs makes your English sound more natural.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'c1-l4',
    level: 'C1',
    title: 'Participle Clauses',
    description: 'Economizing your language for sophisticated writing.',
    grammarDetail: `
### **Core Concept: Participle Clauses**
Participle clauses allow us to give information in a more economical way. They usually replace a relative clause or an adverbial clause.

**Definition:**
Use an **-ing** participle to replace an active verb and a **past participle** to replace a passive verb.

**Example:**
> **Instead of:** "Because she felt tired, she went to bed."
> **Participle:** "**Feeling tired**, she went to bed."
`,
    content: {
      title: 'Advanced Economy',
      sections: [
        {
          heading: 'Active and Passive Participles',
          content: 'Using -ing and -ed to combine sentences.',
          examples: ['Walking down the street, I saw an old friend.', 'Damaged by the storm, the roof leaked.'],
          activities: [
            {
              id: 'c1-l4-act1',
              type: 'fill-in-blank',
              question: '___ (know) that he was busy, I didn\'t call him.',
              correctAnswer: ['Knowing'],
              explanation: 'An active participle (-ing) replaces "Because I knew".'
            },
            {
              id: 'c1-l4-act2',
              type: 'fill-in-blank',
              question: '___ (watch) by millions, the event was a success.',
              correctAnswer: ['Watched'],
              explanation: 'A passive participle (-ed) replaces "Because it was watched".'
            }
          ]
        }
      ]
    }
  },

  // C2 - PROFICIENCY
  {
    id: 'c2-l1',
    level: 'C2',
    title: 'The Subjunctive Mood',
    description: 'Formal expressions of necessity and desire.',
    content: {
      title: 'Formal Subjunctive',
      sections: [
        {
          heading: 'Standard Usage',
          content: 'Used after verbs like "insist", "demand", and "suggest".',
          examples: ['I insist that he be here on time.', 'It is vital that she attend the meeting.'],
          activities: [
            {
              id: 'c2-l1-act1',
              type: 'fill-in-blank',
              question: 'I suggest that she ___ (study) more.',
              correctAnswer: ['study'],
              explanation: 'In the subjunctive, the base form of the verb is used regardless of the subject.'
            },
            {
              id: 'c2-l1-act2',
              type: 'fill-in-blank',
              question: 'It is essential that he ___ (be) prepared.',
              correctAnswer: ['be'],
              explanation: 'The subjunctive "be" is used after modern expressions of necessity.'
            },
            {
              id: 'c2-l1-act3',
              type: 'matching',
              question: 'I suggest he...',
              options: ['Subjunctive', 'Indicative', 'Imperative'],
              correctAnswer: ['Subjunctive'],
              explanation: 'Using the base form "go" instead of "goes" after "suggest" is subjunctive.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'c2-l2',
    level: 'C2',
    title: 'Cleft Sentences',
    description: 'Creating focus and emphasis through sentence structure.',
    content: {
      title: 'Sentence Splitting',
      sections: [
        {
          heading: 'It-Clefts and Wh-Clefts',
          content: 'Breaking a sentence into two parts to highlight info.',
          examples: ['It was John who broke the window.', 'What I need is a long holiday.'],
          activities: [
            {
              id: 'c2-l2-act1',
              type: 'fill-in-blank',
              question: '___ I need is more coffee.',
              correctAnswer: ['What'],
              explanation: 'This is a "Wh-cleft" sentence used to emphasize what is needed.'
            },
            {
              id: 'c2-l2-act2',
              type: 'fill-in-blank',
              question: 'It ___ her sister who called, not her.',
              correctAnswer: ['was'],
              explanation: 'This is an "It-cleft" used to emphasize the identity of the person.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'c2-l3',
    level: 'C2',
    title: 'Nuance and Tone',
    description: 'Mastering the delicate differences in academic writing.',
    content: {
      title: 'Advanced Stylistics',
      sections: [
        {
          heading: 'Hedging and Accuracy',
          content: 'Using language to express caution or certainty.',
          examples: ['It is arguably the best...', 'This suggests that...'],
          activities: [
            {
              id: 'c2-l3-act1',
              type: 'comprehension',
              question: 'In academic writing, why do we use words like "suggests" or "appears"?',
              options: ['To show certainty', 'To show caution (hedging)', 'To confuse the reader', 'To save space'],
              correctAnswer: ['To show caution (hedging)'],
              explanation: 'Hedging allows writers to state theories or findings without claiming absolute certainty.'
            },
            {
              id: 'c2-l3-act2',
              type: 'matching',
              question: 'Arguably',
              options: [
                'Expressing something as a fact',
                'Used to show that something is possibly true but open to debate',
                'Used to show confusion'
              ],
              correctAnswer: ['Used to show that something is possibly true but open to debate'],
              explanation: '"Arguably" is a classic hedging word in advanced English.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'c2-l4',
    level: 'C2',
    title: 'Nominalisation',
    description: 'Transforming verbs into nouns for academic and formal impact.',
    grammarDetail: `
### **Core Concept: Nominalisation**
Nominalisation is the use of a word which is not a noun (usually a verb or adjective) as a noun. It is a key feature of academic and formal writing.

**Definition:**
It shifts the focus from actions to concepts or states, making the writing more objective and concise.

**Example:**
> **Verb-based:** "The researchers **analysed** the data."
> **Nominalised:** "An **analysis** of the data was conducted."
`,
    content: {
      title: 'Formal Objectivity',
      sections: [
        {
          heading: 'Verb-to-Noun Transitions',
          content: 'Making your writing more formal by using abstract nouns.',
          examples: ['Produce -> Production', 'Implement -> Implementation'],
          activities: [
            {
              id: 'c2-l4-act1',
              type: 'fill-in-blank',
              question: 'The ___ (refuse) of the proposal caused delays.',
              correctAnswer: ['refusal'],
              explanation: 'Changing the verb "refuse" to the noun "refusal" makes the sentence more formal.'
            },
            {
              id: 'c2-l4-act2',
              type: 'comprehension',
              question: 'Why is nominalisation used in academic writing?',
              options: ['To sound smarter', 'To be more objective and concise', 'To use more words', 'To make it easier to read'],
              correctAnswer: ['To be more objective and concise'],
              explanation: 'It allows for a more abstract and focused discussion of concepts.'
            }
          ]
        }
      ]
    }
  },
  // General - Parts of Speech (Ordered)
  {
    id: 'gen-pos-nouns',
    level: 'General',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Nouns',
    description: 'The labels we use for people, places, things, and ideas.',
    grammarDetail: `
### **Core Concept: Nouns**
Nouns are the basic building blocks of sentences. They function as subjects, objects, and complements.

**Types of Nouns:**
*   **Common Nouns:** General names (city, dog, man).
*   **Proper Nouns:** Specific names, always capitalized (London, Fido, John).
*   **Concrete Nouns:** Things you can perceive with senses (table, apple).
*   **Abstract Nouns:** Ideas or qualities (love, freedom, courage).
`,
    content: {
      title: 'Understanding Nouns',
      sections: [{
        heading: 'Common vs. Proper',
        content: 'Proper nouns are unique and always start with a capital letter.',
        examples: ['Common: country, Proper: France', 'Common: bridge, Proper: Golden Gate Bridge'],
        activities: [{ id: 'g-pos-n1', type: 'fill-in-blank', question: 'Paris is a ___ (Proper/Common) noun.', correctAnswer: ['Proper'], explanation: 'Paris is a specific city name.' }]
      }]
    }
  },
  {
    id: 'gen-pos-pronouns',
    level: 'General',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Pronouns',
    description: 'Words that substitute for nouns to avoid repetition.',
    grammarDetail: `
### **Core Concept: Pronouns**
Pronouns take the place of nouns. The noun being replaced is called the "antecedent."

**Main Types:**
*   **Personal:** I, you, he, she, it, we, they.
*   **Possessive:** Mine, yours, his, hers, ours, theirs.
*   **Reflexive:** Myself, yourself, himself, herself.
*   **Relative:** Who, which, that, whose.
`,
    content: {
      title: 'Replacing Nouns',
      sections: [{
        heading: 'Subject vs. Object',
        content: 'Subject pronouns do the action; object pronouns receive it.',
        examples: ['**He** saw **her**.', '**We** like **them**.'],
        activities: [{ id: 'g-pos-pro1', type: 'fill-in-blank', question: 'John is here. ___ (He/Him) is happy.', correctAnswer: ['He'], explanation: 'Use a subject pronoun before the verb.' }]
      }]
    }
  },
  {
    id: 'gen-pos-adjectives',
    level: 'General',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Adjectives',
    description: 'Words that provide extra detail and description for nouns.',
    grammarDetail: `
### **Core Concept: Adjectives**
Adjectives modify nouns and pronouns by describing, identifying, or quantifying them.

**Usage:**
*   **Before Nouns:** "The **blue** sky."
*   **After Linking Verbs:** "The sky is **blue**."
`,
    content: {
      title: 'Descriptive Power',
      sections: [{
        heading: 'Placement',
        content: 'In English, adjectives usually come before the noun.',
        examples: ['A **gigantic** elephant.', 'A **delicious** meal.'],
        activities: [{ id: 'g-pos-adj1', type: 'fill-in-blank', question: 'The ___ (small/smallly) box is on the table.', correctAnswer: ['small'], explanation: 'Adjectives describe nouns.' }]
      }]
    }
  },
  {
    id: 'gen-pos-verbs',
    level: 'General',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Verbs',
    description: 'The words that express actions, occurrences, or states of being.',
    grammarDetail: `
### **Core Concept: Verbs**
Every sentence must have a verb. They define what is happening.

**Major Categories:**
*   **Action Verbs:** Physical or mental activity (run, think).
*   **Linking Verbs:** Describe a state (be, seem, feel).
*   **Auxiliary (Helping) Verbs:** Used with main verbs (do, have, will).
`,
    content: {
      title: 'The Sentence Engine',
      sections: [{
        heading: 'Action vs. State',
        content: 'Verbs can tell us what someone does or what someone is.',
        examples: ['She **runs** fast.', 'She **is** a runner.'],
        activities: [{ id: 'g-pos-v1', type: 'comprehension', question: 'Which word is a verb?', options: ['Apple', 'Quickly', 'Eat', 'Beautiful'], correctAnswer: ['Eat'], explanation: '"Eat" is an action.' }]
      }]
    }
  },
  {
    id: 'gen-pos-adverbs',
    level: 'General',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Adverbs',
    description: 'Words that modify verbs, adjectives, or other adverbs.',
    grammarDetail: `
### **Core Concept: Adverbs**
Adverbs answer questions like: How? When? Where? To what extent?

**Common Endings:**
Many adverbs end in **-ly** (quickly, happily), but not all (well, fast, now, here).
`,
    content: {
      title: 'Modifying Meaning',
      sections: [{
        heading: 'How things happen',
        content: 'Adverbs of manner describe the way an action is performed.',
        examples: ['He speaks **softly**.', 'She drives **well**.'],
        activities: [{ id: 'g-pos-adv1', type: 'fill-in-blank', question: 'The turtle moves ___ (slow/slowly).', correctAnswer: ['slowly'], explanation: 'Adverbs modify verbs.' }]
      }]
    }
  },
  {
    id: 'gen-pos-prepositions',
    level: 'General',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Prepositions',
    description: 'Words that show relationships between nouns and other parts of the sentence.',
    grammarDetail: `
### **Core Concept: Prepositions**
They usually show location (at, on, in), direction (to, from), or time (before, after).

**Prepositional Phrases:**
A preposition is almost always followed by a noun or pronoun (the "object").
`,
    content: {
      title: 'Time and Space',
      sections: [{
        heading: 'Position',
        content: 'Prepositions help us understand where things are.',
        examples: ['The cat is **under** the bed.', 'The meeting is **at** 9 AM.'],
        activities: [{ id: 'g-pos-prep1', type: 'fill-in-blank', question: 'The keys are ___ (on/at) the table.', correctAnswer: ['on'], explanation: '"On" is used for surfaces.' }]
      }]
    }
  },
  {
    id: 'gen-pos-conjunctions',
    level: 'General',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Conjunctions',
    description: 'The "glue" that connects words, phrases, or clauses.',
    grammarDetail: `
### **Core Concept: Conjunctions**
Conjunctions allow us to form complex ideas by joining simpler ones.

**Types:**
*   **Coordinating:** Join equal parts. Use **FANBOYS** (For, And, Nor, But, Or, Yet, So).
*   **Subordinating:** Join a dependent clause to an independent one (because, although, if, since).
`,
    content: {
      title: 'Connecting Ideas',
      sections: [{
        heading: 'FANBOYS',
        content: 'The most common conjunctions used for simple combinations.',
        examples: ['Coffee **and** tea.', 'Tired **but** happy.'],
        activities: [{ id: 'g-pos-conj1', type: 'fill-in-blank', question: 'I like apples ___ (but/and) oranges.', correctAnswer: ['and'], explanation: '"And" joins similar things.' }]
      }]
    }
  },
  {
    id: 'gen-pos-interjections',
    level: 'General',
    subject: 'grammar',
    tags: ['Parts of Speech'],
    title: 'Interjections',
    description: 'Exclamatory words used to express sudden feelings or emotions.',
    grammarDetail: `
### **Core Concept: Interjections**
They are grammatically independent and often stand alone.

**Examples:**
*   **Surprise:** "Wow!", "Oh!"
*   **Pain:** "Ouch!", "Ow!"
*   **Agreement:** "Yes!", "Aha!"
`,
    content: {
      title: 'Expressing Emotion',
      sections: [{
        heading: 'Sudden Reactions',
        content: 'Interjections are usually followed by an exclamation mark.',
        examples: ['**Ouch!** That hurt.', '**Wow!** Look at that view.'],
        activities: [{ id: 'g-pos-int1', type: 'fill-in-blank', question: '___! I forgot my keys.', correctAnswer: ['Oops', 'Oh'], explanation: 'Oops is a common interjection for mistakes.' }]
      }]
    }
  },

  // General - Tenses (Ordered)
  {
    id: 'gen-tenses-present-simple',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Present Simple',
    description: 'Used for habits, facts, and permanent states.',
    grammarDetail: `
### **Present Simple Formulas**
*   **Positive:** Subject + Verb (s/es for he/she/it)
*   **Negative:** Subject + do/does + not + Verb
*   **Question:** Do/Does + Subject + Verb?

**Usage:**
*   Habits: "I drink coffee every day."
*   Facts: "The sun rises in the east."
`,
    content: {
      title: 'Formulas & Practice',
      sections: [{
        heading: 'Negative and Question Forms',
        content: 'We use the helping verb "do/does" for negatives and questions.',
        examples: ['I **don\'t** like tea.', '**Does** she play tennis?'],
        activities: [{ id: 'g-t-ps1', type: 'fill-in-blank', question: 'He ___ (not/work) on Sundays.', correctAnswer: ['does not work', "doesn't work"], explanation: 'Third person negative uses "does not".' }]
      }]
    }
  },
  {
    id: 'gen-tenses-present-continuous',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Present Continuous',
    description: 'Actions happening right now or temporary situations.',
    grammarDetail: `
### **Present Continuous Formulas**
*   **Positive:** Subject + am/is/are + Verb-ing
*   **Negative:** Subject + am/is/are + not + Verb-ing
*   **Question:** Am/Is/Are + Subject + Verb-ing?

**Usage:**
*   Now: "I am talking to you."
*   Temporary: "He is living in London this month."
`,
    content: {
      title: 'Action in Progress',
      sections: [{
        heading: 'The -ing Ending',
        content: 'Always include the verb "to be" before the -ing form.',
        examples: ['She **is reading**.', '**Are** you **listening**?'],
        activities: [{ id: 'g-t-pc1', type: 'fill-in-blank', question: 'Look! It ___ (snow).', correctAnswer: ['is snowing'], explanation: 'Use Present Continuous for things happening now.' }]
      }]
    }
  },
  {
    id: 'gen-tenses-present-perfect',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Present Perfect',
    description: 'Past actions with a connection to the present.',
    grammarDetail: `
### **Present Perfect Formulas**
*   **Positive:** Subject + have/has + Past Participle (V3)
*   **Negative:** Subject + have/has + not + Past Participle (V3)
*   **Question:** Have/Has + Subject + Past Participle (V3)?

**Usage:**
*   Life experience: "I have been to Japan."
*   Unfinished time: "She has worked here since 2010."
`,
    content: {
      title: 'Past Meets Present',
      sections: [{
        heading: 'Have vs. Has',
        content: 'Use "has" only for he, she, and it.',
        examples: ['We **have finished**.', '**Has** he **seen** it?'],
        activities: [{ id: 'g-t-pp1', type: 'fill-in-blank', question: 'I ___ (never/eat) snail.', correctAnswer: ['have never eaten'], explanation: 'Present perfect uses have + V3.' }]
      }]
    }
  },
  {
    id: 'gen-tenses-present-perfect-continuous',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Present Perfect Continuous',
    description: 'Actions that started in the past and continue to now.',
    grammarDetail: `
### **Present Perfect Continuous Formulas**
*   **Positive:** Subject + have/has + been + Verb-ing
*   **Negative:** Subject + have/has + not + been + Verb-ing
*   **Question:** Have/Has + Subject + been + Verb-ing?

**Usage:**
*   Duration: "I have been waiting for two hours."
*   Recent activity: "It has been raining all morning."
`,
    content: {
      title: 'Ongoing Past to Present',
      sections: [{
        heading: 'Emphasis on Duration',
        content: 'Focuses on the length of the action.',
        examples: ['I **have been studying**.', '**Have** you **been crying**?'],
        activities: [{ id: 'g-t-ppc1', type: 'fill-in-blank', question: 'She ___ (work) here for ten years.', correctAnswer: ['has been working'], explanation: 'Focuses on the duration of working.' }]
      }]
    }
  },
  {
    id: 'gen-tenses-past-simple',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Past Simple',
    description: 'Completed actions in the past at a specific time.',
    grammarDetail: `
### **Past Simple Formulas**
*   **Positive:** Subject + Verb-ed (or Irregular form)
*   **Negative:** Subject + did + not + Verb (base form)
*   **Question:** Did + Subject + Verb (base form)?

**Usage:**
*   Finished events: "I went to school yesterday."
*   Past states: "He was happy."
`,
    content: {
      title: 'The Finished Past',
      sections: [{
        heading: 'The Helping Verb "Did"',
        content: 'In negatives and questions, the main verb stays in the base form.',
        examples: ['I **didn\'t go**.', '**Did** you **see** him?'],
        activities: [{ id: 'g-t-psim1', type: 'fill-in-blank', question: 'We ___ (not/have) time last night.', correctAnswer: ['did not have', "didn't have"], explanation: '"Did" takes the past tense, so "have" is base form.' }]
      }]
    }
  },
  {
    id: 'gen-tenses-past-continuous',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Past Continuous',
    description: 'Actions that were in progress at a specific time in the past.',
    grammarDetail: `
### **Past Continuous Formulas**
*   **Positive:** Subject + was/were + Verb-ing
*   **Negative:** Subject + was/were + not + Verb-ing
*   **Question:** Was/Were + Subject + Verb-ing?

**Usage:**
*   Background actions: "I was sleeping when the phone rang."
*   Parallel actions: "He was cooking while I was reading."
`,
    content: {
      title: 'Interrupted Past',
      sections: [{
        heading: 'Was vs. Were',
        content: 'Use "was" for I, he, she, it. Use "were" for you, we, they.',
        examples: ['They **were dancing**.', '**Was** she **listening**?'],
        activities: [{ id: 'g-t-pcon1', type: 'fill-in-blank', question: 'I ___ (watch) TV when you called.', correctAnswer: ['was watching'], explanation: 'Continuous action interrupted by a shorter action.' }]
      }]
    }
  },
  {
    id: 'gen-tenses-past-perfect',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Past Perfect',
    description: 'An action completed before another action in the past.',
    grammarDetail: `
### **Past Perfect Formulas**
*   **Positive:** Subject + had + Past Participle (V3)
*   **Negative:** Subject + had + not + Past Participle (V3)
*   **Question:** Had + Subject + Past Participle (V3)?

**Usage:**
*   Sequence: "The train had left when I arrived."
*   Conditionals: "If I had known, I would have told you."
`,
    content: {
      title: 'Past Before Past',
      sections: [{
        heading: 'Earlier Actions',
        content: 'Use had + V3 to show which action happened first.',
        examples: ['She **had already eaten**.', '**Had** you **finished**?'],
        activities: [{ id: 'g-t-pper1', type: 'fill-in-blank', question: 'They ___ (leave) before 7:00.', correctAnswer: ['had left'], explanation: '"Leave" is irregular: left.' }]
      }]
    }
  },
  {
    id: 'gen-tenses-past-perfect-continuous',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Past Perfect Continuous',
    description: 'Actions that were ongoing up to a certain point in the past.',
    grammarDetail: `
### **Past Perfect Continuous Formulas**
*   **Positive:** Subject + had + been + Verb-ing
*   **Negative:** Subject + had + not + been + Verb-ing
*   **Question:** Had + Subject + been + Verb-ing?

**Usage:**
*   Cause of effect: "He was tired because he had been working hard."
*   Continuous duration: "I had been waiting for 20 minutes before it came."
`,
    content: {
      title: 'Ongoing Past Progress',
      sections: [{
        heading: 'Duration in the Past',
        content: 'Focuses on the duration leading up to a past event.',
        examples: ['They **had been playing** for hours.', '**Had** it **been raining**?'],
        activities: [{ id: 'g-t-ppcon1', type: 'fill-in-blank', question: 'I ___ (sleep) for 10 hours when the alarm went off.', correctAnswer: ['had been sleeping'], explanation: 'Continuous state leading up to the alarm.' }]
      }]
    }
  },
  {
    id: 'gen-tenses-future-simple',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Future Simple',
    description: 'Predictions, promises, and spontaneous decisions.',
    grammarDetail: `
### **Future Simple Formulas**
*   **Positive:** Subject + will + Verb (base form)
*   **Negative:** Subject + will + not (won\'t) + Verb
*   **Question:** Will + Subject + Verb?

**Usage:**
*   Predictions: "It will rain tomorrow."
*   Promises: "I will help you."
`,
    content: {
      title: 'Looking Ahead',
      sections: [{
        heading: 'Will vs. Won\'t',
        content: 'Use "will" for all subjects in the future simple.',
        examples: ['I **will be** there.', 'They **won\'t arrive** late.'],
        activities: [{ id: 'g-t-fsim1', type: 'fill-in-blank', question: 'I think she ___ (win) the race.', correctAnswer: ['will win'], explanation: 'Predictions usually use "will".' }]
      }]
    }
  },
  {
    id: 'gen-tenses-future-continuous',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Future Continuous',
    description: 'Actions that will be in progress at a specific time in the future.',
    grammarDetail: `
### **Future Continuous Formulas**
*   **Positive:** Subject + will + be + Verb-ing
*   **Negative:** Subject + will + not + be + Verb-ing
*   **Question:** Will + Subject + be + Verb-ing?

**Usage:**
*   Specific time: "This time tomorrow, I will be flying to Paris."
*   Polite inquiries: "Will you be staying long?"
`,
    content: {
      title: 'Future Progress',
      sections: [{
        heading: 'Mid-Action in the Future',
        content: 'Used for things that will be "midway" later.',
        examples: ['I **will be sleeping** at midnight.', '**Will** they **be working**?'],
        activities: [{ id: 'g-t-fcon1', type: 'fill-in-blank', question: 'Don\'t call at 8. I ___ (eat) dinner.', correctAnswer: ['will be eating'], explanation: 'The action of eating will be in progress.' }]
      }]
    }
  },
  {
    id: 'gen-tenses-future-perfect',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Future Perfect',
    description: 'An action that will be completed by a specific point in the future.',
    grammarDetail: `
### **Future Perfect Formulas**
*   **Positive:** Subject + will + have + Past Participle (V3)
*   **Negative:** Subject + will + not + have + Past Participle (V3)
*   **Question:** Will + Subject + have + Past Participle (V3)?

**Usage:**
*   Deadlines: "I will have finished my report by Friday."
*   Achievements: "They will have lived here for 20 years next May."
`,
    content: {
      title: 'Future Completion',
      sections: [{
        heading: 'By a certain time',
        content: 'Often used with the word "by".',
        examples: ['By next week, I **will have graduated**.', '**Will** you **have read** it?'],
        activities: [{ id: 'g-t-fper1', type: 'fill-in-blank', question: 'By the time you arrive, I ___ (cook) dinner.', correctAnswer: ['will have cooked'], explanation: 'Dinner will be finished by arrival time.' }]
      }]
    }
  },
  {
    id: 'gen-tenses-future-perfect-continuous',
    level: 'General',
    subject: 'grammar',
    tags: ['Tenses'],
    title: 'Future Perfect Continuous',
    description: 'Ongoing actions that will continue up to a future point.',
    grammarDetail: `
### **Future Perfect Continuous Formulas**
*   **Positive:** Subject + will + have + been + Verb-ing
*   **Negative:** Subject + will + not + have + been + Verb-ing
*   **Question:** Will + Subject + have + been + Verb-ing?

**Usage:**
*   Duration in the future: "By 2025, I will have been teaching for 10 years."
`,
    content: {
      title: 'Ongoing Future Duration',
      sections: [{
        heading: 'Looking Back from the Future',
        content: 'Emphasizes how long a future action will have been going.',
        examples: ['I **will have been driving** for 6 hours.', '**Will** she **have been waiting**?'],
        activities: [{ id: 'g-t-fpcon1', type: 'fill-in-blank', question: 'By midnight, I ___ (code) for 12 hours.', correctAnswer: ['will have been coding'], explanation: 'Emphasizes the duration of the activity.' }]
      }]
    }
  }
];
