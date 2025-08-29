import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import ContactLinks from "@/components/contact-links"

export default function ContactPage() {
  async function submitAction(formData: FormData) {
    "use server"
    // In a real app, send an email or store in a DB here.
    console.log("[v0] Contact form submission:", {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    })
  }

  return (
    <main>
      <SiteHeader />
      <Section title="Contact" subtitle="Direct, no forms — reach me instantly.">
        <div className="max-w-2xl">
          <ContactLinks
            email="kirti40.yadav@gmail.com"
            linkedin="https://www.linkedin.com/in/kirti-yadav-369942275"
            github="https://github.com/Kirti2016"
            heading="Let’s build something amazing together"
            subheading="Choose email or socials — whichever works for you."
            status="Typically replies within 12 hours."
          />
        </div>
      </Section>
      <SiteFooter />
    </main>
  )
}
