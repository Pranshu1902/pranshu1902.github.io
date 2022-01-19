var c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let loadImage = (src, callback) => {
  let img = document.createElement("IMG");
  img.onload = () => callback(img);
  img.src = src;
};

//c.style.background =
//  "url('C:/Users/DELL/Desktop/Programming/GDC/WD101/Portfolio Website/Martial arts/images/background.jpg')";

let imagePath = (framenumber, task) => {
  return (
    "/images/" +
    task +
    "/" +
    framenumber +
    ".png"
  );
};

let frames = {
  idle: [1, 2, 3, 4, 5, 6, 7, 8],
  kick: [1, 2, 3, 4, 5, 6, 7],
  punch: [1, 2, 3, 4, 5, 6, 7],
  backward: [1, 2, 3, 4, 5, 6],
  forward: [1, 2, 3, 4, 5, 6],
  block: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

let loadImages = (callback) => {
  let images = {
    idle: [],
    kick: [],
    punch: [],
    backward: [],
    forward: [],
    block: [],
  };
  let imageToLoad = 0;

  ["idle", "kick", "punch", "backward", "forward", "block"].forEach(
    (animation) => {
      let animationFrames = frames[animation];
      imageToLoad = imageToLoad + animationFrames.length;

      animationFrames.forEach((framenumber) => {
        let path = imagePath(framenumber, animation);

        loadImage(path, (image) => {
          images[animation][framenumber - 1] = image;
          imageToLoad = imageToLoad - 1;

          if (imageToLoad === 0) {
            callback(images);
          }
        });
      });
    }
  );
};

let animate = (ctx, images, animation, callback) => {
  images[animation].forEach((image, index) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(image, 0, 0, 500, 500);
    }, index * 100);
  });
  setTimeout(callback, images[animation].length * 100);
};

loadImages((images) => {
  let queue = [];

  let play = () => {
    let move;
    if (queue.length === 0) {
      move = "idle";
    } else {
      move = queue.shift();
    }
    animate(ctx, images, move, play);
  };
  play();

  document.getElementById("kick").onclick = () => {
    queue.push("kick");
  };
  document.getElementById("punch").onclick = () => {
    queue.push("punch");
  };
  document.getElementById("backward").onclick = () => {
    queue.push("backward");
  };
  document.getElementById("forward").onclick = () => {
    queue.push("forward");
  };
  document.getElementById("block").onclick = () => {
    queue.push("block");
  };
  document.addEventListener("keyup", (event) => {
    const key = event.key;
    if (key == "p") {
      queue.push("punch");
    } else if (key == "k") {
      queue.push("kick");
    } else if (key == "b") {
      queue.push("block");
    } else if (key == "f") {
      queue.push("forward");
    } else if (key == "a") {
      queue.push("backward");
    }
  });
});
