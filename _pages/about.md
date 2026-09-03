---
permalink: /
title:
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<p class="about-lead">
  I am an M.Sc. student in Computer Engineering at the National University of Singapore (NUS),
  where I conduct research at <a href="https://sites.google.com/view/showlab/home">Show Lab</a>
  under the supervision of <a href="https://scholar.google.com/citations?user=h1-3lSoAAAAJ&hl=en">Prof. Mike Zheng Shou</a>.
</p>

My research focuses on **video generation, world models, and robotics**, with an emphasis on building generative models that can understand, simulate, and control interactive visual worlds. I am currently a Research Intern at **Tencent IEG**, working on algorithms for game world models. I received my bachelor's degree from the School of Electronic Information at **Wuhan University**.

<div class="research-tags" aria-label="Research interests">
  <span>🎬 Video Generation</span>
  <span>🌍 World Models</span>
  <span>🤖 Robotics</span>
</div>

✨ News
======

- **Sep. 2026** — Released **H3-World**, an efficient framework that turns language understanding in a large video generator into temporally grounded world control.
- **Jun. 2026** — Released **Supervise What Survives**, our work on geometry-guided VLA adaptation from synthetic robot videos; currently under review at CoRL 2026.
- **Oct. 2025** — **LayerTracer** was presented as an **Oral** paper at ICCV 2025.

📚 Publications
======

{% assign selected_publications = site.publications | sort: "selected_rank" %}
{% for post in selected_publications %}
  {% include publication-card.html post=post %}
{% endfor %}

<p class="section-more"><a href="/publications/">View the full publication list →</a></p>

🎓 Education & Experience
======

<div class="timeline-list">
  <div class="timeline-item">
    <div class="timeline-logo">
      <img src="/images/organizations/tencent.png" alt="Tencent logo">
    </div>
    <div class="timeline-content">
      <div class="timeline-role">Research Intern</div>
      <div class="timeline-place">Tencent Interactive Entertainment Group (IEG)</div>
      <div class="timeline-note">Research on game world model algorithms · Present</div>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-logo timeline-logo--wide">
      <img src="/images/organizations/nus.jpg" alt="National University of Singapore logo">
    </div>
    <div class="timeline-content">
      <div class="timeline-role">M.Sc. in Computer Engineering</div>
      <div class="timeline-place">National University of Singapore · Show Lab</div>
      <div class="timeline-note">Advisor: Prof. Mike Zheng Shou · Present</div>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-logo">
      <img src="/images/organizations/whu.png" alt="Wuhan University logo">
    </div>
    <div class="timeline-content">
      <div class="timeline-role">Bachelor's Degree</div>
      <div class="timeline-place">School of Electronic Information, Wuhan University</div>
    </div>
  </div>
</div>

✉️ Contact
======

I am happy to connect with researchers and collaborators working on generative world models and embodied intelligence.

<div class="contact-grid">
  <a href="mailto:danzerchan@gmail.com">danzerchan@gmail.com</a>
  <a href="mailto:danze_chen@u.nus.edu">danze_chen@u.nus.edu</a>
  <a href="mailto:chendanze@whu.edu.cn">chendanze@whu.edu.cn</a>
</div>
