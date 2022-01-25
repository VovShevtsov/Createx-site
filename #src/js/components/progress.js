 const circle = document.querySelector('.progress');

 const progressAnimation = () => {
  let percentageProgress = Math.floor(70);

  let radius = circle.getAttribute('r');
  console.log(radius)
  let circleLength = 2 * Math.PI * radius;
  console.log(circleLength)
  circle.setAttribute('stroke-dasharray', circleLength);
  circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
 };

 progressAnimation();