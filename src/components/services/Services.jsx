import Card from "./Card"


const Services = () => {
  return (
    <>
    <div className=" mt-20 mb-3">
        <h2 className="  text-center text-3xl font-bold text-yellow-500">Our Services</h2>
    </div>
    <div className=" items-center justify-center flex flex-wrap gap-3 mt-4 mb-4 my-4 mx-4 grid-rows-3">
        
    <Card header="Graphic Design" text="Create eye catching and stunning design that reflects your brand and identity. Work with Digital Terai to design awesome Logo, graphics, and more."/>
    <Card header="Web Design and Development" text="More than 60% of visitors judge your business based on their first visit to your website. We help you turn your visitors into Fan with our awesome web design."/>
    <Card header="Social Media" text="We help businesses discover how to best use social media marketing to connect with customers, generate awareness, and increase sales."/>
    <Card header="Pay-Per-Click (PPC)" text="online advertising model in which advertisers pay each time a user clicks on one of their online ads."/>
    <Card header="Local SEO" text="Local SEO is an integral part of Digital Marketing and we make sure to optimize your business for local SEO to reach the majority of consumers."/>
    <Card header="Search Engine Optimization" text="SEO, being the pillar of digital marketing, We help you optimize your website for both users & search engines for a higher online visibility and a better branding."/>
     </div>
    </>
  )
}

export default Services
