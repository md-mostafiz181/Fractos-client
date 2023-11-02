
'use client'
import { AdmissionQuestionPost } from '@/services/admission';

import React from 'react';

const Page = () => {



  const higherMathData = {
    exam_name: "duet-admission-22-23",
    university: "DUET",
    title: "DUET  20-23 MCQ",
    questions: [
      {
        "subject_name": "Math",
        "question": "What is the angle between the two vectors A=3i^-3j^ and B=5i^+5k^ ?",
        "answer_a": "60 degree",
        "answer_b": "30 degree",
        "answer_c": "45 degree",
        "answer_d": "90 degree",
        "answer_right": "60 degree"
      },
      {
        "question": "A ball is thrown upward with an angle of 30' with the horizontal line from a height of 5 m with a velocity of 20 mi& What will be the time of flight of the ball?",
        "answer_a": "(10±sqrt(198))/9.8 s",
        "answer_b": "(10-sqrt(198))/9.8 s",
        "answer_c": "(10+sqrt(198))/9.8 s",
        "answer_d": "(10±sqrt(2))/9.8 s",
        "answer_right": "(10+sqrt(198))/9.8 s"
      },
      {
        "question": "In a standing wave. the separation between two adjacent nodes is 1 m. What is the wavelength of it?",
        "answer_a": "25 cm",
        "answer_b": "50 cm",
        "answer_c": "100 cm",
        "answer_d": "200 cm",
        "answer_right": "200 cm"
      },
      {
        "question": "Two particles arc oscillating at simple harmonic motion. If their displacements are described by x1 = Asinwt and x2 = Acoswt, what will be the phase difference between them at any instant?",
        "answer_a": "2pi",
        "answer_b": "pi",
        "answer_c": "pi/2",
        "answer_d": "pi/4",
        "answer_right": "pi/2"
      },
      {
        "question": "When you look downward from the top of a thick glass (refractive index 1.5) slab used as a paper weight, a mark on the paper is seen 6 cm below from the top of the slab. What is the thickness of the glass slab?",
        "answer_a": "4cm",
        "answer_b": "6cm",
        "answer_c": "9cm",
        "answer_d": "12cm",
        "answer_right": "9cm"
      },
      {
        "question": "What is the value of t he current I1 in the circuit below?",
        "image": "/DUA2019Images/Screenshot (153).png",
        "answer_a": "0.2A",
        "answer_b": "0.4A",
        "answer_c": "0.6A",
        "answer_d": "1.2A",
        "answer_right": "0.4A"
      },
      {
        "question": "A Carnot engine is operated between two reservoirs at temperatures of 500 K and 250 K. If the engine receives I kcal of heat from the source in each cycle, the amount of heat rejected to the sink in each cycle is-",
        "answer_a": "500cal",
        "answer_b": "1000cal",
        "answer_c": "500kcal",
        "answer_d": "10kcal",
        "answer_right": "500cal"
      },
      {
        "question": "A charge q m01ing with velocity, along the direction or a magnetic field ii.If there is an electric field£ in the same place then what will be the effective force on the charge q?",
        "answer_a": "q(E+VxB)",
        "answer_b": "q(E+v.B)",
        "answer_c": "qE",
        "answer_d": "q(E+B)",
        "answer_right": "qE"
      },
      {
        "question": "Condition for the constructive interference is:",
        "answer_a": "a sin0 = (2n+ 1)lamda/2",
        "answer_b": "a sin0 = nlamda",
        "answer_c": "a sin0 = n lamda/2",
        "answer_d": "a sin0 = (2n+ 1)lamda ",
        "answer_right": "a sin0 = nlamda"
      },
      {
        "question": "A. Am object is moving on a circular path of radius pi m at a constant speed of 4.0 mis. The time required for one revolution is:",
        "answer_a": "2/pi^2s",
        "answer_b": "pi^2/2s",
        "answer_c": "pi/2s",
        "answer_d": "pi^2/4s",
        "answer_right": "pi^2/2"
      },
      {
        "question": "body initially at rest, exploded,into two objects of masses m1 and m2 which are moving apart in opposite direction with speeds v1 and v2, respectively. What is the ratio v1/v2?",
        "answer_a": "m1/m2",
        "answer_b": "m2/m1",
        "answer_c": "-m2/m1",
        "answer_d": "sqrt(m2/m1)",
        "answer_right": "m2/m1"
      },
      {
        "question": "A steel and a brass wire, both having 10 cm length and 0.5 cm radius, are joined together making the total length of the combined wire 20 cm. The combined wire is stretched by applying a force.If the Young's modulus of steel is twice as much as that of brass, what will be the ratio of the extension of steel to the extension of brass?",
        "answer_a": "1:8",
        "answer_b": "1:6",
        "answer_c": "1:4",
        "answer_d": "1:2",
        "answer_right": "1:2"
      },
      {
        "question": "Which one of the following is not a unit of mass?",
        "answer_a": "amu",
        "answer_b": "MeV/c^2",
        "answer_c": "MeV",
        "answer_d": "Nm^-1s^2",
        "answer_right": "MeV"
      },
      {
        "question": "Aluminum has atomic number 13, helium has atomic number 2, and silicon has atomic number 14. In the nuclear reaction the missing particle Al27 + He27-> Si27+ ( ) is:",
        "answer_a": "an alfa particle",
        "answer_b": "a positron",
        "answer_c": "an electron",
        "answer_d": "a proton",
        "answer_right": "a proton"
      },
      {
        "subject_name": "Chemistry",
        "question": "What is the orbital of hydrogen atom at its excited state with quantum number, n =4, l= l?",
        "answer_a": "s orbital",
        "answer_b": "p orbital",
        "answer_c": "dz^2 orbital",
        "answer_d": "d(x^2-y^2) orbital",
        "answer_right": "p orbital"
      },
      {
        "question": "The oxidation numbers of Mn and Fe in BaMnF4, and Lis2MgFeF6, are _, _respectively",
        "answer_a": "+5,+3 ",
        "answer_b": "+5,+2 ",
        "answer_c": "+4,+3 ",
        "answer_d": "+2,+2 ",
        "answer_right": "+2,+2 "
      },
      {
        "question": "Which one is the correct cell reaction of the given electrochemical cell?)",
        "answer_a": "Fe+ Br2 --> Fe^2+ +2Br^-",
        "answer_b": "Fe+2Br^- --> Fe^2+ +2Br2",
        "answer_c": "Fe^2+ + Br2 --> Fe+2Br^-",
        "answer_d": "Fe+ Br2 -> Fe3++2Br^-",
        "answer_right": "Fe+ Br2 --> Fe^2+ +2Br^-"
      },
      {
        "question": "Which one of the following tests can be used to distinguish between sulphuric acid and nitric acid?",
        "answer_a": "Test with universal indicator ",
        "answer_b": "Addition of sodium carbonate powder ",
        "answer_c": "Addition of magnesium nibbon ",
        "answer_d": "Addition of barium nitrate solution ",
        "answer_right": "Test with universal indicator "
      },
      {
        "question": "The bond present between amino acid units in protein molecule is-",
        "answer_a": "Glycosidic bond",
        "answer_b": "Peptide bond",
        "answer_c": "Hydrogen bond",
        "answer_d": "Metallic bond",
        "answer_right": "Hydrogen bond"
      },
      {
        "question": "Which one of the following compounds exhibits geometrical isomerism?",
        "answer_a": "(CH3)3N",
        "answer_b": "CH3CH - CH2",
        "answer_c": " (CH3)2NH",
        "answer_d": "CH3CH - CHCH3",
        "answer_right": "CH3CH - CHCH3"
      },
      {
        "question": "Which of the following compound is produced when calcium carbide gets contact with moist air?",
        "answer_a": "Ethene",
        "answer_b": "Ethane",
        "answer_c": "Ethyne",
        "answer_d": "Ethanal",
        "answer_right": "Ethyne"
      },
      {
        "question": "CH3 - CH(C2H5) - CH2 - CHBr - CHCI - CH3 (The IUPAC name of the compound is-)",
        "answer_a": "2-Chloro-3-bromo-5-cthylhexanc",
        "answer_b": "2-Chloro-3-bromo-5-methylheptane",
        "answer_c": "3-Bromo-2-Chloro-5-ethylheane",
        "answer_d": "3-Bromo-2-chloro-5- methvlheotane",
        "answer_right": "3-Bromo-2-chloro-5- methvlheotane"
      },
      {
        "question": "Diamond and graphite are the allotropes of carbon. For them. which of the following statements is incorrect?",
        "answer_a": "Both of them are made of carbon.",
        "answer_b": "Hybridization of carbon atom in diamond and graphite are sp3 and sp2, respectively.",
        "answer_c": "Both of them possesses the same heat of combustion.",
        "answer_d": "Both of them possesses different electrical conductivity.",
        "answer_right": "Both of them possesses the same heat of combustion."
      },
      {
        "question": "Which element plays a role in diagnosing disease in a human body by MRI?",
        "answer_a": "Neon",
        "answer_b": "Oxygen",
        "answer_c": "Hydrogen",
        "answer_d": "Silicon",
        "answer_right": "Hydrogen"
      },
      {
        "question": "Which one of the following is appropriate to measure 10.50mL of a liquid?",
        "answer_a": "Pipette",
        "answer_b": "Measuring cylinder",
        "answer_c": "Burette",
        "answer_d": "Volumetric flask",
        "answer_right": "Burette"
      },
      {
        "question": "1.0 L aqueous solution is prepared using 0.98 g of H2SO4. What is the concentration of the solution?",
        "answer_a": "0.1 M",
        "answer_b": "0.1 m",
        "answer_c": "0.01 M",
        "answer_d": "0.01 m",
        "answer_right": "0.01 M"
      },
      {
        "question": "How many electrons are present in a nitrate anion?",
        "answer_a": "19",
        "answer_b": "23",
        "answer_c": "31",
        "answer_d": "32",
        "answer_right": "32"
      },
      {
        "question": "Which of the foll owing is usually termed as liquid-liquid chromatography?",
        "answer_a": "Column chromatography",
        "answer_b": "Paper chromatography",
        "answer_c": "Gas chromatography",
        "answer_d": "Thin Layer chromatography",
        "answer_right": "Paper chromatography"
      },
      {
        "question": "(Which one of the following forms an aqueous acidic solution?",
        "answer_a": "Na2O",
        "answer_b": "ZnO",
        "answer_c": "Al2O3",
        "answer_d": "CO2",
        "answer_right": "CO2"
      },
      {
        "subject_name": "Biology",
        "question": "Name of the enzyme used in the preparation of cheese?",
        "answer_a": "Pectin",
        "answer_b": "Rennin",
        "answer_c": "Catalase",
        "answer_d": "Papain",
        "answer_right": "Rennin"
      },
      {
        "question": "Which one has vascular system but not flowering",
        "answer_a": "Thallophyta",
        "answer_b": "Bryophyta",
        "answer_c": "Pteridophyta",
        "answer_d": "Spermatophyta",
        "answer_right": "Pteridophyta"
      },
      {
        "question": "The fruite of the family poaceacis called-",
        "answer_a": "Berry",
        "answer_b": "Caryopsis",
        "answer_c": "Pod",
        "answer_d": "Capsule",
        "answer_right": "Caryopsis"
      },
      {
        "question": "Which one is a deciduous plant?",
        "answer_a": "Pongamia pinnata",
        "answer_b": "Heritiera fomes",
        "answer_c": "Shorea robusta",
        "answer_d": "Ceriops Jecandra",
        "answer_right": "Shorea robusta"
      },
      {
        "question": "he number of base-pair in human genome-",
        "answer_a": "3 million",
        "answer_b": "30 million",
        "answer_c": "300 million",
        "answer_d": "3000 million",
        "answer_right": "3000 million"
      },
      {
        "question": "Which plant is endangered in Bangladesh",
        "answer_a": "Pteris vittata",
        "answer_b": "Podocarpus nerifolia",
        "answer_c": "Cycas revo/uta",
        "answer_d": "Nerium indicum",
        "answer_right": "Podocarpus nerifolia"
      },
      {
        "question": "Which amino acid has 4 codons?",
        "answer_a": "Lucine",
        "answer_b": "Valine",
        "answer_c": "Arginine",
        "answer_d": "Ethanal",
        "answer_right": "Valine"
      },
      {
        "question": "In which organelle, oxisome is present?",
        "answer_a": "Mitochondria",
        "answer_b": "Nucleus",
        "answer_c": "Ribosome",
        "answer_d": "Lysosome",
        "answer_right": "Mitochondria"
      },
      {
        "question": "Which animal has placoid scale?",
        "answer_a": "Aurelia",
        "answer_b": "Scoliodon",
        "answer_c": "Anabas",
        "answer_d": "Catla",
        "answer_right": "Scoliodon"
      },
      {
        "question": "Source of which hormone is not pituitary gland?",
        "answer_a": "Prolactin",
        "answer_b": "Progesterone",
        "answer_c": "Vasopressin",
        "answer_d": "Oxytocin",
        "answer_right": "Progesterone"
      },
      {
        "question": "Flame cell is the characteristic of the phylum-",
        "answer_a": "Arthropoda",
        "answer_b": "Annelida",
        "answer_c": "Mollusca",
        "answer_d": "Platyhelminthes",
        "answer_right": "Platyhelminthes"
      },
      {
        "question": "Which one is the covering of brain and spinal cord of human?",
        "answer_a": "Meninges",
        "answer_b": "Peritoneum",
        "answer_c": "Pericardium",
        "answer_d": "Neurocardium",
        "answer_right": "Meninges"
      },
      {
        "question": "Which hormone is released from adrenal gland?",
        "answer_a": "Glucocorticoids",
        "answer_b": "Gonadotropin",
        "answer_c": "Parathormone",
        "answer_d": "Calcitonin",
        "answer_right": "Glucocorticoids"
      },
      {
        "question": "What is the percentage oflgG in total immunoglobulin in human body?",
        "answer_a": "75%",
        "answer_b": "15%",
        "answer_c": "10%",
        "answer_d": "5%",
        "answer_right": "75%"
      },
      {
        "question": "Effect of polygene is -",
        "answer_a": "Cumulati",
        "answer_b": " Dominat",
        "answer_c": "Recessive",
        "answer_d": "Co-dominant",
        "answer_right": "Cumulati"
      },
      {
        "subject_name": "Bangla",
        "question": "আজব শব্দটি কোন বিদেশি শব্দ",
        "answer_a": "আরবি",
        "answer_b": "ফরাসি",
        "answer_c": "হিন্দ",
        "answer_d": "উর্দু",
        "answer_right": "আরবি"
      },
      {
        "question": "বিভীষণের প্রতি মেঘনাদ কবিতায় কাকে বাসবত্রাস বলা হয়েছে",
        "answer_a": "বিভিষণকে",
        "answer_b": "রামকে",
        "answer_c": "রাভণকে",
        "answer_d": "মেঘনাদকে",
        "answer_right": "মেঘনাদকে"
      },
      {
        "question": "সমুদ্র শব্দটির প্রতিশব্দ কোনটি",
        "answer_a": "রত্মাকর",
        "answer_b": "আম্বুজ",
        "answer_c": "জলদ",
        "answer_d": "বরুণ",
        "answer_right": "রত্মাকর"
      },
      {
        "question": "নৈয়ায়িক কাকে বলা হয়",
        "answer_a": "নীতিবানকে",
        "answer_b": "যিনি ন্যায় শাস্ত্র জানেন",
        "answer_c": "পণ্ডিতকে",
        "answer_d": "তার্কিককে",
        "answer_right": "যিনি ন্যায় শাস্ত্র জানেন"
      },
      {
        "question": "কোন শব্দগুচ্ছ শুদ্ধ?",
        "answer_a": "সমীচীন,কন্ঠ,মাষ্টার",
        "answer_b": "অঞ্জুলি, দন্ডনীয়, কিংকর্তব্যবিমূঢ়",
        "answer_c": "প্রতিযোগিতা, স্বাদেশীক, সন্তরণ",
        "answer_d": "সহযোগী, শিরশ্ছেদ, গুঞ্জরন",
        "answer_right": "সহযোগী, শিরশ্ছেদ, গুঞ্জরন"
      },
      {
        "question": "বৈশিষ্ট্য শব্দটি গঠিত হয়েছে-",
        "answer_a": "সন্ধিযোগে",
        "answer_b": "সমাসযোগে",
        "answer_c": "প্রত্যয়যগে",
        "answer_d": "উপসর্গযোগে",
        "answer_right": "প্রত্যয়যগে"
      },
      {
        "question": "কোনটি অপপ্রয়োগের দৃষ্টান্ত?",
        "answer_a": "পুনঃপুন",
        "answer_b": "ভৌগলিক",
        "answer_c": "গ্রথিত",
        "answer_d": "প্রোথিত",
        "answer_right": "পুনঃপুন"
      },
      {
        "question": "কোনটি ধ্বন্যাত্মক শব্দের উদাহরণ?",
        "answer_a": "শীত-শীত",
        "answer_b": "ঘুম-ঘুম",
        "answer_c": "জ্বর-জ্বর",
        "answer_d": "টুপটাপ",
        "answer_right": "জ্বর-জ্বর"
      },
      {
        "question": "কোন উপসর্গটি ভিন্নার্থে প্রযুক্ত?",
        "answer_a": "প্রতিপক্ষ",
        "answer_b": "প্রতিদ্বন্দ্বী",
        "answer_c": "প্রতিবিম্ব",
        "answer_d": "প্রতিবাদ",
        "answer_right": "প্রতিবিম্ব"
      },
      {
        "question": "ণ-ত্ব বিধান অনুযায়ী কোনটি অশুদ্ধ?",
        "answer_a": "দূর্ণীতি",
        "answer_b": "দারুণ",
        "answer_c": "মূল্যায়ন",
        "answer_d": "বর্ণ",
        "answer_right": "দূর্ণীতি"
      },
      {
        "question": "তোমার কথাগুলো ভারি সোশিয়ালিস্টিক। এ উক্তিটি কার উদ্দ্যেশে উচ্চারিত হয়েছে",
        "answer_a": "কমলাকান্ত",
        "answer_b": "বঙ্কিমচন্দ্র",
        "answer_c": "মার্জার",
        "answer_d": "প্রসন্ন",
        "answer_right": "মার্জার"
      },
      {
        "question": "Which one is the covering of brain and spinal cord of human?",
        "answer_a": "Meninges",
        "answer_b": "Peritoneum",
        "answer_c": "Pericardium",
        "answer_d": "Neurocardium",
        "answer_right": "Meninges"
      },
      {
        "question": "কারমাইকেলের অনুসন্ধানে রেশমি রুমাল তৈরির ক্ষেত্র হিসেবে?",
        "answer_a": "্বীরভূম",
        "answer_b": "বর্ধমান",
        "answer_c": "রাজেশাহী",
        "answer_d": "মুর্শিদাবাদে",
        "answer_right": "মুর্শিদাবাদে"
      },
      {
        "question": "মাসি-পিসি গল্পে আহ্লাদীর মুখে কে দেখতে পায় নিজ মেয়ের ক্ষেত্র হিসেবে কোন এলাকা আবিষ্কৃত হয়েছে?",
        "answer_a": "কৈলেশ",
        "answer_b": "জগু",
        "answer_c": "রহমান",
        "answer_d": "কানাই",
        "answer_right": "রহমান"
      },
      {
        "question": "আঠারো বছর বয়স কবিতার মূলসুর কি?",
        "answer_a": "নৈতিকতা",
        "answer_b": "বিবেকবোধ",
        "answer_c": "অদম্য তারুণ্যশক্তি",
        "answer_d": "ভীরুতা",
        "answer_right": "অদম্য তারুণ্যশক্তি"
      },
      {
        "question": "আমার পথ প্রবন্ধে পথ প্রদর্শক কে?",
        "answer_a": "ধর্ম",
        "answer_b": "সত্য",
        "answer_c": "দেশ",
        "answer_d": "নেতা",
        "answer_right": "সত্য"
      },
      {
        "subject_name": "English",
        "question": "What is the topic of this passage?",
        "answer_a": "Three major types of bacteria",
        "answer_b": "How microscopic organisms are measured",
        "answer_c": "How bacteria is used for research in genetics",
        "answer_d": "Diseases caused by bacteria",
        "answer_right": "Three major types of bacteria"
      },
      {
        "question": "According to the text, which characteristic is common in bacteria?",
        "answer_a": "They have one cell.",
        "answer_b": "They are harmful to humans.",
        "answer_c": "They die when exposed to air",
        "answer_d": "They die quickly",
        "answer_right": "They have one cell."
      },
      {
        "question": "Why are bacteria used in the research study?",
        "answer_a": "Bacteria live harmlessly.",
        "answer_b": "Bacteria are similar to other life forms.",
        "answer_c": "Bacteria cause many diseases.",
        "answer_d": "Bacteria have unusual cell formations.",
        "answer_right": "Bacteria are similar to other life forms."
      },
      {
        "question": "According to the passage, bacilli are responsible for...",
        "answer_a": "Polluting air",
        "answer_b": "Causing throat diseases",
        "answer_c": "Spoiling food",
        "answer_d": "Spoiling soil",
        "answer_right": "Spoiling food"
      },
      {
        "question": "A similar word for 'tumble' is...",
        "answer_a": "Order",
        "answer_b": "Arrange",
        "answer_c": "Organize",
        "answer_d": "Spill",
        "answer_right": "Spill"
      },
      {
        "question": "Monir is sitting --- the desk --- front of the door.",
        "answer_a": "at, in",
        "answer_b": "in, on",
        "answer_c": "on, on",
        "answer_d": "at, a",
        "answer_right": "at, in"
      },
      {
        "question": "As for_, I prefer to let people make up -minds.",
        "answer_a": "myself, each other's",
        "answer_b": "me, their own",
        "answer_c": "my, theirs",
        "answer_d": "my, theirs",
        "answer_right": "me, their own"
      },
      {
        "question": "Kalam found it hard to get up from bed after the alarm clock - at six a.m.",
        "answer_a": "sent out",
        "answer_b": "threw out",
        "answer_c": "went off",
        "answer_d": "took out",
        "answer_right": "went off"
      },
      {
        "question": "Which one is the incorrect spelling?",
        "answer_a": "deportation",
        "answer_b": "depriciation",
        "answer_c": "denunciation",
        "answer_d": "denomination",
        "answer_right": "depriciation"
      },
      {
        "question": "What is the antonym of 'latent'?",
        "answer_a": "lurking",
        "answer_b": "hidden",
        "answer_c": "obvious",
        "answer_d": "concealed",
        "answer_right": "obvious"
      },
      {
        "question": "A synonym for 'compassion' is -",
        "answer_a": "indifference",
        "answer_b": "cruelty",
        "answer_c": "yearning",
        "answer_d": "heartlessness",
        "answer_right": "yearning"
      },
      {
        "question": "The noun of 'excite' is -",
        "answer_a": "excitable",
        "answer_b": "exciting",
        "answer_c": "excited",
        "answer_d": "excitement",
        "answer_right": "excitement"
      },
      {
        "question": "Sleeplessness causes problems with our -clock.",
        "answer_a": "botanical",
        "answer_b": "biological",
        "answer_c": "natural",
        "answer_d": "rhythmical",
        "answer_right": "rhythmical"
      },
      {
        "question": "Nutritionists still do not understand the nutritional - of jackfruits.",
        "answer_a": "favours",
        "answer_b": "helps",
        "answer_c": "goods",
        "answer_d": "benefits",
        "answer_right": "benefits"
      },
      {
        "question": "The person who has committed such an - crime must be severely punished.",
        "answer_a": "injurious",
        "answer_b": "unworthy",
        "answer_c": "uncharitable",
        "answer_d": "abominable",
        "answer_right": "abominable"
      }


    ]
  }







  const hanleCloet = async () => {
    const result = await AdmissionQuestionPost(higherMathData)
    console.log(result);
  }



  return (
    <div className=' p-10 '>

      <button onClick={() => hanleCloet()} className=' primary text-4xl'> click</button>


    </div>
  );
};

export default Page;