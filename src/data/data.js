import aguadilla from "./data-img/aguadilla.png";
import fuerteventura from "./data-img/fuerteventura.png";
import bali from "./data-img/bali.png";
import bangkok from "./data-img/Bangkok.png";
import benevento from "./data-img/Benevento.png";
import cabo from "./data-img/cabo.png";
import cebu from "./data-img/cebu.png";
import ho_chi_minh from "./data-img/ho_chi_minh.png";
import kl from "./data-img/KL.png";
import perth from "./data-img/perth.png";
import singapore from "./data-img/singapore.png";
import freights_bay from "./data-img/freights-bay.png";
import taipei from "./data-img/Taipei.png";
import tokyo from "./data-img/tokyo.png"

const data = [
  {
    key: 1,
    Country: "Barbados",
    Location: "Freight's Bay",
    GoogleMapLink: "https://goo.gl/maps/FnNLHzVUg19DEYZm9",
    Dates: "November 2020-February 2021",
    about: "The first location on out travels! Freight's Bay is renowned for its surfing opportunities, attracting enthusiasts from around the world. The area's laid-back vibe and beautiful scenery make it a beloved destination for both locals and tourists.",
    image: freights_bay,
    longStay: true
  },
  {
    key: 2,
    Country: "Puerto Rico",
    Location: "Aguadilla",
    GoogleMapLink: "https://goo.gl/maps/JbeSJJaXaXW4qZLH9",
    Dates: "February 2021-March 2021",
    about: "Aguadilla is known for its stunning beaches and vibrant local culture. The town's rich history is reflected in its architecture and traditions, making it a captivating destination.",
    image: aguadilla,
    longStay: true
  },
  {
    key: 3,
    Country: "Mexico",
    Location: "San Jose del Cabo",
    GoogleMapLink: "https://goo.gl/maps/gAfcvEtU2krE11GCA",
    Dates: "April 2021-August 2021",
    about: "San Jose del Cabo offers a blend of traditional Mexican charm and modern luxury. The city's art district is famous for its galleries, while the natural surroundings provide opportunities for outdoor adventures. My personal favorite: delicious local taco spots all around town!",
    image: cabo,
    longStay: true
  },
  {
    key: 4,
    Country: "Italy",
    Location: "Ostia & Benevento",
    GoogleMapLink: "https://goo.gl/maps/ssvwVjA2uiGRZb8x7",
    Dates: "September 2021-October 2021",
    about: "Ostia is known for its ancient ruins and beautiful coastline, while Benevento boasts rich history with Roman monuments and medieval architecture. Both locations offer a glimpse into Italy's diverse cultural heritage. This was a personal favorite getting to see areas I researched in graduate school and visiting my great grandparent's hometown outside Benevento.",
    image: benevento,
    longStay: true
  },
  {
    key: 5,
    Country: "Spain",
    Location: "Fuerteventura",
    GoogleMapLink: "https://goo.gl/maps/3MgLTHPCadxtnreJ8",
    Dates: "October 2021-December 2021",
    about: "Fuerteventura, one of the Canary Islands, is famous for its stunning beaches and unique volcanic landscapes. The island's cultural festivals and local cuisine add to its allure as a travel destination.",
    image: fuerteventura,
    longStay: true
  },
  {
    key: 6,
    Country: "Indonesia",
    Location: "Bali",
    GoogleMapLink: "https://goo.gl/maps/HJUAyHSZg9xp6TsC9",
    Dates: "May 2022",
    about: "Bali is a island of absolute MAGIC! Renowned for its lush landscapes, vibrant arts scene, and spiritual culture. From intricate temples to traditional dance performances, the island offers a rich cultural experience.",
    image: bali,
    longStay: true
  },
  {
    key: 7,
    Country: "Singapore",
    Location: "Singapore",
    GoogleMapLink: "https://goo.gl/maps/EjtoaGtqPZCnSsjY7",
    Dates: "July 2022",
    about: "Singapore is a global financial hub known for its multicultural heritage and cutting-edge architecture. The city-state's food scene is a blend of various Asian cuisines, reflecting its diverse population.",
    image: singapore,
    longStay: false
  },
  {
    key: 8,
    Country: "Malaysia",
    Location: "Kuala Lumpur",
    GoogleMapLink: "https://goo.gl/maps/FnkeQRbqivSkQshr9",
    Dates: "July 2022",
    about: "Kuala Lumpur, Malaysia's capital, is a melting pot of cultures with influences from Malay, Chinese, and Indian traditions. The city's skyline, dominated by the iconic Petronas Towers, symbolizes its rapid modernization. Personally this was one of my favorite spots in Southeast Asia.  The people are so kind, and the food is delicious!",
    image: kl,
    longStay: false
  },
  {
    key: 9,
    Country: "Australia",
    Location: "Perth",
    GoogleMapLink: "https://goo.gl/maps/TGXLPC8DCDYretGv8",
    Dates: "September 2023",
    about: "Perth, known for its stunning natural landscapes, offers a relaxed lifestyle with beautiful beaches and parks. The city's arts and culinary scenes are thriving, reflecting a blend of indigenous and contemporary Australian culture.",
    image: perth,
    longStay: false
  },
  {
    key: 10,
    Country: "Thailand",
    Location: "Bangkok",
    GoogleMapLink: "https://goo.gl/maps/JijwQ7hfaSAzHCA8A",
    Dates: "November 2022-December 2022",
    about: "Bangkok is a city of contrasts, where modern skyscrapers stand alongside historic temples. Known for its vibrant street life and bustling markets, the city offers a rich cultural experience.",
    image: bangkok,
    longStay: false
  },
  {
    key: 11,
    Country: "Taiwan",
    Location: "Taipei",
    GoogleMapLink: "https://goo.gl/maps/mXxqkn9GNYxVcH9x5",
    Dates: "February 2023",
    about: "Taipei, Taiwan's capital, is known for its lively street-food scene and contemporary architecture. The city's rich history is evident in its traditional temples and preserved cultural practices. We stopped by during the Taiwan Lantern Festival held in a different city every year, it was incredible!",
    image: taipei,
    longStay: false
  },
  {
    key: 12,
    Country: "Vietnam",
    Location: "Ho Chi Minh City",
    GoogleMapLink: "https://goo.gl/maps/TcxyhXWV5cCD2Ew37",
    Dates: "April 2023",
    about: "Ho Chi Minh City, formerly Saigon, is a vibrant city known for its French colonial landmarks and bustling markets. The city's museums and historical sites reflect its complex history and cultural diversity.",
    image: ho_chi_minh,
    longStay: false
  },
  {
    key: 13,
    Country: "Philippines",
    Location: "Oslob",
    GoogleMapLink: "https://goo.gl/maps/wfS6ZNXc5jCA7zaV9",
    Dates: "June 2023",
    about: "Oslob is a coastal town in the Philippines known for its stunning natural beauty, kind locals, and historical destinations. It is a must-visit destination in the Philippines.",
    image: cebu
  },
  {
    key: 14,
    Country: "Japan",
    Location: "Tokyo",
    GoogleMapLink: "https://goo.gl/maps/T7ZJDGLvwxi1qJig7",
    Dates: "September 2023",
    about: "Tokyo, Japan's bustling capital, is a blend of the traditional and the futuristic. From historic temples to cutting-edge technology, the city offers a diverse and dynamic cultural experience.",
    image: tokyo,
    longStay: false
  }
];


  export default data
  