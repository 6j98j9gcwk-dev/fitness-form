// Get form elements
const fitnessForm = document.getElementById('fitnessForm');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const bmiInput = document.getElementById('bmi');
const successMessage = document.getElementById('successMessage');
const formWrapper = document.querySelector('.form-wrapper');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners
    weightInput.addEventListener('input', calculateBMI);
    heightInput.addEventListener('input', calculateBMI);
    fitnessForm.addEventListener('submit', handleFormSubmit);
    
    // Load saved form data if exists
    loadFormData();
});

// Calculate BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    
    if (weight > 0 && height > 0) {
        // Convert height from cm to meters
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        bmiInput.value = bmi;
        
        // Add BMI category color
        if (bmi < 18.5) {
            bmiInput.style.color = '#2196F3'; // Blue - Underweight
        } else if (bmi < 25) {
            bmiInput.style.color = '#4CAF50'; // Green - Normal
        } else if (bmi < 30) {
            bmiInput.style.color = '#FF9800'; // Orange - Overweight
        } else {
            bmiInput.style.color = '#F44336'; // Red - Obese
        }
    } else {
        bmiInput.value = '';
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
        return;
    }
    
    // Collect form data
    const formData = collectFormData();
    
    // Save to local storage
    saveFormData(formData);
    
    // Show success message
    showSuccessMessage(formData);
    
    // Log form data (in real app, send to server)
    console.log('Form Data Submitted:', formData);
}

// Validate form
function validateForm() {
    let isValid = true;
    const inputs = fitnessForm.querySelectorAll('[required]');
    
    inputs.forEach(input => {
        const formGroup = input.closest('.form-group') || input.closest('.checkbox-label');
        
        if (!input.value.trim()) {
            if (formGroup) {
                formGroup.classList.add('error');
            }
            isValid = false;
        } else {
            if (formGroup) {
                formGroup.classList.remove('error');
            }
        }
    });
    
    return isValid;
}

// Collect form data
function collectFormData() {
    const activities = Array.from(document.querySelectorAll('input[name="activities"]:checked'))
        .map(checkbox => checkbox.value);
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        weight: document.getElementById('weight').value,
        height: document.getElementById('height').value,
        bmi: document.getElementById('bmi').value,
        goal: document.getElementById('goal').value,
        experience: document.getElementById('experience').value,
        activities: activities,
        frequency: document.getElementById('frequency').value,
        injuries: document.getElementById('injuries').value,
        submittedAt: new Date().toLocaleString()
    };
    
    return formData;
}

// Save form data to local storage
function saveFormData(formData) {
    try {
        localStorage.setItem('fitnessFormData', JSON.stringify(formData));
        console.log('Form data saved to local storage');
    } catch (error) {
        console.error('Error saving form data:', error);
    }
}

// Load form data from local storage
function loadFormData() {
    try {
        const savedData = localStorage.getItem('fitnessFormData');
        if (savedData) {
            const formData = JSON.parse(savedData);
            populateForm(formData);
            console.log('Form data loaded from local storage');
        }
    } catch (error) {
        console.error('Error loading form data:', error);
    }
}

// Populate form with saved data
function populateForm(formData) {
    document.getElementById('name').value = formData.name || '';
    document.getElementById('email').value = formData.email || '';
    document.getElementById('age').value = formData.age || '';
    document.getElementById('gender').value = formData.gender || '';
    document.getElementById('weight').value = formData.weight || '';
    document.getElementById('height').value = formData.height || '';
    document.getElementById('goal').value = formData.goal || '';
    document.getElementById('experience').value = formData.experience || '';
    document.getElementById('frequency').value = formData.frequency || '';
    document.getElementById('injuries').value = formData.injuries || '';
    
    // Restore checkboxes
    if (formData.activities && Array.isArray(formData.activities)) {
        formData.activities.forEach(activity => {
            const checkbox = document.querySelector(`input[name="activities"][value="${activity}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }
    
    // Recalculate BMI
    calculateBMI();
}

// Show success message
function showSuccessMessage(formData) {
    // Hide form and show success message
    fitnessForm.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Add user info to success message
    const successContent = successMessage.innerHTML;
    const userGreeting = `<p style="margin-top: 15px; font-size: 1.05em;">Welcome, <strong>${formData.name}</strong>! Your fitness journey starts now.</p>`;
    successMessage.innerHTML = successContent + userGreeting;
    
    // Auto-reset after 5 seconds (optional)
    setTimeout(resetForm, 5000);
}

// Reset form and show form again
function resetForm() {
    fitnessForm.reset();
    fitnessForm.style.display = 'block';
    successMessage.style.display = 'none';
    successMessage.innerHTML = '<h2>✓ Form Submitted Successfully!</h2><p>Your fitness profile has been created. Get ready to start your fitness journey!</p>';
    bmiInput.value = '';
}

// Real-time validation for better UX
const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        const formGroup = this.closest('.form-group') || this.closest('.checkbox-label');
        if (this.value.trim()) {
            if (formGroup) {
                formGroup.classList.remove('error');
            }
        }
    });
});

// Add keyboard shortcut: Ctrl+S to submit
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (fitnessForm.style.display !== 'none') {
            fitnessForm.dispatchEvent(new Event('submit'));
        }
    }
});