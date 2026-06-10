---
layout: home
title: "Neuroscience and Cognition"
subtitle: "Biotech Engineer | Neurophysiology | Neural Network Dynamics"
img: /assets/img/home/page.jpg
---

<style>
.home-heading-message h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
}
.home-heading-message p {
  font-size: 1.4rem;
  font-weight: 300;
  color: white;
}
</style>

## I am a researcher in  neuro-physiology and computational neuroscience

I am trying to understand the activity patterns taking place in the brain, how the neurons are organised in networks to generate those activity patterns and what are the rules that dictate how those networks evolves to result in cognition. 

On this site, I explore a single question across several projects: How do networks of neurons hold, compute, and learn from information, so rapidely and efficiently. And why can’t our best AI do it as efficiently as the brain?

## My Projects

<style>
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
</style>
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
      Networks of neurons in the prefrontal cortex are responsible for holding sensory information for seconds after a stimulus disappears. When you see an object appear in your field of vision, certain neurons keep firing even after you look away, this phenomenon is called persistent activity. The dominant theory is that these neurons are wired into recurrent loops, where activity reverberates and sustains itself.

Working memory represent the ability not only to remember information but also manipulate it, compare information from different sources over time and perform tasks like decision making, but many aspect of this cognitive ability are not well understood.  
    </div>
  </div>
  

<style>
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
</style>
<div class="project-grid">
  <div class="project-card">
    <button class="project-header" onclick="toggleProject(this)">
      <span class="project-title-text">Modeling network dynamic</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="project-tag tag-neuro">Neuroscience</span>
        <span class="project-icon">+</span>
      </div>
    </button>
    <div class="project-body">
Experimental neuroscience can only offer a resticted perspective on how the activity recorded in the brain emerges, it is challenging to associate the recorded activity to underlying local network structure because their are so many interaction in the brain even in smaller animals, brain regions influence each other in ways that are difficult to understand and when trying to understand the coomputation/ cognition done by a specific brain area it is difficult to isolate what is due to that brain area structure vs what is due to the interation of this brain area with the rest of the brain. Based on result reported by experimental neuroscience, researcher have devloped models of network of neurons to try and complete the picture of how a network could self sustain a stimulus specific activity. Spiking neural network widely used to simulate the activity of such network, while other models exist, the SNN more closely replicate the dynamics of neurons over time. Meanwhile the perceptron based neural network are very different from network in the brain function. But because we better understand the math behind networks of perceptron, and we can be better trained at any scales, so they have become prevalent in artificial intelligence.
    <div>
    <div>

    
<style>
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
</style>
<div class="project-grid">
  <div class="project-card">
    <button class="project-header" onclick="toggleProject(this)">
      <span class="project-title-text">Performant energy hungry AI models</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="project-tag tag-neuro">Neuroscience</span>
        <span class="project-icon">+</span>
      </div>
    </button>
    <div class="project-body">
Explain perceptron, explain backpropagation, what does training a network means? the success of DNNs and Transformers can be explained by the simple feedforward and differentiable nature of their structure which can easly be scaled up. 
          <div>
    <div>


      <style>
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
</style>
<div class="project-grid">
  <div class="project-card">
    <button class="project-header" onclick="toggleProject(this)">
      <span class="project-title-text">Why is training brain like network much more difficult</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="project-tag tag-neuro">Neuroscience</span>
        <span class="project-icon">+</span>
      </div>
    </button>
    <div class="project-body">
Why is training recurrent network through time is extremely difficult. Training a recurrent spiking neural network is extremely challenging because of non-linear interactions but it has immense potential for performing computation with low amount of computing energy. Many research has been conducted to transfer the discoveries of Deeplearning to SNN with backpropagation through time, but other solutions are also studied such as Three-Factor Learning rule that draws inspiration from the brain instead and the well knwon spike-timing dependent plasticity.
          <div>
    <div>

      <style>
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
</style>
<div class="project-grid">
  <div class="project-card">
    <button class="project-header" onclick="toggleProject(this)">
      <span class="project-title-text">A tale of two brains</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="project-tag tag-neuro">Neuroscience</span>
        <span class="project-icon">+</span>
      </div>
    </button>
    <div class="project-body">
While finding a learning algorithm that can train SNN as efficiently as backpropagation is for perceptron based models remains an open problem. There as been some advances in making hardware that is more adapted for running SNN and leveraging their advantages. While standard computer chips use the VonNeumann architecture, neuromorphic computing colocalise memory and computation. By doing this is saves immense amounts of energy normally used in transporting information from memory to processing unit.
          <div>
    <div>


<script>
function toggleProject(btn) {
  var details = btn.nextElementSibling;
  details.style.display = details.style.display === 'none' ? 'block' : 'none';
}
</script>




### The noisy brain


## Get in Touch

- Email: erwan.martin019@gmail.com
- GitHub: [@Erwan-Martin](https://github.com/yourusername)
- LinkedIn: [Erwan Martin](https://linkedin.com/in/yourprofile)
