import { useState } from 'react';
import card1Image from '../src/images/card1.svg';
import card2Image from '../src/images/card2.svg';
import card3Image from '../src/images/card3.svg';
import card4Image from '../src/images/card4.svg';
import card5Image from '../src/images/card5.svg';
import card6Image from '../src/images/card6.svg';

function Servicecards() {
  const [Service, setService] = useState([
    {
      id: 1,
      imagePath: card1Image,
      header: 'Email Subscription',
      paragraph: 'We’re driven beyond just finishing projects. We want to find smart solutions.',
      link: 'learn more',
    },
    {
      id: 2,
      imagePath: card2Image,
      header: 'Bolt Performance',
      paragraph: 'We’re driven beyond just finishing projects. We want to find smart solutions.',
      link: 'learn more',
    },
    {
      id: 3,
      imagePath: card3Image,
      header: 'Secure Transaction',
      paragraph: 'We’re driven beyond just finishing projects. We want to find smart solutions.',
      link: 'learn more',
    },
    {
      id: 4,
      imagePath: card4Image,
      header: 'Multiple Options',
      paragraph: 'We’re driven beyond just finishing projects. We want to find smart solutions.',
      link: 'learn more',
    },
    {
      id: 5,
      imagePath: card5Image,
      header: 'Customer Support',
      paragraph: 'We’re driven beyond just finishing projects. We want to find smart solutions.',
      link: 'learn more',
    },
    {
      id: 6,
      imagePath: card6Image,
      header: 'Integrated with Shopify',
      paragraph: 'We’re driven beyond just finishing projects. We want to find smart solutions.',
      link: 'learn more',
    },
  ]);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {Service.map((service) => (
        <div key={service.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg font-sans p-6">
            <img src={service.imagePath} alt={service.header} className="mx-4 mb-4" />
            <h3 className="text-lg font-bold text-indigo-950 mb-2">{service.header}</h3>
            <p className="text-gray-600 font-medium text-base leading-7 mb-4">{service.paragraph}</p>
            <a href="#" className=" flex flex-row items-center font-medium text-sm text-blue-500 hover:underline">
              {service.link}
              <span className="ml-1">
                <img src={('../src/images/Vector.svg').default} alt='Arrow' className="h-2 w-2 mt-1 text-blue-500" />
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Servicecards;
