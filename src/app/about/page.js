import { Users, Ruler, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="page-header">
          <h1 className="page-title">About Agent Time Saver</h1>
          <p className="page-subtitle">
            Get fast, accurate measurements on the properties you're listing and selling for MAXIMUM value. No more
            low-ball appraisals or blown deals due to inaccurate MLS data.
          </p>
        </div>
        <div className="content-grid">
          <div className="content-section animate-fade-in">
            <h2 className="section-title">The Challenge</h2>
            <p className="section-text">
              As an agent, you want your MLS listings to be as attractive as possible. You want clients to appreciate a
              home's features without stepping foot in it, and appraisers to have correct information to avoid delays.
            </p>
            <p className="section-text">
              But sometimes MLS data gets misinterpreted. A 4-bedroom house listed might really be 3 bedrooms with a
              den. Below-grade finished basement space might be incorrectly included in gross living area. These
              misunderstandings cause unwanted delays and can even kill deals.
            </p>
          </div>
          <div className="content-section animate-fade-in-delay-1">
            <h2 className="section-title">Our Solution</h2>
            <p className="section-text">
              Agent Time Saver provides simple, digital forms to ensure accurate room measurements, room count, and
              square footage breakdowns. We take the math and measurements out of your job so you can focus on sales.
            </p>
            <p className="section-text">
              Take it a step further - our contractors can handle all property measurements for you. No more headaches
              with measurements and calculations. Focus on what you do best: selling properties.
            </p>
          </div>
        </div>
        <div className="stats-grid">
          {[
            {
              icon: Users,
              stat: "1000+",
              label: "Happy Agents",
            },
            {
              icon: Ruler,
              stat: "50K+",
              label: "Properties Measured",
            },
            {
              icon: Award,
              stat: "100%",
              label: "Accuracy Rate",
            },
          ].map((item, index) => (
            <div key={index} className={`stat-card animate-fade-in-delay-${index + 1}`}>
              <item.icon className="stat-icon" />
              <div className="stat-value">{item.stat}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="cta-section animate-fade-in-delay-3">
          <h2 className="cta-title">Ready to Save Time and Close More Deals?</h2>
          <p className="cta-text">
            See our complete range of services and find the perfect solution for your business.
          </p>
          <Link href="/services" className="cta-button group">
            View Our Services
            <ArrowRight className="cta-button-icon group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
