import './About.scss';
import { Breadcrumb } from 'Components';
import { AboutUs, Call, Client, Counter, Team, Testimonial } from './Components';

export default function About() {
  return (
    <>
      <Breadcrumb currentPath={'about us'} />
      <AboutUs />
      <Call />
      <Team />
      <Testimonial />
      <Counter />
      <Client />
    </>
  )
}
