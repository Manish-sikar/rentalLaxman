function generateStars(element, rating, totalStars = 5) {
    element.innerHTML = ''; // Clear any existing stars
    
    for (let i = 1; i <= totalStars; i++) {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        star.setAttribute("viewBox", "0 0 24 24");
        star.classList.add('star');
        
        // Add the path for the star shape
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z");
        
        star.appendChild(path);
        
        // Fill the star if it is within the rating
        if (i <= rating) {
            star.classList.add('filled');
        }
        
        element.appendChild(star);
    }
}

// Apply stars to all elements with the class 'stars'
document.querySelectorAll('.rating #stars').forEach((starsContainer) => {
    const userRating = 4.5; // Example: Dynamic rating value
    generateStars(starsContainer, userRating);
});



// Function to generate features dynamically
function generateFeatures(container, features) {
    container.innerHTML = ''; // Clear any existing content
    
    features.forEach(feature => {
        const featureDiv = document.createElement('div');
        
        const img = document.createElement('img');
        img.src = feature.icon;
        img.alt = feature.altText;
        img.width = feature.width;
        img.style.height = feature.height;
        
        const p = document.createElement('p');
        p.textContent = feature.text;
        
        featureDiv.appendChild(img);
        featureDiv.appendChild(p);
        container.appendChild(featureDiv);
    });
}

// Example usage: Dynamically populate the features section
document.querySelectorAll('.features').forEach((featuresContainer) => {
    const features = [
        {
            icon: 'manualCarIconpng.png',
            altText: 'Manual icon',
            width: 20,
            height: '25px',
            text: 'Manual'
        },
        {
            icon: 'chairIconpng.png',
            altText: 'Seat icon',
            width: 20,
            height: '25px',
            text: '5 Seat'
        },
        {
            icon: 'luggageIconpng.png',
            altText: 'Luggage icon',
            width: 20,
            height: '25px',
            text: '4 Luggage'
        },
        {
            icon: 'petrolApng.png',
            altText: 'Petrol icon',
            width: 20,
            height: '25px',
            text: 'Petrol'
        }
    ];
    
    generateFeatures(featuresContainer, features);
});
