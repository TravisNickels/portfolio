<template>
  <div class="space-y-12">
    <SectionHeader title="About" subtitle="How I think about systems, clarity, and solving hard problems" />

    <div class="max-w-3xl space-y-6 text-[17px] leading-relaxed">
      <p>
        I like taking messy or ambiguous problems and turning them into things that ship. I think in terms of flows, boundaries, and long-term
        correctness, and I am usually the person who can pull a tangled situation into a diagram that finally makes it click. I question my own
        assumptions often, and I would rather reshape an idea early than force a design that does not hold up over time.
      </p>

      <p>
        I've spent about twenty years around technology, and the shape of the work has changed more than once. I started in hospital IT, where I ended
        up coordinating technology projects across six acute care facilities. That meant budgets, contractors, timelines, procurement, and regular
        status and budget reviews with the executive team, all under HIPAA and Sarbanes-Oxley, where being able to show your work matters as much as
        doing it. I learned early that most technology decisions are really business decisions wearing a costume.
      </p>

      <p>
        After that I went deep on engineering. Several years on a distributed systems product, working on messaging reliability, transport internals,
        a front-end platform migration, and the testing architecture underneath it. That is where I learned what it costs to get reliability right,
        and what it costs to get it wrong.
      </p>

      <p>
        More recently I've been building products end to end for early-stage companies. A cross-platform mobile application with an on-device computer
        vision pipeline, and a bilingual SaaS platform running on edge infrastructure with a Postgres backend. Both meant owning the whole thing:
        architecture, production deployment, infrastructure, cost model, and the analysis presented to the people funding it.
      </p>

      <p>
        The thread running through all of it is that I architect for near-zero marginal cost. Running inference on the device instead of in the cloud,
        or building on edge infrastructure instead of servers, keeps infrastructure spend flat as usage grows. For an early-stage company that is not
        a technical preference. It is runway.
      </p>
    </div>

    <div class="max-w-3xl space-y-4">
      <h2 class="flex items-center gap-3 text-xl font-semibold tracking-tight">
        <span class="h-px w-6 bg-accent" aria-hidden="true" />
        What I'm good at
      </h2>
      <ul class="space-y-3 text-[17px] leading-relaxed">
        <li class="flex gap-3">
          <span class="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          Owning a product end to end, from architecture and infrastructure through the cost model and the case made to the people funding it
        </li>
        <li class="flex gap-3">
          <span class="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          Finding the real problem when the goal is unclear and the work crosses several teams
        </li>
        <li class="flex gap-3">
          <span class="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          Translating between engineering, science, and executive audiences, which is where most technology organizations actually fail
        </li>
        <li class="flex gap-3">
          <span class="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          Deciding what to build, what to buy, and what to leave alone
        </li>
      </ul>
    </div>

    <div class="max-w-3xl space-y-4">
      <h2 class="flex items-center gap-3 text-xl font-semibold tracking-tight">
        <span class="h-px w-6 bg-accent" aria-hidden="true" />
        What I'm looking for next
      </h2>
      <p class="text-[17px] leading-relaxed">
        I'm looking for technology leadership roles where the difficult part is deciding what to build, and where someone needs to sit between the
        science, the engineering, and the people paying for both. I work well independently and still want a small group of peers to think out loud
        with. If you need someone who digs into the hard parts, makes systems understandable, and solves problems without unnecessary noise, that is
        where I do my best work.
      </p>
    </div>

    <ResumeDownloadCard />
  </div>
</template>
