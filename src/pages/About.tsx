import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="About the Project"
        description="Many schools in Sri Lanka—especially in underserved areas—have limited learning resources. A small library can change a child’s future."
      />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-semibold">The challenge</h2>
          <p className="mt-2 text-muted-foreground">
            Not every school has enough textbooks, storybooks, or reference materials. Students often share outdated books or go without.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Who we are</h2>
          <p className="mt-2 text-muted-foreground">
            A community of students, volunteers, teachers, parents, and supporters working together to improve reading access.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Why books matter</h2>
          <p className="mt-2 text-muted-foreground">
            Books build literacy, confidence, and opportunity. A library creates a safe space for curiosity and lifelong learning.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">What we aim to do</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
          <li>Collect books in Sinhala, Tamil, and English.</li>
          <li>Sort, label, and catalogue books with volunteers.</li>
          <li>Set up a functional, student-friendly library space.</li>
          <li>Continue support through future book drives and partnerships.</li>
        </ul>
      </section>
    </div>
  );
}
