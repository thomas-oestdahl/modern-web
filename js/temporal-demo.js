// Live demo for the "Temporal API for dates" post.
// Falls back gracefully in browsers that don't support Temporal yet.

document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('temporal-output');
  if (!output) return;

  if (typeof Temporal === 'undefined') {
    output.textContent = 'Temporal is not supported in this browser yet.';
    return;
  }

  const today = Temporal.Now.plainDateISO();
  const inThreeMonths = today.add({ months: 3 });
  const daysUntil = today.until(inThreeMonths, { largestUnit: 'day' }).days;

  output.textContent =
    `Today is ${today.toString()}. Three months from now is ` +
    `${inThreeMonths.toString()} (${daysUntil} days away).`;
});
