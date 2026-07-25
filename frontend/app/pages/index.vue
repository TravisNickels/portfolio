<script setup lang="ts">
const baseUrl = useRuntimeConfig().app.baseURL
const pdfPath = baseUrl + 'resume/TravisNickels_TechnologyLeader_2026.pdf'

const skills = [
  { group: 'Product & Architecture', items: ['System design', 'Technical strategy', 'Build vs. buy', 'Cost modeling'] },
  {
    group: 'Backend & Distributed Systems',
    items: ['C#, .NET Core', 'Distributed Systems', 'NServiceBus', 'RabbitMQ', 'ASB / Azure Functions', 'GraphQL'],
  },
  { group: 'Frontend & Mobile', items: ['Vue 3 / Nuxt', 'TypeScript', 'React Native', 'Expo'] },
  { group: 'ML & Data', items: ['Python', 'YOLOv8', 'TensorFlow Lite', 'Computer vision', 'Training pipelines'] },
  { group: 'Cloud & Infrastructure', items: ['PostgreSQL / SQL', 'Supabase', 'CI/CD', 'Observability', 'BDD'] },
]

const principles = [
  {
    title: 'Architecture is a cost decision',
    body: "Running ML on-device rather than in the cloud wasn't a technical preference. It holds infrastructure near zero as usage scales. Every significant technical choice has a line item attached to it.",
  },
  {
    title: "Build what's differentiating, buy what's table stakes",
    body: "Never build auth. Never build an annotation tool. Spend engineering time on the thing competitors can't copy.",
  },
  {
    title: 'Ship the piece that stands alone first',
    body: 'On a recent project, the consumer-facing product was viable independent of the R&D-dependent features. That sequencing de-risks everything downstream.',
  },
  {
    title: 'The hardest problems are at the seams',
    body: 'Most technology organizations fail translating between science, engineering, and executive teams, not writing code. I treat that translation as part of the job.',
  },
]
</script>

<template>
  <div class="space-y-20 sm:space-y-28">
    <!-- Hero -->
    <section class="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-7">
        <p class="eyebrow text-accent">Technology leader</p>

        <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Travis Nickels</h1>

        <p class="mt-4 max-w-xl text-xl leading-snug text-muted sm:text-2xl">I turn ambiguous problems into products that ship.</p>

        <p class="mt-7 max-w-2xl text-[17px] leading-relaxed">
          Thirteen years running technology delivery for a six-hospital system, where I also built the internal tools the department ran on. Four
          years engineering distributed systems after that. Now I build products end to end for early-stage companies, most recently a detection
          prototype and the market analysis that went to its board. Regulated healthcare taught me that what a product tells a customer has to be
          something the organization can defend. I architect for near-zero marginal cost, because a dollar of infrastructure is a dollar of runway.
        </p>

        <div class="mt-9 flex flex-wrap gap-3">
          <UButton to="/projects" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">View projects</UButton>
          <UButton :to="pdfPath" download external color="neutral" variant="outline" size="lg" icon="i-lucide-download">Download resume</UButton>
        </div>
      </div>

      <div class="flex justify-center lg:col-span-5 lg:justify-end">
        <div class="relative">
          <!-- Same two-layer recipe as the OG card: a wide soft wash, plus a
               tight halo hugging the portrait. Solid discs under heavy blur. -->
          <div class="pointer-events-none absolute -inset-16 rounded-full bg-glow/10 blur-[90px] sm:-inset-32 lg:-inset-44" aria-hidden="true" />
          <div class="pointer-events-none absolute -inset-5 rounded-full bg-glow/15 blur-2xl sm:-inset-6 lg:-inset-7" aria-hidden="true" />
          <div class="relative aspect-square w-52 overflow-hidden rounded-full bg-elevated shadow-xl ring-1 ring-line sm:w-64 lg:w-72">
            <img src="assets/portrait.webp" alt="Travis Nickels" class="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Currently -->
    <section class="relative overflow-hidden surface-card p-7 sm:p-9">
      <span class="absolute inset-y-0 left-0 w-1 bg-accent" aria-hidden="true" />
      <div class="grid gap-4 pl-3 sm:grid-cols-[7rem_1fr] sm:gap-8 sm:pl-4">
        <p class="eyebrow pt-1.5 text-accent">Currently</p>
        <p class="max-w-3xl text-lg leading-relaxed">
          Building the technology function at an early-stage company: product architecture, machine learning pipeline, data infrastructure, and the
          multi-year technical roadmap. Interested in technology leadership roles where the hard part is deciding what to build, not just building it.
        </p>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="space-y-10">
      <SectionHeading eyebrow="Capabilities" title="What I work with" description="Grouped by what I can own, not by what is on a keyword list." />

      <div class="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="s in skills" :key="s.group">
          <p class="eyebrow mb-3.5 text-muted">{{ s.group }}</p>
          <ul class="flex flex-wrap gap-1.5">
            <li v-for="item in s.items" :key="item">
              <TechTag>{{ item }}</TechTag>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- How I work -->
    <section class="space-y-10">
      <SectionHeading eyebrow="Operating principles" title="How I work" />

      <div class="grid gap-6 lg:grid-cols-2">
        <div v-for="p in principles" :key="p.title" class="surface-card h-full p-6 sm:p-7">
          <h3 class="text-lg font-semibold tracking-tight">{{ p.title }}</h3>
          <p class="mt-3 leading-relaxed text-text">{{ p.body }}</p>
        </div>
      </div>
    </section>

    <ResumeDownloadCard />
  </div>
</template>
