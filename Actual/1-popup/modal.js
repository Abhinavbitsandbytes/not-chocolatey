class Modal {
    constructor(modalId, openBtnId) {
      this.modal = document.getElementById(modalId);
      this.openBtn = document.getElementById(openBtnId);
      this.closeBtn = this.modal.querySelector('.close-btn');
      this.init();
    }
  
    // Initialize modal event listeners
    init = () => {
      // Open modal
      this.openBtn.addEventListener('click', this.openModal);
  
      // Close modal
      this.closeBtn.addEventListener('click', this.closeModal);
  
      // Close modal when clicking outside the content
      this.modal.addEventListener('click', this.outsideClick);
    }
  
    // Open the modal
    openModal = () => {
      this.modal.classList.add('active');
    }
  
    // Close the modal
    closeModal = () => {
      this.modal.classList.remove('active');
    }
  
    // Close if clicking outside modal content
    outsideClick = (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    }
  }
  
  // Initialize the modal component
  const modalComponent = new Modal('modal', 'openModalBtn');
  