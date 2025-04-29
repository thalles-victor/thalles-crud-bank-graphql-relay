export function generateFutureDateInMinutes(minutes = 0) {
  const currentDate = new Date();
  const futureDate = new Date(currentDate);

  futureDate.setMinutes(currentDate.getMinutes() + minutes);

  return futureDate;
}

export function generateFixedLengthRandomNumber(length = 1) {
  if (length < 1) {
    throw new Error("Length must be at least 1");
  }

  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }

  return result;
}
