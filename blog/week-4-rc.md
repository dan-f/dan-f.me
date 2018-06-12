---
title: "Week 4 at the Recurse Center"
date: "2018-06-12"
excerpt: "Updates on sounds, networks"
---

I've been at [RC](https://www.recurse.com/) for about four weeks at this point,
and I'm often thinking about how to frame the experience to someone.  It's an
educational retreat for programmers with little structure; there are no
teachers, and everyone works on whatever they want to.

I've been developing an intuition for how much effort to put into any given
task, for how long, and with what intensity.  What I've found, perhaps
obviously, is to do whatever you feel like, whenever you feel like, and to quit
right when it gets boring.  It's a rare privilege to be able to drop everything
for three months and pursue whatever interests you.  Systems like RC replace
"should"-motivated learning with "want"-motivated learning.

So here's what I've been up to over the last few weeks.

## Audio

I like music, I like computers!  I like digital audio?  It's a bit complicated.

I built a little [sine wave
oscillator](https://github.com/dan-f/portaudio-rs-sine-wavetable) and a [delay
line](https://github.com/dan-f/portaudio-rs-sine-wavetable) in order to get my
feet wet with realtime audio.

Here's what I learned in the process!

- [Time stops for
  no-one](http://www.rossbencina.com/code/real-time-audio-programming-101-time-waits-for-nothing)!
  Don't do IO-bound computation or work with nondeterministic running times on
  the audio thread
- Caught up on my rusty operating systems/systems programming skills, including:
  scheduling, threads, syscalls, drivers, ELF binaries, and runtimes
- Learned a lot about [rust](https://www.rust-lang.org/).  There are a lot of
  folks at RC right now that are knowledgeable with rust, and many more that are
  learning.

Then I started getting into the
[FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform) by way of
[Musimathics](http://www.musimathics.com/), a really excellent book on the
mathematics of audio by Gareth Loy.  It's super interesting, though I quickly
realized that I'd need to brush up on some math before diving in (see [imaginary
numbers](https://en.wikipedia.org/wiki/Imaginary_number)).  In practice, if you
want to make [bleeps](https://www.youtube.com/watch?v=F5hhFMSAuf4) and
[bloops](https://www.youtube.com/watch?v=M9F3_GS0_70), most DSP is done for you
by [runtimes](https://supercollider.github.io/) or lower-level
[libraries](https://github.com/PaulBatchelor/Soundpipe).  What fundamentally
interests me in digital audio is making weird noises.  It turns out that
learning DSP algorithms can be a circuitous path to that goal.

## Decentralization

Aside from the mathematical overhead involved in going deeper into digital
audio, I noticed that the programming problems in that space weren't super
interesting to me.

So I pivoted to another area of focus - decentralized systems.  I've been
starting out by [building my own
blockchain](https://github.com/dan-f/blockchain).  I'm less interested in the
currency use case and more interested in getting a peer-to-peer network of
computers to agree on a notion of truth without needing special mediating
parties.  And the problem of how to incentivize them to cooperate.

I'll be surveying decentralized tech beyond the bitcoin blockchain, including
architectures like [ethereum](https://www.ethereum.org/)
[ipfs](https://ipfs.io/), [dat](https://datproject.org/), and
[scuttlebot](https://scuttlebot.io/).  My primary interest is in how we can use
decentralization to replace the personal-data-as-store-of-value model of the
current social web.
