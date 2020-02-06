

function scoreChecker(score, topScore) {

  const midScore = (topScore / 2);

  if ((score === null || undefined) || (topScore === null || undefined)) {
    return "Sorry we are missing some of your data";
  }

  if (score === topScore) {
    return `You scored ${score} - That's amazing, you got them all correct`;
  } else if (score < topScore && score >= midScore) {
    return `You scored ${score} - A fair response, well done`;
  } else if (score < midScore) {
    return `You scored ${score} - You could of done better there, why not try again.`;
  } else {
    return `Sorry, somthing went wrong`;
  }
}

export { scoreChecker }