const mainText = "Halo, saya Ivandi Lukito Saputro";
const jobs = [
  "Frond-End Development",
  "Responsive Desaind",
  "Databases"
];

let i = 0;
let isDeletingJob = false;

function typeMainText() {
  const typingText = document.getElementById("typing-text");
  if (i < mainText.length) {
    typingText.innerHTML = mainText.substring(0, i + 1);
    i++;
    setTimeout(typeMainText, 70);
  }
}

let jobIndex = 0;
let charIndex = 0;

function typeJob() {
  const typingJob = document.getElementById("typing-job");
  const currentJob = jobs[jobIndex];

  if (!isDeletingJob) {
    typingJob.innerHTML = currentJob.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentJob.length) {
      isDeletingJob = true;
      setTimeout(typeJob, 1000);
    } else {
      setTimeout(typeJob, 70);
    }
  } else {
    typingJob.innerHTML = currentJob.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeletingJob = false;
      jobIndex = (jobIndex + 1) % jobs.length;
      setTimeout(typeJob, 500);
    } else {
      setTimeout(typeJob, 40);
    }
  }
}

window.onload = function() {
  typeMainText();
  typeJob();
};