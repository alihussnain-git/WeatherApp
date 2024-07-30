/**
 * Format a timestamp into a string in the format HH:mm.
 * @param {number} timestamp - The timestamp to be formatted.
 * @returns {string} - The formatted time string.
 */
export const formatTime = (timestamp: number): string => {
  // Create a new Date object from the timestamp in seconds
  const date = new Date(timestamp * 1000);

  // Get hours and minutes from the date object, ensuring two-digit format
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  // Combine hours and minutes into the HH:mm format
  return `${hours}:${minutes}`;
};
