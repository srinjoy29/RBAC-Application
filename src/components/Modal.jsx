import { Fragment } from 'react' // Import Fragment for wrapping multiple elements
import { Dialog, Transition } from '@headlessui/react' // Import Dialog and Transition components for modal functionality

// Define the Modal component
function Modal({ isOpen, onClose, title, children }) {
  return (
    // Wrap the modal in a Transition component for animations
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div" // Dialog is treated as a div element
        className="fixed inset-0 z-10 overflow-y-auto" // Fixed position with z-index for modal layering
        onClose={onClose} // Trigger the onClose callback when the modal is closed
      >
        <div className="min-h-screen px-4 text-center">
          {/* Overlay with fade animation */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" // Enter animation duration
            enterFrom="opacity-0" // Start with 0 opacity
            enterTo="opacity-100" // Fade to full opacity
            leave="ease-in duration-200" // Exit animation duration
            leaveFrom="opacity-100" // Start with full opacity
            leaveTo="opacity-0" // Fade out to 0 opacity
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          {/* Invisible spacer to vertically center the modal */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203; {/* Zero-width space character */}
          </span>

          {/* Modal content with scale animation */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" // Enter animation duration
            enterFrom="opacity-0 scale-95" // Start with low opacity and reduced scale
            enterTo="opacity-100 scale-100" // Transition to full opacity and scale
            leave="ease-in duration-200" // Exit animation duration
            leaveFrom="opacity-100 scale-100" // Start with full opacity and scale
            leaveTo="opacity-0 scale-95" // Shrink and fade out
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {/* Modal title */}
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </Dialog.Title>
              {/* Modal body content */}
              <div className="mt-4">{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

// Export the Modal component
export default Modal
