import './About.scss';
import { Breadcrumb } from 'Components';
import { AboutUs, Call, Client, Counter, Team, Testimonial } from './Components';

export default function About() {
  return (
    <>
      <Breadcrumb title='About Us' />
      <AboutUs />
      <Call />
      <Team />
      <Testimonial />
      <Counter />
      <Client />
    </>
  )
}
