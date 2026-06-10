---
layout: home
title: "Neuroscience and Cognition"
subtitle: "Biotech Engineer | Neurophysiology | Neural Network Dynamics"
img: /assets/img/home/page.jpg
---
 
<style>
.home-heading-message h1 {
  font-size: 4.5rem;
  font-weight: 700;
  color: white !important;
}
.home-heading-message p {
  font-size: 1.6rem;
  font-weight: 300;
  color: white !important;
}
.project-grid { display: grid; gap: 10px; margin: 1.5rem 0; }
.project-card { border: 0.5px solid #ddd; border-radius: 10px; overflow: hidden; }
.project-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; cursor: pointer; gap: 1rem; background: transparent; width: 100%; text-align: left; border: none; font-family: inherit; }
.project-header:hover { background: rgba(0,0,0,0.03); }
.project-tag { font-size: 11px; font-weight: 500; padding: 3px 10px; border-radius: 99px; white-space: nowrap; flex-shrink: 0; }
.tag-neuro { background: #EEEDFE; color: #3C3489; }
.tag-model { background: #E1F5EE; color: #085041; }
.tag-ai    { background: #FAECE7; color: #712B13; }
.project-title-text { font-size: 15px; font-weight: 500; line-height: 1.4; color: inherit; }
.project-icon { font-size: 18px; flex-shrink: 0; transition: transform 0.2s; color: #888; }
.project-icon.open { transform: rotate(45deg); }
.project-body { display: none; padding: 0 1.25rem 1.25rem; font-size: 14px; line-height: 1.7; color: #555; border-top: 0.5px solid #eee; padding-top: 1rem; }
.project-body.visible { display: block; }


## I am a researcher in neuro-physiology and computational neuroscience

 
I am trying to understand the activity patterns taking place in the brain, how the neurons are organised in networks to generate those activity patterns and what are the rules that dictate how those networks evolve to result in cognition.
 
On this site, I explore a single question across several projects: How do networks of neurons hold, compute, and learn from information so rapidly and efficiently? And why can't our best AI do it as efficiently as the brain?
 
## My Projects
 
<div class="project-grid">
  <div class="project-card">
    <button class="project-header" onclick="toggleProject(this)">
      <span class="project-title-text">The study of persistent activity underlying working memory</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="project-tag tag-neuro">Neuroscience</span>
        <span class="project-icon">+</span>
      </div>
    </button>
    <div class="project-body">
      Networks of neurons in the prefrontal cortex are responsible for holding sensory information for seconds after a stimulus disappears. When you see an object appear in your field of vision, certain neurons keep firing even after you look away — this phenomenon is called persistent activity. The dominant theory is that these neurons are wired into recurrent loops, where activity reverberates and sustains itself. Working memory represents the ability not only to remember information but also to manipulate it, compare information from different sources over time, and perform tasks like decision making.
    </div>
  </div>
  <div class="project-card">
    <button class="project-header" onclick="toggleProject(this)">
      <span class="project-title-text">Modeling network dynamics</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="project-tag tag-model">Modeling</span>
        <span class="project-icon">+</span>
      </div>
    </button>
    <div class="project-body">
      Experimental neuroscience can only offer a restricted perspective on how the activity recorded in the brain emerges. Based on results reported by experimental neuroscience, researchers have developed models of neuron networks to complete the picture of how a network could self-sustain a stimulus-specific activity. Spiking neural networks are widely used to simulate such activity, more closely replicating the dynamics of neurons over time than perceptron-based networks.
    </div>
  </div>
  <div class="project-card">
    <button class="project-header" onclick="toggleProject(this)">
      <span class="project-title-text">Performant but energy-hungry AI models</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="project-tag tag-ai">AI</span>
        <span class="project-icon">+</span>
      </div>
    </button>
    <div class="project-body">
      The success of deep neural networks and transformers can be explained by the simple feedforward and differentiable nature of their structure, which can easily be scaled up. But this power comes at an enormous energy cost — a stark contrast to the brain's sparse, event-driven computation.
    </div>
  </div>
  <div class="project-card">
    <button class="project-header" onclick="toggleProject(this)">
      <span class="project-title-text">Why training brain-like networks is so difficult</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="project-tag tag-model">Modeling</span>
        <span class="project-icon">+</span>
      </div>
    </button>
    <div class="project-body">
      Training recurrent spiking neural networks through time is extremely challenging due to non-linear interactions. Many approaches transfer deep learning advances to SNNs via backpropagation through time, but alternatives are also studied — such as three-factor learning rules drawing inspiration from the brain, and the well-known spike-timing dependent plasticity.
    </div>
  </div>
  <div class="project-card">
    <button class="project-header" onclick="toggleProject(this)">
      <span class="project-title-text">A tale of two architectures: neuromorphic computing</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="project-tag tag-ai">AI</span>
        <span class="project-icon">+</span>
      </div>
    </button>
    <div class="project-body">
      While finding a learning algorithm that trains SNNs as efficiently as backpropagation remains an open problem, advances have been made in hardware better adapted for running SNNs. Standard chips use the von Neumann architecture; neuromorphic computing colocalises memory and computation, saving the immense energy normally used transporting information between separate units.
    </div>
  </div>
</div>
<script>
function toggleProject(btn) {
  var body = btn.nextElementSibling;
  var icon = btn.querySelector('.project-icon');
  var isOpen = body.classList.contains('visible');
  document.querySelectorAll('.project-body.visible').forEach(function(el) {
    el.classList.remove('visible');
    el.previousElementSibling.querySelector('.project-icon').classList.remove('open');
    el.previousElementSibling.querySelector('.project-icon').textContent = '+';
  });
  if (!isOpen) {
    body.classList.add('visible');
    icon.classList.add('open');
    icon.textContent = '×';
  }
}
</script>
 
## Get in Touch
 
- Email: erwan.martin019@gmail.com
- GitHub: [@Erwan-Martin](https://github.com/Erwan-Martin/)
- LinkedIn: [Erwan Martin](https://linkedin.com/in/erwan-martin019)
- Research gate: [@Erwan Martin](https://www.researchgate.net/profile/Erwan-Martin-3)
