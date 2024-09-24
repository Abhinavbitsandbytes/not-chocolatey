class TabbedInterface {
    constructor(tabsSelector) {
        this.tabs = document.querySelectorAll(tabsSelector);
        this.contents = document.querySelectorAll('.content');

        this.init();
    }

    // Initialize tab event listeners
    init = () => {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', this.handleTabClick);
        });
    }

    // Handle tab click
    handleTabClick = (e) => {
        // Get the target content ID
        const targetId = e.target.dataset.target;   // same as  const targetId = tab.getAttribute('data-target');
        console.log(targetId)
        // Remove active class from all tabs and contents
        this.tabs.forEach(tab => tab.classList.remove('active'));
        this.contents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab and the corresponding content
        e.target.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    }
}

// Initialize the tabbed interface
const tabbedInterface = new TabbedInterface('.tab');
