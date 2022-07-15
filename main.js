// projects.html
let projects = [
  {
    title: "Money Manager",
    description:
      "Ever felt like spending a lot of money without keeping any track? Use our site to manage all your money and know exactly where it is going.",
    link: "https://money-manager-pranshu1902.netlify.app/",
    repo: "https://github.com/Pranshu1902/Money-Manager-fe",
    image: "projects/money_manager.png",
  },
  {
    title: "P-Chat",
    description:
      "Chat like never before. A free and open-source chatting site to connect with your friends. Built using Django. Fast, secure, reliable, easy to use.",
    link: "http://p-chat-pranshu1902.herokuapp.com/",
    repo: "https://github.com/Pranshu1902/P-Chat/",
    image: "projects/p_chat.png",
  },
  {
    title: "The Gladden Project",
    description:
      "Feel like you want some personalized advice for your mental stress but are afraid to share you personal info with stranger? Then use your platform where you can get personalized guidance from our bot without worrying about privacy.",
    link: "http://pranshu1902.github.io/TheGladdenProject/",
    repo: "https://github.com/Pranshu1902/TheGladdenProject/",
    image: "projects/gladdenproject.png",
  },
  {
    title: "Task Manager",
    description:
      "Ever felt like you have a lot of tasks and not able to keep record of all of them? Well maybe you write down the tasks on a paper but to put them with priority and update them constantly can be hectic on paper. That's why I made this.",
    link: "https://pranshu19-task-manager.herokuapp.com/",
    repo: "https://github.com/Pranshu1902/WD-202-Task-Manager/",
    image: "projects/task_manager.png",
  },
  {
    title: "Martial Arts Simulator",
    description:
      "This is an online game where I have simulted a martial artist with some commands like kick, punch, block, etc.",
    link: "/Martial%20arts/index.html",
    repo: "https://github.com/Pranshu1902/pranshu1902.github.io/tree/master/Martial arts",
    image: "projects/martial arts.png",
  },
  {
    title: "Jarvis: Meeting Manager",
    description:
      "Automatically joins meetings for me based on the time table without any commands. Also, it acts as a virtual assistant and helps me with day-to-day tasks.",
    link: "https://drive.google.com/u/0/uc?id=1ewjKZQvJko5kxUpUTeKQ5z1BGsah-34l&export=download",
    repo: "https://github.com/Pranshu1902/Voice-Assistant-Jarvis",
    image: "projects/jarvis.png",
  },
  {
    title: "Breakout: Sixth Sense",
    description:
      "Forget keyboards, use your hand gestures to play the game of breakout.",
    link: "https://pranshu1902.itch.io/breakout-sixth-sense-game",
    repo: "https://github.com/Pranshu1902/Breakout-Sixth-sense-version",
    image: "projects/breakout.png",
  },
  {
    title: "Maze Solver AI",
    description:
      "This AI solves the maze using Depth-First Search and Breadth-First Search and returns an image comparing both algorithms. I have also made a GUI for this.",
    repo: "https://github.com/Pranshu1902/Maze-Solver",
    image: "projects/maze.png",
  },
  {
    title: "ATM",
    description: "Built a GUI based ATM which stores data in a csv file.",
    repo: "https://github.com/Pranshu1902/ATM",
    image: "projects/atm.png",
  },
];

let div = document.getElementById("projects");

let mainCode = "";
let divClass = "";

let projectLink = "";

projects.forEach((project, index) => {
  index % 2 == 0
    ? (divClass =
        "flex container reveal flex-col md:flex-row lg:flex-row gap-4")
    : (divClass =
        "flex flex-col containter reveal md:flex-row-reverse lg:flex-row-reverse gap-4");

  project.link
    ? (projectLink = `<a
  href="${project.link}"
  target="_blank"
>
  <button class="font-bold border-2 btn rounded-lg px-4 py-1 transition duration-500" type="button">
    Try it!
  </button>
</a>`)
    : (projectLink = "");

  mainCode += `
  <div class="${divClass}">
    <div class="w-full md:w-1/2 lg:w-1/2">
      <img
        src="${project.image}"
        class="rounded-lg"
        alt="${project.title}"
        width="100%"
        height="50%"
      />
    </div>
    <div class="w-full md:w-1/2 lg:w-1/2">
      <p class="pl-10 pb-12 font-medium">
        <b class="footerDark text-5xl">${project.title}</b><br /><br />${project.description}
        <br /><br />
        ${projectLink}
        <a class="pl-4" href=${project.repo} target="_blank">
          <button class="font-bold border-2 btn rounded-lg px-4 py-1 transition duration-500" type="button">
            Code
          </button>
        </a>
      </p>
    </div>
  </div>`;
});

div.innerHTML = mainCode;

// projects.html
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
