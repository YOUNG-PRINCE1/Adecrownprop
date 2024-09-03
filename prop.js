const propertiesList = document.getElementById('properties-list');
const viewDetailsButtons = document.querySelectorAll('.view-details');

viewDetailsButtons.forEach(button => {
	button.addEventListener('click', () => {
		const propertyDetails = button.closest('li').querySelector('.property-details');
		propertyDetails.classList.toggle('show');
	});
});

