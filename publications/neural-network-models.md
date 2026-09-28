---
title: "Evolution of neural network models: perceptron, deep learning and the potential of spiking neural networks"
kicker: Public writing · 2025
layout: article
description: How artificial neural networks evolved from the perceptron to transformers, and why spiking neural networks may be next.
pdf: /assets/files/Public_communication_Erwan_Martin.pdf
---

Artificial Neural Networks (ANNs) used in artificial intelligence today are inspired by the functioning of biological neurons but differ significantly from the networks present in the brain. Over the last decade, ANNs composed of perceptrons have grown in their ability to perform a wide range of practical applications, such as image and speech recognition, text generation (with large language models or LLMs), and image generation (with diffusion models).

A perceptron is a computational unit that takes one or more inputs and produces a single output calculated by injecting input values in a mathematical function called an activation function. Since the perceptron model was proposed in 1958, the activation functions used have evolved from simple step functions to sigmoid and ReLU (Rectified Linear Unit) functions. Similarly, the architecture of perceptron-based networks has also evolved to improve their effectiveness.

## The evolution of deep learning

In the early 2000s, with advancements in computer processing power and training techniques, the concept of deep learning became more prevalent. Deep learning involves organizing perceptrons in multiple layers, where each perceptron in a layer receives inputs from the perceptrons in the previous layer and sends its output to the next layer. These multilayer perceptrons can be trained by injecting data into the input layer and adjusting the weights of connections using the backpropagation algorithm. Through this process of trial and error, called supervised learning, the network starts to recognize patterns in the input data and becomes able to classify or transform it accordingly. The deeper the network (i.e., the more layers it has), the better it can capture high-level abstractions.

By the early 2010s, the improvement of graphics processing units (GPUs) made training larger networks more rapid. GPUs are well-suited to perform numerous small calculations in parallel, which for training networks means matrix multiplications. Convolutional neural networks (CNNs) became prominent for their efficiency in recognizing patterns in images and speech for categorization.

Between 2014 and 2017, significant progress was made in generative models with the development of diffusion models for image generation and the implementation of attention mechanisms in deep learning architectures like transformers. This led to the creation of large language models (LLMs) supported by even more efficient GPUs. These advancements have enabled the implementation of networks with very large architectures, such as transformer-based systems like ChatGPT, which require substantial computational resources to manage and analyze large volumes of data efficiently.

## Spiking neural networks: mimicking biological neurons

Despite being inspired by biological neurons, perceptrons function quite differently. In biological neurons, the timing of inputs is crucial; a neuron responds differently based on how long ago it received its last input. In contrast, perceptron-based networks are unaffected by timing, processing inputs sequentially like an assembly line, regardless of the intervals between steps.

In parallel with advancements in perceptron-based ANNs, a different type of network model called spiking neural networks (SNNs) has been developed. SNNs more closely replicate the functioning of biological neurons. In the brain, neurons have an electrical potential that varies continuously over time. This potential increases with excitatory inputs and decreases with inhibitory inputs. If the potential reaches a threshold, the neuron sends a signal to connected neurons. The response of neurons based on membrane voltage and the presence of both excitatory and inhibitory inputs allows for complex, non-linear dynamics. It is that complexity that enables cognition in the brain.

SNNs capture this temporal aspect of neural dynamics, often using differential equations to model the evolution of electrical potential or other mathematical equations to predict when a neuron fires an action potential.

<figure>
  <img src="{{ '/assets/img/projects/Picture1.png' | relative_url }}" alt="Artificial neural network (ANN) and spiking neural network (SNN) neuron models" loading="lazy">
  <figcaption>Figure 1. Artificial neural network (ANN) and spiking neural network (SNN).</figcaption>
</figure>

Each neuron's potential needs to be calculated at each time step, which can be time-consuming in large networks with detailed neuron models and connections.

## Synapses and neural morphology

Another crucial aspect of biological networks is the synapse, the point of contact where neurons transmit signals to each other. The effect of a signal on the target neuron's electric potential is called the weight of the synapse. Similar to the weights in ANNs, synapses can change the effect of a signal through various mechanisms during learning and memory.

<figure class="narrow">
  <img src="{{ '/assets/img/projects/Picture2.png' | relative_url }}" alt="Pyramidal neuron drawn by Ramón y Cajal, annotated with axon, cell body, dendrites and a recorded action potential" loading="lazy">
  <figcaption>Figure 2. A biological neuron, drawn by Ramón y Cajal [1].</figcaption>
</figure>

Another factor which adds to the complexity of neural networks in the brain is the variety of neurons present in the brain. The shape and size of the different parts of the neuron can be different from one neuron to another (Figure 2). This diversity in morphology and other properties has been shown to be important for the brain to function properly. Yet simulating the exact functioning of a single biological neuron requires substantial computational power, equivalent to a high-end desktop computer for a single neuron, when including the smaller scale of molecular interaction. Given that the human brain contains around 86 billion neurons and approximately 100 trillion connections, simulating the entire brain at this level of detail is currently impossible.

## Challenges and future directions for SNNs

Within spiking neural networks, there are different categories based on the level of abstraction. Some models predict the timing of neuron spikes without detailed sub-cellular processes, and models can be deterministic or probabilistic [2]. Currently, SNNs are difficult to train and use in practical applications of artificial intelligence because they are not well-suited to current computer architectures (known as von Neumann architecture). For that reason, their primary use is still to model, predict, and explain the mechanisms underlying the nervous system's operation.

Nevertheless, SNNs are considered the third generation of ANNs, and they are efficient because they have lower power consumption. Researchers are developing alternative neuromorphic hardware to better exploit the immense potential of SNNs [3].

<ol class="refs">
  <li>Ramón y Cajal, <em>Histology of the Nervous System of Man and Vertebrates</em>, 1995.</li>
  <li>Gerstner, Kistler, Naud, Paninski, <em>Neuronal Dynamics: From Single Neurons to Networks and Models of Cognition</em>, 2014.</li>
  <li>Bouvier et al., <em>Spiking Neural Networks Hardware Implementations and Challenges: A Survey</em>, 2019.</li>
</ol>
