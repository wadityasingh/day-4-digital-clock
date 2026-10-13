/**
 * Day 4 Internship Task — Digital Clock
 * Vanilla JavaScript implementation displaying 12-hour time with AM/PM
 */

// Select DOM elements
const timeElement = document.getElementById('time');
const ampmElement = document.getElementById('ampm');
const dateElement = document.getElementById('date');

/**
 * Updates the digital clock display with the visitor's current local time, AM/PM, and date.
 */
function updateClock() {
  // 1. Get current date and time from the visitor's local system
  const now = new Date();

  // 2. Determine AM or PM based on the 24-hour value
  const rawHours = now.getHours();
  const ampm = rawHours >= 12 ? 'PM' : 'AM';

  // 3. Convert 24-hour format into 12-hour format (0 becomes 12, 13 becomes 1, etc.)
  const hours12 = rawHours % 12 || 12;

  // 4. Use padStart(2, '0') to ensure leading zeros for single digits (e.g., 5 -> '05')
  const hours = String(hours12).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // 5. Update DOM text content
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  if (ampmElement) {
    ampmElement.textContent = ampm;
  }

  // 6. Update local date display
  if (dateElement) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
  }
}

// Call updateClock immediately on load so time is displayed without delay
updateClock();

// Update every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);
