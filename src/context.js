import React, { Component } from "react";

const Context = React.createContext();

var foo = "Visit <a href=\"http://bing.com\">Bing</a>.";


export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD_BLOG":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;

      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

      default:
        break;
    }
  };

  state = {
    handler: this.handler,
    projects: [
      {
        id: 1,
        title: "Restaurant Website",
        imageUrl:
          "https://i.ibb.co/cc9K6MB/confusion.png",
        excerpt: "This is a restaurant website...",
        body: "I created this restaurant website, it is fully responsive and smooth.",
        link: "https://callmeharsh.github.io/conFusionRest/index.html",

      },
      {
        id: 2,
        title: "Project 2",
        imageUrl:
          "https://i.ibb.co/DbLTV7H/paralax.png",
        excerpt: "This is a tribute page...",
        body: "This is a tribute page I created for one of may favourate shows. This page is smooth, sexy and responsive with parallax scrolling effect.",
        link: "https://callmeharsh.github.io/paralax/",

      },
      {
        id: 3,
        title: "Project 3",
        imageUrl:
          "https://i.ibb.co/txNTdgm/documentation.png",
        excerpt: "This is simple documentation...",
        body: "AAaaahh , just a simple documentation, nothing special, but it is responsive.",
        link: "https://callmeharsh.github.io/documentation/",
      },
      {
        id: 4,
        title: "Project 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        excerpt: "This is my project about...",
        body: "Body 4",
      },
    ],
    blogs: [
      {
        id: 1,
        title: "DEDUCING NOTHING",
        imageUrl:
          "https://inteng-storage.s3.amazonaws.com/img/iea/lV6D1XW1wx/sizes/reflective-thinking-2_resize_md.jpg",
        excerpt: "Looking back at the millennia...",
        body: "Looking back at the millennia of model building and deduction that has occurred, not a century has gone by when the prevailing opinion hasn’t been that a perfectly empty vacuum is impossible.Aristotle’s Aether blends seamlessly into the 19th century Ether. In this century, overlapping quantum waves and virtual particles have finally taken root as the New Ether, though it is now infinitely more ephemeral than anything Aristotle or Maxwell could have imagined. We have also seen how the Atomist School of ancient Greece reached its final vindication in the hands of 19th century scientists such as Boltzman. By the 20th century, the Atomist’s paradigm has even been extended to include not just the graininess of matter, but the possible quantum graininess of the vacuum and space itself. In the virtual particles that animate matter, we finally glimpse the world which Heinrich Hertz warned us about nearly a century ago when he said that we would eventually have to reach some accommodation with “invisible confederates” existing alongside what we can see, to make our whole model of reality more logically self-consistent.Even by the start of the 21st Century, we have reached this accommodation only by shrugging our shoulders and honestly admitting that there are things going on in the world that seem to defy human intuition. What impresses me most about the evolution of our vision of the vacuum is that the imagery we find so potent today is actually in some sense thousands of years old.It is difficult to imagine that humans would be drawn to the same understanding of physics and astronomy that we now enjoy if our brains had been wired only slightly differently. Without sight and mobility we could not form the slightest notion of 3-D space and geometry. This is what Kant spoke about, what Henri Poincare described at great length without the benefit of 20th century neuroscience, and what Jacob Bronowski described in his book The Origins of Knowledge and Imagination with the benefit of such knowledge. But the object of science is more than just making sense of our senses. It must also guide us towards a deeper understanding of the physical world. This understanding must be self-consistent, and independent of whether we are sensorially or neurologically handicapped. Mathematics as the premier language of physical model building, seems uniquely suited to providing us with an understanding of the physical world. Mathematics lets us see the world in a way that all of the other human languages do not.",
      },
      {
        id: 2,
        title: "STOP FOCUSING ON MEANING CRAP",
        imageUrl:
          "https://www.scotthyoung.com/blog/wp-content/uploads/2019/06/meaning-moderation.png",
        excerpt: "I’m suspicious of those things...",
        body: "I’m suspicious of those things where more is always supposed to be better. Nature prefers moderation, so good things can harm you when you get too much of them. Drinking more water is good. Too much and you’ll drown. I think “meaning” is one of those things that is usually good, but that can cause you problems when there is too much of it. Meaning is a slippery word, so it’s hard to be clear we’re using it the same way. However, we all know when a person, thing, goal or idea feels significant to us, and when those same things feel ordinary. The difference is meaning.In addition to being a feeling, meaning is also an idea. When someone asks you what something means, they’re asking for you to explain it in words. They want its definition, cause or likely implications. Meanings are words and ideas you weave together in your head. More meaning tends to be better. A complete absence of meaning usually (although perhaps not always) feels awful. Similarly, a lack of meaning in the conceptual sense is confusion and ignorance. We’d prefer to say what things mean and believe it, than to simply shrug our shoulders and say, “I don’t know.”I think there’s two ways you can have too much meaning.First, you could feel too strongly about the significance of something. We’ve all had anxiety and fears when something is so important to us that we’re unable to function. That relationship that you wanted to hold onto even though the other person wasn’t in love with you. That job which meant everything to you—until you got fired. That conviction you held to desperately, until it started to unravel.Feelings are mental tools. They put our minds into a state that allows certain ideas, actions and thoughts to flow more easily than others. However, to allow some ideas to flow more easily, that must necessarily mean you’re blocking others. The feeling of significance therefore will be useful in some contexts and harmful in others, just like anger, fear, optimism, joy, love, sadness and everything else you feel.The second way you can have too much meaning is related to the intellectual idea of meaning. If you have a strong set of ideas about what something means, either in terms of its definition, explanation or implied effects, that can “lock” you into a certain way of seeing things. Too much meaning can prevent you from seeing something in another way, and other perspectives may be necessary to solve certain problems.",
      },
      {
        id: 3,
        title: "LIVE IT LIKE ADVENTURE AND GET THINGS DONE",
        imageUrl:
          "https://www.peakadventuretour.com/blog/wp-content/uploads/2018/06/Bungee-Jumping-in-India.jpg",
        excerpt: "Is it possible to spend...",
        body: "Is it possible to spend your life having adventures, but still make meaningful accomplishments? The answer to this question matters to me because, like many of you, I’d like to have both.The challenge is that most advice-givers put the two in either-or categories. Being good requires focus, perhaps decades of it. The world tends to rewards people with painstakingly developed talent, not perpetual dabblers.But while I’d like to sustain such a Newportian focus in my life, I crave variety. Psychological time depends on it, so living adventurously may be the secret to compressing the most life into the brief time we have.Is it possible to have both adventure and accomplishment?Most people tend to fall into one category. There are hard-focusing achievement-oriented people. The kind who studied hard all through school but rarely went to parties. And then there are novelty-seeking adventurers who are a lot of fun but often lag years behind their more ambitious peers.One way to explain this clustering is that the two life approaches really are mutually exclusive. The traits and beliefs to fulfill one naturally omit the other. Like being a jockey or a basketball player, the attributes to be good at one contradict the other.However looking deeper, I’ve managed to find many people who don’t fit the pattern. People who seem to possess both in great enough quantities that the two philosophies may not contradict.Richard Feynman is a perfect example. He was a Nobel-laureate and physicist on the Manhattan project. But he was also a painter, lock-picker and bongo player, fluent in Portuguese. I highly recommend his autobiography.This leads me to another explanation for the clustering. People tend to be either ambitious or adventurous, not because those philosophies contradict, but because the attributes you need to be good at one are different.Instead of a jockey or basketball player, it may be closer to being a basketball player and a pianist. It’s not that one skill hurts the other, but simply that the two are orthogonal",
      },
    ],
    recommendations: [
      // {
      //   id: 1,
      //   name: "Forget",
      //   company: "",
      //   designation: "",
      //   message: "",
      // },
      // {
      //   id: 2,
      //   name: "the",
      //   company: "",
      //   designation: "",
      //   message: "",
      // },
      // {
      //   id: 3,
      //   name: "failures",
      //   company: "",
      //   designation: "",
      //   message: "",
      // },
      // {
      //   id: 4,
      //   name: "Random guy 4",
      //   company: "ABC company",
      //   designation: "SDE",
      //   message: "He gets things done so quickly",
      // },
    ],
    skills: [
      {
        id: 1,
        name: "HTML5",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 5,
        name: "React",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/react.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 6,
        name: "MySQL",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "Python",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/python.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
        starsTotal: 3,
        starsActive: 1,
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
