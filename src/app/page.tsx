'use client';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Fasilities from '@/components/Fasilities';
import SlideShow from '@/components/SlideShow';
import {
  IconBucketDroplet,
  IconDesk,
  IconDeviceImac,
  IconInbox,
  IconMail,
  IconMap2,
  IconPhoneIncoming,

  IconSoup,
  IconSpray,
  IconToiletPaper,
  IconTrekking,
  IconWifi,
} from '@tabler/icons-react';
import Footer from '@/components/Footer';


export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto m-2 mb-5">
        <h1 className="text-black font-bold ml-5 text-5xl">
          Submit Reservation
        </h1>
      </div>

      <div className="container mx-auto flex flex-row mt-3">
        <Card name="Luggage Storage" imageUrl="../image/img-3610.jpg" />
        <Card name="Coworking Space" imageUrl="../image/dsc01666-min-1.jpg" />
        <Card
          name="Toilet & Shower"
          imageUrl="../image/WhatsApp-Image-2023-07-06-154122.jpg"
        />
        <Card name="Meeting Room" imageUrl="../image/meeting-room-1x1.jpg" />
      </div>
      <div className="container mx-auto mt-20 mb-30 p-5">
        <div className="flex justify-center">
          <h1 className="text-5xl text-black font-bold">
            Best
            <span className="ms-2 primary-color">Hub</span>
          </h1>
        </div>
        <div className="flex justify-center mt-2">
          <p className="text-sm md:text-base text-gray-700 text-center">
            Best Hub is a tourist information centre, supported
            by Besthostels.co.id. Located in the heart of Kerobokan, we want
            besthub to be a solution for every traveller&apos;s trip gap-time.
            Whether travellers have morning flight arrivals and mid day check in
            or mid day check outs or even evening flight.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-20 p-5">
        <div className="flex justify-center">
          <h1 className="text-5xl text-black font-bold">Facilities</h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-rows-2 grid-flow-col gap-5 mt-3">
        <Fasilities
          icon={<IconInbox className="primary-color font-fasilities-icon" />}
          name="Luggage storage, surfboard storage & lockers"
        />
        <Fasilities
          icon={<IconTrekking className="primary-color font-fasilities-icon" />}
          name="Traveler information center"
        />
        <Fasilities
          icon={<IconMap2 className="primary-color font-fasilities-icon" />}
          name="Traveler transit hub"
        />
        <Fasilities
          icon={<IconWifi className="primary-color font-fasilities-icon" />}
          name="AC & wi-fi"
        />
        <Fasilities
          icon={
            <IconToiletPaper className="primary-color font-fasilities-icon" />
          }
          name="Toilet & shower"
        />
        <Fasilities
          icon={<IconSpray className="primary-color font-fasilities-icon" />}
          name="Amenities refill station"
        />
        <Fasilities
          icon={
            <IconBucketDroplet className="primary-color font-fasilities-icon" />
          }
          name="Free refill water station"
        />
        <Fasilities
          icon={<IconSoup className="primary-color font-fasilities-icon" />}
          name="Local foods & snacks
"
        />
        <Fasilities
          icon={<IconDesk className="primary-color font-fasilities-icon" />}
          name="Coworking space"
        />
        <Fasilities
          icon={
            <IconDeviceImac className="primary-color font-fasilities-icon" />
          }
          name="Meeting room"
        />
      </div>

      <SlideShow />

      <div className="container mx-auto mt-20 p-5">
        <div className="flex justify-center">
          <h1 className="text-5xl text-black font-bold">Contact Us</h1>
        </div>
      </div>
      <div className="container mx-auto mt-4 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="flex flex-col m-2 p-5">
            <div className="card backgorund-primary text-neutral-content w-full m-2 shadow-lg">
              <div className="card-body  ">
                <h2 className="card-title">
                  Call Center
                  <IconPhoneIncoming />
                </h2>
                <p>(+62) 852 1188 8438</p>
              </div>
            </div>
            <div className="card backgorund-primary text-neutral-content w-full m-2 shadow-lg">
              <div className="card-body  ">
                <h2 className="card-title">
                  Email <IconMail />{' '}
                </h2>
                <p>besthub@besthostels.co.id</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <iframe
              className="w-full max-w-lg rounded-lg shadow-2xl"
              style={{ border: 0 }}
              loading="lazy"
              width="600"
              height="450"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.463652527424!2d115.17735600000001!3d-8.6700951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247dfc583e8ff%3A0xd2f8b82b35f04e3!2sBesthub!5e0!3m2!1sen!2sid!4v1632901234567!5m2!1sen!2sid"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
