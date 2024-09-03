const agentsList = document.getElementById('agents-list');
const viewDetailsButtons = document.querySelectorAll('.view-details');

viewDetailsButtons.forEach(button => {
	button.addEventListener('click', () => {
		const agentDetails = button.closest('li').querySelector('.agent-details');
		agentDetails.classList.toggle('show');
	});
});
