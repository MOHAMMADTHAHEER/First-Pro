
const routeDisplay = document.getElementById('route-value');
const SpeedDisplay = document.getElementById('speed-value');
const SpeedMphDisplay = document.getElementById('speed-mph-value');
const alertMessage = document.getElementById('alert-message');
const alertSound = new Audio('alert.mp3'); // Create Audio object
alertSound.preload = 'auto'; // Preload the audio file

// Set speed limit (in km/h)
const speedLimit = 50;

// Set example route coordinates (latitude, longitude)
const routeCoordinates = [
  [16.201386914700905, 80.05610576596692]
];

// Function to update average speed display and check for speed limit
function updateSpeed(Speed) {
  SpeedDisplay.textContent = Speed;
  const SpeedMph = Speed * 0.621371;
  SpeedMphDisplay.textContent = SpeedMph.toFixed(2);
  if (Speed > speedLimit) {
    alertMessage.textContent = 'Speed limit exceeded!';
    alertMessage.style.display = 'block';
    alertSound.play(); // Play the audio
    setTimeout(() => {
      alertMessage.style.display = 'none';
    }, 3000); // Hide the alert message after 3 seconds
  } else {
    alertMessage.style.display = '';
  }
}

// Simulate route data (replace with actual GPS data)
setInterval(() => {
  const routeData = getRouteData(routeCoordinates);
  const Speed = calculateSpeed(routeData);
  updateSpeed(Speed);
}, 2000);

// Function to get route data (simulate GPS data)
function getRouteData(routeCoordinates) {
  const routeData = [];
  for (let i = 0; i < routeCoordinates.length; i++) {
    const coordinate = routeCoordinates[i];
    const speed = Math.random() * 100; // Random speed between 0 and 100 km/h
    routeData.push({
      latitude: coordinate[0],
      longitude: coordinate[1],
      speed: speed
    });
  }
  return routeData;
}

// Function to calculate average speed
function calculateSpeed(routeData) {
  let totalSpeed = 0;
  for (let i = 0; i < routeData.length; i++) {
    totalSpeed += routeData[i].speed;
  }
  return totalSpeed / routeData.length;
}


