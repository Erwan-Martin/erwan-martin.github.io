---
layout: home
title: "Neuroscience and Cognition"
subtitle: "Biotech Engineer | Neurophysiology | Neural Network Dynamics"
---

# I am a researcher in  neuro-physiology and computational neuroscience

I am trying to understand the activity patterns taking place in the brain, how the neurons are organised in networks to generate those activity patterns and what are the rules that dictate how those networks evolves to result in cognition. 

On this site, I explore a single question across several projects: How do networks of neurons hold, compute, and learn from information, so rapidely and efficiently. And why can’t our best AI do it as efficiently as the brain?

## My Projects

{% raw %}

<div class="projects-container">
    <div class="project-item">
      <button class="project-button" onclick="toggleProject(this)">
        The study of persistent activity underlying working memory
      </button>
      <div class="project-details" style="display: none;">
       Networks of neurons in the prefrontal cortex are responsible for holding sensory information for seconds after a stimulus disappears. When you see an object appear in your field of vision, certain neurons keep firing even after you look away, this phenomenon is called persistent activity. The dominant theory is that these neurons are wired into recurrent loops, where activity reverberates and sustains itself.

Working memory represent the ability not only to remember information but also manipulate it, compare information from different sources over time and perform tasks like decision making, but many aspect of this cognitive ability are not well understood.  
      </div>
    </div>
    
    <div class="project-item">
      <button class="project-button" onclick="toggleProject(this)">
        Modeling network dynamic
      </button>
      <div class="project-details" style="display: none;">
Experimental neuroscience can only offer a resticted perspective on how the activity recorded in the brain emerges, it is challenging to associate the recorded activity to underlying local network structure because their are so many interaction in the brain even in smaller animals, brain regions influence each other in ways that are difficult to understand and when trying to understand the coomputation/ cognition done by a specific brain area it is difficult to isolate what is due to that brain area structure vs what is due to the interation of this brain area with the rest of the brain. Based on result reported by experimental neuroscience, researcher have devloped models of network of neurons to try and complete the picture of how a network could self sustain a stimulus specific activity. Spiking neural network widely used to simulate the activity of such network, while other models exist, the SNN more closely replicate the dynamics of neurons over time. Meanwhile the perceptron based neural network are very different from network in the brain function. But because we better understand the math behind networks of perceptron, and we can be better trained at any scales, so they have become prevalent in artificial intelligence.
      </div>
    </div>

        <div class="project-item">
      <button class="project-button" onclick="toggleProject(this)">
        Performant energy hungry AI models

      </button>
      <div class="project-details" style="display: none;">
Explain perceptron, explain backpropagation, what does training a network means? the success of DNNs and Transformers can be explained by the simple feedforward and differentiable nature of their structure which can easly be scaled up. 
      </div>
    </div>

            <div class="project-item">
      <button class="project-button" onclick="toggleProject(this)">
        Why is training brain like network much more difficult

      </button>
      <div class="project-details" style="display: none;">
Why is training recurrent network through time is extremely difficult. Training a recurrent spiking neural network is extremely challenging because of non-linear interactions but it has immense potential for performing computation with low amount of computing energy. Many research has been conducted to transfer the discoveries of Deeplearning to SNN with backpropagation through time, but other solutions are also studied such as Three-Factor Learning rule that draws inspiration from the brain instead and the well knwon spike-timing dependent plasticity.
      </div>
    </div>

                <div class="project-item">
      <button class="project-button" onclick="toggleProject(this)">
        A tale of two brains

      </button>
      <div class="project-details" style="display: none;">
While finding a learning algorithm that can train SNN as efficiently as backpropagation is for perceptron based models remains an open problem. There as been some advances in making hardware that is more adapted for running SNN and leveraging their advantages. While standard computer chips use the VonNeumann architecture, neuromorphic computing colocalise memory and computation. By doing this is saves immense amounts of energy normally used in transporting information from memory to processing unit.
      </div>
    </div>
</div>

<script>
function toggleProject(btn) {
  var details = btn.nextElementSibling;
  details.style.display = details.style.display === 'none' ? 'block' : 'none';
}
</script>
{% endraw %}



### The noisy brain


## Get in Touch

- Email: erwan.martin019@gmail.com
- GitHub: [@Erwan-Martin](https://github.com/yourusername)
- LinkedIn: [Erwan Martin](https://linkedin.com/in/yourprofile)
