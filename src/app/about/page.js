import ContactForm from "@/ContactForm";
import Link from "next/link";
import Script from "next/script";

export default function About() {
  return (
    <div className="min-h-screen flex-col flex items-center justify-center p-4">
      <div className="max-w-7xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl text-black font-bold mb-4">AGENT TIME SAVER</h1>
        <p className="text-lg text-black mb-4">
          Get fast, accurate measurements on the properties you&apos;re listing and selling for MAXIMUM value for your
          property!
        </p>
        <p className="text-lg text-black mb-4">
          No more low-ball appraisals that come in below your expectations due to inaccurate MLS data. More home value
          means more commission for you! Save thousands, and close on properties more quickly.
        </p>
        <p className="text-lg text-black mb-4">
          No more blown deals from misunderstandings about room sizes and gross living area!
        </p>
        <p className="text-lg text-black mb-4">
          Take the math and measurements out of your job so you can focus on the sales.
        </p>
        <p className="text-lg text-black mb-4">
          As an agent, you want to make your MLS listings as attractive as possible.
        </p>
        <p className="text-lg text-black mb-4">
          You want your clients to fully appreciate the beauty and features of a home without even setting foot in it.
          You want your appraiser to have all the correct information so there are no delays in the appraisal process.
          And you want all of your property information to be arranged in an easily accessible, digestible way for all
          involved.{" "}
        </p>
        <p className="text-lg text-black mb-4">
          But sometimes well-intentioned MLS data you input gets misinterpreted or misunderstood. Your clients may be
          frustrated that a 4-bedroom house you listed was really just 3 bedrooms with a den. Your appraiser may be
          frustrated that you included below grade finished basement in your total gross living area when in fact that
          should have been broken out separately.
        </p>
        <p className="text-lg text-black mb-4">
          Misunderstandings like this that may crop up with your clients or appraisers cause unwanted delays in the
          closing process. They might give your buyer more leverage to significantly lower the asking price, or worse
          yet, they might kill a deal. And of course, being the agent, you&apos;re on the hook for all of that data your
          property shows in the MLS.{" "}
        </p>
        <p className="text-lg text-black mb-4">
          Adding to this confusion is the differences in which the order of data appears when you create an MLS listing.
          Data you input into FlexMLS may be different than what is required in WIREX, for example. Your clients may be
          in search of features you thought you listed but didn&apos;t, and your appraisers may see missing or
          incomplete data that might drastically affect the value of the property you&apos;re selling.{" "}
        </p>
        <p className="text-lg text-black mb-4">
          There has to be a better way, and there is. The solution is the services offered by Agent Time Saver. Save
          yourself the anxiety of making sure property data makes its way into the correct place in an MLS listing,
          without any inaccurate or incomplete data that might delay the appraisal process or result in a low-ball
          appraisal that earns you less commission or blows a sale.
        </p>
        <p className="text-lg text-black mb-4">
          By using our simple, digital forms, we ensure you get all of your room measurements, room count and square
          footage broken out accurately and correctly. No more low-ball appraisals that earn you less commission or kill
          a deal. No more sudden leverage the buyer has to lower the price because the home has less square footage than
          you originally thought.
        </p>
        <p className="text-lg text-black mb-4">
          By taking things a step further, you can utilize our service to not only use our forms, but to take care of
          all of the property measurements for you. Our Agent Time Saver contractors will take all of the headache and
          math out of measuring rooms and square footage, so you can focus on doing what you do best: selling
          properties.
        </p>

        <p className="text-lg text-black mb-4">
          {" "}
          To see all of our services we offer please head to our <Link href="/services">services page</Link>
        </p>
      </div>
      <ContactForm title={"Sign Up Now"} width={"w-full"} maxWidth={"max-w-7xl"} />
    </div>
  );
}
