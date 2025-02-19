import styles from "./AboutMain.module.scss";

import {
  aiImage
} from "../../../assets/images"

export default function AboutMain() {
  return ( 
    <section className={`${styles.aboutMain} containerInside`}>
      <h1>About us</h1>
      <img 
        src={aiImage}
        widt="100" 
        height="100" />

      <h2>Components of an About Us page
      </h2>
      <p>
      n contrast to a landing page, your About Us page should focus more on your brand identity and less on sales.

      Here are some components to include in an About Us page: Reference:  
      </p>

      <h2>Your brand story</h2>
      <p>
      Tell shoppers the origin story of your business and why you started it. For the most impact, make it memorable and personal, so customers relate and connect with your brand. If your brand is your name or it was formed based on a personal brand, your company’s story can be one and the same with your founder story.
      Reference:  
      </p>

      <h2>How you operate Reference:</h2>
      <p>
      If you offer a service, explain your business model or how your products are made. If you have a unique way of doing things, show it. This builds credibility with shoppers and helps you stand out against competitors.

      The face of your business
      Feature photos of the founders or key people on your team. Customers like to see who they are buying from or working with. This can also include behind-the-scenes shots of your work space, studio, or retail store.
      Reference: 
      </p>

      <h2>Your brand story</h2>
      <p>
      Tell shoppers the origin story of your business and why you started it. For the most impact, make it memorable and personal, so customers relate and connect with your brand. If your brand is your name or it was formed based on a personal brand, your company’s story can be one and the same with your founder story.
      Reference:  
      </p>

      <h2>How you operate Reference:</h2>
      <p>
      If you offer a service, explain your business model or how your products are made. If you have a unique way of doing things, show it. This builds credibility with shoppers and helps you stand out against competitors.

      The face of your business
      Feature photos of the founders or key people on your team. Customers like to see who they are buying from or working with. This can also include behind-the-scenes shots of your work space, studio, or retail store.
      Reference: 
      </p>
  </section>  
  )
}